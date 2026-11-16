# Prove a natural boundary through dense radial singularities

*Hard · [Complex analysis problems](index.md)*

Prove that $F(z)=\sum_{n=1}^{\infty}z^{n!}$ is holomorphic for \|z\|&lt;1 and has the unit circle as a natural boundary: it admits no analytic continuation across any nonempty open arc.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At any root of unity, all sufficiently late factorial exponents are divisible by its order.

</details>

<details>
<summary>Hint 2</summary>

Approach that root radially and compare any fixed finite block of the positive tail with its limiting value.

</details>

<details>
<summary>Model proof</summary>

Dense root-of-unity singularities obstruct continuation across every arc.

1. For every r&lt;1, the series converges uniformly on \|z\|&lt;=r, since n!&gt;=n and sum r^n converges. Hence F is holomorphic in the disk.
2. If zeta has order q, then zeta^(n!)=1 for n&gt;=q. Along r\*zeta, these late terms are the positive real numbers r^(n!). As r increases to one, any chosen finite block tends to the number of terms in that block. Thus the real part of the tail tends to positive infinity, while the finitely many initial terms stay bounded.
3. Therefore F has no holomorphic extension through any root of unity. Every nonempty unit-circle arc contains such a point; an analytic continuation across an arc would supply an extension near it, a contradiction.

**Self-assessment rubric**

- Establish holomorphy by uniform convergence on compact subdisks.
- Prove divergence at every root of unity without interchanging an uncontrolled infinite limit.
- Use density to rule out continuation across any open arc.

</details>
