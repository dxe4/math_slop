# Prove the four-dimensional decomposability equation

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For $\omega=\sum_{i<j}p_{ij}e_i\wedge e_j$ in $\Lambda^2(\mathbb R^4)$, prove $\omega$ is a single wedge $u\wedge v$ if and only if $p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23}=0$. Include the zero bivector.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the square of the bivector and inspect its four-volume coefficient.

</details>

<details>
<summary>Hint 2</summary>

For sufficiency, after permuting coordinates choose a nonzero coefficient $p_{12}$ and build one factor with first coordinate one and second coordinate zero.

</details>

<details>
<summary>Model proof</summary>

A single quadratic relation is both a necessary volume obstruction and a constructive factorization condition.

1. Expansion gives $\omega\wedge\omega=2(p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23})e_1\wedge e_2\wedge e_3\wedge e_4$. A single wedge has square zero, proving necessity over the reals.
2. The zero bivector is $0\wedge0$. Otherwise relabel coordinates so $p_{12}\ne0$; vanishing of the wedge square is unchanged by this basis permutation.
3. Set $u=e_1-(p_{23}/p_{12})e_3-(p_{24}/p_{12})e_4$ and $v=p_{12}e_2+p_{13}e_3+p_{14}e_4$. Their wedge has all the required coefficients except that its last coefficient is $(p_{13}p_{24}-p_{14}p_{23})/p_{12}$.
4. The stated relation makes that coefficient equal $p_{34}$, completing the factorization. Undoing the coordinate permutation proves sufficiency in every nonzero case.

**Self-assessment rubric**

- Compute the coefficient and signs in the bivector square.
- Prove necessity for a simple wedge and cover the zero case.
- Justify choosing a nonzero coordinate coefficient after a basis permutation.
- Provide factors and verify all coefficients, including the relation-dependent last one.

</details>
