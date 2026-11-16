# Conjugate a finite-group character in the dual

*Easy · [Abstract algebra problems](index.md)*

Let $V$ be a complex representation of a finite group. For an element $g$, its character value is $\chi_V(g)=1+2i$. Return $[\operatorname{Re}\chi_{V^*}(g),\operatorname{Im}\chi_{V^*}(g)]$.

```answer
{"answer":{"kind":"vector","expected":["1","-2"],"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The dual has the reciprocal eigenvalues of $g$.

</details>

<details>
<summary>Hint 2</summary>

Finite-order eigenvalues lie on the unit circle.

</details>

<details>
<summary>Worked solution</summary>

Inverse eigenvalues are complex conjugates for a finite-order operator.

1. If the eigenvalues on $V$ are $\lambda_j$, those on $V^*$ are $\lambda_j^{-1}$.
2. Every $\lambda_j$ is a root of unity, so $\lambda_j^{-1}=\overline{\lambda_j}$.
3. Thus $\chi_{V^*}(g)=\overline{\chi_V(g)}=1-2i$, giving $[1,-2]$.

</details>
