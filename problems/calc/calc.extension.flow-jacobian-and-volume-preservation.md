# Derive flow-volume evolution from a Jacobian determinant

*Hard · [Calculus](index.md)*

Let F be C¹ with a C¹ local flow Φ\_t defined near the closure of a bounded piecewise-C¹ region Ω for small \|t\|. Prove $\det D\Phi_t(x)=\exp(\int_0^t\operatorname{div}F(\Phi_s(x))ds)$. Deduce volume preservation if div F=0 and the initial volume-rate formula as outward flux. You may use Jacobi’s determinant differentiation identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the flow equation with respect to its initial point.

</details>

<details>
<summary>Hint 2</summary>

Trace cyclicity reduces the determinant equation to divergence along each trajectory.

</details>

<details>
<summary>Model proof</summary>

The local derivative of a flow converts pointwise divergence into exact finite-time volume scaling.

1. Let A\_t=DΦ\_t(x). Differentiating ∂\_tΦ\_t=F(Φ\_t) gives ∂\_tA\_t=DF(Φ\_t)A\_t, with A₀=I. Flow maps are local diffeomorphisms, so A\_t is invertible.
2. Jacobi’s identity gives ∂\_t det A\_t=(det A\_t)tr(A\_t⁻¹DF(Φ\_t)A\_t)=(div F)(Φ\_t)det A\_t. Solving with determinant initially 1 yields the positive exponential formula.
3. Change of variables gives vol(Φ\_t(Ω))=∫\_Ωdet DΦ\_t dx, with no sign ambiguity because the determinant is positive. If div F=0 throughout the flow neighborhood, it is identically 1 and volume is preserved.
4. At t=0, differentiation under the bounded-region integral gives the rate ∫\_Ωdiv F dx; continuity on the compact flow neighborhood supplies a uniform bound. Divergence converts this to ∫\_{∂Ω}F·n dS.

**Self-assessment rubric**

- Derives the spatial derivative’s matrix evolution and initial condition.
- Uses Jacobi and trace cyclicity to solve the scalar determinant equation.
- Applies change of variables with the correct positive determinant and proves incompressible volume preservation.
- Justifies the initial integral derivative and identifies it with outward flux.

</details>
