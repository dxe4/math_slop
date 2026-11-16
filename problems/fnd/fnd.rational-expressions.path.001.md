# Cancel a difference of squares

*Medium · [Foundations bridge](index.md)*

Simplify $(x^{2} - 16)/(x - 4)$ over the real numbers and state every excluded real input.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"x+4","excluded":["4"]},"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

First record where the denominator vanishes.

</details>

<details>
<summary>Hint 2</summary>

Factor the numerator as a difference of squares.

</details>

<details>
<summary>Worked solution</summary>

Cancellation preserves the original restriction.

1. The original denominator vanishes at $x = 4$.
2. For $x \neq  4, (x^{2}-16)/(x-4) = (x-4) (x+4)/(x-4) = x+4$.
3. Return the expression $x+4$ and excluded set $\{4\}$.

</details>
