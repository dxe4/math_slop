# A bisector length from two area decompositions

*Medium · [Original olympiad-style problems](index.md)*

In a right triangle, the legs adjacent to the right angle have lengths $6$ and $8$. Let $d$ be the length of the internal bisector of the right angle up to the hypotenuse. Find $d^2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1152,"denominator":49},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Decompose the triangle into the two triangles with common side equal to the bisector.

</details>

<details>
<summary>Hint 2</summary>

If the adjacent sides are $u,v$ and their angle is $C$, area comparison gives $d=2uv\cos(C/2)/(u+v)$.

</details>

<details>
<summary>Worked solution</summary>

Both small triangles have the same half-angle, so their areas add linearly in the bisector length.

1. The original area is $uv\sin C/2$. The sum of the two areas cut by the bisector is $(u+v)d\sin(C/2)/2$.
2. Since $0<C<180^\circ$, cancellation of the positive $\sin(C/2)$ gives $d=2uv\cos(C/2)/(u+v)$.
3. Here $u=6,v=8,C=90^\circ$, hence $d=96(\sqrt2/2)/14=24\sqrt2/7$. Squaring gives $1152/49$.

</details>
