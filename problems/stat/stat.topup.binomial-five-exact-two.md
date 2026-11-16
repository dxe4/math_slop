# Count exactly two successes in five independent trials

*Medium · [Statistics and probability](index.md)*

Five independent trials each succeed with probability $1/3$. Find the probability of exactly two successes.

```answer
{"answer":{"kind":"rational","expected":{"numerator":80,"denominator":243},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

A fixed placement of two successes has probability (1/3)^2(2/3)^3.

</details>

<details>
<summary>Hint 2</summary>

Count how many placements of the two successes there are.

</details>

<details>
<summary>Worked solution</summary>

Independence and the number of success placements give the binomial probability.

1. There are ten choices of the two successful trial positions.
2. Every such placement has probability $8/243$.
3. The placements are disjoint, so the total probability is $80/243$.

</details>
