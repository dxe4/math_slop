var e=`---
id: book-statistical-learning-generalization
title: "Statistical Learning: Risk, Capacity, and Generalization"
level: graduate
estimated_minutes: 330
license: CC BY-SA 4.0
---

# Statistical Learning: Risk, Capacity, and Generalization {#section-1-statistical-learning-risk-capacity-and-generalization}

Fitting is an optimization statement about observed data. Learning is a probabilistic statement about performance beyond those data. This book develops the mathematical bridge and labels every load-bearing assumption.

Prerequisites are probability, statistical inference, basic real analysis, and convex optimization. The [Mathematics for Machine Learning course](#/item/course-mathematics-for-machine-learning) supplies a gentler route. The existing [generalization deep dive](#/item/deep-dive-generalization-capacity) is a compact preview; this book emphasizes reusable proof architecture, algorithm-dependent complexity, validation, and failure under shift.

This L4 book has eighteen chapters, with worked examples and supported exercises. The original ten-topic overview below remains a short preview; use the [reader guide](statistical-learning-generalization/front-matter/reader-guide.md) for the full route, including PAC learning, no free lunch, chaining, margins, convex SGD, boosting, PAC-Bayes and minimax bounds.

<a id="section-7-1-the-learning-problem-is-a-tuple"></a>
## 1. The learning problem is a tuple {#section-9-1-the-learning-problem-is-a-tuple}

A supervised learning problem specifies:

- an input space $X$ and outcome space $Y$;
- a target distribution $P$ on $Z=X\\times Y$;
- a hypothesis class $H$ of predictors;
- a loss $\\ell(h,z)$;
- a sample-generating mechanism;
- an algorithm mapping a sample to a predictor.

Population and empirical risks are

$R(h)=\\mathbb{E}_{P}[\\ell(h,Z)]$,

$\\hat{R}_{S}(h)=(1/n)\\sum_{i=1}^{n} \\ell(h,Z_{i})$.

If the sample $S=(Z_{1},...,Z_{n})$ is IID from $P$, empirical averages estimate fixed-predictor expectations. The learned $h_{S}$ is not fixed independently of $S$; uniform or algorithm-dependent reasoning must account for selection.

The target changes with the loss. Under square-integrability, squared loss targets $\\mathbb{E}[Y \\mid X=x]$; absolute loss targets any conditional median when the median is not unique; logarithmic loss targets the full conditional distribution when the model class can represent it. A statement about “the best predictor” is incomplete without its loss and class.

<a id="section-28-2-approximation-estimation-and-optimization"></a>
## 2. Approximation, estimation, and optimization {#section-30-2-approximation-estimation-and-optimization}

Let $h_{P}$ minimize risk over all measurable predictors allowed by the decision problem, and let

$h_{H}\\in \\operatorname{argmin}_{h\\in H} R(h)$.

For this displayed decomposition, assume both minima are attained. If either infimum is not attained, use predictors within $\\eta$ of the relevant infimum; the same argument then carries the corresponding $\\eta$ approximation terms rather than inventing nonexistent minimizers.

Let the algorithm return $\\hat{h}$ whose empirical risk is within $\\varepsilon_{opt}$ of the empirical minimum:

$\\hat{R}(\\hat{h})\\le \\inf_{h\\in H}\\hat{R}(h)+\\varepsilon_{opt}$.

Then excess risk over the unrestricted target decomposes as

$R(\\hat{h})-R(h_{P})$

$=[R(h_{H})-R(h_{P})] + [R(\\hat{h})-R(h_{H})]$.

The first bracket is approximation error. For the second, add and subtract empirical risks. On an event where

$\\sup_{h\\in H}\\lvert R(h)-\\hat{R}(h)\\rvert \\le \\varepsilon_{gen}$,

we obtain

$R(\\hat{h})-R(h_{H})\\le 2\\varepsilon_{gen}+\\varepsilon_{opt}$.

Proof: replace $R(\\hat{h})$ by $\\hat{R}(\\hat{h})+\\varepsilon_{gen}$, use approximate empirical optimality against $h_{H}$, then replace $\\hat{R}(h_{H})$ by $R(h_{H})+\\varepsilon_{gen}$.

This small argument separates three remedies. A richer class may reduce approximation error but enlarge estimation error. More data can reduce estimation error. A better solver reduces optimization error. None guarantees the others improve.

<a id="section-58-3-uniform-convergence-for-a-finite-class"></a>
## 3. Uniform convergence for a finite class {#section-60-3-uniform-convergence-for-a-finite-class}

Assume $Z_{i}$ are IID, each loss lies in $[0,1]$, and $H$ is a fixed finite class of size $M$. For one fixed $h$, Hoeffding gives

$\\mathbb{P}(\\lvert \\hat{R}(h)-R(h)\\rvert >\\varepsilon )\\le 2\\exp(-2n\\varepsilon^{2})$.

By the union bound,

$\\mathbb{P}(\\sup_{h\\in H}\\lvert \\hat{R}(h)-R(h)\\rvert >\\varepsilon )\\le 2M \\exp(-2n\\varepsilon^{2})$.

Setting the right side to $\\delta$ gives: with probability at least $1-\\delta$,

$\\sup_{h\\in H}\\lvert \\hat{R}(h)-R(h)\\rvert \\le \\sqrt{\\log(2M/\\delta )/(2n)}$.

The event is simultaneous, so it covers the empirical minimizer selected from $H$. It does not cover a class redesigned after inspecting the same data unless that search is included in the class or controlled another way.

**Sample calculation.** With $M=500$, $n=2000$, and $\\delta =0.05$, the deviation bound is

$\\sqrt{\\log(20000)/4000}\\approx \\sqrt{9.903/4000}\\approx 0.0498$.

This is a worst-case certificate for bounded loss, not an estimate of the actual gap.

<a id="section-80-4-vc-dimension-counts-realizable-label-patterns"></a>
## 4. VC dimension counts realizable label patterns {#section-82-4-vc-dimension-counts-realizable-label-patterns}

For binary classifiers, a set of inputs is **shattered** by $H$ when every binary labeling of that set is realized by some member of $H$. The VC dimension is the largest shattered-set size, or infinity if no finite maximum exists.

Thresholds on the line have VC dimension one. Intervals have VC dimension two. Affine halfspaces in $R^{d}$ have VC dimension $d+1$.

The growth function $\\Pi_{H}(n)$ counts the maximum number of dichotomies $H$ realizes on $n$ inputs. Sauer–Shelah says that if VC dimension is $1\\le d<n$,

$\\Pi_{H}(n)\\le \\sum_{j=0}^{d} \\binom{n}{j}\\le (en/d)^{d}$.

For $d=0$, the binomial sum is $1$ and no quotient by $d$ is used.

Replacing a literal class count by this data-labeling count and applying symmetrization yields uniform convergence rates of order

$\\sqrt{(d \\log(en/d)+\\log(1/\\delta ))/n}$

up to universal constants and variant-specific logarithms. The assumptions—binary loss, IID sampling, measurability, and a fixed class—remain material.

VC dimension is not parameter count. Redundancy, constraints, and weight sharing alter the represented class. Margins and norms define restricted classes or other complexity measures; an algorithm's implicit bias affects which functions it reaches but does not change the VC dimension of the original full class. Conversely, a class with finite VC dimension can still be computationally hard to optimize.

<a id="section-100-5-rademacher-complexity-measures-samplewise-richness"></a>
## 5. Rademacher complexity measures samplewise richness {#section-102-5-rademacher-complexity-measures-samplewise-richness}

For a real-valued function class $F$ and fixed sample $z_{1},...,z_{n}$, define empirical Rademacher complexity

$\\hat{Rad}_{S}(F)=\\mathbb{E}_\\sigma [\\sup_{f\\in F}(1/n)\\sum_{i} \\sigma_{i} f(z_{i})]$,

where the $\\sigma_{i}$ are independent random signs. A rich class can correlate strongly with random signs; a constrained class cannot.

Under IID sampling, bounded functions, and standard measurability conditions, symmetrization gives the expected one-sided deviation bound

$E_{S}[\\sup_{f\\in F}(\\mathbb{E}[f(Z)]-(1/n)\\sum_{i} f(Z_{i}))]\\le 2E_{S}[\\hat{Rad}_{S}(F)]$.

Concentration converts this expectation statement into high-probability variants with additional square-root terms. Constants depend on whether one uses expected or empirical complexity and one- or two-sided bounds; do not quote a hybrid formula without naming the version.

For linear functions $f_{w}(x)=w^{T}x$ with $\\lVert w \\rVert_{2}\\le B$ and inputs $\\lVert x_{i} \\rVert_{2}\\le C$,

$\\hat{Rad}_{S}(F)\\le BC/\\sqrt{n}$.

Proof: move the supremum through the inner product, use duality to obtain $(B/n)\\mathbb{E}\\lVert \\sum_{i}\\sigma_{i}x_{i}\\rVert$, apply Jensen, and calculate $\\mathbb{E}\\lVert \\sum_{i}\\sigma_{i}x_{i}\\rVert^{2}=\\sum_{i}\\lVert x_{i}\\rVert^{2}\\le nC^{2}$.

This shows why norm constraints can control effective capacity even when parameter values are continuous.

<a id="section-122-6-stability-studies-the-algorithm-not-only-the-class"></a>
## 6. Stability studies the algorithm, not only the class {#section-124-6-stability-studies-the-algorithm-not-only-the-class}

An algorithm $A$ is uniformly stable with parameter $\\beta$ if replacing one training example changes the loss on any test point by at most $\\beta$:

$\\sup_{z} \\lvert \\ell(A(S),z)-\\ell(A(S'),z)\\rvert \\le \\beta$

whenever $S,S'$ differ in one row. Under IID sampling and integrability, stability controls the expected generalization gap. Strongly convex regularized empirical-risk problems often have stability of order $1/(\\lambda n)$ under Lipschitz assumptions.

This explains a tradeoff: stronger regularization can increase bias yet reduce sensitivity to one observation. The conclusion depends on convexity, Lipschitz constants, and the precise regularizer. Nonconvex neural training can be stable in practice without the simple theorem applying.

Differential privacy also limits sensitivity to one record and can imply generalization guarantees, but privacy, accuracy, and computational claims require their own definitions. Stability is not a synonym for privacy.

<a id="section-134-7-regularization-and-model-selection"></a>
## 7. Regularization and model selection {#section-136-7-regularization-and-model-selection}

Penalized empirical risk solves

$\\min_{h\\in H} \\hat{R}(h)+\\lambda \\Omega (h)$.

Constrained fitting solves $\\min \\hat{R}(h)$ subject to $\\Omega (h)\\le t$. Under convexity and suitable constraint qualifications, Lagrange duality relates some values of $\\lambda$ and $t$. The correspondence is not automatically one-to-one, and nonconvex penalties can break the simple equivalence.

Cross-validation estimates the performance of a **procedure**: preprocessing, fitting, hyperparameter grid, and selection rule. Every fitted transform belongs inside each training fold. Nested cross-validation is needed when the outer performance estimate must include inner hyperparameter selection.

For time-ordered deployment, use forward or rolling splits. For clustered data, split clusters. For geographic transfer, hold out regions. “Five-fold cross-validation” is not a design until the exchangeability unit is declared.

Multiple comparisons matter. Trying thousands of feature sets, seeds, and architectures and reporting the best validation result induces selection bias. Preserve an untouched assessment or account for adaptive reuse.

<a id="section-148-8-calibration-subgroups-and-decisions"></a>
## 8. Calibration, subgroups, and decisions {#section-150-8-calibration-subgroups-and-decisions}

For a binary probabilistic classifier with forecast $Q$, exact population calibration means $\\mathbb{P}(Y=1\\mid Q)=Q$ almost surely under a named population. Reliability diagrams replace this conditional statement by bins and therefore add approximation and sampling error. Calibration can hold marginally and fail within subgroups, or hold in one environment and fail after prevalence shifts.

Average risk can conceal uneven harm. Report meaningful subgroup counts and uncertainty, while avoiding a fishing expedition over tiny groups. Compatibility between fairness criteria depends on the exact score, threshold, conditioning, and nondegeneracy assumptions; unequal base rates alone are not an impossibility proof. Selecting operational criteria is also a normative decision, not something accuracy decides.

A predictor is not yet a decision rule. Decisions need actions, costs, resource constraints, and consequences. A lower prediction loss need not improve utility if errors have asymmetric costs or if predictions change behavior.

No predictive guarantee identifies a treatment effect. Causal inference asks about counterfactual interventions and needs randomized design or defensible identification assumptions.

<a id="section-158-9-shift-and-robustness"></a>
## 9. Shift and robustness {#section-160-9-shift-and-robustness}

IID generalization connects training and future samples from the same $P$. Under covariate shift, $\\mathbb{P}(X)$ changes while $\\mathbb{P}(Y\\mid X)$ is assumed invariant. Under label shift, class proportions change while $\\mathbb{P}(X\\mid Y)$ is assumed invariant. Under concept shift, $\\mathbb{P}(Y \\mid X)$ changes. These are assumptions about two environments, not diagnoses obtainable from names alone, and unrestricted conditional target changes admit no uniformly small-risk rescue from source data alone.

Importance weighting uses a density ratio $w(x)=p_{target}(x)/p_{train}(x)$ under covariate shift and support overlap. For a fixed predictor and integrable weighted loss, the invariant conditional law gives $\\mathbb{E}_{target}[\\ell(h(X),Y)]=\\mathbb{E}_{train}[w(X)\\ell(h(X),Y)]$. If target inputs occur where training density is zero, the ratio is undefined and training data cannot reveal their outcomes. Estimated predictors or ratios require an additional data-dependence analysis; very large ratios can increase variance.

Distributionally robust optimization minimizes worst-case risk over a declared neighborhood of distributions. Optimal transport can define that neighborhood. The guarantee is only as meaningful as the chosen cost, radius, and assumption that deployment lies inside it.

Stress tests should vary plausible prevalence, missingness, measurement error, subgroup mix, and temporal regime. They reveal sensitivity; they do not attach probabilities to scenarios unless a probabilistic model does so.

<a id="section-168-10-online-learning-is-a-different-guarantee"></a>
## 10. Online learning is a different guarantee {#section-170-10-online-learning-is-a-different-guarantee}

In online learning, at round $t$ the learner chooses $h_{t}$, then observes loss $\\ell_{t}(h_{t})$. Regret against a comparator class is

$Regret_{T}=\\sum_{t} \\ell_{t}(h_{t})-\\min_{h\\in H}\\sum_{t} \\ell_{t}(h)$.

The two-sided statement $Regret_T=o(T)$ means average regret vanishes. A one-sided guarantee $Regret_T\\le o(T)$ yields only $\\limsup Regret_T/T\\le0$, since an adaptive learner can outperform every fixed comparator on a realized sequence. Either statement compares with the best fixed comparator in hindsight; it need not imply stochastic population-risk consistency, low absolute loss, or low regret against a changing comparator.

For prediction with expert advice and bounded losses, exponential weights achieves regret of order $\\sqrt{T \\log M}$ with a suitable learning rate. This guarantee can hold for an adversarial sequence, but it addresses a different question from IID generalization.

<a id="section-178-common-proof-and-practice-errors"></a>
## Common proof and practice errors {#section-180-common-proof-and-practice-errors}

- Applying a fixed-hypothesis concentration bound after model selection.
- Calling training convergence a generalization theorem.
- Using a bounded-loss result for unbounded squared loss without tail control.
- Treating cross-validation rows as independent when clusters cross folds.
- Assuming a regularizer is neutral rather than an inductive preference.
- Reporting a tight numerical confidence interval around a shifted or leaked design.
- Interpreting predictive variables or graph arrows causally without identification.

<a id="section-188-exercises-with-worked-answers"></a>
## Exercises with worked answers {#section-190-exercises-with-worked-answers}

**1. Excess-risk inequality.** Under the uniform event with deviation $\\varepsilon$ and exact ERM, prove $R(\\hat{h})-R(h_{H})\\le 2\\varepsilon$.

**Answer.** $R(\\hat{h})\\le \\hat{R}(\\hat{h})+\\varepsilon \\le \\hat{R}(h_{H})+\\varepsilon \\le R(h_{H})+2\\varepsilon$.

**2. Finite-class sample size.** Solve the finite-class bound for $n$ sufficient to make the deviation at most $\\varepsilon$ with confidence $1-\\delta$.

**Answer.** Require $\\sqrt{\\log(2M/\\delta )/(2n)}\\le \\varepsilon$, hence $n\\ge \\log(2M/\\delta )/(2\\varepsilon^{2})$. Round up to an integer.

**3. Threshold shattering.** Why can thresholds on $\\mathbb{R}$ not shatter two ordered points $x_{1}<x_{2}$?

**Answer.** A threshold rule $1[x\\ge a]$ cannot label the smaller point $1$ and the larger point $0$; monotonicity forbids the pattern $(1,0)$.

**4. Linear Rademacher step.** Why does $\\sup_{\\lVert w \\rVert\\le B} w^{T} v=B\\lVert v \\rVert$?

**Answer.** Cauchy–Schwarz gives at most $B\\lVert v \\rVert$, attained for $w=Bv/\\lVert v \\rVert$ when $v\\ne 0$; if $v=0$, both sides are zero.

**5. Cluster leakage.** A study has ten rows per school. What is the unit for a test of transfer to new schools?

**Answer.** Split by school, not row. Row splitting shares school-specific conditions across folds and estimates interpolation to more pupils in known schools, not transfer to unseen schools.

**6. Online nonclaim.** An algorithm has $o(T)$ regret against the best fixed action. Does that prove its average loss tends to zero?

**Answer.** No. The best fixed action may itself have large average loss. Vanishing average regret only closes the gap to that comparator.

<a id="section-214-continue"></a>
## Continue {#section-216-continue}

Use [Optimization and Backpropagation from Scratch](#/item/book-optimization-backprop-from-scratch) for computational gradients, the [structured probabilistic learning book](#/item/book-structured-probabilistic-learning) for model-based uncertainty, and the [trustworthy workflow](#/item/recipe-trustworthy-predictive-model) for an applied audit. Further study includes localized complexity, compression bounds, benign overfitting, double descent, privacy-generalization links, conformal prediction under dependence and robust learning under structured shift. These are research areas with theorem-specific questions, rather than a list of universally unresolved claims.
`;export{e as default};