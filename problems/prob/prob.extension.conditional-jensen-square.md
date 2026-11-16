# Conditional square inequality without general Jensen

*Medium · [Probability problems](index.md)*

For real $X\in L^2$ and a sub-sigma-algebra $\mathcal G$, prove $(E[X\mid\mathcal G])^2\le E[X^2\mid\mathcal G]$ almost surely without using the general conditional Jensen inequality. Do not presume beforehand that $E[X\mid\mathcal G]$ belongs to $L^2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed rational constant $a$, condition the nonnegative square $(X-a)^2$.

</details>

<details>
<summary>Hint 2</summary>

Work outside one null set for all rational constants. A quadratic nonnegative at all rational arguments is nonnegative at every real argument; evaluate it at the conditional mean.

</details>

<details>
<summary>Model proof</summary>

Constant-square positivity avoids an unjustified unbounded pull-out step.

1. Set $M=E[X\mid\mathcal G]$ and $Q=E[X^2\mid\mathcal G]$. Both are finite almost surely because $X$ and $X^2$ are integrable. For each rational $a$, positivity and linearity of conditional expectation give $Q-2aM+a^2=E[(X-a)^2\mid\mathcal G]\ge0$ almost surely.
2. There are countably many rational numbers. Remove the union of their exceptional null sets, together with the null set where $M$ or $Q$ is not finite. At any remaining outcome, the real polynomial $q(a)=Q-2aM+a^2$ is nonnegative on all rational $a$, and continuity makes it nonnegative for every real $a$.
3. At that outcome choose the real value $a=M$. This gives $Q-M^2\ge0$, proving the inequality almost surely. Taking expectations afterwards shows $E[M^2]\le E[Q]=E[X^2]<\infty$, so square integrability of the conditional mean is a consequence, not an assumed premise.

The quadratic $Q-2aM+a^2$ is nonnegative for all rational, hence all real, constants outside one null set; its minimum gives $M^2\le Q$.

**Self-assessment rubric**

- Condition nonnegative squares for fixed rational constants, using only justified linear operations.
- Use countability to obtain one probability-one set on which every rational inequality holds.
- Extend the quadratic inequality by continuity and evaluate at its minimiser, avoiding circular L2 assumptions.

</details>
