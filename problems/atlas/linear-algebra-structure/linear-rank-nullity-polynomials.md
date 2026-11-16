# Rank–nullity beyond coordinate vectors

*Difficulty 3 of 5 · [Linear algebra as structure](index.md) · exercise 6 of 11*

Let $T:P_4\to P_4$ be $T(p)=p-p(0)$. Find a basis of $\ker T$ and $\operatorname{im} T$, then verify rank–nullity.

<details>
<summary>Hint 1</summary>

T removes the constant term

</details>

<details>
<summary>Hint 2</summary>

Use the standard polynomial basis

</details>

<details>
<summary>Worked solution</summary>

Write $p=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$. Then $T(p)=a_1x+a_2x^2+a_3x^3+a_4x^4$. The kernel consists of constants, with basis $\{1\}$, so nullity is $1$. The image is the subspace of polynomials with zero constant term, with basis $\{x,x^2,x^3,x^4\}$, so rank is $4$. Since $\dim P_4=5$, $\operatorname{rank}T+\operatorname{nullity}T=4+1=5$.

**Answer.** $\ker T=\operatorname{span}\{1\}$, $\operatorname{im}T=\operatorname{span}\{x,x^2,x^3,x^4\}$; nullity $1$, rank $4$.

</details>

*Tags: rank-nullity, polynomial space, kernel*
