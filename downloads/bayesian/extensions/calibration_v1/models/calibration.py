"""Pure Gamma–Poisson calibration calculations; no RNG, plotting or filesystem I/O."""
from __future__ import annotations

from math import fsum
import numpy as np
from scipy.special import gammaln
from scipy.stats import gamma, norm, poisson, nbinom

METHODS = ('exact', 'direct_laplace', 'log_laplace')
GENERATORS = ('poisson', 'negative_binomial')


def _numeric(value, name: str, *, ndim: tuple = (0, 1)) -> np.ndarray:
    # Inspect objects before conversion: [True, 2] must not silently become [1, 2].
    objects = np.asarray(value, dtype=object)
    if any(isinstance(x, (bool, np.bool_)) or not isinstance(x, (int, float, np.integer, np.floating))
           for x in objects.flat):
        raise TypeError(f'{name} must contain real numbers, not bools or strings')
    result = np.asarray(value, dtype=float)
    if result.ndim not in ndim:
        raise ValueError(f'{name} has invalid dimensions')
    if not np.isfinite(result).all():
        raise ValueError(f'{name} must be finite')
    return result


def _scalar(value, name: str, low: float, high: float, *, integer=False, open_low=False) -> float:
    a = _numeric(value, name, ndim=(0,))
    x = float(a)
    if x > high or x < low or (open_low and x == low) or (integer and x != int(x)):
        raise ValueError(f'{name} outside allowed range')
    return int(x) if integer else x


def _counts(value, name: str, *, ndim=(0, 1), maximum=1_000_000) -> np.ndarray:
    a = _numeric(value, name, ndim=ndim)
    if np.any((a < 0) | (a > maximum) | (a != np.floor(a))):
        raise ValueError(f'{name} must contain bounded nonnegative integers')
    return a.astype(np.int64)


def _unbox(value):
    a = np.asarray(value)
    return a.item() if a.ndim == 0 else a


def _method(method: str) -> None:
    if not isinstance(method, str):
        raise TypeError('method must be a string')
    if method not in METHODS:
        raise ValueError('unknown interval method')


def posterior_parameters(total, n, *, prior_shape=2, prior_rate=1) -> dict:
    s = _counts(total, 'total')
    n = _scalar(n, 'n', 0, 10000, integer=True)
    a0 = _scalar(prior_shape, 'prior_shape', 0, 100, open_low=True)
    b0 = _scalar(prior_rate, 'prior_rate', 0, 1000, open_low=True)
    if n == 0 and np.any(s != 0):
        raise ValueError('n=0 requires total=0')
    return {'shape': _unbox(a0+s), 'rate': b0+n}


def interval_from_total(total, n, level, method, *, prior_shape=2, prior_rate=1) -> dict:
    _method(method)
    c = _scalar(level, 'level', .01, .99)
    p = posterior_parameters(total, n, prior_shape=prior_shape, prior_rate=prior_rate)
    a, b = np.asarray(p['shape']), p['rate']
    alpha = (1-c)/2
    z = norm.isf(alpha)
    if method == 'exact':
        # Quantiles only once per distinct sufficient total.
        shapes, inv = np.unique(a, return_inverse=True)
        lo = gamma.ppf(alpha, shapes, scale=1/b)[inv].reshape(a.shape)
        hi = gamma.isf(alpha, shapes, scale=1/b)[inv].reshape(a.shape)
        negative = np.zeros_like(a)
    elif method == 'direct_laplace':
        if np.any(a <= 1):
            raise ValueError('direct Laplace needs an interior mode: shape > 1')
        m, sd = (a-1)/b, np.sqrt(a-1)/b
        lo, hi, negative = m-z*sd, m+z*sd, norm.cdf(-np.sqrt(a-1))
    else:
        lo, hi = a/b*np.exp(-z/np.sqrt(a)), a/b*np.exp(z/np.sqrt(a))
        negative = np.zeros_like(a)
    return {k: _unbox(v) for k, v in dict(lower=lo, upper=hi, width=hi-lo,
                                          negative_mass=negative).items()}


