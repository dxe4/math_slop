var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: explicit-and-symbolic-model-checking
title: "Explicit, Symbolic, and Abstraction-Based Model Checking"
level: graduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Explicit, Symbolic, and Abstraction-Based Model Checking

Model checking exhausts a formal transition system, not the physical world. Explicit search stores states, symbolic search stores sets, and abstraction compresses behaviors under a preservation theorem. Each method changes representation and evidence, not the need to state model boundaries.

## 1. Explicit reachability

Given initial set $I$ and transition relation $R$, reachable states are the least fixed point

$\\operatorname{Reach} = \\mu X.\\, I \\cup \\operatorname{Post}(X)$.

Breadth-first search maintains discovered set, queue frontier, and parent edge for each new state. Invariant: every discovered state is reachable; every reachable state at distance below the frontier depth is discovered. Reaching $bad$ yields a shortest transition-count counterexample. Queue exhaustion proves no reachable bad state in the finite explored model.

Validation must ensure state serialization is canonical; otherwise equal states may be explored repeatedly or distinct states merged unsoundly.

## 2. On-the-fly products

For temporal checking, construct system/product-automaton states only as reached. Safety stops at a bad state. Büchi emptiness finds a reachable strongly connected component containing an accepting state and a cycle.

Nested depth-first search and SCC algorithms avoid storing all product edges at once. Their correctness depends on graph invariants; an accepting state alone is insufficient without an infinite repeatable path.

## 3. Symbolic sets

Symbolic model checking represents state sets and transition relations as Boolean formulas, commonly ordered binary decision diagrams (BDDs). Image computation uses conjunction with the transition relation and existentially quantifies current variables:

