# Cancel a common variable factor

*Medium · [Foundations bridge](index.md)*

Simplify $(x^{2} + 3x)/x$ over the real numbers and state every excluded real input.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"x+3","excluded":["0"]},"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

Factor the numerator before cancelling.

</details>

<details>
<summary>Hint 2</summary>

The original denominator is zero at one real input.

</details>

<details>
<summary>Worked solution</summary>

A simplified polynomial can inherit a hole from a quotient.

1. The original domain excludes $x = 0$.
2. For $x \neq  0$, the quotient is $x(x+3)/x = x+3$.
3. Return $x+3$ with excluded set $\{0\}$.

</details>
