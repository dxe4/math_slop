var e=`---
id: course-mathematics-computer-science-standard
title: "Mathematics for Computer Science: Proofs, Machines, and Verified Systems"
level: undergraduate
estimated_minutes: 900
license: CC BY-SA 4.0
---

# Mathematics for Computer Science: Proofs, Machines, and Verified Systems

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-mathematics-computer-science-standard/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This is a guided first course in the mathematical structures behind reliable computation. It is shorter than the active [Proof-First Mathematics for Computer Science manuscript](#/item/book-algorithms-computation-proof-desk): the course supplies a semester route, weekly problems, and one connected capstone; the manuscript supplies the growing long-form treatment.

The course asks one question in many forms:

> What evidence turns a computation into a justified claim?

Sometimes the evidence is an invariant, a recurrence, a certificate, a probability bound, a shortest counterexample, a geometric predicate, an error-correcting syndrome, or a model-checking trace. Each supports a different contract.

## Audience and prerequisites

You should be comfortable rearranging algebraic expressions, reading functions, and following a short program. No prior automata or formal-verification course is assumed. Elementary probability and matrix ideas are introduced locally but not developed from first principles.

### Diagnostic

Before starting, try:

1. Negate “every input has at least one valid output.”
2. Explain why a loop tested on a million cases is not thereby proved correct.
3. Sum $1+2+\\ldots +(n-1)$.
4. Distinguish a graph path from an edge.
5. Compute the probability of at least one head in two independent fair tosses.

Answers: (1) some input has no valid output; (2) tests cover selected executions, while the claim quantifies over all allowed inputs; (3) $n(n-1)/2$; (4) a path is an ordered sequence of incident edges/vertices; (5) $3/4$, most easily by complement.

If three answers feel unfamiliar, begin with proof foundations, induction and recursion, graph theory, and conditional probability in the Atlas before Module 2.

## Course contract

By the end, you will be able to:

- state input, output, termination, resource, and error contracts separately;
- prove iterative and recursive algorithms with invariants and variants;
- analyze worst-case, expected, and amortized cost under named models;
- build and compare finite automata and explain stack and Turing-machine boundaries;
- use reductions without reversing their direction;
- distinguish computability, efficient decidability, randomized success, and approximation;
- compute basic entropy, code-distance, geometric, graphics, and quantum examples;
- specify finite-state safety and return a valid counterexample trace;
- describe exactly what a formal result does not establish about a deployed system.

The 900-minute route uses the companion book for sustained work:

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Proof and algorithms | 1–3 | [Claims and specifications](#/item/book-algorithms-computation-proof-desk?chapter=claims-counterexamples-specifications), [loop reasoning](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning), and [cost analysis](#/item/book-algorithms-computation-proof-desk?chapter=cost-amortization-lower-bounds) | Contract, invariant, termination, and cost portfolio |
| 2. Languages and limits | 4–5 | [Finite automata](#/item/book-algorithms-computation-proof-desk?chapter=finite-automata-regular-languages) and [reductions and limits](#/item/book-algorithms-computation-proof-desk?chapter=machines-reductions-limits) | Automaton certificate and reduction-direction audit |
| 3. Uncertainty and information | 6–7 | [Randomness and approximation](#/item/book-algorithms-computation-proof-desk?chapter=randomness-approximation) and [information and coding](#/item/book-algorithms-computation-proof-desk?chapter=information-compression-coding) | Failure-probability bound and code-distance calculation |
| 4. Geometry and emergence | 8–9 | [Computational geometry and graphics](#/item/book-algorithms-computation-proof-desk?chapter=computational-geometry-graphics), followed by the cellular-automata lab | Exact predicate test and bounded-enumeration claim |
| 5. Verification and synthesis | 10–12 and capstone | [Semantics and types](#/item/book-algorithms-computation-proof-desk?chapter=semantics-types-specifications), [model checking](#/item/book-algorithms-computation-proof-desk?chapter=transition-systems-model-checking), and [quantum models](#/item/book-algorithms-computation-proof-desk?chapter=quantum-states-algorithms) | Four-layer verified-system capstone |

## Module 1: claims, contracts, and proof patterns

A computational claim begins with quantifiers. “For every nonempty array of comparable values, return an occurring maximum” differs from “usually return a large value.” Write preconditions, postconditions, and frame conditions.

Practice direct proof, contrapositive, contradiction, cases, and counterexample. For every theorem, keep a **hypothesis ledger**. A counterexample should target one omitted hypothesis: unsorted input for binary search, a negative edge for Dijkstra’s method, empty data for division by count, or overflow for integer arithmetic.

**Worked check.** To prove composition of injective functions is injective, assume $g(f(x))=g(f(y))$; injectivity of $g$ gives $f(x)=f(y)$, then injectivity of $f$ gives $x=y$.

**Lab task.** Take a familiar library function and write allowed inputs, output relation, mutation, failure, and cost model without looking at its implementation.

## Module 2: induction, recursion, and invariants

Induction proves a property across generated steps. A loop invariant is induction indexed by iterations. A recursive proof follows decreasing input structure.

For linear array sum, invariant after processing $i$ items is

$\\mathrm{total}=\\sum_{j=0}^{i-1}a[j]$ and $0\\le i\\le n$.

Initialization uses the empty sum. One update preserves it. At exit $i=n$, it gives the result. Total correctness needs termination: variant $n-i$ is a nonnegative integer decreasing each step.

For recursive tree algorithms, state both functional result and structural effect. “Returns a sorted list” is too weak for sorting unless the output also preserves the input multiset.

**Failure clinic.** An invariant can be true but too weak. “Array length remains $n$” does not establish sorting. A decreasing real sequence need not terminate; use a well-founded measure.

## Module 3: algorithms, structures, and cost

Analyze binary search, breadth-first search, heaps, and a resizable array. Distinguish:

- worst case over inputs;
- expectation over declared random choices or input distribution;
- amortized average over a deterministic operation sequence;
- bit cost versus unit-cost word operations.

A doubling array has occasional linear resize but constant amortized append: total copies across $n$ appends form a geometric sum below $2n$.

Breadth-first search returns minimum **edge-count** distance in an unweighted graph. Its parent chain certifies a path; the frontier invariant proves no shorter edge-count path exists. Source-local traversal of unsorted adjacency lists costs $\\Theta(|R|+|E_R|)$ for reached vertices $R$ and their outgoing entries $E_R$, assuming constant amortized queue, discovery and entry-access costs; initializing all vertices adds $\\Theta(|V|)$. The full-graph $O(|V|+|E|)$ bound is an upper bound. BFS from an isolated source inspects one vertex and no entries even with an unreachable clique on $q\\ge2$ vertices, where $|E|=q(q-1)/2$.

**Programming task.** Implement a queue or heap without dependencies. Put its representation invariant in comments beside each update and test empty, singleton, duplicate, and long operation sequences.

## Module 4: finite automata and formal languages

A deterministic finite automaton is a finite state set, alphabet, total transition function, initial state, and accepting set. Extend transitions from symbols to words by recursion. Prove a machine correct by naming what each state means after every prefix.

Nondeterminism tracks a set of possible states; it is existential choice, not randomness. Subset construction proves NFAs and DFAs recognize the same languages, though representation size can grow exponentially.

Product-state search decides DFA equivalence. A reachable pair with opposite acceptance yields a distinguishing word. Exhaustion proves agreement on every word.

Use Myhill–Nerode distinguishable prefixes or the pumping lemma with correct quantifier order to show finite memory is insufficient. A stack recognizes nested parentheses; context-free grammars describe recursive syntax and parse trees.

**Live work.** Use the [Automata and Verification Proof Studio](#/item/visual-lab-automata-verification) to predict then verify a shortest distinguishing word.

## Module 5: computability, reductions, and complexity

A decider halts on every input; a recognizer may run forever on nonmembers. Diagonalization proves there is no general halting decider. This does not prevent termination proofs for restricted languages or individual programs.

To transfer hardness from $A$ to $B$, construct a computable or polynomial-time map $f$ such that

$x\\in A iff f(x)\\in B$.

Then a solver for $B$ would solve $A$. The direction is from the known hard source to the target.

$P$ contains polynomial-time decision problems. $NP$ contains problems whose yes-instances have polynomial-size, polynomial-time verifiable certificates. To prove $NP$-completeness, prove membership and correctly directed hardness. An exponential known algorithm is not a hardness proof, and this course never assumes a resolution of P versus NP.

**Proof repair.** Diagnose: “Problem X reduces to SAT, so X is NP-hard.” This direction shows X is no harder than SAT; it does not establish hardness of X.

## Module 6: randomized and approximation algorithms

A Las Vegas algorithm is always correct with random cost. A Monte Carlo algorithm has bounded cost and bounded error. Name whether probability is over internal coins, sampled data, or inputs.

Indicator variables and linearity of expectation analyze collisions, cuts, and comparisons without requiring independence for the expectation sum. Amplification does require appropriate independence.

Approximation guarantees compare feasible output to optimum under a convention. The doubled-tree metric traveling-salesperson argument uses minimum spanning tree lower bound, Euler walk, and triangle-inequality shortcutting. Without triangle inequality, the guarantee fails.

**Experiment.** Run a seeded randomized cut routine over many seeds, record cut sizes, then separately prove expected cut size is $|E|/2$. Simulation illustrates a distribution; the indicator proof establishes the theorem.

## Module 7: information, codes, and security

Entropy $H(X)=-\\sum_x p(x)\\log_{2}p(x)$ quantifies uncertainty relative to a probability law. Prefix-code lengths obey Kraft’s inequality. A code’s Hamming distance controls detection and unique correction: minimum distance $d$ corrects every pattern of up to $\\lfloor(d-1)/2\\rfloor$ bit errors.

A syndrome locates an error coset, not automatically one unique error. Channel assumptions and decoder rules complete the claim.

Cryptographic correctness and security are separate. Security quantifies adversarial advantage in an experiment under resource and hardness assumptions. One-time-pad secrecy requires uniform secret key, message-length key, and no reuse. Toy modular arithmetic is educational but not deployment security.

**Audit task.** Given an encryption description, list key generation, randomness, adversary observations, success event, resource bound, and deployment properties not implied.

## Module 8: computational geometry and graphics

The orientation determinant

$(b_x-a_x)(c_y-a_y)-(b_y-a_y)(c_x-a_x)$

is a signed predicate underlying hulls and intersections. Near zero, floating rounding can change sign. Robust algorithms state degeneracy policy and arithmetic model.

Computer graphics composes transformations, homogeneous projection, clipping, rasterization, interpolation, visibility, shading, and sampling. Each stage changes the mathematical object. Barycentric weights encode points in a triangle and sum to one. Perspective-correct interpolation is not ordinary screen-space linear interpolation for depth-varying attributes.

Aliasing is a sampling failure, not simply an ugly edge. Filtering controls frequencies under a signal model; it cannot reconstruct arbitrary lost information.

**Case.** Compare an exact integer orientation result with a floating calculation after rescaling coordinates. Record when sign is stable and when higher precision or exact predicates are required.

## Module 9: cellular and emergent computation

Cellular automata apply one finite local transition table synchronously across space. Finite width implies eventual repetition because only finitely many global rows exist. Infinite lattices support richer questions.

Use the [Cellular Automata Rule Forge](#/item/visual-lab-cellular-automata) to expose all eight binary radius-one cases, edit a seed, and compare visual pattern with exact row tables.

Do not infer randomness, chaos, or computational universality from visual complexity alone. Formulate a finite property—fixed point, periodic orbit, conserved count, symmetry, reachable pattern—and support it with proof or exhaustive bounded computation whose scope is stated.

## Module 10: semantics, Hoare logic, and types

Operational semantics defines program steps on syntax and state. A Hoare triple $\\{P\\}C\\{Q\\}$ gives partial correctness: if $C$ starts in $P$ and terminates, it ends in $Q$. Assignment works by backward substitution. Loops require invariants; total correctness adds a well-founded variant.

Types rule out selected malformed or stuck states in a named calculus. Progress and preservation do not imply termination or business correctness. Refinements can express value predicates at increased proof cost.

**Worked loop.** For repeated-subtraction division with $a\\ge 0,b>0$, invariant $a=bq+r$ and $r\\ge 0$; guard $r\\ge b$; update $r:=r-b,q:=q+1$; variant $r$. Exit gives $0\\le r<b$.

## Module 11: finite-state verification

Model a system as states, initial set, transition relation, and labels. Safety $\\mathbf{AG}\\,\\neg\\,\\mathit{bad}$ reduces to reachability of bad states. Breadth-first search yields a shortest transition counterexample or exhaustive finite proof.

Liveness and fairness are separate. Bounded search proves no counterexample through a depth, not unbounded safety. Abstraction can introduce spurious behavior; atomicity choices can hide races.

**Modeling task.** Create safe and deliberately buggy versions of a two-process token model. Return exact counterexample states for the bug, then write an inductive ownership invariant for the safe version.

## Module 12: quantum computation claims

A pure qubit is $\\alpha|0>+\\beta|1>$ with squared magnitudes summing to one. Gates for closed systems are unitary. Measurement turns amplitudes into outcome probabilities; interference happens before measurement.

Multi-qubit states use tensor products and may be entangled. A quantum algorithm contract includes state preparation, gate or oracle model, measurement, success probability, and resource. Query speedup may omit oracle construction and data loading. Noise and fault-tolerance overhead belong to implementation claims.

**Calculation.** Apply Hadamard twice to $\\lvert0\\rangle$. After one gate the
state is $(\\lvert0\\rangle+\\lvert1\\rangle)/\\sqrt2$; linearity and opposite signs
in the second application cancel the $\\lvert1\\rangle$ amplitude and restore
$\\lvert0\\rangle$.

## Assessment pattern

Each module contributes:

- two retrieval checks;
- two standard derivations or traces;
- one proof or counterexample;
- one programming, modeling, or interpretation task;
- one cumulative connection to an earlier module.

Do not grade a correct number as sufficient when the task asks for hypotheses, invariant, error event, reduction direction, or model boundary.

## Capstone: one system, four evidence layers

Choose a deterministic recognizer or finite protocol small enough to enumerate.

1. **Specify:** define states, inputs/actions, initial states, acceptance or bad states, and atomicity.
2. **Implement:** write a dependency-free transition engine with structural validation.
3. **Test:** include boundaries, malformed inputs, an injected bug, and exact oracle traces.
4. **Verify:** prove DFA equivalence or finite safety by exhaustive product/reachability search; include a shortest counterexample when false.
5. **Analyze:** bound states, transitions, time, and space relative to representation.
6. **Connect:** state what refinement evidence would relate the model to deployed code.

The final report must visibly separate mathematical theorem, program test, computed finite result, and deployment assumption.

## Final solved checks

1. **Can an NFA branch be assigned equal probabilities?** That makes a new probabilistic model. Ordinary NFA acceptance asks whether some run accepts and has no branch probabilities.
2. **Does a safe bounded search through depth 100 prove safety?** Not generally; it excludes only shorter counterexamples unless 100 is a proved completeness bound.
3. **Can two different DFAs be equivalent?** Yes. State names, unreachable states, and redundant equivalent states can differ while the accepted language is identical.
4. **Does type safety prove a function sorts?** No. It rules out selected type errors; sortedness needs a functional specification and proof.
5. **Why is code distance not the same as channel capacity?** Distance is a finite code geometry; capacity is an asymptotic communication limit under a channel law and error criterion.

### Feedback map

If Checks 1 or 5 fail, separate the mathematical object from an added
probability or channel model. If Check 2 fails, state the explored depth and a
proved completeness bound separately. If Check 3 fails, compare accepted
languages rather than state names. If Check 4 fails, write type, functional,
resource, and deployment claims on different lines.


## Required source work: all twelve modules

The assessment pattern above has seven distinct slots per module. This roster
assigns all seven: **A1–A2** are retrieval, **A3–A4** are derivations or traces,
**B1** is a proof or counterexample, **B2** is implementation, modeling, or
interpretation, and **R** is a cumulative return. Prefix each label with its
module, for example **CS-M6-A3**. Complete A, compare and correct it, then
attempt B; return to R after an intervening module, or after the capstone for
Module 12. Record which answers you had already seen. These are public
self-study assignments, not fresh unseen forms or independently marked work.

A question number below means the numbered question under that chapter's
“Practice with solutions”, “Practice with fully explained solutions”, or
“Exercises with complete solutions” heading, not the chapter's section number.
Each named chapter supplies its answer at that question or worked section.
The local queue, cellular-automaton, token, and capstone keys follow the roster.
Keep the original twelve-module scope and capstone; the roster does not turn
one successful task into evidence for an entire subject.

1. **CS-M1 — [Claims and specifications](#/item/book-algorithms-computation-proof-desk?chapter=claims-counterexamples-specifications).**
   A1: Q2, negate exactly one output. A2: Q3, specify parser completeness.
   A3: Q5, negate the safety claim. A4: Q7, distinguish the two expected-runtime
   quantifiers. B1: Q8, refute the edge-count converse with a triangle and an
   isolated vertex. B2: reconstruct Section 10's stable duplicate-removal
   contract, including functional result, termination, cost assumptions and
   effects; this is the specified function for Module 1's library-function
   task. R: Q6, explain why the sorting contract needs permutation as well as
   order, connecting it to the entry diagnostic's universal claim.
2. **CS-M2 — [Induction and loop reasoning](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning).**
   A1: Q2, natural-number variants. A2: Q9, the halving-real variant boundary.
   A3: Q8, the three-way recurrence. A4: Q13, the lower-bound search trace.
   B1: reconstruct Section 16's full lower-bound binary-search proof, including
   bounds and both exclusion clauses. B2: Q7, diagnose marking DFS after
   recursion on a cycle. R: Q16, explain exactly why the midpoint update
   decreases the variant, and connect this termination obligation to the
   separate claims in Module 1.
3. **CS-M3 — [Cost analysis](#/item/book-algorithms-computation-proof-desk?chapter=cost-amortization-lower-bounds).**
   A1: Q1, expected versus worst-case hashing. A2: Q2, numeric value versus
   input length. A3: Q4, the exact nested-loop sum. A4: Q5, halving with
   linear work. B1: Q10, the maximum comparison lower bound. B2: **CS-QUEUE**
   below, the concrete queue implementation, invariant and operation-sequence
   task. R: Q7, the aggregate multipop bound; explain why Module 2's
   termination proof alone would not prove this operation-count bound.
4. **CS-M4 — [Finite automata](#/item/book-algorithms-computation-proof-desk?chapter=finite-automata-regular-languages).**
   A1: Q5, total transition tables. A2: Q6, the empty word.
   A3: reconstruct “Worked construction: endings 01”, with all six
   transitions. A4: Q4, derive the binary remainder transition.
   B1: Q8 and “Subset construction invariant”, prove language preservation.
   B2: Q7, interpret one NFA symbol step as set evolution.
   R: Q3 and “Worked product: equivalence and a witness”, connect the shortest
   distinguishing word to Module 3's unweighted BFS distance certificate.
5. **CS-M5 — [Machines, reductions and limits](#/item/book-algorithms-computation-proof-desk?chapter=machines-reductions-limits).**
   A1: Q2, recognizer versus decider. A2: Q3, the two NP-completeness
   obligations. A3: Q8, grammar and parse for balanced parentheses.
   A4: Q10, acceptance-to-halting construction. B1: Q9, the dovetailing
   decidability proof. B2: Q13, repair the exponential-algorithm hardness
   argument. R: Q15, relate the Boolean-state bound to Module 4's finite
   product: finite decidability need not mean polynomial cost in a compact
   encoding.
6. **CS-M6 — [Randomness and approximation](#/item/book-algorithms-computation-proof-desk?chapter=randomness-approximation).**
   A1: Q4, Las Vegas and Monte Carlo contracts. A2: Q16, the different
   independence requirements. A3: Q5, expected colliding pairs.
   A4: Q6, seven-run majority failure. B1: Q7, reservoir-sampling induction.
   B2: Q10, expected objective without feasibility. R: Q11, conditional
   expectation for maximum cut; connect the maintained lower bound to
   Module 2's invariant method and identify the random completion law.
7. **CS-M7 — [Information and coding](#/item/book-algorithms-computation-proof-desk?chapter=information-compression-coding)
   and [cryptographic definitions](#/item/book-algorithms-computation-proof-desk?chapter=cryptographic-definitions-adversaries).**
   A1: information Q1, self-information. A2: information Q3, deterministic
   entropy. A3: information Q8, Kraft's sum. A4: information Q12,
   distance-five detection and correction. B1: information Q11, the Hamming
   triangle inequality. B2: cryptography Q8, derive the pad-reuse leak.
   R: cryptography Q7, perfect secrecy of a fresh uniform pad; connect its
   probability law and no-reuse premise to Module 6's explicit randomness
   contract. Information Q14 supplies the additional zero-syndrome warning:
   codeword membership does not prove that no error occurred.
8. **CS-M8 — [Computational geometry and graphics](#/item/book-algorithms-computation-proof-desk?chapter=computational-geometry-graphics).**
   A1: Q9, homogeneous directions. A2: Q14, when ordinary interpolation
   agrees with perspective correction. A3: Q1, orientation and area.
   A4: Q12, centroid barycentric coordinates. B1: Q2, translation invariance.
   B2: Q7, explain the fixed-epsilon scaling failure.
   R: Q6, charge hull pushes and pops; connect this deterministic aggregate
   bound to Module 3's multipop argument.
9. **CS-M9 — CS-CA below.**
   A1: count the local binary radius-one input cases. A2: state the synchronous
   update and boundary convention. A3: trace seed 100 for two steps.
   A4: enumerate the complete eight-row global transition table.
   B1: prove a finite repetition bound. B2: compare synchronous and in-place
   updates on the same seed. R: prove the output-parity invariant and connect
   it to Module 4's parity-state meaning.
10. **CS-M10 — [Hoare logic](#/item/book-algorithms-computation-proof-desk?chapter=hoare-logic-termination)
    and [semantics and types](#/item/book-algorithms-computation-proof-desk?chapter=semantics-types-specifications).**
    A1: Hoare Q16, partial versus total correctness. A2: semantics Q12,
    progress versus termination. A3: Hoare Q1, the addition precondition.
    A4: Hoare Q5, the multiplication precondition. B1: reconstruct “Worked
    proof: integer quotient by subtraction”, including its guard and variant.
    B2: semantics Q16, the model-to-code translation obligation.
    R: Hoare Q13, explain aliasing through Module 1's frame contract.
11. **CS-M11 — [Transition systems and model checking](#/item/book-algorithms-computation-proof-desk?chapter=transition-systems-model-checking).**
    A1: Q1, safety through reachability. A2: Q9, a bounded-checking conclusion.
    A3: Q5, the EF least-fixed-point table. A4: Q6, the EG greatest-fixed-point
    table. B1: **CS-TOKEN-safe** below, the ownership invariant and exhaustive
    reachable-state table. B2: **CS-TOKEN-bug**, the exact shortest bad trace
    after removing one ownership guard. R: Q15, validate a trace and relate
    existential counterexample evidence to Module 5's quantified claims.
12. **CS-M12 — [Quantum states and algorithms](#/item/book-algorithms-computation-proof-desk?chapter=quantum-states-algorithms).**
    A1: Q7, the amplitude count. A2: Q12, the query-cost boundary.
    A3: Q1, normalization. A4: Q2, the measurement probabilities.
    B1: Q5, multiply the Hadamard matrices to prove H squared is identity.
    B2: Q16, interpret the hardware evidence. R: Q11, explain why adding
    amplitudes before squaring differs from Module 6's classical probability
    mixture; use Q4's relative-phase explanation when repairing an answer.

For each slot, compare the reasoning, hypotheses and conclusion with its
specific source solution. Correct a missing hypothesis before recomputing a
number. A1–A2 errors call for definitions; A3–A4 errors call for an explicit
calculation or trace; B1 errors call for the missing induction or
counterexample step; B2 errors call for the exact represented object and
boundary; R errors call for stating both the earlier tool and the new claim.
A repeated source idea is deliberate retrieval, not an additional unseen task.

For CS-M1-B2, specialize the source contract to finite arrays of safe integers.
Reject a non-array, a hole or a non-integer item with TypeError before producing
an output; do not coerce values or mutate the input. For example,
[3,1,3,2,1] must yield [3,1,2]. Validation adds linear work. The source
postcondition supplies coverage, uniqueness and first-occurrence order; its
expected-linear claim still requires the stated set-operation cost model.

### CS-QUEUE — implementation, invariant and feedback

Implement a bounded FIFO of safe-integer items with capacity c, where
1 <= c <= 1024. Enqueue on full returns "full"; dequeue on empty returns an
explicit empty result. The queue owns its backing array: clients do not mutate
its fields. Use a circular array, then test empty, singleton, duplicates,
wraparound and a long sequence before comparing this reference.

\`\`\`javascript
class CourseQueue {
  constructor(capacity) {
    if (!Number.isSafeInteger(capacity) || capacity < 1 || capacity > 1024) {
      throw new RangeError("capacity must be an integer from 1 through 1024");
    }
    this.cells = Array(capacity).fill(null);
    this.head = 0;
    this.size = 0;
  }
  enqueue(value) {
    if (!Number.isSafeInteger(value)) throw new TypeError("integer item required");
    const c = this.cells.length;
    if (this.size === c) return "full";
    this.cells[(this.head + this.size) % c] = value;
    this.size += 1;
    return "ok";
  }
  dequeue() {
    if (this.size === 0) return { status: "empty" };
    const value = this.cells[this.head];
    this.cells[this.head] = null;
    this.head = (this.head + 1) % this.cells.length;
    this.size -= 1;
    return { status: "ok", value };
  }
}
\`\`\`

**Key.** The representation invariant is $0\\le h<c$, $0\\le s\\le c$, with
integer items in the s logical positions. The abstraction is the sequence
$cells[(h+i)\\bmod c]$ for $0\\le i<s$. Initialization represents the empty
sequence. If not full, index $(h+s)\\bmod c$ is outside the occupied positions,
so enqueue appends exactly one item and preserves the old order. If nonempty,
dequeue returns logical item zero, advances h modulo c and reduces s;
the remaining positions represent exactly the old tail. Rejected full/empty
operations preserve the abstract state. Invalid capacity or item is rejected
before mutation. Each method has a finite straight-line body. Initialization
costs $\\Theta(c)$ time and space; each operation costs $O(1)$ under a word model
covering these bounded indices and items. This is a single-process contract.

For capacity 2, dequeue first returns empty. Enqueue 7 twice returns ok,ok;
enqueue 9 returns full. Dequeue returns 7; enqueue 9 returns ok and wraps;
the next dequeues return 7,9,empty. A singleton enqueue/dequeue returns exactly
its item. For every k from 0 through 99, enqueue k into an empty capacity-one
queue and immediately dequeue: every result is k and the final queue is empty.
These are expected results, not a report that your implementation ran.
Capacity 0 and item "7" must throw. A mutant omitting the enqueue modulus
fails the wraparound sequence at head 1, size 1: it writes index 2 instead of 0.
Repair index arithmetic, then repeat the invariant proof rather than trusting
only the trace.

### CS-CA — a complete bounded cellular-automaton key

Use three binary cells on a periodic ring, indexed 0,1,2. Rule 90 updates
$x'_i=x_{i-1}\\mathbin{\\mathrm{xor}}x_{i+1}$, with indices modulo 3.
A1 has $2^3=8$ local neighborhoods. For A2, all new cells read the same old
row; periodic wraparound and synchronous updates are part of the model.

A3 gives $100\\to011\\to011$. A4 is the entire global function:

| Old row | New row |
| --- | --- |
| 000 | 000 |
| 001 | 110 |
| 010 | 101 |
| 011 | 011 |
| 100 | 011 |
| 101 | 101 |
| 110 | 110 |
| 111 | 000 |

For B1, among the nine rows at times 0 through 8, two coincide because there
are only eight possible rows. Determinism makes the subsequent suffix repeat,
so eventual periodicity follows. This is a finite-ring theorem, not a theorem
about an infinite lattice or computational universality.

For B2, update positions 0,1,2 in place from 100. Position 0 becomes 0, making
the current row 000; the next two updates leave it 000. Synchronous update
instead gives 011. The disagreement identifies the atomicity assumption.

For R, XOR the three new cells. Each old cell appears twice, so the result is
zero. Thus every output has even parity. In this three-cell ring an
even-parity input is fixed, since $x_{i-1}\\mathbin{\\mathrm{xor}}x_{i+1}=x_i$.
Consequently every seed reaches a fixed point after at most one update, a
stronger result than B1's generic bound. Check the eight-row table against
both claims. If a trace disagrees, repair the boundary or update convention
before interpreting its appearance.

### CS-TOKEN-safe and CS-TOKEN-bug — complete model feedback

A state is $(owner,a,b)$ with owner A or B and critical-section flags a,b in
{0,1}. Initial state is $(A,0,0)$. One transition executes one atomic action.
A enters only when owner=A and a=0, setting a=1; A leaves when a=1, setting
a=0; A passes the token only when owner=A and a=0, changing owner to B.
B has the symmetric three actions. No action changes an unmentioned field.

**Safe key.** The invariant is
$a=1\\Rightarrow owner=A$ and $b=1\\Rightarrow owner=B$.
It holds initially. Entry requires the corresponding ownership; leaving
weakens its flag; passing requires the current owner's flag zero, and the
other flag is already zero by the invariant. Thus every action preserves it.
Since owner has one value, both flags cannot be one.

The complete reachable table is:

| State | All successors, with action |
| --- | --- |
| (A,0,0) | (A,1,0) by enter A; (B,0,0) by pass A |
| (A,1,0) | (A,0,0) by leave A |
| (B,0,0) | (B,0,1) by enter B; (A,0,0) by pass B |
| (B,0,1) | (B,0,0) by leave B |

All four rows are reachable from the initial row, and the table is closed
under every defined action: four states and six labeled transitions.
This is exhaustive finite safety evidence as well as an inductive proof.
The idle token-passing cycle can avoid both entry actions forever, so
eventual entry does not follow without a different property and assumptions.

**Bug key.** Remove only the owner=B guard on B's entry. The trace
$(A,0,0)\\xrightarrow{enter\\ A}(A,1,0)
\\xrightarrow{buggy\\ enter\\ B}(A,1,1)$ violates mutual exclusion.
It is shortest by transition count: initially neither flag is set, and one
action sets at most one flag. Starting with buggy B entry gives another
two-step witness after A enters. Check initial membership, each guard and
update, and the final two flags; a bad state without those transitions is
not a counterexample certificate. Splitting an atomic action or changing
initial states requires a new model audit.

## Required capstone CS-SYSTEM-A — one joined recognizer portfolio

The original capstone remains required. This concrete selection supplies its
complete public reference rather than leaving the system choice and feedback
unspecified. Independently attempt the portfolio, then compare all six original
obligations: specification, implementation, tests, verification, resources and
the model-to-deployment connection.

### CS-SYSTEM-A — Primary recognizer task

**Specification.** Recognize binary words with an even number of ones,
including the empty word. Reference states E,O start in E and accept E;
zero leaves parity unchanged and one toggles it. A candidate keeps parity
and a redundant last-symbol distinction, with states e0,e1,o0,o1. Start e0;
accept e0,e1. Every symbol consumption is one atomic step.

| Candidate state | On 0 | On 1 |
| --- | --- | --- |
| e0 | e0 | o1 |
| e1 | e0 | o1 |
| o0 | o0 | e1 |
| o1 | o0 | e1 |

#### CS-SYSTEM-A — Complete public model

**Implementation key.** This dependency-free JavaScript represents states by
indices, uses alphabet {0,1}, and validates complete tables of at most eight
states. Accepting flags must be Boolean. The transition tables are immutable
by contract during a call. A returned null means equivalent; an array,
including the empty array, is a distinguishing word.

\`\`\`javascript
function checkCourseDFA(model) {
  if (model === null || typeof model !== "object") throw new TypeError("DFA required");
  const { rows, start, accept } = model;
  if (!Array.isArray(rows) || rows.length < 1 || rows.length > 8) {
    throw new RangeError("one through eight states required");
  }
  const state = x => Number.isInteger(x) && x >= 0 && x < rows.length;
  if (!state(start) || !Array.isArray(accept) || accept.length !== rows.length ||
      !Array.from(accept).every(x => typeof x === "boolean") ||
      !Array.from(rows).every(row => Array.isArray(row) && row.length === 2 &&
        Array.from(row).every(state))) {
    throw new TypeError("invalid complete binary DFA");
  }
  return model;
}
function runCourseDFA(model, word) {
  const { rows, start, accept } = checkCourseDFA(model);
  if (!Array.isArray(word) || !Array.from(word).every(x => x === 0 || x === 1)) {
    throw new TypeError("binary word required");
  }
  let current = start;
  for (const bit of word) current = rows[current][bit];
  return accept[current];
}
function courseDFAWitness(first, second) {
  checkCourseDFA(first);
  checkCourseDFA(second);
  const key = (p, q) => p + "," + q;
  const queue = [[first.start, second.start]];
  const parent = new Map([[key(first.start, second.start), null]]);
  for (let head = 0; head < queue.length; head += 1) {
    const [p, q] = queue[head];
    let current = key(p, q);
    if (first.accept[p] !== second.accept[q]) {
      const word = [];
      while (parent.get(current) !== null) {
        const step = parent.get(current);
        word.push(step.bit);
        current = step.previous;
      }
      return word.reverse();
    }
    for (const bit of [0, 1]) {
      const next = [first.rows[p][bit], second.rows[q][bit]];
      const nextKey = key(next[0], next[1]);
      if (!parent.has(nextKey)) {
        parent.set(nextKey, { previous: current, bit });
        queue.push(next);
      }
    }
  }
  return null;
}
const courseParity = {
  rows: [[0, 1], [1, 0]], start: 0, accept: [true, false]
};
const courseParityCandidate = {
  rows: [[0, 3], [0, 3], [2, 1], [2, 1]],
  start: 0, accept: [true, true, false, false]
};
const courseParityMutant = {
  rows: [[0, 3], [0, 3], [2, 1], [2, 3]],
  start: 0, accept: [true, true, false, false]
};
\`\`\`

**Correctness and termination key.** After each input prefix, reference state
E means even parity and O means odd parity. The candidate states with e or o
have the same respective meaning. Empty-prefix initialization establishes
both claims; the displayed transitions preserve them, so final acceptance
matches the contract. Recognition terminates after the word's finite length.

For product search, every discovered pair is reached by its parent word, and
every processed pair has all two successors discovered. Each pair is enqueued
once. There are at most $mn$ pairs for m and n states, so the loop terminates.
A disagreement reconstructs a real word accepted by exactly one machine.
If the queue exhausts, closure and induction on word length show that no
word leaves the discovered agreeing pairs. BFS processes increasing word
length, so its first disagreement has minimum word length.

**Exact finite result key.** The reachable pairs are
$(E,e0),(O,o1),(O,o0),(E,e1)$, in that BFS discovery order.
Their 0/1 successor pairs are respectively
$(E,e0)/(O,o1)$; $(O,o0)/(E,e1)$;
$(O,o0)/(E,e1)$; $(E,e0)/(O,o1)$.
Each pair agrees on acceptance. Four pairs and eight labeled product edges
therefore exhaust the reachable product. The mathematical equivalence result
covers all words; it is not just testing words through some chosen length.

**Test and cost key.** Empty word accepts in both machines; 0 accepts;
1 rejects; 11 accepts. Word 101 has reference trace E,O,O,E and candidate
trace e0,o1,o0,e1, so both accept. Incomplete rows, out-of-range destinations,
a non-Boolean acceptance flag and word [2] must be rejected. Self-comparison
returns null. These are exact oracle expectations, not a claim that a reader's
program has run. CS-SYSTEM-B supplies the required detected mutation.

For valid DFAs and ordinary words with standard array iteration and constant-cost element access, the transition loop alone costs $\\Theta(\\ell+1)$ time and $O(1)$ auxiliary space for word length $\\ell$.
The complete \`runCourseDFA\` call also validates tables and word: \`Array.from(word)\` materializes all $\\ell$ entries before \`every\`, so total time and peak auxiliary space are $\\Theta(m+\\ell+1)$; table-only validation costs $\\Theta(m)$ time and space. Even [2,0,...,0] is fully copied before its first symbol is refused.
Product search costs $O(mn)$ time and space for this fixed two-symbol alphabet,
under constant-cost bounded state operations and Map access. Reconstructing
a witness costs its length, at most $mn-1$ for a shortest simple path.
The general bound counts actual product states, not all input words.
For ordinary graph BFS elsewhere in this course, distinguish the always-valid
$O(|V|+|E|)$ upper bound from a tight source-local
$\\Theta(|R|+|E_R|)$ bound when only reachable vertices and their outgoing
entries are inspected; full initialization and neighbor sorting add their
own work, as explained in graph-search chapter Question 13.

**Connection key.** The transition induction proves the mathematical
recognizers; the closed product table is exhaustive finite evidence; the
listed executions are program-test oracles. Transfer to this JavaScript
requires that array indexing, symbol validation, Boolean flags and parent
reconstruction implement those definitions. A deployed streaming parser,
concurrent writer, encoding conversion, memory failure or altered table
requires additional correspondence and operational evidence. The public
reference is unassessed self-study feedback, not deployment certification.

### CS-SYSTEM-B — changed machine and complete counterexample feedback

Change only the candidate transition o1 on 1 from e1 to o1, as in
courseParityMutant. Find a shortest distinguishing word before reading on.

#### CS-SYSTEM-B — Complete counterexample model

**Key.** The answer is 11. The reference follows E,O,E and accepts; the mutant
follows e0,o1,o1 and rejects. Empty word, 0 and 1 agree, proving that no
shorter word distinguishes them. The second transition violates the
candidate's parity invariant. The missing e1 destination is a legal state
index, so structural validation passes: syntactically valid tables can
implement the wrong language. The reference witness routine returns [1,1].

### CS-SYSTEM-R — later return with a different state meaning

After another reading, reconstruct the Module 4 DFA for words ending 01.
Compare it with a mutant that makes its accepting state absorbing on both
symbols, recognizing words containing 01. Give complete transition tables,
a shortest witness, its two runs and the general product-search resource
bound before comparing this key.

#### CS-SYSTEM-R — Complete return model

**Key.** Start q0, accept q2. The correct 0/1 rows are
q0: q1/q0; q1: q1/q2; q2: q1/q0.
The mutant changes only the last row to q2/q2. Word 010 follows
q0,q1,q2,q1 in the correct machine and q0,q1,q2,q2 in the mutant:
only the mutant accepts. Empty and length-one words reject in both;
among length-two words only 01 accepts in either. Thus length three is
minimum. The state invariant records the longest suffix that is a prefix
of 01, not parity. The same product proof applies to at most nine pairs
and eighteen labeled edges; a shortest simple distinguishing path has at
most eight edges. A changed language needs this new state meaning even
when the search engine is unchanged.

### CS-SYSTEM — Self-review and repair

For capstone self-review, require every original obligation to have its
specific evidence above: a total input/model contract; validated engine;
boundary, malformed and mutant test expectations; the closed product table
or valid shortest witness; a represented cost derivation; and the explicit
transfer boundary. Repair the first missing obligation and rerun the relevant
argument. Correct acceptance on the sample words cannot replace the product
proof. Public solutions and a later self-reported return do not establish
fresh assessment, observed workload or qualified individual feedback.
`;export{e as default};