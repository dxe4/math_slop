# Use a nonlinear product-ratio coordinate branch

*Medium · [Calculus](index.md)*

T maps \[1,2\]² by T(u,v)=(uv,u/v), and D is its image. Evaluate $\iint_D1/x\,dA$, checking the branch is one-to-one.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Positive x,y recover u=√(xy),v=√(x/y).

</details>

<details>
<summary>Hint 2</summary>

The signed determinant is −2u/v, so use its positive magnitude.

</details>

<details>
<summary>Worked solution</summary>

A nonlinear map can be globally injective on a chosen positive branch even with reversed orientation.

1. The displayed positive inverse formulas prove injectivity on the source rectangle. The determinant is (v)(−u/v²)−u/v=−2u/v.
2. The pullback integrand is 1/(uv), multiplied by area factor 2u/v, giving 2/v².
3. Its integral over \[1,2\]² is (2−1)∫₁²2v⁻²dv=1.

</details>
