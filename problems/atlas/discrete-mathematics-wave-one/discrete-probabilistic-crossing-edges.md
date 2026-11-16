# A bipartite subgraph by expectation

*Difficulty 3 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 9 of 15*

Prove that every finite simple graph with m edges has a bipartite subgraph with at least m/2 edges by placing vertices independently into two parts. State precisely where independence is and is not needed.

<details>
<summary>Hint 1</summary>

Use an indicator for each edge crossing the partition

</details>

<details>
<summary>Hint 2</summary>

Linearity of expectation does not require indicators to be independent

</details>

<details>
<summary>Worked solution</summary>

Place each vertex independently into L or R with probability 1/2. For edge e, let I_e be 1 when its endpoints land on different sides. Endpoint independence gives P(I_e=1)=1/2. Let X=Σ_eI_e count crossing edges. Linearity yields E[X]=Σ_eE[I_e]=m/2 without requiring any independence among the indicators. In this particular fair model, indicators of two distinct edges are pairwise independent even when the edges share a vertex, but the three indicators around a triangle are not mutually independent: a cut crosses either zero or two triangle edges. None of that joint analysis is needed for linearity. Some outcome has X at least its average m/2, and the crossing edges form a bipartite subgraph with parts L,R.

**Answer.** Expected crossing edges equal m/2, so some partition has at least m/2.

</details>

*Tags: probabilistic-method, expectation, graph-theory*
