# Evaluate an integral-comparison tail budget

*Easy · [Real analysis](index.md)*

For the decreasing function x^(-2), the integral test gives $\sum_{n=11}^{\infty}1/n^2\le\int_{10}^{\infty}x^{-2}\,dx$. Find the stated upper bound.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":10},"checker_scope":"Exact requested series scale or error bound only; no convergence proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The integral starts one unit before the first tail index.

</details>

<details>
<summary>Hint 2</summary>

Use the antiderivative -1/x and the limit at infinity.

</details>

<details>
<summary>Worked solution</summary>

A monotone integral comparison controls a whole infinite tail.

1. The antiderivative is -1/x.
2. The value at infinity is zero and the value at ten is -1/10.
3. Thus the displayed tail bound is 1/10, not an assertion that the tail equals that value.

</details>
