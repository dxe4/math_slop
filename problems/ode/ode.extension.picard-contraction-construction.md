# Construct local existence and uniqueness through a complete function space

*Hard · [Differential equations problems](index.md)*

Suppose f is continuous on $[t_0-a,t_0+a]\times[y_0-b,y_0+b]$, bounded by M&gt;0, and Lipschitz in y there with constant L&gt;=0. Prove local existence and uniqueness by the Picard operator, choosing h&lt;=a, h\*M&lt;=b and h\*L&lt;1. Specify the complete function space and the uniqueness scope.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use continuous paths staying inside the closed state interval.

</details>

<details>
<summary>Hint 2</summary>

Verify separately that the integral operator stays in the space and is a contraction.

</details>

<details>
<summary>Model proof</summary>

A fixed-point construction requires an invariant complete space before a contraction estimate.

1. On J=\[t\_0-h,t\_0+h\], take the closed subset S of C(J) consisting of paths with sup\_J \|u-y\_0\|&lt;=b. It is complete in the sup norm. Define Tu(t)=y\_0+integral\_(t\_0)^t f(s,u(s)) ds.
2. The speed bound gives \|Tu-y\_0\|&lt;=h\*M&lt;=b, so T maps S into itself. The Lipschitz estimate gives \|\|Tu-Tv\|\|\_infinity&lt;=h\*L\*\|\|u-v\|\|\_infinity, strictly contractive.
3. Banach's fixed-point theorem gives a unique path in S satisfying the integral equation. Continuity of the integrand makes it C^1 and solves the initial-value problem. Any other solution staying in the rectangle on J satisfies the same integral equation and is that fixed point; any local solution has such a shorter common interval by continuity, giving local uniqueness.

**Self-assessment rubric**

- Specify a closed complete path space and prove the operator preserves it.
- Derive a uniform contraction factor below one.
- Turn the fixed point into a differentiable solution and state the legitimate uniqueness interval.

</details>
