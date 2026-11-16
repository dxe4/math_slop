# Read a small-oscillation scale at a nonlinear equilibrium

*Medium · [Differential equations problems](index.md)*

For $x'=x(2-y)$, y'=y(x-3), linearize at the positive equilibrium (3,2). If the linearized eigenvalues are plus and minus i\*omega with omega&gt;0, find omega^2.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested phase-plane invariant or normalized observation only; no stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Differentiate both components at the equilibrium.

</details>

<details>
<summary>Hint 2</summary>

Use the characteristic polynomial of the resulting two-by-two matrix.

</details>

<details>
<summary>Worked solution</summary>

The nonlinear interior state determines the local oscillation frequency.

1. The Jacobian at (3,2) is \[\[0,-3\],\[2,0\]\].
2. Its characteristic polynomial is lambda^2+6.
3. Thus the eigenvalues are plus and minus i\*sqrt(6), giving omega^2=6. This local calculation alone makes no global nonlinear stability claim.

</details>
