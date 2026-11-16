# Beta prior and binomial posterior

*Difficulty 3 of 5 · [Probability and statistics core practice](index.md) · exercise 6 of 12*

Suppose $p\sim\mathrm{Beta}(2,2)$ and, given $p$, we observe $X\sim\mathrm{Binomial}(10,p)$ with $X=7$. State the posterior distribution of $p$ and compute its posterior mean. Compare this mean with the MLE.

<details>
<summary>Hint 1</summary>

Beta is conjugate to binomial: add successes to the first parameter and failures to the second

</details>

<details>
<summary>Hint 2</summary>

The Beta mean is $\alpha/(\alpha+\beta)$

</details>

<details>
<summary>Worked solution</summary>

With a $\mathrm{Beta}(2,2)$ prior and $7$ successes out of $10$, the posterior is $\mathrm{Beta}(2+7,2+3)=\mathrm{Beta}(9,5)$. Its mean is $9/(9+5)=9/14\approx 0.643$. The MLE is $7/10=0.7$. The posterior mean is shrunk toward the prior mean $0.5$ relative to the MLE; the prior exerts regularization that diminishes as data accumulate.

**Answer.** Posterior $\mathrm{Beta}(9,5)$; posterior mean $9/14\approx 0.643$; MLE is $0.7$.

</details>

*Tags: bayesian-inference, conjugate prior, Beta-Binomial*
