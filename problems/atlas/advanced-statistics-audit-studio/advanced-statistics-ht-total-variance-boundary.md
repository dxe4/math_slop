# Unequal inclusion chances and the missing variance information

*Difficulty 3 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 1 of 12*

A realized survey sample contains units A and C with fixed values $y_A=12$ and $y_C=30$. Their first-order inclusion probabilities are $\pi_A=1/2$ and $\pi_C=1/4$. Compute the Horvitz-Thompson estimate of the finite-population total. Prove its design unbiasedness in general, and explain why these two first-order probabilities alone do not determine a design standard error.

<details>
<summary>Hint 1</summary>

Weight each observed value by 1/π_i

</details>

<details>
<summary>Hint 2</summary>

Write the estimator as a sum of inclusion indicators

</details>

<details>
<summary>Hint 3</summary>

Variance also contains Cov(I_i,I_j), hence pairwise inclusion probabilities

</details>

<details>
<summary>Worked solution</summary>

The realized estimate is $12/(1/2)+30/(1/4)=24+120=144$. In general, with fixed finite-population values, $\widehat{Y}_{HT}=\sum_i I_i y_i/\pi_i$. Since $\mathbb{E}_d[I_i]=\pi_i$, linearity gives $\mathbb{E}_d[\widehat{Y}_{HT}]=\sum_i y_i$, provided every $\pi_i$ is positive. Its variance is $\sum_i\sum_j(\pi_{ij}-\pi_i\pi_j)y_i y_j/(\pi_i\pi_j)$, where $\pi_{ij}$ is the probability that $i$ and $j$ are selected together. First-order probabilities determine expectations but not these inclusion covariances: designs with the same $\pi_i$ can select units independently, together, or mutually exclusively and have different variances. A standard error therefore needs the full design, pairwise probabilities, or valid replicate weights. The calculation does not correct frame undercoverage or nonresponse.

**Answer.** The HT total estimate is 144; unbiasedness follows from $E(I_i)=\pi_i$, while variance additionally requires pairwise inclusion probabilities or equivalent design information.

</details>

*Tags: survey sampling, Horvitz-Thompson, design variance, inclusion probability*
