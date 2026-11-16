# Construct a basis of rectangular intertwiners

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, let $N_2,N_3$ be the nilpotent upper shifts of sizes two and three. Solve $N_3X=XN_2$ for $3\times2$ X. Return a two-row matrix listing a basis of solutions flattened row by row; first use $(x_{11},x_{12})=(1,0)$, then $(0,1)$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","0","1","0","0"],["0","1","0","0","0","0"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":2,"columns":6}}
```

<details>
<summary>Hint 1</summary>

Write both shifted products in entries.

</details>

<details>
<summary>Hint 2</summary>

The first row entries are free, but the lower entries are coupled to them.

</details>

<details>
<summary>Worked solution</summary>

Intertwining two chain lengths produces structured rectangular solutions.

1. For rows $(a,b),(c,d),(e,f)$, the left product has rows $(c,d),(e,f),(0,0)$ while the right product has rows $(0,a),(0,c),(0,e)$.
2. Equating entries gives $c=e=f=0$ and $d=a$, with $a,b$ free. Thus $X=\begin{pmatrix}a&b\\0&a\\0&0\end{pmatrix}$.
3. The prescribed free-coordinate normalizations give the flattened rows $[1,0,0,1,0,0]$ and $[0,1,0,0,0,0]$.

</details>
