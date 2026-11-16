# Build a topology from a basis criterion

*Medium · [Topology problems](index.md)*

Let $\mathcal B$ cover a set $X$. Suppose that whenever $x\in B_1\cap B_2$ with $B_1,B_2\in\mathcal B$, some $B_3\in\mathcal B$ satisfies $x\in B_3\subseteq B_1\cap B_2$. Prove that all unions of members of $\mathcal B$, including the empty union, form a topology on $X$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Check the three topology axioms for the proposed family.

</details>

<details>
<summary>Hint 2</summary>

To intersect two unions, work locally at a point in the intersection and use the stated refinement property.

</details>

<details>
<summary>Model proof</summary>

Local basis refinements make the intersection of two unions another union.

1. The empty set is the empty union. Because $\mathcal B$ covers $X$, the whole set is the union of all its members.
2. An arbitrary union of unions of basis members is again a union of basis members, proving arbitrary-union closure.
3. If $x\in U\cap V$ for two such unions, choose $B_1\subseteq U$ and $B_2\subseteq V$ containing $x$. The hypothesis gives $B_3$ containing $x$ inside $U\cap V$.
4. Taking the union of all such contained basis members gives exactly $U\cap V$. Binary intersections, and hence all finite intersections by induction, belong to the family.

**Self-assessment rubric**

- Show both the empty set and the whole set belong.
- Explain closure under arbitrary unions of the proposed open sets.
- Use the basis condition at an arbitrary point of an intersection.
- Express the intersection as a union and conclude the finite-intersection axiom.

</details>
