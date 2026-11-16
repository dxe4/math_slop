var e=`---
parent_id: book-statistical-learning-generalization
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index {#section-1-glossary-and-index}

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow reading order.

<a id="section-3-glossary"></a>
## Glossary {#section-5-glossary}

**Approximation error.** The excess risk due to restricting the predictor to a hypothesis class $H$ rather than all measurable predictors: $R(h_{H}) - R(h_{P})$. "Approximation, Estimation, and Optimization".

**Axis-aligned rectangles.** The class of rectangles in $\\mathbb{R}^{2}$ with edges parallel to the coordinate axes; VC dimension $4$. "VC Dimension".

**Calibration.** Property of a binary probabilistic forecaster $Q$: $\\mathbb{E}[Y\\mid Q]=Q$ almost surely under a named population. Pointwise notation at a value $q$ refers to a regular conditional probability and holds for almost every forecast value, not necessarily every real number. "Calibration, Subgroups, and Decisions".

**Concept shift.** Change in the conditional distribution $P(Y \\mid X)$ between training and deployment. "Shift and Robustness".

**Covariate shift.** Change in the marginal distribution $P(X)$ while $P(Y \\mid X)$ is assumed invariant. "Shift and Robustness".

**Cross-validation.** Procedure for estimating the performance of a full learning pipeline by splitting data into folds, training on all but one, and evaluating on the held-out fold. "Regularization and Model Selection".

**Differential privacy.** Framework for bounding the influence of any single record on algorithm output; related to but distinct from stability. "Stability".

**Empirical Rademacher complexity.** Data-dependent measure of how well a function class can correlate with random noise: $\\hat{\\mathfrak{R}}_{S}(F) = \\mathbb{E}_{\\sigma}[\\sup_{f \\in F} (1/n)\\sum_{i=1}^{n}\\sigma_{i}f(Z_{i})]$. "Rademacher Complexity".

**Empirical risk.** Average loss on the training sample: $\\hat{R}_{S}(h) = (1/n)\\sum_{i=1}^{n}\\ell(h, Z_{i})$. "The Learning Problem Is a Tuple".

**Estimation error.** The excess risk due to learning from finite data: $R(\\hat{h}) - R(h_{H})$. "Approximation, Estimation, and Optimization".

**Exponential weights (Hedge).** Online learning algorithm that starts with a declared prior over experts and updates their weights by exponentiated losses. The chapter's displayed $\\sqrt{2T\\log M}$ bound uses $M\\ge2$, equal initial weights, losses in $[0,1]$, and its stated learning rate. "Online Learning".

**Finite-class uniform bound.** For a fixed class $H$ of $M$ predictors, chosen independently of an IID assessment sample, and loss in $[0,1]$, with probability at least $1 - \\delta$, $\\sup_{h \\in H}|R(h) - \\hat{R}_{S}(h)| \\le \\sqrt{\\log(2M/\\delta)/(2n)}$. "Uniform Convergence for a Finite Class".

**Growth function.** Maximum number of dichotomies a binary class can realize on $n$ points: $\\Pi_{H}(n)$. "VC Dimension".

**Halfspaces in $\\mathbb{R}^{d}$.** Homogeneous linear classifiers have VC dimension $d$; affine halfspaces have VC dimension $d + 1$. "VC Dimension".

**Hoeffding's inequality.** For independent bounded variables in $[0,1]$, $\\mathbb{P}(|\\bar{X} - \\mu| > \\varepsilon) \\le 2\\exp(-2n\\varepsilon^{2})$. "Uniform Convergence for a Finite Class".

**Hypothesis class.** Set of predictors $H$ from which the learning algorithm selects. "The Learning Problem Is a Tuple".

**Importance weighting.** Under covariate shift, support overlap, and integrability, reweighting by the true density ratio $w(x) = p_{\\text{target}}(x)/p_{\\text{train}}(x)$ gives an unbiased target-risk estimate for a fixed predictor. Estimated ratios or predictors fitted on the same rows require further analysis. "Shift and Robustness".

**Learning tuple.** The six conceptual components $((X,Y),P,H,\\ell,S,A)$ that define a supervised learning problem: input and outcome spaces, target distribution, hypothesis class, loss, sampling mechanism, and algorithm. "The Learning Problem Is a Tuple".

**Littlestone dimension.** Combinatorial complexity measure for online learning; analogous to VC dimension but for sequential prediction. "Online Learning".

**Nested cross-validation.** The inner loop selects hyperparameters and the outer held-out predictions assess that complete procedure at the outer training size and declared split design. This is not automatically an unbiased estimate for the final model refit on all data. "Regularization and Model Selection".

**Online gradient descent.** Projected convex online algorithm with $O(\\sqrt{T})$ regret on a nonempty closed convex set of finite diameter when the chosen subgradients are uniformly bounded. "Online Learning".

**Online-to-batch conversion.** Method for translating an online learning guarantee into a statistical learning guarantee by averaging predictors. "Online Learning".

**Optimization error.** Gap between the empirical risk of the returned predictor and the infimum over the class: $\\varepsilon_{\\text{opt}}$. "Approximation, Estimation, and Optimization".

**Population risk.** Expected loss under the target distribution: $R(h) = \\mathbb{E}_{P}[\\ell(h, Z)]$. "The Learning Problem Is a Tuple".

**Regret.** Cumulative loss of the learner minus the cumulative loss of the best fixed comparator in hindsight. "Online Learning".

**Ridge regression.** Linear regression with a positive squared-$\\ell_2$ penalty. The objective is strongly convex, and a uniform-stability theorem applies under the convexity, bounded-design/response or Lipschitz, common-domain, and IID hypotheses stated in "Stability". "Regularization and Model Selection".

**Sauer–Shelah lemma.** The growth function satisfies $\\Pi_H(n)\\le\\sum_{j=0}^d\\binom nj$ for $n>d=\\operatorname{VC}(H)$. For $1\\le d<n$, this sum is at most $(en/d)^d$; for $d=0$, it is $1$. "VC Dimension".

**Shattering.** A set $C$ is shattered by $H$ if every binary labeling of $C$ is realized by some $h \\in H$. "VC Dimension".

**Stability.** Sensitivity of an algorithm's output to changing one training example; uniform stability with parameter $\\beta$ implies generalization bounds. "Stability".

**Structural risk minimization.** A simultaneous class-allocation theorem justifies selecting empirical risk plus a specified complexity radius. "Regularization and Model Selection".

**Support overlap.** Requirement that $p_{\\text{train}}(x) > 0$ wherever $p_{\\text{target}}(x) > 0$; needed for importance weighting. "Shift and Robustness".

**Uniform convergence.** Bound on $\\sup_{h \\in H}|R(h) - \\hat{R}_{S}(h)|$ that holds simultaneously for all $h \\in H$. "Uniform Convergence for a Finite Class"; "VC Dimension"; "Rademacher Complexity".

**VC dimension.** Largest $d$ such that some set of size $d$ is shattered by $H$; denoted $\\operatorname{VC}(H)$. "VC Dimension".

<a id="section-71-claim-finder-with-status-guards"></a>
## Claim finder with status guards {#section-73-claim-finder-with-status-guards}

<a id="section-73-theorems"></a>
### Theorems {#section-75-theorems}

**Finite-class uniform convergence ("Uniform Convergence for a Finite Class").** For a class $H$ of $M$ predictors fixed independently of an IID sample and loss in $[0,1]$, with probability at least $1 - \\delta$, $\\sup_{h \\in H}|R(h) - \\hat{R}_{S}(h)| \\le \\sqrt{\\log(2M/\\delta)/(2n)}$.

**Sauer–Shelah lemma ("VC Dimension").** If $\\operatorname{VC}(H)=d<\\infty$ and $n>d$, then $\\Pi_H(n)\\le\\sum_{j=0}^d\\binom nj$. For $d\\ge1$, the sum is at most $(en/d)^d$; for $d=0$, it equals $1$.

**VC uniform convergence ("VC Dimension").** For the fixed countable or stated pointwise-separable binary class, iid data and $1\\le d\\le n$, the proved radius is $\\sqrt{8\\{d\\log(2en/d)+\\log(4/\\delta)\\}/n}$, with all measurability assumptions retained.

**Rademacher uniform bound ("Rademacher Complexity").** For bounded functions, with probability at least $1 - \\delta$, $\\sup_{f \\in F}(\\mathbb{E}[f(Z)] - (1/n)\\sum_{i=1}^{n}f(Z_{i})) \\le 2\\mathfrak{R}_{n}(F) + (b-a)\\sqrt{\\log(1/\\delta)/(2n)}$.

**Stability generalization bound ("Stability").** Under the chapter's replacement-neighbor convention, for a uniformly stable algorithm with parameter $\\beta$ and loss bounded in $[0,M]$, with probability at least $1 - \\delta$, $R(A(S)) - \\hat{R}_{S}(A(S)) \\le \\beta + (2n\\beta + M)\\sqrt{\\log(1/\\delta)/(2n)}$. Deletion-neighbor conventions have different factors of two.

**Exponential weights regret ("Online Learning").** For $M\\ge2$ experts, equal initial weights, losses in $[0,1]$, and learning rate $\\eta = \\sqrt{2\\log(M)/T}$, the Hedge algorithm achieves $\\text{Regret}_{T} \\le \\sqrt{2T\\log M}$.

<a id="section-87-research-boundaries"></a>
### Research boundaries {#section-89-research-boundaries}

**Bounds for specified deep nonconvex training regimes ("Stability"; "Rademacher Complexity").** Some worst-case certificates exceed the trivial loss range in common numerical regimes, while other results use margin, norm, stability, compression, distributional, or algorithmic assumptions. Obtaining informative guarantees for a precisely specified architecture, optimizer, data model, and deployment target is an active research program rather than one universal yes/no conjecture.

**Fairness criteria and decisions ("Calibration, Subgroups, and Decisions").** Compatibility or impossibility is determined only after the score, thresholds, group conditioning, error criteria, and excluded degeneracies are specified. Choosing operational goals also requires normative and domain judgment; that choice is not itself an unresolved mathematical theorem.


<a id="section-94-added-concepts-in-the-eighteen-chapter-edition"></a>
## Added concepts in the eighteen-chapter edition {#section-96-added-concepts-in-the-eighteen-chapter-edition}

**Realizable PAC learning.** A fixed class contains a zero-risk member; a consistent learner has a finite-class error certificate from the probability of avoiding its error event. [Chapter](../pac-learning-realizable-case.md).

**No free lunch.** Unseen independent target bits yield a finite minimax obstruction; distributionwise consistency and uniform PAC sample complexity have different quantifiers. [Chapter](../no-free-lunch.md).

**Metric entropy and chaining.** Covers in empirical prediction distance control signed suprema by a proved dyadic sum and truncated integral. [Chapter](../covering-numbers-and-chaining.md).

**Normalized margin.** A signed score is compared with its coefficient or convex-combination scale; arbitrary positive rescaling alone adds no separation information. [Chapter](../margins-and-linear-classes.md).

**Stochastic gradient target.** Fresh observations give a population oracle; random indices from a fixed dataset give an empirical oracle. [Chapter](../convex-learning-and-sgd.md).

**Boosting.** Persistent weighted edge reduces empirical exponential loss; population margins require a fixed-class generalization theorem. [Chapter](../boosting.md).

**PAC-Bayes.** A prior independent of the assessment sample supplies simultaneous bounds for data-selected Gibbs posteriors, with a separate vote conversion. [Chapter](../pac-bayes.md).

**Minimax testing reduction.** Separated targets and indistinguishable observation laws obstruct every estimator under a named loss. [Chapter](../minimax-lower-bounds-fano-le-cam.md).
`;export{e as default};