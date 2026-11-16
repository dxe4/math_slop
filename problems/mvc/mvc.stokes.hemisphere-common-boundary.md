# Replace a surface using its oriented boundary

*Hard · [Multivariable calculus problems](index.md)*

Let $F=(-y,x,0)$ and let $S$ be the upper unit hemisphere $x^2+y^2+z^2=1$, $z\geq0$, oriented by the outward normal. Compute $\frac1\pi\iint_S(\nabla\times F)\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The curl is constant, and Stokes theorem allows a replacement surface with the same induced boundary.

</details>

<details>
<summary>Hint 2</summary>

The outward upper hemisphere induces the same equatorial orientation as an upward disk.

</details>

<details>
<summary>Worked solution</summary>

Stokes theorem compares two smooth surfaces through their common oriented boundary.

1. The polynomial field is smooth everywhere and has curl $(0,0,2)$.
2. The outward upper hemisphere induces counterclockwise equator orientation viewed from above, matching the upward unit disk.
3. By Stokes theorem the curl flux equals that through the upward disk, namely $2\pi$. The requested ratio is $2$.

</details>
