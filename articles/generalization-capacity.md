
# Generalization: Why Fitting Data Is Not Learning

**Before reading.** Read [Statistical Experiments and Observation Laws](../books/principles-statistical-inference/statistical-experiments-and-observation-laws.md), [Lines for Description and Prediction](../books/statistics-with-r/simple-linear-models.md), [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md) and [Convexity, Optimality, and Dual Certificates](../books/optimization-backprop-from-scratch/convexity-optimality-duality.md). These are preparation for the ideas used below.

A model can memorize every training example and still fail tomorrow. Learning theory makes the gap precise: training minimizes performance on an observed sample, while useful prediction requires low risk on new observations from a target process.

## Two risks

Let data pairs $Z=(X,Y)$ follow an unknown distribution $P$. A predictor $h$ incurs loss $ell(h,Z)$. Its population risk is

$$R(h)=E_{P}[ell(h,Z)]$$

Given independent observations $Z_{1},\ldots,Z_{n}$, empirical risk is

$$\widehat{R}_{n}(h)=(1/n) \sum_{i} ell(h,Z_{i})$$

Empirical risk minimization selects $\widehat{h}$ with low $\widehat{R}_{n}$. The generalization gap is $R(\widehat{h})-\widehat{R}_{n}(\widehat{h})$. The subtlety is that $\widehat{h}$ depends on the same data used to evaluate its empirical risk. A concentration bound for one fixed predictor does not automatically cover a predictor chosen after trying many.

## A finite-class derivation

Assume losses lie in $[0,1]$, examples are independent and identically distributed, and the hypothesis class $H$ has finite size $M$. Hoeffding's inequality gives, for one fixed $h$,

$$P(|R(h)-\widehat{R}_{n}(h)|>\epsilon) \le 2 \exp(-2n \epsilon^{2})$$

Apply the union bound over all $M$ predictors:

$$P(exists h \in H: |R(h)-\widehat{R}_{n}(h)|>\epsilon)$$

$$\le 2M \exp(-2n \epsilon^{2})$$

Set the right side to $\delta$ and solve:

$$\epsilon=\sqrt{\frac{\log(2M/\delta)}{2n}}$$

Therefore, with probability at least $1-\delta$, *simultaneously for every* $h$,

$$R(h)\le\widehat{R}_{n}(h)+\sqrt{\frac{\log(2M/\delta)}{2n}}$$

The logarithm of class size measures capacity. More candidates allow better fitting but increase the amount of chance agreement one must guard against. More data shrinks the bound like $1/\sqrt{n}$.

### Worked comparison

**Worked example.**

Suppose $n=1000$, $M=100$, and $\delta=0.05$. Then

$$\epsilon=\sqrt{\frac{\log(4000)}{2000}}
\approx\sqrt{\frac{8.294}{2000}}\approx0.0644$$

A classifier with training error $0.08$ is certified only to have population error at most about $0.144$ under these assumptions. This bound may be conservative, but its interpretation is honest: before sampling, the whole training procedure fails to receive this simultaneous guarantee with probability at most $0.05$.

If a million candidates were searched, $\epsilon$ becomes about $0.094$. Capacity enters logarithmically for a finite class, yet unrecorded experimentation can still materially weaken an apparent result.

## Infinite classes need structural capacity

Linear separators have infinitely many real-valued parameters, so counting models fails. VC dimension instead asks for the largest number of input points that the class can label in every possible binary pattern.

Thresholds $h_{a}(x)=1[x\ge a]$ on the real line have VC dimension one. Any single point can receive either label by moving $a$, but two ordered points cannot realize the labeling $(1,0)$. Intervals $1[a\le x\le b]$ have VC dimension two. In $R^{d}$, affine halfspaces have VC dimension $d+1$.

Generalization bounds replace $\log M$ by a term involving VC dimension, roughly

$$\sqrt{\frac{d\log(n/d)+\log(1/\delta)}{n}}$$

The exact constants and variants matter, but the message survives: useful learning needs sample size large relative to effective capacity.

## Regularization controls effective freedom

For linear regression, ridge fitting minimizes

$$(1/n)\lVert Xw-y\rVert_{2}^{2} + \lambda \lVert w\rVert_{2}^{2}$$

The first term rewards fit; the second discourages large coefficients. Differentiating and setting the gradient to zero gives

$$(X^{T} X+n \lambda I)w=X^{T} y$$

so

$$\widehat{w}=(X^{T} X+n \lambda I)^{-1}X^{T} y$$

