# Classify a gcd through a remainder and parity

*Medium · [Original olympiad-style problems](index.md)*

Find the set of values of $\gcd(n^2+1,n+1)$ for nonnegative integers $n$.

```answer
{"answer":{"kind":"set","expected":["1","2"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Reduce the quadratic modulo $n+1$.

</details>

<details>
<summary>Hint 2</summary>

Its remainder is $2$; now determine when $n+1$ is even.

</details>

<details>
<summary>Worked solution</summary>

Separate the fixed remainder from the parity condition.

1. Euclid gives $\gcd(n^2+1,n+1)=\gcd(2,n+1)$.
2. For even $n$, the second argument is odd and the gcd is one; for odd $n$, it is even and the gcd is two.
3. Both parities occur among nonnegative integers, so the complete value set is $\{1,2\}$.

</details>
