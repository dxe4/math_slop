# Derive the coupling inequality

*Difficulty 5 of 5 · [Probability modeling](index.md) · exercise 13 of 15*

Let $(X,Y)$ be any coupling of probability laws $\mu$ and $\nu$. Prove that for every event $A$, $|\mu(A)-\nu(A)|\le P(X\ne Y)$, then state the resulting total-variation bound.

<details>
<summary>Hint 1</summary>

Write probabilities as expectations of indicators

</details>

<details>
<summary>Hint 2</summary>

The two indicators differ only when X and Y differ

</details>

<details>
<summary>Worked solution</summary>

We have $|\mu(A)-\nu(A)|=|E[\mathbf{1}_A(X)-\mathbf{1}_A(Y)]|\le E[|\mathbf{1}_A(X)-\mathbf{1}_A(Y)|]$. The absolute indicator difference is at most $\mathbf{1}_{\{X\ne Y\}}$, so the expression is at most $P(X\ne Y)$. Taking the supremum over measurable $A$ gives $\|\mu-\nu\|_{\mathrm{TV}}\le P(X\ne Y)$. The proof requires only correct marginals; a useful Markov coupling additionally keeps chains together after meeting.

**Answer.** Indicator comparison gives $|\mu(A)-\nu(A)|\le P(X\ne Y)$, hence total variation is at most the mismatch probability.

</details>

*Tags: coupling, total variation, proof*
