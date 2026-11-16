# Classify the maximal-modulus roots of a positive recurrence polynomial

*Hard · [Original olympiad-style problems](index.md)*

Let $P(x)=x^n-a_1x^{n-1}-\cdots-a_n$ with real $a_i\ge0$ and $a_n>0$. Prove it has a unique positive root r, all complex roots have modulus at most r, and roots of modulus r are exactly $r\zeta$ where $\zeta^d=1$ and $d=\gcd\{i:a_i>0\}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For positive input, divide by its nth power; the sum of inverse powers strictly decreases from infinity to zero.

</details>

<details>
<summary>Hint 2</summary>

At a boundary root, triangle inequality becomes equality in a convex combination of unit complex numbers.

</details>

<details>
<summary>Model proof</summary>

Combine monotone positive comparison with the exact complex equality case.

1. The equation on positive inputs is $\sum_i a_i/x^i=1$. The left side is continuous and strictly decreasing, tends to infinity at zero and zero at infinity, so it has exactly one solution r.
2. For a complex root z, the nonzero constant term excludes zero. Triangle inequality gives $1\le\sum_i a_i/|z|^i$, forcing $|z|\le r$ by the positive comparison.
3. If $z=r\zeta$ with unit modulus, its equation is $1=\sum_i(a_i/r^i)\zeta^{-i}$. The positive weights sum to one. A convex combination of unit complex numbers equals one only when every term with positive weight is one, as follows by taking real parts.
4. Thus $\zeta^i=1$ for every active index i, equivalent by integer Bezout combinations to $\zeta^d=1$. Conversely those power conditions make the polynomial equation hold.
5. This proves the full peripheral-root list. In particular the positive root is the only root of maximal modulus exactly when the active-index gcd is one.

**Self-assessment rubric**

- Prove existence and uniqueness by a strict scalar comparison.
- Bound every nonzero complex root through triangle inequality.
- Analyze equality to force every active phase one.
- Translate phase conditions into the exact gcd criterion and verify all listed roots.

</details>
