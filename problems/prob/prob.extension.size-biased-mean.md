# Mean after size biasing

*Medium · [Probability problems](index.md)*

A variable $X$ takes $1$ and $3$ with equal probabilities. Define its size-biased law by $P(X^*=x)=xP(X=x)/E[X]$ for $x\in\{1,3\}$. Find $E[X^*]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Checks the mean under the explicitly defined size-biased law only."}}
```

<details>
<summary>Hint 1</summary>

First determine the positive normalising mean in the definition.

</details>

<details>
<summary>Hint 2</summary>

Calculate both new masses, check their sum, and average the support values using the new weights.

</details>

<details>
<summary>Worked solution</summary>

Reweight the original positive values in proportion to their size.

1. The original mean is $E[X]=(1+3)/2=2>0$, so the definition has a valid denominator.
2. The new masses are $P(X^*=1)=1(1/2)/2=1/4$ and $P(X^*=3)=3(1/2)/2=3/4$, which sum to one.
3. Therefore $E[X^*]=1(1/4)+3(3/4)=10/4=5/2$. The higher mean reflects the larger weight assigned to the value three.

New masses $1/4,3/4$ give mean $5/2$.

</details>
