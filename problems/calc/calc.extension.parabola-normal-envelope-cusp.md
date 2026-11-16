# Derive the envelope of all parabola normals without losing the vertex

*Hard · [Calculus](index.md)*

Parametrize $y=x^2$ by (t,t²). Find the envelope of its normal lines by solving N(t;X,Y)=0 and ∂N/∂t=0 for a normal-line equation N. Derive its cusp equation and location. Use an equation valid also at t=0, where division by the tangent slope would fail.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The vector from (t,t²) to (X,Y) is normal when its dot product with (1,2t) is zero.

</details>

<details>
<summary>Hint 2</summary>

Differentiate that line equation with respect to t and eliminate t after solving for X,Y.

</details>

<details>
<summary>Model proof</summary>

An implicit normal-line equation avoids discarding the vertex normal and exposes the envelope’s cusp.

1. The tangent direction is (1,2t). The normal line therefore has equation N=X−t+2t(Y−t²)=X+2tY−t−2t³=0, valid at t=0 as well.
2. The envelope condition N\_t=2Y−1−6t²=0 gives Y=1/2+3t². Substitution into N gives X=−4t³.
3. Eliminating t yields 27X²=16(Y−1/2)³ with Y≥1/2. Conversely every point on this upper semicubical curve has the displayed real parametrization, with the sign of t fixed by X.
4. At t=0 the envelope is (0,1/2). Its displacement is (−4t³,3t²), with a vanishing first parameter derivative and a single vertical limiting tangent, forming a cusp. The original normal at the parabola vertex is X=0 and was preserved by N.

**Self-assessment rubric**

- Builds a dot-product normal equation valid even when t=0.
- Solves both N=0 and N\_t=0 with the correct parametrization.
- Derives the cusp equation with its necessary Y≥1/2 restriction and parametrization converse.
- Locates the cusp and checks the vertex normal was not lost by division.

</details>
