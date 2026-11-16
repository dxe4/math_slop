
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Probability and expectation

- $\mathbb{P}(A)$: probability of event $A$.
- $\mathbb{E}[X]$, $\mathbb{E}[X \mid Y]$: expectation and conditional expectation.
- $\operatorname{Var}(X)$, $\operatorname{Cov}(X,Y)$: variance and covariance.
- $\to_{p}$, $\to_{d}$: convergence in probability and convergence in distribution.
- $\sim$: "is distributed as" or "is asymptotically equivalent to" (context clarifies).
- iid: independent and identically distributed.

## Distributions

- $\mathcal{N}(\mu, \sigma^{2})$: univariate normal with mean $\mu$ and variance $\sigma^{2}$.
- $\mathcal{N}_{p}(\mu, \Sigma)$: multivariate normal with mean vector $\mu$ and covariance matrix $\Sigma$.
- $\chi^{2}_{k}$: chi-squared distribution with $k$ degrees of freedom.
- $F_{d_{1},d_{2}}$: $F$ distribution with $(d_{1}, d_{2})$ degrees of freedom.
- $\text{Binomial}(n,p)$: binomial distribution with $n$ trials and success probability $p$.
- $\text{Poisson}(\lambda)$: Poisson distribution with rate $\lambda$.
- $\text{Uniform}(a,b)$: continuous uniform distribution on $[a,b]$.
- $\text{Wishart}_{p}(n, \Sigma)$: Wishart distribution with $n$ degrees of freedom and scale $\Sigma$.

## Matrices and vectors

- Bold lowercase $x$, $\beta$: vectors (column vectors by default).
- Bold uppercase $X$, $\Sigma$: matrices.
- $X^{T}$, $X^{-1}$, $\det(X)$: transpose, inverse, determinant.
- $\operatorname{tr}(A)$: trace of a square matrix.
- $\operatorname{diag}(a_{1}, \dots, a_{n})$: diagonal matrix with entries $a_{1}, \dots, a_{n}$.
- $\|v\|$: Euclidean norm $\sqrt{v^{T}v}$.
- $I_{p}$: $p \times p$ identity matrix.
- $\lambda_{\max}(A)$, $\lambda_{\min}(A)$: largest and smallest eigenvalues of a symmetric matrix $A$.
- $\kappa(A) = \lambda_{\max}(A)/\lambda_{\min}(A)$: condition number.
- $A \succ 0$: $A$ is symmetric positive definite.
- $A \succeq 0$: $A$ is symmetric positive semidefinite.

## Sample quantities

- $\bar{X} = n^{-1}\sum_{i=1}^{n}X_{i}$: sample mean.
- $S = (n-1)^{-1}\sum_{i=1}^{n}(X_{i} - \bar{X})(X_{i} - \bar{X})^{T}$: sample covariance matrix.
- $s^{2}$: scalar sample variance.
- $F_{n}(x) = n^{-1}\sum_{i=1}^{n}\mathbf{1}_{\{X_{i} \le x\}}$: empirical distribution function.

## Likelihood and information

- $\ell(\theta)$: log-likelihood.
- $U(\theta) = \partial\ell/\partial\theta$: score vector.
- $I(\theta) = \mathbb{E}[-\partial^{2}\ell/\partial\theta\partial\theta^{T}]$: expected (Fisher) information.
- $J(\theta) = -\partial^{2}\ell/\partial\theta\partial\theta^{T}$: observed information.
- $\text{LR} = 2[\ell(\hat{\theta}) - \ell(\tilde{\theta})]$: likelihood-ratio statistic.
- $\text{SC} = U(\tilde{\theta})^{T}I(\tilde{\theta})^{-1}U(\tilde{\theta})$: score statistic.
- $\text{W} = \hat{\theta}_{2}^{T}[\widehat{\operatorname{Var}}(\hat{\theta}_{2})]^{-1}\hat{\theta}_{2}$: Wald statistic.

## Estimating equations and sandwich variance

