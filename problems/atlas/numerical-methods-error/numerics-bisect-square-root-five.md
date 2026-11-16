# Three bisections for √5

*Difficulty 2 of 5 · [Numerical methods with error awareness](index.md) · exercise 1 of 4*

Apply three bisection steps to $f(x)=x^2-5$ on [2,3]. Give the bracket after each step, then use its midpoint as an approximation and state a guaranteed absolute-error bound.

<details>
<summary>Hint 1</summary>

Evaluate f at 2.5, 2.25, and 2.125

</details>

<details>
<summary>Hint 2</summary>

The root remains in the half whose endpoints have opposite signs

</details>

<details>
<summary>Worked solution</summary>

Since f(2)<0<f(3), begin with [2,3]. Now $f(2.5)=1.25>0$, giving [2,2.5]. Next $f(2.25)=0.0625>0$, giving [2,2.25]. Finally $f(2.125)=-0.484375<0$, giving [2.125,2.25]. The midpoint is 2.1875. Because $\sqrt{5}$ remains in this width-0.125 bracket, its distance from the midpoint is at most half the width, 0.0625.

**Answer.** Final bracket [2.125,2.25]; midpoint 2.1875 with absolute error at most 0.0625.

</details>

*Tags: bisection, root finding, error bound*
