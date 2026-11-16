# State the one-sided domain before optimizing Hoeffding's bound

*Medium · [Probability problems](index.md)*

Let $X_1,\ldots,X_n$ be independent random variables in $[0,1]$, with $n\ge1$. For every $t\ge0$, prove $P(\sum_i(X_i-EX_i)\ge t)\le\exp(-2t^2/n)$. You may use Hoeffding's lemma $E[e^{s(X_i-EX_i)}]\le e^{s^2/8}$ for real $s$. Explain why this statement must not be asserted for negative $t$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a positive tilt, independence factors the exponential moment.

</details>

<details>
<summary>Hint 2</summary>

Minimize the quadratic exponent and examine a deterministic sample for the excluded sign of $t$.

</details>

<details>
<summary>Model proof</summary>

Positive exponential tilting produces a one-sided nonnegative-threshold bound.

1. For $s>0$, exponential Markov and independence give $P(\sum_i(X_i-EX_i)\ge t)\le\exp(-st+ns^2/8)$.
2. For $t>0$ the quadratic is minimized at $s=4t/n$, yielding exponent $-2t^2/n$. At $t=0$ the bound is the elementary probability bound $P(\cdot)\le1$.
3. If $t<0$ and every $X_i=0$ deterministically, the event has probability one while $\exp(-2t^2/n)<1$. Thus omitting the threshold restriction would make the assertion false.

**Self-assessment rubric**

- Use positive tilting, independence and the named moment bound correctly.
- Handle positive and zero thresholds separately.
- Exhibit why the omitted sign restriction would invalidate the claim.

</details>
