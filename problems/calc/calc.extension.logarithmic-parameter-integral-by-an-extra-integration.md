# Evaluate a logarithmic quotient by introducing a parameter integral

*Hard · [Calculus](index.md)*

For a&gt;0 prove $\int_0^1(x^a-1)/\log x\,dx=\log(a+1)$. Interpret the quotient at x=1 by its continuous extension and justify its behavior at zero and the interchange you use. You may use Fubini for bounded Riemann-integrable functions on a rectangle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For 0&lt;x&lt;1 write the quotient as ∫₀ᵃxᵗdt.

</details>

<details>
<summary>Hint 2</summary>

The function xᵗ is bounded on the rectangle and has only a possible discontinuity at the corner (0,0) after extending the zero edge.

</details>

<details>
<summary>Model proof</summary>

An extra finite parameter integration turns the quotient by a logarithm into a bounded two-variable integral.

1. For 0&lt;x&lt;1 the fundamental theorem in t gives ∫₀ᵃxᵗdt=(xᵃ−1)/log x. This tends to a as x→1 and to zero as x→0, so the one-variable integrand has continuous endpoint extensions.
2. On \[0,1\]×\[0,a\], define xᵗ=0 on x=0,t&gt;0, and assign any bounded value at (0,0). It is bounded by 1 and continuous except possibly that one corner. Hence it is Riemann integrable, and the stated Fubini theorem applies.
3. Interchange the finite integrations to obtain ∫₀ᵃ\[∫₀¹xᵗdx\]dt. For t≥0 the inner integral is 1/(t+1).
4. The final integral is ∫₀ᵃdt/(t+1)=log(a+1). The endpoint extensions and bounded rectangle justify the computation without formal differentiation of an unverified improper integral.

**Self-assessment rubric**

- Represents the quotient by the t-integral and establishes both endpoint limits.
- Defines the rectangle integrand and checks bounded Riemann integrability before interchange.
- Evaluates the inner power integral and remaining logarithm with the correct bounds.

</details>
