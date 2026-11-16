# Compute inertia with imaginary off-diagonal coupling

*Medium · [Linear algebra problems](index.md)*

On $\mathbb C^2$ use the Hermitian quadratic form $q(z)=z^*Gz$ with $G=\begin{pmatrix}0&i\\-i&0\end{pmatrix}$ and star meaning conjugate transpose. Return \[positive index, negative index\].

```answer
{"answer":{"kind":"vector","expected":["1","1"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Check that the matrix is Hermitian despite its imaginary entries.

</details>

<details>
<summary>Hint 2</summary>

Its square and trace identify its two real eigenvalues.

</details>

<details>
<summary>Worked solution</summary>

Hermitian inertia uses conjugate transpose, not ordinary symmetric congruence.

1. The conjugate transpose of G is G, and $G^2=I_2$.
2. The eigenvalues are among one and minus one; trace zero forces one of each.
3. The Hermitian spectral theorem therefore gives positive and negative indices both one, namely $[1,1]$.

</details>
