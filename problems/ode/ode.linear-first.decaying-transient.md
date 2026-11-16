# Separate equilibrium and transient

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}+2y=4$, $y(0)=1$, find $y(\log2)$, where log is the natural logarithm.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":4},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Subtract a constant equilibrium to obtain a homogeneous equation.

</details>

<details>
<summary>Hint 2</summary>

Use the exact exponential identity at the specified time.

</details>

<details>
<summary>Worked solution</summary>

A constant equilibrium plus an exponential transient solves the linear equation.

1. The general solution is $y=2+Ce^{-2t}$, and the initial value gives $C=-1$.
2. Substitution verifies $y^{\prime}+2y=2e^{-2t}+4-2e^{-2t}=4$.
3. At $t=\log2$, $e^{-2t}=1/4$, giving $y=2-1/4=7/4$.

</details>
