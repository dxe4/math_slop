# Principal directions and a low-variance anomaly

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 7 of 12*

A centered bivariate population has covariance $\Sigma=\begin{bmatrix}3&2\\2&3\end{bmatrix}$. Find eigenvalues, unit principal directions, and the first-component explained-variance proportion. Compute the squared Mahalanobis distance of $x=(1,-1)$ and explain why it is larger than its ordinary squared Euclidean distance scaled by total variance might suggest.

<details>
<summary>Hint 1</summary>

Try directions (1,1) and (1,-1)

</details>

<details>
<summary>Hint 2</summary>

Total variance is the trace

</details>

<details>
<summary>Hint 3</summary>

Express x in the eigenbasis

</details>

<details>
<summary>Worked solution</summary>

The unit directions $q_1=(1,1)/\sqrt{2}$ and $q_2=(1,-1)/\sqrt{2}$ have eigenvalues 5 and 1. The first component explains $5/(5+1)=5/6$ of total variance. The point $x=(1,-1)=\sqrt{2}q_2$ lies entirely along the low-variance direction. Thus $x^T\Sigma^{-1}x=(\sqrt{2})^2/1=2$. Its Euclidean squared norm is also 2, but dividing informally by total variance 6 would give 1/3 and hide the anomalous contrast. Mahalanobis scaling uses directional eigenvalues, not trace. These calculations require a positive-definite covariance; estimated near-zero eigenvalues can make distances unstable, and PCA importance depends on variable units.

**Answer.** Eigenpairs are 5 with $(1,1)/\sqrt{2}$ and 1 with $(1,-1)/\sqrt{2}$; explained proportion 5/6 and Mahalanobis squared distance 2.

</details>

*Tags: multivariate statistics, PCA, covariance, Mahalanobis distance*
