# Find the gap left by a finite cover subfamily

*Medium · [Topology problems](index.md)*

The intervals $U_n=(1/n,1)$ for $n\ge2$ cover $(0,1)$. Find the part of $(0,1)$ not covered by $U_2\cup U_3\cup\cdots\cup U_6$, as an interval.

```answer
{"answer":{"kind":"interval","expected":"(0, 1/6]","checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The intervals grow as the index increases.

</details>

<details>
<summary>Hint 2</summary>

Keep track of whether the smallest covered endpoint is included.

</details>

<details>
<summary>Worked solution</summary>

A finite nested union is its largest member, leaving a positive gap.

1. For $2\le n\le6$, every $U_n$ lies in $U_6=(1/6,1)$.
2. Thus the finite union is exactly $(1/6,1)$.
3. Its complement relative to $(0,1)$ is $(0,1/6]$, including the uncovered endpoint $1/6$.

</details>
