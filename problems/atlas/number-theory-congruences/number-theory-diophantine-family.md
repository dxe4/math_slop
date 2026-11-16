# All solutions of a linear Diophantine equation

*Difficulty 3 of 5 · [Number theory through divisibility](index.md) · exercise 4 of 4*

Find every integer solution of $15x + 21y = 6$. Express the answer with one integer parameter and explain why it is complete.

<details>
<summary>Hint 1</summary>

Divide the equation by $3$

</details>

<details>
<summary>Hint 2</summary>

One solution of $5x+7y=2$ is $x=-1$, $y=1$

</details>

<details>
<summary>Hint 3</summary>

The homogeneous shifts are multiples of $(7,-5)$

</details>

<details>
<summary>Worked solution</summary>

Dividing by $3$ gives $5x+7y=2$. The pair $(-1,1)$ works. If $t$ is any integer, $x=-1+7t$ and $y=1-5t$ gives $5(-1+7t)+7(1-5t)=2$, so it produces solutions. Conversely, subtracting the particular solution from any solution gives $5(x+1)+7(y-1)=0$. Hence $5(x+1)=-7(y-1)$. Since $5$ and $7$ are coprime, $7$ divides $x+1$; write $x+1=7t$, which forces $y-1=-5t$. Therefore the family is complete.

**Answer.** $x=-1+7t$ and $y=1-5t$ for any integer $t$.

</details>

*Tags: Diophantine equation, integer solutions, parameterization*
