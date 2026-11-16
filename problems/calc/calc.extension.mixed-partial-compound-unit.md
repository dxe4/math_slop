# Track the units of a mixed second derivative

*Easy · [Calculus](index.md)*

f is measured in kg, x in metres and t in seconds. What unit has $\partial_t\partial_xf$? Return {kg\_per\_m\_s}, {kg\_per\_m} or {kg\_per\_s}.

```answer
{"answer":{"kind":"set","expected":["kg_per_m_s"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each differentiation divides by its own input unit.

</details>

<details>
<summary>Hint 2</summary>

The two different input units both remain in the denominator.

</details>

<details>
<summary>Worked solution</summary>

A mixed derivative records two kinds of rate.

1. Differentiating with respect to x gives kg/m.
2. Differentiating that result with respect to t gives kg/(m·s).
3. The token is {kg\_per\_m\_s}.

</details>
