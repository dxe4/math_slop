# Power of a one-sample z-test

*Difficulty 3 of 5 · [Probability and statistics core practice](index.md) · exercise 8 of 12*

A test of $H_0:\mu=0$ versus $H_1:\mu>0$ uses a normal sample with known variance $\sigma^2=4$ and $n=16$. The rejection rule is $\bar X>1$ at level $\alpha$. If the true mean is $\mu=1.5$, what is the power of the test? Compute it exactly.

<details>
<summary>Hint 1</summary>

Under $H_0$, $\bar X\sim N(0,4/16)$; verify the critical value yields the stated level

</details>

<details>
<summary>Hint 2</summary>

Under the alternative, $\bar X\sim N(1.5,4/16)$; power is $P(\bar X>1)$ under this distribution

</details>

<details>
<summary>Worked solution</summary>

Under $H_0$, $\bar X\sim N(0,4/16)=N(0,0.25)$, so $\bar X$ has standard deviation $0.5$. The rejection threshold $1$ is $2$ standard deviations above the null mean, giving $\alpha=P(\bar X>1\mid\mu=0)\approx 0.0228$. Under the alternative $\mu=1.5$, $\bar X\sim N(1.5,0.25)$. Then $Z=(\bar X-1.5)/0.5$ is standard normal, and $\bar X>1$ corresponds to $Z>(1-1.5)/0.5=-1$. Thus the power is $P(Z>-1)=1-\Phi(-1)=\Phi(1)\approx 0.8413$. A sample size of $16$ gives about $84\%$ power to detect this effect.

**Answer.** Power $\Phi(1)\approx 0.8413$.

</details>

*Tags: hypothesis-testing, power, normal*
