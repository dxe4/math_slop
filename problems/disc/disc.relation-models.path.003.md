# Find a missing reverse

*Medium · [Discrete mathematics](index.md)*

On $\{1,2,3\}$ let $R=\{(1,2),(2,1),(2,3)\}$. A supplied pair has its reverse missing. Enter that missing reverse pair in fields first and second. This pair witnesses the failure of symmetry.

```answer
{"answer":{"kind":"integer_pair","expected":{"first":3,"second":2},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Symmetry requires reversing every ordered pair already present.

</details>

<details>
<summary>Hint 2</summary>

The arrows between the first two vertices are already paired in both directions.

</details>

<details>
<summary>Worked solution</summary>

A missing reverse arrow is a concrete symmetry obstruction.

1. The pairs $(1,2)$ and $(2,1)$ are mutual reverses.
2. The supplied pair $(2,3)$ would require the reverse $(3,2)$.
3. That reverse is absent, so first is $3$ and second is $2$. Missing loops alone would not disprove symmetry.

</details>
