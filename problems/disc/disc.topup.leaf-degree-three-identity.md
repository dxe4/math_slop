# Relate leaves to branch vertices

*Medium · [Discrete mathematics](index.md)*

A finite tree with at least two vertices has every degree equal to one or three. If L is its number of leaves and B its number of degree-three vertices, prove $L=B+2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write the total vertex count and degree sum using L and B.

</details>

<details>
<summary>Hint 2</summary>

Combine the degree-sum identity with the edge count of a finite tree.

</details>

<details>
<summary>Model proof</summary>

Two counts of incidences give the leaf-branch identity.

1. There are L+B vertices and therefore L+B-1 edges.
2. The degree sum is L+3B. It also equals twice the edge count, so $L+3B=2(L+B-1)$.
3. Rearranging gives $L=B+2$.

**Self-assessment rubric**

- Express the vertex and tree edge counts in L and B.
- Count incidences from the stated degree possibilities.
- Combine the identities and obtain the claimed relation.

</details>
