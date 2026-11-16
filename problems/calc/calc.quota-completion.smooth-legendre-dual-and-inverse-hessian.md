# Prove smooth convex duality with its global hypotheses

*Hard · [Calculus](index.md)*

Let f∈C³(Rⁿ) have positive-definite Hessian everywhere and suppose ∇f maps onto Rⁿ. For $f^*(s)=\sup_x(s\cdot x-f(x))$, prove every supremum is finite and uniquely attained, derive ∇f\*(s)=(∇f)⁻¹(s) and H\_f\*(s)=\[H\_f((∇f)⁻¹(s))\]⁻¹, and prove f\*\*=f. Include the equality case in f(x)+f\*(s)≥s·x.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Integrate the Hessian along a segment to prove strict gradient monotonicity and global injectivity.

</details>

<details>
<summary>Hint 2</summary>

At the unique gradient preimage, strict convexity proves attainment; differentiation of the optimized value cancels the optimizer derivative terms.

</details>

<details>
<summary>Model proof</summary>

Global convexity and the onto-gradient assumption supply the optimizer before local inverse calculus supplies its smooth derivatives.

1. For x≠y let v=x−y. Then (∇f(x)−∇f(y))·v=∫₀¹vᵀH\_f(y+tv)vdt&gt;0. Thus ∇f is injective as well as onto. Also, for v=x−z, integral Taylor expansion gives f(x)−f(z)−∇f(z)·v=∫₀¹(1−t)vᵀH\_f(z+tv)vdt&gt;0 when v≠0. This proves the strict supporting inequality directly.
2. For each s there is exactly one x\_s with ∇f(x\_s)=s. The supporting inequality shows s·x−f(x)≤s·x\_s−f(x\_s), with equality exactly at x=x\_s. Hence the supremum is finite and uniquely attained, without an unstated coercivity assumption.
3. The inverse function theorem gives local C² inverses of ∇f; uniqueness makes them agree into a global C² map s↦x\_s. Differentiating f\*(s)=s·x\_s−f(x\_s) cancels the two terms containing Dx\_s, yielding ∇f\*(s)=x\_s. Differentiating ∇f(x\_s)=s gives H\_f\*(s)=Dx\_s=\[H\_f(x\_s)\]⁻¹.
4. The supporting inequality is also f(x)+f\*(s)≥s·x, with equality iff s=∇f(x). For a fixed x, this inequality gives sup\_s(s·x−f\*(s))≤f(x), and the choice s=∇f(x) attains equality. Therefore f\*\*(x)=f(x) for every x.

**Self-assessment rubric**

- Uses positive Hessian along a segment to prove strict monotonicity and injectivity.
- Combines the onto hypothesis and strict support inequality to obtain the finite unique supremum.
- Patches local inverses and derives both gradient and inverse-Hessian formulas.
- Proves the precise dual inequality equality case and both bounds needed for f\*\*=f.

</details>
