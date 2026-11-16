# Construct a smooth flat function with a zero Taylor series

*Hard · [Calculus](index.md)*

Define f(0)=0 and $f(x)=\exp(-1/x^2)$ for x≠0. Prove f is C∞ on R, every derivative at zero vanishes, and its Taylor series at zero does not equal f on any neighborhood. You may use eᵘ≥uᵏ/k! for u≥0 and integer k≥0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Show any power of 1/\|x\| times exp(−1/x²) tends to zero.

</details>

<details>
<summary>Hint 2</summary>

Induct on derivative order using a polynomial in 1/x; verify the derivative at zero from a quotient rather than only an off-origin formula.

</details>

<details>
<summary>Model proof</summary>

Exponential damping beats every inverse power and makes all derivatives flat without forcing local constancy.

1. For any fixed m≥0 choose an integer k with 2k&gt;m. The supplied inequality with u=1/x² gives \|x\|^{−m}e^{−1/x²}≤k!\|x\|^{2k−m}→0. This controls every polynomial in 1/x times the exponential.
2. Away from zero, f^{(n)}(x)=P\_n(1/x)e^{−1/x²}, with P₀=1 and P\_{n+1}(t)=−t²P\_n′(t)+2t³P\_n(t), by the chain and product rules. Each P\_n is a polynomial.
3. Extend each displayed derivative by zero at the origin. The power estimate makes it continuous there. Its difference quotient at zero is P\_n(1/h)e^{−1/h²}/h and also tends to zero, so its derivative at zero exists and equals the extended next derivative. Induction proves f is C∞ and f^{(n)}(0)=0 for every n.
4. All Taylor coefficients at zero are therefore zero, so the Taylor series represents the zero function. But f(x)&gt;0 for every x≠0. Every neighborhood contains such inputs, hence smoothness does not make this Taylor series equal to f locally.

**Self-assessment rubric**

- Derives a quantitative inverse-power times exponential limit from the stated inequality.
- Obtains the polynomial recurrence for every off-origin derivative.
- Checks continuity and the actual derivative quotient at zero at every induction stage.
- Uses the zero coefficients and positive nearby values to distinguish smoothness from equality to the Taylor series.

</details>
