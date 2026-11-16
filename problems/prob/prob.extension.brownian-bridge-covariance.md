# Covariance of a pinned Brownian bridge

*Medium · [Probability problems](index.md)*

For standard Brownian motion define $U_t=B_t-tB_1$ on $0\le t\le1$. Prove $U_0=U_1=0$ almost surely and $\operatorname{Cov}(U_s,U_t)=\min(s,t)-st$ for every $s,t\in[0,1]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Substitute the two endpoint times directly.

</details>

<details>
<summary>Hint 2</summary>

Expand the covariance into four Brownian covariance terms and use that both time arguments lie in the unit interval.

</details>

<details>
<summary>Model proof</summary>

Remove the linear endpoint component and expand its covariance.

1. At zero, $U_0=B_0=0$ almost surely, and at one, $U_1=B_1-B_1=0$.
2. Finite second moments and covariance bilinearity give $\operatorname{Cov}(U_s,U_t)=\operatorname{Cov}(B_s,B_t)-t\operatorname{Cov}(B_s,B_1)-s\operatorname{Cov}(B_1,B_t)+st\operatorname{Var}(B_1)$.
3. Since $s,t\in[0,1]$, the four quantities are $\min(s,t)$, $s$, $t$ and one. The expression simplifies to $\min(s,t)-ts-st+st=\min(s,t)-st$. In particular its variance is $t(1-t)$, consistent with zero variance at both pinned endpoints.

The resulting process is pinned at both endpoints and has covariance $\min(s,t)-st$.

**Self-assessment rubric**

- Verify both endpoint values with the standard Brownian initial convention.
- Expand the covariance with correct coefficients and signs.
- Use the unit-interval time restrictions to simplify to the claimed covariance, retaining endpoint consistency.

</details>
