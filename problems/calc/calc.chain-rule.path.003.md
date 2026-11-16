# Chain rule: compose supplied derivative data

*Medium · [Calculus](index.md)*

Differentiable functions satisfy $g(2)=5, g^{\prime}(2)=-3$, and $f^{\prime}(5)=4$. Find the derivative of f(g(x)) at $x=2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-12,"denominator":1},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

The outer derivative is evaluated at $g(2)$.

</details>

<details>
<summary>Hint 2</summary>

The chain rule multiplies the two relevant derivative values.

</details>

<details>
<summary>Worked solution</summary>

Multiply by $g^{\prime}(2)=-3$ to get $-12$.

1. Evaluate the outer derivative at the inner output: $f^{\prime}(g(2))=f^{\prime}(5)=4$.
2. Multiply by $g^{\prime}(2)=-3$ to get $-12$.

</details>
