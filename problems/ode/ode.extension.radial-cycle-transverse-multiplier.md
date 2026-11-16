# Linearize the radial return rather than the angular motion

*Medium · [Differential equations problems](index.md)*

Near r=1 consider the planar flow $r'=r(1-r)$, theta'=1. Let mu be the transverse multiplier of its unit-circle orbit after one complete revolution. Find log(mu)/pi.

```answer
{"answer":{"kind":"integer","expected":-2,"checker_scope":"Exact requested period quantity only; no broad stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

The period comes from the angular equation.

</details>

<details>
<summary>Hint 2</summary>

Linearize the radial equation at r=1 before propagating one period.

</details>

<details>
<summary>Worked solution</summary>

The neutral tangent direction and the contracting transverse direction have different multipliers.

1. A full orbit takes T=2\*pi because the angle has speed one.
2. The derivative of r\*(1-r) at r=1 is -1, so a radial perturbation obeys eta'=-eta to first order.
3. Hence mu=exp(-2\*pi) and log(mu)/pi=-2. The tangent phase multiplier is separately one.

</details>
