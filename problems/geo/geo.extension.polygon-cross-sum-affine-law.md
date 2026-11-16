# Prove the signed polygon area transformation law

*Hard · [Geometry and trigonometry problems](index.md)*

For a simple plane polygon with vertices $p_1,\ldots,p_n$ in boundary order, define $S=\frac12\sum_i\det(p_i,p_{i+1})$, with $p_{n+1}=p_1$. Prove that $S$ is signed area, is independent of a translated origin, and changes to $\det(M)S$ under an invertible linear map $M$. Include concave polygons.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Triangulate a simple polygon and add oriented triangle determinants; internal edges cancel in opposite directions.

</details>

<details>
<summary>Hint 2</summary>

For translation $p_i\mapsto p_i+t$, the extra determinant terms telescope.

</details>

<details>
<summary>Model proof</summary>

Use cancellation of oriented internal edges and bilinearity.

1. A simple polygon can be triangulated without adding exterior area. Give every triangle the orientation of the boundary. The signed area of triangle $(a,b,c)$ is $[\det(a,b)+\det(b,c)+\det(c,a)]/2$, obtained from $\det(b-a,c-a)/2$.
2. Add this identity over the triangulation. Every internal edge occurs twice with opposite orientations and cancels. The boundary terms remain, giving exactly $S$. This covers concave simple polygons because the triangulation stays inside them.
3. For translation by $t$, expansion of each determinant adds $\det(t,p_{i+1})+\det(p_i,t)=\det(t,p_{i+1}-p_i)$. The cyclic sum vanishes since $\sum(p_{i+1}-p_i)=0$.
4. For a linear map, $\det(Mp_i,Mp_{i+1})=\det(M)\det(p_i,p_{i+1})$. Summing proves the transformation law.
5. An invertible map preserves simplicity and flips orientation exactly when its determinant is negative. Thus the signed law also yields the usual absolute-area factor.

**Self-assessment rubric**

- Derive the oriented determinant formula for one triangle.
- Use a valid polygon triangulation and cancel internal edges, including concave cases.
- Prove origin independence by an explicit telescoping sum.
- Prove the linear transformation and orientation law.

</details>
