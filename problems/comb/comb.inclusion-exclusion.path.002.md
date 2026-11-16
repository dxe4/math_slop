# Neither of two groups

*Medium · [Combinatorics](index.md)*

A universe has $25$ people. Set A has $8$, set B has $7$, and their intersection has $3$. How many people belong to neither A nor B?

```answer
{"answer":{"kind":"integer","expected":13,"checker_scope":"Exact finite structured answer for count-neither-after-union-correction; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

First calculate the union, including each person once.

</details>

<details>
<summary>Hint 2</summary>

Then take its complement inside the $25$-person universe.

</details>

<details>
<summary>Worked solution</summary>

Use the corrected union before subtracting a complement.

1. The union size is $8+7-3=12$.
2. The number in neither is $25-12=13$.

</details>
