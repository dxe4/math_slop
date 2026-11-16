# Pass from localization to a supermartingale

*Medium · [Probability problems](index.md)*

Let $(M_t)_{t\ge0}$ be a nonnegative adapted càdlàg process with $M_0\in L^1(P)$. Suppose there are stopping times $\tau_n\uparrow\infty$ almost surely such that each stopped process $(M_{t\wedge\tau_n})_{t\ge0}$ is a true martingale. Prove that $M_t\in L^1(P)$ for every finite $t$ and that $E[M_t\mid\mathcal F_s]\le M_s$ for $0\le s\le t$. You may use ordinary and conditional Fatou. Explain exactly where nonnegativity enters.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First apply ordinary Fatou at a fixed time; do not assume integrability of the un-stopped process in advance.

</details>

<details>
<summary>Hint 2</summary>

Apply conditional Fatou to the nonnegative stopped terminal values. Their conditional means are stopped values at the earlier time, which converge pathwise.

</details>

<details>
<summary>Model proof</summary>

Nonnegativity provides the one-sided domination that survives removal of localization.

1. For fixed finite $t$, the localizers eventually exceed $t$ on almost every path, so $M_{t\wedge\tau_n}\to M_t$. Every stopped process has expectation $E[M_0]$. Ordinary Fatou for the nonnegative variables gives $E[M_t]\le\liminf_nE[M_{t\wedge\tau_n}]=E[M_0]<\infty$.
2. Now conditional Fatou is applicable: $E[M_t\mid\mathcal F_s]\le\liminf_nE[M_{t\wedge\tau_n}\mid\mathcal F_s]=\liminf_nM_{s\wedge\tau_n}=M_s$ almost surely. The middle equality uses the true martingale property of each stopped process at the two deterministic times.
3. Together with adaptedness and the fixed-time integrability already proved, the inequality is precisely the supermartingale property. Nonnegativity permits both Fatou steps. Localization alone does not justify an equality of un-stopped conditional means, since no uniform integrability of the stopped terminal values was assumed.

**Self-assessment rubric**

- Derive integrability of $M_t$ from the nonnegative stopped variables and their common mean.
- Use conditional Fatou in the correct direction and identify both stopped conditional means and their earlier-time limit.
- State why this yields a supermartingale rather than automatically a true martingale and identify the role of nonnegativity.

</details>
