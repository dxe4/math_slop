# Practice choosing a Bayesian experiment

Attempt these after [the lesson](./experiment_design_v1-lesson.md). Write an explanation and a numerical prediction before running code. Keep [worked answers](./experiment_design_v1-answers.md) closed until you have a result to compare.

## Faded example with a new service cost

Retain the original prior, assay probabilities and measurement cost of 1/4. Change service loss from 3 to **6** in every state; run losses remain (0, 0, 20).

1. Find the new jam-probability threshold. State the best action before any measurement.
2. The jam probe still has positive probability 9/50 and negative probability 41/50. Fill in the table, including the best action separately for each result.

| Result | Posterior jam probability | Run loss | Service loss | Best action | Minimum loss |
|---|---:|---:|---:|---|---:|
| Positive | 1/2 | ? | 6 | ? | ? |
| Negative | 1/82 | ? | 6 | ? | ? |

3. Weight the two minimum losses by their result probabilities. Compute EVSI and net value. Would you buy this assay?
4. Does its EIG change when only the losses change? Explain using the arguments of the EIG formula.
5. How does the perfect-information ceiling change? Identify the optimal action in each known state before averaging.

To check after the hand calculation, run Python from this extension directory:

```python
from fractions import Fraction as F
from design import JAM, evaluate
prior = (F(3, 5), F(3, 10), F(1, 10))
result = evaluate(prior, JAM, ((0, 0, 20), (6, 6, 6)))
print(result.expected_risk, result.value, result.net_value)
```

## Independent example with a changed population mixture

Reset service loss to 3 and use the original assay probabilities and costs. Swap the ready and worn prior masses: prior is now **(3/10, 3/5, 1/10)**.

The total jam rate remains 1/10. Predict whether this is enough to keep the wear assay's jam posterior unchanged. Then:

1. Derive both wear result probabilities and all posterior state probabilities.
2. Choose the best action after each result; explain why the word “negative” cannot determine the action.
3. Compute wear expected risk, EVSI and net value. Compare it with the unchanged jam probe.
4. Find the exact nonjammed mixture rate that made the original wear assay uninformative about jam. Explain which changed assumption breaks that equality.
5. Use `evaluate` to compute wear EIG for this new prior. Explain why a negative net decision value does not imply zero information.

## Find an incorrect design calculation

A learner writes:

> I will first average the positive and negative posteriors, then choose the best action under that average. The result is the same as acting without a measurement, so all information has zero value.

Identify the operation that must move inside the average. Use the original jam probe to demonstrate the numerical consequence. State a condition under which the learner's zero-value conclusion would happen to be correct.

A second learner subtracts the assay's 1/4 cost from its EIG and calls the result net information value. Identify the incompatible units and state what extra preference would be needed to define such a combination.

## Explain repeated measurements

Use the original jam probe. Suppose two fresh results are independent conditional on the fixed machine state.

1. Calculate the probability of two positives directly from the state mixture.
2. Compare that probability with the square of the marginal positive probability. Explain the difference.
3. Calculate jam probability after two positives. Compare with copying one positive result twice.
4. Name one physical failure mechanism that would make the independent-product model unsuitable.
5. Does evaluating a fixed pair automatically answer whether to stop after the first result? State what additional policy choices and costs need to be considered.

## Retrieve after a delay

Return in two or three days and answer without looking at equations. These prompts are unscored; use the answers to decide what to revisit.

1. What distribution weights the possible results when choosing an experiment before data?
2. Why can one surprising result raise entropy even when EIG is nonnegative?
3. How can a measurement have positive EIG and zero EVSI?
4. Why must free-information EVSI be nonnegative under the lesson's fixed actions and noninvasive observations? Why can net value be negative?
5. What does a zero-predictive-probability result contribute to the design expectation? Can you form its posterior?
6. What is the difference between conditional independence of two tests given a state and marginal independence of their outcomes?

Finish by explaining the original opposite assay rankings to someone who knows Bayes' rule but has not read this lesson. Include the action threshold and the units; avoid calling either assay universally better.
