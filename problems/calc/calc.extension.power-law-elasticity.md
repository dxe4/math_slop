# Read a dimensionless power-law elasticity

*Easy · [Calculus](index.md)*

For f(x)=x³ on x&gt;0, compute its elasticity $E=xf'(x)/f(x)$. It is constant; return that constant.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the power.

</details>

<details>
<summary>Hint 2</summary>

Cancel the nonzero powers only on the stated positive domain.

</details>

<details>
<summary>Worked solution</summary>

Elasticity measures a relative output change per relative input change.

1. The derivative is f′(x)=3x².
2. Thus E=x(3x²)/x³=3.
3. The elasticity is the constant 3, with no units.

</details>
