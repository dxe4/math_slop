# Justify an internal angle-bisector construction

*Medium · [Geometry and trigonometry problems](index.md)*

Let rays $OA,OB$ form an angle strictly between $0$ and $\pi$, with $OA=OB=r>0$. Circles of radius $r$ centered at $A,B$ meet at $O$ and another point $P$. Prove ray $OP$ is the internal angle bisector and explain why the second intersection is well defined.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Put $O$ at the origin and write $a,b$ for the two vectors of length $r$.

</details>

<details>
<summary>Hint 2</summary>

The point $a+b$ is at distance $r$ from both $A,B$ and lies inside the positive cone of the two rays.

</details>

<details>
<summary>Model proof</summary>

Use an explicit vector for the second compass intersection.

1. The distance $AB$ is strictly between $0$ and $2r$ because the ray angle lies strictly between zero and $\pi$. The two equal-radius circles therefore have two distinct intersections.
2. Besides the origin, $p=a+b$ lies on both circles: $p-a=b$ and $p-b=a$ each have norm $r$. Also $a+b\ne0$ because the rays are not opposite.
3. The vector $a+b$ is a positive combination of two independent ray vectors, hence lies strictly inside the angle.
4. Finally $p\cdot a=r^2+a\cdot b=p\cdot b$. The ray vectors have equal norms, so the cosines of their respective angles to $p$ agree. Both angles are in $(0,\pi)$, where cosine is injective, so they are equal.
5. Thus the constructed ray is the internal, rather than external, bisector.

**Self-assessment rubric**

- Use the strict angle domain to ensure two distinct circle intersections.
- Identify and verify the nonzero second intersection.
- Prove the chosen ray lies inside the original angle.
- Establish equality of its two angles with the sides.

</details>
