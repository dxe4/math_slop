# Finite geometric sum by induction

*Difficulty 2 of 5 · [Proof foundations](index.md) · exercise 4 of 5*

For $r \ne 1$, prove by induction that $1 + r + r^2 + \cdots + r^n = \frac{r^{n+1} - 1}{r - 1}$ for every integer $n \ge 0$.

<details>
<summary>Hint 1</summary>

Check $n = 0$ exactly

</details>

<details>
<summary>Hint 2</summary>

In the step, add $r^{k+1}$ and combine over $r - 1$

</details>

<details>
<summary>Worked solution</summary>

Base case $n=0$: both sides equal $1$. Assume the formula through $n=k$. Adding the next term gives $\frac{r^{k+1}-1}{r-1} + r^{k+1}$. Put over a common denominator: $\frac{r^{k+1}-1 + r^{k+1}(r-1)}{r-1} = \frac{r^{k+2}-1}{r-1}$. This is precisely the claimed formula for $n=k+1$, completing the induction.

**Answer.** The inductive sum simplifies to $\frac{r^{k+2} - 1}{r - 1}$.

</details>

*Tags: induction, series*
