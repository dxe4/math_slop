# Propagate a Wronskian without solving two solutions

*Easy · [Differential equations problems](index.md)*

Two solutions of $y''+3y'+2y=0$ have Wronskian W(0)=2. Abel's identity gives W'=-3W. Find W(log 2).

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Use the first-order equation for W itself.

</details>

<details>
<summary>Hint 2</summary>

Keep the initial scale two.

</details>

<details>
<summary>Worked solution</summary>

Abel's identity determines independence data directly.

1. The Wronskian solves W(t)=2\*exp(-3t).
2. At t=log2, exp(-3t)=1/8.
3. Hence W=1/4.

</details>
