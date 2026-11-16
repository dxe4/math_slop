# Check the regularity premise of the multiplier theorem

*Easy · [Calculus](index.md)*

The equality constraint is g(x,y)=x²+y²=0. At its only feasible point, does the nonzero-gradient regularity hypothesis $\nabla g\ne0$ hold? Return {holds} or {fails}.

```answer
{"answer":{"kind":"set","expected":["fails"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The feasible point is the origin.

</details>

<details>
<summary>Hint 2</summary>

Evaluate ∇g=(2x,2y) there.

</details>

<details>
<summary>Worked solution</summary>

A constraint set can exist even where the regular multiplier theorem does not apply.

1. The equality forces x=y=0.
2. At that point ∇g=(0,0).
3. The specified regularity hypothesis fails, so return {fails}.

</details>
