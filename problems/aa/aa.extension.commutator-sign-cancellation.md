# Project a commutator through an abelian homomorphism

*Easy · [Abstract algebra problems](index.md)*

Let sigma,tau be permutations of any finite set. Find the sign of the commutator $[\sigma,\tau]=\sigma\tau\sigma^{-1}\tau^{-1}$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested finite structural quantity only; no group-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The sign map is multiplicative.

</details>

<details>
<summary>Hint 2</summary>

The signs of each permutation and its inverse cancel.

</details>

<details>
<summary>Worked solution</summary>

Every commutator disappears under a homomorphism to an abelian group.

1. Multiplicativity gives sign of the commutator equal to sign(sigma)\*sign(tau)\*sign(sigma inverse)\*sign(tau inverse).
2. The inverse signs are the reciprocals of their respective signs, and all four scalars commute.
3. The product is one.

</details>
