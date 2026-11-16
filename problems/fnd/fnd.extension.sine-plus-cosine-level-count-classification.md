# Classify the number of angle solutions of a shifted sinusoid

*Hard · [Foundations bridge](index.md)*

For each real parameter a determine the number of solutions θ∈\[0,2π) to $\sin\theta+\cos\theta=a$. Include all transition values and explain why using a half-open full turn avoids counting an endpoint twice.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Rewrite the left side as one sine with a phase shift.

</details>

<details>
<summary>Hint 2</summary>

On a full turn, a nonextreme interior level is crossed twice, while each extreme is reached once.

</details>

<details>
<summary>Model proof</summary>

Amplitude and phase convert the parameter question into exact level counts on one complete period.

1. The addition identity gives sinθ+cosθ=√2 sin(θ+π/4). Thus every output lies in \[−√2,√2\].
2. If \|a\|&gt;√2 there are no solutions. If a=√2 or a=−√2, the sine reaches the corresponding extreme once in each half-open period, so there is one solution.
3. If \|a\|&lt;√2, the horizontal level a/√2 lies strictly between −1 and 1 and is attained at exactly two angles in a full half-open sine period. This follows from strict monotonicity on the two arcs between its extrema.
4. The shifted angle ranges over \[π/4,9π/4), still one complete half-open period. Its endpoint values represent the same circle point, so including one and excluding the other preserves exactly these counts.

**Self-assessment rubric**

- Derives √2 sin(θ+π/4) with the correct phase and amplitude.
- Gives zero, one or two solutions in all parameter regimes including both extremes.
- Justifies the interior-level multiplicity and half-open endpoint convention.

</details>
