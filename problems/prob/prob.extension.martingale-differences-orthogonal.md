# Orthogonality of square-integrable martingale differences

*Medium · [Probability problems](index.md)*

Let $(\mathcal F_k)$ be a filtration and let each real $D_k\in L^2$ be $\mathcal F_k$-measurable with $E[D_k\mid\mathcal F_{k-1}]=0$. Prove $E[D_iD_j]=0$ for $1\le i<j$, justifying the use of an unbounded past-measurable multiplier.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The earlier difference is measurable at the time just before the later difference.

</details>

<details>
<summary>Hint 2</summary>

First test against bounded truncations of the earlier difference, then use Cauchy–Schwarz to pass to its L2 limit.

</details>

<details>
<summary>Model proof</summary>

Conditional zero drift gives orthogonality to earlier L2 information by truncation.

1. Because $i<j$ and the filtration is increasing, $D_i$ is $\mathcal F_{j-1}$-measurable. Cauchy–Schwarz ensures $D_iD_j\in L^1$.
2. Let $D_i^{(K)}$ be the truncation of $D_i$ to $[-K,K]$. Bounded pull-out and the tower property give $E[D_i^{(K)}D_j]=E[D_i^{(K)}E[D_j\mid\mathcal F_{j-1}]]=0$.
3. The truncations converge to $D_i$ in $L^2$. Hence $|E[(D_i-D_i^{(K)})D_j]|\le\|D_i-D_i^{(K)}\|_2\|D_j\|_2\to0$. Taking limits proves $E[D_iD_j]=0$, without needing independence of the differences.

Bounded truncations have zero cross moments by conditioning; their L2 limit gives orthogonality.

**Self-assessment rubric**

- Use adaptedness and the increasing filtration to place the earlier difference in the required past information.
- Obtain zero cross moments for bounded past-measurable truncations.
- Use square integrability and Cauchy–Schwarz to justify the limiting unbounded product.

</details>
