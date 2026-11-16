# Find a smallest neighborhood in a branching finite topology

*Easy · [Topology problems](index.md)*

On $X=\{a,b,c\}$ use opens $\varnothing,\{c\},\{a,c\},\{b,c\},X$. Find the smallest open neighborhood of a, returning its point set.

```answer
{"answer":{"kind":"set","expected":["a","c"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

List only the open sets containing the named point.

</details>

<details>
<summary>Hint 2</summary>

Their intersection is open in this finite list and gives the smallest choice.

</details>

<details>
<summary>Worked solution</summary>

A neighborhood calculation depends on the actual topology, not the underlying set alone.

1. The opens containing a are $\{a,c\}$ and X.
2. The first is contained in the second and is itself open.
3. Thus the smallest open neighborhood is $\{a,c\}$; the singleton a is not open.

</details>
