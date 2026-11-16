# Turn an orthogonal stochastic-integral product into a true martingale

*Medium · [Probability problems](index.md)*

Let $B,W$ be independent Brownian motions with their common usual natural filtration on $[0,T]$, where $T<\infty$. Let $H,K$ be bounded predictable real processes and define $I_t=\int_0^tH_s\,dB_s$ and $J_t=\int_0^tK_s\,dW_s$. Prove that $(I_tJ_t)_{0\le t\le T}$ is a true martingale and that $E[I_TJ_T]=0$. The integrands may depend on both Brownian histories. You may use the standard Itô covariation/product rules, the Itô isometry and Doob's $L^2$ maximal inequality; justify the upgrade from a local to a true martingale.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the cross covariation before applying the product rule. The integrands' dependence does not change the covariation of the two driving Brownian motions.

</details>

<details>
<summary>Hint 2</summary>

Bound the expected supremum of the absolute product using two $L^2$ maximal bounds. Use that integrable domination when removing a localization sequence.

</details>

<details>
<summary>Model proof</summary>

Zero cross covariation gives a local product martingale; an integrable maximum supplies the missing true-martingale justification.

1. For independent Brownian drivers in their common usual natural filtration, $[B,W]_t=0$. The stochastic-integral covariation rule gives $[I,J]_t=\int_0^tH_sK_s\,d[B,W]_s=0$. The Itô product formula therefore yields $I_tJ_t=\int_0^tI_sK_s\,dW_s+\int_0^tJ_sH_s\,dB_s$, a continuous local martingale starting at zero. The possibly unbounded integral coefficients are locally admissible by continuity and localization.
2. If $|H|\le C$ and $|K|\le D$, the Itô isometry gives $E[I_T^2]\le C^2T$ and $E[J_T^2]\le D^2T$. Doob's inequality then bounds $E[\sup_{t\le T}|I_t|^2]$ and $E[\sup_{t\le T}|J_t|^2]$ by four times these quantities. Cauchy–Schwarz shows $E[\sup_{t\le T}|I_tJ_t|]\le(E\sup|I|^2)^{1/2}(E\sup|J|^2)^{1/2}<\infty$.
3. Localize the product so that the stopped products are true martingales. For fixed $s\le t\le T$, the stopped values converge almost surely and are dominated by the integrable supremum just obtained. Conditional dominated convergence passes their martingale identity to $E[I_tJ_t\mid\mathcal F_s]=I_sJ_s$. Thus the product is a true martingale, and its expectation at $T$ equals its zero initial value. This proves orthogonality, not independence of the integrals with random coefficients.

**Self-assessment rubric**

- Use the common filtration and covariation rule to identify $[I,J]=0$ despite history-dependent integrands.
- Combine the isometry, Doob's inequality and Cauchy–Schwarz to establish an integrable dominating maximum.
- Remove localization by conditional dominated convergence and deduce the stated expectation without claiming independence.

</details>
