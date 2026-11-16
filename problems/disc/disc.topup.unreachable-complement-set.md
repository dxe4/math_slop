# Find the complement of a connected component

*Medium · [Discrete mathematics](index.md)*

An undirected graph on $\{1,2,3,4,5,6,7\}$ has edges 12,23,35,56,47, where 12 means the edge from 1 to 2. List every vertex not reachable from 2.

```answer
{"answer":{"kind":"set","expected":"{4, 7}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

First determine the whole component containing the starting vertex.

</details>

<details>
<summary>Hint 2</summary>

Then take its complement inside the explicitly supplied vertex set.

</details>

<details>
<summary>Worked solution</summary>

Unreachable vertices are identified relative to both a start and a declared ambient set.

1. From two, the edges connect the vertices one,two,three,five,six.
2. The remaining edge connects four and seven in a separate component.
3. The unreachable set is $\{4,7\}$.

</details>
