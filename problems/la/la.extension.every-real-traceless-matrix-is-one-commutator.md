# Construct a single commutator for every traceless real matrix

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Prove every real square matrix A with $\operatorname{tr}A=0$ can be written $A=XY-YX$. A proof that it is only a sum of commutators is not sufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

First prove by induction that a traceless real matrix is similar to a matrix with zero diagonal.

</details>

<details>
<summary>Hint 2</summary>

For a zero-diagonal matrix use a diagonal X with distinct diagonal entries and solve each off-diagonal entry of the commutator for Y.

</details>

<details>
<summary>Model proof</summary>

A basis construction turns the trace condition into solvable entrywise equations.

1. We first produce a zero-diagonal representation by induction on dimension. A scalar traceless real matrix is zero. For a nonscalar operator some $v,Av$ are independent: otherwise every vector is an eigenvector and comparison on sums of basis vectors forces one common scalar.
2. Begin a basis with $v,Av$. Its first diagonal entry is zero, and the remaining principal block still has trace zero. Apply the induction hypothesis to that block and change only the remaining basis vectors. The first diagonal entry stays zero, yielding a similar matrix $C$ with every diagonal entry zero.
3. Choose distinct real numbers $d_i$ and $D=\operatorname{diag}(d_i)$. Set $Y_{ij}=C_{ij}/(d_i-d_j)$ for $i\ne j$ and $Y_{ii}=0$. Then $DY-YD=C$ in every off-diagonal entry and both diagonals are zero.
4. Conjugating these two constructed matrices back by the same basis change yields a single commutator equal to the original A. The one-dimensional zero case is also a commutator, of two zero matrices.

**Self-assessment rubric**

- Justify the existence of independent v and Av unless the operator is scalar.
- Carry out the similarity induction while preserving the first zero diagonal entry.
- Choose distinct diagonal values and solve for a single commutator.
- Return to the original basis and include the scalar and one-dimensional cases.

</details>
