var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: specify-implement-test-verify-capstone
title: "Capstone: Specify, Implement, Test, and Verify One System"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Capstone: Specify, Implement, Test, and Verify One System {#section-1-capstone-specify-implement-test-and-verify-one-system}

The capstone joins the book's proof habits into one inspectable artifact. You will define a small system, choose representations, implement it, prove its central guarantees, test the model-to-code boundary, measure resources, and publish a reproducible evidence dossier. Scope is deliberately small enough that every claim can be read.

<a id="section-3-1-choose-a-bounded-system"></a>
## 1. Choose a bounded system {#section-5-1-choose-a-bounded-system}

Suitable systems include a route planner, parser, priority queue, finite-state protocol, prefix-code decoder, geometric hull service, or randomized estimator. Reject projects whose correctness depends mainly on a large external framework. The mathematical core should fit in roughly 100–300 lines of dependency-free reference code.

State the use context and nonclaims. “Educational single-process scheduler for at most 100 jobs” is auditable; “production-safe scheduler” silently imports concurrency, persistence, security, and availability.

<a id="section-9-2-write-the-contract-first"></a>
## 2. Write the contract first {#section-11-2-write-the-contract-first}

Define input grammar, validation, abstract state, operations, outputs, failures, and resource units. Separate partial correctness from termination. If randomized, fix what is adversarial and what is random. If numerical, distinguish the ideal real predicate from finite arithmetic.

Every public operation needs preconditions and postconditions. Invalid input should have a typed outcome rather than accidental behavior. A deterministic serialization makes examples and certificates reproducible.

<a id="section-15-3-representation-dossier"></a>
## 3. Representation dossier {#section-17-3-representation-dossier}

Give concrete fields, a representation invariant, and an abstraction function. For a priority scheduler, arrays may encode a min-heap of records $(priority,sequence,payload)$. The invariant includes heap order, unique sequence numbers, valid index range, and a specified tie policy. The abstraction forgets array positions and retains the multiset plus dequeue order.

Prove initialization establishes the invariant and every mutating operation preserves it. State aliasing and ownership assumptions.

<a id="section-21-4-algorithm-and-termination"></a>
## 4. Algorithm and termination {#section-23-4-algorithm-and-termination}

Present language-neutral pseudocode before the implementation. Identify loop invariants and variants. For a queue-based finite graph traversal, the lexicographic pair (number of undiscovered vertices, queue length) decreases when an iteration either discovers vertices or merely removes a dead-end vertex; undiscovered count alone can stay fixed. A heap bubble-up variant is node depth; a parser variant is unconsumed input length plus stack measure.

Then prove the output relation. Break the theorem into lemmas small enough to test against boundary cases, while remembering tests do not prove them.

<a id="section-27-5-complexity-and-lower-bound-scope"></a>
## 5. Complexity and lower-bound scope {#section-29-5-complexity-and-lower-bound-scope}

Fix representation and counted operations. Give worst-case bounds and, where appropriate, amortized or expected bounds with hypotheses. Report space including auxiliary certificate storage. Do not infer an asymptotic lower bound from a benchmark.

Instrument counts such as comparisons, transitions, queue maximum, or probes. Measured counts should match proved inequalities on the test domain.

<a id="section-33-6-independent-evidence"></a>
## 6. Independent evidence {#section-35-6-independent-evidence}

Design a checker simpler than the producer. Route outputs carry edge-by-edge path certificates; schedules carry a feasibility and priority audit; parsers carry a syntax tree checked against productions; unsafe finite systems carry executable traces. Prove checker soundness separately from producer correctness.

For negative claims, decide what evidence exists. An unreachable route can carry a closed reachable set. A rejected word can carry a parsing chart boundary. “The program found nothing” is not a certificate.

<a id="section-39-7-testing-portfolio"></a>
## 7. Testing portfolio {#section-41-7-testing-portfolio}

Include unit tests for each operation, boundary partitions, adversarial examples, exhaustive small-state tests, metamorphic relations, and at least one deliberately faulty implementation that the suite detects. Seed randomized tests and report the generator domain.

Cross-check code against a simpler oracle on small inputs. Exhaustion becomes a finite proof only when enumeration completeness and the checked predicate are justified.

<a id="section-45-8-reference-capstone-kernel"></a>
## 8. Reference capstone kernel {#section-47-8-reference-capstone-kernel}

This example is a deterministic stable priority scheduler. Sequence numbers break ties, and an independent audit checks that emitted items are a permutation in nondecreasing key order.

\`\`\`python
from heapq import heappop, heappush

def schedule(jobs):
    heap = []
    for sequence, (priority, payload) in enumerate(jobs):
        if not isinstance(priority, int):
            raise TypeError("priority must be an integer")
        heappush(heap, (priority, sequence, payload))
    return [heappop(heap) for _ in range(len(heap))]

def audit(jobs, output):
    expected = sorted((priority, i, payload)
                      for i, (priority, payload) in enumerate(jobs))
    return output == expected

if __name__ == "__main__":
    jobs = [(2, "render"), (1, "parse"), (1, "validate")]
    output = schedule(jobs)
    assert audit(jobs, output)
    assert [item[2] for item in output] == ["parse", "validate", "render"]
    assert audit([], schedule([]))
\`\`\`

The standard-library heap is part of the trusted implementation base here. A full submission may implement its own heap and prove parent-child order; either way, name the boundary.

<a id="section-75-9-finite-verification-model"></a>
## 9. Finite verification model {#section-77-9-finite-verification-model}

Abstract the system to the smallest model that still expresses the key property. For the scheduler, a bounded model can enumerate job lists from two priorities and distinct labels, checking stability and permutation. Prove that enumeration covers the declared bound. Explain why bounded success does not prove arbitrary length, then connect it to the general invariant proof.

For concurrent or protocol projects, list atomic steps and environment moves. Use breadth-first reachability to produce shortest bad traces and archive the transition table.

<a id="section-81-10-reproducibility-manifest"></a>
## 10. Reproducibility manifest {#section-83-10-reproducibility-manifest}

Record source hashes, runtime and tool versions, exact commands, seeds, input fixtures, expected outputs, resource limits, and artifact hashes. One command should run validation, tests, finite checks, and dossier generation without network access. Generated files should say which sources produced them.

Rebuilding evidence does not change \`drafting\` into \`reviewed\`. Independent mathematical and implementation review are human workflow states with named reviewers and dispositions.

<a id="section-87-11-oral-defense"></a>
## 11. Oral defense {#section-89-11-oral-defense}

Prepare to answer: Which theorem is central? Where is each hypothesis checked? What is the smallest trusted base? Which counterexample most changed the design? What does the checker establish? Where does the model stop matching deployment? What result would invalidate the current claim?

Clear limitations strengthen the project because they make extension possible.

<a id="section-93-12-build-a-claim-to-evidence-graph"></a>
## 12. Build a claim-to-evidence graph {#section-95-12-build-a-claim-to-evidence-graph}

A dossier is navigable when every public claim has an outgoing path to the
evidence that supports it. Start with a table whose rows are stable claim IDs,
not prose paragraphs likely to be renamed. A useful row contains:

- the exact quantified claim and declared domain;
- hypotheses and where each is validated;
- proof lemma, checker, test, or measurement that supplies evidence;
- source and artifact identifiers;
- review status and unresolved observations;
- explicit nonclaims and transfer limits.

Suppose the scheduler publishes claim \`S-ORDER\`: for every validated finite job
list, the output keys $(priority,sequence)$ are strictly increasing. Its proof
depends on heap invariant \`H-ORDER\`, uniqueness of sequence numbers, the
correctness of \`heappop\`, and termination. Claim \`S-PERM\` says the output is a
permutation of input records and needs a multiset invariant instead. Passing
\`S-ORDER\` does not entail \`S-PERM\`: a producer returning only the minimum job
is ordered. Separate IDs prevent a test for one property from being cited as
evidence for another.

Now distinguish evidence kinds. A symbolic proof can establish \`S-ORDER\` for
unbounded mathematical lists under arbitrary-precision integers. Exhaustive
enumeration can establish the executable implementation for lists up to a
declared size and payload alphabet. Benchmarks measure observed runtime on
named hardware. Mutation tests calibrate whether the suite detects selected
faults. None subsumes the others; together they cover theorem, translation,
performance observation, and evidence sensitivity.

The graph also supports change impact. If the tie-breaking key changes from
input sequence to lexical payload, every descendant claim, test oracle,
certificate checker, example, and report should become stale until rebuilt or
reviewed. A source hash detects byte changes; an explicit dependency edge
explains mathematical consequences.

<a id="section-129-13-strengthen-the-scheduler-proof"></a>
## 13. Strengthen the scheduler proof {#section-131-13-strengthen-the-scheduler-proof}

Treat the input as records $r_{i}=(p_{i},i,x_{i})$, where $i$ is the enumeration
index. Lexicographic keys $(p_{i},i)$ are unique even when priorities repeat. The
heap abstraction is a multiset of records, while its representation invariant
states that every parent key is at most each child key.

**Lemma 1: insertion preserves abstraction.** Pushing record $r$ changes the
abstract multiset from $M$ to $M+\\{r\\}$. Bubble-up swaps concrete positions only,
so it never changes the multiset. At each swap the sole possible violation
moves toward the root; termination follows from decreasing node depth.

**Lemma 2: removal returns a minimum.** The heap invariant makes the root no
greater than either child, and transitivity along every root-to-node path makes
it no greater than every record. Replacing the root by the last leaf preserves
the multiset after removing the old root. Bubble-down repairs the only
potentially violated path and terminates as remaining tree height decreases.

**Theorem 10.1: schedule is stable and complete.** Repeated removal emits records in
increasing lexicographic key order by Lemma 2. Lemma 1 and the multiset part of
Lemma 2 show that every input record is inserted once and removed once. Unique
sequence numbers make equal-priority records appear in input order. The loop
variant is heap size. Therefore output is a stable priority ordering and a
permutation of the validated inputs.

The reference implementation delegates these lemmas to the standard-library
heap. Its independent \`audit\` computes the full specified relation by a
different interface, but happens to rely on the language's sorting
implementation. For stronger independence, implement a linear checker that
verifies output length, record membership by sequence ID, payload and priority
agreement, and adjacent key order. This checker need not reproduce heap
operations.

**Finite worked audit.** Let the input be
$[(2,A),(1,B),(1,C)]$. Enumeration yields keys $(2,0)$, $(1,1)$, $(1,2)$.
The only valid output order is $B,C,A$. $C,B,A$ is priority-sorted but violates
stability; $B,A$ is ordered but violates permutation; $B,C,A,A$ duplicates a
record. The claim graph should point these three mutations to distinct checker
clauses.

<a id="section-169-14-mutation-design-as-hypothesis-testing"></a>
## 14. Mutation design as hypothesis testing {#section-171-14-mutation-design-as-hypothesis-testing}

Randomly corrupting bytes says little about mathematical evidence. Choose
mutants corresponding to proof obligations and state which observation should
reject each one:

| Mutant | Broken obligation | Expected detector |
| --- | --- | --- |
| Compare only priority, omit sequence | stable tie order | equal-priority adversarial test and linear checker |
| Stop removal loop one step early | permutation/completeness | length and sequence-ID audit |
| Swap with larger child during bubble-down | heap-order preservation | representation check after every mutation |
| Accept noninteger priority by coercion | input grammar | invalid-input partition |
| Reuse sequence number after deletion | key uniqueness | duplicate-ID invariant test |
| Replace $<$ by $\\le$ in capacity check | boundary safety | exact-capacity and one-over-capacity cases |

For each mutant, first confirm that it actually changes executable behavior on
some declared input. Then run the evidence portfolio from a clean state. A
surviving mutant can mean the input domain never reaches the fault, the oracle
shares the same defect, or the claimed property is insensitive to the change.
Do not inflate a mutation score by counting syntactic changes that are
equivalent under the contract.

Property-based testing should generate structured legal and illegal states,
not arbitrary object fragments. For heap operations, generate valid heaps via
the public insertion interface, then test that removing all records matches an
independent stable ordering. To test invariant rejection, mutate one concrete
field at a time and require the diagnostic to name the violated clause. Seed
and shrink traces so a failure becomes a minimal replayable example.

Metamorphic relations add oracles without hard-coding complete outputs. Adding
the same constant to every priority must preserve payload order. Applying a
bijection to payload labels and then undoing it must preserve the schedule.
Concatenating a set of jobs whose priorities are all larger than the first
set's must concatenate their scheduled outputs. Each relation needs its own
hypotheses; integer translation can overflow in a bounded implementation.

<a id="section-205-15-a-negative-certificate-pattern"></a>
## 15. A negative certificate pattern {#section-207-15-a-negative-certificate-pattern}

Positive outputs are often easier to check than claims that no solution
exists. A route planner can certify a path by listing edges, but “no route”
needs more than an empty result. Let $R$ be a claimed set of all vertices
reachable from source $s$. A negative certificate contains $R$ and establishes:

1. $s$ belongs to $R$;
2. for every $u$ in $R$ and every edge $u\\to v$, vertex $v$ also belongs to $R$;
3. target $t$ does not belong to $R$.

Induction on path length proves that every vertex reachable from $s$ lies in
$R$; clause 3 therefore proves nonreachability. The checker scans membership
and outgoing edges, which can be simpler than trusting the producer's search
trace. If the graph is implicit, the certificate contract must say how the
checker enumerates every successor; sampling successors cannot prove closure.

The same pattern transfers. An infeasible difference-constraints instance can
carry a negative cycle. A failed finite-state safety property can carry a trace
from the initial state to a bad state. A parser rejection may carry a completed
dynamic-programming chart showing no start derivation spans the input. The
certificate format is part of the theorem: malformed evidence should be
rejected, not interpreted generously.

<a id="section-229-16-reproducible-execution-versus-independent-review"></a>
## 16. Reproducible execution versus independent review {#section-231-16-reproducible-execution-versus-independent-review}

Design the one-command pipeline as stages with explicit failure boundaries:

1. validate schemas, encodings, and declared limits;
2. type-check or compile without network access;
3. run unit, adversarial, metamorphic, and mutation checks;
4. enumerate the bounded model and store its coverage count;
5. regenerate certificates and verify them independently;
6. record operation counts and compare them with theorem bounds;
7. hash sources, fixtures, logs, and reports into the dossier.

Every stage must propagate a nonzero failure status. Cached outputs need input
hashes; otherwise a green report can describe yesterday's source. Fix locale,
time zone, ordering, and random seeds wherever they affect bytes. When exact
byte reproducibility is inappropriate—for example timing samples—preserve raw
observations and specify a statistical comparison rule rather than overwriting
them with one summary.

Independent review asks questions reproduction cannot. Are the hypotheses
reasonable? Is the invariant strong enough? Does the code implement the model?
Does the checker share a correlated bug? Is the complexity model useful for
the deployment claim? Each observation receives an ID, severity rationale,
affected claim IDs, disposition, and reviewer confirmation. A deferred issue
remains visible; relabeling it “out of scope” after discovery does not resolve
it unless the public claim is narrowed accordingly.

<a id="section-256-17-depth-diagnostics-before-submission"></a>
## 17. Depth diagnostics before submission {#section-258-17-depth-diagnostics-before-submission}

- If a theorem has no counterexample when one hypothesis is removed, test
  whether the hypothesis is needed or the audit is incomplete.
- If producer and checker share a helper that embodies the central decision,
  independence is weaker than the architecture diagram suggests.
- If every test input is legal, the validation and failure contract is
  untested. If every input is tiny, arithmetic and resource limits are hidden.
- If an asymptotic claim has no counted primitive, it cannot be connected to
  instrumentation. Wall-clock curves alone do not identify the theorem.
- If a bounded model reports only “passed,” record the generated state and
  transition counts and justify enumeration completeness.
- If formal evidence imports axioms or external solver certificates, list and
  verify them instead of collapsing the result to “proved.”
- If the use-case prose says more than the claim table, narrow the prose. Scope
  drift most often enters summaries, screenshots, and presentations.

<a id="section-273-18-connect-complexity-proofs-to-measured-counters"></a>
## 18. Connect complexity proofs to measured counters {#section-275-18-connect-complexity-proofs-to-measured-counters}

For the scheduler, let $n$ be the number of validated jobs and count key
comparisons and record moves. Building a heap by $n$ separate insertions gives
at most $\\sum_{i=1}^n \\mathcal{O}(\\log i)=O(n \\log n)$ work. Repeated removal also costs
$\\mathcal{O}(n \\log n)$. A bottom-up heap construction can reduce the build phase to
$\\mathcal{O}(n)$, but the output phase has worst-case lower bound $\\Omega(n \\log n)$ in the comparison model
over arbitrary distinct priorities because it produces a sorted order. The claim is not that every input forces that many comparisons.

The linear heap-build bound deserves proof rather than the phrase “each node
bubbles down logarithmically.” Nodes at height $h$ are at most about
$n/2^{h+1}$, and each performs $\\mathcal{O}(h)$ work, so total work is bounded by

$\\sum_{h\\ge 0} (n/2^{h+1}) \\mathcal{O}(h) = O(n)$.

The convergent weighted series, not the maximum height applied to every node,
produces linearity. Instrumentation can record comparisons per starting node
height and verify the finite inequality on test heaps. It cannot replace the
series proof for arbitrary $n$.

Now connect theorem units to code without letting measurement define them.
Wrap the key comparator so every priority or sequence comparison increments a
counter. Count swaps or record assignments separately. For every generated
input, store $(n, comparisons, moves, maximum_{heap\\_size})$ and check against a
proved conservative bound with named constants. If the implementation calls a
library comparison through another route, the counter is incomplete; audit
the call graph or narrow the claim to explicitly instrumented comparisons.

Wall time answers a different question. Run warmups, retain individual
samples, fix workload generation, report hardware and runtime versions, and
avoid claiming an asymptotic law from a narrow range. Garbage collection,
cache layout, payload comparison, and interpreter dispatch may dominate even
when comparison counts follow the theorem. Operation counts connect directly
to the abstract analysis; timing measures the whole declared environment.

Certificate checking needs its own bound. The linear scheduler audit can use a
Boolean array indexed by unique sequence number. It first verifies output
length $n$; then one pass checks that each ID is in range, unseen, and paired
with its original priority and payload; the same pass compares adjacent keys.
This takes $\\Theta(n)$ time and $\\Theta(n)$ auxiliary bits or words, assuming
constant-time indexed access and payload equality. If IDs are untrusted large
integers, range validation must precede indexing. If payload equality costs
$L$, expose the total payload size or equality cost rather than calling the
checker simply linear.

The producer is $\\Theta(n \\log n)$ under comparison scheduling while the checker
is $\\Theta(n)$ because a proposed order is easier to verify than to discover.
That separation is useful independent evidence. It also illustrates why a
certificate theorem states representation assumptions: replacing the ID table
with a balanced search tree changes auxiliary space and time, while using a
hash table introduces expected-cost hypotheses or collision policy.

Finally include a scaling falsification table. For empty, singleton,
equal-priority, reverse-priority, and seeded mixed workloads, record observed
counters and whether the worst-case inequality holds. A violation refutes the
instrumentation-to-proof connection or the implementation; agreement only
confirms those finite cases. Preserve failed tables as review evidence rather
than regenerating until a favorable run appears.


<a id="section-333-worked-example-1-the-scheduler-theorem-on-a-complete-tr"></a>
## Worked example 1: the scheduler theorem on a complete trace {#section-335-worked-example-1-the-scheduler-theorem-on-a-complete-tr}

Use jobs $[(2,A),(1,B),(1,C)]$. Enumeration produces records $(2,0,A)$, $(1,1,B)$ and $(1,2,C)$. Their keys $(priority,sequence)$ are distinct even when priorities tie. Heap insertion preserves the multiset of these records. Repeated removal of a minimum key yields $(1,1,B)$, $(1,2,C)$, $(2,0,A)$. The output is ordered, complete and stable because equal-priority jobs retain increasing original sequence numbers.

Now prove the general statement. After $j$ removals, let the emitted multiset and remaining heap multiset sum to the original record multiset. Require the emitted keys to be increasing and every emitted key to be no larger than every remaining key. This is initially true for an empty output. Removing a minimum preserves the multiset equation and extends the increasing sequence; all other heap keys are at least the removed key. Heap size strictly decreases, so the process terminates. At zero, the multiset equation gives a permutation of all records, and unique sequence numbers establish stability. These clauses explain why outputting only $B$ passes an ordering check but fails the full theorem.

The reference code uses Python's integer-instance test, which also accepts Boolean objects because they are integer instances in Python; see the [official numeric-type documentation](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex). Thus its literal input grammar includes those values; an application requiring only objects of exact type integer would need an additional rule. This is a contract clarification, not a change to the retained code. The proof concerns the validated finite records and standard heap semantics, not arbitrary concurrent producers or custom comparison side effects.

<a id="section-341-worked-example-2-an-independent-linear-certificate-argu"></a>
## Worked example 2: an independent linear certificate argument {#section-343-worked-example-2-an-independent-linear-certificate-argu}

Given an input list of $n$ jobs and a proposed list of $n$ records, inspect every output ID. Require it to be an integer in $[0,n)$, to occur only once and to carry the same priority and payload as the original job at that ID. Also require adjacent keys to be increasing. The $n$ distinct IDs in a set of size $n$ exhaust that set, so every input record occurs exactly once. Adjacent inequalities imply total order by transitivity; the sequence component makes ties stable. Hence acceptance implies the full scheduling relation.

For the three-job example, the proposed output $B,C,A$ passes. $C,B,A$ fails adjacent key order because $(1,2)>(1,1)$. $B,C,A,A$ fails length, and replacing $A$ by another copy of $B$ fails uniqueness and input agreement. These are concrete model answers for separate failure clauses. The checker need not recreate any heap state or trust which swaps the producer performed. Its linear time claim assumes constant-time ID indexing and a stated cost for payload equality; if payload comparisons are variable length, that cost must be exposed.

<a id="section-347-worked-example-3-certify-an-unreachable-target"></a>
## Worked example 3: certify an unreachable target {#section-349-worked-example-3-certify-an-unreachable-target}

Use directed vertices $s,a,t$ and edges $s\\to a$, $a\\to s$, with $t$ isolated. The proposed reachable set $R=\\{s,a\\}$ contains $s$, excludes $t$ and is closed under every outgoing input edge. A path from $s$ stays in $R$ by induction on path length: its initial vertex belongs, and closure carries membership across each next edge. Therefore no such path reaches $t$.

An empty set fails because it omits the source. The set $\\{s\\}$ fails because edge $s\\to a$ leaves it. The full vertex set fails to certify the requested nonreachability because it contains $t$. This completely describes why the valid certificate works and the three malformed alternatives do not. The proof does not claim that every closed set is exactly the reachable set; it only needs a closed superset containing the source and excluding the target. If source equals target, the length-zero path makes nonreachability false and the two membership clauses cannot both hold.

<a id="section-353-practice-with-fully-explained-solutions"></a>
## Practice with fully explained solutions {#section-355-practice-with-fully-explained-solutions}


<a id="section-356-exercise-1"></a>
### Exercise 1 {#section-358-exercise-1}
<a id="specify-implement-test-verify-capstone-ex-1"></a>

Why bound capstone scope?

<details>
<summary>Hint 1</summary>

A reader must be able to inspect the mathematical core.

</details>
<details>
<summary>Hint 2</summary>

List what the proposed system leaves outside its operating model.

</details>
<details>
<summary>Solution</summary>

A small core lets readers inspect every contract, proof, test, and translation; broad infrastructure would hide assumptions rather than demonstrate mastery.

A model answer chooses one finite operation family, such as a stable priority scheduler, and names excluded features such as distributed delivery, concurrent mutation and persistence. The resulting proof can state every invariant and follow each update. A smaller scope is justified by inspectability, not by treating unproved larger claims as established.

</details>

<a id="section-382-exercise-2"></a>
### Exercise 2 {#section-384-exercise-2}
<a id="specify-implement-test-verify-capstone-ex-2"></a>

What belongs in the use contract?

<details>
<summary>Hint 1</summary>

State input and output domains before writing a procedure.

</details>
<details>
<summary>Hint 2</summary>

Include failure policy and resource units.

</details>
<details>
<summary>Solution</summary>

Users, inputs, outputs, failure policy, operating environment, resource limits, and explicit nonclaims.

For a scheduler, specify a finite list of integer priorities and payloads, output records carrying original IDs, increasing priority-and-ID order, and permutation of inputs. State validation behavior for malformed records and assumptions on comparisons. This is a concrete instance of the requested contract; merely naming the function schedule would not determine its mathematical relation.

</details>

<a id="section-408-exercise-3"></a>
### Exercise 3 {#section-410-exercise-3}
<a id="specify-implement-test-verify-capstone-ex-3"></a>

Why specify invalid input?

<details>
<summary>Hint 1</summary>

Different invalid inputs can otherwise trigger accidental behavior.

</details>
<details>
<summary>Hint 2</summary>

A universal theorem must specify which inputs it covers.

</details>
<details>
<summary>Solution</summary>

Otherwise exceptions, silent coercions, or undefined states become accidental parts of behavior and undermine universal claims.

For example, silently coercing a textual priority to a number changes the input domain and can alter the intended order. A precise contract either rejects that value or defines its conversion. The correctness theorem then quantifies over the resulting validated domain, while a separate validation argument explains how the implementation reaches it.

</details>

<a id="section-434-exercise-4"></a>
### Exercise 4 {#section-436-exercise-4}
<a id="specify-implement-test-verify-capstone-ex-4"></a>

What are the three representation ingredients?

<details>
<summary>Hint 1</summary>

Separate storage from the value clients observe.

</details>
<details>
<summary>Hint 2</summary>

The abstraction function is defined only on legal concrete states.

</details>
<details>
<summary>Solution</summary>

Concrete state, invariant defining legal states, and abstraction function mapping legal states to mathematical values.

For an array heap, the fields are an array and current size; legality includes bounds, complete-tree indexing and parent-child key order; abstraction is the multiset of used records. These three descriptions perform different jobs. A structurally legal heap can still represent the wrong multiset after a faulty update, so legality alone does not imply the specified abstract behavior.

</details>

<a id="section-460-exercise-5"></a>
### Exercise 5 {#section-462-exercise-5}
<a id="specify-implement-test-verify-capstone-ex-5"></a>

How is termination separate from partial correctness?

<details>
<summary>Hint 1</summary>

Partial correctness begins with an if-termination clause.

</details>
<details>
<summary>Hint 2</summary>

A decreasing well-founded measure removes that condition.

</details>
<details>
<summary>Solution</summary>

Partial correctness conditions the postcondition on termination; a well-founded variant proves termination actually occurs.

A loop that never exits can satisfy a partial-correctness postcondition vacuously, because it has no terminating run to falsify it. For repeated heap removal, heap size is a nonnegative integer reduced by every iteration, so there cannot be an infinite execution. Combining that proof with the invariant gives total correctness.

</details>

<a id="section-486-exercise-6"></a>
### Exercise 6 {#section-488-exercise-6}
<a id="specify-implement-test-verify-capstone-ex-6"></a>

Why name a cost model?

<details>
<summary>Hint 1</summary>

The same abstract operation can use different concrete representations.

</details>
<details>
<summary>Hint 2</summary>

Name both the unit operation and the size parameter.

</details>
<details>
<summary>Solution</summary>

The same abstract algorithm has different costs under arrays, lists, hashes, machine words, or bit operations.

A claimed constant-time lookup may assume array indexing, expected hash behavior or bounded machine-word arithmetic. Under linked traversal or variable-length integers those charges can differ. The model answer names the representation, unit cost, input length and whether the bound is worst-case, expected or amortized, so the same symbol $O(n)$ cannot change meaning mid-proof.

</details>

<a id="section-512-exercise-7"></a>
### Exercise 7 {#section-514-exercise-7}
<a id="specify-implement-test-verify-capstone-ex-7"></a>

What makes a checker independent?

<details>
<summary>Hint 1</summary>

The checker receives the original input and proposed result.

</details>
<details>
<summary>Hint 2</summary>

It should not assume any producer step succeeded.

</details>
<details>
<summary>Solution</summary>

It validates the result from the input and certificate without replaying every untrusted producer choice or assuming the producer succeeded.

The linear scheduler checker in the worked example checks IDs, original-record agreement and adjacent order. It never trusts the producer's heap or reconstructs its swaps. Independence is a relationship between the evidence and the untrusted operation, not a guarantee that different-looking code cannot share a faulty specification.

</details>

<a id="section-538-exercise-8"></a>
### Exercise 8 {#section-540-exercise-8}
<a id="specify-implement-test-verify-capstone-ex-8"></a>

What proves checker soundness?

<details>
<summary>Hint 1</summary>

Acceptance must imply the full claimed relation.

</details>
<details>
<summary>Hint 2</summary>

Handle malformed records and boundary cases in that implication.

</details>
<details>
<summary>Solution</summary>

A mathematical argument that every accepted certificate entails the claimed relation, covering parsing and boundary cases.

For the scheduler, accepted distinct IDs with correct range and total length imply each original record appears once. Original-record agreement supplies the correct contents, and adjacent key comparisons imply global sorted order by transitivity. This covers permutation, order and stability. A length-only or order-only checker would omit one of those implications.

</details>

<a id="section-564-exercise-9"></a>
### Exercise 9 {#section-566-exercise-9}
<a id="specify-implement-test-verify-capstone-ex-9"></a>

Why include adversarial tests?

<details>
<summary>Hint 1</summary>

Typical random inputs may never reach a boundary fault.

</details>
<details>
<summary>Hint 2</summary>

Name hypotheses and deliberately exercise their limits.

</details>
<details>
<summary>Solution</summary>

Random typical inputs can miss empty, duplicate, ordered, maximal, collision-heavy, or hypothesis-breaking cases.

The model answer includes empty input, repeated priorities, reverse order and a deliberately duplicated output ID, then explains which contract clause each concerns. Random common cases can be useful observations but do not justify omitting these finite boundary arguments. The question asks for evidence design, not a claim that any existing software suite has been executed.

</details>

<a id="section-590-exercise-10"></a>
### Exercise 10 {#section-592-exercise-10}
<a id="specify-implement-test-verify-capstone-ex-10"></a>

What does exhaustive bounded checking establish?

<details>
<summary>Hint 1</summary>

Specify the exact generated finite universe.

</details>
<details>
<summary>Hint 2</summary>

A proof of enumeration completeness is part of bounded exhaustion.

</details>
<details>
<summary>Solution</summary>

The property for every input generated within the proved-complete finite bound, not beyond it.

If the input universe is all lists of at most three jobs from two priorities, a complete enumeration must include every length, every priority tuple and every declared label choice. Only then does success establish the property on that finite universe. Arbitrarily larger lists remain outside the quantified conclusion, regardless of how many small instances were checked.

</details>

<a id="section-616-exercise-11"></a>
### Exercise 11 {#section-618-exercise-11}
<a id="specify-implement-test-verify-capstone-ex-11"></a>

Why inject a known fault?

<details>
<summary>Hint 1</summary>

Choose a fault corresponding to one proof obligation.

</details>
<details>
<summary>Hint 2</summary>

A failure to detect it may expose an inadequate oracle.

</details>
<details>
<summary>Solution</summary>

Demonstrating that evidence detects a relevant mutation calibrates the suite; a suite that accepts it needs repair.

A useful hypothetical fault is removing the last job before output. It violates permutation while leaving order correct. A checker examining only adjacent order would accept that fault, whereas length and ID coverage reject it. The example identifies both a concrete broken obligation and its required detector without treating a mutation score as a mathematical proof.

</details>

<a id="section-642-exercise-12"></a>
### Exercise 12 {#section-644-exercise-12}
<a id="specify-implement-test-verify-capstone-ex-12"></a>

What is a metamorphic relation?

<details>
<summary>Hint 1</summary>

Transform an input while predicting how its output must transform.

</details>
<details>
<summary>Hint 2</summary>

State the hypotheses under which that relation holds.

</details>
<details>
<summary>Solution</summary>

A predictable link between executions, such as relabeling graph vertices preserving path length, useful when direct expected outputs are costly.

Adding one fixed integer to every priority preserves the order of all priority-and-ID keys under exact integers, so it preserves payload order. That is a model metamorphic relation with a proof from translation invariance of integer order. Fixed-width overflow would invalidate the premise and therefore must be excluded or analysed separately.

</details>

<a id="section-668-exercise-13"></a>
### Exercise 13 {#section-670-exercise-13}
<a id="specify-implement-test-verify-capstone-ex-13"></a>

Why hash artifacts?

<details>
<summary>Hint 1</summary>

Reports must name the exact source bytes they concern.

</details>
<details>
<summary>Hint 2</summary>

A changed source should not inherit the old evidence silently.

</details>
<details>
<summary>Solution</summary>

Hashes bind reports to exact sources and outputs and expose stale or altered evidence.

A digest associates the recorded evidence with a particular byte sequence, so a later changed implementation cannot silently inherit it as current. It does not prove the theorem, identify the author or show independent review. A complete answer distinguishes that source binding from the mathematical content and from any authenticity claims requiring additional mechanisms.

</details>

<a id="section-694-exercise-14"></a>
### Exercise 14 {#section-696-exercise-14}
<a id="specify-implement-test-verify-capstone-ex-14"></a>

Can reproducibility replace review?

<details>
<summary>Hint 1</summary>

Repeated execution can repeat a shared mistake.

</details>
<details>
<summary>Hint 2</summary>

Review asks whether the theorem and interpretation are valid.

</details>
<details>
<summary>Solution</summary>

No. It reproduces the same derivation; review challenges theorem choice, proof validity, model fidelity, and interpretation.

An executable can reproducibly return the same wrong answer because both its producer and oracle omit stability. Repeating it reproduces the error. Independent review instead examines the specification, the proof and the interpretation of observations. Reproducibility helps another person inspect the same work, but it is not the disposition that their examination produces.

</details>

<a id="section-720-exercise-15"></a>
### Exercise 15 {#section-722-exercise-15}
<a id="specify-implement-test-verify-capstone-ex-15"></a>

Why list nonclaims?

<details>
<summary>Hint 1</summary>

A local contract need not cover every possible deployment.

</details>
<details>
<summary>Hint 2</summary>

List excluded concurrency, security or numeric assumptions explicitly.

</details>
<details>
<summary>Solution</summary>

They prevent readers from extending a conditional bounded result to concurrency, security, performance, or deployment contexts not studied.

For example a single-process exact-integer scheduler theorem does not imply thread safety, real-time latency or resistance to hostile payload methods. Naming those exclusions tells a reader which hypotheses must change before applying it there. The exclusions delimit the theorem rather than weakening its established conclusion on the stated domain.

</details>

<a id="section-746-exercise-16"></a>
### Exercise 16 {#section-748-exercise-16}
<a id="specify-implement-test-verify-capstone-ex-16"></a>

What completes the evidence chain?

<details>
<summary>Hint 1</summary>

Trace each claim through its hypotheses to its evidence.

</details>
<details>
<summary>Hint 2</summary>

Keep theorem proof, finite observations and review status separate.

</details>
<details>
<summary>Solution</summary>

Each public claim must point to a specification, hypotheses, proof or labeled finite evidence, implementation boundary, reproducible artifact, and review status.

A model claim-to-evidence row for stable order names finite validated jobs, unique input IDs, the heap minimum lemma, the multiset invariant, the standard-library boundary and the absence of independent review if none occurred. That row allows each inference to be inspected. A collection of files without these connections leaves the mathematical justification ambiguous.

</details>

<a id="section-772-complete-verification-dossier"></a>
## Complete verification dossier {#section-774-complete-verification-dossier}

Build one approved system and submit: a two-page contract; mathematical model; representation invariant and abstraction function; correctness and termination proofs; complexity analysis; dependency-free implementation; independent positive and negative certificate checkers where meaningful; at least 30 categorized tests; exhaustive small-state audit; one detected mutation; reproducibility manifest; and a claim/nonclaim table. A peer must reproduce the commands and file at least three review observations. Resolve or explicitly defer each observation. The project is complete as coursework only when its evidence is navigable; it is not thereby a released or production-certified system.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=verification-evidence-toolchains) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-779-sources"></a>
## Sources {#section-781-sources}

The original native chapter and every original worked solution and reference implementation remain in this source, developed for the twelve-chapter L2 route. Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), is an author-written reference for finite proofs and computational foundations.

<a id="section-783-summary"></a>
## Summary {#section-785-summary}

A bounded capstone connects one precise input-output contract to invariants, termination, cost and separately sound certificates. The scheduler examples prove order, permutation and stability as distinct obligations. The route example proves negative evidence by closure. Finite observations, reproducibility and independent review each answer different questions; none is inferred from the others.
`;export{e as default};