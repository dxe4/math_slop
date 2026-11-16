
# Euclid: the two editions

A proof can establish equal sides while an edition makes its existence premise more or less visible. This L2 article compares the two selected English edition transcriptions documented in the earlier [source-critical study](euclid-two-editions-source-criticism.md), then retains its full equality and coordinate arguments. The one idea is to separate textual presentation from the mathematical implication that presentation supports.

Preparation is school geometry and simultaneous equations, together with [The Elements and the Idea of Proof](../books/history-of-mathematics/elements-and-the-idea-of-proof.md) and [Reading Mathematical Sources](../books/history-of-mathematics/reading-mathematical-sources.md). All original source cards, proofs and boundary qualifications below are adapted from that preserved CC BY-SA seed. Original task notes stay attached to the original resource. The new exercises have separate identities.

## Source cards: establish what was inspected

**Inherited seed access record: 2026-11-02.** This article carries forward the earlier Euler source study’s recorded observations; it does not claim a fresh source inspection. The links below are historical edition texts presented as HTML transcriptions on Trinity College Dublin's mathematics website. The inspected objects were the web pages and their edition indexes. No printed-page scans, original Greek text or manuscript witnesses were inspected. Treat typography, omissions and attribution as features of these online witnesses unless separately checked.

Use three labels throughout:

- **P — printed argument as transcribed:** the edition's mathematical argument represented by the selected web text. P does not certify a match against a printed page.
- **E — editorial presentation:** visible organization, cross-references or explanatory discussion in that witness. E alone does not identify who first composed a passage.
- **M — modern reconstruction:** an explanation or calculation supplied in this unit. M is mathematical analysis, not evidence of a historical author's method.

### Witness L: Lardner, 1855

The [Lardner Book I index](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookI_Lardner1855.php) identifies an eleventh edition edited by Dionysius Lardner, dated 1855. The [Proposition I page](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookIProp01_Lardner1855.php) supplies these locators:

| Observation ID | Locator and source observation | Layer |
|---|---|---|
| L1 | §57, Solution: describe the two circles and join an intersection to the endpoints. | P |
| L2 | §57, Demonstration: use circle radii and equality to establish three equal sides. | P |
| L3 | §58, opening paragraph: identify intersection as assumed, then reason from circumference portions inside and outside the other circle. | E |
| L4 | §58, next paragraphs: discuss two possible vertices while postponing proof that circles have at most two intersections. | E |

The page supports a claim that intersection receives explicit discussion here. Its explanation and its postponed result must remain distinguishable.

### Witness H: Heath, 1908

The [Heath Book I index](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookI_Heath1908.php) identifies a first edition edited by Sir Thomas L. Heath, dated 1908. The [Proposition 1 page](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php) supplies these locators:

| Observation ID | Locator and source observation | Layer |
|---|---|---|
| H1 | Construction, from the first centre-and-distance instruction through joining $CA$ and $CB$: take $C$ where the circles meet. | P |
| H2 | Equality paragraphs, from the first centre explanation through the final equilateral conclusion: establish equal radii and then equal sides. | P |
| H3 | Bracketed references beside these steps: Post. 3, Post. 1, Def. 15 and C.N. 1. | E |
| H4 | Scope of this selected proposition page: no extended intersection discussion parallel to L3 appears in its displayed text. | E |

H4 is an observation about this page. Checking an entire edition, including commentary elsewhere, would require further evidence.

## Worked reconstruction: certify the three sides

This is an instructional restatement of the shared construction, with its proof obligation made explicit. Let $A$ and $B$ be distinct points with segment length $AB=d>0$.

1. Draw a circle centred at $A$ with radius $AB$.
2. Draw a circle centred at $B$ with radius $BA$.
3. Accept, for this geometric construction, that these circles have an intersection $C$ off the line through $A$ and $B$. Join $AC$ and $BC$.

The third step includes an existence obligation. The equality argument below is conditional on that point; it does not itself produce $C$.

