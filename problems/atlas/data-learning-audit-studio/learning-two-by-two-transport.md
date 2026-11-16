# Solve a transport coupling with exact marginals

*Difficulty 4 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 9 of 9*

A source distribution has masses $\mu=(3/4,1/4)$, a target has $\nu=(1/2,1/2)$, and the transport cost matrix is $C=\begin{bmatrix}1&3\\1&1\end{bmatrix}$. Parameterize every feasible $2\times2$ coupling $\pi$, find the feasible interval, minimize $\sum_{i,j} C_{ij}\pi_{ij}$, and verify both marginals of the optimizer.

<details>
<summary>Hint 1</summary>

Set $\pi_1_1=t$ and use the first row and first column sums

</details>

<details>
<summary>Hint 2</summary>

Nonnegativity determines the interval

</details>

<details>
<summary>Hint 3</summary>

Substitute the parameterization into the cost

</details>

<details>
<summary>Worked solution</summary>

Let $\pi_1_1=t$. The first row sum gives $\pi_1_2=3/4-t$, the first column sum gives $\pi_2_1=1/2-t$, and the remaining entry is $\pi_2_2=t-1/4$. Nonnegativity requires $1/4\le t\le 1/2$. The cost is $t+3(3/4-t)+(1/2-t)+(t-1/4)=5/2-2t$, so it is minimized at $t=1/2$. The optimizer is $\pi=\begin{bmatrix}1/2&1/4\\0&1/4\end{bmatrix}$ with cost 3/2. Its row sums are 3/4 and 1/4, and its column sums are 1/2 and 1/2, exactly the prescribed marginals. A lower-cost nonnegative matrix with different marginals would not be a feasible coupling.

**Answer.** $\pi(t)=\begin{bmatrix}t&3/4-t\\1/2-t&t-1/4\end{bmatrix}$, $1/4\le t\le 1/2$; the optimum is $t=1/2$ with $\pi=\begin{bmatrix}1/2&1/4\\0&1/4\end{bmatrix}$ and cost 3/2.

</details>

*Tags: optimal transport, coupling, marginals, linear programming*
