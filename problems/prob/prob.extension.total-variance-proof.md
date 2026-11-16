# Prove total variance

*Medium · [Probability problems](index.md)*

Let $X\in L^2$ on a probability space and let $\mathcal G$ be a sub-sigma-algebra. With $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$, prove $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Set $M=E[X\mid\mathcal G]$ and split $X-E[X]$ into $X-M$ plus $M-E[X]$.

</details>

<details>
<summary>Hint 2</summary>

Show the expected cross term vanishes by conditioning on $\mathcal G$. For an unbounded measurable multiplier, justify the pull-out step by truncation and integrability.

</details>

<details>
<summary>Model proof</summary>

The conditional residual is orthogonal to the conditional mean fluctuation.

1. Conditional Jensen gives $E[M^2]\le E[X^2]<\infty$, and the tower property gives $E[M]=E[X]$. Thus $X-M$ and $M-E[X]$ belong to $L^2$, and their product is integrable by Cauchy–Schwarz.
2. For each bounded $\mathcal G$-measurable $Z$, $E[(X-M)Z]=E[ZE[X-M\mid\mathcal G]]=0$. Truncate $M-E[X]$ to bounded $Z_k$; these converge in $L^2$, so Cauchy–Schwarz implies $E[(X-M)(M-E[X])]=0$.
3. Expand $(X-E[X])^2=(X-M)^2+2(X-M)(M-E[X])+(M-E[X])^2$ and take expectations. The cross term vanishes; the tower property identifies $E[(X-M)^2]=E[\operatorname{Var}(X\mid\mathcal G)]$, and the last term is $\operatorname{Var}(M)$. This proves the identity, independent of versions changed only on null sets.

The residual is orthogonal to the conditional mean fluctuation; the centred square splits into the expected conditional variance and variance of the conditional mean.

**Self-assessment rubric**

- Establish square integrability and the correct mean of the conditional mean.
- Justify the zero cross term, including the unbounded measurable multiplier via truncation or an equivalent valid argument.
- Expand the centred square and identify the two remaining expected terms using the tower property.

</details>
