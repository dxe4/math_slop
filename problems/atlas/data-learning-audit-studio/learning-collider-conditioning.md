# A collider creates conditional dependence

*Difficulty 3 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 6 of 9*

Let independent fair bits X and Y feed the deterministic node $Z=X$ XOR Y, giving the DAG $X\to Z←Y$. Verify that X and Y are marginally independent but conditionally dependent given $Z=0$. Explain why this probabilistic calculation alone does not authorize a causal intervention claim.

<details>
<summary>Hint 1</summary>

All four (X,Y) pairs initially have probability 1/4

</details>

<details>
<summary>Hint 2</summary>

$Z=0$ exactly when $X=Y$

</details>

<details>
<summary>Hint 3</summary>

Compare $P(X=0,Y=0|Z=0)$ with the product of conditional marginals

</details>

<details>
<summary>Worked solution</summary>

Before conditioning, $P(X=x,Y=y)=1/4=P(X=x)P(Y=y)$, so X and Y are independent. Event $Z=0$ consists of pairs (0,0) and (1,1), each with conditional probability 1/2. Hence $P(X=0,Y=0|Z=0)=1/2$, while $P(X=0|Z=0)P(Y=0|Z=0)=(1/2)(1/2)=1/4$. They are conditionally dependent. This is collider or selection behavior: observing their common effect couples its possible explanations. A DAG factorization and observational conditional probabilities become causal only with additional structural and intervention assumptions; the calculation alone does not identify effects of forcing X, Y, or Z.

**Answer.** X⊥Y marginally, but given $Z=0$ only 00 and 11 remain, so the joint 1/2 differs from the marginal product 1/4; no causal effect follows without causal assumptions.

</details>

*Tags: graphical model, collider, conditional independence, causal scope*
