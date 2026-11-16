# Make Cesaro averages explode along rare blocks

*Hard · [Probability problems](index.md)*

Construct nonnegative random variables $(X_n)$ such that $EX_n=1$ for every $n$, $X_n\to0$ in probability, but $\limsup_{N\to\infty}N^{-1}\sum_{n=1}^N X_n=\infty$ almost surely. Give one explicit common probability space and sequence, and prove all three claims. You may use the independent Borel--Cantelli lemma.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Repeat one rare random value throughout a very long deterministic block.

</details>

<details>
<summary>Hint 2</summary>

Choose the block lengths so that a successful block alone controls a fixed fraction of the running average.

</details>

<details>
<summary>Model proof</summary>

Dependence within increasingly long blocks turns rare successes into almost-sure large subsequential averages.

1. Take independent events $B_k$ with $P(B_k)=1/k$, $k\ge1$, on a product probability space. Set $N_0=0$ and $N_k=2^{2^k}$ for $k\ge1$. For $N_{k-1}<n\le N_k$, define $X_n=k\mathbf1_{B_k}$. This also defines the initial block without gaps.
2. Each variable has mean $k/k=1$. As $n\to\infty$, its block index $k$ tends to infinity, and for any fixed $\epsilon>0$, eventually $P(X_n>\epsilon)=1/k\to0$. Thus convergence in probability holds.
3. The events $B_k$ are independent and $\sum_k1/k=\infty$, so infinitely many occur almost surely. Since $N_{k-1}/N_k\to0$, on $B_k$ and for all sufficiently large $k$ the average at $N_k$ is at least $k(N_k-N_{k-1})/N_k\ge k/2$.
4. The indices of these successful blocks are unbounded almost surely, giving infinite limsup of the averages. The construction does not assert independence of the $X_n$; their deliberate within-block dependence is the source of the failure.

**Self-assessment rubric**

- Specify independent block events and a sequence covering every index.
- Verify the exact means and convergence in probability.
- Combine Borel--Cantelli with the length comparison to prove infinite limsup.

</details>
