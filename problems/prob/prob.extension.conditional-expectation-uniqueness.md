# Almost-sure uniqueness from integral identities

*Medium · [Probability problems](index.md)*

For a sub-sigma-algebra $\mathcal G$, let $Y,Z$ be integrable real $\mathcal G$-measurable variables such that $E[Y\mathbf1_A]=E[Z\mathbf1_A]$ for every $A\in\mathcal G$. Prove $Y=Z$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The set on which one candidate exceeds the other is an allowed test event.

</details>

<details>
<summary>Hint 2</summary>

On that event the difference is nonnegative. Explain why zero integral of that difference forces the strict-inequality set to be null, then exchange the candidates.

</details>

<details>
<summary>Model proof</summary>

Test on the measurable sets where the candidates differ in sign.

1. Set $A=\{Y>Z\}\in\mathcal G$. The assumed identity gives $E[(Y-Z)\mathbf1_A]=0$, with a nonnegative integrable integrand.
2. For every positive integer $k$, $0\ge k^{-1}P(Y-Z\ge k^{-1})$, since that level set lies inside $A$. Each level set is null, and their countable union is $\{Y>Z\}$, so $P(Y>Z)=0$.
3. Interchanging $Y,Z$ yields $P(Z>Y)=0$. Outside the union of these two null events neither strict inequality holds, hence $Y=Z$, proving almost-sure uniqueness rather than pointwise uniqueness.

Testing their positive and negative differences forces both strict-comparison sets to be null.

**Self-assessment rubric**

- Choose a comparison set belonging to the conditioning sigma-algebra and obtain a nonnegative zero integral.
- Justify why strict positivity has zero probability, for example using countable positive level sets.
- Repeat in the other direction and conclude equality outside a null set.

</details>
