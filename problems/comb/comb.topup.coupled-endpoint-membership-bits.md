# Count subsets under a linked membership condition

*Medium · [Combinatorics](index.md)*

A ground set has $6$ ordered elements. How many subsets have the first and last elements either both included or both excluded? The other four elements are unrestricted.

```answer
{"answer":{"kind":"integer","expected":"32","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The two linked membership bits have only two allowed patterns.

</details>

<details>
<summary>Hint 2</summary>

Every remaining bit can be chosen independently.

</details>

<details>
<summary>Worked solution</summary>

A logical linkage reduces two binary choices to one.

1. The endpoint bit patterns are 00 and 11, giving two choices.
2. The four middle bits have sixteen independent assignments.
3. Thus there are $2\cdot16=32$ permitted subsets.

</details>
