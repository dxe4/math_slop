# Find every root after factoring

*Medium · [Foundations bridge](index.md)*

Find every real solution of $x^{2} - 5x + 6 = 0$. Return the solution set.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,3],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

Look for two numbers whose sum is five and product is six.

</details>

<details>
<summary>Hint 2</summary>

Set each factor of the resulting product equal to zero.

</details>

<details>
<summary>Worked solution</summary>

Factorization turns a quadratic equation into simpler zero conditions.

1. Factor $x^{2} - 5x + 6 = (x - 2) (x - 3)$.
2. The product is zero exactly when $x = 2$ or $x = 3$; return $\{2,3\}$.

</details>
