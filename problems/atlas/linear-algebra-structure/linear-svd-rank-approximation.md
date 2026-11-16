# Read geometry from singular values

*Difficulty 4 of 5 · [Linear algebra as structure](index.md) · exercise 9 of 11*

A $5\times3$ matrix has singular values $9$, $2$, and $0.1$. State its exact rank, $2$-norm condition number, and error of its best rank-two approximation in $2$-norm. Explain one reason not to discard $0.1$ automatically.

<details>
<summary>Hint 1</summary>

Exact rank counts nonzero singular values

</details>

<details>
<summary>Hint 2</summary>

Eckart–Young uses the next omitted singular value

</details>

<details>
<summary>Worked solution</summary>

All three listed singular values are nonzero, so exact rank is $3$. The $2$-norm condition number is $9/0.1=90$. Truncating after two singular values has optimal $2$-norm error $\sigma_3=0.1$. Whether that direction is noise depends on data units, measurement uncertainty, and the downstream loss; a fixed numerical cutoff alone does not decide scientific relevance.

**Answer.** Rank 3, condition number 90, best rank-two error 0.1; retention depends on scale and noise.

</details>

*Tags: SVD, condition number, low rank*
