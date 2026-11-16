# Relations and covers filling the lifted faces

A graph cover may stop being a cover when the base graph is filled by a disk. The disk makes its attaching loop null-homotopic, so the lifted loop must close from every point of the fiber. Closing from one marked sheet is a subgroup-membership statement; it does not establish the compatibility needed for the whole cover.

This workshop connects the accepted cellular and finite-cover workshops. Its new operation is to decide whether a specified graph cover extends across attached disks, then compute the boundaries of the distinct lifted cells. The optional homology tasks use exact integral cycle bases. No classification of arbitrary groups or lattices is needed.

## What already exists and what changes here

| Existing local entry | Existing work | New use here |
| --- | --- | --- |
| [Cellular attachment and quotient witnesses](../cellular-words.html#cellular-forget) | Attaching words impose their normal closure; permutations are tested against the relation. | Turn compatibility into an extension of an existing graph cover. |
| [Covering graphs Task 2](../covering-graphs.html#covers-task-2) | A root stabilizer differs from the whole-action kernel. Testing every sheet is already enacted there. | Require that kernel to contain the attaching words' normal closure. |
| [The unfilled graph construction](../covering-graphs.html#covers-build) | Separate labelled positive edges, inverse traversal and the covering-star proof; no two-cells are filled. | Attach one lifted disk per sheet, when permitted. |
| [Its rooted-tree calculation](../covering-graphs.html#covers-basis) | A graph cycle and a free subgroup basis are computed from a spanning tree. | Use an integral cycle basis before taking the new boundary quotient. |
| [Van Kampen as a pushout](../../atlas/content/books/algebraic-topology-chains-spaces/van-kampen-as-a-pushout.md) | Already derives the torus relation and normal closure. | Explain why relators and all their conjugates must act trivially. |
| [Coverings and Monodromy](../../atlas/content/books/algebraic-topology-chains-spaces/coverings-and-monodromy.md), Exercise 4.4 | Given a cover, each base cell has degree-many lifted cells. | Decide whether the supplied graph cover can become such a cover in the first place. |
| [Computational group theory](../../atlas/content/books/finite-algebra-computation/computational-group-theory.md) | Coset-table calculations already process relators. | Interpret compatibility and failure as geometric disk-extension questions. |
| [Topology Chapter 12](../../textbooks/topology/_output/chapters/12-covering-spaces.html#why-paths-and-homotopies-lift) | Proves lifting and states covering classification. | Supply the topological implication from a factored action to an extended cover. |

The gap is the passage from an action of the free group to an action of the presented group, followed by the lifted-cell calculation. Neither permutation relator testing nor the stabilizer/kernel distinction is being introduced as new local content.

The core route is the extension criterion, the two three-sheet examples, one lifted boundary and Tasks 1–4. A 60–75 minute core is an estimate to evaluate, not an observed completion time. Tasks 5–6 are an optional exact homology extension for learners who can already compute kernels and integral quotients.

## Preparation gates and repairs

1. **Root or whole fiber?** For Pₐ=(12), Pᵦ=(23), the word b closes from sheet 1 but exchanges sheets 2 and 3. Explain why this puts b in the root stabilizer but outside the whole-action kernel. Repair with [the accepted covering task](../covering-graphs.html#covers-task-2).
2. **Quotient factorization.** Let q:F→F/N be a quotient. An action of F determines an action of F/N exactly when every element of N acts identically. Explain why two representatives of a coset must produce the same result. Repair with [quotient factorization](../../atlas/content/books/algebra-patterns-structure/group-homomorphisms-isomorphism-theorems.md).
3. **Normal closure.** If r acts identically on every sheet, why does uru⁻¹ act identically for every u? Conjugating the identity action gives the identity. Products and inverses preserve that property, so the normal closure of r also acts trivially. Review [disk attachment](../cellular-words.html#cellular-forget) if imposing only the single word and imposing its normal closure seem interchangeable.
4. **Edges upstairs have endpoints.** If a₁:1→2, its cellular boundary is v₂−v₁, not zero. A graph cover of a one-vertex graph can have several vertices. Repair with [the signed integer edge example](../../atlas/content/books/algebraic-topology-chains-spaces/chain-complexes-and-homology.md), then use [topology Unit 7](../../atlas/content/courses/topology-manifolds-standard.md) for cycle/boundary practice.
5. **Optional integral quotient.** In Zx⊕Zy, let u=x−2y and d=y. Then x=u+2d, so u,d is an integral basis and the quotient by Zu is Z[d], with no order-two class. Contrast the quotient by 2Zu, which has a Z/2 summand. Repair with [the earlier cellular workshop](../cellular-words.html#cellular-investigate).

The first three gates concern the core theorem; Gate 4 is needed for the lifted chain calculation. Gate 5 is needed for the optional homology extension. A successful numerical rank calculation is not a substitute for the integral-basis argument.

## Objects conventions and theorem dependencies

Let W=S¹∨S¹ have one vertex v and two oriented loop edges a,b. Uppercase A,B mean a⁻¹,b⁻¹. Let F=π₁(W,v)=F(a,b). For a finite list of attaching words R, write

Y_R=W∪_{r∈R}D²_r,    N=⟨⟨R⟩⟩,    π₁(Y_R,v)=F/N.

The two base spaces used by the workbench are T, attached along r_T=abAB, and X, attached along r_X=aabAAB. They are the same declared CW complexes as in the cellular workshop. T is the torus. X is a presentation complex and is not being identified with a surface.

Given permutations Pₐ,Pᵦ of a finite fiber S, the graph cover C has a distinct positive edge a_s:s→Pₐ(s) and b_s:s→Pᵦ(s) for each sheet s. Positive edges with opposite endpoints remain distinct. Each open edge maps homeomorphically onto the corresponding open base edge, and all its endpoints map to v.

Words traverse left to right:

s·(uv)=(s·u)·v,    L_w(s)=s·w,    L_uv=L_v∘L_u.

Thus forward endpoint transport L is a right action, not an ordinary-composition homomorphism F→Sym(S). If an ordinary permutation homomorphism is desired, use ρ(w)=L_w⁻¹. Its kernel is the same set of words fixing every sheet. In particular, the identity-relator test is unchanged. Permutations are called Pₐ,Pᵦ to avoid confusing them with inverse letters.

The following general topological results are imported, rather than claimed as consequences of finite arithmetic:

- Attaching two-cells quotients π₁ by the normal closure: [Hatcher Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf), Proposition 1.26, p. 50.
- Path/homotopy lifting and the closed-lift subgroup criterion: Propositions 1.30–1.31, pp. 60–61.
- Covering classification and construction from fiber actions: Theorem 1.38, p. 67, and pp. 69–70. Hatcher's inverse-transport convention on p. 69 must be distinguished from the forward convention above.
- The required local hypotheses hold here: the base is a connected finite CW complex. Local contractibility is supplied by [Hatcher's Appendix, Proposition A.4](https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf).
- Cellular chains compute homology, and boundary entries are attaching-map degrees: [Hatcher Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf), Theorem 2.35 and Cellular Boundary Formula, pp. 139–140.

The finite words, edge traces, basis changes and quotient calculations below are proved explicitly. A finite check of their values does not prove these general theorems.

## Why every sheet is required

Let K={w∈F:s·w=s for every s∈S}, the full-action kernel. It is normal: it is the kernel of the ordinary homomorphism ρ(w)=L_w⁻¹.

The right action descends through F/N exactly when N⊆K. This is equivalent to every relator r∈R lying in K, because K is normal. Therefore

the graph cover extends over Y_R ⇔ every r∈R fixes every sheet.

Here “extends” means that a cover E→Y_R restricts over W to the supplied graph cover, up to an isomorphism over W.

**Necessity.** A characteristic disk in Y_R contracts its boundary loop r. If E→Y_R is a covering, lift this based null-homotopy starting at any chosen sheet. Its initial lifted boundary and final constant lift must share their endpoint. Hence the lift of r closes from that sheet. The starting sheet was arbitrary.

**Sufficiency.** If every relator acts identically, the action factors through G=F/N=π₁(Y_R). The covering-action construction produces a cover of Y_R with that fiber action; its restriction over W has the original F-action and is therefore isomorphic to C over W. The finite CW base meets the stated hypotheses. This invokes covering classification; testing a permutation table alone does not prove the needed local topology.

For each base two-cell, the extended cover has one lifted open two-cell for each sheet. Attach a distinct characteristic disk along the relator lift beginning at that sheet. Its open interior maps homeomorphically onto the base open cell. Repeated arcs of its boundary may map onto the same edge; the closed characteristic disk is not asserted to embed. Distinct lifted cells remain distinct even when their boundary chains are equal or opposite.

A connected graph cover stays connected after these attachments. A commuting sheet permutation extends to a deck map of the filled cover by carrying the lifted disk indexed by s to the disk indexed by its image, with the base-cell coordinate preserved. Conversely any deck map restricts to the graph cover. This does not provide a repair when a relator fails the extension test.

## Worked three-sheet cases

Use the nonregular graph cover Pₐ=(12), Pᵦ=(23), and the cyclic graph cover Pₐ=(123), Pᵦ=id. Both are connected.

| Graph cover and attaching word | Endpoints from sheets 1,2,3 | Extension |
| --- | --- | --- |
| Nonregular, r_T=abAB | 2,3,1 | No torus cover with this restricted graph cover. |
| Nonregular, r_X=aabAAB | 1,2,3 | Yes, with three lifted two-cells. |
| Cyclic, r_T=abAB | 1,2,3 | Yes, with three lifted two-cells. |
| Cyclic, r_X=aabAAB | 1,2,3 | Yes, with three lifted two-cells. |

For the nonregular case Pₐ²=id, so a² commutes with b on every sheet. But a and b do not commute; the forward commutator transports by (123). For the cyclic case b acts identically, so both commutators act identically.

In a failed case a closed lift from some other starting point would not license attaching just that disk and calling the result a cover. One base disk needs compatible lifts throughout its fiber. In the declared three-sheet torus failure, no sheet returns after the single relator traversal.

### The changed four-sheet false positive

Set Pₐ=(12), Pᵦ=(234), with 3 and 4 fixed by Pₐ and 1 fixed by Pᵦ. The graph is connected: from 1, a reaches 2, ab reaches 3 and abb reaches 4.

For r=abAB, endpoints from 1,2,3,4 are 2,4,3,1. Its forward transport is (124), fixing sheet 3. In particular its root-3 trace is 3,3,4,4,3: the lift closes there.

But the conjugate brB has trace 3,4,4,2,1,1,1 and ends at 1. Thus r is in the sheet-3 stabilizer while one of its conjugates is not. The stabilizer does not contain the normal closure required for a torus cover. Equivalently, r does not fix every sheet.

The X relation still acts identically because Pₐ²=id. The same graph therefore extends over X with four lifted faces. Its later chain calculation is a changed problem beyond the two three-sheet controls.

## Repetition changes the problem

In that four-sheet example r³ acts identically on all sheets because L_r has order three. This permits an extension over W with a disk attached along r³. It does not supply an extension over T, whose attaching word is r. The compatibility condition is imposed by the declared base space.

A return after k repetitions means a lift of rᵏ closes. It does not make the lift of r close. Moreover, a return time chosen for one sheet need not work on all other sheets.

One cannot wrap a single disk three times over the base disk to disguise this failure as an unbranched cover. The map z↦z³ on the disk has one preimage of 0 and three preimages of every sufficiently small nonzero point; it is not locally injective at 0 and not a covering there. More generally, an open two-cell is simply connected, so a covering restricts over it to disjoint homeomorphic copies. Each lifted open face has degree one. This is different from changing the attaching word to r³ and then supplying the required distinct lifted disks.

## A lifted face can have a new nonzero boundary

Return to the three-sheet nonregular cover of X. Choose positive edge order

(a₁,b₁,a₂,b₂,a₃,b₃),

and face order (σ₁,σ₂,σ₃), where σ_s follows r_X from sheet s. All face orientations project to the chosen orientation of the base face.

The boundary of an edge is its terminal vertex minus its initial vertex. Thus

d₁a₁=v₂−v₁,    d₁a₂=v₁−v₂,    d₁a₃=d₁b₁=0,

d₁b₂=v₃−v₂,    d₁b₃=v₂−v₃.

In particular d₁ is not zero upstairs, although it was zero for the one-vertex base complex.

Trace the six letters of aabAAB from each sheet. Signed counts of the exact lifted edges give

d₂σ₁=a₁+a₂+b₁−a₂−a₁−b₁=0,

d₂σ₂=a₂+a₁+b₂−a₃−a₃−b₂=a₁+a₂−2a₃,

d₂σ₃=a₃+a₃+b₃−a₁−a₂−b₃=−a₁−a₂+2a₃.

Let v=a₁+a₂−2a₃. The three columns of D₂ are 0,v,−v. The boundary formula applies by collapsing all vertices and every other edge when computing a chosen edge's degree. Distinct edges upstairs, rather than only their common labels downstairs, must be counted.

This agrees with d₁d₂=0 because d₁(a₁+a₂)=0 and a₃ is a loop. Projection of each a_i to a sends v to a+a−2a=0, which agrees with the base face's zero boundary. It does not make v the zero chain upstairs.

### Optional complete three-sheet homology proof

The equation d₁z=0 forces equal coefficients on a₁,a₂ and equal coefficients on b₂,b₃. Therefore the graph cycle group has the exact integral basis

c₁=b₁,    c₂=a₁+a₂,    c₃=a₃,    c₄=b₂+b₃.

In these coordinates d₂ has columns 0,c₂−2c₃,−c₂+2c₃. Let u=c₂−2c₃ and d=c₃. Then (c₁,u,d,c₄) is an integral basis: its inverse is c₂=u+2d, c₃=d. Hence the boundary subgroup is precisely Zu and

H₁(E;Z)=Z[c₁]⊕Z[d]⊕Z[c₄].

There is no Z/2 summand. The coefficient 2 in one old-coordinate formula does not determine torsion; the boundary vector is primitive.

For a two-chain x₁σ₁+x₂σ₂+x₃σ₃, its boundary is (x₂−x₃)u. It vanishes exactly when x₂=x₃. There are no three-cells, so

H₂(E;Z)=Z[σ₁]⊕Z[σ₂+σ₃].

The cover is connected, so H₀=Z; all higher homology vanishes. The cell count 3−6+3=0 agrees with 1−3+2=0. The same integral change of basis remains invertible over every field, giving dimensions H₀,H₁,H₂ equal to 1,3,2.

## Six independent tasks

Attempt Tasks 1–4 before using the hints. Tasks 5–6 are optional integral homology work; Task 6 changes to four sheets beyond the workbench.

1. **Decide extension for the declared cases.** Reconstruct the endpoint table for both three-sheet graph covers and both attaching words. In each successful case, state how many lifted faces a cover requires and why a permutation calculation needs a topological theorem before it proves extension.
2. **A closed relator at the wrong level of generality.** For Pₐ=(12),Pᵦ=(234), lift r=abAB from sheet 3 and compute its endpoint map on every sheet. Use a conjugate of r to explain the normal-closure failure. Does the same graph extend across r_X=aabAAB?
3. **Audit a proposed repeated-disk repair.** In Task 2, someone follows r three times until the lift returns, then maps one disk to the base disk by z↦z³. Explain separately what r³ permits, what it fails to prove about the original torus, and where the proposed disk map fails the covering condition.
4. **Count the exact lifted edges.** In the three-sheet X-cover, compute d₂σ₂ and d₂σ₃. Verify they are cycles using d₁. Project their edge chains to the base and explain how both the base zero column and the nonzero upstairs columns can be correct.
5. **Determine whether the 2 creates torsion.** For the three-sheet X-cover, prove the stated c_i form an integral cycle basis, calculate H₁,H₂ over Z, and exhibit an actual integral basis change. Give generators, not only ranks. Explain what changes over F₂.
6. **A genuine order-two class in the changed cover.** For the four-sheet X-cover of Task 2, use the cycle candidates c₁=b₁,c₂=a₁+a₂,c₃=a₃,c₄=a₄,c₅=b₂+b₃+b₄. Prove they are an integral basis of ker d₁. Derive all four lifted face columns, compute H₁,H₂ over Z using an explicit unimodular cycle-basis change, and exhibit a class of exact order two. Optionally compare F₂ with fields of odd characteristic.

## Hints

1. The nonregular case has Pₐ²=id; the cyclic case has Pᵦ=id. For the torus, a and b themselves must commute as endpoint transports.
2. The whole endpoint map of r is (124). Use brB and keep forward traversal order: b first, then r, then B.
3. Check the fiber over the center of the proposed disk map and over a nearby nonzero point. Also name which attaching word defines the base.
4. A from sheet 3 reverses a₃ in the three-sheet cover. A from sheet 2 reverses a₁. A label alone does not identify an upstairs edge.
5. Replace c₂ by u=c₂−2c₃ while retaining c₃. Write the inverse change of coordinates to justify that it is allowed over Z.
6. In the four-sheet graph, cycles have equal a₁,a₂ coefficients and equal b₂,b₃,b₄ coefficients. Try u=c₂−2c₃, t=c₃−c₄ and d=c₄. Show that this is an integral basis before taking a quotient.

## Complete answers

### Answer 1

The nonregular commutator abAB sends 1→2,2→3,3→1, so it fails the all-sheet criterion and cannot extend over T. The X word passes because a² has identity endpoint transport and hence commutes with b. The cyclic case passes both words because b acts identically. The endpoint lists are therefore (2,3,1), (1,2,3), (1,2,3), (1,2,3) in the order of the worked table.

Each successful degree-three cover has three distinct lifted open faces for its single base face. Their interiors map homeomorphically to that face. Covering classification supplies the sufficient topological implication from the factored action; the necessity is supplied by homotopy lifting. Having only one closed lift would not establish either the factored action or a degree-three cover over the disk.

### Answer 2

The root-3 trace of r is 3,3,4,4,3, so it closes there. Its complete endpoint list is (2,4,3,1), giving (124). It fails at sheets 1,2,4, so the graph cover does not extend over T.

For the conjugate brB, from sheet 3 the trace is 3,4,4,2,1,1,1. It ends at 1 and does not close. Thus r lies in the sheet-3 stabilizer but the normal closure of r does not lie in it. In the whole-fiber formulation, r is not in the action kernel.

The X word passes at all four sheets because a² acts identically. It therefore admits an extension with four lifted open faces. The graph remains connected.

### Answer 3

The endpoint permutation (124) has order three, so r³ acts identically at all sheets. This supplies an action of the group presented with relation r³ and an extension over the complex attached along r³. The torus is attached along r; its required relation still fails on three sheets. Repetition changes the base problem.

For the map z↦z³, the center has one preimage and each sufficiently small nonzero point has three. There is no neighborhood of the center over which this is a homeomorphism, or an evenly covered neighborhood with constant sheet count. The map is branched there. A genuine cover supplies separate degree-one open-face copies; it does not wrap one open face three times over the other.


### Answer 4

The lift from sheet 2 is

a₂, a₁, b₂, reverse(a₃), reverse(a₃), reverse(b₂),

so its chain is a₁+a₂−2a₃. The lift from sheet 3 is

a₃, a₃, b₃, reverse(a₁), reverse(a₂), reverse(b₃),

so its chain is −a₁−a₂+2a₃. The two b traversals cancel in each chain, but that cancellation does not remove the distinct a-edges.

Since d₁a₁+d₁a₂=0 and d₁a₃=0, both columns lie in ker d₁. Projection sends all three positive a-edges to a. Their images are a+a−2a=0 and its negative. The cellular projection is consistent with the base zero column; the projection has forgotten which lifted edges were traversed.

### Answer 5

For a general chain, the vertex-1 coefficient of its boundary forces the a₁,a₂ coefficients to agree. The vertex-3 coefficient forces the b₂,b₃ coefficients to agree; the remaining vertex condition then follows. Loop coefficients on b₁,a₃ are unrestricted. Thus c₁,c₂,c₃,c₄ are an integral basis of the cycle group, rather than only a rational spanning list.

The change u=c₂−2c₃,d=c₃ has inverse c₂=u+2d,c₃=d and determinant one. Together with unchanged c₁,c₄ it is a unimodular integral change of cycle basis. The boundary image is Zu, so H₁ is free on [c₁],[d],[c₄] and is Z³.

The boundary of x₁σ₁+x₂σ₂+x₃σ₃ is (x₂−x₃)u. Thus the two-cycle group has basis σ₁,σ₂+σ₃. No three-boundaries are present, so H₂=Z² on those classes. H₀=Z and higher groups vanish.

Over F₂, u=c₂ because 2=0, but it is still a nonzero basis vector. The boundary rank remains one. Hence H₁ has dimension three and H₂ has dimension two, with the same named basis pattern after coefficient reduction. Merely seeing a coefficient 2 did not establish integral torsion or a rank drop.

### Answer 6

The positive edges are a₁:1→2,a₂:2→1,a₃:3→3,a₄:4→4 and b₁:1→1,b₂:2→3,b₃:3→4,b₄:4→2. The vertex-1 boundary condition equates the a₁,a₂ coefficients. The vertex-3 and vertex-4 conditions equate b₂,b₃,b₄ coefficients; the vertex-2 condition then follows. Therefore the five stated c_i give an exact integral cycle basis.

The four lifted face boundaries are

d₂σ₁=0,

d₂σ₂=c₂−2c₃,

d₂σ₃=2c₃−2c₄,

d₂σ₄=2c₄−c₂.

These follow by tracing aabAAB. For example the lift from 3 follows a₃,a₃,b₃,reverse(a₄),reverse(a₄),reverse(b₃), giving 2a₃−2a₄. The lift from 4 gives 2a₄−a₁−a₂.

Set u=c₂−2c₃, t=c₃−c₄ and d=c₄. The new cycle basis is (c₁,u,t,d,c₅). Its coordinate matrix is triangular with diagonal entries one, and its inverse is

c₄=d,    c₃=t+d,    c₂=u+2t+2d.

This proves unimodularity over Z. In the new basis the face columns are 0,u,2t,−u−2t, so the boundary subgroup is exactly Zu⊕2Zt. Consequently

H₁=Z[c₁]⊕Z[d]⊕Z[c₅]⊕(Z/2)[t].

The equation d₂σ₃=2t shows that 2[t]=0. Every boundary has an even t-coordinate, while t has odd t-coordinate, so [t] is nonzero and has exact order two.

For a two-chain Σx_iσ_i, the boundary is

(x₂−x₄)u+2(x₃−x₄)t.

Over Z it vanishes exactly when x₂=x₃=x₄. Therefore

H₂=Z[σ₁]⊕Z[σ₂+σ₃+σ₄].

H₀=Z because the cover is connected, and higher groups vanish. The cell count 4−8+4=0 agrees with the alternating integral ranks 1−3+2=0; that rank check alone would miss the Z/2 torsion.

Over F₂ the columns become 0,u,0,u. Thus H₁ has basis [c₁],[t],[d],[c₅], with dimension four. H₂ has basis σ₁,σ₃,σ₂+σ₄, with dimension three. Over Q or any field of odd characteristic, 2 is invertible, the image spans u,t, and H₁,H₂ have dimensions three,two. The extra mod-two two-cycle comes from an actual boundary 2t becoming zero; it cannot be obtained by naively tensoring only H₂ over Z.

## Representation teaching and assessment

The interface can stay bounded to the two three-sheet graph covers and the two base attaching words. A relator table should name every starting sheet, every endpoint and the individual verdict. The global extension verdict must quantify over all sheets and all declared attaching words. In a failed case, do not draw a completed covering face as though an extension already existed.

A face drawing should label σ₁,σ₂,σ₃ separately and name its exact edge sequence. A boundary table should label its row and column bases and repeat signs and edge IDs in text. Its accompanying explanation should distinguish a zero chain from a closed attaching path, and distinguish a base label from a lifted edge. Tables and traces should carry all the mathematics without color, motion or apparent overlaps.

For optional homology, first give d₁ and an integral basis of ker d₁; then express im d₂ inside that basis. An ordinary matrix rank does not decide the integral quotient. A basis-change certificate must include its integer inverse or determinant ±1. Four-sheet tasks remain written transfer problems rather than more controls.

The teaching choices are design inferences: a prediction precedes calculation, each output asks for a named certificate, and the changed example defeats a plausible one-root rule. The earlier [pedagogy synthesis](pedagogy-and-homotopy.md) records the underlying learning-research review and its limits. No evidence from these mathematical examples establishes this workshop's effectiveness.

A short rubric distinguishes: the declared base and fiber; the correct quantifier and needed topological theorem; accurate edge/chain coordinates; and a complete factorization, obstruction or quotient proof. Before and after instruction, a learner could attempt a new relator/fiber example and a changed chain quotient. Any measured improvement would be exploratory without appropriate comparison, counterbalancing and a specified analysis. No learner data, completion times or assistive-technology outcomes have been observed here.

<a id="prepublication-checkpoint-2026-10-20-1406-utc"></a>
## Model and proof scope

The [finite relator model](../relator-model.js) illustrates the declared action
convention, extension argument, disk distinctions and integral basis changes.
Use the written proofs and six worked answers to justify the topological
conclusions. Finite computations illustrate these arguments and do not replace
the imported lifting, classification or quotient theorems.
