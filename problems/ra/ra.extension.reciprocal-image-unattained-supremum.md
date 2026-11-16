# Reverse the order under a reciprocal map

*Easy · [Real analysis](index.md)*

Let $S=\{1/x:2<x\le4\}$. Find sup S. State in the worked argument whether that value is attained.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested order quantity or extremization observation only; no general argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The reciprocal is decreasing on positive inputs.

</details>

<details>
<summary>Hint 2</summary>

Approach the missing lower endpoint of the input interval from inside.

</details>

<details>
<summary>Worked solution</summary>

A decreasing image reverses the endpoint order and preserves the missing endpoint issue.

1. For 2&lt;x&lt;=4, the reciprocal satisfies 1/4&lt;=1/x&lt;1/2.
2. Values with x decreasing to two approach 1/2, so no smaller number is an upper bound.
3. Thus sup S=1/2, and it is not attained because x=2 is excluded.

</details>
