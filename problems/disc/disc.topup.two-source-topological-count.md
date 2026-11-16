# Count all orders after forcing a dependency tail

*Medium · [Discrete mathematics](index.md)*

A directed graph on $A,B,C,D$ has arrows A to C, B to C and C to D. How many vertex orders place every arrow source before its target?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

C must follow both sources, and D must follow C.

</details>

<details>
<summary>Hint 2</summary>

Only the relative order of the two initial sources remains free.

</details>

<details>
<summary>Worked solution</summary>

Forced positions reduce the topological-order count to one binary choice.

1. Both A and B must precede C.
2. D must follow C, so the first two positions are A,B in either order and the last two are C,D.
3. The valid orders are A,B,C,D and B,A,C,D, giving $2$.

</details>
