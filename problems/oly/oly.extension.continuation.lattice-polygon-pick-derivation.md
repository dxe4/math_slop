# Derive the lattice area formula from primitive triangles

*Hard · [Original olympiad-style problems](index.md)*

A simple polygon has all vertices in $\mathbb Z^2$. Let $I$ and $B$ count its interior and boundary lattice points. Prove $\operatorname{area}=I+B/2-1$. You may use polygon triangulation and Euler\'s formula for a finite planar subdivision, but must explain why a triangle containing no lattice points except its vertices has area $1/2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

A primitive edge vector can be carried to $(1,0)$ by an integer matrix of determinant one, using Bézout. If the third vertex is $(a,b)$, shear to $0\le a<b$.

</details>

<details>
<summary>Hint 2</summary>

Subdivide at every extra lattice point. For the resulting primitive triangulation count triangle-edge incidences, and combine with Euler.

</details>

<details>
<summary>Model proof</summary>

Unimodular coordinates prove the local area, and planar incidence counting assembles the global formula.

1. A triangle with no extra lattice points has a primitive edge vector $u=(p,q)$, since otherwise that edge contains a lattice point. Bézout supplies an integer determinant-one change of coordinates taking $u$ to $(1,0)$; it preserves the lattice and area. Reflect if necessary so the third vertex is $(a,b)$ with integer $b>0$. A shear $x\mapsto x-ky$ reduces $a$ to $0\le a<b$.
2. If $b\ge2$, the horizontal section at height one runs from $a/b$ to $1+(a-1)/b$. For $a=0$ it contains the lattice point $(0,1)$ on its left edge; for $a\ge1$ it contains $(1,1)$. This contradicts the absence of extra lattice points. Hence $b=1$ and area is $1/2$.
3. Triangulate the polygon and successively split any triangle at an extra boundary or interior lattice point, refining adjacent triangles when necessary. This terminates: all triangles have positive half-integer area by their integer determinants, so their number is bounded by twice the fixed total area and each split increases that number. The final primitive triangles contain all $I+B$ lattice points as vertices.
4. Let $T$ be the number of primitive triangles and $E$ the number of interior edges. Boundary edges are the $B$ unit lattice boundary segments. Euler gives $(I+B)-(E+B)+T=1$, and counting triangle sides gives $3T=2E+B$. Solving yields $T=2I+B-2$. Since each triangle has area $1/2$, the asserted formula follows.

**Self-assessment rubric**

- Use a primitive edge, Bezout and a shear without changing the lattice or area.
- Exhibit the forbidden lattice point when b is at least two.
- Justify a terminating triangulation into primitive lattice triangles.
- Combine both exact incidence equations to derive the formula.

</details>
