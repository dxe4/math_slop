# Upgrade monotone pointwise convergence on a compact set

*Medium · [Real analysis](index.md)*

Let continuous f\_n on a compact metric space K decrease pointwise to a continuous f. Prove $f_n\to f$ uniformly. Give the compact-cover argument explicitly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For a fixed tolerance, the strict-error sets are open and increase with n.

</details>

<details>
<summary>Hint 2</summary>

A finite subcover can be replaced by its largest index.

</details>

<details>
<summary>Model proof</summary>

Monotonicity turns finite compact coverage into one whole-domain threshold.

1. Since f\_n decreases to f, all differences f\_n-f are nonnegative. For epsilon&gt;0 set U\_n={x:f\_n(x)-f(x)&lt;epsilon}. Continuity makes U\_n open, and monotonicity gives U\_n contained in U\_(n+1).
2. Pointwise convergence makes the U\_n cover K. Compactness gives a finite subcover with indices n\_1,...,n\_k.
3. Take N=max n\_j. Increasingness gives U\_N=K, so for all n&gt;=N every point has error below epsilon. This is uniform convergence.

**Self-assessment rubric**

- Use continuity of both the approximants and limit and the correct monotone direction.
- Invoke compactness on the entire pointwise cover.
- Replace all selected indices by one valid maximum.

</details>
