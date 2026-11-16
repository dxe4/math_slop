# Maximize a gcd by Euclidean reduction

*Medium · [Original olympiad-style problems](index.md)*

As $n$ ranges over positive integers, find the greatest possible value of $\gcd(n+4,2n+3)$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Subtract twice the first argument from the second.

</details>

<details>
<summary>Hint 2</summary>

After proving the gcd divides a fixed number, choose a positive integer attaining the largest possibility.

</details>

<details>
<summary>Worked solution</summary>

Reduce the variable gcd to a fixed divisor and attain it.

1. Euclid gives $\gcd(n+4,2n+3)=\gcd(n+4,5)$.
2. This gcd can only be $1$ or $5$, so it is at most $5$.
3. At $n=1$, both original arguments are $5$, so the upper bound is attained.

</details>
