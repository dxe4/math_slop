# Derive the square-root scale of cyclic vertices

*Hard · [Probability problems](index.md)*

Each of $n$ labelled vertices independently selects a uniform vertex as its outgoing neighbour, with loops allowed. Let $Z_n$ count vertices lying on directed cycles. Derive an exact finite sum for $E Z_n$ and prove $E Z_n/\sqrt n\to\sqrt{\pi/2}$. You may use $\int_0^\infty e^{-x^2/2}\,dx=\sqrt{\pi/2}$, but must justify the infinite-range asymptotic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Count directed cycles of each length, then count their vertices.

</details>

<details>
<summary>Hint 2</summary>

For lengths of order $\sqrt n$, expand the logarithm of a falling-factorial ratio. Bound longer lengths before passing to a Riemann integral.

</details>

<details>
<summary>Model proof</summary>

Cycle enumeration produces a product whose Gaussian-scale decay controls the entire sum.

1. There are $\binom nk(k-1)!$ possible directed $k$-cycles, each present with probability $n^{-k}$. Distinct cycles in a functional graph are vertex-disjoint. Linearity therefore gives $E Z_n=\sum_{k=1}^n k\binom nk(k-1)!n^{-k}=\sum_{k=1}^n\prod_{j=0}^{k-1}(1-j/n)$.
2. Uniformly for $k\le A\sqrt n$ with fixed $A$, the logarithm of this product is $-k(k-1)/(2n)+O(k^3/n^2)$. This follows from $\log(1-u)=-u+O(u^2)$ uniformly over the relevant $u$. Thus the partial sum divided by $\sqrt n$ tends to $\int_0^A e^{-x^2/2}\,dx$.
3. For every $k\le n$, $\log(1-j/n)\le-j/n$, so the product is at most $e^{-k(k-1)/(2n)}$. For $k\ge2$ this is at most $e^{-(k-1)^2/(2n)}$. The scaled tail beyond $A\sqrt n$ is bounded by a Gaussian upper Riemann sum, whose limit superior is at most $\int_A^\infty e^{-x^2/2}\,dx$ (an endpoint shift tends to zero).
4. First take $n\to\infty$ at fixed $A$, then $A\to\infty$. The tail bound closes the passage from a bounded Riemann sum to the full integral and gives the stated constant.

**Self-assessment rubric**

- Count cycles and account for their vertex multiplicity correctly.
- Prove the uniform logarithmic estimate on each square-root window.
- Control the remaining lengths before taking the infinite integral.

</details>
