# Prove Menelaus with supporting-line points

*Hard · [Geometry and trigonometry problems](index.md)*

Let $D,E,F$ lie on supporting lines $BC,CA,AB$ of a nondegenerate triangle, with none equal to a triangle vertex. Define ratios $r=BD/DC$, $s=CE/EA$, $t=AF/FB$ using signed lengths on the respective oriented lines $B\to C$, $C\to A$, $A\to B$. Prove $D,E,F$ are collinear if and only if $rst=-1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Normalize the triangle to $(0,0),(1,0),(0,1)$. Each ratio is finite, nonzero and different from $-1$.

</details>

<details>
<summary>Hint 2</summary>

Use the determinant of the three homogeneous point-coordinate rows to characterize collinearity.

</details>

<details>
<summary>Model proof</summary>

Keep signed side ratios in a coordinate determinant.

1. Use $A=(0,0)$, $B=(1,0)$, $C=(0,1)$. The signed ratio definitions give $D=(1/(1+r),r/(1+r))$, $E=(0,1/(1+s))$, $F=(t/(1+t),0)$.
2. No ratio is zero because the points are not vertices, and no finite point yields ratio $-1$. Thus all the displayed denominators are nonzero even for exterior points.
3. Collinearity is equivalent to the determinant with rows $(D_x,D_y,1)$, $(E_x,E_y,1)$, $(F_x,F_y,1)$ being zero.
4. Expanding that determinant gives $[1+rst]/[(1+r)(1+s)(1+t)]$. Its nonzero denominator shows that it vanishes exactly when $rst=-1$.
5. The equivalence covers all admissible interior and exterior side positions. In particular three internal division ratios are positive and cannot satisfy the collinearity condition.

**Self-assessment rubric**

- Use the stated ratio orientations for interior and exterior points.
- Explain why zero and minus-one ratios do not arise under the hypotheses.
- Compute a correct homogeneous collinearity determinant.
- Establish the exact equivalence without imposing an unmentioned side-position case.

</details>
