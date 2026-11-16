# Control a geometric tail with base three

*Medium · [Real analysis](index.md)*

For $a_{n}=2/3^n, n$ a positive integer, give any positive integer N with $|a_{n}|<2/81$ for every $n\geq N$. You may use $3^4=81$ and $3^5=243$. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":5},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Divide the inequality by the positive factor $2$.

</details>

<details>
<summary>Hint 2</summary>

The reciprocal powers decrease, so a strict bound at N controls later n.

</details>

<details>
<summary>Worked solution</summary>

Monotonicity of reciprocal powers turns a threshold check into a whole-tail estimate.

1. At $n=4$ the term equals $2/81$ and fails the strict request.
2. At $n=5$, and for every later $n, 2/3^n\leq 2/243<2/81$. Thus any integer $N\geq 5$ works.

</details>
