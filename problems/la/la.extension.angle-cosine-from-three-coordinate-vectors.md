# Compute an exact angle cosine

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $u=(1,1,0)$ and $v=(1,0,1)$, return the exact value of $\cos\theta$ for their Euclidean angle $0\le\theta\le\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The numerator is the dot product, while the denominator is the product of lengths.

</details>

<details>
<summary>Hint 2</summary>

Both vectors have squared length two.

</details>

<details>
<summary>Worked solution</summary>

Normalize a dot product without introducing a numerical angle.

1. The dot product is one.
2. The two lengths are both $\sqrt2$, so their product is two.
3. The cosine is therefore one half, within the required interval for an angle cosine.

</details>
