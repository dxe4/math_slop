# Detect module zero and homomorphism isomorphisms locally

*Hard · [Abstract algebra problems](index.md)*

For any module M over a nonzero commutative unital R, prove M=0 iff $M_m=0$ for every maximal ideal m, without finite generation. Deduce a module homomorphism is an isomorphism if all its maximal localizations are isomorphisms. You may use exactness of localization.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A nonzero element has a proper annihilator, which lies in a maximal ideal.

</details>

<details>
<summary>Hint 2</summary>

Use kernels and cokernels for the homomorphism statement.

</details>

<details>
<summary>Model proof</summary>

One well-chosen local stalk detects every nonzero module element.

1. If M is nonzero, choose u nonzero. Its annihilator I is proper, so choose a maximal m containing I. If u/1 vanished in M\_m, some s outside m would satisfy s\*u=0, putting s in I contained in m, a contradiction.
2. Thus a nonzero M has at least one nonzero maximal localization; the reverse implication for M=0 is immediate and needs no finiteness assumption.
3. For a map phi, exactness makes the localized kernel and cokernel equal to those of each localized map. If all those maps are isomorphisms, both modules have all maximal localizations zero and hence are zero. Therefore phi is injective and surjective.

**Self-assessment rubric**

- Choose a maximal ideal containing the actual nonzero element's annihilator.
- Use the localization zero criterion to prove the element survives.
- Transfer local isomorphism to global isomorphism through the correct exact modules.

</details>
