# Identify the correct center of the orthic triangle

*Medium · [Original olympiad-style problems](index.md)*

In an acute nondegenerate triangle $ABC$, let $D,E,F$ be the feet from $A,B,C$, and let $H$ be the orthocenter. Prove that $H$ is the incenter of triangle $DEF$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use the cyclic quadrilaterals $B,D,H,F$ and $C,D,H,E$.

</details>

<details>
<summary>Hint 2</summary>

At $D$, compare the two angles made by $DH$ with $DE$ and $DF$; repeat cyclically.

</details>

<details>
<summary>Model proof</summary>

The altitude through each orthic vertex bisects its orthic angle.

1. Acuteness places $H$ on each of the open altitude segments from an original vertex to its foot, and inside the triangle of the feet. At $D$, $DH$ is perpendicular to $BC$.
2. The right angles give cyclic quadrilaterals $BDHF$ and $CDHE$. They imply that the angles $FDH$ and $HDE$ both equal $90^\circ-A$ (equivalently compute the angle $EDF=180^\circ-2A$ and split it along the altitude). Both angles are positive.
3. The same argument at $E$ and $F$ shows that $H$ lies on all three internal angle bisectors of $DEF$. Their common interior intersection is its incenter. The acute hypothesis excludes degenerate or external-bisector cases.

**Self-assessment rubric**

- Identify the two circles or equivalent directed-angle relations at one foot.
- Show that both internal angles at that foot equal the positive number 90 degrees minus the opposite original angle.
- Use acuteness and the cyclic repetition to identify the internal-bisector intersection.

</details>
