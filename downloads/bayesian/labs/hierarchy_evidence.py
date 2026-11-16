"""Explicit, source-bound A09 record/replay. Writers are called only by the CLI.

Cache hits never imply fresh sampling. A changed dependency, seed, version,
model, array, or fit manifest is an error. No automatic fitting in compute().
"""
from datetime import datetime, timezone
from hashlib import sha256
import contextlib
import importlib.metadata
import json
import logging
import os
from pathlib import Path
import platform
import resource
import shutil
import time
import uuid
from threadpoolctl import threadpool_info

from common import ROOT, np
from extension_common import source_hashes
from hierarchy_common import (DEFAULT_SEED, FIT_IDS, PRIOR, SAMPLER, build_model,
                              make_data, summarize_fit, valid_seed)

STEM = "23_multivariate_hierarchy"
EXTRA_INPUTS = ("labs/hierarchy_common.py", "labs/hierarchy_evidence.py",
                "artifacts/expansion/hierarchy_record.py")
POINTER = ROOT / "artifacts/expansion/hierarchy_current.json"
POSTERIOR_KEYS = {"alpha", "beta_within", "beta_between", "tau", "rho", "p_rho", "sigma", "b",
                  "existing_logmean", "new_logmean", "new_logvariance"}
STAT_KEYS = {"energy", "diverging", "reached_max_treedepth", "tree_depth", "n_steps",
             "acceptance_rate", "step_size", "lp"}


def digest(path: Path) -> str:
    return sha256(path.read_bytes()).hexdigest()


def write_json(path: Path, value: dict) -> None:
    path.write_text(json.dumps(value, indent=2, allow_nan=False)+"\n")


def versions() -> dict:
    return {name: importlib.metadata.version(name) for name in
            ("numpy", "scipy", "pymc", "pytensor", "arviz", "matplotlib")}


def binding(seed: int) -> dict:
    return dict(seed=valid_seed(seed), source_hashes=source_hashes(STEM, EXTRA_INPUTS),
                versions=versions(), python=platform.python_version(), prior=PRIOR, initial_sampler=SAMPLER)


