# Classify positivity and Kraus length in a transpose mixture

*Hard · [Linear algebra problems](index.md)*

For $n\ge2$ and real t define $\Phi_t(X)=tX^T+(1-t)\operatorname{tr}(X)I_n/n$ on complex n-by-n matrices. Find exactly the t intervals for positivity and complete positivity. On the complete-positive interval, determine the minimal Kraus count at each endpoint and in its interior. Preparation: the Choi-Kraus theorem and flip eigenspaces.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Positivity can be checked first on unit rank-one projections and then extended by spectral sums.

</details>

<details>
<summary>Hint 2</summary>

The Choi matrix is a scalar identity plus t times the flip; its symmetric and alternating eigenvalues control both complete positivity and rank.

</details>

<details>
<summary>Model proof</summary>

Two different spectral tests separate ordinary positivity from all-level positivity.

1. For a unit rank-one projection $uu^*$, its transpose is $\overline u\,\overline u^*$. The output eigenvalues are $(1+(n-1)t)/n$ on that line and $(1-t)/n$ on its perpendicular space. Every positive matrix is a nonnegative sum of such projections, so positivity holds exactly for $-1/(n-1)\le t\le1$.
2. The Choi matrix is $C_t=tF+(1-t)I_{n^2}/n$. The flip has plus eigenspace dimension $n(n+1)/2$ and minus eigenspace dimension $n(n-1)/2$.
3. Thus its eigenvalues are $(1+(n-1)t)/n$ on the symmetric part and $(1-(n+1)t)/n$ on the alternating part. Choi positivity holds exactly for $-1/(n-1)\le t\le1/(n+1)$, which is the complete-positive interval.
4. In its interior both eigenvalues are positive, giving minimum Kraus count $n^2$. At the lower endpoint only the alternating part remains positive, giving $n(n-1)/2$; at the upper endpoint only the symmetric part remains, giving $n(n+1)/2$. These counts follow from the exact Choi rank, not from a chosen nonminimal decomposition.
5. In particular the transpose at t=1 is positive but not completely positive for every n at least two, with no contradiction between the two distinct definitions.

**Self-assessment rubric**

- Compute the rank-one output spectrum and justify its necessity and sufficiency for positivity.
- Derive the exact flip-plus-identity Choi matrix with the factor n.
- Use both flip eigenspaces to obtain the narrower interval.
- Track which eigenvalue vanishes at each endpoint and prove the minimal term counts.

</details>
