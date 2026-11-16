# Characterize intersections of perpendicular parabola tangents

*Hard · [Geometry and trigonometry problems](index.md)*

For parabola $y^2=4px$ with $p>0$, prove that the finite intersection points of pairs of distinct perpendicular tangents are exactly the points of its directrix $x=-p$. Treat possible vertical tangents explicitly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Parametrize the parabola by $(pt^2,2pt)$; its tangent is $x-ty+pt^2=0$.

</details>

<details>
<summary>Hint 2</summary>

For two parameters $s,t$, find both the tangent intersection and the dot product of their direction vectors.

</details>

<details>
<summary>Model proof</summary>

Use tangent parameters to prove both locus inclusions.

1. The tangent at parameter $t$ is $x-ty+pt^2=0$, with direction $(t,1)$. This includes the vertical tangent $x=0$ at $t=0$.
2. Two tangents at distinct parameters $s,t$ are perpendicular exactly when $(s,1)\cdot(t,1)=st+1=0$. Thus neither parameter is zero; the vertical tangent has no perpendicular finite tangent on this parabola.
3. Subtracting the two tangent equations gives $y=p(s+t)$, and substitution gives $x=pst$. Perpendicularity therefore forces $x=-p$.
4. Conversely, for any point $(-p,k)$, choose $s,t$ as roots of $z^2-(k/p)z-1=0$. The discriminant $(k/p)^2+4$ is positive, so the roots are real and distinct, and their product is $-1$.
5. The corresponding tangents are perpendicular and intersect at $(-p,k)$ by the formulas above. This establishes the entire directrix and no extra finite points.

**Self-assessment rubric**

- Establish a tangent parametrization including its vertical case.
- Derive the parameter product from a direction-vector dot product.
- Compute the intersection and obtain the directrix.
- Construct distinct real tangent parameters for every directrix point.

</details>
