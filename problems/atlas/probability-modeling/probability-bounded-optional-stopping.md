# Prove bounded optional stopping in a finite case

*Difficulty 5 of 5 · [Probability modeling](index.md) · exercise 11 of 15*

Let $M_n$ be a martingale and $T$ a stopping time bounded by $2$. Expand $M_T-M_0$ using increments and show its expectation is zero.

<details>
<summary>Hint 1</summary>

Use $\mathbf{1}_{\{T\ge1\}}(M_1-M_0)+\mathbf{1}_{\{T\ge2\}}(M_2-M_1)$

</details>

<details>
<summary>Hint 2</summary>

Each indicator is known before its increment

</details>

<details>
<summary>Worked solution</summary>

Because $T\le2$, $M_T-M_0=\mathbf{1}_{\{T\ge1\}}(M_1-M_0)+\mathbf{1}_{\{T\ge2\}}(M_2-M_1)$. The first indicator is $\mathcal{F}_0$-measurable and the second is $\mathcal{F}_1$-measurable. For $k=1,2$, $E[\mathbf{1}_{\{T\ge k\}}(M_k-M_{k-1})]=E[\mathbf{1}_{\{T\ge k\}}E[M_k-M_{k-1}\mid\mathcal{F}_{k-1}]]=0$ by the martingale condition. Thus $E[M_T]=E[M_0]$. Boundedness makes the sum finite and integrable.

**Answer.** Both predictable stopped increments have expectation zero, hence $E[M_T]=E[M_0]$.

</details>

*Tags: martingale, stopping time, optional stopping, proof*
