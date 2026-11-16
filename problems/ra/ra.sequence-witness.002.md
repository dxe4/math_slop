# A shifted reciprocal tail

*Medium · [Real analysis](index.md)*

For $a_{n}=3/(n+2)$, with n a positive integer, give any positive integer N such that $|a_{n}-0|<1/10$ for every integer $n\geq N$. You may add a whole-tail explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":29},"checker_scope":"Checks a sufficient positive integer whole-tail threshold for this explicit monotone distance formula and fixed tolerance. Explanation drafts are unassessed; correctness does not certify a general epsilon-N proof."}}
```

<details>
<summary>Hint 1</summary>

Because $n+2$ is positive, solve $3/(n+2)<1/10$ by multiplying through.

</details>

<details>
<summary>Hint 2</summary>

The inequality must already be strict at $n=N$; larger indices only decrease the distance.

</details>

<details>
<summary>Worked solution</summary>

Solve a strict inequality and then choose an integer threshold beyond its boundary.

1. The inequality $3/(n+2)<1/10$ is equivalent to n+2&gt;30, or $n>28$.
2. Choose $N=29$. For every $n\geq 29, 3/(n+2)\leq 3/31<1/10$.
3. Any integer $N\geq 29$ works. At $N=28$, equality occurs at the first tail term, which fails the strict request.

</details>
