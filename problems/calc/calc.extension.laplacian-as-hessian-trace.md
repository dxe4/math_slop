# Take the trace rather than determinant of a Hessian

*Easy · [Calculus](index.md)*

At p the Hessian of a C² scalar field is \[\[2,3\],\[3,4\]\]. Find $\Delta f(p)=f_{xx}(p)+f_{yy}(p)$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The Laplacian adds the diagonal entries.

</details>

<details>
<summary>Hint 2</summary>

The off-diagonal mixed partials do not enter this trace.

</details>

<details>
<summary>Worked solution</summary>

The Laplacian is the Hessian trace in orthonormal Cartesian coordinates.

1. The diagonal entries are 2 and 4.
2. Their sum is 6.
3. Therefore Δf(p)=6.

</details>
