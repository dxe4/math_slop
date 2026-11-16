# A reusable code alphabet

*Easy · [Combinatorics](index.md)*

A length-four password uses P, Q, R and allows any letter to appear repeatedly. The four positions are recorded in order. Enter order\_matters and repetition\_allowed, using $1$ for yes and $0$ for no.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"order_matters":1,"repetition_allowed":1},"checker_scope":"Exact finite structured answer for identify-order-and-repetition; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Ask whether swapping positions can change the recorded password.

</details>

<details>
<summary>Hint 2</summary>

Read the reuse rule separately.

</details>

<details>
<summary>Worked solution</summary>

Identify each selection policy independently.

1. Positions are recorded, so order\_matters=$1$.
2. Letters may repeat, so repetition\_allowed=$1$.

</details>
