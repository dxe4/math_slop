# When do two intervals stay connected?

*Medium · [Topology problems](index.md)*

Find all real $c$ for which $[0,1]\cup[c,c+1]$ is connected. Enter the parameter interval.

```answer
{"answer":{"kind":"interval","expected":"[-1, 1]","checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Two nonempty closed intervals have a connected union exactly when they overlap or meet.

</details>

<details>
<summary>Hint 2</summary>

Translate that overlap into inequalities for the moving endpoints.

</details>

<details>
<summary>Worked solution</summary>

Connectedness is equivalent to avoiding a gap between the intervals.

1. For overlap, the moving left endpoint must satisfy $c\le1$, and the moving right endpoint must satisfy $c+1\ge0$.
2. These are $-1\le c\le1$. At either endpoint the intervals meet, so connectedness still holds.
3. Outside that range there is a gap. The complete parameter set is $[-1,1]$.

</details>
