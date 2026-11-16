# A roots-of-unity obstruction with a converse

*Hard · [Original olympiad-style problems](index.md)*

Let $a,b,k$ be positive integers with $k\ge2$. A rectangle of unit cells of size $a\times b$ is to be tiled by edge-aligned $1\times k$ bars, horizontal or vertical. Prove such a tiling exists if and only if $k$ divides $a$ or $k$ divides $b$. Complex roots of unity may be used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Choose a primitive $k$th root $\zeta$ and give cell $(i,j)$ weight $\zeta^{i+j}$.

</details>

<details>
<summary>Hint 2</summary>

Every bar has total weight zero. The full rectangle weight factors as the product of two geometric sums.

</details>

<details>
<summary>Model proof</summary>

A two-dimensional coloring factors into one-dimensional sums whose vanishing has an exact divisibility meaning.

1. Index cells by $0\le i<a$, $0\le j<b$. A horizontal or vertical bar covers $k$ consecutive exponents, so its weight is a unit multiple of $1+\zeta+\cdots+\zeta^{k-1}=0$. A tiled rectangle must have total weight zero.
2. The total weight is $(\sum_{i=0}^{a-1}\zeta^i)(\sum_{j=0}^{b-1}\zeta^j)$. Since complex numbers have no zero divisors, at least one factor is zero.
3. Because $\zeta\ne1$, the first factor equals $(1-\zeta^a)/(1-\zeta)$ and vanishes exactly when $\zeta^a=1$, equivalently $k\mid a$ by primitivity. The second vanishes exactly when $k\mid b$. This proves necessity, including composite $k$.
4. For sufficiency, if $k\mid a$, tile each length-$a$ row with parallel bars; if $k\mid b$, do the analogous tiling along columns. Both are explicit full coverings with no overlaps.

**Self-assessment rubric**

- Show both orientations have zero complex weight.
- Factor the total and use absence of zero divisors.
- Translate vanishing into divisibility for arbitrary k.
- Construct the parallel tiling whenever one side is divisible.

</details>
