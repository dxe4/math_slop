# Product and quotient rules: preserve original derivative domain

*Medium · [Calculus](index.md)*

For $f(x)=(x^{2}-9)/(x-3)$, return its derivative as a simplified polynomial and the original excluded-input set. Do not extend f at $x=3$.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"1","excluded":[3]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Factor the numerator and retain the original domain.

</details>

<details>
<summary>Hint 2</summary>

Cancelling a factor does not create a derivative at an undefined input.

</details>

<details>
<summary>Worked solution</summary>

The original function is undefined at $3$ and has no derivative there; retain excluded input $\{3\}$.

1. For x≠3, f(x)=x+3, so its derivative there is $1$.
2. The original function is undefined at $3$ and has no derivative there; retain excluded input $\{3\}$.

</details>
