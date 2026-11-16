# Cancel a positive scale in a geometric estimate

*Medium · [Real analysis](index.md)*

For $a_{n}=3/2^n$ and positive integer n, give any positive integer N such that $|a_{n}|<3/16$ for every integer $n\geq N$. You may use $2^4=16$ and $2^5=32$. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":5},"checker_scope":"Checks a sufficient positive integer whole-tail threshold for this explicit monotone distance formula and fixed tolerance. Explanation drafts are unassessed; correctness does not certify a general epsilon-N proof."}}
```

<details>
<summary>Hint 1</summary>

Divide both sides of the tolerance inequality by the positive number $3$.

</details>

<details>
<summary>Hint 2</summary>

At the equality index the strict inequality still fails; choose a later threshold.

</details>

<details>
<summary>Worked solution</summary>

A positive common scale can be removed before choosing a tail threshold.

1. Dividing by $3$ reduces the estimate to $1/2^n<1/16$.
2. At $n=4$ equality holds; at $n=5$ the value is $1/32<1/16$.
3. For every n≥5, 3/2^n≤3/32&lt;3/16, so every integer $N\geq 5$ works.

</details>
