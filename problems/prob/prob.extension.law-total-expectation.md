# Average two conditional means

*Easy · [Probability problems](index.md)*

An integrable variable $X$ and a fair bit $H$ satisfy $E[X\mid H=0]=2$ and $E[X\mid H=1]=6$. Find $E[X]$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the unconditional mean under the stated two-stratum conditional data only."}}
```

<details>
<summary>Hint 1</summary>

The two bit values form a partition of the sample space.

</details>

<details>
<summary>Hint 2</summary>

Weight each conditional mean by the probability of its bit value; no independence assumption is supplied or needed.

</details>

<details>
<summary>Worked solution</summary>

Average conditional means over the partition.

1. The fair bit gives both strata probability $1/2$.
2. The law of total expectation for integrable $X$ gives $E[X]=\sum_{h=0}^1P(H=h)E[X\mid H=h]$.
3. Substitution yields $(1/2)2+(1/2)6=1+3=4$. The unequal conditional means would in fact be incompatible with independence of $X$ and $H$.

Their weighted mean is $(2+6)/2=4$.

</details>
