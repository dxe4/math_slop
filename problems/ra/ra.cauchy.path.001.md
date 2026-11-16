# Choose a pairwise tail threshold

*Medium · [Real analysis](index.md)*

For $a_{n}=4/n$ and positive integer n, give any positive integer N such that $|a_{m}-a_{n}|<1/5$ for every pair of integers $m,n\geq N$. You may add an explanation in the optional notebook. This is a pairwise Cauchy request, rather than distance from a named limit.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","expected_constraints":{"integer":true,"minimum_inclusive":20},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

If $m,n\geq N$, both terms lie in ($0,4/N$\]. Their difference is strictly less than $4/N$.

</details>

<details>
<summary>Hint 2</summary>

At a boundary threshold, strict positivity of both terms can make their difference strictly smaller than the interval’s upper endpoint.

</details>

<details>
<summary>Worked solution</summary>

Pairwise distances can be strictly below a boundary even when one term equals that boundary.

1. For $N\geq 20$, both terms are positive and at most 4/N≤1/5, so their difference is strictly less than $1/5$.
2. Every $N\leq 19$ fails: take $m=19$ and $n=380$, both beyond N. Then $4/19-4/380=1/5$.
3. Thus precisely the positive integer thresholds $N\geq 20$ satisfy the request.

</details>
