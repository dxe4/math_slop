# An exact rank test with its exchangeability hypothesis

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 8 of 12*

Two randomized groups each contain two distinct outcomes. Group A has 1 and 2; group B has 3 and 4. Using the sum of A's ranks, enumerate the exact two-sided permutation p-value with extremeness |W-E_0W|. State why the calculation would be invalid for an observational time series split into early and late pairs.

<details>
<summary>Hint 1</summary>

There are $\binom{4}{2}=6$ label assignments

</details>

<details>
<summary>Hint 2</summary>

Possible rank sums are 3, 4, 5, 5, 6, 7 and $\mathbb{E}_0[W]=5$

</details>

<details>
<summary>Hint 3</summary>

The observed sum is 3

</details>

<details>
<summary>Worked solution</summary>

The six equally likely A-rank sets under randomized exchangeable labels are {1,2},{1,3},{1,4},{2,3},{2,4},{3,4}, with sums 3,4,5,5,6,7. The observed $W=3$ is distance 2 from its null center 5. Sums at least as extreme are 3 and 7, so the exact two-sided p-value is $2/6=1/3$. This coarse result reflects only six randomizations; an asymptotic decimal would not create information. For early-versus-late time-series observations, arbitrary labels are not exchangeable under temporal dependence or trend, and the assignment was not randomized. A valid null must preserve ordering, blocks, or a fitted temporal mechanism. Also, rank-sum is a general distributional comparison; calling it solely a median test needs additional equal-shape assumptions.

**Answer.** The exact two-sided p-value is 1/3 from sums 3 and 7; it requires label exchangeability under the randomized null.

</details>

*Tags: nonparametric statistics, rank test, permutation, exchangeability*
