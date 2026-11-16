# A moment criterion for uniform integrability

*Medium · [Probability problems](index.md)*

Suppose a nonempty family of real random variables $(X_i)_{i\in I}$ satisfies $\sup_{i\in I}E[|X_i|^p]\le C<\infty$ for a real $p>1$. Prove uniform integrability in the sense $\lim_{K\to\infty}\sup_iE[|X_i|\mathbf1_{\{|X_i|>K\}}]=0$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

On the tail $|X_i|>K$, compare the first power with the $p$th power divided by a power of $K$.

</details>

<details>
<summary>Hint 2</summary>

Obtain a bound independent of $i$ before taking the supremum and sending the threshold to infinity.

</details>

<details>
<summary>Model proof</summary>

A higher moment controls all first-moment tails uniformly.

1. Since $|x|\le1+|x|^p$, every variable is integrable. For $K>0$ and $|x|>K$, $|x|^{p-1}>K^{p-1}$, giving $|x|\mathbf1_{\{|x|>K\}}\le |x|^p/K^{p-1}$ for all real $x$.
2. Taking expectations and then the supremum yields $0\le\sup_iE[|X_i|\mathbf1_{\{|X_i|>K\}}]\le C/K^{p-1}$.
3. The exponent $p-1$ is positive, so the upper bound tends to zero as $K\to\infty$. This proves the stated uniform tail condition. A bound on first moments alone would not provide this vanishing power.

The uniform first-moment tail is at most $C/K^{p-1}$, which vanishes as $K$ grows.

**Self-assessment rubric**

- Establish a correct pointwise comparison using $p>1$ and positive threshold.
- Use the common moment bound after expectation and supremum.
- Show the bound vanishes and identify the exact uniform-integrability condition, with integrability justified.

</details>
