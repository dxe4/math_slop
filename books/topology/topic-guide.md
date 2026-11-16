# Topic guide

| Topic | Main chapter |
|---|---|
| sets, inverse images, equivalence | [Chapter 1](01-sets-maps.md) |
| metrics, Cauchy sequences, completeness | [Chapter 2](02-metric-spaces.md) |
| open sets, closure, boundary | [Chapter 3](03-topological-spaces.md) |
| bases, subbases, countability | [Chapter 4](04-bases-subbases.md) |
| continuity, homeomorphism, embedding | [Chapter 5](05-continuity-homeomorphism.md) |
| products and quotients | [Chapter 6](06-subspace-product-quotient.md) |
| connectedness and components | [Chapter 7](07-connectedness.md) |
| compactness | [Chapter 8](08-compactness.md) |
| separation and metrization | [Chapter 9](09-separation-countability.md) |
| nets, filters, function spaces | [Chapter 10](10-convergence-nets-function-spaces.md) |
| homotopy and fundamental group | [Chapter 11](11-homotopy-fundamental-group.md) |
| covering spaces | [Chapter 12](12-covering-spaces.md) |
| complexes, homology, cohomology | [Chapters 13–16](13-simplicial-cw-complexes.md) |
| manifolds and bundles | [Chapter 17](17-manifolds-bundles.md) |
| differential forms | [Chapter 18](18-differential-forms-derham.md) |
| surfaces and knots | [Chapter 19](19-surfaces-knots.md) |
| categories and sheaves | [Chapters 20–21](20-category-functors.md) |
| persistent homology | [Chapter 22](22-computational-persistence.md) |
| paracompactness, partitions of unity, dimension, nerves | [Chapter 23](23-paracompactness-dimension.md) |
| relative homology, excision, Mayer–Vietoris | [Chapter 24](24-relative-homology-mayer-vietoris.md) |
| tensor, Tor, Ext, UCT, Künneth | [Chapter 25](25-homological-algebra-coefficients.md) |
| degree, intersection, Lefschetz, fixed points | [Chapter 26](26-degree-intersection-lefschetz.md) |
| higher homotopy, fibrations, obstructions | [Chapter 27](27-higher-homotopy-fibrations-obstructions.md) |
| local coefficients, orientation system, cap product | [Chapter 28](28-local-coefficients-orientation.md) |

## Reading routes

**Point-set route:** Chapters 1–10 in order.

**Algebraic route:** Chapters 1–8, then 11–16.

**Geometry route:** Chapters 1–12, then 17–19.

**Data route:** Chapters 1–8, 13–16, and 22.

**Local-to-global route:** Chapters 3–6, 15–18, then 20–21.

**Graduate algebraic route:** Chapters 11–16, then 24–28. Chapter 25 repairs
the coefficient algebra before Chapters 26–28 use it.

**Manifold foundations route:** Chapters 3–9, 17–18, 23, 26, and 28.

## Selected topology core — From open sets to surfaces {#sec-topology-selected-core}

This ordered route selects a proof-based undergraduate core in point-set
topology, compactness, surfaces and introductory homology. The scope labels
below organize existing questions; retain each source's printed question ID
or number in your work. The original reading routes above remain available.

