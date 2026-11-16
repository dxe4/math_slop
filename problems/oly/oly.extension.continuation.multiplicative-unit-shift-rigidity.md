# Force the real identity from products and a unit shift

*Hard · [Original olympiad-style problems](index.md)*

Prove the only function $f:\mathbb R\to\mathbb R$ satisfying $f(xy)=f(x)f(y)$ and $f(x+1)=f(x)+1$ for all real inputs is the identity. Do not assume continuity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use the equations at zero and one to determine those two values.

</details>

<details>
<summary>Hint 2</summary>

For nonzero $y$, factor $x+y=y(x/y+1)$ to derive additivity.

</details>

<details>
<summary>Model proof</summary>

Create additive order structure from a multiplicative translation law.

1. Multiplicativity makes each of $f(0),f(1)$ idempotent. Since $f(1)=f(0)+1$, the only consistent values are zero and one respectively.
2. For $y\ne0$, multiplicativity and the shift law give $f(x+y)=f(y)(f(x/y)+1)=f(x)+f(y)$. The case $y=0$ is immediate, so $f$ is additive.
3. For $t>0$, write it as a square. Its image is nonnegative and cannot be zero because $f(t)f(1/t)=1$. Thus positive inputs have positive outputs, and additivity makes the function strictly increasing.
4. It fixes rationals and is squeezed to the identity on every real number by rational bounds. The identity satisfies both laws, proving uniqueness.

**Self-assessment rubric**

- Determine both base values without assuming a nonzero branch.
- Use product factorization to prove full addition.
- Prove strict positivity and monotonicity.
- Use rational bounds and verify the final function.

</details>
