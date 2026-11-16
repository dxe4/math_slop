# An open ball at the truncation threshold

*Medium · [Topology problems](index.md)*

On $\mathbb R$, define $d(x,y)=\min(1,|x-y|)$. Find the open ball $B_d(0,1)$ as an interval in usual real coordinates.

```answer
{"answer":{"kind":"interval","expected":"(-1, 1)","checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

An open ball uses a strict distance inequality.

</details>

<details>
<summary>Hint 2</summary>

At and beyond the truncation threshold, the metric value is equal to that threshold rather than smaller.

</details>

<details>
<summary>Worked solution</summary>

The strict inequality excludes every point at which the truncated distance has reached one.

1. The ball condition is $\min(1,|x|)<1$.
2. This holds exactly when $|x|<1$; points with $|x|\ge1$ have distance exactly one.
3. The open ball is $(-1,1)$.

</details>
