# Bound intersecting triples by cyclic orders

*Hard · [Original olympiad-style problems](index.md)*

Let $\mathcal F$ be a family of three-element subsets of a fixed seven-element set, with every pair of members intersecting. Prove $|\mathcal F|\le15$ and construct a family of size $15$. You must justify the cyclic-order bound used in your proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

In one cyclic order, label each consecutive three-element interval by its starting position modulo seven. Two such intervals are disjoint exactly when their starts differ by three or four.

</details>

<details>
<summary>Hint 2</summary>

Those forbidden pairs form a seven-cycle after relabeling by steps of three. Double-count pairs of a cyclic order and a member appearing consecutively.

</details>

<details>
<summary>Model proof</summary>

A small independent-set bound in each circular order averages to the sharp global bound.

1. For a fixed cyclic order, two three-intervals are disjoint exactly at starting-position differences $3$ or $4$ modulo seven. The graph joining those forbidden pairs is a cycle of length seven. An independent set in that cycle has at most three vertices: each chosen vertex requires its unchosen successor, so twice its size is at most seven. Hence at most three members of $\mathcal F$ can appear as consecutive intervals.
2. There are $(7-1)!=720$ oriented cyclic orders, with reflections distinct. A fixed three-set appears as a consecutive block in $3!\cdot4!=144$ such orders: internally order the block and cyclically order that block together with the four other labels.
3. Counting incidences gives $144|\mathcal F|\le3\cdot720$, hence $|\mathcal F|\le15$. No ordering of a member inside its block is lost in this count.
4. All triples containing one fixed element form an intersecting family of size $\binom62=15$, proving sharpness. A classification of all equality families is not asserted.

**Self-assessment rubric**

- Identify the forbidden start differences and prove the seven-cycle bound.
- Count cyclic orders and the exact 144 appearances of each triple.
- Derive 15 and give the fixed-element construction.

</details>
