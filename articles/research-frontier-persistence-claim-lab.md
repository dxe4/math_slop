
# Persistence claim lab — when a bar can disappear

**Before reading.** Read [Negative Numbers](../books/number-and-arithmetic/negative-numbers.md) and [Functions, Domains, and Graphs](../books/algebra-and-functions/functions-domain-graphs.md). These are preparation for the ideas used below.

A mathematical summary can change by a controlled amount even when one of its features disappears. We will see this with three points and two edges. The calculation gives a small, exact entry into a research theorem; it supplies no evidence about an unknown population.

## Preparation and outcomes

You need to compare real numbers, subtract, take an absolute value, and read an interval. A connected component means a group of vertices joined by edges; two vertices belong to different components when no edge path connects them. All the needed graph and barcode conventions are introduced below. You do not need homology or probability.

Check your preparation: \(\max(0,3,1)=3\), \(|3-1|=2\), and \([1,3)\) contains 1 and 2 but not 3. If one is unfamiliar, review [signed numbers](../books/number-and-arithmetic/negative-numbers.md) and [functions](../books/algebra-and-functions/functions-domain-graphs.md), then explain each answer in words.

After this lab, you should be able to list threshold components, turn their births and mergers into intervals, compare two barcodes including a disappearing bar, and separate an exact calculation from a general theorem and an unsupported population claim.

## A fixed path and an exact threshold rule

Our graph is the path \(a-b-c\), with edges \(ab\) and \(bc\), and no edge \(ac\). A height list records the heights at \(a,b,c\), in that order.

At threshold \(t\), include every vertex of height at most \(t\). Include an edge as soon as both its endpoints are included. Thus an edge enters at the larger of its endpoint heights. We keep all previously included vertices and edges as \(t\) increases.

**Ties enter simultaneously.** If a vertex and two edges enter at one threshold, examine the whole result at that threshold. Do not manufacture an intermediate isolated vertex by processing them separately.

We record ordinary degree-zero persistent homology over the field \(\mathbb F_2=\{0,1\}\). In this lab its meaning is concrete: follow connected components and their mergers. The clinic explains the vector spaces and maps behind that language. We use the following barcode conventions:

- A component begins at its birth threshold. At a merger retain the older birth and end the younger birth.
- A bar \([b,d)\) records birth \(b\) and merger \(d\). Its lifetime is \(d-b\). A surviving component gives an essential bar \([b,\infty)\).
- If two merging components have the same birth, either label may survive; their interval values are the same.
- Omit zero-length bars \([b,b)\). A vertex that appears already attached to an older component creates no positive-length bar.

The labels describe a counting convention. The vertices themselves are never deleted when components merge.

## Worked example: heights \(f=(0,3,1)\)

The endpoint \(a\) appears first. Endpoint \(c\) appears next, but they are disconnected until the middle vertex arrives.

| Threshold | Vertices and edges present | Components |
| --- | --- | --- |
| \(t<0\) | none | none |
| \(0\le t<1\) | vertex \(a\) | \(\{a\}\) |
| \(1\le t<3\) | vertices \(a,c\); no edges | \(\{a\},\{c\}\) |
| \(t\ge3\) | all three vertices and both edges | \(\{a,b,c\}\) |

The component born at 0 survives. The second birth, at 1, merges at 3. Therefore the complete barcode is

\[
D(f)=\{[0,\infty),[1,3)\}.
\]

At 3 the middle vertex and both edges appear together. There is no additional positive-length bar born at 3. The essential bar does not stop when our table stops: all thresholds above 3 remain connected.

## How to compare barcodes

The size of a height perturbation is the largest coordinate change:

\[
\|x-y\|_\infty=\max\{|x_a-y_a|,|x_b-y_b|,|x_c-y_c|\}.
\]

For two finite bars \([b,d)\) and \([b',d')\), their matching cost is the larger endpoint error,

\[
\max\{|b-b'|,|d-d'|\}.
\]

A finite bar is also allowed to disappear by matching its point \((b,d)\) to the diagonal \((s,s)\). The least such cost is half its lifetime:

\[
\min_s\max\{|b-s|,|d-s|\}=(d-b)/2.
\]

Indeed, if both errors are at most \(r\), then \(d-b\le2r\). Taking \(s=(b+d)/2\) attains that lower bound. For example, \([2,6)\) costs 2 to match to the diagonal at \((4,4)\).

We must account for every finite bar on both sides: either pair it to one bar on the other side or match it to the diagonal. An essential bar can match only another essential bar, at the absolute difference between their births. Its infinite death cannot be matched to a finite death or to the diagonal.

