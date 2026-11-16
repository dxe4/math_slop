# Which way does hardness travel?

*Difficulty 2 of 5 · [Research frontiers claim-boundary studio](index.md) · exercise 5 of 12*

A polynomial map reduces a new decision language `X` to SAT, and the author concludes that `X` is NP-hard because SAT is NP-complete. Correct the conclusion and state what reduction would establish NP-hardness of X.

<details>
<summary>Hint 1</summary>

If A reduces to B, an algorithm for B solves A

</details>

<details>
<summary>Hint 2</summary>

Hardness transfers toward the reduction target

</details>

<details>
<summary>Worked solution</summary>

Because `SAT` belongs to NP and NP is closed downward under polynomial many-one reductions, `X <=p SAT` proves that `X` belongs to NP. Concretely, an NP verifier for X computes the reduction `f(x)` and uses a satisfying assignment for `f(x)` as its certificate. This direction does not make X NP-hard. To transfer SAT's NP-hardness to X, prove `SAT <=p X`: map every SAT instance to an X instance while preserving yes and no answers. Then every NP language reduces through SAT to X; together with `X in NP`, this would make X NP-complete. Direction and answer preservation must be explicit.

**Answer.** `X <=p SAT` proves `X in NP`, not NP-hardness. NP-hardness requires `SAT <=p X` (or another known NP-hard language reducing to X); with membership, that makes X NP-complete.

</details>

*Tags: p-versus-np, reductions, np-completeness*
