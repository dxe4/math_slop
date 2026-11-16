# Keep strictness in an integer reciprocal bound

*Medium · [Real analysis](index.md)*

Find the least positive integer N satisfying $5/N<3/20$.

```answer
{"answer":{"kind":"integer","expected":"34","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Cross-multiply only positive quantities.

</details>

<details>
<summary>Hint 2</summary>

Round above the resulting strict threshold.

</details>

<details>
<summary>Worked solution</summary>

Strict reciprocal inequalities select the first integer above a real boundary.

1. Multiplication gives 100&lt;3N, so N&gt;100/3.
2. The least integer above that threshold is thirty-four.
3. At thirty-three the inequality fails, while at thirty-four it holds.

</details>