Bring set and function language, quantifier proofs, metric-space examples and
finite-dimensional linear algebra: kernel, image, quotient, row reduction and
rank–nullity. Use [Appendix A](app-a-readiness.md) at the point of need.
Before the loop arguments, read the group definition in course Unit 6 and
[the group contract and its first consequences](#/books/algebra-patterns-structure/groups-subgroups-generated-structure),
Sections 1–2. No smooth geometry or calculus is required for this selection.
The optional full [Topology and Manifolds course](#/courses/atlas-topology-manifolds-standard)
retains its own broader preparation and later smooth units.

There is no time estimate for this combined selection. The course's
1,320-minute estimate covers its full outline, and the computation recipe's
210-minute estimate covers that recipe; neither estimates this selection.
Revising work and returning to it later also take time.

**Keep a work trail for every assigned item.** Save separately labeled,
dated first-response, comparison and corrected files, using the printed
question ID/number and the scope label. Record the space, topology, coefficient
system and theorem assumptions you used, plus any hints, public answers,
reference code or other help already seen. Preserve the first file before
opening further support. In the comparison file, name the failed proof step
or source criterion and the exact repair reading/task; put your corrected
argument in a third file. Check that editing the current note has not changed
the retained first file, and keep a separate copy you can reopen and copy back
into an editor after a restart. Native notes and reading marks remain useful
mutable aids; these external files are learner-managed, not automatic
immutable task history, grades or evidence of unaided work. Where a source
supplies a rubric, use it for descriptive comparison; otherwise compare every
requested object and justification with its complete key.

### TOP-CORE-ENTRY — Definitions before spaces {#sec-top-core-entry}

**Prepare and attempt:** In the
[prerequisite diagnostic](#/books/topology-proof-counterexample),
complete A1, A2, A4, A5; B1, B2, B5; and C1, C3, C4, C6.
Then answer Question 3 of the course's **Entry diagnostic and 22-hour route**:
find the kernel of the displayed map from three variables to their first-two
sum. These are the required diagnostic selections; the later smooth
diagnostic is outside this route.

**Compare and repair:** Each selected A/B/C item has its own adjacent
**Answer**; the course gives the kernel answer immediately below its
diagnostic. Use the named diagnostic repair routes and Appendix A for
quantifiers, inverse images, factorization and linear algebra before the
corresponding later scope. Keep a corrected explanation, not only a secure/
partly-secure mark.

### TOP-CORE-POINTSET — Opens and inverse images {#sec-top-core-pointset}

**Read and attempt:** Use course Units 1–2, with this book's
[open sets](03-topological-spaces.md),
[bases](04-bases-subbases.md) and [continuity](05-continuity-homeomorphism.md).
In [Open-Set Language](#/books/topology-proof-counterexample/topological-spaces-and-open-set-language),
complete **TOP-CH01-E002, E003, E004, E005 and E006**.
In [Continuity](#/books/topology-proof-counterexample/continuity-open-closed-and-neighborhood-tests),
complete **TOP-CH03-E001, E002, E003, E005 and E007**.

**Compare and repair:** Both chapters provide the matching complete
**Solution** under each printed ID. Audit arbitrary versus finite operations,
the named ambient topology, inverse rather than direct images, and the
direction of continuity in the discrete/indiscrete counterexample. Use the
basis chapter when the inverse-image basis test needs repair.

### TOP-CORE-COMPACT — Covers and connected images {#sec-top-core-compact}

**Read and attempt:** Read course Units 1–4, the first four sections of
[Compactness](#/books/topology-proof-counterexample/compactness-covers-and-finite-control),
and the first two sections of
[Connectedness](#/books/topology-proof-counterexample/connectedness-paths-and-components).
Complete all three items of the course's **Practice ladder (Units 1–4)**,
**Cumulative assessment Question 1**, and **TOP-CH09-E001 and E005** in
Connectedness. Chapter 8 of [this book](08-compactness.md) is the local
cover-proof repair.

**Compare and repair:** The ladder has an inline solution for every item;
cumulative Question 1 has a complete answer under **Hints and reasoned
solutions**; both connectedness exercises have their adjacent full solutions.
Your proof must expose the finite subcover step and the Hausdorff separation
step. Check the noncompact half-open-circle counterexample and the compact,
nonclosed indiscrete singleton rather than dropping a hypothesis.

### TOP-CORE-QUOTIENT — Gluing and loop evidence {#sec-top-core-quotient}

**Read and attempt:** Read course Units 3, 5 and 6 and this book's
[Chapter 6](06-subspace-product-quotient.md).
Complete the course's **Bridge exercise (Units 5–6)** on the annulus,
**Cumulative assessment Question 2**, and **Chapter 6 Exercise 7**,
**Change the edge identification**.

**Compare and repair:** The bridge supplies the full radial deformation and
endpoint checks; cumulative Question 2 gives the endpoint-quotient proof and
the open-cover van Kampen calculation. Chapter 6's **Selected solutions**
answers Exercise 7 completely. Keep rectangle-edge gluing for the annulus
and Möbius band distinct from gluing a cylinder's circular ends by a rotation.
Check representative-independence, the quotient continuity test and the
compact-to-Hausdorff inverse proof. Circle fundamental groups, van Kampen and
the spanning-tree theorem are named results used with their hypotheses,
not conclusions proved by a picture or by a homology rank.

### TOP-CORE-HOMOLOGY — Chains, coefficients and components {#sec-top-core-homology}

**Read and attempt:** Read [Chapter 13](13-simplicial-cw-complexes.md) on
simplices and oriented boundaries, course Unit 7, and the
[computation recipe](#/articles/recipe-simplicial-homology-computation).
Complete all three Unit 7 **Practice ladder** items,
**Cumulative assessment Question 3**, and [Chapter 14](14-homology.md)
**Exercise 7**, **Change the number of components**.
Carry out the recipe's representation, exact-field, boundary-composition,
rank and Euler audits on the selected finite complexes. A full hand matrix
audit is sufficient; programming is optional.

**Compare and repair:** Unit 7's ladder and cumulative Question 3 each have
complete solutions; Chapter 14's **Selected solutions** gives the full
Exercise 7 integral matrix, kernel, comparison map and component argument.
Keep the recipe's finite-field calculation over the two-element field
separate from Exercise 7's integral simplicial chains. Its zero simplicial
two-chain group does not say the singular two-chain group is zero.
The natural simplicial–singular comparison and degree-one Hurewicz theorems
are imported; the latter identifies the abelianized based loop group with
integral first homology of a path-connected space. In the disconnected
example, based loops see only their own component. Euler agreement is an
audit, not a proof of triangulation, topological invariance or torsion data.

### TOP-CORE-SURFACE — Charts and retained boundary circles {#sec-top-core-surface}

**Read and attempt:** Read only the topological definition at the start of
course Unit 8, this book's [circle charts](17-manifolds-bundles.md), and
Sections 1–7, especially 4–5, of
[Topological Manifolds](#/books/topology-proof-counterexample/topological-manifolds-and-local-euclidean-structure).
Complete **TOP-CH17-E004, E005, E012, E014, E015 and E018**.
For the existing **TOP-CH17-P001** project, choose exactly the torus
$S^1\times S^1$; give its finite atlas, a nonempty transition, global
Hausdorff/countability proof, intrinsic boundary and a repaired failed chart.
Before classification, read the opening paragraph of
[**Orientation and local homology**](17-manifolds-bundles.md#orientation-and-local-homology)
for compatible local orientations and the Möbius reversal. Its local-homology
and fundamental-class statements are orientation, not additional machinery
assigned here; the torus project requires no smooth or oriented atlas.
Then read **Classification of compact surfaces** in
[Chapter 19](19-surfaces-knots.md) and complete **Exercise 7**,
**Keep the boundary circles**. Knot and smooth-geometry sections are not
assigned here.

**Compare and repair:** Each named TOP-CH17 exercise has a complete adjacent
solution. Use **TOP-CH17-P001 — Worked torus choice** for the selected project's
explicit inverses, product chart transitions and failed-angle repair; it
also expands the inverse calculation used in E012. Chapter 19's
[Solution for Exercise 7](19-surfaces-knots.md#surface-boundary-answer)
distinguishes disk, annulus and torus with the retained boundary counts.
Check chart domains and images, coverage and both global axioms; do not
confuse manifold boundary with boundary in an ambient Euclidean space.
Surface classification, boundary invariance and invariance of dimension
remain imported theorems. Neither a finite atlas nor Euler arithmetic proves
those general results. The other open-choice project surfaces remain
additional choices, not solved by the fixed torus model.

### TOP-CORE-GRAPH — A fixed cumulative proof and matrix record {#sec-top-core-graph}

**Attempt:** After the preceding scopes, use the course's
[**Fixed graph capstone — Square and diagonal**](#/courses/atlas-topology-manifolds-standard), beginning with
**Fixed graph capstone — Problem**. This fixes one instance of the retained
open-choice graph capstone. Supply every requested geometric/quotient proof,
ordered matrix, cycle and boundary basis, Euler check, justified fundamental
group, local-neighborhood test and nonhomeomorphic comparison.

**Compare and repair:** Open **Fixed graph capstone — Complete public model**
after preserving your response, then **Fixed graph capstone — Self-review
and repair**. Use the source's seven-part, 24-point descriptive comparison
and repair advice; it is not an awarded learner grade. Audit a cycle's
parametrization and compact-to-Hausdorff proof independently of the matrix
calculation. A contractible spanning-tree collapse or van Kampen theorem
justifies the fundamental group; the two-element-field first homology alone
does not. The fixed model closes its named instance, not every original
graph choice or the optional smooth surface capstone.

### TOP-CORE-RETURN — Reconstruct changed assumptions {#sec-top-core-return}

**Later public reconstruction:** Choose and record a later date, then
reconstruct **Chapter 6 Exercise 7**, **Chapter 14 Exercise 7** and
**Chapter 19 Exercise 7** before reopening their complete keys.
For each, retain a new first/comparison/corrected file set with its actual
date and any prior exposure declared. Explain respectively which edge is
identified, which component contains the basepoint, and which boundary
circles remain. These are the already assigned public changed tasks;
no fresh unseen form or observed delay is claimed.

**Feedback and next repair:** Use the same complete Chapter 6, 14 and 19
keys linked above. If the quotient fails, revisit the fiber test and
neighborhood check; if the loop/homology claim fails, write the integral
component blocks and identify the map's image; if the surface conclusion
fails, record orientability, genus, boundary count and Euler characteristic
separately. Reconstruct the failed argument after that repair. Preserve your
earlier files; a new reading mark does not replace the written work.
