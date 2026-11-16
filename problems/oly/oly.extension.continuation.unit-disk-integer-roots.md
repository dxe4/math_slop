# Force roots of unity from a bounded integer polynomial

*Hard · [Original olympiad-style problems](index.md)*

Let $P$ be a monic integer polynomial all of whose complex roots have modulus at most $1$. Prove every nonzero root is a root of unity. You may use that a symmetric integer polynomial in roots is an integer polynomial in their elementary symmetric functions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

First remove zero roots; the remaining nonzero constant term forces all remaining moduli to equal one.

</details>

<details>
<summary>Hint 2</summary>

For each positive k, form the monic polynomial whose roots are the kth powers of the original roots. Its bounded integer coefficients allow only finitely many possibilities.

</details>

<details>
<summary>Model proof</summary>

Use coefficient finiteness and a permutation of powered roots.

1. Factor off all zero roots. If no roots remain the claim is empty. Otherwise the absolute constant term is a positive integer equal to the product of root moduli, at most one; hence it is one and every remaining modulus is one.
2. For each k, let $P_k(X)=\prod_i(X-\alpha_i^k)$. Its coefficients are symmetric integer polynomials in the original roots, so the allowed fact makes them integers.
3. The coefficient of each degree has magnitude at most its corresponding binomial coefficient because every root modulus is one. Thus only finitely many integer coefficient lists occur, and $P_p=P_q$ for some positive $p<q$.
4. Equality of root multisets gives a permutation with $\alpha_i^p=\alpha_{\pi(i)}^q$. Iterating around the finite permutation cycle of length l gives $\alpha_i^{p^l}=\alpha_i^{q^l}$.
5. Nonzero roots can be canceled, yielding a positive power equal to one. Hence every nonzero root is a root of unity, without claiming every such polynomial is irreducible.

**Self-assessment rubric**

- Remove zeros and use the integer constant term correctly.
- Justify integer coefficients for every powered-root polynomial.
- Obtain actual bounded coefficient choices and a repeated polynomial.
- Derive a root-of-unity exponent even when roots repeat.

</details>
