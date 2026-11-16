# Evaluate a stated continuous-dependence estimate

*Easy · [Differential equations problems](index.md)*

Two solutions satisfy $|y(t)-z(t)|\le|y(0)-z(0)|e^{2t}$ for t&gt;=0. If their initial distance is 1/100, what upper bound does this give at t=log 2?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":25},"checker_scope":"Exact requested existence bound or sensitivity observation only; no uniqueness or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Evaluate the exponential at the specified logarithmic time.

</details>

<details>
<summary>Hint 2</summary>

Retain the inequality interpretation.

</details>

<details>
<summary>Worked solution</summary>

The initial error is multiplied by the flow's stated growth bound.

1. At t=log2, exp(2t)=4.
2. The bound becomes (1/100)\*4.
3. Thus the guaranteed distance bound is 1/25.

</details>
