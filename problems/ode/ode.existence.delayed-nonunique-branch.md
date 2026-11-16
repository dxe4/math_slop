# Select a delayed branch of a nonunique equation

*Hard · [Differential equations problems](index.md)*

For the real equation $y^{\prime}=\sqrt{|y|}$ with $y(0)=0$, choose the solution that stays zero for $t\le1$ and is positive for every $t>1$. Find $y(3)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The additional waiting condition chooses one branch among nonunique solutions.

</details>

<details>
<summary>Hint 2</summary>

Separate on the positive branch and match both value and derivative at the departure time.

</details>

<details>
<summary>Worked solution</summary>

A delayed departure is compatible with the continuous non-Lipschitz vector field.

1. For $t>1$, separation gives $2\sqrt y=t-C$. Departure from value zero at time one gives $C=1$.
2. Thus the chosen solution is zero up to time one and $(t-1)^2/4$ afterward.
3. The two pieces join with derivative zero, and the positive branch has derivative $(t-1)/2=\sqrt y$, verifying the equation.
4. At $t=3$, its value is $1$.

</details>
