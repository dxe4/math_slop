# Derive a Brownian drift change from conditional characteristic functions

*Medium · [Probability problems](index.md)*

Let $B$ be standard Brownian motion relative to a usual filtration $(\mathcal F_t)$ on $[0,T]$, with $T<\infty$ and $\theta\in\mathbb R$. Set $Z_t=\exp(\theta B_t-\theta^2t/2)$ and define $Q$ on $\mathcal F_T$ by $dQ=Z_T\,dP$. Prove that $W_t=B_t-\theta t$ is standard Brownian motion relative to the same filtration under $Q$. Use conditional characteristic functions and Gaussian integration, rather than quoting Girsanov's theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First show that the exponential factor over a new Brownian increment has conditional mean one. This identifies the density on every earlier sigma-field.

</details>

<details>
<summary>Hint 2</summary>

For one increment of the proposed process, apply conditional change of measure and complete the square in a Gaussian exponential integral. A deterministic conditional characteristic function must still be translated into independence from the earlier sigma-field.

</details>

<details>
<summary>Model proof</summary>

On a finite horizon the exponential density shifts Gaussian increment means while preserving their conditional independence.

1. Gaussian integration gives $E[\exp(\theta(B_t-B_s)-\theta^2(t-s)/2)\mid\mathcal F_s]=1$. Hence $Z$ is a positive mean-one martingale and $E_P[Z_T\mid\mathcal F_t]=Z_t$. Thus $Q$ is a probability equivalent to $P$ on $\mathcal F_T$, and its restricted density at time $t$ is $Z_t$.
2. Fix $s<t$, put $h=t-s$, and let $u\in\mathbb R$. Conditional change of measure and the tower property give $E_Q[e^{iu(W_t-W_s)}\mid\mathcal F_s]=Z_s^{-1}E_P[Z_t e^{iu(B_t-B_s-\theta h)}\mid\mathcal F_s]$. The new increment is $N(0,h)$ and independent of $\mathcal F_s$. Completing the square in its Gaussian density evaluates the last expression as $\exp(-u^2h/2)$: the $\theta^2h/2$ normalization and the $iu\theta h$ shift cancel exactly.
3. For $A\in\mathcal F_s$ of positive $Q$-probability, multiplying that identity by $1_A$ shows that the conditional-on-$A$ characteristic function is the same $N(0,h)$ characteristic function. Uniqueness of characteristic functions yields independence of $W_t-W_s$ from $\mathcal F_s$ and the stated normal law. Induction gives independent normal increments. Finally $W_0=0$, $W$ is adapted, and its paths are continuous under $Q$ because $Q$ and $P$ are equivalent on the finite horizon. These are the Brownian properties.

**Self-assessment rubric**

- Verify the likelihood martingale and its restricted densities using independent Gaussian increments.
- Calculate the increment characteristic function under $Q$, keeping the drift sign and normalization correct.
- Deduce independence from the full earlier sigma-field and retain adaptedness, start value and continuous paths under the new law.

</details>
