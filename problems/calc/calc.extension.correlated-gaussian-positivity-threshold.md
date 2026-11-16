# Determine when a coupled Gaussian integral is finite

*Hard · [Calculus](index.md)*

For real ρ evaluate $I(\rho)=\iint_{\mathbb R^2}e^{-(x^2+2\rho xy+y^2)}\,dA$ whenever finite and prove divergence for every other ρ. You may use the one-dimensional Gaussian integral √π.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Rotate to u=(x+y)/√2,v=(x−y)/√2.

</details>

<details>
<summary>Hint 2</summary>

The two quadratic coefficients are 1+ρ and 1−ρ; classify their zero and negative cases as well as the positive case.

</details>

<details>
<summary>Model proof</summary>

Integrability is controlled by the full quadratic form, not just the positive x² and y² coefficients.

1. The orthogonal change has absolute determinant one and transforms the quadratic to (1+ρ)u²+(1−ρ)v².
2. If \|ρ\|&lt;1, both coefficients are positive. Nonnegative Fubini and one-dimensional rescaling give I=√(π/(1+ρ))√(π/(1−ρ))=π/√(1−ρ²).
3. If \|ρ\|=1, one direction has zero coefficient. Restrict the other coordinate to a bounded interval with a positive integral; integrating over the unpenalized coordinate gives infinite mass.
4. If \|ρ\|&gt;1, one coefficient is negative. Restrict the other coordinate to a bounded interval. Writing s for the coordinate with negative coefficient, the integrand grows in that direction like e^{c s²} with c&gt;0 and has infinite integral. Hence finiteness holds exactly for \|ρ\|&lt;1.

**Self-assessment rubric**

- Gets the transformed coefficients and absolute Jacobian one.
- Evaluates the positive-definite case by valid Gaussian scaling.
- Proves divergence when one coefficient vanishes.
- Exhibits an infinite-mass strip when a coefficient is negative.

</details>
