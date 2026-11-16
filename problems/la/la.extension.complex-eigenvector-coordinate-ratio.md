# Find a complex eigendirection of a real rotation

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb C$, with $i^2=-1$ and column eigenvectors. For $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and eigenvalue $i$, find the ratio $v_2/v_1$ for a nonzero eigenvector $v$. Return one complex number.

```answer
{"answer":{"kind":"complex","expected":"-i","checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The first row of $Rv=iv$ relates the second coordinate to the first.

</details>

<details>
<summary>Hint 2</summary>

Check that a nonzero eigenvector cannot have first coordinate zero.

</details>

<details>
<summary>Worked solution</summary>

Solve over the specified extended scalar field.

1. The first eigenvector equation is $-v_2=iv_1$.
2. If $v_1=0$, it forces $v_2=0$, contrary to a nonzero eigenvector.
3. Therefore division by $v_1$ is valid and gives $v_2/v_1=-i$. The second row equation is then satisfied as well.

</details>
