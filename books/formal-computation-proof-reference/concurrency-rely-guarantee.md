
# Concurrency and Rely–Guarantee Reasoning

A sequential invariant is usually preserved by the programme's own next step. A concurrent thread can be paused while another thread changes shared state, so its assertion must survive those environment steps as well. Rely–guarantee reasoning records which interference a component assumes and which interference it promises. This chapter proves a finite-execution composition theorem for a precise transition model. The theorem concerns safety; liveness needs additional scheduling and termination arguments.

## Shared states and atomic transitions

A global configuration consists of shared data and the control locations and private variables of every thread. For two threads, write T₁ and T₂ for their respective transition relations on global configurations. A transition attributed to thread one changes its control and whatever shared data its atomic instruction permits, leaving thread two's private state and control unchanged. The analogous condition holds for thread two. Every system step belongs to one of these relations.

The word atomic is a modeling choice. Reading a shared integer into a private register, incrementing that private register, and writing it back may be three transitions. An atomic fetch-and-add is one different primitive with a stronger state transition. Replacing the first implementation with the second in a proof changes the programme model. Sequential consistency means executions are interleavings of these chosen atomic actions with one global state order. Weak memory needs its own states and transition rules, perhaps including buffers and propagation events.

A safety assertion is a predicate on configurations. For a relation R, call assertion I **R-stable** when I(s) and R(s,t) imply I(t). This is a one-step property. Induction on the length of an R-path shows that stability also preserves I across any finite number of environment steps. Reflexive steps require nothing beyond I implying itself. Stability does not say I remains true under arbitrary modifications of the shared state.

## A local judgement with interference

A local reasoning judgement has initial assertion P, invariant I, rely relation R and guarantee relation G. Its explicit obligations are:

1. Every P-state satisfies I.
2. I is stable under R.
3. For every programme step T(s,t) with I(s), the target satisfies I(t) and the step belongs to G.
4. At a terminal control location, I implies the desired local postcondition Q.

These obligations are enough to prove a local finite-prefix theorem: from P, an arbitrary interleaving of the thread's own T-steps and environment R-steps remains inside I, and every own step meets G. Prove this by induction on the prefix length. The zero-step prefix uses initialisation. A final environment step uses stability, and a final own step uses the programme-step obligation. At a terminal endpoint use the fourth obligation.

The theorem permits the environment to move after the thread terminates. If Q must still hold at a later observation time, either prove Q stable too or retain I as the assertion until that observation. A postcondition about a shared counter's exact value can hold at the return event and fail after another thread increments it. Observation time is part of the contract.

## Parallel composition proved directly

**Theorem 6.1 (Two-thread safety composition).** For each i in {1,2}, let Iᵢ be initialised by a common system precondition P. Suppose Iᵢ is stable under Rᵢ and every Tᵢ-step from an Iᵢ-state preserves Iᵢ and belongs to Gᵢ. Suppose also G₁ is a subrelation of R₂ and G₂ a subrelation of R₁. Then every finite interleaving from P satisfies I₁ and I₂. Every step of thread i meets Gᵢ.

*Proof.* Induct on the number of system transitions. Initially P supplies both invariants. Assume both hold before the next step. If thread one moves, its own obligation preserves I₁ and establishes G₁ for that step. Inclusion G₁⊆R₂ makes the same step allowed interference for thread two, so R₂-stability preserves I₂. The case of a thread-two step is symmetric, using G₂⊆R₁. Thus each possible next step preserves the conjunction, and the appropriate own obligation proves its guarantee. Induction gives the claim for every finite prefix. ∎

Guarantee inclusions may be weakened to inclusions only on reachable states satisfying the combined invariants, provided the proof states and uses that restriction. The unconditional version is easier to read but may require broader rely relations. Adding an independent external environment E requires its steps to lie in both relies, or a separate proof that E preserves both invariants. An omitted environment is an omitted hypothesis, not an implicit benign scheduler.

The theorem extends to finitely many threads: each other thread's guarantee must be included in a component's rely. In the induction step, the moving thread uses its own preservation, while every remaining thread uses stability against that moving guarantee. This proof explains both compositionality and the compatibility obligations. It does not assume the desired invariants hold merely because every author wrote one down.

