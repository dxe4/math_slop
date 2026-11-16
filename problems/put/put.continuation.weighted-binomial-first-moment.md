# Weighted binomial first moment

*Medium · [Original Putnam-style training](index.md)*

Compute $\sum_{k=0}^{6}k\binom6k$ without listing the terms.

```answer
{"answer":{"kind":"integer","expected":"192","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the binomial identity $(1+x)^6$.

</details>

<details>
<summary>Hint 2</summary>

Choose $x=1$ only after differentiating.

</details>

<details>
<summary>Worked solution</summary>

The left side is $6\cdot2^5=192$.

1. Differentiating $(1+x)^6=\sum_{k=0}^6\binom6k x^k$ gives $6(1+x)^5=\sum_{k=1}^6k\binom6k x^{k-1}$.
2. At $x=1$, the right side is the requested sum.
3. The left side is $6\cdot2^5=192$.

</details>
