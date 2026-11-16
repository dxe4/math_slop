# Choose an identity to avoid large squaring

*Hard · [Foundations bridge](index.md)*

Find the exact value of $1001^2-999^2$ without separately calculating both large squares.

```answer
{"answer":{"kind":"integer","expected":"4000","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Look for a factorization of a difference of squares.

</details>

<details>
<summary>Hint 2</summary>

Compute the sum and difference of the two bases first.

</details>

<details>
<summary>Worked solution</summary>

A quadratic identity turns the large calculation into two small arithmetic operations.

1. The identity is $a^2-b^2=(a-b)(a+b)$.
2. The base difference is two and the base sum is two thousand.
3. The exact value is $2\cdot2000=4000$.

</details>
