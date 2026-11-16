# Hat matrix bounds

*Medium · [Statistics and probability](index.md)*

Let $X\in\mathbb R^{n\times p}$ have full column rank and $H=X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$. Prove $0\le h_{ii}\le1$ for every diagonal leverage and $\sum_{i=1}^n h_{ii}=p$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Show directly from the formula that $H$ is symmetric and idempotent.

</details>

<details>
<summary>Hint 2</summary>

For the bounds, decompose a coordinate unit vector into its projected and orthogonal components. For the sum, cycle the factors inside the trace.

</details>

<details>
<summary>Model proof</summary>

Use orthogonal projection geometry for the bounds and the trace identity for the sum.

1. The inverse Gram matrix is symmetric. Hence $H^{\mathsf T}=H$, and multiplication gives $H^2=X(X^{\mathsf T}X)^{-1}(X^{\mathsf T}X)(X^{\mathsf T}X)^{-1}X^{\mathsf T}=H$.
2. For a coordinate unit vector $u_i$, $h_{ii}=u_i^{\mathsf T}Hu_i=\|Hu_i\|^2\ge0$.
3. The vectors $Hu_i$ and $(I-H)u_i$ are orthogonal because $H(I-H)=0$. Thus $1=\|u_i\|^2=\|Hu_i\|^2+\|(I-H)u_i\|^2$, giving $h_{ii}\le1$.
4. Finally $\sum_i h_{ii}=\operatorname{tr}(H)=\operatorname{tr}((X^{\mathsf T}X)^{-1}X^{\mathsf T}X)=\operatorname{tr}(I_p)=p$.

**Self-assessment rubric**

- Establish symmetry and idempotence from the formula.
- Derive both diagonal bounds using orthogonal components.
- Compute the trace using the full-rank Gram inverse.

</details>
