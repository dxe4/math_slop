# Chain rule: differentiate composed square

*Medium · [Calculus](index.md)*

Differentiate $f(x)=(x^{2}+1)^{2}$. Return a polynomial expression and an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"4x^3+4x","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Identify the outer square and the inner expression separately.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the derivative of the inner expression.

</details>

<details>
<summary>Worked solution</summary>

Their product is $4x$($x^{2}+1$)=$4x^{3}+4x$.

1. The outer derivative contributes $2$($x^{2}+1$), and the inner derivative contributes $2x$.
2. Their product is $4x$($x^{2}+1$)=$4x^{3}+4x$.

</details>
