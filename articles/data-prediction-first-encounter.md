
# Data, Patterns, and Prediction: A First Encounter

Suppose a community garden records the hours of sunlight and the height gained by each seedling. A pattern may help predict growth for the next seedling. But a table can also contain measurement mistakes, unusual plants, duplicated rows, or a future season unlike the past. Learning from data begins before any “intelligent” algorithm: ask what each row means, how it was collected, what will count as success, and where the result will be used.

This first encounter assumes no statistics or programming. It develops honest exploratory habits, a tiny prediction rule, training and test data, flexibility, regularization, and the limits of prediction. It does not claim that a pattern identifies a cause.

## Rows, columns, and a prediction question

Imagine this small table:

| Seedling | Sunlight hours $x$ | Weekly growth $y$ (cm) |
| --- | ---: | ---: |
| A | 2 | 1.1 |
| B | 3 | 1.6 |
| C | 4 | 2.0 |
| D | 5 | 2.7 |
| E | 6 | 2.9 |

A **row** is one observational unit, here a seedling. A **feature** is information available for prediction, here sunlight. The **outcome** is the quantity to predict, here growth.

Before calculating, ask:

- Were all seedlings measured over the same number of days?
- Is “sunlight” measured or estimated?
- Do several rows come from the same plant or plot?
- Will the future seedlings come from the same season and variety?
- Is the goal prediction, explanation, or a decision about moving plants?

These questions change the mathematics. If three measurements come from one plant, the rows are not three independent plants. If tomorrow's greenhouse differs from today's garden, past accuracy may not transfer.

## Explore before fitting

**Exploratory data analysis** means examining structure and defects without pretending the exploration was a pre-registered confirmation. Useful first checks include:

1. count rows and missing entries;
2. identify units and plausible ranges;
3. look for duplicate units or impossible combinations;
4. sort each numerical column and inspect its minimum, middle, and maximum;
5. compare groups that may have different collection processes;
6. draw or tabulate the relationship between feature and outcome.

For the five seedlings, growth rises as sunlight rises, although not by a perfectly constant amount. The change from A to B is $0.5$ cm; from D to E it is $0.2$ cm. A straight-line rule could summarize the trend, but the table is too small to establish a universal law.

An unusual row should be investigated, not automatically erased. A height of $29$ cm might be a decimal-point error, a different plant, or a genuine extreme. Each explanation suggests a different action. Deleting it solely because it spoils a graph hides uncertainty.

## A baseline is part of the question


**Worked example.**
Before building a flexible predictor, choose a **baseline**. A simple baseline predicts the average training outcome for every new row. For outcomes $1.1,1.6,2.0,2.7,2.9$, the average is

$(1.1+1.6+2.0+2.7+2.9)/5 = 2.06$ cm.

If a complicated rule cannot improve meaningfully on this baseline for genuinely unseen seedlings, its complexity has not earned its place.

One way to measure prediction error is the residual

$$residual = observed outcome - predicted outcome$$

Squaring residuals makes every contribution nonnegative and emphasizes large misses. The **mean squared error** is the average of those squared residuals. Its unit is squared centimetres, so the square root is often easier to interpret in centimetres.

The metric is a value choice. Absolute error and squared error treat large misses differently. Classification accuracy can hide rare but costly mistakes. Select a metric that represents the actual prediction task, not merely one that makes a model look good.

## Training is not testing

If a rule is designed and evaluated on the same rows, it can benefit from coincidences in those rows. Split responsibilities:

- **training data** determine fitted parameters;
- **validation data** guide choices such as complexity;
- **test data** provide a final held-out assessment of the chosen procedure.

A tiny demonstration might train on seedlings A, C, and E, then test on B and D. The test outcomes must not influence the fitted rule. If you inspect them repeatedly while changing the rule, they have become validation or training information, whatever the filename says.

The split must imitate use. A random row split can be dishonest when predicting the future, a new hospital, or a new person. Future rows should remain later; all records from one person should remain together. Leakage happens whenever information unavailable at prediction time crosses into the feature construction, fitting, or model-selection process.

## Flexibility can learn signal or noise

A straight line bends zero times. A high-degree polynomial can weave through many points. A nearest-neighbor rule can copy a nearby outcome. A neural network composes adjustable linear combinations and nonlinear transformations. A kernel method builds predictions from similarities to training inputs.

These are different families, but all face a common tension. Too little flexibility misses structure; too much can chase measurement noise and accidents. A model that matches every training outcome may have poor test error.

**Regularization** makes some fitted rules more expensive than others. For a polynomial, a penalty can discourage large nonconstant coefficients. For a smooth similarity model, a penalty can discourage a rough, high-amplitude fitted function. The fitted rule balances

