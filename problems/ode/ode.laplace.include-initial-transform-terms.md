# Retain initial values in a transformed oscillator

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+y=0$, $y(0)=1$, $y^{\prime}(0)=0$, let $Y(s)$ be the causal Laplace transform. Find $Y(1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The transform of the second derivative contains both initial values.

</details>

<details>
<summary>Hint 2</summary>

Solve the transformed algebraic equation before substituting the requested transform parameter.

</details>

<details>
<summary>Worked solution</summary>

The initial position contributes a term that must not be dropped.

1. Transforming gives $s^2Y-s+Y=0$, hence $Y=s/(s^2+1)$.
2. This is the transform of $y=\cos t$, which satisfies the original equation and initial data.
3. At $s=1$, the transform value is $1/2$.

</details>
