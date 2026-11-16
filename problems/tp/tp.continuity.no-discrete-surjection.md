# A connected domain cannot cover two discrete points

*Medium · [Topology problems](index.md)*

How many continuous surjections exist from the usual interval $[0,1]$ onto the discrete space $\{0,1\}$?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A continuous image of a connected space is connected.

</details>

<details>
<summary>Hint 2</summary>

Surjectivity would make the image the entire specified target.

</details>

<details>
<summary>Worked solution</summary>

Connectedness rules out the requested surjective image.

1. The interval $[0,1]$ is connected.
2. The two-point discrete space is disconnected because its two singletons form a separation.
3. A continuous image cannot be that whole disconnected space. Therefore there are $0$ continuous surjections.

</details>
