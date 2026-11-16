# Determine a cubic splitting field and its automorphism count

*Medium · [Abstract algebra problems](index.md)*

Let L be the splitting field over Q of $X^3-2$. Find the order of Gal(L/Q), proving the splitting-field degree.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The real cube root has degree three by Eisenstein.

</details>

<details>
<summary>Hint 2</summary>

A primitive third root of unity is nonreal and satisfies a quadratic polynomial.

</details>

<details>
<summary>Worked solution</summary>

A real cubic radical field needs a genuine quadratic extension to split the polynomial.

1. Let alpha be the positive cube root of two and zeta a primitive cube root of unity. Eisenstein gives \[Q(alpha):Q\]=3, and L=Q(alpha,zeta).
2. The real field Q(alpha) cannot contain the nonreal zeta, so its quadratic polynomial remains of degree two over that field. Thus \[L:Q\]=6.
3. The polynomial is separable in characteristic zero and L is its splitting field, so L/Q is Galois with six automorphisms; its faithful permutation group on three roots is S3.

</details>
