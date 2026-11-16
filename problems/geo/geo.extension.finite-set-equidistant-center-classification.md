# Classify centers equidistant from a finite set

*Hard · [Geometry and trigonometry problems](index.md)*

Let $S$ be a nonempty finite set of plane points. Classify the locus of centers $X$ whose distances to all points of $S$ are equal. Give all possibilities for a singleton, a collinear set with at least two distinct points, and a noncollinear set, and justify when the locus is empty.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Choose $A\in S$ and expand $|X-P|^2=|X-A|^2$ to obtain linear equations in $X$.

</details>

<details>
<summary>Hint 2</summary>

Three distinct collinear points cannot all lie on one circle, whereas three noncollinear points determine a unique center candidate.

</details>

<details>
<summary>Model proof</summary>

Classify the intersection of the exact equal-distance equations.

1. Fix $A\in S$. The condition for $P\in S$ expands to $2X\cdot(P-A)=|P|^2-|A|^2$. Thus the center locus is an intersection of perpendicular-bisector lines, with no condition from $P=A$.
2. If $S$ is a singleton, every plane point is a center; radius zero is allowed when the center is that sole point.
3. For exactly two distinct points the locus is their perpendicular bisector. If a collinear set has three or more distinct points, no center exists: intersecting a circle with the common line gives at most two points, or equivalently the bisectors of two different adjacent segments are distinct parallel lines.
4. For a noncollinear set, choose three noncollinear members. Their two independent bisector equations give a unique candidate circumcenter. It is a center for all of $S$ exactly when every remaining point is on that same circle.
5. Therefore the noncollinear locus is a singleton precisely for a concyclic set and empty otherwise. These alternatives exhaust every nonempty finite set.

**Self-assessment rubric**

- Derive the exact squared-distance linear equations.
- Give the full loci for one and two distinct points.
- Prove emptiness for three or more distinct collinear points.
- Prove the unique-candidate criterion and the concyclicity condition.

</details>
