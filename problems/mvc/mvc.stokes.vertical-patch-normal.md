# Track a vertical surface orientation

*Medium · [Multivariable calculus problems](index.md)*

Let $F=(0,0,x)$ and let $S=\{(x,0,z):0\leq x,z\leq1\}$ carry normal $n=(0,1,0)$. Compute $\iint_S(\nabla\times F)\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the standard coordinate formula for curl.

</details>

<details>
<summary>Hint 2</summary>

Dot the result with the specified normal rather than choosing a new orientation.

</details>

<details>
<summary>Worked solution</summary>

The orientation fixes the sign of the flux on a vertical patch.

1. The curl is $(0,-1,0)$ because its second component is $\partial_zF_x-\partial_xF_z=-1$.
2. Dotting with $(0,1,0)$ gives constant density $-1$.
3. The rectangle has area $1$, so the oriented flux is $-1$.

</details>
