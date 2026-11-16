# Normalize a positive-metric eigenvalue pencil

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, let $A=\begin{pmatrix}4&2\\2&4\end{pmatrix}$ and $G=\operatorname{diag}(2,1)$. Return the coefficients in increasing powers of the monic polynomial whose roots are the generalized eigenvalues in $Av=\lambda Gv$.

```answer
{"answer":{"kind":"vector","expected":["6","-6","1"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The generalized eigenvalue condition is singularity of $A-\lambda G$.

</details>

<details>
<summary>Hint 2</summary>

Divide its determinant polynomial by its leading coefficient to make it monic.

</details>

<details>
<summary>Worked solution</summary>

The metric changes the spectral pencil rather than just the norm of an old eigenvector.

1. The determinant is $(4-2\lambda)(4-\lambda)-4=2\lambda^2-12\lambda+12$.
2. Its leading coefficient is two, so the monic polynomial is $\lambda^2-6\lambda+6$.
3. The ordered coefficients are $[6,-6,1]$. Its real roots are $3\pm\sqrt3$, consistent with a symmetric problem in a positive metric.

</details>
