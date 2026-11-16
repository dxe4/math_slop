# Recover a marginal from two conditionals

*Medium · [Probability problems](index.md)*

Suppose $P(B)=2/5$, $P(A\mid B)=3/4$ and $P(A\mid B^c)=1/6$. Find $P(A)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Checks the marginal event probability implied by the stated conditional data only."}}
```

<details>
<summary>Hint 1</summary>

Partition $A$ into its part inside $B$ and its part outside $B$.

</details>

<details>
<summary>Hint 2</summary>

Use the probability of each conditioning event as the weight for its conditional probability.

</details>

<details>
<summary>Worked solution</summary>

Use total probability over $B,B^c$.

1. The complementary event has probability $P(B^c)=3/5$, so both conditioning events have positive mass.
2. The joint pieces are $P(A\cap B)=(2/5)(3/4)=3/10$ and $P(A\cap B^c)=(3/5)(1/6)=1/10$.
3. Their disjoint union is $A$, giving $P(A)=3/10+1/10=2/5$. The equality to $P(B)$ is a numerical feature of these data, not an independence conclusion.

Weighted masses $3/10$ and $1/10$ sum to $P(A)=2/5$.

</details>
