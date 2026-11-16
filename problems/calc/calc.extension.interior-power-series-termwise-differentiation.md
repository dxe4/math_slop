# Prove differentiation of a power series inside its radius

*Hard · [Calculus](index.md)*

Let $f(x)=\sum_{n=0}^\infty a_nx^n$ have positive radius R. Prove f′(x)=Σₙ₌₁∞n a\_nx^{n−1} for \|x\|&lt;R, including local uniform convergence of the derivative series. Justify passage from polynomial derivatives to the derivative of the sum.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Fix 0&lt;r&lt;ρ&lt;R and bound \|a\_n\|ρⁿ by a constant.

</details>

<details>
<summary>Hint 2</summary>

The derivative terms are dominated by a constant times n(r/ρ)^{n−1}; integrate the uniform derivative limit to recover f.

</details>

<details>
<summary>Model proof</summary>

A slightly larger convergence radius absorbs the extra derivative factor n.

1. Fix 0&lt;r&lt;ρ&lt;R. Since the series converges at ρ, its terms are bounded: \|a\_n\|ρⁿ≤M. For \|x\|≤r, n\|a\_n\|\|x\|^{n−1}≤(M/ρ)n(r/ρ)^{n−1}.
2. The numerical majorant converges because r/ρ&lt;1. The derivative series therefore converges uniformly on \[−r,r\] to a continuous function g. The original power series also converges uniformly there by the corresponding geometric bound.
3. For partial polynomials S\_N, the fundamental theorem gives S\_N(x)=a₀+∫₀ˣS\_N′(t)dt. Uniform derivative convergence allows passing to the limit in the integrals, yielding f(x)=a₀+∫₀ˣg(t)dt.
4. The fundamental theorem now gives f′=g on (−r,r). Since r&lt;R was arbitrary, the derivative identity holds throughout \|x\|&lt;R. No endpoint differentiation is asserted.

**Self-assessment rubric**

- Chooses an intermediate radius and derives a bounded coefficient estimate.
- Controls derivative terms by a summable n q^{n−1} majorant on a smaller interval.
- Passes through the polynomial integral identity using uniform convergence.
- Obtains the derivative of the sum via FTC and limits the conclusion to the radius interior.

</details>
