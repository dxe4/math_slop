# Construct and prove unique coherent simple-root lifts

*Hard · [Number theory](index.md)*

Let f∈Z\[X\], p prime, and f(r₁)≡0 mod p with $f^{\prime}(r_1)\not\equiv0\pmod p$. Prove there is a unique compatible family of residues r\_k mod pᵏ reducing to r₁ and satisfying f(r\_k)≡0 mod pᵏ. Derive the single-digit lifting rule and prove its uniqueness at each stage.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Every lift of a residue mod pᵏ has the form r\_k+t pᵏ with t mod p.

</details>

<details>
<summary>Hint 2</summary>

Taylor expansion modulo p^{k+1} leaves only the constant and linear terms.

</details>

<details>
<summary>Model proof</summary>

A nonzero derivative converts the next digit of a nonlinear root into one invertible linear congruence.

1. Suppose a canonical representative r\_k is already a root modulo pᵏ. Its p possible lifts modulo p^{k+1} are r\_k+t pᵏ with 0≤t&lt;p. Polynomial expansion gives f(r\_k+t pᵏ)≡f(r\_k)+t pᵏ f′(r\_k) mod p^{k+1}, since all terms of degree at least two contain p^{2k}.
2. Write f(r\_k)=pᵏc. The lifted root condition is c+t f′(r\_k)≡0 mod p. Because r\_k≡r₁ mod p, its derivative remains nonzero mod p, so t is uniquely −c\[f′(r\_k)\]⁻¹ mod p.
3. Starting from the supplied r₁, this gives existence of a root at every level, and choosing the canonical t keeps r\_{k+1} reducing to r\_k.
4. Any other compatible family starting at r₁ must agree at level one, then at each following level because the next digit is unique. Thus the entire compatible family is unique. No claim is made about unrelated roots in different residue classes modulo p.

**Self-assessment rubric**

- Lists exactly the p possible next-digit lifts.
- Justifies discarding quadratic and higher terms at the stated modulus.
- Solves the next-digit equation and keeps derivative invertibility at every level.
- Proves existence and uniqueness of the full compatible family without excluding other base root classes.

</details>
