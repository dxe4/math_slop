# Find positive symplectic normal-form values

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R^4$ order coordinates as $(q_1,q_2,p_1,p_2)$ and use $J=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$. Let $G=\operatorname{diag}(4,9,1,4)$. Using Williamson symplectic congruence as prior L3 preparation, return its positive symplectic eigenvalues in increasing order.

```answer
{"answer":{"kind":"vector","expected":["2","6"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The eigenvalues of JG occur in imaginary pairs with magnitudes given by the symplectic normal form.

</details>

<details>
<summary>Hint 2</summary>

Each separated coordinate pair has magnitude equal to the square root of its q-weight times its p-weight.

</details>

<details>
<summary>Worked solution</summary>

Symplectic eigenvalues are not the ordinary eigenvalues of the positive matrix.

1. After grouping each $q_j,p_j$ pair, $JG$ has blocks $\begin{pmatrix}0&b_j\\-a_j&0\end{pmatrix}$ with characteristic polynomial $t^2+a_jb_j$.
2. The two products are $4\cdot1=4$ and $9\cdot4=36$, giving imaginary eigenvalues of magnitudes two and six.
3. Williamson normal form identifies these positive magnitudes with the two symplectic eigenvalues, so the ordered result is $[2,6]$.

</details>
