# A Poisson count conditional on the total

*Medium · [Probability problems](index.md)*

Let $X,Y$ be independent Poisson variables, each of parameter $2$, with mass function $P(X=k)=e^{-2}2^k/k!$ for integers $k\ge0$. Find $P(X=1\mid X+Y=2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks this conditional probability for independent equal-rate Poisson counts only."}}
```

<details>
<summary>Hint 1</summary>

The conditioning event has only three possible count pairs.

</details>

<details>
<summary>Hint 2</summary>

Compute their joint masses using independence, then normalise the pair compatible with $X=1$.

</details>

<details>
<summary>Worked solution</summary>

Calculate the conditional law from its three possible joint outcomes.

1. The event $X+Y=2$ consists of $(X,Y)=(0,2),(1,1),(2,0)$. Their probabilities are $2e^{-4},4e^{-4},2e^{-4}$, respectively, by the supplied masses and independence.
2. Thus $P(X+Y=2)=8e^{-4}>0$, while $X=1$ within this event requires precisely $(1,1)$.
3. The conditional probability is $4e^{-4}/(8e^{-4})=1/2$. This derives the particular splitting probability without presupposing the general conditional-binomial theorem.

The compatible pairs have unnormalised masses $2,4,2$ times $e^{-4}$; the middle pair has conditional mass $1/2$.

</details>
