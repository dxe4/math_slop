"""C03 acquisition custodian. Only this explicit CLI opens quarantined outcomes.

No network or writes on import. Default acquisition uses the official UCI link;
--offline rederives and compares byte hashes from the immutable cached archive.
No concentration values or final-site statistics are logged.
"""
from __future__ import annotations
import argparse
import csv
from datetime import datetime, timezone
import hashlib
import io
import json
from pathlib import Path, PurePosixPath
import re
import time
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
CASE = ROOT / 'plans/expansion_implementation/case'
RAW = ROOT / 'artifacts/raw/beijing'
REF = ROOT / 'artifacts/reference/c03/data'
SEALED = ROOT / '.private/evaluation/c03'
SOURCE = 'https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data'
URL = 'https://archive.ics.uci.edu/static/public/501/beijing+multi+site+air+quality+data.zip'
HEADER = ['No','year','month','day','hour','PM2.5','PM10','SO2','NO2','CO','O3','TEMP','PRES','DEWP','RAIN','wd','WSPM','station']
COLUMNS = ['station','date','n_hours','n_pm25','n_wspm','n_pair','pm25_ug_m3','wspm_m_s','eligible_18','eligible_24','split']


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def json_bytes(value: dict) -> bytes:
    return (json.dumps(value, indent=2, allow_nan=False) + '\n').encode()


