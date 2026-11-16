# Convert a uniform function error into an integral error

*Easy · [Real analysis](index.md)*

Riemann-integrable f,g on \[2,7\] satisfy $|f(t)-g(t)|\le3/100$ everywhere. Find the upper bound on \|integral f-integral g\| obtained by integrating this uniform estimate.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":20},"checker_scope":"Exact requested integral quantity or gap bound only; no general integrability proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The interval length is five.

</details>

<details>
<summary>Hint 2</summary>

This estimates the error, not either individual integral.

</details>

<details>
<summary>Worked solution</summary>

Uniform vertical error accumulates at most linearly in interval length.

1. Integral linearity and the triangle inequality give \|integral(f-g)\|&lt;=integral \|f-g\|.
2. The latter is at most (7-2)\*(3/100).
3. Thus the bound is 15/100=3/20.

</details>
