# Evaluate an absolutely convergent reciprocal-antisymmetric integral

*Hard · [Calculus](index.md)*

Evaluate $\int_0^\infty\log x/(1+x^2)\,dx$. Prove absolute convergence before using x=1/u to cancel its two pieces.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Near zero compare absolute value with −log x.

</details>

<details>
<summary>Hint 2</summary>

For the tail use log x/x², then substitute the reciprocal in the \[1,∞) part.

</details>

<details>
<summary>Worked solution</summary>

Reciprocal symmetry is legitimate only after endpoint convergence is controlled.

1. On (0,1\], \|log x\|/(1+x²)≤−log x, whose integral is 1. On \[1,∞), the integrand’s absolute value is at most log x/x², with finite integral 1 by parts. Thus the full integral is absolutely convergent.
2. Split it as I₀=∫₀¹log x/(1+x²)dx and I∞=∫₁∞log x/(1+x²)dx, both finite.
3. With x=1/u in the tail, dx=−du/u² and log x=−log u. The transformed integral is −∫₀¹log u/(1+u²)du=−I₀.
4. Hence I=I₀+I∞=0. This is an ordinary absolutely convergent improper integral, not a principal-value cancellation of divergent pieces.

</details>
