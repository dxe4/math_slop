# Stratification improves representation; clustering changes information

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 2 of 12*

A population has strata of sizes 75 and 25. Independent SRSWOR samples have sizes 15 and 5, means 8 and 20, and sample variances 9 and 16. Estimate the population mean and its design variance. Separately, a proposed equal-cluster design has cluster size $m=10$ and intracluster correlation $\rho=0.06$; compute its approximate design effect and explain why that formula is not part of the stratified calculation.

<details>
<summary>Hint 1</summary>

Use population shares 0.75 and 0.25

</details>

<details>
<summary>Hint 2</summary>

Each stratum sampling fraction is 0.2

</details>

<details>
<summary>Hint 3</summary>

The equal-size cluster approximation is 1+(m-1)ρ

</details>

<details>
<summary>Worked solution</summary>

The stratified mean is $0.75\cdot 8+0.25\cdot 20=11$. Both sampling fractions are 0.2. Its estimated design variance is $0.75^2(0.8)9/15+0.25^2(0.8)16/5=0.27+0.16=0.43$, so the design standard error is $\sqrt{0.43}\approx 0.656$. For the separate cluster proposal, $DEFF\approx 1+9\cdot 0.06=1.54$ under an equal-size exchangeable-correlation approximation. Strata are independently sampled partitions combined by known population shares; clusters are sampled groups whose members are correlated. The cluster formula is a planning approximation, not a correction to the given stratified SRSWOR variance. Actual multistage variance must follow its PSU design.

**Answer.** Mean 11, estimated variance 0.43 and SE about 0.656; the separate cluster approximation has DEFF 1.54.

</details>

*Tags: survey sampling, stratification, cluster design, finite-population correction*
