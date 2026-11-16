# Classify a Pell family by a decreasing transformation

*Hard · [Original olympiad-style problems](index.md)*

Prove every pair of nonnegative integers satisfying $x^2-3y^2=1$ is generated from $(1,0)$ by repeatedly applying $(x,y)\mapsto(2x+3y,x+2y)$. Prove every generated pair works and the list is infinite.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For a solution with positive second coordinate, try the inverse transformation $(2x-3y,2y-x)$.

</details>

<details>
<summary>Hint 2</summary>

Use $\sqrt3y<x\le2y$ and treat the endpoint $y=1$ to show the new second coordinate is nonnegative and smaller.

</details>

<details>
<summary>Model proof</summary>

Combine an invariant quadratic form with a terminating descent.

1. Direct expansion shows both forward and inverse integer transformations preserve $x^2-3y^2$. They are inverse matrices with determinant one.
2. For a solution with $y\ge1$, $x>\sqrt3y$, so $2x-3y>0$. Also $x\le2y$, with equality only at $y=1$, hence $2y-x\ge0$.
3. The new second coordinate is less than $y$ because $x>y$. Thus inverse transformation repeatedly lowers a nonnegative integer until $y=0$, where nonnegative $x$ must be one.
4. Reversing the descent represents every solution by forward steps from $(1,0)$. Every such step preserves nonnegativity and the equation.
5. After the first step, the positive second coordinate strictly increases under every forward step, so generated pairs are distinct and infinite.

**Self-assessment rubric**

- Verify the two transformations preserve the equation and invert each other.
- Prove the inverse remains nonnegative and strictly lowers the second coordinate.
- Reach the base solution and reverse the descent.
- Verify all generated pairs and their strict growth.

</details>
