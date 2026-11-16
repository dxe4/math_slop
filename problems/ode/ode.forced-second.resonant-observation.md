# Evaluate a resonant oscillator response

*Hard · [Differential equations problems](index.md)*

For $y^{\prime\prime}+y=\sin t$, $y(0)=y^{\prime}(0)=0$, find $y(\pi)/\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The forcing is already a homogeneous mode, so a resonant trial needs a time factor.

</details>

<details>
<summary>Hint 2</summary>

Add a homogeneous correction to satisfy the zero initial velocity.

</details>

<details>
<summary>Worked solution</summary>

A time-weighted particular solution handles resonance, while the initial data fix the remaining oscillation.

1. A particular solution is $-t\cos t/2$. Adding $A\cos t+B\sin t$ and imposing the data gives $A=0$, $B=1/2$.
2. Hence $y=(\sin t-t\cos t)/2$. Its derivative is $t\sin t/2$, and its second derivative plus itself is $\sin t$.
3. Both initial values vanish.
4. At $t=\pi$, $y=\pi/2$, so the requested normalized value is $1/2$.

</details>
