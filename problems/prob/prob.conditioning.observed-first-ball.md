# Update an urn after an observed draw

*Easy · [Probability problems](index.md)*

An urn starts with $3$ red and two blue balls. Two balls are drawn without replacement. Given that the first was red, find the probability that the second is red.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Update the actual remaining contents after the observation.

</details>

<details>
<summary>Hint 2</summary>

Use the remaining red count and remaining total, not the original counts.

</details>

<details>
<summary>Worked solution</summary>

The observed first draw changes the physical sample space for the second.

1. A red first draw leaves two red and two blue balls.
2. The second draw is uniform among these four remaining balls.
3. The probability of red is $2/4=1/2$.

</details>
