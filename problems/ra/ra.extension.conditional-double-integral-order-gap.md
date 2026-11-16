# Compute an integration-order gap and verify the missing absolute hypothesis

*Medium · [Real analysis](index.md)*

For $f(x,y)=(x^2-y^2)/(x^2+y^2)^2$ on (0,1)^2, let A=integral\_0^1 \[integral\_0^1 f(x,y)dy\]dx and B be the opposite order. The inner endpoint integrals are interpreted with the other coordinate fixed positive. Find (A-B)/pi and explain why this does not contradict the absolute-integrability form of Fubini's theorem.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The y primitive is y/(x^2+y^2); the x primitive has a minus sign.

</details>

<details>
<summary>Hint 2</summary>

Near the origin, polar coordinates expose a radial 1/r absolute-integral divergence.

</details>

<details>
<summary>Worked solution</summary>

Both iterated integrals can exist without the double absolute integral existing.

1. For fixed x&gt;0, integrating in y gives 1/(1+x^2), so A=pi/4. For fixed y&gt;0, integrating in x gives -1/(1+y^2), so B=-pi/4.
2. Hence (A-B)/pi=(pi/2)/pi=1/2.
3. On a small first-quadrant sector near zero, \|f\|=\|cos(2theta)\|/r^2. Choose an angular subinterval where \|cos(2theta)\| is bounded below by a positive constant. The area factor r leaves a divergent integral of dr/r, so f is not absolutely integrable. Thus Fubini's absolute hypothesis is absent.

</details>
