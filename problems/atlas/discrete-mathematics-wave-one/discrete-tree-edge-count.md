# A forest count

*Difficulty 1 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 3 of 15*

A forest has 14 vertices and 5 connected components. How many edges does it have? State the theorem and its hypotheses rather than giving only a number.

<details>
<summary>Hint 1</summary>

Each component of a forest is a tree

</details>

<details>
<summary>Hint 2</summary>

Sum n_i-1 over the components

</details>

<details>
<summary>Worked solution</summary>

Every component is a finite tree. If its orders are n_1,...,n_5, component i has n_i-1 edges. Summing gives (n_1+...+n_5)-5=14-5=9 edges. The acyclicity hypothesis is essential: a graph with cycles and five components could have more edges.

**Answer.** 9 edges, using |E|=|V|-number of components for a finite forest.

</details>

*Tags: forest, tree, graph-theory*
