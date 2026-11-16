"""Binary HMM: log messages, Beta quadrature, and independent integrated path sums.

States are ordered 0,1; transition rows are origin states. No initial transition.
Finite enumeration is limited to 12 observations and three future steps.
"""
from __future__ import annotations

from itertools import product
import numpy as np
from scipy.optimize import brentq
from scipy.special import betaln, logsumexp, roots_jacobi
from scipy.stats import beta


def _probability(value, name: str) -> float:
    if isinstance(value, (bool, str)) or np.ndim(value) != 0:
        raise ValueError(f'{name} must be a finite scalar probability')
    value = float(value)
    if not np.isfinite(value) or not 0 <= value <= 1:
        raise ValueError(f'{name} must be in [0,1]')
    return value


def _inputs(observations, initial1, emission1) -> tuple:
    y = np.asarray(observations)
    if y.ndim != 1 or y.dtype.kind not in 'iuf' or len(y) > 12:
        raise ValueError('observations must be a numeric binary vector of length 0..12')
    if not np.all(np.isfinite(y)) or not np.all((y == 0) | (y == 1)):
        raise ValueError('observations must be binary integers')
    e = np.asarray(emission1)
    if e.shape != (2,):
        raise ValueError('emission1 must have exactly two entries')
    e = np.array([_probability(v, 'emission1') for v in e])
    return y.astype(int), _probability(initial1, 'initial1'), e


def _prior(value) -> np.ndarray:
    a = np.asarray(value, dtype=float)
    if a.shape != (2,) or not np.all(np.isfinite(a)) or np.any(a <= 0):
        raise ValueError('Beta shapes must be a positive finite pair')
    return a


def _log(a) -> np.ndarray:
    a = np.asarray(a, dtype=float)
    out = np.full_like(a, -np.inf)
    np.log(a, out=out, where=a > 0)
    return out


def _messages(y, rho, e, a, b) -> dict:
    transition = np.array([[1-a, a], [b, 1-b]])
    lt = _log(transition)
    emissions = np.where(y[:, None] == 1, e, 1-e)
    le = _log(emissions)
    forward = np.empty((len(y), 2))
    prefix = np.empty(len(y))
    prev = _log([1-rho, rho])
    for t in range(len(y)):
        current = (prev if t == 0 else logsumexp(prev[:, None]+lt, axis=0))+le[t]
        norm = logsumexp(current)
        if not np.isfinite(norm):
            return dict(status='impossible_evidence', message='Evidence has zero probability', impossibleAt=t+1)
        prefix[t] = norm+(prefix[t-1] if t else 0)
        forward[t] = current-norm
        prev = forward[t]
    backward = np.zeros((len(y), 2))
    for t in range(len(y)-2, -1, -1):
        backward[t] = logsumexp(lt+le[t+1][None, :]+backward[t+1][None, :], axis=1)
        backward[t] -= logsumexp(backward[t])
    smooth_log = forward+backward
    smoother = np.exp(smooth_log-logsumexp(smooth_log, axis=1)[:, None])
    final = np.exp(forward[-1]) if len(y) else np.array([1-rho, rho])
    predicted = final @ transition if len(y) else final
    return dict(status='ok', prefix_log_evidence=prefix, forward=np.exp(forward),
                smoother=smoother, final=final, transition=transition,
                next_state1=float(predicted[1]), next_observation1=float(predicted @ e))


def fixed_hmm(observations, *, initial1, p01, p10, emission1) -> dict:
    """JSON-ready Python reference for ExtensionHMM.fixed; failures are structured."""
    try:
        y, rho, e = _inputs(observations, initial1, emission1)
        a, b = _probability(p01, 'p01'), _probability(p10, 'p10')
    except (ValueError, TypeError, OverflowError) as exc:
        return dict(status='invalid_input', message=str(exc), impossibleAt=None)
    m = _messages(y, rho, e, a, b)
    if m['status'] != 'ok':
        return m
    return dict(status='ok', observations=y.tolist(),
                logEvidence=float(m['prefix_log_evidence'][-1]) if len(y) else 0.,
                filtered1=m['forward'][:, 1].tolist(), smoothed1=m['smoother'][:, 1].tolist(),
                nextState1=m['next_state1'], nextObservation1=m['next_observation1'],
                informationSets=dict(filter='each observed prefix', smoother='full supplied sequence',
                                     forecast='full supplied sequence; fixed parameters'))


