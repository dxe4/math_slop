# Generate Pell solutions by multiplying norms

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 6 of 13*

Verify that $(3,2)$ solves $x^2-2y^2=1$. Square $3+2\sqrt{2}$ to generate another positive solution, and explain why multiplication preserves the equation.

<details>
<summary>Hint 1</summary>

Use the conjugate $a-b\sqrt{2}$

</details>

<details>
<summary>Hint 2</summary>

Norms multiply

</details>

<details>
<summary>Hint 3</summary>

Expand the square exactly

</details>

<details>
<summary>Worked solution</summary>

We have $3^2-2\cdot2^2=9-8=1$. In $\mathbb{Z}[\sqrt{2}]$, define $N(a+b\sqrt{2})=(a+b\sqrt{2})(a-b\sqrt{2})=a^2-2b^2$. Conjugation respects products, so $N(uv)=N(u)N(v)$. Now $(3+2\sqrt{2})^2=9+12\sqrt{2}+8=17+12\sqrt{2}$. Its norm is therefore $1^2=1$, and directly $17^2-2\cdot12^2=289-288=1$. Repeated powers generate infinitely many positive solutions. This construction supplies a family; the stronger classification of all positive solutions requires the theory of continued fractions or units and is not proved merely by this calculation.

**Answer.** The next solution is (17,12); multiplicativity of $N(a+b\sqrt{2})=a^2-2b^2$ preserves norm 1.

</details>

*Tags: Pell equation, norm, Diophantine equation*
