# Differentiate a Lyapunov candidate along a vector field

*Easy · [Differential equations problems](index.md)*

For $x'=-x$, y'=-2y, take V=x^2+y^2. Find V' at (x,y)=(1,2).

```answer
{"answer":{"kind":"integer","expected":-18,"checker_scope":"Exact requested Lyapunov calculation only; no proof or broad stability verdict is inferred from the submitted value."}}
```

<details>
<summary>Hint 1</summary>

Apply the chain rule along the trajectory.

</details>

<details>
<summary>Hint 2</summary>

The derivative of each squared coordinate has its own decay factor.

</details>

<details>
<summary>Worked solution</summary>

A Lyapunov derivative is a directional derivative along the system.

1. The chain rule gives Vprime=2x\*xprime+2y\*yprime.
2. Substitution of the field gives Vprime=-2x^2-4y^2.
3. At (1,2), this equals -2-16=-18.

</details>
