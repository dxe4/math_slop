# Update a fair hidden bit

*Medium · [Probability problems](index.md)*

A hidden bit $H$ is equally likely to be $0$ or $1$. A report $R$ satisfies $P(R=1\mid H=1)=3/4$ and $P(R=1\mid H=0)=1/4$. Find $P(H=1\mid R=1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the posterior for observing report value one under this stated model only."}}
```

<details>
<summary>Hint 1</summary>

Compute the joint probability of report one under each hidden state.

</details>

<details>
<summary>Hint 2</summary>

The posterior normalises the state-one joint mass by the sum of both report-one masses.

</details>

<details>
<summary>Worked solution</summary>

Normalise the two joint masses compatible with the observation.

1. The joint masses are $P(H=1,R=1)=(1/2)(3/4)=3/8$ and $P(H=0,R=1)=(1/2)(1/4)=1/8$.
2. These events are disjoint and exhaust report one, so $P(R=1)=3/8+1/8=1/2>0$.
3. Therefore $P(H=1\mid R=1)=(3/8)/(1/2)=3/4$. It happens to equal one supplied likelihood here because the prior and likelihoods have this particular symmetry.

The compatible joint masses are $3/8$ and $1/8$; normalising the first by their sum gives $3/4$.

</details>
