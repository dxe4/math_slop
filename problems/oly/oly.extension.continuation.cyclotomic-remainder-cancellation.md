# Use a root-of-unity relation to cancel a remainder

*Medium · [Original olympiad-style problems](index.md)*

Find the remainder when $x^{100}+x^{50}+1$ is divided by $x^2+x+1$. Enter the constant remainder.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The divisor implies $x^3\equiv1$ in the polynomial quotient.

</details>

<details>
<summary>Hint 2</summary>

Reduce the two exponents modulo three and combine the resulting terms.

</details>

<details>
<summary>Worked solution</summary>

Use the cyclotomic relation as a complete polynomial congruence.

1. The identity $x^3-1=(x-1)(x^2+x+1)$ gives $x^3\equiv1$ modulo the divisor.
2. The exponents reduce to one and two, so the numerator is congruent to $x+x^2+1$.
3. That is the divisor itself, hence the unique remainder of degree below two is zero.

</details>
