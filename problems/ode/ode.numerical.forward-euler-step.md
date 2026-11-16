# Compute one forward Euler step

*Easy · [Differential equations problems](index.md)*

Apply one forward Euler step of size $h=1/2$ to $y^{\prime}=y$, starting with $Y_0=1$ at $t=0$. Find the step approximation $Y_1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Forward Euler uses the slope at the beginning of the step.

</details>

<details>
<summary>Hint 2</summary>

Add the step size times that slope to the current approximation.

</details>

<details>
<summary>Worked solution</summary>

The prescribed numerical update is an exact arithmetic calculation.

1. The starting slope is $f(0,1)=1$.
2. The update is $Y_1=Y_0+h f(0,Y_0)=1+(1/2)1$.
3. The step approximation is $3/2$.

</details>
