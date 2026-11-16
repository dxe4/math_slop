var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: transition-systems-model-checking
title: "Transition Systems and Finite-State Model Checking"
level: advanced-undergraduate
estimated_minutes: 145
license: CC BY-SA 4.0
---

# Transition Systems and Finite-State Model Checking

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

Invariant: if A is critical then owner is A; if B is critical then owner is B; owner has exactly one value. Therefore both cannot be critical simultaneously. Reachability checking confirms the invariant on the finite model and can return a trace if a buggy transition permits entry without ownership.

This proves modeled mutual exclusion, not eventual entry. Starvation freedom requires scheduling/fairness and a different temporal property.

## Common errors

- Checking reachable states from one initial state when the contract permits several.
- Treating $some path$ and $all paths$ as interchangeable.
- Calling bounded search an unbounded proof.
- Adding fairness solely to remove an inconvenient counterexample.
- Hiding races inside oversized atomic transitions.
- Saying the deployed system is verified when only an abstraction was checked.

## Practice with complete solutions

1. **How do you check $AG p$ by reachability?** Search from every permitted initial state for a reachable state satisfying $\\neg p$. Such a state and its parent trace witness failure. If exhaustive exploration of the finite reachable set ends without one, every state on every initial path satisfies $p$, which is exactly $AG p$ under the declared path convention.
2. **Why does BFS give a shortest counterexample by number of transitions?** BFS removes states in nondecreasing distance from the initial set. A state is marked when first discovered and stores the discovering edge, so its parent chain has the first possible length. The first dequeued or discovered bad state therefore has minimum transition count; this says nothing about minimum weighted cost unless all transitions have equal cost.
3. **What does adding a self-loop at a terminal state change?** It replaces a finite maximal path by an infinite stuttering path. The terminal state's label is then observed forever, which can change formulas involving next steps or eventual progress. Safety labels are usually unaffected, but liveness such as “eventually leave this state” becomes false on the loop.
4. **Why might an abstract counterexample be spurious?** An abstraction may merge concrete states. One abstract transition can be witnessed by one representative and the next by another, even though no single concrete state sequence realizes both. Refinement checks whether each abstract step has compatible concrete witnesses; failure calls for refining the abstraction rather than declaring a system bug.
5. **Compute $EF \\mathsf{goal}$ in the system $a\\to b$, $a\\to c$, $b\\to d$, $c\\to c$, $d\\to d$, where only $d$ satisfies $\\mathsf{goal}$.** Begin the least-fixed-point iteration with $X_{0}=\\{d\\}$. Its predecessors add $b$, giving $X_{1}=\\{b,d\\}$. Predecessors of that set add $a$, giving $X_{2}=\\{a,b,d\\}$. A further round adds nothing, so exactly $a,b,d$ satisfy $EF \\mathsf{goal}$; $c$ cannot leave its self-loop.
6. **On the same system, which states satisfy $EG\\,\\neg\\mathsf{goal}$?** Start the greatest-fixed-point iteration with the non-goal states $\\{a,b,c\\}$. Remove $b$, whose only successor $d$ lies outside. State $a$ still has successor $c$ inside, and $c$ has itself, so the stable set is $\\{a,c\\}$. From either, an existential path can stay away from $\\mathsf{goal}$ forever by reaching or remaining at $c$.
7. **How is an inductive invariant checked without enumerating all paths?** Prove three implications: every allowed initial state satisfies $Inv$; for every transition $(s,t)$, $Inv(s)$ implies $Inv(t)$; and $Inv(s)$ implies $\\neg Bad(s)$. Induction on path length then puts every reachable state inside $Inv$, and the last implication establishes safety.
8. **Give a true reachable-state property that is not inductive over the whole transition relation.** Let the initial state be $0$, transitions include $0\\to 1$ and an unreachable transition $2\\to 3$, and propose $P(s): s\\le 2$. All reachable states $\\{0,1\\}$ satisfy $P$, but $P$ is not preserved because the transition $2\\to 3$ leaves it. Strengthening the invariant to characterize reachability, for example $s \\in \\{0,1\\}$, repairs the induction.
9. **A bounded checker finds no bad state through depth 20. What has it proved?** It has proved that no initial execution of at most 20 transitions reaches bad, assuming its bounded encoding and solver are sound and complete for that bound. It has not proved unbounded safety unless 20 is accompanied by a valid completeness bound covering every reachable behavior.
10. **Three components have respectively 4, 5, and 8 local states. What is the raw product-state bound, and why might reachability be smaller?** The Cartesian product contains at most $4*5*8=160$ tuples. Synchronization constraints, incompatible local states, invariants, and the initial condition may make many tuples unreachable. The product is a representation bound, not a claim that all 160 states occur.
11. **Construct a liveness violation caused by unfair scheduling.** Let processes $A$ and $B$ both remain enabled, while every transition schedules $A$ and leaves $B$ waiting. The resulting infinite path violates “every waiting process eventually runs.” Weak fairness would exclude it if $B$ is continuously enabled; without that explicit assumption, the path is legal and the liveness property is false.
12. **Why can modeling $x:=x+1$ as atomic hide a lost update?** In an implementation each process may read $x$, increment a local value, then write. From $x=0$, both can read zero, then both write one, losing an increment. A single atomic transition permits only serial results $0\\to 1\\to 2$, so it removes precisely the intermediate states that expose the race.
13. **Why must reachability start from every state in $I$, and how can BFS do so?** A safety failure may be reachable only from one allowed initialization, so choosing a convenient single state proves the wrong contract. Multi-source BFS initializes the queue and visited set with every state in $I$ at distance zero; its usual invariant and shortest-trace proof then apply from the set of initial states.
14. **Under total-transition semantics, how should a deadlocked state be represented, and what must a report disclose?** Add a self-loop so every path can be infinite, then interpret temporal formulas on the resulting stuttering behavior. The report must disclose this completion because it affects next and liveness formulas. An alternative finite-path semantics is possible, but mixing the two conventions makes results uninterpretable.
15. **What must be checked before accepting a counterexample trace $s_{0},\\ldots,s_{k}$?** Check $s_{0}$ belongs to the allowed initial set, each adjacent pair belongs to the transition relation, every state satisfies its domain and labeling rules, and $s_{k}$ violates the stated property in the stated semantics. For an abstract model, additionally establish a compatible concrete realization or label the trace spurious.
16. **What kind of theorem justifies partial-order reduction for a concurrent safety property?** One must show that ignored reorderings of independent actions preserve the observations relevant to the property and that the reduced search retains a representative of every behavior class capable of reaching bad. Independence normally requires that either action preserves the other's enabledness and their executions commute. Merely exploring one convenient schedule is not a reduction proof.

## Project: explicit-state checker with semantic variants

Implement a dependency-free explicit-state checker for a small guarded-command language. Support multiple initial states, labeled transitions, BFS safety checking with shortest counterexample reconstruction, backward $EF$, greatest-fixed-point $EG$, and an option that either completes deadlocks with self-loops or reports finite maximal paths. Build independent checkers for traces and fixed-point certificates. Model a two-process lock twice: once with atomic acquire and once with split read/write steps that expose a race. State and test mutual exclusion, reachability, and a response property both with and without a declared fairness assumption. The final dossier must give state counts, transition counts, fixed-point iteration tables, minimized counterexamples, invariants where available, and a limitations section distinguishing model checking, abstraction validation, bounded evidence, and claims about deployed code.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=hoare-logic-termination) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};