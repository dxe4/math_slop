# Apply the gcd definition when one input is zero

*Easy · [Number theory](index.md)*

Find $\gcd (0,18)$, defined as the greatest positive integer d dividing both $0$ and $18$. Recall that $0 = d \times  0$ for every positive integer d.

```answer
{"answer":{"kind":"integer","expected":18,"checker_scope":"Checks one exact integer in this explicitly bounded calculation; does not certify the explanation."}}
```

<details>
<summary>Hint 1</summary>

Every positive candidate divides $0$ under the supplied equality.

</details>

<details>
<summary>Hint 2</summary>

Which positive divisor of $18$ is greatest?

</details>

<details>
<summary>Worked solution</summary>

The gcd definition remains usable at a zero input when the other input is nonzero.

1. A positive integer is a common divisor of $0$ and $18$ exactly when it divides $18$.
2. The greatest positive divisor of $18$ is 18, so $\gcd (0,18) = 18$.

</details>
