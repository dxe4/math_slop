# Keep random predictable stakes inside the stochastic isometry

*Medium · [Probability problems](index.md)*

Let $B$ be Brownian motion relative to $(\mathcal F_t)$, and let $0=t_0<t_1<\cdots<t_m=T<\infty$. For each $k$, let $H_k$ be bounded and $\mathcal F_{t_{k-1}}$-measurable, and set $I_j=\sum_{k=1}^jH_k(B_{t_k}-B_{t_{k-1}})$. Prove $(I_j,\mathcal F_{t_j})$ is a square-integrable martingale and prove the conditional isometry $E[I_m^2\mid\mathcal F_0]=E[\sum_{k=1}^mH_k^2(t_k-t_{k-1})\mid\mathcal F_0]$. The $H_k$ may depend on earlier Brownian increments and need not be independent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Condition one new increment on the sigma-field at its left endpoint, where its stake is already measurable.

</details>

<details>
<summary>Hint 2</summary>

For a cross term involving intervals $i<j$, condition at $t_{j-1}$. Then use the tower property to return to $\mathcal F_0$; diagonal terms require the conditional second moment of the new Brownian increment.

</details>

<details>
<summary>Model proof</summary>

Predictability, not independence of the stakes, removes the cross terms.

1. Write $D_k=H_k(B_{t_k}-B_{t_{k-1}})$ and $h_k=t_k-t_{k-1}$. Boundedness and Brownian square integrability give $D_k\in L^2$. Since the Brownian increment is independent of $\mathcal F_{t_{k-1}}$, $E[D_k\mid\mathcal F_{t_{k-1}}]=0$ and $E[D_k^2\mid\mathcal F_{t_{k-1}}]=H_k^2h_k$. Finite partial sums are adapted and in $L^2$, hence form a martingale.
2. For $i<j$, $D_iH_j$ is $\mathcal F_{t_{j-1}}$-measurable. The cross product $D_iD_j$ is integrable by Cauchy–Schwarz, and conditioning gives $E[D_iD_j\mid\mathcal F_{t_{j-1}}]=0$. Applying the tower property yields zero conditional mean given $\mathcal F_0$ for every cross term.
3. Expand the finite square $I_m^2=\sum_kD_k^2+2\sum_{i<j}D_iD_j$ and condition on $\mathcal F_0$. Cross terms vanish, while the diagonal identity and the tower property give $E[D_k^2\mid\mathcal F_0]=E[H_k^2h_k\mid\mathcal F_0]$. Summing proves the conditional isometry. Random stakes remain squared inside the conditional expectation; replacing them by squared ordinary means would be unjustified.

**Self-assessment rubric**

- Establish square integrability and the conditional first and second moments using left-endpoint measurability.
- Remove every cross term at the later interval's left endpoint, with integrability and sigma-fields correctly stated.
- Expand the finite square and use the tower property to obtain exactly the requested conditional identity.

</details>