## Worked example 1: a stable lower bound

Let shared x start at zero. Thread one performs n atomic increments and thread two performs m atomic increments, where n,m are fixed nonnegative integers. Include completed-increment counters a and b as private ghost state. An atomic thread-one step changes (x,a,b) to (x+1,a+1,b); thread two changes it to (x+1,a,b+1). The counters track actual transition counts and are not executable synchronization.

Use common invariant x=a+b, with 0≤a≤n and 0≤b≤m. Both kinds of step preserve the equation because each changes x and exactly its own counter by one. Each thread can use as rely the other thread's stated increment relation and as guarantee its own. The invariant is stable under the matching rely. Composition therefore proves the equation at every finite prefix. When both controls are terminal, a=n and b=m, so x=n+m.

The simpler property x≥a is stable under the other thread's increments but loses the exact accounting needed for the final equality. Conversely, x=a alone is not stable when thread two may increment. A useful assertion must both survive interference and retain enough information to imply the chosen postcondition. Ghost counters supply explanatory information without granting an implementation more atomicity than its transition system has.

## Worked example 2: lost update is a real interleaving

Replace each atomic increment by read, local addition, write. Let x=0 and each thread increment once. Thread one reads zero into r₁. Thread two reads zero into r₂. Both privately compute one. Thread one writes one, then thread two writes one. Both calls finish but x=1, so the atomic accounting postcondition x=2 is false.

The invariant x=a+b cannot be preserved if a counts completed high-level increments. At thread two's final write, its completion counter increases while x does not. No choice of rely syntax repairs this failed programme-step obligation. One must use a lock, an atomic read-modify-write primitive, or a different specification. The example gives a finite counterexample to a universal safety claim; it is not evidence that every interleaving loses an update.

Even a thread's assertion x=r₁ after its read is not stable under a rely allowing the other thread to write. It may still be a fact about the earlier read event, represented by a ghost snapshot, but it is no longer an equality with current shared x. Distinguishing a historical observation from current shared state prevents a common invalid proof step.

## Protecting an invariant with a lock

Model a lock owner as none, one or two. Atomic acquire by i is enabled only at none and changes owner to i. Atomic release by i requires owner=i and changes it to none. The data operations guarded by the lock occur only while that owner holds it. This is an abstract mutual-exclusion primitive; implementing it with hardware instructions requires refinement to these transitions.

The ownership invariant says that at most one thread is in its protected region and that a thread in that region has the matching owner. Initially none is in the region. Acquire establishes the entering thread's ownership and disables the other's acquire. Internal protected steps do not alter owner. Release removes the first thread's region status before enabling another acquisition. By induction on all transition cases, the invariant is preserved. Therefore two protected executions cannot overlap in this abstract model.

For shared data invariant J, require J whenever the lock is free and at every release. A holder may temporarily break J between its protected atomic steps, because no other holder can inspect the representation through this interface. A nonholder's rely cannot pretend J holds during such a temporary break unless it also knows the lock is free. Assertions often need the conditional owner=none⇒J, or a resource invariant whose meaning explicitly tracks ownership transfer.

## Worked example 3: a two-field representation

Shared fields balance and mirror satisfy J: mirror=2·balance when free. Under the lock, increment executes balance:=balance+1 and then mirror:=mirror+2. Starting with (3,6), the intermediate pair is (4,6), which violates J, and the final pair is (4,8), which restores it. A proof requiring J after every primitive write would reject this implementation unnecessarily.

The protected resource contract instead permits the current owner to hold a temporary representation predicate describing which instruction has occurred. Before release it must recover J. A second thread can acquire only after release, so its protected read observes (3,6) before the operation or (4,8) after it. An unlocked reader is outside this guarantee and can observe the intermediate pair. That limitation follows from the transition model; calling the data structure locked does not prove that every caller actually obeys its interface.

## Safety does not imply fairness or termination

