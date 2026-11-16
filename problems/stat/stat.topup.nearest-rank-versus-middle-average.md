# Compare two explicitly defined middle conventions

*Medium · [Statistics and probability](index.md)*

For sorted data $0,2,4,6,8,10$, define P50 by nearest rank ceiling(n/2), and define the median by averaging the two middle observations. Find P50 minus median.

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Compute the two summaries separately using their stated definitions.

</details>

<details>
<summary>Hint 2</summary>

The first convention selects a single observation, while the second averages a pair.

</details>

<details>
<summary>Worked solution</summary>

Different declared conventions can give different answers on the same list.

1. Nearest rank is three, so P50 is four.
2. The averaged-middle median is $(4+6)/2=5$.
3. The difference is $4-5=-1$.

</details>
