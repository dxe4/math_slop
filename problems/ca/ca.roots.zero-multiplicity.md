# Read a zero multiplicity

*Easy · [Complex analysis problems](index.md)*

Find the multiplicity of the zero $z=1$ of $f(z)=(z-1)^3(z+2)^2$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Separate the factor vanishing at the specified point from the nonvanishing factor.

</details>

<details>
<summary>Hint 2</summary>

Only the vanishing factor contributes to its zero order.

</details>

<details>
<summary>Worked solution</summary>

A nonzero analytic factor does not change the zero multiplicity.

1. The factor $(z-1)^3$ vanishes to order three at $1$.
2. The other factor has value $(1+2)^2=9\ne0$ there.
3. The multiplicity is therefore $3$.

</details>