A scheduler can always choose thread one while thread two is enabled. No finite prefix need violate the safety invariant, yet thread two can starve. Weak fairness requires a continuously enabled action eventually to execute. Strong fairness requires an action enabled infinitely often eventually to execute; these differ when an action is repeatedly enabled and disabled.

Even weak fairness alone does not make every waiting lock acquire succeed: an acquire may be enabled only in the short gaps between releases and another thread's reacquisition, rather than continuously. A fair lock queue changes the algorithm and supplies an ordering argument. A termination proof may use a rank on queued predecessors together with assumptions that each holder eventually releases. Without those assumptions, the safety theorem still holds while progress fails.

Two locks give a separate obstruction. Thread one can hold A and wait for B, while thread two holds B and waits for A. Both obey mutual exclusion and protected-data invariants, but neither requested acquire is enabled. Fairness cannot schedule a disabled action. A global strict acquisition order excludes this cycle: following a hypothetical waiting cycle would give a strictly increasing sequence of lock ranks returning to its starting rank, contradicting irreflexivity of strict order. This proves absence of this particular finite lock-wait cycle under the stated discipline, not termination of arbitrary protected computations.

## From interference proofs to real memory models

The interleaving theorem is mathematical once T₁ and T₂ are fixed. A language or processor model may admit observations outside an uncomplicated shared-store interleaving. To apply the result, either use a language-level synchronization theorem with its hypotheses satisfied or formalise the weaker model directly. Release/acquire synchronization and data-race freedom have precise language-specific conditions; they are not interchangeable slogans.

Similarly, linearizability relates completed call histories to an abstract sequential object and preserves real-time order of nonoverlapping operations. Mutual exclusion can help choose a linearization point, but an incorrect critical section is still incorrect. A verification argument should identify the data invariant, the interference contract, the history observation and any progress assumptions individually. The final capstone returns to how these theorem boundaries compose.

## Sequential composition inside one interfering thread

A thread can itself be built from two command fragments. Suppose the first fragment maintains an R-stable assertion until it establishes midpoint M, and the second fragment assumes M and maintains its own R-stable invariant. An environment can move after the first fragment finishes and before the second begins. Therefore M must survive that gap, either by being R-stable or by being implied by a stable assertion retained across the control boundary.

With that condition, a finite execution of the sequence splits at the control change. The first fragment's local prefix theorem establishes M. Any intervening R-steps preserve it. The second fragment's local theorem then applies to its input. If both fragments' own steps belong to a common guarantee G, every own step of the composite belongs to G too, since each is a step of one of those fragments. This proves the elementary sequential composition argument under interference.

Without stable handoff, the ordinary sequential rule can fail. A first fragment reads shared x into private r and establishes r=x. If the environment then increments x, a second fragment that assumes r=x starts outside its claimed precondition. It may still use the stable historical assertion that r equals the value read earlier, provided the specification records that history explicitly. The correction concerns the assertion's meaning and lifetime, not the amount of time a scheduler happens to pause.

## Loop variants can be undone by the environment

Consider a thread repeatedly decrementing positive shared x. Its own body terminates and strictly decreases x, but a rely allowing other threads to increment x between iterations can prevent termination forever. The environment can restore x to one after each decrement to zero before the next guard check. The local variant then does not form a decreasing sequence across complete thread observations.

A sound concurrent termination argument might require environment steps never to increase the rank, with strict decrease on enough scheduled own steps and a fairness condition ensuring those steps occur. Alternatively it can use a budget transferred between components, a queue position or a more global well-founded measure. Each option needs its actual preservation and scheduling premises. Reusing the sequential variant theorem while ignoring allowed interference leaves its key descent hypothesis unproved.

For the simple nonincreasing-rely version, assume each true-guard own body reduces a natural rank and all intervening rely steps do not increase it. If the thread is guaranteed to complete each enabled body and obtain another guard check, an infinite sequence of true iterations would yield infinitely many strict decreases, impossible in the naturals. The thread must therefore reach a false guard. The scheduling assumption and body-termination assumption are used to turn infinitely delayed work into actual iterations; without them the rank argument alone says nothing about starvation.

