# Integrate a supplied energy inequality

*Easy · [Differential equations problems](index.md)*

A nonnegative differentiable energy obeys $V'\le-2V$ and V(0)=9. What upper bound follows for V(log 3)?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested Lyapunov calculation only; no proof or broad stability verdict is inferred from the submitted value."}}
```

<details>
<summary>Hint 1</summary>

Multiply by the integrating factor exp(2t).

</details>

<details>
<summary>Hint 2</summary>

The derivative inequality gives an upper bound, not an exact energy trajectory.

</details>

<details>
<summary>Worked solution</summary>

An integrating factor propagates the energy estimate.

1. The product exp(2t)\*V(t) has nonpositive derivative.
2. Hence V(t)&lt;=9\*exp(-2t).
3. At t=log3 the upper bound is 9/9=1; equality need not hold for the actual energy.

</details>
