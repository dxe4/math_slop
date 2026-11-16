# Count decaying modes with an explicit spectral hypothesis

*Easy · [Differential equations problems](index.md)*

A hyperbolic equilibrium has linearization with eigenvalues $-2,-1,3$. The stable-manifold theorem assigns one stable dimension per eigenvalue with negative real part, counted with algebraic multiplicity. Find the stable-manifold dimension.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested manifold or linearization coefficient only; no full dynamical argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Use signs of the real parts, not the absolute eigenvalue sizes.

</details>

<details>
<summary>Hint 2</summary>

Only two of the three listed modes decay forward.

</details>

<details>
<summary>Worked solution</summary>

The stable dimension is a count of decaying directions.

1. The eigenvalues -2 and -1 have negative real parts.
2. The eigenvalue 3 has positive real part and contributes to the unstable direction instead.
3. Thus the stable-manifold dimension is two.

</details>
