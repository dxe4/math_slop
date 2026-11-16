# Prove the discriminant criterion for an irreducible cubic

*Medium · [Abstract algebra problems](index.md)*

For an irreducible cubic over Q with discriminant D, prove its Galois group is A3 when $D$ is a rational square and S3 otherwise. Use the action on a Vandermonde product of the three roots.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

An odd root permutation changes the sign of the Vandermonde product.

</details>

<details>
<summary>Hint 2</summary>

A transitive subgroup of S3 is either A3 or S3.

</details>

<details>
<summary>Model proof</summary>

The discriminant square root detects whether all root permutations are even.

1. In the splitting field, let delta be the product of root differences in one fixed order. It is nonzero, has square D, and an automorphism multiplies it by the sign of its root permutation.
2. If D is a rational square, delta is rational up to sign and is fixed by every automorphism, so all permutations are even. Conversely, if all are even, delta is fixed by the full Galois group and hence lies in Q, making D a rational square.
3. Irreducibility gives a transitive subgroup of S3, whose only possibilities are A3 and S3. The even-permutation criterion therefore distinguishes them exactly.

**Self-assessment rubric**

- Define the nonzero discriminant square root and its sign transformation law.
- Prove both directions between a rational discriminant square and even automorphisms.
- Use irreducibility and the two transitive cubic subgroup possibilities.

</details>
