# Control a geometric tail with a strict tolerance

*Medium · [Real analysis](index.md)*

For $a_{n}=1/2^n$ with positive integer n, give any positive integer N such that $|a_{n}|<1/32$ for every integer $n\geq N$. Powers $2^4=16, 2^5=32$ and $2^6=64$ may be used. You may add an explanation in the optional notebook.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":6},"checker_scope":"Checks a sufficient positive integer whole-tail threshold for this explicit monotone distance formula and fixed tolerance. Explanation drafts are unassessed; correctness does not certify a general epsilon-N proof."}}
```

<details>
<summary>Hint 1</summary>

Equality with the tolerance does not satisfy a strict bound.

</details>

<details>
<summary>Hint 2</summary>

The powers $2^n$ increase with n, so their reciprocals decrease.

</details>

<details>
<summary>Worked solution</summary>

Monotonicity turns one strict threshold estimate into an estimate for the entire tail.

1. At $n=5$, the value is $1/32$, which equals the tolerance and fails the strict inequality.
2. At $n=6$, the value is $1/64<1/32$. For every n≥6, 2^n≥64, so $1/2^n\leq 1/64$.
3. Thus any integer $N\geq 6$ is a whole-tail witness.

</details>
