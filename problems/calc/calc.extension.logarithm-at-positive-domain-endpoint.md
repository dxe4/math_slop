# Read a logarithmic endpoint limit

*Easy · [Calculus](index.md)*

As x→0 through positive values, $\log x$ tends to which extended limit? Return {pos\_inf} or {neg\_inf}.

```answer
{"answer":{"kind":"set","expected":["neg_inf"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Write x=eʸ to interpret the logarithm as the exponent.

</details>

<details>
<summary>Hint 2</summary>

Positive inputs approach zero when that exponent decreases without bound.

</details>

<details>
<summary>Worked solution</summary>

A real logarithm has an unbounded negative endpoint at zero.

1. The logarithm is the inverse of the increasing exponential.
2. To make eʸ approach zero, y must tend to negative infinity.
3. Thus log x→−∞, encoded by {neg\_inf}.

</details>
