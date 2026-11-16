# Find the unique clamped bending-energy minimizer with an interior value

*Hard · [Calculus](index.md)*

Among C² real f on \[0,1\] satisfying f(0)=f(1)=f′(0)=f′(1)=0 and f(1/2)=1, minimize $E[f]=\int_0^1(f″)^2dx$. Prove the unique minimizer is q(x)=12x²−16x³ on \[0,1/2\] and q(x)=q(1−x) on \[1/2,1\]. Compute the minimum and justify the cancellation at the interior knot.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Check q,q′,q″ match at the midpoint, though q‴ need not.

</details>

<details>
<summary>Hint 2</summary>

For f=q+h integrate ∫q″h″ twice on each half; the jump in q‴ multiplies h(1/2)=0.

</details>

<details>
<summary>Model proof</summary>

A piecewise-cubic candidate makes the energy orthogonal to every admissible residual because its knot conditions match the constraints.

1. The left piece has q(0)=q′(0)=0,q(1/2)=1,q′(1/2)=0 and q″(1/2)=−24. Reflection gives the required right endpoint data and the same midpoint value, first derivative and second derivative, so q is C² and admissible. Its third derivative changes from −96 to +96, which the C² class permits.
2. On the left q″=24−96x; ∫₀^{1/2}(q″)²dx=96, and reflection doubles this to E\[q\]=192.
3. For any admissible f write h=f−q. It has zero endpoint values and endpoint slopes, and h(1/2)=0. On each half q⁽⁴⁾=0, so twice integrating by parts gives ∫q″h″ as endpoint values of q″h′−q‴h. The outer endpoint terms vanish. At the midpoint the combined term is (q″\_left−q″\_right)h′−(q‴\_left−q‴\_right)h=0, using continuity of q″ and h(1/2)=0.
4. Consequently E\[f\]=192+∫₀¹(h″)²dx≥192. Equality forces the continuous h″ to be zero, so h is affine; its zero endpoint data force h=0. Thus q is the unique minimizer and the exact minimum is 192.

**Self-assessment rubric**

- Checks all endpoint and midpoint constraints and C² matching, without requiring a nonexistent continuous third derivative.
- Computes the two equal half-energies and the total 192.
- Integrates separately and uses the correct midpoint continuity and zero-value terms.
- Splits off a nonnegative residual energy and proves equality only for q.

</details>
