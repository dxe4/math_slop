# Build unique polynomial factorization from primitive content control

*Hard · [Abstract algebra problems](index.md)*

Let R be a UFD with fraction field K. Prove the product of two nonzero primitive polynomials is primitive, prove content multiplicativity up to a unit, and deduce $R[x]$ is a UFD by comparing factorizations with K\[x\].

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A prime dividing every product coefficient would make a product of two nonzero reductions vanish.

</details>

<details>
<summary>Hint 2</summary>

Clear denominators and remove contents from factors over K before handling the remaining scalar.

</details>

<details>
<summary>Model proof</summary>

Primewise content control is the bridge from field factorization to ring factorization.

1. If a prime pi divided all coefficients of a product of two primitive polynomials, their nonzero reductions in the domain(R/(pi))\[x\] would multiply to zero, impossible. Hence their product is primitive.
2. Write each polynomial as its content times a primitive part. The first result gives content(f\*g) associated to content(f)\*content(g). Every polynomial over K may be multiplied by a nonzero scalar to become primitive over R, by clearing denominators and dividing a coefficient gcd.
3. Factor a primitive polynomial in the UFD K\[x\] and normalize every factor to a primitive R\[x\] polynomial. In the resulting equality the remaining K scalar has valuation zero at every prime of R, because both sides have primitive coefficient content; it is therefore a unit of R. This gives existence of factorization in R\[x\], together with the factorization of the original content in R.
4. For uniqueness, positive-degree primitive irreducibles correspond to irreducibles in K\[x\] by the same normalization argument, so their factors are unique up to R units. Constant prime factors are determined by the content. Combining the two proves R\[x\] is a UFD.

**Self-assessment rubric**

- Use prime reduction in a domain to exclude a common product-content prime.
- Control denominators and the residual fraction-field scalar.
- Separate primitive polynomial factors from constant content factors in both directions.

</details>
