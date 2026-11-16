# Solve a tangent equation on one full turn

*Medium · [Foundations bridge](index.md)*

Find every θ in $[0,2\pi)$ satisfying tanθ=1. Return the set of coefficients c in θ=cπ, not the angles in radians themselves.

```answer
{"answer":{"kind":"set","expected":["1/4","5/4"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The first-quadrant solution is π/4.

</details>

<details>
<summary>Hint 2</summary>

Tangent has period π, and the interval includes zero but excludes 2π.

</details>

<details>
<summary>Worked solution</summary>

Period and endpoint conventions determine the full finite solution set.

1. The general solutions are θ=π/4+kπ for integers k.
2. The allowed representatives are π/4 and 5π/4.
3. Thus the coefficient set is {1/4,5/4}; points where tangent is undefined are not solutions.

</details>
