# Expose a false tower calculation with signed integrals

*Hard · [Probability problems](index.md)*

Let $I,J$ be independent positive-integer variables with $P(I=i)=P(J=i)=2^{-i}$. Construct an explicit real function $Z(I,J)$ such that each fixed-row and fixed-column absolute integral is finite, the two iterated signed integrals are finite but unequal, and $E|Z|=\infty$. Compute both iterated values. Explain exactly why calling both inner integrals conditional expectations and applying the tower property would be invalid.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Arrange a positive diagonal and a negative adjacent diagonal so that row cancellation and column cancellation have different boundary terms.

</details>

<details>
<summary>Hint 2</summary>

Absorb the joint probability weights into the values of $Z$, and distinguish rowwise finite sums from global integrability.

</details>

<details>
<summary>Model proof</summary>

A telescoping array has a boundary defect that absolute integrability would forbid.

1. Define $Z(i,j)=2^{i+j}(\mathbf1_{j=i}-\mathbf1_{j=i+1})$. The probability-weighted array is $a_{ij}=2^{-i-j}Z(i,j)=\mathbf1_{j=i}-\mathbf1_{j=i+1}$. Each row and column has at most two nonzero entries, hence finite absolute integrals when the other index is fixed.
2. For each row, $\sum_j a_{ij}=1-1=0$. Thus the row-first iterated signed integral is zero. Equivalently its rowwise conditional-law integral is $\sum_j2^{-j}Z(i,j)=0$ for every $i$.
3. Column $j=1$ has weighted sum one; every column $j\ge2$ has $+1$ from row $j$ and $-1$ from row $j-1$, hence sum zero. The column-first iterated value is one. Its inner conditional-law integral is $2$ at $j=1$ and zero otherwise, whose outer average is $2\cdot2^{-1}=1$.
4. But $E|Z|=\sum_{i,j}|a_{ij}|=\sum_i2=\infty$, and the positive and negative parts each have infinite expectation. Therefore the unconditional signed expectation is undefined. The usual signed integrable conditional-expectation theorem and tower property do not apply; finite integrals on every fibre do not repair this missing global hypothesis.

**Self-assessment rubric**

- Give a finite-valued random variable with the required probability weights.
- Compute the unequal row-first and column-first iterated values.
- Show both signed parts diverge and identify the invalid tower hypothesis.

</details>
