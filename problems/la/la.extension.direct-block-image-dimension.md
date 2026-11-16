# Add independent block image dimensions

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $T=\operatorname{diag}(A,B)$ act on $\mathbb R^3\oplus\mathbb R^2$, where $\operatorname{rank}A=1$ and $B$ is invertible. Find $\operatorname{rank}T$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The two output blocks occupy independent coordinate summands.

</details>

<details>
<summary>Hint 2</summary>

The image is the direct sum of the two block images.

</details>

<details>
<summary>Worked solution</summary>

Use directness rather than treating overlapping images as if they were separate.

1. The image from the first input block has dimension one in the first output summand.
2. The invertible second block fills its two-dimensional output summand.
3. The summands intersect only in zero, so the total image dimension is $1+2=3$.

</details>
