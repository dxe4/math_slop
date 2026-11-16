# Prove the sharp variance bound and endpoint equality

*Hard · [Original olympiad-style problems](index.md)*

Let positive weights $w_i$ sum to one and real inputs satisfy $m\le x_i\le M$, where $m<M$. Prove $\sum w_ix_i^2-(\sum w_ix_i)^2\le(M-m)^2/4$ and characterize every equality case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The pointwise product $(x_i-m)(M-x_i)$ is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

After averaging and subtracting the squared mean, complete one square in the mean.

</details>

<details>
<summary>Model proof</summary>

Use a secant bound followed by a sharp one-variable square.

1. Write the weighted mean as s. The pointwise product gives $x_i^2\le(m+M)x_i-mM$.
2. Averaging yields variance at most $(m+M)s-mM-s^2=(M-m)^2/4-(s-(m+M)/2)^2$.
3. This proves the bound. Equality in the first step, with every weight positive, requires every input at one of the two endpoints; equality in the second requires mean at their midpoint.
4. Those conditions say total weight at each endpoint is one half. Conversely any such endpoint assignment attains the bound. If the supplied weights cannot split into halves, the universal bound remains valid but cannot be attained by those weights.

**Self-assessment rubric**

- Derive the exact quadratic secant inequality.
- Average and complete the correct square in the mean.
- Use positive weights to trace equality at every input.
- Give the exact endpoint weight condition and its converse.

</details>
