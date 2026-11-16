# Loops words and the torus

This second homotopy lecture compares the same instruction sequence in two different spaces: a wedge of two circles and a torus. In the wedge, the order of traversals survives after immediate backtracking is removed. In the torus, two signed totals classify based loops. The commutator `abAB` has both totals zero but contracts in only one of these spaces. This gives a concrete reason that the spaces cannot be homotopy equivalent.

The [first lecture](../homotopy.html) develops endpoint conditions, explicit deformations, radial retraction, and winding around one puncture. This sequel starts from those ideas and asks what changes when one integer no longer contains enough information. The examples, six tasks, worked answers, and teaching sequence below are an original course design around standard mathematics. A 75–90 minute meeting is a planning estimate; the full covering-space proofs and final transfer task belong in follow-up study unless learners already know lifting.

## Prerequisites and intended mathematical work

Learners should be able to state a based path homotopy, distinguish its two parameters, concatenate paths, reverse a path, and check a proposed homotopy's codomain and all four boundary conditions. They should know the circle's winding classification from the first lecture or an equivalent argument. For the new material they need integer pairs, finite strings, and the idea of an equivalence class. A short introduction to a group can be given during the lesson; no prior free-group calculation is needed.

The desired independent work is to:

- Translate a traversal sequence into a word and preserve the stated basepoint.
- Reduce a word by deleting adjacent inverse letters, while explaining why distant inverse letters cannot simply be erased.
- Give two based wedge loops with equal signed totals that are not based-homotopic.
- Lift a torus loop to the plane, identify its endpoint displacement, and check an explicit homotopy when two displacements agree.
- Explain which topological theorem makes each symbolic calculation a classification of continuous loops.
- Use a group property to obstruct homotopy equivalence, then explain how removing one point changes the contraction.

The quotient-space definition can be taught through the square's edge identifications before introducing notation. Covering-space and homotopy-invariance results must be stated as theorems with their dependencies visible. They need not be silently treated as obvious consequences of a picture.

## The spaces and all conventions

Let `I=[0,1]`. The wedge `W=S¹∨S¹` is obtained from two separate circles by identifying one selected point of each to a single point `v`. Its underlying space has two circular edges and one vertex. Label a chosen direction on the first circle `a` and a chosen direction on the second `b`. The reverse traversals are `A=a⁻¹` and `B=b⁻¹`. All loop homotopies in this lecture keep the basepoint fixed.

The torus is

```text
T² = R²/Z²,
q(x,y) = the equivalence class of (x,y),
(x,y) ~ (x+m,y+n) for (m,n) in Z².
```

Its basepoint is `o=q(0,0)`. A closed square supplies a fundamental domain: identify `(0,y)` with `(1,y)` and `(x,0)` with `(x,1)`. Both horizontal edge arrows point to increasing `x`; both vertical edge arrows point to increasing `y`. All four corners become `o`. There is no reversal in these identifications. The square's interior is part of the torus surface.

On the torus set

```text
a(s)=q(s,0),       b(s)=q(0,s),
A(s)=a(1−s),       B(s)=b(1−s).
```

The images of the horizontal and vertical edges form a copy of `W` inside `T²`. Attaching the square interior adds available homotopies. A drawing of a doughnut may help recognition, but no contraction here travels through the solid material inside a doughnut: the target is the two-dimensional torus surface.

Read a word from left to right. Thus `ab` means traverse `a` first and `b` second. A word of length `k>0` is realized by giving each of its `k` letter loops a time interval of length `1/k`. The empty word `e` is the constant loop. Reparametrizing the speed does not change the based homotopy class. Uppercase letters are inverse symbols, not independent generators.

A based homotopy from `α` to `β` in a space `X` is a jointly continuous map `H:I×I→X` with

```text
H(s,0)=α(s),   H(s,1)=β(s),
H(0,t)=x₀,    H(1,t)=x₀.
```

The associated fundamental group `π₁(X,x₀)` consists of these based homotopy classes, with concatenation as multiplication. This definition and the lifting results used below are treated in [Hatcher, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf), especially pp. 25–28 and Proposition 1.30. Here the group is a way to organize the loop calculations, with its topological justification supplied explicitly below.

## A contrast to predict before calculating

