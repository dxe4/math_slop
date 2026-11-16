# Read the interval length in a contraction estimate

*Easy · [Differential equations problems](index.md)*

A Picard integral operator on an interval of length h has sup-norm Lipschitz factor at most L\*h. For $L=3$ and h=1/6, find this factor.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested existence bound or sensitivity observation only; no uniqueness or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Multiply the state Lipschitz constant by the time length.

</details>

<details>
<summary>Hint 2</summary>

A factor below one is the contraction criterion.

</details>

<details>
<summary>Worked solution</summary>

The integration interval scales the state Lipschitz bound.

1. The operator difference is bounded by L times the integral of the input difference.
2. In the sup norm this gives factor L\*h.
3. Here L\*h=3/6=1/2, strictly below one.

</details>
