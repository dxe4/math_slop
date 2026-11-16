# Bisection with a guarantee

*Difficulty 2 of 5 · [Modeling and numerical judgment](index.md) · exercise 4 of 5*

A continuous function changes sign on $[1,2]$. After $n$ bisection steps, how wide is the remaining bracket? How many steps guarantee width below $10^{-6}$?

<details>
<summary>Hint 1</summary>

Each step halves the interval

</details>

<details>
<summary>Hint 2</summary>

Solve $2^{-n}<10^{-6}$

</details>

<details>
<summary>Worked solution</summary>

The initial width is $1$ and each bisection halves it, so after $n$ steps the width is $2^{-n}$. We need $2^{-n}<10^{-6}$, equivalently $n>\log_2(10^6)\approx19.93$. Thus $20$ steps guarantee a bracket narrower than $10^{-6}$. This guarantee uses continuity and a maintained sign change, not derivative information.

**Answer.** Width $2^{-n}$; $20$ steps suffice.

</details>

*Tags: bisection, error bound, continuity*
