# Sources and teaching design

References checked on 20 October 2026. The example, likelihood tables, exact fractions, code and exercises in this module are original. No external examples, datasets, diagrams or software implementations are redistributed.

| Primary source | Material inspected | Use here |
|---|---|---|
| [Foster, Jankowiak, O’Meara, Teh and Rainforth, A Unified Stochastic Gradient Approach to Designing Bayesian-Optimal Experiments](https://arxiv.org/html/1911.00294v2), AISTATS 2020, section 2.1 | Entropy reduction averaged over the prior predictive distribution; mutual-information expression; posterior used as the next prior | Establishes the information objective. This module evaluates finite sums directly and does not implement the paper’s variational estimators or optimization. |
| [Poole and Mackworth, Artificial Intelligence Foundations of Computational Agents](https://www.cs.ubc.ca/~poole/aibook/html1e/ArtInt_223.html), section 9.4 | Observation-conditioned optimal policies; free information can be ignored; unchanged action gives zero value; perfect-information bound | Establishes the decision objective. The new calculation uses losses instead of rewards and includes a fixed assay cost. |

The existing book already teaches finite updating and expected loss. A targeted search of course and companion Markdown found no worked expected-information-gain module. This addition connects those foundations with a small counterexample learners can calculate without a probabilistic programming stack.

The teaching sequence asks for a prediction, gives a complete exact example, removes steps in a new calculation, and finishes with a changed-prior explanation and delayed retrieval questions. These are design choices; local learning gains have not been measured. The `--jam-prior` control changes the prevalence while retaining a ready-to-worn ratio of two to one, allowing the action-threshold effect to be isolated.

The model keeps the state fixed, treats all assay probabilities as known, and allows both actions after either result. It omits uncertain calibration, action-dependent observations, measurement damage and adaptive multi-step policies. The optional pair function assumes conditional independence given the state. Those boundaries matter for interpreting both the nonnegative free-information value and repeated-evidence calculations.
