# Combine two decaying modes

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+3y^{\prime}+2y=0$, $y(0)=1$, $y^{\prime}(0)=0$, find $y(\log2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor the characteristic polynomial.

</details>

<details>
<summary>Hint 2</summary>

Use both data to determine the weights of the two decay rates.

</details>

<details>
<summary>Worked solution</summary>

The two negative roots give a weighted sum of decaying exponentials.

1. The roots are $-1,-2$, so $y=Ae^{-t}+Be^{-2t}$. The data yield $A+B=1$ and $-A-2B=0$, hence $A=2$, $B=-1$.
2. Each exponential satisfies the homogeneous equation, and those constants give the stated position and slope.
3. At $t=\log2$, $y=2(1/2)-1/4=3/4$.

</details>
