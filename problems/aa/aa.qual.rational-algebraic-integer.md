# Prove the rational algebraic integers are exactly the ordinary integers

*Medium · [Abstract algebra problems](index.md)*

Prove that if a rational number $r$ satisfies a monic polynomial with integer coefficients, then r is an integer. Include the zero case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write the rational in lowest terms with a positive denominator.

</details>

<details>
<summary>Hint 2</summary>

Clear the monic equation by the full denominator power, then compare divisibility by that denominator.

</details>

<details>
<summary>Model proof</summary>

Monicity prevents a reduced rational denominator from surviving an integral equation.

1. Write r=a/b with integers a,b, b&gt;0 and gcd(a,b)=1; zero has b=1 in lowest terms.
2. If r satisfies a monic degree-n integer equation, multiplying by b^n shows a^n is divisible by b, since every other term contains b.
3. Coprimality makes gcd(a^n,b)=1, forcing b=1. Conversely every integer satisfies a monic linear integer polynomial, so the characterization is exact.

**Self-assessment rubric**

- Choose a reduced fraction and account for zero.
- Clear denominators and isolate the divisibility forced by the leading coefficient one.
- Use the reduced fraction to force denominator one and state the converse.

</details>
