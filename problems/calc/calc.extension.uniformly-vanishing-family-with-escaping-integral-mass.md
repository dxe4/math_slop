# Show uniform convergence can fail to preserve integrals on an infinite domain

*Hard · [Calculus](index.md)*

For 0≤a≤1 and x≥0 set $f_a(x)=a/(1+ax)^2$. Compute F(a)=∫₀∞f\_a(x)dx, prove f\_a→0 uniformly as a→0⁺, and prove no single integrable nonnegative function dominates all f\_a for 0&lt;a≤1. Explain the discontinuity of F at zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a&gt;0 the substitution u=1+ax gives a fixed improper value.

</details>

<details>
<summary>Hint 2</summary>

To bound any proposed dominator from below, for x≥1 choose the allowed parameter a=1/x.

</details>

<details>
<summary>Model proof</summary>

Uniformly small heights can spread over an unbounded length and retain a nonzero total mass.

1. For a&gt;0, F(a)=\[−1/(1+ax)\]₀∞=1. At a=0, f₀ is identically zero, so F(0)=0. The integral function is therefore discontinuous at zero.
2. For all x≥0, 0≤f\_a(x)≤a, with equality at x=0. Thus sup\_x f\_a(x)=a→0, proving uniform convergence on the entire half-line.
3. If an integrable G dominated every 0&lt;a≤1, then for x≥1 choose a=1/x. This gives G(x)≥(1/x)/(1+1)²=1/(4x), whose tail integral diverges. Hence no such integrable dominator exists.
4. There is no contradiction with finite-interval uniform integral convergence: the common domain here has infinite length. The mass escapes toward larger x as a decreases, so pointwise parameter smoothness and uniform height convergence alone do not justify interchanging this infinite-domain limit and integral.

**Self-assessment rubric**

- Computes F(a) separately for a&gt;0 and a=0 with valid improper endpoints.
- Finds the exact uniform supremum a and proves uniform convergence.
- Chooses a depending on x to force a nonintegrable harmonic lower bound.
- Explains the infinite-domain mass issue and the actual discontinuity of the integral function.

</details>
