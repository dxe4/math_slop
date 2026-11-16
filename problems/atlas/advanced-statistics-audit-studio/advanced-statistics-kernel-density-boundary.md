# A kernel estimate integrates correctly yet leaks across a boundary

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 9 of 12*

For observations 0,1,2, use bandwidth $h=1$ and uniform kernel $K(u)=1/2$ for $|u|\le 1$ and 0 otherwise. Compute the kernel density estimate at $x=1$. Show that the estimate integrates to one over the real line, then explain the boundary problem if the true variable is known to be nonnegative.

<details>
<summary>Hint 1</summary>

Every observation is within one bandwidth of $x=1$

</details>

<details>
<summary>Hint 2</summary>

Each shifted scaled kernel has integral one

</details>

<details>
<summary>Hint 3</summary>

The kernel centered at zero places half its mass below zero

</details>

<details>
<summary>Worked solution</summary>

The estimate is $\widehat f(1)=\frac{1}{3\cdot1}[K(1)+K(0)+K(-1)]=\frac13(\frac12+\frac12+\frac12)=\frac12$, using the inclusive endpoint convention. More generally, each term $h^{-1}K((x-X_i)/h)$ integrates to $\int K(u)\,du=1$ after substitution, so their average integrates to one on the real line. If support is $[0,\infty)$, the kernel centered at $X=0$ places half its mass on negative values, where the true density is zero. The estimator can therefore have boundary bias despite normalization. Reflection, boundary kernels, transformations, or local methods can address this under additional smoothness choices; bandwidth sensitivity remains necessary.

**Answer.** $\widehat f(1)=1/2$ and the mixture integrates to one, but the kernel at zero assigns impossible negative-support mass and creates boundary bias.

</details>

*Tags: nonparametric statistics, kernel density, bandwidth, boundary bias*