For each permitted matching take its largest cost. The **bottleneck distance** \(d_B\) is the smallest of those largest costs. Pairing similarly placed bars gives an upper bound; proving the exact distance also requires ruling out cheaper matchings.

## Original task — persistence-claim-original-v1

<a id="deep-dive-research-frontier-persistence-claim-lab-ex-1"></a>

### Exercise 1

Write your argument before opening the model.

1. Keep the path and threshold conventions. For \(g=(0,2,1)\), give the complete component table and barcode.
2. Calculate \(\|f-g\|_\infty\). Give a matching of their barcodes and prove the exact bottleneck distance. Include the option of matching finite bars to the diagonal.
3. Evaluate: “Because these two barcodes are close, the measured population has two real clusters.” State the strongest conclusion this calculation actually supports.
4. Record enough information for another person to repeat your calculation without seeing a barcode picture.

Hint: the only event time that changes is the middle vertex's arrival. For an exact distance, consider every destination of \(f\)'s finite bar.

<details>
<summary>Hint 1</summary>

For the first height list, insert vertices and edges at their exact threshold times.
</details>
<details>
<summary>Hint 2</summary>

Match essential bars first, then compare the finite bar with both the other finite bar and the diagonal.
</details>

<details>
<summary>Solution</summary>

## Complete model for the original task

For \(g\), nothing is present below 0; \(a\) alone is present for \(0\le t<1\); \(a,c\) give two components for \(1\le t<2\); all vertices and edges give one component for \(t\ge2\). Consequently,

\[
D(g)=\{[0,\infty),[1,2)\},\qquad
\|f-g\|_\infty=\max(0,1,0)=1.
\]

Match the essential bars at cost 0. Match \([1,3)\) to \([1,2)\) at cost \(\max(0,1)=1\). This gives \(d_B\le1\).

For a lower bound, the finite bar \([1,3)\) must either match the only finite bar of \(g\), which costs 1, or match to the diagonal, which also costs \((3-1)/2=1\). These exhaust its permitted destinations, so no matching has largest cost below 1. Thus \(d_B=1\). Deleting both finite bars also gives cost \(\max(1,1/2)=1\).

The calculation establishes the two stated barcodes and their distance for these exact height lists and this fixed filtration. There is no sampling model, population object or confidence statement. A real-cluster claim therefore has no supplied justification.

A reproducible record gives the ordered vertices \(a,b,c\), the two edges, both height lists, the threshold rule \(\le t\), simultaneous ties, ordinary \(H_0\) over \(\mathbb F_2\), omission of zero-length bars, retention of the essential bar, numeric intervals and the matching metric. No random seed, parameter grid or numerical approximation is involved in this exact example.

</details>

## Changed task — persistence-claim-changed-v1

<a id="deep-dive-research-frontier-persistence-claim-lab-ex-2"></a>

### Exercise 2

At a later sitting, keep the same graph but replace \(g\) with \(h=(0,1,2)\).

1. Derive \(D(h)\) from its components, including simultaneous vertex/edge arrivals.
2. Calculate \(\|f-h\|_\infty\) and the exact \(d_B(D(f),D(h))\).
3. Decide whether the missing finite bar contradicts a stability assertion \(d_B\le\|f-h\|_\infty\). Explain the role of the diagonal.
4. Repair the sentence “Stability guarantees that each finite bar survives.”

These are public teaching tasks with public answers. A later attempt can be useful reconstruction after exposure; it is not fresh protected assessment evidence.

<details>
<summary>Hint 1</summary>

At the changed middle height, the vertex and incident edge arrive simultaneously.
</details>
<details>
<summary>Hint 2</summary>

The old finite bar has no finite partner; calculate its diagonal cost and compare with the height sup distance.
</details>

<details>
<summary>Solution</summary>

## Complete model for the changed task

For \(h\), the threshold components are:

| Threshold | Present graph | Components |
| --- | --- | --- |
| \(t<0\) | empty | none |
| \(0\le t<1\) | \(a\) | \(\{a\}\) |
| \(1\le t<2\) | \(a,b\) and \(ab\) | \(\{a,b\}\) |
| \(t\ge2\) | all vertices and both edges | \(\{a,b,c\}\) |

Each new vertex joins the existing component immediately. Hence

\[
D(h)=\{[0,\infty)\},\qquad
\|f-h\|_\infty=\max(0,2,1)=2.
\]

The essential bars match at cost 0. Since \(h\) has no finite bar, \([1,3)\) must go to the diagonal, at minimum cost 1. This matching exists and every matching incurs that cost, so

\[
d_B(D(f),D(h))=1\le2.
\]

