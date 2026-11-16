# Sum all decimal digit sums

*Medium · [Computational arithmetic problems](index.md)*

Let $s(n)$ be the sum of the decimal digits of $n$. Compute $\sum_{n=0}^{9999}s(n)$.

```answer
{"answer":{"kind":"integer","expected":"180000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Leading zeros do not change a digit sum.

</details>

<details>
<summary>Hint 2</summary>

For each fixed position, every digit appears equally often.

</details>

<details>
<summary>Worked solution</summary>

Each position contributes a balanced copy of the sum of all ten digits.

1. View the numbers as all four-digit strings, allowing leading zeros.
2. At one position each digit occurs $1000$ times, contributing $1000(0+1+\cdots+9)=45000$.
3. The four positions contribute $4\cdot45000=180000$.

</details>
