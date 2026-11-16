# Integrate a geometric slope series

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}=1/(1-t)$ and $y(0)=0$, find the coefficient of $t^3$ in the Taylor expansion valid for $|t|<1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the derivative geometrically within the stated convergence disk.

</details>

<details>
<summary>Hint 2</summary>

Integrate each power and fix the additive constant using the initial value.

</details>

<details>
<summary>Worked solution</summary>

Termwise integration of the geometric slope gives the normalized logarithmic solution.

1. For $|t|<1$, $y^{\prime}=1+t+t^2+\cdots$.
2. Integration with the zero initial value gives $y=t+t^2/2+t^3/3+\cdots=-\log(1-t)$.
3. Differentiating recovers the equation, and the requested coefficient is $1/3$.

</details>
