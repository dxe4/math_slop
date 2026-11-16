# Identify the unit of an instantaneous mass rate

*Easy · [Calculus](index.md)*

Mass m is measured in kilograms and time t in seconds. What unit does $dm/dt$ have? Return a set containing one literal token: kg, s, kg\_per\_s or s\_per\_kg.

```answer
{"answer":{"kind":"set","expected":["kg_per_s"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A rate divides the output unit by the input unit.

</details>

<details>
<summary>Hint 2</summary>

Keep their order as mass over time.

</details>

<details>
<summary>Worked solution</summary>

Derivative units follow the same quotient as an average rate.

1. The mass change has unit kg.
2. The elapsed time has unit s.
3. Their quotient has unit kg/s, encoded as {kg\_per\_s}.

</details>
