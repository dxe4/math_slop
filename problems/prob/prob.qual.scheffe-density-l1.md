# Use a common dominated minimum to obtain total mass convergence

*Medium · [Probability problems](index.md)*

Let $f_n,f$ be nonnegative densities of probability measures with respect to one common measure $\mu$, and assume $f_n\to f$ $\mu$-almost everywhere. Prove $\int|f_n-f|\,d\mu\to0$. No integrable common upper bound for the $f_n$ is assumed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The minimum of each $f_n$ with $f$ has a fixed integrable upper bound.

</details>

<details>
<summary>Hint 2</summary>

Express the absolute difference using the two masses and their minimum.

</details>

<details>
<summary>Model proof</summary>

The limiting density itself dominates the common part of both densities.

1. The functions $\min(f_n,f)$ converge almost everywhere to $f$ and satisfy $0\le\min(f_n,f)\le f$. Dominated convergence gives $\int\min(f_n,f)\,d\mu\to\int f\,d\mu=1$.
2. Pointwise, $|f_n-f|=f_n+f-2\min(f_n,f)$. Both densities have integral one.
3. Therefore $\int|f_n-f|\,d\mu=2-2\int\min(f_n,f)\,d\mu\to0$. The argument dominates only the minima, so no common envelope for the original sequence is needed.

**Self-assessment rubric**

- Choose the common minimum and justify its dominated convergence.
- Use the exact absolute-difference identity and both unit masses.
- Conclude the norm convergence without imposing an unsupported bound on the densities.

</details>
