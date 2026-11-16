# Count powers of three in a factorial

*Medium · [Computational arithmetic problems](index.md)*

Find the exponent of $3$ in $1000!$.

```answer
{"answer":{"kind":"integer","expected":"498","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Apply the prime-power floor sum for factorial valuations.

</details>

<details>
<summary>Hint 2</summary>

Stop when the next power of three exceeds the factorial bound.

</details>

<details>
<summary>Worked solution</summary>

Each power of three contributes the count of its multiples.

1. The relevant powers are $3,9,27,81,243,729$.
2. The corresponding floors are $333,111,37,12,4,1$.
3. The total exponent is $333+111+37+12+4+1=498$.

</details>
