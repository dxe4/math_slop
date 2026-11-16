"""Exact Gamma–Poisson calculations for independently detected counts.

Gamma shapes are positive integers; other model inputs are exact rationals.
Floats and booleans are rejected. Assumptions: independent detection, constant
rate, no false positives or saturation. This is a teaching calculator.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from fractions import Fraction
import json
from math import comb


def rational(value: int | str | Fraction, name: str) -> Fraction:
    if isinstance(value, bool) or not isinstance(value, (int, str, Fraction)):
        raise TypeError(f"{name} must be an integer, rational string or Fraction")
    try:
        return Fraction(value)
    except (ValueError, ZeroDivisionError) as error:
        raise ValueError(f"{name} must be a finite rational") from error


def count(value: int, name: str, *, positive: bool = False) -> int:
    if isinstance(value, bool) or not isinstance(value, int):
        raise TypeError(f"{name} must be an integer")
    if value < (1 if positive else 0):
        raise ValueError(f"{name} must be {'positive' if positive else 'nonnegative'}")
    return value


@dataclass(frozen=True)
class GammaRate:
    shape: int
    rate: Fraction

    def __post_init__(self) -> None:
        count(self.shape, "shape", positive=True)
        rate = rational(self.rate, "rate")
        if rate <= 0:
            raise ValueError("rate must be positive")
        object.__setattr__(self, "rate", rate)

    @property
    def mean(self) -> Fraction:
        return self.shape / self.rate

    @property
    def variance(self) -> Fraction:
        return self.shape / self.rate**2

    def predictive(self, exposure: int | str | Fraction) -> dict[str, Fraction]:
        c = rational(exposure, "future effective exposure")
        if c < 0:
            raise ValueError("future effective exposure must be nonnegative")
        return {"mean": c * self.mean,
                "variance": c * self.mean + c**2 * self.variance,
                "p_zero": (self.rate / (self.rate + c))**self.shape}

    def pmf(self, k: int, exposure: int | str | Fraction) -> Fraction:
        count(k, "future count")
        c = rational(exposure, "future effective exposure")
        if c < 0:
            raise ValueError("future effective exposure must be nonnegative")
        return (Fraction(comb(self.shape + k - 1, k))
                * (self.rate / (self.rate + c))**self.shape
                * (c / (self.rate + c))**k)


def posterior(prior: GammaRate, y: int, duration: int | str | Fraction,
              detection: int | str | Fraction) -> GammaRate:
    count(y, "observed count")
    time, q = rational(duration, "duration"), rational(detection, "detection")
    if time < 0 or not 0 <= q <= 1:
        raise ValueError("duration must be nonnegative and detection must be in [0,1]")
    if time * q == 0 and y > 0:
        raise ValueError("positive observed count has zero probability at zero effective exposure")
    return GammaRate(prior.shape + y, prior.rate + q * time)


def uncertain_detection(prior: GammaRate, y: int, duration: int | str | Fraction,
                        candidates: tuple[tuple[int | str | Fraction,
                                               int | str | Fraction], ...]
                        ) -> tuple[tuple[Fraction, Fraction, GammaRate], ...]:
    """Return (q, posterior weight, conditional rate posterior) components.

    Candidate masses must sum to one. Impossible branches are omitted. Common
    factors in the integrated count likelihood cancel in normalization.
    """
    count(y, "observed count")
    time = rational(duration, "duration")
    if time < 0:
        raise ValueError("duration must be nonnegative")
    if not candidates:
        raise ValueError("at least one detection candidate is required")
    parts = []
    total_prior = Fraction(0)
    seen = set()
    for detection, weight in candidates:
        q, mass = rational(detection, "detection"), rational(weight, "prior mass")
        if not 0 <= q <= 1 or mass < 0:
            raise ValueError("detection must be in [0,1] and masses nonnegative")
        if q in seen:
            raise ValueError("detection candidates must be distinct")
        seen.add(q)
        total_prior += mass
        effective = q * time
        if mass == 0 or (effective == 0 and y > 0):
            continue
        component = GammaRate(prior.shape + y, prior.rate + effective)
        evidence = effective**y / component.rate**component.shape
        parts.append((q, mass * evidence, component))
    if total_prior != 1:
        raise ValueError("prior candidate masses must sum to one")
    normalizer = sum((weight for _, weight, _ in parts), Fraction(0))
    if normalizer == 0:
        raise ValueError("observed count has zero prior predictive probability")
    return tuple((q, weight / normalizer, component) for q, weight, component in parts)


def reconstruction(prior: GammaRate, y: int, duration: int | str | Fraction,
                   detection: int | str | Fraction) -> dict[str, int | Fraction]:
    """Summarize missed and total true events in the already observed window."""
    post = posterior(prior, y, duration, detection)
    time, q = rational(duration, "duration"), rational(detection, "detection")
    missing = post.predictive((1-q) * time)
    return {"missed_mean": missing["mean"], "missed_variance": missing["variance"],
            "missed_p_zero": missing["p_zero"], "total_mean": y + missing["mean"],
            "total_variance": missing["variance"], "total_minimum": y}


def mixture_report(components: tuple[tuple[Fraction, Fraction, GammaRate], ...],
                   duration: int | str | Fraction = 1) -> dict[str, Fraction]:
    """Summarize future true counts under a normalized detection mixture."""
    time = rational(duration, "future duration")
    if time < 0:
        raise ValueError("future duration must be nonnegative")
    checked = []
    for q, weight, gamma in components:
        q, weight = rational(q, "detection"), rational(weight, "mixture mass")
        if not 0 <= q <= 1 or weight < 0:
            raise ValueError("detection must be in [0,1] and mixture masses nonnegative")
        if not isinstance(gamma, GammaRate):
            raise TypeError("mixture rate components must be GammaRate instances")
        checked.append((q, weight, gamma))
    if not checked or sum((w for _, w, _ in checked), Fraction(0)) != 1:
        raise ValueError("mixture must contain normalized components")
    mean = sum((w * g.mean for _, w, g in checked), Fraction(0))
    second = sum((w * (g.variance + g.mean**2) for _, w, g in checked), Fraction(0))
    variance = second - mean**2
    return {"rate_mean": mean, "rate_variance": variance,
            "future_true_mean": time * mean,
            "future_true_variance": time * mean + time**2 * variance,
            "future_true_p_zero": sum((w * g.predictive(time)["p_zero"]
                                       for _, w, g in checked), Fraction(0))}


def worked_report() -> dict:
    prior = GammaRate(2, Fraction(1))
    post = posterior(prior, 4, 2, "1/2")
    mixture = uncertain_detection(prior, 4, 2, (("1/4", "1/2"), ("3/4", "1/2")))
    return {
        "assumptions": "independent detection; no false positives; constant true rate",
        "posterior": {"shape": post.shape, "rate": post.rate,
                      "mean": post.mean, "variance": post.variance},
        "future_true_one_hour": post.predictive(1),
        "future_recorded_one_hour_q_half": post.predictive("1/2"),
        "missed_in_observed_window": post.predictive(1),
        "true_count_in_observed_window_mean": 4 + post.mean,
        "original_window_reconstruction": reconstruction(prior, 4, 2, "1/2"),
        "uncertain_detection_components": [
            {"q": q, "weight": w, "shape": g.shape, "rate": g.rate}
            for q, w, g in mixture],
        "uncertain_detection_true_forecast": mixture_report(mixture),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--shape", type=int, default=2)
    parser.add_argument("--rate", default="1")
    parser.add_argument("--observed", type=int, default=4)
    parser.add_argument("--duration", default="2")
    parser.add_argument("--detection", default="1/2")
    parser.add_argument("--future-duration", default="1")
    parser.add_argument("--future-detection", default="1")
    parser.add_argument("--worked", action="store_true", help="all exact worked-example comparisons")
    args = parser.parse_args()
    try:
        if args.worked:
            result = worked_report()
        else:
            prior = GammaRate(args.shape, rational(args.rate, "rate"))
            post = posterior(prior,
                             args.observed, args.duration, args.detection)
            qf = rational(args.future_detection, "future detection")
            time = rational(args.future_duration, "future duration")
            if not 0 <= qf <= 1 or time < 0:
                raise ValueError("future detection must be in [0,1] and duration nonnegative")
            result = {"posterior_shape": post.shape, "posterior_rate": post.rate,
                      "rate_mean": post.mean, "rate_variance": post.variance,
                      "future_count": post.predictive(qf * time),
                      "original_window_reconstruction": reconstruction(
                          prior, args.observed, args.duration, args.detection)}
    except (TypeError, ValueError) as error:
        parser.error(str(error))
    print(json.dumps(result, indent=2, default=str))


if __name__ == "__main__":
    main()
