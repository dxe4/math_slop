# Derive the sharp coefficient estimate from a positive harmonic part

*Hard · [Complex analysis problems](index.md)*

Let f(z)=sum a\_n z^n be holomorphic on the unit disk with Re f(z)&gt;=0. Prove $|a_n|\le2\operatorname{Re}a_0$ for every n&gt;=1. Show the constant two cannot be decreased.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The positive real part has mean value Re a\_0 on every centered circle.

</details>

<details>
<summary>Hint 2</summary>

Its nth Fourier coefficient is a\_n\*r^n/2; estimate it using positivity.

</details>

<details>
<summary>Model proof</summary>

Positivity turns the harmonic Fourier identity into a coefficient bound.

1. Put u=Re f. On a circle of radius r&lt;1, the power series and its conjugate give a\_n\*r^n=(1/pi) integral from 0 to 2\*pi of u(r\*e^(it))\*e^(-int) dt, for n&gt;=1.
2. Taking absolute values and using u&gt;=0 bounds this by (1/pi) integral u=2\*Re a\_0, by the harmonic mean-value property. Let r increase to one.
3. For f(z)=(1+z)/(1-z), the real part equals (1-\|z\|^2)/\|1-z\|^2&gt;0 and every positive-degree coefficient is two, while a\_0=1. Thus the constant is sharp.

**Self-assessment rubric**

- Obtain the coefficient identity with its factor of two.
- Use positivity and the mean-value property before taking the radial limit.
- Verify a function attaining the proposed constant.

</details>
