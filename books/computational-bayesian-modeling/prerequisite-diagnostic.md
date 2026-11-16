
# Prerequisite Diagnostic

This book assumes three kinds of background: probability and random variables, likelihood and basic statistical inference, and calculus and linear algebra at the level needed for gradients and matrix manipulations. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Probability and random variables.** Probability axioms, conditional probability, Bayes' rule, common distributions (normal, binomial, Poisson, gamma, beta), expectation, variance, and basic manipulation of densities. You should be comfortable reading $Y \sim \mathcal{N}(\mu, \sigma^{2})$ and computing $\mathbb{E}[Y]$ and $\operatorname{Var}(Y)$.
2. **Likelihood and basic inference.** The likelihood function, maximum likelihood estimation, sufficient statistics, and the distinction between frequentist and Bayesian interpretations of probability. You should be able to write the likelihood for independent normal observations and find the MLE of $\mu$.
3. **Calculus and linear algebra.** Partial derivatives, gradients, the chain rule, basic matrix operations (multiplication, inversion, transpose), and positive-definite matrices. You should be able to compute the gradient of $\log \pi(\theta)$ with respect to $\theta$ and verify that a $2 \times 2$ matrix is positive definite.

## Self-diagnostic questions with answers

### Probability and random variables

**Question 1.** Let $Y \sim \operatorname{Poisson}(\lambda)$. Show that $\mathbb{E}[Y] = \lambda$ from the definition of expectation.

> **Answer.** $\mathbb{E}[Y] = \sum_{y=0}^{\infty} y \, \frac{\lambda^{y} e^{-\lambda}}{y!} = \lambda \sum_{y=1}^{\infty} \frac{\lambda^{y-1} e^{-\lambda}}{(y-1)!} = \lambda \sum_{z=0}^{\infty} \frac{\lambda^{z} e^{-\lambda}}{z!} = \lambda$.

**Question 2.** If $X \sim \mathcal{N}(0, 1)$ and $Y = aX + b$ with $a > 0$, what is the distribution of $Y$? Derive the density using the change-of-variables formula.

> **Answer.** $Y \sim \mathcal{N}(b, a^{2})$. The transformation is $x = (y - b)/a$ with Jacobian $|dx/dy| = 1/a$. Substituting into the standard normal density gives $\frac{1}{\sqrt{2\pi}a} \exp\bigl(-(y-b)^{2}/(2a^{2})\bigr)$.

**Question 3.** Let $p \sim \operatorname{Beta}(a, b)$. Compute $\mathbb{E}[p]$ and $\operatorname{Var}(p)$ in terms of $a$ and $b$.

> **Answer.** $\mathbb{E}[p] = \frac{a}{a+b}$ and $\operatorname{Var}(p) = \frac{ab}{(a+b)^{2}(a+b+1)}$.

### Likelihood and inference

**Question 4.** Write the likelihood for $n$ independent Bernoulli observations with success probability $p$. Find the MLE of $p$.

> **Answer.** For $n\ge1$ and parameter space $[0,1]$, $L(p)=p^s(1-p)^{n-s}$ with $s=\sum_i y_i$. If $0<s<n$, differentiating the strictly concave log likelihood gives $\hat p=s/n$. If $s=0$, $(1-p)^n$ is maximized at $p=0$; if $s=n$, $p^n$ is maximized at $p=1$. With parameter space $(0,1)$ those endpoint cases have only boundary suprema. If $n=0$, the likelihood is constant and every admissible $p$ maximizes it.

**Question 5.** Explain the difference between a frequentist confidence interval and a Bayesian credible interval.

> **Answer.** A 95% confidence interval is a random interval constructed so that, over repeated sampling, 95% of such intervals contain the true parameter. A 95% credible interval is a fixed interval that contains 95% of the posterior probability. The interpretations differ: one is about the procedure, the other about the parameter given the observed data.

**Question 6.** State the definition of a sufficient statistic and explain why $\bar{y}$ is sufficient for $\mu$ in a normal model with known variance.

