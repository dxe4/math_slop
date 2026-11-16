# Square an exact intermediate power

*Medium · [Computational arithmetic problems](index.md)*

Find the integer in $\{0,\ldots,10^{10}-1\}$ congruent to $3^{40}$ modulo $10^{10}$.

```answer
{"answer":{"kind":"integer","expected":"9056928801","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Compute the twentieth power, then square it.

</details>

<details>
<summary>Hint 2</summary>

The requested representative is determined by the final ten decimal digits.

</details>

<details>
<summary>Worked solution</summary>

One exact intermediate square gives the final decimal residue.

1. Repeated squaring gives $3^{20}=3486784401$.
2. Squaring yields $3^{40}=12157665459056928801$.
3. The final ten digits represent the integer $9056928801$.

</details>
