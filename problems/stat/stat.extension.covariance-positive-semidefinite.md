# Covariance positive semidefinite

*Easy · [Statistics and probability](index.md)*

Let $Z\in\mathbb R^d$ be a random vector with finite second moments. Prove that its covariance matrix $\Sigma$ is positive semidefinite.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Positive semidefiniteness is a statement about a quadratic form at every deterministic vector.

</details>

<details>
<summary>Hint 2</summary>

Expand that form using the definition of covariance and move the finite sums inside expectation.

</details>

<details>
<summary>Model proof</summary>

Every covariance quadratic form is the expected square of a centered linear combination.

1. Finite second moments make $\mu=E[Z]$ and each covariance entry well defined. The matrix $\Sigma=E[(Z-\mu)(Z-\mu)^{\mathsf T}]$ is symmetric.
2. For any deterministic $a\in\mathbb R^d$, finite sums give $a^{\mathsf T}\Sigma a=E[a^{\mathsf T}(Z-\mu)(Z-\mu)^{\mathsf T}a]=E[(a^{\mathsf T}(Z-\mu))^2]$.
3. The last integrand is nonnegative, so the quadratic form is nonnegative for every $a$. This is positive semidefiniteness; it need not be positive definiteness if some nonzero linear combination is constant almost surely.

**Self-assessment rubric**

- Use finite second moments and identify the symmetric covariance matrix.
- Establish the quadratic-form identity.
- Deduce the required nonnegativity for every deterministic vector.

</details>