when the inverse exists. Adding $n \lambda I$ lifts small eigenvalues of $X^{T} X$, reducing sensitivity to noisy directions. It introduces bias while often reducing variance.

Regularization does not merely “prevent big numbers.” It expresses a preference and changes the hypothesis effectively explored. Weight decay, early stopping, margin maximization, data augmentation, and architecture all impose forms of capacity control.

## Validation is part of the algorithm

A sound workflow treats every data-dependent choice as training:

```text
split data to mimic deployment
for each candidate complexity or regularization value:
    fit using training folds only
    evaluate on validation folds
choose the candidate by a declared rule
refit on permitted development data
evaluate once on untouched test data
report uncertainty and the complete selection process
```

If the test set influences feature design, thresholds, or hyperparameters, it has become training data. Repeated public-leaderboard submissions can overfit a test set even without seeing its labels.

For time series, random splitting usually leaks future regimes into the past. For patients, images from one patient must not cross groups. Deployment-aware independence is more important than a fashionable cross-validation variant.

## Distribution shift breaks the central bridge

Generalization theory usually connects empirical and population risk under a shared distribution. Deployment may differ:

- covariate shift changes $P(X)$;
- label shift changes class frequencies;
- concept shift changes $P(Y|X)$;
- feedback changes the world because predictions affect decisions.

No amount of in-distribution sample size guarantees performance after an unconstrained shift. One must model allowable shifts, collect representative data, monitor, or make a robust decision with explicit uncertainty.

## Optimization error is not generalization error

It helps to separate:

$$excess risk = approximation error + estimation error + optimization error$$

Approximation error comes from a class unable to express a good rule. Estimation error comes from finite data selecting the wrong member. Optimization error comes from failing to find the intended empirical solution. Making a neural network fit training data more precisely addresses only the last of these—and may increase estimation error.

## Assumptions and failure modes

- IID sampling can fail through time dependence, clusters, or selection bias.
- Bounded-loss inequalities do not directly cover unbounded squared loss without tail assumptions or robust methods.
- A small average error can conceal disastrous subgroup performance.
- Cross-validation estimates a procedure under its split design, not every future environment.
- Hyperparameter search size, preprocessing, and stopping rules belong in the capacity audit.
- A theoretical upper bound can be loose; looseness is not evidence that generalization is automatic.
- Prediction guarantees do not imply causal effects.

## Exercises

<a id="deep-dive-generalization-capacity-ex-1"></a>

### Exercise 1

1. With $M=20$, $n=500$, and $\delta=0.1$, compute the finite-class $\epsilon$ approximately.

<details>
<summary>Hint 1</summary>

Locate the finite-class error formula and identify its three inputs M, n and delta.
</details>

<details>
<summary>Hint 2</summary>

The logarithm contains twice M divided by delta; divide by twice n before taking the square root.
</details>

<details>
<summary>Solution</summary>

$\sqrt{\log(400)/1000}\approx\sqrt{5.991/1000}\approx0.0774$.

</details>

<a id="deep-dive-generalization-capacity-ex-2"></a>

### Exercise 2

2. Explain why selecting the best of 100 classifiers needs a simultaneous bound rather than 100 separate 95% claims.

<details>
<summary>Hint 1</summary>

The selected classifier was chosen after looking at the same sample.
</details>

<details>
<summary>Hint 2</summary>

A bound for each fixed classifier need not cover the best-looking one; account for all one hundred candidates together.
</details>

<details>
<summary>Solution</summary>

Selection preferentially chooses a classifier with favorable sample noise; a union or uniform bound accounts for searching the collection.

</details>

### Further exercises

3. Show that intervals on the line can shatter two distinct points.
4. What happens to the ridge solution as $\lambda$ becomes extremely large?
5. Give a deployment setting where random train/test splitting is misleading.

## Answers


3. For ordered points $x_{1}<x_{2}$, use an empty/far interval for $(0,0)$, a small interval around either point for $(1,0)$ or $(0,1)$, and an interval covering both for $(1,1)$.
4. Coefficients shrink toward zero, increasing bias and eventually approximating the constant baseline allowed by the model setup.
5. Predicting next month's demand: a random split lets later seasonal conditions inform training, unlike real deployment. Patient records and geographic transfer provide other examples.

## Connections

This deep dive links **statistical inference** to **statistical learning**, uses **algorithms and complexity** to measure search, and relies on **convex optimization** for regularized fitting. Continue to **learning theory** for Rademacher complexity and stability, **causal inference** for intervention questions, and **optimal transport** for structured distribution shift.
