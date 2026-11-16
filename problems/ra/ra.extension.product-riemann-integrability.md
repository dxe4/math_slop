# Control product oscillations on a shared refinement

*Medium · [Real analysis](index.md)*

If bounded real f,g are Riemann integrable on \[a,b\], prove $fg$ is Riemann integrable using Darboux oscillations. Include the cases where one global absolute bound is zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write a product difference as two differences with bounded coefficients.

</details>

<details>
<summary>Hint 2</summary>

Refine two partitions to obtain simultaneous small gaps.

</details>

<details>
<summary>Model proof</summary>

Product control needs two oscillation budgets on one partition.

1. Take bounds \|f\|&lt;=M and \|g\|&lt;=N. For x,y in a cell, \|f(x)g(x)-f(y)g(y)\|&lt;=M\*\|g(x)-g(y)\|+N\*\|f(x)-f(y)\|, so osc(fg)&lt;=M\*osc(g)+N\*osc(f).
2. If M=0 or N=0, the product is identically zero and integrable. Otherwise choose partitions giving g gap less than epsilon/(2M) and f gap less than epsilon/(2N). Their common refinement cannot increase either Darboux gap.
3. Summing the weighted cell estimate on that refinement makes the product gap less than epsilon. The product is bounded by MN, so Darboux's criterion proves its integrability, without presupposing a product integral.

**Self-assessment rubric**

- Derive the bound with the correct two global coefficients.
- Obtain both tolerances on one valid partition.
- Handle zero bounds and conclude through the integrability criterion.

</details>
