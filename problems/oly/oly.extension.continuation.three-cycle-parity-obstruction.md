# A rearrangement that three-cycles cannot achieve

*Medium · [Original olympiad-style problems](index.md)*

Seven distinct tokens initially occur in order $1,2,3,4,5,6,7$. A move chooses any three positions and cyclically permutes their tokens in either direction. Prove that the reversed order $7,6,5,4,3,2,1$ is unreachable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

A three-cycle is the composition of two transpositions, so it preserves permutation parity.

</details>

<details>
<summary>Hint 2</summary>

The reversal has one inversion for every pair of positions.

</details>

<details>
<summary>Model proof</summary>

Parity is preserved by every allowed move and differs between the two specified states.

1. The identity arrangement is even. A cyclic move on three positions can be written as two swaps, whether the cycle runs forward or backward. Consequently every finite sequence of allowed moves yields an even permutation.
2. In the reversal, each of the $\binom72=21$ pairs is inverted. Its sign is $(-1)^{21}=-1$, so it is odd.
3. Thus reversal cannot be reached. The argument proves an obstruction for this move set; it does not assert that parity alone characterizes every restricted variant of token movement.

**Self-assessment rubric**

- Express either allowed three-cycle using two swaps.
- Count the 21 inversions of the target.
- Compare initial and final parity under arbitrary finite move sequences.

</details>