Put `abBA` and `abAB` side by side. Both have zero net `a` count and zero net `b` count. Ask learners to mark exactly which traversals they propose to remove and to name the space in which a proposed deformation takes place.

For `abBA`, first erase the adjacent `bB`, then the remaining `aA`. This is a sequence of immediate reversals. For `abAB`, no adjacent pair is inverse. Making its totals zero requires ignoring order. Whether ignoring order is legitimate depends on the space.

Use this comparison table after a written prediction:

| Word | Reduced word in the wedge | Torus displacement | Null-homotopic in the wedge | Null-homotopic in the torus |
| --- | --- | --- | --- | --- |
| `abBA` | `e` | `(0,0)` | Yes | Yes |
| `abAB` | `abAB` | `(0,0)` | No | Yes |
| `aabA` | `aabA` | `(1,1)` | No | No |
| `baB` | `baB` | `(1,0)` | No | No |

The third and fourth rows help prevent an incorrect inference that every loop becomes trivial on a torus. Two signed totals are a complete invariant there, and they can be nonzero.

## Reduction as an algorithm

Allowed adjacent deletions are `aA`, `Aa`, `bB`, and `Bb`. A reduced word contains none of these pairs. A simple stack procedure is:

```text
Start with an empty stack.
For each letter x, in the original left-to-right order:
    if the last stack letter is inverse to x, remove that last letter;
    otherwise append x.
Return the stack.
```

After the first `j` input letters, the stack represents a reduced version of that prefix. It can grow again after shrinking: `a b B A b a B` gives successive stacks

```text
e → a → ab → a → e → b → ba → baB.
```

This is linear time in the number of letters when a stack supports constant-time push and pop. At most that many letters must be stored. A displayed stepper should preserve the original input, show the consumed prefix, and identify the particular adjacent inverse pair; silently replacing the input with a final answer hides the mathematical reason for the reduction.

Deleting an adjacent inverse pair preserves the based homotopy class: an excursion followed immediately by its reversal can be shortened back to the vertex. The converse is more substantial. An algorithm operating on finite strings cannot, by itself, exclude all continuous homotopies of loops. The covering-tree argument in the next section supplies that missing result, including loops with arbitrary continuous parametrizations.

Do not apply **cyclic reduction** when the task asks for equality of based classes. For example `baB` is conjugate to `a`, but these are different reduced words and different based classes in `W`. If the basepoint may move, a separate free-homotopy problem arises. Keep that distinction outside the main calculation rather than quietly changing the equivalence relation.

## Why reduced words classify wedge loops

This is an instructor proof route for the particular finite graph `W`, avoiding a requirement to establish cellular approximation first. The graph and free-group correspondence also has a van Kampen route; see the wedge calculation in [May, Chapter 2, Section 7](https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), pp. 19–20. The construction here makes the endpoint obstruction visible.

### Construct the tree before using a group

Take one vertex for each literal finite reduced string, including the empty string. Join every nonempty string to the string obtained by deleting its last letter. Give each edge length one. The root is `e`. It has four children. Every other vertex has one parent and three children: the next letter can be any letter except the inverse of the last one.

This connected graph has no cycle. A nonempty vertex has a unique edge toward a shorter word; a finite cycle would have a vertex of maximal length, whose two cycle neighbors would both have to be its unique parent. This is impossible for a simple cycle. Consequently the graph is a tree.

An edge from `r` to its child `rx` has forward label `x` and reverse label `x⁻¹`. From each vertex there is exactly one outgoing direction of each label `a,A,b,B`. Reading a letter either appends it or takes one step back to the parent. This is precisely the stack transition.

This construction also proves uniqueness of reduction without assuming it in advance. Reading an inserted or deleted adjacent pair `xx⁻¹` follows an edge and immediately returns, so it leaves the endpoint unchanged. Every sequence of deletions terminates because length decreases. Reading a resulting reduced word from the root follows its unique prefix chain and ends at the vertex bearing that word. Two completely reduced results from the same input must therefore name the same endpoint and be the same string.

### Map the tree to the wedge

Map every vertex to `v`. Map each labeled edge to the corresponding circle traversal, consistently with its reverse label. Near any vertex there are four short arms, one of each label, mapping bijectively to the four arms of a small neighborhood of `v`. Near an edge interior the map is locally an interval homeomorphism. This gives a covering map `p:𝒯→W`.