def relative(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def data_hash(data) -> str:
    hasher = sha256()
    for value in (data.group, data.within, data.between, data.response, data.counts):
        hasher.update(str(value.shape).encode())
        hasher.update(str(value.dtype).encode())
        hasher.update(value.tobytes())
    return hasher.hexdigest()


def previous_attempts(directory: Path) -> list[dict]:
    """Bind earlier successes, failures and interruptions without inventing costs."""
    attempts = []
    for folder in sorted(directory.parent.iterdir()):
        if folder == directory or not folder.is_dir():
            continue
        records = sorted(p for p in folder.rglob("*") if p.is_file() and "sources" not in p.parts)
        completed = [json.loads(p.read_text()) for p in folder.glob("*/fit.json")]
        terminal = next((folder / name for name in ("manifest.json", "failure.json", "interruption.json")
                         if (folder / name).exists()), None)
        state = json.loads(terminal.read_text()) if terminal else {}
        attempts.append(dict(directory=relative(folder), status=state.get("status", "incomplete"),
                             complete_fits=len(completed),
                             measured_completed_fit_seconds=sum(f["seconds"] for f in completed),
                             terminal_record=relative(terminal) if terminal else None,
                             evidence_hashes={relative(p): digest(p) for p in records},
                             cost_caution="Completed-fit seconds exclude unfinished work; terminal records report any other measured bounds"))
    return attempts


def _owned_path(path: str) -> Path:
    candidate = (ROOT / path).resolve()
    allowed = (ROOT / "artifacts/expansion/hierarchy_runs").resolve()
    if not candidate.is_relative_to(allowed):
        raise ValueError("Hierarchy evidence must remain inside its own run directory")
    return candidate


def load_evidence(seed: int = DEFAULT_SEED, pointer: Path = POINTER) -> tuple[dict, list[dict]]:
    """Read-only replay, validating current dependencies and all retained fit bytes."""
    if not pointer.exists():
        raise FileNotFoundError("No A09 recording. Run .venv/bin/python -B artifacts/expansion/hierarchy_record.py")
    index = json.loads(pointer.read_text())
    expected = binding(seed)
    if index["binding"] != expected:
        raise ValueError("Stale A09 recording: source, seed, model, sampler or version changed; make a new full recording")
    run_manifest = _owned_path(index["manifest"])
    if digest(run_manifest) != index["manifest_sha256"]:
        raise ValueError("Corrupt A09 run manifest")
    manifest = json.loads(run_manifest.read_text())
    if manifest["binding"] != expected or manifest["status"] != "completed" or not manifest["actual_sampling"]:
        raise ValueError("A09 record lacks matching completed actual sampling provenance")
    for attempt in manifest["previous_attempts"]:
        for path, expected_hash in attempt["evidence_hashes"].items():
            if digest(_owned_path(path)) != expected_hash:
                raise ValueError("Corrupt A09 earlier-attempt evidence")
    for path, expected_hash in manifest["snapshots"].items():
        if digest(_owned_path(path)) != expected_hash:
            raise ValueError("Corrupt A09 source snapshot")
    fits = []
    for entry in manifest["fits"]:
        metadata_path = _owned_path(entry["metadata"])
        if digest(metadata_path) != entry["sha256"]:
            raise ValueError("Corrupt A09 fit metadata")
        metadata = json.loads(metadata_path.read_text())
        if metadata["status"] != "completed" or metadata["binding"] != expected:
            raise ValueError("Incomplete or mismatched A09 fit")
        if metadata["data_sha256"] != data_hash(make_data(metadata["regime"], seed)):
            raise ValueError("A09 data mismatch")
        for name in ("arrays", "log"):
            if digest(_owned_path(metadata[name])) != metadata[name+"_sha256"]:
                raise ValueError(f"Corrupt A09 {name}")
        with np.load(_owned_path(metadata["arrays"]), allow_pickle=False) as archive:
            arrays = {name: archive[name] for name in archive.files}
        shapes = {name: dict(shape=list(a.shape), dtype=str(a.dtype)) for name, a in arrays.items()}
        if shapes != metadata["array_inventory"]:
            raise ValueError("A09 array shape/dtype mismatch")
        for prefix, length in (("posterior", metadata["sampler"]["draws"]), ("stats", metadata["sampler"]["draws"]),
                               ("warmup_posterior", metadata["sampler"]["tune"]), ("warmup_stats", metadata["sampler"]["tune"])):
            required = STAT_KEYS if prefix.endswith("stats") else POSTERIOR_KEYS
            if metadata["coordinates"] == "noncentered" and not prefix.endswith("stats"):
                required = required | {"z"}
            for key in required:
                arr = arrays[f"{prefix}__{key}"]
                if arr.shape[:2] != (metadata["sampler"]["chains"], length) or not np.all(np.isfinite(arr)):
                    raise ValueError("A09 array missing draws/chains or contains nonfinite values")
        posterior = {k.removeprefix("posterior__"): a for k, a in arrays.items() if k.startswith("posterior__")}
        stats = {k.removeprefix("stats__"): a for k, a in arrays.items() if k.startswith("stats__")}
        diagnostics = summarize_fit(posterior, stats)
        # Recompute from raw chains; a historical green flag is insufficient.
        if diagnostics != metadata["diagnostics"]:
            raise ValueError("Recomputed diagnostics disagree with A09 recording")
        fits.append(dict(metadata=metadata, posterior=posterior, stats=stats, diagnostics=diagnostics))
    initials = [f["metadata"]["fit_id"] for f in fits if f["metadata"]["phase"] == "initial"]
    if initials != list(FIT_IDS):
        raise ValueError("A09 record must contain all four initial fits in declared order")
    expected_repairs = [f["metadata"]["fit_id"] for f in fits[:4] if not f["diagnostics"]["screen"]["passed"]]
    repairs = [f["metadata"]["fit_id"] for f in fits if f["metadata"]["phase"] == "repair"]
    if repairs != expected_repairs or len(fits) != 4+len(repairs):
        raise ValueError("A09 recording lacks the declared repair inventory")
    return manifest, fits


def _fit(directory: Path, fit_id: str, seed: int, sampler: dict, phase: str,
         run_binding: dict, diagnosis: str) -> dict:
    import pymc as pm
    regime, coordinates = fit_id.split("_", 1)
    destination = directory / (fit_id + ("_repair" if phase == "repair" else ""))
    destination.mkdir()
    data = make_data(regime, run_binding["seed"])
    metadata = dict(fit_id=fit_id, phase=phase, regime=regime, coordinates=coordinates,
                    seed=seed, sampler=sampler, binding=run_binding, data_sha256=data_hash(data),
                    n=len(data.response), groups=len(data.counts), counts=data.counts.tolist(),
                    started_utc=datetime.now(timezone.utc).isoformat(),
                    diagnosis=diagnosis, status="started")
    write_json(destination / "start.json", metadata)
    started = time.perf_counter()
    cpu_started = time.process_time()
    log_path = destination / "sampling.log"
    try:
        with log_path.open("w") as log, contextlib.redirect_stdout(log), contextlib.redirect_stderr(log):
            logger = logging.getLogger("pymc")
            handler = logging.StreamHandler(log)
            logger.addHandler(handler)
            build_start = time.perf_counter()
            model = build_model(data, coordinates)
            build_seconds = time.perf_counter()-build_start
            sample_start = time.perf_counter()
            with model:
                trace = pm.sample(draws=sampler["draws"], tune=sampler["tune"], chains=sampler["chains"],
                                  cores=1, blas_cores=1, random_seed=seed, target_accept=sampler["target_accept"],
                                  nuts={"max_treedepth": sampler["max_treedepth"]}, progressbar=False,
                                  discard_tuned_samples=False, idata_kwargs={"log_likelihood": False})
            sample_seconds = time.perf_counter()-sample_start
            arrays = {}
            for group_name in ("posterior", "sample_stats", "warmup_posterior", "warmup_sample_stats"):
                group = getattr(trace, group_name)
                prefix = group_name.replace("sample_stats", "stats")
                keys = STAT_KEYS if prefix.endswith("stats") else set(group.data_vars)
                for name in keys:
                    arrays[prefix+"__"+name] = group[name].values
            posterior = {k.removeprefix("posterior__"): a for k, a in arrays.items() if k.startswith("posterior__")}
            stats = {k.removeprefix("stats__"): a for k, a in arrays.items() if k.startswith("stats__")}
            diagnostics = summarize_fit(posterior, stats)
            np.savez_compressed(destination / "draws.npz", **arrays)
            logger.removeHandler(handler)
        metadata.update(status="completed", actual_sampling=True,
                        finished_utc=datetime.now(timezone.utc).isoformat(),
                        build_seconds=build_seconds, sample_call_seconds=sample_seconds,
                        sampler_reported_seconds=float(trace.posterior.attrs["sampling_time"]),
                        seconds=time.perf_counter()-started,
                        cpu_seconds=time.process_time()-cpu_started,
                        process_peak_rss_bytes=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss*1024,
                        array_inventory={name: dict(shape=list(a.shape), dtype=str(a.dtype)) for name, a in arrays.items()},
                        arrays=relative(destination / "draws.npz"), arrays_sha256=digest(destination / "draws.npz"),
                        retained_bytes=(destination / "draws.npz").stat().st_size,
                        log=relative(log_path), log_sha256=digest(log_path), diagnostics=diagnostics)
        write_json(destination / "fit.json", metadata)
    except Exception as error:
        # This writer preserves the failed attempt and propagates it; it never returns cached success.
        metadata.update(status="failed", seconds=time.perf_counter()-started,
                        error_type=type(error).__name__, error=str(error))
        write_json(destination / "failure.json", metadata)
        raise
    return dict(metadata=relative(destination / "fit.json"), sha256=digest(destination / "fit.json"))


def record(seed: int = DEFAULT_SEED) -> Path:
    """Execute all four initial fits, plus one prespecified repair per failing fit.

    This is deliberately expensive and explicit. It never overwrites run history.
    A failed diagnostic is data, not an exception; numerical/runtime failure is.
    """
    start = time.perf_counter()
    cpu_start = time.process_time()
    run_binding = binding(seed)
    execution_id = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")+"_"+uuid.uuid4().hex[:8]
    directory = ROOT / "artifacts/expansion/hierarchy_runs" / execution_id
    directory.mkdir(parents=True)
    snapshots = {}
    for path, expected in run_binding["source_hashes"].items():
        dest = directory / "sources" / path
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(ROOT / path, dest)
        if digest(dest) != expected:
            raise RuntimeError("Source changed while recording freeze")
        snapshots[relative(dest)] = expected
    manifest = dict(schema_version=1, execution_id=execution_id, binding=run_binding, snapshots=snapshots,
                    status="started", actual_sampling=True, started_utc=datetime.now(timezone.utc).isoformat(),
                    hardware=dict(platform=platform.platform(), cpu=platform.processor(), logical_cpus=os.cpu_count(),
                                  cpuinfo=next((line.split(":", 1)[1].strip() for line in Path("/proc/cpuinfo").read_text().splitlines()
                                                if line.startswith("model name")), "unknown"),
                                  memory=Path("/proc/meminfo").read_text().splitlines()[0],
                                  chain_cores=1, blas_cores=1,
                                  thread_environment={name: os.environ.get(name) for name in
                                      ("OPENBLAS_NUM_THREADS", "OMP_NUM_THREADS", "MKL_NUM_THREADS", "BLIS_NUM_THREADS", "NUMEXPR_NUM_THREADS")},
                                  actual_thread_pools=threadpool_info()),
                    initial_fit_order=list(FIT_IDS), fits=[],
                    previous_attempts=previous_attempts(directory),
                    repair_policy="For each failing initial screen: same target/coordinates, target_accept .99, 2000 warmup, 2000 retained, four chains, seed initial+10000; retain initial. No seed search.",
                    numerical_policy="Rhat<1.01, bulk/tail ESS>400, BFMI>.3, zero divergences/depth hits, estimand mean MCSE<=.02 except rho<=.03; screens are not proofs",
                    limitations=["No human review; synthetic data; one generated depot population, not a simulation calibration study"])
    write_json(directory / "freeze.json", manifest)
    try:
        for i, fit_id in enumerate(FIT_IDS):
            print(f"Recording {fit_id}: four chains, 1000+1000 per chain", flush=True)
            entry = _fit(directory, fit_id, seed+1000*(i+1), SAMPLER, "initial", run_binding,
                         "Prospective matched-target coordinate comparison; no seed selected for divergence")
            manifest["fits"].append(entry)
            write_json(directory / "progress.json", manifest)
        for i, entry in enumerate(list(manifest["fits"])):
            first = json.loads((ROOT / entry["metadata"]).read_text())
            if not first["diagnostics"]["screen"]["passed"]:
                print(f"Recording repair for {first['fit_id']}; observed screen: {first['diagnostics']['screen']}", flush=True)
                sampler = {**SAMPLER, "tune": 2000, "draws": 2000, "target_accept": .99}
                repaired = _fit(directory, first["fit_id"], first["seed"]+10000, sampler, "repair", run_binding,
                                "Initial numerical screen failed; increase integration accuracy and simulation length, retaining the exact prior and likelihood")
                manifest["fits"].append(repaired)
                write_json(directory / "progress.json", manifest)
        if binding(seed) != run_binding:
            raise RuntimeError("A09 source/input changed during recording; reject replay")
        manifest.update(status="completed", finished_utc=datetime.now(timezone.utc).isoformat(),
                        seconds=time.perf_counter()-start,
                        cpu_seconds=time.process_time()-cpu_start,
                        process_peak_rss_bytes=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss*1024,
                        retained_fit_bytes=sum((ROOT / json.loads((ROOT / e["metadata"]).read_text())["arrays"]).stat().st_size for e in manifest["fits"]))
        write_json(directory / "manifest.json", manifest)
        write_json(POINTER, dict(binding=run_binding, manifest=relative(directory / "manifest.json"),
                                 manifest_sha256=digest(directory / "manifest.json")))
    except Exception as error:
        manifest.update(status="failed", seconds=time.perf_counter()-start,
                        error_type=type(error).__name__, error=str(error))
        write_json(directory / "failure.json", manifest)
        raise
    return directory
