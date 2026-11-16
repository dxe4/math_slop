# Distinguish quaternionic type by a square-character sum

*Medium · [Abstract algebra problems](index.md)*

The degree-two irreducible character $\chi$ of $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ has values $\chi(1)=2$, $\chi(-1)=-2$, and zero elsewhere. Compute its Frobenius–Schur indicator $\nu(\chi)=|Q_8|^{-1}\sum_{g\in Q_8}\chi(g^2)$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Separate the two central elements from the six elements of order four.

</details>

<details>
<summary>Hint 2</summary>

All six noncentral elements have the same square.

</details>

<details>
<summary>Worked solution</summary>

The indicator uses squares of group elements, not squares of character values.

1. Both $1$ and $-1$ square to $1$, contributing $2+2=4$.
2. Each of the other six elements squares to $-1$, contributing $6(-2)=-12$.
3. Hence $\nu(\chi)=(4-12)/8=-1$, the quaternionic indicator.

</details>
