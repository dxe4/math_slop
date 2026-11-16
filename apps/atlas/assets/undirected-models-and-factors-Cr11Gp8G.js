var e=`---
parent_id: book-structured-probabilistic-learning
chapter_id: undirected-models-and-factors
title: "Undirected Models and Factors"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Undirected Models and Factors

## Purpose and prerequisites

This chapter introduces undirected graphical models, also called Markov random fields, where conditional independences are read from graph separation rather than d-separation. The factorization is over clique scopes, and the Hammersley-Clifford theorem connects the factorization to the Markov properties under positivity. The chapter assumes familiarity with conditional independence and basic graph theory. Chapter 7 developed the directed case; this chapter treats the undirected alternative.

## Definition and factorization

**Definition (Undirected graphical model).** An undirected graphical model over random variables $X = (X_{1}, \\dots, X_{d})$ with respect to an undirected graph $G = (V, E)$ is a distribution that factorizes as

$$p(x) = \\frac{1}{Z} \\prod_{C \\in \\mathcal{C}} \\psi_{C}(x_{C}),$$

where $\\mathcal C$ is a collection of cliques of $G$ (often the maximal cliques; a smaller scope may be included when it lies inside a clique), each $\\psi_C:\\mathcal X_C\\to[0,\\infty)$ is a nonnegative potential, and $Z$ is the partition function

$$Z = \\sum_{x} \\prod_{C \\in \\mathcal{C}} \\psi_{C}(x_{C})$$

(or the corresponding integral for continuous variables).

This defines a probability distribution when $0<Z<\\infty$ (with an appropriate base measure in the continuous case). Computing $Z$ is often the hardest part of inference, especially for models with many variables.

## Markov properties

**Definition (Global Markov property).** In an undirected graphical model, two sets of nodes $A$ and $B$ are conditionally independent given a separating set $S$ if every path from $A$ to $B$ passes through $S$:

$$A \\perp\\!\\!\\perp B \\mid S.$$

**Definition (Local Markov property).** Each variable is conditionally independent of all other variables given its neighbors:

$$X_{v} \\perp\\!\\!\\perp X_{V \\setminus \\{v\\} \\setminus \\text{ne}(v)} \\mid X_{\\text{ne}(v)}.$$

**Definition (Pairwise Markov property).** Two nonadjacent variables are conditionally independent given all other variables:

$$X_{i} \\perp\\!\\!\\perp X_{j} \\mid X_{V \\setminus \\{i, j\\}} \\quad \\text{whenever } \\{i, j\\} \\notin E.$$

For strictly positive distributions ($p(x) > 0$ for all $x$), the Hammersley-Clifford theorem states that these three Markov properties are equivalent, and they are equivalent to a factorization over the cliques of the graph.

## Gaussian undirected models

For a nonsingular multivariate Gaussian $X \\sim \\mathcal{N}(0, \\Sigma)$ with precision matrix $Q = \\Sigma^{-1}$:

**Theorem (Gaussian precision and conditional independence).** $Q_{ij} = 0$ if and only if $X_{i} \\perp\\!\\!\\perp X_{j} \\mid X_{V \\setminus \\{i, j\\}}$.

**Proof sketch.** The Gaussian density is proportional to $\\exp(-\\frac{1}{2}x^{T}Qx)$. The quadratic form can be written as

$$-\\frac{1}{2}\\sum_{k}Q_{kk}x_{k}^{2} - \\sum_{k < l}Q_{kl}x_{k}x_{l}.$$

If $Q_{ij} = 0$, there is no term coupling $x_{i}$ and $x_{j}$, so they are conditionally independent given all other variables. Conversely, if $X_{i}$ and $X_{j}$ are conditionally independent given the rest, the conditional density $p(x_{i}, x_{j} \\mid x_{\\setminus\\{i,j\\}})$ factorizes, which requires $Q_{ij} = 0$.

**Important distinction.** For jointly Gaussian variables, $\\Sigma_{ij} = 0$ expresses marginal independence, not conditional independence. It is $Q_{ij} = 0$ that corresponds to conditional independence given all other variables.

## Worked example: a three-variable Gaussian model

Consider $X = (X_{1}, X_{2}, X_{3})$ with precision matrix

$$Q = \\begin{bmatrix} 2 & -1 & 0 \\\\ -1 & 2 & -1 \\\\ 0 & -1 & 2 \\end{bmatrix}.$$

The zero in $Q_{13}$ implies $X_{1} \\perp\\!\\!\\perp X_{3} \\mid X_{2}$. The corresponding graph is a chain $X_{1} - X_{2} - X_{3}$. The covariance matrix is

$$\\Sigma = Q^{-1} = \\frac{1}{4}\\begin{bmatrix} 3 & 2 & 1 \\\\ 2 & 4 & 2 \\\\ 1 & 2 & 3 \\end{bmatrix}.$$

Note that $\\Sigma_{13} = 1/4 \\neq 0$, so $X_{1}$ and $X_{3}$ are marginally dependent. The dependence is induced by their common neighbor $X_{2}$. Conditioning on $X_{2}$ blocks the path and renders them independent.

## Estimating sparse precision matrices

Given data $x^{(1)}, \\dots, x^{(n)} \\sim \\mathcal{N}(0, \\Sigma)$, one can estimate a sparse precision matrix by maximizing the $\\ell_{1}$-penalized Gaussian log-likelihood:

$$\\max_{Q \\succ 0} \\log\\det Q - \\text{tr}(SQ) - \\lambda\\|Q\\|_{1,\\mathrm{off}},$$

where $S$ is the sample covariance matrix and $\\|Q\\|_{1,\\mathrm{off}}=\\sum_{i\\ne j}|Q_{ij}|$. This is the **graphical lasso** with an unpenalized diagonal. The penalty encourages zeros in off-diagonal precision entries, which correspond to missing edges in the conditional independence graph.

**Caveat.** A sparse precision matrix recovers a conditional-association graph, not a causal graph. Causal interpretation needs a separate structural causal model and identification assumptions, often including restrictions on latent confounding and evidence from interventions or temporal/domain knowledge.

## Common errors

- **Confusing covariance zeros with conditional independence.** In a Gaussian, $\\Sigma_{ij} = 0$ means marginal independence; $Q_{ij} = 0$ means conditional independence given all other variables.
- **Assuming Hammersley-Clifford without positivity.** The theorem requires $p(x) > 0$ for all $x$. Distributions with hard constraints may satisfy the Markov properties without clique factorization.
- **Treating precision sparsity as causality.** A sparse precision matrix identifies conditional independences, not causal effects. Latent variables and selection effects can create spurious zeros or mask true edges.
- **Ignoring the partition function.** Inference in undirected models often requires computing $Z$, which is intractable for many models. Approximate methods introduce additional error.

## Practice exercises

**Exercise 8.1 (Precision and conditional independence).** Let $X \\sim \\mathcal{N}(0, \\Sigma)$ with

$$\\Sigma = \\begin{bmatrix} 1 & 0.5 & 0.3 \\\\ 0.5 & 1 & 0.4 \\\\ 0.3 & 0.4 & 1 \\end{bmatrix}.$$

Compute $Q = \\Sigma^{-1}$ and determine which pairs are conditionally independent given the third variable.

**Solution.** Numerically,

$$Q = \\Sigma^{-1} \\approx \\begin{bmatrix} 1.35484 & -0.61290 & -0.16129 \\\\ -0.61290 & 1.46774 & -0.40323 \\\\ -0.16129 & -0.40323 & 1.20968 \\end{bmatrix}.$$

No off-diagonal entry is exactly zero, so no pair is conditionally independent given the third. All three variables are connected in the conditional independence graph.

**Exercise 8.2 (Chain precision matrix).** For the chain graph $X_{1} - X_{2} - X_{3} - X_{4}$, construct a precision matrix $Q$ that is tridiagonal and positive definite. Verify that $Q_{13} = Q_{14} = Q_{24} = 0$.

**Solution.** A symmetric tridiagonal matrix with positive diagonal and sufficiently small off-diagonals is positive definite. For example,

$$Q = \\begin{bmatrix} 2 & -1 & 0 & 0 \\\\ -1 & 2 & -1 & 0 \\\\ 0 & -1 & 2 & -1 \\\\ 0 & 0 & -1 & 2 \\end{bmatrix}.$$

The eigenvalues are $2 - 2\\cos(\\pi k/5)$ for $k = 1, 2, 3, 4$, all positive. The zeros in the $(1,3)$, $(1,4)$, and $(2,4)$ positions encode the conditional independences implied by the chain structure.

**Exercise 8.3 (Marginal versus conditional independence).** In the three-variable chain $X_{1} - X_{2} - X_{3}$ with the precision matrix from the text, compute $\\operatorname{Cov}(X_{1}, X_{3})$ and verify that it is nonzero. Explain why $X_{1}$ and $X_{3}$ are marginally dependent but conditionally independent given $X_{2}$.

**Solution.** From $\\Sigma = Q^{-1}$, we have $\\Sigma_{13} = 1/4 > 0$. The marginal covariance is nonzero because $X_{1}$ and $X_{3}$ are both influenced by $X_{2}$. However, $Q_{13} = 0$, which means that once $X_{2}$ is known, $X_{1}$ and $X_{3}$ provide no additional information about each other. This is the defining property of the chain structure.

**Exercise 8.4 (Factorization on a triangle).** Consider the graph $X_{1} - X_{2} - X_{3} - X_{1}$, a triangle. Write the most general factorization over the maximal cliques. How many potential functions are needed?

**Solution.** A triangle is the complete graph $K_3$, so its single maximal clique is $\\{1,2,3\\}$. The most general positive factorization is

$$p(x_1,x_2,x_3)=\\frac1Z\\psi_{123}(x_1,x_2,x_3).$$

One triple potential is needed. A product of three pairwise potentials is a valid restricted subfamily, but it cannot represent every positive distribution on three variables because it omits a general three-way interaction.

## Summary and forward pointers

This chapter defined undirected graphical models, stated the Markov properties, and proved the Gaussian precision-connection to conditional independence. The Hammersley-Clifford theorem links factorization and separation for positive distributions. Sparse precision estimation recovers conditional association graphs, but not causal graphs.

The next chapter, "Exact and Approximate Inference," develops algorithms for computing marginals, conditionals, and most probable configurations in both directed and undirected models. Chapter 10, "Learning Graph Structure and Parameters," addresses the problem of estimating both the graph and its potentials from data.
`;export{e as default};