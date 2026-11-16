# Covariance of disjoint Brownian increments

*Medium · [Probability problems](index.md)*

For standard Brownian motion and $0\le s<t\le u<v$, prove $\operatorname{Cov}(B_t-B_s,B_v-B_u)=0$ using $\operatorname{Cov}(B_a,B_b)=\min(a,b)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Use bilinearity to expand the increment covariance into four value covariances.

</details>

<details>
<summary>Hint 2</summary>

Evaluate each minimum using the stated time ordering; keep the signs from both differences.

</details>

<details>
<summary>Model proof</summary>

The shared-time covariance terms cancel for ordered disjoint increments.

1. All Brownian values have finite second moments, so covariance bilinearity gives $\operatorname{Cov}(B_t,B_v)-\operatorname{Cov}(B_t,B_u)-\operatorname{Cov}(B_s,B_v)+\operatorname{Cov}(B_s,B_u)$.
2. The ordering makes these four covariances respectively $t,t,s,s$, including the possible common endpoint $t=u$.
3. The signed total is $t-t-s+s=0$. This establishes orthogonality by the requested covariance computation; independence of disjoint Brownian increments is a compatible stronger property, not a consequence of zero covariance for arbitrary variables.

The four covariance terms sum to $t-t-s+s=0$.

**Self-assessment rubric**

- Expand all four covariance terms with the correct signs.
- Evaluate the minima using every relevant time inequality, including an adjacent endpoint.
- Cancel to zero while retaining the distinction between orthogonality and general independence.

</details>
