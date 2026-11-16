# Prove the pedal feet are collinear

*Hard · [Geometry and trigonometry problems](index.md)*

Let $P$ lie on the circumcircle of a nondegenerate triangle $ABC$, with $P$ distinct from the vertices and not the antipode of any vertex. Let $X,Y,Z$ be its perpendicular feet on supporting lines $BC,CA,AB$, respectively. Prove that $X,Y,Z$ are collinear. Use directed angles modulo $180^\circ$ so exterior feet are covered.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

The perpendicularities put $P,X,C,Y$ and $P,Y,A,Z$ on circles with diameters $PC$ and $PA$.

</details>

<details>
<summary>Hint 2</summary>

Compute the directed angle from $YX$ to $YZ$ through the line $YP$.

</details>

<details>
<summary>Model proof</summary>

Transfer angles through the two right-angle circles.

1. The right angles at $X,Y$ imply that $P,X,C,Y$ are concyclic. Likewise $P,Y,A,Z$ are concyclic. The exclusions prevent coincident feet at a vertex; if two feet coincide, the collinearity statement follows by the corresponding limiting perpendicular configuration, but those cases are already excluded here.
2. Using directed angles modulo $180^\circ$, $\angle XYP=\angle XCP$ and $\angle PYZ=\angle PAZ$.
3. Therefore the directed angle from $YX$ to $YZ$ is $\angle XCP+\angle PAZ=\angle BCP+\angle PAB$, because $CX$ lies on $CB$ and $AZ$ on $AB$.
4. On the original circumcircle, $\angle BCP=\angle BAP$ as directed angles subtending chord $BP$. Thus the sum is $\angle BAP+\angle PAB=0$ modulo $180^\circ$.
5. The lines $YX,YZ$ coincide, which proves collinearity even when some feet are outside the side segments.

**Self-assessment rubric**

- Identify both auxiliary cyclic quadruples from perpendicular feet.
- Give a valid directed-angle chain modulo 180 degrees.
- Use the original circumcircle for the matching chord angle.
- Explain why the argument covers supporting-line feet outside the sides.

</details>
