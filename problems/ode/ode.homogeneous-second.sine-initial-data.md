# Choose the sine branch of an oscillator

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+y=0$, $y(0)=0$, $y^{\prime}(0)=1$, find $y(\pi/6)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the two standard independent oscillator solutions.

</details>

<details>
<summary>Hint 2</summary>

The two initial values determine their coefficients separately.

</details>

<details>
<summary>Worked solution</summary>

The initial data select a single trigonometric fundamental solution.

1. The general solution is $A\cos t+B\sin t$. Initial position gives $A=0$ and initial velocity gives $B=1$.
2. Thus $y=\sin t$, whose second derivative plus itself vanishes and whose data match.
3. The requested value is $\sin(\pi/6)=1/2$.

</details>
