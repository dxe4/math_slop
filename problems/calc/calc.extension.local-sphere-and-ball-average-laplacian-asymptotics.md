# Recover the Laplacian from small spherical and ball averages

*Hard · [Calculus](index.md)*

For C² u near a∈R³, let A\_s(r) and A\_b(r) be its averages over the centered sphere and ball of radius r. Prove $A_s(r)=u(a)+r^2\Delta u(a)/6+o(r^2)$ and A\_b(r)=u(a)+r²Δu(a)/10+o(r²). Deduce that exact small-sphere mean equality forces Δu(a)=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the second-order multivariable Taylor expansion uniformly over unit directions.

</details>

<details>
<summary>Hint 2</summary>

On the unit sphere the first moments vanish and the second moments are δ\_ij/3; radial averaging supplies another factor 3/5.

</details>

<details>
<summary>Model proof</summary>

Local averages isolate the rotationally invariant trace of the Hessian.

1. Continuity of the Hessian gives u(a+rω)=u(a)+r∇u(a)·ω+(r²/2)ωᵀH\_u(a)ω+r²η(r,ω), where sup\_{\|ω\|=1}\|η(r,ω)\|→0. This uniform remainder follows by integrating the Hessian difference along each radial segment.
2. Sphere reflection symmetry gives average ω\_i=0 and average ω\_iω\_j=0 for i≠j. Rotational symmetry makes the three average ω\_i² equal, and their sum is one, so each is 1/3. Averaging the Taylor formula yields A\_s(r)=u(a)+(r²/6)tr H+o(r²).
3. The ball average is (3/r³)∫₀ʳs²A\_s(s)ds. Its constant term remains u(a), and its quadratic term is (3/r³)(Δu(a)/6)(r⁵/5)=r²Δu(a)/10. The uniform small-s remainder integrates to o(r²) by the same supremum bound.
4. If A\_s(r)=u(a) for all sufficiently small r&gt;0, divide its asymptotic difference by r² and let r→0 to obtain Δu(a)/6=0. This converse uses C² local information, rather than presuming smoothness from an unstated mean property.

**Self-assessment rubric**

- Justifies the remainder uniformly over sphere directions using C² regularity.
- Derives the first and second normalized angular moments and coefficient 1/6.
- Averages the sphere expansion with the correct radial weight to obtain 1/10 and its remainder.
- Derives the pointwise Laplace condition from exact small-sphere means under the stated regularity.

</details>
