# Propagate a fixed color through a graph

*Medium · [Discrete mathematics](index.md)*

An undirected graph on $\{A,B,C,D,E,F\}$ has edges AB,BC,CD,DA,CE,EF. Color adjacent vertices differently with red and blue, fixing A red. List the blue vertices.

```answer
{"answer":{"kind":"set","expected":"{B, D, E}","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Follow edges from the fixed red vertex to force neighboring colors.

</details>

<details>
<summary>Hint 2</summary>

The tail attached at C must continue the same alternating rule.

</details>

<details>
<summary>Worked solution</summary>

Connectedness forces one two-coloring once a starting color is fixed.

1. From red A, B and D are blue. Their common neighbor C is red.
2. Edge CE forces E blue, and EF forces F red.
3. The blue class is $\{B,D,E\}$. Every given edge joins opposite classes.

</details>
