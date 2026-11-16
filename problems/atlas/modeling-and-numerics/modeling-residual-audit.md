# Residuals expose a missing mechanism

*Difficulty 4 of 5 · [Modeling and numerical judgment](index.md) · exercise 5 of 5*

A linear temperature model has residuals that are positive every afternoon and negative every night for 30 days. What does this reveal, and what should you try before reporting a tighter confidence interval?

<details>
<summary>Hint 1</summary>

Residuals should not retain systematic time structure

</details>

<details>
<summary>Hint 2</summary>

More precise inference cannot repair a misspecified mean model

</details>

<details>
<summary>Worked solution</summary>

The residuals contain a daily pattern, so the model has omitted a periodic mechanism; errors are not centered randomly around zero over time and are likely autocorrelated. A confidence interval derived under independent, correctly specified errors would be misleadingly precise. Add and justify a diurnal component (for example sine/cosine terms or time-of-day effects), inspect residuals again, validate on held-out days, and only then quantify uncertainty with an error model that accounts for remaining dependence.

**Answer.** The model misses a daily cycle; revise and validate the mean/error structure before tightening uncertainty.

</details>

*Tags: residual, misspecification, validation*
