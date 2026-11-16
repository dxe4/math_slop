# Invert a cyclic coordinate action

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. The map $P(x,y,z)=(y,z,x)$ is a coordinate permutation. Solve $Pv=(1,2,3)^T$.

```answer
{"answer":{"kind":"vector","expected":["3","1","2"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare the three output coordinates with the stated permutation.

</details>

<details>
<summary>Hint 2</summary>

The output first coordinate is the input second coordinate.

</details>

<details>
<summary>Worked solution</summary>

Invert the action by matching positions.

1. The output requires $y=1$, $z=2$ and $x=3$.
2. Each input coordinate is determined, so the permutation is invertible.
3. The ordered input vector is $(3,1,2)^T$.

</details>
