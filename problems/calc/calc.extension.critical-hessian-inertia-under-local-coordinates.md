# Prove critical Hessian inertia survives a nonlinear coordinate change

*Hard · [Calculus](index.md)*

Let T be a C² local coordinate diffeomorphism near a, and let f be C² with ∇f(T(a))=0. Prove $H_{f\circ T}(a)=DT(a)^TH_f(T(a))DT(a)$ and that positive and negative indices of the quadratic form are preserved. Explain why the critical-point hypothesis matters with an explicit one-dimensional counterexample away from a critical point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the multivariable chain rule once more and identify the terms involving second derivatives of coordinate functions.

</details>

<details>
<summary>Hint 2</summary>

At a critical point those extra terms vanish; an invertible linear change bijects subspaces on which a quadratic form is positive or negative.

</details>

<details>
<summary>Model proof</summary>

Coordinate curvature disappears from the second differential precisely when the first differential vanishes.

1. Writing J=DT(a), the second-order chain rule gives H\_{f∘T}=JᵀH\_fJ+Σ\_i f\_i(T(a))H\_{T\_i}(a). Each coefficient in the sum is zero by criticality, proving the stated congruence.
2. For any increment h, the new quadratic form is (Jh)ᵀH\_f(Jh). Since J is invertible, it bijects subspaces and preserves their dimensions. Thus a subspace on which the new form is positive definite corresponds exactly to one for the old form, and the same is true for negative definite subspaces.
3. Taking maximal such dimensions shows the positive and negative indices agree. The null dimension also agrees by rank invariance under multiplication by invertible matrices.
4. Away from a critical point the extra term can change the result. In one dimension take f(x)=x and T(u)=u² near u=1. T is a local diffeomorphism, f″=0, but (f∘T)″=2. Here f′=1 and the missing coordinate-curvature term is exactly T″=2.

**Self-assessment rubric**

- Writes the Hessian chain rule including the coordinate-second-derivative terms.
- Uses the vanishing first differential to obtain congruence.
- Uses the invertible map on positive and negative subspaces to prove index preservation.
- Provides a valid local diffeomorphism counterexample and identifies the extra term.

</details>
