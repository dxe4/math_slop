var e=`---
id: deep-dive-euclid-reading-witnesses
title: "Euclid: reading the witnesses"
license: CC BY-SA 4.0
---

# Euclid: reading the witnesses

A source-critical claim should be narrow enough for a particular passage to support or challenge it. This L2 article develops that one idea through the two Euclid edition transcriptions recorded in the preserved [original source study](euclid-two-editions-source-criticism.md). It adapts that source's full specialist-inquiry scaffold, ledger and worked memorandum. Those model paragraphs are instructional reconstructions, not reports of a new archival investigation.

Use [Euclid: the two editions](euclid-two-editions.md) for the inherited source cards and complete mathematical argument. Its L1–L4 and H1–H4 labels refer to Lardner's 1855 and Heath's 1908 online proposition-page witnesses, with the original seed's recorded 2 November 2026 access. P labels the argument as transcribed, E the visible editorial presentation and M the modern reconstruction. No printed scan, original Greek text or manuscript witness is newly inspected here. The historical primary [Reading Mathematical Sources](../books/history-of-mathematics/reading-mathematical-sources.md) explains the broader method.

## Specialist inquiry: where does a construction place its obligations?

**Task ID: euclid-reading-witnesses-inquiry-v1.** Produce a 900–1,200-word source-comparison memorandum, with a reference list and a six-to-eight-row claim ledger outside the word count. The bounded research question is:

**How do these two selected witnesses distribute the work of constructing the figure, certifying its equality and accepting the vertex's existence?**

Preparation is the equality argument and changed-radius construction in [Euclid: the two editions](euclid-two-editions.md). The inquiry develops a specialist source-critical practice on a small corpus. It makes no claim to a complete history of Euclid, manuscript research, a global comparison, or evidence of classroom effectiveness. Human review is optional and must not be recorded as supplied unless it actually happens.

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

### Worked memorandum model adapted from the preserved seed

This is a complete narrow argument to study and challenge. Its references are the source cards above; it is a public model rather than an unseen answer.

The question in this memorandum concerns the distribution of mathematical obligations in two selected witnesses of Proposition I.1. A successful construction requires a figure and a reason that the figure has the requested property. Those requirements should not be collapsed. A procedure may name a point whose existence has not yet been justified, while the subsequent proof of its properties remains correct. Reading for that distinction gives a concrete comparison with a falsifiable scope: the displayed proposition texts, as transcribed online, rather than all mathematical work associated with either edition.

The corpus is deliberately limited. Its bibliographical claims come from the two edition indexes linked in the source cards. Its passage claims use the corresponding proposition pages, accessed on 2 November 2026. The medium is an HTML transcription. A reader could check the observations again without accepting a claim about an original Greek text or a manuscript relationship. Fidelity to a printed page would require collation with that page. This limit does not prevent comparison; it determines what the comparison can legitimately describe.

The shared mathematical implication can be reconstructed independently of its wording. Let the distinct endpoints be $A$ and $B$, with length $d>0$. Suppose an off-base point $C$ belongs to both circles, each of radius $d$ and centred at one endpoint. Its distance to $A$ equals $d$, and its distance to $B$ equals $d$. Since the base also has length $d$, all three sides agree. This proof uses two circle memberships and the equality rule. Its successful conclusion does not prove its own initial supposition about $C$. A source comparison should preserve that logical order even when a familiar diagram makes the supposition feel immediate.

The relevant source locators are Lardner §57, Solution and Demonstration, followed by the opening paragraph of §58 (L1–L3), and Heath's construction and equality paragraphs with their bracketed references (H1–H3). The construction, equality certificate and surrounding explanation are separately identifiable there. In this local corpus, L3 explicitly exposes the existence issue, whereas H4 records the narrower form of the other displayed proposition page. That contrast supports a thesis about visible presentation while leaving the wider editions open to further investigation. My comparative thesis is that the selected pages let us see different ways of making dependencies available to the reader. The distinction between an existence premise and an equality certificate is the mathematical object of the comparison. The inference concerns the organization of the inspected evidence. It does not identify the first person to formulate the explanation, establish a transmission route, or rank the editions by their historical importance.

Cross-references provide one further control on the comparison. L2's references and H3's references direct the reader to earlier resources for the proof. Their significance here is functional: they help locate the dependency being invoked. A reference is not a proof that every assumption of the construction has been discharged. In particular, permission to draw a circle and permission to join two points do different work from a guarantee that two given circumferences have a suitable point in common. Treating all three as one undifferentiated construction step would hide the very issue under investigation.

A changed mathematical case tests that analysis. Keep the base length at six but replace both radii by four. In a modern real coordinate plane, let the endpoints be $(0,0)$ and $(6,0)$. Subtracting the circle equations forces $x=3$; substitution gives $y^{2}=7$. The two points $(3,\\pm\\sqrt7)$ each lie four units from the endpoints. The resulting sides are therefore $4,4,6$. The equality between the two new sides survives, but equality with the base fails. Thus the original certificate uses a specific equality between radius and base, not simply the fact that two circles have equal radii.

The neighbouring boundary cases sharpen the distinction. Radius three gives only the midpoint, so the joins are collinear; radius two gives no real point at all. The general calculation yields $y^{2}=r^{2}-d^{2}/4$ for positive $d$ and $r$. An intersection requires $r\\ge d/2$, whereas a triangle requires $r>d/2$. This is a modern test of the reconstruction. It would be an error to infer from its success that either edition's historical author used these equations. Mathematical equivalence of results does not transfer an argument's date, language, or provenance.

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

## Exercises

### Exercise 1 {#euclid-reading-witnesses-ex-1}

Repair this claim: “The absence of an intersection discussion on Heath's selected proposition page proves that his entire edition ignored the issue, whereas Lardner's explanation proves his readers learned more.” State a bounded conclusion and the separate evidence needed for the two stronger inferences.

<details><summary>Hint 1</summary>
The selected page and the entire edition are different corpora.
</details>
<details><summary>Hint 2</summary>
Textual presentation and observed learning outcomes are different evidence types.
</details>
<details><summary>Full solution</summary>
The inherited source record supports only a local comparison: Lardner §58 explicitly discusses intersection, while the selected Heath proposition page does not display a parallel extended discussion. To extend the absence claim to the whole edition one would have to inspect the relevant commentary and wider edition, recording the actual corpus. To compare learning effectiveness one would need evidence about readers, instruction and outcomes, not merely a textual difference. No such new investigation or observation is supplied here. The mathematical equality proof remains the same conditional implication in the source comparison; neither unsupported historical inference is needed for it.
</details>

### Exercise 2 {#euclid-reading-witnesses-ex-2}

Give a six-unit-base, four-unit-radius reconstruction and use it to repair the claim that “two equal circles always construct an equilateral triangle.” Label the mathematical result and the historical limit separately.

<details><summary>Hint 1</summary>
The common points have horizontal coordinate three.
</details>
<details><summary>Hint 2</summary>
Compare both radius lengths with the unchanged base length.
</details>
<details><summary>Full solution</summary>
In the modern real plane the equations force $x=3$ and $y^2=7$, giving precisely the points $(3,pmsqrt7)$. Each has distance four from both endpoints, while the base length stays six. Thus the triangle is isosceles but not equilateral. In general with positive base $d$ and radius $r$, a triangle needs $r>d/2$ and is equilateral only when $r=d$. Label this M, a modern reconstruction identifying the operative premises. It does not establish that a historical editor used these coordinates or that the supplied explanation originated in either selected edition. Source attribution needs textual evidence beyond a successful reconstruction.
</details>

## Provenance and retained identity

The scaffold, claim ledger, complete memorandum model and specialist feedback above are adapted from the CC BY-SA Euler seed, with its hypotheses and changed-case mathematics preserved. The new exercise identities do not replace the original \`euclid-two-witness-inquiry-v1\` task or its notes, which remain available at the original resource. This destination focuses the source-critical inquiry; its companion [The Two Editions](euclid-two-editions.md) carries the source cards and construction proofs. No new archival access, human review, learning observation or independent mathematical review is claimed.
`;export{e as default};