# Product and quotient rules: product rule expression

*Medium · [Calculus](index.md)*

Differentiate f(x)=($x+1$)$x^{2}$. Return a polynomial derivative and an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"3x^2+2x","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Differentiate one factor at a time while keeping the other.

</details>

<details>
<summary>Hint 2</summary>

Add the two product-rule contributions.

</details>

<details>
<summary>Worked solution</summary>

Simplifying yields $3x^{2}+2x$, valid on all real inputs.

1. The product rule gives $1\cdot x^{2}+(x+1)\cdot 2x$.
2. Simplifying yields $3x^{2}+2x$, valid on all real inputs.

</details>
