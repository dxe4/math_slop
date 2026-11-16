# Prove the six-point circle relation

*Hard · [Geometry and trigonometry problems](index.md)*

For a nondegenerate triangle $ABC$, let $O,H,R$ be its circumcenter, orthocenter and circumradius. Prove that the three side midpoints and the midpoints of $AH,BH,CH$ lie on the circle centered at the midpoint of $OH$ with radius $R/2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Use circumcenter origin, so $|a|=|b|=|c|=R$.

</details>

<details>
<summary>Hint 2</summary>

Test $h=a+b+c$ against an altitude direction using a dot product.

</details>

<details>
<summary>Model proof</summary>

Compute all six distances from a common center.

1. Put $O$ at the origin. For $h=a+b+c$, $(h-a)\cdot(b-c)=(b+c)\cdot(b-c)=|b|^2-|c|^2=0$. The cyclic relations show $h$ is the orthocenter.
2. Let $n=h/2$, the midpoint of $OH$. For the midpoint $m=(b+c)/2$ of $BC$, $m-n=-a/2$, so $|m-n|=R/2$. The other two side midpoints follow cyclically.
3. For the midpoint $p=(a+h)/2$ of $AH$, $p-n=a/2$, so again $|p-n|=R/2$. The other two vertex-orthocenter midpoints follow cyclically.
4. The radius is positive because the triangle is nondegenerate. This establishes the common circle, allowing coincident listed points in right triangles.

**Self-assessment rubric**

- Establish equal vertex norms with O as origin.
- Verify the orthocenter sum by perpendicularity.
- Compute the radius for both families of midpoints.
- Keep the triangle nondegenerate and permit coincident listed points.

</details>
