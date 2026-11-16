# Cycle five under counting, extremal, and exchange lenses

*Difficulty 5 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 15 of 15*

For stable vertex sets of C5, derive the independence polynomial, list maximum stable sets, exhibit an exchange failure, and explain exactly what an exhaustive five-vertex computation proves and does not prove.

<details>
<summary>Hint 1</summary>

There are five singletons and five nonadjacent pairs

</details>

<details>
<summary>Hint 2</summary>

Compare one singleton with a disjoint maximum pair that blocks augmentation

</details>

<details>
<summary>Worked solution</summary>

The empty set contributes 1, the five vertices contribute 5x, and each vertex has two nonneighbors but each pair is counted twice, giving five stable pairs and polynomial 1+5x+5x^2. No stable triple exists because three chosen vertices on a five-cycle include adjacent vertices. The maximum sets are {v1,v3}, {v1,v4}, {v2,v4}, {v2,v5}, {v3,v5}. For exchange, take I={v1} and J={v2,v5}; J is stable, but both v2 and v5 are adjacent to v1, so neither augments I. Exact enumeration proves these claims for the specified labeled C5 and verifies it is not a matroid. It does not prove a statement about all odd cycles or arbitrary graph-stable systems without a separate argument.

**Answer.** Polynomial 1+5x+5x^2; five maximum pairs; {v1} versus {v2,v5} fails exchange; scope is the exact C5 instance.

</details>

*Tags: synthesis, combinatorics, graph-theory, matroid-theory, interpretation*
