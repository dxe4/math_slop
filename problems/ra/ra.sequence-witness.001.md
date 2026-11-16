# Choose a whole-tail witness

*Medium · [Real analysis](index.md)*

For $a_n=2/n$ with positive integer $n$, give any positive integer $N$ such that $|a_n-0|<1/20$ for every integer $n\ge N$. Explain why your $N$ works for the whole tail.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":41},"checker_scope":"Validates N for this explicit monotone positive sequence and fixed tolerance. The explanation is retained for self-review and is not automatically assessed; other valid large witnesses are accepted."}}
```

<details>
<summary>Hint 1</summary>

Solve $2/n<1/20$, retaining the strict inequality.

</details>

<details>
<summary>Hint 2</summary>

A witness must ensure every later index is beyond 40, not only one displayed term.

</details>

<details>
<summary>Worked solution</summary>

A limit-tail witness controls all subsequent indices and respects strict bounds.

1. $2/n<1/20$ is equivalent to $n>40$ for positive $n$.
2. Choose $N=41$. If $n\ge 41$, then $2/n\le 2/41<1/20$.
3. Every integer $N\ge 41$ also works; a witness is not unique.

An editable $N$ field, values at $N$ and later indices, and the inequality $2/n\le 2/N$ establish the whole-tail argument.

</details>
