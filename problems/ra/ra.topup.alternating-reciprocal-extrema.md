# Compare the largest positive and negative subsequences

*Medium · [Real analysis](index.md)*

For $S=\{(-1)^n/n:n\ge1\}$, return the ordered vector (infimum,supremum).

```answer
{"answer":{"kind":"vector","expected":["-1","1/2"],"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Odd indices give negative values while even indices give positive values.

</details>

<details>
<summary>Hint 2</summary>

Find the first term of each sign and compare later magnitudes.

</details>

<details>
<summary>Worked solution</summary>

The first member of each parity controls the corresponding attained extremum.

1. Odd values are -1,-1/3,-1/5,..., all at least negative one.
2. Even values are 1/2,1/4,1/6,..., all at most one half.
3. Both bounds occur, so the requested vector is (-1,1/2).

</details>
