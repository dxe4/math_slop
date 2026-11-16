# Derive a parabola from equal distances

*Medium · [Geometry and trigonometry problems](index.md)*

A point $(x,y)$ is equally distant from focus $(0,2)$ and directrix $y=-2$. Derive the polynomial $f(x)$ such that the locus is $y=f(x)$. Enter the polynomial in $x$, and enter $\{\}$ for its excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x^2/8","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Square the focus distance and the absolute vertical distance to the directrix.

</details>

<details>
<summary>Hint 2</summary>

The $y^2$ and constant terms cancel.

</details>

<details>
<summary>Worked solution</summary>

Expand the exact distance equality.

1. The distance equality is $\sqrt{x^2+(y-2)^2}=|y+2|$.
2. Both sides are nonnegative, so squaring is equivalent: $x^2+(y-2)^2=(y+2)^2$.
3. Expansion gives $x^2=8y$, hence $y=x^2/8$. Every real $x$ gives a point satisfying the original squared and nonnegative distance equations.

</details>
