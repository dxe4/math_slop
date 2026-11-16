# Find and verify an inverse

*Difficulty 4 of 5 · [Algebra & Functions Core Practice](index.md) · exercise 9 of 12*

Find the inverse of $f(x)=\dfrac{2x-1}{3}$. Verify that $f(f^{-1}(y))=y$ and $f^{-1}(f(x))=x$.

<details>
<summary>Hint 1</summary>

Write $y=(2x-1)/3$ and solve for $x$ in terms of $y$.

</details>

<details>
<summary>Hint 2</summary>

Substitute the inverse rule into the original and simplify.

</details>

<details>
<summary>Worked solution</summary>

Set $y=(2x-1)/3$. Multiply by $3$: $3y=2x-1$. Add $1$: $3y+1=2x$. Divide by $2$: $x=(3y+1)/2$. Therefore $f^{-1}(y)=(3y+1)/2$. Verification: $f(f^{-1}(y))=\dfrac{2\cdot\frac{3y+1}{2}-1}{3}=\dfrac{(3y+1)-1}{3}=\dfrac{3y}{3}=y$. And $f^{-1}(f(x))=\dfrac{3\cdot\frac{2x-1}{3}+1}{2}=\dfrac{(2x-1)+1}{2}=\dfrac{2x}{2}=x$. Both compositions collapse to the identity, confirming the inverse.

**Answer.** $f^{-1}(y)=\dfrac{3y+1}{2}$

</details>

*Tags: function-composition-inverses*
