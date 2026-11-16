# Change a Poisson process rate through a likelihood process

*Medium · [Probability problems](index.md)*

Let $(N_t)_{0\le t\le T}$ be a rate-$\lambda$ Poisson process with its usual natural filtration, where $T<\infty$ and $\lambda,\mu>0$. Define $Z_t=(\mu/\lambda)^{N_t}\exp((\lambda-\mu)t)$ and $dQ=Z_T\,dP$ on $\mathcal F_T$. Prove that $Q$ is a probability measure and that $N$ is a rate-$\mu$ Poisson process under $Q$, relative to the same filtration. Establish independence of increments from past information, not just the law of $N_T$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the Poisson generating function on one new increment to check the density-process martingale.

</details>

<details>
<summary>Hint 2</summary>

Compute the conditional generating function of a new count increment under $Q$ using its density ratio. Then use uniqueness of generating functions to obtain independence from every earlier event.

</details>

<details>
<summary>Model proof</summary>

Tilting by the count likelihood changes the rate in every conditional increment law, while the path structure survives equivalence.

1. For $h=t-s$, the increment $\Delta N=N_t-N_s$ is Poisson with mean $\lambda h$ and independent of $\mathcal F_s$. Thus $E_P[(\mu/\lambda)^{\Delta N}]=\exp((\mu-\lambda)h)$, which cancels the exponential time factor. Consequently $Z$ is a positive mean-one martingale, $E_P[Z_T\mid\mathcal F_t]=Z_t$, and $Q$ is a probability equivalent to $P$.
2. For $0<z\le1$, conditional change of measure yields $E_Q[z^{N_t-N_s}\mid\mathcal F_s]=E_P[(z\mu/\lambda)^{\Delta N}\exp((\lambda-\mu)h)\mid\mathcal F_s]=\exp(\mu h(z-1))$. This is the generating function of a Poisson variable of mean $\mu h$, and does not depend on past information.
3. Testing the conditional identity on any earlier event of positive $Q$-probability and invoking uniqueness of the generating function shows that each increment has that same Poisson law independently of $\mathcal F_s$. Iteration gives independent increments. The initial value, right-continuity, unit jumps and nonexplosion on this horizon hold under $Q$ by equivalence to $P$. Hence the entire process, not merely its terminal count, is a rate-$\mu$ Poisson process.

**Self-assessment rubric**

- Normalize the density and identify its earlier conditional densities by the increment generating function.
- Evaluate the conditional generating function under $Q$ with the correct likelihood/time factors.
- Use earlier-event tests and generating-function uniqueness to establish the Poisson process law, retaining its path properties.

</details>
