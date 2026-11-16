# Reject a cancelled equation’s forbidden candidate

*Medium · [Foundations bridge](index.md)*

Solve $(x^2-1)/(x-1)=2$ over the real numbers, retaining the original denominator restriction. Return the solution set.

```answer
{"answer":{"kind":"set","expected":[],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

State the excluded input before factoring.

</details>

<details>
<summary>Hint 2</summary>

Solve the simplified equation and then compare its candidate with that restriction.

</details>

<details>
<summary>Worked solution</summary>

A simplified rule cannot restore an input excluded by the original expression.

1. The original expression requires x≠1.
2. For such inputs, (x²−1)/(x−1)=x+1, so the equation gives x=1.
3. That only candidate is excluded. The original equation therefore has the empty solution set.

</details>
