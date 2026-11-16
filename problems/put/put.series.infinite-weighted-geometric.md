# Justify a weighted geometric-series sum

*Medium · [Original Putnam-style training](index.md)*

Find the exact sum $\sum_{n=1}^{\infty}n/2^n$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The ratio of successive positive terms tends to one-half, establishing convergence.

</details>

<details>
<summary>Hint 2</summary>

Compare the sum with half itself after shifting the index.

</details>

<details>
<summary>Worked solution</summary>

Absolute convergence permits an index shift and subtraction.

1. The term ratio tends to 1/2, so the positive series converges by the ratio criterion.
2. If its sum is S, then $S-S/2=1/2+\sum_{n=2}^\infty1/2^n=1$.
3. Therefore $S=2$.

</details>
