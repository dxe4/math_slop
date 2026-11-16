"""Finite two-Poisson inference by complete allocation enumeration (N <= 12).

Gamma arguments are shape/rate. Arrays use observation order and state order 0,1.
No I/O occurs here. Exact means finite sums/analytic integrals in floating arithmetic.
"""
from __future__ import annotations

import numpy as np
from scipy.special import betaln, gammaln, logsumexp
from scipy.stats import nbinom


def _counts(y, *, max_size: int | None = None) -> np.ndarray:
    a = np.asarray(y)
    if a.ndim != 1 or a.dtype.kind not in 'iuf' or not np.all(np.isfinite(a)):
        raise ValueError('Counts must be a finite numeric vector')
    if np.any(a < 0) or np.any(a != np.floor(a)) or np.any(a > 2**52):
        raise ValueError('Counts must be nonnegative exactly represented integers')
    if max_size is not None and len(a) > max_size:
        raise ValueError('At most 12 observations are supported')
    return a.astype(np.int64)


def collapse_allocations(y, *, alpha: float, shape: float, rate: float) -> dict:
    """Integrate weight and both rates, retaining every allocation, including empty ones."""
    y = _counts(y, max_size=12)
    prior = np.asarray([alpha, shape, rate], dtype=float)
    if prior.shape != (3,) or not np.all(np.isfinite(prior)) or np.any(prior <= 0):
        raise ValueError('Prior parameters must be finite positive scalars')
    z = ((np.arange(2**len(y))[:, None] >> np.arange(len(y))) & 1)
    n1, s1 = z.sum(axis=1), z @ y
    n = np.column_stack([len(y)-n1, n1])
    sums = np.column_stack([y.sum()-s1, s1])
    r, b = shape+sums, rate+n
    log_joint = (betaln(alpha+n1, alpha+len(y)-n1)-betaln(alpha, alpha)
                 + (shape*np.log(rate)-gammaln(shape)+gammaln(r)-r*np.log(b)).sum(axis=1)
                 - gammaln(y+1).sum())
    evidence = logsumexp(log_joint)
    return dict(y=y, z=z, n=n, sums=sums, alpha=alpha, shape=shape, rate=rate,
                r=r, b=b, weights=np.exp(log_joint-evidence), log_evidence=float(evidence))


def predictive_pmf(fit: dict, counts) -> np.ndarray:
    """Normalized infinite-support prediction evaluated only at the requested counts."""
    m = _counts(counts)
    component = nbinom.pmf(m[:, None, None], fit['r'], fit['b']/(fit['b']+1))
    w = (fit['alpha']+fit['n'])/(2*fit['alpha']+len(fit['y']))
    return np.einsum('mak,ak,a->m', component, w, fit['weights'])


def predictive_tail(fit: dict, threshold: int) -> float:
    """P(Y > threshold), evaluated with survival functions, without truncation."""
    _counts([threshold])
    w = (fit['alpha']+fit['n'])/(2*fit['alpha']+len(fit['y']))
    return float(np.sum(fit['weights'][:, None]*w*nbinom.sf(threshold, fit['r'], fit['b']/(fit['b']+1))))


def moments(fit: dict) -> dict:
    """Analytic predictive and random mixture-mean first/second moments."""
    h = fit['alpha']+fit['n']
    total = h.sum(axis=1)
    w = h/total[:, None]
    l1, l2 = fit['r']/fit['b'], fit['r']*(fit['r']+1)/fit['b']**2
    mean = float(fit['weights'] @ (w*l1).sum(axis=1))
    second_y = float(fit['weights'] @ (w*(l1+l2)).sum(axis=1))
    second_m = ((h*(h+1)/(total*(total+1))[:, None]*l2).sum(axis=1)
                + 2*h[:, 0]*h[:, 1]/(total*(total+1))*l1[:, 0]*l1[:, 1])
    return dict(mean=mean, predictive_variance=second_y-mean**2,
                mixture_mean_variance=float(fit['weights'] @ second_m)-mean**2)


def coclustering(fit: dict) -> np.ndarray:
    """P(z_i=z_j | y); empty input yields a (0,0) matrix."""
    z, w = fit['z'], fit['weights']
    return (z*w[:, None]).T @ z + ((1-z)*w[:, None]).T @ (1-z)


def sample_posterior(fit: dict, *, rng: np.random.Generator, size: int) -> dict:
    """IID joint draws; the three parameters are independent only conditional on z."""
    if isinstance(size, bool) or not isinstance(size, (int, np.integer)) or size < 1:
        raise ValueError('size must be a positive integer')
    index = rng.choice(len(fit['weights']), size=size, p=fit['weights'])
    h = fit['alpha']+fit['n'][index]
    pi = rng.beta(h[:, 1], h[:, 0])
    rates = rng.gamma(fit['r'][index], scale=1/fit['b'][index])
    mixture_mean = (1-pi)*rates[:, 0]+pi*rates[:, 1]
    high1 = rates[:, 1] >= rates[:, 0]
    return dict(allocation_index=index, allocations=fit['z'][index], pi=pi, rates=rates,
                mixture_mean=mixture_mean, sorted_rates=np.sort(rates, axis=1),
                high_rate_weight=np.where(high1, pi, 1-pi))


def sample_replicates(draws: dict, *, rng: np.random.Generator, width: int) -> np.ndarray:
    """One shared parameter draw per replicate row; fresh allocation for each column."""
    if isinstance(width, bool) or not isinstance(width, int) or width < 1:
        raise ValueError('width must be a positive integer')
    z = rng.random((len(draws['pi']), width)) < draws['pi'][:, None]
    rates = np.where(z, draws['rates'][:, 1, None], draws['rates'][:, 0, None])
    return rng.poisson(rates)
