# Infer a cause from an observed delay

*Medium · [Probability problems](index.md)*

The probability of rain is $1/4$. A journey is late with probability $3/5$ in rain and $1/5$ without rain. Given that it is late, find the probability of rain.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Separate the rain and no-rain ways to obtain the observation.

</details>

<details>
<summary>Hint 2</summary>

Compare their prior-weighted probabilities rather than the two likelihoods alone.

</details>

<details>
<summary>Worked solution</summary>

Bayes normalizes the two branches yielding the same observation.

1. The rain-and-late probability is $(1/4)(3/5)=3/20$.
2. The no-rain-and-late probability is $(3/4)(1/5)=3/20$.
3. The two branches have equal mass, so the conditional probability of rain is $(3/20)/(6/20)=1/2$.

</details>
