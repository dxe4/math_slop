# Complete the missing link

*Medium · [Set theory](index.md)*

On $X=\{1,2,3\}$, let R={$(1,2),(2,3)$}. Candidate labels are $1$:$(1,3), 2$:$(3,1), 3$:$(2,1)$. Report the label of each pair that must be added because the supplied relation contains a two-step chain requiring it for transitivity.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A chain xRy and yRz requires xRz.

</details>

<details>
<summary>Hint 2</summary>

The supplied edges give the chain $1\to 2\to 3$. Reversing arrows is not the transitivity rule.

</details>

<details>
<summary>Worked solution</summary>

Transitivity connects the endpoints of a composable two-step chain.

1. Since $(1,2)$ and $(2,3)$ belong to R, transitivity requires $(1,3)$.
2. Neither reverse pair is required by the supplied chains. The label set is $\{1\}$.

</details>
