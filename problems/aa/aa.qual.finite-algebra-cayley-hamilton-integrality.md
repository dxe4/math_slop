# Prove integrality from a finite-dimensional multiplication representation

*Medium · [Abstract algebra problems](index.md)*

Let A be a nonzero finite-dimensional commutative unital algebra over a field K, with dimension $d$. Prove every a in A satisfies a monic polynomial over K of degree at most d, by using multiplication on A. Do not assume A has no zero divisors.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Left multiplication by the chosen element is a linear endomorphism of a d-dimensional vector space.

</details>

<details>
<summary>Hint 2</summary>

Apply its characteristic-polynomial identity to the identity element of the algebra.

</details>

<details>
<summary>Model proof</summary>

A matrix identity for multiplication produces an integral equation without requiring cancellation in the algebra.

1. For a in A define M\_a(v)=av, a K-linear operator on the d-dimensional vector space A.
2. Its characteristic polynomial P is monic of degree d and satisfies P(M\_a)=0 by Cayley-Hamilton.
3. Applying this operator equation to 1 gives P(a)=0. This proves the claimed degree bound and integrality without dividing by a or excluding zero divisors.

**Self-assessment rubric**

- Define the finite-dimensional K-linear multiplication operator.
- Use a monic characteristic polynomial and the Cayley-Hamilton identity.
- Convert the operator identity into an element equation without a domain assumption.

</details>
