# Apply a root test before expanding the full terms

*Easy · [Real analysis](index.md)*

For $a_n=(n/(2n+1))^n$, find the limit of a\_n^(1/n), the quantity used by the root test.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested series scale or error bound only; no convergence proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The nth root cancels the outer exponent.

</details>

<details>
<summary>Hint 2</summary>

Divide the remaining fraction by n.

</details>

<details>
<summary>Worked solution</summary>

The root scale exposes the geometric decay directly.

1. The positive nth root is n/(2n+1).
2. Dividing numerator and denominator by n gives 1/(2+1/n).
3. Its limit is 1/2; since this is below one, the positive-term series also converges.

</details>
