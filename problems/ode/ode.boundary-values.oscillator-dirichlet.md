# Use two endpoint conditions for an oscillator

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+4y=0$, impose $y(0)=0$ and $y(\pi/4)=2$. Find $y(\pi/12)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the trigonometric basis at the equation frequency.

</details>

<details>
<summary>Hint 2</summary>

The first endpoint removes one basis function and the second fixes the other amplitude.

</details>

<details>
<summary>Worked solution</summary>

The boundary positions determine the two oscillator coefficients.

1. The general solution is $A\cos2t+B\sin2t$. The first condition gives $A=0$.
2. At $\pi/4$, the sine factor is one, so $B=2$. This solution satisfies the differential equation and both boundary values.
3. Thus $y(\pi/12)=2\sin(\pi/6)=1$.

</details>
