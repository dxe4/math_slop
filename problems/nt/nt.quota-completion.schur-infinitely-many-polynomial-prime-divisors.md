# Construct a new prime divisor of polynomial values

*Hard · [Number theory](index.md)*

Let $P\in\mathbb{Z}[X]$ be nonconstant. Prove infinitely many distinct primes divide nonzero values P(n) with n≥0. Construct a contradiction from a proposed finite complete prime list, and keep the constructed argument nonnegative even if a selected value P(a) is negative.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a nonzero value c=P(a), then evaluate at a+c²Mt where M is the product of the proposed primes.

</details>

<details>
<summary>Hint 2</summary>

Divide the polynomial value by c; its quotient is an integer congruent to one modulo M and becomes large in absolute value.

</details>

<details>
<summary>Model proof</summary>

A polynomial congruence can evade every proposed prime simultaneously while preserving a nonnegative input.

1. Choose a≥0 with c=P(a)≠0, possible because a nonzero polynomial has only finitely many roots. Suppose all prime divisors of all nonzero nonnegative-input values lie in a finite list with product M, taking M=1 for an empty list.
2. For t≥1 put n=a+c²Mt≥0. Integer polynomial subtraction shows P(n)−P(a) is divisible by c²Mt, so P(n)=c\[1+cMt Q(t)\] for an integer polynomial Q(t).
3. The bracket is a nonconstant polynomial in t, since P(a+c²Mt)/c is nonconstant. For sufficiently large positive t its absolute value exceeds one, and it is congruent to 1 modulo every prime dividing M.
4. Choose a prime divisor q of that bracket. Then q∤M but q divides the nonzero value P(n), contradicting the supposed complete list. The squared c in the input step ensured positivity regardless of the sign of c.

**Self-assessment rubric**

- Selects a valid nonzero value and states a finite-list contradiction setup.
- Proves the factorization after the c²M input step.
- Uses unbounded polynomial values and the congruence-one quotient to force a prime outside the list.
- Keeps n nonnegative and ensures the chosen value is nonzero, including negative c.

</details>
