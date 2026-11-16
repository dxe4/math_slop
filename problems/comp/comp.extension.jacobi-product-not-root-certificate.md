# Multiply local characters without claiming a composite-modulus root

*Easy · [Computational arithmetic problems](index.md)*

Use the Jacobi product rule $(5/21)=(5/3)(5/7)$. Given both displayed Legendre factors are -1, compute (5/21). This asks for the Jacobi symbol, not for a square root modulo 21.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Multiply the two supplied signs.

</details>

<details>
<summary>Hint 2</summary>

A composite-modulus Jacobi value does not itself assert existence of a square root.

</details>

<details>
<summary>Worked solution</summary>

Jacobi multiplication can produce a positive symbol even when local square conditions fail.

1. The two supplied character values multiply to one.
2. Hence the requested Jacobi symbol is one.
3. Nevertheless five is a nonsquare modulo three, so this positive Jacobi value must not be treated as a square-root certificate modulo twenty-one.

</details>
