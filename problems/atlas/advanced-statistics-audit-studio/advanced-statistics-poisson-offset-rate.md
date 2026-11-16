# Exposure belongs in a count model

*Difficulty 3 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 4 of 12*

Region A records 18 events over 6,000 person-years; region B records 12 events over 2,000 person-years. Fit a two-group Poisson model with log-exposure offset and a group indicator. Compute the two rates, the fitted rate ratio B versus A, and the group coefficient. Diagnose the raw-count comparison 12/18.

<details>
<summary>Hint 1</summary>

The saturated group rate is count divided by exposure

</details>

<details>
<summary>Hint 2</summary>

The group coefficient is the log rate ratio

</details>

<details>
<summary>Hint 3</summary>

Raw counts compare different amounts of opportunity

</details>

<details>
<summary>Worked solution</summary>

Region A's fitted rate is $18/6000=0.003$ per person-year. Region B's rate is $12/2000=0.006$ per person-year. With log exposure fixed as an offset, the fitted B-to-A rate ratio is $0.006/0.003=2$ and the group coefficient is $\log 2\approx0.6931$. The raw-count ratio is $12/18=2/3$ and points in the opposite direction because A contributes three times the exposure. The Poisson likelihood also assumes conditional variance equal to the mean and conditional independence at the modeled unit level; overdispersion or clustering needs diagnosis. The coefficient is an associational rate contrast unless an exposure intervention is identified.

**Answer.** Rates are 0.003 and 0.006 per person-year, so B/A rate ratio is 2 and $\beta_B=\log 2$; raw counts confound rate with exposure.

</details>

*Tags: generalized linear models, Poisson regression, offset, rate ratio*
