# Color a five-vertex path

*Easy · [Discrete mathematics](index.md)*

The simple undirected path has edges $\{1,2\},\{2,3\},\{3,4\},\{4,5\}$. With $1$ red, give all red vertices of a proper two-coloring.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,5],"checker_scope":"Checks only this authored construct-fixed-two-coloring task. Does not certify unrestricted proof validity, general construction ability or full mastery of two-coloring and odd cycles."}}
```

<details>
<summary>Hint 1</summary>

Alternate along each edge.

</details>

<details>
<summary>Hint 2</summary>

Include the fixed red start.

</details>

<details>
<summary>Worked solution</summary>

Construct opposite colors along edges or identify an odd-cycle obstruction. Color names can be swapped unless a vertex color is fixed.

1. The colors are red,blue,red,blue,red.
2. Thus the red class is $\{1,3,5\}$.

</details>
