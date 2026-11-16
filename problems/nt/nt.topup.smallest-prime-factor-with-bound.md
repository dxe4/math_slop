# Find a smallest prime factor with a complete trial bound

*Medium · [Number theory](index.md)*

Find the smallest prime factor of $221$. Explain in the model solution why smaller prime candidates are exhausted.

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The square root is less than fifteen.

</details>

<details>
<summary>Hint 2</summary>

Test primes in increasing order, not every positive integer.

</details>

<details>
<summary>Worked solution</summary>

A prime factor search can be bounded and justified without exhaustive large calculations.

1. The integer is odd, its digit sum is five, and it does not end in zero or five, excluding two, three and five.
2. Division by seven leaves four since $7\cdot31=217$, and division by eleven leaves one since $11\cdot20=220$.
3. Finally $221=13\cdot17$, so thirteen is the smallest prime factor.

</details>
