# Measure a nonhyperbolic decay rate

*Hard · [Differential equations problems](index.md)*

Let $y^{\prime}=-y^3$, $y(0)=1$. Find $\lim_{t\to\infty}t\,y(t)^2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The linearized rate at the equilibrium vanishes, so solve the nonlinear decay instead.

</details>

<details>
<summary>Hint 2</summary>

A reciprocal square has a constant derivative along this positive solution.

</details>

<details>
<summary>Worked solution</summary>

Separation reveals polynomial decay when the linearization supplies no rate.

1. Separation gives $y^{-2}=1+2t$, so $y=(1+2t)^{-1/2}$ on the forward time domain.
2. Its derivative is $-(1+2t)^{-3/2}=-y^3$, and the initial value is one.
3. Thus $t\,y^2=t/(1+2t)$, whose limit is $1/2$.

</details>
