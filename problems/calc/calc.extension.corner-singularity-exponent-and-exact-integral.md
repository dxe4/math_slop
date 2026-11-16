# Find a two-dimensional corner singularity threshold and exact value

*Hard · [Calculus](index.md)*

For real p analyze $I_p=\int_0^1\int_0^1(x+y)^{-p}\,dy\,dx$ as a nonnegative improper integral. Prove the exact convergence threshold and evaluate every convergent case, treating the logarithmic parameter separately.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Set u=x+y,v=x and find the cross-section length for 0&lt;u&lt;1 and 1&lt;u&lt;2.

</details>

<details>
<summary>Hint 2</summary>

Only the first piece controls convergence at the corner.

</details>

<details>
<summary>Model proof</summary>

A shrinking level-set width changes the singularity threshold from a one-dimensional power test.

1. The inverse map is x=v,y=u−v with determinant magnitude one. At 0&lt;u≤1, v has length u; at 1≤u&lt;2 it has length 2−u. Thus I\_p=∫₀¹u^{1−p}du+∫₁²(2−u)u^{−p}du, as nonnegative extended integrals.
2. The second integral is finite for every real p. The first converges exactly when 1−p&gt;−1, or p&lt;2; otherwise the corner contribution diverges.
3. For p&lt;2 and p≠1, elementary power antiderivatives give I\_p=(2^{2−p}−2)/\[(1−p)(2−p)\]. The excluded p=2 is already divergent.
4. At p=1, the first piece is 1 and the second is ∫₁²(2/u−1)du=2log2−1, so I₁=2log2. These separate formulas include every convergent parameter.

**Self-assessment rubric**

- Derives both cross-section lengths and the valid transformed extended integral.
- Finds exactly p&lt;2 from the singular first piece.
- Evaluates and simplifies the nonlogarithmic convergent cases.
- Treats p=1 directly and excludes the divergent boundary p=2.

</details>
