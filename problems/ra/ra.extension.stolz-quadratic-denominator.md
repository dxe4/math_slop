# Use successive differences for a ratio of growing sequences

*Easy · [Real analysis](index.md)*

You may use Stolz-Cesaro: if b\_n strictly increases to infinity and (a\_(n+1)-a\_n)/(b\_(n+1)-b\_n) tends to L, then a\_n/b\_n tends to L. For $a_n=\sum_{k=1}^n k$ and b\_n=n^2, find that ratio limit.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested asymptotic observation only; no full convergence argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The numerator increment is n+1.

</details>

<details>
<summary>Hint 2</summary>

The denominator increment is 2n+1.

</details>

<details>
<summary>Worked solution</summary>

A difference quotient determines the growing-sequence ratio under the stated theorem.

1. Here a\_(n+1)-a\_n=n+1 and b\_(n+1)-b\_n=2n+1.
2. Their quotient tends to one half, and b\_n is strictly increasing to infinity.
3. The stated theorem gives a\_n/b\_n tending to 1/2.

</details>