- $\psi(z, \theta)$: estimating function.
- $\Psi_{n}(\theta) = n^{-1}\sum_{i=1}^{n}\psi(Z_{i}, \theta)$: empirical estimating equation.
- $A = \mathbb{E}[\dot{\psi}(Z, \theta_{0})]$: expected derivative matrix.
- $B = \operatorname{Var}[\psi(Z, \theta_{0})]$: variance of the estimating function.
- $A^{-1}BA^{-T}$: sandwich variance matrix.
- $\widehat{\operatorname{Var}}(\hat{\theta})$: estimated variance matrix (model-based or sandwich).

## Design-based inference

- $U_{N} = \{1, \dots, N\}$: finite population of size $N$.
- $s \subseteq U_{N}$: sample.
- $I_{i} = \mathbf{1}_{\{i \in s\}}$: sample inclusion indicator.
- $\pi_{i} = \mathbb{E}_{d}[I_{i}]$: first-order inclusion probability.
- $\pi_{ij} = \mathbb{E}_{d}[I_{i}I_{j}]$: second-order inclusion probability.
- $\Delta_{ij} = \pi_{ij} - \pi_{i}\pi_{j}$: covariance of inclusion indicators.
- $\hat{Y}_{HT} = \sum_{i \in s}y_{i}/\pi_{i}$: Horvitz--Thompson estimator.
- $f = n/N$: sampling fraction.
- $S_{N}^{2} = (N-1)^{-1}\sum_{i=1}^{N}(y_{i} - \bar{Y}_{N})^{2}$: finite-population variance.

## Survival analysis

- $T_{i}$: event time.
- $C_{i}$: censoring time.
- $\widetilde{T}_{i} = \min(T_{i}, C_{i})$: observed time.
- $\delta_{i} = \mathbf{1}_{\{T_{i} \le C_{i}\}}$: event indicator.
- $N_{i}(t)$: counting process.
- $Y_{i}(t) = \mathbf{1}_{\{\widetilde{T}_{i} \ge t\}}$: at-risk process.
- $\Lambda(t)$: cumulative hazard.
- $\lambda(t)$: hazard function.
- $\hat{S}(t)$: Kaplan--Meier estimator.
- $\hat{\Lambda}(t)$: Nelson--Aalen estimator.
- $R(t) = \{j : Y_{j}(t) = 1\}$: risk set at time $t$.

## Spatial statistics

- $Z(s)$: random field at location $s \in \mathbb{R}^{d}$.
- $C(s, t)$: covariance function.
- $\gamma(s, t)$: variogram.
- $\rho$: range parameter.
- $\sigma^{2}$: sill (marginal variance).
- $\nu$: smoothness parameter (Matérn family).
- $K$: covariance matrix among observed sites.
- $k_{0}$: cross-covariance vector between observed sites and prediction location $s_{0}$.
- $\sigma^{2}_{k}(s_{0})$: kriging variance.

## Robust statistics

- $\operatorname{IF}(x; T, F)$: influence function of functional $T$ at distribution $F$.
- $\psi(u)$: score function for M-estimation.
- $k$: tuning constant (Huber, Tukey bisquare).
- $\varepsilon^{*}$: breakdown point.

## Missing data

- $R$: response indicator ($R=1$ if observed).
- $\pi(X) = \mathbb{P}(R=1 \mid X)$: response probability.
- $\hat{\mu}_{IPW}$: inverse-probability-weighted estimator.
- $\hat{\mu}_{DR}$: doubly robust estimator.
- MCAR: missing completely at random.
- MAR: missing at random.
- MNAR: missing not at random.

## Multiplicity and selection

- FWER: familywise error rate.
- FDR: false discovery rate.
- $p_{(j)}$: $j$th ordered p-value.
- $\alpha$: nominal significance level.

## Number systems and standard structures

- $\mathbb{R}$: real numbers.
- $\mathbb{R}^{p}$: $p$-dimensional Euclidean space.
- $\mathbb{N}$: natural numbers $\{1, 2, 3, \dots\}$.
- $\mathbb{Z}$: integers.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms and regularity conditions | Definitions, regularity conditions, inference rules |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard asymptotic expansions |
| Counterexample or limitation | Proved failure of a general claim, or a boundary beyond a theorem's guarantee | Bootstrap failures, boundary cases, misspecification examples |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Design Randomization as a Probability Space".
- Chapter IDs are used in internal links: `design-randomization-as-a-probability-space`, `generalized-linear-likelihood`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\le$, $\to$, and $\succeq$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
