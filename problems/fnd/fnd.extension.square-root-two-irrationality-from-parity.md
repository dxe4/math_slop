# Prove irrationality using a reduced fraction and parity

*Hard · [Foundations bridge](index.md)*

Prove $\sqrt2$ is irrational. Use the nonnegative real square root, and justify why an integer with an even square must be even before applying that fact.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

An odd integer has the form 2k+1; expand its square.

</details>

<details>
<summary>Hint 2</summary>

If √2 were p/q in lowest terms, the equation p²=2q² would force both p and q even.

</details>

<details>
<summary>Model proof</summary>

A least-terms rational representation conflicts with the parity forced by the squared equation.

1. If n=2k+1 is odd, then n²=4k²+4k+1 is odd. By contrapositive, an integer with even square is even.
2. Suppose √2=p/q with positive integers p,q in lowest terms. Squaring gives p²=2q², so p² is even and therefore p=2r for some integer r.
3. Substituting gives 4r²=2q², or q²=2r². Hence q is even by the same parity fact.
4. Both p and q are divisible by 2, contradicting lowest terms. Therefore no rational representation exists, and √2 is irrational.

**Self-assessment rubric**

- Derives the even-square implication by expanding an arbitrary odd integer’s square.
- Assumes a rational representation with positive denominator and coprime numerator and denominator.
- Uses the squared equation to force both terms even and concludes irrationality.

</details>
