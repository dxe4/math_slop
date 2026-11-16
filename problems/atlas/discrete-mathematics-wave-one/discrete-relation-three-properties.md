# A symmetric relation that is not transitive

*Difficulty 1 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 1 of 15*

On the integers define aRb when |a-b| is at most 1. Determine whether R is reflexive, symmetric, antisymmetric, and transitive. Give an explicit witness for every failed property.

<details>
<summary>Hint 1</summary>

Test the diagonal for reflexivity and reverse a pair for symmetry

</details>

<details>
<summary>Hint 2</summary>

Use 0, 1, and 2 to test a two-step chain

</details>

<details>
<summary>Worked solution</summary>

Reflexivity holds because |a-a|=0≤1 for every integer a. Symmetry holds because |a-b|=|b-a|. Antisymmetry fails: 0R1 and 1R0, but 0≠1. Transitivity fails: 0R1 and 1R2, while |0-2|=2>1, so 0 is not related to 2. The relation is therefore neither an equivalence relation nor a partial order, despite having two of the commonly tested properties.

**Answer.** Reflexive and symmetric; not antisymmetric (0,1) and not transitive (0,1,2).

</details>

*Tags: relation, counterexample, sets-relations*
