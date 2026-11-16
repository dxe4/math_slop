# Separate first crossings from independent future increments

*Hard · [Probability problems](index.md)*

Let $X_1,\ldots,X_n$ be independent centered square-integrable real variables, put $S_k=\sum_{i=1}^kX_i$, and let $a>0$. Prove $P(\max_{1\le k\le n}|S_k|\ge a)\le\operatorname{Var}(S_n)/a^2$ by decomposing according to the first crossing.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The first-crossing events are disjoint and measurable at their crossing times.

</details>

<details>
<summary>Hint 2</summary>

On each event expand $S_n=S_k+(S_n-S_k)$; the future sum is independent and centered.

</details>

<details>
<summary>Model proof</summary>

First-crossing decomposition turns the maximal event into controlled contributions to one terminal second moment.

1. Let $A_k=\{|S_1|<a,\ldots,|S_{k-1}|<a,\ |S_k|\ge a\}$. These events are disjoint and their union is the maximal event. Each $A_k$ belongs to $\sigma(X_1,\ldots,X_k)$.
2. The future sum $R_k=S_n-S_k$ is independent of that sigma-field and has mean zero. Expanding gives $E[S_n^21_{A_k}]=E[S_k^21_{A_k}]+E[R_k^21_{A_k}]$, since the cross term vanishes. Hence this is at least $a^2P(A_k)$.
3. Sum over the disjoint $A_k$: $E[S_n^2]\ge\sum_kE[S_n^21_{A_k}]\ge a^2\sum_kP(A_k)$. The terminal sum is centered, so $E[S_n^2]=\operatorname{Var}(S_n)$, proving the result.

**Self-assessment rubric**

- Define disjoint adapted first-crossing events whose union is the maximal event.
- Use independent centered future increments to eliminate the mixed term.
- Sum the disjoint-event bounds and identify the terminal variance.

</details>
