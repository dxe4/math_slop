# Use image-kernel decomposition for an idempotent

*Hard · [Original Putnam-style training](index.md)*

A real $3\times3$ matrix A satisfies $A^2=A$ and has rank two. Find $\det(I+2A)$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

An idempotent acts as identity on its image and zero on its kernel.

</details>

<details>
<summary>Hint 2</summary>

Those two subspaces form a direct sum, even if A is not symmetric.

</details>

<details>
<summary>Worked solution</summary>

Idempotence supplies a basis adapted to image and kernel.

1. Every vector decomposes as Av+(v-Av), with the first part in the image and the second in the kernel. The intersection of image and kernel is zero.
2. The image has dimension two and kernel dimension one. I+2A therefore acts by three on the image and one on the kernel.
3. The determinant is $3^2\cdot1=9$.

</details>
