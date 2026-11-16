# Compose two permutations

*Difficulty 2 of 5 · [Groups as symmetry and composition](index.md) · exercise 1 of 4*

In $S_3$ let $\sigma=(1\ 2\ 3)$ and $\tau=(1\ 2)$. Using right-to-left composition, compute $\sigma\tau$ and $\tau\sigma$ and use the result to show that $S_3$ is noncommutative.

<details>
<summary>Hint 1</summary>

For $\sigma\tau$, apply $\tau$ first and then $\sigma$

</details>

<details>
<summary>Hint 2</summary>

Track the images of $1$, $2$, and $3$

</details>

<details>
<summary>Worked solution</summary>

For $\sigma\tau$: $1$ goes by $\tau$ to $2$ and by $\sigma$ to $3$, while $3$ goes by $\tau$ to $3$ and by $\sigma$ to $1$; $2$ is fixed overall. Hence $\sigma\tau=(1\ 3)$. For $\tau\sigma$: $1$ goes to $2$ and then $1$, so it is fixed; $2$ goes to $3$, and $3$ goes to $2$. Thus $\tau\sigma=(2\ 3)$. Since $(1\ 3)\ne(2\ 3)$, these two elements do not commute, proving $S_3$ is noncommutative.

**Answer.** $\sigma\tau=(1\ 3)$ and $\tau\sigma=(2\ 3)$, so $\sigma\tau\ne\tau\sigma$.

</details>

*Tags: permutation, composition, noncommutative*
