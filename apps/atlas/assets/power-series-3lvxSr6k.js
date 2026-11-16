var e=`---
parent_id: book-functions-equations-proof
chapter_id: power-series
title: "Power Series"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Power Series

## Motivation: from polynomials to infinite series

Polynomials are the simplest functions: they are built from addition and multiplication alone, and their values can be computed by finitely many arithmetic operations. Yet many important functions---the exponential, the logarithm, the sine---are not polynomials. Power series bridge this gap by allowing polynomials of infinite degree. A power series has the form

$$\\sum_{n=0}^{\\infty}a_{n}(z-c)^{n},$$

where the coefficients $a_{n}$ and the center $c$ are fixed. If the series converges, it defines a function in a neighborhood of $c$.

This chapter develops the convergence theory of power series, proves that convergent power series define differentiable functions, and establishes the standard expansions for $e^{z}$, $\\sin z$, $\\cos z$, and $(1-z)^{-1}$. These expansions are the foundation for analytic continuation in the next chapter.

## Radius of convergence

**Definition 5.1 (Power series).** A power series centered at $c\\in\\mathbb{C}$ is a formal series

$$\\sum_{n=0}^{\\infty}a_{n}(z-c)^{n},$$

where $a_{n}\\in\\mathbb{C}$.

**Theorem 5.2 (Radius of convergence).** For every power series there exists a unique $R\\in[0,\\infty]$ such that:

1. The series converges absolutely for all $z$ with $|z-c|<R$;
2. The series diverges for all $z$ with $|z-c|>R$;
3. On any compact subset of $\\{z:|z-c|<R\\}$, the convergence is uniform.

The number $R$ is the **radius of convergence**.

**Proof sketch.** Let $L=\\limsup_{n\\to\\infty}|a_{n}|^{1/n}$ and define $R=1/L$ (with $R=0$ if $L=\\infty$ and $R=\\infty$ if $L=0$). For $|z-c|<R$, choose $r$ with $|z-c|<r<R$. Then $|a_{n}|^{1/n}<1/r$ for all large $n$, so $|a_{n}(z-c)^{n}|<(|z-c|/r)^{n}$, a convergent geometric series. For $|z-c|>R$, infinitely many terms satisfy $|a_{n}(z-c)^{n}|>1$, so divergence is immediate. ∎

**Theorem 5.3 (Ratio test formula).** If $\\lim_{n\\to\\infty}|a_{n+1}/a_{n}|$ exists, it equals $1/R$.

## Differentiation and integration

**Theorem 5.4 (Term-by-term differentiation).** If $\\sum_{n=0}^{\\infty}a_{n}(z-c)^{n}$ has radius $R>0$, then the function

$$f(z)=\\sum_{n=0}^{\\infty}a_{n}(z-c)^{n}$$

is holomorphic (complex differentiable) on $\\{z:|z-c|<R\\}$, and

$$f'(z)=\\sum_{n=1}^{\\infty}na_{n}(z-c)^{n-1}.$$

The derived series has the same radius of convergence $R$.

**Proof sketch.** Uniform convergence on compact subsets allows interchange of limit and summation. The difference quotient for $f$ can be controlled by the differentiated series. ∎

**Corollary 5.5.** A power series is infinitely differentiable within its disk of convergence, and $f^{(k)}(c)=k!\\,a_{k}$. Hence the coefficients are determined by the function:

$$a_{k}=\\frac{f^{(k)}(c)}{k!}.$$

## Standard power series

**Exponential.** For all $z\\in\\mathbb{C}$,

$$e^{z}=\\sum_{n=0}^{\\infty}\\frac{z^{n}}{n!}.$$

The ratio test gives $R=\\infty$.

**Sine and cosine.** For all $z\\in\\mathbb{C}$,

$$\\sin z=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}z^{2n+1}}{(2n+1)!},\\qquad \\cos z=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}z^{2n}}{(2n)!}.$$

Both have $R=\\infty$.

**Geometric series.** For $|z|<1$,

$$\\frac{1}{1-z}=\\sum_{n=0}^{\\infty}z^{n}.$$

Here $R=1$; the series diverges for $|z|\\ge 1$.

**Logarithm.** Integrating the geometric series term by term gives, for $|z|<1$,

$$-\\ln(1-z)=\\sum_{n=1}^{\\infty}\\frac{z^{n}}{n}.$$

This also has $R=1$.

## Multiplication and composition

**Theorem 5.6 (Cauchy product).** If $f(z)=\\sum a_{n}(z-c)^{n}$ and $g(z)=\\sum b_{n}(z-c)^{n}$ both converge for $|z-c|<R$, then

$$f(z)g(z)=\\sum_{n=0}^{\\infty}\\Bigl(\\sum_{k=0}^{n}a_{k}b_{n-k}\\Bigr)(z-c)^{n}$$

for $|z-c|<R$.

This is proved by absolute convergence on compact subsets and rearrangement of double series.

## Common errors and how to avoid them

**Error: Assuming convergence at the boundary.** The radius of convergence gives no information at $|z-c|=R$. The series for $\\ln(1-z)$ converges at $z=-1$ (alternating harmonic series) but diverges at $z=1$.

**Error: Differentiating term by term outside the radius.** Term-by-term differentiation is valid only within the open disk of convergence. Beyond that radius, the series may not even define a function.

**Error: Confusing formal power series with functions.** A formal power series is an algebraic object; it defines a function only where it converges. Operations like substitution $f(g(z))$ require that the image of $g$ lie inside the radius of convergence of $f$.

## Practice exercises

### Exercise 1
Find the radius of convergence of $\\sum_{n=1}^{\\infty}\\frac{n!}{n^{n}}z^{n}$.

**Solution.** Using the ratio test:

$$\\frac{a_{n+1}}{a_{n}}=\\frac{(n+1)!}{(n+1)^{n+1}}\\cdot\\frac{n^{n}}{n!}=\\frac{(n+1)n^{n}}{(n+1)^{n+1}}=\\Bigl(\\frac{n}{n+1}\\Bigr)^{n}=\\Bigl(1-\\frac{1}{n+1}\\Bigr)^{n}\\to\\frac{1}{e}.$$

Thus $1/R=1/e$, so $R=e$. ∎

### Exercise 2
Find the power series of $f(z)=\\frac{1}{1+z^{2}}$ centered at $0$, and determine its radius of convergence.

**Solution.** Substitute $-z^{2}$ into the geometric series:

$$\\frac{1}{1+z^{2}}=\\frac{1}{1-(-z^{2})}=\\sum_{n=0}^{\\infty}(-z^{2})^{n}=\\sum_{n=0}^{\\infty}(-1)^{n}z^{2n}.$$

This converges when $|-z^{2}|<1$, i.e., $|z|<1$. The radius is $R=1$. The singularities at $z=\\pm i$ explain why $R=1$ even though the function is real-analytic on all of $\\mathbb{R}$. ∎

### Exercise 3
Compute the first four nonzero terms of the power series for $e^{z}\\sin z$ centered at $0$.

**Solution.** Using the Cauchy product:

$$e^{z}=1+z+\\frac{z^{2}}{2}+\\frac{z^{3}}{6}+\\cdots,\\qquad \\sin z=z-\\frac{z^{3}}{6}+\\cdots.$$

Multiplying:

- $z^{0}$: none (no constant term in sine).
- $z^{1}$: $1\\cdot z=z$.
- $z^{2}$: $z\\cdot z=z^{2}$.
- $z^{3}$: $1\\cdot(-z^{3}/6)+(z^{2}/2)\\cdot z=z^{3}/3$.
- $z^{4}$: $z\\cdot(-z^{3}/6)+(z^{3}/6)\\cdot z=0$.
- $z^{5}$: $1\\cdot(z^{5}/120)+(z^{2}/2)\\cdot(-z^{3}/6)+(z^{4}/24)\\cdot z=-z^{5}/30$.

Thus the first four nonzero terms are

$$e^{z}\\sin z=z+z^{2}+\\frac{1}{3}z^{3}-\\frac{1}{30}z^{5}+\\cdots.$$ ∎

### Exercise 4
Prove that if $\\sum a_{n}z^{n}$ has radius $R$, then $\\sum a_{n}z^{2n}$ has radius $\\sqrt{R}$.

**Solution.** The series $\\sum a_{n}z^{2n}=\\sum a_{n}(z^{2})^{n}$ converges when $|z^{2}|<R$, i.e., $|z|<\\sqrt{R}$, and diverges when $|z^{2}|>R$, i.e., $|z|>\\sqrt{R}$. Hence the radius is $\\sqrt{R}$. ∎

### Exercise 5
Find the sum $\\sum_{n=1}^{\\infty}\\frac{n}{2^{n}}$.

**Solution.** Start with $\\sum_{n=0}^{\\infty}z^{n}=\\frac{1}{1-z}$ for $|z|<1$. Differentiate: $\\sum_{n=1}^{\\infty}nz^{n-1}=\\frac{1}{(1-z)^{2}}$. Multiply by $z$: $\\sum_{n=1}^{\\infty}nz^{n}=\\frac{z}{(1-z)^{2}}$. Set $z=1/2$: $\\sum_{n=1}^{\\infty}\\frac{n}{2^{n}}=\\frac{1/2}{(1/2)^{2}}=\\frac{1/2}{1/4}=2$. ∎

## Looking forward and back

This chapter developed the analytic machinery of power series: convergence, differentiation, and standard expansions. The connection between coefficients and derivatives, $a_{n}=f^{(n)}(c)/n!$, will be essential in **Analytic Continuation**, where we use power series to extend functions beyond their original domains. The geometric series and its relatives, studied here, reappear in **Difference Equations** and **Differential Equations** as generating functions and solution techniques.
`;export{e as default};