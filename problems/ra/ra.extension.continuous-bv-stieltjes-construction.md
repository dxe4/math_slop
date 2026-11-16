# Prove Stieltjes existence and integration by parts with variation control

*Hard · [Real analysis](index.md)*

Let f and alpha be continuous real functions of bounded variation on \[a,b\]. Prove the Riemann-Stieltjes integrals exist and $\int f\,d\alpha+\int\alpha\,df=f(b)\alpha(b)-f(a)\alpha(a)$. Establish existence before taking limits in the discrete identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Uniform continuity controls how much changing a tag within one coarse cell changes a sum.

</details>

<details>
<summary>Hint 2</summary>

Bound all integrator increments by its total variation, then compare two sums through a common refinement.

</details>

<details>
<summary>Model proof</summary>

Variation bounds make tagged sums Cauchy, and a telescoping product identity supplies integration by parts.

1. More generally, for continuous f and a bounded-variation integrator alpha, let omega\_f(delta) be the uniform modulus of continuity. Comparing a tagged sum with a refinement changes it by at most omega\_f(mesh)\*Var(alpha), since each subcell's tags remain in the original coarse cell and the absolute alpha increments sum to at most the variation.
2. Two sufficiently fine tagged sums can therefore be compared through a common refinement, with difference tending to zero. Completeness gives the Riemann-Stieltjes limit, independent of partitions and tags. Apply this once to (f,alpha) and once to (alpha,f).
3. For each partition, the exact identity f(t\_j)\*alpha(t\_j)-f(t\_(j-1))\*alpha(t\_(j-1))=f(t\_j)\*(alpha(t\_j)-alpha(t\_(j-1)))+alpha(t\_(j-1))\*(f(t\_j)-f(t\_(j-1))) telescopes. The two sums have right and left tags respectively, both legitimate. Taking the now-justified limits gives the integration-by-parts formula.

**Self-assessment rubric**

- Derive the refinement comparison using a uniform modulus and total variation.
- Prove tagged sums have one limit for both ordered integrals.
- Write the exact telescoping identity with its tags and then pass to the limits.

</details>
