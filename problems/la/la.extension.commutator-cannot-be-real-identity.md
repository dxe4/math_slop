# Prove a finite-dimensional commutator obstruction

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For positive integer $n$, prove there are no real $n\times n$ matrices with $AB-BA=I_n$. Explain where the scalar characteristic enters.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Compare traces of the two sides.

</details>

<details>
<summary>Hint 2</summary>

The two finite double sums defining the product traces contain the same scalar terms.

</details>

<details>
<summary>Model proof</summary>

Use trace as an invariant that vanishes on a commutator.

1. Expanding gives $\operatorname{tr}(AB)=\sum_{i,j}a_{ij}b_{ji}=\operatorname{tr}(BA)$, hence the commutator has trace zero.
2. The identity has trace $n$, a nonzero real scalar for positive $n$, contradicting the proposed equality.
3. The contradiction uses that $n$ is nonzero in the scalar field. In positive characteristic dividing $n$, this trace argument alone gives no impossibility claim.

**Self-assessment rubric**

- Derive cyclic trace from finite index sums.
- Compare with the nonzero real trace of the identity.
- Identify why the argument does not transfer unchanged to characteristic dividing the dimension.

</details>
