# Count triangles around the center of an odd polygon

*Medium · [Original olympiad-style problems](index.md)*

Choose three vertices of a regular $9$-gon. How many of the resulting triangles contain its center strictly in their interior?

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

There are $\binom93$ total triples. A triangle misses the center exactly when its three vertices lie in an open semicircle.

</details>

<details>
<summary>Hint 2</summary>

Each such triple has a unique first vertex followed clockwise by the other two among the next four vertices.

</details>

<details>
<summary>Worked solution</summary>

An odd number of vertices removes antipodal boundary ambiguities.

1. There are $84$ triples, and no vertex pair is antipodal, so the center never lies on a triangle edge. A triple fails to contain the center precisely when it fits in an open semicircle, by separation of the center from its convex hull.
2. For a failing triple, the complementary gap between consecutive chosen vertices exceeds $180^\circ$ and is unique, since two such gaps cannot fit into a full turn. Its endpoint supplies a unique first vertex of the short containing arc.
3. The other two vertices are chosen from the next four vertices clockwise, giving $9\binom42=54$ failing triples without repetition. Therefore $84-54=30$ contain the center strictly.

</details>