## An atomic specification needs an interface boundary

A lock-protected operation can often be treated as one abstract atomic action if clients observe the protected data only through that interface. Choose a point after its final representation update and before release, or another justified point within its call interval, at which the abstract effect is recorded. Calls waiting for the lock contribute no abstract update. Because protected regions do not overlap, ordering operations by these points respects real-time order of nonoverlapping calls.

To complete a linearizability proof, show that each chosen update satisfies the abstract object's sequential operation and that returned values match it. The lock's mutual-exclusion invariant supplies the nonoverlap argument; it does not supply the data-refinement argument. If an unlocked observer can inspect intermediate fields, the chosen interface has been violated and that observer's trace may distinguish the implementation from the atomic object. The theorem must either include that observer in the model or explicitly exclude such accesses through its preconditions.

This interface reasoning complements rely–guarantee invariants. The latter establish permitted state interference, while the history relation explains why each call can be viewed as one abstract action. A complete concurrent correctness statement identifies both where they are needed and which progress claims, if any, are additionally proved.

## Exercises with complete solutions

### 1. Finite rely closure {#concurrency-rely-guarantee-ex-1}

Prove that an R-stable predicate survives every finite R-path.

<details><summary>Hint 1</summary>

Choose the path length as induction parameter.

</details>
<details><summary>Hint 2</summary>

Separate the final transition from its preceding prefix.

</details>
<details><summary>Solution</summary>

For length zero the endpoint is the initial state. If the predicate holds after k transitions, stability applied to the next R-transition gives it after k+1. Induction proves the statement. No closure of R under composition is required because stability is reused at each edge.

</details>

### 2. Exact and lower-bound assertions {#concurrency-rely-guarantee-ex-2}

The environment may replace x by x+1 without changing a. Which of x=a and x≥a is stable?

<details><summary>Hint 1</summary>

Apply one allowed environment step to an equality state.

</details>
<details><summary>Hint 2</summary>

An increasing left side preserves a lower bound.

</details>
<details><summary>Solution</summary>

Equality fails: x=a becomes x=a+1. The lower bound holds because x≥a implies x+1≥a. If the rely also permitted decrements, this second conclusion would need a new argument and could fail at x=a.

</details>

### 3. Compatibility direction {#concurrency-rely-guarantee-ex-3}

Why does composition require G₁⊆R₂?

<details><summary>Hint 1</summary>

View thread one's own step from thread two's perspective.

</details>
<details><summary>Hint 2</summary>

Stability can be applied only to a step the rely permits.

</details>
<details><summary>Solution</summary>

Thread one's preservation proves its step belongs to G₁. Thread two needs that same step to belong to R₂ to invoke stability. The inclusion gives precisely that implication. Reversing it would allow thread one to make steps outside thread two's assumptions.

</details>

### 4. Atomic sum {#concurrency-rely-guarantee-ex-4}

Prove the final value when one thread makes four atomic increments and the other seven, starting at x=5.

<details><summary>Hint 1</summary>

Keep the initial offset in the accounting invariant.

</details>
<details><summary>Hint 2</summary>

Use x=5+a+b and substitute terminal counts.

</details>
<details><summary>Solution</summary>

Initially a=b=0 and x=5. Either step raises x and its own counter by one, preserving x=5+a+b. At joint termination a=4 and b=7, hence x=16. This is conditional on those being the only writes and on each increment being the stated atomic primitive.

</details>

### 5. A safe lost-update execution {#concurrency-rely-guarantee-ex-5}

Can the read/add/write implementation remain type safe in the lost-update trace?

<details><summary>Hint 1</summary>

Inspect value types at every read and write.

</details>
<details><summary>Hint 2</summary>

The postcondition counts completed operations, not value types.

</details>
<details><summary>Solution</summary>

Yes. Every shared and private value is an integer and every instruction accepts integers, so type preservation and progress can hold. Both writes returning one violate the intended final sum while causing no typed stuck state. Functional concurrency correctness is stronger than this type-safety property.

</details>

### 6. Postcondition observation time {#concurrency-rely-guarantee-ex-6}

