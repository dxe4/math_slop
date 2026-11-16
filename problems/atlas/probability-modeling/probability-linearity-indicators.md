# Expected fixed points of a permutation

*Difficulty 4 of 5 · [Probability modeling](index.md) · exercise 4 of 15*

A permutation of $\{1,\ldots,n\}$ is chosen uniformly at random. What is the expected number of positions $i$ for which the permutation leaves $i$ fixed? Do not count all permutation types.

<details>
<summary>Hint 1</summary>

Let $I_i$ indicate that $i$ is fixed

</details>

<details>
<summary>Hint 2</summary>

Expectation is linear without independence

</details>

<details>
<summary>Worked solution</summary>

Let $I_i=1$ if the permutation fixes $i$ and $0$ otherwise. The number of fixed points is $X=I_1+\cdots+I_n$. For a given $i$, exactly $(n-1)!$ of $n!$ permutations fix $i$, so $P(I_i=1)=1/n$ and $E[I_i]=1/n$. By linearity, $E[X]=n\cdot(1/n)=1$. The indicators are not mutually independent, but linearity of expectation does not require independence.

**Answer.** The expected number is $1$ for every positive $n$.

</details>

*Tags: indicator, expectation, permutation*
