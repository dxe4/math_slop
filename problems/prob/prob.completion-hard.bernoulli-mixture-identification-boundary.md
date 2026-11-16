# Separate finite-prefix information from complete mixture identification

*Hard · [Probability problems](index.md)*

In a Bernoulli mixture, first draw $\Theta\sim\mu$ on $[0,1]$ and then draw conditionally iid Bernoulli($\Theta$) bits. Prove that the laws of all finite prefixes determine $\mu$ uniquely, but for each fixed $m\ge1$ construct two different strictly positive continuous mixing densities whose first $m$-bit laws agree. You may use uniform polynomial approximation on $[0,1]$; justify the finite-prefix moment equivalence and every cancellation in your construction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The all-success prefix gives each ordinary moment. Every word probability is a polynomial in the mixing parameter.

</details>

<details>
<summary>Hint 2</summary>

An $(m+1)$st derivative of a polynomial vanishing to order $m+1$ at both endpoints is orthogonal to all polynomials of degree at most $m$.

</details>

<details>
<summary>Model proof</summary>

Compact moment determination is exact for all prefixes, while an orthogonal polynomial perturbation hides from any fixed prefix length.

1. A word with $r$ ones in a prefix of length $k$ has probability $\int\theta^r(1-\theta)^{k-r}\,d\mu(\theta)$. Thus matching moments through order $m$ implies matching every $m$-bit word probability, and the all-success words of lengths at most $m$ recover those moments from the prefix law.
2. If all prefixes agree, the integrals of all polynomials agree. Uniform polynomial approximation implies equality of integrals of every continuous function on $[0,1]$, hence equality of the probability measures. Compactness of this interval is essential to this argument.
3. For fixed $m$, let $h(x)=x^{m+1}(1-x)^{m+1}$ and $g=h^{(m+1)}$. This is a nonzero polynomial. Repeated integration by parts shows $\int_0^1x^kg(x)\,dx=0$ for $0\le k\le m$: every boundary term uses a derivative of $h$ of order at most $m$ and vanishes, and the final derivative of $x^k$ is zero.
4. Let $M=\max_{[0,1]}|g|>0$ and define $f_\pm=1\pm g/(2M)$. They are continuous and at least $1/2$, normalised by the case $k=0$, and distinct. Their moments through order $m$ agree, hence so do all first-$m$-bit laws. This supplies actual different mixing laws rather than an identifiability claim based only on dimension counting.

**Self-assessment rubric**

- Derive both directions relating word probabilities and finite moments.
- Pass from polynomial integrals to equality of probability measures.
- Verify the exact orthogonality and all boundary cancellations.
- Normalise the perturbations and prove finite-prefix indistinguishability.

</details>
