# Maximize a cylinder inside a cone

*Hard · [Geometry and trigonometry problems](index.md)*

A right circular cone has radius $R>0$ and height $H>0$. A right circular cylinder shares its axis, has one base in the cone base plane, and is wholly contained in the cone. Find the maximum possible ratio of cylinder volume to cone volume as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":9},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

For cylinder height $h=xH$, similarity bounds its radius by $R(1-x)$, with $0\le x\le1$.

</details>

<details>
<summary>Hint 2</summary>

The ratio becomes $3x(1-x)^2$. Seek a sharp cubic bound and an equality point.

</details>

<details>
<summary>Worked solution</summary>

Reduce containment and volume to one normalized variable.

1. At height $h$, the cone section radius is $R(1-h/H)$. A contained cylinder of that height has greatest volume when its radius equals that section radius.
2. Writing $x=h/H$, its volume is $\pi R^2H\,x(1-x)^2$, while the cone volume is $\pi R^2H/3$. Thus the ratio is at most $3x(1-x)^2$.
3. For $0\le x\le1$, the identity $4/27-x(1-x)^2=(x-1/3)^2(4/3-x)\ge0$ gives a sharp bound.
4. It follows that the ratio is at most $4/9$. It is attained by height $H/3$ and radius $2R/3$, whose cylinder lies within every cone section between its two bases.
5. All scale factors canceled with positive $R,H$, so the result holds for every nondegenerate right circular cone.

</details>
