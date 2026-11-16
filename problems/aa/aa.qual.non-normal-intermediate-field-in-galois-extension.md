# Explain why a Galois extension can contain a nonnormal intermediate field

*Medium · [Abstract algebra problems](index.md)*

Let L be the splitting field of $X^3-2$ over Q and E=Q(cuberoot(2)) using the real root. Prove L/Q is Galois but E/Q is not normal, and identify the subgroup explanation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The real intermediate field misses the nonreal roots of its irreducible cubic.

</details>

<details>
<summary>Hint 2</summary>

Its subgroup has order two inside S3.

</details>

<details>
<summary>Model proof</summary>

Normality of an intermediate extension depends on normality of the corresponding subgroup, not merely on the ambient extension.

1. The polynomial is separable in characteristic zero and L is its splitting field, so L/Q is Galois with group S3.
2. E lies in the real numbers and contains one root of the irreducible cubic but not its two nonreal roots. Thus E/Q is not normal.
3. The intermediate degree is three, so Gal(L/E) has order two; such a subgroup is not normal in S3. This is exactly the normality obstruction in Galois correspondence.

**Self-assessment rubric**

- Verify the ambient splitting field is a finite Galois extension.
- Use irreducibility and realness to prove the intermediate extension is nonnormal.
- Identify the order-two subgroup and connect its nonnormality with the field result.

</details>
