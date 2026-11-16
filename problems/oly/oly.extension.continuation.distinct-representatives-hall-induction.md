# A complete criterion for distinct representatives

*Hard · [Original olympiad-style problems](index.md)*

For finite sets $A_1,\ldots,A_n$, prove that distinct representatives $a_i\in A_i$ exist if and only if $|\bigcup_{i\in I}A_i|\ge|I|$ for every index subset $I$. Include the empty family and give a full inductive sufficiency argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If a nonempty proper index set achieves equality, solve it first and remove its union from every remaining set.

</details>

<details>
<summary>Hint 2</summary>

If every nonempty proper index set has strict surplus, choose one representative arbitrarily and delete it from the remaining sets. The surplus protects the induction hypothesis.

</details>

<details>
<summary>Model proof</summary>

Tight subfamilies split the problem; absence of tight subfamilies leaves enough slack to commit one choice.

1. Necessity holds because the representatives of any subfamily are distinct members of its union. The empty family has the empty representative system. For $n=1$, the condition says $A_1$ is nonempty, so choose any element.
2. Assume $n\ge2$ and the theorem for smaller families. If a nonempty proper set $I$ has union $U$ of size $|I|$, induction selects distinct representatives for it. For the remaining indices replace $A_j$ by $A_j\setminus U$. For any remaining subset $K$, the original condition on $I\cup K$ gives $|U\cup\bigcup_{j\in K}A_j|\ge|I|+|K|$, hence the reduced union has at least $|K|$ elements. Induction solves the reduced family, disjoint from the first representatives.
3. Otherwise all nonempty proper index sets have union size at least their index size plus one. Choose $a_n\in A_n$, possible by the single-index condition. Delete $a_n$ from each of the other $n-1$ sets. Any nonempty subset of those indices loses at most one union element, so it still satisfies the required bound.
4. Induction yields representatives for the reduced family; adjoining $a_n$ gives the full system. These two cases exhaust the possibilities and establish sufficiency without assuming a matching theorem.

**Self-assessment rubric**

- Prove necessity and handle empty and one-set families.
- Verify the reduced complement family retains every union bound.
- Use the extra union element to support deleting an arbitrary chosen representative.
- Assemble distinct representatives in both exhaustive cases.

</details>
