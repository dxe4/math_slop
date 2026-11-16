# Include arc-length speed

*Medium · [Multivariable calculus problems](index.md)*

Let $C$ be the segment from $(0,0)$ to $(3,4)$. Evaluate the scalar arc-length integral $\int_C x\,ds$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":15,"denominator":2},"checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

A linear parameterization has constant speed.

</details>

<details>
<summary>Hint 2</summary>

This scalar integral uses speed, not a signed differential $dx$.

</details>

<details>
<summary>Worked solution</summary>

Arc-length integration weights the scalar value by the path speed.

1. Set $r(t)=(3t,4t)$ for $0\leq t\leq1$.
2. Then $x=3t$ and $ds=\lVert(3,4)\rVert dt=5\,dt$.
3. The integral is $\int_0^115t\,dt=15/2$.

</details>
