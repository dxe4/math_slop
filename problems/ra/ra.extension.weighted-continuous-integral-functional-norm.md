# Read an operator norm from an absolute kernel integral

*Easy · [Real analysis](index.md)*

On C(\[0,1\]) with the supremum norm, define $Lf=\int_0^1(2t-1)f(t)\,dt$. You may use \|\|L\|\|=integral\_0^1 \|2t-1\| dt for a continuous real kernel. Find \|\|L\|\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested norm observation only; no functional-analytic theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Split the absolute value where the kernel changes sign.

</details>

<details>
<summary>Hint 2</summary>

The signed integral would give a different and incorrect norm.

</details>

<details>
<summary>Worked solution</summary>

A functional norm measures worst-case magnitude rather than signed cancellation.

1. The kernel changes sign at t=1/2.
2. The absolute integral is integral\_0^(1/2) (1-2t) dt plus integral\_(1/2)^1 (2t-1) dt.
3. Each part is 1/4, so the norm is 1/2.

</details>
