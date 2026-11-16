# Reduce a counter by three

*Easy · [Discrete mathematics](index.md)*

Start $m=14$. While $m>0$, set $m=\max (0,m-3)$. Count transitions before the first zero.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Checks only this authored count-strict-descent-transitions task. Does not certify unrestricted proof validity, general construction ability or full mastery of termination measures."}}
```

<details>
<summary>Hint 1</summary>

List states until zero.

</details>

<details>
<summary>Hint 2</summary>

Count changes, not the initial state.

</details>

<details>
<summary>Worked solution</summary>

A strictly decreasing nonnegative integer ranking measure proves that a run cannot continue forever. Preserved invariants address different questions.

1. The states are $14,11,8,5,2,0$.
2. They give five transitions, with the last clamped to zero.

</details>
