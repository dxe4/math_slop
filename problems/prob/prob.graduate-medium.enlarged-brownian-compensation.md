# Compensate Brownian motion after revealing its terminal value

*Medium · [Probability problems](index.md)*

Let $B$ be standard Brownian motion on $[0,T]$ with its usual natural filtration $(\mathcal F_t)$, where $T>0$, and set $\mathcal G_t=\mathcal F_t\vee\sigma(B_T)$, completed by null sets. For $0\le s<t<T$, determine $E[B_t\mid\mathcal G_s]$ and show that $B$ is not a $\mathcal G$-martingale. Prove that $N_t=B_t-\int_0^t(B_T-B_u)/(T-u)\,du$, $0\le t<T$, is a $\mathcal G$-martingale. You may use the conditional-mean formula for a jointly Gaussian pair and conditional Fubini, but justify their use with the full past sigma-field and with the drift integral.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The pair of future increments from time $s$ to $t$ and from $s$ to $T$ is independent of $\mathcal F_s$. Condition this pair on its terminal component before restoring the known past value.

</details>

<details>
<summary>Hint 2</summary>

For a fixed $t<T$, first bound the expected absolute drift integral. Then condition its integrand at each $u\in[s,t]$ and compare the integrated conditional drift with that of $B_t-B_s$.

</details>

<details>
<summary>Model proof</summary>

Revealing a terminal value introduces an anticipative conditional drift; subtracting that drift restores the martingale property before the terminal time.

1. The Gaussian pair $(B_t-B_s,B_T-B_s)$ is independent of $\mathcal F_s$, has covariance $t-s$ and terminal variance $T-s$. Gaussian regression therefore gives $E[B_t\mid\mathcal G_s]=B_s+\frac{t-s}{T-s}(B_T-B_s)$. Independence of the future pair from the whole past justifies conditioning on $\mathcal F_s\vee\sigma(B_T-B_s)$, not only on $B_s$; this sigma-field equals $\mathcal G_s$ up to completion. The extra term is nonzero almost surely for $s<t<T$, so $B$ is not a martingale in the enlarged filtration.
2. For $u\le t<T$, $E|B_T-B_u|/(T-u)\le1/\sqrt{T-u}\le1/\sqrt{T-t}$. Hence the drift integral through $t$ is absolutely integrable by Tonelli. Its pathwise definition is also legitimate, since the denominator is bounded away from zero on each such interval and Brownian paths are continuous. The process $N$ is adapted to $\mathcal G$ and integrable at each time below $T$.
3. For $s\le u\le t<T$, the first conditional formula gives $E[B_T-B_u\mid\mathcal G_s]=\frac{T-u}{T-s}(B_T-B_s)$. Conditional Fubini is legitimate by the preceding absolute-integrability bound, so $E[\int_s^t\frac{B_T-B_u}{T-u}\,du\mid\mathcal G_s]=\frac{t-s}{T-s}(B_T-B_s)$. This equals the conditional mean of $B_t-B_s$. Their difference has conditional mean zero, proving $E[N_t\mid\mathcal G_s]=N_s$. No assertion at the singular endpoint $T$ is needed.

**Self-assessment rubric**

- Use independence of the future Gaussian pair from the full past to obtain the enlarged conditional mean and the failure of the original martingale identity.
- Check adaptedness and absolute integrability of the drift on every interval ending strictly before $T$.
- Compute the conditioned drift, justify conditional Fubini, and prove the martingale identity with the correct endpoint restriction.

</details>
