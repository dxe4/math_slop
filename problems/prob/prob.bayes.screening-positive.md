# Update after a positive screen

*Medium · [Probability problems](index.md)*

A condition has prevalence $1/10$. A screen is positive with probability $4/5$ when the condition is present and $1/5$ when it is absent. Given a positive result, find the probability that the condition is present.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":13},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the positive-result probability through both mutually exclusive condition states.

</details>

<details>
<summary>Hint 2</summary>

Normalize the positive-and-present branch by the total positive probability.

</details>

<details>
<summary>Worked solution</summary>

Bayes combines the prior with both true-positive and false-positive branches.

1. The joint probability of condition and positive result is $(1/10)(4/5)=4/50$.
2. The absent-and-positive branch has probability $(9/10)(1/5)=9/50$, so the total positive probability is $13/50$.
3. The posterior is $(4/50)/(13/50)=4/13$.

</details>
