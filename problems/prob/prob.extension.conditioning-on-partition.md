# Prove total probability

*Medium · [Probability problems](index.md)*

Let $m\ge1$ be an integer and let measurable events $B_1,\ldots,B_m$ partition the sample space, with $P(B_j)>0$ for every $j$. For any event $A$, prove $P(A)=\sum_{j=1}^mP(A\mid B_j)P(B_j)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Intersect every member of the partition with $A$.

</details>

<details>
<summary>Hint 2</summary>

Apply finite additivity to those pieces, then use the definition of conditional probability separately in each term.

</details>

<details>
<summary>Model proof</summary>

A partition decomposes the event into disjoint measurable pieces.

1. Because the $B_j$ are pairwise disjoint and cover the sample space, the events $A\cap B_j$ are pairwise disjoint and have union $A$.
2. Finite additivity therefore gives $P(A)=\sum_{j=1}^mP(A\cap B_j)$.
3. Each $P(B_j)>0$, so the conditional probability definition gives $P(A\cap B_j)=P(A\mid B_j)P(B_j)$. Substituting each identity proves the formula. There is no independence assumption, and no division by a zero-probability stratum occurs.

Add the masses of $A\cap B_j$ and rewrite each as $P(A\mid B_j)P(B_j)$.

**Self-assessment rubric**

- Show the intersections with the partition are disjoint and cover $A$.
- Apply additivity to exactly those pieces.
- Use positive stratum probabilities to justify each conditional definition and substitute it.

</details>
