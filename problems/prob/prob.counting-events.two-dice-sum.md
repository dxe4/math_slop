# Count a sum of two dice

*Easy · [Probability problems](index.md)*

Two independent fair six-sided dice are rolled. Find the probability that their sum is $9$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":9},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use ordered pairs, since the dice are distinguishable.

</details>

<details>
<summary>Hint 2</summary>

List the possible first results that allow a valid second result.

</details>

<details>
<summary>Worked solution</summary>

Count favorable ordered outcomes in the uniform product sample space.

1. There are $6^2=36$ equally likely ordered outcomes.
2. The favorable pairs are $(3,6),(4,5),(5,4),(6,3)$.
3. The probability is $4/36=1/9$.

</details>
