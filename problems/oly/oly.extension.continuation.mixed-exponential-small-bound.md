# Classify a bounded mixed-exponential equation

*Medium · [Original olympiad-style problems](index.md)*

How many ordered pairs of nonnegative integers $(x,y)$ satisfy $2^x+3^y=17$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

First separate the case $y=0$.

</details>

<details>
<summary>Hint 2</summary>

If $y\ge1$, reduction modulo three makes $x$ odd, and the size bound leaves only two odd exponents.

</details>

<details>
<summary>Worked solution</summary>

Combine the zero exponent, modular parity and finite size restriction.

1. For $y=0$, $2^x=16$, giving $(x,y)=(4,0)$.
2. For $y\ge1$, $2^x\equiv2\pmod3$, so $x$ is odd. Since $2^x<17$, the only possibilities are $x=1,3$.
3. The first would require $3^y=15$, impossible; the second gives $3^y=9$, hence $(3,2)$. There are exactly two pairs.

</details>
