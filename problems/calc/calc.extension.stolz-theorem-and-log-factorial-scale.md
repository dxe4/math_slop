# Prove Stolz’s theorem and apply it to a factorial scale

*Hard · [Calculus](index.md)*

Let b\_n be strictly increasing with b\_n→+∞. If (a\_(n+1)−a\_n)/(b\_(n+1)−b\_n)→L∈R, prove $a_n/b_n\to L$. Apply your theorem to calculate lim log(n!)/(n log n). Prove the required increment-ratio limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Bound all sufficiently late increments between (L−ε)Δb and (L+ε)Δb, then sum them.

</details>

<details>
<summary>Hint 2</summary>

For b\_n=n log n, the mean value theorem represents Δb as log c+1 for c between n and n+1.

</details>

<details>
<summary>Model proof</summary>

A ratio of cumulative changes inherits the common late ratio of its positive denominator increments.

1. For ε&gt;0 choose N so (L−ε)Δb\_k≤Δa\_k≤(L+ε)Δb\_k for k≥N. Sum to get (L−ε)(b\_n−b\_N)≤a\_n−a\_N≤(L+ε)(b\_n−b\_N).
2. Eventually b\_n&gt;0. Divide by b\_n and let n→∞; the fixed a\_N,b\_N contributions vanish. This bounds the lower and upper limits by L−ε and L+ε, proving the theorem as ε is arbitrary.
3. For a\_n=log(n!) and b\_n=n log n with n≥2, Δa\_n=log(n+1). By the mean value theorem Δb\_n=log c\_n+1 for n&lt;c\_n&lt;n+1.
4. The ratio log(n+1)/(log c\_n+1) tends to 1, since log n≤log c\_n≤log(n+1) and the additive 1 is negligible. The theorem therefore gives lim log(n!)/(n log n)=1.

**Self-assessment rubric**

- Forms and sums the correct late increment inequalities using Δb&gt;0.
- Divides by the eventually positive b\_n and eliminates finite initial constants.
- Computes both example increments, including a valid mean-value point for b.
- Proves the increment ratio tends to one and obtains the factorial asymptotic scale.

</details>
