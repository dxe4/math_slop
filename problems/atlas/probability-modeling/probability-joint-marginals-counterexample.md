# Marginals do not determine dependence

*Difficulty 3 of 5 · [Probability modeling](index.md) · exercise 6 of 15*

Construct two pairs of fair Bernoulli random variables $(X,Y)$ having the same marginals but different values of $P(X=Y)$. Explain what information the marginals omit.

<details>
<summary>Hint 1</summary>

Use $Y=X$ in one construction

</details>

<details>
<summary>Hint 2</summary>

Use independent fair bits in another

</details>

<details>
<summary>Worked solution</summary>

Let $X$ be a fair bit. In the first construction set $Y=X$; both marginals are fair and $P(X=Y)=1$. In the second, choose $X$ and $Y$ independently and fairly; both marginals are still fair, but $P(X=Y)=P((0,0))+P((1,1))=1/4+1/4=1/2$. Marginal laws describe variables separately and omit their joint dependence.

**Answer.** For $Y=X$ the equality probability is $1$; for independent fair $X,Y$ it is $1/2$, despite identical marginals.

</details>

*Tags: joint distribution, marginal, dependence, counterexample*
