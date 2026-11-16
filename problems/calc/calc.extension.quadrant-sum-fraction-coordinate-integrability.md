# Separate total size and proportion in a quadrant integral

*Hard · [Calculus](index.md)*

For real k classify and evaluate $J_k=\int_0^\infty\int_0^\infty e^{-(x+y)}(x/(x+y))^k\,dy\,dx$. The integrand is defined on the open positive quadrant, and boundary values do not determine convergence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use total size u=x+y and proportion v=x/(x+y).

</details>

<details>
<summary>Hint 2</summary>

The inverse is x=uv,y=u(1−v), with absolute Jacobian u; the v endpoint determines the parameter threshold.

</details>

<details>
<summary>Model proof</summary>

An adapted bijection separates a noncompact radial size from a bounded but potentially singular proportion.

1. The map from u&gt;0,0&lt;v&lt;1 to x,y&gt;0 is bijective, with the stated inverse and determinant −u. Thus nonnegative change of variables gives J\_k=∫₀∞∫₀¹e^{−u}vᵏu dvdu, allowing extended values.
2. The proportion integral ∫₀¹vᵏdv is finite exactly when k&gt;−1, with value 1/(k+1). If k≤−1 it is infinite for every fixed u&gt;0, so Tonelli gives J\_k=+∞.
3. For k&gt;−1 the size integral is ∫₀∞u e^{−u}du=1: parts gives the boundary −u e^{−u} vanishing at zero and infinity, followed by ∫₀∞e^{−u}du=1.
4. Hence J\_k=1/(k+1) precisely in the convergent range k&gt;−1. The coordinate singularity at u=0 is outside the open chart and its boundary is handled by these improper limits, not by assigning a value at the origin.

**Self-assessment rubric**

- Verifies the positive-quadrant coordinate inverse and absolute Jacobian.
- Finds and proves exactly the threshold k&gt;−1.
- Evaluates the noncompact size factor with its endpoint term justified.
- Uses nonnegativity for divergent cases and states the exact convergent formula without relying on boundary assignments.

</details>
