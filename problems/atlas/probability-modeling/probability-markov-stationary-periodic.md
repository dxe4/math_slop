# Stationary but not convergent

*Difficulty 3 of 5 · [Probability modeling](index.md) · exercise 8 of 15*

For the two-state transition matrix $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, find a stationary distribution and determine the laws at times $n$ when the chain starts in state $0$. Why does stationarity not imply convergence here?

<details>
<summary>Hint 1</summary>

Solve $\pi P=\pi$

</details>

<details>
<summary>Hint 2</summary>

Track the deterministic alternation

</details>

<details>
<summary>Worked solution</summary>

The row vector $\pi=(1/2,1/2)$ satisfies $\pi P=\pi$. Starting at $0$, however, the chain is at $0$ at every even time and $1$ at every odd time, so its law alternates between two point masses and has no limit. The chain is irreducible but periodic with period two; aperiodicity is needed for ordinary convergence from every start.

**Answer.** $\pi=(1/2,1/2)$, but the start-$0$ law alternates $\delta_0,\delta_1$ and does not converge.

</details>

*Tags: Markov chain, stationary distribution, periodicity*
