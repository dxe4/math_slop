# Prove A-stability by bounding the reciprocal root disk

*Hard · [Differential equations problems](index.md)*

For BDF2 on y'=lambda\*y, a characteristic multiplier r satisfies $(3-2z)r^2-4r+1=0$, z=h\*lambda. Prove that if Re z&lt;0 then every characteristic root has \|r\|&lt;1. Treat any degenerate leading-coefficient concern explicitly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume a root has \|r\|&gt;=1 and put w=1/r.

</details>

<details>
<summary>Hint 2</summary>

Use \|w\|&lt;=1 to bound the real part of (3-4w+w^2)/2.

</details>

<details>
<summary>Model proof</summary>

The reciprocal unit disk maps into the closed right half-plane under the root relation.

1. When Re z&lt;0, 3-2z is nonzero, so the recurrence remains genuinely quadratic. Any root with \|r\|&gt;=1 is nonzero and gives w=1/r with \|w\|&lt;=1, and z=(3-4w+w^2)/2.
2. Write w=u+i\*v. Then Re(2z)=3-4u+u^2-v^2. Since v^2&lt;=1-u^2, this is at least 2-4u+2u^2=2\*(u-1)^2&gt;=0.
3. This contradicts Re z&lt;0. Therefore every characteristic root lies strictly inside the unit circle, proving the asserted absolute-stability property.

**Self-assessment rubric**

- Handle the leading coefficient and derive the reciprocal-root formula.
- Use the whole unit-disk constraint to obtain the real-part inequality.
- Translate the contradiction into strict root contraction for every root.

</details>
