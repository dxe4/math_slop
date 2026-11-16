# The second success occurs third

*Medium · [Probability problems](index.md)*

Mutually independent trials each succeed with probability $1/2$. Let $T$ count trials through the second success. Find $P(T=3)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the trial-three second-success probability for this stopping convention only."}}
```

<details>
<summary>Hint 1</summary>

The final trial must be a success, with exactly one earlier success.

</details>

<details>
<summary>Hint 2</summary>

Count the allowed patterns in the first two positions and multiply each full-pattern probability by the number of patterns.

</details>

<details>
<summary>Worked solution</summary>

Separate the required final success from the earlier success positions.

1. To stop at trial three, trial three must succeed and exactly one of trials one and two must succeed.
2. The only permitted length-three patterns are success–failure–success and failure–success–success.
3. Each has probability $(1/2)^3=1/8$ by independence, and the two events are disjoint. Hence $P(T=3)=2/8=1/4$. A pattern with two early successes would have stopped before trial three.

The two admissible patterns each have mass $1/8$, so the stopping probability is $1/4$.

</details>
