# Apply the positive ratio-to-root principle

*Easy · [Real analysis](index.md)*

A positive sequence satisfies $a_{n+1}/a_n\to3/4$. You may use the theorem that a positive finite ratio limit equals the limit of a\_n^(1/n). Find the root limit.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact requested asymptotic observation only; no full convergence argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The positivity assumption permits the stated principle.

</details>

<details>
<summary>Hint 2</summary>

Do not replace the root limit by the ordinary sequence limit.

</details>

<details>
<summary>Worked solution</summary>

Ratio and root asymptotics concern exponential scale.

1. All terms are positive, as required by the supplied theorem.
2. The ratio tends to the positive finite number 3/4.
3. Therefore a\_n^(1/n) tends to 3/4. The ordinary terms themselves have a different type of limit.

</details>
