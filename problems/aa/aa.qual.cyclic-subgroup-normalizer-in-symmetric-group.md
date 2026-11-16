# Count conjugates of a cyclic subgroup through its normalizer

*Medium · [Abstract algebra problems](index.md)*

In $S_8$, let sigma=(1 2 3)(4 5 6)(7 8) and H=&lt;sigma&gt;. How many subgroups of S8 are conjugate to H? Use the normalizer, not merely the centralizer of sigma.

```answer
{"answer":{"kind":"integer","expected":"560","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

First find the centralizer order from the repeated cycle lengths.

</details>

<details>
<summary>Hint 2</summary>

The normalizer can also send the generator to its inverse; verify that this second automorphism is realized.

</details>

<details>
<summary>Worked solution</summary>

Normalizer conjugation counts cyclic subgroups, while centralizer conjugation counts individual generators.

1. The permutation has order six and centralizer order 3^2 times 2! times 2, or thirty-six: rotations of both three-cycles, their interchange, and the two-cycle factor.
2. Conjugation maps the normalizer into Aut(H), which has order two, with kernel the centralizer. A permutation reversing both three-cycles and fixing the two-cycle support sends sigma to its inverse, so both automorphisms occur and the normalizer has order seventy-two.
3. The subgroup conjugacy class therefore has size 8!/72=40320/72=560.

</details>
