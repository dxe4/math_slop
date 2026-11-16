# Find and justify the maximal interval inverse branches

*Hard · [Foundations bridge](index.md)*

For $f(x)=x^2-4x+1$ on R, find all maximal interval restrictions on which f is injective and give each inverse rule with its domain. Prove the restrictions are maximal among intervals, not merely that your two choices work.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Complete the square around the axis x=2.

</details>

<details>
<summary>Hint 2</summary>

On each side the distance from 2 is monotone; an interval crossing 2 contains an equal-distance pair.

</details>

<details>
<summary>Model proof</summary>

The same squared distance creates the two branches and proves that crossing the vertex destroys injectivity.

1. Complete the square: f(x)=(x−2)²−3. It is strictly decreasing on (−∞,2\] and strictly increasing on \[2,∞), so both restrictions are injective and have range \[−3,∞).
2. Solving y=(x−2)²−3 gives x=2±√(y+3). The left restriction has inverse 2−√(y+3), and the right restriction has inverse 2+√(y+3), both for y≥−3.
3. If an interval contains a point below 2 and a point above 2, it contains 2−ε and 2+ε for some ε&gt;0. These distinct points have the same output ε²−3, so the interval is not an injective restriction.
4. Every injective interval is therefore contained in one of the two displayed half-lines. Any proper subinterval can be enlarged within that half-line, while neither full half-line can extend across 2. Hence these are exactly the maximal intervals.

**Self-assessment rubric**

- Completes the square and proves injectivity and range on both half-lines.
- Selects each signed root and states its common output domain y≥−3.
- Uses symmetric inputs to rule out every interval crossing the vertex and concludes exact maximality.

</details>
