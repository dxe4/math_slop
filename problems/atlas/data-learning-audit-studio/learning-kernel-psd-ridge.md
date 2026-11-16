# Check a kernel and solve its ridge system

*Difficulty 3 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 4 of 9*

For inputs $x_1=0$ and $x_2=1$, use $k(x,z)=1+xz$. Form the $2\times2$ Gram matrix $K$, prove it is positive semidefinite directly, then solve $(K+I)\alpha=(1,0)^{\mathsf T}$. Find the prediction at $x=2$.

<details>
<summary>Hint 1</summary>

$K_{ij}=1+x_i x_j$

</details>

<details>
<summary>Hint 2</summary>

For the vector $(u,v)$, expand $(u,v)K(u,v)^{\mathsf T}$

</details>

<details>
<summary>Hint 3</summary>

The kernel vector at $x=2$ is $(1,3)$

</details>

<details>
<summary>Worked solution</summary>

The Gram matrix is $K=\begin{bmatrix}1&1\\1&2\end{bmatrix}$. For any $(u,v)$, the quadratic form is $u^2+2uv+2v^2=(u+v)^2+v^2\ge 0$, proving positive semidefiniteness. Now $K+I=\begin{bmatrix}2&1\\1&3\end{bmatrix}$, whose determinant is $5$. Solving $2\alpha_1+\alpha_2=1$ and $\alpha_1+3\alpha_2=0$ gives $\alpha=(3/5,-1/5)$. At $x=2$ the kernel values against the centers are $[k(2,0),k(2,1)]=[1,3]$, so $f(2)=3/5+3(-1/5)=0$. Positive semidefiniteness is a property of every finite Gram matrix for the kernel, not merely this example; this calculation verifies only the displayed two-point case.

**Answer.** $K=\begin{bmatrix}1&1\\1&2\end{bmatrix}$ with quadratic form $(u+v)^2+v^2$; $\alpha=(3/5,-1/5)$ and $f(2)=0$.

</details>

*Tags: kernel, positive semidefinite, kernel ridge*
