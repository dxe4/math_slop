# A smallest basis for a discrete space

*Easy · [Topology problems](index.md)*

What is the smallest number of members in a basis for the discrete topology on $X=\{1,2,3\}$?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each singleton is open and must be a union of basis members.

</details>

<details>
<summary>Hint 2</summary>

A basis member contained in a singleton and containing its point has only one possible shape.

</details>

<details>
<summary>Worked solution</summary>

The discrete topology requires every singleton as a basis element.

1. For each point, its open singleton must contain a basis member containing that point.
2. That basis member must be the singleton itself, so all three singletons are necessary.
3. They also form a basis, so the minimum size is $3$.

</details>