Disappearance is compatible with stability because diagonal matching is part of its metric. A correct replacement sentence is: “For the stated input metric and hypotheses, a small height perturbation allows a barcode matching of small maximum cost; a finite bar may disappear by matching to the diagonal.”

</details>

## Self-review rubric and error-specific repair

| Criterion | A complete argument shows | If this is missing, repair it by |
| --- | --- | --- |
| Filtration and ties | The same path is used throughout; edges enter with both endpoints, and tied events are simultaneous. | Rebuild the table at each distinct height before drawing bars. |
| Births and deaths | Both finite and essential intervals are correct, with no zero-length bars. | Circle the first component; then identify each genuinely disconnected new birth and its merger. |
| Exact distance | A permitted matching gives an upper bound and every possible destination of the obstructing bar gives the lower bound. | List “other finite bar” and “diagonal”; compute each cost. |
| Changed mechanism | The \(h\) calculation explains why no second component persists. | Draw only what is present immediately at \(t=1\), including the new edge. |
| Claim boundary | Deterministic calculation, theorem and population claim are distinguished. | Name the absent sampling assumption instead of writing “the theorem proves the data are real.” |
| Reproducibility | Numeric inputs, filtration, field, tie and infinity conventions, intervals and metric are stated. | Give the record to someone who has not seen your drawing. |

This is descriptive self-review, without a numeric mastery score or a graded attempt. After repairing one error, close the model and reconstruct the affected step. At a later sitting change the common units by multiplying every height by 2: the original comparison then has barcodes \(\{[0,\infty),[2,6)\}\) and \(\{[0,\infty),[2,4)\}\), with sup distance and bottleneck distance both 2. Explain why both matching costs scale by 2.

## Claim and reproducibility ledger

| Kind of claim | Evidence here | Boundary |
| --- | --- | --- |
| Exact finite calculation | Component tables and complete matching arguments give \(D(f),D(g),D(h)\) and distances 1,1. | These three inputs do not prove a result for every height list. |
| Finite mathematical theorem | The [stability clinic](research-frontier-persistence-stability-clinic.md) proves the inequality for every pair of real height lists on this three-vertex path, including ties. | That proof is confined to this graph and degree zero. |
| Imported general theorem | Cohen-Steiner, Edelsbrunner and Harer's [primary paper, §§2–3.1](https://pub.ista.ac.at/~edels/Papers/2007-01-StabilityPersistenceDiagrams.pdf) supplies the broader function-space stability result; the clinic states its hypotheses. | The general proof is not supplied by our three examples. |
| Bounded computational check | The accompanying regression enumerates a stated finite integer grid and compares independent component maps and matching choices. | A finite oracle supplements the all-real-height proof; it cannot replace it. Its execution status belongs to the project verification record. |
| Population or causal claim | No supporting sampling or causal evidence is supplied. | “Two real clusters,” statistical significance and causation remain unsupported. |

For further study, use the [formal stability clinic](research-frontier-persistence-stability-clinic.md), then the [graduate TDA survey](research-frontier-topological-data-analysis.md) for Rips filtrations and the wider claim boundary. Those continuations require additional preparation named in their sources.

## Copyable exact record

In this record a null death means infinity; it does not mean a missing bar. The JSON is a compact restatement of the worked values for reproducibility.

<!-- persistence-claim-data:start -->
~~~json
{
  "version": 1,
  "vertices": ["a", "b", "c"],
  "edges": [["a", "b"], ["b", "c"]],
  "coefficientField": "F2",
  "thresholdComparison": "<=",
  "simultaneousTies": true,
  "zeroLengthBars": "omit",
  "examples": [
    {"id": "f", "heights": [0, 3, 1], "bars": [[0, null], [1, 3]]},
    {"id": "g", "heights": [0, 2, 1], "bars": [[0, null], [1, 2]]},
    {"id": "h", "heights": [0, 1, 2], "bars": [[0, null]]}
  ],
  "comparisons": [
    {"left": "f", "right": "g", "sup": 1, "bottleneck": 1},
    {"left": "f", "right": "h", "sup": 2, "bottleneck": 1}
  ],
  "taskIds": ["persistence-claim-original-v1", "persistence-claim-changed-v1"]
}
~~~
<!-- persistence-claim-data:end -->

Primary source inspected 2 November 2026. The author-hosted PDF above is the SCG'05 conference version despite its filename. The [author's publication list](https://pub.ista.ac.at/~edels/Papers/) records the later journal article, *Discrete & Computational Geometry* 37 (2007), 103–120, [DOI 10.1007/s00454-006-1276-5](https://doi.org/10.1007/s00454-006-1276-5). The finite-path arguments and teaching examples in this lab are developed here.
