# Find the entropy-minimising constrained law including boundary means

*Hard · [Probability problems](index.md)*

Let $p_i>0$ be a probability vector on finitely many real values $x_i$ that are not all equal. For each $a\in[\min_i x_i,\max_i x_i]$, determine the unique probability vector $q$ minimising $D(q\|p)=\sum_iq_i\log(q_i/p_i)$ subject to $\sum_iq_ix_i=a$, with $0\log0=0$. Prove existence and uniqueness, identify the interior parameter and handle both endpoint means without claiming a finite tilt parameter there.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Try a normalised exponential tilt, and differentiate its mean with respect to the tilt parameter.

</details>

<details>
<summary>Hint 2</summary>

Compare any feasible law to the candidate by expanding a second relative entropy. At an endpoint, first determine its forced support.

</details>

<details>
<summary>Model proof</summary>

An exponential tilt satisfies the mean constraint, and an exact entropy decomposition proves global optimality.

1. For real $t$, put $Z(t)=\sum_i p_ie^{tx_i}$ and $q_i(t)=p_ie^{tx_i}/Z(t)$. Its mean $a(t)=(\log Z)^{\prime}(t)$ has derivative $\operatorname{Var}_{q(t)}(x)>0$, since all tilted masses are positive and the values are not all equal.
2. As $t\to-\infty$ and $+\infty$, the mean tends respectively to the minimum and maximum value: divide numerator and denominator by the dominant exponential. Thus each strictly interior $a$ has one and only one finite parameter $t$ with $a(t)=a$.
3. For any feasible $r$, direct expansion gives $D(r\|p)=D(r\|q(t))+ta-\log Z(t)$. The last two terms equal $D(q(t)\|p)$. Relative entropy is nonnegative, with equality only at identical vectors, as follows from the strict equality condition in the logarithm inequality. This proves unique global minimisation, including competitors with zero entries.
4. At the minimum endpoint, every feasible vector must be supported on $F=\{i:x_i=\min_jx_j\}$. On that face, $D(r\|p)=D(r\|p(\cdot\mid F))-\log p(F)$. The unique minimiser is the original law conditioned on $F$. The maximum endpoint is identical with its own extremal face.
5. The endpoint minimisers are limits as $t\to\mp\infty$ of the tilted vectors; no finite $t$ reaches them because all finite tilted masses remain positive outside the extremal face. This also establishes existence throughout the full closed feasible interval.

**Self-assessment rubric**

- Prove strict monotonicity and the two parameter limits.
- Derive an exact comparison proving global uniqueness, not merely stationarity.
- Identify the forced faces and their conditional reference laws.
- Distinguish attained endpoint distributions from nonexistent finite endpoint parameters.

</details>
