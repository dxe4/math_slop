# Recover the period of an invariant circle from Cartesian equations

*Medium · [Differential equations problems](index.md)*

Consider $x'=x(1-x^2-y^2)-2y$, y'=y(1-x^2-y^2)+2x. The unit circle is invariant. If T is its minimal orbit period, find T/pi.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested phase-plane invariant or normalized observation only; no stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Use r'=(x\*x'+y\*y')/r and theta'=(x\*y'-y\*x')/r^2.

</details>

<details>
<summary>Hint 2</summary>

A full circuit changes the angle by 2\*pi.

</details>

<details>
<summary>Worked solution</summary>

Radial and angular equations separate the invariant cycle from nearby motion.

1. The polar equations are rprime=r\*(1-r^2) and thetaprime=2.
2. On r=1 the radius remains constant and the angle increases strictly at speed two.
3. The first return occurs after 2\*pi/2=pi, so T/pi=1.

</details>
