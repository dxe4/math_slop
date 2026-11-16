
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Probability and distributions

- $p(x)$, $p(x \mid y)$: probability density or mass function; the argument determines whether the distribution is continuous or discrete.
- $\mathbb{E}_{p}[f(X)]$: expectation of $f(X)$ under distribution $p$.
- $\operatorname{Var}(X)$, $\operatorname{Cov}(X, Y)$: variance and covariance.
- $\mathcal{N}(\mu, \Sigma)$: multivariate Gaussian distribution with mean vector $\mu$ and covariance matrix $\Sigma$.
- $\mathcal{GP}(m, k)$: Gaussian process with mean function $m$ and covariance kernel $k$.
- $X \perp\!\!\perp Y \mid Z$: conditional independence of $X$ and $Y$ given $Z$.
- $\text{KL}(q \| p)=\mathbb E_q[\log(q/p)]$: Kullback--Leibler divergence of $q$ from $p$ (when $q$ is absolutely continuous with respect to $p$).

## Linear algebra

- $A^{T}$: transpose of matrix $A$.
- $A^{-1}$: inverse of invertible matrix $A$.
- $A \succ 0$ ($A \succeq 0$): $A$ is positive definite (positive semidefinite).
- $I_{n}$: $n \times n$ identity matrix; written $I$ when dimension is clear.
- $\det A$ or $|A|$: determinant of $A$.
- $\text{tr}(A)$: trace of $A$.
- $\|v\|$: Euclidean norm of vector $v$.
- $\|A\|_{1,\mathrm{all}}=\sum_{i,j}|A_{ij}|$: all-entry elementwise $\ell_1$ norm.
- $\|A\|_{1,\mathrm{off}}=\sum_{i\ne j}|A_{ij}|$: off-diagonal penalty used for the graphical lasso in Chapter 8.
- $\kappa_{2}(A)$: condition number of $A$ in the spectral norm.
- $\epsilon_{\text{mach}}$: machine epsilon (unit roundoff).

## Kernel and Gaussian process notation

- $k: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$: positive-semidefinite kernel.
- $K$: Gram matrix with entries $K_{ij} = k(x_{i}, x_{j})$.
- $k_{*} = (k(x_{1}, x_{*}), \dots, k(x_{n}, x_{*}))^{T}$: cross-covariance vector between training points and a test point $x_{*}$.
- $k_{**} = k(x_{*}, x_{*})$: prior variance at $x_{*}$.
- $K_{y} = K + \sigma^{2}I$: covariance of noisy observations.
- $\tau^{2}$: output-scale (marginal variance) parameter of a stationary kernel.
- $h$ or $\lambda$: length-scale parameter of a kernel.
- $\sigma^{2}$: observation noise variance.
- $\mathcal{H}$: reproducing-kernel Hilbert space (RKHS) associated with kernel $k$.
- $\|f\|_{\mathcal{H}}$: RKHS norm of function $f$.

## Graphical model notation

- $G = (V, E)$: graph with vertex set $V$ and edge set $E$.
- $\text{pa}(j)$ or $\text{Pa}(X_{j})$: parents of node $j$ in a directed graph.
- $\text{ne}(v)$ or $\text{Ne}(X_{v})$: neighbors of node $v$ in an undirected graph.
- $\text{Nd}(X_{j})$: nondescendants of $X_{j}$.
- $X_{C}$: collection of variables indexed by subset $C \subseteq V$.
- $\psi_{C}(x_{C})$: potential function on clique $C$.
- $Z = \sum_{x} \prod_{C}\psi_{C}(x_{C})$: partition function.
- $\text{BIC}(G)$: Bayesian Information Criterion for graph $G$.

## Inference and learning notation

- $\alpha_{t}(z_{t})$: forward message in a hidden Markov model.
- $\beta_{t}(z_{t})$: backward message in a hidden Markov model.
- $m_{i \to j}(x_{j})$: sum-product message from node $i$ to node $j$.
- $q(x) = \prod_{i}q_{i}(x_{i})$: mean-field variational approximation.
- $\mu_{i} = \mathbb{E}_{q_{i}}[X_{i}]$: mean-field moment.
- $\mathcal{D} = \{(x_{i}, y_{i})\}_{i=1}^{n}$: data set.
- $\hat{\theta}$: maximum-likelihood or point estimate of parameters.
- $\ell(\theta)$: log-likelihood function.

## Number systems and standard structures

- $\mathbb{R}$: real numbers.
- $\mathbb{R}^{d}$: $d$-dimensional Euclidean space.
- $\mathbb{R}^{n \times d}$: space of $n \times d$ real matrices.
- $[0, \infty)$: nonnegative reals.
- $\{0, 1\}$: binary set.
- $\{-1, 1\}$: symmetric binary set.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, linear algebra, probability axioms |
| Derivation | Recoverable algebraic transformation | Matrix identities, calculus rules |
| Computational recipe | Correct up to numerical error when implemented as specified | Algorithm specification, convergence diagnostics |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Conditioning a Gaussian Process."
- Chapter IDs are used in internal links: `conditioning-a-gaussian-process`, `directed-graphical-models`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or derivation follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\le$, $\to$, and $\simeq$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
