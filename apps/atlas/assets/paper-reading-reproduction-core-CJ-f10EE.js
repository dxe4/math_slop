var e=`---
id: course-paper-reading-reproduction-core
title: "Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction"
level: undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Reading a Mathematics Paper: Claims, Proofs and a Bounded Reproduction

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-paper-reading-reproduction-core/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A mathematical paper can contain definitions, proofs, algorithms, examples and measured performance claims. Reproducing one of these does not reproduce all the others. This course teaches you to locate a claim, translate its notation, track its dependencies and reproduce a small result from an actual research paper.

Our required paper is Ulrich Bauer's 2021 *Ripser* article. Its four-point rectangle is small enough to compute by hand, yet it exposes real issues: changing the order of tied events changes matrix indices; a filled triangle differs from a graph cycle; some algebraic birth/death pairs disappear when we return to geometric scale. We will reconstruct one short paper argument and reproduce this example, with complete first, changed and public-return models. This is a selected undergraduate paper-reading route, not a claim to have reproduced the whole software or the paper's benchmarks.

## Preparation, diagnostic and work records

Bring finite sets, vectors, matrix multiplication, linear maps, kernels, images, rank and a proof of an implication. You should be able to use rank–nullity in finite dimension. Arithmetic over $\\mathbb F_2$, simplicial chains, the required homology and filtration-preserving column reduction are taught below. You do not need the graduate algebraic-topology programme or a C++ installation.

If claims, counterexamples and proof scope are unfamiliar, begin with [Examples, Proofs and Evidence](#/item/course-claims-evidence-entry). Its component barcodes prepare the H₀ interpretation; this course adds chains and H₁. For linear algebra, use [Linear Algebra](#/item/course-linear-algebra-standard), Units 1–3, and their worked arguments on elimination, vector spaces and rank–nullity. The [simplicial homology recipe](#/item/recipe-simplicial-homology-computation), Steps 1–7, is the exact finite-computation preparation used here.

Attempt these diagnostic questions before their key:

1. Over $\\mathbb F_2=\\{0,1\\}$, calculate $1+1$ and $(1,1,0)+(0,1,1)$.
2. A map $D:\\mathbb F_2^3\\to\\mathbb F_2^3$ has rank 2. What is its kernel dimension?
3. A triangle has three vertices and three edges, but no filled face. How many dimensions can its one-dimensional cycle space have? What changes if the face is included?
4. Why does $D_1D_2=0$ imply that every vector in $\\operatorname{im}D_2$ lies in $\\ker D_1$?
5. A column's pivot is its greatest nonzero row index. Is adding a later column to an earlier one permitted by the simplexwise filtration-preserving reduction rule used here?
6. Does a successful fifteen-simplex calculation establish that one implementation is faster than every other implementation on all datasets?

Keep separate dated first, comparison and revised files for RESEARCH-PAPER-P, C and R. Name all sources, public keys and tools used; include earlier exposure to these models. Keep the original first file when revising. Euler notes are editable scratch work; a note or studied checkmark is not an immutable worksheet, graded attempt or proof verification. Use a new filename for another version.

There is no workload estimate or required waiting interval. Before R, do intervening work of your choice, record what it was and disclose prior key exposure. These are public reconstructions. Dates and declarations do not verify an unseen attempt or an elapsed delay. All required selected mathematics and feedback are readable locally below; internet access and executing code are optional.

## Diagnostic key and repairs

1. $1+1=0$, and the vector sum is $(1,0,1)$. Coefficients add modulo two; two occurrences cancel. Repair a sign or arithmetic error by adding each coordinate separately.
2. Rank–nullity gives kernel dimension $3-2=1$. Dimension counts use a field and finite-dimensional spaces here. Repair this using the rank–nullity argument in the named linear-algebra preparation.
3. The graph has one independent cycle. Adding its filled face makes that cycle a boundary, so H₁ becomes zero. We justify this with complete boundary matrices below. Repair the distinction with the recipe's triangle-boundary and filled-triangle examples.
4. If $z=D_2w$, then $D_1z=D_1D_2w=0$. This is the containment needed to form the homology quotient. Repair a missing inference by introducing $w$ explicitly.
5. No. This rule permits additions only from earlier columns. A later column may use a simplex not yet present at the current index. A particular harmless addition does not make it an allowed step of this rule. The permitted operation and its invariant are explained below.
6. No. The calculation concerns its exact finite inputs and arithmetic. Performance needs specified implementations, versions, hardware, workloads and measurements. No benchmark is executed or inferred in this course.

## The paper, edition and locally readable source selection

**Source pin.** Ulrich Bauer, *Ripser: efficient computation of Vietoris–Rips persistence barcodes*, *Journal of Applied and Computational Topology* **5** (2021), 391–423; version of record published 17 June 2021; DOI [10.1007/s41468-021-00071-5](https://doi.org/10.1007/s41468-021-00071-5). The [publisher's full text](https://link.springer.com/article/10.1007/s41468-021-00071-5) and rights statement were inspected on 3 November 2026. The article is licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its software has a separate licence; software execution is not part of our required reproduction.

**Attribution and changes.** The following mathematical source selection gives original explanatory paraphrases, notation translations, new proof explanations and newly typeset tables adapted from the selected parts of Bauer's article. The rectangle coordinates, prescribed refinement and apparent-pair example are attributed to Bauer. These adaptations are marked as such; the surrounding course and new variants are CC BY-SA 4.0. The paper itself retains its CC BY 4.0 licence. No complete paper, PDF, publisher image or benchmark dataset is bundled here.

| Exact source address in the pinned paper | Selected content available locally here | What is reconstructed or imported |
| --- | --- | --- |
| §2, the opening definitions and the paragraphs preceding Proposition 2.1 | Simplices, facets/cofacets, finite filtrations and the diameter convention, below. | Definitions and notation translated into our finite setting. |
| §2, Proposition 2.1 | The rule translating index intervals to scale intervals and dropping empty preimages. | The general reindexing result is attributed; for our two orders the unchanged real filtration is also checked directly. |
| §2, rectangle example following the refinement rules | Coordinates and the complete fifteen-simplex order printed below. | An actual paper example, with matrices reconstructed in P. |
| §3.1, Proposition 3.1 and Algorithm 1 | The matrix-pairing statement and left-to-right reduction rule below. | General pairing theorem imported with hypotheses; finite outputs additionally checked by direct ranks and maps. |
| §3.5, Definition 3.2 and Lemma 3.3, including the rectangle example between them | The two local conditions, the complete short argument below and five pairs identified in P. | Lemma reconstructed relative to the explicitly imported pairing theorem. |

For the selected work you can read the local mathematical selection, close its proof while reconstructing it, and cite the paper addresses above. Opening the complete paper is an optional way to inspect its wider context. Describe your actual source exposure: reading this adapted selection is reading a selected, attributed mathematical treatment of the paper, not reading every page of the article. Do not claim to have reconstructed the unassigned optimizations or the full general pairing theorem.

In the selected paper, a simplex is a nonempty finite vertex subset. A complex contains every nonempty face of every simplex it contains. A facet has one fewer vertex than its cofacet. A filtration is an increasing family of subcomplexes. We use an ordinary, unreduced homology convention over $\\mathbb F_2$ and include a simplex at its threshold, using $\\le$.

For a finite metric space, its Rips complex at scale $t$ contains each nonempty subset whose diameter is at most $t$. The diameter is the greatest pairwise distance; a vertex has diameter 0. Consequently the complex is empty for $t<0$. Every clique is filled. The full four-vertex clique includes four filled triangles and one tetrahedron, even when its input points lie in a plane.

A simplexwise refinement places one simplex at a time in a total order, with every proper face earlier than its coface. For the paper's prescribed order, sort first by increasing diameter, then increasing dimension, then by reverse colexicographic order of decreasing vertex tuples. To compare two decreasing tuples of the same size, compare their first unequal entry; the larger tuple comes earlier. The supplied table fixes every tie, so you do not need to guess an ordering.

Bauer's example has these exact Euclidean coordinates:

| Vertex | x | y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 3 | 0 |
| 2 | 0 | 4 |
| 3 | 3 | 4 |

We write \`32\` for the simplex $\\{3,2\\}$, not a two-digit vertex. Every vertex label in this course is one of 0, 1, 2 and 3. This notation is a compact version of the paper's decreasing tuples.

| Index | Simplex | Scale |
| --- | --- | --- |
| 1 | 3 | 0 |
| 2 | 2 | 0 |
| 3 | 1 | 0 |
| 4 | 0 | 0 |
| 5 | 32 | 3 |
| 6 | 10 | 3 |
| 7 | 31 | 4 |
| 8 | 20 | 4 |
| 9 | 30 | 5 |
| 10 | 21 | 5 |
| 11 | 321 | 5 |
| 12 | 320 | 5 |
| 13 | 310 | 5 |
| 14 | 210 | 5 |
| 15 | 3210 | 5 |

Here and below these integer indices start at 1; index 0 is reserved as the pivot of a zero column. The metric is Euclidean, the filtration uses diameter, and the field is $\\mathbb F_2$. These are inputs to the result, not interchangeable display choices.

## Finite chains, homology and inclusion maps

A $k$-chain is a formal sum of $k$-simplices with coefficients in $\\mathbb F_2$. It can be represented by the set of simplices with coefficient 1. Adding two chains takes their symmetric difference: a simplex appearing in both cancels. The vector space $C_k$ has the $k$-simplices as its basis.

The boundary of a positive-dimensional simplex is the sum of all faces obtained by deleting exactly one vertex. A vertex's boundary is zero. For example,

$$\\partial(210)=21+20+10,\\qquad \\partial(21)=2+1.$$

Every codimension-two face occurs twice when taking two boundaries, so it cancels modulo two. Thus $\\partial^2=0$ for every chain. This gives a general proof, and matrix products provide exact checks of a particular encoding.

Let $D_k$ represent $\\partial:C_k\\to C_{k-1}$. The cycles are $Z_k=\\ker D_k$; the boundaries are $B_k=\\operatorname{im}D_{k+1}$. Since $D_kD_{k+1}=0$, we have $B_k\\subseteq Z_k$. Homology is the quotient $H_k=Z_k/B_k$: cycles differing by a boundary describe the same class. Its dimension is

$$\\beta_k=\\dim C_k-\\operatorname{rank}D_k-\\operatorname{rank}D_{k+1}.$$

To see why, rank–nullity gives $\\dim Z_k=\\dim C_k-\\operatorname{rank}D_k$, and quotienting removes the subspace of dimension $\\operatorname{rank}D_{k+1}$.

For a triangle with vertex order 0,1,2 and edge order 10,20,21, the edge-boundary matrix and the filled-face boundary are

$$D_1=\\begin{pmatrix}1&1&0\\\\1&0&1\\\\0&1&1\\end{pmatrix},\\qquad D_2=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}.$$

The first two columns of $D_1$ are independent, and the third is their sum, so its rank is 2. Its kernel is the span of $(1,1,1)$. Multiplication gives $D_1D_2=0$. For the graph-only triangle there is no $D_2$ image, so H₁ has dimension 1. With the filled face, the image of $D_2$ is exactly that cycle line, so H₁ has dimension 0. In both cases H₀ has dimension $3-2=1$.

If a complex grows, including chains induces a map on homology: cycles remain cycles, and boundaries remain boundaries. Persistence records these maps as well as the vector spaces. Equal Betti numbers at separate stages need not give equal persistence; we must know which classes map to which. Our checks retain all inclusion-map ranks.

An interval $[b,d)$ describes a one-dimensional class present from $b$ up to but excluding $d$. An essential interval $[b,\\infty)$ has no finite death. Ordinary H₀ keeps one essential interval for a connected final complex. Do not remove it as though we were using reduced homology.

## Column reduction, a source dependency and the paired lemma

Form one square filtration boundary matrix $D$: column $j$ contains the indices of the facets of simplex $j$. Vertex columns are zero. Every nonzero row index is less than its column index, since faces come first. All arithmetic is in $\\mathbb F_2$.

For a nonzero column, its pivot is its greatest nonzero row index; a zero column has pivot 0. Process columns from left to right. While an earlier reduced column has the same nonzero pivot, add that earlier reduced column to the current column. Its pivot strictly decreases after an addition; the procedure terminates because row indices are nonnegative integers. The final nonzero pivots are distinct.

These are column operations, not arbitrary row operations. Starting with $V=I$, perform the same additions on its columns. At all times $R=DV$. Only an earlier column is added to a later one, so $V$ stays upper triangular with diagonal entries 1 and is invertible. The first $j$ transformed columns span the same subspace as the first $j$ original columns. This is why the operation respects the filtration.

**Imported matrix-pairing result, Bauer §3.1 Proposition 3.1.** For a filtration boundary matrix $D$ over a field and invertible upper triangular $V$ such that $R=DV$ is reduced, a nonzero pivot $i$ in column $j$ gives the index persistence pair $(i,j)$. Essential indices are exactly the zero-column indices that are not used as any later pivot. We use this general theorem as an attributed dependency; its full general proof is outside the selected reconstruction. Our finite calculations will also be checked by independent kernels, images and inclusion maps.

The dimension of a paired class is one less than the dimension of its death simplex. Map an index pair $(i,j)$ to the real interval $[s_i,s_j)$, where $s_i,s_j$ are the two scales. If $s_i=s_j$, this interval is empty and contributes no positive-length real-scale bar. An essential index maps to $[s_i,\\infty)$. This is the selected content of Bauer §2 Proposition 2.1. Distinguish an empty scale interval from an error in the index calculation.

**Paired lemma, reconstructed from Bauer §3.5 Definition 3.2 and Lemma 3.3.** Let a finite simplicial complex have a simplexwise, face-first filtration order over $\\mathbb F_2$. Suppose $\\sigma$ is a facet of $\\tau$. Require both:

1. among all facets of $\\tau$, $\\sigma$ has the greatest index;
2. among all cofacets of $\\sigma$, $\\tau$ has the least index.

Then $(\\sigma,\\tau)$ is a persistence pair. The paper calls such a pair apparent; its temporal words refer to the greatest-index facet and least-index cofacet, respectively. The two extremal conditions concern codimension-one incidence, not arbitrary containment.

**Complete short proof with its dependency visible.** In the raw column of $\\tau$, the row of $\\sigma$ is nonzero and every nonzero row is at most that row, by condition 1. Thus its pivot is the index of $\\sigma$. Condition 2 says that no earlier column has a nonzero entry in that row: an entry there would mean an earlier cofacet. Every linear combination of earlier columns also has zero in that row. Earlier-column additions therefore cannot remove this coefficient or produce a pivot smaller than it. The raw column already has the smallest possible pivot and is reduced. The imported matrix-pairing result now identifies the pair. This proves the lemma under its stated hypotheses. It does not prove the converse or the entire matrix-pairing theorem.

Every persistence pair need not be apparent, and satisfying just one of the two conditions is insufficient. The changed task will require exact witnesses. This is a mathematical repair exercise, not an invitation to infer a more general theorem from whichever pairs happen to work.

## Existing selected questions and complete feedback

Keep [Research Frontiers Through Seven Lenses](#/item/reader-research-frontiers-seven-lenses) as orientation, especially **Lens V** and **One method across all seven fields**. Its broader research prerequisites and dated status statements keep their original meanings. The two following questions belong to the existing public studio. The online square question's prompt and full solution now state \`0<=r<1\` in place of \`r<1\`, making the intended nonnegative range explicit. Both questions retain their IDs, hints and all other wording.

| Exact native question address | Required work | Complete feedback address |
| --- | --- | --- |
| [Do not forget the filled simplices](#/item/exercise-research-frontiers-claim-boundary?exercise=research-frontiers-tda-square-filtration), ID \`research-frontiers-tda-square-filtration\` | Derive the unit-square Rips stages and H₁ interval, filling every clique. Use the nonnegative scale range $r\\ge0$. | That selected exercise's full **solution**, not only its shorter **answer**; complete local comparison immediately below. |
| [Stability is one arrow, not the whole pipeline](#/item/exercise-research-frontiers-claim-boundary?exercise=research-frontiers-tda-stability-inference), ID \`research-frontiers-tda-stability-inference\` | Give at least four missing bridges between deterministic stability and a significant biological mechanism. | That selected exercise's full **solution**; complete local comparison immediately below. |

For the square, side lengths are 1 and diagonals are $\\sqrt2$. On $0\\le r<1$, there are four vertices and no edges, giving $(\\beta_0,\\beta_1)=(4,0)$. On $1\\le r<\\sqrt2$, there are four side edges, one component and one cycle, giving $(1,1)$. From $r=\\sqrt2$ onwards, all edges, triangles and the tetrahedron are present; the full simplex has $(1,0)$. For an explicit cycle check, the side loop is nonzero in the graph's kernel with no two-boundaries before the diagonals. After they enter it is the sum of two triangular boundaries. H₁ therefore has the interval $[1,\\sqrt2)$. Under the all-real diameter definition used in this course, $r<0$ gives the empty complex; the source task's initial four-vertex regime is used here on its intended nonnegative scales.

For the inference question, a complete response separates: (i) empirical-input closeness to a specified population target in the theorem's metric; (ii) validity of preprocessing and the biological distance; (iii) selection of the longest bar and any reuse of the same data for testing; (iv) sampling uncertainty and a defensible null comparison; (v) sensitivity to filtration, coefficients and tuning; (vi) independent validation; and (vii) a scientific argument connecting the summary to a mechanism. Any four correctly explained missing bridges answer the requested minimum. A bound for the diagram map alone supplies none of these automatically. Our fifteen-simplex example has no biological population or observations.

These are complete comparisons of the selected tasks, not new assessments. A native “solved” mark is self-report. Reading their public keys should be disclosed in subsequent work.

## A theorem comparison available offline

A second primary paper is optional reading: Cohen-Steiner, Edelsbrunner and Harer, *Stability of Persistence Diagrams*, **SCG’05 conference version**, §§2–3.1, available from the [author-hosted PDF](https://pub.ista.ac.at/~edels/Papers/2007-01-StabilityPersistenceDiagrams.pdf). The PDF identifies that conference version despite its filename. The later journal article is *Discrete & Computational Geometry* 37 (2007), 103–120, DOI [10.1007/s00454-006-1276-5](https://doi.org/10.1007/s00454-006-1276-5). We do not bundle that copyrighted PDF. The following comparison is complete local teaching and does not require opening it.

As stated and sourced in the existing [stability clinic](#/item/deep-dive-research-frontier-persistence-stability-clinic), the theorem concerns two continuous tame real functions $F,G$ on the same triangulable space $X$. Its persistence diagrams satisfy

$$d_B(D(F),D(G))\\le\\sup_{z\\in X}|F(z)-G(z)|.$$

The cited version uses $\\mathbb F_2$. Triangulable here means homeomorphic to a finite simplicial complex. Tame means finitely many homological critical values and finite-dimensional sublevel homology in every degree. A homological critical value marks failure of an inclusion across arbitrarily small surrounding levels to induce an isomorphism in some degree. These hypotheses, the common domain and the diagram conventions are part of the imported theorem. The general proof is not reproduced by either our rectangle or the local finite-path proof.

For finite bars the bottleneck matching cost is the maximum endpoint difference. An unmatched finite interval $[b,d)$ costs $(d-b)/2$ to match to the diagonal, attained at its midpoint: errors bounded by $r$ imply $d-b\\le2r$, and the midpoint attains that bound. Account for finite bars on both sides. Essential intervals match essential intervals at the absolute birth difference. Minimize the largest cost over allowed matchings. Stability allows short features to disappear and does not assert statistical significance.

The [persistence claim lab](#/item/deep-dive-research-frontier-persistence-claim-lab) and its clinic supply the complete bridge for their fixed path: discrete component filtrations and piecewise-linear sublevel functions have corresponding H₀ maps, and coordinate sup error equals the continuous-function sup error. Those results are about that common path. Bauer's rectangle starts from distances and a Rips complex. To apply a theorem to two different point clouds, one must supply an appropriate common-space construction or another theorem with the right input objects and metrics. Merely seeing “stability” in both contexts does not supply that bridge.

| Claim | Mathematical support used here | Limit |
| --- | --- | --- |
| The rectangle has the printed finite barcodes. | Exact chains, reduction and inclusion maps in this course. | One specified input and field. |
| The two-condition lemma holds for every allowed finite filtration. | The short proof above, using the named matrix-pairing dependency. | Neither its converse nor all software optimizations follows. |
| The general function-space stability bound holds under its hypotheses. | Imported primary theorem, with source and hypotheses. | No general stability proof or sample-to-population theorem supplied here. |
| Ripser has the performance described in its paper's experiments. | The paper's reported experiment, outside our reproduction. | Our hand tables execute no software benchmark and validate no universal speed ranking. |

## RESEARCH-PAPER-P — Read, reconstruct and reproduce

Make a dated first response before opening the P model. You may use the locally readable source selection, but say which proof and keys you have already seen.

1. Create a paper ledger recording author, title, edition, DOI, licence, precise source sections, local adaptation status and the bounded result you intend to reproduce. Translate “simplexwise”, facet/cofacet, pivot, index pair, scale interval and essential index into your own notation.
2. Close the paired-lemma proof. State every hypothesis and reconstruct its argument, identifying the imported result used in the final inference. Explain why both conditions occur in the proof.
3. For the paper's rectangle and supplied fifteen-simplex order, construct every boundary column over $\\mathbb F_2$. Show $D^2=0$ and perform left-to-right reduction, recording each earlier reduced column added, every final column and pivot. Keep row and column identities explicit.
4. Give all seven index pairs and the essential index. Translate them to geometric intervals, identifying every empty scale interval. Supply H₀, H₁ and the higher-dimensional result, including all thresholds and inclusion information needed to reproduce them.
5. Identify all five apparent pairs in this example. Distinguish them from the full persistence-pair list. Complete the two selected native questions and compare with their full feedback.
6. State which paper result you reproduced, which lemma you reconstructed with an imported dependency, and which paper claims remain unreproduced. Write the comparison and revised files separately.

## RESEARCH-PAPER-P — Complete model

A complete paper ledger uses the source pin and section table above. The locally provided material is an attributed mathematical adaptation, and the bounded target is the rectangle's filtration, its matrix pairs and its scale barcodes over $\\mathbb F_2$. A simplexwise order adds one simplex per index; a facet/cofacet relation changes dimension by one; the pivot is a largest row index, not a geometric height. An essential index has a zero reduced column and is never used as a later pivot. An index interval can be nonempty while its corresponding geometric interval is empty.

For the lemma, specify a finite complex, a face-first total order, field arithmetic and the facet relation. The latest-facet condition makes the candidate row the raw column's pivot; the earliest-cofacet condition ensures every earlier column is zero in that row. No permitted column combination can remove it. Invoke the named matrix-pairing result to obtain the persistence pair. This is a complete reconstruction of the selected lemma relative to its declared dependency. It does not reconstruct that dependency's whole proof.

Here are all boundary and reduction data. An entry such as \`1,2\` denotes the set of row indices with coefficient 1; \`∅\` is the zero chain. “Add” lists **earlier reduced columns**, in the order used. Every sum is symmetric difference. Row indices refer to the same simplex order as columns.

| Index | Simplex | Scale | D column | Add | R column | Pivot |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 | 0 | ∅ | ∅ | ∅ | 0 |
| 2 | 2 | 0 | ∅ | ∅ | ∅ | 0 |
| 3 | 1 | 0 | ∅ | ∅ | ∅ | 0 |
| 4 | 0 | 0 | ∅ | ∅ | ∅ | 0 |
| 5 | 32 | 3 | 1,2 | ∅ | 1,2 | 2 |
| 6 | 10 | 3 | 3,4 | ∅ | 3,4 | 4 |
| 7 | 31 | 4 | 1,3 | ∅ | 1,3 | 3 |
| 8 | 20 | 4 | 2,4 | 6,7,5 | ∅ | 0 |
| 9 | 30 | 5 | 1,4 | 6,7 | ∅ | 0 |
| 10 | 21 | 5 | 2,3 | 7,5 | ∅ | 0 |
| 11 | 321 | 5 | 5,7,10 | ∅ | 5,7,10 | 10 |
| 12 | 320 | 5 | 5,8,9 | ∅ | 5,8,9 | 9 |
| 13 | 310 | 5 | 6,7,9 | 12 | 5,6,7,8 | 8 |
| 14 | 210 | 5 | 6,8,10 | 11,13 | ∅ | 0 |
| 15 | 3210 | 5 | 11,12,13,14 | ∅ | 11,12,13,14 | 14 |

For instance, column 8 becomes $\\{2,4\\}\\mathbin\\triangle\\{3,4\\}=\\{2,3\\}$ after adding column 6, then $\\{1,2\\}$ after column 7, then zero after column 5. Column 13 adds column 12 to change $\\{6,7,9\\}$ into $\\{5,6,7,8\\}$. Column 14 adds 11 to give that same chain, then adds 13 to become zero. These examples also explain how to read the entire table.

To audit $D^2=0$, vertex and edge columns have zero second boundary. Each triangle gives every one of its vertices twice after two boundaries. The tetrahedron gives every edge twice. These cancel over $\\mathbb F_2$. This face-count proof covers every column printed here. It also catches a missing facet: for example, deleting edge 10 from the boundary of triangle 210 leaves second boundary $1+0\\ne0$.

The complete pair list is:

| Birth index | Death index | Homology degree | Scale birth | Scale death | Real-scale status |
| --- | --- | --- | --- | --- | --- |
| 2 | 5 | 0 | 0 | 3 | positive |
| 4 | 6 | 0 | 0 | 3 | positive |
| 3 | 7 | 0 | 0 | 4 | positive |
| 10 | 11 | 1 | 5 | 5 | empty |
| 9 | 12 | 1 | 5 | 5 | empty |
| 8 | 13 | 1 | 4 | 5 | positive |
| 14 | 15 | 2 | 5 | 5 | empty |

The only essential index is **1**, simplex **3**, in degree 0, born at scale 0. Zero columns 2,3,4,8,9,10 and 14 are subsequently paired; they are not essential. Ordinary H₀ keeps the essential class.

The complete nonempty scale barcodes are:

| Degree | Intervals with multiplicity |
| --- | --- |
| 0 | $[0,\\infty),[0,3),[0,3),[0,4)$ |
| 1 | $[4,5)$ |
| 2 | none |
| 3 | none |

Here is a direct check using the actual complexes:

| Scale range | Simplex counts by dimension | Boundary ranks in degrees 1,2,3 | Betti numbers in degrees 0,1,2,3 |
| --- | --- | --- | --- |
| $t<0$ | 0,0,0,0 | 0,0,0 | 0,0,0,0 |
| $0\\le t<3$ | 4,0,0,0 | 0,0,0 | 4,0,0,0 |
| $3\\le t<4$ | 4,2,0,0 | 2,0,0 | 2,0,0,0 |
| $4\\le t<5$ | 4,4,0,0 | 3,0,0 | 1,1,0,0 |
| $t\\ge5$ | 4,6,4,1 | 3,3,1 | 1,0,0,0 |

At scale 3 the two horizontal edges give two disjoint components. At 4 the two vertical edges connect them and create the rectangle cycle. Its chain is $32+10+31+20$. At 5 this cycle is the boundary sum $\\partial(320)+\\partial(310)$, so its inclusion image is zero. The final space is the full simplex; its matrix ranks give no higher homology. The H₀ maps merge four components into two and then one, with the last component surviving. These actual maps, not counts alone, justify the printed interval lifetimes.

In the supplied order the five apparent pairs are:

| Facet simplex | Cofacet simplex | Birth index | Death index |
| --- | --- | --- | --- |
| 2 | 32 | 2 | 5 |
| 0 | 10 | 4 | 6 |
| 21 | 321 | 10 | 11 |
| 30 | 320 | 9 | 12 |
| 210 | 3210 | 14 | 15 |

For each, inspect all facets of the right simplex and all cofacets of the left. The left is the last facet and the right is the first cofacet. This reproduces the paper's five-pair example, after translating its tuples into our notation. The two additional persistence pairs are $(3,7)$ and $(8,13)$ in index notation. They come from the full reduction and need not satisfy the apparent-pair test.

A complete result statement is: “I reproduced the selected rectangle example's finite F₂ filtration and pair/barcode calculations, and reconstructed the selected lemma using the attributed pairing theorem.” No software was run by these hand tables. The full Ripser implementation, optimizations, benchmark timings, memory use and scientific inference remain outside this reproduction. Retain the exact metric, coefficients, ties, full simplex list and source edition in the work record.

## RESEARCH-PAPER-C — Change the complex and test the hypotheses

Begin a new dated first response and disclose the P material you have seen.

1. Keep the rectangle's coordinates, scales and first ten ordered simplices, but retain **only vertices and edges at every scale**. Give its full ten-column boundary/reduction table, all finite pairs and all essential indices. Compute its complete scale barcodes.
2. Compare its H₁ inclusion maps with the original. Explain precisely why this construction is a graph filtration and why the original full-Rips output cannot be transferred to it.
3. Audit “the greatest-index facet condition alone guarantees a persistence pair.” Test facet simplex 0 with edge simplex 20 in the original fifteen-simplex order. Verify the condition it satisfies, identify the condition it fails and show its actual reduction outcome. Also audit the least-index-cofacet condition alone, testing original vertex 3 with edge 32. Give a checked failure for each one-condition assertion.
4. Audit the converse “every persistence pair is apparent.” Test simplex 1 with edge 31 in the original order. Give an exact refutation and state a proved replacement for all three false assertions.
5. Repair a report that calls the graph result a reproduction of Bauer's full rectangle Rips example. State what it actually reproduces and which additional simplices restore the selected paper calculation. Compare with the full C model and keep separate comparison/revised files.

## RESEARCH-PAPER-C — Complete model

The changed filtration is the one-skeleton at each scale: only vertices and qualifying edges are retained. Its complete trace is:

| Index | Simplex | Scale | D column | Add | R column | Pivot |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 | 0 | ∅ | ∅ | ∅ | 0 |
| 2 | 2 | 0 | ∅ | ∅ | ∅ | 0 |
| 3 | 1 | 0 | ∅ | ∅ | ∅ | 0 |
| 4 | 0 | 0 | ∅ | ∅ | ∅ | 0 |
| 5 | 32 | 3 | 1,2 | ∅ | 1,2 | 2 |
| 6 | 10 | 3 | 3,4 | ∅ | 3,4 | 4 |
| 7 | 31 | 4 | 1,3 | ∅ | 1,3 | 3 |
| 8 | 20 | 4 | 2,4 | 6,7,5 | ∅ | 0 |
| 9 | 30 | 5 | 1,4 | 6,7 | ∅ | 0 |
| 10 | 21 | 5 | 2,3 | 7,5 | ∅ | 0 |

The finite pairs remain $(2,5),(4,6),(3,7)$, all in degree 0. The essential indices are 1 in degree 0 and 8,9,10 in degree 1. The first is the surviving component; the three later zero columns create independent graph cycles. There is no two-boundary space to kill them.

| Degree | Intervals with multiplicity |
| --- | --- |
| 0 | $[0,\\infty),[0,3),[0,3),[0,4)$ |
| 1 | $[4,\\infty),[5,\\infty),[5,\\infty)$ |
| 2 | none |
| 3 | none |

At 4 the graph is the four-cycle, with H₁ dimension 1. At 5 it is the complete graph on four vertices, with six edges and one component. Its edge boundary has rank $4-1=3$, giving H₁ dimension $6-3=3$. More explicitly, the three reduced-to-zero edge chains are

$$z_8=20+10+31+32,\\quad z_9=30+10+31,\\quad z_{10}=21+31+32.$$

Each has zero boundary. They are independent because edges 20,30,21 occur respectively in just one of the three chains. They form a basis by the dimension count. The first cycle remains nonzero under inclusion and the other two are born at 5. This establishes the inclusion information, not only the final Betti number. With no higher simplices, all these classes persist to infinity.

For the weakened condition, facet 0 has index 4 and is the greatest-index facet of edge 20, whose other facet 2 has index 2. However edge 10 at index 6 is an earlier cofacet of 0 than edge 20 at index 8. The second condition fails. In the full table, column 8 reduces to zero, so $(4,8)$ is not a persistence pair. This is an exact counterexample to the weakened assertion with its hypothesis checked.

For the other one-condition assertion, original vertex 3 has index 1, and its first cofacet is edge 32 at index 5. It satisfies the least-index-cofacet condition. But the other facet of edge 32, vertex 2, has the larger index 2, so the greatest-index-facet condition fails. Column 5 has pivot 2: its persistence pair is $(2,5)$, not $(1,5)$. This separately refutes the claim that the first-cofacet condition alone suffices.

For the converse, simplex 1 has index 3 and edge 31 has index 7. Column 7 has pivot 3, so $(3,7)$ is a persistence pair. But the first cofacet of simplex 1 is edge 10 at index 6, earlier than 31. The pair is not apparent. This allowed example refutes the converse.

A proved replacement for these false generalizations is the forward implication under **both** extremal conditions, exactly the paired lemma above. Its hypotheses are a finite simplicial complex, a face-first total order, the field convention and a facet/cofacet pair satisfying both conditions. The complete proof has already identified where each condition enters. The counterexamples and that proof justify the repair; no new conjecture is substituted for a false theorem.

The graph calculation is a new controlled variant of the paper example, not the original full-Rips result. To restore the original, at scale 5 include the four triangles 321,320,310,210 and the tetrahedron 3210, with their face-first ordering. The original reduction then kills the positive H₁ class at 5; same-scale extra pairs contribute empty intervals. A report should name the actual graph filtration and list its essential H₁ intervals, or restore the full construction before claiming to have reproduced the selected paper example.

## RESEARCH-PAPER-R — Public return with a changed tie order

After intervening work, write a separate first response before reopening the models. State the intervening work, earlier P/C/source-key exposure and support used now. If you already read this return model, call it public reconstruction after that exposure. No delay or independent-assessment claim is enforced.

Keep the complete Rips complexes and all original scale values. Change only the order among the four vertices at scale 0 to 0,1,2,3. Keep every edge, triangle and tetrahedron tie in its original order. This is a new allowed face-first refinement supplied by the course; it is not the paper's prescribed reverse-colexicographic refinement.

1. Produce the full fifteen-simplex order and all boundary, addition, reduced-column and pivot data. Give seven pairs, every empty scale interval and the essential index with its vertex label.
2. Explain why the allowed refinement can change the birth simplex paired to an edge while leaving the real-scale persistence unchanged. Check this using the full scale filtrations and their inclusion maps, not only matching final Betti numbers.
3. Reconstruct the two-condition lemma and its imported dependency. Identify all apparent pairs in the new order. Does every persistence pair have to be an incident facet/cofacet pair?
4. Rebuild the mixed claim ledger below. For each card give its strongest support, allowed scope and one unsupported extension. Repair any false implication with an exact witness or a proved statement.
5. Compare your first, comparison and revised files. Name one reproducible finite result, one reconstructed argument and one source claim that remains outside your work.

| Card | Claim to audit |
| --- | --- |
| R1 | The original fifteen-column trace reproduces the paper's reported runtime and memory improvements. |
| R2 | A pair satisfying the two extremal incidence conditions in any allowed finite filtration is a persistence pair, by the reconstructed proof and named dependency. |
| R3 | The return has different vertex identities in some index pairs, so it must have a different positive real-scale barcode. |
| R4 | The imported common-space continuous-tame stability theorem applies to any two point clouds merely because both have persistence diagrams. |
| R5 | Exact reduction and inclusion checks establish the two printed rectangle refinements' results over F₂. |
| R6 | The graph-only changed variant has three essential H₁ intervals; therefore the full Rips rectangle also has them. |

## RESEARCH-PAPER-R — Complete model

Changing the first four basis positions changes edge boundaries in index coordinates. The full trace, with the same conventions as P, is:

| Index | Simplex | Scale | D column | Add | R column | Pivot |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | ∅ | ∅ | ∅ | 0 |
| 2 | 1 | 0 | ∅ | ∅ | ∅ | 0 |
| 3 | 2 | 0 | ∅ | ∅ | ∅ | 0 |
| 4 | 3 | 0 | ∅ | ∅ | ∅ | 0 |
| 5 | 32 | 3 | 3,4 | ∅ | 3,4 | 4 |
| 6 | 10 | 3 | 1,2 | ∅ | 1,2 | 2 |
| 7 | 31 | 4 | 2,4 | 5 | 2,3 | 3 |
| 8 | 20 | 4 | 1,3 | 7,6 | ∅ | 0 |
| 9 | 30 | 5 | 1,4 | 5,7,6 | ∅ | 0 |
| 10 | 21 | 5 | 2,3 | 7 | ∅ | 0 |
| 11 | 321 | 5 | 5,7,10 | ∅ | 5,7,10 | 10 |
| 12 | 320 | 5 | 5,8,9 | ∅ | 5,8,9 | 9 |
| 13 | 310 | 5 | 6,7,9 | 12 | 5,6,7,8 | 8 |
| 14 | 210 | 5 | 6,8,10 | 11,13 | ∅ | 0 |
| 15 | 3210 | 5 | 11,12,13,14 | ∅ | 11,12,13,14 | 14 |

For example, the return's column 7 adds column 5: $\\{2,4\\}\\mathbin\\triangle\\{3,4\\}=\\{2,3\\}$. Its pivot is now row 3, which labels vertex 2. The edge still is 31. A persistence birth simplex need not be a facet of its death simplex; reduction can change the cycle representative. The narrower apparent-pair definition does require facet incidence.

| Birth index | Death index | Homology degree | Scale birth | Scale death | Real-scale status |
| --- | --- | --- | --- | --- | --- |
| 4 | 5 | 0 | 0 | 3 | positive |
| 2 | 6 | 0 | 0 | 3 | positive |
| 3 | 7 | 0 | 0 | 4 | positive |
| 10 | 11 | 1 | 5 | 5 | empty |
| 9 | 12 | 1 | 5 | 5 | empty |
| 8 | 13 | 1 | 4 | 5 | positive |
| 14 | 15 | 2 | 5 | 5 | empty |

The sole essential index is **1**, now vertex **0**, degree 0, scale 0. In P it represented vertex 3. Its essential birth time did not change.

| Degree | Intervals with multiplicity |
| --- | --- |
| 0 | $[0,\\infty),[0,3),[0,3),[0,4)$ |
| 1 | $[4,5)$ |
| 2 | none |
| 3 | none |

At each real scale, both refinements include exactly the same simplices, and the inclusions between scale complexes are literally the same maps. Thus the resulting real-scale persistence is identical. This directly explains why the changed algebraic representatives cannot alter the positive intervals. The three same-scale pairs still give empty intervals. Equality of final Betti numbers alone would not have established this conclusion for different filtrations.

The return's apparent pairs are:

| Facet simplex | Cofacet simplex | Birth index | Death index |
| --- | --- | --- | --- |
| 3 | 32 | 4 | 5 |
| 1 | 10 | 2 | 6 |
| 21 | 321 | 10 | 11 |
| 30 | 320 | 9 | 12 |
| 210 | 3210 | 14 | 15 |

The same lemma proof applies: in each pair the candidate pivot row is the final facet row and is absent from all earlier columns. Both conditions are checked in this new order, and the imported pairing result supplies the last inference. The return pair $(3,7)$ means vertex 2 paired to edge 31; vertex 2 is not a facet of that edge, giving the requested negative answer about all persistence pairs.

| Card | Strongest support and scope | Repair or prohibited extension |
| --- | --- | --- |
| R1 | The hand trace is an exact finite mathematical reproduction. The paper's implementation experiments are a separate reported empirical claim. | Replace “reproduces performance” by “reproduces the selected finite pair/barcode calculation.” No runtime, memory or universal speed conclusion is supported here. |
| R2 | A general lemma under stated finite-complex, order, field and incidence hypotheses, reconstructed using the imported pairing theorem. | Neither the converse nor either one-condition version follows; C supplied exact counterexamples. |
| R3 | It confuses basis representatives and index pairs with the real filtration. | P and R are a concrete failure of the implication: their index labels differ and their real complexes and maps coincide, proving equal scale persistence. |
| R4 | The theorem is imported with continuous tame functions on a common triangulable space and a specified sup metric. | Supply an actual common-space/input-metric bridge or use a correctly scoped theorem for point clouds. Merely having diagrams supplies none of those hypotheses. |
| R5 | Exact finite calculation, including all boundary columns, reduction steps, scale intervals and inclusion information for these two specified orders. | It proves these cases, not every implementation's correctness or every filtration theorem. |
| R6 | The graph-only result is exact for that graph filtration. | The full clique filtration includes triangles and a tetrahedron at 5; its H₁ dies there. Restore the actual complex or state the graph result with its own hypotheses. |

A full return distinguishes a changed order from a changed complex, and distinguishes mathematical calculation from measured software behaviour. Its source ledger records prior key exposure and the actual selected reading; it does not claim an unseen reproduction or a new research finding.

## Descriptive review, mathematical repairs and next choices

Use these criteria with the complete models. They give feedback without a score or mastery decision.

| Check | What a complete response retains | Error-specific repair |
| --- | --- | --- |
| Primary-source identity | Author, exact edition, DOI, selected addresses, licence and adaptation status. | Rebuild the source pin; do not silently exchange an arXiv or conference version for the inspected journal text. |
| Hypotheses and dependencies | The field, finite complex, face-first order and both incidence conditions, with the pairing theorem named as imported. | Draw the dependency arrow; use C's witnesses to test each omitted condition. |
| Valid chain encoding | Every facet, row identity and the cancellation $D^2=0$. | Delete one facet deliberately, calculate its nonzero second boundary, then restore the full boundary. |
| Filtration-preserving reduction | Earlier-column additions, strictly decreasing pivots when additions occur, distinct final nonzero pivots and the $R=DV$ certificate. | Reconstruct the first erroneous column using the actual earlier reduced columns; never replace this with unrestricted row elimination. |
| Complete intervals | Every finite pair, essential index, dimension, empty scale interval and nonempty barcode with multiplicity. | Check all zero columns for later pivot use; keep ordinary H₀'s surviving interval. |
| Maps and changed mechanism | The cycle-killing triangular boundaries in P and surviving graph cycles in C; identical real maps in R. | Explain an actual inclusion image; final Betti numbers alone are insufficient. |
| Reproduction scope | Finite outputs separated from imported theorems, unrun code, benchmarks and population claims. | Replace a broader sentence with the exact result and missing bridge. |
| Work trail | Separate dated first/comparison/revised files and public-source/key declarations. | Keep the first response and add an honest comparison; editable notes remain scratch work. |

If the diagnostic still interrupts you, complete its repairs and the recipe's triangle calculation before attempting another paper. If the finite algorithm is clear but the lemma remains opaque, reconstruct the two extremal conditions and the pivot argument from one printed column. If you can reconstruct all three portfolios, a useful continuation is the [finite-path stability clinic](#/item/deep-dive-research-frontier-persistence-stability-clinic), with its named preparation and complete all-real-height proof, or the [TDA survey](#/item/deep-dive-research-frontier-topological-data-analysis) with its additional homology and statistical prerequisites.

The original [seven-lens reader](#/item/reader-research-frontiers-seven-lenses) remains orientation and the [claim-boundary studio](#/item/exercise-research-frontiers-claim-boundary) remains selected public practice. Their existence and your completion of this bounded route do not qualify the entire research-frontiers subject. Current-status claims about open problems require their own dated verification; this course makes no new claim about their present resolution.

Your stopping record should identify the exact finite result you can reproduce, the selected argument you can reconstruct and the next missing dependency you intend to study. No paper-wide implementation, benchmark, supervised research project or observed learner outcome is certified by these public models.
`;export{e as default};