# A negative report

*Medium · [Probability problems](index.md)*

A hypothesis $H$ has prior probability $1/4$. A negative report $N$ satisfies $P(N\mid H)=1/2$ and $P(N\mid H^c)=3/4$. Find $P(H\mid N)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":11},"checker_scope":"Checks the posterior after the specified negative report only."}}
```

<details>
<summary>Hint 1</summary>

A negative report can occur under either $H$ or $H^c$.

</details>

<details>
<summary>Hint 2</summary>

Form both prior-times-likelihood joint masses; divide the $H$ mass by their sum.

</details>

<details>
<summary>Worked solution</summary>

The report's name does not alter Bayes' rule; its likelihoods determine the update.

1. The joint mass under $H$ is $P(H\cap N)=(1/4)(1/2)=1/8=2/16$.
2. The complementary prior is $3/4$, so $P(H^c\cap N)=(3/4)(3/4)=9/16$. Hence $P(N)=11/16>0$.
3. The posterior is $(2/16)/(11/16)=2/11$. Both possible causes of a negative report belong in the denominator.

Joint report masses $2/16$ and $9/16$ give posterior $2/11$ for $H$.

</details>
