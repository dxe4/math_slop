# A line through two tangent intersections

*Hard · [Original olympiad-style problems](index.md)*

For the circle $|x|=1$ in the Euclidean plane, distinct chords $AB$ and $CD$ meet at $P\ne0$. Suppose the tangent pairs at $A,B$ and at $C,D$ meet at finite distinct points $U,V$. Prove that line $UV$ is $P\cdot x=1$, and hence is perpendicular to $OP$. Also prove the reciprocity: $Q$ lies on this line exactly when $P$ lies on the line $Q\cdot x=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The tangent at a unit vector $a$ has equation $a\cdot x=1$.

</details>

<details>
<summary>Hint 2</summary>

Both endpoints of chord $AB$ satisfy $U\cdot x=1$, so that is the chord line.

</details>

<details>
<summary>Model proof</summary>

The symmetric dot product gives both the polar construction and its reciprocity.

1. The tangent at $a$ is perpendicular to $a$ and passes through $a$, hence has equation $a\cdot x=1$. As $U$ lies on the tangents at $A,B$, the two distinct endpoint vectors both satisfy $U\cdot x=1$; this is exactly line $AB$.
2. Since $P\in AB$, $U\cdot P=1$. Likewise $V\cdot P=1$. The nonzero vector $P$ defines a genuine line $P\cdot x=1$, and the distinct points $U,V$ on it determine the whole line.
3. Its normal is $P$, so it is perpendicular to the radius line $OP$. The line cannot contain the origin, consistent with its right side being one.
4. Finally $Q\in UV$ means $P\cdot Q=1$, equivalent by symmetry to $Q\cdot P=1$. This also forces $Q\ne0$, so the reciprocal line is well defined.

**Self-assessment rubric**

- Derive the tangent equation for a unit circle.
- Identify each chord from its tangent-pair intersection.
- Place both distinct points on the claimed nondegenerate perpendicular line.
- Use the symmetric dot product and address Q nonzero.

</details>
