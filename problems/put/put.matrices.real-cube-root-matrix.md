# Use real spectrum constraints and a trace

*Hard · [Original Putnam-style training](index.md)*

A real $3\times3$ matrix A satisfies $A^3=I$ and $\operatorname{tr}A=0$. Find $\det(I+A)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Every complex eigenvalue is a cube root of unity.

</details>

<details>
<summary>Hint 2</summary>

Nonreal eigenvalues of a real matrix occur in conjugate pairs; use the trace to choose the possible multiset.

</details>

<details>
<summary>Worked solution</summary>

The polynomial relation and real trace force the complete eigenvalue multiset.

1. The roots of t^3-1 are 1, omega and its conjugate omega squared. The polynomial has distinct roots, so A is diagonalizable over the complex numbers.
2. In real dimension three, the possibilities are three copies of one, or one copy of one and the conjugate nonreal pair. The zero trace selects the latter.
3. Thus $\det(I+A)=2(1+\omega)(1+\omega^2)=2[1+(\omega+\omega^2)+\omega^3]=2$.

</details>
