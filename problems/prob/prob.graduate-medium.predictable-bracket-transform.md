# Identify the bracket of an unbounded predictable transform

*Medium · [Probability problems](index.md)*

Let $(M_n,\mathcal F_n)_{0\le n\le N}$ be a square-integrable real martingale and set $v_k=E[(M_k-M_{k-1})^2\mid\mathcal F_{k-1}]$. Let $H_k$ be finite real $\mathcal F_{k-1}$-measurable variables, not assumed bounded, with $E[\sum_{k=1}^NH_k^2v_k]<\infty$. Put $I_0=0$, $I_n=\sum_{k=1}^nH_k(M_k-M_{k-1})$, and $A_n=\sum_{k=1}^nH_k^2v_k$. Prove that $I$ is square-integrable, $I_n^2-A_n$ is a martingale, and $A$ is the unique integrable predictable process starting at zero with that compensator property. Here predictable means that the $k$th increment is $\mathcal F_{k-1}$-measurable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use nonnegative conditional integration to control the square of a weighted increment before pulling an unbounded $H_k$ out of a signed conditional expectation.

</details>

<details>
<summary>Hint 2</summary>

Expand the increment of $I_n^2$. For uniqueness, the difference of two proposed compensators is both a martingale and has predictable increments.

</details>

<details>
<summary>Model proof</summary>

The weighted conditional variance supplies precisely the integrability needed for a predictable transform and its square compensator.

1. For $D_k=H_k(M_k-M_{k-1})$, nonnegative conditional integration gives $E[D_k^2]=E[H_k^2v_k]<\infty$. Thus every $D_k$ and finite sum $I_n$ lies in $L^2$. Truncate $H_k$ by $H_k^{(r)}=H_k1_{\{|H_k|\le r\}}$. The corresponding increments have conditional mean zero, and their $L^2$ distance to $D_k$ has square mean $E[H_k^2v_k1_{\{|H_k|>r\}}]\to0$. Conditional $L^1$ contraction then gives $E[D_k\mid\mathcal F_{k-1}]=0$, proving that $I$ is a martingale.
2. The conditional second-moment identity is $E[D_k^2\mid\mathcal F_{k-1}]=H_k^2v_k$, justified by nonnegative truncation. Also $I_{k-1}D_k$ is integrable by Cauchy–Schwarz and has conditional mean zero; truncating the measurable multiplier $I_{k-1}$ justifies this last assertion if it is unbounded.
3. Since $I_k^2-I_{k-1}^2=2I_{k-1}D_k+D_k^2$, its conditional mean is $H_k^2v_k=A_k-A_{k-1}$. The process $A$ is predictable, nonnegative, increasing and integrable by the hypothesis. Therefore $I^2-A$ is an integrable martingale.
4. If another integrable predictable process $C$ starts at zero and makes $I^2-C$ a martingale, then $A-C$ is a martingale. Its $k$th increment is already $\mathcal F_{k-1}$-measurable, so that increment equals its own conditional mean, which is zero. Induction gives $A=C$ up to indistinguishability on this finite time set.

**Self-assessment rubric**

- Derive weighted $L^2$ integrability and use truncation to justify the zero conditional mean for unbounded predictable stakes.
- Justify the cross term and conditional second moment in the square expansion.
- Identify $A$ as integrable and predictable and prove $I^2-A$ is a martingale.
- Use predictable martingale increments, rather than an unsupported decomposition assertion, to prove uniqueness.

</details>
