# Recognize an impossible equation before dividing

*Easy · [Foundations bridge](index.md)*

How many real x solve $0x=5$? Return the number of solutions.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Multiplying any real number by zero gives the same result.

</details>

<details>
<summary>Hint 2</summary>

Compare that result with the right side.

</details>

<details>
<summary>Worked solution</summary>

A zero coefficient does not permit division by the coefficient.

1. For every real x the left side is zero.
2. The equality 0=5 is false.
3. There are no solutions, so the requested count is 0.

</details>
