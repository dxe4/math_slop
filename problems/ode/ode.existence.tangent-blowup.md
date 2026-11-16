# Normalize a finite blow-up time

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}=1+y^2$, $y(0)=0$, let $T>0$ be the forward endpoint of its maximal solution interval. Find $T/\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The antiderivative of the separated left side is an inverse trigonometric function.

</details>

<details>
<summary>Hint 2</summary>

Locate the first forward pole of the resulting solution.

</details>

<details>
<summary>Worked solution</summary>

Separation gives a tangent solution with a finite first singularity.

1. Integrating gives $\arctan y=t$, so $y=\tan t$ on the branch containing the initial point.
2. The derivative is $1+\tan^2t$, and the initial value is zero. Its maximal interval is $(-\pi/2,\pi/2)$.
3. Thus $T=\pi/2$ and $T/\pi=1/2$.

</details>
