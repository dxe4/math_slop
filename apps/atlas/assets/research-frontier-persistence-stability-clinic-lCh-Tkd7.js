var e=`---
id: deep-dive-research-frontier-persistence-stability-clinic
title: "Persistence stability clinic — a complete finite-path proof"
license: CC-BY-4.0
---

# Persistence stability clinic — a complete finite-path proof

Before reading: [Graph Theory](/resources/library:book-graph-theory/), [Finite-Dimensional Linear Algebra: Structure and Proof](/resources/library:book-linear-algebra-structure-proofs/). The focused continuation is [Persistence stability on a three-vertex path](/resources/library:deep-dive-persistence-three-vertex-stability/); original notes remain with this retained reading.

Focused readings: [the complete finite-path proof](./persistence-three-vertex-stability.md) and [reconstruction and research scope](./persistence-proof-and-research-scope.md). This earlier complete reading retains the original task identifiers, headings, models and saved-work context.

The goal is an exact theorem with an inspectable proof and an honest connection to a primary research theorem. We prove bottleneck stability for all real vertex heights on one fixed three-vertex path. We import the more general theorem explicitly, rather than claiming that a small-grid calculation or our special case proves it.

## Preparation, outcomes and route

Begin with the [persistence claim lab](#/item/deep-dive-research-frontier-persistence-claim-lab). You should be able to compare real numbers, work with minima, maxima and absolute values, and prove inequalities. The component interpretation of \\(H_0\\), its inclusion maps, and diagram matching are explained below. For a fuller algebraic introduction, use [Chains, Spaces, and Invariants](#/item/book-algebraic-topology-chains-spaces) and the [simplicial homology recipe](#/item/recipe-simplicial-homology-computation).

The imported theorem uses topological spaces, continuity and homology. Its full proof requires more preparation than the finite-path argument. Review [point-set topology](#/topic/point-set-topology) and [homology and cohomology](#/topic/homology-cohomology) before attempting the primary proof.

A complete attempt derives the barcode in every height ordering including ties, proves stability for every pair of real height triples, justifies the link to continuous piecewise-linear sublevels, and audits a case where a natural matching is not optimal. Plan about 35 minutes for the setup, 45 for proof reconstruction, 45 for changed work and 25 for feedback. These planning estimates may vary by reader.

## Fixed filtration and ordinary \\(H_0\\)

Let \\(P\\) be the path \\(a-b-c\\) with edges \\(ab,bc\\). A height function is the triple \\(x=(u,v,w)\\) at \\(a,b,c\\). At every real \\(t\\), let \\(P_t(x)\\) contain vertices of height at most \\(t\\) and edges whose two endpoints are present. Equal-height events are simultaneous. This is a filtration because \\(P_s(x)\\subseteq P_t(x)\\) when \\(s\\le t\\).

Use ordinary \\(H_0\\) with coefficients in \\(\\mathbb F_2\\). For this finite graph, \\(H_0(P_t;\\mathbb F_2)\\) has one basis vector for each connected component; \\(H_0(\\varnothing)=0\\). The linear map from an earlier to a later threshold sends each component basis vector to the basis vector of the component containing it. This describes both the vector spaces and the inclusion-induced maps. Counts of components alone would omit the maps.

An interval \\([b,d)\\) represents a one-dimensional summand present at thresholds \\(b\\le t<d\\), with identity maps while present and zero after its death. An essential interval \\([b,\\infty)\\) has no finite death. We omit zero-length intervals. At a merger, the sum of the two merging component vectors maps to zero over \\(\\mathbb F_2\\); an oldest component vector can represent the surviving summand.

## Complete barcode for arbitrary heights

Set

\\[
m=\\min(u,v,w),\\qquad B=\\max(u,w).
\\]

**Finite-path barcode theorem.** There is always exactly one essential interval \\([m,\\infty)\\). A positive-length finite interval exists if and only if \\(v>B\\), and in that case it is exactly \\([B,v)\\). There are no other positive-length intervals.

**Proof, including ties.** First suppose \\(v>B\\). Both leaves are present before the middle vertex. The first leaf appears at \\(m=\\min(u,w)\\). The other leaf appears at \\(B\\); the two leaves remain in separate components for \\(B\\le t<v\\). At \\(v\\), the middle vertex and both edges appear simultaneously and join them. Thereafter the graph is connected.

Choose a leaf of minimum height as the essential basis vector. If the two leaves have equal height, either choice works. At \\(B\\), the sum of the two leaf-component vectors supplies a second independent vector. At the merger its image is the sum of the same final component vector with itself, hence zero. The essential vector maps to the nonzero final component vector. This gives precisely the interval summands \\([m,\\infty)\\) and \\([B,v)\\), including the case \\(u=w\\).

Now suppose \\(v\\le B\\). Every nonempty \\(P_t\\) is connected. If the middle vertex is absent, both leaves cannot be present: that would require \\(B\\le t<v\\), a contradiction. If the middle vertex is present, every present leaf is attached to it. Thus the first nonempty threshold is \\(m\\), its \\(H_0\\) has dimension one, and all later maps send its component vector to the nonzero component vector. The sole interval is \\([m,\\infty)\\). This includes \\(v=B\\), ties for the minimum, and \\(u=v=w\\). Any same-time birth and merger has zero length and is omitted. The cases exhaust all real triples. \\(\\square\\)

The strict inequality matters. For \\(x=(0,1,1)\\), vertex \\(c\\), vertex \\(b\\) and their incident edges present at 1 produce one connected graph at that threshold; there is no positive bar \\([1,1)\\).

## Matching diagrams, with the diagonal included

Represent a finite interval by \\((b,d)\\). Match two such points at cost \\(\\max(|b-b'|,|d-d'|)\\). Match an unmatched finite interval to a diagonal point at least-cost \\((d-b)/2\\), attained at \\(((b+d)/2,(b+d)/2)\\). Account for unmatched bars on both sides. Essential intervals match each other at the absolute difference in births; matching an essential interval to a finite point or to the diagonal has infinite cost.

The bottleneck distance is the infimum of the largest pair cost over these choices. Each diagram here has exactly one essential bar and at most one finite bar, so only finitely many distinct finite-bar matching choices need consideration.

With finite bars \\(I=[B,v)\\) and \\(I'=[B',v')\\), the exact distance is

\\[
d_B=\\max\\!\\left(
 |m-m'|,
 \\min\\!\\left\\{
   \\max(|B-B'|,|v-v'|),
   \\max((v-B)/2,(v'-B')/2)
 \\right\\}\\right).
\\]

The two inner choices pair the finite bars, or send both to the diagonal. If only \\(I\\) exists, the exact distance is \\(\\max(|m-m'|,(v-B)/2)\\). If neither exists, it is \\(|m-m'|\\). These are exhaustive choices because essential bars must match each other.

## A proof of stability for every pair of height triples

Let \\(x=(u,v,w)\\), \\(x'=(u',v',w')\\), and

\\[
\\varepsilon=\\max(|u-u'|,|v-v'|,|w-w'|).
\\]

We will construct a matching of cost at most \\(\\varepsilon\\), proving

\\[
d_B(D(x),D(x'))\\le\\varepsilon
\\quad\\text{for every }x,x'\\in\\mathbb R^3.
\\]

First, minimum and maximum are 1-Lipschitz under the coordinate sup metric. For example, every coordinate of \\(x\\) is at least the corresponding coordinate of \\(x'\\) minus \\(\\varepsilon\\), and hence at least \\(m'-\\varepsilon\\). Taking the minimum gives \\(m\\ge m'-\\varepsilon\\); interchange the triples to get \\(|m-m'|\\le\\varepsilon\\). The coordinate upper bounds likewise give \\(B\\le B'+\\varepsilon\\), and symmetry gives \\(|B-B'|\\le\\varepsilon\\).

Always match the essential bars, at cost at most \\(\\varepsilon\\). There are three finite-bar cases.

1. **Both exist.** Pair \\([B,v)\\) to \\([B',v')\\). Both endpoint differences are at most \\(\\varepsilon\\), so this finite pair costs at most \\(\\varepsilon\\). This matching need not be optimal, but it proves the bound.
2. **Neither exists.** There is no remaining finite bar to match.
3. **Exactly one exists.** Interchanging the triples if necessary, suppose \\(v>B\\) but \\(v'\\le B'\\). Then
   \\[
   v-B=(v-v')+(v'-B')+(B'-B)
   \\le\\varepsilon+0+\\varepsilon=2\\varepsilon.
   \\]
   Match the sole finite bar to the diagonal. Its cost is \\((v-B)/2\\le\\varepsilon\\).

Each constructed matching accounts for all bars and has largest cost at most \\(\\varepsilon\\). Equality cases and \\(\\varepsilon=0\\) are included; no ordering was assumed or excluded. This completes the all-real-height finite-path proof. \\(\\square\\)

## Why continuous PL sublevels give the same \\(H_0\\) persistence

Realize the two edges as closed line segments and extend the vertex heights linearly on each edge. This gives a continuous piecewise-linear function \\(F_x\\) on the same topological path \\(X=|P|\\). Its sublevel set

\\[
L_t(x)=\\{p\\in X:F_x(p)\\le t\\}
\\]

is usually not the same space as the geometric realization of \\(P_t(x)\\). An edge with one low endpoint and one endpoint above \\(t\\) contributes a partial segment to \\(L_t(x)\\); that whole edge is absent from \\(P_t(x)\\).

Nevertheless, each such partial segment contracts to its included low endpoint while all of \\(|P_t(x)|\\) is fixed. An edge with both endpoints included is already in the subcomplex; one with both excluded contributes nothing, by linearity. These contractions agree at shared vertices. They give a deformation retraction of \\(L_t(x)\\) onto \\(|P_t(x)|\\), including thresholds equal to vertex heights.

Consequently, inclusion \\(|P_t(x)|\\hookrightarrow L_t(x)\\) induces an \\(H_0\\) isomorphism. For \\(s\\le t\\), the square formed by these two inclusions and the threshold inclusions commutes, because all four maps are inclusions of the same points. The isomorphisms therefore respect every persistence map. We have justified the same \\(H_0\\) persistence, not equality of the sublevel spaces or a claim that independently chosen retractions commute.

On each edge, \\(F_x-F_{x'}\\) is a linear interpolation of its endpoint differences, so its absolute value is at most their largest absolute value. Vertices attain the maximum coordinate error. Thus

\\[
\\|F_x-F_{x'}\\|_{\\infty,X}=\\varepsilon.
\\]

These observations connect our discrete filtration to continuous functions without pretending they are identical constructions.

## The imported research theorem and its exact boundary

Cohen-Steiner, Edelsbrunner and Harer state that continuous tame functions \\(F,G\\) on a common triangulable space satisfy

\\[
d_B(D(F),D(G))\\le\\|F-G\\|_\\infty.
\\]

Their paper uses \\(\\mathbb F_2\\). In §2, tame means finitely many homological critical values and finite-dimensional sublevel homology in every degree. A homological critical value \\(c\\) has some degree in which inclusion across \\(c-\\delta,c+\\delta\\) fails to be an isomorphism for every sufficiently small positive \\(\\delta\\). Their triangulable space is homeomorphic to a finite simplicial complex. This is an imported theorem, using their diagram conventions. [Primary paper, §§2–3.1](https://pub.ista.ac.at/~edels/Papers/2007-01-StabilityPersistenceDiagrams.pdf)

Our \\(X\\) is the realization of a finite path. Each \\(F_x\\) is continuous and PL; its sublevel homology is finite-dimensional and can change only at the three vertex heights. Thus the hypotheses hold here. The previous sections additionally give a complete elementary proof in this particular degree-zero setting. They do not reproduce the general proof in §§3.2–3.3, extend the result to arbitrary filtrations, or infer any sampling distribution.

The inspected author-hosted PDF identifies itself as the SCG'05 conference version. The [author's publication list](https://pub.ista.ac.at/~edels/Papers/) records the 2007 journal article in *Discrete & Computational Geometry* 37, 103–120, [DOI 10.1007/s00454-006-1276-5](https://doi.org/10.1007/s00454-006-1276-5). Source checked 2 November 2026; no claim is made to have inspected a different journal PDF.

## Original proof task — persistence-stability-original-v1

Close the proof while writing.

1. Starting from component basis vectors and their maps, derive the complete barcode for arbitrary \\((u,v,w)\\). Cover the strict middle peak, all other orderings, and ties.
2. Prove the stability inequality for all pairs of real triples. Give the one-bar-disappears argument explicitly.
3. Reconstruct the original lab comparison \\(f=(0,3,1)\\), \\(g=(0,2,1)\\), including exact distances and a lower bound.
4. Explain why the PL sublevel sets and vertex-induced subcomplexes have corresponding \\(H_0\\) persistence, even though they can contain different points.
5. State which part is proved here, which theorem is imported, and which assumptions would still be missing for a population-cluster claim.

Hint: a proof about all heights must address the change in the number of finite bars. Computing a second example does not discharge that case.

## Changed matching task — persistence-stability-changed-v1

Use \\(p=(2,6,3)\\), \\(q=(3,4,3)\\).

1. Derive their barcodes and the input sup distance.
2. Compute the exact bottleneck distance. Compare matching their finite bars to each other with matching both to the diagonal.
3. Explain the equal leaf heights in \\(q\\), and why that tie does not remove its positive finite bar.
4. Replace \\(q\\) by the completely tied triple \\(r=(3,3,3)\\). Calculate its barcode, \\(\\|p-r\\|_\\infty\\) and the exact bottleneck distance to \\(p\\).
5. Decide which of the stability proof's matchings are optimal in these comparisons and repair any claim that stability specifies a unique feature correspondence.

This public task is a changed mathematical demand, with public feedback below. Exposure is not evidence of an independent or delayed assessment.

## Complete model for the original proof task

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

## Complete model for the changed matching task

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

## Claim ledger and bounded computational oracle

| Assertion | Warrant | Limit |
| --- | --- | --- |
| The stated barcode formula holds for all \\(\\mathbb R^3\\). | Complete component-map proof above, including ties. | Fixed path, given filtration, ordinary \\(H_0\\). |
| The finite-path stability bound holds for all pairs. | Constructed matching in every possible finite-bar case. | This is not a proof for arbitrary spaces or filtrations. |
| The primary common-space continuous-tame theorem holds in its stated setting. | Imported primary theorem, §§2–3.1, with conventions and hypotheses named. | Its general proof remains in the cited research paper. |
| The named examples have the recorded intervals and exact distances. | Exact arithmetic, complete matching alternatives and lower bounds. | They illustrate the theorem; they do not establish its universal quantifier. |
| The finite regression checks ties and perturbations on a declared grid. | Its independent oracle obtains intervals from ranks of component inclusion maps and enumerates finite-bar matchings. | The grid \\(\\{-2,-1,0,1,2\\}^3\\) has 125 triples and 15,625 ordered pairs; passing it is supplementary computation, not an all-real proof. Execution status is recorded separately. |
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
`;export{e as default};