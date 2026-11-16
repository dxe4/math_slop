# A diagonal-independent sum of inradii

*Hard · [Original olympiad-style problems](index.md)*

For a convex cyclic quadrilateral $ABCD$, let $r_{XYZ}$ denote the inradius of triangle $XYZ$. Prove $r_{ABC}+r_{ACD}=r_{ABD}+r_{BCD}$. All four triangles are nondegenerate.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let the successive arcs have measures $2x,2y,2z,2w$, where $x+y+z+w=180^\circ$.

</details>

<details>
<summary>Hint 2</summary>

Use the triangle identity $r=R(\cos A+\cos B+\cos C-1)$; derive it from half-angle area formulas if necessary.

</details>

<details>
<summary>Model proof</summary>

Opposite arc-sum cosine terms cancel separately for either diagonal.

1. For any triangle on the given circle, the identity follows from $\cos A+\cos B+\cos C=1+4\sin(A/2)\sin(B/2)\sin(C/2)$ and $r=4R\sin(A/2)\sin(B/2)\sin(C/2)$. The former is obtained by summing the first two cosines; the latter follows from Heron and $\Delta=rs=abc/(4R)$.
2. Triangle $ABC$ has angles $x,y,z+w$, in some order, and triangle $ACD$ has angles $z,w,x+y$. Thus their inradius sum is $R[\cos x+\cos y+\cos z+\cos w+\cos(x+y)+\cos(z+w)-2]$.
3. Since $z+w=180^\circ-(x+y)$, the last two cosines cancel. The sum is $R(\cos x+\cos y+\cos z+\cos w-2)$.
4. For triangles $ABD$ and $BCD$, the analogous extra terms are $\cos(x+w)$ and $\cos(y+z)$, which also cancel. Their sum is the same expression, proving the identity for every convex cyclic configuration.

**Self-assessment rubric**

- Justify the radius/cosine identity rather than use an unexplained diagram relation.
- Assign the four triangle angle triples from the actual arcs.
- Cancel the supplementary arc-sum cosine terms for both diagonals.

</details>
