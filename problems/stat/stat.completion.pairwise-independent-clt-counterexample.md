# Pairwise independence does not ensure a central limit theorem

*Hard · [Statistics and probability](index.md)*

Construct a triangular array of fair Bernoulli variables, pairwise independent within each row, whose row lengths $n_m\to\infty$ but whose standardized sums $2n_m^{-1/2}\sum_j(X_{mj}-1/2)$ do not converge to $N(0,1)$. Prove pairwise independence and identify the actual limit. You may use elementary linear algebra over $\mathbb F_2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A small uniform random binary vector can generate many different fair linear forms.

</details>

<details>
<summary>Hint 2</summary>

Study all nonzero linear forms together, separately when the generating vector is zero and when it is not.

</details>

<details>
<summary>Model proof</summary>

A rare common generating event can carry the entire second moment despite pairwise independence.

1. For each $m\ge2$, draw $V$ uniformly from $\mathbb F_2^m$. Index the row by the $n_m=2^m-1$ nonzero vectors $a$, and set $X_{ma}=a^{\mathsf T}V$ in $\mathbb F_2$, viewed as a zero-or-one real variable.
2. Each nonzero form is fair. Distinct nonzero $a,b$ are linearly independent over $\mathbb F_2$, so the map $V\mapsto(a^{\mathsf T}V,b^{\mathsf T}V)$ is onto $\mathbb F_2^2$ with equal-size fibers. Every joint binary pair therefore has probability $1/4$.
3. If $V=0$, all observations vanish. If $V\ne0$, exactly $2^{m-1}$ of the nonzero indexing vectors have dot product one. Thus the standardized sum $Z_m$ equals $-\sqrt{n_m}$ with probability $1/(n_m+1)$ and $1/\sqrt{n_m}$ otherwise.
4. Therefore $Z_m\to0$ in probability, so its weak limit is a point mass rather than a standard normal. Yet $EZ_m=0$ and $EZ_m^2=1$ for every row, consistent with pairwise independence. The second moments are not uniformly integrable; matching variances does not force a Gaussian limit.

**Self-assessment rubric**

- Give a growing explicit array of fair variables.
- Prove pairwise independence using the rank of the two-form map.
- Calculate the two possible standardized sums and their probabilities.
- Identify the probability limit and explain the constant-variance phenomenon.

</details>
