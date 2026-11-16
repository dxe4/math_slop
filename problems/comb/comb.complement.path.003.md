# Teams that meet a named pair

*Easy · [Combinatorics](index.md)*

Six distinct people are A,B,C,D,E,F. There are $15$ unordered two-person teams total, and $6$ such teams using only C,D,E,F. How many teams contain at least one of A or B?

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact finite structured answer for subtract-forbidden-team-family; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The desired team may include A, B, or both.

</details>

<details>
<summary>Hint 2</summary>

Its complement contains neither A nor B.

</details>

<details>
<summary>Worked solution</summary>

A complement can encode a joint membership condition.

1. The six teams drawn only from C,D,E,F are exactly the forbidden family.
2. Subtract them from all $15$ teams: $15-6=9$.

</details>
