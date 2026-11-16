# Count every factor of two

*Medium · [Computational arithmetic problems](index.md)*

Find the exponent of $2$ in the prime factorization of $1000!$.

```answer
{"answer":{"kind":"integer","expected":"994","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Count multiples of each positive power of two.

</details>

<details>
<summary>Hint 2</summary>

A multiple of several powers contributes once at each of the corresponding stages.

</details>

<details>
<summary>Worked solution</summary>

The factorial valuation counts repeated prime factors through nested multiple counts.

1. The nonzero floors are $500,250,125,62,31,15,7,3,1$ for powers $2$ through $512$.
2. Their sum is $500+250+125+62+31+15+7+3+1=994$.
3. The next power is $1024>1000$, so no further contribution exists.

</details>
