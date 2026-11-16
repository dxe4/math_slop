# Multiply two nonzero matrix units with incompatible indices

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For $3\times3$ matrix units, compute $E_{12}E_{13}$.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","0"],["0","0","0"],["0","0","0"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

The first map reads the second coordinate of its input.

</details>

<details>
<summary>Hint 2</summary>

The output of $E_{13}$ is always supported in the first coordinate.

</details>

<details>
<summary>Worked solution</summary>

Recognize that a nonzero map can send its output into another map's kernel.

1. $E_{13}$ sends a vector to its third coordinate times $e_1$.
2. $E_{12}$ sends $e_1$ to zero because it reads only coordinate two.
3. The composite annihilates every vector, so its matrix is zero although both factors are nonzero.

</details>
