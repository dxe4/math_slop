# Use complex conjugation and a prime cycle to force a full symmetric group

*Hard · [Abstract algebra problems](index.md)*

Let f be an irreducible degree-five polynomial over Q with exactly $3$ real roots. Find the order of its Galois group, proving that the stated real-root count is enough.

```answer
{"answer":{"kind":"integer","expected":"120","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Complex conjugation exchanges the one nonreal conjugate pair.

</details>

<details>
<summary>Hint 2</summary>

A transitive five-point group has order divisible by five and hence contains a five-cycle.

</details>

<details>
<summary>Worked solution</summary>

A five-cycle and the conjugates of one transposition generate the full root permutation group.

1. The Galois group is transitive on five distinct roots. Complex conjugation fixes the three real roots and swaps the other two, so it is a transposition.
2. Orbit-stabilizer makes five divide the group order; Cauchy gives a five-cycle c. Conjugating the transposition by powers of c gives swaps along all translates of one nonzero step in the cyclic five-point labeling.
3. That edge graph is connected because every nonzero step generates the additive group modulo five. Edge transpositions of a connected graph generate all permutations, so the Galois group is S5 and has order 120.

</details>
