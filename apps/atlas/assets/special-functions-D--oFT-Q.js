var e=`---
parent_id: book-functions-equations-proof
chapter_id: special-functions
title: "Special Functions"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Special Functions

## Motivation: beyond elementary formulas

Polynomials, rational functions, exponentials, logarithms, and trigonometric functions are called **elementary functions** because they can be built from the identity function and constants using finitely many algebraic operations and compositions. Yet mathematics and its applications demand functions that cannot be so expressed: the gamma function generalizing factorials, the Riemann zeta function encoding the distribution of primes, Bessel functions describing wave propagation in cylindrical coordinates, and hypergeometric functions unifying vast families of series.

This chapter introduces the gamma and zeta functions as prototypes of special functions whose full domains require analytic continuation. We prove the gamma functional equation and the zeta Euler product, state their continuation properties with honest proof boundaries, and show how they connect the discrete world of integers to continuous analysis.

## The gamma function

**Definition 7.1 (Gamma function).** For $\\operatorname{Re}(s)>0$, define

$$\\Gamma(s)=\\int_{0}^{\\infty}t^{s-1}e^{-t}\\,dt.$$

**Theorem 7.2 (Convergence).** The integral converges absolutely for $\\operatorname{Re}(s)>0$.

**Proof.** Writing $\\sigma=\\operatorname{Re}(s)$, we have $|t^{s-1}e^{-t}|=t^{\\sigma-1}e^{-t}$. Near $t=0$ this is asymptotic to $t^{\\sigma-1}$, which is integrable when $\\sigma>0$; near infinity, exponential decay dominates the power $t^{\\sigma-1}$. ∎

**Theorem 7.3 (Functional equation).** For $\\operatorname{Re}(s)>0$,

$$\\Gamma(s+1)=s\\,\\Gamma(s).$$

**Proof.** Integrate by parts:

$$\\Gamma(s+1)=\\int_{0}^{\\infty}t^{s}e^{-t}\\,dt=\\Bigl[-t^{s}e^{-t}\\Bigr]_{0}^{\\infty}+s\\int_{0}^{\\infty}t^{s-1}e^{-t}\\,dt=0+s\\,\\Gamma(s).$$

The boundary term vanishes because $t^{s}e^{-t}\\to 0$ as $t\\to\\infty$ and as $t\\to 0^{+}$ for $\\operatorname{Re}(s)>0$. ∎

**Corollary 7.4 (Factorial connection).** For $n\\in\\mathbb{N}$,

$$\\Gamma(n+1)=n!.$$

**Proof.** By induction. $\\Gamma(1)=\\int_{0}^{\\infty}e^{-t}\\,dt=1=0!$. If $\\Gamma(n+1)=n!$, then $\\Gamma(n+2)=(n+1)\\Gamma(n+1)=(n+1)n!=(n+1)!$. ∎

**Theorem 7.5 (Analytic continuation).** $\\Gamma$ extends to a meromorphic function on $\\mathbb{C}$ with simple poles at $s=0,-1,-2,\\dots$ and residues

$$\\operatorname{Res}(\\Gamma,-n)=\\frac{(-1)^{n}}{n!}.$$

**Proof.** Repeatedly apply the functional equation:

$$\\Gamma(s)=\\frac{\\Gamma(s+n+1)}{s(s+1)\\cdots(s+n)}.$$

The right side is defined and holomorphic for $\\operatorname{Re}(s)>-(n+1)$ except at $s=0,-1,\\dots,-n$, where the denominator vanishes. By the uniqueness of analytic continuation, this defines $\\Gamma$ on the larger half-plane. Taking $n\\to\\infty$ covers all of $\\mathbb{C}$. The residue at $s=-n$ is computed by

$$\\lim_{s\\to -n}(s+n)\\Gamma(s)=\\frac{\\Gamma(1)}{(-n)(-n+1)\\cdots(-1)}=\\frac{(-1)^{n}}{n!}.$$

∎

## The Riemann zeta function

**Definition 7.6 (Riemann zeta function).** For $\\operatorname{Re}(s)>1$,

$$\\zeta(s)=\\sum_{n=1}^{\\infty}\\frac{1}{n^{s}}.$$

**Theorem 7.7 (Euler product).** For $\\operatorname{Re}(s)>1$,

$$\\zeta(s)=\\prod_{p\\text{ prime}}\\frac{1}{1-p^{-s}}.$$

**Proof.** Expand each factor as a geometric series:

$$\\frac{1}{1-p^{-s}}=\\sum_{k=0}^{\\infty}p^{-ks}.$$

The product over all primes becomes a sum over all positive integers by the fundamental theorem of arithmetic (unique prime factorization). Absolute convergence for $\\operatorname{Re}(s)>1$ justifies rearrangement. ∎

**Theorem 7.8 (Analytic continuation of $\\zeta$).** $\\zeta$ extends to a meromorphic function on $\\mathbb{C}$ with a single simple pole at $s=1$ of residue $1$.

We sketch the continuation via the theta function or the Mellin transform; a complete proof requires more machinery than we develop here. The key identity is

$$\\pi^{-s/2}\\Gamma\\Bigl(\\frac{s}{2}\\Bigr)\\zeta(s)=\\pi^{-(1-s)/2}\\Gamma\\Bigl(\\frac{1-s}{2}\\Bigr)\\zeta(1-s),$$

the **functional equation** of $\\zeta$, which relates values at $s$ and $1-s$.

## Common errors and how to avoid them

**Error: Using $\\Gamma$ at nonpositive integers.** The gamma function has poles at $0,-1,-2,\\dots$. Expressions like $\\Gamma(0)$ or $\\Gamma(-3)$ are undefined.

**Error: Applying the zeta series at $s=1$.** The harmonic series $\\sum 1/n$ diverges. $\\zeta(1)$ is the pole of the analytically continued function, not the sum of the series.

**Error: Shifting the factorial index incorrectly.** The identities are $\\Gamma(n)=(n-1)!$ for $n\\ge1$ and, equivalently, $\\Gamma(n+1)=n!$. In particular, $\\Gamma(5)=4!=24$, not $5!$.

## Practice exercises

### Exercise 1
Compute $\\Gamma(5)$ and $\\Gamma(1/2)$.

**Solution.** $\\Gamma(5)=4!=24$. The value $\\Gamma(1/2)=\\sqrt{\\pi}$ is proved by the Gaussian integral: substituting $t=u^{2}$ in the definition gives $\\Gamma(1/2)=2\\int_{0}^{\\infty}e^{-u^{2}}\\,du=\\sqrt{\\pi}$. ∎

### Exercise 2
Use the functional equation to find $\\Gamma(7/2)$.

**Solution.** $\\Gamma(7/2)=\\frac{5}{2}\\Gamma(5/2)=\\frac{5}{2}\\cdot\\frac{3}{2}\\Gamma(3/2)=\\frac{5}{2}\\cdot\\frac{3}{2}\\cdot\\frac{1}{2}\\Gamma(1/2)=\\frac{15}{8}\\sqrt{\\pi}$. ∎

### Exercise 3
Prove that $\\zeta(2)=\\pi^{2}/6$.

**Solution.** This is the famous Basel problem. A standard proof uses the Fourier series of $f(x)=x^{2}$ on $[-\\pi,\\pi]$. The series is

$$x^{2}=\\frac{\\pi^{2}}{3}+4\\sum_{n=1}^{\\infty}\\frac{(-1)^{n}}{n^{2}}\\cos(nx).$$

Setting $x=\\pi$ gives $\\pi^{2}=\\pi^{2}/3+4\\sum_{n=1}^{\\infty}1/n^{2}$, so $\\sum_{n=1}^{\\infty}1/n^{2}=\\pi^{2}/6$. ∎

### Exercise 4
Show that $\\zeta(s)>0$ for all real $s>1$.

**Solution.** For real $s>1$, each term $1/n^{s}$ is positive. The sum of positive terms is positive. ∎

### Exercise 5
Find the residue of $\\Gamma$ at $s=-3$.

**Solution.** By the residue formula, $\\operatorname{Res}(\\Gamma,-3)=(-1)^{3}/3!=-1/6$. ∎

## Looking forward and back

This chapter introduced the gamma and zeta functions as examples of special functions defined by integrals and series that require analytic continuation for a full theory. The gamma function's functional equation, proved here by integration by parts, is a template for the recurrence relations that appear in **Difference Equations**. The zeta function's connection to prime numbers via the Euler product hints at the deep interplay between analysis and number theory. A later course in differential equations can extend this viewpoint to Bessel functions and other special functions arising from equations with nonconstant coefficients.
`;export{e as default};