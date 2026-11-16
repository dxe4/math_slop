# Find the optimal proposal for a signed expectation

*Hard · [Probability problems](index.md)*

Let $Z$ be a nonzero integrable real variable under $P$. A proposal has density $q\ge0$ with $E_Pq=1$ and $q>0$ wherever $Z\ne0$; under $Q=qP$, estimate $E_PZ$ by $Z/q$, defined as zero on $q=0$. Determine the least possible variance, its attaining density, and exactly when zero variance is possible. Then impose the stronger requirement $q>0$ $P$-almost surely and determine whether the same optimum is attained when $P(Z=0)>0$. Do not assume $Z\in L^2(P)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the proposal second moment as an integral under the original measure and use Cauchy--Schwarz with the density.

</details>

<details>
<summary>Hint 2</summary>

An optimal proposal for a signed integrand need not make the signed estimator constant. Examine what happens on the zero set.

</details>

<details>
<summary>Model proof</summary>

Absolute magnitude controls the optimal sampling density, while signs determine the irreducible variance.

1. For any admissible proposal, $E_Q[Z/q]=E_PZ=\mu$ and $E_Q[(Z/q)^2]=E_P[Z^2/q]$, possibly infinite. Cauchy--Schwarz gives $(E_P|Z|)^2\le E_P[Z^2/q]E_Pq=E_P[Z^2/q]$, interpreting the integrand as zero where $Z=q=0$.
2. Writing $a=E_P|Z|>0$, equality is attained by $q_*=|Z|/a$. The estimator then equals $a\operatorname{sgn}(Z)$ on proposal support, so the minimum variance is $a^2-\mu^2$, finite without an original second moment. Equality in Cauchy--Schwarz also forces $q=q_*$ almost surely for any minimiser.
3. The variance is zero exactly when $|\mu|=a$, equivalently $Z$ has one constant sign almost surely. Both strictly positive and strictly negative sets having positive probability makes the variance strictly positive.
4. If $q>0$ is required on the whole original space and $P(Z=0)>0$, $q_*$ is inadmissible and the infimum is not attained. But $q_\epsilon=(|Z|+\epsilon)/(a+\epsilon)$ is strictly positive and normalised, and $E_P[Z^2/q_\epsilon]\le(a+\epsilon)a\to a^2$. The universal lower bound gives the same infimum. If $P(Z=0)=0$, the original optimum remains admissible.

**Self-assessment rubric**

- Derive the correct change-of-measure moments with zero-set conventions.
- Prove the lower bound and its equality density.
- Characterise exactly when the sign variation prevents zero variance.
- Handle the stronger domination requirement with a valid approximating family.

</details>
