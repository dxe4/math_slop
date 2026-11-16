# Stationary AR(1) moments and forecast uncertainty

*Difficulty 4 of 5 · [Advanced statistics design and dependence studio](index.md) · exercise 5 of 12*

Let $X_t=1+0.75X_{t-1}+\varepsilon_t$, where the innovations are iid with mean 0 and variance 2. Assuming the causal stationary regime and known parameters, find the stationary mean and variance, lag-three autocorrelation, two-step conditional forecast from $X_t=8$, and two-step forecast-error variance. State the root hypothesis supporting the calculation.

<details>
<summary>Hint 1</summary>

The stationary mean is $c/(1-\phi)$

</details>

<details>
<summary>Hint 2</summary>

Variance is $\sigma^2/(1-\phi^2)$ and autocorrelation is $\phi^h$

</details>

<details>
<summary>Hint 3</summary>

The two-step error is $\varepsilon_{t+2}+\phi\varepsilon_{t+1}$

</details>

<details>
<summary>Worked solution</summary>

Here $\phi=0.75$ has absolute value below one, so the causal stationary representation exists. Its mean is $1/(1-0.75)=4$. Variance is $2/(1-0.75^2)=2/(7/16)=32/7\approx4.5714$. Lag-three autocorrelation is $0.75^3=27/64\approx0.421875$. The $h$-step forecast is $\mu+\phi^h(X_t-\mu)$, so at $h=2$ it is $4+0.75^2(8-4)=6.25$. The error is $\varepsilon_{t+2}+0.75\varepsilon_{t+1}$, with variance $2(1+0.75^2)=25/8=3.125$. Parameter estimation and future regime change are not included in that variance.

**Answer.** Mean 4, variance 32/7, lag-three correlation 27/64, two-step forecast 6.25, and error variance 25/8, using |0.75|<1.

</details>

*Tags: time series analysis, AR(1), stationarity, forecast variance*