def immutable(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        if path.read_bytes() != data:
            raise ValueError(f'Refusing changed immutable artifact: {path.relative_to(ROOT)}')
        return
    with path.open('xb') as stream:
        stream.write(data)
    path.chmod(0o444)


def download(url: str, label: str) -> tuple[bytes, dict]:
    """Bounded retries, record each failure; restrict redirect destination to authority."""
    for attempt in range(1, 4):
        started = time.perf_counter()
        meta = dict(requested_url=url, attempt=attempt, retrieved_at=datetime.now(timezone.utc).isoformat())
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent':'C03-course-acquisition/1'}), timeout=30) as response:
                resolved = response.url
                if urllib.request.urlparse(resolved).hostname not in {'archive.ics.uci.edu','creativecommons.org'}:
                    raise ValueError('Unexpected redirect authority')
                data = response.read(25_000_001)
                if len(data) > 25_000_000:
                    raise ValueError('Compressed download bound exceeded')
                meta.update(resolved_url=resolved, response_headers=dict(response.headers), bytes=len(data), sha256=digest(data), status='downloaded')
        except (OSError, ValueError) as exc:
            meta.update(status='failed', error_type=type(exc).__name__, error=str(exc))
            meta['seconds'] = time.perf_counter()-started
            immutable(RAW / f'{label}_attempt{attempt}_{time.time_ns()}.json', json_bytes(meta))
            if attempt == 3:
                raise
            continue
        meta['seconds'] = time.perf_counter()-started
        immutable(RAW / f'{label}_attempt{attempt}_{time.time_ns()}.json', json_bytes(meta))
        return data, meta
    raise RuntimeError('Unreachable')


def validate_zip(data: bytes) -> tuple[zipfile.ZipFile, list[dict]]:
    archive = zipfile.ZipFile(io.BytesIO(data))
    if sum(m.file_size for m in archive.infolist()) > 250_000_000:
        archive.close()
        raise ValueError('Uncompressed bound exceeded')
    inventory = []
    for member in archive.infolist():
        name = PurePosixPath(member.filename)
        if name.is_absolute() or '..' in name.parts or '\\' in member.filename:
            archive.close()
            raise ValueError('Unsafe ZIP member')
        payload = archive.read(member)  # validates CRC; never extracts paths
        inventory.append(dict(name=member.filename, bytes=len(payload), sha256=digest(payload), crc32=member.CRC))
    return archive, inventory


def csv_bytes(frame, columns: list[str]) -> bytes:
    return frame.to_csv(index=False, columns=columns, na_rep='NA', float_format='%.12g', lineterminator='\n').encode()


def acquire(offline: bool = False) -> dict:
    import numpy as np
    import pandas as pd
    spec = json.loads((CASE / 'acquisition_v1.json').read_text())
    metadata_path = CASE / 'acquisition_manifest.json'
    if offline or metadata_path.exists():
        old = json.loads(metadata_path.read_text())
        outer_data = (ROOT / old['raw_path']).read_bytes()
        if digest(outer_data) != old['raw_sha256']:
            raise ValueError('Corrupt immutable raw cache')
        retrieval = old['retrieval']
    else:
        outer_data, retrieval = download(URL, 'archive')
        immutable(RAW / f'{digest(outer_data)}.zip', outer_data)
        for label, url in [('uci_record', SOURCE), ('license', 'https://creativecommons.org/licenses/by/4.0/legalcode.en')]:
            content, _ = download(url, label)
            immutable(RAW / f'{label}.html', content)
        record = (RAW / 'uci_record.html').read_text()
        if 'creativecommons.org/licenses/by/4.0' not in record or '10.24432/C5RK5G' not in record:
            raise ValueError('Official license/DOI could not be verified')
    raw_path = f'artifacts/raw/beijing/{digest(outer_data)}.zip'
    outer, outer_members = validate_zip(outer_data)
    with outer:
        inner_name = 'PRSA2017_Data_20130301-20170228.zip'
        inner_data = outer.read(inner_name)
    immutable(RAW / f'{digest(inner_data)}.zip', inner_data)
    inner, inner_members = validate_zip(inner_data)
    with inner:
        names = sorted(m['name'] for m in inner_members if m['name'].endswith('.csv') and not m['name'].startswith('__MACOSX'))
        sites = []
        for name in names:
            match = re.fullmatch(r'(?:[^/]+/)?PRSA_Data_([A-Za-z]+)_20130301-20170228.csv', name)
            if not match:
                raise ValueError('Unexpected CSV member name')
            sites.append(match[1])
        if len(sites) != 12 or len(set(sites)) != 12:
            raise ValueError('Expected twelve distinct site names')
        ordered = sorted(sites, key=lambda s: (digest(('C03/site-split/v1|' + s).encode()), s))
        final = ordered[:2]
        training = sorted(ordered[2:])
        split = dict(schema_version=1, spec_sha256=digest((CASE/'acquisition_v1.json').read_bytes()), raw_sha256=digest(outer_data), algorithm=spec['split_algorithm'], final_sites=final, training_sites=training, name_hashes={s:digest(('C03/site-split/v1|'+s).encode()) for s in sites})
        # Written before opening any concentrations; repeated offline runs must match.
        immutable(CASE/'split_v1.json', json_bytes(split))
        panels = []
        hourly_training = {}
        days = pd.date_range('2016-01-01','2016-12-31',freq='D')
        for site, name in zip(sites, names, strict=True):
            frame = pd.read_csv(io.BytesIO(inner.read(name)), na_values=['NA'], keep_default_na=False)
            if list(frame.columns) != HEADER or set(frame.station) != {site}:
                raise ValueError('Unexpected header or station metadata')
            if frame.duplicated(['year','month','day','hour']).any() or len(frame) != 35064:
                raise ValueError('Invalid hourly keys/count')
            if not frame.hour.between(0,23).all():
                raise ValueError('Invalid hour')
            selected = frame.loc[frame.year == 2016].copy()
            selected['date'] = pd.to_datetime(selected[['year','month','day']])
            for col in ['PM2.5','WSPM']:
                a = selected[col].dropna().to_numpy(float)
                if not np.isfinite(a).all() or (a < 0).any():
                    raise ValueError('Source support audit failed; values suppressed')
            pair = selected['PM2.5'].notna() & selected.WSPM.notna()
            group = selected.groupby('date')
            paired = selected.loc[pair].groupby('date')
            daily = pd.DataFrame(index=days)
            daily['station'] = site
            daily['date'] = days.strftime('%Y-%m-%d')
            daily['n_hours'] = group.size().reindex(days,fill_value=0)
            daily['n_pm25'] = group['PM2.5'].count().reindex(days,fill_value=0)
            daily['n_wspm'] = group.WSPM.count().reindex(days,fill_value=0)
            daily['n_pair'] = paired.size().reindex(days,fill_value=0)
            daily['pm25_ug_m3'] = paired['PM2.5'].mean().reindex(days)
            daily['wspm_m_s'] = paired.WSPM.mean().reindex(days)
            daily['eligible_18'] = (daily.n_pair >= 18).astype(int)
            daily['eligible_24'] = (daily.n_pair == 24).astype(int)
            daily['split'] = 'final' if site in final else 'training'
            panels.append(daily.reset_index(drop=True))
            if site in training:
                hourly_training[site] = dict(rows=len(selected), pm25_zero=int((selected['PM2.5']==0).sum()), wspm_zero=int((selected.WSPM==0).sum()), pm25_missing=int(selected['PM2.5'].isna().sum()), wspm_missing=int(selected.WSPM.isna().sum()))
    full = pd.concat(panels, ignore_index=True).sort_values(['station','date'])
    train = full.loc[full.split == 'training']
    cov = full.loc[full.split == 'final'].drop(columns=['pm25_ug_m3'])
    files = {REF/'training.csv':csv_bytes(train,COLUMNS), REF/'final_covariates.csv':csv_bytes(cov,[c for c in COLUMNS if c!='pm25_ug_m3']), SEALED/'beijing_2016_daily.csv':csv_bytes(full,COLUMNS), SEALED/'final_outcomes.csv':csv_bytes(full.loc[full.split=='final'],COLUMNS)}
    for path, payload in files.items():
        immutable(path,payload)
    immutable(REF/'hourly_training_audit.json',json_bytes(hourly_training))
    manifest = dict(schema_version=1, retrieval=retrieval, raw_path=raw_path, raw_sha256=digest(outer_data), inner_sha256=digest(inner_data), outer_members=outer_members, inner_members=inner_members, split_sha256=digest((CASE/'split_v1.json').read_bytes()), acquisition_spec_sha256=digest((CASE/'acquisition_v1.json').read_bytes()), script_sha256=digest(Path(__file__).read_bytes()), derived={str(p.relative_to(ROOT)):dict(sha256=digest(b), bytes=len(b)) for p,b in files.items()}, official_evidence={str(p.relative_to(ROOT)):digest(p.read_bytes()) for p in (RAW/'uci_record.html',RAW/'license.html')}, release_status='quarantined_until_predictions_sealed_and_scored', final_outcomes_inspected=False)
    if metadata_path.exists():
        if manifest != old:
            raise ValueError('Offline reproduction differs from original manifest')
    else:
        immutable(metadata_path,json_bytes(manifest))
    return dict(status='reproduced' if offline else 'acquired', training_sites=training, final_sites=final, final_outcomes_inspected=False, manifest=str(metadata_path.relative_to(ROOT)))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--offline',action='store_true')
    args = parser.parse_args()
    print(json.dumps(acquire(args.offline),indent=2))
