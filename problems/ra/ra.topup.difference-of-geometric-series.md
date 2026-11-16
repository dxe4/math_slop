# Subtract two convergent geometric sums

*Medium · [Real analysis](index.md)*

Find the exact sum from n=1 to infinity of $(3/4)^n-(1/4)^n$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":8,"denominator":3},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Both component geometric series converge absolutely.

</details>

<details>
<summary>Hint 2</summary>

Their first terms are the displayed ratios, since indexing starts at one.

</details>

<details>
<summary>Worked solution</summary>

Absolute convergence justifies subtracting the two infinite sums.

1. The first geometric sum is (3/4)/(1-3/4)=3.
2. The second is (1/4)/(1-1/4)=1/3.
3. Their difference is 3-1/3=8/3.

</details>
