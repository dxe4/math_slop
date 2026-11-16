# Derive the Markov law conditioned on remote survival

*Hard · [Probability problems](index.md)*

Let $K$ be a finite irreducible aperiodic substochastic matrix, interpreted as transitions before killing. Suppose its Perron eigenvalue satisfies $0<\lambda<1$. Let $h>0$ and $\nu>0$ satisfy $Kh=\lambda h$, $\nu K=\lambda\nu$, $\nu h=1$. You may use the Perron limit $\lambda^{-n}K^n\to h\nu$. Starting at state $i$, prove that every fixed initial path conditioned on survival through time $N$ converges as $N\to\infty$ to a Markov path law with an explicit stochastic matrix. Determine its invariant law. If $\mu_iK_{ij}=\mu_jK_{ji}$ for positive $\mu$, derive the invariant law in terms of $\mu$ and $h$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For a fixed path, all remote survival dependence is a final factor $(K^{N-r}\mathbf1)$ at its last state.

</details>

<details>
<summary>Hint 2</summary>

Telescope the right-eigenvector factors along the proposed transformed path. Combine left and right eigenvectors for stationarity.

</details>

<details>
<summary>Model proof</summary>

Perron asymptotics turn remote survival conditioning into a conservative eigenfunction transform.

1. The survival probability from $i$ through $N$ is $(K^N\mathbf1)_i\sim\lambda^Nh_i(\nu\mathbf1)$. For a fixed surviving path $i=i_0,i_1,\ldots,i_r$, its conditional probability is $[\prod_{s=1}^rK_{i_{s-1}i_s}](K^{N-r}\mathbf1)_{i_r}/(K^N\mathbf1)_i$.
2. The Perron limit makes this tend to $\lambda^{-r}(h_{i_r}/h_i)\prod_{s=1}^rK_{i_{s-1}i_s}$. Define $Q_{ij}=K_{ij}h_j/(\lambda h_i)$. Its row sums equal one by $Kh=\lambda h$, and its path products telescope to exactly that limit. Thus all fixed-horizon conditional laws converge to this Markov chain.
3. The vector $\pi_i=\nu_i h_i$ is a probability vector by normalisation. Directly $\sum_i\pi_iQ_{ij}=h_j\sum_i\nu_iK_{ij}/\lambda=h_j\nu_j=\pi_j$, proving invariance. Irreducibility gives uniqueness of the invariant probability.
4. Under detailed balance, the row vector with entries $\mu_i h_i$ is a left eigenvector: $\sum_i\mu_i h_iK_{ij}=\mu_j\sum_iK_{ji}h_i=\lambda\mu_jh_j$. Therefore $\nu_i$ is proportional to $\mu_i h_i$, and $\pi_i=\mu_i h_i^2/\sum_j\mu_jh_j^2$. The transformed chain is reversible with this law, as substitution into $\pi_iQ_{ij}$ also verifies.

**Self-assessment rubric**

- Write and asymptotically evaluate the exact conditional path probability.
- Prove the proposed transition matrix is stochastic and has the limiting path products.
- Normalise and verify the invariant probability.
- Derive the squared eigenfunction weighting under detailed balance.

</details>
