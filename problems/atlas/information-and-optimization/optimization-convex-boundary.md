# An unconstrained and constrained minimum

*Difficulty 2 of 5 · [Information, coding, and optimization](index.md) · exercise 3 of 4*

Minimize $f(x)=x^2-6x+13$ first over all real x and then under the constraint $x\ge 5$. Certify that each answer is globally optimal.

<details>
<summary>Hint 1</summary>

Complete the square

</details>

<details>
<summary>Hint 2</summary>

On $x\ge 5$, compare the vertex with the feasible boundary

</details>

<details>
<summary>Worked solution</summary>

Completing the square gives $f(x)=(x-3)^2+4$. Over all real x, the nonnegative square is minimized uniquely at $x=3$, giving $f=4$. Under $x\ge 5$, the vertex $x=3$ is infeasible. For $x\ge 5$ the derivative 2(x-3) is positive, so f increases throughout the feasible ray; its constrained minimum is at the boundary $x=5$, where $f(5)=8$. Strict convexity, $f''=2>0$, certifies both minima are global and unique in their domains.

**Answer.** Unconstrained: $x=3$ with value 4. Under $x\ge 5$: $x=5$ with value 8.

</details>

*Tags: convex optimization, constraint, global minimum*
