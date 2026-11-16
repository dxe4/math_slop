# Find an unattained concentration supremum under fixed moments

*Hard · [Probability problems](index.md)*

Among symmetric real random variables $X$ with $E[X^2]=1$ and $E[X^4]=3$, determine $\sup P(|X|\le1)$ and decide whether it is attained. Construct an explicit family approaching the supremum and verify both moments exactly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Work with the nonnegative variable $Y=X^2$, then restore symmetry with an independent sign.

</details>

<details>
<summary>Hint 2</summary>

Use a two-point law for $Y$ with one value approaching $1$ from below and a rare large value chosen to preserve both moments.

</details>

<details>
<summary>Model proof</summary>

A rare distant atom can preserve the fourth moment while almost all mass enters the central interval.

1. The probability is at most $1$. It cannot equal $1$: on $|X|\le1$ almost surely, $X^4\le X^2$, contradicting the specified fourth and second moments.
2. For $0<\epsilon<1$, let $Y$ equal $1-\epsilon$ with probability $1-q$ and $1+2/\epsilon$ with probability $q$, where $q=\epsilon^2/(\epsilon^2+2)$.
3. Then $EY=1-\epsilon+q(\epsilon+2/\epsilon)=1$. Also $E(Y-1)^2=(1-q)\epsilon^2+4q/\epsilon^2=2$, so $EY^2=3$.
4. Let $X=R\sqrt Y$ with an independent fair sign $R$. It is symmetric and has the required second and fourth moments. Its central probability is $1-q\to1$, proving supremum $1$ with no attaining law.

**Self-assessment rubric**

- Explain why probability one would contradict the fixed moment constraints.
- Give a normalised two-level squared-variable construction with valid probabilities.
- Verify both moment equations exactly rather than only asymptotically.
- Restore symmetry and prove that the central probabilities approach the claimed supremum.

</details>
