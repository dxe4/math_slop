# Chain rule: differentiate affine cube

*Medium · [Calculus](index.md)*

Differentiate $f(x)=(3x-1)^{3}$. Return a polynomial expression and an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"81x^2-54x+9","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the outer cube.

</details>

<details>
<summary>Hint 2</summary>

The inner derivative is $3$, not $1$.

</details>

<details>
<summary>Worked solution</summary>

Expanding gives $81x^{2}-54x+9$, defined for all real x.

1. The chain rule gives $3$($3x-1$)²·$3=9$($3x-1$)².
2. Expanding gives $81x^{2}-54x+9$, defined for all real x.

</details>