def integrate_hmm(spec: dict, *, order: int) -> dict:
    """Integrate fixed-parameter messages using prefix-specific Beta node weights."""
    k, prior = spec['known_quantities'], spec['priors']
    y, rho, e = _inputs(spec['data']['observations'], k['initial1'], k['emission1'])
    if isinstance(order, bool) or not isinstance(order, int) or order < 1:
        raise ValueError('order must be a positive integer')
    priors = [_prior(prior[key]) for key in ('prior01', 'prior10')]
    grids = []
    for aa, bb in priors:
        x, w = roots_jacobi(order, bb-1, aa-1)
        grids.append(((x+1)/2, w/w.sum()))
    nodes = np.array(list(product(grids[0][0], grids[1][0])))
    v = np.outer(grids[0][1], grids[1][1]).ravel()
    messages = [_messages(y, rho, e, a, b) for a, b in nodes]
    bad = [m for m in messages if m['status'] != 'ok']
    if bad:
        # Interior transitions share support for fixed emissions and initial law.
        raise ValueError(f"Impossible evidence at time {bad[0]['impossibleAt']}")
    prefix_l = np.array([m['prefix_log_evidence'] for m in messages])
    prefix_logmass = np.log(v)[:, None]+prefix_l
    prefix_weights = np.exp(prefix_logmass-logsumexp(prefix_logmass, axis=0))
    weights = prefix_weights[:, -1] if len(y) else v
    conditional_filters = np.array([m['forward'][:, 1] for m in messages])
    conditional_smoothers = np.array([m['smoother'][:, 1] for m in messages])
    return dict(kind='quadrature', y=y, initial1=rho, emission1=e, nodes=nodes,
                prior_weights=v, prefix_weights=prefix_weights, weights=weights,
                filtered1=np.sum(prefix_weights*conditional_filters, axis=0),
                smoothed1=weights @ conditional_smoothers,
                conditional_filters=conditional_filters,
                final=np.array([m['final'] for m in messages]),
                transitions=np.array([m['transition'] for m in messages]),
                transition_mean=weights @ nodes, transition_second=weights @ (nodes**2),
                log_evidence=float(logsumexp(prefix_logmass[:, -1])) if len(y) else 0.,
                nextState1=float(weights @ np.array([m['next_state1'] for m in messages])),
                nextObservation1=float(weights @ np.array([m['next_observation1'] for m in messages])))


def collapse_paths(observations, *, initial1, emission1, prior01, prior10) -> dict:
    """Independent path enumeration, with analytic Beta transition integration."""
    y, rho, e = _inputs(observations, initial1, emission1)
    a, b = _prior(prior01), _prior(prior10)
    paths = np.array(list(product((0, 1), repeat=len(y))), dtype=int).reshape(2**len(y), len(y))
    counts = np.zeros((len(paths), 4), dtype=int)  # 00,01,10,11
    for t in range(len(y)-1):
        for i, pair in enumerate(((0, 0), (0, 1), (1, 0), (1, 1))):
            counts[:, i] += (paths[:, t] == pair[0]) & (paths[:, t+1] == pair[1])
    pa = np.column_stack([a[0]+counts[:, 1], a[1]+counts[:, 0]])
    pb = np.column_stack([b[0]+counts[:, 2], b[1]+counts[:, 3]])
    logmass = betaln(pa[:, 0], pa[:, 1])-betaln(*a)+betaln(pb[:, 0], pb[:, 1])-betaln(*b)
    if len(y):
        logmass += _log(np.where(paths[:, 0] == 1, rho, 1-rho))
        for t, value in enumerate(y):
            logmass += _log(e[paths[:, t]] if value else 1-e[paths[:, t]])
    norm = logsumexp(logmass)
    if not np.isfinite(norm):
        raise ValueError('Impossible evidence: no supported path')
    w = np.exp(logmass-norm)
    means = np.column_stack([pa[:, 0]/pa.sum(axis=1), pb[:, 0]/pb.sum(axis=1)])
    seconds = np.column_stack([pa[:, 0]*(pa[:, 0]+1)/(pa.sum(axis=1)*(pa.sum(axis=1)+1)),
                               pb[:, 0]*(pb[:, 0]+1)/(pb.sum(axis=1)*(pb.sum(axis=1)+1))])
    return dict(kind='collapsed', y=y, initial1=rho, emission1=e, paths=paths, counts=counts,
                posterior01=pa, posterior10=pb, weights=w, log_evidence=float(norm),
                smoothed1=w @ paths, transition_mean=w @ means, transition_second=w @ seconds,
                map_path=paths[np.argmax(w)], map_probability=float(w.max()))


