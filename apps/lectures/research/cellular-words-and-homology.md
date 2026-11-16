# Cellular words boundary matrices and homology

A cellular boundary matrix records signed degrees of attaching maps. It does not retain the order in which an attaching loop traverses its edges. This workshop makes that loss visible: two finite cell complexes have identical boundary matrices and all the same additive homology, while their fundamental groups differ. Adding one more disk then makes integer divisibility and coefficient choice part of the calculation.

The audience is an advanced undergraduate who has met kernels, images, quotient spaces, and based loop words. The new work is to connect a word, a boundary column, a filling certificate, and a statement about the space. It is a bounded workshop around four declared CW complexes, rather than another introduction to triangles or a procedure for classifying arbitrary finitely presented groups.

## Existing material and the precise gap

The local sources already provide substantial elementary homology work. They should supply preparation, rather than be rewritten inside the workshop.

| Existing entry | What is already enacted | What this workshop adds |
| --- | --- | --- |
| [Math Atlas topology course](../../atlas/content/courses/topology-manifolds-standard.md), Unit 7 | Exact matrices over F₂, cycle and boundary bases, Betti numbers, and Euler checks for triangle boundary, filled triangle, and figure eight; a practice ladder and larger capstone. | Attaching words with the same signed column but different nonabelian relations. |
| [Simplicial Homology Workbench](../../atlas/content/visual-labs/simplicial-homology-live.md) and its [interface](../../atlas/src/components/labs/SimplicialHomologyLab.tsx) | Five facet-list presets, selectable individual simplices, boundary ranks, and Betti/Euler tables. The written exercises already add a square diagonal and fill its two faces. | An explicit higher-chain filling witness, or a certificate that no filling exists over the named coefficients. |
| [Exact computation recipe](../../atlas/content/recipes/simplicial-homology-computation.md) | Face closure, coefficient conventions, exact elimination, boundary products, and a complete finite computation workflow. | Integer divisibility that field rank alone cannot report. |
| [Topology Chapters 13](../../textbooks/topology/_output/chapters/13-simplicial-cw-complexes.html) and [14](../../textbooks/topology/_output/chapters/14-homology.html) | Simplicial/CW definitions, signed boundaries, cycles modulo boundaries, and the rank formula. | Derivation of the particular boundary entries by collapsing the other loop and counting circle degree. |
| [Math Atlas cellular chapter](../../atlas/content/books/algebraic-topology-chains-spaces/computations-with-cells.md) | Torus, projective plane, coefficient effects, and Klein-bottle exercises. | The concrete [a²,b] attachment, exact chain comparisons, and independently changed attachments. |
| [The functorial bargain](../../atlas/content/books/algebraic-topology-chains-spaces/the-functorial-bargain.md) | The same-homology counterexample T² versus S¹∨S¹∨S² is already present. | A different pair with two nontrivial attaching words; no new sphere-versus-point or wedge-versus-torus introduction. |
| [Loops and words](../loops-and-words.html#words), [its torus construction](../loops-and-words.html#torus), and [circle degree operations](../circle-maps.html#degree-operations) | Free reduction, loss of order under exponent totals, the torus commutator filling, and degree. | Why those exponent totals become homological boundary entries and what the resulting quotient can decide. |

For these attaching words and coefficient changes, exhibit a relevant chain, establish membership in an image, and distinguish that statement from null-homotopy. Unit 7 supplies preparation through a triangle filling and image-membership calculation. This workshop extends that calculation to the attaching words and coefficient changes below.

## Prerequisite gates and repair routes

A learner can answer a gate, inspect its explanation, and use only the needed repair. A gate is not an automatic proof assessment.

1. **Kernel and image.** For A:Q²→Q², A(x,y)=(x+y,0), find ker A, im A, and dim(Q²/im A). The answers are span{(1,−1)}, span{(1,0)}, and 1. Explain why a quotient makes the image directions invisible. Repair with [the linear algebra course](../../atlas/content/courses/linear-algebra-standard.md), Units 3–4, and [quotient spaces](../../atlas/content/books/linear-algebra-structure-proofs/sums-direct-sums-quotients.md).
2. **Allowed coefficients.** Solve 3u=1 over Z, Q, and F₃. There is no integer solution, the rational solution is 1/3, and in F₃ the equation is 0=1 and has no solution. Solve 3u=0 too: only u=0 in Z/Q, every u in F₃. Integer row operations may not divide by 3 as if Z were a field.
3. **Words and chains.** Reduce abAB, where A=a⁻¹ and B=b⁻¹, and compute its signed exponent totals. It is a nonempty reduced word, but the totals are (0,0). Use the [free-word proof route](../loops-and-words.html#tree-proof) if the distinction is unfamiliar.
4. **Cycle and class.** Given d₁d₂=0, explain why im d₂⊆ker d₁ and why two cycles represent the same class exactly when their difference lies in im d₂. Repair with the existing topology Unit 7 rather than another filled-triangle lesson.
5. **Finite permutation composition.** If A=(12) and B=(23), compute AB and BA by applying the rightmost factor first. They are (123) and (132), so they differ. A short table on the three symbols is enough; prior classification of finite groups is unnecessary.

In a presentation ⟨a,b | r₁=1,…,rₖ=1⟩, a word rᵢ is a required relation, called a relator. Assigning a and b to elements A and B of another group first defines a homomorphism from the free group on a,b; it descends to the presented group exactly when every rᵢ evaluates to the identity. This is the relator test used in the finite permutation tasks.

The topological part also uses an imported attachment theorem and the fact that a homotopy equivalence induces an isomorphism of fundamental groups. Their roles are stated below. The workshop does not require the learner to reproduce the proofs of cellular homology or van Kampen before doing the finite calculations.

## Declared spaces and conventions

Let W=S¹∨S¹ be the graph with one vertex v and two oriented loop edges a,b. Concatenation words use lowercase for the stated direction and uppercase for its inverse. The commutator convention is [u,v]=uvu⁻¹v⁻¹.

Start with two finite CW presentation complexes:

- T=W∪_[a,b] D², the usual torus cell structure;
- X=W∪_[a²,b] D², with attaching word aabAAB.

Call their single two-cell σ. Then form Tτ and Xτ by attaching a second two-cell τ along a³, written aaa, to their respective common one-skeleton. The four declared workshop presets are T, X, Tτ, Xτ.

These are **cellular** constructions. An edge can have both endpoints attached to the same vertex, and a two-cell's boundary can traverse an edge repeatedly. They are not one-vertex abstract simplicial complexes; X is not being identified with a surface or a regular cell complex. A polygon drawing records its boundary map, not a claim that a planar polygon embeds as a disk with distinct boundary points in the resulting space.

Choose cellular bases C₀=(v), C₁=(a,b), and C₂=(σ), or C₂=(σ,τ) after the added disk. Matrix columns are images of domain basis elements. Thus d₂ has edge rows and two-cell columns. There are no cells in degrees greater than two.

Use Z coefficients for integral groups and Q, F₂, F₃ for the field modes. Write Hₖ(Y;R) with the coefficient object visible. Rank–nullity and quotient dimension compute vector-space dimensions over a field. They do not report the torsion subgroup of an integral quotient merely from an ordinary rank.

A chain such as a+b is a formal additive combination of oriented edges. It is not a command to commute the loops a and b. An integral change of chain basis below does not silently change an attaching word in the fundamental group.

## The imported theorems and the entries proved here

Three standard results supply the bridge from the finite calculation to topology.

- **Cell attachment and fundamental group.** Attaching disks to a path-connected space quotients its fundamental group by the normal subgroup generated by the attaching loops. This gives the displayed presentations; see [Hatcher Chapter 1, Proposition 1.26, page 50](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf).
- **Cellular homology and its boundary formula.** Cellular chains compute ordinary homology. A boundary entry is the degree of the attaching map followed by collapsing the other cells to a point; see [Hatcher Chapter 2, Theorem 2.35 and the Cellular Boundary Formula, pages 139–140](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf). The same integer entries act on other coefficient groups; the coefficient construction is on pages 153–154.
- **Integral first homology.** For a path-connected space, H₁(Y;Z) is the abelianization of π₁(Y,v), by [Hatcher Chapter 2, Theorem 2A.1, page 166](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf). This statement names integral H₁. An F₂ vector space is not literally the integral abelianization.

A further standard implication is that homotopy equivalent spaces have isomorphic fundamental groups; [Hatcher Chapter 1, Proposition 1.18, page 37](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf) supplies it. The original finite examples, explicit matrices, permutation checks, and quotient calculations below do not constitute proofs of these general theorems.

Here is how the degree formula gives the promised columns. Every edge starts and ends at v, so d₁(a)=v−v=0 and d₁(b)=0. To find the a entry of a two-cell boundary, collapse b to v. The attaching loop becomes a circle map whose degree is the signed count of a traversals. Collapsing a instead gives the b entry. An inverse traversal contributes −1; a collapsed segment contributes zero.

Therefore [a,b]=abAB gives column (1−1,1−1)=(0,0), and [a²,b]=aabAAB gives (2−2,1−1)=(0,0). The aaa attachment gives (3,0). This derives the columns through circle degree; it does not discard the original attaching word as a topological input.

## Core calculations for the declared examples

### The original pair has the same additive homology

For both T and X the integral chain complex is

0 → Zσ —d₂=0→ Za⊕Zb —d₁=0→ Zv → 0.

Thus H₀=Z[v], H₁=Z[a]⊕Z[b], H₂=Z[σ], and higher groups vanish. Replacing Z by any field F leaves zero differentials and gives H₀=F, H₁=F², H₂=F. Their Euler characteristic is 1−2+1=0, matching the alternating ranks of homology.

The identical matrices do not make their fundamental groups isomorphic. The attachment theorem gives

π₁(T)=⟨a,b | [a,b]=1⟩≅Z²,

π₁(X)=⟨a,b | [a²,b]=1⟩.

For the first presentation, the generators commute, and exponent totals give inverse maps between it and Z². For the second, assign a to A=(12) and b to B=(23), composing permutations rightmost first. A²=1, so [A²,B]=1, and the assignment respects the defining relation. But AB=(123) and BA=(132) are unequal, so A and B do not commute. The six permutations 1,A,B,AB,BA,ABA are distinct and exhaust S₃, so the image is all of S₃. Therefore π₁(X) is nonabelian. It cannot be isomorphic to Z², so X and T cannot be homotopy equivalent.

This witness does not identify π₁(X) with S₃, embed S₃ into it, or prove that a²=1 in π₁(X). The order-two relation holds for the image A in this particular quotient. These conclusions must not be conflated.

The graph W itself has π₁(W)=F(a,b), whereas H₁(W;Z)=Z². The loop abAB is nontrivial in the free group but maps to the zero edge chain a+b−a−b=0. Its zero homology class does not supply a null-homotopy. The associated zero chain is a boundary of the zero two-chain even when W has no two-cells; the loss already occurred when word order was forgotten.

### The added a³ disk introduces an integral divisibility condition

For both Tτ and Xτ, with rows (a,b) and columns (σ,τ),

D₂ = [[0,3],[0,0]],    D₁ = [[0,0]].

For integers x,y,

d₂(xσ+yτ)=3y a.

Consequently Z₁=C₁, B₁=3Za, and Z₂=Zσ, since 3y=0 forces y=0. There are no three-cells, so B₂=0. The complete integral answer is

H₀=Z,    H₁=(Z/3)[a]⊕Z[b],    H₂=Z[σ],    Hₖ=0 for k>2.

For a concrete proof of H₁, the map pa+qb↦(p mod 3,q) is surjective onto Z/3⊕Z, and its kernel is exactly 3Za. In particular [a] has exact order three, while [b] has infinite order.

Over a field F of characteristic different from three, 3 is invertible, so d₂ has image Fa and kernel Fσ. Thus H₁=F[b] and H₂=F[σ]. Over a characteristic-three field, the entry 3 is zero: d₂=0, H₁=F[a]⊕F[b], and H₂=F[σ]⊕F[τ]. For the F₃ mode these are F₃².

The extra mod-three two-cycle is the actual chain τ: its integral boundary is 3a, while its mod-three boundary is zero. It is not an additional integral two-cycle. Tensoring just H₂(Y;Z)=Zσ with F₃ would give only F₃σ and would miss τ. Computing the new chain complex directly avoids that incorrect inference. No universal coefficient theorem is needed for this example.

In every field mode the Euler sum is still 1: with characteristic not three it is 1−1+1, and with characteristic three it is 1−2+2. The checksum does not distinguish the two sets of dimensions.

### The changed fundamental groups are both Z/3 times Z

The torus relation already makes a,b commute; adding a³=1 gives π₁(Tτ)≅Z/3×Z.

For Xτ, the presentation is ⟨a,b | [a²,b]=1, a³=1⟩. Since a² commutes with b, a⁴=(a²)² commutes with b. The relation a³=1 gives a⁴=a, hence a and b commute. There are no hidden additional relations: the assignments a↦(1 mod 3,0), b↦(0,1) define a homomorphism to Z/3×Z, and (r mod 3,n)↦aʳbⁿ is a well-defined inverse. Thus π₁(Xτ)≅Z/3×Z as well.

The previous S₃ assignment is invalid here: A=(12) has A³=A≠1 and violates the new relation. Reusing it would give a false nonabelian obstruction. Matching fundamental groups and homology do not, by themselves, prove Tτ and Xτ homotopy equivalent. This workshop does not settle their homotopy classification.

## Six tasks with staged hints

Attempt each task before reading the separate answers. Tasks 5 and 6 alter the attaching data and are not additional controls in the four-preset model.

### Task 1 A missing inverse changes a column

A proposed attachment is aabAAB. A transcription instead records aabAB. Derive the signed boundary column for each by the collapse-and-degree argument. If each is the sole two-cell attached to W, compute its integral H₁ and H₂. Does checking d₁d₂=0, or only the Euler characteristic, necessarily expose the transcription mistake?

**Hint 1.** Count a and A separately, then b and B.

**Hint 2.** The one-vertex graph has d₁=0 in both cases. Equal cell counts do not force equal homology.

### Task 2 A zero boundary is not a sphere certificate

For X, a learner says: “d₂σ=0, so σ is a sphere and its attaching loop was already contractible in W.” Identify the two unjustified conclusions. Prove what the matrix does establish about H₂(X;Z), and use the reduced word to decide whether the attaching loop was null-homotopic before the disk was attached.

**Hint 1.** A cellular chain is a formal combination of cells; a map from S² is additional data.

**Hint 2.** There are no three-cells, and aabAAB is a nonempty reduced word in the graph.

### Task 3 Give a filling or prove none exists

In Xτ, let z=a+b, z′=4a+b, and z″=2a+b. First explain why all are cycles. Decide which pairs represent the same H₁ class over Z, Q, F₂, and F₃. Give an explicit two-chain filling each difference you say bounds, or a coefficient-based reason no filling exists. State when two integer expressions become the same chain after reduction.

**Hint 1.** All boundaries are d₂(xσ+yτ)=3y a.

**Hint 2.** The question “can y=1/3?” has different answers in the four coefficient modes.

### Task 4 A permutation assignment must respect the word

Test the assignment a↦(12), b↦(23) against [a²,b]=1, and use it to distinguish X from the torus. Then change to a↦(123), b↦(12). Does this new noncommuting pair still define a homomorphism from π₁(X)? Explain why noncommutation alone is insufficient. Use rightmost-first composition throughout.

**Hint 1.** Evaluate the relator, not just AB and BA.

**Hint 2.** In the first assignment A²=1. In the second it is not 1.

### Task 5 Replace the added a³ relation by a²

Start from X and attach a second disk τ along a² instead of a³. Compute integral H₀,H₁,H₂ and the positive-degree homology over F₂ and F₃. Determine the fundamental group and test whether the fixed S₃ assignment still respects every relation. Does a redundant relation in a group presentation permit deleting the corresponding cellular generator from a homology computation?

**Hint 1.** Replace the second boundary column by (2,0).

**Hint 2.** If a²=1, what remains of [a²,b]=1? Keep both two-cells when forming C₂.

### Task 6 A slanted boundary and an infinite class

Start from X but attach the second disk τ along a³b³. Derive D₂ and compute integral H₁ and H₂. Use the integral chain basis c=a+b,d=b and prove it is a basis. Determine the order of [a−b]. Then reduce this particular class over F₂ and F₃ and justify its status using actual boundaries. Do not infer a fundamental-group presentation simplification from the additive basis change.

**Hint 1.** In the new basis d₂τ=3c. Express a and b in terms of c,d.

**Hint 2.** The free coordinate of a−b determines its integral order; it can change after reducing coefficients.

## Complete answers

### Answer 1

The word aabAAB has signed totals (2−2,1−1)=(0,0). Collapsing b leaves degree zero on the a circle, and collapsing a leaves degree zero on the b circle. Thus D₂=(0,0)ᵀ, H₁=Z², and H₂=Z.

The shorter word aabAB has totals (2−1,1−1)=(1,0). Its cellular differential sends σ to a. Hence im d₂=Za and ker d₂=0, giving H₁=Z[b] and H₂=0. Both complexes are connected, so H₀=Z.

The product d₁d₂ is zero for both because d₁=0; that check does not validate the recorded word. Both use one vertex, two edges, and one face, so their cell Euler characteristic is 0. Their homology Euler sums are respectively 1−2+1=0 and 1−1+0=0. Even the two correct checksums do not recover a lost inverse symbol. The appropriate check is against the declared attaching map.

### Answer 2

Since d₂=0, σ is a nonzero integral two-cycle. There are no three-cells, so B₂=im d₃=0 and H₂(X;Z)=Z[σ]. This is an exact chain and quotient calculation.

It does not identify σ with a geometric sphere. The characteristic map of a cell has domain D² and a prescribed, generally nonconstant boundary map. A map from S² would require additional construction and verification. A cellular two-cycle need not itself be a sphere.

Before attachment, aabAAB has no adjacent inverse cancellation and is a nonempty reduced graph word. By the free-word theorem it is not null-homotopic in W. Its signed edge chain is zero because opposite contributions cancel after order is discarded. After attachment, the characteristic disk does supply a filling of that loop in X. The target space has changed; this is compatible with its former nontriviality in W.

### Answer 3

All three are cycles since d₁=0. Their differences are z′−z=3a, z″−z=a, and z′−z″=2a.

Over Z, 3a=d₂τ, so z and z′ are homologous. Neither a nor 2a equals 3y a for an integer y, so z″ differs from both. The invariant “a coefficient modulo 3” vanishes on every boundary and distinguishes those classes. It also proves exact order three for [a].

Over Q, a=d₂(τ/3), 2a=d₂(2τ/3), and 3a=d₂τ. Thus all three classes agree and equal [b].

Over F₂, the chains reduce to z=a+b, z′=b, z″=b. The entry 3 reduces to 1, so d₂τ=a. Therefore z′ and z″ are already the same chain, and z differs from them by the boundary a. All three classes agree.

Over F₃, they reduce to z=a+b, z′=a+b, z″=2a+b. Here d₂=0, so no nonzero one-chain is a boundary. The first two are the same chain and class; the third differs by nonzero a. Do not call z and z′ distinct F₃ chains merely because their integer representatives looked different.

### Answer 4

For A=(12),B=(23), A²=1 and therefore A²BA⁻²B⁻¹=1. The presentation relation is respected. With rightmost-first composition, AB=(123), BA=(132), and [A,B]=(132)≠1. The image is nonabelian, so π₁(X) is nonabelian. Since π₁(T)=Z² is abelian, a homotopy equivalence between T and X cannot exist.

For the changed assignment A=(123),B=(12), direct composition gives [A²,B]=(123), not the identity. Equivalently, A²B sends 1 to 1 while BA² sends 1 to 3, so A² and B do not commute. This assignment violates the defining relation and cannot define a homomorphism from the presented group. An arbitrary noncommuting pair does not furnish the required quotient witness.

### Answer 5

The integer matrix is D₂=[[0,2],[0,0]], with D₁=0. Thus d₂(xσ+yτ)=2y a, so H₁=(Z/2)[a]⊕Z[b], H₂=Z[σ], H₀=Z, and higher groups vanish.

Over F₂, D₂=0, giving H₁=F₂² and H₂=F₂². The extra two-cycle is τ, whose integral boundary is 2a but whose mod-two boundary is zero. Over F₃, the entry 2 is invertible, giving H₁=F₃[b] and H₂=F₃[σ].

The fundamental-group presentation is ⟨a,b | [a²,b]=1,a²=1⟩. The second relation makes the first redundant, leaving ⟨a,b | a²=1⟩, the free product (Z/2)*Z, also written C₂*Z. Here a has order two, b generates an infinite cyclic group, and no relation between the two factors is imposed; this presentation is the definition of the free product needed for the task. The fixed assignment A=(12),B=(23) respects a²=1 and remains noncommuting, so this group is nonabelian. This contrasts with the a³ case, where the extra relation forced commutation.

Redundancy among group relators does not remove a two-cell from the declared CW structure. The σ generator is still present and gives H₂=Z. Deleting it from the chain model would change the space being modeled; its removal needs a separate valid topological argument, not a group-presentation simplification.

### Answer 6

The signed totals of a³b³ are (3,3), so D₂=[[0,3],[0,3]]. For integral coefficients, d₂(xσ+yτ)=3y(a+b). The change of basis c=a+b,d=b has columns [[1,0],[1,1]], determinant 1, and inverse a=c−d,b=d. It is therefore an invertible integral change of chain basis, not a division permitted only over Q.

In that basis d₂τ=3c and d₂σ=0. Consequently

H₁=(Z/3)[c]⊕Z[d],    H₂=Z[σ],    H₀=Z.

For an explicit quotient proof, pa+qb↦(p mod 3,q−p) is surjective and has kernel Z(3,3)=im d₂. Thus [c] has order exactly three and [d] is infinite.

The class [a−b]=[c−2d] has infinite order: if n[c−2d]=0, the free coordinate gives −2n=0 in Z, hence n=0. An infinite-order class can nevertheless reduce to zero over a field.

Over F₂, the entry 3 becomes 1, so d₂τ=c. Since a−b=a+b=c in characteristic two, this particular class is a boundary and vanishes. H₁ is still the one-dimensional space F₂[d]; the entire free summand has not disappeared.

Over F₃, D₂=0, H₁=F₃[c]⊕F₃[d], and H₂=F₃[σ]⊕F₃[τ]. Here a−b=c−2d=c+d is a nonzero vector, hence a nonzero class. Over Q, c is a boundary and [a−b]=−2[d] is nonzero.

This additive basis change does not replace the attaching word a³b³ by (ab)³ in the fundamental group. No fundamental-group classification of this changed complex is asserted by these calculations.

## Exact computation and the optional Wolfram companion

The browser model is scoped to the four declared presets and Z/Q/F₂/F₃. Its exact JavaScript arithmetic runs offline without a Wolfram kernel. The hand calculations above determine the signed columns, fixed and failed permutation assignments, the a²/a³ distinction, and the slanted quotient coordinates. Those finite identities do not establish the general lifting or classification theorems.

For optional Wolfram use, the official [SmithDecomposition documentation](https://reference.wolfram.com/language/ref/SmithDecomposition.html) specifies `{u,r,v}=SmithDecomposition[m]` with **u.m.v==r**. The outer matrices are unimodular integer matrices for integer input, and r is diagonal with divisibility among invariant factors. Do not reverse this documented identity or store formatting wrappers in the matrices.

The following companion is **unexecuted here**: no Wolfram kernel is being used. It should be run in a fresh session, retaining the version and any messages. It checks a declared exact integer matrix, not a geometric construction.

```wolfram
ClearAll[d, u, r, v];
$Version

d = {{0, 3}, {0, 0}};
{u, r, v} = SmithDecomposition[d];
{u . d . v == r, Abs[Det[u]], Abs[Det[v]], Diagonal[r]}
MatrixForm /@ {u, r, v}

(* Independently changed boundary from Task 6. *)
d = {{0, 3}, {0, 3}};
{u, r, v} = SmithDecomposition[d];
{u . d . v == r, Abs[Det[u]], Abs[Det[v]], Diagonal[r]}
```

For each matrix the nonzero invariant factor has absolute value three and one diagonal entry is zero, corresponding to Z/3⊕Z in the cokernel. The particular transformation matrices need not be unique. Here d₁=0, so H₁ really is coker d₂. In a general chain complex, taking a Smith form of d₂ alone does not compute H₁: its image must be expressed inside ker d₁, with compatible changes of coordinates. Likewise a successful symbolic decomposition does not prove that the entered matrix came from the intended attaching map.

## Teaching actions and accessible representations

The sequence should ask for a written prediction before an exact result, then require a named certificate. For an equality of homology classes, display a specific filling chain. For nonmembership in an integral boundary subgroup, display a divisibility argument or a quantity unchanged by all boundaries. For a nonabelian obstruction, display the relator test and two unequal permutation compositions. The learner should explain what conclusion follows at each stage.

An accessible visual plan has four coordinated parts:

- A labelled bouquet skeleton and a **separate** attaching-disk boundary with directed arcs and its exact word. Repeated arcs map onto the same target edge; the drawing does not pretend all boundary points remain distinct.
- A boundary matrix with named rows and columns, accompanied by the formula d₂(xσ+yτ). Highlighting should be repeated through labels, signs, and text.
- A chain/class panel giving an actual filling or obstruction and always naming the coefficient object. Distinct integer expressions that become the same F₂/F₃ chain should be reported as such.
- A finite permutation table using the fixed rightmost-first convention. The S₃ witness is valid for X and for the a² transfer, and invalid after adding a³.

Use native selects and inputs for the declared cases, ordinary focus order, labelled buttons, and static text tables that carry the complete mathematics if a diagram cannot be rendered. No mathematical conclusion should depend on color, animation, or a screen overlap. These are implementation requirements to verify; they are not claims of completed assistive-technology evaluation.

The teaching choices are design inferences. Comparing a word with its boundary column makes the preserved and lost information explicit; [Rittle-Johnson and Star's equation-solving experiment](https://doi.org/10.1037/0022-0663.99.3.561) supports investigating carefully prompted comparisons, but it involved school algebra rather than this workshop. Asking why a step is allowed targets the strategy and condition knowledge highlighted in [Weber's exploratory proof study](https://link.springer.com/article/10.1023/A:1015535614355). Neither study establishes an effect for this material. The broader [pedagogy synthesis](pedagogy-and-homotopy.md) contains the earlier evidence review.

<a id="instructor-checks-and-prepublication-review-checkpoint"></a>
## Reading the written argument

Use a short rubric with four separate dimensions: identify the space and coefficients; apply the right hypothesis; cover every requested case; provide a valid filling, quotient, or obstruction proof. A correct Betti number does not repair an invalid group witness. A zero matrix does not prove a null-homotopy, and a zero homology class does not decide a based loop class in a nonabelian space.

The [finite chain model](../cellular-model.js) illustrates the declared cases.
Check its coefficient object, boundary convention and basis coordinates against
the written argument. A finite calculation alone does not establish a general
homotopy or homology conclusion.
