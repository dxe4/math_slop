# Palindromic real root count

*Medium · [Original Putnam-style training](index.md)*

How many distinct real roots has $x^4-3x^2+1$?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Set $y=x^2$ and solve a quadratic.

</details>

<details>
<summary>Hint 2</summary>

Check the signs of both $y$ roots before taking square roots.

</details>

<details>
<summary>Worked solution</summary>

Each positive $y$ gives two distinct real values $x=\pm\sqrt y$, so there are four roots.

1. The equation becomes $y^2-3y+1=0$, with solutions $y=(3\pm\sqrt5)/2$.
2. Both are positive and distinct because $3>\sqrt5>0$.
3. Each positive $y$ gives two distinct real values $x=\pm\sqrt y$, so there are four roots.

</details>
