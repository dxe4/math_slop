# Alternating-series error: bound after stated term count

*Easy · [Calculus](index.md)*

For $1-1/2+1/3-1/4$+⋯, the positive magnitudes decrease to zero. What nonnegative error bound does the alternating-series theorem give after the first five terms?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Checks the stated exact numeric entries only. It does not certify an explanation or unrestricted proof."}}
```

<details>
<summary>Hint 1</summary>

Count the first omitted term, not the last included term.

</details>

<details>
<summary>Hint 2</summary>

The stated decrease and zero-limit hypotheses permit the theorem.

</details>

<details>
<summary>Worked solution</summary>

After five terms, the next magnitude is 1/6, so the absolute error is at most $1/6$.

1. The alternating-series remainder bound is the magnitude of the first omitted term.
2. After five terms, the next magnitude is 1/6, so the absolute error is at most $1/6$.

</details>
