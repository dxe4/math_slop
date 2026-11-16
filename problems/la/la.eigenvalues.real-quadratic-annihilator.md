# Use a real quadratic annihilator

*Hard · [Linear algebra problems](index.md)*

A real $4\times4$ matrix $A$ satisfies $A^2+A+I=0$. Find $\det(A+2I)$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Every complex eigenvalue must satisfy the given quadratic identity.

</details>

<details>
<summary>Hint 2</summary>

Real matrices have conjugate eigenvalues with matching algebraic multiplicities. Evaluate the shifted product for one conjugate pair.

</details>

<details>
<summary>Worked solution</summary>

An irreducible real quadratic forces conjugate spectral pairs, determining the determinant.

1. Every eigenvalue is a root of $x^2+x+1$, namely $\omega=(-1+i\sqrt3)/2$ or $\overline\omega=(-1-i\sqrt3)/2$.
2. Because $A$ is real, these two roots have equal algebraic multiplicities. There are four eigenvalues counted with multiplicity, so each occurs twice.
3. Their sum is $-1$ and product is $1$. Hence $(2+\omega)(2+\overline\omega)=4+2(-1)+1=3$.
4. The determinant of $A+2I$ is the product of its shifted eigenvalues, giving $3^2=9$.
5. This does not require choosing eigenvectors: algebraic multiplicities and the characteristic polynomial determine the determinant.

</details>
