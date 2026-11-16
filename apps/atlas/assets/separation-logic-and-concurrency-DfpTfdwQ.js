var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: separation-logic-and-concurrency
title: "Separation Logic and Ownership"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Separation Logic and Ownership

Heap programs are difficult because addresses alias: a write through one expression can change facts named elsewhere. Separation logic makes disjoint ownership explicit. Its separating conjunction supports local reasoning, while concurrent variants control interference through ownership transfer and invariants.

## 1. Stores and heaps

A store maps variables to values. A heap is a finite partial map from addresses to values. Assertion $emp$ holds of the empty heap. $x \\mapsto  v$ holds when the heap consists exactly of address $x$ storing $v$ under the current store.

Ordinary conjunction $P \\land Q$ describes the same heap satisfying both. **Separating conjunction** $P \\ast  Q$ holds when the heap splits into disjoint $h_1 \\cup h_2$ satisfying $P$ and $Q$. Thus $(x \\mapsto  1) \\ast  (y \\mapsto  2)$ entails $x \\ne  y$.

## 2. Local heap rules

Lookup rule requires ownership. A simple rule is $\\{x \\mapsto v\\}\\;y:=[x]\\;\\{x \\mapsto v\\land y=v\\}$ under the freshness side condition $y\\notin FV(x,v)$; otherwise assigning $y$ can change the address or value expressions in the postcondition. A general rule instead uses ghost names for the pre-state address and value. Update gives $\\{x \\mapsto  _\\} [x]:=v \\{x \\mapsto  v\\}$. Allocation returns a fresh address and free consumes an owned cell.

These small-footprint rules mention only touched cells. They do not promise behavior on invalid pointers; safety follows from satisfying the precondition.

## 3. Frame rule

If $\\{P\\}c{Q}$ and command $c$ does not modify free program variables of $R$, then

$\\{P \\ast  R\\} c \\{Q \\ast  R\\}$.

The semantic locality property says executing $c$ on a larger disjoint heap affects only its footprint and preserves the frame. The side condition prevents store updates from invalidating $R$ even when heaps are disjoint.

Frame inference seeks the untouched remainder automatically, but failure to infer a frame is not proof that none exists.

## 4. Lists and inductive predicates

Assume $null$ is not an allocatable heap address. Define the list predicate recursively:

$\\operatorname{list}(x,[]) \\iff (x=\\mathit{null}\\land emp)$,

$\\operatorname{list}(x,v::vs) \\iff
(x\\ne\\mathit{null})\\land\\exists y.\\; (x \\mapsto (v,y)) \\ast \\operatorname{list}(y,vs)$.

The separating conjunction guarantees acyclic disjoint nodes. Unfolding exposes the head cell; folding restores the abstraction. A traversal invariant splits the original list into processed and unprocessed segments.

Recursive predicates are least fixed points under suitable monotonicity, connecting to domain theory.

## 5. Magic wand

