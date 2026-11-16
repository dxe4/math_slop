# Superpose shifted oscillator responses with their phases

*Medium · [Differential equations problems](index.md)*

A unit oscillator starts with y(0)=y'(0)=0 and receives velocity jumps of 2 at t=pi/2 and 3 at t=pi. Between jumps it obeys $y''+y=0$, and y is continuous. Find y(3\*pi/2).

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

An impulse J at time a contributes J\*sin(t-a) for t&gt;=a.

</details>

<details>
<summary>Hint 2</summary>

At the observation time, the two phase delays are different.

</details>

<details>
<summary>Worked solution</summary>

Linear superposition retains each impulse's own phase.

1. The first jump contributes 2\*sin(t-pi/2) after t=pi/2.
2. The second contributes 3\*sin(t-pi) after t=pi.
3. At t=3\*pi/2 the first term is 2\*sin pi=0 and the second is 3\*sin(pi/2)=3, so the total is three.

</details>
