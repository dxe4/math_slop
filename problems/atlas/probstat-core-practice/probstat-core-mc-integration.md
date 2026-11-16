# Monte Carlo integration and standard error

*Difficulty 4 of 5 · [Probability and statistics core practice](index.md) · exercise 10 of 12*

To estimate $\theta=\int_0^1 e^x\,dx$, we generate $U_1,\dots,U_n$ i.i.d. uniform on $(0,1)$ and use $\hat\theta_n=(1/n)\sum_{i=1}^n e^{U_i}$. For $n=100$, approximate the standard error of $\hat\theta_n$. You may use $\mathrm{Var}(e^U)=(e^2-1)/2-(e-1)^2$.

<details>
<summary>Hint 1</summary>

The variance of the average is the variance of one term divided by $n$

</details>

<details>
<summary>Hint 2</summary>

Compute the numerical value of the given variance formula

</details>

<details>
<summary>Worked solution</summary>

First, $\mathrm{Var}(e^U)=(e^2-1)/2-(e-1)^2$. Numerically, $(e^2-1)/2\approx 3.1945$ and $(e-1)^2\approx 2.9525$, so the variance is approximately $0.2420$. The variance of $\hat\theta_n$ is this divided by $n=100$, giving $0.002420$. The standard error is $\sqrt{0.002420}\approx 0.0492$. The exact integral is $e-1\approx 1.7183$, so a $95\%$ approximate confidence interval from one run would be $\hat\theta_{100}\pm 0.096$. This illustrates how Monte Carlo error declines at rate $1/\sqrt{n}$.

**Answer.** Standard error approximately $0.0492$.

</details>

*Tags: monte-carlo-methods, integration, standard error*
