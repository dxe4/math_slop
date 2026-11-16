# Use both neighboring signs to classify an equilibrium

*Easy · [Differential equations problems](index.md)*

For the scalar equation $y'=y(y-1)(y-3)$, find its unique locally asymptotically stable equilibrium value.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested Lyapunov calculation only; no proof or broad stability verdict is inferred from the submitted value."}}
```

<details>
<summary>Hint 1</summary>

The equilibria are the roots, but stability depends on the adjacent arrows.

</details>

<details>
<summary>Hint 2</summary>

A simple root with negative derivative attracts from both sides.

</details>

<details>
<summary>Worked solution</summary>

The phase-line signs distinguish attraction from mere equilibrium.

1. The equilibria are zero, one and three.
2. The derivative of the cubic at these points is respectively 3,-2,6.
3. Only the derivative at one is negative, so the unique locally asymptotically stable equilibrium is y=1.

</details>
