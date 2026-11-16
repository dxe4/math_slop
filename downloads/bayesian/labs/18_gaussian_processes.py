# %% [markdown]
# # Lab 18 — Smoothness is a modelling assumption
# Read A06. These are three fixed kernel scenarios, not a posterior distribution
# over length scales. Observation noise and numerical jitter have separate roles.
# %%
from common import np, plt, save_figure, save_result
from extension_common import envelope, check, gp_predict

STEM, DEFAULT_SEED = "18_gaussian_processes", 1818


def compute(seed: int = DEFAULT_SEED) -> dict:
    x, y = np.arange(-2., 3.), np.array([.2, -.7, .1, .9, .3])
    new, lengths = np.array([.5, 3.]), [.4, 1., 2.]
    rows = []
    for length in lengths:
        mean, latent, observed = gp_predict(x, y, new, length, .15**2)
        rows.append(dict(length_scale=length, latent_mean=mean.tolist(),
                         latent_variance=latent.tolist(), observation_variance=observed.tolist()))
    ref = gp_predict(np.array([-1., 1.]), np.ones(2), np.array([0.]), 1., .25)
    duplicate_x, duplicate_y = np.array([0, 0, 1e-10, 1.]), np.array([.2, .3, .25, .8])
    base = gp_predict(duplicate_x, duplicate_y, np.array([0., .5, 1.]), 1., .0225)
    jitter_differences = []
    for jitter in [0., 1e-12, 1e-10]:
        value = gp_predict(duplicate_x, duplicate_y, np.array([0., .5, 1.]), 1., .0225, jitter)
        jitter_differences.append(float(max(np.max(abs(a-b)) for a, b in zip(value, base))))
    cross, offdiag = np.exp(-.5), np.exp(-2)
    expected_mean = 2*cross/(1.25+offdiag)
    expected_var = 1-2*cross**2/(1.25+offdiag)
    return envelope(STEM, seed, "Cholesky conditioning of fixed-hyperparameter Gaussian processes",
                    {"inputs": x.tolist(), "outcomes": y.tolist(), "test_inputs": new.tolist(),
                     "amplitude": 1, "noise_sd": .15, "length_scales": lengths,
                     "numerical_jitter": [0., 1e-12, 1e-10]},
                    {"scenarios": rows, "reference_mean": float(ref[0][0]),
                     "reference_latent_variance": float(ref[1][0]),
                     "reference_observation_variance": float(ref[2][0]),
                     "near_duplicate_max_prediction_changes": jitter_differences},
                    [check("two_point_mean", ref[0][0], expected_mean),
                     check("two_point_latent_variance", ref[1][0], expected_var),
                     check("observation_noise_addition", ref[2][0]-ref[1][0], .25),
                     check("jitter_stability", max(jitter_differences), 0, atol=1e-8)],
                    ["Kernel hyperparameters are fixed scenarios; intervals omit their uncertainty.",
                     "Dense covariance storage is quadratic and factorisation cubic in sample size."])


def main() -> None:
    result = compute(); p = result["parameters"]
    new = np.linspace(-3.5, 3.5, 250)
    fig, axes = plt.subplots(1, 3, figsize=(11, 3.3), sharey=True)
    for ax, length in zip(axes, p["length_scales"]):
        mean, latent, observed = gp_predict(np.array(p["inputs"]), np.array(p["outcomes"]),
                                           new, length, .15**2)
        ax.fill_between(new, mean-1.645*np.sqrt(observed), mean+1.645*np.sqrt(observed),
                        alpha=.15, label="Future reading 90%")
        ax.fill_between(new, mean-1.645*np.sqrt(latent), mean+1.645*np.sqrt(latent),
                        alpha=.3, label="Latent function 90%")
        ax.plot(new, mean); ax.scatter(p["inputs"], p["outcomes"], color="black", s=15)
        ax.set(title=f"Length scale {length}", xlabel="Input (units)")
    axes[0].set_ylabel("Response (units)"); axes[0].legend(fontsize=7)
    fig.suptitle("Zero-mean unit-amplitude GP; fixed noise SD 0.15; no jitter")
    save_figure(STEM); save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** extend predictions to input 10. Explain reversion to the prior
# mean and why a narrow extrapolation interval could signal an overconfident prior.
