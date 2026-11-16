# Derive a level-set integration formula on a single regular patch

*Hard · [Calculus](index.md)*

Let g∈C¹ on a neighborhood of R=\[α,β\]×\[c,d\], with g\_s&gt;0. Put T(s,y)=(g(s,y),y), D=T(R), and define f on D by f(T(s,y))=s. For continuous h on D prove $\iint_Dh|\nabla f|\,dA=\int_\alpha^\beta\left(\int_{C_s}h\,d\ell\right)ds$, where C\_s={(g(s,y),y):c≤y≤d}. Derive the inverse differential, Jacobian and level-curve length factors.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For fixed y, strict positivity of g\_s makes T one-to-one and permits a local inverse.

</details>

<details>
<summary>Hint 2</summary>

Differentiate f(g(s,y),y)=s in both variables; the gradient norm and Jacobian then combine into the level-curve speed.

</details>

<details>
<summary>Model proof</summary>

The normal-coordinate scale cancels exactly, leaving the intrinsic arc length along each level.

1. Because g\_s&gt;0, s↦g(s,y) is strictly increasing for each fixed y. Equality of two image points first fixes y, then s, so T is globally injective on R. Its determinant is g\_s&gt;0, and the inverse function theorem supplies the C¹ inverse locally, agreeing on overlaps by injectivity.
2. Differentiate f(g(s,y),y)=s: f\_x g\_s=1 and f\_x g\_y+f\_y=0. Hence ∇f(T)=(1/g\_s,−g\_y/g\_s), whose norm is √(1+g\_y²)/g\_s.
3. Change variables by T. Its area factor g\_s cancels that denominator, so the left side becomes ∫\_α^β∫\_c^d h(g(s,y),y)√(1+g\_y(s,y)²)dy ds.
4. At fixed s the parametrized level curve has derivative (g\_y,1), so its scalar arc-length element is exactly √(1+g\_y²)dy. The inner integral is therefore ∫\_{C\_s}h dℓ, proving the identity with its stated regular one-patch hypotheses. No formula at critical points or on a multiply-covered chart was presumed.

**Self-assessment rubric**

- Proves global injectivity on the patch and the valid local inverse.
- Differentiates the defining relation in both independent coordinates.
- Uses the absolute area factor and gradient norm to obtain the correct integrand.
- Identifies the remaining factor with actual level-curve arc length and states the patch scope.

</details>
