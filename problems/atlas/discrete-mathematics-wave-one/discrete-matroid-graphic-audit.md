# Rank, circuits, and closure in a graphic matroid

*Difficulty 4 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 13 of 15*

For a graph consisting of triangle ABC and tail edge CD, treat edges as a graphic matroid. List the rank, bases, circuits, closure of {AB,BC}, and explain why CD is a coloop.

<details>
<summary>Hint 1</summary>

Independent edge sets are forests

</details>

<details>
<summary>Hint 2</summary>

A full-rank forest must connect D through CD

</details>

<details>
<summary>Worked solution</summary>

The graph is connected on four vertices, so graphic rank is 3. The unique circuit is {AB,BC,CA}. A basis is a three-edge spanning tree, so the bases are {CD,AB,BC}, {CD,AB,CA}, and {CD,BC,CA}. In subgraph (V,{AB,BC}), A and C are already connected, so adding CA does not raise rank; CD attaches D and does. Thus closure is {AB,BC,CA}. Every basis contains CD because it is the only edge incident with D; hence CD is a coloop.

**Answer.** Rank 3; three spanning-tree bases; triangle circuit; closure adds CA; CD lies in every basis.

</details>

*Tags: matroid-theory, graphic-matroid, closure*
