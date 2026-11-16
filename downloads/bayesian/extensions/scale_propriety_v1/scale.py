"""Finite-precision calculations for the hierarchical-scale propriety lesson.

The location is known to be zero and each observation has known noise variance
one.  The truncated log-uniform calculations deliberately use the particular
fixture J=2, y=(0, 0); they are not a general hierarchical-model fit.

All formulae are analytic, evaluated with standard-library binary floating
point.  They are not exact rational calculations or numerical quadrature.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import json
import math
from numbers import Real
from typing import Iterable


_LOG_TWO = math.log(2.0)


def _finite_real(value: Real, name: str) -> float:
    if isinstance(value, bool) or not isinstance(value, Real):
        raise TypeError(f"{name} must be a real number, excluding booleans")
    try:
        result = float(value)
    except OverflowError as exc:
        raise ValueError(f"{name} must be representable as a finite float") from exc
    if not math.isfinite(result):
        raise ValueError(f"{name} must be finite")
    return result


def _positive(value: Real, name: str) -> float:
    result = _finite_real(value, name)
    if result <= 0:
        raise ValueError(f"{name} must be strictly positive")
    return result


def _softplus(value: float) -> float:
    return max(value, 0.0) + math.log1p(math.exp(-abs(value)))


def _log_softplus(value: float) -> float:
    # Below -37, the relative correction to exp(value) is below float precision.
    # Retaining the logarithm also avoids exp underflow for very large cutoffs.
    if value < -37.0:
        return value
    return math.log(_softplus(value))


def _logaddexp(left: float, right: float) -> float:
    high, low = max(left, right), min(left, right)
    return high + math.log1p(math.exp(low - high))


def _log_ratio(upper: float, lower: float) -> float:
    difference = upper - lower
    if difference <= lower:
        return math.log1p(difference / lower)
    return math.log(upper) - math.log(lower)


def _interval_parts(lower: float, upper: float) -> tuple[float, float, float]:
    """Return log(lower), log(upper), log(1-(lower/upper)**2)."""
    log_lower, log_upper = math.log(lower), math.log(upper)
    span = _log_ratio(upper, lower)
    return log_lower, log_upper, math.log(-math.expm1(-2.0 * span))


def _direct_interval_mass(lower: float, upper: float) -> float | None:
    """Positive factored formula where all products are safely representable.

    The range includes the lesson's 1e-100..1e100 stress cases and adjacent
    floats.  Beyond it, the log-space expression remains available.  This
    branch avoids round trips through log/exp when the mass is representable.
    """
    if not 1e-140 <= lower < upper <= 1e140:
        return None
    relative_width = (upper - lower) / upper
    ratio = lower / upper
    numerator = relative_width * (2.0 - relative_width)
    denominator = lower * lower + ratio * ratio
    return 0.5 * math.log1p(numerator / denominator)


def _log_interval_mass(lower: float, upper: float) -> float:
    """Log integral of 1/[t(1+t²)] on a nonempty positive interval.

    Twice the integral is log1p(R), where
    R = [1-(lower/upper)²] / [lower²+(lower/upper)²].
    Computing R in logarithms avoids squaring either extreme cutoff.
    """
    direct_mass = _direct_interval_mass(lower, upper)
    if direct_mass is not None:
        return math.log(direct_mass)
    log_lower, _, log_difference = _interval_parts(lower, upper)
    span = _log_ratio(upper, lower)
    log_denominator = _logaddexp(2.0 * log_lower, -2.0 * span)
    return _log_softplus(log_difference - log_denominator) - _LOG_TWO


def _representable_exp(value: float, name: str) -> float:
    try:
        result = math.exp(value)
    except OverflowError as exc:
        raise ArithmeticError(f"{name} exceeds the floating-point range") from exc
    if result == 0.0:
        raise ArithmeticError(f"{name} is positive but below the floating-point range")
    return result


def posterior_propriety(group_count: int, prior_power: Real) -> dict[str, object]:
    """Classify p(tau) proportional to tau**k on (0,infinity).

    For any finite data in the known-location, known-unit-noise model, the
    likelihood approaches a positive constant at zero and is asymptotic to
    tau**(-J) at infinity.  Both strict inequalities are necessary.
    """
    if isinstance(group_count, bool) or not isinstance(group_count, int):
        raise TypeError("group_count must be a positive integer")
    if group_count < 1:
        raise ValueError("group_count must be a positive integer")
    power = _finite_real(prior_power, "prior_power")
    at_origin = power > -1.0
    at_infinity = power < group_count - 1
    return {
        "group_count": group_count,
        "prior_power": power,
        "origin_integrable": at_origin,
        "infinity_integrable": at_infinity,
        "proper": at_origin and at_infinity,
        "necessary_and_sufficient_condition": "-1 < k < J - 1",
        "model_assumptions": "known location 0; known observation variance 1",
    }


def log_marginal_likelihood(tau: Real, observations: Iterable[Real]) -> float:
    """Log likelihood, omitting the tau-independent (2*pi)**(-J/2).

    Tau=0 is allowed as the continuous limiting model.  The sum of squared
    observations must be representable; a range error is reported explicitly.
    """
    scale = _finite_real(tau, "tau")
    if scale < 0:
        raise ValueError("tau must be nonnegative")
    values = tuple(_finite_real(value, "observation") for value in observations)
    if not values:
        raise ValueError("observations must contain at least one value")
    squared_sum = math.fsum(value * value for value in values)
    if not math.isfinite(squared_sum):
        raise ArithmeticError("sum of squared observations exceeds the floating-point range")
    log_variance = 0.0 if scale == 0 else _softplus(2.0 * math.log(scale))
    return -0.5 * len(values) * log_variance - 0.5 * squared_sum * math.exp(-log_variance)


@dataclass(frozen=True)
class TruncatedLogUniform:
    """Posterior for J=2, y=(0,0), prior proportional to 1/tau on [eps,M].

    ``normalizer`` integrates the unnormalized posterior kernel, not the
    already-normalized prior.  Thus the marginal likelihood with a normalized
    prior is normalizer/log(M/eps), omitting the Gaussian constant.

    CDF and survival use complementary interval integrals, rather than
    subtracting rounded CDF values.  Quantiles use bounded bisection and return
    the upper representable bracket, including when no interior float exists.
    """

    epsilon: float
    upper: float

    def __post_init__(self) -> None:
        lower = _positive(self.epsilon, "epsilon")
        upper = _positive(self.upper, "upper")
        if lower >= upper:
            raise ValueError("cutoffs must satisfy 0 < epsilon < upper")
        object.__setattr__(self, "epsilon", lower)
        object.__setattr__(self, "upper", upper)

    @property
    def log_normalizer(self) -> float:
        return _log_interval_mass(self.epsilon, self.upper)

    @property
    def normalizer(self) -> float:
        direct_mass = _direct_interval_mass(self.epsilon, self.upper)
        if direct_mass is not None:
            return direct_mass
        return _representable_exp(self.log_normalizer, "normalizer")

    def _probabilities(self, tau: Real) -> tuple[float, float]:
        value = _finite_real(tau, "tau")
        if value <= self.epsilon:
            return 0.0, 1.0
        if value >= self.upper:
            return 1.0, 0.0
        direct_left = _direct_interval_mass(self.epsilon, value)
        direct_right = _direct_interval_mass(value, self.upper)
        if direct_left is not None and direct_right is not None:
            if direct_left <= direct_right:
                probability = direct_left / self.normalizer
                return probability, 1.0 - probability
            probability = direct_right / self.normalizer
            return 1.0 - probability, probability
        log_left = _log_interval_mass(self.epsilon, value)
        log_right = _log_interval_mass(value, self.upper)
        log_z = self.log_normalizer
        # Evaluate the smaller probability directly and obtain its complement
        # with expm1.  No post-hoc clipping of probabilities is performed.
        if log_left <= log_right:
            return math.exp(log_left - log_z), -math.expm1(log_left - log_z)
        return -math.expm1(log_right - log_z), math.exp(log_right - log_z)

    def cdf(self, tau: Real) -> float:
        """Posterior probability tau_parameter <= tau."""
        return self._probabilities(tau)[0]

    def survival(self, tau: Real) -> float:
        """Posterior probability tau_parameter > tau (continuous density)."""
        return self._probabilities(tau)[1]

    def quantile(self, probability: Real) -> float:
        """Invert the CDF to floating-point bracket resolution."""
        target = _finite_real(probability, "probability")
        if not 0.0 <= target <= 1.0:
            raise ValueError("probability must lie in [0,1]")
        if target == 0.0:
            return self.epsilon
        if target == 1.0:
            return self.upper
        lower, upper = self.epsilon, self.upper
        for _ in range(2048):
            if math.nextafter(lower, upper) == upper:
                return upper
            if _log_ratio(upper, lower) > 0.5:
                midpoint = math.exp(0.5 * (math.log(lower) + math.log(upper)))
            else:
                midpoint = lower + (upper - lower) / 2.0
            if not lower < midpoint < upper:
                # A rounded midpoint can equal an endpoint for adjacent floats.
                midpoint = math.nextafter(lower, upper)
                if midpoint == upper:
                    return upper
            # A CDF can round to one while its small survival probability
            # remains accurately representable.  Compare the smaller tail.
            below_target = (self.cdf(midpoint) < target if target <= 0.5
                            else self.survival(midpoint) > 1.0 - target)
            if below_target:
                lower = midpoint
            else:
                upper = midpoint
        raise ArithmeticError("quantile bisection did not reach a floating-point bracket")

    def moments(self) -> dict[str, float]:
        """Means/variances for this zero-data fixture; all means are zero.

        A new group has variance E[tau²].  A new observed individual in that
        group has variance 1+E[tau²].  An already-observed group's latent mean
        has variance E[tau²/(1+tau²)].  The last is not the ratio of expectations.
        """
        log_lower, log_upper, log_difference = _interval_parts(self.epsilon, self.upper)
        log_z = self.log_normalizer
        log_a = (
            _log_softplus(2.0 * log_upper + log_difference - _softplus(2.0 * log_lower))
            - _LOG_TWO
        )
        if _direct_interval_mass(self.epsilon, self.upper) is not None:
            numerator = 0.5 * math.log1p(
                ((self.upper - self.epsilon) / (1.0 + self.epsilon * self.epsilon))
                * (self.upper + self.epsilon)
            )
            tau_squared = numerator / self.normalizer
        else:
            tau_squared = _representable_exp(log_a - log_z, "E[tau²]")
        # log(w) is uniform on [log(w(eps)),log(w(M))].  Its interval
        # length is 2Z.  This expression for its logarithmic mean stays
        # within [0,1] without silently clipping a rounded moment.
        twice_z = 2.0 * self.normalizer
        if self.upper <= 1.0:
            upper_squared = self.upper * self.upper
            upper_weight = upper_squared / (1.0 + upper_squared)
        else:
            inverse_squared = (1.0 / self.upper) ** 2
            upper_weight = 1.0 / (1.0 + inverse_squared)
        shrinkage = upper_weight * (-math.expm1(-twice_z) / twice_z)
        if shrinkage == 0.0:
            raise ArithmeticError("E[tau²/(1+tau²)] is below the floating-point range")
        individual = 1.0 + tau_squared
        if not math.isfinite(individual):
            raise ArithmeticError("future individual variance exceeds the floating-point range")
        return {
            "expected_tau_squared": tau_squared,
            "expected_shrinkage_weight": shrinkage,
            "new_latent_group_variance": tau_squared,
            "future_individual_variance": individual,
            "existing_group_mean_posterior_variance": shrinkage,
        }

    def summary(self, delta: Real = 0.1, probability: Real = 0.95) -> dict[str, object]:
        """Return an explicitly labelled finite-precision fixture report."""
        threshold = _finite_real(delta, "delta")
        quantile = self.quantile(probability)
        return {
            "arithmetic": "analytic formulas evaluated in binary floating point",
            "fixture": {"groups": 2, "observations": [0, 0], "location": 0, "noise_variance": 1},
            "prior": {"density_proportional_to": "1/tau", "epsilon": self.epsilon, "upper": self.upper},
            "kernel_normalizer": self.normalizer,
            "log_kernel_normalizer": self.log_normalizer,
            "threshold": threshold,
            "probability_tau_above_threshold": self.survival(threshold),
            "quantile_probability": float(probability),
            "tau_quantile": quantile,
            **self.moments(),
        }


def truncated_log_uniform(epsilon: Real, upper: Real) -> TruncatedLogUniform:
    """Construct the truncated J=2, zero-data posterior."""
    return TruncatedLogUniform(epsilon, upper)


def proper_uniform_reference() -> dict[str, object]:
    """Proper U(0,1) scale prior for the same J=2, zero-data fixture."""
    tau_squared = 4.0 / math.pi - 1.0
    shrinkage = 0.5 - 1.0 / math.pi
    return {
        "arithmetic": "analytic formulas evaluated in binary floating point",
        "prior": "tau uniform on [0,1]",
        "kernel_normalizer": math.pi / 4.0,
        "expected_tau_squared": tau_squared,
        "expected_shrinkage_weight": shrinkage,
        "new_latent_group_variance": tau_squared,
        "future_individual_variance": 1.0 + tau_squared,
        "existing_group_mean_posterior_variance": shrinkage,
    }


def main(argv: list[str] | None = None) -> int:
    """Print a reproducible report without external packages or file writes."""
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--epsilon", type=float, default=1e-6)
    parser.add_argument("--upper", type=float, default=1.0)
    parser.add_argument("--delta", type=float, default=0.1)
    parser.add_argument("--probability", type=float, default=0.95)
    parser.add_argument("--groups", type=int, default=2)
    parser.add_argument("--power", type=float, default=-1.0)
    args = parser.parse_args(argv)
    try:
        report = {
            "power_prior_propriety": posterior_propriety(args.groups, args.power),
            "truncated_log_uniform_fixture": truncated_log_uniform(args.epsilon, args.upper).summary(
                args.delta, args.probability
            ),
            "proper_uniform_reference": proper_uniform_reference(),
        }
    except (TypeError, ValueError, ArithmeticError) as exc:
        parser.error(str(exc))
    print(json.dumps(report, indent=2, allow_nan=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
