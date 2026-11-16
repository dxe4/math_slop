# A complete convex KKT certificate

*Difficulty 3 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 13 of 16*

Minimize `(x-2)^2+(y-1)^2` subject to `x+y<=1`. Find the optimizer and multiplier using KKT conditions, and state why the certificate is global rather than merely local.

<details>
<summary>Hint 1</summary>

Use L=f+lambda(x+y-1) with lambda nonnegative

</details>

<details>
<summary>Hint 2</summary>

The unconstrained minimizer is infeasible, so expect an active constraint

</details>

<details>
<summary>Worked solution</summary>

Stationarity gives `2(x-2)+lambda=0` and `2(y-1)+lambda=0`, so `x=2-lambda/2` and `y=1-lambda/2`. The unconstrained point `(2,1)` violates the inequality, so at the constrained optimum the boundary is active: `x+y=1`. Substitution gives `3-lambda=1`, hence `lambda=2`, x=1, and y=0. Primal feasibility holds with equality, dual feasibility holds because lambda is positive, stationarity was used, and complementarity `lambda(x+y-1)=0` holds. The objective is strictly convex and the feasible half-space is convex; the inequality is affine and a strict feasible point exists. Therefore the KKT point is the unique global minimizer, not merely a local stationary point.

**Answer.** The unique global solution is (1,0) with multiplier 2; convexity and affine feasibility make KKT sufficient.

</details>

*Tags: convex-optimization, nonlinear-optimization, kkt, duality*
