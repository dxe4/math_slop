# Derive an interior Laplace asymptotic from a quadratic minimum

*Hard · [Calculus](index.md)*

Let g∈C²\[a,b\] have its unique global minimum at c∈(a,b), with g(c)=0 and g″(c)=λ&gt;0, and let f be continuous. Prove $\sqrt n\int_a^b e^{-ng(x)}f(x)\,dx\to f(c)\sqrt{2\pi/\lambda}$. You may use the Gaussian integral. Justify both local rescaling and the discarded far region, even when f changes sign.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Near the minimum use Taylor expansion to obtain a uniform positive quadratic lower bound for g.

</details>

<details>
<summary>Hint 2</summary>

After u=√n(x−c), control bounded u by Taylor and continuity, and large u by a common Gaussian tail.

</details>

<details>
<summary>Model proof</summary>

Only a shrinking quadratic neighborhood survives; a fixed far region is exponentially smaller than the normalization.

1. Fermat gives g′(c)=0, so g(c+h)=λh²/2+o(h²). Choose δ&gt;0 with \[c−δ,c+δ\]⊂(a,b) and g(c+h)≥λh²/4 for \|h\|≤δ. Let M bound \|f\| on \[a,b\].
2. On the compact complement \|x−c\|≥δ, uniqueness of the minimum gives g(x)≥η&gt;0. The normalized absolute far contribution is at most √n M(b−a)e^{−nη}, which tends to zero.
3. In the remaining interval put u=√n(x−c). Its normalized integral is ∫\_{−δ√n}^{δ√n}e^{−ng(c+u/√n)}f(c+u/√n)du, bounded in absolute value by M e^{−λu²/4}. For every fixed bounded u interval, Taylor remainder and continuity give uniform convergence of its integrand to f(c)e^{−λu²/2}.
4. Given a tolerance, choose a fixed large U making the tails of both Gaussian majorants small, uniformly in n. On \[−U,U\] use the just-established uniform convergence; outside it use the bounds, extending the variable-domain integrand by zero. Thus the local integrals converge to f(c)∫\_R e^{−λu²/2}du.
5. Gaussian rescaling evaluates this as f(c)√(2π/λ). Adding the vanishing far contribution proves the limit. Absolute estimates throughout cover signed f without an unsupported positive-integrand interchange.

**Self-assessment rubric**

- Obtains the Taylor model and a positive uniform quadratic lower bound near c.
- Uses compactness and the unique minimum to get a positive far gap and exponential decay.
- Tracks the √n substitution and the local limiting integrand.
- Splits at a fixed rescaled cutoff and controls both tails by integrable Gaussian bounds.
- Evaluates the correct Gaussian constant and treats signed amplitudes legitimately.

</details>
