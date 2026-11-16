# Prove uniform convergence without absolute convergence of a random Fourier series

*Hard · [Probability problems](index.md)*

For independent fair signs $\varepsilon_n$, prove that $\sum_{n\ge1}\varepsilon_n\sin(nx)/n$ converges uniformly in $x\in[0,2\pi]$ almost surely to a continuous function, although it is not absolutely convergent at $x=\pi/2$ on any sample. You may use the scalar bound $P(|\sum\varepsilon_ja_j|>u)\le2\exp[-u^2/(2\sum a_j^2)]$. Supply the grid, derivative bound, summable probability estimate and control of partial blocks needed to obtain full uniform convergence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Group frequencies into dyadic blocks and discretise each block on a sufficiently fine deterministic grid.

</details>

<details>
<summary>Hint 2</summary>

A bound only for whole blocks is not enough. Include every partial block in the union bound before applying Borel--Cantelli.

</details>

<details>
<summary>Model proof</summary>

Dyadic concentration plus a derivative-controlled grid turns scalar bounds into uniform Cauchy control.

1. For $N=2^m$ and $N\le M<2N$, put $B_{N,M}(x)=\sum_{n=N}^M\varepsilon_n\sin(nx)/n$. Its derivative has absolute value at most $N$ deterministically. Choose an equally spaced grid with at most $2N^2+2$ points and mesh at most $2\pi/N^2$; the supremum differs from the grid maximum by at most $2\pi/N$.
2. At a fixed grid point and fixed $M$, $\sum_{n=N}^M(\sin(nx)/n)^2\le1/N$. Taking $u_N=4\sqrt{\log N/N}$ in the given inequality bounds the tail by $2N^{-8}$ for $N\ge2$.
3. There are at most $N$ partial endpoints and $2N^2+2$ grid points. A union bound therefore makes the probability that any grid value exceeds $u_N$ at most $2N(2N^2+2)N^{-8}$, summable over dyadic $N$. Borel--Cantelli yields, almost surely for all sufficiently large dyadic $N$, $\max_{N\le M<2N}\|B_{N,M}\|_\infty\le u_N+2\pi/N$.
4. The latter bounds are summable over $N=2^m$. Any tail of the full series is decomposed into an initial partial block, whole intermediate blocks and a final partial block; a segment within a block is a difference of two controlled partial blocks. Their sup norms tend uniformly to zero. This proves the full partial sums are uniformly Cauchy, not merely the dyadic subsequence.
5. Every partial sum is continuous, so the uniform limit is continuous. At $x=\pi/2$, the absolute values of the terms are $1/n$ for odd $n$ and zero for even $n$. Their sum diverges deterministically, proving the claimed failure of absolute convergence on every sample.

**Self-assessment rubric**

- Choose a grid and prove a deterministic derivative-to-supremum estimate.
- Include all partial endpoints and obtain a summable failure probability.
- Control arbitrary tails rather than only whole dyadic blocks.
- Prove continuity of the limit and the stated deterministic absolute-divergence point.

</details>
