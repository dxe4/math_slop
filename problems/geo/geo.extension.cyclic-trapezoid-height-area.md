# Resolve an isosceles trapezoid inside a circle

*Medium · [Geometry and trigonometry problems](index.md)*

A convex cyclic trapezoid has parallel bases of lengths $14$ and $6$ and both legs of length $5$. Find its area.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The equal legs and parallel bases give equal horizontal overhangs.

</details>

<details>
<summary>Hint 2</summary>

Each overhang is half the base difference; use Pythagoras for the height.

</details>

<details>
<summary>Worked solution</summary>

Find the perpendicular height before using the trapezoid formula.

1. Place the shorter base centered over the longer; the two overhangs each have length $(14-6)/2=4$.
2. Each leg forms a right triangle with horizontal leg $4$ and hypotenuse $5$, so the height is $3$.
3. The area is $(14+6)3/2=30$. The cyclic hypothesis is compatible with the equal-legged trapezoid but is not needed after both leg lengths are stated.

</details>
