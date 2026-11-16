# Color a four-cycle

*Easy · [Discrete mathematics](index.md)*

For the simple undirected cycle with edges $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$, give all red vertices when $1$ is red and every edge joins opposite colors.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks only this authored construct-fixed-two-coloring task. Does not certify unrestricted proof validity, general construction ability or full mastery of two-coloring and odd cycles."}}
```

<details>
<summary>Hint 1</summary>

Neighbors of $1$ must be blue.

</details>

<details>
<summary>Hint 2</summary>

Then $3$ must be red.

</details>

<details>
<summary>Worked solution</summary>

Construct opposite colors along edges or identify an odd-cycle obstruction. Color names can be swapped unless a vertex color is fixed.

1. Vertices $2$ and $4$ are blue.
2. Vertex $3$ is red, so the red set is $\{1,3\}$.

</details>
