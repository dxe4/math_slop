# Prove the absolute Cauchy-product theorem with a triangular-tail bound

*Hard · [Calculus](index.md)*

Let Σₙ₌₀∞a\_n and Σₙ₌₀∞b\_n converge absolutely to A and B. Define $c_n=\sum_{j=0}^na_jb_{n-j}$. Prove Σc\_n converges absolutely and has sum AB, comparing triangular and rectangular finite sums before taking limits.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Bound each convolution by the convolution of absolute values.

</details>

<details>
<summary>Hint 2</summary>

If j+k&gt;N≥2K, then j&gt;K or k&gt;K, so the omitted corner is controlled by two absolute tails.

</details>

<details>
<summary>Model proof</summary>

Absolute tails make the finite triangular convolution approach the same limit as rectangular products.

1. Put P=Σ\|a\_n\| and Q=Σ\|b\_n\|. For every N, Σ\_{n=0}^N\|c\_n\|≤Σ\_{j+k≤N}\|a\_j\|\|b\_k\|≤PQ. Thus the nonnegative absolute partial sums are bounded and Σ\|c\_n\| converges.
2. Let T\_N=Σ\_{j+k≤N}a\_jb\_k and R\_N=(Σ\_{j=0}^Na\_j)(Σ\_{k=0}^Nb\_k). Their difference consists of pairs with j,k≤N but j+k&gt;N.
3. For N≥2K, every such pair has j&gt;K or k&gt;K. Hence \|R\_N−T\_N\|≤QΣ\_{j&gt;K}\|a\_j\|+PΣ\_{k&gt;K}\|b\_k\|. Given any tolerance, first choose K making this bound small, uniformly for all N≥2K.
4. The rectangular products tend to AB, and the triangular difference tends to zero by that estimate. Therefore T\_N→AB. These are exactly the partial sums of Σc\_n, proving the asserted value without rearranging a conditionally convergent double sum.

**Self-assessment rubric**

- Bounds the absolute convolution partial sums by PQ and proves absolute convergence.
- Defines the rectangular and triangular sums and identifies their difference.
- Uses j+k&gt;N to obtain the two-tail estimate with correct quantifier order.
- Combines the rectangular product limit and vanishing corner difference to obtain AB.

</details>
