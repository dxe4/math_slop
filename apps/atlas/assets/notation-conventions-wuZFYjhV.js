var e=`---
parent_id: book-statistical-learning-generalization
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## General mathematical notation

### Sets and spaces

- $\\mathbb{N}$: the natural numbers $\\{1, 2, 3, \\dots\\}$. When $0$ is included, the text says so explicitly.
- $\\mathbb{R}$: the real numbers.
- $\\mathbb{R}^{d}$: $d$-dimensional Euclidean space.
- $[n]$: the set $\\{1, 2, \\dots, n\\}$.
- $\\mathcal{P}(A)$: the power set of $A$.

### Norms and inner products

- $\\|v\\|_{2}$: the Euclidean ($\\ell_{2}$) norm of vector $v$.
- $\\|v\\|_{1}$: the $\\ell_{1}$ norm of vector $v$.
- $\\|v\\|_{\\infty}$: the maximum norm of vector $v$.
- $\\langle u, v \\rangle$ or $u^{T}v$: the standard inner product.
- $\\|w\\|_{2} \\le B$: a norm constraint on a weight vector.

### Probabilistic notation

- $\\mathbb{P}(E)$: probability of event $E$.
- $\\mathbb{E}[X]$: expectation of random variable $X$.
- $\\operatorname{Var}(X)$: variance of $X$.
- $\\mathbb{E}_{S}[\\cdot]$: expectation over the random sample $S$.
- $\\mathbb{E}_{\\sigma}[\\cdot]$: expectation over Rademacher random variables $\\sigma_{i} \\in \\{-1, +1\\}$.
- IID: independent and identically distributed.
- a.s.: almost surely.

## Learning-theoretic notation

### The learning tuple

- $X$: input space.
- $Y$: outcome (label) space.
- $Z = X \\times Y$: the space of labeled instances.
- $P$: the target distribution on $Z$.
- $S = (Z_{1}, \\dots, Z_{n})$: a sample of $n$ IID draws from $P$.
- $H$: hypothesis class (set of predictors).
- $h: X \\to Y$ (or to a decision space derived from $Y$): a predictor.
- $\\ell(h, z)$: loss of predictor $h$ on instance $z$.
- $R(h) = \\mathbb{E}_{P}[\\ell(h, Z)]$: population risk.
- $\\hat{R}_{S}(h) = (1/n)\\sum_{i=1}^{n}\\ell(h, Z_{i})$: empirical risk on sample $S$.
- $h_{S}$ or $\\hat{h}$: predictor returned by the algorithm on sample $S$.
- $h_{P}$ or $h^{*}$: a population risk minimizer over all measurable predictors.
- $h_{H} \\in \\operatorname{argmin}_{h \\in H} R(h)$: a population risk minimizer over $H$.

### Approximation--estimation--optimization decomposition

- $\\varepsilon_{\\text{approx}} = R(h_{H}) - R(h_{P})$: approximation error.
- $\\varepsilon_{\\text{est}} = R(\\hat{h}) - R(h_{H})$: estimation error.
- $\\varepsilon_{\\text{opt}}$: optimization error (how close the algorithm comes to the empirical minimum).
- $\\varepsilon_{\\text{gen}}$: uniform deviation bound.

### Complexity measures

- $\\operatorname{VC}(H)$: VC dimension of binary hypothesis class $H$.
- $\\Pi_{H}(n)$: growth function (maximum number of dichotomies on $n$ points).
- $\\hat{\\mathfrak{R}}_{S}(F)$: empirical Rademacher complexity of function class $F$ on sample $S$.
- $\\mathfrak{R}_{n}(F)$: expected Rademacher complexity.
- $\\beta$: uniform stability parameter.
- $M = |H|$: cardinality of a finite hypothesis class.

### Concentration and uniform convergence

- Hoeffding's inequality: for bounded independent summands, $\\mathbb{P}(|\\bar{X} - \\mu| > \\varepsilon) \\le 2\\exp(-2n\\varepsilon^{2})$ (when variables lie in $[0, 1]$).
- McDiarmid's inequality: bounded-differences concentration.
- Union bound: $\\mathbb{P}(\\bigcup_{i} E_{i}) \\le \\sum_{i}\\mathbb{P}(E_{i})$.
- Sauer--Shelah lemma: $\\Pi_{H}(n) \\le \\sum_{j=0}^{d}\\binom{n}{j}$ for $n>d=\\operatorname{VC}(H)$; when $1\\le d<n$, the sum is at most $(en/d)^d$, while for $d=0$ it equals $1$.

### Online learning

- $T$: time horizon (number of rounds).
- $\\text{Regret}_{T} = \\sum_{t=1}^{T}\\ell_{t}(h_{t}) - \\min_{h \\in H}\\sum_{t=1}^{T}\\ell_{t}(h)$: regret against class $H$.
- $\\eta$: learning rate.
- Hedge / exponential weights: $w_{t+1, i} = w_{t, i}\\exp(-\\eta\\ell_{t, i})$.

### Regularization and model selection

- $\\lambda$: regularization hyperparameter.
- $\\Omega(h)$: regularizer (e.g., $\\|w\\|_{2}^{2}$, $\\|w\\|_{1}$).
- $k$-fold cross-validation: data split into $k$ folds for procedure evaluation.
- Nested cross-validation: outer loop for performance estimation, inner loop for hyperparameter selection.

### Calibration and fairness

- $Q \\in [0, 1]$: probabilistic forecast.
- Calibration: $\\mathbb E[Y\\mid Q]=Q$ almost surely, equivalently $\\mathbb P(Y=1\\mid Q=q)=q$ for $Q$-almost every $q$ when a regular conditional probability is used.
- False positive rate: $\\mathbb{P}(\\hat{Y} = 1 \\mid Y = 0)$.
- False negative rate: $\\mathbb{P}(\\hat{Y} = 0 \\mid Y = 1)$.

### Distribution shift

- $P_{\\text{train}}$: training distribution.
- $P_{\\text{target}}$: deployment distribution.
- $w(x) = p_{\\text{target}}(x)/p_{\\text{train}}(x)$: importance weight (density ratio).
- DRO: distributionally robust optimization.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated hypotheses | Definitions, inequalities, combinatorial arguments |
| Sketch | Recoverable proof outline; standard steps suppressed | Textbook arguments, standard symmetrization |
| Empirical observation | Experimental or practical pattern | Benchmarks, case studies |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "VC Dimension".
- Chapter IDs are used in internal links: \`vc-dimension\`, \`rademacher-complexity\`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\le$, $\\to$, and $\\in$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};