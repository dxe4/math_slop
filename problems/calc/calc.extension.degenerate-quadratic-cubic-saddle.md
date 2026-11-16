# Classify a point whose Hessian determinant vanishes

*Medium · [Calculus](index.md)*

Classify the origin for $f(x,y)=x^2+y^3$. Return {local\_minimum}, {local\_maximum} or {saddle}, and use actual nearby values rather than claiming the degenerate Hessian settles it.

```answer
{"answer":{"kind":"set","expected":["saddle"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The gradient vanishes at zero but the Hessian test is degenerate.

</details>

<details>
<summary>Hint 2</summary>

Restrict to x=0 and examine positive and negative y.

</details>

<details>
<summary>Worked solution</summary>

A cubic direction can decide the behavior hidden from the quadratic test.

1. The gradient is (2x,3y²), zero at the origin, and the Hessian there is diag(2,0).
2. Along x=0 the values are y³, positive and negative arbitrarily close to zero.
3. Hence every neighborhood has values above and below f(0,0)=0. The origin is a saddle, encoded by {saddle}.

</details>
