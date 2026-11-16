# Measure empirical repeated-sampling coverage

*Easy · [Statistics and probability](index.md)*

In a simulation with a fixed known parameter, an interval procedure is applied to $1000$ independent simulated samples. Exactly $950$ intervals contain that parameter. What is the empirical coverage proportion?

| Given information | Value |
| --- | --- |
| replications | 1000 |
| captures | 950 |
| fixed parameter | true |

```answer
{"answer":{"kind":"rational","expected":{"numerator":19,"denominator":20},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The numerator counts successful interval captures.

</details>

<details>
<summary>Hint 2</summary>

The denominator is the number of repeated samples.

</details>

<details>
<summary>Worked solution</summary>

Coverage is assessed across repeated random intervals for a fixed target.

1. There are $950$ captures among $1000$ simulated intervals.
2. The empirical proportion is $950/1000=19/20$. It estimates coverage under this simulation, rather than proving exact population coverage.

</details>
