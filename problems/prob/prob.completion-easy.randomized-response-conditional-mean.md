# Recover a truth rate from a one-sided randomized response

*Easy · [Probability problems](index.md)*

A truthful binary answer is $X\in\{0,1\}$ with unknown $P(X=1)=\theta$. A respondent independently tosses a fair coin: on heads they report $Y=X$, and on tails they report $Y=1$. If the exact population report probability is $P(Y=1)=3/4$, find $\theta$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact finite observation is checked; no unrestricted explanation is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Condition on the private truth value or on the independent coin.

</details>

<details>
<summary>Hint 2</summary>

The forced-yes branch contributes a known probability before any truthful yes answers are counted.

</details>

<details>
<summary>Worked solution</summary>

Conditioning reveals an affine observation channel whose bias can be inverted.

1. Conditional on $X$, the report has mean $E[Y\mid X]=(1/2)X+1/2$, because one coin branch reports the truth and the other reports one.
2. Taking expectations gives $P(Y=1)=E[Y]=\theta/2+1/2$. The independence of the coin is what makes the mixing probabilities fixed.
3. Equating this to $3/4$ yields $\theta=2(3/4-1/2)=1/2$, a valid truth probability.

</details>
