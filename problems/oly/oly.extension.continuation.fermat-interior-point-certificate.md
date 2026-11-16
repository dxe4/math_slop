# A sharp distance sum with a geometric certificate

*Hard · [Original olympiad-style problems](index.md)*

Every angle of triangle $ABC$ is less than $120^\circ$. Suppose an interior point $F$ has $\angle AFB=\angle BFC=\angle CFA=120^\circ$. Prove that $F$ uniquely minimizes $PA+PB+PC$ over all planar points $P$. Prove also that at most one such interior point exists. Existence is not part of the task.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let $u_A,u_B,u_C$ be unit vectors from $F$ toward the vertices. Their sum is zero.

</details>

<details>
<summary>Hint 2</summary>

For any vector $v$ and unit vector $u$, $|v|\ge u\cdot v$, with equality only when $v$ is a nonnegative multiple of $u$.

</details>

<details>
<summary>Model proof</summary>

A supporting linear functional for each distance gives a global inequality, and nonparallel rays make equality rigid.

1. Three unit vectors separated by $120^\circ$ sum to zero, by coordinates $(1,0),(-1/2,\sqrt3/2),(-1/2,-\sqrt3/2)$ after a rotation.
2. Apply the projection inequality to $A-P=(A-F)-(P-F)$ along $u_A$, and similarly for $B,C$. Adding gives $PA+PB+PC\ge FA+FB+FC-(P-F)\cdot(u_A+u_B+u_C)=FA+FB+FC$.
3. Equality requires $A-P$ to be a nonnegative multiple of $A-F$ and $B-P$ to be a nonnegative multiple of $B-F$. These place $P$ on two distinct lines $FA,FB$, whose only common point is $F$. Hence equality is unique.
4. If another point had the same stated angle property, the same argument would make it a global minimizer, contradicting uniqueness. The result uses the stipulated existence and does not silently construct the Fermat point or assert it remains interior for angles at least $120^\circ$.

**Self-assessment rubric**

- Establish the zero sum from the three 120-degree angles.
- Apply and add the three projection inequalities for an arbitrary planar P.
- Use two nonparallel equality lines to force P=F.
- Conclude at most one stipulated point without assuming an unproved construction.

</details>
