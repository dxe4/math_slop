# Identify a closed martingale at an unbounded stopping time

*Medium · [Probability problems](index.md)*

Let $(\mathcal F_n)_{n\ge0}$ be a filtration and $X\in L^1(P)$. Set $M_n=E[X\mid\mathcal F_n]$. Let $T$ be an almost surely finite stopping time with values in $\{0,1,\ldots\}$, not assumed bounded, and let $\mathcal F_T=\{A\in\mathcal F:A\cap\{T\le n\}\in\mathcal F_n\text{ for all }n\}$. Prove $M_T=E[X\mid\mathcal F_T]$ almost surely, including measurability and integrability. Deduce $E[M_T]=E[X]$ without assuming a general optional-stopping theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Break an event in $\mathcal F_T$ into its intersections with $\{T=n\}$. In which sigma-field does each piece lie?

</details>

<details>
<summary>Hint 2</summary>

Before summing signed integral identities, dominate the stopped absolute value by summing conditional expectations of $|X|$ on the stopping-time partition.

</details>

<details>
<summary>Model proof</summary>

The terminal integrable variable closes the martingale and supplies the domination needed at an unbounded stopping time.

1. For $A\in\mathcal F_T$, $A\cap\{T=n\}\in\mathcal F_n$, by subtracting the preceding stopped event when $n>0$. For a Borel set $C$, $\{M_T\in C\}\cap\{T\le m\}=\bigcup_{n=0}^m(\{T=n\}\cap\{M_n\in C\})\in\mathcal F_m$. Thus $M_T$ has an $\mathcal F_T$-measurable version; define it to be zero on the null event $\{T=\infty\}$.
2. Tonelli and conditional positivity give $E|M_T|=\sum_{n\ge0}E[|M_n|1_{\{T=n\}}]\le\sum_{n\ge0}E[E[|X|\mid\mathcal F_n]1_{\{T=n\}}]=\sum_{n\ge0}E[|X|1_{\{T=n\}}]=E|X|$. Thus the stopped variable is integrable, and all ensuing partition sums are absolutely convergent.
3. For $A\in\mathcal F_T$, sum the defining identities on $A\cap\{T=n\}$: $E[M_T1_A]=\sum_nE[M_n1_{A\cap\{T=n\}}]=\sum_nE[X1_{A\cap\{T=n\}}]=E[X1_A]$. This identifies $M_T$ as $E[X\mid\mathcal F_T]$. Taking $A=\Omega$ proves the expectation identity. Closedness, not boundedness of $T$, supplied the necessary integrability.

**Self-assessment rubric**

- Verify measurability on $\mathcal F_T$ using the stopping partition rather than treating $\mathcal F_T$ as a fixed-time sigma-field.
- Prove $E|M_T|\le E|X|$ and justify countable signed sums.
- Test every $A\in\mathcal F_T$ and deduce both the conditional expectation and its ordinary mean.

</details>
