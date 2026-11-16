# Characterize a unique involution without falsely forcing full cyclicity

*Medium · [Abstract algebra problems](index.md)*

Let A be a finite abelian group of even order. Prove A has exactly one element of order $2$ if and only if its two-primary component is cyclic. Give an example showing A itself need not be cyclic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Decompose the two-primary component into nontrivial cyclic factors.

</details>

<details>
<summary>Hint 2</summary>

Count elements killed by two, including the identity before subtracting it.

</details>

<details>
<summary>Model proof</summary>

The number of independent two-primary factors controls involutions, independently of odd-primary structure.

1. Write the two-primary component as a product of r nontrivial cyclic groups of two-power orders. Each factor has two elements killed by two, so the full component has 2^r such elements.
2. The odd-primary component contributes only its identity to elements killed by two. Hence A has 2^r-1 involutions, equal to one exactly when r=1, which means its two-primary component is cyclic.
3. The group C2 times C3 times C3 has one involution but is not cyclic, since its odd-primary component is not cyclic.

**Self-assessment rubric**

- Separate the two-primary and odd-primary parts with the correct even-order hypothesis.
- Count all elements killed by two and remove the identity.
- Characterize r=1 and verify a noncyclic whole-group example.

</details>
