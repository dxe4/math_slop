# Apply the declared percentile rank

*Medium · [Statistics and probability](index.md)*

The sorted observations are $1,1,2,3,5,8,13,21$. Define the p-percentile as the observation at rank ceiling(np), counting from one. Find the percentile for p=3/4.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Calculate the rank using all eight observations.

</details>

<details>
<summary>Hint 2</summary>

Read the observation at that one-based rank.

</details>

<details>
<summary>Worked solution</summary>

A stated rank convention removes interpolation ambiguity.

1. The required rank is $\lceil8(3/4)\rceil=6$.
2. The sixth sorted observation is eight.
3. Thus the declared seventy-fifth percentile is eight.

</details>
