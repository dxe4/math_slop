# Coordinates in a nonstandard basis

*Difficulty 2 of 5 · [Linear algebra as structure](index.md) · exercise 2 of 11*

Let $b_1=(1,1)$ and $b_2=(1,-1)$. Show they form a basis of $\mathbb{R}^2$ and find the coordinates of $v=(7,1)$ in this basis.

<details>
<summary>Hint 1</summary>

Solve $c_1b_1+c_2b_2=v$

</details>

<details>
<summary>Hint 2</summary>

Independence follows if only zero coefficients give zero

</details>

<details>
<summary>Worked solution</summary>

The equation $c_1(1,1)+c_2(1,-1)=(7,1)$ gives $c_1+c_2=7$ and $c_1-c_2=1$. Adding yields $c_1=4$; then $c_2=3$. The same coefficient equations with right side zero give $c_1=c_2=0$, so $b_1,b_2$ are independent. Two independent vectors in $\mathbb{R}^2$ form a basis. Thus the basis coordinates are $(4,3)$.

**Answer.** $[v]_{B}=(4,3)$; the two basis vectors are linearly independent.

</details>

*Tags: basis, coordinates, independence*
