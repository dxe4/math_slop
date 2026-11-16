# Use evaluation to find a polynomial remainder

*Medium · [Foundations bridge](index.md)*

Find the constant remainder when $P(x)=x^3-2x+5$ is divided by x−2 over the real numbers.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Write P(x)=(x−2)Q(x)+r.

</details>

<details>
<summary>Hint 2</summary>

Evaluate at the input that makes the divisor vanish.

</details>

<details>
<summary>Worked solution</summary>

Evaluation isolates the remainder because the quotient term disappears.

1. Polynomial division has the form P(x)=(x−2)Q(x)+r with constant r.
2. At x=2 this gives r=P(2).
3. The value is 8−4+5=9, so the remainder is 9.

</details>
