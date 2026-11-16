# Update the probability of a source after a color observation

*Medium · [Statistics and probability](index.md)*

Choose urn A with prior probability $1/3$ and B with prior probability 2/3. Blue has conditional probability 3/4 under A and 1/4 under B. Given blue, find the posterior probability of A.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Form the two prior-times-likelihood weights.

</details>

<details>
<summary>Hint 2</summary>

Normalize by their sum.

</details>

<details>
<summary>Worked solution</summary>

Posterior source probability is its share of the total evidence weight.

1. The A-blue weight is one quarter; the B-blue weight is one sixth.
2. The total blue probability is five twelfths.
3. The posterior A probability is $(1/4)/(5/12)=3/5$.

</details>
