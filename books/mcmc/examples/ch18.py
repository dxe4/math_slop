"""Chapter 18: finite-state oracle and restartable random-walk Metropolis.

Run with: python examples/ch18.py
Only standard-library modules are used. Checkpoints are trusted local JSON files.
"""

from dataclasses import dataclass
import json
import math
import os
from pathlib import Path
import random
import tempfile
from typing import Callable


TARGET_ID = "standard-normal-v1"


def require(condition: bool, message: str) -> None:
    """Keep demonstration checks active even with Python optimization."""
    if not condition:
        raise AssertionError(message)


@dataclass(frozen=True)
class State:
    x: float
    logp: float


@dataclass(frozen=True)
class Info:
    accepted: bool
    proposal: float
    log_alpha: float
    density_evaluations: int


def log_normal(x: float) -> float:
    return -0.5 * x * x  # Additive constant cancels in MH.


def initialize(x: float, log_density: Callable[[float], float] = log_normal) -> State:
    logp = log_density(x)
    if not math.isfinite(logp):
        raise ValueError("initial position must have finite log density")
    return State(x, logp)


def step(state: State, rng: random.Random, scale: float,
         log_density: Callable[[float], float] = log_normal) -> tuple[State, Info]:
    if not math.isfinite(scale) or scale <= 0:
        raise ValueError("scale must be finite and positive")
    if not math.isfinite(state.x) or not math.isfinite(state.logp):
        raise ValueError("current state must have finite position and log density")
    proposed = state.x + rng.gauss(0.0, scale)
    if not math.isfinite(proposed):
        raise ArithmeticError("proposal is not finite")
    proposed_logp = log_density(proposed)
    if math.isnan(proposed_logp) or proposed_logp == math.inf:
        raise ArithmeticError("log density returned NaN or positive infinity")
    log_alpha = min(0.0, proposed_logp - state.logp)
    u = rng.random()  # Consume the same stream on every transition.
    accepted = log_alpha >= 0.0 or u < math.exp(log_alpha)
    new_state = State(proposed, proposed_logp) if accepted else state
    return new_state, Info(accepted, proposed, log_alpha, 1)


def advance(state: State, rng: random.Random, scale: float, n: int):
    positions = []
    accepted = 0
    evaluations = 0
    for _ in range(n):
        state, info = step(state, rng, scale)
        positions.append(state.x)  # Include repeats on rejection.
        accepted += info.accepted
        evaluations += info.density_evaluations
    return state, positions, accepted, evaluations


def _as_tuple(value):
    if isinstance(value, list):
        return tuple(_as_tuple(item) for item in value)
    return value


def save_checkpoint(path: Path, state: State, rng: random.Random,
                    scale: float, iteration: int) -> None:
    payload = {
        "schema": 1,
        "target": TARGET_ID,
        "scale": scale,
        "iteration": iteration,
        "state": {"x": state.x, "logp": state.logp},
        "rng_state": rng.getstate(),
        "phase": "sampling",
    }
    # Replace only after the complete JSON checkpoint has been flushed.
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=path.parent,
                                     prefix=path.name + ".", delete=False) as out:
        temp_path = Path(out.name)
        try:
            json.dump(payload, out, allow_nan=False)
            out.flush()
            os.fsync(out.fileno())
        except BaseException:
            temp_path.unlink(missing_ok=True)
            raise
    os.replace(temp_path, path)


def load_checkpoint(path: Path, expected_scale: float):
    payload = json.loads(path.read_text(encoding="utf-8"))
    if (payload["schema"] != 1 or payload["target"] != TARGET_ID
            or payload["scale"] != expected_scale or payload["phase"] != "sampling"):
        raise ValueError("checkpoint is incompatible with this run")
    state = State(**payload["state"])
    if not math.isfinite(state.logp) or state.logp != log_normal(state.x):
        raise ValueError("checkpoint has an inconsistent density cache")
    rng = random.Random()
    rng.setstate(_as_tuple(payload["rng_state"]))
    return state, rng, payload["iteration"]


