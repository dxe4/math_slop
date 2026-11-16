# Use orthogonal martingale increments to obtain an L2 limit

*Medium · [Probability problems](index.md)*

Let $(M_n,\mathcal F_n)$ be a real square-integrable martingale with $\sup_nE[M_n^2]<\infty$. Prove $M_n$ converges in $L^2$ and almost surely to the same random variable. You may use completeness of $L^2$ and the standard almost-sure martingale convergence theorem for martingales bounded in $L^1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Calculate $E(M_m-M_n)^2$ for $mge n$ using conditional expectation.

</details>

<details>
<summary>Hint 2</summary>

The second moments form an increasing bounded sequence; identify the two limits by uniqueness of probability limits.

</details>

<details>
<summary>Model proof</summary>

Orthogonality makes the second-moment bound a Cauchy criterion.

1. For $m\ge n$, $E[M_mM_n]=E[M_nE(M_m\mid\mathcal F_n)]=E[M_n^2]$. Thus $E(M_m-M_n)^2=E[M_m^2]-E[M_n^2]$.
2. The second moments are increasing and bounded, so the right side tends uniformly to zero as $m,n\to\infty$. Completeness gives an $L^2$ limit $M_\infty$.
3. Cauchy–Schwarz gives a uniform $L^1$ bound, and the permitted martingale convergence theorem gives an almost-sure finite limit. Almost-sure convergence and L2 convergence both imply convergence in probability, whose limit is unique up to null sets. Hence the limits agree.

**Self-assessment rubric**

- Derive the exact increment second-moment identity.
- Prove the Cauchy property and obtain an L2 limit.
- Invoke the stated convergence theorem with its hypothesis and identify the limits.

</details>
