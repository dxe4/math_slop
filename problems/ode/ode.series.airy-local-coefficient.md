# Match coefficients in a variable-coefficient equation

*Hard · [Differential equations problems](index.md)*

Let the analytic solution of $y^{\prime\prime}+ty=0$ satisfy $y(0)=1$, $y^{\prime}(0)=0$. Find its Taylor coefficient of $t^3$ at zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":6},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write a power series with the two prescribed initial coefficients.

</details>

<details>
<summary>Hint 2</summary>

Compare the constant and linear coefficients of the differential equation.

</details>

<details>
<summary>Worked solution</summary>

Coefficient matching uses the variable factor without requiring a named special function.

1. Write $y=\sum_{n\ge0}a_nt^n$ with $a_0=1$, $a_1=0$.
2. The constant equation is $2a_2=0$, so $a_2=0$. The linear equation is $6a_3+a_0=0$.
3. Thus $a_3=-1/6$. More generally, substituting the series gives $(n+2)(n+1)a_{n+2}+a_{n-1}=0$ for $n\ge1$, consistent with the requested coefficient.

</details>