def finite_oracle() -> None:
    pi = (1 / 2, 1 / 3, 1 / 6)
    p = [[0.0] * 3 for _ in range(3)]
    for i in range(3):
        for j in range(3):
            if j != i:
                p[i][j] = 0.5 * min(1.0, pi[j] / pi[i])
        p[i][i] = 1.0 - sum(p[i])
    residual = max(abs(sum(pi[i] * p[i][j] for i in range(3)) - pi[j])
                   for j in range(3))
    require(residual < 1e-15, "finite kernel is not invariant")
    require(all(abs(sum(row) - 1.0) < 1e-15 for row in p),
            "finite kernel has a nonstochastic row")
    print("three-state invariance residual:", f"{residual:.2g}")


def metamorphic_oracle() -> None:
    """Equivalent shifted/scaled targets must give matching MH decisions."""
    class FixedDraws:
        def __init__(self, proposal_increment: float, uniform: float):
            self.proposal_increment = proposal_increment
            self.uniform = uniform

        def gauss(self, mean: float, scale: float) -> float:
            return self.proposal_increment

        def random(self) -> float:
            return self.uniform

    def shifted_log_density(z: float) -> float:
        return log_normal(z - 2.0) + 7.0

    # Binary-exact coordinates keep this test about the kernel, not rounding.
    for increment, uniform, expected_accept in ((-0.5, 0.9, True),
                                                (0.25, 0.9, False)):
        original, info = step(initialize(0.5), FixedDraws(increment, uniform), 1.0)
        shifted, shifted_info = step(initialize(2.5, shifted_log_density),
                                    FixedDraws(increment, uniform), 1.0,
                                    shifted_log_density)
        require(info.accepted == shifted_info.accepted == expected_accept,
                "equivalent targets disagree on acceptance")
        require(info.log_alpha == shifted_info.log_alpha,
                "equivalent targets disagree on log acceptance")
        require(shifted.x == original.x + 2.0,
                "equivalent targets disagree on returned position")
        require(shifted.logp == original.logp + 7.0,
                "equivalent targets disagree on returned cache")
        require(info.density_evaluations == shifted_info.density_evaluations == 1,
                "unexpected target evaluation count")
    print("equivalent-target acceptance/rejection oracle: passed")


def restart_demo() -> None:
    seed, scale = 1818, 1.4
    full_rng = random.Random(seed)
    initial = initialize(0.0)
    full_final, full_draws, full_accepted, full_evals = advance(initial, full_rng, scale, 1000)

    split_rng = random.Random(seed)
    split_state, first, accepted1, evals1 = advance(initial, split_rng, scale, 600)
    with tempfile.TemporaryDirectory() as folder:
        checkpoint = Path(folder) / "chain.json"
        save_checkpoint(checkpoint, split_state, split_rng, scale, 600)
        restored_state, restored_rng, iteration = load_checkpoint(checkpoint, scale)
        require(iteration == 600, "checkpoint iteration mismatch")
        split_final, second, accepted2, evals2 = advance(restored_state, restored_rng, scale, 400)

    equal = first + second == full_draws and split_final == full_final
    require(equal and accepted1 + accepted2 == full_accepted,
            "checkpoint continuation differs from uninterrupted run")
    require(evals1 + evals2 == full_evals == 1000,
            "transition evaluation count mismatch")
    fresh_rng = random.Random(seed)
    _, wrong_tail, _, _ = advance(split_state, fresh_rng, scale, 400)
    require(wrong_tail != full_draws[600:], "negative restart control matched")
    print("checkpoint continuation equals uninterrupted chain:", equal)
    print("position-only restart equals uninterrupted tail:", wrong_tail == full_draws[600:])
    print("acceptance rate:", f"{full_accepted / 1000:.3f}")
    print("final position:", f"{full_final.x:.6f}")
    print("log-density calls per 1000-step run:", 1 + full_evals)


if __name__ == "__main__":
    finite_oracle()
    metamorphic_oracle()
    restart_demo()
