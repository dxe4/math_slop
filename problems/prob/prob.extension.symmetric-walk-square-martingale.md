# Compensate a fair walk's square

*Medium · [Probability problems](index.md)*

Let $\xi_k$ be mutually independent fair signs, $S_0=0$, $S_n=\sum_{k=1}^n\xi_k$, and $\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$. Prove that $M_n=S_n^2-n$ is a martingale relative to $(\mathcal F_n)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Verify adaptedness and integrability before the conditional identity.

</details>

<details>
<summary>Hint 2</summary>

Expand $(S_n+\xi_{n+1})^2$ and use the next increment's independence from the natural past.

</details>

<details>
<summary>Model proof</summary>

Subtract the deterministic unit increase in conditional square.

1. The process is adapted because $S_n$ uses only the first $n$ increments. Also $|S_n|\le n$, so $M_n$ is integrable at every finite time.
2. Expanding gives $S_{n+1}^2=S_n^2+2S_n\xi_{n+1}+\xi_{n+1}^2$. The new increment is independent of $\mathcal F_n$, has mean zero and square one.
3. Thus $E[S_{n+1}^2\mid\mathcal F_n]=S_n^2+1$, and subtracting $n+1$ yields $E[M_{n+1}\mid\mathcal F_n]=S_n^2-n=M_n$. All martingale requirements are satisfied for the stated natural filtration.

Subtracting the step count cancels that conditional growth, producing an adapted integrable martingale.

**Self-assessment rubric**

- Check adaptedness and integrability at every finite time.
- Expand the next square and justify the conditional increment moments using the natural filtration.
- Show the deterministic compensation cancels the unit conditional square drift.

</details>
