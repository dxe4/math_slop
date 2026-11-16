# Waiting time from a Poisson process

*Difficulty 2 of 5 · [Probability and statistics core practice](index.md) · exercise 3 of 12*

Customers arrive at a service desk according to a Poisson process with rate $2$ per minute. What is the probability that the waiting time until the first arrival exceeds $1.5$ minutes? Name the distribution and its parameter.

<details>
<summary>Hint 1</summary>

Interarrival times in a Poisson process are exponentially distributed

</details>

<details>
<summary>Hint 2</summary>

Use the survival function $P(T>t)=e^{-\lambda t}$

</details>

<details>
<summary>Worked solution</summary>

In a Poisson process with rate $\lambda=2$, the interarrival time $T$ follows an exponential distribution with rate $2$. Its survival function is $P(T>t)=e^{-\lambda t}$. Therefore $P(T>1.5)=e^{-2\cdot 1.5}=e^{-3}\approx 0.0498$. The waiting time is exponentially distributed with rate parameter $2$ per minute.

**Answer.** $e^{-3}\approx 0.0498$; exponential with rate $2$.

</details>

*Tags: probability-distributions, Poisson process, exponential*
