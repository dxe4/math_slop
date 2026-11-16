# Characterise noise that cannot erase finite-group dependence

*Hard · [Probability problems](index.md)*

Let $G=\mathbb Z/m\mathbb Z$, $m\ge2$, and let $Z$ have law $\nu$, independent of a pair $(X,Y)$ with $X\in G$ and finite-valued $Y$. Write $W=X+Z$ in $G$ and $\widehat\nu(k)=\sum_{z\in G}\nu(z)e^{2\pi i kz/m}$. Prove that, for every such pair $(X,Y)$, independence of $W$ and $Y$ implies independence of $X$ and $Y$ if and only if every $\widehat\nu(k)$ is nonzero. You may use finite Fourier inversion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Condition on each positive-probability value of $Y$; adding noise applies the same cyclic convolution to each conditional law.

</details>

<details>
<summary>Hint 2</summary>

If a Fourier mode vanishes, perturb the uniform law in opposite real directions at that mode while keeping both conditional laws strictly positive.

</details>

<details>
<summary>Model proof</summary>

Invertible convolution recovers conditional laws; a killed Fourier mode supports an explicit hidden dependence.

1. If $\mu_y$ is the conditional law of $X$ given $Y=y$, independence of $W$ gives $\mu_y*\nu=\mu*\nu$, where $\mu$ is the marginal law of $X$. Fourier transformation yields $(\widehat\mu_y-\widehat\mu)\widehat\nu=0$ at every frequency.
2. When the noise transform is nowhere zero, divide frequency by frequency and use inversion to obtain $\mu_y=\mu$ for every feasible $y$, which is independence.
3. Conversely suppose $\widehat\nu(k)=0$. This cannot occur at $k=0$. Let $Y$ be a fair sign and, conditional on it, give $X=x$ probability $m^{-1}[1+Y\epsilon\cos(2\pi kx/m)]$, with $0<\epsilon<1$. These are positive probabilities because the cosine sums to zero.
4. The two conditional laws differ, so $X,Y$ are dependent. The real cosine mode is annihilated by convolution, since both frequency $k$ and its conjugate frequency are killed. Thus both conditional laws of $W$ are uniform, making $W$ independent of $Y$. This disproves the implication whenever a noise Fourier mode vanishes.

**Self-assessment rubric**

- Express the observation law on each feasible conditioning slice as convolution.
- Use all nonzero noise modes and Fourier inversion to recover independence.
- Construct distinct positive conditional laws in a killed real Fourier direction.
- Verify that the input remains dependent while both noisy conditional laws coincide.

</details>
