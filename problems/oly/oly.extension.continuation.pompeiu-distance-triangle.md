# Rotate a point to compare its three vertex distances

*Hard · [Original olympiad-style problems](index.md)*

Let $ABC$ be equilateral and let $P$ be any planar point. Prove that $PA,PB,PC$ satisfy the three weak triangle inequalities. Show that equality is possible for a point distinct from the three vertices, and give a geometric description of one such point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use a rotation by $60^\circ$ about $A$ taking $C$ to $B$, and apply it to $P$, obtaining $Q$.

</details>

<details>
<summary>Hint 2</summary>

The three sides of triangle $BPQ$ are $PB,PC,PA$. For equality choose the midpoint of the arc $BC$ of the circumcircle not containing $A$.

</details>

<details>
<summary>Model proof</summary>

A rigid rotation realizes the three distances as sides of an actual, possibly degenerate triangle.

1. Orient the equilateral triangle so that the chosen $60^\circ$ rotation sends $C$ to $B$. It sends $P$ to $Q$, so $BQ=CP$, while $PQ=AP$ because triangle $APQ$ is equilateral or collapses at $P=A$. The remaining side $BP$ is unchanged.
2. The ordinary triangle inequalities for points $B,P,Q$ give each of $PA\le PB+PC$, $PB\le PC+PA$, $PC\le PA+PB$. This remains valid when points coincide or are collinear.
3. For a nonvertex equality example, let $P$ be the midpoint of the minor arc $BC$ not containing $A$. It lies on the symmetry axis, with $PB=PC=R$ and $PA=2R$ because $A,P$ are opposite endpoints of a circumdiameter in this equilateral configuration.
4. Thus $PA=PB+PC$ with all three distances positive. Strict triangle inequalities cannot be demanded for all planar $P$.

**Self-assessment rubric**

- Identify all three sides of BPQ under the specified rotation.
- Obtain all three weak inequalities, retaining coincident cases.
- Compute the three distances for the stated nonvertex arc midpoint.

</details>
