# Recognize a convex plane region

*Easy · [Geometry and trigonometry problems](index.md)*

Which closed region is convex? Options: disk: $x^2+y^2\le1$; ring: $1\le x^2+y^2\le4$; pair: the union of radius-one disks centered at $(-3,0),(3,0)$; outside: $x^2+y^2\ge1$. Enter disk, ring, pair or outside.

**Options**

1. Closed unit disk
2. Closed annulus from radius 1 to 2
3. Two separated closed disks
4. Outside or on the unit circle

```answer
{"answer":{"kind":"multiple_choice","expected":"disk","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."},"options":["disk","ring","pair","outside"]}
```

<details>
<summary>Hint 1</summary>

Convexity requires every segment between two region points to remain in the region.

</details>

<details>
<summary>Hint 2</summary>

For each candidate with a hole or gap, test symmetric points on the horizontal axis.

</details>

<details>
<summary>Worked solution</summary>

Use the segment definition of convexity.

1. For points $u,v$ of the unit disk and $0\le t\le1$, triangle inequality gives $|(1-t)u+tv|\le(1-t)|u|+t|v|\le1$, so the disk is convex.
2. The ring and outside region contain $(-1,0),(1,0)$ but not their midpoint $(0,0)$.
3. The disjoint pair contains its two centers but not their midpoint. Thus disk is the only convex option.

</details>
