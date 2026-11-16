# Prove conditional convergence without evaluating the integral

*Hard · [Calculus](index.md)*

Prove $\int_0^\infty\sin x/x\,dx$ converges as an ordinary improper integral but is not absolutely convergent. Do not evaluate its sum. Supply a tail bound and a divergent comparison for the absolute integral.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The zero endpoint is removable; on a positive tail integrate by parts using the bounded primitive of sine.

</details>

<details>
<summary>Hint 2</summary>

On the middle third of each sufficiently late half-period, \|sin x\| is bounded below by a fixed positive constant.

</details>

<details>
<summary>Model proof</summary>

Oscillation gives a Cauchy tail bound while absolute values restore a harmonic-size positive contribution.

1. At zero sin x/x extends continuously with value 1, so the finite near-zero part converges. For B&gt;A≥1, integration by parts gives ∫\_A^Bsin x/x dx=\[−cos x/x\]\_A^B−∫\_A^Bcos x/x²dx.
2. The absolute value of that tail is at most 1/B+1/A+∫\_A^B x⁻²dx=2/A. Thus the tails satisfy the improper Cauchy criterion and the integral converges.
3. For integers k≥1, on \[kπ+π/6,kπ+5π/6\], \|sin x\|≥1/2 and x≤(k+1)π. The absolute integral over this interval is at least (1/2)(2π/3)/((k+1)π)=1/\[3(k+1)\].
4. These disjoint contributions dominate a divergent harmonic tail, so ∫₀∞\|sin x\|/x dx diverges. The original integral is conditionally, rather than absolutely, convergent; no value for its sum was needed.

**Self-assessment rubric**

- Uses the removable sine quotient limit to justify the finite initial part.
- Derives a uniform integration-by-parts tail bound tending to zero.
- Finds disjoint intervals with a fixed sine lower bound and harmonic-size contributions.
- Concludes conditional convergence and does not identify it with an absolute-convergence or value claim.

</details>
