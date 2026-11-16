# A specified two-step path

*Easy · [Probability problems](index.md)*

A time-homogeneous Markov chain starts at $X_0=0$ and has $P_{01}=1/2$, $P_{12}=1/3$. Find $P(X_1=1,X_2=2)$, the probability of the specified path $0,1,2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Checks the specified path probability only, not the full two-step probability of ending at state two."}}
```

<details>
<summary>Hint 1</summary>

This asks for one prescribed intermediate state, not all ways to reach the endpoint.

</details>

<details>
<summary>Hint 2</summary>

Use the conditional multiplication rule with the Markov transition for the second step.

</details>

<details>
<summary>Worked solution</summary>

Multiply transition probabilities along the specified path.

1. The first required transition has probability $P_0(X_1=1)=1/2$.
2. Given that transition, the Markov property makes the next required transition probability $P_{12}=1/3$.
3. Thus the path probability is $(1/2)(1/3)=1/6$. Other possible paths ending at two are excluded by the condition $X_1=1$.

Its joint path mass is $1/6$.

</details>
