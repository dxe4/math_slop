# Conditional expectation preserves order

*Medium · [Probability problems](index.md)*

For integrable real $X,Y$ with $X\le Y$ almost surely and a sub-sigma-algebra $\mathcal G$, prove $E[X\mid\mathcal G]\le E[Y\mid\mathcal G]$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Consider the conditional expectation of the nonnegative difference.

</details>

<details>
<summary>Hint 2</summary>

If its value were negative, test the defining integral identity on a measurable set where it is bounded above by a fixed negative number.

</details>

<details>
<summary>Model proof</summary>

A conditional mean of a nonnegative variable cannot have a negative information-event average.

1. Let $Z=Y-X\ge0$ almost surely. By linearity, $W=E[Z\mid\mathcal G]=E[Y\mid\mathcal G]-E[X\mid\mathcal G]$ almost surely, with $W$ integrable and $\mathcal G$-measurable.
2. For each $k\ge1$, the event $A_k=\{W\le-1/k\}$ belongs to $\mathcal G$. The defining identity gives $E[W\mathbf1_{A_k}]=E[Z\mathbf1_{A_k}]\ge0$, whereas $E[W\mathbf1_{A_k}]\le-P(A_k)/k$.
3. Thus every $A_k$ is null. Their union equals $\{W<0\}$, so $W\ge0$ almost surely, proving the desired order.

A negative level set of the conditional difference would contradict the nonnegative difference's defining integral identity.

**Self-assessment rubric**

- Identify the conditional difference as the conditional mean of an integrable nonnegative variable.
- Test on measurable negative level sets and derive their zero probabilities.
- Use the countable union of level sets to establish almost-sure nonnegativity.

</details>
