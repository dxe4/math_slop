# Choose and compare center and spread summaries

*Difficulty 1 of 5 · [Probability and statistics core practice](index.md) · exercise 1 of 12*

For the sample $12, 15, 18, 21, 24$, compute the mean, the population standard deviation, and the sample standard deviation. State which standard deviation is appropriate when these five numbers are treated as the entire population, and which is appropriate when they are treated as a sample from a larger population.

<details>
<summary>Hint 1</summary>

The mean is the total divided by the count

</details>

<details>
<summary>Hint 2</summary>

Population variance divides by $n$; sample variance divides by $n-1$

</details>

<details>
<summary>Worked solution</summary>

The total is $12+15+18+21+24=90$, so the mean is $90/5=18$. The squared deviations from the mean are $(-6)^2=36$, $(-3)^2=9$, $0^2=0$, $3^2=9$, and $6^2=36$, summing to $90$. The population variance is $90/5=18$, so the population standard deviation is $\sqrt{18}\approx 4.24$. The sample variance is $90/4=22.5$, so the sample standard deviation is $\sqrt{22.5}\approx 4.74$. When these five values are the entire population, the population standard deviation $\sqrt{18}$ describes the actual spread. When they are a sample, the sample standard deviation $\sqrt{22.5}$ estimates the unknown population spread with an unbiased variance estimator.

**Answer.** Mean $18$; population SD $\sqrt{18}\approx 4.24$; sample SD $\sqrt{22.5}\approx 4.74$.

</details>

*Tags: descriptive-statistics, mean, standard deviation*
