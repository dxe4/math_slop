# Classify a polynomial compatible with squaring

*Hard · [Original olympiad-style problems](index.md)*

Classify real polynomials satisfying $P(x^2)=P(x)^2$ for every real x.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Compare the least nonzero monomial of a nonzero polynomial.

</details>

<details>
<summary>Hint 2</summary>

If a next nonzero monomial exists, compare the first cross-term degree on the square side with the first new degree on the substituted side.

</details>

<details>
<summary>Model proof</summary>

Use the first gap in the polynomial support, not a degree equation alone.

1. The zero polynomial works. For a nonzero polynomial, let its least term be $ax^m$ with $a\ne0$. Comparing least terms gives $a=a^2$, so $a=1$.
2. If another term exists, let the next be $bx^k$ with $k>m$ and nonzero b. On the squared side the first new degree is $m+k$, with coefficient $2b$.
3. On the substituted side a term of that degree would come from degree $(m+k)/2$, strictly between m and k, where no term exists; if that degree is nonintegral it is absent as well. Contributions from two higher terms on the square side have degree at least $2k>m+k$.
4. This contradiction excludes every next term. Thus P is $x^m$ for a nonnegative integer m, or zero. Each monomial, including constant one, satisfies the identity.

**Self-assessment rubric**

- Determine the exact least coefficient and exponent.
- Locate a coefficient that cannot match under the two operations.
- Account for higher cross terms and possible nonintegral half degrees.
- Verify all monomials and the zero case.

</details>
