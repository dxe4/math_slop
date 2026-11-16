# Compute a derivative from a complete difference quotient

*Medium · [Real analysis](index.md)*

Using the derivative definition, find $f^{\prime}(2)$ for f(x)=x^3.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Expand the numerator at input 2+h before canceling h.

</details>

<details>
<summary>Hint 2</summary>

The difference quotient is only simplified for h nonzero.

</details>

<details>
<summary>Worked solution</summary>

The derivative comes from the limit of a punctured polynomial quotient.

1. For h nonzero, ((2+h)^3-8)/h=(12h+6h^2+h^3)/h.
2. The quotient simplifies to 12+6h+h^2.
3. Its limit as h tends to zero is twelve, which is the derivative value.

</details>
