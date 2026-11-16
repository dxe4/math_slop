# Classify the two groups of order twenty-one

*Hard · [Abstract algebra problems](index.md)*

Prove there are exactly two isomorphism classes of groups of order $21$: one cyclic and one nonabelian. Explain why the two nontrivial actions in the semidirect construction give isomorphic groups.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Sylow forces the order-seven subgroup to be normal.

</details>

<details>
<summary>Hint 2</summary>

An order-three complement acts through Aut(C7), a cyclic group of order six.

</details>

<details>
<summary>Model proof</summary>

Sylow structure reduces classification to a small automorphism action, with equivalent generators identified.

1. The number of Sylow seven subgroups divides three and is one modulo seven, hence is one. Let N be this normal cyclic subgroup, and let P be a Sylow three subgroup. They intersect trivially and NP has order twenty-one, so G is their semidirect product.
2. An action P-&gt;Aut(N)=C6 is either trivial or has image the unique order-three subgroup. The trivial action gives C7 times C3, which is cyclic.
3. The two injective choices differ by inverting a generator of P, giving isomorphic semidirect products. A nontrivial action yields a genuinely nonabelian group, so the two types are distinct and exhaust the possibilities.

**Self-assessment rubric**

- Obtain the normal order-seven subgroup and complementary order-three subgroup.
- Classify the possible actions into the cyclic automorphism group.
- Identify equivalent nontrivial actions and distinguish the abelian type.

</details>
