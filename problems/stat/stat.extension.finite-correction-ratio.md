# Finite correction ratio

*Easy · [Statistics and probability](index.md)*

For simple random sampling without replacement with $N=10$ and $n=4$, let $S^2=(N-1)^{-1}\sum_i(y_i-\bar Y)^2$. What is the multiplier $1-n/N$ in $\operatorname{Var}(\bar y)=(1-n/N)S^2/n$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Keep the stated divisor convention for the finite-population variance.

</details>

<details>
<summary>Hint 2</summary>

Form the sampled fraction and subtract it from one.

</details>

<details>
<summary>Worked solution</summary>

The correction is the factor accompanying $S^2/n$ in the stated without-replacement formula.

1. The sampling fraction is $n/N=4/10=2/5$.
2. The requested multiplier is $1-2/5=3/5$.
3. This multiplies $S^2/n$, not literally the actual with-replacement variance. With the same divisor convention that variance is $((N-1)/N)S^2/n$, so the ratio of the two design variances would instead be $(N-n)/(N-1)$.

</details>
