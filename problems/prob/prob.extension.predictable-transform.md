# Bounded predictable transforms preserve martingales

*Medium · [Probability problems](index.md)*

Let $(M_n,\mathcal F_n)_{n\ge0}$ be an integrable martingale. For each $k\ge1$, let $H_k$ be bounded and $\mathcal F_{k-1}$-measurable. Set $N_0=0$ and $N_n=\sum_{k=1}^nH_k(M_k-M_{k-1})$. Prove $(N_n,\mathcal F_n)$ is a martingale.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

At each fixed finite time, only finitely many bounded-multiplier integrable products occur.

</details>

<details>
<summary>Hint 2</summary>

Condition the new increment on the immediately preceding information, using that the stake was chosen before that increment.

</details>

<details>
<summary>Model proof</summary>

Predictable bounded stakes preserve zero conditional drift at each finite step.

1. Each product is integrable because $H_k$ is bounded and $M_k-M_{k-1}$ is integrable. Each is $\mathcal F_k$-measurable, so the finite sum $N_n$ is integrable and $\mathcal F_n$-measurable. No common bound over all $k$ is needed for a fixed finite sum.
2. The next increment is $N_n-N_{n-1}=H_n(M_n-M_{n-1})$. Bounded pull-out gives its conditional mean as $H_nE[M_n-M_{n-1}\mid\mathcal F_{n-1}]=0$.
3. Since $N_{n-1}$ is measurable with respect to $\mathcal F_{n-1}$, the last identity gives $E[N_n\mid\mathcal F_{n-1}]=N_{n-1}$ for each $n\ge1$. Together with $N_0=0$, adaptedness and integrability, this proves the martingale property.

Finite-time integrability and predictable pull-out make every transformed increment conditionally centred.

**Self-assessment rubric**

- Check adaptedness and integrability of every fixed-time finite sum using bounded stakes.
- Use the preceding-time measurability to pull the bounded stake through the increment's conditional mean.
- Identify the one-step conditional identity for the transformed process, including its initial value.

</details>
