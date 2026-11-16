# Derive abelianness and classify groups of order forty-five

*Medium · [Abstract algebra problems](index.md)*

Prove every group of order $45$ is abelian and has one of exactly two isomorphism types. Name those types.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Apply both Sylow congruence and divisor conditions for each prime.

</details>

<details>
<summary>Hint 2</summary>

Normal subgroups of coprime orders commute elementwise once their commutators lie in the intersection.

</details>

<details>
<summary>Model proof</summary>

Two forced normal Sylow factors reduce the group to known small abelian components.

1. The Sylow five count divides nine and is one modulo five, so is one. The Sylow three count divides five and is one modulo three, so is also one.
2. The normal subgroups of orders five and nine intersect trivially; their commutators lie in both, so they commute and G is their direct product.
3. The order-five factor is C5. A group of order nine is abelian and is C9 or C3 times C3, giving types C45 and C15 times C3. Their distinct element orders show they are not isomorphic.

**Self-assessment rubric**

- Use the exact allowed divisors and congruences to force both Sylow counts.
- Justify commuting normal coprime factors and the product decomposition.
- Classify the order-nine factor and distinguish the resulting types.

</details>
