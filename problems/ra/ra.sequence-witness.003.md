# Use a nonintegral boundary for a tail

*Medium · [Real analysis](index.md)*

For $a_{n}=5/n$ and positive integer n, give any positive integer N such that $|a_{n}|<2/7$ for all integers $n\geq N$. Explain the whole-tail reason if you wish; that text is not automatically assessed.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":18},"checker_scope":"Checks a sufficient positive integer whole-tail threshold for this explicit monotone distance formula and fixed tolerance. Explanation drafts are unassessed; correctness does not certify a general epsilon-N proof."}}
```

<details>
<summary>Hint 1</summary>

Solve $5/n<2/7$ for positive n.

</details>

<details>
<summary>Hint 2</summary>

A threshold must be an integer, even when the real-number boundary is not.

</details>

<details>
<summary>Worked solution</summary>

The least allowed integer threshold is the first integer strictly beyond the real boundary.

1. Multiplying by the positive number $7n$ gives $35<2n$, hence $n>35/2$.
2. Choose $N=18$. Every $n\geq 18$ satisfies $5/n\leq 5/18<2/7$ because $35<36$.
3. Every integer $N\geq 18$ works; $N=17$ fails at its first term.

</details>
