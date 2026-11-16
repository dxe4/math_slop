# Keep the factor one-half in a quadratic differential

*Easy · [Calculus](index.md)*

At a point, H₁₁=2. For increment h=(ε,0), what is the coefficient of ε² in the second-order Taylor term $\tfrac12h^THh$?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Only the first diagonal Hessian entry contributes.

</details>

<details>
<summary>Hint 2</summary>

Multiply it by the Taylor factor one-half.

</details>

<details>
<summary>Worked solution</summary>

The Hessian entry is twice the corresponding pure quadratic Taylor coefficient.

1. The quadratic form on this increment is 2ε².
2. Multiplying by 1/2 gives ε².
3. Thus the requested coefficient is 1.

</details>
