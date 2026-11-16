# Covering graphs words subgroups and deck maps

Three sheets need not give three deck transformations. This workshop constructs a finite covering of the figure eight from two permutations, then asks the learner to justify what a lifted endpoint, a spanning-tree word, and a deck-map test each establish. The central example has three sheets, a subgroup of index three and free rank four, and only the identity deck transformation.

This workshop belongs to the standalone homotopy sequence. Bring experience with based loop words and inverse letters. Allow roughly 80–100 minutes for the core route, with the four-sheet and disconnected transfers assigned later; this is a teaching estimate rather than an observed completion time.

## Existing coverage and the added learning task

The existing material already teaches covering definitions and lifting. This workshop should use those entries as preparation.

| Actual local entry | Existing work | Added work here |
| --- | --- | --- |
| [Homotopy and winding](../homotopy.html#winding) | Angle lifting, endpoint invariance and the winding classification. | A finite fiber with two independently specified transports. |
| [Loops and words](../loops-and-words.html#words) and [its covering-tree proof](../loops-and-words.html#tree-proof) | Word reduction, the infinite tree cover, and the contrast with torus lifts. | A finite graph upstairs whose nontrivial loops form an explicit subgroup. |
| [Lift return choose a root](../lift-return-roots.html#transport) | Exact cyclic monodromy, return times, inverse transport, and closure versus a global root or null-homotopy. | Joint orbits of two generator permutations and a connected nonregular cover. |
| [Circle-map classification](../circle-maps.html#degree-classification) | Degree of maps, joint lifting and composition versus concatenation. | Based subgroup membership without replacing ordered words by a degree. |
| [Cellular words](../cellular-words.html#cellular-forget) | Permutation assignments tested against relations and nonabelian quotient witnesses. | Constructing a covering graph of the unfilled rose; no two-cell relations are imposed. |
| [Topology Chapter 12](../../textbooks/topology/_output/chapters/12-covering-spaces.html#why-paths-and-homotopies-lift) | A detailed path/square lifting proof, the closed-lift subgroup criterion, deck maps and classification. | A finite tree–edge–reverse-tree calculation and a complete deck test. |
| [Math Atlas covering chapter](../../atlas/content/books/topology-proof-counterexample/covering-spaces-and-lifting.md), §§5–7 | Right-action convention, transitivity, stabilizers, based classification and regularity. | Worked certificates for those claims in one small graph. |
| [Coverings and monodromy](../../atlas/content/books/algebraic-topology-chains-spaces/coverings-and-monodromy.md) | Infinite Schreier graphs, the abelian grid, circle covers and Euler scaling. | An explicit finite subgroup basis and its word rewrite. |
| [Computational group theory](../../atlas/content/books/finite-algebra-computation/computational-group-theory.md), Exercise 1 | Already derives the four-point dihedral coset action. | The changed task uses that action to compute a cover's basis, rank and deck group. The action itself is not new local content. |

Follow the chain of reasoning: **two permutations → a genuine covering graph → closed-word subgroup → a free basis → deck maps**. Use the linked introductions for the definitions of monodromy and subgroup classification. The examples and tasks below work through those connections in finite graphs.

## Prerequisite gates with repairs

A gate identifies something to repair; it does not automatically assess a written proof.

1. **Inverse words.** With A=a⁻¹ and B=b⁻¹, find (ab)⁻¹ and reduce aABb and aa. The answers are BA, the empty word, and aa. Repair with [the word lesson](../loops-and-words.html#words). Inverting reverses the order as well as the letters.
2. **Successive transport.** Set Pₐ=(12), Pᵦ=(23). Starting at 1, follow a then b, and b then a. The endpoints are 3 and 2. Repair with [permutation composition](../../atlas/content/books/algebra-patterns-structure/permutations-cayley-presentations.md) and the convention immediately below.
3. **Orbit and stabilizer.** Does every sheet lie in the joint orbit of 1 under Pₐ and Pᵦ? Does Pᵦ fix 1? Both answers are yes: a reaches 2, ab reaches 3, and b fixes 1. These are different questions. Repair with [orbits and stabilizers](../../atlas/content/books/algebra-patterns-structure/group-actions-orbits-counting.md).
4. **Graph and tree.** In a connected finite graph with three vertices and six geometric edges, how many edges lie outside a spanning tree? Four, because a spanning tree has two edges. Loops and parallel edges count as separate edges. Repair with [graph fundamental groups](../../atlas/content/books/algebraic-topology-chains-spaces/fundamental-group-and-basepoints.md).
5. **Cosets.** For a subgroup H, right cosets Hx and Hy are equal exactly when xy⁻¹∈H. A coset is a set, not necessarily an element of a quotient group. Repair with [cosets and index](../../atlas/content/books/algebra-patterns-structure/cosets-lagrange-index.md). Normality is needed to form the quotient group G/H.

Only the first four gates are needed to start constructing and lifting. The coset gate is needed when identifying the subgroup index. The general classification theorem for all coverings is optional background. Task 6 additionally uses graph homology: a finite graph with c components has H₀=Zᶜ and H₁ free abelian of rank E−V+c. Repair that optional extension with the cycle/boundary calculations in [topology Unit 7](../../atlas/content/courses/topology-manifolds-standard.md); it is not a prerequisite for the core covering route.

## Specify the graph and the convention

Let W=S¹∨S¹ have one vertex v and two oriented circle edges a,b. Its fundamental group is the free group F(a,b), as developed in the word lesson. Uppercase A,B always mean inverse **letters**; permutations are named Pₐ,Pᵦ to avoid a collision.

Given permutations Pₐ,Pᵦ of the sheets S={1,…,n}, construct C(Pₐ,Pᵦ) as follows. Its vertices are S. For every sheet s, attach a distinct oriented geometric edge aₛ from s to Pₐ(s), and a distinct edge bₛ from s to Pᵦ(s). Map each edge interior homeomorphically onto the corresponding base-edge interior, respecting its coordinate and orientation, and send both endpoints to v. Thus there are n vertices and **2n geometric edges**, including loops and parallel edges.

A positive edge aₛ and the reverse of a different positive edge can have the same endpoints. They remain different edges. In the core example a₁:1→2 and a₂:2→1 are distinct positive a-edges. The reverse of a₁ has label A, not a. The reverse of a₂ starts at 1 too, but it is a different lifted path from a₁.

This construction is a covering. An interior interval of a base edge lifts to n disjoint interior intervals. Choose a sufficiently short four-arm star about v. At every sheet there is exactly one outgoing a half-edge, one incoming a half-edge, and similarly for b: bijectivity of each permutation supplies the unique incoming edge. The lifted short stars are disjoint and map homeomorphically onto the base star. Loop edges contribute two distinct short end intervals, so the argument also covers fixed points of a permutation.

Read a path word **left to right**:
    
s·a=Pₐ(s),    s·A=Pₐ⁻¹(s),    s·b=Pᵦ(s),    s·B=Pᵦ⁻¹(s),

s·(uv)=(s·u)·v.

Writing Lᵤ(s)=s·u, this means Lᵤᵥ=Lᵥ∘Lᵤ. Thus ab first applies Pₐ and then Pᵦ. It is not the ordinary rightmost-first function product PₐPᵦ used in the cellular permutation witness. Hatcher explicitly distinguishes these conventions on page 69; he subsequently uses inverse transport to obtain an ordinary left-action homomorphism. This workshop keeps forward endpoint transport and the displayed right action throughout.

An inverse letter also records which edge is traversed: from sheet s, A traverses the reverse of aₚ where p=Pₐ⁻¹(s). Equal endpoint permutations for a and A do not make their lifted edges equal.

## The named topological inputs

The finite construction above is proved directly. Three imported facts connect its calculations to topological conclusions.

| Imported result | Use in this workshop | Primary reference |
| --- | --- | --- |
| Path and homotopy lifting | Endpoint transport depends only on a based loop class. | [Hatcher, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf), Proposition 1.30, p. 60. |
| Injectivity and the closed-lift/index statements | H=p_*π₁(C,1) is the sheet stabilizer, and a connected n-sheet cover gives index n. | Hatcher, Propositions 1.31–1.32, p. 61. |
| A spanning-tree collapse gives a free graph basis | Tree–edge–reverse-tree loops freely generate π₁(C,1). | Hatcher, Proposition 1A.2, pp. 84–85. |

[Culler's author notes](https://homepages.math.uic.edu/~culler/notes/free.pdf), §4, pp. 8–9, also describe reading these generator words from a rooted spanning tree. [May's author-hosted text](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), Chapter 3, §7, p. 29, identifies maps of coverings with equivariant maps of fibers. We prove its finite graph instance below. Hatcher Proposition 1.39, p. 71, relates regularity to normality; our core nonnormality witness is explicit.

Here the base is a finite graph, so it is path-connected, locally path-connected and semilocally simply connected. Those hypotheses support the usual subgroup classification if it is discussed. Constructing the declared graph and proving its particular properties does not require classifying arbitrary spaces or subgroups.

## Worked route in the three-sheet nonregular cover

Take Pₐ=(12), Pᵦ=(23), with sheet 1 marked. Neither permutation alone is transitive on all three sheets. Their **joint** action is: 1 reaches 2 along a and 3 along ab. Components of the graph are exactly joint orbits, because an edge path records a word and every word is an edge path. Therefore C is connected.

The exact traces already separate endpoint questions from homotopy questions:

| Word from sheet 1 | Vertex trace | Meaning |
| --- | --- | --- |
| aA | 1,2,1 | Traverses a₁ and its reverse; contracts by backtracking. |
| aa | 1,2,1 | Traverses a₁ and a₂; closes without backtracking. |
| b | 1,1 | The lifted b₁ loop closes. |
| abA | 1,2,3,3 | Does not close at sheet 1. |
| abAB | 1,2,3,3,2 | The commutator does not close at sheet 1. |

Define H={w∈F(a,b):1·w=1}. Cancellation does not alter endpoints. If u and w fix sheet 1, so does uw by the right-action identity; if u fixes 1, applying u⁻¹ gives that u⁻¹ fixes 1 too. Thus H is a subgroup of the free group. Lifting identifies it with p_*π₁(C,1), and p_* is injective. Thus H is a stabilizer and an embedded copy of the upstairs fundamental group.

A closed lift certifies membership in H. It does not certify a null-homotopy: aa is a nonempty reduced word downstairs, so a contraction of its lifted loop would project to an impossible contraction downstairs. The same warning applies to b. Conversely, a nonclosed lift rules out null-homotopy downstairs because based homotopies preserve its endpoint.

The sheet action is transitive, and the right cosets H,Ha,Hab correspond to sheets 1,2,3 by Hw↦1·w. Indeed 1·x=1·y exactly when 1·xy⁻¹=1, equivalently Hx=Hy. Hence [F(a,b):H]=3.

H is not the kernel of the action on the entire fiber. The word b fixes sheet 1 but exchanges 2 and 3. Also b∈H while abA∉H, so H is not normal: a normal subgroup containing b would contain its conjugate aba⁻¹. The full-action kernel consists of words fixing every sheet and is smaller.

### Extract a basis rather than only count a rank

Choose the tree consisting of the specific positive edges a₁:1→2 and b₂:2→3. The rooted tree paths have projected words t₁=empty, t₂=a, t₃=ab.

For a positive edge xₛ:s→s·x outside the tree, travel from 1 to s in the tree, cross that edge, and return to 1 in the tree. Its projected word is

g(s,x)=t_s x (t_(s·x))⁻¹.

Here the inverse applies to the entire terminal tree word. The four non-tree edges give:

| Edge | Projected loop word |
| --- | --- |
| b₁:1→1 | b |
| a₂:2→1 | aa |
| a₃:3→3 | abaBA |
| b₃:3→2 | abbA |

Collapsing the tree leaves a bouquet of four circles, one for each of these edges. The graph-basis theorem says their upstairs loops freely generate π₁(C,1); injectivity of p_* makes the displayed words a **free basis of H**. Thus rank H=6−3+1=4. Counting four edges alone would not prove that an arbitrary proposed list of four words is a basis. More generally, a connected n-sheet cover of a rose with r circle edges has n vertices and rn geometric edges. Its free rank is rn−(n−1)=1+n(r−1), because a spanning tree has n−1 edges. Connectedness and counting distinct geometric edges are hypotheses in this derivation.

There is also a constructive rewrite. For a word w=x₁…xₘ with successive states s₀=1,s₁,…,sₘ, insert the rooted paths:

q_j=t_(s_(j−1)) x_j (t_(s_j))⁻¹.

The product q₁…qₘ freely reduces to w (t_(s_m))⁻¹ because the adjacent tree words cancel. If the lift closes, sₘ=1 and the product reduces to w. Each qⱼ is empty for a tree traversal, one displayed generator for a positive non-tree traversal, or the inverse of the generator associated with the reversed non-tree edge. This proves generation and gives an exact certificate for each closed word. Freeness comes from the tree-collapse theorem, not merely from this telescoping identity.

For example abba has trace 1,2,3,2,1. Its first two edges lie in the tree, then it crosses b₃ and a₂. Therefore

abba=(abbA)(aa)

after free cancellation. The certificate expresses a nontrivial element of H; it is not a contraction of the lifted loop.

## Deck transformations preserve the projection

A deck transformation is a homeomorphism d:C→C satisfying p∘d=p. It fixes the base and may permute the fiber. It is a more constrained object than an arbitrary symmetry of an unlabelled drawing.

Let δ be its permutation of the sheet vertices. The image of the positive edge xₛ must be the unique positive x-edge starting at δ(s); preservation of endpoints therefore requires

δ(Pₐ(s))=Pₐ(δ(s)),    δ(Pᵦ(s))=Pᵦ(δ(s)).

Conversely, any sheet permutation satisfying both equations extends uniquely by sending each edge xₛ to x_δ(s) with its base-edge coordinate unchanged. Commutation makes the endpoints agree; δ⁻¹ supplies the inverse map, so the extension is a deck homeomorphism. Hence the deck group is precisely the simultaneous centralizer of Pₐ and Pᵦ in the symmetric group of the fiber.

For the core example, δ must preserve the unique Pᵦ-fixed sheet 1 and the unique Pₐ-fixed sheet 3, so it fixes both and then sheet 2. Only the identity deck map exists. The monodromy group generated by Pₐ,Pᵦ is S₃, but it is not the deck group.

For any **connected** covering graph, a deck map fixing one sheet fixes the endpoint of every word lifted there, hence all vertices. The edgewise rule then fixes every edge. Thus the deck action on the fiber is free: only the identity fixes a sheet. “Free” here describes an action, not the free-group rank.

A connected cover is regular when its deck group acts transitively on a fiber. The core cover has three sheets and trivial deck group, so it is nonregular. Connectedness alone does not force regularity or make deck count equal sheet count.

## The three-sheet regular comparison

Keep the same base rose but set Pₐ=(123), Pᵦ=id. This graph is connected because a alone reaches all sheets. It still has six edges, three vertices and free rank four.

Every b or B leaves the current sheet unchanged. Let eₐ(w) be the signed a-exponent total of w. From a starting sheet s, the endpoint is s·w=Pₐ^{eₐ(w)}(s). The subgroup based at 1 is

K=ker(F(a,b)→Z/3),    a↦1 mod 3, b↦0.

It is normal and has index three. With forward a-edges a₁,a₂ as the tree, the paths are empty,a,aa and the non-tree basis is

aaa,    b,    abA,    aabAA.

The last word is a²ba⁻². A permutation commuting with the 3-cycle Pₐ is determined by its value on 1 and is one of id,Pₐ,Pₐ². Pᵦ imposes no further restriction. Thus the deck group is C₃ and acts transitively, so this cover is regular.

The commutator abAB now closes at every sheet because its a-exponent total is zero. It remains a nonempty reduced word in F(a,b), so its lift is not contractible. A finite cover can forget endpoint information while retaining nontrivial loops upstairs.

## Six independent tasks

Write an attempt before using the hints or answers. Tasks 5–6 change the sheet data beyond the two authored three-sheet cases.

1. **Same endpoints different edges.** In the core cover, list the exact edges traversed by aA, aa, and A starting at 1. Decide which of the two closed words is contractible. Explain why merging a₁ and a₂ would destroy the declared covering.
2. **Membership kernel and normality.** From every sheet, lift b and abA in the core cover. Identify which words lie in H based at 1, whether b lies in the kernel of the full action, and whether H is normal. Give a witness for each conclusion.
3. **Produce a rewrite certificate.** Using the chosen core tree, rewrite abba and abaaBA in the free basis b,aa,abaBA,abbA. Show cancellation in the base words and decide whether each lifted loop contracts.
4. **Change the cover keep the word.** In the regular comparison Pₐ=(123),Pᵦ=id, derive K and its four generators without using a rank count as a basis proof. Compare the lift of abAB and the deck group with the core case.
5. **Four sheets two deck maps.** Change to Pₐ=(1234),Pᵦ=(13). Use forward a₁,a₂,a₃ as a tree. Derive the canonical five-word basis, prove the deck group has exactly two elements, and decide connectedness, subgroup index and regularity. Explain why two deck maps do not imply a two-sheet cover. The underlying dihedral coset action already occurs in the local algebra chapter; the new requested outputs are the covering and subgroup certificates.
6. **Remove connectedness.** On four sheets set Pₐ=(12),Pᵦ=(34). Find the components, their covering degrees, their free ranks and H₀,H₁ of the whole graph over Z. Find the index of the subgroup based at sheet 1. Exhibit a nonidentity deck map fixing a sheet, and identify which hypothesis of the earlier freeness proof fails.

## Hints

1. Uppercase reverses an incoming edge. From 1, A uses reverse(a₂), whereas a uses a₁.
2. Record an entire three-entry endpoint permutation. Normality is tested by a conjugate of a word already in H.
3. At each prefix, record the current sheet before choosing a non-tree generator. For the second word, the lift crosses a₃ twice.
4. Count the signed a traversals, including A. Then use a₁,a₂ as the tree, and test commuting permutations on all three sheets.
5. A permutation commuting with a 4-cycle is one of its four powers. Test which powers commute with (13). For b₄, both tree paths are aaa; do not shorten a⁻³ to a without explaining a separate basis change.
6. Use joint orbits. For c components the total first homology rank of a finite graph is E−V+c. The component containing the chosen basepoint controls that based subgroup.

## Complete answers

### Answer 1

The word aA traverses a₁ followed by reverse(a₁), so it contracts by immediate backtracking. The word aa traverses a₁ followed by a₂. It is a closed lifted path, but its nonempty reduced projected word aa is nontrivial in the base free group. A contraction upstairs would project to a contraction downstairs, so it cannot contract.

Starting at 1, the single letter A traverses reverse(a₂):1→2. Its endpoint agrees with that of a, but its edge differs. Merging the two positive edges would either give the wrong labels for a reversal or remove one incoming/outgoing half-edge at a vertex. It would also incorrectly reduce the edge count and rank.

### Answer 2

For b, the endpoints from starting sheets 1,2,3 are 1,3,2. For abA, they are 3,2,1: for example from 1 the trace is 1,2,3,3.

Thus b∈H, abA∉H. Since b does not fix all sheets, it is not in the kernel of the full action. Since aba⁻¹ is a conjugate of b but is outside H, H is not normal. These statements use the chosen base sheet; “some lift closes” would describe a different test.

### Answer 3

Set u=abaBA and v=abbA. The word abba has trace 1,2,3,2,1 and gives v followed by aa. Algebraically (abbA)(aa) reduces by cancelling Aa to abba.

The word abaaBA has trace 1,2,3,3,3,2,1. It crosses the non-tree a₃ twice, so it rewrites as u². In the product (abaBA)(abaBA), cancel Aa and then Bb to obtain abaaBA.

Both displayed base words are nonempty and freely reduced. Neither projected loop is null-homotopic, and a contraction of either lifted loop would project to one. Rewriting in the subgroup basis identifies the element; it does not remove it.

### Answer 4

The endpoint is determined by the a-exponent total modulo three, so K is its kernel and is normal of index three. The graph is connected. The forward a-tree has paths empty,a,aa. The non-tree a₃ yields aaa; the b-loops at 1,2,3 yield b,abA,aabAA. Tree collapse and covering injectivity prove this is a free basis. Its size agrees with 6−3+1=4.

In this cover abAB has trace 1,2,2,1,1 and closes. In the core cover its trace is 1,2,3,3,2 and does not close. Closure in the changed cover still does not contract the nontrivial commutator. The regular comparison's deck group is {id,Pₐ,Pₐ²}≅C₃; the core deck group is trivial.

### Answer 5

The 4-cycle makes the graph connected. There are four vertices and eight geometric edges, so its subgroup based at 1 has index four and free rank 8−4+1=5.

The tree words are empty,a,aa,aaa. The non-tree a₄ gives aaaa. The positive b-edges have endpoints 1→3,2→2,3→1,4→4, giving respectively

bAA,    abA,    aab,    aaabAAA.

Together with aaaa these are the canonical tree basis. In particular b₄ gives a³ba⁻³, not a³ba; both can close, but closedness alone is not the canonical basis derivation.

If δ commutes with Pₐ, then δ=Pₐᵏ for k=0,1,2,3: its value on 1 determines its values around the cycle. Also PᵦPₐPᵦ=Pₐ⁻¹. Therefore Pₐᵏ commutes with Pᵦ exactly when Pₐᵏ=Pₐ⁻ᵏ, or 2k≡0 mod 4. This gives δ=id or Pₐ²=(13)(24), and both satisfy the equations.

The deck group is C₂, with fiber orbits {1,3} and {2,4}. It is not transitive, so the connected four-sheet cover is nonregular. Sheet count/index is four; deck count is two. They answer different questions.

### Answer 6

The joint orbits are {1,2} and {3,4}. Each component is a degree-two cover of the whole base rose. Each has two vertices and four geometric edges, so each fundamental group is free of rank 4−2+1=3. For the disjoint union, H₀=Z² and H₁=Z⁶; higher homology vanishes.

The subgroup at sheet 1 uses only its component, so it has index two. More explicitly it consists of words with even a-exponent total: b acts trivially on sheets 1,2, and a exchanges them. Applying the connected formula to all four sheets would incorrectly report index four or total rank five. The correct total homology rank is E−V+c=8−4+2=6.

The sheet permutation δ=(12), fixing 3 and 4, commutes with both Pₐ=(12) and Pᵦ=(34), so it extends to a nonidentity deck map. It fixes sheets 3,4 and their entire component. This does not contradict the earlier proof: that proof used connectedness to reach every vertex from a fixed sheet, and this total space is disconnected.

## Representation and evaluation plan

Use an exact labelled edge table as the primary representation, with an accompanying graph drawing. Keep separate IDs a₁,a₂,a₃,b₁,b₂,b₃ even when arrows share endpoints; show inverse traversals by edge ID and direction. No crossing in the drawing is a vertex unless it is marked as one. A static text trace and table must convey the complete calculation without color or motion.

For each committed word, the mathematical output should name the starting sheet, every prefix sheet, the particular oriented edge, the endpoint and whether closure occurred. A subgroup rewrite should state its rooted tree and free basis. A deck report should show commuting equations or a finite table and then explain the general edge-extension argument. It should not label every endpoint return “trivial” or silently change from a stabilizer to a kernel.

An implementation can remain bounded to the two declared three-sheet cases, a chosen starting sheet and finite edge words. Exact finite checks should verify the declared data; the general claims depend on the proofs above and named imported results. Exhaustive checks through a finite word length do not prove a statement about every word. Four-sheet and disconnected transfers can remain written problems rather than another control surface.

The teaching plan asks learners to predict, calculate, then explain the certificate. Compare aA with aa, the same commutator in two covers, and sheet count with deck count; each comparison changes a mathematical conclusion that the learner must name. These are design choices, not an established effect for this workshop. The existing [pedagogy synthesis](pedagogy-and-homotopy.md) gives the earlier evidence review and its limits.

A short rubric separates four dimensions: correct objects/conventions; the needed hypothesis, including connectedness; every requested case; and a valid trace, rewrite, tree or commuting proof. Successful button use is not a proof assessment. A realistic local evaluation would ask for a new word and the off-control four-sheet or disconnected task before and after instruction, retaining attempts and coding these dimensions separately. Such a comparison would be exploratory without a suitable control, counterbalancing, adequate sample and a specified analysis; no learner data exist here.

<a id="prepublication-checkpoint-2026-10-20-1334-utc"></a>
## Finite model and proof scope

The [cover model](../cover-model.js) illustrates the declared graph coverings
and committed cases. Use the written prerequisites, action convention, lifted
paths and subgroup arguments to justify each answer. Finite calculations do not
prove the general covering-space theorems. The learner and instructor PDFs keep
their distinct answer visibility; private working notes remain in your browser.
