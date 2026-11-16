# Classify convergence of a sparse random series

*Hard · [Probability problems](index.md)*

For real $\alpha$ and $\beta>0$, let independent $X_n$ take values $n^\alpha,-n^\alpha,0$ with probabilities $1/(2n^\beta),1/(2n^\beta),1-1/n^\beta$. Determine exactly when $\sum_nX_n$ converges almost surely and when it converges absolutely almost surely, including every equality boundary. Explain how absolute convergence can occur while $E\sum_n|X_n|=\infty$. You may use the three-series theorem, stating the truncations you apply.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Separate amplitudes that do not vanish from amplitudes that vanish. In the first regime, count nonzero terms.

</details>

<details>
<summary>Hint 2</summary>

In the small-amplitude regime, symmetry removes the truncated means, while absolute convergence is governed by a different series.

</details>

<details>
<summary>Model proof</summary>

Rare large jumps and accumulated small variance produce different phase boundaries.

1. If $\alpha\ge0$, each nonzero term has magnitude at least one. For $\beta\le1$, independent Borel--Cantelli gives infinitely many such terms, so even the term test fails. For $\beta>1$, only finitely many terms are nonzero almost surely, giving absolute convergence. This includes $\alpha=0$.
2. If $\alpha<0$, the terms eventually have magnitude below one. Their means are zero and variances are $n^{2\alpha-\beta}$. The three-series theorem, truncated at one, therefore gives almost-sure convergence exactly when $2\alpha-\beta<-1$, or $\beta>1+2\alpha$. Equality gives the divergent harmonic variance sum.
3. For absolute convergence in this small-amplitude regime, apply the same theorem to $|X_n|\le1$ eventually. Its truncated mean sum is $\sum n^{\alpha-\beta}$, so necessity is $\beta>1+\alpha$. This is also sufficient by Tonelli: a finite expected sum of nonnegative terms is finite almost surely. If the mean sum diverges, the necessary three-series condition fails. Equality again diverges.
4. For $\alpha>0$ and $1<\beta\le1+\alpha$, only finitely many nonzero terms occur almost surely, yet Tonelli gives $E\sum|X_n|=\sum n^{\alpha-\beta}=\infty$. The finite random sum is not bounded by an integrable variable. This does not contradict the small-amplitude classification, whose truncation behaves differently.

**Self-assessment rubric**

- Apply the term test and both Borel--Cantelli directions correctly.
- Identify the truncated mean and variance criteria and equality boundary.
- Distinguish absolute mean summability from symmetric variance summability.
- Give the precise parameter region where the almost-sure and expectation assertions differ.

</details>
