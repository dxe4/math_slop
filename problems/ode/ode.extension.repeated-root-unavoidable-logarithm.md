# Prove the logarithmic second branch from reduction of order

*Hard · [Differential equations problems](index.md)*

Near t=0 consider $y''+(1/t)y'+y=0$ on t&gt;0. Let y\_1 be its even analytic solution with y\_1(0)=1. Prove there is a second solution y\_2=y\_1\*log(t)+h(t), with h even analytic near zero, and that every solution independent of y\_1 has a nonzero logarithmic term.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Reduction of order gives y\_1 times a primitive of 1/(t\*y\_1^2).

</details>

<details>
<summary>Hint 2</summary>

Separate the simple reciprocal term from its analytic even correction.

</details>

<details>
<summary>Model proof</summary>

The Wronskian singularity forces the logarithm, while parity controls the analytic correction.

1. Since y\_1(0)=1, it is nonzero near zero. Reduction of order gives y\_2=y\_1\*integral dt/\[t\*y\_1(t)^2\], whose Wronskian with y\_1 is 1/t and is nonzero.
2. The function U=1/y\_1^2 is even analytic with U(0)=1. Hence (U-1)/t is odd analytic. Its primitive can be chosen even analytic, call it H. Therefore the primitive of U/t is log(t)+H(t), and y\_2=y\_1\*log(t)+h with h=y\_1\*H even analytic.
3. Every solution on a sufficiently small positive interval is a linear combination c\_1\*y\_1+c\_2\*y\_2. Independence from y\_1 requires c\_2 nonzero, so the coefficient multiplying y\_1\*log(t) cannot vanish. Thus no independent analytic second branch exists.

**Self-assessment rubric**

- Construct the second solution and verify its nonzero Wronskian.
- Separate the logarithmic integral and prove the correction is even analytic.
- Use the full solution span to show every independent branch retains a logarithm.

</details>
