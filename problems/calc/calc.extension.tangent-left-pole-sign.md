# Determine the sign at a trigonometric pole

*Easy · [Calculus](index.md)*

As $x\to\pi/2$ from below, what is the extended limit of tan x? Return {pos\_inf} or {neg\_inf}; angles are in radians.

```answer
{"answer":{"kind":"set","expected":["pos_inf"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use tan x=sin x/cos x.

</details>

<details>
<summary>Hint 2</summary>

Near this side, the numerator tends to one and the denominator to zero positively.

</details>

<details>
<summary>Worked solution</summary>

The side of approach fixes the sign of an infinite limit.

1. The sine tends to 1.
2. The cosine tends to 0 through positive values.
3. Their quotient tends to +∞, giving {pos\_inf}.

</details>
