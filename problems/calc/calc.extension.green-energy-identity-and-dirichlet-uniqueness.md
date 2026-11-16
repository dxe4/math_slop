# Prove the energy identity and harmonic Dirichlet uniqueness

*Hard · [Calculus](index.md)*

For a bounded connected region Ω with piecewise-C¹ boundary and u C² on a neighborhood of its closure, derive $\int_\Omega|\nabla u|^2=\int_{\partial\Omega}u\partial_nu-\int_\Omega u\Delta u$. Use it to prove uniqueness of a harmonic function with prescribed boundary values within this C²-up-to-the-boundary regularity class.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply divergence to the vector field u∇u.

</details>

<details>
<summary>Hint 2</summary>

For two candidate solutions use their difference, which has zero boundary data.

</details>

<details>
<summary>Model proof</summary>

A zero nonnegative energy eliminates every nonconstant difference between solutions.

1. The product rule gives div(u∇u)=\|∇u\|²+uΔu. Divergence yields the stated identity, with ∂\_n u=∇u·n and every boundary normal outward.
2. If u and v are harmonic with identical boundary values, their difference w is harmonic and zero on the boundary. In the energy identity both the volume wΔw term and boundary w∂\_n w term vanish.
3. Thus ∫\_Ω\|∇w\|²=0. The integrand is continuous and nonnegative, so it vanishes at every interior point; otherwise a positive neighborhood would give positive integral.
4. Hence ∇w=0, so w is constant on the connected open region. Its continuous zero boundary value makes that constant zero. Therefore the two harmonic solutions agree. The argument proves uniqueness, not existence for arbitrary boundary data.

**Self-assessment rubric**

- Derives the identity from div(u∇u) with the correct signs and normal convention.
- Checks both harmonicity and zero boundary data of the difference.
- Uses continuity to turn zero integral of squared gradient into pointwise vanishing.
- Uses connectedness and boundary values to conclude equality without asserting existence.

</details>
