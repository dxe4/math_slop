# Apply l’Hôpital once to a logarithmic ratio

*Easy · [Calculus](index.md)*

Use l’Hôpital’s rule for the ∞/∞ form to find $\lim_{x\to\infty}\log(x)/x$. The domain is x&gt;0.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate numerator and denominator separately.

</details>

<details>
<summary>Hint 2</summary>

The resulting quotient is 1/x.

</details>

<details>
<summary>Worked solution</summary>

The derivative comparison identifies the slower logarithmic growth.

1. Both log x and x tend to positive infinity.
2. The derivative ratio is (1/x)/1=1/x.
3. It tends to zero, so the original limit is 0 by the stated rule.

</details>
