# Integrate a square root by a quarter-circle substitution

*Medium · [Calculus](index.md)*

For $I=\int_0^1\sqrt{1-x^2}\,dx$, find I/π by the substitution x=sinθ, 0≤θ≤π/2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The positive square root becomes cosθ on this interval.

</details>

<details>
<summary>Hint 2</summary>

The differential contributes a second cosine factor.

</details>

<details>
<summary>Worked solution</summary>

A branch-controlled trigonometric substitution matches the root geometry.

1. With x=sinθ, dx=cosθdθ and √(1−x²)=cosθ≥0. Thus I=∫₀^{π/2}cos²θdθ.
2. Use cos²θ=(1+cos2θ)/2. The oscillating term integrates to zero at these endpoints, leaving π/4.
3. Hence I/π=1/4.

</details>
