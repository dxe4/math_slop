# Expected reward from a gated experiment

*Medium · [Probability problems](index.md)*

Let $N$ be Bernoulli with $P(N=1)=1/2$. A reward $R$ is zero when $N=0$. Conditional on $N=1$, it is $4$ with probability $1/2$ and zero otherwise. Find $E[R]$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks the unconditional expected reward for this conditional reward specification only."}}
```

<details>
<summary>Hint 1</summary>

Separate the two values of the gate variable $N$.

</details>

<details>
<summary>Hint 2</summary>

Compute the mean reward in each branch and weight those means by the branch probabilities.

</details>

<details>
<summary>Worked solution</summary>

Average conditional expected rewards.

1. On the branch $N=0$, the reward is zero, so $E[R\mid N=0]=0$.
2. On the branch $N=1$, its conditional mean is $4(1/2)+0(1/2)=2$.
3. The branch probabilities are $1/2$ each, hence $E[R]=(1/2)0+(1/2)2=1$. Equivalently, the unconditional probability of reward four is $(1/2)(1/2)=1/4$.

The open-branch mean is two and its weight is $1/2$, so the overall expected reward is one.

</details>
