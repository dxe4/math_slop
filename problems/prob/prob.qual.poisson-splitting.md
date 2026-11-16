# Factor the marked Poisson count law at a fixed time

*Medium · [Probability problems](index.md)*

A Poisson process has rate $\lambda\ge0$. Each arrival is independently marked red with probability $p\in[0,1]$ and blue otherwise, independently of the process. For fixed $t\ge0$, prove that the red and blue counts $R_t,B_t$ are independent Poisson variables with means $\lambda pt,\lambda(1-p)t$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Condition on the total count to obtain a binomial marking law.

</details>

<details>
<summary>Hint 2</summary>

Sum the joint probability of a red count and a blue count, rather than merely computing their covariance.

</details>

<details>
<summary>Model proof</summary>

The joint count mass factors into two complete Poisson masses.

1. For nonnegative integers $r,b$, the total count must be $r+b$. Conditional on that count, $P(R_t=r,B_t=b\mid N_t=r+b)=\binom{r+b}{r}p^r(1-p)^b$.
2. Multiplying by the Poisson total mass yields $e^{-\lambda t}(\lambda t)^{r+b}p^r(1-p)^b/(r!\,b!)$. This equals $[e^{-\lambda pt}(\lambda pt)^r/r!][e^{-\lambda(1-p)t}(\lambda(1-p)t)^b/b!]$.
3. These factors are the two Poisson masses for every pair, proving independence as well as the marginal laws. At zero rates the corresponding count is deterministically zero; the same conclusion follows directly, including the boundary marking probabilities.

**Self-assessment rubric**

- Identify the joint conditional count mass given the total.
- Factor the full joint mass into normalized Poisson laws.
- Preserve the zero-rate and deterministic-mark boundary cases.

</details>
