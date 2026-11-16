# Handle a zero row separately in a pair filter

*Hard · [Set theory](index.md)*

On $A=\{-1,0,1\}$ define R by (x,y) in R exactly when xy&lt;=0. Find the number of pairs in R.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Partition the ordered pairs by the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

The zero first coordinate qualifies with every second coordinate.

</details>

<details>
<summary>Worked solution</summary>

A zero coordinate changes the admissible choices and must not be treated as positive or negative.

1. For x=-1, the permitted y-values are zero and one, giving two pairs.
2. For x=0 all three y-values qualify. For x=1 the permitted y-values are minus one and zero, giving two pairs.
3. The total is $2+3+2=7$.

</details>
