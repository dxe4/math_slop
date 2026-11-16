# Use parametric curvature at a vertical tangent

*Medium · [Calculus](index.md)*

For r(t)=(2cos t,sin t), find curvature at t=0 using $\kappa=|x′y″-y′x″|/((x′)^2+(y′)^2)^{3/2}$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compute first and second coordinate derivatives at the parameter point.

</details>

<details>
<summary>Hint 2</summary>

The curve is regular even though x′ is zero there.

</details>

<details>
<summary>Worked solution</summary>

The parametric formula handles a vertical tangent without solving y as a function of x.

1. At t=0, x′=0,y′=1,x″=−2,y″=0.
2. The numerator magnitude is \|0−1(−2)\|=2 and the denominator is (0+1)^{3/2}=1.
3. The curvature is 2 per coordinate length unit.

</details>
