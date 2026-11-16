# Normalize a complete finite probability model

*Medium · [Statistics and probability](index.md)*

Three disjoint exhaustive outcomes have probabilities $k,2k,3k$ for an unknown positive k. Find the probability that the first or third outcome occurs.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The complete probability total must be one.

</details>

<details>
<summary>Hint 2</summary>

The requested outcomes are disjoint, so their probabilities add.

</details>

<details>
<summary>Worked solution</summary>

Normalization fixes the common weight before the event probability is evaluated.

1. Exhaustiveness gives $6k=1$, so k equals one sixth.
2. The first-or-third probability is $k+3k=4k$.
3. Thus it is $4/6=2/3$, within a valid nonnegative model.

</details>
