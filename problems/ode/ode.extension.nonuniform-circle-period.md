# Integrate a variable angular speed around an invariant cycle

*Hard · [Differential equations problems](index.md)*

For $x'=x(1-x^2-y^2)-y(2+x)$, y'=y(1-x^2-y^2)+x(2+x), let T be the minimal period on the unit circle. Find T^2/pi^2. Derive the period integral rather than assuming uniform angular speed.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":3},"checker_scope":"Exact requested phase-plane invariant or normalized observation only; no stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

On the circle, the angular speed is 2+cos(theta), which is everywhere positive.

</details>

<details>
<summary>Hint 2</summary>

Use the tangent half-angle substitution on the integral of 1/(2+cos(theta)).

</details>

<details>
<summary>Worked solution</summary>

An invariant circle need not have constant angular speed.

1. Polar differentiation gives rprime=r\*(1-r^2) and thetaprime=2+r\*cos(theta). On r=1, the angle increases strictly, so one circuit has time T=integral\_0^(2\*pi) dtheta/(2+cos(theta)).
2. Write the integral instead from -pi to pi and set u=tan(theta/2). Then dtheta=2du/(1+u^2) and 2+cos(theta)=(3+u^2)/(1+u^2), so T=integral over the real line of 2du/(u^2+3)=2\*pi/sqrt(3).
3. Strict angular increase makes this the minimal positive return time. Squaring and dividing by pi^2 gives 4/3.

</details>
