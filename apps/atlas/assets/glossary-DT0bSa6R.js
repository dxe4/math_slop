var e=`---
parent_id: book-structured-probabilistic-learning
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow chapter order.

## Glossary

**Aleatoric uncertainty.** Irreducible observation noise; remains even with infinite data. Chapter 1 ("A probability model is more than a fitted curve").

**Bayesian network.** Directed acyclic graph together with a joint distribution that factorizes as a product of local conditional probabilities. Chapter 7 ("Directed Graphical Models").

**Cholesky factorization.** Decomposition $A = LL^{T}$ of a positive-definite matrix $A$ into a lower-triangular matrix $L$ with positive diagonal entries. Chapter 6 ("Numerical Conditioning Is Part of Inference").

**Collider.** Directed subgraph $A \\to B \\leftarrow C$. Conditioning on $B$ or its descendants opens this path, which can induce dependence between $A$ and $C$; dependence is guaranteed only with an additional condition such as faithfulness. Chapter 7.

**Conditional independence.** $X\\perp\\!\\!\\perp Y\\mid Z$ means that a regular conditional distribution factorizes as $P_{X,Y\\mid Z}=P_{X\\mid Z}\\otimes P_{Y\\mid Z}$ for $P_Z$-almost every conditioning value. In a positive discrete model this becomes the familiar probability-mass identity at each $z$. Chapters 7--8.

**Covariance kernel.** Synonym for positive-semidefinite kernel when used to define the covariance of a Gaussian process. Chapter 2 ("Positive-Semidefinite Kernels").

**d-separation.** Graph-theoretic criterion for conditional independence in Bayesian networks based on blocking paths at chains, forks, and colliders. Chapter 7.

**Epistemic uncertainty.** Uncertainty about latent quantities such as an unknown function; typically shrinks with more data. Chapter 1.

**Feature map.** Map $\\varphi: \\mathcal{X} \\to \\mathcal{H}$ such that $k(x, z) = \\langle \\varphi(x), \\varphi(z) \\rangle_{\\mathcal{H}}$. Chapter 2.

**Forward-backward algorithm.** Sum-product message passing on a chain-structured hidden Markov model; computes marginals $p(z_{t} \\mid x_{1:T})$. Chapter 9 ("Exact and Approximate Inference").

**Gaussian process.** Collection of random variables $\\{f(x)\\}_{x \\in \\mathcal{X}}$ such that every finite subset has a joint Gaussian distribution with mean and covariance determined by $m$ and $k$. Chapter 3 ("Gaussian Processes through Finite Distributions").

**Global Markov property.** In an undirected model, $A \\perp\\!\\!\\perp B \\mid S$ whenever $S$ separates $A$ and $B$ in the graph. Chapter 8 ("Undirected Models and Factors").

**Gram matrix.** Matrix $K$ with entries $K_{ij} = k(x_{i}, x_{j})$ for a kernel $k$ and points $x_{1}, \\dots, x_{n}$. Chapter 2.

**Graphical lasso.** $\\ell_{1}$-penalized maximum likelihood estimator for a sparse Gaussian precision matrix. Chapter 8.

**Hammersley--Clifford theorem.** For strictly positive distributions, the global, local, and pairwise Markov properties are equivalent to a factorization over cliques. Chapter 8.

**Induced width.** Size of the largest clique in a triangulated graph minus one; determines the complexity of variable elimination. Chapter 9.

**Jitter.** Small diagonal perturbation $jI$ added to a kernel matrix to improve numerical conditioning. Chapter 6.

**Junction tree.** Tree whose nodes are maximal cliques of a triangulated graph, satisfying the running intersection property; enables exact inference on graphs with cycles. Chapter 9.

**Kernel ridge regression (KRR).** Regularized optimization in an RKHS that produces the same point predictions as GP posterior mean when $\\lambda = \\sigma^{2}$. Chapter 5 ("Kernel Ridge and GP Means: Same Algebra, Different Claims").

**Length scale.** Kernel hyperparameter $h$ controlling the rate at which correlation decays with input distance. Chapter 2.

**Local Markov property (DAG).** Each node is conditionally independent of its nondescendants given its parents. Chapter 7.

**Marginal likelihood.** $p(y \\mid \\theta) = \\int p(y \\mid f)\\,p(f \\mid \\theta)\\,df$; used for model comparison and hyperparameter selection. Chapter 5.

**Markov random field.** Undirected graphical model whose factor scopes are cliques of the graph; for positive distributions this matches the graph's Markov properties. Chapter 8.

**Mat\\'{e}rn kernel.** Kernel family interpolating between exponential and RBF smoothness via a Bessel function. Chapter 2.

**Mean-field approximation.** Variational approximation that factorizes $q$ as a product of independent factors $q_{i}(x_{i})$. Chapter 9.

**Model uncertainty.** Uncertainty about whether the likelihood, prior, or noise model is correct; not captured by posterior variance alone. Chapter 1.

**Partition function.** Normalizing constant $Z = \\sum_{x}\\prod_{C}\\psi_{C}(x_{C})$ of an undirected model. Chapters 8--9.

**Positive-semidefinite kernel.** Symmetric function $k$ such that every Gram matrix is positive semidefinite. Chapter 2.

**Posterior predictive.** Distribution $p(y_{*} \\mid x_{*}, \\mathcal{D})$ of a new observation given data. Chapters 1 and 4.

**Precision matrix.** Inverse covariance matrix $Q = \\Sigma^{-1}$; zero off-diagonal entries encode conditional independences in a Gaussian. Chapter 8.

**RBF kernel.** $k(x, z) = \\tau^{2}\\exp(-\\|x - z\\|^{2}/(2h^{2}))$; infinitely differentiable and widely used in GP modeling. Chapter 2.

**Representer theorem.** The minimizer of a regularized empirical risk in an RKHS can be written as a finite linear combination of kernel evaluations at training points. Chapter 5.

**Sum-product message passing.** Algorithm for exact marginal computation on tree-structured graphs by passing local messages along edges. Chapter 9.

**Treewidth.** Minimum induced width over all elimination orders; determines the tractability of exact inference. Chapter 9.

**Variable elimination.** Exact inference algorithm that sums out variables in a chosen order, creating intermediate factors. Chapter 9.

**Variational inference.** Optimization over a restricted family of distributions to approximate an intractable posterior. Chapter 9.

## Claim finder with status guards

### Theorems

**Feature-map sufficiency (Chapter 2).** If $k(x, z) = \\langle \\varphi(x), \\varphi(z) \\rangle$, then $k$ is positive semidefinite.

**Closure under addition and product (Chapter 2).** Sums and pointwise products of positive-semidefinite kernels are positive semidefinite.

**GP posterior (Chapter 4).** For a zero-mean GP with observations and invertible $K_y$, $f_{*} \\mid \\mathcal{D} \\sim \\mathcal{N}(k_{*}^{T}K_{y}^{-1}y,\\; k_{**} - k_{*}^{T}K_{y}^{-1}k_{*})$.

**Matching means (Chapter 5).** KRR with regularization $\\lambda$ and GP regression with noise variance $\\sigma^{2} = \\lambda$ produce identical posterior mean functions.

**Gaussian precision and conditional independence (Chapter 8).** For a nonsingular Gaussian, $Q_{ij} = 0$ iff $X_{i} \\perp\\!\\!\\perp X_{j} \\mid X_{\\setminus\\{i,j\\}}$.

**Hammersley--Clifford (Chapter 8).** For strictly positive distributions, the Markov properties are equivalent to clique factorization.

### Computational recipes

**Cholesky approach to GP regression (Chapter 6).** Factor $K_{y} = LL^{T}$, solve $Lz = y$ and $L^{T}\\alpha = z$; posterior mean is $k_{*}^{T}\\alpha$ and variance uses $\\|L^{-1}k_{*}\\|^{2}$.

**Forward-backward for HMMs (Chapter 9).** Compute $\\alpha_{t}$ and $\\beta_{t}$ recursively; marginals are proportional to $\\alpha_{t}\\beta_{t}$.

**PC algorithm (Chapter 10).** Test conditional independences to remove edges, then orient v-structures and propagate to obtain a CPDAG.
`;export{e as default};