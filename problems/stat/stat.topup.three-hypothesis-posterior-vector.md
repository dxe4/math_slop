# Normalize all three posterior probabilities

*Medium · [Statistics and probability](index.md)*

Mutually exclusive exhaustive hypotheses H1,H2,H3 have priors $1/2,1/3,1/6$. An observed event has likelihoods 1/5,2/5,3/5 respectively. Return the posterior vector in the order (H1,H2,H3).

```answer
{"answer":{"kind":"vector","expected":["3/10","2/5","3/10"],"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The unequal priors must multiply the likelihoods before normalization.

</details>

<details>
<summary>Hint 2</summary>

The evidence weights are one tenth, two fifteenths and one tenth.

</details>

<details>
<summary>Worked solution</summary>

A posterior vector is normalized evidence weight, not a normalized likelihood list alone.

1. The three evidence weights are $1/10,2/15,1/10$, whose sum is one third.
2. Dividing each by one third gives $3/10,2/5,3/10$.
3. These are nonnegative and sum to one, in the requested hypothesis order.

</details>
