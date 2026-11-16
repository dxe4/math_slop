# Compute inverse curvature by differentiating the defining relation

*Medium · [Calculus](index.md)*

Near y=1, define $x=y+\log y$ and let y be the local inverse function of x. Find y″ at x=1.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

First obtain (1+1/y)y′=1.

</details>

<details>
<summary>Hint 2</summary>

Differentiate that identity with respect to x, keeping y as a changing function.

</details>

<details>
<summary>Worked solution</summary>

The second inverse derivative involves the derivative of its nonconstant reciprocal factor.

1. At y=1 the defining x equals 1 and y′=1/(1+1/y)=1/2.
2. Differentiating (1+1/y)y′=1 gives (1+1/y)y″−(y′)²/y²=0.
3. At the point, 2y″−1/4=0, so y″=1/8.

</details>
