# Invert only the stable nonzero primary component

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, use Fitting decomposition as preparation. For $A=\begin{pmatrix}0&1&0\\0&0&0\\0&0&2\end{pmatrix}$ find its Drazin inverse D: the commuting map zero on the nilpotent primary component and inverse to A on the invertible primary component.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","0"],["0","0","0"],["0","0","1/2"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

The first two coordinates form one nilpotent chain.

</details>

<details>
<summary>Hint 2</summary>

The last coordinate is a separate invertible one-dimensional block.

</details>

<details>
<summary>Worked solution</summary>

A Drazin inverse is not the same generalized inverse as a metric pseudoinverse.

1. The Fitting decomposition is the first coordinate plane, on which $A^2=0$, plus the last coordinate line, on which A is scalar two.
2. The defining Drazin action is zero on the plane and multiplication by one half on the line.
3. The resulting D is the displayed diagonal matrix. It commutes with A, satisfies $DAD=D$ and $A^3D=A^2$, and records nilpotent index two.

</details>
