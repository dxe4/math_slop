# Exclude an exterior singularity

*Easy · [Complex analysis problems](index.md)*

For the counterclockwise unit circle, find $\frac{1}{2\pi i}\oint_{|z|=1}dz/(z-3)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Locate the only pole before applying a contour theorem.

</details>

<details>
<summary>Hint 2</summary>

The integrand is analytic throughout the closed disk and a neighborhood of it.

</details>

<details>
<summary>Worked solution</summary>

An exterior pole supplies no enclosed residue.

1. The only singularity is at $z=3$, outside the unit disk.
2. Thus the integrand is analytic on and inside the circle, so Cauchy theorem gives integral zero.
3. The normalized value is $0$.

</details>
