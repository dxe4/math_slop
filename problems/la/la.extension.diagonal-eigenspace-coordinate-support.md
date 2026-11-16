# Read an eigenspace from supported coordinates

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. For $D=\operatorname{diag}(2,-1,2,0)$, find the dimension of $\ker(D-2I)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The kernel equations are independent coordinate equations.

</details>

<details>
<summary>Hint 2</summary>

Coordinates at diagonal entries different from two must vanish.

</details>

<details>
<summary>Worked solution</summary>

Count free coordinates associated with the specified eigenvalue.

1. The second and fourth kernel equations force those coordinates to zero.
2. The first and third equations are identically zero, leaving those coordinates free.
3. The eigenspace is $\operatorname{span}(e_1,e_3)$ and has dimension two.

</details>
