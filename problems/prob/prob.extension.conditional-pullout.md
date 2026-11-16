# Pull out bounded observed information

*Medium · [Probability problems](index.md)*

Let $X$ be integrable and $Y$ bounded and $\mathcal G$-measurable. Using the defining conditional-expectation integral identity and simple-function approximation, prove $E[YX\mid\mathcal G]=Y E[X\mid\mathcal G]$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

First establish the integral identity for a simple multiplier whose level sets belong to $\mathcal G$.

</details>

<details>
<summary>Hint 2</summary>

Approximate the bounded multiplier by uniformly bounded simple functions and use dominated convergence for both products. Verify measurability and integrability of the candidate.

</details>

<details>
<summary>Model proof</summary>

Test a bounded observed multiplier first on simple functions, then pass to the limit.

1. Set $M=E[X\mid\mathcal G]$. Both $YX$ and $YM$ are integrable because $Y$ is bounded, and $YM$ is $\mathcal G$-measurable. For simple $Y=\sum_jc_j\mathbf1_{A_j}$ and any $B\in\mathcal G$, the defining identity on $A_j\cap B$ gives $E[YX\mathbf1_B]=\sum_jc_jE[X\mathbf1_{A_j\cap B}]=E[YM\mathbf1_B]$.
2. For general bounded real $Y$, choose $\mathcal G$-simple $Y_n\to Y$ pointwise with a common finite bound $K$. Dominated convergence applies to $Y_nX\mathbf1_B$ and $Y_nM\mathbf1_B$, dominated by $K|X|$ and $K|M|$ respectively.
3. The resulting identity $E[YX\mathbf1_B]=E[YM\mathbf1_B]$ holds for every $B\in\mathcal G$. Thus $YM$ satisfies the defining properties of $E[YX\mid\mathcal G]$, and uniqueness gives the claimed almost-sure equality.

Simple observed multipliers satisfy the integral identity; bounded approximation extends it, and uniqueness identifies the conditional product.

**Self-assessment rubric**

- Check that the proposed product candidate is measurable and integrable.
- Prove the test-event identity for a simple observed multiplier using intersected information events.
- Use uniformly bounded simple approximants and legitimate dominators, then invoke uniqueness.

</details>
