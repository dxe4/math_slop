# Keep the interior-point hypothesis in Fermat's theorem

*Easy · [Real analysis](index.md)*

A function f is differentiable at an interior point c of its domain interval and has a local minimum there. Find $f'(c)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested derivative quantity or guaranteed bound only; no full analytic argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The right difference quotients are nonnegative near the minimum.

</details>

<details>
<summary>Hint 2</summary>

The left ones are nonpositive.

</details>

<details>
<summary>Worked solution</summary>

The two one-sided slope signs must agree when the derivative exists.

1. For sufficiently small positive h, f(c+h)-f(c)&gt;=0, so the quotient is nonnegative.
2. For negative h the same nonnegative numerator gives a nonpositive quotient.
3. Both sides have the common derivative limit, which must therefore be zero.

</details>
