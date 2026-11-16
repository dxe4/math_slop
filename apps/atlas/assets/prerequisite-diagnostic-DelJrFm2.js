var e=`---
parent_id: book-stochastic-processes-paths
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

The first discrete-time part needs proof-based probability and elementary linear algebra. The later L4 martingale and continuous-path parts add measure-theoretic probability and real analysis. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## Preparation for the later L4 parts

1. **Measure-theoretic probability.** Probability spaces $(\\Omega, \\mathcal{F}, \\mathbb{P})$, random variables, expectation, conditional expectation, independence, and the basic convergence theorems (monotone convergence, dominated convergence, Fatou's lemma). You should be comfortable reading $\\mathbb{E}[X \\mid \\mathcal{G}]$ as the conditional expectation of $X$ given a $\\sigma$-algebra $\\mathcal{G}$.
2. **Real analysis.** Limits, continuity, series, Riemann and Lebesgue integration, and basic properties of metric spaces. You should be able to state what it means for a sequence of functions to converge uniformly and to prove that a uniformly convergent sequence of continuous functions has a continuous limit.
3. **Linear algebra.** Matrix multiplication, eigenvalues, eigenvectors, solving systems of linear equations, and basic spectral theory. You should be able to compute the stationary distribution of a two-state Markov chain by solving a linear system.

## Self-diagnostic questions with answers

### Measure-theoretic probability

**Question 1.** State the monotone convergence theorem. Explain what extra hypothesis lets you pass expectations through a decreasing sequence of nonnegative random variables, and give an example showing why some hypothesis is needed.

> **Answer.** The monotone convergence theorem says that if $0\\le X_n\\uparrow X$ almost surely, then $\\mathbb{E}[X_n]\\uparrow\\mathbb{E}[X]$. A decreasing sequence is outside that theorem's hypotheses. If $0\\le X_n\\downarrow X$ and $\\mathbb{E}[X_1]<\\infty$, then $X_n\\le X_1$ and dominated convergence gives $\\mathbb{E}[X_n]\\downarrow\\mathbb{E}[X]$. Without an integrable upper bound this can fail: on the probability space $((0,1),\\mathcal B,dx)$, let $X_n(x)=x^{-1}\\mathbf 1_{(0,1/n)}(x)$. Then $X_n\\downarrow0$ pointwise, but $\\mathbb{E}[X_n]=\\infty$ for every $n$.

**Question 2.** Let $\\mathcal{G} \\subseteq \\mathcal{F}$ be a $\\sigma$-algebra. Show that $\\mathbb{E}[\\mathbb{E}[X \\mid \\mathcal{G}]] = \\mathbb{E}[X]$ for any integrable $X$.

> **Answer.** By definition, $\\mathbb{E}[X \\mid \\mathcal{G}]$ is $\\mathcal{G}$-measurable and satisfies $\\mathbb{E}[\\mathbb{E}[X \\mid \\mathcal{G}] \\mathbf{1}_{A}] = \\mathbb{E}[X \\mathbf{1}_{A}]$ for all $A \\in \\mathcal{G}$. Taking $A = \\Omega$ gives the result.

**Question 3.** Let $X$ and $Y$ be independent integrable random variables. Show that $\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$.

> **Answer.** For simple random variables the identity follows by factoring the sum. For general nonnegative variables, approximate by simple variables and apply monotone convergence. For integrable variables, decompose into positive and negative parts and use linearity.

### Real analysis

**Question 4.** Prove that if $(f_{n})$ is a sequence of continuous functions on $[0,1]$ converging uniformly to $f$, then $f$ is continuous.

> **Answer.** Let $\\epsilon > 0$ and $x \\in [0,1]$. Choose $N$ so that $\\|f_{N} - f\\|_{\\infty} < \\epsilon/3$. Choose $\\delta > 0$ so that $|f_{N}(x) - f_{N}(y)| < \\epsilon/3$ whenever $|x-y| < \\delta$. Then for such $y$, $|f(x) - f(y)| \\le |f(x) - f_{N}(x)| + |f_{N}(x) - f_{N}(y)| + |f_{N}(y) - f(y)| < \\epsilon$.

**Question 5.** Compute $\\sum_{n=0}^{\\infty} (1/2)^{n}$ and justify your answer.

> **Answer.** The series is geometric with ratio $1/2$. Its sum is $1/(1 - 1/2) = 2$. The formula $\\sum_{n=0}^{\\infty} r^{n} = 1/(1-r)$ is valid for $|r| < 1$ by the standard partial-sum argument.

**Question 6.** Let $f_{n}(x) = x^{n}$ on $[0,1]$. Does $f_{n}$ converge uniformly? Explain.

> **Answer.** No. The pointwise limit is $f(x) = 0$ for $x \\in [0,1)$ and $f(1) = 1$. The limit is discontinuous, so convergence cannot be uniform (each $f_{n}$ is continuous). Alternatively, $\\sup_{x \\in [0,1]} |f_{n}(x) - f(x)| = 1$ for all $n$.

### Linear algebra

**Question 7.** Find the eigenvalues and eigenvectors of $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.

> **Answer.** The characteristic polynomial is $(2-\\lambda)^{2} - 1 = \\lambda^{2} - 4\\lambda + 3 = (\\lambda-1)(\\lambda-3)$. Eigenvalues are $1$ and $3$. For $\\lambda=1$, eigenvectors are multiples of $(1,-1)^{\\top}$. For $\\lambda=3$, eigenvectors are multiples of $(1,1)^{\\top}$.

**Question 8.** Let $P = \\begin{pmatrix} 0.7 & 0.3 \\\\ 0.4 & 0.6 \\end{pmatrix}$. Find a probability vector $\\pi$ such that $\\pi P = \\pi$.

> **Answer.** Solving $\\pi_{0} = 0.7\\pi_{0} + 0.4\\pi_{1}$ and $\\pi_{0} + \\pi_{1} = 1$ gives $0.3\\pi_{0} = 0.4\\pi_{1}$, so $\\pi_{0}/\\pi_{1} = 4/3$. Hence $\\pi = (4/7, 3/7)$.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Measure-theoretic probability

- *Math Atlas: Probability and Measure* --- probability spaces, random variables, expectation, conditional expectation, and convergence theorems.
- *Math Atlas: Probability: Distributions and Limit Theorems* --- a proof-focused development of characteristic functions, limit theorems, and the law of large numbers.

### Real analysis

- *Math Atlas: Real Analysis* --- limits, continuity, differentiation, integration, and metric spaces.
- *Math Atlas: Calculus and Analysis* --- if the series and uniform-convergence questions felt unfamiliar.

### Linear algebra

- *Math Atlas: Linear Algebra* --- vectors, matrices, eigenvalues, and spectral theory.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development of algebraic structures that assumes the linear-algebraic basics.

## What this book does not assume

- Continuous-time Markov chains on general state spaces are not covered; the early chapters introduce general process notation and finite-state discrete-time Markov chains.
- Stochastic calculus beyond the Itô integral: "Stochastic Integration Orientation" introduces the machinery from first principles, building on "Brownian Motion."
- Programming: algorithms are described in prose; no prior programming experience is required.
- Prior exposure to martingales or Brownian motion: "Martingales and Stopping" and "Brownian Motion" introduce the machinery from first principles, building on earlier chapters.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};