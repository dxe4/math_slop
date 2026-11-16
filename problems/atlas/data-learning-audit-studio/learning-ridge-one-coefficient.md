# Solve a ridge estimator exactly

*Difficulty 3 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 2 of 9*

For training pairs $(1,2)$ and $(2,4)$, fit the no-intercept rule $f_w(x)=wx$ by minimizing $J_\lambda(w)=\sum_i(y_i-wx_i)^2+\lambda w^2$. Derive $w_\lambda$, evaluate it at $\lambda=0$ and $\lambda=5$, and state why the smaller training RSS alone cannot choose $\lambda$ for population prediction.

<details>
<summary>Hint 1</summary>

Differentiate the scalar quadratic

</details>

<details>
<summary>Hint 2</summary>

$\sum x_i^2=5$ and $\sum x_iy_i=10$

</details>

<details>
<summary>Hint 3</summary>

Regularization changes the estimator; generalization needs an evaluation design

</details>

<details>
<summary>Worked solution</summary>

Differentiation gives $J'_\lambda(w)=-2\sum x_i(y_i-wx_i)+2\lambda w=-20+2(5+\lambda)w$. Hence $w_\lambda=10/(5+\lambda)$. At $\lambda=0$, $w=2$ and both residuals vanish. At $\lambda=5$, $w=1$, so the residuals are 1 and 2 and $RSS=5$; the penalty is 5, making $J_5=10$. The unregularized fit necessarily has smaller training RSS here, because it interpolates. That fact estimates neither its sensitivity to new noise nor its population risk. Choosing λ needs a declared validation procedure or a justified prior/decision criterion, followed by honest held-out evaluation.

**Answer.** $w_\lambda=10/(5+\lambda)$, so $w_0=2$ and $w_5=1$; training RSS favors interpolation but does not determine population risk.

</details>

*Tags: empirical risk, ridge, regularization, model selection*
