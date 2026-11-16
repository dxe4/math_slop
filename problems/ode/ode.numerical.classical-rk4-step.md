# Keep all four Runge-Kutta stages

*Hard · [Differential equations problems](index.md)*

Use one classical fourth-order Runge-Kutta step with $h=1$ for $y^{\prime}=t+y$ from $Y_0=0$ at $t=0$. Use unscaled slopes $k_j=f(t_j,Y_j)$ in the usual $1,2,2,1$ weighted update. Find $Y_1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":17,"denominator":24},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each middle stage uses its own predicted state, even though their time coordinates agree.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the last slope at the endpoint state predicted using the third slope.

</details>

<details>
<summary>Worked solution</summary>

The four-stage weighted formula is applied to the specified time-dependent slope field.

1. $k_1=f(0,0)=0$ and $k_2=f(1/2,0+k_1/2)=1/2$.
2. $k_3=f(1/2,0+k_2/2)=3/4$.
3. $k_4=f(1,0+k_3)=7/4$.
4. The update is $Y_1=0+(k_1+2k_2+2k_3+k_4)/6$.
5. The numerator is $17/4$, giving $Y_1=17/24$.

</details>
