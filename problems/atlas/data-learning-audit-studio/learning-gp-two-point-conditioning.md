# Condition a two-point Gaussian process

*Difficulty 4 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 5 of 9*

Let $(f_0,f_1)$ be centered Gaussian with covariance $\begin{bmatrix}1&\rho\\\rho&1\end{bmatrix}$. Observe $y=f_0+\varepsilon$ with independent $\varepsilon\sim\mathcal{N}(0,\sigma^2)$. Derive the conditional mean and variance of $f_1$ given $y$. Evaluate them for $\rho=1/2$, $\sigma^2=1/4$, and $y=1$, and distinguish observation noise from numerical jitter.

<details>
<summary>Hint 1</summary>

$Cov(f_1,y)=\rho$

</details>

<details>
<summary>Hint 2</summary>

$Var(y)=1+\sigma^2$

</details>

<details>
<summary>Hint 3</summary>

Use the scalar Gaussian conditioning formula

</details>

<details>
<summary>Worked solution</summary>

The pair $(f_1,y)$ is jointly Gaussian, with $\operatorname{Cov}(f_1,y)=\operatorname{Cov}(f_1,f_0)=\rho$ and $\operatorname{Var}(y)=\operatorname{Var}(f_0)+\operatorname{Var}(\varepsilon)=1+\sigma^2$. Therefore $\mathbb{E}[f_1\mid y]=\rho y/(1+\sigma^2)$ and $\operatorname{Var}(f_1\mid y)=1-\rho^2/(1+\sigma^2)$. Substitution gives mean $(1/2)/(5/4)=2/5$ and variance $1-(1/4)/(5/4)=4/5$. The $\sigma^2$ term belongs to the stated probability model for measurement noise. Adding a tiny diagonal jitter only to stabilize floating-point factorization changes the computed matrix but is not automatically a scientific claim about observation noise; the two roles must be reported separately.

**Answer.** The posterior is $\mathcal{N}\!\left(\rho y/(1+\sigma^2),\,1-\rho^2/(1+\sigma^2)\right)$; here the mean is $2/5$ and the variance is $4/5$.

</details>

*Tags: Gaussian process, conditioning, noise, jitter*
