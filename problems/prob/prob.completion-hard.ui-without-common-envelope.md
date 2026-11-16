# Separate uniform integrability from a common integrable envelope

*Hard · [Probability problems](index.md)*

Construct a nonnegative uniformly integrable sequence $X_n\to0$ almost surely and in $L^1$ for which no integrable $Y$ satisfies $X_n\le Y$ almost surely for all $n$. Then prove that every sequence converging to zero in $L^1$ nevertheless has a subsequence with an integrable common absolute-value envelope. Explain why these statements are compatible.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Place large values on disjoint events whose probabilities make the individual means tend to zero but make their sum diverge.

</details>

<details>
<summary>Hint 2</summary>

For the general subsequence assertion, choose a summable sequence of absolute first moments.

</details>

<details>
<summary>Model proof</summary>

Individual tail control differs from the integrability of the supremum, while a sparse subsequence restores domination.

1. On $[0,1]$ with Lebesgue measure, choose disjoint intervals $A_n$ of lengths $1/(n2^n)$; this is possible since their sum is $\log2<1$. Set $X_n=2^n\mathbf1_{A_n}$. Every point belongs to at most one interval, so $X_n\to0$ everywhere, and $E X_n=1/n\to0$.
2. For $K>0$, $E[X_n\mathbf1_{X_n>K}]$ equals $1/n$ if $2^n>K$ and zero otherwise. Its supremum over $n$ tends to zero as $K\to\infty$, proving uniform integrability directly.
3. Disjointness gives $E\sup_nX_n=\sum_n2^nP(A_n)=\sum_n1/n=\infty$ by Tonelli. A countable intersection of the proposed almost-sure domination events would give $Y\ge\sup_nX_n$ almost surely, impossible for integrable $Y$.
4. For any $Z_n\to0$ in $L^1$, choose increasing $n_j$ with $E|Z_{n_j}|\le2^{-j}$. Then $Y=\sum_j|Z_{n_j}|$ has $EY\le1$ by Tonelli, is finite almost surely, and dominates the subsequence. Selecting a sparse subsequence can remove the nonsummable accumulation responsible for the first example.

**Self-assessment rubric**

- Give valid disjoint event masses and verify both modes of convergence.
- Verify the uniform tail definition rather than infer an envelope.
- Show that the expected pointwise supremum is infinite.
- Construct an integrable envelope for an arbitrary suitable subsequence.

</details>
