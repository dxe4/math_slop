# A missing value does not prevent a limit

*Medium · [Calculus](index.md)*

For $f(x) = (x^{2} - 9)/(x - 3)$, find lim as x tends to $3$ of f(x). The formula is undefined at $x = 3$; you are asked for the limit, not the function value at that input.

```answer
{"answer":{"kind":"rational","expected":{"numerator":6,"denominator":1},"checker_scope":"Checks the stated exact numerical calculation only; does not certify an explanation or an independently written proof."}}
```

<details>
<summary>Hint 1</summary>

Factor the numerator and compare its factors with the denominator.

</details>

<details>
<summary>Hint 2</summary>

Cancellation is valid away from the excluded input. Use the simplified expression to find the nearby limiting value.

</details>

<details>
<summary>Worked solution</summary>

A limit concerns nearby function values. Cancelling a common factor can identify that limit without changing the original excluded input.

1. Factor $x^{2} - 9$ as $(x - 3) (x + 3)$.
2. For $x \neq  3$, the quotient equals $x + 3$.
3. As x tends to $3, x + 3$ tends to $6$; this is the limit although $f(3)$ is undefined.

</details>
