# Track both boundary components for a regular annular field

*Medium · [Calculus](index.md)*

Let A={1≤x²+y²≤4}, and F=(−y/2,x/2). Find $\pi^{-1}\oint_{\partial A}F\cdot dr$ with the positive boundary orientation of the annulus.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Positive orientation makes the outer circle counterclockwise and inner circle clockwise.

</details>

<details>
<summary>Hint 2</summary>

The scalar curl is one throughout the annulus.

</details>

<details>
<summary>Worked solution</summary>

Green’s theorem includes every boundary component with its induced orientation.

1. The curl is ∂\_x(x/2)−∂\_y(−y/2)=1.
2. The annular area is π(4−1)=3π, so Green’s theorem gives full circulation 3π.
3. Equivalently the outer and inner contributions are 4π and −π. The normalized total is 3.

</details>
