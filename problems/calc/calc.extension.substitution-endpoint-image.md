# Transform the bounds under a monotone substitution

*Easy · [Calculus](index.md)*

Under u=x² with $1\le x\le3$, return \[lower u bound, upper u bound\].

```answer
{"answer":{"kind":"vector","expected":["1","9"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the new variable at each old endpoint.

</details>

<details>
<summary>Hint 2</summary>

On this positive interval the substitution is increasing.

</details>

<details>
<summary>Worked solution</summary>

A substitution carries interval endpoints through its own rule.

1. At x=1, u=1.
2. At x=3, u=9, and order is preserved.
3. The bounds vector is \[1,9\].

</details>
