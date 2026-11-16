# Control a shifted reciprocal tail

*Medium · [Real analysis](index.md)*

For $a_{n}=7/(n+1), n$ a positive integer, give any positive integer N such that $|a_{n}|<1/12$ for all integers $n\geq N$. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":84},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Solve $7/(n+1)<1/12$ with $n+1$ positive.

</details>

<details>
<summary>Hint 2</summary>

Choose an integer threshold beyond the equality boundary.

</details>

<details>
<summary>Worked solution</summary>

The chosen integer threshold must lie beyond the strict boundary.

1. The inequality is equivalent to n+1&gt;84, or $n>83$.
2. At $N=84$, every later term is at most $7/85<1/12$. Any integer $N\geq 84$ works; $N=83$ fails by equality.

</details>