$\\operatorname{Post}(X)(s') =
\\exists s.\\; X(s) \\land R(s,s')$.

Variable ordering can make BDDs compact or enormous. “Symbolic” does not guarantee small memory. SAT-based bounded model checking instead unrolls $k$ transitions and asks for a length-$k$ counterexample.

## 4. Bounded model checking

Formula encodes initial state, each transition, and bad state at some step up to $k$. Satisfiability decodes to a trace and should be independently replayed. Unsatisfiability proves absence only within bound unless a completeness threshold or induction argument applies.

$k$-induction proves base cases through $k$ and an inductive step that any $k$ consecutive safe states imply the next is safe. Strengthening invariants may be required; failure of induction does not imply property false.

## 5. Abstraction

Concrete states map to abstract states by $\\alpha$. An overapproximating abstract transition includes every concrete step's image. If no abstract path reaches abstract bad states, no concrete bad path exists. An abstract counterexample may be spurious because extra transitions combine incompatible concrete states.

A forward simulation relation proves preservation of universal safety: initial concrete states relate to abstract initial states, concrete steps can be matched abstractly, and concrete badness implies abstract badness.

Underapproximation supports bug finding but generally cannot prove universal absence.

## 6. CEGAR

Counterexample-guided abstraction refinement begins coarse, checks abstract model, validates any abstract counterexample concretely, and refines predicates when spurious. A real trace refutes the property; a safe abstraction proves it; refinement may continue indefinitely or exhaust resources.

The validator is crucial: reporting a spurious trace as a bug is unsound, while discarding a feasible trace is incomplete.

## 7. Partial-order and symmetry reduction

Independent concurrent transitions can be reordered without changing relevant outcomes. Partial-order reduction explores representative interleavings while preserving selected temporal properties under conditions such as independence and cycle provisos. Symmetry reduction quotients states under interchangeable components, requiring transitions and properties respect the symmetry.

Reduction configuration belongs in the proof record. An invalid independence declaration can erase a real behavior.

## 8. State explosion and composition

Parallel components multiply state spaces. Compositional verification proves components under environment assumptions and discharges compatibility. Assume-guarantee rules can be circular unless a sound rule or fixed-point interpretation justifies them.

Abstraction, symbolic encoding, partial-order reduction, and compositionality are complementary; none universally defeats exponential growth.

## 9. Counterexample quality

A useful trace records initial state, labeled steps, final violation, and model/version hash. Shortest is representation-relative: BFS minimizes explicit edge count, not elapsed time or conceptual simplicity. Liveness counterexamples are lassos—a finite prefix plus repeating cycle.

## 10. Boundaries

- Exhaustion proves a finite model property, not system validation.
- Bounded unsatisfiability is not unbounded safety without completion.
- Overapproximation proves safety; its counterexamples may be spurious.
- Underapproximation finds real modeled bugs but cannot prove absence.
- Reduction side conditions are part of soundness.

## Why a finite Büchi witness is enough

**Theorem 8.1 (Finite accepting-lasso criterion).** In a finite directed graph with initial vertices and an accepting set, an infinite path from an initial vertex visits accepting vertices infinitely often if and only if some reachable cyclic strongly connected component contains an accepting vertex.

*Proof, forward.* The set of vertices occurring infinitely often on the path is nonempty by finiteness. After a sufficiently long finite prefix, no other vertex appears again, since each of the finitely many remaining vertices has a last occurrence. Any two infinitely recurring vertices can then reach each other along later path segments, so they lie in one strongly connected component. Infinitely many accepting visits ensure that at least one accepting vertex recurs infinitely often. A component containing only one vertex must have a self-loop to support the recurring path; a larger strongly connected component has a cycle. Thus the component is cyclic and reachable.

*Proof, reverse.* Follow a finite initial path into the component and then within it to an accepting vertex. Strong connectivity and cyclicity give a nonempty closed walk from that accepting vertex back to itself: for a multi-vertex component, go to another vertex and back; for a singleton, use its self-loop. Repeating that walk yields infinitely many accepting visits. The initial path and closed walk are the finite lasso witness. ∎

A closed walk can repeat internal vertices; it need not be a simple graph-theoretic cycle through every accepting label in a generalized condition. For ordinary Büchi acceptance the one accepting vertex above suffices. Generalized Büchi conditions require visiting each of several designated sets infinitely often, with a correspondingly stronger component criterion. Acceptance semantics must match the graph procedure being justified.

## Worked example 1: reachable acceptance without recurrence

Consider a→b→c with c→c and only b accepting. The accepting vertex b is reachable, but no accepting cyclic component exists. Every infinite path eventually stays at c, visiting b only once. A checker that stops as soon as it reaches an accepting vertex would falsely report Büchi acceptance.

If c→b is added, {b,c} becomes a cyclic strongly connected component containing b. The lasso a,b,c,b,c,… is accepting. Its certificate records the prefix a,b and the nonempty loop b,c,b. Verifying the loop's edges and equality of its endpoint and start proves it can repeat; checking that b is accepting supplies the recurrence condition.

## Worked example 2: symbolic image with explicit witnesses

Use two Boolean state variables x,y and next-state equations x'=¬x, y'=x. Let X consist of states with x=false, while y is arbitrary. The image formula is ∃x,y. (¬x)∧(x'↔¬x)∧(y'↔x). Eliminating current variables leaves x'∧¬y'. Thus the image is the single next state (true,false).

Existential elimination expresses that some predecessor in X leads to the candidate next state. Universal elimination would demand a property of all assignments to the old variables and give a different result. Variable renaming after image computation is also explicit: x',y' become the current-state coordinates for the next iteration. A BDD is one representation of this Boolean set; the set equality above does not depend on its node order or size.

## Worked example 3: a completeness threshold

Suppose a finite transition model has N states and badness is a state predicate. If a bad state is reachable, choose a shortest path to one. That path cannot repeat a vertex: deleting the intervening cycle would produce a shorter path to the same bad endpoint. It therefore has at most N−1 edges.

Consequently absence of a bad path through N−1 edges proves unbounded safety for that model, provided the bounded encoding covers every allowed initial state and every path up to the bound. A smaller reachable-state diameter can sharpen the threshold if independently proved. A numerical depth such as twenty has no such meaning without a relation to the model's completeness bound. Temporal liveness bounds require product-state and acceptance reasoning rather than reusing this state-reachability result unchanged.

## Finite certificates for an exhausted graph

An exhaustive safety result can be accompanied by a set of discovered states containing every initial state, excluding bad states, and closed under every transition. These three conditions form an inductive invariant certificate. Induction on path length proves every reachable state belongs to it. Exactness is unnecessary: even a superset of reachable states suffices if it is closed and safe.

For a shortest counterexample claim, an arbitrary parent map proves only reachability. Shortestness additionally needs breadth-first layer invariants or distance labels whose constraints rule out a shorter route. For a lasso, minimality has still other metrics, such as prefix length plus cycle length. Keeping existence, safety and minimality claims separate prevents a useful witness from being described as proving an extra optimization property that was never established.


## Earlier computing account: Transition Systems and Finite-State Model Checking

Model checking explores a mathematical state-transition model against a formal property. In finite systems it can produce exact proofs or counterexample traces. Its certainty is relative to the model, abstraction, property, and exploration algorithm.

## 1. Kripke structures

A finite transition model consists of states $S$, initial states $I\\subseteq S$, transition relation $R\\subseteq S\\times S$, and labeling $L(s)$ giving atomic propositions true at state $s$.

A path is a state sequence starting in $I$ and following $R$. Some presentations require every state to have a successor, adding self-loops at terminal states. This convention changes infinite-path temporal semantics and must be declared.

Reachable states form the least set containing $I$ and closed under successors. A breadth-first traversal computes them and records shortest-edge parent traces.

## 2. Safety as reachability

Safety says “nothing bad happens.” If $Bad(s)$ identifies forbidden states, safety holds exactly when no reachable state is bad.

An explicit checker keeps a queue, visited set, and parent map. Invariant:

- every queued or visited state is reachable;
- each noninitial discovered state has a valid parent transition;
- every processed state’s successors have been discovered.

If a bad state appears, following parents returns an executable counterexample. If exploration exhausts the finite reachable set without one, induction on path length proves safety.

## 3. Existential and universal path claims

“Can error occur?” asks whether **some** path reaches error. “Must every execution eventually finish?” quantifies over **all** paths and is a liveness claim. Confusing the quantifier changes the property.

Branching-time operators often distinguish $EX p$ (some next state has $p$) from $AX p$ (every next state has $p$), and $EF p$ (some path eventually reaches $p$) from $AG p$ (all reachable states maintain $p$). For finite models:

- $EF p$ is backward reachability from $p$ states;
- $AG p$ is the complement of $EF \\neg p$ under the same path convention.

## 4. Fixed-point algorithms

Let $\\operatorname{Pre}(X)$ be states with a successor in $X$. Then existential eventuality is the least fixed point

$\\mu X.\\,(P \\cup \\operatorname{Pre}(X))$.

Start with states satisfying $P$ and repeatedly add predecessors until stable. Finiteness guarantees termination in at most $\\lvert S\\rvert$ strict growth rounds.

Existential globally $EG P$ is a greatest fixed point: begin with all $P$ states and repeatedly remove states with no successor remaining in the set. Stable states can stay within $P$ forever under the declared total-transition convention.

Fixed-point direction carries meaning: least fixed points capture finite evidence of eventual reachability; greatest fixed points capture indefinitely maintainable behavior.

## 5. Invariants versus exhaustive checking

An inductive invariant $Inv$ proves safety when:

- every initial state satisfies $Inv$;
- transitions preserve $Inv$;
- $Inv$ excludes bad states.

This may cover an infinite system without enumeration. Finite model checking can discover the exact reachable set, itself the strongest reachable-state invariant, but representation may be enormous.

If the desired safety property is true but not inductive, add auxiliary facts. For a lock protocol, “not both in critical section” may need a fact about token ownership to be preserved locally.

## 6. Counterexamples are traces, not explanations

A counterexample trace proves the model violates the property. It may contain irrelevant steps or exploit an abstraction behavior impossible in the implementation. Minimize traces, display changed variables, and validate abstract steps against concrete semantics.

Conversely, absence of a counterexample means proof only when exploration is exhaustive and correct. Bounded checking through depth $k$ proves no shorter counterexample, not unbounded safety unless a completeness bound applies.

## 7. State explosion

With $n$ Boolean variables there are up to $2^n$ valuations. Composing components multiplies state spaces. Mitigations include symbolic sets, partial-order reduction, symmetry reduction, abstraction, compositional reasoning, and inductive proofs.

Every reduction needs a preservation theorem. Merging states may preserve universal safety but introduce spurious existential paths. Ignoring independent action order requires showing reordered traces preserve relevant observations.

## 8. Temporal liveness and fairness

Liveness says something good eventually happens. A scheduler that can ignore one process forever creates a path violating response, even if realistic scheduling is fair. Adding fairness excludes paths where an action remains enabled forever but is never chosen, or requires recurrent enabling to lead to recurrent execution depending on the fairness notion.

Fairness is an assumption about allowed executions, not a theorem generated by the checker. Too strong a fairness constraint can delete real failures.

## 9. Modeling concurrency

Interleaving semantics represents one atomic action at a time. Atomicity boundaries determine reachable intermediate states. Treating a read-modify-write as one transition can hide a race present when read and write interleave.

For two incrementing processes sharing $x$, each executing read, local add, write, interleaving can lose an update. A model with atomic $x:=x+1$ cannot show it. Model fidelity is part of the verification claim.

## 10. From model to deployed system

A complete report names:

- state variables and domains;
- transition atomicity and environment moves;
- initial-state assumptions;
- property syntax and path semantics;
- fairness or termination conventions;
- exploration coverage and tool result;
- abstraction and refinement argument;
- unmodeled implementation, hardware, and operational risks.

“Verified” without this envelope is too broad.

## Worked model: mutual exclusion token

States record token owner $A$ or $B$ and each process location $\\mathsf{idle},\\mathsf{want},\\mathsf{critical}$. A process may enter critical only if it owns the token; it passes token only after leaving.

Invariant: if A is critical then owner is A; if B is critical then owner is B; owner has exactly one value. Therefore both cannot be critical simultaneously. Reachability checking can confirm the invariant on the finite model and can return a trace if a buggy transition permits entry without ownership.

This proves modeled mutual exclusion, not eventual entry. Starvation freedom requires scheduling/fairness and a different temporal property.

## Common errors

- Checking reachable states from one initial state when the contract permits several.
- Treating $some path$ and $all paths$ as interchangeable.
- Calling bounded search an unbounded proof.
- Adding fairness solely to remove an inconvenient counterexample.
- Hiding races inside oversized atomic transitions.
- Saying the deployed system is verified when only an abstraction was checked.


## Project: explicit-state checker with semantic variants

Implement a dependency-free explicit-state checker for a small guarded-command language. Support multiple initial states, labeled transitions, BFS safety checking with shortest counterexample reconstruction, backward $EF$, greatest-fixed-point $EG$, and an option that either completes deadlocks with self-loops or reports finite maximal paths. Build independent checkers for traces and fixed-point certificates. Model a two-process lock twice: once with atomic acquire and once with split read/write steps that expose a race. State and test mutual exclusion, reachability, and a response property both with and without a declared fairness assumption. The final dossier must give state counts, transition counts, fixed-point iteration tables, minimized counterexamples, invariants where available, and a limitations section distinguishing model checking, abstraction validation, bounded evidence, and claims about deployed code.


## Exercises with complete solutions

### 1. Reachability fixed point {#explicit-and-symbolic-model-checking-ex-1}

Why is it least?

<details><summary>Hint 1</summary>

List the initial and closure conditions.

</details>

<details><summary>Hint 2</summary>

Induct on finite path length to establish minimality.

</details>

<details><summary>Solution</summary>

It contains initial states and is closed under successors, while induction shows every such closed set contains every finite reachable path endpoint.

</details>

### 2. BFS shortestness {#explicit-and-symbolic-model-checking-ex-2}

What distance is minimized?

<details><summary>Hint 1</summary>

Inspect breadth-first layers.

</details>

<details><summary>Hint 2</summary>

They count graph edges rather than weighted time.

</details>

<details><summary>Solution</summary>

Number of explicit graph edges under the generated transition model, because BFS explores layers in that metric.

</details>

### 3. Exhaustion certificate {#explicit-and-symbolic-model-checking-ex-3}

What proves safety after queue empties?

<details><summary>Hint 1</summary>

Use the discovered set as an invariant.

</details>

<details><summary>Hint 2</summary>

Initial coverage, successor closure and exclusion of bad are sufficient.

</details>

<details><summary>Solution</summary>

Discovered set contains initials, is closed under every generated transition, and excludes bad states; induction on path length covers all reachable states.

</details>

### 4. Büchi condition {#explicit-and-symbolic-model-checking-ex-4}

Why isn't reachable acceptance enough?

<details><summary>Hint 1</summary>

An accepting visit can occur only once.

</details>

<details><summary>Hint 2</summary>

Theorem 8.1 requires a reachable cyclic accepting component.

</details>

<details><summary>Solution</summary>

Infinite Büchi acceptance needs infinitely many accepting visits. In a finite graph this is equivalent to a reachable cyclic strongly connected component containing an accepting vertex, as Theorem 8.1 proves. A reachable accepting vertex with no route back to an accepting recurrence is insufficient.

</details>

### 5. Symbolic image {#explicit-and-symbolic-model-checking-ex-5}

Why existentially quantify current variables?

<details><summary>Hint 1</summary>

Translate the meaning of a next-state member.

</details>

<details><summary>Hint 2</summary>

Its current-state predecessor is an existential witness.

</details>

<details><summary>Solution</summary>

A next state belongs when some current state in $X$ transitions to it; existential elimination projects away the predecessor witness.

</details>

### 6. Bounded SAT result {#explicit-and-symbolic-model-checking-ex-6}

What does UNSAT at depth 20 prove?

<details><summary>Hint 1</summary>

Read the maximum encoded path length.

</details>

<details><summary>Hint 2</summary>

A separate completeness bound is needed beyond it.

</details>

<details><summary>Solution</summary>

No encoded counterexample of length at most 20 under the model and encoding. It is not unbounded safety absent a completeness theorem.

</details>

### 7. $k$-induction failure {#explicit-and-symbolic-model-checking-ex-7}

Does it refute safety?

<details><summary>Hint 1</summary>

Inspect whether the induction antecedent admits unreachable states.

</details>

<details><summary>Hint 2</summary>

A stronger invariant may remove those states.

</details>

<details><summary>Solution</summary>

No. The inductive hypothesis may be too weak and admit unreachable state sequences; an auxiliary invariant can restore the proof.

</details>

### 8. Overapproximation {#explicit-and-symbolic-model-checking-ex-8}

Why does abstract safety imply concrete safety?

<details><summary>Hint 1</summary>

Map a hypothetical concrete bad path to an abstract path.

</details>

<details><summary>Hint 2</summary>

Badness preservation contradicts abstract safety.

</details>

<details><summary>Solution</summary>

Every concrete path maps to an abstract path. A concrete bad endpoint would map to abstract badness, contradicting abstract absence.

</details>

### 9. Spurious trace {#explicit-and-symbolic-model-checking-ex-9}

How can it arise?

<details><summary>Hint 1</summary>

Adjacent abstract edges may use different representatives.

</details>

<details><summary>Hint 2</summary>

One compatible sequence of concrete witnesses may not exist.

</details>

<details><summary>Solution</summary>

Abstract transitions may be witnessed by different incompatible concrete states, forming a path with no single concrete realization.

</details>

### 10. CEGAR outcomes {#explicit-and-symbolic-model-checking-ex-10}

Name the conclusive outcomes.

<details><summary>Hint 1</summary>

Separate a feasible trace from a safe overapproximation.

</details>

<details><summary>Hint 2</summary>

Neither endless refinement nor exhaustion supplies either conclusion.

</details>

<details><summary>Solution</summary>

A concretely feasible counterexample refutes; an abstract safe result under sound overapproximation proves. Resource exhaustion or endless refinement is inconclusive.

</details>

### 11. Symmetry condition {#explicit-and-symbolic-model-checking-ex-11}

What must be invariant?

<details><summary>Hint 1</summary>

Apply the component permutation to states and edges.

</details>

<details><summary>Hint 2</summary>

The initial set and observed property must also be preserved.

</details>

<details><summary>Solution</summary>

Initial states, transition behavior, and checked property must respect component permutation so quotient representatives preserve truth.

</details>

### 12. Lasso {#explicit-and-symbolic-model-checking-ex-12}

Why is it finite evidence for infinite behavior?

<details><summary>Hint 1</summary>

Identify a closed nonempty walk after the prefix.

</details>

<details><summary>Hint 2</summary>

It can be repeated without needing additional state guesses.

</details>

<details><summary>Solution</summary>

A finite reachable prefix enters a finite cycle that can repeat forever, yielding the required infinite path.

</details>


## Earlier computing exercises

### Earlier exercise 1. How do you check $AG p$ by reachability? {#transition-systems-model-checking-ex-1}

<details><summary>Hint 1</summary>

Negate the universal invariant.

</details>

<details><summary>Hint 2</summary>

Seek an initial path to a state lacking p.

</details>

<details><summary>Solution</summary>

Search from every permitted initial state for a reachable state satisfying $\\neg p$. Such a state and its parent trace witness failure. If exhaustive exploration of the finite reachable set ends without one, every state on every initial path satisfies $p$, which is exactly $AG p$ under the declared path convention.

</details>

### Earlier exercise 2. Why does BFS give a shortest counterexample by number of transitions? {#transition-systems-model-checking-ex-2}

<details><summary>Hint 1</summary>

Track the first-discovery layer.

</details>

<details><summary>Hint 2</summary>

Parent edges reconstruct that layer's distance.

</details>

<details><summary>Solution</summary>

BFS removes states in nondecreasing distance from the initial set. A state is marked when first discovered and stores the discovering edge, so its parent chain has the first possible length. The first dequeued or discovered bad state therefore has minimum transition count; this says nothing about minimum weighted cost unless all transitions have equal cost.

</details>

### Earlier exercise 3. What does adding a self-loop at a terminal state change? {#transition-systems-model-checking-ex-3}

<details><summary>Hint 1</summary>

The last state will now be observed indefinitely.

</details>

<details><summary>Hint 2</summary>

Next and liveness formulas inspect that continuation.

</details>

<details><summary>Solution</summary>

It replaces a finite maximal path by an infinite stuttering path. The terminal state's label is then observed forever, which can change formulas involving next steps or eventual progress. Safety labels are usually unaffected, but liveness such as “eventually leave this state” becomes false on the loop.

</details>

### Earlier exercise 4. Why might an abstract counterexample be spurious? {#transition-systems-model-checking-ex-4}

<details><summary>Hint 1</summary>

Compare witnesses for consecutive abstract edges.

</details>

<details><summary>Hint 2</summary>

They may require incompatible concrete representatives.

</details>

<details><summary>Solution</summary>

An abstraction may merge concrete states. One abstract transition can be witnessed by one representative and the next by another, even though no single concrete state sequence realizes both. Refinement checks whether each abstract step has compatible concrete witnesses; failure calls for refining the abstraction rather than declaring a system bug.

</details>

### Earlier exercise 5. Compute $EF \\mathsf{goal}$ in the system $a\\to b$, $a\\to c$, $b\\to d$, $c\\to c$, $d\\to d$, where only $d$ satisfies $\\mathsf{goal}$. {#transition-systems-model-checking-ex-5}

<details><summary>Hint 1</summary>

Start at the goal and add predecessors.

</details>

<details><summary>Hint 2</summary>

The c self-loop cannot reach d.

</details>

<details><summary>Solution</summary>

Begin the least-fixed-point iteration with $X_{0}=\\{d\\}$. Its predecessors add $b$, giving $X_{1}=\\{b,d\\}$. Predecessors of that set add $a$, giving $X_{2}=\\{a,b,d\\}$. A further round adds nothing, so exactly $a,b,d$ satisfy $EF \\mathsf{goal}$; $c$ cannot leave its self-loop.

</details>

### Earlier exercise 6. On the same system, which states satisfy $EG\\,\\neg\\mathsf{goal}$? {#transition-systems-model-checking-ex-6}

<details><summary>Hint 1</summary>

Remove non-goal states with no remaining successor.

</details>

<details><summary>Hint 2</summary>

The branch through c can avoid the goal forever.

</details>

<details><summary>Solution</summary>

Start the greatest-fixed-point iteration with the non-goal states $\\{a,b,c\\}$. Remove $b$, whose only successor $d$ lies outside. State $a$ still has successor $c$ inside, and $c$ has itself, so the stable set is $\\{a,c\\}$. From either, an existential path can stay away from $\\mathsf{goal}$ forever by reaching or remaining at $c$.

</details>

### Earlier exercise 7. How is an inductive invariant checked without enumerating all paths? {#transition-systems-model-checking-ex-7}

<details><summary>Hint 1</summary>

Use one-step preservation instead of path enumeration.

</details>

<details><summary>Hint 2</summary>

Initial coverage and exclusion of bad complete the induction.

</details>

<details><summary>Solution</summary>

Prove three implications: every allowed initial state satisfies $Inv$; for every transition $(s,t)$, $Inv(s)$ implies $Inv(t)$; and $Inv(s)$ implies $\\neg Bad(s)$. Induction on path length then puts every reachable state inside $Inv$, and the last implication establishes safety.

</details>

### Earlier exercise 8. Give a true reachable-state property that is not inductive over the whole transition relation. {#transition-systems-model-checking-ex-8}

<details><summary>Hint 1</summary>

Consider unreachable source states of transitions.

</details>

<details><summary>Hint 2</summary>

A reachable-state truth can fail at such a state.

</details>

<details><summary>Solution</summary>

Let the initial state be $0$, transitions include $0\\to 1$ and an unreachable transition $2\\to 3$, and propose $P(s): s\\le 2$. All reachable states $\\{0,1\\}$ satisfy $P$, but $P$ is not preserved because the transition $2\\to 3$ leaves it. Strengthening the invariant to characterize reachability, for example $s \\in \\{0,1\\}$, repairs the induction.

</details>

### Earlier exercise 9. A bounded checker finds no bad state through depth 20. What has it proved? {#transition-systems-model-checking-ex-9}

<details><summary>Hint 1</summary>

Read the explicit depth bound.

</details>

<details><summary>Hint 2</summary>

An unbounded claim needs a completeness threshold.

</details>

<details><summary>Solution</summary>

It has proved that no initial execution of at most 20 transitions reaches bad, assuming its bounded encoding and solver are sound and complete for that bound. It has not proved unbounded safety unless 20 is accompanied by a valid completeness bound covering every reachable behavior.

</details>

### Earlier exercise 10. Three components have respectively 4, 5, and 8 local states. What is the raw product-state bound, and why might reachability be smaller? {#transition-systems-model-checking-ex-10}

<details><summary>Hint 1</summary>

Multiply the local state counts.

</details>

<details><summary>Hint 2</summary>

Synchronisation can make many product tuples unreachable.

</details>

<details><summary>Solution</summary>

The Cartesian product contains at most $4*5*8=160$ tuples. Synchronization constraints, incompatible local states, invariants, and the initial condition may make many tuples unreachable. The product is a representation bound, not a claim that all 160 states occur.

</details>

### Earlier exercise 11. Construct a liveness violation caused by unfair scheduling. {#transition-systems-model-checking-ex-11}

<details><summary>Hint 1</summary>

Choose an enabled process that is never scheduled.

</details>

<details><summary>Hint 2</summary>

State which fairness premise would exclude that path.

</details>

<details><summary>Solution</summary>

Let processes $A$ and $B$ both remain enabled, while every transition schedules $A$ and leaves $B$ waiting. The resulting infinite path violates “every waiting process eventually runs.” Weak fairness would exclude it if $B$ is continuously enabled; without that explicit assumption, the path is legal and the liveness property is false.

</details>

### Earlier exercise 12. Why can modeling $x:=x+1$ as atomic hide a lost update? {#transition-systems-model-checking-ex-12}

<details><summary>Hint 1</summary>

Split the operation into its actual atomic accesses.

</details>

<details><summary>Hint 2</summary>

Both threads can read before either writes.

</details>

<details><summary>Solution</summary>

In an implementation each process may read $x$, increment a local value, then write. From $x=0$, both can read zero, then both write one, losing an increment. A single atomic transition permits only serial results $0\\to 1\\to 2$, so it removes precisely the intermediate states that expose the race.

</details>

### Earlier exercise 13. Why must reachability start from every state in $I$, and how can BFS do so? {#transition-systems-model-checking-ex-13}

<details><summary>Hint 1</summary>

A failure may arise from a different allowed initialisation.

</details>

<details><summary>Hint 2</summary>

Give every initial vertex distance zero.

</details>

<details><summary>Solution</summary>

A safety failure may be reachable only from one allowed initialization, so choosing a convenient single state proves the wrong contract. Multi-source BFS initializes the queue and visited set with every state in $I$ at distance zero; its usual invariant and shortest-trace proof then apply from the set of initial states.

</details>

### Earlier exercise 14. Under total-transition semantics, how should a deadlocked state be represented, and what must a report disclose? {#transition-systems-model-checking-ex-14}

<details><summary>Hint 1</summary>

Infinite-path semantics needs a successor at deadlock.

</details>

<details><summary>Hint 2</summary>

Disclose any added stuttering edge.

</details>

<details><summary>Solution</summary>

Add a self-loop so every path can be infinite, then interpret temporal formulas on the resulting stuttering behavior. The report must disclose this completion because it affects next and liveness formulas. An alternative finite-path semantics is possible, but mixing the two conventions makes results uninterpretable.

</details>

### Earlier exercise 15. What must be checked before accepting a counterexample trace $s_{0},\\ldots,s_{k}$? {#transition-systems-model-checking-ex-15}

<details><summary>Hint 1</summary>

Check the start, every edge and the endpoint.

</details>

<details><summary>Hint 2</summary>

An abstract witness also needs compatible concrete realisation.

</details>

<details><summary>Solution</summary>

Check $s_{0}$ belongs to the allowed initial set, each adjacent pair belongs to the transition relation, every state satisfies its domain and labeling rules, and $s_{k}$ violates the stated property in the stated semantics. For an abstract model, additionally establish a compatible concrete realization or label the trace spurious.

</details>

### Earlier exercise 16. What kind of theorem justifies partial-order reduction for a concurrent safety property? {#transition-systems-model-checking-ex-16}

<details><summary>Hint 1</summary>

Explain why omitted schedules have equivalent representatives.

</details>

<details><summary>Hint 2</summary>

Enabledness preservation and commuting steps are relevant conditions.

</details>

<details><summary>Solution</summary>

One must show that ignored reorderings of independent actions preserve the observations relevant to the property and that the reduced search retains a representative of every behavior class capable of reaching bad. Independence normally requires that either action preserves the other's enabledness and their executions commute. Merely exploring one convenient schedule is not a reduction proof.

</details>


## Chapter summary

Reachability, symbolic images and finite invariant certificates prove claims about their declared model. The accepting-lasso theorem supplies exact finite evidence for ordinary Büchi recurrence. Bounded safety becomes unbounded only with a valid completeness threshold. Abstractions and reductions require preservation arguments, and spurious paths remain distinct from concrete counterexamples.

## Sources

The complete earlier computing chapter transition-systems-model-checking, including all sixteen explained questions and its project, is incorporated. Baier and Katoen provide the benchmark for graph, temporal and symbolic methods.
`;export{e as default};