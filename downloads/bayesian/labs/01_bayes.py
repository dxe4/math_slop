# %% [markdown]
# # Lab 1 — From likelihoods to posterior probabilities
# A quality alarm flags 90% of defective items and 5% of sound items. The prior
# defect rate is 2%. Predict whether most flagged items will actually be defective.
# %%
from common import np, plt, save_figure, save_result

prior = np.array([0.02, 0.98])  # defective, sound
likelihood = np.array([0.90, 0.05])
joint = prior * likelihood
posterior = joint / joint.sum()
odds = (prior[0] / prior[1]) * (likelihood[0] / likelihood[1])
assert np.isclose(posterior[0], odds / (1 + odds))
plt.bar(["Before alarm", "After alarm"], [prior[0], posterior[0]])
plt.ylim(0, 1)
plt.ylabel("Probability of defect")
save_figure("01_alarm")
save_result("01_bayes", {"alarm_probability": float(joint.sum()),
                        "defect_given_alarm": float(posterior[0]),
                        "posterior_odds": float(odds)})
# %% [markdown]
# **Investigate:** change the prior defect rate to 0.20. Next, calculate the posterior
# after a second alarm under conditional independence. Explain why re-reading the
# same sensor result does not supply independent evidence. Show an update table.
