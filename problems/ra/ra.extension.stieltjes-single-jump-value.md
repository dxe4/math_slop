# Read an integral against a jump mass

*Easy · [Real analysis](index.md)*

Let alpha be zero for t&lt;1/2 and two for t&gt;=1/2 on \[0,1\]. For continuous f, the Riemann-Stieltjes rule is $\int_0^1 f\,d\alpha=2f(1/2)$. Find this integral for f(t)=t^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested integral quantity or gap bound only; no general integrability proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The integrator's jump size is two.

</details>

<details>
<summary>Hint 2</summary>

Only the continuous integrand's value at the jump contributes.

</details>

<details>
<summary>Worked solution</summary>

A jump integrator records a point mass rather than interval area.

1. At the jump, f(1/2)=1/4.
2. The jump size is alpha(1/2+)-alpha(1/2-)=2.
3. The supplied rule gives 2\*(1/4)=1/2.

</details>
