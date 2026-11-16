# Preserve the sign in a Riccati reduction

*Easy · [Differential equations problems](index.md)*

A nonzero solution u of $u''+3u=0$ is restricted to an interval where u never vanishes. Set y=-u'/u. Find the constant c in y'=y^2+c.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested manifold or linearization coefficient only; no full dynamical argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the quotient with its leading minus sign.

</details>

<details>
<summary>Hint 2</summary>

Use the linear equation only after the quotient derivative is written.

</details>

<details>
<summary>Worked solution</summary>

A nonvanishing linear solution yields a Riccati solution on its zero-free interval.

1. Differentiation gives yprime=-udoubleprime/u+(uprime/u)^2.
2. The linear equation gives -udoubleprime/u=3, while (uprime/u)^2=y^2.
3. Hence yprime=y^2+3 and c=3.

</details>
