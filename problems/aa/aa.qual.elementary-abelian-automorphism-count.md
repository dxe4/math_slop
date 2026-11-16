# Count ordered independent images in an elementary abelian group

*Medium · [Abstract algebra problems](index.md)*

Find the order of $\operatorname{Aut}(C_3\times C_3\times C_3)$.

```answer
{"answer":{"kind":"integer","expected":"11232","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A group homomorphism is linear over the prime field for this elementary abelian group.

</details>

<details>
<summary>Hint 2</summary>

An automorphism sends a fixed ordered basis to an ordered basis.

</details>

<details>
<summary>Worked solution</summary>

Automorphism counting becomes a sequence of exclusions of spans.

1. View the group as a three-dimensional vector space over F3; every additive homomorphism respects its prime-field scalars.
2. The first basis image has twenty-six choices; the second avoids its three-element span, leaving twenty-four choices; the third avoids the resulting nine-element plane, leaving eighteen.
3. Their product is 26 times 24 times 18, or 11232 automorphisms.

</details>
