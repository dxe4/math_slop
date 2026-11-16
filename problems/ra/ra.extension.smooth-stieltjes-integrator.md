# Convert a smooth integrator to its density

*Medium · [Real analysis](index.md)*

You may use the smooth-integrator rule $\int_0^1 f(t)\,d\alpha(t)=\int_0^1 f(t)\alpha'(t)\,dt$. Find the Riemann-Stieltjes integral of f(t)=t against alpha(t)=t^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact requested integral quantity or gap bound only; no general integrability proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The density is the derivative of the integrator, not the integrator itself.

</details>

<details>
<summary>Hint 2</summary>

Multiply that density by f before integrating.

</details>

<details>
<summary>Worked solution</summary>

A smooth Stieltjes integral weights the ordinary integral by the integrator's derivative.

1. The integrator derivative is alphaprime(t)=2t.
2. The ordinary integrand becomes t\*(2t)=2t^2.
3. Its integral from zero to one is 2/3.

</details>
