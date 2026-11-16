# Compute closure in a one-sided basis

*Medium · [Topology problems](index.md)*

Give the real line the lower-limit topology with basis $[a,b)$, $a<b$. Find the closure of $(0,1)$ as an interval in real coordinates.

```answer
{"answer":{"kind":"interval","expected":"[0,1)","checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every basic neighborhood of zero meets the positive interval.

</details>

<details>
<summary>Hint 2</summary>

At one, a basic neighborhood can lie entirely on its right.

</details>

<details>
<summary>Worked solution</summary>

A changed local basis changes which endpoints are closure points.

1. Every point of $(0,1)$ is already in the set, and every lower-limit neighborhood $[0,b)$ of zero meets it.
2. The point one has neighborhood $[1,2)$ disjoint from it. Any larger input has a similar right neighborhood, while an input below zero has one ending before zero.
3. The closure is therefore $[0,1)$ rather than the usual closed interval.

</details>
