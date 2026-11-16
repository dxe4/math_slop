# Count skew-symmetric degrees of freedom

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Find the dimension of the space of real $4\times4$ matrices satisfying $A^T=-A$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

On the diagonal, the condition reads $a_{ii}=-a_{ii}$.

</details>

<details>
<summary>Hint 2</summary>

Choose entries above the diagonal freely and let the condition determine those below.

</details>

<details>
<summary>Worked solution</summary>

Separate characteristic-zero diagonal restrictions from off-diagonal pairing.

1. Every diagonal entry is zero over the real field.
2. There are $\binom42=6$ entries strictly above the diagonal.
3. Each determines its negative below the diagonal independently, giving dimension six.

</details>
