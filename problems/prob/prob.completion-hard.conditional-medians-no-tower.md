# Characterise absolute-loss prediction and break its tower

*Hard · [Probability problems](index.md)*

For an integrable real variable $Y$, derive the criterion for a conditional median to minimise conditional expected absolute loss. Then construct a finite law and a nontrivial sigma-field $\mathcal G$ for which the unconditional median of the conditional median of $Y$ differs from the unconditional median of $Y$, with all medians involved unique. Verify uniqueness and compare the absolute-loss risks of the two final constant predictions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For absolute loss, examine the one-sided slopes at a proposed prediction; differentiability is unnecessary.

</details>

<details>
<summary>Hint 2</summary>

Let one group have a majority at a low value but a minority at a far larger value, and place the other group at an intermediate value.

</details>

<details>
<summary>Model proof</summary>

Absolute-loss optimisation is conditional but nonlinear and has no general tower identity.

1. For a probability law, the convex risk $R(a)=E|Y-a|$ has left derivative $2P(Y<a)-1$ and right derivative $2P(Y\le a)-1$. A minimiser therefore satisfies $P(Y\le a)\ge1/2$ and $P(Y\ge a)\ge1/2$. The same one-sided calculation for each conditional law gives the conditional-median criterion; comparing pointwise conditional risks and then integrating proves optimality among measurable predictors with finite risk.
2. Let $P(A)=3/5$, let $Y$ given $A$ be zero with probability $3/5$ and $100$ with probability $2/5$, and let $Y=1$ on $A^c$. Set $\mathcal G=\sigma(A)$. The unique conditional median is $M=0$ on $A$ and $M=1$ on $A^c$, since each indicated atom has conditional mass strictly greater than one half.
3. The unique unconditional median of $M$ is zero, because $P(M=0)=3/5$. But the unconditional masses of $Y$ at $0,1,100$ are $9/25,10/25,6/25$. Its distribution crosses one half strictly at the atom $1$, making its unique median one.
4. The final constant zero has risk $(10+600)/25=610/25$, whereas constant one has risk $(9+594)/25=603/25$. Thus taking medians in two stages gives a strictly worse final constant predictor. None of the median choices or comparisons depends on a tie convention.

**Self-assessment rubric**

- Derive both one-sided inequalities and their optimisation meaning.
- Verify uniqueness at the conditional, intermediate and unconditional stages.
- Compute the two risks and explain the failure of a median tower identity.

</details>
