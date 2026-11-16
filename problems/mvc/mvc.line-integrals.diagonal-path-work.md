# Compute work on a diagonal path

*Medium · [Multivariable calculus problems](index.md)*

For $F(x,y)=(y,0)$, compute work along the straight segment from $(0,0)$ to $(1,1)$, oriented toward $(1,1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Parameterize both coordinates by the same increasing parameter.

</details>

<details>
<summary>Hint 2</summary>

Only the $dx$ term contributes to this field.

</details>

<details>
<summary>Worked solution</summary>

Path parameterization determines how the two coordinates are linked.

1. Use $r(t)=(t,t)$ for $0\leq t\leq1$.
2. The field along the path is $(t,0)$ and $r\prime(t)=(1,1)$, giving dot product $t$.
3. The work is $\int_0^1t\,dt=1/2$.

</details>
