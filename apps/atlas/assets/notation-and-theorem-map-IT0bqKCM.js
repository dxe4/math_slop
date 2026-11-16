var e=`---
parent_id: book-ode-first-course
matter_id: notation-and-theorem-map
title: "Notation and Theorem Map"
level: undergraduate
license: CC BY-SA 4.0
---

# Notation and Theorem Map

The independent variable is normally time \\(t\\). A prime denotes its derivative unless a series chapter explicitly uses \\(x\\). In \\(y'=f(t,y)\\), the function \\(f\\) is the rate law, defined on a specified subset of the time–state plane. A solution is a differentiable function on an interval whose graph lies in that domain and satisfies the equation everywhere there.

The same symbol can have different local roles. The \\(p\\) in \\(y''+py'+qy=r\\) is a scalar coefficient; the \\(p\\) in a Sturm–Liouville expression is a positive coefficient inside \\(-(py')'\\). Every theorem identifies its own coefficient assumptions. Endpoint conditions are part of a boundary problem, not decorations added after solving the equation.

| Result | Location | Assumptions to carry with it |
| --- | --- | --- |
| Separation and integrating factors | Chapter 2 | Remain in the chosen coefficient domain; do not divide away equilibria |
| Exact equations | Chapter 3 | Differentiable coefficients on the stated rectangle; check equality of mixed derivatives |
| Picard local existence and uniqueness | Chapter 4 | Continuity and a local Lipschitz bound in the state variable on a neighbourhood of the data |
| Regular linear scalar IVPs | Chapter 6 | Continuous normalized coefficients on the interval; nonzero leading coefficient |
| Variation of parameters | Chapter 7 | A fundamental pair with nonvanishing Wronskian on the chosen interval |
| Frobenius construction | Chapter 9 | A regular singular point and the stated analytic coefficient assumptions; choose a real-power branch |
| Laplace derivative rules | Chapter 10 | The stated regularity and exponential-growth bounds |
| Numerical error bounds | Chapter 11 | Smoothness and Lipschitz bounds on a fixed time interval where the compared states are controlled |
| Sturm–Liouville orthogonality | Chapter 12 | Regular positive coefficient and weight, and the same separated homogeneous boundary conditions |
| Matrix exponential formula | Chapter 13 | A constant matrix and continuous forcing on the solution interval |
| Planar linear classification | Chapter 14 | A real constant two-by-two matrix; treat repeated and zero eigenvalues separately |
| Nonlinear energy attraction | Chapter 15 | The specific derivative inequality plus continuation in the vector field's domain |

Uppercase \\(Y_n\\) denotes a computed numerical state; \\(y(t_n)\\) denotes the exact state at the same time. A local defect assumes exact input at one step, while a global error includes previous errors. The notation \\(O(h^p)\\) refers to a specified limit with constants depending on stated bounds and final time. It does not promise the same error for every rate law or unlimited integration time.

For systems, \\(A\\) is a matrix, \\(I\\) the identity and \\(e^{tA}\\) the convergent power series constructed in Chapter 13. Products of different matrices need not commute. The invariants \\(T,D,\\Delta\\) in Chapter 14 mean trace, determinant and discriminant; use them with the eigenvalue and Jordan alternatives, rather than treating the sign of one invariant as a complete classification.
`;export{e as default};