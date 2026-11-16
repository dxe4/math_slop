# Derive a diffusion time scale

*Difficulty 3 of 5 · [Applied modeling and decisions](index.md) · exercise 1 of 4*

Assume a characteristic diffusion time T depends only on a length L and diffusivity D, whose units are $length^2/time$. Use dimensional analysis to determine the form of T up to a dimensionless constant.

<details>
<summary>Hint 1</summary>

Write $T=CL^aD^b$

</details>

<details>
<summary>Hint 2</summary>

Match the exponents of length and time

</details>

<details>
<summary>Worked solution</summary>

Let $T=CL^aD^b$. The dimensions of the right side are $\mathsf{L}^{a+2b}\mathsf{T}^{-b}$. Matching $\mathsf{T}^1$ gives $-b=1$, so $b=-1$. Matching $\mathsf{L}^0$ then gives $a+2b=0$, hence $a=2$. Therefore $T=CL^2/D$. In particular, doubling the length multiplies the diffusion time by four if $D$ is unchanged. Dimensional analysis does not determine $C$ or account for geometry and boundary conditions.

**Answer.** $T=CL^2/D$ for a dimensionless constant $C$.

</details>

*Tags: dimensional analysis, diffusion, scaling*