def posterior_density(x, shape, rate, method) -> np.ndarray:
    _method(method)
    x = _numeric(x, 'x')
    a = _scalar(shape, 'shape', 0, 1_000_100, open_low=True)
    b = _scalar(rate, 'rate', 0, 11000, open_low=True)
    if method == 'direct_laplace':
        if a <= 1:
            raise ValueError('direct Laplace needs shape > 1')
        return norm.pdf(x, (a-1)/b, np.sqrt(a-1)/b)
    positive = x > 0
    safe = np.where(positive, x, 1.)
    if method == 'exact':
        log_density = a*np.log(b)-gammaln(a)+(a-1)*np.log(safe)-b*safe
    else:
        log_density = .5*np.log(a/(2*np.pi))-np.log(safe)-a/2*(np.log(safe)-np.log(a/b))**2
    return np.where(positive, np.exp(log_density), 0.)


def joint_log_likelihood(rate, observations) -> np.ndarray:
    r = _numeric(rate, 'rate', ndim=(0, 1, 2))
    y = _counts(observations, 'observations', ndim=(1, 2))
    if np.any(r <= 0):
        raise ValueError('rates must be positive')
    if y.ndim == 1:
        if r.ndim > 1:
            raise ValueError('unbatched observations need scalar or vector rates')
        return y.sum()*np.log(r)-y.size*r-gammaln(y+1).sum()
    if r.ndim not in (1, 2) or r.shape[0] != y.shape[0]:
        raise ValueError('batched observations require row-aligned rates')
    total, constant = y.sum(axis=1), gammaln(y+1).sum(axis=1)
    if r.ndim == 2:
        total, constant = total[:, None], constant[:, None]
    return total*np.log(r)-y.shape[1]*r-constant


def rank_components(truth_quantity, draw_quantities) -> dict:
    t = _numeric(truth_quantity, 'truth')
    d = _numeric(draw_quantities, 'draws', ndim=(1, 2))
    if (t.ndim == 0 and d.ndim != 1) or (t.ndim == 1 and (d.ndim != 2 or d.shape[0] != t.size)):
        raise ValueError('rank dimensions disagree')
    if d.shape[-1] == 0:
        raise ValueError('need posterior draws')
    comparison = t if t.ndim == 0 else t[:, None]
    return {'less': _unbox(np.sum(d < comparison, axis=-1)),
            'equal': _unbox(np.sum(d == comparison, axis=-1))}


def rank_with_ties(less, equal, tie_offset):
    l, e, j = (_counts(x, name) for x, name in [(less, 'less'), (equal, 'equal'), (tie_offset, 'tie_offset')])
    if l.shape != e.shape or l.shape != j.shape:
        raise ValueError('tie component shapes must agree')
    if np.any(j > e):
        raise ValueError('tie offset must be in 0..equal')
    return _unbox(l+j)


