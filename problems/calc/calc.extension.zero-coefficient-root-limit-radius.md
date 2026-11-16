# Read an infinite radius from a coefficient root limit

*Easy · [Calculus](index.md)*

For a power series Σa\_n xⁿ suppose $\limsup |a_n|^{1/n}=0$. Use the radius formula 1/R=limsup \|a\_n\|^{1/n}. Return R as the singleton token set {zero}, {finite\_nonzero} or {infinity}.

```answer
{"answer":{"kind":"set","expected":["infinity"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A zero reciprocal radius means convergence at every finite radius.

</details>

<details>
<summary>Hint 2</summary>

Use the extended-radius convention R=∞ when 1/R=0.

</details>

<details>
<summary>Worked solution</summary>

Coefficient roots can force an unbounded disk of convergence.

1. The supplied formula gives 1/R=0.
2. Its radius convention assigns R=∞ in this case.
3. Return {infinity}.

</details>
