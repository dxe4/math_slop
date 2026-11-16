# Stay at the current state

*Easy · [Probability problems](index.md)*

From state $A$, a Markov chain moves to $B$ with probability $2/5$ and otherwise stays at $A$, with no other destination possible. Given that the current state is $A$, find the one-step stay probability.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the one-step stay probability conditional on the current state being A only."}}
```

<details>
<summary>Hint 1</summary>

The outgoing transition probabilities from a state sum to one.

</details>

<details>
<summary>Hint 2</summary>

The two possible destinations are disjoint and exhaustive, so use the complement of moving to $B$.

</details>

<details>
<summary>Worked solution</summary>

Complete a row of the transition matrix.

1. Under the given current-state condition, moving to $B$ has probability $2/5$.
2. Staying at $A$ is the only alternative, so $P_{AA}+P_{AB}=1$.
3. Hence $P_{AA}=1-2/5=3/5$. No information about transitions out of $B$ is needed for this one-step question.

The remaining stay probability is $3/5$.

</details>
