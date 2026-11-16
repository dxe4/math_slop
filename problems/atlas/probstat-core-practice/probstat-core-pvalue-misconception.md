# Diagnose a p-value misconception

*Difficulty 4 of 5 · [Probability and statistics core practice](index.md) · exercise 11 of 12*

A researcher obtains $p=0.03$ in a test of $H_0:\mu=0$ and concludes: 'The probability that the null hypothesis is true is $3\%$.' Identify the error, state the correct interpretation of the p-value, and explain why the researcher's statement would require a Bayesian posterior rather than a p-value.

<details>
<summary>Hint 1</summary>

A p-value is computed assuming $H_0$ is true

</details>

<details>
<summary>Hint 2</summary>

$P(H_0\mid\text{data})$ requires a prior and uses Bayes' theorem

</details>

<details>
<summary>Worked solution</summary>

The error is confusing $P(\text{data}\mid H_0)$ with $P(H_0\mid\text{data})$. The p-value is the probability of observing a test statistic at least as extreme as the one obtained, calculated under the assumption that $H_0$ is true. It is not the posterior probability of $H_0$. The correct interpretation is: if $\mu=0$, the chance of seeing a result this extreme or more is $3\%$. To claim $P(H_0\mid\text{data})=0.03$, one needs a prior probability for $H_0$ and must apply Bayes' theorem, which the frequentist p-value framework does not provide. With a skeptical prior, the posterior probability of $H_0$ can be much larger than the p-value.

**Answer.** The p-value is $P(\text{data extremeness}\mid H_0)$, not $P(H_0\mid\text{data})$; the latter needs a prior.

</details>

*Tags: hypothesis-testing, p-value, misconception*
