# Match forcing at a repeated root

*Hard · [Differential equations problems](index.md)*

For $y^{\prime\prime}+2y^{\prime}+y=e^{-t}$, $y(0)=y^{\prime}(0)=0$, report $y(1)$ with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"0.183939720586","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor the differential operator conceptually and remove its exponential mode by a substitution.

</details>

<details>
<summary>Hint 2</summary>

After that substitution, the equation for the remaining factor has constant second derivative.

</details>

<details>
<summary>Worked solution</summary>

An exponential factor converts repeated-root resonance into two integrations.

1. Set $y=e^{-t}v$. Substitution gives $y^{\prime\prime}+2y^{\prime}+y=e^{-t}v^{\prime\prime}$, so $v^{\prime\prime}=1$.
2. The initial conditions give $v(0)=v^{\prime}(0)=0$, hence $v=t^2/2$.
3. Thus $y=t^2e^{-t}/2$, and the displayed substitution verifies the original equation and both data.
4. The value at one is $1/(2e)\approx0.183939720586$.

</details>
