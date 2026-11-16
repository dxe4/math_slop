# Construct an annular potential exactly when its period vanishes

*Hard · [Calculus](index.md)*

Let F∈C¹ on an open annulus $r_0<r<r_1$, with 0&lt;r₀&lt;r₁ and planar curl zero. Prove F has a single-valued C¹ potential exactly when its work around one counterclockwise centered circle is zero. Give a full construction using unwrapped polar coordinates.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the pulled-back work form as a(r,θ)dr+b(r,θ)dθ.

</details>

<details>
<summary>Hint 2</summary>

Curl zero becomes b\_r=a\_θ; construct a primitive on the unwrapped strip and test whether it is 2π-periodic.

</details>

<details>
<summary>Model proof</summary>

One period is the only obstruction after a primitive is built on the annulus’s unwrapped coordinate strip.

1. Set a=F·e\_r and b=rF·e\_θ. Chain-rule calculation gives b\_r−a\_θ=r(curl F)=0. The circle period C(r)=∫₀^{2π}b(r,θ)dθ has derivative ∫₀^{2π}a\_θdθ=0, because the coefficients are periodic. Thus all centered-circle periods agree.
2. Choose r\_\* inside the annulus and define ψ(r,θ)=∫\_{r\_\*}^r a(s,0)ds+∫₀^θb(r,t)dt on (r₀,r₁)×R. Then ψ\_θ=b and ψ\_r=a(r,0)+∫₀^θb\_rdt=a(r,θ). It is a primitive of the pulled-back work form.
3. Its increment under θ↦θ+2π is exactly C(r). If the given circle period is zero, all these increments vanish, so ψ is periodic and defines a single-valued C¹ function φ on the annulus. In every polar chart dφ=F·dr, hence ∇φ=F.
4. Conversely any single-valued potential gives zero work on every closed circle by the line-integral fundamental theorem. This proves necessity and sufficiency, including constancy of the relevant period and the descent of the constructed primitive.

**Self-assessment rubric**

- Derives b\_r=a\_θ and proves the centered period is independent of radius.
- Constructs ψ and checks both partial derivatives explicitly.
- Identifies the angular increment with the period and obtains a genuine single-valued annular potential.
- Uses the endpoint theorem to prove zero period for any existing potential.

</details>
