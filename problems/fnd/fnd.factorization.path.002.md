# Extract a common polynomial factor

*Easy · [Foundations bridge](index.md)*

Complete the polynomial identity $2x^2+6x=2x(x+c)$ for every real $x$. Enter the exact integer $c$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Expand the proposed factorisation as an identity.

</details>

<details>
<summary>Hint 2</summary>

Match the coefficient of $x$; checking only $x=0$ would give no information about it.

</details>

<details>
<summary>Worked solution</summary>

A factorisation is an identity at all permitted inputs.

1. Expanding gives $2x(x+c)=2x^2+2cx$.
2. Matching the linear coefficients requires $2c=6$.
3. Therefore $c=3$, and expanding $2x(x+3)$ recovers both original terms.

</details>
