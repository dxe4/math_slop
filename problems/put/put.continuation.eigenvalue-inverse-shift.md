# Eigenvalue inverse shift

*Medium · [Original Putnam-style training](index.md)*

An invertible $3\times3$ complex matrix has eigenvalues $1,2,3$ with multiplicity. Find $\det(I+A^{-1})$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The eigenvalues of $A^{-1}$ are reciprocal to those of $A$.

</details>

<details>
<summary>Hint 2</summary>

Multiply the three shifted eigenvalues.

</details>

<details>
<summary>Worked solution</summary>

Their product is $2(3/2)(4/3)=4$.

1. Since $A$ is invertible, the eigenvalues of $A^{-1}$ are $1,1/2,1/3$.
2. Those of $I+A^{-1}$ are $2,3/2,4/3$.
3. Their product is $2(3/2)(4/3)=4$.

</details>
