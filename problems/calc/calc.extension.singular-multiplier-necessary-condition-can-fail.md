# See why a singular constraint can evade the multiplier equation

*Medium · [Calculus](index.md)*

Minimize f(x,y)=x subject to g(x,y)=x²+y²=0. At the minimizer, does a real λ exist with $\nabla f=\lambda\nabla g$? Return {yes} or {no}, and keep the actual feasible set in view.

```answer
{"answer":{"kind":"set","expected":["no"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The constraint contains exactly one point.

</details>

<details>
<summary>Hint 2</summary>

Compare the two gradients there before invoking the regular multiplier theorem.

</details>

<details>
<summary>Worked solution</summary>

An isolated feasible minimizer need not satisfy a multiplier equation with a zero constraint gradient.

1. The only feasible point is (0,0), so it is automatically a global minimizer with value 0.
2. There ∇f=(1,0), while ∇g=(0,0). No scalar multiple of the latter equals the former.
3. Return {no}. The regular theorem is not contradicted because its nonzero constraint-gradient hypothesis fails.

</details>