def transition_intervals(fit: dict) -> list:
    """Central 90% intervals from continuous Beta-mixture CDFs (collapsed fit)."""
    result = []
    for key in ('posterior01', 'posterior10'):
        shapes = fit[key]
        result.append([brentq(lambda x: fit['weights'] @ beta.cdf(x, shapes[:, 0], shapes[:, 1])-p,
                              0, 1, xtol=1e-9) for p in (.05, .95)])
    return result


def _horizon(horizon: int) -> None:
    if isinstance(horizon, bool) or not isinstance(horizon, int) or not 1 <= horizon <= 3:
        raise ValueError('forecast horizon must be an integer in 1..3')


def joint_forecast(fit: dict, *, horizon: int = 3) -> dict:
    """All future alert patterns; shared transitions integrated over full posterior."""
    _horizon(horizon)
    patterns = np.array(list(product((0, 1), repeat=horizon)))
    e = fit['emission1']
    if fit['kind'] == 'quadrature':
        probabilities = []
        for pattern in patterns:
            v = fit['final'].copy()
            for step, value in enumerate(pattern):
                if len(fit['y']) or step:
                    v = np.einsum('qi,qij->qj', v, fit['transitions'])
                v *= e if value else 1-e
            probabilities.append(float(fit['weights'] @ v.sum(axis=1)))
        return dict(patterns=patterns, probabilities=np.array(probabilities))
    # Independent future path expansion. Beta-ratio moments update each observed path.
    probabilities = np.zeros(len(patterns))
    for future in product((0, 1), repeat=horizon):
        counts = np.zeros((len(fit['weights']), 4), dtype=int)
        factor = np.ones(len(fit['weights']))
        if len(fit['y']):
            previous = fit['paths'][:, -1]
        else:
            previous = None
        for state in future:
            if previous is None:
                factor *= fit['initial1'] if state else 1-fit['initial1']
            else:
                for i, (origin, dest) in enumerate(((0, 0), (0, 1), (1, 0), (1, 1))):
                    counts[:, i] += (previous == origin) & (state == dest)
            previous = np.full(len(factor), state)
        pa, pb = fit['posterior01'], fit['posterior10']
        factor *= np.exp(betaln(pa[:, 0]+counts[:, 1], pa[:, 1]+counts[:, 0])-betaln(pa[:, 0], pa[:, 1])
                         +betaln(pb[:, 0]+counts[:, 2], pb[:, 1]+counts[:, 3])-betaln(pb[:, 0], pb[:, 1]))
        mass = fit['weights'] @ factor
        emissions = e[np.array(future)]
        probabilities += mass*np.prod(np.where(patterns == 1, emissions, 1-emissions), axis=1)
    return dict(patterns=patterns, probabilities=probabilities)


def sample_forecasts(fit: dict, *, rng: np.random.Generator, size: int, horizon: int = 3) -> dict:
    """IID collapsed posterior paths/parameters; retain parameters across future steps."""
    _horizon(horizon)
    if fit['kind'] != 'collapsed':
        raise ValueError('sample_forecasts requires a collapsed path fit')
    if isinstance(size, bool) or not isinstance(size, int) or size < 1:
        raise ValueError('size must be a positive integer')
    i = rng.choice(len(fit['weights']), size=size, p=fit['weights'])
    pa, pb = fit['posterior01'][i], fit['posterior10'][i]
    a, b = rng.beta(pa[:, 0], pa[:, 1]), rng.beta(pb[:, 0], pb[:, 1])
    states, alerts = np.empty((size, horizon), int), np.empty((size, horizon), int)
    prev = fit['paths'][i, -1] if len(fit['y']) else None
    for step in range(horizon):
        chance = fit['initial1'] if prev is None else np.where(prev == 0, a, 1-b)
        states[:, step] = rng.random(size) < chance
        alerts[:, step] = rng.random(size) < fit['emission1'][states[:, step]]
        prev = states[:, step]
    return dict(path_index=i, paths=fit['paths'][i], p01=a, p10=b, states=states, alerts=alerts)