Separating implication $P -\\ast  Q$ holds on heap $h$ when every disjoint extension satisfying $P$ combines with $h$ to satisfy $Q$. It is right adjoint to \`*\`:

$P \\ast  R \\models Q$ iff $R \\models P -\\ast  Q$.

The wand describes missing resources or continuation footprints, but can be harder to automate than symbolic heaps.

## 6. Concurrency and races

Parallel threads interleave atomic steps. A data race exists when two concurrent accesses conflict, at least one writes, and synchronization does not order them under the chosen memory model.

Concurrent separation logic assigns disjoint resources to threads. A parallel rule combines proofs when each thread owns what it accesses and neither interferes with the other's variables/resources. Locks protect shared invariants: acquiring a lock transfers its invariant resources to the thread; releasing requires re-establishing and returning them.

Race freedom does not imply functional correctness, deadlock freedom, fairness, or linearizability.

## 7. Atomicity and linearizability

An operation is linearizable when each concurrent call can be assigned one point between invocation and response so the resulting sequential history satisfies the abstract specification and real-time order. Linearization points may be fixed code locations or depend on interference.

Ownership helps establish local steps, while relational simulations connect concrete concurrent histories to abstract atomic operations. Weak memory requires additional rules about reordering and visibility; sequential consistency must not be assumed silently.

## 8. Project: owned-heap checker

**Brief.** Implement a dependency-free finite checker for symbolic assertions built from $emp$, singleton points-to, and separating conjunction. Given a finite concrete heap and store, enumerate disjoint heap partitions and decide satisfaction. Add a tiny update command and test the frame rule exhaustively on heaps through a chosen size. Mutate update to write a framed address and recover a counterexample.

**Reference design.** Validate unique integer addresses. Interpret points-to as an exact singleton heap. For $P\\ast Q$, enumerate subsets of heap entries, give the subset to $P$ and complement to $Q$, and accept if some split works. The command contract names its touched address. Frame tests quantify over disjoint owned and frame heaps and compare post-heaps exactly.

**Acceptance criteria.** Report finite domains, enumeration counts, counterexamples, and typed malformed inputs. Prove the recursive satisfaction checker by induction on assertion syntax and the frame instance by heap-disjointness. Exhaustive bounded checks support the implementation, not the unbounded semantic theorem.

## 9. Boundaries

- $P\\ast Q$ asserts a disjoint split, not ordinary conjunction.
- Points-to commonly describes an exact singleton footprint.
- Frame rule has heap locality and variable-modification side conditions.
- Ownership may transfer through synchronization.
- Race freedom differs from deadlock freedom and linearizability.
- Memory-model assumptions belong in the theorem.

## The algebra behind local reasoning

Fix a store while discussing heap assertions. Disjoint heap union is commutative and associative wherever defined. The empty heap is its identity. These facts prove that separating conjunction is commutative, associative and has emp as identity: transport a witnessing partition through the corresponding heap-union identity, retaining the component assertions. Existentially chosen partitions are witnesses, not a claim that every partition works.

**Theorem 5.1 (Wand adjunction).** P*R entails Q if and only if R entails P−*Q, under the stated exact-heap semantics.

*Proof, forward.* Let h satisfy R. To prove the wand, take any disjoint extension k satisfying P. The union k⊎h satisfies P*R by its displayed partition, so the assumed entailment gives Q on that union. This is exactly the wand's universal-extension condition.

*Proof, reverse.* Let a heap satisfy P*R with disjoint components k and h. The second component satisfies R and hence, by hypothesis, P−*Q. Apply that wand to the disjoint P-component k to obtain Q on their union, the original heap. These implications prove the equivalence. ∎

The wand is therefore a resource implication, quantified over disjoint extensions. It is not ordinary implication on the current heap. If no disjoint extension can satisfy P, the universal condition may hold vacuously; this is another reason to read its semantic definition before treating it as an informal missing-memory description.

## A precise frame theorem and its allocation boundary

For a deterministic, allocation-free heap command, require locality in the following form. If it executes safely from owned heap h, then from any larger heap h⊎f its execution is also safe and returns the same local result h' with the unchanged frame f. Store changes must also be identical. Require additionally that its semantics never inspects whether an unrelated framed address exists. These are substantive semantic hypotheses, satisfied by the primitive owned-cell reads and writes and by their safe sequential compositions.

**Theorem 5.2 (Frame soundness under locality).** If the safe partial triple {P}c{Q} is valid, c has this locality property, and no variable modified by c occurs free in R, then {P*R}c{Q*R} is valid.

*Proof.* Take an initial satisfying partition h⊎f with P on h and R on f. Validity of the small-footprint triple provides safety of the owned execution and Q for every terminating owned result. Locality transfers that execution to the larger heap and preserves f. The variable side condition means the resulting store agrees with the old store on every free variable of R, so R still holds on f. The resulting partition h'⊎f therefore witnesses Q*R. This proves safety and partial correctness on every admitted framed state. ∎

Allocation needs a more careful relation than literally reusing one deterministic fresh address. An allocator on h may choose an address that belongs to the frame f, although allocation on h⊎f must choose another. Standard separation-logic models handle fresh-address nondeterminism, renaming or a suitable safety-monotonicity/frame property with appropriately matched executions. The theorem above explicitly excludes allocation to keep its exact-result locality hypothesis valid. A general allocation frame rule must prove its stronger semantic formulation; it does not follow from pretending the same fresh choice remains available in a larger heap.

## Worked example 1: updating one of two cells

Assume p and q are store variables containing distinct addresses, neither modified by the command. Start with p↦4 * q↦9 and execute [p]:=7. The small rule establishes p↦7 on the p singleton. The q singleton is a disjoint frame and its free address variable is untouched. The frame theorem yields p↦7 * q↦9.

The distinctness is supplied by separating conjunction, rather than by the different spellings p and q. With ordinary conjunction p↦4∧q↦4, both variables could denote the same singleton address. Updating through p would then change what q reads. The frame proof would have no disjoint partition to use. Replacing * by an ordinary connective changes the theorem's premise, not merely its typography.

## Worked example 2: a variable side condition that matters

Let p point to address 10 and let the heap contain a singleton cell at 10. Assertion R is p↦4. Even a command that changes no heap, such as p:=20, can make R false at the same heap: its address expression now denotes 20. Thus unchanged heap cells alone do not prove preservation of a framed assertion with store-dependent addresses.

A ghost address a fixed to the old value 10 allows an assertion a↦4 to remain meaningful after p changes, provided a is a logical parameter rather than the modified programme variable. The postcondition can separately record p=20 and the old cell's ownership. This repair exposes the pre-state reference explicitly; it does not silently interpret a post-state variable as its old value.

## Finite lists really are acyclic

Interpret the list predicate by finite derivation trees, equivalently its least fixed point. Prove by induction on the represented value sequence that a satisfying heap has exactly one node per sequence entry and no repeated node address. The empty sequence uses emp and the null endpoint. For v::vs, unfolding supplies a singleton nonnull head and a disjoint tail list. The induction hypothesis gives the tail's distinct nodes and size; disjointness excludes the head address from all of them. Union adds exactly one node.

This proves acyclicity for the represented list, not for arbitrary reachable memory outside its owned footprint. The frame may contain an unrelated cycle. It also explains why a cyclic structure cannot satisfy this finite-list predicate merely by indefinitely unfolding an equation: least-fixed-point membership requires a finite construction. A coinductive stream predicate would have another meaning and another proof principle.

## Worked example 3: freeing a list head

From list(p,[8,5]), unfold once to obtain p≠null and some q with p↦(8,q) * list(q,[5]). Read the next pointer into a fresh local variable r, retaining ghost names for the old p and q so assignments cannot change the assertion's intended addresses. Freeing the owned p cell consumes that singleton and leaves the disjoint tail list. Setting the current pointer to q then gives list(current,[5]).

The proof also establishes that the freed head is not a node in the retained tail, because it was disjoint before deallocation. It does not allow dereferencing an old alias of the head afterward. A client contract must account for such aliases, perhaps by exclusive ownership preventing clients from holding dereference permissions. Heap-shape correctness and the lifetime interface are connected obligations, not consequences of a variable happening to be named current.

## Ownership and interference

The concurrency discussion above records how this local reasoning extends when resources transfer. For a simple two-thread parallel rule with disjoint heaps, require each thread's accesses confined to its owned heap and require that its modified programme variables do not occur free in the other's assertions or commands. A one-step induction preserves the partition: the moving thread uses locality against the other heap, while the other thread's footprint and relevant store bindings remain unchanged.

Locks replace permanently disjoint ownership with controlled transfer through a resource invariant. Fractional permissions can share read access while reserving full permission for writes, but their permission algebra and rules require a separate soundness model. No such unproved extension is needed for the exact-singleton and disjoint-heap theorems here. Chapter 6 supplies the complementary rely–guarantee perspective for assertions that explicitly tolerate shared-state interference.

## Reversing a linked list with a preserved partition

The finite-list predicate supports an unbounded programme proof. Let the original list value sequence be W. Keep pointers current and reversed, initially the original head and null. While current is nonnull, read its next pointer into a fresh temporary, change the current node's next field to reversed, then set reversed to current and current to the saved next pointer. All pointer-field reads and writes are operations on the owned tuple cell, and null is not allocated.

Use the invariant that there exist sequences U,V with W=U++V and with disjoint heap ownership list(reversed,rev(U)) * list(current,V). Initially U is empty and V=W. The first list is empty at null, so the invariant follows from the input list and emp identity.

If current is nonnull, the empty-list case is impossible. Unfold the second list to obtain V=a::V', one head cell current↦(a,next), and tail list(next,V'), all disjoint from the reversed list. Reading next is safe because the head singleton is owned. Updating its next field affects only that singleton, turning it into current↦(a,reversed). The reversed list is a disjoint frame, so folding these two components gives list(current,a::rev(U)). Since rev(U++[a])=a::rev(U), this is the reversed processed prefix for U'=U++[a].

After pointer assignments, reversed denotes the newly folded head and current denotes the saved tail. The remaining tail stays disjoint from the enlarged reversed list because both of its new components were disjoint from that tail before the update. Also W=U++(a::V')=(U++[a])++V'. These facts re-establish every part of the invariant with U',V'. Ghost names for the old pointer values keep these equalities well scoped across the variable assignments.

At exit current=null. The finite-list predicate then forces V empty: its nonempty case requires a nonnull head. Hence U=W, the tail heap is emp and the remaining owned heap satisfies list(reversed,rev(W)). This proves the desired partial-correctness result and shows that no nodes were allocated or lost. The body consists of safe terminating primitive operations. The natural length of V decreases by one on every true iteration, so Chapter 4's total loop argument proves termination as well.

The list-reversal identity used above follows by induction on U from the recursive definition of reverse, or by its accumulator lemma. Its role is algebraic; the heap proof separately establishes disjointness and safe pointer access. A correct sequence equation without the ownership partition would not exclude rewriting a node that still belonged to the unprocessed tail.

## Permissions are resources with a specified algebra

Exact heap ownership explains exclusive writes. To permit two readers to share a cell, a richer model may attach a positive rational permission at most one to each address. Combining resources at the same address requires agreeing on the stored value and adding permissions without exceeding one. A read can require any positive share, while a write requires the full share. Splitting a full share into two halves then supports concurrent read-only access, but neither half can justify a write alone.

This is a different resource algebra from disjoint partial maps: two compatible resources can now mention the same physical address. Every connective and locality proof must use that new composition law. In particular, the earlier statement that two separating singleton cells entail distinct addresses applies to the exact exclusive points-to assertion defined here, and must not be reused verbatim for fractional points-to. Tracking which algebra a symbol denotes prevents a valid exclusive theorem from being applied to a sharing model with different hypotheses.

Read-only sharing also does not prove that a value is immutable forever. The interface must control when shares can be reunited and when the full permission is available for mutation. A lifetime or ownership discipline records those transitions. The elementary chapter establishes its exact-heap frame and list theorems in full; fractional and lock-based extensions are described at their boundary rather than reported as proved merely because they use the same star notation.

## Exercises with complete solutions

### 1. $emp$ identity {#separation-logic-and-concurrency-ex-1}

Prove $P\\ast emp$ is equivalent to $P$.

<details><summary>Hint 1</summary>

Unpack the witnessing heap partition.

</details>

<details><summary>Hint 2</summary>

The emp component has no cells.

</details>

<details><summary>Solution</summary>

Any satisfying split gives an empty $emp$ component, leaving the whole heap for $P$. Conversely split a $P$ heap into itself and empty heap.

</details>

### 2. Distinct addresses {#separation-logic-and-concurrency-ex-2}

Why does $x\\mapsto 1 \\ast  x\\mapsto 2$ fail?

<details><summary>Hint 1</summary>

Compare domains of the two singleton heaps.

</details>

<details><summary>Hint 2</summary>

Disjoint components cannot both contain x.

</details>

<details><summary>Solution</summary>

Both singleton assertions require ownership of the same address, but separating components must have disjoint domains.

</details>

### 3. Ordinary conjunction {#separation-logic-and-concurrency-ex-3}

Can $x\\mapsto 1 \\land x\\mapsto 1$ hold?

<details><summary>Hint 1</summary>

Ordinary conjunction evaluates both predicates on one heap.

</details>

<details><summary>Hint 2</summary>

No disjoint partition is requested.

</details>

<details><summary>Solution</summary>

Yes. Both conjuncts inspect the same singleton heap; ordinary conjunction does not split resources.

</details>

### 4. Safe update {#separation-logic-and-concurrency-ex-4}

What ownership does $[x]:=v$ require?

<details><summary>Hint 1</summary>

The update changes an existing cell.

</details>

<details><summary>Hint 2</summary>

Ownership of its address supplies a safe footprint.

</details>

<details><summary>Solution</summary>

A heap cell at address denoted by $x$, commonly $x\\mapsto \\_$. The postcondition owns the same cell with value $v$.

</details>

### 5. Frame side condition {#separation-logic-and-concurrency-ex-5}

Why mention modified variables?

<details><summary>Hint 1</summary>

An assertion can mention a store-dependent address.

</details>

<details><summary>Hint 2</summary>

Change p without changing the heap in the second worked example.

</details>

<details><summary>Solution</summary>

Even if framed heap cells are untouched, changing a store variable occurring free in $R$ can make $R$ false.

</details>

### 6. List acyclicity {#separation-logic-and-concurrency-ex-6}

How does recursive \`*\` help?

<details><summary>Hint 1</summary>

Unfold one head node.

</details>

<details><summary>Hint 2</summary>

Its singleton is disjoint from every tail node.

</details>

<details><summary>Solution</summary>

Each head singleton must be disjoint from the tail heap, preventing the same address from reappearing along the represented finite list.

</details>

### 7. Wand reading {#separation-logic-and-concurrency-ex-7}

Interpret $P -\\ast  Q$.

<details><summary>Hint 1</summary>

Quantify over disjoint extensions of the current heap.

</details>

<details><summary>Hint 2</summary>

Each extension satisfying P must make the union satisfy Q.

</details>

<details><summary>Solution</summary>

It describes a heap fragment that will produce $Q$ whenever extended disjointly by any fragment satisfying $P$.

</details>

### 8. Parallel ownership {#separation-logic-and-concurrency-ex-8}

Why can disjoint owned heaps reduce interference?

<details><summary>Hint 1</summary>

Track which addresses each thread can change.

</details>

<details><summary>Hint 2</summary>

The other thread's owned cells remain a disjoint frame.

</details>

<details><summary>Solution</summary>

Each thread's writes are confined to its own addresses, so it cannot invalidate assertions solely about the other's disjoint heap.

</details>

### 9. Lock invariant {#separation-logic-and-concurrency-ex-9}

What happens on release?

<details><summary>Hint 1</summary>

Ask who owns the protected resources after release.

</details>

<details><summary>Hint 2</summary>

The next acquirer must receive a valid invariant.

</details>

<details><summary>Solution</summary>

The thread must re-establish the protected invariant and return its resources to shared lock ownership.

</details>

### 10. Race versus deadlock {#separation-logic-and-concurrency-ex-10}

Can a race-free program deadlock?

<details><summary>Hint 1</summary>

Consider two locks acquired in opposite order.

</details>

<details><summary>Hint 2</summary>

No conflicting unsynchronised memory access is required for a wait cycle.

</details>

<details><summary>Solution</summary>

Yes. Two threads can acquire locks in opposite order and wait forever without unsynchronized conflicting accesses.

</details>

### 11. Linearization point {#separation-logic-and-concurrency-ex-11}

Where must it lie?

<details><summary>Hint 1</summary>

Use the operation's externally visible call interval.

</details>

<details><summary>Hint 2</summary>

Nonoverlapping completed calls constrain the order.

</details>

<details><summary>Solution</summary>

Between the operation's invocation and response, while respecting real-time precedence of nonoverlapping operations.

</details>

### 12. Checker scope {#separation-logic-and-concurrency-ex-12}

What does bounded heap enumeration prove?

<details><summary>Hint 1</summary>

Identify the enumerated domain.

</details>

<details><summary>Hint 2</summary>

A general theorem must quantify beyond that finite bound.

</details>

<details><summary>Solution</summary>

Exact behavior over enumerated heaps and assertions. General soundness requires induction on assertion syntax and command semantics.

</details>


## Chapter summary

Separating conjunction describes a disjoint resource partition. Wand adjunction and the frame theorem follow from that semantics under explicit locality and variable conditions. Finite list predicates establish acyclicity and support a full reversal proof. Allocation, sharing permissions and concurrency require the stated stronger models rather than an implicit extension of exact-heap rules.

## Sources

The retained formal source supplies the original definitions, projects and twelve questions. New proofs expand its wand, frame and list arguments. Reynolds’s separation-logic accounts are listed in the book references; the next chapter develops the complementary interference method.
`;export{e as default};