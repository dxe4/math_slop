# Use a trace recurrence rather than expand a large radical power

*Easy · [Computational arithmetic problems](index.md)*

For $(9+4\sqrt5)^n=x_n+y_n\sqrt5$, use x0=1,x1=9 and x\_(n+1)=18x\_n-x\_(n-1). Find x2.

```answer
{"answer":{"kind":"integer","expected":"161","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Apply the recurrence at its first available step.

</details>

<details>
<summary>Hint 2</summary>

The coefficient eighteen is the sum of the unit and its inverse.

</details>

<details>
<summary>Worked solution</summary>

A norm-one unit gives a second-order recurrence for its rational coordinates.

1. The recurrence gives x2=18x1-x0.
2. Substituting the supplied values gives 162-1=161.
3. This agrees with the constant coefficient of the square, since 9^2+5 times 4^2=161.

</details>
