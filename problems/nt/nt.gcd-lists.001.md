# Find the greatest common divisor

*Easy · [Number theory](index.md)*

Find $\gcd (30,42)$, meaning the greatest positive integer dividing both numbers.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Checks one exact integer in this explicitly bounded calculation; does not certify the explanation."}}
```

<details>
<summary>Hint 1</summary>

List positive divisors of each number or use factor pairs.

</details>

<details>
<summary>Hint 2</summary>

The requested number must divide both inputs, and no larger common divisor may exist.

</details>

<details>
<summary>Worked solution</summary>

A gcd is the greatest common divisor, not merely any common divisor.

1. The positive divisors of $30$ are $\{1,2,3,5,6,10,15,30\}$; those of $42$ are $\{1,2,3,6,7,14,21,42\}$.
2. Their common positive divisors are $\{1,2,3,6\}$, whose largest member is $6$.

</details>
