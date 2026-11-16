# A finite union of compact subsets is compact

*Easy · [Topology problems](index.md)*

Let $K_1,\ldots,K_m$ be compact subsets of a topological space $X$, where $m$ is finite. Prove that $K_1\cup\cdots\cup K_m$ is compact.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

An open cover of the union also covers each individual subset.

</details>

<details>
<summary>Hint 2</summary>

There are only finitely many finite subcovers to combine.

</details>

<details>
<summary>Model proof</summary>

Compactness supplies finitely many cover members for each of finitely many pieces.

1. Take an open cover of the union in the subspace topology. Restrict it to each $K_j$, obtaining an open cover of that compact subset.
2. For each $j$, choose finitely many members of the original cover that cover $K_j$.
3. The union of these finitely many finite collections is finite and covers every $K_j$, hence the whole union. The empty union, if $m=0$, is compact as well.

**Self-assessment rubric**

- Explain how the original relative cover covers each compact piece.
- Apply compactness to every piece.
- Use finiteness of the number of pieces to get a finite cover of their union.

</details>
