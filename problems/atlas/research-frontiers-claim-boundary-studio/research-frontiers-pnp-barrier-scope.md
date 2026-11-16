# A proof barrier has hypotheses too

*Difficulty 4 of 5 · [Research frontiers claim-boundary studio](index.md) · exercise 6 of 12*

A critique rejects a proposed P-versus-NP proof solely by saying `relativization and natural proofs show P versus NP can never be proved.` Explain why the critique is invalid and how to audit the proposal responsibly.

<details>
<summary>Hint 1</summary>

Barrier theorems delimit families of techniques rather than all mathematical reasoning

</details>

<details>
<summary>Hint 2</summary>

Test whether the proposal actually satisfies the barrier's definitions and assumptions

</details>

<details>
<summary>Worked solution</summary>

Relativization shows that a relativizing technique cannot distinguish the unrelativized classes because oracle worlds realize both outcomes. Each further barrier has its own formal scope: the natural-proofs result is conditional on its stated pseudorandomness or circuit-hardness assumption and on its definitions of constructivity and largeness, while algebrization concerns a specified algebraic-oracle model. None proves that no proof exists. Audit the proposal's formal model, class definitions, reduction or lower-bound target, uniformity, quantifiers, and correctness first. Then determine whether its key steps relativize, are constructive and large in the natural-proofs sense, or algebrize. If so, identify the exact contradiction with the barrier theorem; if not, the barrier label is irrelevant. Escaping a barrier is necessary for some approaches, never sufficient for correctness.

**Answer.** Barriers rule out specified technique families under stated assumptions, not all proofs; show exactly that the proposal falls inside one before invoking it.

</details>

*Tags: p-versus-np, proof-barriers, claim-boundary*
