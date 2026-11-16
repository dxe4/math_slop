# Characterize the ellipse orthoptic circle

*Hard · [Geometry and trigonometry problems](index.md)*

For ellipse $x^2/a^2+y^2/b^2=1$, $a>b>0$, prove that the intersections of two perpendicular tangents form exactly the circle $h^2+k^2=a^2+b^2$. Include intersections involving a vertical tangent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

A nonvertical line $y=mx+c$ is tangent exactly when $c^2=a^2m^2+b^2$.

</details>

<details>
<summary>Hint 2</summary>

For lines through $(h,k)$, substitute $c=k-mh$ and examine the product of the two tangent slopes.

</details>

<details>
<summary>Model proof</summary>

Derive the tangent-slope quadratic and handle its missing vertical case.

1. Substitution of $y=mx+c$ into the ellipse equation yields a quadratic with discriminant zero exactly when $c^2=a^2m^2+b^2$. Through $(h,k)$ this condition becomes $(h^2-a^2)m^2-2hkm+(k^2-b^2)=0$.
2. If neither tangent is vertical, $h^2\ne a^2$ and the product of the two slopes is $(k^2-b^2)/(h^2-a^2)$. Perpendicularity makes it $-1$, hence $h^2+k^2=a^2+b^2$.
3. If one tangent is vertical, it is $x=\pm a$. Its perpendicular partner must be a horizontal ellipse tangent $y=\pm b$. Their intersections also satisfy the claimed circle.
4. Conversely take a point on that circle with $h^2\ne a^2$. The slope quadratic discriminant is $4(a^2k^2+b^2h^2-a^2b^2)>0$: indeed $h^2/a^2+k^2/b^2\ge(h^2+k^2)/a^2>1$. Thus there are two distinct real tangent slopes, with product $-1$.
5. For the remaining circle points $h^2=a^2$, the equation gives $k^2=b^2$, and the explicit vertical and horizontal tangents provide the required pair. Both inclusions and all orientations are covered.

**Self-assessment rubric**

- Derive the exact tangent condition and slope quadratic.
- Obtain the circle from finite slope products.
- Handle vertical-horizontal tangent pairs separately.
- Prove every remaining circle point has two distinct real perpendicular tangents.

</details>