Because $C$ and $B$ are on the first circle, their distances from its centre agree:

$$AC=AB=d.$$

Because $C$ and $A$ are on the second circle,

$$BC=BA=d.$$

Reversing the name of a segment does not change its length: $BA=AB$. Thus both $AC$ and $BC$ equal $AB$. The equality principle often called transitivity yields

$$AC=BC=AB.$$

The three joined segments therefore form an equilateral triangle on the given base. Neither measuring a picture nor calculating three angles is needed.

For source alignment, L2 points to §17 for the circle definition and §43 for the equality principle; H2–H3 identify Def. 15 and C.N. 1. Circle drawing and segment joining are cross-referenced separately from equality. Locate those references in the linked witnesses before treating the restatement as a quotation.

### Existence and equality are separate obligations

A permission to draw each circle gives two circles. It supplies no general rule that every pair of circles meets. A radius argument says what follows *if* a common point has been supplied. Confusing these claims can leave an existence gap inside an otherwise correct equality proof.

L3 gives an explicit geometric explanation using an inside-to-outside passage. To turn such reasoning into a modern analytic proof, one would need to state the continuity and plane assumptions that license a crossing. We shall instead verify the particular configuration directly in coordinates. That changes the mathematical resources used.

The boundary matters even without historical interpretation. Two equal-radius circles can be disjoint, or can touch at just one point on the base line. In the touching case there is a common point, but the joined segments do not bound a nondegenerate triangle. The required point in step 3 must be off that line.

## Modern coordinate supplement: verify existence

**M — modern coordinate reconstruction.** This supplement uses the real Euclidean plane, its distance formula and positive square roots. It is not Euclid's argument in either selected passage.

Choose coordinates

$$A=(0,0),\qquad B=(d,0),\qquad d>0.$$

With both radii equal to $d$, a common point $(x,y)$ must satisfy

$$x^{2}+y^{2}=d^{2},\qquad (x-d)^{2}+y^{2}=d^{2}.$$

Subtract the first equation from the second:

$$-2dx+d^{2}=0.$$

Since $d>0$, division gives $x=d/2$. Substituting back,

$$y^{2}=d^{2}-\frac{d^{2}}{4}=\frac{3d^{2}}{4}.$$

Consequently the two candidates are

$$C_{+}=\left(\frac d2,\frac{\sqrt3\,d}{2}\right),\qquad
C_{-}=\left(\frac d2,-\frac{\sqrt3\,d}{2}\right).$$

They really are common points: for either sign,

$$\left(\frac d2\right)^{2}
+\left(\frac{\sqrt3\,d}{2}\right)^{2}=d^{2},$$

and replacing $d/2$ by $d/2-d=-d/2$ leaves the squared distance to $B$ equal to $d^{2}$. Their heights are nonzero, so each gives a triangle. Any common point had to satisfy the subtracted equation and one of the two square-root choices, so these are all the common points in this real-plane model.

In equivalent geometric text, the vertices lie above and below the midpoint of the base, at height $\sqrt3\,d/2$, with distance $d$ from each endpoint. The signs exchange the side of the base. This conclusion verifies the model's existence and number of vertices; it does not establish the genealogy or historical origin of either edition's explanation.

### Changed radii: when does the construction succeed?

Keep distinct centres at distance $d>0$, but give both circles radius $r>0$. Their equations now give

$$x=\frac d2,\qquad y^{2}=r^{2}-\frac{d^{2}}{4}.$$

Because a real square is nonnegative, a common point exists exactly when

$$r\ge\frac d2.$$

For $r>d/2$, there are two off-base intersections and each produces side lengths $r,r,d$. For $r=d/2$, the single intersection is the midpoint: the segments have lengths $r,r,2r$ and lie on one line. For $0<r<d/2$, the circles are disjoint. A nondegenerate triangle requires the strict inequality. Such a triangle is equilateral exactly when $r=d$.

