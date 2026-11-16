# Interior preserves a finite intersection

*Medium · [Topology problems](index.md)*

For arbitrary subsets $A,B$ of a topological space $X$, prove $\operatorname{int}(A\cap B)=\operatorname{int}(A)\cap\operatorname{int}(B)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use the largest-open-subset characterization of interior.

</details>

<details>
<summary>Hint 2</summary>

The intersection of the two interiors is itself open and lies in both original sets.

</details>

<details>
<summary>Model proof</summary>

Compare open subsets on both sides using monotonicity and the finite-intersection axiom.

1. Monotonicity gives $\operatorname{int}(A\cap B)\subseteq\operatorname{int}(A)\cap\operatorname{int}(B)$.
2. The set on the right is open, being a finite intersection of open sets, and lies inside $A\cap B$.
3. It is therefore contained in the largest open subset of $A\cap B$, its interior. The two inclusions prove equality.

**Self-assessment rubric**

- Use containment in both sets to establish the first inclusion.
- Justify openness of the intersection of the two interiors.
- Use the defining maximal-open property for the reverse inclusion.

</details>
