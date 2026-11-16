# Occupancy empty variance

*Hard · [Original Putnam-style training](index.md)*

Throw $n$ independent balls uniformly into $m\ge2$ labelled boxes. If $E$ is the number of empty boxes, derive $\operatorname{Var}(E)$ in terms of $m,n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use indicators that each box is empty.

</details>

<details>
<summary>Hint 2</summary>

Distinguish one-box and two-box emptiness probabilities.

</details>

<details>
<summary>Model proof</summary>

Expanding variance of $E=\sum_jI_j$ gives $\operatorname{Var}(E)=mp(1-p)+m(m-1)(q-p^2)$, with the stated $p,q$.

1. Let $I_j$ indicate box $j$ is empty. Set $p=(1-1/m)^n$; then $EI_j=p$ and $\operatorname{Var}(I_j)=p(1-p)$.
2. For distinct boxes $i,j$, both are empty when every ball chooses one of the other $m-2$ boxes, with probability $q=(1-2/m)^n$. Thus $\operatorname{Cov}(I_i,I_j)=q-p^2$.
3. Expanding variance of $E=\sum_jI_j$ gives $\operatorname{Var}(E)=mp(1-p)+m(m-1)(q-p^2)$, with the stated $p,q$.

**Self-assessment rubric**

- Define emptiness indicators and their one-box probability.
- Compute the two-box joint probability and covariance.
- Count diagonal and ordered off-diagonal terms correctly.

</details>
