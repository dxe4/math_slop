# Allow or forbid using a symbol twice

*Easy · [Combinatorics](index.md)*

A two-position ordered code uses X, Y, Z. Count the codes when a symbol may be used twice, and when the two positions must use different symbols. Enter with\_repetition and without\_repetition.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"with_repetition":9,"without_repetition":6},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

A fixed first symbol has either three or two possible followers.

</details>

<details>
<summary>Hint 2</summary>

The rule affects the second position; there are three first-position choices in both cases.

</details>

<details>
<summary>Worked solution</summary>

A repetition rule changes which later choices remain available.

1. With repetition there are $3 \times  3 = 9$ codes.
2. Without repetition there are $3 \times  2 = 6$ codes, because the first symbol is removed from the second-position choices.

</details>