Here is the entire changed family used in the exercises. Heights are signed vertical coordinates, measured from the base line.



| Base $d$ | Radius $r$ | $x$ | $y^{2}$ | Common points | Joined side lengths | Result |
|---|---|---|---|---|---|---|
| 6 | 6 | 3 | 27 | $(3,\pm3\sqrt3)$ | $6,6,6$ | two equilateral triangles |
| 6 | 4 | 3 | 7 | $(3,\pm\sqrt7)$ | $4,4,6$ | two isosceles triangles, not equilateral |
| 6 | 3 | 3 | 0 | $(3,0)$ | $3,3,6$ | tangent; degenerate |
| 6 | 2 | 3 | -5 | none | none | disjoint |



For example, the changed height $\sqrt7$ comes from $4^{2}-3^{2}=7$, not from scaling the equilateral height. Both distances from $(3,\sqrt7)$ are $\sqrt{9+7}=4$, while the base remains $6$. In the first row, $\sqrt{27}=3\sqrt3$ and the same check gives $6$.

The conditions $d>0$ and $r>0$ are part of the problem. If the centres coincide and $r>0$, the circles coincide and have infinitely many common points; division by $d$ would be invalid. A radius-zero object is excluded from the circle construction considered here.

## Exercises

### Exercise 1 {#euclid-two-editions-ex-1}

Using the inherited source cards, write a bounded comparison of how the two selected proposition pages expose the intersection premise. Include the full equal-side implication and one limit on the historical inference.

<details><summary>Hint 1</summary>
Align Lardner §57, Demonstration, with Heath's equality paragraphs before comparing the surrounding presentation.
</details>
<details><summary>Hint 2</summary>
Use Lardner §58 and the scope restriction in H4. An absence on one selected page is not an absence throughout an edition.
</details>
<details><summary>Full solution</summary>
Given an off-base common point C, membership in the first circle gives AC equal to the base length and membership in the second gives BC equal to that same length. Hence all three sides agree. The implication does not itself supply C. The inherited record identifies Lardner §58 as explicitly discussing intersection, while Heath's displayed proposition supplies the construction and bracketed dependencies without a parallel extended note on that page. This supports a local comparison of visible presentation. It does not establish that Heath's whole edition omits the issue, that Lardner first invented the explanation, or that one presentation taught readers more effectively. Those stronger claims need further evidence.
</details>

### Exercise 2 {#euclid-two-editions-ex-2}

Keep the base length six, use radius four, and prove every real common point and all resulting side lengths. Then give the tangent and disjoint boundary cases for radii three and two.

<details><summary>Hint 1</summary>
Subtract the two circle equations to determine the horizontal coordinate.
</details>
<details><summary>Hint 2</summary>
The squared height is the squared radius minus nine, and must be strictly positive for a triangle.
</details>
<details><summary>Full solution</summary>
The equations with radius four are $x^2+y^2=16$ and $(x-6)^2+y^2=16$. Subtraction gives $x=3$ and substitution gives $y^2=7$. Both $(3,\sqrt7)$ and $(3,-\sqrt7)$ satisfy both equations, and any common point had to satisfy those same two conditions, proving completeness. Each gives sides four, four and six, so equality of the two radii survives but equilateral equality with the base fails. Radius three gives only $(3,0)$ and collinear sides three, three and six; radius two gives negative squared height and no real common point. These are modern coordinate conclusions, not evidence that either historical passage used coordinates.
</details>

## Continue with the witness inquiry

[Euclid: reading the witnesses](euclid-reading-witnesses.md) develops the bounded claim ledger, rival reading and revision argument. The original [longer source study](euclid-two-editions-source-criticism.md) retains every original task, proof, criterion and learner identity. This focused destination preserves the source cards and complete mathematical argument while assigning its new questions separate identities. No printed-page collation, Greek manuscript reading, new source inspection, observed learning outcome or independent review is claimed.
