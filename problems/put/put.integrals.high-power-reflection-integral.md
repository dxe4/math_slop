# Use a complementary-angle symmetry

*Hard · [Original Putnam-style training](index.md)*

Let $I=\int_0^{\pi/2}\frac{\sin^{2026}x}{\sin^{2026}x+\cos^{2026}x}\,dx$. Find $I/\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Reflect the integration variable about the midpoint of the interval.

</details>

<details>
<summary>Hint 2</summary>

The reflected integrand and the original integrand add to one.

</details>

<details>
<summary>Worked solution</summary>

The exponent size is irrelevant once the reflection symmetry is recognized.

1. The denominator is positive on the entire interval, so the integrand is continuous.
2. The substitution x=pi/2-t gives $I=\int_0^{\pi/2}\cos^{2026}t/(\sin^{2026}t+\cos^{2026}t)\,dt$.
3. Adding gives 2I=pi/2. Hence $I/\pi=1/4$.

</details>
