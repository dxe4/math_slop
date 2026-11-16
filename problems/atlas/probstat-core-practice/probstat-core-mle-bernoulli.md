# Maximum likelihood for a Bernoulli proportion

*Difficulty 2 of 5 · [Probability and statistics core practice](index.md) · exercise 4 of 12*

In $20$ independent Bernoulli trials, $14$ successes are observed. Write the likelihood function, find the maximum-likelihood estimate of $p$, and compute the observed information at that estimate.

<details>
<summary>Hint 1</summary>

The likelihood is $p^{14}(1-p)^{6}$ up to a combinatorial constant

</details>

<details>
<summary>Hint 2</summary>

Maximize the log-likelihood or recognize the sample proportion

</details>

<details>
<summary>Hint 3</summary>

Observed information is $-\ell''(\hat p)$

</details>

<details>
<summary>Worked solution</summary>

The likelihood is proportional to $p^{14}(1-p)^{6}$. The log-likelihood is $\ell(p)=14\ln p+6\ln(1-p)$. Differentiating gives $\ell'(p)=14/p-6/(1-p)$. Setting this to zero yields $14(1-p)=6p$, so $14=20p$ and $\hat p=14/20=0.7$. The second derivative is $\ell''(p)=-14/p^{2}-6/(1-p)^{2}$. At $\hat p=0.7$, the observed information is $-\ell''(0.7)=14/0.49+6/0.09\approx 28.57+66.67=95.24$. This quantifies the curvature of the likelihood peak.

**Answer.** $\hat p=0.7$; observed information approximately $95.24$.

</details>

*Tags: likelihood-estimation, Bernoulli, MLE*