The tree is locally finite with unit edges. A compact subset is bounded and therefore lies in some finite ball, which is a finite subtree. This provides the needed control even when a continuous path makes infinitely many small excursions. Paths in a finite tree with the same endpoints are homotopic relative to endpoints: collapse branches off the unique geodesic between the endpoints, then interpolate the resulting path inside that interval. The same observation shows that every loop in `𝒯` contracts.

The foundational facts about tree paths and free reduction are developed in [Culler, *Graphs, Trees and Free Groups*, Sections 1–3](https://homepages.math.uic.edu/~culler/notes/free.pdf). For this construction the tree has literal string vertices; its tree property is established before any free-group action is invoked.

### Apply path and homotopy lifting

Every continuous loop `α:I→W` based at `v` has a unique lift `α̃` starting at `e`. Its endpoint lies over `v`, hence is one of the string vertices. If two loops are based-homotopic, lift their homotopy. The lifted starting point stays at `e`. The lifted ending point is a continuous path in the discrete vertex fiber and must also stay fixed. Thus the endpoint string is an invariant of based homotopy.

Conversely, if two lifted loops have the same endpoint, their lifted paths are homotopic relative to endpoints in a finite subtree containing both images. Project that homotopy to `W`. The original loops are based-homotopic.

Every string occurs: project the unique geodesic from `e` to the corresponding vertex. For a finite word loop, following its letters in the cover computes exactly the stack result. Hence

```text
based classes of all continuous loops in W
    ↔ vertices of the covering tree
    ↔ reduced words in a,A,b,B.
```

Multiplication concatenates two words and reduces the result. The identity is `e`; the inverse reverses letter order and exchanges each letter with its inverse. This is the free group `F(a,b)`. Its name records that there are no additional relations between these generators beyond inverse cancellation.

The constant loop lifts to the root. The lift of `abAB` visits

```text
e → a → ab → abA → abAB,
```

and finishes four edges away. It cannot be based-homotopic to the constant loop. This is a statement about every possible based homotopy, whereas failure to find a cancellation in a numerical drawing would not suffice.

## Why signed totals classify torus loops

The map `q:R²→T²` is a covering: sufficiently small disks and their integer translates supply disjoint local sheets. Lift a continuous based torus loop `α` uniquely to `α̃:I→R²` with `α̃(0)=(0,0)`. Since `α(1)=o`, its lift ends at an integer pair:

```text
d(α)=α̃(1)=(m,n) in Z².
```

Homotopy lifting makes this endpoint invariant under a based homotopy. For a word loop, the four letters add `(1,0)`, `(−1,0)`, `(0,1)`, and `(0,−1)` in their respective directions. Thus

```text
m = number of a letters − number of A letters,
n = number of b letters − number of B letters.
```

To prove completeness, suppose loops `α` and `β` have lifts `α̃` and `β̃` starting at zero and ending at the same pair `(m,n)`. Define

```text
H(s,t)=q((1−t)α̃(s)+tβ̃(s)).
```

It is jointly continuous as a composition of continuous maps. At `t=0,1` it gives the required loops. At `s=0` it gives `q(0,0)=o`; at `s=1` it gives `q(m,n)=o` for every `t`. Therefore equality of displacements implies a based homotopy.

Every integer pair is attained by `s↦q(sm,sn)`. Concatenating two loops adds displacements: the second segment's lift starts at the first endpoint, so it is the translate of the second loop's zero-starting lift. Consequently

```text
π₁(T²,o) ≅ Z² under vector addition.
```

An independent route identifies the torus as `S¹×S¹` and uses the product formula for fundamental groups; [May, p. 20](https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf) states that formula. In this lecture the plane-lift proof is useful because it also gives a concrete homotopy and keeps both endpoint checks visible.

For the particular commutator, use the closed square-boundary lift

```text
ℓ(s) = (4s,0)             for 0 ≤ s ≤ 1/4,
       (1,4s−1)           for 1/4 ≤ s ≤ 1/2,
       (3−4s,1)           for 1/2 ≤ s ≤ 3/4,
       (0,4−4s)           for 3/4 ≤ s ≤ 1.
```

Then `q∘ℓ` traverses `abAB`. Both endpoints of `ℓ` are zero, so

```text
C(s,t)=q((1−t)ℓ(s))
```

contracts the commutator to `o` with the basepoint fixed. The contracted curves use the square interior. This is exactly the extra part of the target that the wedge lacks.

The same scaling formula fails for the generator `a`: its lift `s↦(s,0)` ends at `(1,0)`, and the proposed deformation would have ending value `q(1−t,0)`, usually different from `o`. A loop's image can look small while the endpoint condition has already failed.

## What the two computations say about the spaces

In `W`, the reduced words `ab` and `ba` are different, so the fundamental group is nonabelian. On `T²`, displacements add in `Z²`, so the fundamental group is abelian. An isomorphism cannot change whether every pair of elements commutes.

Homotopy equivalence induces an isomorphism on fundamental groups. This statement also holds for homotopy equivalences whose homotopies move a chosen basepoint; the induced maps must then be compared using change-of-basepoint isomorphisms. See [Hatcher, Proposition 1.18 and Lemma 1.19, pp. 37–38](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf). Therefore `W` and `T²` are not homotopy equivalent, and in particular they are not homeomorphic.

This argument does not assume that a hypothetical equivalence sends the displayed loop `a` to the displayed loop `a`, or `b` to `b`. It uses a property of the entire group. Different fundamental groups obstruct homotopy equivalence; the theorem supplies a necessary condition, not a general classification of spaces from their fundamental groups alone.

The signed-total map from wedge classes to `Z²` preserves multiplication and forgets ordering information. It sends the nontrivial wedge commutator to zero. In particular, it cannot distinguish every wedge class. Learners can explain this loss before learning the formal name “abelianization.”

## A ninety minute teaching route

| Minutes | Instruction and representation | Work learners produce |
| --- | --- | --- |
| 0–7 | Retrieve based homotopy and contrast `abBA` with `abAB`. Keep the target space visible. | A prediction and a marked cancellation with a reason. |
| 7–18 | Define `W`, the torus quotient, directions, inverse letters, and the common basepoints. Trace the square boundary. | An edge-identification diagram; a four-entry boundary table for a homotopy. |
| 18–30 | Work one stack example, then use Task 1 without the answer visible. Contrast reduced words with signed totals. | A complete reduction trace and a statement of what it proves so far. |
| 30–45 | Build the first few levels of the covering tree. State lifting and use the endpoint obstruction for the commutator. | A lifted path, its endpoint, and the theorem connecting that endpoint to homotopy. |
| 45–60 | Trace lifts in the plane. Check the explicit commutator contraction, including target membership and basepoint conditions. | All four checks and the failed endpoint for scaling the generator. |
| 60–73 | Derive complete torus classification by interpolating lifts with equal endpoints; relate concatenation to vector addition. | A formula and justification for the new pair in Task 5. |
| 73–83 | Compare noncommutativity and commutativity, then use homotopy invariance. Briefly expose the punctured-torus change. | An obstruction to equivalence stated independently of generator names. |
| 83–90 | Individual exit task with no stepper or worked answer visible. | Classify a new word in both spaces and identify one proof dependency. |

For 75 minutes, make the full finite-subtree argument assigned reading, shorten the initial examples, and defer Task 6 to the next meeting. Retain both the lifting theorem statement and the explicit boundary checks; removing either would leave a gap in the stated learning goals. A slower group may need a second meeting for the proof that the calculations classify arbitrary continuous loops.

An appropriate exit word is `abaBBA`. It is reduced and nonempty in `W`, with displacement `(1,−1)` on the torus, so it is null-homotopic in neither space. Ask why its nonzero displacement is sufficient for both negative conclusions, while zero displacement would be sufficient only on the torus. A later retrieval task can use `aabbAABB`, which is reduced but has zero totals.

## Six original exercises

### Task 1 Preserve the basepoint while reducing

For `w=abBAbaB`, record the stack after every letter. Compare its based homotopy class with that of `a` in both spaces. A colleague erases the initial `b` and final `B` in the final stack. Explain the problem with that step.

**Hint.** Check adjacency before deleting. In the wedge, compare the complete reduced strings; on the torus, compare the signed totals.

### Task 2 Equal totals and different conclusions

For each word `abAB`, `abBA`, and `aabABA`, compute its reduced word and signed totals. State whether it contracts in each space and identify which result establishes each answer. Explain why this table disproves “zero net traversals imply contraction in every space.”

**Hint.** All three have the same signed totals. Only one admits a first adjacent cancellation.

### Task 3 Choose a cover that can settle the question

Lift `abAB` from the root of the labeled tree and from `(0,0)` in the integer square grid. Record both endpoints. Now regard the grid only as a graph, with no filled squares. It also covers `W` by mapping horizontal and vertical edges to the respective circle. Why does the closed square path in this graph fail to prove that the original loop contracts in `W`? What extra property of the plane is used in the torus argument?

**Hint.** A closed lift need not contract in an arbitrary covering space. Inspect the interior available inside the lifted square.

### Task 4 Verify and reject explicit contractions

Use the piecewise path `ℓ` above. Verify that `C(s,t)=q((1−t)ℓ(s))` is a based contraction of `abAB` in `T²`, checking continuity, target membership, both boundary loops, and both endpoint edges. Apply the same formula to the lift `(s,0)` of `a`. Give one exact pair `(s,t)` witnessing the failure of a required based-loop condition.

**Hint.** The problematic edge is `s=1`, not a discontinuity of `q`.

### Task 5 Construct a homotopy after changing the word

Compare the words `aba` and `aab`. Draw their piecewise-linear lifts starting at zero. Decide whether the loops are based-homotopic in each space. For the torus, write an explicit jointly continuous homotopy using the two lifts and check every boundary condition. Then explain why equality of displacement, rather than visual similarity of the drawn curves, is decisive.

**Hint.** Both lifts end at `(2,1)`. Their convex combination still has that endpoint at every deformation time.

### Task 6 Remove the square interior point

Let `p=q(1/2,1/2)` and `T*=T²∖{p}`. Show that `T*` strongly deformation retracts onto the image of the square boundary, which is a wedge of two circles. Decide whether the commutator now contracts. Locate an exact point where the earlier contraction `C` leaves `T*`. State the implication for homotopy equivalence of `T*` and `T²`.

**Hint.** In the square, draw rays outwards from its missing center. With `c=(1/2,1/2)`, a nonzero vector `x−c` reaches the boundary when its maximum coordinate magnitude is `1/2`. Keep all boundary points fixed so the homotopy respects edge identifications.

## Worked instructor answers

### Answer 1

The stack trace is

```text
input consumed:  e   a   ab   abB   abBA   abBAb   abBAba   abBAbaB
stack:           e   a   ab    a      e      b       ba       baB
```

Thus the wedge class is the reduced string `baB`, different from `a`. The signed totals are `(1,0)` in both cases, so the torus loops are based-homotopic. Removing the first and last letters of `baB` is not adjacent cancellation. It changes a based class. It corresponds to a conjugacy consideration, which belongs to a different free-homotopy question where the common basepoint is permitted to move.

### Answer 2

| Input | Reduced string | Signed totals | Contracts in `W` | Contracts in `T²` |
| --- | --- | --- | --- | --- |
| `abAB` | `abAB` | `(0,0)` | No | Yes |
| `abBA` | `e` | `(0,0)` | Yes | Yes |
| `aabABA` | `aabABA` | `(0,0)` | No | Yes |

The last word has two `a` and two `A` letters, and one `b` and one `B`; its totals are zero. Its adjacent pairs are `aa`, `ab`, `bA`, `AB`, and `BA`, none inverse. The tree endpoint classification proves the two nonempty reduced words do not contract in `W`. Immediate reversal homotopies contract `abBA` there. On the torus, zero displacement and the plane-lift interpolation theorem give contractions for all three. A pair of integers loses information needed for the wedge.

### Answer 3

The tree path ends at the vertex `abAB`, not at `e`. The square-grid path visits `(0,0),(1,0),(1,1),(0,1),(0,0)` and ends at its start. Homotopy lifting says a null-homotopic loop must have a closed lift in every cover, so the open tree lift already rules out a contraction in `W`.

A closed lift is only a necessary condition in a general cover. The unfilled grid contains square cycles and is not simply connected. Its square loop cannot contract inside its graph. It can contract inside the full plane, because the plane includes the square's interior and is convex. In the torus argument the covering space is the full `R²`, not merely its grid of edges. This distinction is essential even when a diagram draws only grid lines.

### Answer 4

The four formulas for `ℓ` agree at the joins, so the pasting lemma gives continuity. Multiplication by `1−t` is jointly continuous; composition with the continuous quotient map `q` gives a jointly continuous `C`. Its values always lie in `T²`. At `t=0` it is `q∘ℓ`; at `t=1` it is the constant `o`. Since `ℓ(0)=ℓ(1)=(0,0)`, both endpoint edges remain `o` for all `t`.

For the generator the proposed map is `D(s,t)=q((1−t)s,0)`. At `(s,t)=(1,1/2)`, its endpoint is `q(1/2,0)≠q(0,0)`. Thus intermediate slices are paths with different endpoints, not loops based at `o`. There is no discontinuity in `q`; choosing coordinates modulo one can make a plotted representative jump at a seam even while the quotient-valued map is continuous.

### Answer 5

Both words are already reduced and distinct, so they define different based classes in `W`. Let `u` and `v` be their piecewise-linear plane lifts, assigning one third of the parameter interval to each letter. Their vertices are

```text
u: (0,0) → (1,0) → (1,1) → (2,1),
v: (0,0) → (1,0) → (2,0) → (2,1).
```

Set `H(s,t)=q((1−t)u(s)+t v(s))`. Both lifts are continuous, so `H` is jointly continuous and torus-valued. At `t=0` and `t=1` it gives the required loops. At `s=0` its value is `o`; at `s=1` it is `q(2,1)=o`, independent of `t`. This proves a based homotopy on the torus. The construction uses equal lifted endpoints, and therefore works for arbitrary continuous loops with that common displacement, not just these two polygonal examples.

### Answer 6

In `Q=[0,1]²∖{c}`, put

```text
ρ(x)=||x−c||∞,
r(x)=c+(x−c)/(2ρ(x)),
R(x,t)=(1−t)x+t r(x).
```

The missing center ensures `ρ(x)>0`, so the formulas are jointly continuous. Since `ρ(x)≤1/2`, `r(x)` lies on the square boundary on the same ray as `x`, and the whole segment from `x` to `r(x)` remains in the square and avoids the center. When `x` is on the boundary, `ρ(x)=1/2`, so `r(x)=x` and the homotopy fixes it. At `t=0` it is the identity, and at `t=1` every point is on the boundary.

The formulas fix both sides of every edge identification, so they descend to a strong deformation retraction of `T*` onto `q(∂[0,1]²)`. For a direct continuity justification, extend them to each integer-translated square in the plane with its center removed. They agree on shared edges, are continuous by local pasting, and commute with integer translations. The plane quotient therefore induces the required continuous homotopy on `T*`.

The boundary image is the horizontal circle and vertical circle meeting at `o`, hence a wedge of two circles. Its commutator is nontrivial by the covering-tree argument. A based contraction in `T*` would compose with the retraction to give a based contraction in that wedge, a contradiction. The earlier full-torus contraction hits the missing point exactly at

```text
C(1/2,1/2)=q((1/2)·(1,1))=q(1/2,1/2)=p.
```

Thus one particular formula fails there, and the wedge retraction rules out every possible contraction. Finally `π₁(T*)` is nonabelian and `π₁(T²)` is abelian, so these two spaces cannot be homotopy equivalent. Filling a single missing interior point restores a relation that kills the commutator.

## Pedagogical evidence and its use here

Two primary studies provide useful, qualified guidance for the comparison tasks. In [Rittle-Johnson and Star 2007](https://doi.org/10.1037/0022-0663.99.3.561), 70 seventh-grade learners were randomly assigned to compare alternative equation-solving methods or study them separately. Comparison produced greater procedural and flexibility gains, with comparable conceptual gains. This concerns school algebra, not topology. The practical inference here is to place the same word and two spaces side by side and ask what each calculation retains; it does not establish an expected effect size for this lecture.

[Loibl, Tillema, Rummel, and van Gog 2020](https://link.springer.com/article/10.1007/s11251-020-09504-7) used a factorial experiment on order of instruction and contrasting cases in secondary-school statistics. Their reported analysis found no posttest benefit from the contrasting-case materials; instruction first favored procedural fluency, and merely delaying instruction did not improve conceptual understanding. This constrains the design: a short prediction should be followed by explicit mathematics, guided comparison, and independent practice. Unstructured struggle or adjacent diagrams do not automatically produce learning.

These results motivate a design choice rather than validate its topology outcomes. The main contrast holds the symbolic word fixed while changing its codomain. A second contrast holds displacement fixed while changing the reduced word. Prompts should name the feature learners must compare: “Which deformation is available in the target?” and “Which information has this invariant discarded?” A request simply to “explore” gives much less evidence about what reasoning occurred.

Keep an initial written answer, a revision after the proof, and a final independent transfer answer. Score the reason separately from the classification. Useful criteria are correct basepoint conditions, correct invariant, explanation of its completeness or limitation, and an appropriate theorem connecting algebra to topology. A correct word calculation with no topological bridge is partial mathematical evidence; it should not be reported as mastery of homotopy classification.

An observed error can guide the next prompt without being treated as a fixed learner trait. Nonadjacent cancellation suggests asking the learner to trace the intermediate based excursion. A contraction through the missing point calls for a codomain check. A closed lift in the unfilled grid calls for distinguishing arbitrary covers from a simply connected cover. A claim that the spaces are equivalent because both have two generators calls for a comparison of relations and commutativity.

## Implementation and instructor safeguards

- Label the target and basepoint beside every diagram. A word is an instruction for a loop in that target; it is not itself the target space.
- Distinguish the covering tree, the plane, the quotient square, and a displayed fundamental domain. A finite tree drawing shows only a window into an infinite cover.
- Draw or shade square interiors when using the torus's plane cover. Grid lines alone can suggest the wrong covering space.
- Exponent totals are exact integers. Use those integers for classification rather than estimating totals from sampled rendered curves.
- A cancellation step should identify adjacent inverses. Do not use endpoint cancellation across the whole string in a based-word task.
- A moving dot is a position parameter. A deformation parameter changes a whole loop. Show separate labels if both appear.
- Quotient-coordinate seams can move during a continuous homotopy. A jump in the representative inside `[0,1)` is not a discontinuity of the torus-valued map.
- Every “contracts” verdict should name the target and conditions. The original full-torus commutator contraction is invalid after the center point is removed.
- Keep the classification proof separate from the computation's trace. A finite list of sample paths cannot establish a statement about all continuous paths or all possible homotopies.

## Primary source guide

The mathematical reading is concentrated in three author-hosted texts. [Hatcher, *Algebraic Topology*, Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf) supplies the definitions and lifting/invariance theorems: pp. 25–28, Proposition 1.18, Example 1.21, Proposition 1.30, Examples 1.45–1.46, and Section 1.A are useful reference points. [May, *A Concise Course in Algebraic Topology*](https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), Chapters 2–4, offers the wedge/product calculations and a compact covering-space development. [Culler, *Graphs, Trees and Free Groups*](https://homepages.math.uic.edu/~culler/notes/free.pdf), Sections 1–3, gives a direct route through graph paths, trees, and free groups. These are instructor references; their full prerequisite load need not be imposed before the opening tasks.

The two primary education articles are [Rittle-Johnson and Star 2007](https://doi.org/10.1037/0022-0663.99.3.561) and [Loibl and colleagues 2020](https://link.springer.com/article/10.1007/s11251-020-09504-7). Their specific designs and reported results delimit the teaching inferences made above. The lesson's timing, examples, scoring criteria, and proposed follow-up are course-design judgments, not reported learner findings.


## Exact word models and geometric limits


The written arguments distinguish inverse order, positive and negative
commutator powers, covering-tree lifting for arbitrary continuous paths, torus
lift interpolation, and based versus free homotopy. The torus uses `exp(2πix)`;
the final task names the inclusion whose induced map is in question.

The word model preserves traversal order, cancels only adjacent inverse
letters, and compares the first word followed by the inverse of the second.
Exponent sums classify the torus loops but do not classify figure-eight loops.
The topological conclusions require the lifting and classification arguments
in the lecture; executing a word algorithm does not establish those theorems.

The geometry is numerical. For example, floating point rounds
`1 - Number.MIN_VALUE` to `1`. The generator family's failure is therefore
established by its exact endpoint expression for every interior real time,
not by floating-point equality or sampled screen positions. Wrapped coordinate
representatives need not be continuous in the half-open square even though the
quotient map to the torus is continuous. The renderer uses periodic ring
coordinates, with captions distinguishing a screen projection from the target.
