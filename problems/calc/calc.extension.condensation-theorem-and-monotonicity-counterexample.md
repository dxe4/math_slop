# Prove condensation and show why monotonicity matters

*Hard · [Calculus](index.md)*

For nonnegative nonincreasing a\_n prove $\sum_{n=1}^\infty a_n$ converges exactly when Σₖ₌₀∞2ᵏa\_(2ᵏ) converges. Then construct a nonnegative nonmonotone sequence whose ordinary series converges but whose condensed series diverges. Do not use a logarithmic-threshold application.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Bound the sum on the block from 2ᵏ through 2^{k+1}−1 by its endpoint term values times the number of terms.

</details>

<details>
<summary>Hint 2</summary>

For the counterexample put small spikes only at powers of two.

</details>

<details>
<summary>Model proof</summary>

Dyadic blocks provide two-sided comparisons only when their endpoint values bound every term.

1. There are 2ᵏ terms in the kth block. Monotonicity gives 2ᵏa\_{2^{k+1}}≤Σ\_{n=2ᵏ}^{2^{k+1}−1}a\_n≤2ᵏa\_{2ᵏ}.
2. Writing b\_k=2ᵏa\_{2ᵏ}, the lower bound is b\_{k+1}/2 and the upper bound b\_k. Summing finite blocks and using nonnegativity proves convergence of either full series exactly when the other converges; omitted finite initial terms do not matter.
3. Define a\_{2ᵏ}=2^{−k} for k≥0 and a\_n=0 at all other positive integers. Its ordinary sum is Σₖ₌₀∞2^{−k}=2.
4. Its condensed terms are 2ᵏa\_{2ᵏ}=1, so the condensed series diverges. The spikes violate monotonicity, showing that the hypothesis cannot simply be dropped.

**Self-assessment rubric**

- Derives both block inequalities with correct block lengths and endpoint values.
- Uses nonnegative block sums and the half-shifted condensed lower bound to prove both directions.
- Constructs the sparse sequence and proves the ordinary and condensed series have different convergence behavior.

</details>