$$training mismatch + \lambda \times complexity penalty$$

The nonnegative number $\lambda$ controls the balance. At $\lambda=0$, only training mismatch matters. A large $\lambda$ can oversimplify. Regularization expresses a preference; it does not prove that preference matches the world.

Use the [Regularization & Kernel Learning Observatory](../apps/atlas/index.html#/labs?lab=visual-lab-regularization-kernel-learning) to change polynomial degree, kernel bandwidth, and $\lambda$ on deterministic examples. The exact residual table remains available without canvas or colour.

## Similarity, uncertainty, and decisions

An RBF kernel assigns high similarity to nearby numerical inputs and similarity near zero to far-apart inputs. A kernel predictor combines these similarities. A **Gaussian process** goes further: it uses a kernel inside a probability model over possible functions and, under declared noise assumptions, produces a posterior distribution rather than only a curve.

A graph can represent conditional independence: perhaps growth depends on sunlight and water, while a sensor reading depends on actual water. A graph is not automatically causal. Arrows in a Bayesian network encode a factorization chosen for a probability model; causal conclusions need stronger assumptions and a study design.

In sequential decisions, an action changes what happens next. A watering controller must consider future soil state, not only today's reward. Reinforcement learning studies such problems under a Markov decision model. The model must name states, actions, transition probabilities, rewards, and what information is observed.

These advanced ideas are not “AI magic.” They are mathematical models with inputs, objectives, algorithms, assumptions, and failure boundaries.

## What a test error does and does not say

A small test error says the fixed procedure performed well on the fixed held-out rows under the chosen metric. It does not by itself show:

- that the same accuracy holds for a population;
- that future conditions are unchanged;
- that every subgroup receives similar accuracy;
- that the model discovered a cause;
- that using the prediction improves a decision;
- that the outcome was measured fairly or meaningfully.

Statistical guarantees require a sampling or exchangeability assumption and account for selection. Decisions require costs and alternatives. Causal claims require a causal design or defensible causal assumptions.

## Worked exercises

<a id="deep-dive-data-prediction-first-encounter-ex-1"></a>

**Exercise 1.**

**1. Find a leakage feature.** A hospital model predicts whether a patient will be readmitted. One proposed feature is “number of follow-up calls made during the month after discharge.” Why is this unsafe for a prediction made at discharge?
<details>
<summary>Hint 1</summary>

Fix the prediction time before deciding whether a candidate feature is usable.
</details>
<details>
<summary>Hint 2</summary>

A feature recorded after discharge may contain information from the outcome period itself.
</details>
<details>
<summary>Solution</summary>

The future month's calls are not known at discharge and may themselves respond to early signs of readmission. Using them leaks future information into the predictor. Replace the feature with information genuinely available at the decision time.

</details>

<a id="deep-dive-data-prediction-first-encounter-ex-2"></a>

**Exercise 2.**

**2. Compute baseline error.** Training outcomes are $1,2,3$. The mean baseline predicts $2$. What is its training MSE?
<details>
<summary>Hint 1</summary>

Subtract the constant baseline from each of the three training outcomes.
</details>
<details>
<summary>Hint 2</summary>

Square the three residuals and average them for the mean squared error.
</details>
<details>
<summary>Solution</summary>

Residuals are $-1,0,1$; squared residuals are $1,0,1$. Their mean is $2/3$.

</details>

### Further practice

**3. Audit a split.** A dataset has five images for each patient. Why should all images for one patient stay in one split?

**Answer.** Images from one person share anatomy, acquisition conditions, and possibly near-duplicates. Splitting them across training and test lets the model exploit person-specific information and overstates performance on new patients.

**4. Training versus test.** Rule A has training MSE $0.01$ and test MSE $0.40$; rule B has training MSE $0.08$ and test MSE $0.10$. Which fact can be stated without predicting the future?

**Answer.** On this fixed split and metric, A fits training better and B predicts the held-out rows better. Whether B will be better in deployment needs an assumption connecting those test rows to deployment and uncertainty about finite test data.

**5. Prediction is not causation.** Sunlight and growth are associated. Why does the table not prove that adding one hour of sunlight causes a particular growth increase?

**Answer.** Water, plant variety, temperature, and placement may affect both recorded sunlight and growth. An observational predictive association does not identify the result of intervening on sunlight.

## Continue

The standalone [Mathematics for Machine Learning course](#/courses/atlas-mathematics-for-machine-learning) repairs the linear algebra, calculus, probability, and optimization needed for formal models. The [trustworthy predictive workflow](recipe-trustworthy-predictive-model.md) turns these questions into an auditable project. Later books distinguish generalization theory, computation and backpropagation, probabilistic structure, data geometry, and sequential decisions.
