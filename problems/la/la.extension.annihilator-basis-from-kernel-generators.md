# Recover a dual subspace from primal generators

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For $K=\operatorname{span}((2,-1,1,0),(-1,0,0,1))\subset\mathbb R^4$, return a two-row RREF basis matrix for $K^0$ in the standard covector coordinates.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","-2","1"],["0","1","1","0"]],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict.","rows":2,"columns":4}}
```

<details>
<summary>Hint 1</summary>

A covector must vanish on both displayed kernel generators.

</details>

<details>
<summary>Hint 2</summary>

Use its first two coordinates as free parameters and solve for the last two.

</details>

<details>
<summary>Worked solution</summary>

An annihilator is a solution space in dual coordinates.

1. For covector $(a,b,c,d)$, the equations are $2a-b+c=0$ and $-a+d=0$.
2. They give $c=-2a+b$, $d=a$, with $a,b$ free.
3. The basis rows for $(a,b)=(1,0)$ and $(0,1)$ are $(1,0,-2,1)$ and $(0,1,1,0)$, already in RREF.

</details>
