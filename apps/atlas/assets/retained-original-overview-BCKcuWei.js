var e=`---
parent_id: book-structured-probabilistic-learning
matter_id: retained-original-overview
title: "Retained Original Overview"
license: CC BY-SA 4.0
---

# Structured Probabilistic Learning: Kernels, Gaussian Processes, and Graphs

Probability models become useful when their structure says which functions vary smoothly, which variables interact directly, and which observations can be ignored after conditioning. Kernels encode similarity and covariance; graphical models encode factorization and conditional independence.

This book treats both as explicit modeling languages. It assumes multivariate probability, linear algebra, Bayesian conditioning, and numerical linear systems. It does not treat posterior uncertainty as automatic truth: every posterior is conditional on a likelihood, prior, hyperparameters, and data-generating assumptions.

## 1. A probability model is more than a fitted curve

A point predictor returns $f(x)$. A probabilistic regression model specifies a distribution such as

$Y=f(X)+\\varepsilon$, $\\varepsilon \\sim \\mathcal{N}(0,\\sigma^{2})$.

If $f$ is unknown, a Bayesian model adds a prior over it. Conditioning on data gives a posterior over functions and a posterior predictive distribution.

This separates at least three uncertainties:

- observation noise under the likelihood;
- uncertainty about the latent function under the chosen prior and data;
- model uncertainty from a possibly wrong likelihood, kernel, covariate process, or deployment regime.

The first two can appear in posterior formulas. The third is not automatically represented. A narrow posterior under a misspecified model can be confidently wrong.

## 2. Positive-semidefinite kernels

A symmetric function $k:X\\times X\\to \\mathbb{R}$ is a positive-semidefinite kernel when, for every finite $x_{1},...,x_{n}$ and coefficients $c\\in \\mathbb{R}^{n}$,

$\\sum_{i,j}c_{i} c_{j} k(x_{i},x_{j})\\ge 0$.

Equivalently, every Gram matrix $K_{ij}=k(x_{i},x_{j})$ is positive semidefinite. If $\\varphi (x)$ is a feature map into an inner-product space, then

$k(x,z)=⟨\\varphi (x),\\varphi (z)⟩$

is a kernel because $c^{T} Kc=\\lVert \\sum_{i} c_{i}\\varphi (x_{i}) \\rVert^{2}\\ge 0$.

Examples include:

- linear: $k(x,z)=x^{T}z$;
- polynomial: $k(x,z)=(a+x^{T}z)^{p}$ for $a\\ge 0$ and a positive integer $p$;
- RBF: $k(x,z)=\\tau^{2} \\exp(-\\lVert x-z \\rVert^{2}/(2h^{2}))$.

For the RBF kernel, $\\tau^{2}$ sets marginal variance and $h$ sets a length scale. Small $h$ permits rapid variation; large $h$ correlates distant inputs. “Permits” is prior language, not evidence that the unknown function truly has that scale.

Sums and nonnegative scalar multiples of kernels remain kernels. Products do too. An arbitrary similarity score need not be positive semidefinite; check the Gram matrices or a valid construction.

## 3. Gaussian processes through finite distributions

A Gaussian process $f\\sim \\mathcal{GP}(m,k)$ is a collection of random variables indexed by inputs such that every finite vector

$(f(x_{1}),...,f(x_{n}))$

is multivariate Gaussian with mean entries $m(x_{i})$ and covariance entries $k(x_{i},x_{j})$. The kernel must be positive semidefinite so these finite covariance matrices are valid. A consistent family of finite distributions defines the process under standard extension conditions.

The process is not a distribution over computer programs or an assertion that realized functions are Gaussian-shaped. It says every finite set of function values has a joint Gaussian distribution.

Common kernels encode assumptions:

- RBF sample paths are very smooth under the model;
- Matérn kernels permit controlled finite differentiability;
- periodic kernels correlate inputs separated by a period;
- sums can represent trend plus seasonality;
- products can make one component's effect vary with another.

Kernel choice should follow domain structure and be stress-tested. A flexible marginal-likelihood fit can still select a misleading model from a narrow kernel menu.

## 4. Conditioning a Gaussian process

Assume zero prior mean for simplicity. At training inputs $X=(x_{1},...,x_{n})$, observe

$y=f_{X}+\\varepsilon$, $\\varepsilon \\sim \\mathcal{N}(0,\\sigma^{2}I)$,

with noise independent of $f$. For a test input $x_*$, let

$K_{ij}=k(x_{i},x_{j})$, $k_*=[k(x_{1},x_*),...,k(x_{n},x_*)]^{T}$, $k_{**}=k(x_*,x_*)$.

The joint Gaussian is

$\\begin{bmatrix}y\\\\ f_*\\end{bmatrix}\\sim
\\mathcal{N}\\!\\left(
0,
\\begin{bmatrix}K+\\sigma^{2}I & k_*\\\\ k_*^{T} & k_{**}\\end{bmatrix}
\\right)$.

For the ordinary-inverse and Gaussian-density formulas in Sections 4–6, assume $K_y=K+\\sigma^2I$ is invertible (hence positive definite). For positive-semidefinite $K$, $\\sigma^2>0$ is sufficient; noiseless $\\sigma^2=0$ is allowed when $K$ is positive definite. Under this premise Gaussian conditioning gives

$\\mathbb{E}[f_*\\lvert y]=k_*^{T}(K+\\sigma^{2}I)^{-1}y$,

$\\operatorname{Var}(f_*\\lvert y)=k_{**}-k_*^{T}(K+\\sigma^{2}I)^{-1}k_*$.

For a new noisy outcome $y_*=f_*+\\varepsilon_*$, add $\\sigma^{2}$ to the variance. For several test inputs, replace scalars by cross-covariance blocks.

**Two-point example.** Let latent values at $x_{1},x_{2}$ have covariance $\\begin{bmatrix}1&r\\\\r&1\\end{bmatrix}$, observe $f(x_{1})=a$ without noise, and assume $\\lvert r\\rvert <1$. Then

$f(x_{2})\\lvert f(x_{1})=a \\sim \\mathcal{N}(ra,1-r^{2})$.

At $r=0$, the observation gives no information about the second value. As $\\lvert r\\rvert$ approaches one, conditional variance approaches zero. At exactly $\\lvert r\\rvert=1$, the full joint covariance is singular, but the observed block is the invertible scalar $1$: the same conditional formula gives the point mass $f(x_2)=ra$ with variance zero. It is singularity of the observed block, rather than of the full joint covariance alone, that prevents use of the ordinary-inverse formula.

## 5. Kernel ridge and GP means: same algebra, different claims

Kernel ridge regression solves

$(K+\\lambda I)\\alpha =y$, $\\hat{f}(x_*)=k_*^{T}\\alpha$.

This prediction matches a zero-mean GP posterior mean when $\\lambda =\\sigma^{2}$ under corresponding scaling. The interpretations differ. Kernel ridge starts from a penalized optimization problem in a reproducing-kernel Hilbert space. The GP starts from a probability model and also supplies a conditional covariance.

Matching means do not make every kernel method Bayesian, and a ridge residual table is not posterior uncertainty. Conversely, the GP variance does not include arbitrary kernel misspecification or covariate shift.

The [regularization observatory](#/labs?lab=visual-lab-regularization-kernel-learning) intentionally implements kernel ridge, not a GP posterior.

## 6. Numerical conditioning is part of inference

Do not form $(K+\\sigma^{2}I)^{-1}$. If the matrix is positive definite, compute a Cholesky factor $LL^{T}$, solve $Lz=y$, then $L^{T}\\alpha =z$. Posterior mean is $k_*^{T}\\alpha$. Variance uses another triangular solve.

Near-duplicate inputs, long length scales, or tiny noise can make $K+\\sigma^{2}I$ ill-conditioned. Symptoms include failed factorization, negative variance from roundoff, and unstable marginal likelihood.

A small **jitter** term $jI$ can stabilize computation. Report it. Jitter changes the modeled covariance even if interpreted as numerical. Increase it diagnostically, not silently until a result appears.

The log marginal likelihood is

$\\log p(y \\mid \\theta )=-(1/2)y^{T} K_{y}^{-1}y-(1/2)\\log\\det K_{y}-(n/2)\\log(2\\pi )$,

where $K_{y}=K_\\theta +\\sigma^{2}I$. The first term rewards fit; the determinant term reflects volume or complexity; the last normalizes. Optimizing this objective and then plugging in one hyperparameter estimate does not propagate hyperparameter uncertainty into the reported posterior covariance. It also does not account for trying undocumented kernel families or validate deployment.

Exact dense GP computation costs $O(n^{3})$ time and $O(n^{2})$ storage. Sparse approximations introduce inducing points or structure and need their own approximation audit.

## 7. Directed graphical models

A Bayesian network is a directed acyclic graph (DAG) with joint factorization

$p(x_{1},...,x_{d})=\\prod_{j=1}^{d} p(x_{j} \\mid x_{\\operatorname{pa}(j)})$.

The local Markov property says a node is conditionally independent of its nondescendants given its parents. Graph separation rules imply further conditional independences.

Three motifs are essential:

- chain $A\\to B\\to C$: conditioning on $B$ blocks this path;
- fork $A←B\\to C$: conditioning on common parent $B$ blocks this path;
- collider $A\\to B←C$: the path is blocked without conditioning, but conditioning on $B$ or its descendant can make $A$ and $C$ dependent.

**Collider example.** Let independent fair coins $A,C$ feed $B=1[A=C]$. Marginally $A$ and $C$ are independent. Given $B=1$, knowing $A$ determines $C$; conditioning has created dependence.

A DAG can be used purely as a probabilistic factorization. Giving arrows a causal interpretation requires a causal model, consistency, intervention semantics, and identification assumptions. Observational equivalence means several DAGs can encode the same conditional independences.

## 8. Undirected models and factors

An undirected graphical model represents

$p(x)=1/Z \\prod_{C} \\psi_{C}(x_{C})$,

where nonnegative factors live on cliques, including smaller clique scopes, and $Z$ normalizes the distribution. Factorization over the graph implies its global Markov conditional independences. Strict positivity is needed for the converse Hammersley–Clifford statement that the Markov properties imply such a clique factorization.

For a nonsingular multivariate Gaussian with covariance $\\Sigma$ and precision $Q=\\Sigma^{-1}$,

$Q_{ij}=0$

is equivalent to variables $i$ and $j$ being conditionally independent given all remaining variables. For a jointly Gaussian vector, $\\Sigma_{ij}=0$ instead expresses marginal independence of variables $i$ and $j$, not conditional independence given the rest.

Estimating a sparse precision matrix can recover a conditional-association graph under assumptions. It does not automatically recover a causal graph, and selection consistency needs sample size, sparsity, and signal conditions.

## 9. Exact and approximate inference

Inference asks for marginals, conditional probabilities, likelihoods, or most probable configurations. Variable elimination sums or maximizes variables in an order. Its cost is exponential in induced factor width, not merely the number of nodes.

On trees, sum-product message passing computes exact marginals. In a hidden Markov model, forward-backward is message passing along a chain. In loopy graphs, belief propagation is generally approximate and may fail to converge.

Monte Carlo methods approximate expectations with samples; variational inference optimizes within a restricted distribution family. Both introduce error beyond model misspecification:

- Monte Carlo needs mixing and effective-sample diagnostics;
- variational inference needs approximation-family and optimization diagnostics;
- both need numerical and implementation checks.

“Scalable inference” is not a single guarantee. State which target is approximated and how accuracy is assessed.

## 10. Learning graph structure and parameters

With a fixed graph, maximum likelihood or Bayesian inference estimates local conditional parameters. Structure learning searches graphs or equivalence classes using scores, constraints, or both. The graph space grows super-exponentially with node count.

Conditional-independence tests have finite-sample errors and multiple-testing issues. A score combines fit with complexity assumptions. Hidden variables and selection can make a sparse observed graph misleading.

If a graph is selected on the same data used for uncertainty statements, selection must be accounted for or the statements treated as exploratory. Domain constraints can improve identifiability, but they must be declared rather than reverse-engineered from a desired conclusion.

## Common errors

- Treating any symmetric similarity as a valid kernel.
- Reporting GP intervals without the kernel, noise, and hyperparameter assumptions.
- Hiding jitter or forming an explicit inverse.
- Adding observation noise twice—or forgetting it for noisy predictions.
- Reading an absent DAG edge as marginal independence in every conditioning set.
- Conditioning on a collider and expecting independence.
- Reading probabilistic arrows as causal effects.
- Calling approximate inference exact because an objective converged.

## Exercises with worked answers

**1. Kernel construction.** Prove $k(x,z)=1+xz$ is a kernel on $\\mathbb{R}$.

**Answer.** Use feature map $\\varphi (x)=(1,x)$. Then $k(x,z)=\\varphi (x)^{T}\\varphi (z)$, so every Gram quadratic form is a squared norm.

**2. Invalid correlation.** Why is $\\begin{bmatrix}1&1.2\\\\1.2&1\\end{bmatrix}$ not a covariance matrix?

**Answer.** Its eigenvalues are $2.2$ and $-0.2$; a covariance must be positive semidefinite. Equivalently, its determinant is negative.

**3. One-observation GP.** With unit prior variance, correlation $r=0.6$, noiseless observation $a=2$, find the second-point posterior mean and variance.

**Answer.** Mean is $ra=1.2$; variance is $1-r^{2}=0.64$.

**4. Noisy versus latent variance.** If the latent posterior variance is $0.3$ and observation noise variance is $0.2$, what is the new-outcome predictive variance?

**Answer.** Independent noise adds, giving $0.5$.

**5. Graphical chain.** For $A\\to B\\to C$, write the factorization and the conditional independence.

**Answer.** $p(a,b,c)=p(a)p(b \\mid a)p(c \\mid b)$, which implies $A$ is conditionally independent of $C$ given $B$ under this DAG model.

**6. Precision versus covariance.** Does $\\Sigma_{ij}=0$ imply conditional independence given all other Gaussian variables?

**Answer.** Not generally. Conditional independence given the rest corresponds to $Q_{ij}=0$ in $Q=\\Sigma^{-1}$. Covariance zero gives marginal independence for a jointly Gaussian pair.

## Continue

The [data geometry deep dive](#/item/deep-dive-data-geometry-transport) studies neighborhood graphs and transport; the [reinforcement-learning deep dive](#/item/deep-dive-mdp-reinforcement-learning) uses graphical temporal structure; and the [trustworthy workflow](#/item/recipe-trustworthy-predictive-model) audits probabilistic predictions in use. Future books should separately develop RKHS theory, sparse/variational GPs, factor graphs, exponential families, causal graphical models, probabilistic programming, and deep generative models.
`;export{e as default};