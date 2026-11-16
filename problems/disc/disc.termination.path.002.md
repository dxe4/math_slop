# Reduce a counter by four

*Easy · [Discrete mathematics](index.md)*

Start $m=17$. While $m>0$, set $m=\max (0,m-4)$. Count transitions before the first zero.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Checks only this authored count-strict-descent-transitions task. Does not certify unrestricted proof validity, general construction ability or full mastery of termination measures."}}
```

<details>
<summary>Hint 1</summary>

A positive value below four still needs one move.

</details>

<details>
<summary>Hint 2</summary>

Follow the stated clamp rule.

</details>

<details>
<summary>Worked solution</summary>

A strictly decreasing nonnegative integer ranking measure proves that a run cannot continue forever. Preserved invariants address different questions.

1. The states are $17,13,9,5,1,0$.
2. There are five transitions.

</details>