def rank_bin_counts(ranks, *, draws=99, bins=10) -> np.ndarray:
    m = _scalar(draws, 'draws', 1, 1_000_000, integer=True)
    b = _scalar(bins, 'bins', 1, m+1, integer=True)
    if (m+1) % b:
        raise ValueError('bins must divide the rank cardinality')
    r = _counts(ranks, 'ranks', ndim=(1,), maximum=m)
    return np.bincount(r // ((m+1)//b), minlength=b)


def _sampling(generator: str, n: int, truth: float):
    if not isinstance(generator, str):
        raise TypeError('generator must be string')
    if generator not in GENERATORS:
        raise ValueError('unknown generator')
    # General mean; NB observation shape remains 2. Frozen truth is 4.
    return poisson(truth*n) if generator == 'poisson' else nbinom(2*n, 2/(2+truth))


def coverage_sum(generator, n, level, method, *, truth=4, tail_tol=1e-12) -> dict:
    n = _scalar(n, 'n', 1, 10000, integer=True)
    truth = _scalar(truth, 'truth', 0, 10000, open_low=True)
    tol = _scalar(tail_tol, 'tail_tol', 0, 1e-6, open_low=True)
    law = _sampling(generator, n, truth)
    cutoff_float = law.isf(min(5e-13, tol/2))
    if not np.isfinite(cutoff_float) or cutoff_float > 1_000_000:
        raise ValueError('unable to certify tail below maximum cutoff')
    k = int(cutoff_float)
    while law.sf(k) > tol and k < 1_000_000:
        k += 1
    tail = float(law.sf(k))
    if tail > tol:
        raise ValueError('sampling tail not certified')
    s = np.arange(k+1)
    if generator == 'poisson':
        logp = -truth*n+s*np.log(truth*n)-gammaln(s+1)
    else:
        p = 2/(2+truth)
        logp = gammaln(s+2*n)-gammaln(2*n)-gammaln(s+1)+2*n*np.log(p)+s*np.log1p(-p)
    weights = np.exp(logp)
    interval = interval_from_total(s, n, level, method)
    accepted = (interval['lower'] <= truth) & (truth <= interval['upper'])
    value = fsum(weights[accepted])
    return dict(value=value, lower_bound=value, upper_bound=min(1., value+tail),
                cutoff=k, tail_mass=tail, included_mass=fsum(weights))


def gamma_coverage_inversion(generator, n, level, *, truth=4) -> dict:
    """Independent Poisson-CDF integer search, with no Gamma calls or count sum."""
    n = _scalar(n, 'n', 1, 10000, integer=True)
    c = _scalar(level, 'level', .01, .99)
    truth = _scalar(truth, 'truth', 0, 10000, open_low=True)
    law = _sampling(generator, n, truth)
    alpha = (1-c)/2
    def f(s):
        return float(poisson.cdf(s+1, truth*(n+1)))
    def first(predicate):
        lo, hi = -1, 1
        while not predicate(f(hi)):
            hi *= 2
            if hi > 1_000_000:
                raise ValueError('inversion search limit')
        while hi-lo > 1:
            mid = (hi+lo)//2
            if predicate(f(mid)):
                hi = mid
            else:
                lo = mid
        return hi
    lower = first(lambda x: x >= alpha)
    upper = first(lambda x: x > 1-alpha)-1
    if upper < lower:
        # A discrete CDF may jump across the whole central probability band.
        # No nonnegative total is then accepted; this is exact zero probability,
        # not an invalid truth or a truncated-tail approximation. Null endpoints
        # explicitly denote the empty set (they are not actual accepted counts).
        candidates = sorted({max(0, lower-1), lower, max(0, upper), upper+1})
        boundaries = [dict(total=s, cdf=f(s), accepted=bool(alpha <= f(s) <= 1-alpha))
                      for s in candidates]
        return dict(value=0.0, accepted_total_min=None, accepted_total_max=None,
                    boundary_checks=boundaries, empty_acceptance_set=True,
                    search_bounds=dict(first_cdf_at_least_alpha=lower,
                                       last_cdf_at_most_one_minus_alpha=upper),
                    reason='No nonnegative integer total has CDF in the central band')
    # Choose tail according to location, avoiding subtracting two values near one.
    value = (law.sf(lower-1)-law.sf(upper) if law.cdf(lower-1) > .5
             else law.cdf(upper)-law.cdf(lower-1))
    boundaries = [dict(total=s, cdf=f(s), accepted=bool(s >= 0 and alpha <= f(s) <= 1-alpha))
                  for s in (lower-1, lower, upper, upper+1)]
    return dict(value=float(value), accepted_total_min=lower, accepted_total_max=upper,
                boundary_checks=boundaries)


def wilson_interval(successes, replications, *, confidence=.95) -> dict:
    r = _scalar(replications, 'replications', 1, 10**9, integer=True)
    k = _scalar(successes, 'successes', 0, r, integer=True)
    c = _scalar(confidence, 'confidence', 0, 1, open_low=True)
    if c == 1:
        raise ValueError('confidence must be less than one')
    z = norm.isf((1-c)/2)
    p, den = k/r, 1+z*z/r
    mid = (p+z*z/(2*r))/den
    half = z*np.sqrt(p*(1-p)/r+z*z/(4*r*r))/den
    return dict(lower=0. if k == 0 else float(mid-half),
                upper=1. if k == r else float(mid+half))


def paired_summary(indicators, reference_indicators) -> dict:
    a, b = np.asarray(indicators), np.asarray(reference_indicators)
    if a.dtype != bool or b.dtype != bool:
        raise TypeError('indicators must be boolean arrays')
    if a.ndim != 1 or a.shape != b.shape or a.size < 2:
        raise ValueError('paired arrays require matching 1D shapes, R>=2')
    d = a.astype(int)-b.astype(int)
    delta, se = float(d.mean()), float(d.std(ddof=1)/np.sqrt(d.size))
    z = norm.isf(.025)
    return dict(joint_counts=dict(both=int(np.sum(a & b)), exact_only=int(np.sum(~a & b)),
                                 approximation_only=int(np.sum(a & ~b)), neither=int(np.sum(~a & ~b))),
                difference=delta, mcse=se, interval=dict(lower=delta-z*se, upper=delta+z*se))
