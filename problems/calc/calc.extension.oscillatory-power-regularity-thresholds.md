# Classify continuity and C¹ thresholds for an oscillatory power

*Hard · [Calculus](index.md)*

For real α define f\_α(0)=0 and $f_\alpha(x)=|x|^\alpha\sin(1/x)$ for x≠0. Determine exactly when it is continuous at 0, differentiable at 0, and has derivative continuous at 0. Prove necessity at each boundary and do not infer derivative continuity from differentiability alone.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For continuity and the derivative quotient compare powers of \|x\| with the oscillating sine.

</details>

<details>
<summary>Hint 2</summary>

Away from zero, the derivative contains a cosine term of magnitude \|x\|^{α−2}; choose phase sequences to test the thresholds.

</details>

<details>
<summary>Model proof</summary>

Each differentiation consumes a different amount of damping because the reciprocal phase contributes another inverse power.

1. The bound \|f\_α(x)\|≤\|x\|^α proves continuity for α&gt;0. Along positive sequences with 1/x=π/2+2πn the sine is 1, so for α=0 values stay 1 and for α&lt;0 they are unbounded. Thus continuity holds exactly for α&gt;0.
2. The difference quotient at zero is sign(x)\|x\|^{α−1}sin(1/x). It tends to 0 for α&gt;1. At α=1 it oscillates along positive phase sequences, and for α&lt;1 those sequences are unbounded or, when applicable, give incompatible limits. Hence differentiability occurs exactly for α&gt;1, with f\_α′(0)=0.
3. For x≠0, f\_α′(x)=α sign(x)\|x\|^{α−1}sin(1/x)−\|x\|^{α−2}cos(1/x). If α&gt;2 both terms tend to zero, so the derivative is continuous at zero.
4. For 1&lt;α≤2 choose x\_n=1/(2πn), where sine is zero and cosine one. The derivative is −x\_n^{α−2}, which equals −1 at α=2 and is unbounded for 1&lt;α&lt;2. It cannot tend to the value zero at the origin. For α≤1 the derivative at zero does not exist, so no continuous derivative is possible. The C¹ threshold is therefore exactly α&gt;2.

**Self-assessment rubric**

- Proves sufficiency by a power bound and necessity with explicit sine-phase sequences.
- Calculates the origin difference quotient and establishes exactly α&gt;1.
- Differentiates both the absolute power and reciprocal phase with correct signs and powers.
- Proves exactly α&gt;2 using explicit cosine-phase sequences and handles the other parameter regimes.

</details>
