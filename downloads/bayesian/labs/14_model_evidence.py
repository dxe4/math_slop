# %% [markdown]
# # Lab 14 — Evidence is sensitive to a proper prior
# Read A02. Each width below defines a separate two-model comparison with equal
# model odds. The three alternatives are not competing in one four-model fit.
# %%
from common import np, plt, save_figure, save_result
from extension_common import envelope, check
from scipy import stats, integrate, special

STEM, DEFAULT_SEED = "14_model_evidence", 1414


def compute(seed: int = DEFAULT_SEED) -> dict:
    y, widths = np.array([1.1, 1.5, 1.9]), [.5, 2., 10.]
    null = float(stats.norm.logpdf(y).sum())
    rows, checks = [], []
    for tau in widths:
        covariance = np.eye(3) + tau**2 * np.ones((3, 3))
        alternative = float(stats.multivariate_normal.logpdf(y, cov=covariance))
        variance = 1 / (1/tau**2 + 3)
        mean = variance * y.sum()
        weight = float(special.expit(alternative-null))
        predictive_mean = weight * mean
        predictive_variance = 1 + weight*variance + weight*(1-weight)*mean**2
        rows.append(dict(prior_sd=tau, log_evidence_alternative=alternative,
                         log_bayes_factor=alternative-null, model1_weight=weight,
                         offset_mean=float(mean), offset_variance=variance,
                         mixture_predictive_mean=float(predictive_mean),
                         mixture_predictive_variance=float(predictive_variance)))
        integral = integrate.quad(lambda mu: np.exp(stats.norm.logpdf(y, mu).sum()
                                  + stats.norm.logpdf(mu, scale=tau)), -np.inf, np.inf,
                                  epsabs=1e-12)[0]
        checks.append(check(f"log_evidence_quadrature_tau_{tau}", np.log(integral), alternative,
                            atol=1e-9))
    return envelope(STEM, seed, "Normal marginal likelihood and exact model averaging",
                    {"readings": y.tolist(), "observation_sd": 1, "alternative_prior_sds": widths,
                     "prior_model1_probability": .5},
                    {"log_evidence_null": null, "comparisons": rows}, checks,
                    ["Prior widths are fixed sensitivity scenarios, not fitted parameters.",
                     "Model probabilities are conditional on these two specified models."])


def main() -> None:
    result = compute()
    rows = result["metrics"]["comparisons"]
    x = np.linspace(-4, 6, 500)
    for row in rows:
        w = row["model1_weight"]
        density = (1-w)*stats.norm.pdf(x) + w*stats.norm.pdf(
            x, row["offset_mean"], np.sqrt(1+row["offset_variance"]))
        plt.plot(x, density, label=f"Prior SD {row['prior_sd']}")
    plt.xlabel("Future calibration reading (instrument units)")
    plt.ylabel("Model-averaged predictive density")
    plt.title("Separate prior-width comparisons; observation SD fixed at 1")
    plt.legend()
    save_figure(STEM)
    save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** change the model prior odds to 1:4, keeping parameter priors
# fixed. Separate the change in evidence from the change in posterior odds.
