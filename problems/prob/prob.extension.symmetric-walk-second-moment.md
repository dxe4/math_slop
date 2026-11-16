# Mean square after three fair steps

*Medium · [Probability problems](index.md)*

Let $S_0=0$ and $S_3=D_1+D_2+D_3$, where the increments are mutually independent and each equals $+1$ or $-1$ with equal probabilities. Find $E[S_3^2]$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks the three-step second moment under the stated independent fair increments only."}}
```

<details>
<summary>Hint 1</summary>

Compute the mean and variance of a single increment.

</details>

<details>
<summary>Hint 2</summary>

Add independent variances, then recover the raw second moment using the sum's mean.

</details>

<details>
<summary>Worked solution</summary>

The walk has mean zero and variance equal to its step count.

1. Each increment has mean zero and second moment one, hence variance one.
2. Independence gives $E[S_3]=0$ and $\operatorname{Var}(S_3)=1+1+1=3$.
3. Since $E[S_3^2]=\operatorname{Var}(S_3)+(E[S_3])^2$, the required mean square is three.

Its mean is zero and variance three, so its second moment is three.

</details>
