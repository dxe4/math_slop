# Split two bead colors with at most two cuts

*Hard · [Original olympiad-style problems](index.md)*

A linear necklace has $2r$ red beads and $2b$ blue beads, where $r,b$ are nonnegative integers, with no other colors. Prove that at most two cuts between beads suffice to divide the pieces between two people so each receives half the beads of each color. Prove that two cuts are sometimes necessary. Empty color classes are allowed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Join the ends temporarily into a circle. Slide a window containing exactly half of all beads and count its red beads.

</details>

<details>
<summary>Hint 2</summary>

A window and its opposite have complementary red counts, and shifting by one bead changes the count by at most one. For sharpness inspect the linear order $RRBB$.

</details>

<details>
<summary>Model proof</summary>

A discrete intermediate-value argument finds a balanced half-window, whose boundary gives at most two linear cuts.

1. If the necklace is empty there is nothing to cut. Otherwise write its total length as $2h$ and its red count as $2r$. Regard the order cyclically and let $f(j)$ count red beads in the $h$ consecutive positions starting at $j$. The complementary window starts at $j+h$, so $f(j+h)=2r-f(j)$.
2. If $f(j)=r$, the window is balanced. Otherwise its value and the complementary value lie on opposite sides of $r$. Moving the start one place changes the count by at most one, so among the successive windows from $j$ to $j+h$ some has exactly $r$ red beads. It also has exactly half the blue beads, since its total size is $h$.
3. Cut at the two boundaries of that cyclic window. On reopening the original linear necklace, a boundary at an endpoint requires no cut; a wrapping window simply gives its two end pieces to one person. Thus at most two cuts between beads suffice in every case, including an absent color.
4. For necessity, take $RRBB$. A single cut can divide it only into a prefix and suffix. To share both colors equally, each recipient needs two beads including one of each color; the only possible equal-length one-cut split is $RR\mid BB$, which fails. Two cuts $R\mid RB\mid B$ work by giving the middle piece to one person and the end pieces to the other.

**Self-assessment rubric**

- Define the complementary half-windows and their red-count relation.
- Use unit changes to force a window with the exact half red count.
- Translate the cyclic window into at most two allowed linear cuts.
- Prove one cut fails and two cuts work for the stated necklace.

</details>
