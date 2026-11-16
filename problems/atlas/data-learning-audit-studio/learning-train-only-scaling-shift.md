# Train-only scaling reveals a shifted test point

*Difficulty 2 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 1 of 9*

A feature has training values 0 and 2 and one test value 10. Standardize by $z=(x-mean)/s$, where s is the population root-mean-square deviation on the data used to fit the transformation. Compute the standardized test value when mean and s use training data only. Then compute it when all three values are used, and explain why the second calculation is leakage in a frozen test evaluation.

<details>
<summary>Hint 1</summary>

The training mean is 1 and its two deviations are -1 and 1

</details>

<details>
<summary>Hint 2</summary>

For all three values, the mean is 4 and the squared deviations sum to 56

</details>

<details>
<summary>Hint 3</summary>

A test-fitted scale lets evaluation data alter the procedure being evaluated

</details>

<details>
<summary>Worked solution</summary>

On training data, $\operatorname{mean}=1$ and $s=\sqrt{(1+1)/2}=1$, so the test value becomes $(10-1)/1=9$. Using all values gives $\operatorname{mean}=4$ and $s=\sqrt{(16+4+36)/3}=\sqrt{56/3}$, so the transformed test value is $6/\sqrt{56/3}$, approximately 1.389. The full-data transformation makes the extreme test value look much less unusual precisely because that value changed the centering and scale. In a frozen evaluation, preprocessing parameters are part of the fitted procedure and must come from training data. The value 9 is evidence of range shift, not permission to hide it by refitting on test data.

**Answer.** Train-only $z=9$; full-data $z=6/\sqrt{56/3}\approx 1.389$, but the latter leaks test information into preprocessing.

</details>

*Tags: EDA, scaling, leakage, distribution shift*
