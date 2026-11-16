# Sample without replacement

*Medium · [Probability problems](index.md)*

An urn contains $4$ red and three blue balls. Three balls are sampled uniformly without replacement. Find the probability of exactly two red balls.

```answer
{"answer":{"kind":"rational","expected":{"numerator":18,"denominator":35},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count unordered three-ball samples, all of which are equally likely.

</details>

<details>
<summary>Hint 2</summary>

A favorable sample chooses independently within the red and blue populations, then combines those choices.

</details>

<details>
<summary>Worked solution</summary>

Use the hypergeometric ratio for an unordered sample.

1. There are $\binom73=35$ equally likely three-ball subsets.
2. A favorable sample chooses two of the four red balls and one of the three blue balls, in $\binom42\binom31=18$ ways.
3. The required probability is $18/35$.

</details>
