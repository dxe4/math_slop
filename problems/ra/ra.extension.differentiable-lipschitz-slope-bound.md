# Pass a global distance bound to a pointwise derivative

*Easy · [Real analysis](index.md)*

A real function is 5/2-Lipschitz on an interval and differentiable at an interior point c. What bound follows for $|f'(c)|$ from the Lipschitz inequality?

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Exact requested derivative quantity or guaranteed bound only; no full analytic argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Divide the distance estimate by the nonzero input increment.

</details>

<details>
<summary>Hint 2</summary>

Then take the derivative limit.

</details>

<details>
<summary>Worked solution</summary>

Every differentiable slope inherits the Lipschitz bound.

1. For small nonzero h, \|f(c+h)-f(c)\|&lt;= (5/2)\*\|h\|.
2. Thus the absolute difference quotient is at most 5/2.
3. Passing to its limit gives \|fprime(c)\|&lt;=5/2.

</details>
