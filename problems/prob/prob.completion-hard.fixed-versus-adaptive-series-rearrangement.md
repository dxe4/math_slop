# Separate fixed and sample-dependent rearrangements

*Hard · [Probability problems](index.md)*

Let $(\varepsilon_n)$ be independent fair signs and $S=\sum_{n\ge1}\varepsilon_n/n$. Prove that the series converges almost surely and that, for every fixed deterministic permutation $\pi$, $\sum_{k\ge1}\varepsilon_{\pi(k)}/\pi(k)=S$ almost surely. Nevertheless prove that with probability one there exists a sample-dependent permutation making the series converge to $7$. Justify the rearrangement construction; explain the apparent quantifier conflict. You may use the convergence theorem for independent centred variables with summable variances.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A deterministic rearrangement has the same square-summable variance family. Compare both limits through finite coefficient approximations in $L^2$.

</details>

<details>
<summary>Hint 2</summary>

On a convergent signed harmonic sample, both the positive and negative subseries have infinite total magnitude. Alternate overshoots of the desired target.

</details>

<details>
<summary>Model proof</summary>

Square-summable randomness preserves each fixed rearrangement, but a pathwise choice can exploit conditional convergence.

1. The independent terms are centred with variance $1/n^2$, a summable series. Hence the original series converges almost surely and in $L^2$ to $S$. For fixed $\pi$, the rearranged terms satisfy the same hypotheses and have an almost-sure and $L^2$ limit $S_\pi$.
2. For any finite $M$, eventually the first $K$ rearranged indices include $1,\ldots,M$. The squared $L^2$ distance between that rearranged partial sum and $S$ is the variance sum over the missing indices, at most $\sum_{n>M}n^{-2}$. Letting $M\to\infty$ gives $S_\pi=S$ in $L^2$, hence almost surely.
3. On every convergent sample, write $P_N=\sum_{n\le N,\varepsilon_n=1}1/n$ and $N_N=\sum_{n\le N,\varepsilon_n=-1}1/n$. Since $P_N+N_N=H_N\to\infty$ and $P_N-N_N$ has a finite limit, both increase to infinity.
4. Take unused positive terms in their original order until the running total exceeds $7$, then unused negative terms until it falls below $7$, and repeat. Each stage ends because the corresponding remaining subseries diverges. Every term is eventually used, since each sign has infinitely many stages and is used in increasing index order. The overshoots tend to zero because term magnitudes tend to zero; all intermediate partial sums are trapped between successive overshoots. The rearranged series therefore converges to $7$.
5. The equality event for each fixed permutation has probability one, but there are uncountably many permutations. One cannot intersect all their probability-one events without a countability justification. The adaptive permutation depends on the realised signs and is not one fixed permutation chosen in advance.

**Self-assessment rubric**

- Use summable variances and prove the deterministic-permutation limit equals the same random variable.
- Prove divergence of both signed magnitude subseries on convergent samples.
- Verify termination, exhaustion of indices and vanishing overshoots.
- Explain precisely why the two probability-one statements are compatible.

</details>
