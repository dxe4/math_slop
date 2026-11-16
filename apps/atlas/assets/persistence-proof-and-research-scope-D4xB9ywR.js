var e=`---
id: deep-dive-persistence-proof-and-research-scope
title: "From a finite persistence proof to a research theorem"
license: CC-BY-4.0
---

# From a finite persistence proof to a research theorem

Reconstruct exact diagram matchings, compare direct and diagonal costs, and identify the additional scope of the general persistence theorem.

Before reading: [The complete three-vertex proof](/resources/library:deep-dive-persistence-three-vertex-stability/).

## Worked example: two matching choices give different bounds

For $p=(2,6,3)$ the intervals are $[2,\\infty)$ and $[3,6)$; for $q=(3,4,3)$ they are $[3,\\infty)$ and $[3,4)$. Essential matching costs one. Direct finite matching costs two, so that complete matching has cost two. Sending both finite intervals to the diagonal costs the maximum of $3/2$ and $1/2$; together with essential matching the cost is $3/2$. These are the only finite-bar matching alternatives, hence the bottleneck distance is exactly $3/2$, while the vertex sup distance is two. A convenient direct matching alone would establish only the weaker upper bound two.

## The imported research theorem and its exact boundary

Cohen-Steiner, Edelsbrunner and Harer state that continuous tame functions \\(F,G\\) on a common triangulable space satisfy

\\[
d_B(D(F),D(G))\\le\\|F-G\\|_\\infty.
\\]

Their paper uses \\(\\mathbb F_2\\). In §2, tame means finitely many homological critical values and finite-dimensional sublevel homology in every degree. A homological critical value \\(c\\) has some degree in which inclusion across \\(c-\\delta,c+\\delta\\) fails to be an isomorphism for every sufficiently small positive \\(\\delta\\). Their triangulable space is homeomorphic to a finite simplicial complex. This is an imported theorem, using their diagram conventions. [Primary paper, §§2–3.1](https://pub.ista.ac.at/~edels/Papers/2007-01-StabilityPersistenceDiagrams.pdf)

Our \\(X\\) is the realization of a finite path. Each \\(F_x\\) is continuous and PL; its sublevel homology is finite-dimensional and can change only at the three vertex heights. Thus the hypotheses hold here. The previous sections additionally give a complete elementary proof in this particular degree-zero setting. They do not reproduce the general proof in §§3.2–3.3, extend the result to arbitrary filtrations, or infer any sampling distribution.

The inherited source record identifies the author-hosted PDF as the SCG'05 conference version. The [author's publication list](https://pub.ista.ac.at/~edels/Papers/) records the 2007 journal article in *Discrete & Computational Geometry* 37, 103–120, [DOI 10.1007/s00454-006-1276-5](https://doi.org/10.1007/s00454-006-1276-5). That source-access record is dated 2 November 2026; this reading makes no new PDF-inspection claim.

## PST-RECON-E1 — Reconstruct the finite-path proof

Close the proof while writing.

1. Starting from component basis vectors and their maps, derive the complete barcode for arbitrary \\((u,v,w)\\). Cover the strict middle peak, all other orderings, and ties.
2. Prove the stability inequality for all pairs of real triples. Give the one-bar-disappears argument explicitly.
3. Reconstruct the original lab comparison \\(f=(0,3,1)\\), \\(g=(0,2,1)\\), including exact distances and a lower bound.
4. Explain why the PL sublevel sets and vertex-induced subcomplexes have corresponding \\(H_0\\) persistence, even though they can contain different points.
5. State which part is proved here, which theorem is imported, and which assumptions would still be missing for a population-cluster claim.

**Hint 1.** Separate the cases with two, one and zero finite bars before proposing a matching.

**Hint 2.** In a disappearing-bar case, bound the lifetime using the vertex sup distance and then match the bar to the diagonal. The first reading supplies the required general argument.

## PST-RECON-E2 — Reconstruct a changed matching

Use \\(p=(2,6,3)\\), \\(q=(3,4,3)\\).

1. Derive their barcodes and the input sup distance.
2. Compute the exact bottleneck distance. Compare matching their finite bars to each other with matching both to the diagonal.
3. Explain the equal leaf heights in \\(q\\), and why that tie does not remove its positive finite bar.
4. Replace \\(q\\) by the completely tied triple \\(r=(3,3,3)\\). Calculate its barcode, \\(\\|p-r\\|_\\infty\\) and the exact bottleneck distance to \\(p\\).
5. Decide which of the stability proof's matchings are optimal in these comparisons and repair any claim that stability specifies a unique feature correspondence.

This public task is a changed mathematical demand, with public feedback below. Exposure is not evidence of an independent or delayed assessment.

**Hint 1.** List essential and finite intervals independently for both triples.

**Hint 2.** For the finite intervals compare the direct endpoint cost with both diagonal costs. An upper bound needs an explicit matching, and exactness also needs a lower bound.

## PST-RECON-E1 — solution

For part 1, if \\(v>B=\\max(u,w)\\), one leaf component begins at \\(m\\) and the other at \\(B\\). Their component sum begins at \\(B\\) and maps to zero at \\(v\\), while a chosen oldest component vector survives. This gives \\([m,\\infty)\\) and \\([B,v)\\). If \\(v\\le B\\), the middle-absent case has at most one leaf, and the middle-present case attaches all present leaves, so all nonempty stages are connected. This gives only \\([m,\\infty)\\). Equal endpoint minima permit either essential basis choice; equal middle and maximum give no positive finite bar. These cases prove the full claim.

For part 2, the coordinate error \\(\\varepsilon\\) bounds \\(|m-m'|\\), \\(|B-B'|\\) and \\(|v-v'|\\). Match essential births. Pair finite endpoints when both bars exist; do nothing further when neither exists. If only the unprimed finite bar exists, \\(v'\\le B'\\), so \\(v-B\\le2\\varepsilon\\), and the diagonal costs at most \\(\\varepsilon\\). Exchange primes for the remaining case. This supplies a matching in every case.

For part 3,

\\[
D(f)=\\{[0,\\infty),[1,3)\\},\\quad
D(g)=\\{[0,\\infty),[1,2)\\},\\quad
\\|f-g\\|_\\infty=1.
\\]

The essential pair costs 0 and pairing the finite bars costs 1. The bar \\([1,3)\\) has no permitted destination costing less than 1: the other finite point costs 1 and the diagonal costs 1. Thus \\(d_B=1\\).

For part 4, partial PL edge segments retract to low endpoints, giving inclusion-induced \\(H_0\\) isomorphisms at each threshold; the squares of inclusions commute. This proves correspondence of the spaces and maps at the level required for persistence. Linearity on edges also identifies the PL sup norm with the vertex sup metric.

For part 5, the all-real-height theorem proved here concerns this fixed path and ordinary \\(H_0\\). The common-space continuous-tame theorem is imported from the cited paper. Neither calculation contains a population target, a sampling mechanism, a probability bound for input error or a scientific interpretation; a population-cluster conclusion has not been established.

## PST-RECON-E2 — solution

For \\(p\\), \\(m=2\\), \\(B=3\\), \\(v=6\\), so

\\[
D(p)=\\{[2,\\infty),[3,6)\\}.
\\]

For \\(q\\), both leaves appear at 3 and remain disconnected until the middle enters at 4. One of their equal births is essential and the other dies at 4:

\\[
D(q)=\\{[3,\\infty),[3,4)\\},\\qquad
\\|p-q\\|_\\infty=\\max(1,2,0)=2.
\\]

Matching essential births costs 1. Pairing the finite bars costs \\(\\max(0,2)=2\\). Sending both finite bars to the diagonal costs \\(\\max(3/2,1/2)=3/2\\). These exhaust the finite-bar choices, giving

\\[
d_B(D(p),D(q))=\\max(1,\\min(2,3/2))=3/2.
\\]

A cheaper matching cannot pair the finite bars, since that costs 2, and cannot delete them at a cost below the required \\(3/2\\) for \\(p\\)'s bar. The stability proof's endpoint matching is valid here but is not optimal.

For \\(r\\), all vertices and edges arrive together at 3, so there is only \\([3,\\infty)\\). The input error is \\(\\|p-r\\|_\\infty=\\max(1,3,0)=3\\). The essential cost is 1; \\(p\\)'s only finite bar must go to the diagonal at cost \\(3/2\\). Hence \\(d_B(D(p),D(r))=3/2\\le3\\). That matching is forced at the level of interval destinations and is optimal; the theorem's numerical upper bound is loose.

Stability guarantees existence of a matching with bounded maximum cost under its hypotheses. It supplies neither a unique match nor a persistent physical identity for each displayed feature.

## Descriptive rubric, repair and later reconstruction

| Criterion | Complete work | Specific repair |
| --- | --- | --- |
| Complete classification | Strict peak and non-peak cases cover every real triple, including simultaneous ties. | Test \\((0,1,1)\\), \\((0,1,0)\\) and \\((1,1,1)\\); state why each belongs to its case. Their finite bars are respectively none, \\([0,1)\\), none. |
| Persistence maps | Component basis maps justify the interval summands, including the killed component sum. | Write the merger map \\(\\mathbb F_2^2\\to\\mathbb F_2\\): both basis vectors map to the same nonzero vector. Its kernel is their sum. |
| Universal stability | The proof uses min/max inequalities and separately handles both, neither and exactly one finite bar. | Replace a list of numeric examples by the inequality \\(v-B\\le2\\varepsilon\\) under \\(v'\\le B'\\). |
| Metric and optimality | Every finite bar is accounted for on both sides; essential bars stay essential; lower and upper bounds agree. | Enumerate direct pairing and two diagonal deletions before claiming an exact distance. |
| PL correspondence | Partial edge segments, their contraction, and the commuting inclusion squares are justified. | Distinguish equality of spaces from natural isomorphism of their \\(H_0\\) persistence. |
| Theorem and inference boundary | Common space, continuity, tameness, degree/field and exact input metric are named; population evidence is not invented. | Write the missing input-error probability statement you would need; label it as an unsupplied assumption. |

These are self-review criteria, without automatic grading or a mastery inference. At a later sitting reconstruct the general proof without reopening it first. If it was previously read, describe this as public proof reconstruction. For an additional exact check, translate both \\(p\\) and \\(q\\) by \\(-3\\): their bars translate to \\(\\{[-1,\\infty),[0,3)\\}\\) and \\(\\{[0,\\infty),[0,1)\\}\\), while the input sup distance remains 2 and bottleneck distance remains \\(3/2\\). Subtracting a common constant changes neither endpoint differences nor lifetimes.

## Which claims the argument establishes

| Assertion | Warrant | Limit |
| --- | --- | --- |
| The stated barcode formula holds for all \\(\\mathbb R^3\\). | Complete component-map proof above, including ties. | Fixed path, given filtration, ordinary \\(H_0\\). |
| The finite-path stability bound holds for all pairs. | Constructed matching in every possible finite-bar case. | This is not a proof for arbitrary spaces or filtrations. |
| The primary common-space continuous-tame theorem holds in its stated setting. | Imported primary theorem, §§2–3.1, with conventions and hypotheses named. | Its general proof remains in the cited research paper. |
| The named examples have the recorded intervals and exact distances. | Exact arithmetic, complete matching alternatives and lower bounds. | They illustrate the theorem; they do not establish its universal quantifier. |
| A finite enumeration can compare ties and perturbations on one declared grid. | Its independent oracle obtains intervals from ranks of component inclusion maps and enumerates finite-bar matchings. | The grid \\(\\{-2,-1,0,1,2\\}^3\\) has 125 triples and 15,625 ordered pairs; agreement on that grid would be supplementary computation, not an all-real proof. This reading reports no new execution. |
| A short or long observed bar identifies population signal. | No supporting sampling theorem, model or data is provided. | No significance, recovery, causal or empirical effectiveness claim is licensed. |

To reproduce the exact mathematics, record the path and ordered heights, ordinary \\(H_0\\) over \\(\\mathbb F_2\\), simultaneous ties, threshold \\(\\le t\\), omitted zero-length bars, retained essential bar and bottleneck matching conventions. For the finite oracle also record its grid and exact arithmetic. It uses no sampled randomness and should not be reported as a statistical experiment.

For research continuation, the [TDA survey](#/item/deep-dive-research-frontier-topological-data-analysis) introduces finite metric filtrations and inference questions with additional prerequisites. Our lower-star path construction and the survey's Rips construction have different inputs; transferring the present numerical bound to Rips data requires a separate theorem.

## Copyable changed-example record

A null death below means infinity.

<!-- persistence-stability-data:start -->
~~~json
{
  "version": 1,
  "examples": [
    {"id": "p", "heights": [2, 6, 3], "bars": [[2, null], [3, 6]]},
    {"id": "q", "heights": [3, 4, 3], "bars": [[3, null], [3, 4]]},
    {"id": "r", "heights": [3, 3, 3], "bars": [[3, null]]}
  ],
  "comparisons": [
    {"left": "p", "right": "q", "sup": 2, "bottleneck": 1.5},
    {"left": "p", "right": "r", "sup": 3, "bottleneck": 1.5}
  ],
  "taskIds": ["persistence-stability-original-v1", "persistence-stability-changed-v1"],
  "oracleGrid": [-2, -1, 0, 1, 2]
}
~~~
<!-- persistence-stability-data:end -->

## Summary

Distinguish an exact finite-path proof from the imported general theorem and from finite enumeration; give both an explicit matching and a lower bound when claiming an exact distance.
`;export{e as default};