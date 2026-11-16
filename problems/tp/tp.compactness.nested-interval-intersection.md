# Intersect a decreasing compact family

*Medium · [Topology problems](index.md)*

Find $\bigcap_{n\ge1}[0,1/n]$ in the usual real line. Enter the resulting point set.

```answer
{"answer":{"kind":"set","expected":[0],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

One point belongs to every interval immediately.

</details>

<details>
<summary>Hint 2</summary>

For any positive candidate, use the Archimedean property to find a later interval excluding it.

</details>

<details>
<summary>Worked solution</summary>

The upper endpoints approach zero and exclude every positive candidate eventually.

1. The point $0$ lies in every interval.
2. Any $x>0$ is excluded by choosing an integer $n>1/x$, for which $1/n<x$. Negative points lie in none of the intervals.
3. The intersection is therefore $\{0\}$.

</details>
