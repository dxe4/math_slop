# Logistic odds, risks, and a two-group maximum likelihood fit

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 3 of 12*

In group A, 2 of 10 outcomes are 1; in group B, 6 of 10 are 1. Fit the saturated logistic model $\operatorname{logit}P(Y=1\mid G)=\beta_0+\beta_1\mathbf{1}\{G=B\}$. Compute both coefficients, the odds ratio, the risk ratio, and the risk difference. State why none is automatically causal.

<details>
<summary>Hint 1</summary>

A saturated two-group Bernoulli fit reproduces each observed proportion

</details>

<details>
<summary>Hint 2</summary>

$logit(0.2)=\log(1/4)$ and $logit(0.6)=\log(3/2)$

</details>

<details>
<summary>Hint 3</summary>

The odds ratio and risk ratio are different contrasts

</details>

<details>
<summary>Worked solution</summary>

The fitted risks are $p_A=0.2$ and $p_B=0.6$. Thus $\beta_0=\operatorname{logit}(0.2)=\log(0.2/0.8)=\log(1/4)\approx-1.3863$. The group coefficient is $\operatorname{logit}(0.6)-\operatorname{logit}(0.2)=\log(3/2)-\log(1/4)=\log 6\approx1.7918$. Therefore the conditional odds ratio is $\exp(\beta_1)=6$. The risk ratio is $0.6/0.2=3$, and the risk difference is 0.4. These quantities differ because odds are $p/(1-p)$, not $p$. The fit describes the observed group-conditioned distribution. A causal interpretation additionally needs a defined intervention, consistency, randomized assignment or conditional exchangeability, positivity, and appropriate handling of selection and missing outcomes.

**Answer.** $\beta_0=\log(1/4)$, $\beta_1=\log 6$; odds ratio 6, risk ratio 3, and risk difference 0.4.

</details>

*Tags: generalized linear models, logistic regression, odds ratio, causal boundary*
