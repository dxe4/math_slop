# Translate uniform integrability of densities into uniform absolute continuity

*Medium · [Probability problems](index.md)*

Let $Z_n\ge0$ with $E_PZ_n=1$, and define probability measures $Q_n(A)=E_P[Z_n1_A]$ on a fixed probability space. Prove that $\{Z_n\}$ is uniformly integrable if and only if the following uniform absolute-continuity condition holds: for every $\varepsilon>0$ there is $\delta>0$ such that $P(A)<\delta$ implies $\sup_nQ_n(A)<\varepsilon$ for every measurable $A$. The choice of $\delta$ must be independent of $n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For one direction, split each density into its part above a common threshold and its bounded part before integrating over $A$.

</details>

<details>
<summary>Hint 2</summary>

For the converse, apply the uniform set condition to the density's own large-value event. Use the common normalization to make all those events small in $P$-probability.

</details>

<details>
<summary>Model proof</summary>

Uniform absolute continuity prevents normalized densities from concentrating appreciable mass on sets of vanishing reference probability.

1. Assume uniform integrability. For a given $\varepsilon>0$, choose $K>0$ so that $\sup_nE_P[Z_n1_{\{Z_n>K\}}]<\varepsilon/2$. For any event $A$, $Q_n(A)\le E_P[Z_n1_{\{Z_n>K\}}]+KP(A)$. Taking $\delta=\varepsilon/(2K)$ makes the bound strictly less than $\varepsilon$ whenever $P(A)<\delta$, simultaneously for all $n$.
2. Conversely, let $\varepsilon>0$ and choose its uniform $\delta$ from the stated condition. Since $E_PZ_n=1$, Markov gives $P(Z_n>K)\le1/K$. Choose $K>1/\delta$. The event $A_n=\{Z_n>K\}$ then has $P$-probability less than $\delta$ for every $n$, so $E_P[Z_n1_{\{Z_n>K\}}]=Q_n(A_n)<\varepsilon$.
3. Thus the density tails vanish uniformly, which is uniform integrability. The normalization supplied a common probability bound for the varying events $A_n$. Merely knowing that each separate $Q_n$ is absolutely continuous would allow $\delta$ to depend on $n$ and would not yield the conclusion.

**Self-assessment rubric**

- Choose one density-tail threshold and obtain an event bound with a common $\delta$.
- Use normalization and Markov to apply uniform absolute continuity to every event $\{Z_n>K\}$.
- Conclude both directions with the correct order of quantifiers and distinguish individual absolute continuity from the uniform property.

</details>
