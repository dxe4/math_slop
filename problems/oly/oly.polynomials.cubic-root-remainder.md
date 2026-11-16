# Reduce a high exponent in a polynomial quotient

*Hard · [Original olympiad-style problems](index.md)*

The remainder of $x^{2026}+x^{2025}+1$ on division by $x^2+x+1$ is written ax+b. Enter (a,b).

```answer
{"answer":{"kind":"vector","expected":["1","2"],"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

In the quotient, x cubed equals one.

</details>

<details>
<summary>Hint 2</summary>

Reduce both exponents modulo three before collecting the remainder.

</details>

<details>
<summary>Worked solution</summary>

A quotient identity reduces enormous exponents to a linear representative.

1. Since $x^3-1=(x-1)(x^2+x+1)$, we have $x^3\equiv1$ modulo the divisor.
2. The exponents 2026 and 2025 have residues one and zero modulo three, giving remainder x+1+1.
3. Thus the remainder is x+2 and (a,b)=(1,2).

</details>
