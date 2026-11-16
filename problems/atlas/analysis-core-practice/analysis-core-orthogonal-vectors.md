# Detecting orthogonality

*Difficulty 1 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 2 of 12*

Let $u = (1, 2, 2)$ and $v = (2, 0, -1)$ in $\mathbb{R}^3$. Decide whether $u$ and $v$ are orthogonal, and compute the angle between them if they are not.

<details>
<summary>Hint 1</summary>

Orthogonality is decided by a single computation: the dot product.

</details>

<details>
<summary>Hint 2</summary>

$u \cdot v = 1 \cdot 2 + 2 \cdot 0 + 2 \cdot (-1)$.

</details>

<details>
<summary>Worked solution</summary>

Compute $u \cdot v = 1 \cdot 2 + 2 \cdot 0 + 2 \cdot (-1) = 2 + 0 - 2 = 0$. Since the dot product vanishes, the vectors are orthogonal; the angle between them is $\pi/2$, and no further angle computation is needed. Note that neither vector is zero, so this is genuine orthogonality rather than the degenerate convention that the zero vector is orthogonal to everything.

**Answer.** Yes, they are orthogonal: $u \cdot v = 0$.

</details>

*Tags: vectors, dot-product, computation*
