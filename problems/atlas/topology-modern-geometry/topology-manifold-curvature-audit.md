# Local manifold, global curvature

*Difficulty 4 of 5 · [Topology and modern geometry](index.md) · exercise 5 of 8*

A closed connected oriented surface $M$ carries a Riemannian metric of constant Gaussian curvature $K=1$ and total area $4\pi$. Use Gauss–Bonnet to determine $\chi(M)$ and its genus. Then explain why the same calculation cannot be applied unchanged to a compact surface with boundary.

<details>
<summary>Hint 1</summary>

For a closed oriented surface, $\int_M K\,dA=2\pi\chi(M)$

</details>

<details>
<summary>Hint 2</summary>

An oriented closed genus-$g$ surface has $\chi=2-2g$

</details>

<details>
<summary>Hint 3</summary>

The boundary theorem includes geodesic curvature

</details>

<details>
<summary>Worked solution</summary>

Constant curvature one and area $4\pi$ give $\int_M K\,dA=4\pi$. Gauss–Bonnet for a closed oriented surface yields $4\pi=2\pi\chi(M)$, so $\chi(M)=2$. Since $\chi=2-2g$ for a closed connected oriented surface of genus $g$, we get $g=0$. A surface with boundary satisfies a boundary version containing the integral of geodesic curvature along the boundary (and corner terms for piecewise smooth boundary). Omitting that term can change the answer, so the closed-surface formula is not applicable unchanged.

**Answer.** $\chi=2$ and genus $g=0$; a boundary requires geodesic-curvature and possible corner terms.

</details>

*Tags: manifold, Gaussian curvature, Gauss-Bonnet*
