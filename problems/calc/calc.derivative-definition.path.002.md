# Derivative from a difference quotient: cubic quotient entries

*Medium · [Calculus](index.md)*

For $f(x)=x^{3}$ at $x=1$, write the difference quotient as $A+Bh+Ch^{2}$ for $h\neq 0$. Return A, B, C, and limit.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"A":"3","B":"3","C":"1","limit":"3"},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

Expand $(1+h)^{3}$ completely.

</details>

<details>
<summary>Hint 2</summary>

The constant term remains when h tends to zero.

</details>

<details>
<summary>Worked solution</summary>

Dividing by nonzero h gives $3+3h+h^{2}$, which tends to $3$.

1. $(1+h)^{3}-1=3h+3h^{2}+h^{3}$.
2. Dividing by nonzero h gives $3+3h+h^{2}$, which tends to $3$.

</details>
