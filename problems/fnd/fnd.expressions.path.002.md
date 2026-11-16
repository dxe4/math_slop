# Distribute a multiplier to every term

*Easy · [Foundations bridge](index.md)*

Expand $4(x-2)$ to a polynomial valid for every real $x$. Return the polynomial and its excluded-input set; this polynomial identity has no excluded real inputs.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"4*x-8","excluded":[]},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

The outside factor multiplies every term inside the parentheses.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign attached to the constant term when distributing.

</details>

<details>
<summary>Worked solution</summary>

Distribute a factor across the complete sum.

1. Distributivity gives $4(x-2)=4x+4(-2)$.
2. The constant product is $-8$, so the polynomial is $4x-8$.
3. These polynomial operations are defined for every real $x$, giving the empty excluded-input set.

</details>
