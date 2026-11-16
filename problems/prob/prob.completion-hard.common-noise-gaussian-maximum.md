# Find the fluctuation scale left by common Gaussian noise

*Hard · [Probability problems](index.md)*

Let $Z_0,Z_1,Z_2,\ldots$ be independent standard normals and fix $0<\rho<1$. Set $X_i=\sqrt\rho Z_0+\sqrt{1-\rho}Z_i$. Prove $\max_{i\le n}X_i-\sqrt{1-\rho}\sqrt{2\log n}\Rightarrow N(0,\rho)$. Derive the upper and lower probability estimates for the independent maximum that justify this centring, rather than simply citing an extreme-value theorem. You may use the Mills bounds $u\phi(u)/(u^2+1)\le1-\Phi(u)\le\phi(u)/u$ for $u>0$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The common component leaves the maximum unchanged apart from a random translation.

</details>

<details>
<summary>Hint 2</summary>

Test the independent maximum at $\sqrt{2\log n}$ plus or minus a fixed positive constant. The expected exceedance count behaves very differently at those two levels.

</details>

<details>
<summary>Model proof</summary>

The independent maximum concentrates on a vanishing absolute scale, leaving the unshrunk common Gaussian component as the limiting fluctuation.

1. Write $M_n=\max_{i\le n}Z_i$ and $b_n=\sqrt{2\log n}$. For fixed $\epsilon>0$, the union bound and the upper Mills bound give $P(M_n>b_n+\epsilon)\le n\phi(b_n+\epsilon)/(b_n+\epsilon)$. Since $n e^{-b_n^2/2}=1$, this is at most a constant times $e^{-\epsilon b_n-\epsilon^2/2}/(b_n+\epsilon)\to0$.
2. For $u_n=b_n-\epsilon>0$, the lower Mills bound gives $n[1-\Phi(u_n)]\ge[u_n/(u_n^2+1)]e^{\epsilon b_n-\epsilon^2/2}/\sqrt{2\pi}\to\infty$. Independence therefore yields $P(M_n\le u_n)=\Phi(u_n)^n\le\exp(-n[1-\Phi(u_n)])\to0$.
3. These estimates prove $M_n-b_n\to0$ in probability; they do not assert a Gumbel limit at a finer scale. The common-factor representation gives $\max_iX_i-\sqrt{1-\rho}\,b_n=\sqrt\rho Z_0+\sqrt{1-\rho}(M_n-b_n)$.
4. The second term tends to zero in probability, so Slutsky gives the $N(0,\rho)$ limit. Fixed positive dependence leaves order-one fluctuations even though the independent maximum itself has vanishing fluctuations under this coarser centring.

**Self-assessment rubric**

- Use the upper Mills estimate with its exponential centring term.
- Show the expected exceedance count diverges and apply independence.
- Separate the common translation and apply the correct convergence conclusion.

</details>
