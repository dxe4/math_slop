# Count directed triangles through transitive triples

*Medium · [Original olympiad-style problems](index.md)*

A tournament on $7$ labeled vertices has outdegree $3$ at every vertex. How many triples form directed cycles?

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Every triple is either transitive or cyclic.

</details>

<details>
<summary>Hint 2</summary>

A transitive triple has exactly one vertex that beats its other two.

</details>

<details>
<summary>Worked solution</summary>

Count the complementary triples by their unique source.

1. There are $\binom73=35$ triples.
2. Choosing two outneighbors at a vertex counts every transitive triple exactly once and no cyclic triple. The transitive count is $7\binom32=21$.
3. The cyclic count is fourteen. A cyclic orientation on labels modulo seven with differences one, two and three directed forward provides an example of the stipulated degree pattern.

</details>