> **Answer.** A statistic $T(y)$ is sufficient for $\theta$ if the conditional distribution of $y$ given $T(y)$ does not depend on $\theta$. For $y_{i} \sim \mathcal{N}(\mu, \sigma^{2})$ with known $\sigma^{2}$, the likelihood factors as a function of $\bar{y}$ times a function not involving $\mu$, so $\bar{y}$ is sufficient by the factorization theorem.

### Calculus and linear algebra

**Question 7.** Compute the gradient of $f(\theta) = -\frac{1}{2}(y - X\theta)^{\top}(y - X\theta)$ with respect to $\theta$.

> **Answer.** $\nabla_{\theta} f = X^{\top}(y - X\theta)$.

**Question 8.** Let $\Sigma = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$. Show that $\Sigma$ is positive definite.

> **Answer.** The leading principal minors are $2 > 0$ and $\det(\Sigma) = 6 - 1 = 5 > 0$. Hence $\Sigma$ is positive definite.

**Question 9.** For $U(\theta) = \frac{1}{2}\theta^{2}$, write Hamilton's equations for HMC with mass $M = 1$.

> **Answer.** $d\theta/dt = r$ and $dr/dt = -\theta$.

## Scoring your diagnostic

- If you answered 8--9 questions confidently and correctly, the tested basics appear familiar; still check each chapter's specific prerequisites. This short diagnostic is not a validated readiness or attainment assessment.
- If you answered 6--7 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 6 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Probability and random variables

- *Math Atlas: Probability: Models, Bounds, and Proofs* --- axioms, conditioning, random variables, expectation, and limit theorems.
- *Math Atlas: Principles of Statistical Inference: Procedures, Guarantees, and Limits* --- likelihood, sufficiency, and the bridge from probability to inference.

### Likelihood and inference

- *Math Atlas: Principles of Statistical Inference: Procedures, Guarantees, and Limits* --- estimation, information bounds, and the Bayesian decision bridge.
- *Math Atlas: Probability: Models, Bounds, and Proofs* --- generating functions, convergence, and the probabilistic foundations of sampling.

### Calculus and linear algebra

- *Math Atlas: Linear Algebra: Structure and Proofs* --- vectors, matrices, spectra, and reliable computation.
- *Math Atlas: Calculus and Analysis* --- derivatives, integrals, and multivariable calculus.

## What this book does not assume

- Measure-theoretic probability: densities are treated with respect to Lebesgue or counting measure as needed, but no prior exposure to measure theory is required.
- Programming: no programming background is needed to begin the conceptual reading. The original computational work does require implementations and declared empirical comparisons; use the programming preparation below and the actual supplied reference profiles before claiming that work complete.
- Advanced numerical analysis: basic numerical stability is discussed, but specialized quadrature or ODE solvers are not assumed.
- Prior exposure to MCMC or Hamiltonian dynamics: "Monte Carlo Estimates and Their Error", "Metropolis--Hastings from an Invariant Kernel", and "Gradient-Based Sampling" introduce the machinery from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into model, likelihood, prior, and diagnostic before concluding that the mathematics is inaccessible.
## Programming preparation for the required work

Before attempting an implementation task, be able to define a function, iterate over an array, branch on a support check, and retain one recorded state for every Markov transition. Follow the literal language, runtime and dependency profile of the supplied reference; do not replace its target or proposal silently.

Use the matched $\operatorname{Beta}(3,7)$ task as a small repair. Derive its mean $3/10$ and variance $21/1100$ by hand, evaluate its log density only on its declared support, and trace one acceptance or rejection calculation. Store the current state after a rejected move. These are preparation checks, not a new diagnostic identity, a completed sampler or an observed empirical comparison.

For an actual comparison, declare the proposal scales, initial states, random-number method and seed, warmup, retained draws, common estimands and cost units before inspecting the result. Compare analytic references in suitable Monte Carlo-error units under the stated chain assumptions. Keep the implementation and run record together, including failures and any changes. If a listing is unexecuted, label it unexecuted; a historical internal receipt does not demonstrate execution of the current public profile.
