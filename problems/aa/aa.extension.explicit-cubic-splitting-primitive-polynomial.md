# Recover both generators from one mixed primitive element

*Medium · [Abstract algebra problems](index.md)*

Let alpha be the real cube root of two and zeta a nonreal cube root of unity. For $\theta=\alpha+\zeta$, find its monic minimal polynomial over Q as a coefficient vector in increasing degree order. Prove theta generates Q(alpha,zeta).

```answer
{"answer":{"kind":"vector","expected":["9","9","0","3","6","3","1"],"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Expand(theta-zeta)^3=2 and reduce zeta^2=-zeta-1.

</details>

<details>
<summary>Hint 2</summary>

Solve the resulting linear relation for zeta and use its quadratic equation.

</details>

<details>
<summary>Worked solution</summary>

A reduced linear relation recovers the generators and proves the computed annihilator is minimal.

1. Expanding gives theta^3-3theta-3=(3theta^2+3theta)\*zeta. Since theta is nonreal, neither theta nor theta+1 vanishes, so the denominator is nonzero. This recovers zeta rationally from theta and then alpha=theta-zeta.
2. The field Q(alpha) has degree three by Eisenstein, is real, and does not contain zeta, whose quadratic remains irreducible there. Thus Q(alpha,zeta) has degree six, and the recovery proves theta also has degree six.
3. Put A=X^3-3X-3 and B=3X^2+3X. The identity zeta^2+zeta+1=0 gives A^2+A\*B+B^2 as an annihilator. Expansion is X^6+3X^5+6X^4+3X^3+9X+9.
4. It is monic of degree six, hence minimal. The requested coefficient vector is\[9,9,0,3,6,3,1\].

</details>
