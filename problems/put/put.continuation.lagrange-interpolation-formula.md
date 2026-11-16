# Lagrange interpolation formula

*Hard · [Original Putnam-style training](index.md)*

For distinct real nodes $x_0,\ldots,x_n$ and values $y_0,\ldots,y_n$, prove there is a unique polynomial of degree at most $n$ taking $P(x_i)=y_i$, and give its formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Construct cardinal polynomials that are one at one node and zero at the others.

</details>

<details>
<summary>Hint 2</summary>

For uniqueness, subtract two candidates and count roots.

</details>

<details>
<summary>Model proof</summary>

If $Q$ is another such polynomial, $P-Q$ has $n+1$ distinct roots but degree at most $n$, so it is zero.

1. Define $L_i(x)=\prod_{j\ne i}(x-x_j)/(x_i-x_j)$. Distinct nodes make each denominator nonzero and give $L_i(x_j)=\delta_{ij}$.
2. The polynomial $P(x)=\sum_{i=0}^ny_iL_i(x)$ has degree at most $n$ and takes every prescribed value.
3. If $Q$ is another such polynomial, $P-Q$ has $n+1$ distinct roots but degree at most $n$, so it is zero.

**Self-assessment rubric**

- Construct defined cardinal polynomials for distinct nodes.
- Sum them with prescribed coefficients and verify each interpolation value.
- Use n+1 roots of a degree-at-most-n difference for uniqueness.

</details>
