# Relate the transverse cycle multiplier to accumulated divergence

*Hard · [Differential equations problems](index.md)*

Let a C^1 planar autonomous vector field F have a nonconstant periodic orbit gamma of minimal period T. Prove the derivative of its local transverse Poincare return map at gamma is $\exp(\int_0^T \operatorname{div}F(\gamma(t))\,dt)$. Explain the neutral tangent multiplier and the effect of variable return time.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The variational equation has a tangent solution F(gamma(t)).

</details>

<details>
<summary>Hint 2</summary>

Liouville gives the product of the two multipliers; the return-time correction is tangent to the orbit.

</details>

<details>
<summary>Model proof</summary>

The transverse quotient removes the neutral phase direction.

1. Let X be the variational fundamental matrix with X(0)=I for eta'=DF(gamma(t))\*eta. Differentiating F(gamma(t)) shows it solves this equation, and periodicity gives X(T)\*F(gamma(0))=F(gamma(0)). Thus the tangent line has multiplier one.
2. Liouville's formula gives det X(T)=exp(integral\_0^T trace DF(gamma(t)) dt). The induced map on the one-dimensional quotient by the tangent line therefore has this same determinant as its multiplier.
3. Differentiating the local return map adds to X(T) applied to a transverse perturbation a term equal to F(gamma(0)) times the derivative of return time. That correction is tangent and disappears in the quotient. Identifying the local cross-section with this quotient gives exactly the stated derivative.

**Self-assessment rubric**

- Identify the nonzero tangent solution and its unit multiplier.
- Extract the other multiplier from the determinant.
- Explain why the varying return time leaves the transverse multiplier unchanged.

</details>
