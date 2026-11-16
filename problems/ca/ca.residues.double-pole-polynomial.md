# Read a double-pole residue locally

*Medium · [Complex analysis problems](index.md)*

Find the residue of $z^2/(z-1)^2$ at $z=1$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the numerator in powers of the displacement from the pole.

</details>

<details>
<summary>Hint 2</summary>

A residue is the coefficient of the inverse first power, not the highest principal power.

</details>

<details>
<summary>Worked solution</summary>

A local translation exposes the principal coefficients directly.

1. Put $w=z-1$, so $z=1+w$.
2. Then $z^2/(z-1)^2=(1+w)^2/w^2=w^{-2}+2w^{-1}+1$.
3. The residue is the coefficient $2$ of $w^{-1}$.

</details>
