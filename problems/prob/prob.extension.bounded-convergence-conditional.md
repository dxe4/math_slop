# Dominated convergence through conditional expectation

*Medium · [Probability problems](index.md)*

Let real $X_n\to X$ almost surely and suppose $|X_n|\le Y$ almost surely for every $n$, where $Y\ge0$ is integrable. For a fixed sub-sigma-algebra $\mathcal G$, prove $E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ in $L^1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The almost-sure limit is dominated by the same integrable variable, so first obtain ordinary $L^1$ convergence.

</details>

<details>
<summary>Hint 2</summary>

Derive the conditional-expectation $L^1$ contraction from the inequalities $-|Z|\le Z\le|Z|$ and conditional monotonicity.

</details>

<details>
<summary>Model proof</summary>

Ordinary dominated convergence combines with conditional-expectation contraction.

1. Outside one null set for the countably many bounds and the convergence, $|X|\le Y$ and $|X_n-X|\le2Y$. Thus $X$ and all $X_n$ are integrable, and dominated convergence gives $E[|X_n-X|]\to0$.
2. For any integrable $Z$, conditional monotonicity applied to $-|Z|\le Z\le|Z|$ yields $|E[Z\mid\mathcal G]|\le E[|Z|\mid\mathcal G]$ almost surely. Taking expectations and the tower property gives $E[|E[Z\mid\mathcal G]|]\le E[|Z|]$.
3. With $Z=X_n-X$, linearity implies $\|E[X_n\mid\mathcal G]-E[X\mid\mathcal G]\|_1\le\|X_n-X\|_1\to0$. This establishes $L^1$ convergence; the argument does not claim almost-sure convergence of arbitrary conditional versions.

Ordinary dominated convergence gives L1 convergence and conditional expectation contracts that norm.

**Self-assessment rubric**

- Show the limit is integrable and apply ordinary dominated convergence to the differences.
- Justify the conditional absolute-value bound and its expectation contraction.
- Use linearity and the contraction to conclude the requested L1 convergence, retaining the distinction from almost-sure convergence.

</details>
