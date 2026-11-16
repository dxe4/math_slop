var e=`---
parent_id: book-advanced-statistical-inference-reference
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes three kinds of background: probability theory and random variables, linear algebra and matrix calculus, and likelihood-based inference at the level of a first graduate course. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Probability theory and random variables.** Expectation, variance, conditional expectation, the law of large numbers, the central limit theorem, and basic properties of common distributions (normal, binomial, Poisson, exponential). You should be comfortable reading $\\mathbb{E}[X \\mid Y]$ as a random variable and computing $\\operatorname{Var}(a^{T}X)$ for a random vector $X$.
2. **Linear algebra and matrix calculus.** Matrix multiplication, transpose, inverse, eigenvalues, positive definiteness, quadratic forms, and matrix derivatives. You should be able to state what it means for a matrix to be positive definite and to differentiate $x^{T}Ax$ with respect to $x$.
3. **Likelihood-based inference.** Log-likelihood, score function, Fisher information, maximum likelihood estimation, Wald tests, and likelihood-ratio tests. You should be able to derive the MLE and observed information for a one-parameter exponential family.

## Self-diagnostic questions with answers

### Probability theory and random variables

**Question 1.** Let $X \\sim \\mathcal{N}(0,1)$ and $Y = X^{2}$. Find $\\mathbb{E}[Y]$ and $\\operatorname{Var}(Y)$.

> **Answer.** $\\mathbb{E}[Y] = \\mathbb{E}[X^{2}] = 1$. Since $Y \\sim \\chi^{2}_{1}$, $\\operatorname{Var}(Y) = 2$.

**Question 2.** Let $X \\in \\mathbb{R}^{p}$ be a random vector with $\\mathbb{E}[X] = \\mu$ and $\\operatorname{Cov}(X) = \\Sigma$. For a nonrandom matrix $A \\in \\mathbb{R}^{q \\times p}$ and vector $b \\in \\mathbb{R}^{q}$, find $\\mathbb{E}[AX + b]$ and $\\operatorname{Cov}(AX + b)$.

> **Answer.** $\\mathbb{E}[AX + b] = A\\mu + b$ by linearity of expectation. $\\operatorname{Cov}(AX + b) = A\\Sigma A^{T}$ because $\\operatorname{Cov}(AX) = \\mathbb{E}[A(X - \\mu)(X - \\mu)^{T}A^{T}] = A\\Sigma A^{T}$.

**Question 3.** State the difference between convergence in probability and convergence in distribution. Give an example of a sequence that converges in distribution but not in probability.

> **Answer.** $X_{n} \\to_{p} X$ means $\\mathbb{P}(|X_{n} - X| > \\varepsilon) \\to 0$ for all $\\varepsilon > 0$. $X_{n} \\to_{d} X$ means $\\mathbb{E}[f(X_{n})] \\to \\mathbb{E}[f(X)]$ for all bounded continuous $f$. Let $X \\sim \\mathcal{N}(0,1)$ and $X_{n} = (-1)^{n}X$. Then $X_{n} \\sim \\mathcal{N}(0,1)$ for all $n$, so $X_{n} \\to_{d} X$, but $|X_{n} - X|$ does not converge to zero in probability.

### Linear algebra and matrix calculus

**Question 4.** Prove that if $\\Sigma$ is symmetric positive definite, then $\\Sigma^{-1}$ is also symmetric positive definite.

> **Answer.** Symmetry: $(\\Sigma^{-1})^{T} = (\\Sigma^{T})^{-1} = \\Sigma^{-1}$. Positive definiteness: for any $v \\neq 0$, let $w = \\Sigma^{-1}v$. Then $v^{T}\\Sigma^{-1}v = w^{T}\\Sigma w > 0$ because $\\Sigma$ is positive definite and $w \\neq 0$.

**Question 5.** Let $A$ be an $n \\times p$ matrix with $n > p$ and full column rank. Show that $A^{T}A$ is positive definite and find its dimensions.

> **Answer.** $A^{T}A$ is $p \\times p$. For any $v \\neq 0$, $v^{T}A^{T}Av = \\|Av\\|^{2} > 0$ because full column rank implies $Av \\neq 0$ for $v \\neq 0$. Hence $A^{T}A$ is positive definite.

**Question 6.** Differentiate $f(\\beta) = (y - X\\beta)^{T}(y - X\\beta)$ with respect to $\\beta$ and solve for the minimizer.

> **Answer.** $\\partial f/\\partial \\beta = -2X^{T}(y - X\\beta)$. Setting to zero gives $X^{T}X\\beta = X^{T}y$, so $\\hat{\\beta} = (X^{T}X)^{-1}X^{T}y$ when $X^{T}X$ is invertible.

### Likelihood-based inference

**Question 7.** For $X_{1}, \\dots, X_{n} \\sim \\text{Poisson}(\\lambda)$ iid, write the log-likelihood, find the MLE, and compute the Fisher information.

> **Answer.** $\\ell(\\lambda) = -n\\lambda + (\\sum_{i}X_{i})\\log\\lambda - \\sum_{i}\\log(X_{i}!)$. The score is $U(\\lambda) = -n + \\sum_{i}X_{i}/\\lambda$. Setting to zero gives $\\hat{\\lambda} = \\bar{X}$. The Fisher information is $I(\\lambda) = \\mathbb{E}[-\\partial^{2}\\ell/\\partial\\lambda^{2}] = n/\\lambda$.

**Question 8.** Does the Cramér–Rao lower bound apply to the sample median in a regular parametric model? Distinguish that question from the median's nonparametric asymptotic variance.

> **Answer.** The Cramér–Rao inequality applies to any unbiased estimator of a differentiable parametric target when the likelihood satisfies its regularity conditions; it does not exclude an estimator merely because the estimator uses an order statistic. For example, in a normal location model with known variance and odd sample size, the sample median is unbiased for the location, so its variance is at least the inverse Fisher information. Separately, in a nonparametric model a regular population median has influence function $[1/2-\\mathbf 1_{\\{X\\le m\\}}]/f(m)$ and asymptotic variance $1/[4f(m)^2]$. These are different model-and-bound questions.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Probability theory and random variables

- *Math Atlas: Probability Models and Proofs* --- measure-theoretic probability, convergence, and limit theorems.
- *Math Atlas: Principles of Statistical Inference* --- a first-course treatment of estimation, testing, and confidence intervals.

### Linear algebra and matrix calculus

- *Math Atlas: Linear Algebra: Structure and Proofs* --- vector spaces, eigenvalues, quadratic forms, and spectral theory.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development of algebraic structures that assumes the set-theoretic basics.

### Likelihood-based inference

- *Math Atlas: Principles of Statistical Inference* --- likelihood, score tests, Wald tests, and basic asymptotics.
- *Math Atlas: Statistical Learning and Generalization* --- if the connection between estimation and prediction feels unfamiliar.

## What this book does not assume

- Measure theory at the level of Radon-Nikodym derivatives: the text uses expectation and conditional expectation without requiring measure-theoretic machinery.
- Specialized prior coursework in survival or spatial statistics: the chapters introduce their statistical objects and applications, while importing some stochastic-process results. Readers should already be comfortable with basic stochastic processes and use the references for full measure-theoretic development.
- Programming: algorithms are described in prose; no prior programming experience is required.
- Prior exposure to survey sampling: "Design Randomization as a Probability Space" develops the finite-population probability framework used later.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};