# Prove bounded optional stopping by a finite sum

*Medium · [Probability problems](index.md)*

Let $(M_n,\mathcal F_n)_{n\ge0}$ be an integrable martingale and let $T$ be a nonnegative integer-valued stopping time with $T\le N$ almost surely for a deterministic finite integer $N$. Prove $M_T$ is integrable and $E[M_T]=E[M_0]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the stopped value as the initial value plus a finite sum of increments suppressed after stopping.

</details>

<details>
<summary>Hint 2</summary>

For the increment at time $k$, the event that stopping has not happened before $k$ is measurable at time $k-1$.

</details>

<details>
<summary>Model proof</summary>

A bounded stopping time produces a finite predictable increment sum.

1. Outside any null set where the bound fails, the telescoping identity is $M_T=M_0+\sum_{k=1}^N\mathbf1_{\{T\ge k\}}(M_k-M_{k-1})$. The same finite expression gives an integrable representative, since each increment is integrable and the multipliers are bounded.
2. The stopping-time definition gives $\{T\ge k\}=\{T>k-1\}\in\mathcal F_{k-1}$. Conditional expectation therefore gives $E[\mathbf1_{\{T\ge k\}}(M_k-M_{k-1})]=E[\mathbf1_{\{T\ge k\}}E[M_k-M_{k-1}\mid\mathcal F_{k-1}]]=0$.
3. Take expectations of the finite telescoping sum. Every increment term vanishes and no infinite interchange is required, yielding $E[M_T]=E[M_0]$. The deterministic bound is exactly what makes this proof finite.

The stopped value is a finite sum of predictable zero-mean increments plus the initial value.

**Self-assessment rubric**

- Write the correct finite stopped-increment identity and justify integrability.
- Place the survival indicator in the preceding sigma-algebra and show each increment term has zero mean.
- Take only a finite expectation sum and conclude the equality.

</details>
