# Derive a stationary travel-time equation and verify its cycloid branch

*Hard · [Calculus](index.md)*

For positive C² graphs with fixed endpoints, consider $J[y]=\int\sqrt{1+(y′)^2}/\sqrt y\,dx$ on a compact x interval. Derive the Euler–Lagrange condition from the first variation, obtain the first integral y(1+(y′)²)=C&gt;0, and verify x=a(t−sin t),y=a(1−cos t), a&gt;0, on 0&lt;t₁≤t≤t₂&lt;2π. Prove stationarity only, not global minimality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate J\[y+εh\] at zero for endpoint-zero variations h, then integrate the h′ term by parts.

</details>

<details>
<summary>Hint 2</summary>

Because the integrand has no explicit x, F−y′F\_p is constant along an Euler–Lagrange solution.

</details>

<details>
<summary>Model proof</summary>

The first variation supplies a necessary equation, and a regular positive cycloid segment solves it without a singular endpoint.

1. Put F(y,p)=√(1+p²)/√y. Since y stays positive on a compact interval, small smooth variations preserve positivity and differentiation is valid. The first variation is ∫(F\_y h+F\_p h′)dx=∫(F\_y−dF\_p/dx)h dx after the zero-endpoint boundary term vanishes. For this to vanish for all interior test variations, the continuous coefficient must be zero: if nonzero at a point, a same-sign localized variation would give a nonzero integral.
2. Along an Euler–Lagrange solution, d(F−pF\_p)/dx=F\_y p−p(dF\_p/dx)=0 because F has no explicit x. Here F−pF\_p=1/\[√y√(1+p²)\], so y(1+p²)=C&gt;0.
3. On the stated cycloid branch x′(t)=a(1−cos t)&gt;0 and y&gt;0. Thus it is a regular graph, with dy/dx=sin t/(1−cos t)=cot(t/2). Then y\[1+(dy/dx)²\]=2a sin²(t/2)csc²(t/2)=2a, constant.
4. For the regular cycloid slope p=cot(t/2), p is nonzero except possibly at the isolated midpoint t=π. Differentiating its constant first integral gives p(F\_y−dF\_p/dx)=0, so the Euler–Lagrange equation holds wherever p≠0 and extends across that midpoint by continuity. Substituting this equation back into the first-variation identity makes every fixed-endpoint first variation zero. Hence the stated positive branch is stationary. No cusp endpoint y=0 lies in the interval, and no global minimum is claimed from stationarity alone.

**Self-assessment rubric**

- Differentiates valid positive variations, removes the endpoint term and derives the Euler–Lagrange equation.
- Derives and evaluates the no-explicit-x conserved quantity with its positive constant.
- Checks x′&gt;0,y&gt;0 and verifies the exact cycloid first integral on the stipulated branch.
- Limits the conclusion to stationarity on regular positive segments rather than unsupported global minimality.

</details>
