# Compute a spatial curve’s torsion

*Medium · [Calculus](index.md)*

For r(t)=(cos t,sin t,t), compute torsion $\tau=((r′\times r″)\cdot r‴)/\|r′\times r″\|^2$ at any t, using the displayed convention.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate through third order before forming the triple product.

</details>

<details>
<summary>Hint 2</summary>

Both the numerator and denominator simplify by sin²+cos².

</details>

<details>
<summary>Worked solution</summary>

Torsion uses three derivative orders and detects spatial twisting beyond planar curvature.

1. The derivatives are r′=(−sin t,cos t,1), r″=(−cos t,−sin t,0), r‴=(sin t,−cos t,0).
2. The cross product is (sin t,−cos t,1), whose squared norm is 2 and whose dot product with r‴ is 1.
3. Thus τ=1/2, independent of t; the denominator never vanishes.

</details>
