# Stop after one predetermined step

*Easy · [Probability problems](index.md)*

A fair unit-step walk starts at $S_0=0$ and is stopped at the deterministic time $T=1$. Its first step is equally likely to be $+1$ or $-1$. Find $E[S_T]$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks the mean of this single predetermined stopped step only; no general optional-stopping claim is inferred."}}
```

<details>
<summary>Hint 1</summary>

The stopping rule is a fixed time, so the stopped value is just the first-step value.

</details>

<details>
<summary>Hint 2</summary>

Average its two equally likely signed values directly.

</details>

<details>
<summary>Worked solution</summary>

This stopping time needs only a two-point expectation calculation.

1. Since $T=1$ deterministically, $S_T=S_1$.
2. The two stopped values are $+1$ and $-1$, with probability $1/2$ each.
3. Their mean is $(1/2)1+(1/2)(-1)=0$. There is no limit over unbounded stopping times in this calculation.

The two stopped values cancel in expectation, giving zero.

</details>
