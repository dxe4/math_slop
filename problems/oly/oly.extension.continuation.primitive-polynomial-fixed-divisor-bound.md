# Bound a primitive polynomial’s universal divisor sharply

*Hard · [Original olympiad-style problems](index.md)*

Let P be a primitive integer polynomial of degree d, meaning its monomial coefficients have gcd one. If a positive integer D divides $P(n)$ for every integer n, prove $D\mid d!$. Show the bound is attained by a primitive degree-d polynomial for every $d\ge1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Forward differences at zero are all divisible by D.

</details>

<details>
<summary>Hint 2</summary>

Express P in the binomial basis, then multiply by d factorial to make each basis polynomial have integer coefficients.

</details>

<details>
<summary>Model proof</summary>

Combine integer-valued interpolation with coefficient primitivity.

1. Every forward difference $c_k=\Delta^kP(0)$ is an integer combination of values, hence divisible by D.
2. The Newton identity $P(x)=\sum_{k=0}^dc_k\binom{x}{k}$ follows from the forward-difference basis and degree matching. Multiplying by d factorial makes every coefficient in each binomial term integral.
3. Consequently D divides d factorial times every monomial coefficient of P. Because those coefficients have gcd one, an integer combination of them is one, so D divides d factorial.
4. The monic polynomial $x(x-1)\cdots(x-d+1)$ is primitive. Its value at every integer is d factorial times the integer binomial value, including negative inputs.
5. At input d its value is exactly d factorial, so its positive universal divisor is exactly that number. This proves sharpness.

**Self-assessment rubric**

- Transfer universal divisibility to each Newton coefficient.
- Show multiplication by d factorial clears every binomial coefficient denominator.
- Use coefficient gcd one to obtain the exact divisibility conclusion.
- Verify primitivity, all-integer divisibility and an attaining value.

</details>
