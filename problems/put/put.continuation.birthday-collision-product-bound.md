# Birthday collision product bound

*Hard · [Original Putnam-style training](index.md)*

For $n$ independent uniform samples from a set of $N$ labels, $1\le n\le N$, prove $P(\text{all distinct})=\prod_{k=0}^{n-1}(1-k/N)\le\exp[-n(n-1)/(2N)]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Multiply conditional avoidance probabilities in arrival order.

</details>

<details>
<summary>Hint 2</summary>

Apply $1-u\le e^{-u}$ to each factor.

</details>

<details>
<summary>Model proof</summary>

Because $\sum_{k=0}^{n-1}k=n(n-1)/2$, the product is at most $\exp[-n(n-1)/(2N)]$.

1. Given $k$ distinct previous labels, the next sample avoids them with chance $(N-k)/N=1-k/N$. The chain rule multiplies these factors for $k=0,\ldots,n-1$.
2. For each $k$, $1-k/N\le e^{-k/N}$; multiplying yields an exponential of minus the sum of $k/N$.
3. Because $\sum_{k=0}^{n-1}k=n(n-1)/2$, the product is at most $\exp[-n(n-1)/(2N)]$.

**Self-assessment rubric**

- Multiply the successive distinct-label avoidance probabilities.
- Apply 1−u≤e^{-u} factorwise.
- Evaluate the exponent sum n(n−1)/(2N).

</details>
