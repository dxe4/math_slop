# Find the missing compactness hypothesis for random functions

*Hard · [Probability problems](index.md)*

Let $F_n$ be random continuous functions on $[0,1]$, with finite random Lipschitz constants $L_n$. Suppose $F_n(x)\to0$ in probability for each fixed $x$, and $(L_n)$ is tight: for every $\eta>0$ some finite $M$ has $\sup_nP(L_n>M)<\eta$. Prove $\sup_x|F_n(x)|\to0$ in probability. Then give explicit deterministic Lipschitz functions that converge pointwise to zero but have supremum one for every $n$, showing that almost-sure finiteness of each $L_n$ alone is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose the Lipschitz bound before choosing a finite grid. Only finitely many pointwise probability limits are then needed.

</details>

<details>
<summary>Hint 2</summary>

A narrow triangular spike can move towards a boundary while remaining zero at that boundary.

</details>

<details>
<summary>Model proof</summary>

A tight modulus permits finite-grid control; finite but exploding moduli do not.

1. Fix $\epsilon,\eta>0$. Choose $M$ with $\sup_nP(L_n>M)<\eta$ and a finite grid in $[0,1]$ whose every point is within $\delta$ of a grid point, with $M\delta<\epsilon/2$ (choose any grid if $M=0$).
2. On $\{L_n\le M\}$, the Lipschitz bound gives $\sup_x|F_n(x)|\le\max_{x\text{ in grid}}|F_n(x)|+\epsilon/2$. Therefore the probability of a supremum exceeding $\epsilon$ is at most $\eta$ plus a finite sum of probabilities $P(|F_n(x)|>\epsilon/2)$, which tends to zero.
3. Taking the limit superior and then $\eta\downarrow0$ proves uniform convergence in probability. Continuity ensures the supremum is measurable, for example by taking it over rational points.
4. For the counterexample define $f_n(x)=\max(0,1-4n^2|x-1/n|)$, $n\ge2$. Its Lipschitz constant is $4n^2$ and its maximum is one at $1/n$. Its support lies in a positive interval tending to zero; every fixed $x>0$ is eventually outside it and $f_n(0)=0$. Thus pointwise convergence holds everywhere, but no uniform convergence occurs.

**Self-assessment rubric**

- Choose a deterministic modulus bound and grid in the correct order.
- Reduce the supremum event to finitely many pointwise events and a modulus exception.
- Verify continuity, finite Lipschitz constants, pointwise convergence and failure of uniform convergence.

</details>
