# Minimize a linear functional on an ellipse

*Medium · [Geometry and trigonometry problems](index.md)*

On $x^2/9+y^2/16=1$, the minimum of $4x+3y$ is $q\sqrt2$. Use Cauchy-Schwarz after scaling to a unit circle, and find $q$.

```answer
{"answer":{"kind":"integer","expected":"-12","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Put $u=x/3$ and $v=y/4$, so $u^2+v^2=1$.

</details>

<details>
<summary>Hint 2</summary>

The functional becomes $12(u+v)$, whose smallest value is attained in direction $(-1,-1)$.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied inequality in normalized coordinates.

1. The constraint becomes $u^2+v^2=1$ and the objective is $12(u+v)$.
2. Cauchy-Schwarz gives $|u+v|\le\sqrt2$. The negative bound is attained at $u=v=-1/\sqrt2$.
3. The minimum is $-12\sqrt2$, giving $q=-12$.

</details>
