var e=`---
parent_id: book-applied-modeling-proof-reference
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair Routes"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair Routes

## How to use this diagnostic

Attempt the prompts without software or notes. Mark each response **ready** if the reasoning and interpretation are secure, **repair** if you recognize the method but cannot complete it, or **new** if the language is unfamiliar. A low count is a routing result, not an admission decision. Each item names the chapter where the skill first matters and gives a compact repair.

## Linear algebra and inverse problems

### 1. Null spaces and identification

Let $A=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$. Decide whether $x$ is uniquely determined by $Ax=y$ whenever a solution exists.

**Answer.** No. The nonzero vector $v=(-2,1)$ satisfies $Av=0$, so $x$ and $x+tv$ give identical observations for every real $t$. This is structural nonidentifiability, not merely a numerical inconvenience.

**Repair.** Review span, linear independence, rank, null space, and rank-nullity. Be able to translate $Av=0$ into observational equivalence before reading Identifiability and Inverse Problems.

### 2. Positive semidefinite matrices

If $Σ$ is a covariance matrix, explain why $w^{\\mathsf T}Σw≥0$ for every vector $w$.

**Answer.** $w^{\\mathsf T}Σw=Var(w^TX)$, which is nonnegative. Algebraically, a symmetric matrix is positive semidefinite precisely when all such quadratic forms are nonnegative.

**Repair.** Review transpose, quadratic forms, eigenvalues of symmetric matrices, orthogonal diagonalization, and the singular value decomposition. These support sensitivity, network Laplacians, least squares, and portfolio calculations.

### 3. Conditioning

For $A=\\operatorname{diag}(1,10^{-6})$, which output perturbation direction is most amplified by solving $Ax=y$?

**Answer.** The second coordinate. An error $δy_2$ becomes $10^6 δy_2$ in $x_2$. Exact invertibility does not imply stable recovery.

**Repair.** Practice operator norms, singular values, relative error, and the difference between problem conditioning and algorithmic stability.

## Multivariable calculus and local analysis

### 4. Jacobians and local identification

For $h(θ_1,θ_2)=(θ_1+θ_2, θ_1θ_2)$, compute the Jacobian and locate where its determinant vanishes.

**Answer.** $Dh=\\begin{pmatrix}1&1\\\\θ_2&θ_1\\end{pmatrix}$, so $\\det Dh=θ_1-θ_2$. The inverse-function test fails on $θ_1=θ_2$. Off that line, the ordered parameters are locally identified, although globally swapping them leaves $h$ unchanged.

**Repair.** Review partial derivatives, Jacobians, the chain rule, Taylor approximation, and the inverse and implicit function theorems.

### 5. Constrained stationarity

Minimize $x^2+y^2$ subject to $x+y=1$.

**Answer.** With Lagrangian $x^2+y^2+λ(x+y-1)$, stationarity gives $2x+λ=0$ and $2y+λ=0$, hence $x=y=1/2$. Convexity makes this stationary feasible point globally optimal.

**Repair.** Review gradients, Hessians, convex sets, Lagrange multipliers, and why constraint qualifications matter before using KKT conditions.

### 6. Linearization boundary

If an equilibrium satisfies $F(x,θ)=0$, what condition permits the local derivative $dx/dθ=-(D_xF)^{-1}D_θF$?

**Answer.** $D_xF$ must be invertible at the point, with the smoothness required by the implicit function theorem. Near singularity, sensitivity can be large or no single local branch may exist.

**Repair.** Revisit total derivatives, matrix inverses, local approximation, and remainder terms. Do not treat a derivative as a global scenario forecast.

## Probability and statistics

### 7. Conditional expectation

State the tower property for sigma-fields $G⊆H$.

**Answer.** For integrable $X$, $E[E[X|H]|G]=E[X|G]$. In particular, $E[E[X|H]]=E[X]$.

**Repair.** Review random variables, expectation, conditioning, independence, variance, covariance, and common discrete and continuous laws. Measure-theoretic construction is helpful but not required for the early chapters.

### 8. Bayes and base rates

A detector has sensitivity $0.9$, false-positive probability $0.05$, and the condition prevalence is $0.01$. Find $P(condition | positive)$.

**Answer.** Bayes' rule gives $0.9(0.01)/(0.9(0.01)+0.05(0.99))≈0.154$. A high sensitivity does not make a positive result almost certain when the base rate is small.

**Repair.** Practice joint, marginal, and conditional probability with event trees and tables before using probability laws as uncertainty representations.

### 9. Variance of an average

For independent observations with variance $σ²$, what is the variance of their mean? What changes under dependence?

**Answer.** Independence gives $σ²/n$. With dependence, covariance terms enter: $Var(n^{-1}ΣX_i)=n^{-2}Σ_iΣ_j Cov(X_i,X_j)$. Positive dependence can greatly reduce the effective information.

**Repair.** Review covariance bilinearity, laws of total expectation and variance, likelihood, sampling versus process variation, and the difference between an estimator and its realized estimate.

### 10. Likelihood is not probability of a parameter

Given observed $y$, what does $L(θ;y)=p_θ(y)$ mean?

**Answer.** It is the data density or mass evaluated as a function of $θ$. Without a prior and normalization it is not a probability distribution over $θ$; its scale across different datasets is not directly comparable.

**Repair.** Revisit likelihood, score, information, confidence procedures, and Bayesian conditioning. The uncertainty chapter keeps parameter, process, measurement, discrepancy, and scenario uncertainty separate.

## Differential equations and dynamical systems

### 11. Equilibria and stability

For $x'=r x(1-x/K)$ with $r,K>0$, find nonnegative equilibria and classify them by linearization.

**Answer.** Equilibria are $0$ and $K$. The derivative of the vector field is $r(1-2x/K)$, so $0$ is locally unstable and $K$ locally asymptotically stable. This local result is not yet a data-fitting claim about a population.

**Repair.** Review separable equations, linear systems, equilibria, Jacobian linearization, eigenvalue stability, conservation laws, and invariant regions.

### 12. Conservation

If compartments satisfy $S'=-βSI/N$, $I'=βSI/N-γI$, and $R'=γI$, what invariant follows?

**Answer.** $(S+I+R)'=0$, so total population is constant under the written model. A numerical method should monitor the corresponding residual.

**Repair.** Practice summing balance laws and interpreting source, sink, and transfer terms before adding mechanisms.

### 13. Stiffness warning

Why can $x'=-1000x$, $x(0)=1$, cause trouble for forward Euler with a seemingly small step $h=0.01$?

**Answer.** Euler gives multiplier $1-1000h=-9$, whose magnitude exceeds one, so the numerical iterates grow and alternate while the exact solution decays. Accuracy and stability depend on the product $hλ$, not the visual size of $h$ alone.

**Repair.** Review one-step methods, local versus global error, absolute stability, and convergence tests against exact cases.

## Optimization, algorithms, and discrete systems

### 14. Convexity

Give a first-order condition characterizing a differentiable convex function.

**Answer.** On a convex domain, $f(y)≥f(x)+∇f(x)^{\\mathsf T}(y-x)$ for all $x,y$. Thus any point with zero gradient is globally minimizing when unconstrained.

**Repair.** Review convex combinations, epigraphs, norms, separating hyperplanes, and the distinction between local stationarity and global optimality.

### 15. Dual bounds

For a minimization problem, what does a feasible dual point normally provide?

**Answer.** A lower bound on the primal optimum under weak duality. Equality needs stronger assumptions such as an appropriate constraint qualification; a numerical solver status alone is not a proof.

**Repair.** Practice forming Lagrangians and interpreting dual variables as sensitivity or certificates only under the theorem's hypotheses.

### 16. Graph Laplacian

For an undirected weighted graph, why is $x^TLx=(1/2)Σ_ij a_ij(x_i-x_j)^2$ useful?

**Answer.** It proves that $L$ is positive semidefinite and that zero energy forces equal values across every connected component. This connects topology to diffusion and consensus.

**Repair.** Review adjacency matrices, degree matrices, paths, connected components, eigenvectors, and incidence matrices.

### 17. Queue stability

An $M/M/1$ queue has arrival rate $λ$ and service rate $μ$. Which regime can have a stationary distribution?

**Answer.** $ρ=λ/μ<1$. When $ρ≥1$, incoming work is not dominated by service capacity, so stationary mean formulas must not be used.

**Repair.** Review geometric series, exponential waiting times, birth-death chains, and long-run averages. Also learn why verifying the $M/M/1$ assumptions is separate from manipulating its formula.

## Dimensions, computation, and interpretation

### 18. Unit consistency

Can a physically meaningful relation add a velocity to an acceleration?

**Answer.** Not without an additional time scale converting one dimension to the other. Every additive term must share dimensions. A dimensionally valid equation may still be empirically wrong, but a dimensionally invalid equation is already unusable.

**Repair.** Practice base-dimension vectors, unit conversion, logarithms of dimensionless quantities, and nondimensionalization.

### 19. Reproducible randomness

What must be recorded for a stochastic simulation to be meaningfully reproducible?

**Answer.** At least the algorithm, code version, random generator and stream policy, seeds or seed derivation, parameters, input data and provenance, number of replications, stopping rule, and output summaries. Reusing one stream across alternatives can be deliberate common-random-number design or accidental dependence; it must be stated.

**Repair.** Review pseudorandomness, Monte Carlo standard errors, independent replications, deterministic tests, and serialization of configuration.

### 20. Claim classification

Classify: “Under the fitted arrival law and staffing schedule, simulated mean wait is 18 minutes.”

**Answer.** It is a conditional computational prediction about the specified model and scenario. It is not yet an observed fact, causal staffing effect, guarantee for an individual, or recommendation.

**Repair.** Rewrite claims using the template: under assumptions $A$, data $D$, algorithm $C$, and scenario $S$, output $O$ supports claim type $T$ over scope $R$.

## Readiness routes

If Items 1–6 need repair, begin with a proof-based linear algebra and multivariable-calculus review before Chapters 4, 5, and 7. If Items 7–10 need repair, read the uncertainty chapter slowly and work with finite probability tables before continuous models. If Items 11–13 need repair, review scalar and linear ODEs before the biology chapter. If Items 14–17 need repair, study convexity and finite-state Markov chains alongside the optimization and operations chapters. If Items 18–20 need repair, begin with Model Contracts, Dimensions, and Reproducible Computation; these are central habits rather than optional polish.

A reader ready for the full route should be able to solve at least fifteen prompts and explain every answer's interpretation. A selective reader may proceed when the items for the chosen chapter path are secure.
`;export{e as default};