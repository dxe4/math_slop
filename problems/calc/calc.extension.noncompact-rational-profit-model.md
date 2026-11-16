# Find a global optimum in a rational economic model

*Medium · [Calculus](index.md)*

For a continuous quantity q≥0, price is p(q)=18/(q+1) currency units per item and total cost is 2q. Maximize profit qp(q)−2q. Return $[q,\text{profit}]$, verifying the noncompact domain does not hide a better boundary or tail value.

```answer
{"answer":{"kind":"vector","expected":["2","8"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the full revenue quotient before subtracting marginal cost.

</details>

<details>
<summary>Hint 2</summary>

The derivative changes sign at the admissible solution of (q+1)²=9.

</details>

<details>
<summary>Worked solution</summary>

A stationary candidate becomes global only after its domain and surrounding sign behavior are checked.

1. Profit is P(q)=18q/(q+1)−2q, with P′(q)=18/(q+1)²−2. On q≥0 it vanishes only at q=2.
2. The derivative is positive for 0≤q&lt;2 and negative for q&gt;2, so the point is the unique global maximum. Also P(0)=0 and P(q)→−∞ as q→∞.
3. At q=2, P=12−4=8. The requested vector is \[2,8\].

</details>
