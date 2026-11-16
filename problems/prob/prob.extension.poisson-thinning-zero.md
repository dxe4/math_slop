# No retained Poisson events

*Medium · [Probability problems](index.md)*

Let $N\sim\operatorname{Poisson}(\log4)$, with natural logarithm. Conditional on $N=n$, retain each of those $n$ events independently with probability $1/2$, independently of the original count mechanism. Find the probability that no event is retained.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the zero-retained probability under the stated independent retention mechanism only."}}
```

<details>
<summary>Hint 1</summary>

Condition on the original event count.

</details>

<details>
<summary>Hint 2</summary>

For a fixed count, all retention attempts must fail. Average that conditional probability using the Poisson mass function and recognise the exponential series.

</details>

<details>
<summary>Worked solution</summary>

Average the all-discarded probability over the original count.

1. Set $\lambda=\log4$. Conditional on $N=n$, no retention has probability $(1/2)^n$, including probability one at $n=0$.
2. Total probability gives $\sum_{n=0}^{\infty}e^{-\lambda}\lambda^n(1/2)^n/n!=e^{-\lambda}e^{\lambda/2}=e^{-\lambda/2}$. The sum has nonnegative terms and is the exponential series.
3. Since $\lambda/2=\log2$, the answer is $e^{-\log2}=1/2$. This derives the zero mass directly rather than assuming a thinning theorem without its independence conditions.

Averaging $(1/2)^N$ gives $e^{-\log4/2}=1/2$.

</details>
