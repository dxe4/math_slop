# Simple kriging with a covariance and uncertainty audit

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 12 of 12*

A known-zero-mean random field has variance 1. Two observed sites have covariance 0.5, so $K=\begin{bmatrix}1&0.5\\0.5&1\end{bmatrix}$. Covariances between target and the two sites are $k=(0.5,0.25)$. Compute simple-kriging weights, the prediction for observations $z=(4,2)$, and model-based prediction-error variance. Name what this variance omits.

<details>
<summary>Hint 1</summary>

K inverse is (1/0.75)[[1,-0.5],[-0.5,1]]

</details>

<details>
<summary>Hint 2</summary>

Weights are $K^{-1}k$

</details>

<details>
<summary>Hint 3</summary>

Error variance is $1-k^TK^{-1}k$

</details>

<details>
<summary>Worked solution</summary>

Multiplication gives $K^{-1}k=(1/0.75)(0.5-0.125,-0.25+0.25)=(0.5,0)$. Thus the simple-kriging prediction is $0.5\cdot 4+0\cdot 2=2$. The error variance is $1-k^Tw=1-(0.5\cdot 0.5+0.25\cdot 0)=0.75$. A zero second weight is possible because its target information is redundant after accounting for correlation with the first site. The calculation assumes the zero mean and covariance are known, valid, and appropriate for the target support. Plug-in use after covariance estimation omits parameter and model-selection uncertainty; preferential site selection, measurement error, nonstationarity, and spatial extrapolation can add further error.

**Answer.** Weights (0.5,0), prediction 2, and conditional model-based error variance 0.75.

</details>

*Tags: spatial statistics, kriging, covariance, prediction variance*
