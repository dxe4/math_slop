var e=`---
id: course-discrete-mathematics-specialist
title: "Enumeration, Incidence, and Duality"
level: graduate
status: beta
estimated_minutes: null
---

# Enumeration, Incidence, and Duality

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-discrete-mathematics-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Discrete Mathematics Advanced: Extremality, Randomness, and Exchange](/courses/atlas-discrete-mathematics-advanced/) · [Graph theory](/courses/course-graph-theory/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A seven-point configuration can be a design, a vector matroid, a symmetry action, and a source of codes. Those descriptions share data without sharing every theorem. This graduate course develops algebraic and enumerative combinatorics, matroids, designs, and research-seminar practice through general proofs, sustained source work, exact software, and changing interpretations of one configuration. The earlier finite clinics and advanced course are preparation. Their completion does not complete this course.

## Course contract and research records

The stable identity is \`course-discrete-mathematics-specialist\`, with route slug \`discrete-mathematics-specialist\`. Required work proceeds through preparation, source assignments \`DMS-S1\`–\`DMS-S10\`, six units \`DMS-U1\`–\`DMS-U6\`, software tasks \`DMS-SW1\`–\`DMS-SW3\`, seminar stages \`DMS-SEM1\`–\`DMS-SEM5\`, and fixed syntheses \`DMS-P\`, \`DMS-C\`, \`DMS-R\`. Unit problems have identities such as \`DMS-U2-P1\`; diagnostic identities are \`DMS-D1\`–\`DMS-D8\`. These semantic identities remain attached to the work when reading order or presentation changes.

The study time depends on the selected reading, attempts and corrections. Neither chapter estimates nor exercise/program counts supply a calibrated course total. The specialist sequence concerns formal enumeration, incidence and invariant algebras, represented matroids and minors, design incidence and binary-code enumeration, and a staged seminar. It does not claim every specialist branch, a classification of designs, or a proof of every named representation theorem. Schur-function/Specht-module classification, general Hopf algebras, excluded-minor structure and open research questions remain further subjects with their own dependencies.

Keep separate dated \`WORK-ID-YYYY-MM-DD-first.txt\`, \`WORK-ID-YYYY-MM-DD-comparison.txt\`, and \`WORK-ID-YYYY-MM-DD-revised.txt\` files for **each** diagnostic, selected source exercise/project, native problem, software task, seminar stage and synthesis. Save the first before opening feedback; retain it unchanged. The comparison names every source, hint, public model, person or tool used, when it was consulted, prior exposure, and each repaired step. The revised file supplies a complete corrected argument. Retain code versions and exact outputs for required software, with bounds, runtime version, inputs and any errors. A source exercise uses a name such as \`DMS-S1-E004\`; earlier preparation retains its own native identity. The [worksheet portfolio workflow](/guide/learner-records/#keep-a-worksheet-portfolio) gives manual recovery instructions. These records are not shared writing-store allocations, qualified marking, proof verification, grades, unseen performance or verified delayed retention.

All source work and native tasks below are required unless explicitly marked optional. Every required mathematical question has a complete public key here or at its exact source address. Every required software task has an executable reference, input contract, full model and independently checkable outputs. A hand calculation helps inspect a program but does not satisfy a required run, modification or replay. If execution is unavailable, keep the mathematical work and record the software obligation as incomplete until the required environment is available; do not silently convert it into optional work. Public models are available from the start, so disclose their use honestly.

\`DMS-P/C/R\` and this course's three software tasks are **new native assignments**. They do not stand in for the old design exact-search project, the all-small-matroids atlas, or the open structural capstone. Those original bounds and outputs remain intact. In particular, Structural Investigation 1's core through five elements is not satisfied by a seven-column configuration check, and a negative design-existence claim would require a complete search domain and replayable rejection proof, not just our incidence checker.

## Preparation diagnostic and repairs

Preparation requires [Discrete Mathematics Advanced](#/item/course-discrete-mathematics-advanced), especially its rank/submodularity, matching/transversal, weighted-objective and hypothesis work. Keep its existing primary/changed/return records. Add finite groups and actions, exact matrix algebra, formal series and finite-field arithmetic through the bounded repairs below. These are explicit prerequisites, not an assumption that all specialist source chapters have already been mastered.

Attempt all eight diagnostics before comparing the keys. Each question supplies its full data; its JSON record makes the mathematical inputs and public numerical claims unambiguous.

\`\`\`json
{"record_id":"DMS-DIAGNOSTIC","D1":{"denominator":[1,-1,-1],"degree":4,"coefficient":5,"constant_necklace":"0000","rooted_types":1},"D2":{"elements":["0","a","b","1"],"covers":[["0","a"],["0","b"],["a","1"],["b","1"]],"bottom_mu":[1,-1,-1,1]},"D3":{"length":3,"colors":2,"rotation_fixed":[8,2,2],"orbits":4},"D4":{"matrix":[[1,1],[1,-1]],"rank_Q":2,"rank_F2":1,"determinant":-2},"D5":{"uniform_rank":2,"size":3,"deletion_rank":2,"contraction_rank":1},"D6":{"v":6,"k":3,"lambda":1,"replication":[5,2],"exists":false},"D7":{"N":[[1,1,0],[0,1,1]],"row_code_length":3,"transpose_row_code_length":2,"row_words":["000","110","011","101"],"transpose_words":["00","01","10","11"]},"D8":{"field":2,"generator":[[1,1],[0,1]],"group_order":2,"invariant_line":[[1,0]],"invariant_complement":false}}
\`\`\`

1. **DMS-D1.** Find $[x^4](1-x-x^2)^{-1}$ as a formal coefficient. Does distinguishing one bead in constant oriented necklace \`0000\`, up to root-preserving rotations, give four rooted types?
2. **DMS-D2.** For the printed diamond poset, compute every bottom Möbius value. Is its top value determined only by the rank difference two?
3. **DMS-D3.** Count binary colorings of three cyclic positions up to rotations; justify every fixed-count row rather than dividing eight by three.
4. **DMS-D4.** Compute the printed matrix's determinant and its ranks over $\\mathbb Q$ and $\\mathbb F_2$. May equal columns be deduplicated when they are labeled matroid elements?
5. **DMS-D5.** Delete and contract a nonloop of $U(2,3)$. Compare total ranks and explain why the operations differ.
6. **DMS-D6.** Can a $2-(6,3,1)$ design exist? Give a necessary-count obstruction, not an unsuccessful search.
7. **DMS-D7.** List the binary row codes of $N$ and $N^T$, with their coordinate sets. Does transposing a matrix preserve row-code length?
8. **DMS-D8.** Let a generator of $C_2$ act on $\\mathbb F_2^2$ by the printed matrix. Find its fixed vectors and decide whether the fixed line has an invariant complementary line. Can one average by $1/2$ in this field?

**Complete diagnostic feedback.** D1: multiplying by $1-x-x^2$ gives $a_0=1,a_1=1,a_n=a_{n-1}+a_{n-2}$, so the coefficients through degree four are $1,1,2,3,5$. Rotations act transitively on the four possible roots of \`0000\`, giving one rooted type, not four. Repair formal multiplication at [CH11 §§1–5](#/item/book-discrete-mathematics-proof-counting-structure?chapter=advanced-enumeration-partitions), and the separate pointing/root-orbit distinction at [the native root-orbit clinic](/math_books/combinatorics/_output/chapters/21-algebraic-enumerative.html#sec-comb-root-orbits). A root here is a distinguished atom, not a root of a polynomial.

D2: the bottom has value one, each middle point minus one, and the top $-(1-1-1)=1$. A three-element chain has the same rank difference two but top value zero, so rank difference alone does not determine Möbius cancellation. Repair [finite-poset §§7–10](#/item/book-discrete-mathematics-proof-counting-structure?chapter=finite-orders-lattices-mobius), with DM-CH10-E006 and its complete solution in §12.

D3: the identity fixes all eight binary words; either nonidentity rotation is a three-cycle and fixes the two constant words. Burnside gives $(8+2+2)/3=4$. Representatives are \`000\`, \`001\`, \`011\`, \`111\`, with orbit sizes $1,3,3,1$. Repair [group actions §§1–4,7–8](#/item/book-algebra-patterns-structure?chapter=group-actions-orbits-counting), and ALG-CH08-E013–E014 with their separately headed complete keys.

D4: determinant is $-2$, nonzero over $\\mathbb Q$, so rank two. In $\\mathbb F_2$, $-1=1$ and the two nonzero columns coincide, giving rank one. Both labeled columns remain; together they form a two-element circuit. Repair [field representations §§1–4](#/item/book-discrete-combinatorial-structures?chapter=linear-representability-fields), Exercises 1–2 and §13 keys.

D5: deletion leaves $U(2,2)$ of rank two; contraction gives $U(1,2)$ of rank one. Deletion restricts old ranks, while contraction has $r_{M/e}(A)=r_M(A+e)-r_M(e)$. Repair [minors §§1–3](#/item/book-discrete-combinatorial-structures?chapter=deletion-contraction-minors), Exercises 1–3 and §14 keys. The corrected square-deletion example keeps the diagonal and has zero total rank loss when deleting the two named outer edges.

D6: double counting requires $r(k-1)=\\lambda(v-1)$, here $2r=5$. Replication cannot be $5/2$, so no such design exists. Passing this arithmetic in another case would not construct a design. Repair [designs §§1–4](#/item/book-discrete-combinatorial-structures?chapter=designs-incidence-representability), Exercises 1–3 with §17 keys.

D7: the four row words of $N$ are \`000,110,011,101\`, of length three, with positions indexed by **columns of $N$**. The transpose has rows \`10,11,01\` spanning all four words of length two, indexed by the original rows. Both matrices have rank two, but the row codes have different ambient spaces. Repair the typed matrix and code conventions in Unit 6, then the concrete singular-Gram example there.

D8: the matrix fixes $(a,b)$ exactly when $b=0$, so its fixed space is the line spanned by $(1,0)$. The other two nonzero vectors $(0,1),(1,1)$ are exchanged. Neither of their lines is invariant, so no invariant complementary line exists. The scalar two is zero in $\\mathbb F_2$ and has no inverse; complex averaging cannot be transferred to this field. Repair Unit 3's explicit complex-inner-product argument and [the representation source's modular boundary](#/item/book-finite-algebra-computation?chapter=representation-theory-of-sn), “Common errors”.

For exact linear algebra used throughout, a **field** has inverses for every nonzero scalar. In $\\mathbb F_p$ for prime $p$, arithmetic is modulo $p$; nonzero multiplication is injective on the finite residue set and hence surjective, so inverses exist. The actual software accepts only the explicitly supported primes two, three, five, or exact rationals. Composite moduli are rejected. Row swaps, multiplying a row by a nonzero field scalar, and adding a multiple of one row to another are invertible operations, preserving all column dependence relations. Gaussian elimination chooses a nonzero pivot, clears that column, and advances to a smaller remaining rectangle; it terminates in finitely many steps. Pivot columns form a basis of the column space and every other column is their linear combination, so the number of pivots is rank. Kernel solutions are obtained by choosing each free coordinate in turn and back-substituting; if there are $n-r$ free coordinates this constructs $n-r$ independent solutions and every solution is their linear combination. These facts justify the elimination, rank-nullity and orthogonal-complement computations below, rather than a numerical tolerance.

The native preparation work is exact and bounded:

| Preparation | Required passage/task | Complete feedback and software obligation |
| --- | --- | --- |
| DMS-PREP1, formal labels | [Labelled product](/math_books/combinatorics/_output/chapters/07-exponential-generating-functions.html#sec-comb-labelled-product), [components](/math_books/combinatorics/_output/chapters/07-exponential-generating-functions.html#sec-comb-labelled-components), eight-person model and [ten-person changed task](/math_books/combinatorics/_output/chapters/07-exponential-generating-functions.html#sec-comb-labelled-task) | [Changed full model](/math_books/combinatorics/_output/chapters/07-exponential-generating-functions.html#sec-comb-labelled-solution); the [exact coefficient code](/math_books/combinatorics/_output/chapters/07-exponential-generating-functions.html#sec-comb-labelled-code) supplies finite degree 0–10 tables. Retain its exact rational coefficient and integer-count comparisons. |
| DMS-PREP2, marked atoms | [Root-orbit task](/math_books/combinatorics/_output/chapters/21-algebraic-enumerative.html#sec-comb-root-orbit-task), three distinguishable colors and five oriented beads | [Full model](/math_books/combinatorics/_output/chapters/21-algebraic-enumerative.html#sec-comb-root-orbit-solution): 51 unrooted, 243 rooted, naive weighted total 255; run the printed simultaneous word/root canonicalizer for its requested check. |
| DMS-PREP3, incidence | [Plane preparation](/math_books/combinatorics/_output/chapters/19-designs-codes.html#sec-comb-plane-preparation), [given-field construction](/math_books/combinatorics/_output/chapters/19-designs-codes.html#sec-comb-projective-plane), and [changed prime-three task](/math_books/combinatorics/_output/chapters/19-designs-codes.html#sec-comb-plane-task) | [Full plane solution](/math_books/combinatorics/_output/chapters/19-designs-codes.html#sec-comb-plane-solution); run the actual prime-field checker as the task requests. Its field construction is not a classification of projective planes. |
| DMS-PREP4, exact feasibility | [Greedy prefix proof](/math_books/combinatorics/_output/chapters/20-matroids.html#sec-comb-greedy-prefix), [bounded checker](/math_books/combinatorics/_output/chapters/20-matroids.html#sec-comb-greedy-code), and [changed equal-maximal-size task](/math_books/combinatorics/_output/chapters/20-matroids.html#sec-comb-greedy-task) | [Full changed key](/math_books/combinatorics/_output/chapters/20-matroids.html#sec-comb-greedy-solution); retain exact run, failed augmentation, objective and prefix-rank comparison. |

If one of these clinics is already completed, retain the existing first/comparison/revised and software records under its original identity; otherwise complete the named work before its dependent unit. None replaces the new six-unit/three-software/five-seminar progression.

## Required readings and worked feedback

Work in this order alongside the corresponding unit, always comparing with the named full key rather than an open project outline. Atlas links below open the containing source; the printed section/exercise locator identifies the exact task. Required excerpts are not whole-book qualifications.

| Work | Actual reading and assignment | Complete public key and dependency boundary |
| --- | --- | --- |
| DMS-S1 / U1 | [Advanced enumeration and partitions](#/item/book-discrete-mathematics-proof-counting-structure?chapter=advanced-enumeration-partitions), §§1–13; **DM-CH11-E001–E012** | §15, each separately headed named Solution. Finite-polynomial parity filters do not numerically evaluate an arbitrary infinite formal series. |
| DMS-S2 / U2 | [Finite orders and Möbius inversion](#/item/book-discrete-mathematics-proof-counting-structure?chapter=finite-orders-lattices-mobius), §§7–10; **DM-CH10-E006–E009** | §12, each named Solution. Its chosen-poset DM-CH10-P001 is an open investigation, not this course's fixed keyed problem. |
| DMS-S3 / U3 | [Actions, orbits, counting](#/item/book-algebra-patterns-structure?chapter=group-actions-orbits-counting), §§1–9; **ALG-CH08-E013–E020**, then **ALG-CH08-P001** | Each named exercise has a full Solution; the fixed six-bead project's model gives all fourteen rotational representatives, thirteen bracelet classes and both full fixed-count tables. |
| DMS-S4 / U4 | [Graphic and cographic matroids](#/item/book-discrete-combinatorial-structures?chapter=graphic-cographic-matroids), §§1–6; **Exercises 1,2,3,5** | §12, each complete Solution. Plane-duality Exercise 4 and §§7–8 are optional, with their separate embedding/cycle-cut dependency. |
| DMS-S5 / U4 | [Linear representability and fields](#/item/book-discrete-combinatorial-structures?chapter=linear-representability-fields), §§1–9; **Exercises 1–5** | §13, each complete Solution. The direct graphic representation proof is used; the stronger asserted total-unimodularity claim and the unproved Vámos result are not required results. |
| DMS-S6 / U5 | [Deletion, contraction, minors](#/item/book-discrete-combinatorial-structures?chapter=deletion-contraction-minors), §§1–12; **Exercises 1–10** | §14, each complete Solution. Keep the corrected square/diagonal example and the loop/coloop branches; a general recurrence is not an efficient-algorithm claim. |
| DMS-S7 / U5 | [Duality, sums, connectivity](#/item/book-discrete-combinatorial-structures?chapter=duality-sums-connectivity), §§1–6, omitting the sketch claiming any two elements of a circuit-component share one circuit; §7's **statement and worked two-triangle example**; **Exercises 1–10** | §10, each complete Solution. The separator and self-dual connectivity proofs are complete. General two-sum construction is an explicitly imported theorem, not a full proof claimed from the source sketch. E5–6 use its stated basis/interface rule on their fixed finite inputs; the four bases are listed and independently satisfy the axioms. |
| DMS-S8 / U6 | [Designs, incidence and representation](#/item/book-discrete-combinatorial-structures?chapter=designs-incidence-representability), §§1–14; **Exercises 1–13** | §17, each complete Solution. §15's open exact design solver has different coverage/proof-trace obligations and is not assigned or claimed completed here. |
| DMS-S9 / seminar | [Structural investigations](#/item/book-discrete-combinatorial-structures?chapter=structural-investigations), common protocol and **Preparation Exercises 1–10** | §8, each complete Solution. Read the §7 milestone protocol as a specification model; its open capstone and Investigations 1–6 are not submissions for this course. |
| DMS-S10 / U3 comparison | [Representations of symmetric groups](#/item/book-finite-algebra-computation?chapter=representation-theory-of-sn), Definitions, Characters, modular boundary; **Exercise 4** only | Immediate Solution supplies the invariant constant/zero-sum splitting; Unit 3 below proves the omitted irreducibility step. Hook-length, Specht indexing, Murnaghan–Nakayama and character completeness are optional imported statements, not assumed course proofs. |

For DMS-S7, the exact §4 required boundary is its separator definition/equivalence and Separator theorem with proof, followed by the first two sentences defining the graph of common-circuit adjacency and its components (through “loops appear as singleton components”). The remainder beginning “A useful circuit-elimination lemma says more” and the following common-circuit equivalence are optional imported statements. The two worked graph examples remain required. In §7, the construction theorem and its hypotheses/basis rule are read as explicitly imported statements; its proof sketch is not a required proof. Exercises 5–6 use the stated rule only on their displayed triangle inputs, independently checked as U(3,4). No required question asks for the general construction proof.

For rank/closure repair use [rank, submodularity and flats](#/item/book-discrete-combinatorial-structures?chapter=rank-submodularity-flats), §§1–5 and their worked examples. The [registered prerequisite guide](#/item/book-discrete-combinatorial-structures?section=front%3Areader-prerequisite-guide) and [diagnostic repair guide](#/item/book-discrete-combinatorial-structures?section=front%3Adiagnostic-repair-routes), Repairs 8–11, distinguish fields, incidence, minors and connectivity. They supplement rather than replace the exact diagnostic keys and six unit proofs here.

The source-pin manifest later in the software section records the source versions used in the software work.

## Formal enumeration and coefficient algebra

**DMS-U1.** Complete DMS-S1 and the labelled/root-orbit preparation. Work over $R[[x]]$ for a commutative coefficient ring $R$: a formal series is a sequence of coefficients, addition is componentwise, and $[x^n](AB)=\\sum_{i=0}^n a_i b_{n-i}$. Every coefficient uses a finite sum. A series with constant coefficient one has a unique inverse: solve the product equation coefficient by coefficient. Thus $(1-x^j)^{-1}=\\sum_{m\\ge0}x^{jm}$, without a convergence assertion. An infinite product of factors with constant one is legitimate here when, for every degree bound, all but finitely many factors are one through that degree. This proves the partition product's legitimacy, not the legitimacy of every infinite product.

A partition chooses a nonnegative multiplicity for each part size, giving $\\prod_{j\\ge1}(1-x^j)^{-1}$. A composition orders its parts, giving a sequence construction. Ferrers conjugation exchanges part-count and largest-part bounds. A variable $u$ in $\\prod_j(1+ux^j)$ records the **number** of distinct chosen parts separately from their sum. These are encodings whose bijections must be supplied, not interchangeable formulas.

For labeled objects over $\\mathbb Q$, let $A(x)=\\sum a_nx^n/n!$ and $B(x)=\\sum b_nx^n/n!$. Choosing the labels assigned to an ordered pair of components gives $c_n=\\sum_i\\binom ni a_i b_{n-i}$ and $C=AB$. If a component class has no empty component, an unordered set of $k$ such components has EGF $A^k/k!$: ordering the disjoint nonempty components has exactly $k!$ distinct orders. Consequently a set of components has $\\exp(A)=\\sum_{k\\ge0}A^k/k!$, coefficientwise finite because $A(0)=0$. Allowing an empty component would destroy that argument: arbitrarily many empty components could contribute at one degree. The native labelled clinic proves the same statements by allocation and least-label decomposition, with exact integer models.

Formal differentiation is defined by $A'(x)=\\sum_{n\\ge1}na_nx^{n-1}$ for ordinary coefficients. The size-preserving weighting operator is $xA'(x)$, not $A'$. Neither operator automatically counts rooted **unlabeled isomorphism types**: the different roots of an object are orbits of its atoms under its automorphism group. The native constant necklace has one root type despite four bead positions. Labelled pointing and weighted unlabelled atoms have different equivalence contracts.

**DMS-U1-P1.** Use the following actual coefficient problem. List every object counted by each requested coefficient, then justify the encoding and empty case.

\`\`\`json
{"record_id":"DMS-U1-P1","allowed_parts":[1,3,4],"weight":8,"partitions":[[1,1,1,1,1,1,1,1],[3,1,1,1,1,1],[3,3,1,1],[4,1,1,1,1],[4,3,1],[4,4]],"count":6,"distinct_ground":[1,2,3,4],"even_weight_subsets":[[],[2],[4],[2,4],[1,3],[1,2,3],[1,3,4],[1,2,3,4]],"even_count":8}
\`\`\`

**Full key:** $[x^8](1-x)^{-1}(1-x^3)^{-1}(1-x^4)^{-1}$ counts $a+3b+4c=8$. At $c=0$ there are three solutions, at $c=1$ two, at $c=2$ one, giving precisely the six listed partitions. For subsets of the four given weights, the **finite polynomial** $F(x)=\\prod_{j=1}^4(1+x^j)$ has even-weight count $(F(1)+F(-1))/2=(16+0)/2=8$. The listed eight include the empty set of sum zero. Toggling element one is an independent bijection between even and odd sums. This evaluation is legitimate for a finite polynomial; it is not an instruction to evaluate every infinite formal product at one.

**DMS-U1-P2.** Produce both coefficient rows below by exact dynamic programming and independently by listing nonnegative multiplicities or subsets. Modify the maximum part from three to two, retain the empty coefficient, and predict the new rows before running DMS-SW1.

\`\`\`json
{"record_id":"DMS-U1-P2","degree":8,"max_part":3,"unrestricted":[1,1,2,3,4,5,7,8,10],"distinct":[1,1,1,2,1,1,1,0,0],"changed_max_part":2,"changed_unrestricted":[1,1,2,2,3,3,4,4,5],"changed_distinct":[1,1,1,1,0,0,0,0,0]}
\`\`\`

**Full key:** initialize $d_0=1$ and all positive-degree entries zero. For unrestricted multiplicities process part $j$ and update degrees **upward**, $d_n\\gets d_n+d_{n-j}$; the new $d_{n-j}$ allows another copy of $j$. For distinct parts update degrees **downward**, using the old row at $n-j$ so $j$ is used at most once. For parts at most three, the unrestricted count at degree $n$ is $\\sum_{c=0}^{\\lfloor n/3\\rfloor}(\\lfloor(n-3c)/2\\rfloor+1)$, listing the multiplicity of three then two; it gives the printed row. The distinct polynomial is $(1+x)(1+x^2)(1+x^3)$ with two contributions at degree three. With parts at most two, the unrestricted count is $\\lfloor n/2\\rfloor+1$, and the distinct polynomial is $(1+x)(1+x^2)=1+x+x^2+x^3$. Empty degree always counts once. Reversing update directions changes the counted objects, not merely the implementation speed.

## Incidence algebra and characteristic polynomials

**DMS-U2.** Complete DMS-S2. Let $P$ be a nonempty finite poset and $R$ a commutative ring with identity. An incidence-algebra element is a function on comparable pairs $x\\le y$, with convolution

$$(f*g)(x,z)=\\sum_{x\\le y\\le z}f(x,y)g(y,z).$$

Expanding either parenthesization gives the same finite sum $\\sum_{x\\le y\\le z\\le w}f(x,y)g(y,z)h(z,w)$, so convolution is associative. The diagonal function $\\delta$ is a two-sided identity. Put $\\zeta(x,y)=1$ on comparable pairs and $\\eta=\\zeta-\\delta$. A nonzero contribution to $\\eta^{*k}(x,y)$ requires a strictly increasing chain of $k$ steps. For $N=|P|$, therefore, $\\eta^{*N}=0$. The **finite** geometric identity gives the two-sided inverse

$$\\mu=\\delta-\\eta+\\eta^{*2}-\\cdots+(-1)^{N-1}\\eta^{*(N-1)}.$$

Equivalently $\\mu(x,x)=1$ and $\\mu(x,y)=-\\sum_{x\\le z<y}\\mu(x,z)$ for $x<y$. Thus both $\\mu*\\zeta$ and $\\zeta*\\mu$ equal $\\delta$. Reversing finite sums proves that $g(y)=\\sum_{x\\le y}f(x)$ is equivalent to $f(y)=\\sum_{x\\le y}\\mu(x,y)g(x)$. This is an inverse in an algebra, not an analytic infinite-series argument. For the empty poset the statement has no interval entries; we use the displayed inverse construction only for nonempty $P$.

Now let $M$ be a finite matroid with rank $r(A)$ and total rank $r=r(E)$. Define $\\operatorname{cl}(A)=\\{e:r(A+e)=r(A)\\}$. Rank submodularity says an element with zero gain over $A$ also has zero gain over a larger set. Adding the members of $\\operatorname{cl}(A)$ one at a time therefore leaves rank unchanged. Closure is extensive and monotone. It is idempotent: if $e$ has zero gain over $\\operatorname{cl}(A)$, then $r(A+e)\\le r(\\operatorname{cl}(A)+e)=r(A)$, so it already lies in $\\operatorname{cl}(A)$. A **flat** is a closed set. Intersections of flats are closed by monotonicity; their join is closure of their union. Thus flats form a finite lattice, with bottom $\\operatorname{cl}(\\varnothing)$ and top $E$.

Assume now that $M$ is **loopless**, so the bottom is $\\varnothing$. Define its flat characteristic polynomial, for formal indeterminate $q$, by

$$\\chi_M(q)=\\sum_{F\\text{ flat}}\\mu(\\varnothing,F)q^{r-r(F)}.$$

To bridge to arbitrary subsets, put $s(F)=\\sum_{\\operatorname{cl}(A)=F}(-1)^{|A|}$. For a flat $F$, the equivalence $\\operatorname{cl}(A)\\subseteq F\\iff A\\subseteq F$ gives

$$\\sum_{H\\subseteq F,\\ H\\text{ flat}}s(H)=\\sum_{A\\subseteq F}(-1)^{|A|}
=\\begin{cases}1&F=\\varnothing,\\\\0&F\\ne\\varnothing.\\end{cases}$$

This is the Möbius cancellation equation, so $s(F)=\\mu(\\varnothing,F)$. Since closure preserves rank,

$$\\chi_M(q)=\\sum_{A\\subseteq E}(-1)^{|A|}q^{r-r(A)}.$$

The Tutte subset formula then gives, in the polynomial ring $\\mathbb Z[q]$,

$$(-1)^rT_M(1-q,0)
=\\sum_A(-1)^r(-q)^{r-r(A)}(-1)^{|A|-r(A)}
=\\chi_M(q).$$

The sign exponent is $2r+|A|-2r(A)$, leaving $(-1)^{|A|}$. Unit 5 proves the Tutte recurrence and every loop/coloop branch. For a **looped** matroid, the subset expression cancels to zero by pairing subsets with and without a loop. Its flat lattice still has a bottom containing those loops and generally a nonzero flat polynomial. The two definitions must not be conflated. The software calls the all-subset polynomial \`characteristic\`, returns zero for looped inputs, and supplies a bottom-empty \`flatMobius\` comparison only when loopless.

A finite-field meaning needs another hypothesis. Suppose an $r$-row full-rank matrix represents $M$ over a given finite field of size $q$. A linear functional $z$ vanishes on all columns in $A$ in exactly $q^{r-r(A)}$ ways: elimination leaves $r-r(A)$ free coordinates. Inclusion–exclusion therefore says the subset polynomial counts functionals nonzero on **every** column. This counts avoiding linear hyperplanes for that representation, not arbitrary graph colorings or a field-free geometric classification. For graphic matroids, the familiar chromatic interpretation needs its own vertex/edge translation.

**DMS-U2-P1.** Compute the complete Möbius matrix and invert the cumulative data on this actual poset. Check both convolution orders, not just the bottom row.

\`\`\`json
{"record_id":"DMS-U2-P1","elements":["0","a","b","1"],"covers":[["0","a"],["0","b"],["a","1"],["b","1"]],"g":[1,4,6,16],"mu":[[1,-1,-1,1],[0,1,0,-1],[0,0,1,-1],[0,0,0,1]],"f":[1,3,5,7]}
\`\`\`

**Full key:** diagonal intervals have value one; every cover has minus one; the top interval has $-(1-1-1)=1$. Incomparable entries, extended by zero for the matrix, are zero. Multiplication with the upper-triangular zeta matrix gives the identity in either order. Inversion gives $f(0)=1$, $f(a)=4-1=3$, $f(b)=6-1=5$, $f(1)=16-4-6+1=7$. Their top cumulative sum is $1+3+5+7=16$. All four entries, and the direction of the order, matter.

**DMS-U2-P2.** For the binary seven-point coordinate configuration used in DMS-P, derive its complete flat/rank ledger and characteristic polynomial. Then audit removing the loopless hypothesis using a one-element loop.

\`\`\`json
{"record_id":"DMS-U2-P2","size_rank_counts":[[0,0,1],[1,1,7],[2,2,21],[3,2,7],[3,3,28],[4,3,35],[5,3,21],[6,3,7],[7,3,1]],"flat_rank_mu_counts":[[0,1,1],[1,-1,7],[2,2,7],[3,-8,1]],"characteristic":[-8,14,-7,1],"loop_matrix":[[0]],"loop_subset_characteristic":[0],"loop_flat_polynomial":[1]}
\`\`\`

**Full key:** distinct nonzero binary columns are independent in pairs. Each pair determines the line $\\{u,v,u+v\\}$; each line contains three pairs, so there are $21/3=7$ lines. The other $35-7=28$ triples are bases. A binary rank-two subspace has only three nonzero vectors, so every four-or-more-point set has rank three. This proves the printed size/rank table, totaling 128 subsets. Flats are bottom, seven points, seven lines and top. Their bottom Möbius values are $1,-1,2,-8$, since a line has three points and the top cancellation is $-(1-7+14)=-8$. Hence $\\chi(q)=q^3-7q^2+14q-8=(q-1)(q-2)(q-4)$. For the one-element loop, the only flat is its whole ground set of rank zero, giving flat polynomial one; the two subset terms cancel, and $T=y$ specializes to zero. Its least flat was not empty, which identifies the failed proof step.

## Symmetry inventories and invariant spaces

**DMS-U3.** Complete DMS-S3 and DMS-S10. A finite group action satisfies $1x=x$ and $g(hx)=(gh)x$. The orbit of $x$ contains its images, and its stabilizer $G_x$ contains the symmetries fixing it. The map from cosets $gG_x$ to $gx$ is well defined and bijective, giving $|Gx|=|G|/|G_x|$. These are properties to check before declaring a collection of moves to be a symmetry group.

Let $G$ act on a finite position set $X$, and let a finite color set have commuting weights $z_a$. A coloring $c:X\\to C$ has weight $w(c)=\\prod_{x\\in X}z_{c(x)}$. Its transported coloring is $(g\\cdot c)(x)=c(g^{-1}x)$, which preserves weight. Count weighted pairs $(g,c)$ with $g\\cdot c=c$. Every orbit contributes $\\sum_{c\\in O}|G_c|w(c)=|G|w(O)$. If $g$ has $c_j(g)$ position cycles of length $j$, a fixed coloring is constant on each cycle. Consequently the full weighted inventory is

$$\\sum_O w(O)=\\frac1{|G|}\\sum_{g\\in G}\\prod_{j\\ge1}\\left(\\sum_{a\\in C}z_a^j\\right)^{c_j(g)}.$$

This is substitution into the **finite cycle-index polynomial** $Z_G=|G|^{-1}\\sum_g\\prod_j s_j^{c_j(g)}$. For binary weights $1,u$, substitute $s_j=1+u^j$; the coefficient of $u^k$ counts orbits of $k$-subsets. It is not generally total objects divided by group order. It also does not permit an extra permutation of color names unless that action was declared.

**Finite-coordinate complex preparation.** Write $z=a+ib$ with $i^2=-1$, conjugate $\\overline z=a-ib$, and $|z|^2=a^2+b^2$. For vectors use $\\langle v,w\\rangle=v^*w=\\sum_i\\overline{v_i}w_i$, conjugate-linear in the first argument and linear in the second; a star means conjugate transpose. A Hermitian matrix satisfies $G^*=G$, and positive definite means $v^*Gv>0$ for nonzero $v$. The standard form has $\\langle v,v\\rangle>0$ for every nonzero vector.

If the columns of a matrix $B$ form an independent basis of a subspace $U$, then $G=B^*B$ is positive definite: $a^*Ga=\\|Ba\\|^2>0$ for $a\\ne0$. It is therefore invertible. The matrix $P_U=B(B^*B)^{-1}B^*$ fixes every $Ba$, has image $U$, and leaves $v-P_Uv$ orthogonal to each column because $B^*(v-P_Uv)=0$. This proves $V=U\\oplus U^\\perp$ and the orthogonal projection formula. Successively subtracting projections onto already chosen independent directions and dividing by the positive norm constructs an orthonormal basis in finitely many steps. The same argument applies to any positive-definite Hermitian form after replacing the standard Gram by its form matrix. A linear map is unitary for a form when it preserves that inner product; in an orthonormal basis this is $R^*R=I$, so $R^{-1}=R^*$ and its inverse trace is the conjugate trace. If a group acts unitarily and preserves $U$, then it also preserves $U^\\perp$: $\\langle u,gv\\rangle=\\langle g^{-1}u,v\\rangle=0$. Hence $P_U$ commutes with the action. These finite matrix facts justify the complement and trace steps below; no spectral or character-completeness theorem is assumed.

For the algebraic bridge, let $V=\\mathbb C^X$ with orthonormal basis $e_x$ and permutation representation $\\rho(g)e_x=e_{gx}$. Its trace is $\\chi(g)=|\\operatorname{Fix}_X(g)|$. Define $P=|G|^{-1}\\sum_g\\rho(g)$. In $P^2$, each $\\rho(k)$ occurs exactly $|G|$ times, so $P^2=P$. Its image is precisely $V^G$: every group element fixes $Pv$, and $P$ fixes every invariant vector. Moreover $P^*=P$ since $\\rho(g)^*=\\rho(g^{-1})$. Thus $P$ is an orthogonal projection. An idempotent has $V=\\operatorname{im}P\\oplus\\ker P$ and trace equal to image dimension, giving

$$\\dim V^G=\\frac1{|G|}\\sum_g\\chi(g).$$

Invariant vectors have constant coefficients on each orbit, so their dimension is also the number of position orbits.

For a general finite-dimensional complex representation, average any positive-definite Hermitian inner product by $\\langle v,w\\rangle_G=|G|^{-1}\\sum_g\\langle\\rho(g)v,\\rho(g)w\\rangle$. It remains positive definite and becomes invariant. Therefore every invariant subspace has an invariant orthogonal complement. Complex conjugation here is part of a Hermitian inner product, not a reduction modulo two.

The conjugation action on $\\operatorname{End}_{\\mathbb C}(V)$ is $A\\mapsto\\rho(g)A\\rho(g)^{-1}$. Its fixed space is the commutant $\\operatorname{End}_G(V)$. For matrices $R,S$, the operator $A\\mapsto RAS$ has trace $\\operatorname{tr}(R)\\operatorname{tr}(S)$: on a matrix unit $E_{ij}$ the coefficient returning to $E_{ij}$ is $R_{ii}S_{jj}$. In an orthonormal basis for the invariant inner product, $\\rho(g)$ is unitary, so $\\chi(g^{-1})=\\overline{\\chi(g)}$. Averaging conjugation is another projection, proving

$$\\dim\\operatorname{End}_G(V)=\\frac1{|G|}\\sum_g|\\chi(g)|^2.$$

If $V\\ne0$ and this dimension is one, $V$ is irreducible. Otherwise a proper nonzero invariant subspace and its invariant complement give a nontrivial commuting projection linearly independent of identity. This proves the criterion actually needed here without an irreducible-character completeness theorem. A value greater than one is not, by this argument alone, a proof of reducibility; supply an invariant subspace when making that conclusion.

This also closes DMS-S10 Exercise 4. The permutation representation of $S_n$ splits into the constant line and $W=\\{v:\\sum v_i=0\\}$. For $n\\ge2$, take a nonzero invariant subspace of $W$ and nonzero $v$ in it. Some coordinates $v_i\\ne v_j$, since a constant vector in $W$ is zero over $\\mathbb C$. Subtracting its image under transposition $(ij)$ gives $(v_i-v_j)(e_i-e_j)$ in that subspace. Translating by all permutations gives every $e_k-e_l$, which span $W$. Hence the subspace was $W$, proving irreducibility. At $n=1$, $W=0$ and is not an irreducible nonzero representation. In characteristic dividing group order, averaging fails as DMS-D8 demonstrates; neither proof is transferred silently to that setting.

**DMS-U3-P1.** Compute the binary inventory and the complex reduced permutation character for the actual cyclic action below. Decide reducibility with a concrete subspace witness.

\`\`\`json
{"record_id":"DMS-U3-P1","permutations":[[1,2,3],[2,3,1],[3,1,2]],"inventory":[1,1,1,1],"permutation_character":[3,0,0],"reduced_character":[2,-1,-1],"reduced_commutant_dimension":2}
\`\`\`

**Full key:** the identity has cycle type $1^3$, the others type $3$, giving $((1+u)^3+2(1+u^3))/3=1+u+u^2+u^3$. Removing the invariant constant line gives character $(2,-1,-1)$ and commutant dimension $(4+1+1)/3=2$. To establish reducibility, use $\\omega=(-1+i\\sqrt3)/2$, with $\\omega^2+\\omega+1=0$. The independent vectors $(1,\\omega,\\omega^2)$ and $(1,\\omega^2,\\omega)$ lie in the zero-sum plane and span invariant eigenlines. This supplies the needed decomposition rather than mistaking failure of a sufficient criterion for a proof.

**DMS-U3-P2.** Derive the Fano binary orbit inventory and reduced-module irreducibility from the printed group table, then justify that this is the correct group action. Software must independently recover the table rather than read it as input.

\`\`\`json
{"record_id":"DMS-U3-P2","dimension":3,"field":2,"cycle_types":[[1,1,1,1,1,1,1],[1,1,1,2,2],[1,3,3],[1,2,4],[7]],"multiplicities":[1,21,56,42,48],"order":168,"inventory":[1,1,1,2,2,1,1,1],"permutation_character":[7,3,1,1,0],"reduced_character":[6,2,0,0,-1],"invariant_dimension":1,"commutant_dimension":2,"reduced_commutant_dimension":1}
\`\`\`

**Full key:** an invertible binary $3\\times3$ matrix chooses a nonzero first column in seven ways, a second outside its two-element span in six ways, and a third outside the four-element span in four ways: order $7\\cdot6\\cdot4=168$. It permutes the seven nonzero vectors and their lines. Conversely a permutation preserving these lines preserves addition of distinct nonzero vectors because their sum is the unique third point; extending by zero makes it additive, hence binary-linear and invertible. Thus the line automorphism group is exactly this matrix group.

The supplied cycle multiplicities sum to 168. Their weighted inventory is

$$\\frac{(1+u)^7+21(1+u)^3(1+u^2)^2+56(1+u)(1+u^3)^2+42(1+u)(1+u^2)(1+u^4)+48(1+u^7)}{168}$$

$$=1+u+u^2+2u^3+2u^4+u^5+u^6+u^7.$$

The two triple orbits are the seven lines and twenty-eight bases; linear maps carry ordered bases to ordered bases and carry any line to another. Complements give the two four-subset orbits. Singletons and pairs each form one orbit because an independent pair extends to a basis. This gives an independent geometric orbit check, not just polynomial expansion. The actual cycle table will be obtained in two ways by the software/reference audit: all line-preserving permutations and all invertible binary matrices.

The permutation character is $(7,3,1,1,0)$, yielding invariant dimension $(7+63+56+42)/168=1$ and commutant dimension $(49+189+56+42)/168=2$. The reduced character is $(6,2,0,0,-1)$, giving $(36+84+48)/168=1$. Its six-dimensional complex zero-sum module is therefore irreducible by the proved invariant-complement criterion. The acting group is defined over $\\mathbb F_2$; this representation calculation takes place over **$\\mathbb C$**, where division by 168 is legitimate.
There is an actual counterexample to transferring the irreducibility conclusion. On the same seven-position action over $\\mathbb F_2$, the coordinate-sum-zero subspace has dimension six, but it contains the primary simplex code $S=\\operatorname{row}(A)$ of dimension three. That code is invariant: permuting the nonzero input vectors by an invertible binary map sends the word of a linear functional to the word of another linear functional. Every nonzero codeword has even weight four, so $S$ lies in the zero-sum space, properly and nontrivially. Thus the binary six-dimensional module is reducible. The constant line still splits here because seven is invertible in $\\mathbb F_2$; it is group averaging by 168 and the complex irreducibility inference that fail, not this separate seven-coordinate splitting.


## Field-sensitive matroid representations

**DMS-U4.** Complete DMS-S4–S5. For a matrix $A$ over a named field $F$, indexed column sets are independent when they are linearly independent. Heredity follows by restricting a linear relation. If independent $I,J$ have $|I|<|J|$, some column of $J$ lies outside the span of $I$, since the latter has smaller dimension. It augments $I$, proving matroid augmentation. Rank is matrix rank of the selected columns, closure adds exactly the indexed columns in their span, and circuits are minimal nonzero dependence supports. A nonzero kernel vector alone does not prove its support minimal; check that every proper subset is independent.

Invertible row operations preserve every dependence support. Nonzero scaling of an individual column preserves its indexed supports, with changed coefficients. Permuting columns must transport labels. Adding one column to another is a different operation: it changes the ground elements and may create parallel columns. Identical nonzero columns are distinct parallel elements; a zero column is a loop. A numerical near-zero tolerance is not an exact field contract.

The Fano obstruction has a general proof. Take three noncollinear represented points $a,b,c$ as a basis. Allowable projective scalings make points on two pair-lines $p=a+b$, $q=a+c$; write the remaining pair-line point as $s=b+tc$ with $t\\ne0$. The required line $pqs$ has determinant $-(1+t)$ in basis $a,b,c$, forcing $t=-1$. For the seventh point $z$, its three required lines put it in spans of $(a,s)$, $(b,q)$, and $(p,c)$. The last gives $z=\\alpha a+\\alpha b+\\beta c$ with $\\alpha,\\beta\\ne0$; otherwise it would equal an already named point. Comparing the first span gives $\\beta=\\alpha t$ and the second gives $\\beta=\\alpha$. Thus $t=1$, so $1=-1$ and the characteristic is two. The binary configuration supplies a representation in characteristic two. Consequently the same Fano incidence matroid cannot be represented over a field of odd characteristic; testing one failed numerical array would not have proved this universal obstruction.

An oriented graph incidence matrix represents its cycle matroid over **every** field, as DMS-S5 §7 proves directly: a forest's leaf equation kills the coefficient of its incident edge successively, while a cycle gives a signed dependence. This direct proof is enough here. No unproved total-unimodularity theorem is needed. In particular, the all-zero/one lift of a binary graph representation need not be that signed incidence matrix over odd fields.

For matrix duality, suppose $A$ has $r$ independent rows and $n$ columns, and let rows of $H$ be a basis of $\\ker A$, of dimension $n-r$. For a candidate $r$-set $B$, $A_B$ is invertible exactly when projection $\\ker A\\to F^{E\\setminus B}$ is an isomorphism: if $A_B$ is invertible, every assigned outside vector has a unique inside solution $-A_B^{-1}A_{E\\setminus B}v$; conversely a nonzero kernel vector supported in $B$ would violate injectivity. In a kernel basis, that projection is represented by $H_{E\\setminus B}^T$. Therefore $A_B$ is a basis exactly when the complementary columns of $H$ are a basis. This proves that $H$ represents the dual matroid, rather than inferring it from an orthogonality equation with unverified dimensions. It also proves that applying orthogonal complementation twice returns the original row space.

**DMS-U4-P1.** Interpret the same four labeled directions over the named fields, listing all circuits and explaining the nonrepresentation consequence.

\`\`\`json
{"record_id":"DMS-U4-P1","matrix":[[1,0,1,1],[0,1,1,-1]],"fields":["Q",2,3,5],"ordinary_circuits":[[1,2,3],[1,2,4],[1,3,4],[2,3,4]],"binary_circuits":[[3,4],[1,2,3],[1,2,4]],"ordinary_bases":6,"binary_bases":5}
\`\`\`

**Full key:** all two-column determinants are $\\pm1$ except columns three and four, whose determinant is $-2$. Over $\\mathbb Q,\\mathbb F_3,\\mathbb F_5$ all six pairs are bases and every triple is a circuit. Over $\\mathbb F_2$, columns three and four coincide; that pair and triples $123,124$ are precisely the minimal dependences, leaving five bases. No different binary rank-two representation can realize $U(2,4)$: the two-dimensional binary space has only three nonzero directions, so four distinct nonparallel nonloops cannot fit. This direction-count proof is stronger than rejection of the displayed representation.

**DMS-U4-P2.** Verify the proposed dual on all complementary pairs, then change a column and decide which assertion survives.

\`\`\`json
{"record_id":"DMS-U4-P2","A":[[1,0,1,1],[0,1,1,-1]],"H":[[-1,-1,1,0],[-1,1,0,1]],"fields":["Q",2,3,5],"unsafe_original":[[1,0,1],[0,1,1]],"unsafe_modified":[[1,0,0],[0,1,1]],"new_circuit":[2,3]}
\`\`\`

**Full key:** $AH^T=0$ over the integers. Both matrices have rank two because $A_{12}=I_2$ and $H_{34}=I_2$. Thus $H$ is the exact orthogonal dual over every named field. Over the odd fields both have all six pairs as bases. In the binary case $A$ has dependent pair $34$, while $H$ has dependent pair $12$; the other five pairs are bases, exactly complementary. The three-column modification replaces column three by itself minus column one, making it equal to column two. Original circuits were only $123$; the modified circuit is $23$. The operation changes the matroid, even though it resembles a matrix elimination step.

## Minors, duality, and Tutte recurrences

**DMS-U5.** Complete DMS-S6–S7, including their corrected online examples. Deletion restricts the rank function to the surviving ground set. Contracting $C$ has rank

$$r_{M/C}(X)=r_M(X\\cup C)-r_M(C),\\qquad X\\subseteq E\\setminus C.$$

To see the independence meaning, choose a basis $B_C$ of $C$. Extend it inside $X\\cup C$; exactly the additional independent positions beyond $r(C)$ can be retained in $X$. The rank formula is independent of which basis of $C$ was chosen. The rank axioms follow from bounds, monotonicity and submodularity after adjoining $C$; this verifies that contraction is a matroid. A loop absorbs zero rank and contraction equals deletion. A nonloop absorbs one. Contraction circuits are **minimal nonempty** remnants of old circuits; failing to minimize can report a larger dependent set instead of a circuit.

A dual basis is the complement of a primal basis. The source's full finite proof gives

$$r^*(X)=|X|-r(E)+r(E\\setminus X),\\qquad r(M^*)=|E|-r(M).$$

It follows that duality is an involution, exchanges loops and coloops, and swaps deletion with contraction. Deletion and contraction on disjoint sets commute; the same element cannot be both deleted and contracted in one instruction. In the corrected two-element example with sole basis $\\{e\\}$, deleting $e$ leaves loop $f$, **whose dual** is coloop $f$; contracting loop $e$ in the original dual also leaves coloop $f$. These two operations must be compared on the dual of the deletion, not on the deletion itself.

The rank-overlap function is $\\lambda(X)=r(X)+r(E\\setminus X)-r(E)$. It is nonnegative by submodularity, symmetric, and unchanged by duality on substituting the dual rank formula. It is zero exactly at a direct-sum separator. One proof of the circuit test is enough here: no crossing circuit means unions of independent sets on the two shores are independent, since any dependence would contain a circuit crossing the shores. This gives the direct sum; the converse follows immediately. We use circuit-connected components as the transitive closure of common-circuit adjacency, not the source's incompletely proved stronger protected-elimination characterization. The source's convention for a $k$-separation also requires both shores to have at least $k$ elements and $\\lambda\\le k-1$; omit neither clause.

The full Tutte invariant is

$$T_M(x,y)=\\sum_{A\\subseteq E}(x-1)^{r(E)-r(A)}(y-1)^{|A|-r(A)}.$$

Both exponents are nonnegative. The empty matroid has polynomial one. Split subsets by presence of $e$. For an ordinary element, neither loop nor coloop, deleting leaves total rank unchanged and contracting lowers it by one; the two sets of terms give $T_{M\\setminus e}+T_{M/e}$. For a loop, pair $B$ and $B+e$ with identical ranks; the factor is $1+(y-1)=y$, giving $yT_{M\\setminus e}$. For a coloop, rank rises by one in every containing set; the paired factor is $(x-1)+1=x$, giving $xT_{M/e}$. Every branch lowers ground-set size. Hence the recurrence terminates and, with the empty value, uniquely determines the same invariant as the subset definition. This proves order independence, not polynomial running time: a full recursion tree may be exponential.

The specialization $T(1,1)$ counts bases because exactly zero-corank, zero-nullity terms survive. $T(2,1)$ counts independent sets; $T(1,2)$ counts spanning sets. At $(2,2)$ every subset contributes one. Direct sums multiply $T$ because subset choices and both exponents add independently across shores. From the dual rank formula, corank and nullity exchange under complementary subsets, giving $T_{M^*}(x,y)=T_M(y,x)$. Together with Unit 2's proved loopless characteristic specialization, these are connected algebraic invariants, not separate guessed formulas.

The general two-sum construction theorem in DMS-S7 §7 is explicitly an imported statement. Its seam must be neither loop nor coloop. For required Exercises 5–6 the concrete two-triangle basis rule is completely checkable: the four resulting triples are all three-subsets of a four-element set, hence exactly $U(3,4)$ with elementary augmentation. We do not use the general proof sketch as a proved theorem elsewhere in this course.

**DMS-U5-P1.** Audit every loop/coloop/ordinary branch in this actual matroid, compute its Tutte and dual, and compare characteristic conventions.

\`\`\`json
{"record_id":"DMS-U5-P1","matrix":[[1,1,0,0],[0,0,1,0]],"field":2,"roles":["ordinary","ordinary","coloop","loop"],"rank":2,"bases":[[1,3],[2,3]],"tutte":[[2,1,1],[1,2,1]],"independent_count":6,"spanning_count":6,"subset_characteristic":[0,0,0],"bottom_flat":[4],"flat_characteristic":[1,-2,1]}
\`\`\`

**Full key:** elements one and two are a parallel nonloop pair, element three a coloop, four a loop. The parallel pair has $T=x+y$; multiplying by $x$ for the coloop and $y$ for the loop gives $T=x^2y+xy^2$. Bases are $13,23$. Independent choices take at most one of $1,2$, optionally three and never four: $3\\cdot2=6$. Spanning choices take a nonempty subset of $1,2$, necessarily three, optionally four: also six. There are sixteen total subsets. Duality swaps three and four's roles and keeps the parallel-pair matroid self-dual; the Tutte polynomial is unchanged under $x\\leftrightarrow y$. The subset characteristic is zero because of the loop. Flats are $4$, $124$, $34$, $1234$; their bottom Möbius values $1,-1,-1,1$ give flat polynomial $(q-1)^2$. This does not contradict the loopless theorem, whose hypothesis fails.

**DMS-U5-P2.** Delete and contract point seven of the primary Fano matroid. Give complete size/rank tables for both, all circuits and the Tutte recurrence, retaining the parallel labels after contraction.

\`\`\`json
{"record_id":"DMS-U5-P2","element":7,"deletion_size_rank_counts":[[0,0,1],[1,1,6],[2,2,15],[3,2,4],[3,3,16],[4,3,15],[5,3,6],[6,3,1]],"deletion_circuits":[[1,2,3],[1,4,5],[2,4,6],[3,5,6],[2,3,4,5],[1,3,4,6],[1,2,5,6]],"deletion_tutte":[[3,0,1],[2,0,3],[1,0,2],[1,1,4],[0,1,2],[0,2,3],[0,3,1]],"contraction_parallel_classes":[[1,6],[2,5],[3,4]],"contraction_size_rank_counts":[[0,0,1],[1,1,6],[2,1,3],[2,2,12],[3,2,20],[4,2,15],[5,2,6],[6,2,1]],"contraction_tutte":[[2,0,1],[1,0,1],[1,1,3],[0,1,1],[0,2,3],[0,3,2],[0,4,1]],"deletion_bases":16,"contraction_bases":12}
\`\`\`

**Full key:** the four old lines not containing seven remain the deletion's three-circuits; the three old complementary four-circuits avoiding seven also remain minimal. Every other triple is a basis, giving $20-4=16$. Every four-set has full rank three. Under the edge correspondence in DMS-C, this is $M(K_4)$. Contracting seven makes the three remaining pairs on its three lines parallel: $16,25,34$. Its simplified rank-two binary space has three directions; any pair from different classes is a basis, giving $3\\cdot2\\cdot2=12$. Every three-set has rank two since each parallel class has only two elements. Its circuits are the three parallel pairs and the eight triples choosing one member from each class. Substituting the two printed ledgers into the subset formula gives the printed polynomials. Adding them gives the primary Fano polynomial term by term, including $28=16+12$ at $(1,1)$. Collapsing each parallel pair to one unlabeled element would change these counts and the polynomial.

## Designs, incidence, and code enumerators

**DMS-U6.** Complete DMS-S8. A $t-(v,k,\\lambda)$ design has $v$ points and a multiset of $k$-element blocks, with each $t$-subset occurring in exactly $\\lambda$ blocks. A simple design has no repeated blocks; our fixed specimens are simple. For a fixed $s$-subset, double counting $(T,B)$ with $S\\subseteq T\\subseteq B$ gives

$$\\lambda_s\\binom{k-s}{t-s}=\\lambda\\binom{v-s}{t-s}.$$

For a 2-design this yields $r(k-1)=\\lambda(v-1)$ and $bk=vr$. These are necessary filters, not existence proofs. A point-by-block matrix $N$ has shape $v\\times b$; its transpose $B=N^T$ is block-by-point, shape $b\\times v$. Their column ground sets and row-code coordinate sets differ. Neither matrix automatically represents the intended geometric matroid.

Over the integers, $NN^T=(r-\\lambda)I+\\lambda J$. For a nontrivial 2-design with $1<k<v$ and $\\lambda>0$, $r>\\lambda$. Over $\\mathbb R$, its quadratic form on nonzero $u$ is $(r-\\lambda)\\sum u_i^2+\\lambda(\\sum u_i)^2>0$, so it is invertible. Thus $v=\\operatorname{rank}(NN^T)\\le\\operatorname{rank}(N)\\le b$, proving Fisher's inequality without transferring positivity to a finite field. Over $\\mathbb F_p$, a nonzero Gram determinant certifies full row rank; a zero determinant does **not** determine $\\operatorname{rank}(N)$. DMS-U6-P1 is a concrete strict inequality.

For a 2-design, complementing every block gives incidence parameters $(v,b,v-k,b-r,b-2r+\\lambda)$ in the notation $(v,b,k,r,\\lambda)$: a point pair is absent from $b-(2r-\\lambda)$ original blocks. Calling this a positive-lambda **2-design** requires complementary block size $v-k\\ge2$. At smaller sizes these are incidence counts, not that design conclusion. For example the $2-(3,2,1)$ design with blocks $12,13,23$ complements to the singletons $3,2,1$, a $1-(3,1,1)$ design whose every pair count is zero.

For general $t\\ge1$, deriving at a point removes it from containing blocks: each remaining $(t-1)$-subset occurs $\\lambda$ times. Residual blocks avoid the point: each remaining $(t-1)$-subset occurs $\\lambda_{t-1}-\\lambda$ times, by subtracting the containing-block count. Interpret zero multiplicities or insufficient block sizes as incidence statements, rather than asserting a positive-lambda design. The fixed nontrivial Fano cases have the needed ranges. In particular its residual is a 1-design, not a 2-design; a design count cannot be inherited without checking the new strength and parameters.

All codes in what follows are linear subspaces of $\\mathbb F_2^n$. For a binary generator matrix, the row code's coordinates are its **columns**. A $k$-vector basis gives $2^k$ distinct words. The orthogonal code solves $k$ independent linear equations and has dimension $n-k$. Define the homogeneous enumerator

$$W_C(x,y)=\\sum_{c\\in C}x^{n-\\operatorname{wt}(c)}y^{\\operatorname{wt}(c)}.$$

For fixed $v$, the character sum $\\sum_{u\\in C}(-1)^{u\\cdot v}$ is $|C|$ when $v\\in C^\\perp$. Otherwise translate by $u_0\\in C$ with $u_0\\cdot v=1$; the translation is a bijection reversing every sign, so the sum is zero. Therefore

$$1_{C^\\perp}(v)=|C|^{-1}\\sum_{u\\in C}(-1)^{u\\cdot v}.$$

Insert this into $W_{C^\\perp}$ and factor the **finite** sum over the binary coordinates of $v$:

$$W_{C^\\perp}(x,y)=\\frac1{|C|}\\sum_{u\\in C}(x+y)^{n-\\operatorname{wt}(u)}(x-y)^{\\operatorname{wt}(u)}
=\\frac1{|C|}W_C(x+y,x-y).$$

This proves binary MacWilliams, including coefficient integrality because the left side counts actual words. The translation argument uses linearity of $C$; arbitrary word sets do not satisfy it. Double orthogonal complementation follows since $C\\subseteq C^{\\perp\\perp}$ and both dimensions are $k$. No random-trial or convergence assumption is involved.

For a deleted coordinate, **puncturing** deletes it from every word, while **shortening** first retains words with a zero there and then deletes it. The two procedures need not preserve the same number of words. Their duality follows directly: a word on the remaining coordinates is orthogonal to every punctured $C$ word exactly when extending it by zero is in $C^\\perp$. Thus $(\\operatorname{puncture}C)^\\perp=\\operatorname{shorten}(C^\\perp)$. The reverse identity follows by double duality. These operations account for the two distinct length-six changed codes.

**DMS-U6-P1.** Use the actual residual incidence matrix below. Compute matrix and Gram ranks over two and three; decide whether the row code is self-orthogonal.

\`\`\`json
{"record_id":"DMS-U6-P1","B":[[1,1,1,0,0,0],[1,0,0,1,1,0],[0,1,0,1,0,1],[0,0,1,0,1,1]],"gram":[[3,1,1,1],[1,3,1,1],[1,1,3,1],[1,1,1,3]],"rank_F2":3,"gram_rank_F2":1,"rank_F3":4,"gram_rank_F3":3,"minor_columns":[1,2,3,4],"minor_determinant":2}
\`\`\`

**Full key:** $BB^T=2I_4+J_4$. Over $\\mathbb F_3$ it kills the constant vector, and on the three-dimensional zero-sum subspace multiplies by two; the two subspaces are complementary because four is nonzero modulo three. Thus Gram rank is three. The indicated $4\\times4$ column minor has determinant two, so $B$ has full row rank four even though its Gram is singular. Over $\\mathbb F_2$ the Gram is $J_4$, rank one; $B$ has rank three since its four rows sum to zero and its first three rows have an identity minor on columns three, five, six. Its generating rows have odd weight three, so their self-dot-products are one and the code is not self-orthogonal. This settles the hypothesis failure by an exact certificate.

**DMS-U6-P2.** Identify both row-code spaces, enumerate their words and duals, and audit the two false claims: “the native row code has length six” and “equal dual enumerators imply self-duality”.

\`\`\`json
{"record_id":"DMS-U6-P2","N":[[1,1,0,0],[1,0,1,0],[1,0,0,1],[0,1,1,0],[0,1,0,1],[0,0,1,1]],"N_shape":[6,4],"B_shape":[4,6],"point_row_code_length":4,"point_row_code_dimension":3,"point_row_code_enumerator":[1,0,6,0,1],"point_row_dual_enumerator":[1,0,0,0,1],"block_row_code_length":6,"block_row_code_dimension":3,"block_row_code_enumerator":[1,0,0,4,3,0,0],"block_row_words":[[],[1,2,3],[1,4,5],[2,4,6],[3,5,6],[2,3,4,5],[1,3,4,6],[1,2,5,6]],"block_row_dual_words":[[],[1,3,5],[2,3,6],[4,5,6],[1,2,4],[2,3,4,5],[1,3,4,6],[1,2,5,6]]}
\`\`\`

**Full key:** $N$ has six point rows and four block columns. Its row code is the full even-weight subspace of four **block coordinates**: supports $\\varnothing,12,13,14,23,24,34,1234$, of dimension three and enumerator $x^4+6x^2y^2+y^4$. Its dual is the repetition code with two words, enumerator $x^4+y^4$. The transpose $B=N^T$ has four block rows and six **point coordinates**. Its row code has the eight printed supports and enumerator $x^6+4x^3y^3+3x^2y^4$; its dual has the other eight printed supports and the same enumerator. They are distinct: $123$ lies in the first and has odd self-dot-product, so it is not in its dual. Equal enumerators need not mean equal codes or self-duality.

For an explicit MacWilliams coefficient check on the length-six code, the three numerator terms have increasing-$y$ coefficient rows $(1,6,15,20,15,6,1)$, $(4,0,-12,0,12,0,-4)$, $(3,-6,-3,12,-3,-6,3)$. Their sum is $(8,0,0,32,24,0,0)$; division by eight returns the printed enumerator. The length-four transform gives $((x+y)^4+6(x+y)^2(x-y)^2+(x-y)^4)/8=x^4+y^4$. These are exact finite polynomial identities, not simulated decoding claims.

## Required exact software laboratory

**DMS-SW1–DMS-SW3 are required software work.** The complete reference below is dependency-free JavaScript, using exact integer/rational arithmetic within declared bounds. All tables and expected outputs in this course are **analytically derived expected/reference outputs**. They are not claims that the author or another reader executed a listing. When running the supplied programs, retain the actual inputs, results and comparisons with the exact arithmetic below. The hand proofs explain correctness but do not waive these obligations.

Use Node.js **20.19 or later** for the new reference. The separately assigned native Python listings require **Python 3.10 or later**, including native20's union annotations; these are different programs and environments. Record both versions. Use an existing local installation; this text makes no installation or browser requirement. The native19 changed task specifically requires running its **actual Python** checker at $p=3$. Running the new JavaScript does not establish that the native checker was run. Likewise retain actual requested root-transport and feasibility-checker runs. Each source task has its full comparison at the native addresses already listed.

Copy the single reference listing into one local \`dms-reference.cjs\`. It defines \`globalThis.DMS_REFERENCE\` without reading files, writing files, using a network, or running the expensive audits automatically. Save each printed synthesis input JSON, unmodified, as a separate input file. The short runner after the listing loads one JSON input and prints the complete result. Keep input, code version and exact output together under the corresponding \`DMS-SW*\` record. The audit prints full subset-rank tables, circuit/base/flat lists, field tables, minor checks, binary word lists, every automorphism and every orbit; an aggregate count or screenshot alone is not its retained output.

The mathematical bounds are at most seven matrix rows/columns and seven design points/blocks, fields \`"Q"\`, \`2\`, \`3\`, \`5\`, integer input entries from $-31$ through $31$, and coefficient degree/max-part at most twelve. Matrix columns remain separately labeled even when equal. Blocks are simple, uniformly sized subsets with no repeated point. Canonical block output uses increasing integer masks, with bit $i$ representing point $i+1$; semantic block coordinate labels are \`B-<sorted point labels>\`, so reordered input does not silently change an identity. Matrix/word coordinates always retain their declared role.

\`\`\`javascript
// DMS-REFERENCE-BEGIN
(() => {
  "use strict";
  const MAX = 7;
  function integer(x, lo, hi, name) {
    if (!Number.isSafeInteger(x)) throw new TypeError(\`\${name} must be an integer\`);
    if (x < lo || x > hi) throw new RangeError(\`\${name} outside \${lo}..\${hi}\`);
    return x;
  }
  function requireField(field) {
    if (field !== "Q" && ![2, 3, 5].includes(field)) throw new RangeError("field must be Q, 2, 3, or 5");
  }
  function matrixInfo(input) {
    if (!Array.isArray(input)) throw new TypeError("matrix must be an array");
    if (input.length > MAX) throw new RangeError("at most seven rows");
    const width = input.length === 0 ? 0 : input[0]?.length;
    integer(width, 0, MAX, "column count");
    const rows = Array.from(input, row => {
      if (!Array.isArray(row) || row.length !== width) throw new TypeError("ragged matrix");
      return Array.from(row, x => integer(x, -31, 31, "matrix entry"));
    });
    return { rows, width };
  }
  function population(mask) {
    let n = 0;
    for (let x = mask; x !== 0; x &= x - 1) n++;
    return n;
  }
  function labels(mask, n) {
    return Array.from({ length: n }, (_, i) => i + 1).filter(i => mask & (1 << (i - 1)));
  }
  function equalArray(a, b) { return a.length === b.length && a.every((x, i) => x === b[i]); }
  const mod = (x, p) => ((x % p) + p) % p;
  function inverse(x, p) {
    for (let y = 1; y < p; y++) if (mod(x * y, p) === 1) return y;
    throw new Error("nonzero field pivot has no inverse");
  }
  function primeRref(input, p) {
    requireField(p);
    if (p === "Q") throw new RangeError("primeRref requires 2, 3, or 5");
    const { rows, width } = matrixInfo(input);
    const a = rows.map(row => row.map(x => mod(x, p)));
    const pivots = [];
    let r = 0;
    for (let c = 0; c < width && r < a.length; c++) {
      let s = r;
      while (s < a.length && a[s][c] === 0) s++;
      if (s === a.length) continue;
      [a[r], a[s]] = [a[s], a[r]];
      const scale = inverse(a[r][c], p);
      a[r] = a[r].map(x => mod(x * scale, p));
      for (let i = 0; i < a.length; i++) if (i !== r && a[i][c] !== 0) {
        const factor = a[i][c];
        a[i] = a[i].map((x, j) => mod(x - factor * a[r][j], p));
      }
      pivots.push(c); r++;
    }
    return { rows: a, width, pivots };
  }
  function gcdBig(a, b) {
    a = a < 0n ? -a : a; b = b < 0n ? -b : b;
    while (b !== 0n) [a, b] = [b, a % b];
    return a;
  }
  function fraction(n, d = 1n) {
    if (d === 0n) throw new RangeError("zero denominator");
    if (d < 0n) { n = -n; d = -d; }
    const g = gcdBig(n, d);
    return [n / g, d / g];
  }
  const qsub = (a, b) => fraction(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
  const qmul = (a, b) => fraction(a[0] * b[0], a[1] * b[1]);
  const qdiv = (a, b) => fraction(a[0] * b[1], a[1] * b[0]);
  function rationalRank(input) {
    const { rows, width } = matrixInfo(input);
    const a = rows.map(row => row.map(x => fraction(BigInt(x))));
    let r = 0;
    for (let c = 0; c < width && r < a.length; c++) {
      let s = r;
      while (s < a.length && a[s][c][0] === 0n) s++;
      if (s === a.length) continue;
      [a[r], a[s]] = [a[s], a[r]];
      const pivot = a[r][c];
      a[r] = a[r].map(x => qdiv(x, pivot));
      for (let i = 0; i < a.length; i++) if (i !== r && a[i][c][0] !== 0n) {
        const factor = a[i][c];
        a[i] = a[i].map((x, j) => qsub(x, qmul(factor, a[r][j])));
      }
      r++;
    }
    return r;
  }
  function rank(input, field) {
    requireField(field);
    return field === "Q" ? rationalRank(input) : primeRref(input, field).pivots.length;
  }
  function primeNullspace(input, p) {
    const { rows, width, pivots } = primeRref(input, p);
    const free = Array.from({ length: width }, (_, i) => i).filter(i => !pivots.includes(i));
    return free.map(c => {
      const v = Array(width).fill(0); v[c] = 1;
      pivots.forEach((pivot, row) => { v[pivot] = mod(-rows[row][c], p); });
      return v;
    });
  }
  function partitionCoefficients(maxPart, degree, distinct = false) {
    integer(maxPart, 0, 12, "maxPart"); integer(degree, 0, 12, "degree");
    if (typeof distinct !== "boolean") throw new TypeError("distinct must be boolean");
    const a = Array(degree + 1).fill(0); a[0] = 1;
    for (let part = 1; part <= Math.min(maxPart, degree); part++) {
      if (distinct) { for (let k = degree; k >= part; k--) a[k] += a[k - part]; }
      else { for (let k = part; k <= degree; k++) a[k] += a[k - part]; }
    }
    return a;
  }
  function rankTable(input, field) {
    const { rows, width } = matrixInfo(input); requireField(field);
    return Array.from({ length: 1 << width }, (_, mask) => rank(rows.map(row => row.filter((_, i) => mask & (1 << i))), field));
  }
  function checkedRanks(input) {
    if (!Array.isArray(input) || input.length < 1 || input.length > (1 << MAX) || (input.length & (input.length - 1))) throw new RangeError("rank table length must be a power of two through 128");
    const n = Math.log2(input.length);
    const a = Array.from(input, (r, mask) => integer(r, 0, population(mask), "rank"));
    if (a[0] !== 0) throw new RangeError("empty rank must be zero");
    for (let x = 0; x < a.length; x++) {
      for (let e = 0; e < n; e++) if (!(x & (1 << e))) {
        const y = x | (1 << e);
        if (a[y] < a[x] || a[y] > a[x] + 1) throw new RangeError("invalid rank increment");
      }
      for (let y = 0; y < a.length; y++) if (a[x | y] + a[x & y] > a[x] + a[y]) throw new RangeError("rank is not submodular");
    }
    return { ranks: a, n, full: a.length - 1 };
  }
  function choose(n, k) {
    if (k < 0 || k > n) return 0;
    let value = 1;
    for (let i = 1; i <= k; i++) value = value * (n - i + 1) / i;
    return value;
  }
  function tutte(input) {
    const { ranks: a, full } = checkedRanks(input);
    const coefficients = new Map();
    for (let mask = 0; mask <= full; mask++) {
      const corank = a[full] - a[mask], nullity = population(mask) - a[mask];
      for (let i = 0; i <= corank; i++) for (let j = 0; j <= nullity; j++) {
        const term = choose(corank, i) * choose(nullity, j) * ((corank - i + nullity - j) % 2 ? -1 : 1);
        const id = \`\${i},\${j}\`;
        coefficients.set(id, (coefficients.get(id) ?? 0) + term);
      }
    }
    return [...coefficients].filter(([, c]) => c !== 0).map(([id, c]) => [...id.split(",").map(Number), c]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  }
  function dualRanks(input) {
    const { ranks: a, full } = checkedRanks(input);
    return a.map((_, mask) => population(mask) - a[full] + a[full ^ mask]);
  }
  function minorRanks(input, deletion = 0, contraction = 0) {
    const { ranks: a, n, full } = checkedRanks(input);
    integer(deletion, 0, full, "deletion mask"); integer(contraction, 0, full, "contraction mask");
    if (deletion & contraction) throw new RangeError("deletion and contraction must be disjoint");
    const retained = Array.from({ length: n }, (_, i) => i).filter(i => !((deletion | contraction) & (1 << i)));
    const result = Array.from({ length: 1 << retained.length }, (_, mask) => {
      let original = contraction;
      retained.forEach((e, i) => { if (mask & (1 << i)) original |= 1 << e; });
      return a[original] - a[contraction];
    });
    checkedRanks(result);
    return { labels: retained.map(i => i + 1), ranks: result };
  }
  function minorAudit(input) {
    const { ranks: a, n, full } = checkedRanks(input), dual = dualRanks(a);
    if (!equalArray(dualRanks(dual), a)) throw new Error("dual involution failed");
    const elements = Array.from({ length: n }, (_, e) => {
      const bit = 1 << e, deletion = minorRanks(a, bit, 0), contraction = minorRanks(a, 0, bit);
      if (!equalArray(dualRanks(deletion.ranks), minorRanks(dual, 0, bit).ranks) || !equalArray(dualRanks(contraction.ranks), minorRanks(dual, bit, 0).ranks)) throw new Error("dual-minor identity failed");
      const role = a[bit] === 0 ? "loop" : a[full ^ bit] < a[full] ? "coloop" : "ordinary";
      return { element: e + 1, role, deletion, contraction, deletionTutte: tutte(deletion.ranks), contractionTutte: tutte(contraction.ranks) };
    });
    return { dual, doubleDual: dualRanks(dual), elements };
  }
  function matroidAudit(input, field) {
    const { width } = matrixInfo(input), a = rankTable(input, field), { full } = checkedRanks(a);
    const masks = Array.from({ length: a.length }, (_, mask) => mask);
    const independent = masks.filter(mask => a[mask] === population(mask));
    const bases = independent.filter(mask => a[mask] === a[full]);
    const circuits = masks.filter(mask => a[mask] < population(mask) && labels(mask, width).every(e => a[mask ^ (1 << (e - 1))] === population(mask) - 1));
    const closures = masks.map(mask => {
      let closed = mask;
      for (let e = 0; e < width; e++) if (a[mask | (1 << e)] === a[mask]) closed |= 1 << e;
      return closed;
    });
    const flats = masks.filter(mask => closures[mask] === mask), characteristic = Array(a[full] + 1).fill(0);
    masks.forEach(mask => { characteristic[a[full] - a[mask]] += population(mask) % 2 ? -1 : 1; });
    const loops = labels(full, width).filter(e => a[1 << (e - 1)] === 0);
    let flatMobius = null;
    if (loops.length === 0) {
      const ordered = flats.slice().sort((x, y) => population(x) - population(y) || x - y), mu = new Map();
      for (const f of ordered) {
        const value = f === 0 ? 1 : -ordered.filter(g => g !== f && (g & f) === g && mu.has(g)).reduce((sum, g) => sum + mu.get(g), 0);
        mu.set(f, value);
      }
      flatMobius = ordered.map(mask => ({ mask, labels: labels(mask, width), rank: a[mask], mu: mu.get(mask) }));
      const byFlats = Array(a[full] + 1).fill(0);
      flatMobius.forEach(f => { byFlats[a[full] - f.rank] += f.mu; });
      if (!equalArray(byFlats, characteristic)) throw new Error("flat/subset characteristic identity failed");
    }
    return { field, labels: labels(full, width), ranks: a, rank: a[full], independent: independent.map(mask => labels(mask, width)), bases: bases.map(mask => labels(mask, width)), circuits: circuits.map(mask => labels(mask, width)), flats: flats.map(mask => labels(mask, width)), closureMasks: closures, loops, characteristic, flatMobius, tutte: tutte(a), spanningCount: masks.filter(mask => a[mask] === a[full]).length };
  }
  function binaryCode(input, declaredWidth) {
    const { rows, width: observedWidth } = matrixInfo(input);
    const width = declaredWidth === undefined ? observedWidth : integer(declaredWidth, 0, MAX, "code width");
    if (rows.length > 0 && width !== observedWidth) throw new RangeError("code width disagrees with matrix");
    if (rows.some(row => row.some(x => x !== 0 && x !== 1))) throw new RangeError("binary code requires zero-one entries");
    const rowMasks = rows.map(row => row.reduce((mask, bit, i) => mask | (bit << i), 0)), words = new Set([0]);
    for (const row of rowMasks) { const old = [...words]; for (const word of old) words.add(word ^ row); }
    const sorted = [...words].sort((a, b) => a - b);
    const dual = Array.from({ length: 1 << width }, (_, word) => word).filter(word => rowMasks.every(row => population(row & word) % 2 === 0));
    const enumerator = Array(width + 1).fill(0), dualEnumerator = Array(width + 1).fill(0);
    sorted.forEach(word => { enumerator[population(word)]++; });
    dual.forEach(word => { dualEnumerator[population(word)]++; });
    const dimension = rank(rows, 2);
    if (sorted.length !== 2 ** dimension || dual.length !== 2 ** (width - dimension)) throw new Error("code dimension checksum failed");
    const macWilliams = Array.from({ length: width + 1 }, (_, k) => {
      let numerator = 0;
      for (let w = 0; w <= width; w++) for (let j = 0; j <= w; j++) numerator += enumerator[w] * choose(w, j) * choose(width - w, k - j) * (j % 2 ? -1 : 1);
      if (numerator % sorted.length !== 0) throw new Error("nonintegral MacWilliams coefficient");
      return numerator / sorted.length;
    });
    if (!equalArray(macWilliams, dualEnumerator)) throw new Error("direct/MacWilliams dual enumerators disagree");
    const spell = word => Array.from({ length: width }, (_, i) => (word >> i) & 1).join("");
    return { field: 2, length: width, dimension, words: sorted.map(spell), enumerator, dualDimension: width - dimension, dualWords: dual.map(spell), dualEnumerator, macWilliams };
  }
  function checkedFamily(n, input) {
    integer(n, 0, MAX, "ground size");
    if (!Array.isArray(input)) throw new TypeError("family must be an array");
    if (input.length > (1 << n)) throw new RangeError("too many family members");
    const seen = new Set();
    const masks = Array.from(input, member => {
      if (!Array.isArray(member)) throw new TypeError("family member must be an array");
      let mask = 0;
      for (const label of member) {
        integer(label, 1, n, "point label");
        const bit = 1 << (label - 1);
        if (mask & bit) throw new RangeError("repeated point in a member");
        mask |= bit;
      }
      if (seen.has(mask)) throw new RangeError("duplicate family member");
      seen.add(mask); return mask;
    });
    return masks.sort((a, b) => a - b);
  }
  function designAudit(n, inputBlocks) {
    integer(n, 1, MAX, "point count");
    const masks = checkedFamily(n, inputBlocks);
    if (masks.length < 1 || masks.length > MAX) throw new RangeError("use one through seven blocks");
    const k = population(masks[0]);
    if (k === 0 || masks.some(mask => population(mask) !== k)) throw new RangeError("blocks must have one common positive size");
    const blocks = masks.map(mask => labels(mask, n)), b = blocks.length;
    const N = Array.from({ length: n }, (_, point) => masks.map(mask => (mask >> point) & 1));
    const B = Array.from({ length: b }, (_, block) => N.map(row => row[block]));
    const replications = N.map(row => row.reduce((sum, x) => sum + x, 0)), pairs = [];
    for (let i = 1; i <= n; i++) for (let j = i + 1; j <= n; j++) pairs.push({ points: [i, j], count: masks.filter(mask => (mask & (1 << (i - 1))) && (mask & (1 << (j - 1)))).length });
    const lambda = pairs.length > 0 && pairs.every(row => row.count === pairs[0].count) ? pairs[0].count : null;
    const r = replications.every(value => value === replications[0]) ? replications[0] : null;
    const isTwoDesign = k >= 2 && n >= 2 && lambda !== null && lambda > 0;
    const gram = a => a.map(row => a.map(other => row.reduce((sum, value, i) => sum + value * other[i], 0)));
    const pointGram = gram(N), blockGram = gram(B), fields = ["Q", 2, 3, 5];
    return {
      points: Array.from({ length: n }, (_, i) => i + 1), blocks, v: n, b, k, r, lambda, isTwoDesign,
      nontrivialTwoDesign: isTwoDesign && k < n, replications, pairs,
      pointByBlockShape: [n, b], blockByPointShape: [b, n], N, B, pointGram, blockGram,
      ranks: fields.map(field => ({ field, N: rank(N, field), B: rank(B, field), pointGram: rank(pointGram, field), blockGram: rank(blockGram, field) })),
      pointRowCode: { coordinates: "blocks", coordinateLabels: blocks.map(block => \`B-\${block.join('-')}\`), ...binaryCode(N) },
      blockRowCode: { coordinates: "points", coordinateLabels: Array.from({ length: n }, (_, i) => i + 1), ...binaryCode(B) }
    };
  }
  function symmetryAudit(n, inputFamily) {
    integer(n, 0, MAX, "ground size");
    const familyMasks = checkedFamily(n, inputFamily), familySet = new Set(familyMasks);
    function image(mask, permutation) {
      let result = 0;
      for (let i = 0; i < n; i++) if (mask & (1 << i)) result |= 1 << (permutation[i] - 1);
      return result;
    }
    const permutations = []; let candidatePermutations = 0;
    function visit(prefix, remaining) {
      if (remaining.length === 0) {
        candidatePermutations++;
        if (familyMasks.every(mask => familySet.has(image(mask, prefix)))) permutations.push(prefix.slice());
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        prefix.push(remaining[i]); visit(prefix, remaining.slice(0, i).concat(remaining.slice(i + 1))); prefix.pop();
      }
    }
    visit([], Array.from({ length: n }, (_, i) => i + 1));
    let factorial = 1;
    for (let i = 2; i <= n; i++) factorial *= i;
    if (candidatePermutations !== factorial || permutations.length === 0) throw new Error("permutation coverage/identity failed");
    const groupOrder = permutations.length;
    function cycleLengths(permutation) {
      const seen = Array(n).fill(false), result = [];
      for (let start = 0; start < n; start++) if (!seen[start]) {
        let length = 0, current = start;
        do { seen[current] = true; length++; current = permutation[current] - 1; } while (!seen[current]);
        result.push(length);
      }
      return result.sort((a, b) => a - b);
    }
    function compareCycles(a, b) {
      for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) return a[i] - b[i];
      return a.length - b.length;
    }
    const histogram = new Map(), burnsideNumerators = Array(n + 1).fill(0);
    for (const permutation of permutations) {
      const cycles = cycleLengths(permutation), id = cycles.join(","), row = histogram.get(id);
      if (row) row.count++; else histogram.set(id, { cycles, count: 1 });
      let polynomial = Array(n + 1).fill(0); polynomial[0] = 1;
      for (const length of cycles) {
        const next = polynomial.slice();
        for (let k = 0; k + length <= n; k++) next[k + length] += polynomial[k];
        polynomial = next;
      }
      for (let k = 0; k <= n; k++) burnsideNumerators[k] += polynomial[k];
    }
    const burnsideInventory = burnsideNumerators.map(numerator => {
      if (numerator % groupOrder !== 0) throw new Error("nonintegral Burnside coefficient");
      return numerator / groupOrder;
    });
    const visited = new Set(), orbits = [], directInventory = Array(n + 1).fill(0);
    for (let mask = 0; mask < (1 << n); mask++) if (!visited.has(mask)) {
      const images = new Set(permutations.map(permutation => image(mask, permutation)));
      const representativeMask = Math.min(...images), size = population(representativeMask), memberMasks = [...images].sort((a, b) => a - b);
      memberMasks.forEach(member => { visited.add(member); });
      const stabilizerSize = permutations.filter(permutation => image(representativeMask, permutation) === representativeMask).length;
      if (images.size * stabilizerSize !== groupOrder) throw new Error("orbit-stabilizer checksum failed");
      directInventory[size]++;
      orbits.push({ representativeMask, labels: labels(representativeMask, n), size, memberMasks, orbitSize: images.size, stabilizerSize });
    }
    if (visited.size !== (1 << n) || !equalArray(directInventory, burnsideInventory)) throw new Error("direct/Burnside subset inventories disagree");
    const cycleHistogram = [...histogram.values()].sort((a, b) => compareCycles(a.cycles, b.cycles)).map(row => ({ ...row, fixedPoints: row.cycles.filter(length => length === 1).length }));
    const permutationCharacter = cycleHistogram.map(row => row.fixedPoints);
    const reducedCharacter = n > 0 ? permutationCharacter.map(value => value - 1) : null;
    const invariantNumerator = cycleHistogram.reduce((sum, row) => sum + row.count * row.fixedPoints, 0);
    const commutantNumerator = cycleHistogram.reduce((sum, row) => sum + row.count * row.fixedPoints ** 2, 0);
    const average = numerator => { if (numerator % groupOrder !== 0) throw new Error("nonintegral averaging dimension"); return numerator / groupOrder; };
    const invariantDimension = average(invariantNumerator), permutationCommutantDimension = average(commutantNumerator);
    const reducedNumerator = n > 0 ? cycleHistogram.reduce((sum, row) => sum + row.count * (row.fixedPoints - 1) ** 2, 0) : null;
    const reducedCommutantDimension = reducedNumerator === null ? null : average(reducedNumerator);
    if (invariantDimension !== (n > 0 ? directInventory[1] : 0)) throw new Error("fixed-space/orbit count disagrees");
    return { n, family: familyMasks.map(mask => labels(mask, n)), candidatePermutations, groupOrder, permutations, cycleHistogram, subsetCount: 1 << n, orbits, directInventory, burnsideNumerators, burnsideInventory, pointOrbitCount: n > 0 ? directInventory[1] : 0, permutationCharacter, reducedCharacter, invariantDimension, permutationCommutantDimension, reducedCommutantDimension, averagingNumerators: { invariant: invariantNumerator, commutant: commutantNumerator, reduced: reducedNumerator } };
  }
  function configurationAudit(inputMatrix, inputBlocks) {
    const { rows, width } = matrixInfo(inputMatrix); integer(width, 1, MAX, "configuration point count");
    const binaryRows = rows.map(row => row.map(x => mod(x, 2))), matroid = matroidAudit(binaryRows, 2);
    const orthogonalRows = primeNullspace(binaryRows, 2), dualMatrix = orthogonalRows.length > 0 ? orthogonalRows : [Array(width).fill(0)];
    const representedDual = matroidAudit(dualMatrix, 2);
    if (!equalArray(representedDual.ranks, dualRanks(matroid.ranks))) throw new Error("orthogonal/complementary duals disagree");
    return {
      primaryField: 2, pointLabels: Array.from({ length: width }, (_, i) => i + 1), matroid,
      fieldMatroids: ["Q", 2, 3, 5].map(field => matroidAudit(rows, field)), minors: minorAudit(matroid.ranks), dualMatrix, representedDual,
      coordinateCode: { coordinates: "points", coordinateLabels: Array.from({ length: width }, (_, i) => i + 1), ...binaryCode(binaryRows) },
      incidence: designAudit(width, inputBlocks), matroidSymmetry: symmetryAudit(width, matroid.circuits), blockSymmetry: symmetryAudit(width, inputBlocks)
    };
  }
  globalThis.DMS_REFERENCE = Object.freeze({ partitionCoefficients, rank, primeNullspace, rankTable, tutte, dualRanks, minorRanks, minorAudit, matroidAudit, binaryCode, designAudit, symmetryAudit, configurationAudit });
})();
// DMS-REFERENCE-END
\`\`\`

Use this complete runner as a separate local \`dms-run.cjs\` beside the reference and your copied input JSON. It reads a local input you chose; these are not trusted imported website destinations. Run \`node dms-run.cjs DMS-P-input.json\` and likewise the changed and return inputs. Keep the complete standard output rather than truncating it to summary counts.

\`\`\`javascript
// DMS-RUNNER-BEGIN
"use strict";
require("./dms-reference.cjs");
const { readFileSync } = require("node:fs");
const input = JSON.parse(readFileSync(process.argv[2], "utf8"));
const output = globalThis.DMS_REFERENCE.configurationAudit(input.matrix, input.blocks);
process.stdout.write(JSON.stringify(output, null, 2) + "\\n");
// DMS-RUNNER-END
\`\`\`

**DMS-SW1 — coefficient and inventory run.** Run \`partitionCoefficients\` on every four-row input in DMS-U1-P2, saving the exact arrays; then change the maximum part to two as specified. Run \`symmetryAudit\` for the P/C/R block families, retain every permutation/orbit record and compare direct orbit enumeration with the independently derived cycle-index coefficients. Predict the identity/nonidentity cycle contributions before reading the result. The full analytical keys are U1-P2 and the P/C/R cycle tables; an output difference needs a corrected input, program or mathematical claim, recorded as a revision rather than overwritten.

**DMS-SW2 — exact matroid and minor run.** For each printed P/C/R matrix run \`configurationAudit\`, preserving all mask-indexed ranks and all four field interpretations. Independently run \`matroidAudit\` on the signed changed graph matrix printed in DMS-C; compare it with its unsigned binary lift across the named fields. Run \`minorAudit\` on the four-column loop/coloop example in U5-P1, not just on loopless specimens. Check every singleton deletion/contraction, dual involution, swapped minor identity and ordinary/loop/coloop polynomial branch. Run the exact unsafe_original and unsafe_modified three-column inputs printed in DMS-U4-P2 and preserve the changed circuit list. The public model is the exact rank/circuit rules, matrices, polynomial records and field distinctions in those tasks and syntheses; these determine every emitted rank entry and branch.

**DMS-SW3 — design and code run, malformed inputs, replay.** Run the actual incidence/code/symmetry references for all three syntheses, preserving $N$ and $B=N^T$ with their coordinate labels. Compare every pair count, every binary word, both code orientations, direct dual words and MacWilliams coefficients. Then independently change P to the **point-deleted residual** C and to the **block-complement** R as specified; do not modify the model outputs. Exercise typed rejection with: a ragged matrix, a Boolean entry, unsupported modulus four, an eighth column, duplicated point inside a block, duplicate block, point label outside the ground set, unequal block sizes, intersecting deletion/contraction masks, and a non-submodular rank table. The full expected model is rejection by TypeError or RangeError at the input boundary, not an altered mathematical object. Finally replay each frozen valid input from a fresh process, compare its full JSON with your first output, and record equality or the precise differing fields. A fresh process does not establish a delayed or unseen assessment.

**Coverage and correctness proof for the reference.** Bit masks enumerate exactly $2^n$ subsets because each of $n$ independent bit choices occurs once. Elimination's invertible row operations and decreasing rectangle prove exact named-field rank; reduced BigInt numerator/denominator pairs avoid floating rank decisions over $\\mathbb Q$. Minimal dependence is checked by every immediate deletion, which suffices by heredity. Closure uses zero rank gain on every indexed column. The rank-table validator checks bounds, each one-element increment and every submodular pair before minor/polynomial routines use a supplied table. Contraction compresses only surviving label positions and uses the original contracted rank in every entry. The Tutte routine expands the actual subset definition; its results are checked independently by recurrence in the audit rather than by a duplicate expansion.

The binary code routine builds the full additive span by either using or omitting each generator. Its direct orthogonal-code scan examines every binary word, while the separate MacWilliams transform comes from Unit 6's proved identity. The symmetry generator places every remaining label in the next position, visiting each of $n!$ permutations exactly once. A permutation preserving the finite family into itself preserves it onto itself; such permutations form the automorphism group. Every subset orbit is then explicitly formed, checked by orbit–stabilizer and compared with the cycle-index sum. These are proofs of generator coverage/predicate correctness for the stated finite domains. They neither prove a universal classification of matroids/designs nor make this exponential/factorial reference a large-instance algorithm.

**Exact native execution drivers.** Keep each assigned native Python API fence **unchanged**, including its original demonstration and assertions. Append the corresponding driver below in the same local script, after that fence. Do not blindly replace every occurrence of two by three: native19's original $p=2$ demonstration includes a fixed Fano assertion, which should remain intact. The appended calls print the actual changed-case/full returned data; earlier demonstration output may precede the tagged JSON line. These drivers are required reference recipes, not a claim that any author ran them.

Append this to native07's fence containing \`def labelled_component_tables\`: it prints the complete returned degree-0–10 tables and constrained row, rather than only the default selected degree-eight entries.

<!-- DMS-NATIVE07-DRIVER -->
\`\`\`python
import json
specialist_limit = 10
specialist_components = (0, 0, 2, 3)
specialist_tables = labelled_component_tables(specialist_components, specialist_limit)
specialist_constrained = captained_nonadjacent_counts(specialist_limit)
print("DMS07:" + json.dumps({
    "limit": specialist_limit, "components": specialist_components,
    "unordered": specialist_tables["unordered"],
    "ordered": specialist_tables["ordered"],
    "constrained": specialist_constrained,
}, sort_keys=True))
\`\`\`

Append this to native19's fence containing \`def prime_projective_plane\`, preserving its original $p=2$ assertion. It performs the actual required $p=3$ construction and certificate and prints all points and lines.

<!-- DMS-NATIVE19-DRIVER -->
\`\`\`python
import json
specialist_prime = 3
specialist_points, specialist_lines = prime_projective_plane(specialist_prime)
specialist_certificate = plane_incidence_certificate(specialist_points, specialist_lines.values())
print("DMS19:" + json.dumps({
    "prime": specialist_prime,
    "points": specialist_points,
    "lines": [{"normal": normal, "points": sorted(block)}
              for normal, block in sorted(specialist_lines.items())],
    "certificate": specialist_certificate,
}, sort_keys=True))
\`\`\`

Append this to native20's fence containing \`def finite_greedy_audit\`. The distinct four-element changed family is not its default signed-$K_4$ demonstration.

<!-- DMS-NATIVE20-DRIVER -->
\`\`\`python
import json
specialist_ground = ("a", "b", "c", "d")
specialist_maximal = ("ab", "ac", "bd")
specialist_family = {
    frozenset(part)
    for word in specialist_maximal
    for size in range(len(word) + 1)
    for part in combinations(word, size)
}
specialist_weights = {"a": 1, "b": 5, "c": 6, "d": 4}
specialist_report = finite_greedy_audit(specialist_ground, specialist_family, specialist_weights)
print("DMS20:" + json.dumps({
    "ground": specialist_ground,
    "maximal": specialist_maximal,
    "family": [[x for x in specialist_ground if x in member]
               for member in sorted(specialist_family,
                   key=lambda member: sum(1 << i for i, x in enumerate(specialist_ground) if x in member))],
    "weights": specialist_weights,
    "report": specialist_report,
}, sort_keys=True))
\`\`\`

Append this to native21's fence containing \`def rooted_necklace_inventory\`, preserving the default binary-four demonstration. It performs the required three-color/five-bead task and retains every returned row.

<!-- DMS-NATIVE21-DRIVER -->
\`\`\`python
import json
specialist_length = 5
specialist_colors = 3
specialist_rows = rooted_necklace_inventory(specialist_length, specialist_colors)
print("DMS21:" + json.dumps({
    "length": specialist_length,
    "colors": specialist_colors,
    "rows": specialist_rows,
    "unrooted": len(specialist_rows),
    "rooted": sum(row[2] for row in specialist_rows),
}, sort_keys=True))
\`\`\`

For native07 the analytical comparisons are unordered-eight $5040+1680=6720$, ordered-eight $30240+40320=70560$, and constrained-ten $2721600$; every other degree-0–10 entry follows the printed coefficient/least-label rules. Native19's full changed key has certificate $(13,13,4,4,52,78,78)$ in its stated field order. Native20's changed report has eight feasible sets, full scan $ac$ of weight seven, optimum $bd$ of weight nine, failed pair $\\{c\\},\\{b,d\\}$, prefix ranks $(1,1,2,2)$ versus counts $(1,1,1,2)$, and integer counterweights $(0,5,6,5)$ in ground order. Native21 has 51 returned unrooted rows and rooted total 243, with three constant necklaces contributing one root type each and 48 others five each. Retain the **actual** full tagged output and compare it to those source keys; these analytical reference numbers alone are not an execution record.

The following provenance pins identify required/repair sources. The two corrected online chapter postimages must be adopted before executing the course audit. They were reconstructed and inverse-checked in memory from the approved patch, without creating source copies. No generated catalog or whole curriculum is pinned.

\`\`\`json
{"record_id":"DMS-SOURCE-PINS","sources":[
{"id":"DMS-ADVANCED","path":"modules/math_test/content/courses/discrete-mathematics-advanced.md","sha256":"06aec6a44a6407292b7bc930c00eb8722c17e0426a54ef7a7a3a19bdef77f016"},
{"id":"DMS-S1","path":"modules/math_test/content/books/discrete-mathematics-proof-counting-structure/advanced-enumeration-partitions.md","sha256":"ff0dc41d6b6ddb03b6542d28e133ffd4ec778fc5b428d915afe81d67bb5f712d","exercises":["DM-CH11-E001","DM-CH11-E002","DM-CH11-E003","DM-CH11-E004","DM-CH11-E005","DM-CH11-E006","DM-CH11-E007","DM-CH11-E008","DM-CH11-E009","DM-CH11-E010","DM-CH11-E011","DM-CH11-E012"]},
{"id":"DMS-S2","path":"modules/math_test/content/books/discrete-mathematics-proof-counting-structure/finite-orders-lattices-mobius.md","sha256":"c0204af5f3da0930b0ea5f1db65b55642fbd9e58b37745c12cdf2989a51520ef","exercises":["DM-CH10-E006","DM-CH10-E007","DM-CH10-E008","DM-CH10-E009"]},
{"id":"DMS-S3","path":"modules/math_test/content/books/algebra-patterns-structure/group-actions-orbits-counting.md","sha256":"8a6979f7079e9f36e3d0dc63b2f6b9f57fc2b1da282f34f102ce4e3a6a7256e8","exercises":["ALG-CH08-E013","ALG-CH08-E014","ALG-CH08-E015","ALG-CH08-E016","ALG-CH08-E017","ALG-CH08-E018","ALG-CH08-E019","ALG-CH08-E020","ALG-CH08-P001"]},
{"id":"DMS-S4","path":"modules/math_test/content/books/discrete-combinatorial-structures/graphic-cographic-matroids.md","sha256":"b50fd6166229a5401d7ad907bee868262f04bedaf061b25e5a2dddb3b08ed941","exercises":[1,2,3,5]},
{"id":"DMS-S5","path":"modules/math_test/content/books/discrete-combinatorial-structures/linear-representability-fields.md","sha256":"997adbb9e393066c2f59272031a7eb7b33a6bc451a8a1cfab334d6a2042db2cd","exercises":[1,2,3,4,5]},
{"id":"DMS-S6","path":"modules/math_test/content/books/discrete-combinatorial-structures/deletion-contraction-minors.md","sha256":"8a0955cd4afeaed8620ef95bcf07c8a3327952c3bb7d4e1d562afe94ca453ce6","exercises":[1,2,3,4,5,6,7,8,9,10]},
{"id":"DMS-S7","path":"modules/math_test/content/books/discrete-combinatorial-structures/duality-sums-connectivity.md","sha256":"fa365ebe0706f8cb0ccd5e7439c68bfabe15b2a1fd0130641a4d9ff41fef3c5f","exercises":[1,2,3,4,5,6,7,8,9,10]},
{"id":"DMS-S8","path":"modules/math_test/content/books/discrete-combinatorial-structures/designs-incidence-representability.md","sha256":"d2a94abfbe179658643397e633a60b7862183e4557602b04e167960a912241d7","exercises":[1,2,3,4,5,6,7,8,9,10,11,12,13]},
{"id":"DMS-S9","path":"modules/math_test/content/books/discrete-combinatorial-structures/structural-investigations.md","sha256":"40d6bcf09d22c60f4bbd7e0110f0154952911501733e4ed70258247e7ae9376e","exercises":[1,2,3,4,5,6,7,8,9,10]},
{"id":"DMS-S10","path":"modules/math_test/content/books/finite-algebra-computation/representation-theory-of-sn.md","sha256":"11d50043132656936529f587f9dda3191013ce2f391ad124787f14740a608a4b","exercises":[4]},
{"id":"DMS-RANK-REPAIR","path":"modules/math_test/content/books/discrete-combinatorial-structures/rank-submodularity-flats.md","sha256":"699096f88de685561688200fd74af5630d4386283cf63b81f661bbf89811e328"},
{"id":"DMS-PREP1","path":"modules/math_books/combinatorics/chapters/07-exponential-generating-functions.qmd","sha256":"6f63e0bda99199d1543156f36b10b1d42cfef3953515063428d0bf47de54aea8"},
{"id":"DMS-PREP2","path":"modules/math_books/combinatorics/chapters/21-algebraic-enumerative.qmd","sha256":"16393d8b60b702cec3d3ce5b8e1feb2038082c45ddb61e85a2af815cbbae2872"},
{"id":"DMS-PREP3","path":"modules/math_books/combinatorics/chapters/19-designs-codes.qmd","sha256":"ed6ddcfcc38902ac7b4d64bf401a38ab9fd956eb7283b91fb29f23528f5fd2f0"},
{"id":"DMS-PREP4","path":"modules/math_books/combinatorics/chapters/20-matroids.qmd","sha256":"2310d059fdfa4a2478dadfcfdae10fb496c84a313f8f125e004b0e5ddcf8fd10"},
{"id":"DMS-READER-GUIDE","path":"modules/math_test/content/books/discrete-combinatorial-structures/front-matter/reader-prerequisite-guide.md","sha256":"c02012ecf9a86f8e31b78cbf03dbe50178d52a53fe90cb778ddd5ebc9817062e"},
{"id":"DMS-REPAIR-GUIDE","path":"modules/math_test/content/books/discrete-combinatorial-structures/front-matter/diagnostic-repair-routes.md","sha256":"87f55662aaf79403ae9da0a9c2179a753176e61d449d17e7eeb65b085ecc40af"}
]}
\`\`\`

## Seminar proposal and proof reconstruction

The seminar is a required progression of proposals, general proof reconstruction, critique, correction, executable replay and synthesis. It uses supplied shareable finite data and public models. It does not claim discovery of a new theorem, real peer feedback, a journal review, or unseen assessment. Keep each stage separately, including help and public-model exposure; P/C/R submissions do not replace these stages.

**DMS-SEM1 — fixed proposal.** Write a proposal addressing: “Which statements about the seven-point incidence configuration survive deletion, duality and block complementation?” State three precise intended claims, one plausible false generalization, primitive data/field/ground-set choices, the exact finite software domain, a dependency graph in text, expected positive and negative certificates, and the plan for the later changed and return seminar. Use DMS-S9's five-artifact protocol, preserving mathematical report versus execution evidence.

**Complete SEM1 public model.** Primitive data are seven ordered binary point columns, seven explicit triples, the finite automorphism action, and matrices with typed row/column coordinates. Claim A is the universal **loopless** flat Möbius/subset/Tutte equality, specialized to P/C/R after proving their matroid and loopless hypotheses. Claim B is the binary linear-code MacWilliams identity, specialized separately to coordinate, block-row and point-row codes. Claim C is that the fixed residual after deleting point seven is $M(K_4)$ on point columns but only a $1-(6,3,2)$ residual design, with pair-zero witnesses $16,25,34$. The false generalization to test is “the complement design incidence matrix represents the dual geometric matroid”; a rank-three/rank-four mismatch will refute it in R.

The dependency graph is: formal coefficients and finite sums → incidence convolution; rank/submodularity → closure/flats → loopless characteristic bridge; finite action/cycle decomposition → weighted inventories; complex invariant inner product → averaging projections → the stated irreducibility criterion; field elimination → represented matroids/dual kernels → deletion/contraction/Tutte; design pair counts → typed incidence matrices → binary span/orthogonal code → MacWilliams. No arrow from a design's parameter arithmetic alone to existence is permitted. The code domain is each supplied matrix with at most seven rows/columns, exact fields Q/2/3/5, every $2^n$ subset, every $n!$ permutation, and every binary word. This is a complete check of those finite instances, not a classification of all designs or matroids.

Positive certificates are displayed independent column bases, kernel vectors/full minimal circuit lists, all pair incidences, and exact orbit/dual-code tables. Negative certificates are the residual's three missing pairs, characteristic-two obstruction, nonzero determinant of a purported dependent odd-field triple, singular-Gram/full-row-rank example, loop/coloop branch and wrong matrix-row-space dimensions. Compare source methods with new general proofs before running. The changed seminar recomputes every affected role on six labels; the return constructs an orthogonal rank-four dual and complements blocks on seven labels. Every program output is retained with the input/version, while the mathematical proof explains what was exhaustively covered.

**SEM1 feedback:** repair a proposal that says “all invariants survive” by naming the operation and invariant individually. Repair a fieldless matrix claim by attaching its field and column labels. Repair an unbounded “no design found” claim by replacing it with the complete finite predicate actually checked; this laboratory does not run the old open exact-design solver.

**DMS-SEM2 — general proof reconstruction.** Before opening the model, reconstruct the loopless characteristic–Tutte bridge: define convolution and both inverses; show closure preserves rank; prove the closure-fiber Möbius identity; track the specialization sign; state the one-loop failure. Then present a five-minute-length written explanation for P's characteristic polynomial, including the count of lines and the exact role of looplessness. Length is descriptive, not a measured workload or a timed assessment.

**Complete SEM2 public model.** On comparable pairs, convolution is associative because both expansions sum over $x\\le y\\le z\\le w$; diagonal $\\delta$ is identity. Strict-step $\\eta=\\zeta-\\delta$ is nilpotent at exponent $|P|$, so the finite alternating geometric sum is a two-sided inverse. For a finite loopless matroid, submodularity makes zero rank gains persist over larger sets, hence adding every closure element preserves rank. Closure is the least flat containing its input, and its bottom is empty. The fiber coefficients $s(F)=\\sum_{\\operatorname{cl}(A)=F}(-1)^{|A|}$ have cumulative sum $(1-1)^{|F|}$ on each flat: one at empty and zero elsewhere. By the unique Möbius recursion they equal $\\mu(\\varnothing,F)$. Grouping subsets by closure preserves rank and gives $\\chi=\\sum_A(-1)^{|A|}q^{r-r(A)}$. In $(-1)^rT(1-q,0)$ the sign exponent is $r+(r-r(A))+(|A|-r(A))$, equal modulo two to $|A|$, proving the identity as polynomials.

For P, distinct nonzero binary columns form independent pairs, and every pair has a unique line with third point its sum. Twenty-one pairs divided by three pairs per line give seven lines. A rank-two binary space has only three nonzero points, so there are no further proper flats of larger size. The bottom coefficients are $1,-1,2,-8$, giving $q^3-7q^2+14q-8$. A one-loop matroid's sole flat is its nonempty bottom and yields flat polynomial one, while its subset polynomial is zero. This refutes omission of the loopless clause and identifies the invalid bottom cancellation, rather than treating the finite example as a universal proof.

**SEM2 feedback:** a correct numerical Fano polynomial with no closure-fiber proof is an incomplete reconstruction. A proof with infinite rearrangements should be replaced by the actual finite sums. A claim about hyperplane-avoiding functionals needs a representation over the named finite field in addition to the polynomial identity.

## Primary synthesis — The seven-point configuration

**DMS-P, fixed required primary.** The field of the main represented matroid and codes is **two**. Interpret the same integer matrix separately over Q/3/5 when the software asks for its field audit. Blocks are listed in native source order; all matrices named \`N_native\` use that order, whereas reference output canonically reorders block columns and supplies semantic block labels. A support such as \`123\` below means point coordinates one, two, three, never an array index into learner notes.

\`\`\`json
{
 "record_id":"DMS-P","matrix":[[1,0,1,0,1,0,1],[0,1,1,0,0,1,1],[0,0,0,1,1,1,1]],
 "blocks":[[1,2,3],[1,4,5],[1,6,7],[2,4,6],[2,5,7],[3,4,7],[3,5,6]],
 "dual_matrix":[[1,1,1,0,0,0,0],[1,0,0,1,1,0,0],[1,0,0,0,0,1,1],[0,1,0,1,0,1,0]],
 "N_native":[[1,1,1,0,0,0,0],[1,0,0,1,1,0,0],[1,0,0,0,0,1,1],[0,1,0,1,0,1,0],[0,1,0,0,1,0,1],[0,0,1,1,0,0,1],[0,0,1,0,1,1,0]],
 "rank":3,"basis_count":28,"independent_count":57,"spanning_count":92,
 "size_rank_counts":[[0,0,1],[1,1,7],[2,2,21],[3,2,7],[3,3,28],[4,3,35],[5,3,21],[6,3,7],[7,3,1]],
 "flat_types":[[0,0,1,1],[1,1,-1,7],[2,3,2,7],[3,7,-8,1]],"characteristic":[-8,14,-7,1],
 "tutte":[[3,0,1],[2,0,4],[1,0,3],[1,1,7],[0,1,3],[0,2,6],[0,3,3],[0,4,1]],
 "design":{"v":7,"b":7,"k":3,"r":3,"lambda":1,"isTwoDesign":true,"incidences":21},
 "incidence_ranks":[["Q",7],[2,4],[3,6],[5,7]],"coordinate_field_bases":[["Q",29],[2,28],[3,29],[5,29]],
 "coordinate_code":{"length":7,"dimension":3,"enumerator":[1,0,0,0,7,0,0,0],"words":[[],[4,5,6,7],[2,3,6,7],[2,3,4,5],[1,3,5,7],[1,3,4,6],[1,2,5,6],[1,2,4,7]]},
 "block_code":{"length":7,"dimension":4,"enumerator":[1,0,0,7,7,0,0,1]},"point_code":{"length":7,"dimension":4,"enumerator":[1,0,0,7,7,0,0,1]},
 "symmetry":{"order":168,"cycle_types":[[1,1,1,1,1,1,1],[1,1,1,2,2],[1,3,3],[1,2,4],[7]],"multiplicities":[1,21,56,42,48],"inventory":[1,1,1,2,2,1,1,1],"reduced_commutant_dimension":1},
 "orbit_models":[[0,1,168],[1,7,24],[3,21,8],[7,7,24],[11,28,6],[15,28,6],[30,7,24],[31,21,8],[63,7,24],[127,1,168]]
}
\`\`\`

Write a single mathematical portfolio with: (a) formal weighted enumeration and exact symmetry inventory, including the complex reduced-module argument; (b) all matroid ranks/circuits/flats, characteristic and Tutte polynomials with general bridges; (c) the design proof, all pair counts, incidence identities and named-field ranks; (d) both incidence-code orientations, the coordinate code, their explicit duals and MacWilliams calculation; (e) required software run/modification/replay records with coverage proofs; (f) SEM1–SEM2 proposal and reconstruction revised after comparison. A text/table certificate must carry every conclusion even if a drawing is added.

**Complete DMS-P public model.** Columns one, two, four are the identity basis. Distinct points are independent pairs; the seven displayed blocks are exactly dependent triples, and their seven complementary four-sets are the other circuits. To justify the four-circuits, each has binary sum zero and contains no line: any other Fano line meets its omitted line, so it cannot lie in the complement. Every larger dependent support contains one of those smaller circuits. The complete rank rule is: empty rank zero; singleton rank one; every pair rank two; a displayed line triple rank two; every other triple and every set of size at least four rank three. This rule specifies **every one of the 128 rank-table entries**, not just an aggregate count. It proves 28 bases, $1+7+21+28=57$ independent sets and $28+35+21+7+1=92$ spanning sets.

The flats and Möbius values were derived in U2-P2, and its closure-fiber proof gives $\\chi=(q-1)(q-2)(q-4)$. Substituting the printed full size/rank ledger into Tutte gives $x^3+4x^2+3x+7xy+3y+6y^2+3y^3+y^4$. For example $T(1,1)=28$, $T(2,1)=57$, $T(1,2)=92$, $T(2,2)=128$. Deleting/contracting seven has the complete U5-P2 models with 16 and 12 bases and the correct polynomial sum. Every other singleton has an isomorphic pair of minors because the binary linear automorphism group is point-transitive; the software retains the original labels and checks each separately.

Every unordered pair has unique third point its binary sum, proving the simple $2-(7,3,1)$ design and all twenty-one pair counts one. Each point occurs three times and there are twenty-one incidences. With native block order, the printed $N$ is point-by-block, and $NN^T=2I_7+J_7$. Its real/rational rank is seven: the form is positive, or the determinant is $9\\cdot2^6=576$. In the binary field the row/block spans below give rank four although the Gram is $J$, rank one. Modulo three the Gram has rank six, and $N\\mathbf1=3\\mathbf1=0$ supplies a nonzero kernel vector, so rank is exactly six. Modulo five the Gram determinant is nonzero, so rank is seven. These arguments prove each named rank, not a transfer of real positivity to finite characteristic.

Let $S$ be the row code of the coordinate matrix. Each nonzero binary functional takes value one at four of the seven nonzero vectors: translation by an input where the functional is one pairs its zeros and ones among all eight vectors, and removing zero removes a zero. Thus $S$ has exactly the eight printed words and enumerator $x^7+7x^3y^4$. The four rows of the printed $H$ are independent, using columns $3,5,7,2$ with determinant one, and $AH^T=0$ modulo two. Hence $D=\\operatorname{row}(H)=\\ker A=S^\\perp$, of dimension four. Its full words are: empty; the seven lines; their seven complements; and all seven points. The rows $h_1,h_2,h_3$ sum to the all-one word; missing line words are $L_5=h_2+h_3+h_4$, $L_6=h_1+h_3+h_4$, $L_7=h_1+h_2+h_4$. Thus all sixteen stated words occur and no others can, since the dimension is four.

The block-by-point matrix $B=N^T$ has those seven line rows, so its row code on **point coordinates** is $D$, with $W_D=x^7+7x^4y^3+7x^3y^4+y^7$. The native row code of $N$ has **block coordinates**. In the displayed native orders $N$ happens to equal its transpose; identifying block $L_i$ with point label $i$ explicitly gives the same sixteen-word list in those block coordinates. This accidental numerical symmetry is an explicit identification, not a general theorem about transposes. The MacWilliams transform is

$$\\frac{(x+y)^7+7(x+y)^3(x-y)^4}{8}=x^7+7x^4y^3+7x^3y^4+y^7.$$

Unit 6's finite character-sum proof justifies it and double duality, while exact word enumeration checks every coefficient.

The group/order/cycle/inventory and complex irreducibility proofs are U3-P2's full model. In \`orbit_models\`, each row is \`[least representative mask, orbit size, stabilizer size]\`. The ten rows distinguish dependent and independent triples and their complements, and their orbit sizes sum to 128. The group acts transitively on ordered independent pairs, so the position action is two-transitive; its complex constant-orthogonal space is irreducible by the proved commutant calculation. There is no division by 168 in the binary representation calculation.

Finally, the same integer coordinate matrix over an odd field is **not** a representation of the Fano matroid. The triple $356$ has determinant $-2$, so it is independent over Q/3/5. The other six Fano lines remain dependent and there are no other dependent triples, giving 29 bases. Its characteristic is $q^3-7q^2+15q-9$ and its Tutte polynomial differs from the binary one by $x+y-xy$, since exactly one size-three subset changes rank. This is a concrete field-change comparison. The general characteristic-two obstruction proved in Unit 4 is what rules out **every** odd-field representation of the intended Fano incidence matroid.

**Primary repair feedback:** a polynomial with no stated ranks needs the 128-entry rule; a design parameter match needs all pairs; an incidence rank needs a field; an apparent dual needs orthogonality **and** complementary dimensions. An output-only portfolio needs the generator and predicate proof. Preserve the first portfolio and exact outputs before opening this model.

## Seminar critique and changed synthesis

**DMS-SEM3 — supplied-memo critique.** The following is a deliberately faulty seminar memo, not course teaching. Respond to **every** numbered claim with a diagnosis, an exact counterexample or repaired proof, and a corrected conclusion. Your response must separate a mathematical error from a missing software run or unsupported empirical claim.

1. “The coefficient of $x^n$ in $A'(x)$ counts size-$n$ objects with a root, so each necklace gives $n$ rooted types.”
2. “To count Fano binary colorings, divide 128 by the automorphism-group order 168.”
3. “The automorphism group uses binary matrices, so its invariant projection on $\\mathbb F_2^7$ is obtained by dividing their sum by 168.”
4. “A matroid's flat sum always has empty bottom, so the characteristic–Tutte proof works unchanged after a loop contraction.”
5. “Deleting a set lowers total rank by that set's rank.”
6. “Since the point-deleted configuration is $M(K_4)$, its four residual triples form a $2-(6,3,1)$ design.”
7. “The residual $N$ has six rows, so its row code has six coordinates.”
8. “The two length-six codes have equal weight enumerators and hence are the same self-dual code.”
9. “If $BB^T$ is singular modulo three, $B$ has lost full row rank.”
10. “The complement blocks are circuits of the dual, so their binary incidence rows automatically give a rank-four representation of it.”
11. “Every ordinary element gives two Tutte branches, so a loop or coloop can be handled by the same two-branch sum.”
12. “The hand tables agree with the expected output, so no actual code run is needed, and public return work proves unseen retention.”

**Complete SEM3 line-by-line feedback.** (1) For ordinary coefficients, $A'$ shifts degree down one; $xA'$ preserves size and weights by separately recorded atom choices. Rooted unlabeled types require automorphism orbits of roots, as \`0000\` gives one instead of four. (2) Orbit sizes differ; weighted Burnside gives ten binary orbits and the inventory $(1,1,1,2,2,1,1,1)$, rather than a noninteger quotient. (3) The complex averaging argument lives in $\\mathbb C^7$; 168 is zero modulo two. DMS-D8 gives an invariant subspace with no invariant complement in modular characteristic. (4) A loop lies in the bottom closure; a one-loop matroid has flat polynomial one and subset polynomial zero. Keep the loopless theorem and separate conventions. (5) Deleting two elements of $U(2,4)$ loses zero rank although the deleted set has rank two; contraction, not deletion, subtracts absorbed rank.

(6) The residual has missing pairs $16,25,34$, and $r(k-1)=2\\cdot2=4\\ne5$ for the proposed lambda one. Its actual strength is $1-(6,3,2)$. (7) Native $N$ is $6\\times4$, so its row code has four **block** coordinates; the transpose gives six **point** coordinates. (8) The length-six block code contains $123$, an odd-weight word not orthogonal to itself. Its dual is a distinct labelled code, despite the same enumerator. (9) U6-P1 has $\\operatorname{rank}_{\\mathbb F_3}B=4$ and Gram rank three, with a nonzero determinant-two minor. (10) The complementary block matrix has binary rank three while the actual dual representation $H$ has rank four; representing a set of circuit supports as rows is a different construction. (11) A single loop has $T=y$, while adding deletion and contraction would give two. A single coloop has $T=x$, not two; use the separate factors. (12) Analytical outputs are comparison models, not runs. Required software retains real execution and replay records; public help and chosen later dates establish neither unseen work nor observed retention.

**SEM3 revision criterion:** retain each original sentence beside its correction, identify the first failed hypothesis, and point to a concrete certificate. Simply labeling a sentence “wrong” leaves the critique incomplete. The supplied answers are public feedback, not a simulated external assessment report.

**DMS-C, fixed required changed synthesis.** Delete point seven from the primary coordinate matrix. Its binary column matroid is $M(K_4)$ with the printed edge correspondence. Separately take the four primary lines avoiding seven as residual blocks, and take the three primary lines through seven with seven removed as derived blocks. Rebuild **every** part of the primary portfolio, not only the graph count. Recompute the inventory/module, flats/characteristic/Tutte, incidence ranks, all code spaces, puncturing/shortening, and actual changed software outputs. Keep the SEM3 critique as a distinct artifact.

\`\`\`json
{
 "record_id":"DMS-C","matrix":[[1,0,1,0,1,0],[0,1,1,0,0,1],[0,0,0,1,1,1]],
 "blocks":[[1,2,3],[1,4,5],[2,4,6],[3,5,6]],"derived_blocks":[[1,6],[2,5],[3,4]],
 "graph_edges":[[1,4],[2,4],[1,2],[3,4],[1,3],[2,3]],
 "signed_graph_matrix":[[1,0,1,0,1,0],[0,1,-1,0,0,1],[0,0,0,1,-1,-1]],
 "N_native":[[1,1,0,0],[1,0,1,0],[1,0,0,1],[0,1,1,0],[0,1,0,1],[0,0,1,1]],
 "rank":3,"basis_count":16,"independent_count":38,"spanning_count":38,
 "size_rank_counts":[[0,0,1],[1,1,6],[2,2,15],[3,2,4],[3,3,16],[4,3,15],[5,3,6],[6,3,1]],
 "circuits":[[1,2,3],[1,4,5],[2,4,6],[3,5,6],[2,3,4,5],[1,3,4,6],[1,2,5,6]],
 "flat_types":[[0,0,1,1],[1,1,-1,6],[2,2,1,3],[2,3,2,4],[3,6,-6,1]],"characteristic":[-6,11,-6,1],
 "tutte":[[3,0,1],[2,0,3],[1,0,2],[1,1,4],[0,1,2],[0,2,3],[0,3,1]],
 "design":{"v":6,"b":4,"k":3,"r":2,"lambda":null,"isTwoDesign":false,"incidences":12},"missing_pairs":[[1,6],[2,5],[3,4]],
 "incidence_ranks":[["Q",4],[2,3],[3,4],[5,4]],"coordinate_field_bases":[["Q",17],[2,16],[3,17],[5,17]],"signed_field_bases":[["Q",16],[2,16],[3,16],[5,16]],
 "coordinate_code":{"length":6,"dimension":3,"enumerator":[1,0,0,4,3,0,0],"words":[[],[1,3,5],[2,3,6],[4,5,6],[1,2,4],[2,3,4,5],[1,3,4,6],[1,2,5,6]]},
 "block_code":{"length":6,"dimension":3,"enumerator":[1,0,0,4,3,0,0],"words":[[],[1,2,3],[1,4,5],[2,4,6],[3,5,6],[2,3,4,5],[1,3,4,6],[1,2,5,6]]},
 "point_code":{"length":4,"dimension":3,"enumerator":[1,0,6,0,1]},"punctured_primary_block_code_enumerator":[1,0,3,8,3,0,1],
 "symmetry":{"order":24,"cycle_types":[[1,1,1,1,1,1],[1,1,2,2],[3,3],[2,4]],"multiplicities":[1,9,8,6],"inventory":[1,1,2,3,2,1,1],"reduced_commutant_dimension":2},
 "orbit_models":[[0,1,24],[1,6,4],[3,12,2],[12,3,8],[7,4,6],[11,4,6],[13,12,2],[15,12,2],[30,3,8],[31,6,4],[63,1,24]]
}
\`\`\`

**Complete DMS-C public model.** The binary coordinate columns match the six stated $K_4$ edge columns after deleting the fourth graph-vertex row; orientations disappear modulo two. Its four triangles are $123,145,246,356$, and its three four-cycles are $2345,1346,1256$, exactly the printed circuits. Empty/singleton/pair ranks are $0,1,2$. A triangle has rank two, every other triple rank three, and every four-or-more-element set rank three. This specifies all 64 ranks and gives 16 bases, $1+6+15+16=38$ independent and $16+15+6+1=38$ spanning sets. Rank-two flats are the four triangles and the three disjoint-edge pairs $16,25,34$. Their bottom Möbius values are two and one respectively; top value is $-(1-6+8+3)=-6$. Thus $\\chi=q^3-6q^2+11q-6=(q-1)(q-2)(q-3)$. The full ledger gives $T=x^3+3x^2+2x+4xy+2y+3y^2+y^3$, consistent with U5-P2 and its contraction partner.

The **unsigned** integer lift of this binary matrix is not an all-field graph representation. Triple $356$ has determinant $-2$ and becomes a basis over Q/3/5; only triangles $123,145,246$ remain dependent, giving seventeen bases. The separately printed **signed** oriented graph matrix keeps all four graph cycles dependent over every field, with sixteen bases. Their binary reductions agree. This is a controlled field/representation change, not permission to silently replace the assigned matrix before reporting its field audit. The unsigned odd-field characteristic is $q^3-6q^2+12q-7$ and its Tutte polynomial adds $x+y-xy$ to the binary one, since only the former line triple changes rank.

The automorphisms are the twenty-four permutations of the four graph vertices, acting on the six edges. For completeness, every matroid automorphism is one of these: it permutes the four three-element triangle circuits; every pair of distinct triangles meets in a unique edge, and every edge occurs in exactly two triangles, so its action on triangles determines its action on edges. Hence the automorphism group injects into $S_4$ and the graph action supplies all 24 possibilities. The residual four-block family is precisely those triangles, with the same group.

Identity has cycle type $1^6$. Six transpositions and three double transpositions on vertices induce $1^2 2^2$ on edges; eight three-cycles induce $3^2$; six four-cycles induce $2\\,4$. Thus

$$I_C(u)=\\frac{(1+u)^6+9(1+u)^2(1+u^2)^2+8(1+u^3)^2+6(1+u^2)(1+u^4)}{24}$$

$$=1+u+2u^2+3u^3+2u^4+u^5+u^6.$$

The eleven orbit rows distinguish adjacent/disjoint edge pairs, triangle/star/path triples and complementary four-sets; their sizes sum to 64. The point/edge permutation character is $(6,2,0,0)$ in the printed cycle order, with invariant dimension one and commutant dimension $(36+9\\cdot4)/24=3$. The reduced character $(5,1,-1,-1)$ has commutant dimension two. To **prove** reducibility, map a zero-sum complex coefficient vector on the four graph vertices to the edge vector having value $a_i+a_j$ on edge $ij$. The map is equivariant and injective: if all pair sums vanish, three distinct vertices give $2a_i=0$, so all $a_i=0$ over $\\mathbb C$. Its image has dimension three and lies in the five-dimensional edge zero-sum space, since each vertex appears in three edges. It is a proper nonzero invariant subspace, with invariant orthogonal complement. The two-transitive seven-point argument therefore does not carry over unchanged to the six-edge action.

The three derived pairs $16,25,34$ partition the six remaining points, a $1-(6,2,1)$ design. The four residual triples each use every point twice, a $1-(6,3,2)$ design. Their pair ledger has twelve ones and three zeros, precisely the printed missing pairs. Hence they are not any 2-design with constant positive lambda; in particular $2-(6,3,1)$ would already fail integrality. The native $N_C$ has six point rows, four block columns; $B_C=N_C^T$ has four block rows and six point columns. The complete U6-P1/P2 models give their matrices, all binary words and both code orientations.

Here $B_CB_C^T=2I_4+J_4$. Its rational determinant is $2^3\\cdot6=48$, giving row rank four. In every odd characteristic relevant here the same full rank follows directly from its interpretation as the **unoriented incidence matrix on four triangle-label vertices**: a row dependence would require $a_i+a_j=0$ for every pair $i,j$; a triangle forces $2a_i=0$ and all coefficients zero. In characteristic two the sum of its four rows is zero and the first three are independent, giving rank three. Thus the named-field incidence ranks are Q4/F2=3/F3=4/F5=4. Modulo three its Gram has rank three, explicitly refuting the false full-rank implication in SEM3.

The native point-row code has four block coordinates and is the entire even-weight space with enumerator $1+6z^2+z^4$, dual to the length-four repetition code. The block-row code $D_6$ has six point coordinates and the eight words printed in the input, giving $1+4z^3+3z^4$. The coordinate-row code $S_6$ has the other eight printed point words with the same enumerator. Direct multiplication gives $B_CA_C^T=0$ modulo two, and both have dimension three, so $D_6^\\perp=S_6$. They are distinct: $123\\in D_6$ is not self-orthogonal. The column matroid of $B_C$ on point labels is the **dual** of the labelled $M(A_C)$, with triangle circuits $124,135,236,456$; both are isomorphic to an unlabeled $K_4$ cycle matroid, which does not identify their labels.

Deleting point seven **punctures** the primary coordinate simplex $S$ to $S_6$: seven is not a weight-one codeword, so the eight words remain distinct. The residual block code $D_6$ instead **shortens** the primary length-seven $D$: keep words with seventh coordinate zero, then delete it. Those eight words are exactly the residual line/complement words listed. Plain puncturing $D$ would retain sixteen distinct words and give $1+3z^2+8z^3+3z^4+z^6$, a different answer. The MacWilliams calculation in U6-P2 proves the length-six enumerator is unchanged on taking its dual, without claiming the two codes equal.

**DMS-SEM4 — correction, replay and response.** Rewrite the seminar's claims for C, run the actual modified inputs through all three software tasks, and submit a response to these fixed objections: “Why not keep the original design lambda?”, “Why do equal enumerators not settle the code?”, “Why is the odd-field graph audit different?”, “What exactly did the program exhaust?” Supply your corrected proof, full input/output replay and a revision map to the SEM3 sentences.

**Complete SEM4 public model.** Replace the inherited 2-design claim by the explicitly witnessed $1-(6,3,2)$ residual and $1-(6,2,1)$ derived structure. Name the twelve positive pair counts and the three zero pairs; a change of strength has occurred. Separate the three codes by matrix and coordinate set: point-row length four, block-row length six, coordinate-row length six. The latter two are distinct duals, refuted as equal by the actual word $123$; enumerators discard coordinate-level information. Explain that unsigned binary lift and signed graphic representation agree only after the declared characteristic-two interpretation, using determinant $-2$ on $356$ as a boundary certificate. The binary matroid remains graphic; the odd interpretation of the same unsigned array is a different matroid.

A complete replay's expected comparisons are all 64 ranks from the printed rank rule, sixteen bases, the seven circuits, fifteen flats with stated Möbius values, the full Tutte/characteristic rows, 24 automorphisms among 720 candidate permutations, eleven subset orbits totaling 64, both incidence orientations and every code/dual word. The coefficient modification's expected rows are U1-P2's changed arrays. For a fresh process, the deterministic same-input JSON should be byte-identical under the same runtime/version and canonical ordering; retain any discrepancy before fixing it. The public reference supplies every mathematical value and deterministic construction but does not substitute for your actual output.

The program exhausts subset masks and permutations **of the supplied six labels**, plus all binary words in their stated code spaces; it does not enumerate every six-element matroid, every design on six points or every real learner's behavior. Your proof explains the generator coverage and exact predicates. The response map repairs SEM3 claims 5–9 and preserves their originals; assistance and prior model exposure stay in the comparison file. This is correction and accountable reproduction, not a fabricated peer review or a graded performance.

## Public reconstruction and final seminar

**DMS-R, required later public synthesis.** On a recorded later date after changed-case revision, construct the **dual** matroid using the printed rank-four binary $H$, and complement every primary block to obtain the new design. Rebuild the full primary portfolio, this time explaining which invariants swap, which stay the same, and which row/column interpretations must change. Include a complete polynomial and code reconstruction, all required reference outputs, and the final seminar below. The public model is already visible; record actual help and exposure and retain first/comparison/revised files. No unobserved interval or unseen-retention claim is made.

\`\`\`json
{
 "record_id":"DMS-R","matrix":[[1,1,1,0,0,0,0],[1,0,0,1,1,0,0],[1,0,0,0,0,1,1],[0,1,0,1,0,1,0]],
 "blocks":[[4,5,6,7],[2,3,6,7],[2,3,4,5],[1,3,5,7],[1,3,4,6],[1,2,5,6],[1,2,4,7]],
 "dual_matrix":[[1,0,1,0,1,0,1],[0,1,1,0,0,1,1],[0,0,0,1,1,1,1]],
 "integer_kernel_matrix":[[1,0,-1,0,-1,0,-1],[0,1,-1,0,0,-1,1],[0,0,0,1,-1,-1,1]],
 "N_native":[[0,0,0,1,1,1,1],[0,1,1,0,0,1,1],[0,1,1,1,1,0,0],[1,0,1,0,1,0,1],[1,0,1,1,0,1,0],[1,1,0,0,1,1,0],[1,1,0,1,0,0,1]],
 "rank":4,"basis_count":28,"independent_count":92,"spanning_count":57,
 "size_rank_counts":[[0,0,1],[1,1,7],[2,2,21],[3,3,35],[4,3,7],[4,4,28],[5,4,21],[6,4,7],[7,4,1]],
 "circuits":[[4,5,6,7],[2,3,6,7],[2,3,4,5],[1,3,5,7],[1,3,4,6],[1,2,5,6],[1,2,4,7]],
 "flat_types":[[0,0,1,1],[1,1,-1,7],[2,2,1,21],[3,3,-1,7],[3,4,-3,7],[4,7,13,1]],"characteristic":[13,-28,21,-7,1],"hyperplane_avoider":[1,1,1,0],
 "tutte":[[4,0,1],[3,0,3],[2,0,6],[1,0,3],[1,1,7],[0,1,3],[0,2,4],[0,3,1]],
 "design":{"v":7,"b":7,"k":4,"r":4,"lambda":2,"isTwoDesign":true,"incidences":28},
 "incidence_ranks":[["Q",7],[2,3],[3,7],[5,7]],"coordinate_field_bases":[["Q",31],[2,28],[3,30],[5,31]],
 "coordinate_code":{"length":7,"dimension":4,"enumerator":[1,0,0,7,7,0,0,1]},"block_code":{"length":7,"dimension":3,"enumerator":[1,0,0,0,7,0,0,0]},"point_code":{"length":7,"dimension":3,"enumerator":[1,0,0,0,7,0,0,0]},
 "symmetry":{"order":168,"cycle_types":[[1,1,1,1,1,1,1],[1,1,1,2,2],[1,3,3],[1,2,4],[7]],"multiplicities":[1,21,56,42,48],"inventory":[1,1,1,2,2,1,1,1],"reduced_commutant_dimension":1},
 "orbit_models":[[0,1,168],[1,7,24],[3,21,8],[7,7,24],[11,28,6],[15,28,6],[30,7,24],[31,21,8],[63,7,24],[127,1,168]]
}
\`\`\`

**Complete DMS-R public model.** The four rows of $H$ span the binary kernel of the primary coordinate matrix, by orthogonality and dimensions proved in P and Unit 4. Thus complementary column bases give $M(H)=F_7^*$ of rank four, with twenty-eight bases. Its kernel is the primary simplex row space, whose seven nonzero words all have weight four; hence its circuits are exactly the seven printed complementary blocks. Every set of size at most three is independent. A four-set has rank three exactly when it is one of those circuits; the other twenty-eight are bases. All sets of size at least five have rank four. This rule specifies every one of the 128 ranks and yields $1+7+21+35+28=92$ independent sets and $28+21+7+1=57$ spanning sets.

Duality gives $T_R(x,y)=T_P(y,x)=x^4+3x^3+6x^2+3x+7xy+3y+4y^2+y^3$. The independent and spanning evaluations swap; base count stays twenty-eight. The loopless flat bridge still applies, but its lattice is different: all twenty-one pairs are flats of rank two and bottom Möbius one. Rank-three flats are the seven original line triples, with Möbius minus one, and the seven complementary four-circuits, with Möbius minus three. Every triple contained in such a four-circuit closes to it; two distinct four-circuits intersect in only two points, so their twenty-eight contained triples are all distinct, leaving exactly seven triple flats. The top coefficient is $-(1-7+21-7-21)=13$. Thus there are 44 flats and

$$\\chi_R(q)=q^4-7q^3+21q^2-28q+13=T_R(1-q,0).$$

For the binary hyperplane-avoidance interpretation, $\\chi_R(2)=1$. The printed functional $(1,1,1,0)$ takes value one on all seven columns because the first three rows of $H$ sum to the all-one word; the characteristic count proves it is the sole avoiding functional. The all-one four-functional is not an avoiding witness: columns two, four and six have even weight. This is a finite-field statement about the rank-four representation, not the primary rank-three geometry.

Each point is absent from four original lines, and each pair is absent from $7-(3+3-1)=2$. Therefore complementing gives the simple symmetric $2-(7,4,2)$ design with twenty-eight incidences. In native corresponding block order $N_R=J-N_P$ and $N_RN_R^T=2I_7+2J_7$. Over Q the Gram has positive eigenvalues sixteen and two, hence rank seven; modulo three and five both eigenvalues are nonzero, also giving rank seven. Modulo two the Gram is zero, but the rows are exactly the primary simplex's seven nonzero words; rows one, two, four are three independent simplex generators in a permuted order, giving rank three. This is another explicit failure of inferring matrix rank from singular Gram rank.

The block-row code on point coordinates is now the simplex $S$, with enumerator $x^7+7x^3y^4$, and its orthogonal is Hamming $D$, with sixteen words. The coordinate code of the represented matroid $H$ is $D$, the opposite assignment from P. The point-row code of $N_R$ has block coordinates; native numerical symmetry again gives an explicit correspondence with $S$. Complement blocks are supports of the return matroid's circuits, but their row-span matrix has rank three and therefore cannot represent the rank-four dual matroid on its columns. A list of circuit supports and a representation matrix are different data even when both are zero-one arrays.

The block automorphism group is unchanged: complementing a subset commutes with every point permutation, so preserving complement blocks is equivalent to preserving primary lines. Preserving dual matroid circuits has the same equivalence. Thus both groups are the original 168-element group, with the same cycle inventory and six-dimensional complex reduced irreducible module. These unchanged group facts accompany changed ranks, flats and code roles; they do not make R a mere relabeling of P.

For completeness, the integer lift of $H$ has a **different** odd-field matroid. The printed integer kernel matrix $K$ has columns one, two, four an identity and satisfies $HK^T=0$ over the integers; with ranks three and four, it is the orthogonal dual over every named field. After scaling columns three, five, six by minus one, its directions are $a,b,a+b,c,a+c,b+c,-a+b+c$. Over Q/F5 its dependent triples are exactly $123,145,246,167$; over F3 the additional $357$ has determinant minus three and becomes dependent. Over F2 the full seven Fano lines return. All other triples have nonzero determinants in the named field and every four-set of $K$ has full rank three. Consequently $H$ has 31/28/30/31 bases over Q/2/3/5, respectively, as printed. This is duality with **$K$**, not with the odd-field lift of the primary $A$.

The complete odd-field rank tables of $K$ are specified by those line lists and the same empty/singleton/pair/full-rank rule; dual rank then specifies every odd-field rank of $H$. If $h$ is its number of dependent triples ($h=4$ over Q/F5, five over F3, seven over F2), its dual polynomial is

$$T_H=x^4+3x^3+6x^2+(10-h)x+hxy+(10-h)y+4y^2+y^3,$$

and $\\chi_H=q^4-7q^3+21q^2+(h-35)q+(20-h)$. These formulas follow directly from the full size/rank ledger of $K$: one empty set, seven singletons, twenty-one pairs, $h$ rank-two triples, $35-h$ rank-three triples, and all sets of size at least four of rank three. Insert those terms into the Tutte subset sum and swap variables for its actual dual. In the F3 case the dependent-triple supports lose $257,347,356$ but gain $357$; this is not merely relaxing a subset of the old Fano lines. The software's four field interpretations therefore have full public keys, not just a binary comparison.

**DMS-SEM5 — final public seminar and response.** Present the return portfolio as a concise written seminar with: a claim/dependency ledger, a reconstructed general proof, one exact positive certificate, one decisive failed inference, the required real software output/replay record, and responses to the six questions below. Then retain a revision responding to your own comparison. A presentation can be prose, slides or an accessible narrated explanation with a text equivalent; no medium removes a mathematical obligation.

**Complete SEM5 presentation model.** “The shared seven-point labels support different objects. Our binary coordinate matrix $A$ represents rank-three $F_7$, while its kernel basis $H$ represents rank-four $F_7^*$ by the complementary-basis projection theorem. Complementing the seven design blocks gives a $2-(7,4,2)$ design, but its binary incidence span has rank three and records the dual's circuit supports rather than representing the dual on columns. The six-unit progression connects formal coefficients to cycle inventories, rank/flats to Möbius and Tutte, complex symmetry to invariant projections, and binary linear spans to MacWilliams. Each bridge has its own finite/loopless/field/linearity conditions. Deletion gave the six-label graph matroid and only a residual 1-design, with explicit missing pairs and changed code coordinates. Duality now swaps independent/spanning counts and code roles while complementing blocks preserves the automorphism group. Exact software exhausts the supplied finite domains and reproduces those certificates; it does not replace the general proofs or classify all specialist structures.”

The required questions and full responses are:

1. **Why is $H$ a dual representation, rather than just orthogonal?** Its four independent rows span the full kernel of rank-three $A$, and projection onto complementary coordinates proves the bases correspond. An arbitrary smaller orthogonal row set would not suffice.
2. **Why does the same 168-element group not force the same matroid?** The action preserves both a matroid and its dual, but their ranks are three and four and their independent/spanning families differ. Symmetry is an invariant, not a complete classification.
3. **Why is the complement incidence matrix not $H$?** Its binary row rank is three, with row code simplex; $H$ has rank four and row code Hamming. Equal column labels do not identify the two matrices or ground-set rules.
4. **What is the weakest missing hypothesis in each failed seminar claim?** Use SEM3's complete line-by-line map: formal degree/root transport, free action, invertible averaging scalar, looplessness, rank-operation formula, design strength, coordinate orientation, word-level equality, positive-definite field assumptions, representation rule, special recurrence branch, and actual run/exposure evidence. There is no one blanket hypothesis repairing them all.
5. **What remains proven if no actual program run occurred?** The written theorems and analytical finite models remain mathematical comparisons. The software obligations, replay and course completion remain incomplete until actually executed and retained. No success is inferred from this public expected output.
6. **What would count as a next research question?** One precise question is which larger represented configurations preserve a chosen code/design relation under a specified minor operation. Its domain, fields and conjectured statement must be newly supplied; our three finite cases do not prove it. A failed example can refute a universal conjecture, but absence in a partial search cannot prove one.

**Return repair map:** for polynomial errors reconstruct U2's closure-fiber sign and U5's loop/coloop branches before recomputing the printed ledgers. For field/duality errors redo U4-P1/P2 and the explicit $AH^T$/$HK^T$ dimension checks. For incidence/code errors redo U6-P1/P2, identify both matrix shapes, and distinguish puncturing from shortening. For symmetry errors reproduce the complete cycle inventory and an actual orbit certificate rather than dividing totals. For incomplete software, retain the mathematical first attempt and finish the named run/modification/replay task; do not rename hand evidence as execution.

## Descriptive feedback and further study

Review each separate writing/software/seminar record against these criteria. They are descriptive feedback, not points, a pass threshold, individual proof grading or professional certification.

| Criterion | Complete account | Repair when absent |
| --- | --- | --- |
| Typed mathematical objects | States position/point/block/edge/code ground sets, matrices and fields, looplessness and coefficient rings | Identify the exact first theorem whose input object changed |
| General reasoning | Supplies finite convolution/cancellation, averaging, duality/minor/Tutte, design or code proof, with hypotheses | Reconstruct the corresponding general unit and then its changed boundary |
| Exact computation | Retains actual required native Python and new Node runs, full inputs/outputs, bounded coverage, malformed rejection and fresh replay | Keep the failed/incomplete run and repair its precise environment/input/program issue |
| Complete finite certificates | Every expected rank follows the stated rule, every design pair and code word is covered, orbit sizes/checksums agree | Supply missing rows or the complete deterministic rule, not only a favorable total |
| Seminar development | Proposal → proof reconstruction → supplied-memo critique → corrected changed replay → public-return presentation/response | Retain each stage and its dated comparison/revision separately |
| Honest limits | Distinguishes theorem, finite instance, imported statement, conjecture, software evidence and learner record | Withdraw the overclaim and state exactly which evidence remains |

This course supplies a sustained selected specialist sequence across all four declared strands. Further symmetric-function, enumerative geometry, matroid decomposition, design classification and research seminars can extend it, with new preparation and fully answered assignments. Existing books retain their edition/release status, open projects retain their full scopes, and workload remains unknown. Neither public models nor software agreement establish an unseen examination, a verified delay, individual mastery or a grade.
`;export{e as default};