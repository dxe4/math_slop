# Fisher's exact test and hypergeometric probability

*Difficulty 5 of 5 · [Probability and statistics core practice](index.md) · exercise 12 of 12*

In a $2\times 2$ table, $8$ subjects receive a treatment and $8$ receive a control. Among the $8$ treated, $6$ recover; among the $8$ controls, $2$ recover. Under the null hypothesis of no treatment effect and conditioning on the marginal totals, the number of treated recoveries follows a hypergeometric distribution. Compute the exact p-value for testing whether treatment increases recovery, using the hypergeometric tail.

<details>
<summary>Hint 1</summary>

The table has row totals $8,8$ and column totals $8,8$

</details>

<details>
<summary>Hint 2</summary>

The hypergeometric probability is $\binom{8}{k}\binom{8}{8-k}/\binom{16}{8}$ for treated recoveries $k$

</details>

<details>
<summary>Hint 3</summary>

Sum probabilities for $k\ge 6$

</details>

<details>
<summary>Worked solution</summary>

Conditioning on the margins, the number $K$ of treated recoveries follows a hypergeometric distribution with population size $16$, $8$ successes in the population, and $8$ draws. The probability mass function is $P(K=k)=\binom{8}{k}\binom{8}{8-k}/\binom{16}{8}$. We need $P(K\ge 6)=P(K=6)+P(K=7)+P(K=8)$. Computing each term: $P(K=6)=\binom{8}{6}\binom{8}{2}/\binom{16}{8}=28\cdot 28/12870=784/12870\approx 0.0609$; $P(K=7)=\binom{8}{7}\binom{8}{1}/\binom{16}{8}=8\cdot 8/12870=64/12870\approx 0.0050$; $P(K=8)=\binom{8}{8}\binom{8}{0}/\binom{16}{8}=1/12870\approx 0.00008$. Summing gives $849/12870\approx 0.0660$. The exact one-sided p-value is about $0.066$, which does not reach the conventional $0.05$ threshold despite the apparently large observed difference.

**Answer.** One-sided p-value $849/12870\approx 0.066$.

</details>

*Tags: hypothesis-testing, Fisher exact test, hypergeometric*
