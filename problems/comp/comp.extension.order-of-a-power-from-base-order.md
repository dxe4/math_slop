# Apply the gcd rule for the order of a power

*Easy · [Computational arithmetic problems](index.md)*

Use ord(g^k)=ord(g)/gcd(ord(g),k). Given that 2 has order $8$ modulo 17, find the order of 4 modulo 17.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Four is the square of the supplied base two.

</details>

<details>
<summary>Hint 2</summary>

The exponent k in the order rule is two.

</details>

<details>
<summary>Worked solution</summary>

Taking a power reduces a cyclic order by a gcd factor.

1. Write 4=2^2, so k=2.
2. The order formula gives 8/gcd(8,2)=8/2.
3. Thus four has order four modulo seventeen.

</details>
