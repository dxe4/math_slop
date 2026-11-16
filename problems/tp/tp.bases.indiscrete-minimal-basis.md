# A smallest basis for an indiscrete space

*Easy · [Topology problems](index.md)*

What is the smallest size of a basis for the indiscrete topology $\{\varnothing,X\}$ on a nonempty three-point set $X$?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Basis members are open, and nonempty ones must cover the space.

</details>

<details>
<summary>Hint 2</summary>

There is only one nonempty open set in this topology.

</details>

<details>
<summary>Worked solution</summary>

The sole nonempty open set is both necessary and sufficient.

1. Every nonempty basis member must be $X$.
2. A basis must cover the nonempty space, so at least one member is required.
3. The family $\{X\}$ is a basis, giving minimum size $1$.

</details>
