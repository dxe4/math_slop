# Conditional expectation respects almost-sure equality

*Medium · [Probability problems](index.md)*

Suppose integrable real variables $X,Y$ satisfy $X=Y$ almost surely. For a sub-sigma-algebra $\mathcal G$, prove $E[X\mid\mathcal G]=E[Y\mid\mathcal G]$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Integrals do not change when an integrable function changes only on a null set.

</details>

<details>
<summary>Hint 2</summary>

Compare the defining test-event integrals of the two conditional candidates, then apply almost-sure uniqueness.

</details>

<details>
<summary>Model proof</summary>

Null-set changes in the original variable preserve every defining integral.

1. For each $A\in\mathcal G$, the integrable variables $X\mathbf1_A$ and $Y\mathbf1_A$ agree almost surely, so their expectations agree.
2. Let $M=E[X\mid\mathcal G]$ and $N=E[Y\mid\mathcal G]$. They are integrable and $\mathcal G$-measurable; their defining identities imply $E[M\mathbf1_A]=E[X\mathbf1_A]=E[Y\mathbf1_A]=E[N\mathbf1_A]$.
3. Conditional-expectation uniqueness gives $M=N$ almost surely. No pointwise equality of selected versions on an exceptional null set is implied.

Their test-event integrals agree, so conditional-expectation uniqueness gives almost-sure equality of the conditional means.

**Self-assessment rubric**

- Use almost-sure equality and integrability to identify every test-event integral.
- Transfer that equality to the measurable integrable conditional candidates.
- Conclude almost-sure equality by uniqueness, without claiming pointwise agreement on exceptional sets.

</details>
