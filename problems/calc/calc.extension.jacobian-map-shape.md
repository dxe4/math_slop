# Read a Jacobian’s shape from input and output dimensions

*Easy · [Calculus](index.md)*

For a differentiable map F:R²→R³, return \[rows,columns\] of $DF$ when rows index output components.

```answer
{"answer":{"kind":"vector","expected":["3","2"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

One row corresponds to each output component.

</details>

<details>
<summary>Hint 2</summary>

One column corresponds to each input coordinate.

</details>

<details>
<summary>Worked solution</summary>

A Jacobian represents a linear map from input increments to output increments.

1. There are three output components, giving three rows.
2. There are two input coordinates, giving two columns.
3. The shape vector is \[3,2\].

</details>
