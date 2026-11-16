# Evaluate before a finite blow-up

*Medium · [Differential equations problems](index.md)*

For the maximal solution containing $t=0$ of $y^{\prime}=y^2$, $y(0)=1$, find $y(1/2)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Separate by dividing by the squared dependent variable on the positive branch.

</details>

<details>
<summary>Hint 2</summary>

Locate the denominator zero before evaluating the requested time.

</details>

<details>
<summary>Worked solution</summary>

The separated reciprocal gives both the solution and its interval.

1. Integration gives $-1/y=t+C$, and the initial value gives $C=-1$. Thus $y(t)=1/(1-t)$ on the maximal interval $(-\infty,1)$.
2. Differentiation gives $y^{\prime}=1/(1-t)^2=y^2$, and the initial value is one.
3. The requested time belongs to that interval, with $y(1/2)=2$.

</details>
