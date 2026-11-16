# Build a witness from a tolerance

*Difficulty 3 of 5 · [Transferable proof strategies](index.md) · exercise 4 of 4*

Using the epsilon definition of sequence convergence, prove that $a_n=1/n$ converges to 0. Your proof must specify how $N$ depends on an arbitrary $\varepsilon>0$.

<details>
<summary>Hint 1</summary>

You need $1/n<\varepsilon$ whenever $n\ge N$

</details>

<details>
<summary>Hint 2</summary>

Choose an integer $N$ greater than $1/\varepsilon$

</details>

<details>
<summary>Worked solution</summary>

Let $\varepsilon>0$ be arbitrary. By the Archimedean property, choose an integer $N>1/\varepsilon$; for example $N=\lfloor 1/\varepsilon\rfloor+1$ works. If $n\ge N$, then $n\ge N>1/\varepsilon$. Because all quantities are positive, taking reciprocals reverses the inequality and gives $1/n\le 1/N<\varepsilon$. Hence $|a_n-0|=1/n<\varepsilon$ for every $n\ge N$. Since such an $N$ is produced for every positive $\varepsilon$, the sequence converges to 0.

**Answer.** Choose $N=\lfloor 1/\varepsilon\rfloor+1$; then $n\ge N$ implies $|1/n|<\varepsilon$.

</details>

*Tags: epsilon proof, sequence convergence, witness*