A thread returns after setting x=3. Can its client assume x=3 after arbitrary other-thread steps?

<details><summary>Hint 1</summary>

Ask whether the assertion is stable under the rely.

</details>
<details><summary>Hint 2</summary>

Choose an allowed write of a different value.

</details>
<details><summary>Solution</summary>

Only if those steps preserve x=3 or access is protected appropriately. A rely permitting x:=4 immediately falsifies the assertion. A contract may instead assert that x equalled three at the return event, which is a historical fact, or transfer exclusive ownership preventing later writes during the client's use.

</details>

### 7. Conditional protected invariant {#concurrency-rely-guarantee-ex-7}

Why is owner=none⇒mirror=2·balance compatible with the intermediate pair (4,6)?

<details><summary>Hint 1</summary>

The implication has a hypothesis about ownership.

</details>
<details><summary>Hint 2</summary>

A holder is executing between its acquire and release.

</details>
<details><summary>Solution</summary>

At that intermediate point owner is the current thread, so owner=none is false and the implication holds. Before release the holder must restore (4,8), making the equation true when owner becomes none. An unlocked reader cannot infer the equation merely from the conditional invariant.

</details>

### 8. Fairness and deadlock {#concurrency-rely-guarantee-ex-8}

Does strong fairness resolve the two-lock circular wait?

<details><summary>Hint 1</summary>

Fairness concerns enabled actions.

</details>
<details><summary>Hint 2</summary>

Both requested locks remain owned by the other waiting thread.

</details>
<details><summary>Solution</summary>

No. Neither requested acquire is enabled, so the premise that an action is enabled infinitely often is absent. The circular wait can satisfy fairness vacuously while never progressing. Preventing the cycle requires an algorithmic discipline or recovery mechanism, not merely a fair scheduler.

</details>

### 9. Ordered-lock contradiction {#concurrency-rely-guarantee-ex-9}

Prove that a finite wait cycle is impossible if each thread requests only locks strictly above every lock it holds.

<details><summary>Hint 1</summary>

Follow the cycle through the lock being awaited and its owner.

</details>
<details><summary>Hint 2</summary>

Each next requested lock has strictly larger rank than the previous held lock.

</details>
<details><summary>Solution</summary>

In a wait cycle let Lᵢ be the lock held by thread i that the preceding thread awaits. Thread i awaits Lᵢ₊₁ while holding Lᵢ, so rank(Lᵢ)<rank(Lᵢ₊₁). Following the finite cycle and transitivity gives rank(L₁)<rank(L₁), impossible. This excludes those cycles; a thread that loops forever inside a critical section remains a different obstruction.

</details>

### 10. An external environment {#concurrency-rely-guarantee-ex-10}

Extend Theorem 6.1 with external steps E that belong to both relies.

<details><summary>Hint 1</summary>

Add one case to the finite-prefix induction.

</details>
<details><summary>Hint 2</summary>

No own guarantee is needed for an external step, but both invariants need preservation.

</details>
<details><summary>Solution</summary>

The two thread cases are unchanged. In the E case, inclusion E⊆R₁ and E⊆R₂ lets stability preserve I₁ and I₂ simultaneously. Hence all extended finite prefixes satisfy both invariants, and each thread's own steps still satisfy its guarantee. No theorem is obtained for an external transition outside these permitted relies without an additional preservation premise.

</details>

## Chapter summary

Rely relations describe allowed interference and guarantees describe a component's own steps. Stable invariants and compatible guarantees prove safety of every finite interleaving by induction. Atomicity, memory model and observation time determine what that theorem means. Fairness, deadlock freedom and functional correctness need their stated additional arguments.

## Sources

The rely–guarantee method originates with Cliff Jones's compositional reasoning for interfering programmes. The transition-system proof and examples here are new exposition of its elementary safety principle. Glynn Winskel, *The Formal Semantics of Programming Languages*, supplies the semantic background; Christel Baier and Joost-Pieter Katoen, *Principles of Model Checking*, treats interleavings and temporal progress assumptions. No implementation or scheduling experiment is reported.
