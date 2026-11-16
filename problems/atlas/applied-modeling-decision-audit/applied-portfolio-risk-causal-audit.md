# Decompose portfolio variance and stop at the claim boundary

*Difficulty 4 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 12 of 12*

Two hypothetical one-period returns have means 4% and 8%, standard deviations 10% and 20%, and correlation 0.25. At weights 0.6 and 0.4 compute mean, variance, and standard deviation. State why the result is neither maximum loss nor financial advice.

<details>
<summary>Hint 1</summary>

Use w squared sigma squared terms

</details>

<details>
<summary>Hint 2</summary>

Include twice the covariance cross term

</details>

<details>
<summary>Hint 3</summary>

Take a square root only after summing variance

</details>

<details>
<summary>Worked solution</summary>

Mean is $0.6\cdot 0.04+0.4\cdot 0.08=0.056$. Variance terms are $0.6^2\cdot 0.1^2=0.0036$, $0.4^2\cdot 0.2^2=0.0064$, and $2\cdot 0.6\cdot 0.4\cdot 0.25\cdot 0.1\cdot 0.2=0.0024$. Total variance is 0.0124, so standard deviation is $\sqrt{0.0124}$, approximately 0.1114 or 11.14%. Standard deviation is a second-moment summary under supplied hypothetical moments, not a cap on tail loss. Means, covariance, liquidity, constraints, horizon, goals, and suitability can differ, so the calculation provides no personal recommendation.

**Answer.** Mean 5.6%, variance 0.0124, standard deviation about 11.14%; this modeled moment is neither maximum loss nor advice.

</details>

*Tags: financial mathematics, portfolio, covariance, risk boundary, not advice*
