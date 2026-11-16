# Matrix exponential trace

*Hard · [Original Putnam-style training](index.md)*

For a complex square matrix $A$, prove $\det(e^A)=e^{\operatorname{tr}A}$. You may use complex triangularization and the power-series definition of $e^A$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Triangularize $A$ by similarity.

</details>

<details>
<summary>Hint 2</summary>

The exponential of a triangular matrix has exponentials of diagonal entries on its diagonal.

</details>

<details>
<summary>Model proof</summary>

Determinants and traces are similarity invariant; therefore $\det(e^A)=\prod_i e^{T_{ii}}=e^{\sum_i T_{ii}}=e^{\operatorname{tr}A}$.

1. Over $\mathbb C$, choose invertible $S$ with $T=S^{-1}AS$ upper triangular. The power series gives $e^T=S^{-1}e^AS$.
2. Every power of an upper triangular matrix is upper triangular, so $e^T$ is upper triangular with diagonal entries $e^{T_{ii}}$.
3. Determinants and traces are similarity invariant; therefore $\det(e^A)=\prod_i e^{T_{ii}}=e^{\sum_i T_{ii}}=e^{\operatorname{tr}A}$.

**Self-assessment rubric**

- Triangularize A by similarity and transfer the exponential through that similarity.
- Identify exponential diagonal entries of the triangular representative.
- Multiply those entries and use similarity invariance of determinant and trace.

</details>
