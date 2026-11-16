# Identify an accumulated unit

*Easy · [Calculus](index.md)*

A rate has unit kg/s and is integrated over time in seconds. What unit does $\int r(t)\,dt$ have? Return {kg}, {s} or {kg\_per\_s}.

```answer
{"answer":{"kind":"set","expected":["kg"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Multiply the rate unit by the integration-variable unit.

</details>

<details>
<summary>Hint 2</summary>

Cancel the matching time units.

</details>

<details>
<summary>Worked solution</summary>

An accumulation restores the output quantity’s unit.

1. The integrand has unit kg/s.
2. The time differential contributes s.
3. Their product is kg, so return {kg}.

</details>
