# Read a convergence threshold from condensation

*Easy · [Real analysis](index.md)*

For integer p&gt;=0 consider $\sum_{n=2}^{\infty}1/(n(\log n)^p)$. You may use Cauchy condensation and the p-series criterion. Find the smallest integer p for which it converges.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested series scale or error bound only; no convergence proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The condensed series is a constant multiple of sum over k of 1/k^p.

</details>

<details>
<summary>Hint 2</summary>

Convergence needs a strict inequality at the p-series threshold.

</details>

<details>
<summary>Worked solution</summary>

Condensation removes the logarithm by grouping at geometric indices.

1. The positive terms are decreasing for n&gt;=2. Condensation gives terms 2^k/\[2^k\*(log(2^k))^p\]=1/\[(log2)^p\*k^p\].
2. The resulting p-series converges exactly when p&gt;1.
3. The smallest allowed integer p is therefore two.

</details>
