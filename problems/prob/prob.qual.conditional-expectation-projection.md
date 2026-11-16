# Identify the L2 conditional projection with uniqueness up to null sets

*Medium · [Probability problems](index.md)*

For $X\in L^2$ and a sub-sigma-field $\mathcal G$, put $M=E[X\mid\mathcal G]$. Prove that $M\in L^2$ and, for every $\mathcal G$-measurable $Y\in L^2$, $E(X-Y)^2=E(X-M)^2+E(M-Y)^2$. Deduce the unique minimizing random variable up to almost-sure equality. You may use conditional Jensen and the defining conditional-expectation identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The cross term is orthogonal to every square-integrable variable measurable with respect to the conditioning information.

</details>

<details>
<summary>Hint 2</summary>

For unbounded test variables, justify that orthogonality by truncation.

</details>

<details>
<summary>Model proof</summary>

The risk decomposition is a Pythagorean identity in L2.

1. Conditional Jensen gives $M^2\le E[X^2\mid\mathcal G]$ almost surely, hence $M\in L^2$. For every bounded $\mathcal G$-measurable $Z$, the defining identity yields $E[(X-M)Z]=0$.
2. Take bounded truncations of $Z=M-Y$. They converge in $L^2$, and Cauchy–Schwarz passes the orthogonality identity to $M-Y$.
3. Expand $X-Y=(X-M)+(M-Y)$ and use the zero cross term. The second squared norm is nonnegative and vanishes exactly when $Y=M$ almost surely, proving minimization and its precise uniqueness.

**Self-assessment rubric**

- Establish square integrability of the conditional mean.
- Extend bounded test-variable orthogonality to the required L2 cross term.
- Derive the exact decomposition and state almost-sure uniqueness.

</details>
