
# Two Editions, One Construction: Reading Euclid I.1 Critically

Before reading: [Euclid and the axiomatic method](#/articles/history-euclid-axiomatic-method), [What Mathematics and Its History Are](#/books/history-of-mathematics/reading-mathematical-sources). The focused continuation is [Euclid: the two editions](#/articles/euclid-two-editions); original notes remain with this retained reading.

For focused readings, open [the two edition witnesses](euclid-two-editions.md) and [reading witnesses and developing an inquiry](euclid-reading-witnesses.md). This complete earlier reading retains its original activities and saved-work identities.

A familiar construction can carry an unfamiliar historical question. Draw two circles, each through the other's centre, and join one intersection to the centres. The result is an equilateral triangle. What makes its three sides equal? What authorizes the intersection point? How does an edition tell its reader where those two kinds of work happen?

The advanced lane of this unit teaches a close comparison of two English-language edition witnesses to Euclid's first proposition. Its historical scope is small: the selected online transcriptions of Lardner's 1855 edition and Heath's 1908 edition. The mathematical reconstruction is complete for the stated construction, including a changed case that fails to be equilateral. A specialist inquiry then turns those results into a defensible source comparison.

## Preparation and entry check

Prerequisites are elementary Euclidean geometry, the distinction between a construction and a proof, and the ability to solve simultaneous quadratic equations by subtraction. For the specialist inquiry, you should also be able to cite a precise passage and distinguish an observation from an inference. Reading original Greek or handling manuscripts is outside this unit's entry requirements.

Try these before using the answers:

1. If $AC=AB$ and $BC=BA$, why is $AC=BC$?
2. Does permission to draw two circles, by itself, imply that they intersect?
3. If $x^{2}+y^{2}=16$ and $(x-6)^{2}+y^{2}=16$, what is $x$?

**Entry answers.** First, $BA$ and $AB$ name the same segment length, so both $AC$ and $BC$ equal $AB$; equality then gives $AC=BC$. Second, circles can be disjoint: radius-one circles whose centres are six units apart provide a counterexample. Third, subtracting the first equation from the second gives $-12x+36=0$, hence $x=3$. Substitution gives $y^{2}=7$.

Repair a missed first or second answer through the equality proof and boundary discussion below. For the third, expand $(x-6)^{2}=x^{2}-12x+36$ before subtracting. These repairs are part of the unit rather than evidence of readiness certified by a score.

Suggested pacing is one hour for source cards and the equality argument, one hour for coordinates and changed work, three hours for the specialist inquiry, and one hour for feedback and revision. These are estimates. All criteria and models are public, so a later repetition is a revision task rather than an unseen assessment. Personal drafts, citations and changes can be kept in Euler notes or an ordinary local document; this article does not grade or authenticate them.

## Source cards: establish what was inspected

**Source access date: 2026-11-02.** The links below are historical edition texts presented as HTML transcriptions on Trinity College Dublin's mathematics website. The inspected objects were the web pages and their edition indexes. No printed-page scans, original Greek text or manuscript witnesses were inspected. Treat typography, omissions and attribution as features of these online witnesses unless separately checked.

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

<!-- euclid-exact-cases:start -->

| Base $d$ | Radius $r$ | $x$ | $y^{2}$ | Common points | Joined side lengths | Result |
|---|---|---|---|---|---|---|
| 6 | 6 | 3 | 27 | $(3,\pm3\sqrt3)$ | $6,6,6$ | two equilateral triangles |
| 6 | 4 | 3 | 7 | $(3,\pm\sqrt7)$ | $4,4,6$ | two isosceles triangles, not equilateral |
| 6 | 3 | 3 | 0 | $(3,0)$ | $3,3,6$ | tangent; degenerate |
| 6 | 2 | 3 | -5 | none | none | disjoint |

<!-- euclid-exact-cases:end -->

For example, the changed height $\sqrt7$ comes from $4^{2}-3^{2}=7$, not from scaling the equilateral height. Both distances from $(3,\sqrt7)$ are $\sqrt{9+7}=4$, while the base remains $6$. In the first row, $\sqrt{27}=3\sqrt3$ and the same check gives $6$.

The conditions $d>0$ and $r>0$ are part of the problem. If the centres coincide and $r>0$, the circles coincide and have infinitely many common points; division by $d$ would be invalid. A radius-zero object is excluded from the circle construction considered here.

## Practice: compare, reconstruct and change

### 1. Primary task: two witnesses and one proof

**Task ID: euclid-two-editions-primary-v1.** Write 350–500 words, with equations if helpful.

Using both source cards and the linked passages, distinguish the certification of equal sides from the existence of the vertex. Supply the radius-and-equality proof. Include at least one exact locator from each witness, label a visible editorial feature E, and explain one claim the comparison cannot establish. Keep modern notation separate from a claim about historical method.

**Hint.** Begin with the implication “if $C$ is on both circles, then …”. Then ask what licenses the antecedent. A locator such as L3 is only a shorthand: include the edition, proposition and paragraph or section it denotes.

**Worked model.** The common mathematical task has two parts. A usable vertex must exist, and its distances must certify the requested triangle. In a reconstruction, let $AB=d>0$ and suppose an off-base point $C$ lies on the two circles of radius $d$. The circle centred at $A$ gives $AC=AB$; the one centred at $B$ gives $BC=BA$. As $BA=AB$, both remaining sides equal the base. Hence $AC=BC=AB$, which proves the requested equality once the vertex has been supplied.

In Lardner §57, Demonstration, and Heath's equality paragraphs beginning with the centre at $A$, the certificates can be aligned without turning our notation $d$ into a historical quotation. For editorial presentation, Lardner §58 explicitly examines intersection; Heath's displayed construction takes a common point and supplies bracketed dependencies (H3), without a parallel extended note on this page (H4). This is a local comparison of the [Lardner proposition](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Lardner1855/EuclidBookIProp01_Lardner1855.php) and [Heath proposition](https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/Euclid_ETexts/EuclidBookI_Heath1908/EuclidBookIProp01_Heath1908.php). The visible difference concerns how the selected pages expose mathematical dependencies. I classify the note and reference apparatus as E; the joined figure and equality argument as P; and my $d$ notation and logical reconstruction as M. These labels mark different evidence roles rather than ranking mathematical truth. Calling an edition better for learning would require evidence about learning; counting explanatory words cannot supply it.

The existence question survives the correct equality calculation. The calculation begins with a point satisfying two incidences. It establishes properties of that point and cannot prove the premise merely by naming it. Our modern coordinates provide another verification, using a real-plane model. That is an extra argument whose assumptions must be declared. It cannot be attributed to either witness simply because it reaches the same result.

A historical conclusion should therefore stay local. Agreement in a construction and an equality argument gives an opportunity to compare presentation. It supplies no direct-copying relation between these two editions. Establishing such a relation would need further documentary evidence and a wider comparison. The inspected web texts also do not establish original Greek wording or their own fidelity to printed pages. A defensible comparison records the object actually read, the passage that supports a claim, and the point where mathematical reconstruction or historical inference begins.

### 2. Changed task: a six-unit base and four-unit radii

**Task ID: euclid-radius-change-v1.** Work this before reading the key. Put $A=(0,0)$ and $B=(6,0)$ and draw both circles with radius $4$.

Find every common point and all three side lengths. Identify exactly which equality in the equilateral proof fails. Then change the radius to $3$ and to $2$, explaining why a common point alone is insufficient. State and justify the general threshold for equal radius $r>0$ and centre separation $d>0$. Finish with two sentences explaining the historical status of your calculation.

**Hint.** Subtract the circle equations before taking a square root. Keep the base length fixed when changing the radius.

**Complete changed key.** The equations are

$$x^{2}+y^{2}=16,\qquad (x-6)^{2}+y^{2}=16.$$

Subtraction gives $x=3$ and then $y^{2}=7$, so all common points are $(3,\sqrt7)$ and $(3,-\sqrt7)$. Their distances to $A$ and $B$ are both $4$, giving $AC=BC=4$ and $AB=6$. The failed step is $AC=AB$: $C$ and $B$ are no longer both on the circle centred at $A$. Likewise $BC=BA$ fails for the other circle. The two equal radii still prove $AC=BC$, which is insufficient for three equal sides.

At radius $3$, $y^{2}=9-9=0$, so the circles touch at $(3,0)$. Joining that point gives collinear lengths $3,3,6$; there is no nondegenerate triangle. At radius $2$, $y^{2}=4-9=-5$, so no real intersection exists.

For general $d,r>0$, subtraction gives $x=d/2$ and substitution gives $y^{2}=r^{2}-d^{2}/4$. This has a real solution exactly when $r\ge d/2$, two nonzero-height solutions exactly when $r>d/2$, and sides $r,r,d$ in the latter case. All three sides agree exactly when $r=d$. These are modern coordinate conclusions. They diagnose the construction's dependencies without showing that an edition's historical author reasoned in coordinates.

### Public criteria and feedback

Use these five dimensions for both tasks. On each, record **complete**, **revise**, or **missing**, together with a sentence of evidence. These are self-review categories, not marks earned or certified proof checking.

| Dimension | Complete evidence | Repair if absent or incorrect |
|---|---|---|
| Source control | Both witnesses have precise locators; P, E and M are distinguished where used. | Replace a general reference to “Euclid” with the actual edition and passage. |
| Equality reasoning | The primary proof identifies each radius, the shared base length and the equality step. | Write separately which point belongs to which circle; do not infer equality from the picture. |
| Existence and hypotheses | Distinct centres, positive radii, an off-base vertex and the relevant existence boundary are explicit. | Separate drawing, intersection and nondegeneracy into three claims. |
| Changed mathematics | Coordinates and side lengths agree; tangent and disjoint cases are correctly diagnosed. | Substitute each proposed vertex into both equations and compare $2r$ with $d$. |
| Historical restraint | The conclusion concerns inspected witnesses; method, causation and transmission claims have adequate evidence or are withdrawn. | Label the coordinate work M and restrict absence claims to the inspected page. |

A wrong changed radicand calls for recomputation from the two equations. A correct radicand with a wrong historical attribution calls for rewriting the attribution. These are different repairs. After revising, explain which claim changed and why; repeating the model word for word does not demonstrate transfer.

## Claim-repair workshop

For each proposed claim, decide whether it is supported, needs narrowing, or fails mathematically. Write a replacement before consulting the answers.

1. “Drawing any two circles with equal radii supplies a vertex.”
2. “Lardner leaves the circle-intersection issue entirely unmentioned.”
3. “Heath never discusses circle intersection anywhere.”
4. “The coordinate solution tells us how Euclid originally obtained the result.”
5. “The shared construction proves Heath copied Lardner directly.”
6. “The longer explanation must have taught its readers more successfully.”

**Repairs.** Claim 1 fails: equal radii alone are insufficient; for distinct centres at distance $d$ and equal positive radius $r$, intersection requires $2r\ge d$, and a triangle requires $2r>d$. Claim 2 conflicts with L3: cite §58 and distinguish an explicit explanation from a modern axiomatization. Claim 3 exceeds H4: restrict it to the displayed proposition page and investigate other commentary before extending it. Claim 4 confuses M with historical evidence; say that coordinates verify the construction in the declared modern model. Claim 5 requires transmission evidence beyond mathematical agreement. Claim 6 requires evidence about learners and use; the present comparison establishes a textual difference.

## Specialist inquiry: where does a construction place its obligations?

**Task ID: euclid-two-witness-inquiry-v1.** Produce a 900–1,200-word source-comparison memorandum, with a reference list and a six-to-eight-row claim ledger outside the word count. The bounded research question is:

**How do these two selected witnesses distribute the work of constructing the figure, certifying its equality and accepting the vertex's existence?**

Entry requires completion of the primary and changed tasks with their repairs. The inquiry develops a specialist source-critical practice on a small corpus. It makes no claim to a complete history of Euclid, manuscript research, a global comparison, or evidence of classroom effectiveness. Human review is optional and must not be recorded as supplied unless it actually happens.

### A sustained comparison scaffold

1. **Fix the corpus.** Record the two proposition URLs, the edition metadata supported by their indexes, the access date and exactly which medium you read. If a link is unavailable later, record that limitation; a remembered wording is not a newly inspected source.
2. **Build the claim ledger.** Include two entries about construction, two about equality and two about existence or editorial presentation. Each row has a claim, precise locator, P/E/M label, warranted inference and a limit. A sentence reporting what a text says and a sentence endorsing its mathematics may need separate rows.
3. **Reconstruct one implication completely.** Use the radius proof. Then describe its existence premise in one sentence. Add the radius-four changed case as a test of what remains true when the premise “radius equals base” is removed.
4. **State a comparative thesis.** Make it narrow enough to fail if a specified passage differs. Include a rival reading: could the difference be an artifact of the selected page boundaries rather than a difference throughout the editions?
5. **Draft and challenge.** Develop the thesis with locators, explain the rival reading, and distinguish your mathematical check from historical attribution. Include one unsupported claim you deliberately withdrew and the evidence that would be needed to revive it.
6. **Revise against feedback.** Attach the ledger, references and a short change note. Identify a next source that would test the rival reading, such as commentary or a printed page, without claiming that you have already inspected it.

A useful paragraph sequence is: corpus and question; reconstruction; comparison of dependencies; changed case; rival reading and medium limits; conclusion and next-source test. A timeline alone does not answer the research question.

### Worked ledger

| Claim | Locator | Layer | Warranted inference | Limit |
|---|---|---|---|---|
| A circle and a join are distinct construction operations. | L1; H1 | P | Compare the operations required to supply the figure. | Permission for each operation does not prove an intersection. |
| The equality certificate depends on two incidences. | L2; H2 | P | Reconstruct the implication from radius equalities. | The implication begins after a vertex has been supplied. |
| The treatment makes the equality rule findable. | L2, §43 reference; H3, C.N. 1 reference | E | Compare cross-reference conventions. | These references do not establish a copying relation. |
| Intersection is an explicit subject of discussion in L. | L3, §58 opening | E | Study how an existence concern is addressed. | Do not identify its first author from this page alone. |
| The selected page boundaries affect an absence claim. | H4; L3 | E | Keep the comparison local to the inspected pages. | Other commentary remains uninspected. |
| The radius-four construction gives sides $4,4,6$. | Changed key, substituted equations | M | Diagnose which equality premise matters. | This calculation supplies no historical attribution. |

For a submitted ledger, replace the L/H shorthands by edition, proposition and the indicated section or paragraph, with links. The abbreviations here remain readable through the source cards.

### Worked memorandum model

This is a complete narrow argument to study and challenge. Its references are the source cards above; it is a public model rather than an unseen answer.

The question in this memorandum concerns the distribution of mathematical obligations in two selected witnesses of Proposition I.1. A successful construction requires a figure and a reason that the figure has the requested property. Those requirements should not be collapsed. A procedure may name a point whose existence has not yet been justified, while the subsequent proof of its properties remains correct. Reading for that distinction gives a concrete comparison with a falsifiable scope: the displayed proposition texts, as transcribed online, rather than all mathematical work associated with either edition.

The corpus is deliberately limited. Its bibliographical claims come from the two edition indexes linked in the source cards. Its passage claims use the corresponding proposition pages, accessed on 2 November 2026. The medium is an HTML transcription. A reader could check the observations again without accepting a claim about an original Greek text or a manuscript relationship. Fidelity to a printed page would require collation with that page. This limit does not prevent comparison; it determines what the comparison can legitimately describe.

The shared mathematical implication can be reconstructed independently of its wording. Let the distinct endpoints be $A$ and $B$, with length $d>0$. Suppose an off-base point $C$ belongs to both circles, each of radius $d$ and centred at one endpoint. Its distance to $A$ equals $d$, and its distance to $B$ equals $d$. Since the base also has length $d$, all three sides agree. This proof uses two circle memberships and the equality rule. Its successful conclusion does not prove its own initial supposition about $C$. A source comparison should preserve that logical order even when a familiar diagram makes the supposition feel immediate.

The relevant source locators are Lardner §57, Solution and Demonstration, followed by the opening paragraph of §58 (L1–L3), and Heath's construction and equality paragraphs with their bracketed references (H1–H3). The construction, equality certificate and surrounding explanation are separately identifiable there. In this local corpus, L3 explicitly exposes the existence issue, whereas H4 records the narrower form of the other displayed proposition page. That contrast supports a thesis about visible presentation while leaving the wider editions open to further investigation. My comparative thesis is that the selected pages let us see different ways of making dependencies available to the reader. The distinction between an existence premise and an equality certificate is the mathematical object of the comparison. The inference concerns the organization of the inspected evidence. It does not identify the first person to formulate the explanation, establish a transmission route, or rank the editions by their historical importance.

Cross-references provide one further control on the comparison. L2's references and H3's references direct the reader to earlier resources for the proof. Their significance here is functional: they help locate the dependency being invoked. A reference is not a proof that every assumption of the construction has been discharged. In particular, permission to draw a circle and permission to join two points do different work from a guarantee that two given circumferences have a suitable point in common. Treating all three as one undifferentiated construction step would hide the very issue under investigation.

A changed mathematical case tests that analysis. Keep the base length at six but replace both radii by four. In a modern real coordinate plane, let the endpoints be $(0,0)$ and $(6,0)$. Subtracting the circle equations forces $x=3$; substitution gives $y^{2}=7$. The two points $(3,\pm\sqrt7)$ each lie four units from the endpoints. The resulting sides are therefore $4,4,6$. The equality between the two new sides survives, but equality with the base fails. Thus the original certificate uses a specific equality between radius and base, not simply the fact that two circles have equal radii.

The neighbouring boundary cases sharpen the distinction. Radius three gives only the midpoint, so the joins are collinear; radius two gives no real point at all. The general calculation yields $y^{2}=r^{2}-d^{2}/4$ for positive $d$ and $r$. An intersection requires $r\ge d/2$, whereas a triangle requires $r>d/2$. This is a modern test of the reconstruction. It would be an error to infer from its success that either edition's historical author used these equations. Mathematical equivalence of results does not transfer an argument's date, language, or provenance.

A rival reading concerns the corpus boundary. The comparison could tempt a reader to infer a difference between entire editions from a difference visible on their selected web pages. H4 explicitly prevents that inference. Material elsewhere in an edition might supply context that changes the wider account. A useful next test would therefore inspect the relevant commentary and collate a proposition page against a printed witness. Until that happens, the unit of comparison remains the two inspected transcriptions. The rival reading limits the thesis rather than destroying the local observations.

I also withdraw the claim that an explanatory difference establishes better teaching. A passage can expose an assumption more visibly without supplying evidence of what readers learned, remembered, or transferred to unfamiliar problems. The changed-radius task is a designed opportunity to reason about transfer; no learner outcome was observed here. Likewise, shared mathematical content cannot by itself show direct copying between the editors. Evidence for that stronger historical claim would need to address a transmission relation, not merely a mathematical resemblance.

The result is a source-critical account in which each conclusion keeps its proper support. Passage observations are linked to locators; the equality proof is reconstructed; the existence premise is isolated; the changed case tests the reconstruction; and wider historical explanations remain questions for further sources. This small corpus supports a precise study of how a construction can present its obligations. Its value lies in that argued precision and in a next-source test that could change the wider interpretation.

### Specialist feedback and revision

Apply the public criteria above, then use these inquiry-specific checks:

| Criterion | Satisfactory memorandum | Revision when it falls short |
|---|---|---|
| Research question and thesis | Answers the bounded question with a comparative claim a passage could challenge. | Replace an edition ranking or chronology with a claim about a stated obligation and passage. |
| Evidence chain | Each historical claim is recoverable through a ledger row and an exact source locator. | Separate quotation, paraphrase, interpretation and modern reconstruction; add the missing locator. |
| Mathematical control | Gives the complete equality argument and uses the changed case to identify a dependency. | Check both incidences, all three lengths, and the distinction between point and triangle. |
| Counter-reading | Explains how page selection or uninspected commentary could limit the thesis. | State a specific source check that could alter the interpretation. |
| Claim boundaries and revision | Withdraws an unsupported inference and explains the evidence needed; the change note records actual revisions. | Remove invented intention, genealogy, originality, printed fidelity or learning effects. |

A strong revision does more than add cautious adjectives. It changes an unsupported causal statement into a passage claim, or replaces a claimed historical method with a labelled modern check. For example, a memorandum that calculates the correct changed points but claims to have recovered Euclid's original thinking needs historical revision. One with careful attribution but side lengths $4,4,4$ needs mathematical revision. Record those judgments separately.

The next study may widen the corpus to edition commentary, printed-page collation or another translation, provided the new source is actually inspected and its role is documented. This completed inquiry supplies a method for that extension; it does not supply the extension's missing evidence.
