# Rare spikes defeat expectation convergence

*Difficulty 4 of 5 · [Probability modeling](index.md) · exercise 7 of 15*

Let $X_n=n$ with probability $1/n$ and $0$ otherwise. Prove $X_n$ converges to $0$ in probability, compute $E[X_n]$, and explain which tempting limit exchange fails.

<details>
<summary>Hint 1</summary>

For fixed $\varepsilon>0$ and large $n$, the error event is the spike

</details>

<details>
<summary>Hint 2</summary>

Expectation is value times spike probability

</details>

<details>
<summary>Worked solution</summary>

For fixed $\varepsilon>0$ and $n>\varepsilon$, $P(|X_n|>\varepsilon)=1/n\to0$, so $X_n\to0$ in probability. Yet $E[X_n]=n(1/n)=1$ for every $n$, while $E[0]=0$. Thus convergence in probability alone does not imply convergence of expectations. Tail control such as uniform integrability is missing.

**Answer.** $X_n\to0$ in probability but $E[X_n]=1$, so expectations do not converge to $E[0]$.

</details>

*Tags: convergence in probability, expectation, uniform integrability*
