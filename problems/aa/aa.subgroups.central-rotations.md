# Find the central rotations of a square

*Medium · [Abstract algebra problems](index.md)*

In the symmetry group of a square, $r$ is a quarter-turn and $s$ a reflection, with $r^4=e$ and $srs=r^{-1}$. Find the exponents $k\in\{0,1,2,3\}$ for which $r^k$ is central.

```answer
{"answer":{"kind":"set","expected":[0,2],"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A rotation already commutes with every rotation.

</details>

<details>
<summary>Hint 2</summary>

Test commutation with a reflection using the conjugation relation.

</details>

<details>
<summary>Worked solution</summary>

It suffices to commute with the two generators of the square symmetry group.

1. Every $r^k$ commutes with $r$. The relation gives $sr^ks=r^{-k}$.
2. Commutation with $s$ is therefore equivalent to $r^k=r^{-k}$, or $4\mid2k$.
3. In the required range, this holds exactly for $k=0,2$. The answer is $\{0,2\}$.

</details>
