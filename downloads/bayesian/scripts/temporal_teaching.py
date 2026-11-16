"""Synthetic C03.T2 bridge: exact finite-prior learning and bounded quadrature.

This uses no Beijing outcomes, frozen fit helpers, or case reference answers.
Dense Gaussian conditioning provides an independent teaching calculation.
"""
from itertools import product
import json
import numpy as np
from numpy.polynomial.legendre import leggauss
from scipy.special import logsumexp


def components(theta, observations=(0., 1., .5), days=(0, 0, 2)) -> dict:
    """Normalized likelihood and day-3 measurement prediction for each theta."""
    theta = np.atleast_2d(np.asarray(theta, dtype=float))
    y, days = np.asarray(observations, dtype=float), np.asarray(days)
    phi, su, sy = theta.T
    amplitude = su**2/(1-phi**2)
    cov = amplitude[:, None, None]*phi[:, None, None]**np.abs(days[:, None]-days)
    cov += sy[:, None, None]**2*np.eye(len(y))
    sign, logdet = np.linalg.slogdet(cov)
    if not np.all(sign == 1):
        raise ValueError('Observation covariance must be positive definite')
    solved = np.linalg.solve(cov, np.broadcast_to(y, (len(theta), len(y)))[..., None])[..., 0]
    log_likelihood = -.5*(len(y)*np.log(2*np.pi)+logdet+np.sum(y*solved, axis=1))
    cross = amplitude[:, None]*phi[:, None]**np.abs(3-days)
    mean = np.sum(cross*solved, axis=1)
    variance = amplitude+sy**2-np.sum(cross*np.linalg.solve(cov, cross[..., None])[..., 0], axis=1)
    return dict(log_likelihood=log_likelihood, mean=mean, variance=variance)


def posterior(theta, prior_weights, observations=(0., 1., .5)) -> dict:
    parts = components(theta, observations)
    log_weights = np.log(prior_weights)+parts['log_likelihood']
    log_evidence = logsumexp(log_weights)
    weights = np.exp(log_weights-log_evidence)
    mean = weights @ parts['mean']
    within = weights @ parts['variance']
    between = weights @ (parts['mean']-mean)**2
    return dict(theta=np.asarray(theta).tolist(), weights=weights.tolist(),
                log_evidence=float(log_evidence), mean=float(mean),
                within_variance=float(within), between_variance=float(between),
                variance=float(within+between),
                component_log_likelihood=parts['log_likelihood'].tolist())


def finite_example(observations=(0., 1., .5)) -> dict:
    theta = np.array(list(product([0., .5], [.5, 1.], [.5, 1.])))
    return posterior(theta, np.full(8, 1/8), observations)


def bounded_example(order: int) -> dict:
    """Independent uniforms phi[-.2,.8], su[.3,1.2], sy[.4,1.1]."""
    x, w = leggauss(order)
    axes = [(lo+hi)/2+(hi-lo)*x/2 for lo, hi in [(-.2,.8),(.3,1.2),(.4,1.1)]]
    theta = np.array(np.meshgrid(*axes, indexing='ij')).reshape(3, -1).T
    # Change-of-variable Jacobian times normalized uniform density is w/2.
    weights = np.prod(np.array(np.meshgrid(w/2, w/2, w/2, indexing='ij')), axis=0).ravel()
    result = posterior(theta, weights)
    return {k: v for k, v in result.items() if k not in ('theta', 'weights', 'component_log_likelihood')}


if __name__ == '__main__':
    print(json.dumps(dict(finite=finite_example(), quadrature={n: bounded_example(n) for n in (12,24,40)}), indent=2))
