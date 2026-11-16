# Bootstrap standard error in principle

*Difficulty 4 of 5 · [Probability and statistics core practice](index.md) · exercise 9 of 12*

Explain why resampling with replacement from the original sample approximates the sampling distribution of the sample median. Then state one situation where the ordinary bootstrap standard error can be unreliable.

<details>
<summary>Hint 1</summary>

The empirical distribution places mass $1/n$ on each observed value

</details>

<details>
<summary>Hint 2</summary>

Think about what happens at points where the density is zero or the statistic is nondifferentiable

</details>

<details>
<summary>Worked solution</summary>

The empirical distribution $\widehat F$ places probability $1/n$ on each observed value. Resampling from the data is equivalent to sampling from $\widehat F$. If the true data-generating distribution is $F$, then $\widehat F$ converges to $F$, so the distribution of a statistic under $\widehat F$ approximates its distribution under $F$. This justifies using the bootstrap spread to estimate the true sampling spread. However, the ordinary bootstrap can be unreliable when the statistic depends heavily on tail behavior (for example, the maximum of a bounded distribution or a quantile at a point where the density is zero), because $\widehat F$ may poorly represent the relevant extremes or local structure.

**Answer.** Bootstrap approximates sampling from $\widehat F\approx F$; unreliable for extremes or nondifferentiable statistics.

</details>

*Tags: resampling-methods, bootstrap, sampling distribution*
