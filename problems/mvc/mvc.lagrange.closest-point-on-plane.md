# Locate a constrained distance minimizer

*Medium · [Multivariable calculus problems](index.md)*

Find the point of the plane $x+y+z=3$ closest to the origin in Euclidean distance. Enter $(x,y,z)$.

```answer
{"answer":{"kind":"vector","expected":["1","1","1"],"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Minimizing distance is equivalent to minimizing its square.

</details>

<details>
<summary>Hint 2</summary>

Equality in the three-coordinate Cauchy-Schwarz inequality requires equal coordinates.

</details>

<details>
<summary>Worked solution</summary>

A strict quadratic norm has one minimizer on the affine plane.

1. On the plane, $9=(x+y+z)^2\leq3(x^2+y^2+z^2)$, so squared distance is at least $3$.
2. Equality requires $x=y=z$, and the plane equation then gives each coordinate equal to $1$.
3. The point $(1,1,1)$ has squared distance $3$ and is the unique closest point.

</details>
