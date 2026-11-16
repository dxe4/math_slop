# A rank-one change of the identity

*Hard · [Linear algebra problems](index.md)*

Let $u=(1,2,0,-1)^T$, $v=(2,-1,3,4)^T$ and $A=I_4+uv^T$. Find $\det A$.

```answer
{"answer":{"kind":"integer","expected":-3,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Study the action of the update on the kernel of the scalar functional given by the second vector.

</details>

<details>
<summary>Hint 2</summary>

Compare that invariant subspace with the line spanned by the first vector.

</details>

<details>
<summary>Worked solution</summary>

A rank-one update is simple on a line and on a complementary hyperplane.

1. Compute $v^Tu=2-2+0-4=-4$.
2. If $w\in\ker(v^T)$, then $Aw=w$, so $A$ is the identity on this three-dimensional hyperplane.
3. Also $Au=u+u(v^Tu)=-3u$. Since $v^Tu\ne0$, the line spanned by $u$ meets that hyperplane only in zero.
4. These spaces form a direct sum of all of $\mathbb R^4$, giving an adapted basis in which $A$ has diagonal entries $-3,1,1,1$.
5. The determinant is their product, $-3$.

</details>
