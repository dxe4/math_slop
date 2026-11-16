# Restrict prime factors of a Fermat-type number

*Hard · [Original olympiad-style problems](index.md)*

Let $n\ge1$ and let the prime $q$ divide $2^{2^n}+1$. Prove $q\equiv1\pmod{2^{n+1}}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The prime is odd, so the multiplicative order of two modulo it exists.

</details>

<details>
<summary>Hint 2</summary>

That order divides $2^{n+1}$ but does not divide $2^n$.

</details>

<details>
<summary>Model proof</summary>

Use the precise order of a residue whose half-power is negative one.

1. The number is odd, so $q\ne2$. Its defining congruence is $2^{2^n}\equiv-1\pmod q$, and negative one differs from one for odd $q$.
2. Squaring gives $2^{2^{n+1}}\equiv1$, so the order of two divides $2^{n+1}$. It cannot divide $2^n$ by the previous nonidentity.
3. Every divisor of that power of two is itself a power of two; the only remaining order is exactly $2^{n+1}$.
4. Fermat makes the order divide $q-1$, giving the required congruence. The argument proves this stated restriction without claiming every integer in the residue class is a factor.

**Self-assessment rubric**

- Exclude modulus two and retain negative one distinct from one.
- Determine the exact order from both exponent conditions.
- Use the order divisor of q-1 to conclude the residue restriction.

</details>
