# Local linear approximation: construct affine local model

*Medium · [Calculus](index.md)*

For $f(x)=x^{3}$ at $a=2$, return its linearization as a polynomial with an empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"12x-16","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Use $f(a)+f^{\prime}(a) (x-a)$.

</details>

<details>
<summary>Hint 2</summary>

A cubic function and its tangent line agree in value and slope at a.

</details>

<details>
<summary>Worked solution</summary>

The linearization is $8+12$($x-2$)=$12x-16$. Its local accuracy is not an exact identity for $x^{3}$.

1. $f(2)=8$ and $f^{\prime}(2)=3\cdot 2^{2}=12$.
2. The linearization is $8+12$($x-2$)=$12x-16$. Its local accuracy is not an exact identity for $x^{3}$.

</details>
