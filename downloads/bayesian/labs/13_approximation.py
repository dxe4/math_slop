# %% [markdown]
# # Lab 13 — Approximation error depends on the question
# Read A01. Predict which of a sum and a difference becomes too concentrated
# under mean-field inference. Then inspect a skewed target on its natural scale.
# %%
from common import np, plt, save_figure, save_result
from extension_common import envelope, check
from scipy import stats, integrate
from numbers import Real

STEM, DEFAULT_SEED = "13_approximation", 1313


def compute(seed: int = DEFAULT_SEED, *, rho: float = 0.8) -> dict:
    if (isinstance(rho, (bool, np.bool_)) or not isinstance(rho, Real)
            or not np.isfinite(rho) or not -1 < rho < 1):
        raise ValueError("rho must be a finite real scalar strictly between -1 and 1")
    rho = float(rho)
    mean = np.array([1., -.5])
    covariance = np.array([[1., rho], [rho, 1.]])
    precision = np.linalg.solve(covariance, np.eye(2))
    laplace = np.linalg.solve(precision, np.eye(2))
    mf = np.diag(1 / np.diag(precision))
    sums, differences = np.ones(2), np.array([1., -1.])
    sum_variance = float(sums @ covariance @ sums)
    mf_sum_variance = float(sums @ mf @ sums)
    metrics = {
        "laplace_covariance": laplace.tolist(), "mean_field_covariance": mf.tolist(),
        "exact_sum_variance": sum_variance,
        "mean_field_sum_variance": mf_sum_variance,
        "exact_difference_variance": float(differences @ covariance @ differences),
        "mean_field_difference_variance": float(differences @ mf @ differences),
        "exact_sum_tail": float(stats.norm.sf(2.5, mean.sum(), np.sqrt(sum_variance))),
        "mean_field_sum_tail": float(stats.norm.sf(2.5, mean.sum(), np.sqrt(mf_sum_variance))),
        "gamma_exact_tail": float(stats.gamma.sf(3, a=3, scale=.5)),
        "gamma_laplace_tail": float(stats.norm.sf(3, 1, np.sqrt(.5))),
        "gamma_laplace_negative_mass": float(stats.norm.cdf(0, 1, np.sqrt(.5))),
        "gamma_log_laplace_mean": float(np.exp(np.log(1.5) + 1/6)),
    }
    checks = [check("laplace_covariance_error", np.max(abs(laplace-covariance)), 0),
              check("sum_variance", metrics["exact_sum_variance"], 2 * (1 + rho)),
              check("mf_difference_variance", metrics["mean_field_difference_variance"], 2 * (1 - rho**2)),
              check("gamma_tail_quadrature", integrate.quad(
                  lambda x: stats.gamma.pdf(x, 3, scale=.5), 3, np.inf)[0],
                    metrics["gamma_exact_tail"])]
    return envelope(STEM, seed, "Exact Gaussian algebra; Laplace and reverse-KL mean-field",
                    {"mean": mean.tolist(), "covariance": covariance.tolist(),
                     "sum_threshold": 2.5, "gamma_shape": 3, "gamma_rate": 2}, metrics,
                    checks, ["Optimisation convergence is not an accuracy certificate.",
                             "A Gaussian approximation can put mass outside positive support."])


def render(result: dict):
    """Construct plots from computed moments; writing remains an explicit main step."""
    x = np.linspace(-1, 5, 500)
    fig, axes = plt.subplots(1, 2, figsize=(9, 3.4))
    metrics, parameters = result['metrics'], result['parameters']
    for variance, label in [(metrics['exact_sum_variance'], "Exact sum"),
                            (metrics['mean_field_sum_variance'], "Mean-field sum")]:
        axes[0].plot(x, stats.norm.pdf(x, sum(parameters['mean']), np.sqrt(variance)), label=label)
    axes[0].axvline(parameters['sum_threshold'], color="black", ls="--")
    axes[0].set(xlabel="Sum (dimensionless)", ylabel="Density")
    axes[1].plot(x, stats.gamma.pdf(x, 3, scale=.5), label="Gamma target")
    axes[1].plot(x, stats.norm.pdf(x, 1, np.sqrt(.5)), label="Rate-scale Laplace")
    axes[1].set(xlabel="Positive rate", ylabel="Density")
    for ax in axes:
        ax.legend()
    fig.suptitle("Exact targets and approximations: tails and support differ")
    return fig


def main() -> None:
    result = compute()
    render(result)
    save_figure(STEM)
    save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** call `compute(rho=-0.8)` and `render(result)` on its returned
# result to inspect the changed distributions. Derive the changed sum and difference
# variances before running. Why is marginal variance alone an incomplete check?
