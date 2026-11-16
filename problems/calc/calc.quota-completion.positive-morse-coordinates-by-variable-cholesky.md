# Construct exact sum-of-squares coordinates near a nondegenerate minimum

*Hard · [Calculus](index.md)*

Let f be C∞ near 0∈R², with ∇f(0)=0 and positive-definite Hessian. Prove there are smooth local coordinates (u,v), centered at zero, such that $f(x,y)=f(0)+u(x,y)^2+v(x,y)^2$ exactly. Construct the coordinates using an integral Hessian and a two-by-two square completion, checking local invertibility.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply one-dimensional integral Taylor expansion to t↦f(tx,ty).

</details>

<details>
<summary>Hint 2</summary>

Complete the resulting positive quadratic form using coefficient functions, then check the coordinate Jacobian at zero.

</details>

<details>
<summary>Model proof</summary>

An exact variable quadratic representation becomes an exact normal form once its coefficient square roots define an invertible coordinate map.

1. For z=(x,y), Taylor along its radial segment gives f(z)−f(0)=zᵀA(z)z, with A(z)=∫₀¹(1−t)H\_f(tz)dt. The linear term vanishes because ∇f(0)=0. The matrix is smooth and symmetric, with A(0)=H\_f(0)/2 positive definite.
2. Write A=\[\[a,b\],\[b,c\]\]. On a sufficiently small neighborhood, continuity gives a&gt;0 and c−b²/a&gt;0. Thus the smooth functions u=√a·x+(b/√a)y and v=√(c−b²/a)·y are well defined and satisfy u²+v²=ax²+2bxy+cy²=f−f(0).
3. At zero the Jacobian of (u,v) is \[\[√a₀,b₀/√a₀\],\[0,√(c₀−b₀²/a₀)\]\]. Derivatives of the coefficient functions multiply x or y and therefore contribute zero there. Its determinant is positive.
4. The smooth inverse function theorem makes (u,v) a local coordinate diffeomorphism centered at zero. The displayed sum-of-squares relation is an exact identity on that neighborhood, not just a second-order approximation or an assertion of global coordinates.

**Self-assessment rubric**

- Derives the variable quadratic representation and its smooth positive-definite value at zero.
- Constructs smooth coefficient square roots on a valid neighborhood and checks the exact identity.
- Includes the reason coefficient derivatives disappear at zero and proves nonsingularity.
- Applies the inverse function theorem with the correct local scope.

</details>
