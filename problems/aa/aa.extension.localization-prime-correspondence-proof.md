# Prove both directions of localized prime correspondence

*Hard · [Abstract algebra problems](index.md)*

Let R be commutative unital and S multiplicative with1 in S and0 not in S. Prove primes of $S^{-1}R$ correspond bijectively, by contraction and extension, to primes P of R disjoint from S. Include zero-divisor issues in the contraction equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For a disjoint prime P, localize the domain R/P.

</details>

<details>
<summary>Hint 2</summary>

An element belongs to the contraction of S^-1 P iff some denominator multiplier sends it into P.

</details>

<details>
<summary>Model proof</summary>

Primality removes the denominator witnesses without pretending the localization map is injective.

1. For P disjoint from S, the quotient(S^-1 R)/(S^-1 P) is the localization of the domain R/P at nonzero denominator images, hence a nonzero domain. Thus S^-1 P is prime. If a/1 lies in S^-1 P, some s in S has s\*a in P; since s is not in P, primality gives a in P. This proves contraction equals P.
2. For a prime Q of S^-1 R, its contraction P is prime and avoids S because denominator images are units. Every fraction a/s belongs to Q exactly when a/1 does, since s is a unit.
3. Consequently Q consists precisely of fractions with numerator in P, namely S^-1 P. The two constructions are inverse, with the witness argument valid even when original ring elements are zero divisors.

**Self-assessment rubric**

- Use the localized quotient domain and retain nonzero denominators.
- Handle the actual denominator witness rather than cancelling in R.
- Recover every localized prime and prove bijectivity.

</details>
