# Prove a connected covering can have no nonidentity deck transformations

*Hard · [Topology problems](index.md)*

For the three-sheeted cover of the two-loop rose with monodromy $a=(1\ 2\ 3)$ and $b=(1\ 2)$, prove the covering is connected and its deck group is trivial. Derive why a deck transformation acts on the labeled fiber by a permutation commuting with both monodromies; then prove that every such commuting permutation extends.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use lifted paths to compare a deck map with monodromy transport.

</details>

<details>
<summary>Hint 2</summary>

The centralizer of the 3-cycle consists of its powers; test which of those commute with the transposition.

</details>

<details>
<summary>Model proof</summary>

Connectedness is transitivity of transport, while deck symmetry requires commutation with every transport.

1. The 3-cycle alone acts transitively on the fiber, so the covering graph is connected. A deck map permutes the fiber above the base vertex. It sends a lift of any oriented generator edge to the lift of that same base edge beginning at the permuted vertex. Hence its fiber permutation commutes with a and b.
2. Conversely a fiber permutation commuting with both monodromies sends every lifted a-edge or b-edge to the corresponding edge beginning at the permuted vertex. The terminal endpoints agree because of commutation. Mapping edges homeomorphically with their base parametrizations gives a graph homeomorphism over the rose. Thus the deck group is exactly this simultaneous centralizer.
3. A permutation commuting with the 3-cycle is determined by the image of 1 and equals one of 1,a,a². Conjugating a by b gives a⁻¹, so neither nonidentity power commutes with b. The simultaneous centralizer is therefore the identity.
4. The connected covering has three points in each fiber but no deck transformation exchanges any two of them. It is thus nonregular, illustrating that connected coverings need not possess fiber-transitive deck symmetry.

**Self-assessment rubric**

- Uses transitivity of the specified monodromy to prove connectedness.
- Proves both directions between commuting fiber permutations and deck graph automorphisms.
- Computes the common centralizer and concludes triviality and nonregularity.

</details>
