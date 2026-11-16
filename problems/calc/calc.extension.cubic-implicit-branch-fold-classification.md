# Classify all branches and folds of an implicit cubic

*Hard · [Calculus](index.md)*

For the real curve $y^3-3y+x=0$, determine the number of distinct real y values over every real x. Locate every point at which y cannot be a C¹ graph of x, and justify the local graph claims away from those points.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Parametrize by y using x=3y−y³.

</details>

<details>
<summary>Hint 2</summary>

Analyze the three monotonic intervals separated by y=±1 and check the nonzero partial required for solving y.

</details>

<details>
<summary>Model proof</summary>

The graph count is controlled by the turning values of the projection onto the x-axis.

1. Set s(y)=3y−y³. Its derivative is 3(1−y²), so it decreases from +∞ to −2 on (−∞,−1\], increases from −2 to 2 on \[−1,1\], and decreases from 2 to −∞ on \[1,∞).
2. Consequently there are three distinct y values when \|x\|&lt;2, two when \|x\|=2 and one when \|x\|&gt;2. At x=2 the roots are y=1 and y=−2; at x=−2 they are y=−1 and y=2, so the shared turning roots are counted only once.
3. The partial F\_y=3y²−3 is nonzero unless y=±1. Everywhere else the implicit function theorem yields a C¹ local graph with y′=−1/(3y²−3).
4. The exceptional curve points are (2,1) and (−2,−1). If a C¹ graph satisfied the relation near either point, differentiating would give (3y²−3)y′+1=0 there, namely 1=0, impossible. Parametrization by y remains regular, with vertical tangent because (dx/dy,dy/dy)=(0,1) at each fold.

**Self-assessment rubric**

- Finds all three projection ranges with the correct endpoint values.
- Derives the counts for interior, boundary and exterior parameter regimes without double-counting repeated roots.
- Applies the correct nonzero partial to every other curve point.
- Proves C¹ graph failure at exactly the two folds and identifies their regular vertical tangents.

</details>
