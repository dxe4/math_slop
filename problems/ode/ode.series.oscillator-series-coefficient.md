# A frequency-dependent Taylor coefficient

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+4y=0$, $y(0)=1$, $y^{\prime}(0)=0$, find the Taylor coefficient of $t^4$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The initial data choose the cosine solution at the stated frequency.

</details>

<details>
<summary>Hint 2</summary>

The frequency is raised to the same power as the desired Taylor term.

</details>

<details>
<summary>Worked solution</summary>

The exact oscillator solution determines its local series.

1. The solution is $y=\cos2t$, satisfying both initial conditions and $y^{\prime\prime}=-4y$.
2. The fourth-power term of its series is $(2t)^4/4!$.
3. The coefficient is $16/24=2/3$.

</details>
