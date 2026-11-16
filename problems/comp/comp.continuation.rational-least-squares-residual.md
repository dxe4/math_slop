# Compute an exact least-squares fit and its residual norm

*Medium · [Computational arithmetic problems](index.md)*

Let $A=\begin{pmatrix}1&0\\1&1\\1&2\\1&3\end{pmatrix}$ and $b=(1,1,2,2)^T$. Find the least-squares minimiser $x=(x_1,x_2)^T$ of $\|Ax-b\|_2^2$. Return $[x_1,x_2,\|Ax-b\|_2^2]$ as exact fractions.

```answer
{"answer":{"kind":"vector","expected":["9/10","2/5","1/5"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Form both sides of the normal equations using exact integer inner products.

</details>

<details>
<summary>Hint 2</summary>

After solving them, compute the residual vector itself rather than inferring its norm from rounded coefficients.

</details>

<details>
<summary>Worked solution</summary>

Exact Gram elimination and an orthogonal residual give a rational certificate.

1. The normal equations are $\begin{pmatrix}4&6\\6&14\end{pmatrix}x=(6,11)^T$. Their determinant is $20>0$, so the fit is unique.
2. Elimination gives $x_2=2/5$ and $x_1=9/10$.
3. The residual $b-Ax$ is $(1,-3,3,-1)^T/10$, whose dot products with both columns of $A$ are zero.
4. Its squared norm is $(1+9+9+1)/100=1/5$, so the requested vector is $[9/10,2/5,1/5]$.

</details>
