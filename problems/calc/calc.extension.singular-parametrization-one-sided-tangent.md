# Recover a tangent when both coordinate velocities vanish

*Medium · [Calculus](index.md)*

For $r(t)=(t^3,t^2)$, consider t→0⁺. Return the unit tangent direction obtained by normalizing the secant r(t)−r(0). A zero velocity at t=0 alone does not settle the tangent.

```answer
{"answer":{"kind":"vector","expected":["0","1"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Factor the common positive t² from the secant vector.

</details>

<details>
<summary>Hint 2</summary>

Normalize the remaining vector (t,1) and take its limit.

</details>

<details>
<summary>Worked solution</summary>

A singular parametrization can still have a well-defined one-sided geometric tangent.

1. For t&gt;0, r(t)=t²(t,1).
2. Its normalized secant is (t,1)/√(1+t²).
3. As t→0⁺ this tends to \[0,1\], the upward vertical unit direction.

</details>
