# Read the fixed space from permutation orbits

*Easy · [Abstract algebra problems](index.md)*

A generator of $C_3$ acts on $\mathbf C^5$ by permuting coordinates as $(1\,2\,3)$ and fixing coordinates $4,5$. What is the rank of the averaging projection $\frac13(I+g+g^2)$?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The image of an averaging projection consists of invariant vectors.

</details>

<details>
<summary>Hint 2</summary>

Invariant coordinate values are constant on each permutation orbit.

</details>

<details>
<summary>Worked solution</summary>

Each coordinate orbit supplies one free invariant value.

1. A fixed vector satisfies $x_1=x_2=x_3$, with $x_4,x_5$ arbitrary.
2. The average fixes exactly those vectors and maps every vector to one of them.
3. The image has three independent parameters, hence rank $3$.

</details>
