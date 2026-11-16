# Distinguish an existence guarantee from a maximal lifetime

*Easy · [Differential equations problems](index.md)*

A local ODE theorem applies on $|t|\le2$, \|y-y\_0\|&lt;=3, with \|f(t,y)\|&lt;=4 and a suitable Lipschitz condition. It guarantees a solution on \|t\|&lt;=min(2,3/4). What is the guaranteed positive endpoint?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact requested existence bound or sensitivity observation only; no uniqueness or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

The time bound is constrained by both the rectangle width and its height divided by speed.

</details>

<details>
<summary>Hint 2</summary>

This is a guaranteed interval, not a claim about the maximal solution.

</details>

<details>
<summary>Worked solution</summary>

A rectangle estimate uses the smaller of the geometric time and state constraints.

1. The direct time restriction is two.
2. The state-height restriction divided by the speed bound is 3/4.
3. The smaller is 3/4; the actual maximal interval can be larger.

</details>
