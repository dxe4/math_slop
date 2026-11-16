# Compose and state the domain

*Difficulty 4 of 5 · [Algebra & Functions Core Practice](index.md) · exercise 8 of 12*

Let $f(x)=\sqrt{x+2}$ and $g(x)=x-5$. Find $f(g(x))$, simplify, and state its domain in interval notation.

<details>
<summary>Hint 1</summary>

Substitute $g(x)$ into $f$: $f(g(x))=\sqrt{(x-5)+2}$.

</details>

<details>
<summary>Hint 2</summary>

The expression under the square root must be nonnegative.

</details>

<details>
<summary>Worked solution</summary>

Substituting gives $f(g(x))=\sqrt{(x-5)+2}=\sqrt{x-3}$. For the square root to produce a real value, the radicand must satisfy $x-3\ge 0$, so $x\ge 3$. In interval notation the domain is $[3,\infty)$. Check: at $x=3$, $f(g(3))=\sqrt{0}=0$; at $x=10$, $f(g(10))=\sqrt{7}$, which is defined. At $x=2$, the radicand is $-1$, which is excluded.

**Answer.** $f(g(x))=\sqrt{x-3}$; domain $[3,\infty)$.

</details>

*Tags: function-composition-inverses*
