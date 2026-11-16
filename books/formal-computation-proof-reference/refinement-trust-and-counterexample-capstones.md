
# Refinement, Trusted Bases, Counterexamples, and Synthesis Capstones {#section-1-refinement-trusted-bases-counterexamples-and-synthesis-}

Verification becomes meaningful when evidence layers connect: implementation steps refine an abstract model, the model satisfies a property, certificates are checked, assumptions are recorded, and counterexamples are interpreted at the right layer. This chapter assembles those obligations into refinement proofs and auditable projects.

<a id="section-3-1-refinement-relations"></a>
## 1. Refinement relations {#section-5-1-refinement-relations}

Let concrete transition system $C$ and abstract system $A$ have observations. Relation $R(c,a)$ is a forward simulation when initial concrete states relate to abstract initials, observations agree, and every concrete step can be matched by zero or more abstract steps to related states.

Then every concrete trace maps to an abstract trace, subject to stuttering and termination conventions. Universal safety properties preserved by the observation map transfer from abstract to concrete.

Backward simulation can be needed for nondeterminism when forward choice commits too early. Bisimulation supplies simulations both ways and preserves richer branching observations, but is stronger than many refinement goals require.

<a id="section-11-2-data-refinement"></a>
## 2. Data refinement {#section-13-2-data-refinement}

An abstraction function or relation connects concrete representation to abstract value. Operations satisfy:

1. concrete initialization establishes the relation;
2. each concrete operation, under representation invariant, matches its abstract specification;
3. concrete outputs correspond to abstract outputs;
4. invariant is preserved.

For a stack implemented by an array and top index, abstract sequence equals the occupied prefix in chosen orientation. Bounds and unused slots belong to invariant; clients observe only abstract push/pop behavior.

<a id="section-22-3-stuttering-and-progress"></a>
## 3. Stuttering and progress {#section-24-3-stuttering-and-progress}

Concrete bookkeeping steps may have no abstract counterpart and are matched by stuttering. Unlimited stuttering can hide livelock, so liveness refinement needs a rank showing only finitely many consecutive silent concrete steps or a fairness argument.

Safety refinement and progress refinement are separate theorems. An implementation can preserve every finite-state invariant while failing to respond.

<a id="section-28-4-trusted-computing-base"></a>
## 4. Trusted computing base {#section-30-4-trusted-computing-base}

The trusted computing base (TCB) includes components whose bugs can invalidate the claim: specification parser, semantics, proof kernel or certificate checker, code generator, runtime assumptions, hardware model, and build provenance as applicable.

Proof-producing automation moves trust from search to checking but does not eliminate trust. Smaller, deterministic, independently testable checkers reduce audit surface. Diverse checking can detect correlated errors but requires format agreement.

<a id="section-34-5-counterexample-interpretation"></a>
## 5. Counterexample interpretation {#section-36-5-counterexample-interpretation}

A model counterexample refutes the encoded property in the encoded model. It may expose a real design bug, a modeling omission, an overly strong property, or a spurious abstraction path. Replay it concretely when a refinement map exists.

Minimal counterexamples aid diagnosis but depend on metric. Delta debugging can shrink inputs while preserving failure; it does not prove global minimality unless search is exhaustive under a declared order.

<a id="section-40-6-proof-ledger"></a>
## 6. Proof ledger {#section-42-6-proof-ledger}

Maintain a ledger with claim, formal statement, model/version hash, assumptions, evidence artifact, checker/version, result, unresolved gaps, and reviewer status. Distinguish:

- theorem of abstract model;
- refinement theorem to code or lower model;
- compiler/runtime/hardware assumptions;
- empirical validation of environmental assumptions;
- release and reproducibility evidence.

Green status at one layer cannot silently discharge another.

<a id="section-52-7-compositional-refinement"></a>
## 7. Compositional refinement {#section-54-7-compositional-refinement}

If component $C_i$ refines $A_i$, composition refines abstract composition only under compatibility conditions: interfaces align, hidden actions are treated consistently, interference respects rely conditions, and fairness assumptions compose. Circular assume-guarantee arguments need a sound rule, greatest fixed point, or discharged compatibility proof.

Security refinement may require preservation of hyperproperties comparing multiple traces, not ordinary single-trace simulation.

<a id="section-58-8-project-verified-queue-refinement-pipeline"></a>
## 8. Project: verified queue refinement pipeline {#section-60-8-project-verified-queue-refinement-pipeline}

**Brief.** Specify an abstract bounded FIFO with $enqueue$, $dequeue$, and overflow/empty results. Implement it using a circular array. Build a dependency-free executable model, invariant checker, abstract reference model, exhaustive command-sequence generator through a bound, and shortest mismatch reporter. Prove data refinement for both operations. Then model two clients interleaving calls and state the atomicity assumption.

**Reference design.** Concrete state has a fixed positive integer capacity, array, head, and size with $0\le size\le capacity$; occupied logical item $i$ is array index $(head+i) \bmod capacity$. Abstraction maps these entries to sequence. Enqueue writes at $(head+size) \bmod capacity$ and increments size unless full. Dequeue reads head, advances modulo capacity, and decrements size unless empty. Each command returns a tagged result matched to the abstract model.

**Acceptance criteria.** Validate capacity and commands, enumerate sequences breadth-first, compare outputs and abstract states after every prefix, and report counts plus smallest mutant failure (for example omitting modulo). Supply algebraic preservation proofs for empty, nonempty, full, and wraparound cases. Tests are bounded; the invariant/refinement induction proves all command sequences.

<a id="section-66-9-capstone-variants"></a>
## 9. Capstone variants {#section-68-9-capstone-variants}

- **Compiler pass:** source AST to bytecode with a stack-machine simulation and differential oracle.
- **Protocol:** abstract handshake refined by retransmission state, with temporal liveness under named fairness.
- **Solver evidence:** generate SAT models and resolution proofs, then independently check hashes and steps.
- **Concurrent object:** linearizability history checker for bounded histories plus a manual simulation proof.

Each project must publish claim boundaries, not just code and passing tests.

<a id="section-75-10-release-boundary"></a>
## 10. Release boundary {#section-77-10-release-boundary}

A complete source slate is not a reviewed book. Release additionally requires mathematical review, notation/theorem audit, exercise audit, executable test audit, accessible figures, citations, cross-references, copy edit, reproducible typesetting, and target pagination. Draft page counts are measurements, not release verification.

<a id="section-79-a-finite-prefix-refinement-theorem"></a>
## A finite-prefix refinement theorem {#section-81-a-finite-prefix-refinement-theorem}

Let C and A be concrete and abstract state-transition systems with initial sets. Let R relate their states. Require that every concrete initial has a related abstract initial; every concrete transition from related states can be matched by a finite, possibly empty abstract path ending in related states; and every related pair agrees on the observations used for the safety claim. For state badness it is enough to require that a concrete bad state related to an abstract state makes the latter abstract-bad.

**Theorem 12.1 (Safety transfer).** Under these hypotheses, absence of reachable abstract bad states implies absence of reachable concrete bad states.

*Proof.* Take any finite concrete path from an initial state. Induct on its edge count to construct an abstract path ending at a related state. The zero-edge case uses initial correspondence. For the next concrete edge, apply the simulation condition to the previously related endpoint, obtaining a finite abstract matching path and a newly related endpoint. Concatenate it to the accumulated abstract path. Thus every concrete reachable endpoint has a related abstract reachable endpoint. If the former were bad, badness preservation would make the latter bad, contradicting abstract safety. ∎

The theorem allows arbitrary stuttering lengths along finite prefixes and proves precisely a state-safety conclusion. It does not yet prove equality of event traces or eventual response. For labeled systems, specify how emitted concrete events correspond to the matching abstract path, including which labels are silent. Then the same induction proves inclusion of the chosen finite visible traces. An infinite concrete execution matched entirely by empty abstract paths still needs a progress argument before it represents an infinite responding abstract execution.

If silent concrete steps strictly decrease a rank in a well-founded order while they are matched by empty abstract paths, no infinite consecutive block of such steps exists. This can rule out infinite silent livelock between visible matches. The proof is by contradiction: an infinite block would give an infinite descending rank sequence. Ranks may be reset by visible matching steps, so the result is about each silent block, not a global bound on total execution length. Fairness and termination conventions remain additional hypotheses for stronger liveness transfer.

<a id="section-91-circular-queue-refinement-in-full"></a>
## Circular queue refinement in full {#section-93-circular-queue-refinement-in-full}

Fix capacity N>0. A concrete state has an array of N entries, head h with 0≤h<N and size k with 0≤k≤N. Its abstract queue is the length-k sequence whose item i is array[(h+i) mod N] for 0≤i<k. Unoccupied entries are irrelevant. The abstract enqueue appends if length is below N and otherwise returns full without change; dequeue returns empty without change at length zero, otherwise removes and returns the first element.

Initially set k=0 and choose any valid h; the abstraction is empty independently of array contents. For enqueue with k<N, write v at index (h+k) mod N and increment k. This index differs from every previously occupied index (h+i) mod N with 0≤i<k: equality would make N divide k−i, but 1≤k−i≤k<N, impossible. Therefore every old logical item remains unchanged and the new final item is v. The new size is at most N, head stays valid and the representation invariant holds. The abstract result is exactly append, with the matching success tag.

For enqueue at k=N, the command returns full and leaves every field unchanged. The representation invariant and abstraction are therefore preserved, matching the abstract full case. This branch must occur before the write; writing first and then detecting fullness could overwrite the oldest item despite returning full.

For dequeue with k>0, read array[h], set h'=(h+1) mod N and k'=k−1. The returned value is old logical item zero because h is already in range. For any remaining logical index i<k−1, its new physical index is (h'+i) mod N=(h+1+i) mod N, exactly the old item i+1. No array contents need change. The new bounds hold, so this matches abstract head removal and preserves the invariant. At k=0, return empty without changing the state, matching the abstract case.

These cases prove operation refinement for every well-formed state and permitted item value. Induction on a finite command sequence now gives matching tagged outputs and related states after every prefix: initialisation gives the base, and the applicable operation case supplies each step. The argument includes wraparound through modular arithmetic and does not rely on enumerating capacities or sequences. It is a mathematical proof of the stated atomic operations, not an executed implementation report.

<a id="section-103-worked-example-1-wraparound-preserves-order"></a>
## Worked example 1: wraparound preserves order {#section-105-worked-example-1-wraparound-preserves-order}

Let N=4, h=3 and k=2, with occupied array entries array[3]=A and array[0]=B. The abstract queue is [A,B]. Enqueue C writes at (3+2) mod 4=1 and gives k=3, so the abstraction is [A,B,C]. Dequeue returns A, moves h to zero and k to two, leaving [B,C].

The old A entry can remain physically in slot three after dequeue because unoccupied entries are outside the abstraction. A client observing the whole raw array would see more than the abstract queue interface allows. Refinement therefore uses the specified queue operations and returned values as observations; it does not assert equality of every internal byte with a representation-free abstract object.

<a id="section-109-worked-example-2-a-full-result-mutation-violates-refine"></a>
## Worked example 2: a full-result mutation violates refinement {#section-111-worked-example-2-a-full-result-mutation-violates-refine}

At capacity two with abstract [A,B], h=0 and k=2, an incorrect enqueue C writes array[(h+k) mod 2]=array[0] before reporting full. Its tag agrees with the abstract full result, but its new abstraction is [C,B], not [A,B]. The representation bounds remain valid, so checking only the invariant would miss the functional error.

The operation-refinement obligation detects it because both returned tag and abstract state must match. A correct representation invariant constrains well-formedness; it is not a complete operation specification. This example provides a finite mathematical counterexample to that mutated operation and identifies the first failed obligation without claiming any programme was executed.

<a id="section-115-worked-example-3-safety-with-no-response"></a>
## Worked example 3: safety with no response {#section-117-worked-example-3-safety-with-no-response}

An implementation may accept a request and then take silent housekeeping steps forever without touching its data. Relate all those concrete states to one safe abstract idle state and match each step by an empty abstract path. Theorem 12.1 can still prove that no bad data state is reached.

It cannot prove the requested response eventually occurs. If an alleged rank decreases on every silent step in a well-founded order, this infinite execution refutes at least one of those rank premises. If no such rank or fairness/progress argument is supplied, the response claim stays open. The example shows exactly why a safety refinement record must not be presented as a completed liveness theorem.

<a id="section-121-relational-security-needs-more-than-one-trace-inclusion"></a>
## Relational security needs more than one-trace inclusion {#section-123-relational-security-needs-more-than-one-trace-inclusion}

Some security properties compare two runs with different secret inputs and equal public inputs. A one-run safety relation can preserve each allowed trace while allowing the implementation to choose traces in a secret-dependent way. For example, if an abstract specification permits either public bit independently of a secret, both constant-output and secret-revealing implementations may have every individual output allowed by that unconstrained specification. The latter still violates noninterference.

A relational specification can require equal public observations across the paired runs, or a probabilistic condition can compare output distributions. Refinement then needs the corresponding multi-run relation, coupling or distributional theorem. The ordinary forward-simulation proof above remains valid at its stated single-run boundary; it does not silently supply a hyperproperty preservation theorem.


<a id="section-128-earlier-computing-account-verification-evidence-toolcha"></a>
## Earlier computing account: Verification Evidence, Toolchains, and Model-to-System Boundaries {#section-130-earlier-computing-account-verification-evidence-toolcha}

Verification is an evidence pipeline. Requirements become properties; implementations become analyzable models; tools produce proofs, certificates, tests, or counterexamples; and a claim ledger records which gaps remain. The strongest tool result can support only the statement actually encoded.

<a id="section-132-1-evidence-classes"></a>
## 1. Evidence classes {#section-134-1-evidence-classes}

A deductive proof covers every state admitted by its premises. Exhaustive finite checking covers every generated finite state. Bounded checking covers paths or inputs within a bound. Testing samples chosen executions. Static analysis may overapproximate behaviors to prove absence of a defect class. Runtime monitoring observes deployed traces but only after they occur.

These forms complement rather than rank absolutely. A proof can model the wrong system; a test can reveal a mismatch omitted from the proof. The report must label each form.

<a id="section-138-2-requirements-to-properties"></a>
## 2. Requirements to properties {#section-140-2-requirements-to-properties}

“The service is safe” is not checkable. Refine it into state variables, events, environment assumptions, and predicates such as: every accepted debit preserves nonnegative available balance; every request receives a response or a declared timeout; no secret value reaches a public log.

Safety violations have finite bad prefixes. Liveness says something good eventually happens and usually needs fairness or progress assumptions. Quantitative requirements name time, probability, or resource units.

<a id="section-144-3-model-extraction"></a>
## 3. Model extraction {#section-146-3-model-extraction}

A model may be written manually, derived from source, or imposed by an intermediate representation. Document integer widths, overflow, memory and aliasing, concurrency interleavings, atomic operations, I/O nondeterminism, failures, and environment actions. Modeling mathematical integers when the program wraps fixed-width integers can invalidate arithmetic results.

An abstraction map relates concrete to abstract state. A simulation theorem shows concrete steps are matched by allowed abstract behavior. Overapproximation may introduce spurious counterexamples but can soundly prove universal safety; underapproximation may find real behaviors but cannot prove their absence.

<a id="section-150-4-verification-conditions"></a>
## 4. Verification conditions {#section-152-4-verification-conditions}

Program logics transform annotated code into logical obligations. For a loop, typical conditions show initialization establishes the invariant, the body preserves it, exit plus invariant implies the postcondition, and, for total correctness, every relevant body execution terminates while a well-founded variant strictly decreases across it.

An SMT solver can discharge formulas, return unknown, or produce a model that may be a counterexample to the formula. Solver success inherits the encoding and solver trust model. Proof-producing modes reduce trust if an independent checker validates certificates.

<a id="section-156-5-counterexample-validation"></a>
## 5. Counterexample validation {#section-158-5-counterexample-validation}

A counterexample should be replayed against the model and, when possible, the implementation. Decode every symbolic value, minimize irrelevant steps, and identify the first violated assumption. Spurious traces often expose an abstraction too coarse; infeasible implementation traces expose a model mismatch.

Absence of a counterexample is a proof only for an exhaustive sound method whose assumptions are satisfied. Tool termination with `unknown` or resource exhaustion is not evidence of the property.

<a id="section-162-6-toolchain-trust"></a>
## 6. Toolchain trust {#section-164-6-toolchain-trust}

The trusted computing base can include parsers, compilers, model generators, solvers, certificate checkers, libraries, hardware, and scripts that translate output into a report. A small checker helps only if the certificate is complete and the checker-to-claim mapping is correct.

Pin versions, hash inputs and outputs, make randomness deterministic where compatible with the method, and record resource limits. Reproducibility means rerunning the declared pipeline yields equivalent evidence, not that the theorem applies outside its model.

<a id="section-168-7-testing-around-proofs"></a>
## 7. Testing around proofs {#section-170-7-testing-around-proofs}

Property-based tests generate examples from a stated domain and shrink failures. Metamorphic tests assert relations when a direct oracle is unavailable. Differential tests compare independent implementations. Mutation testing changes code deliberately to see whether the evidence detects faults.

Tests are especially valuable at formalization boundaries: parsers, serializers, foreign functions, generated code, device drivers, and assumptions about external services. Proof and test coverage should be reported separately.

<a id="section-174-8-dependency-free-certificate-checker"></a>
## 8. Dependency-free certificate checker {#section-176-8-dependency-free-certificate-checker}

This checker validates a claimed execution trace against an explicit transition table. It returns structured reasons rather than a bare Boolean.

```python
def check_trace(initial, transitions, trace, bad_states):
    if not trace:
        return False, "empty trace"
    if trace[0] not in initial:
        return False, "trace does not begin initially"
    for before, after in zip(trace, trace[1:]):
        if after not in transitions.get(before, set()):
            return False, f"invalid step {before!r} -> {after!r}"
    if trace[-1] not in bad_states:
        return False, "trace does not end in a bad state"
    return True, "valid safety counterexample"

if __name__ == "__main__":
    moves = {"idle": {"read"}, "read": {"write", "error"}, "write": {"idle"}}
    assert check_trace({"idle"}, moves, ["idle", "read", "error"], {"error"})[0]
    assert not check_trace({"idle"}, moves, ["idle", "error"], {"error"})[0]
```

Checker soundness is direct: acceptance verifies initial membership, every transition, and the bad endpoint. Producer completeness is separate.

<a id="section-199-9-continuous-verification"></a>
## 9. Continuous verification {#section-201-9-continuous-verification}

Verification artifacts can enter continuous integration: parse specifications, regenerate obligations, invoke tools with fixed limits, independently check certificates, run boundary tests, and archive manifests. A change-impact policy decides which proofs must rerun when code, specification, model, or tool changes.

Caching by content hash is safe only when every semantic input—including configuration and imported theories—is included. A green historical result is stale after an untracked assumption changes.

<a id="section-205-10-deployment-boundary"></a>
## 10. Deployment boundary {#section-207-10-deployment-boundary}

Verified source can be altered by compilation, linking, configuration, environment, or hardware. End-to-end claims may need verified compilation, binary attestation, configuration validation, and runtime assumptions. Most projects choose a narrower boundary; honesty requires drawing it.

Monitoring can check assumptions such as input rates or sensor ranges. When a monitored assumption fails, the response should be defined: reject, degrade safely, alert, or enter a recovery mode. Continuing while retaining the old guarantee is not valid.

<a id="section-211-11-review-dossier"></a>
## 11. Review dossier {#section-213-11-review-dossier}

A verification dossier contains claim and nonclaim lists, specification source, model map, assumptions, proof obligations, tool and checker records, counterexample dispositions, test matrix, coverage boundaries, reproducible commands, change policy, and named independent review. “Verified” is then a navigable argument rather than a badge.


<a id="section-216-evidence-handoff"></a>
## Evidence and its interpretation {#section-218-evidence-handoff}

The next chapter turns this pipeline into a capstone. Its acceptance criterion is not the absence of tool warnings. It is a coherent dossier in which a second reader can reproduce each artifact and trace every conclusion to premises.


<a id="section-221-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-223-exercises-with-complete-solutions}

### 1. Forward step {#refinement-trust-and-counterexample-capstones-ex-1}

What must simulation show after concrete $c\to c'$?

<details><summary>Hint 1</summary>

Start at a related pair before the concrete edge.

</details>

<details><summary>Hint 2</summary>

The abstract match may have zero or several edges.

</details>

<details><summary>Solution</summary>

From related $R(c,a)$, some finite abstract path reaches $a'$ with $R(c',a')$, preserving declared observations and stuttering convention.

</details>

### 2. Safety transfer {#refinement-trust-and-counterexample-capstones-ex-2}

Why does abstract safety imply concrete safety?

<details><summary>Hint 1</summary>

Apply the finite-prefix simulation theorem.

</details>

<details><summary>Hint 2</summary>

A concrete bad endpoint would have a reachable abstract-bad counterpart.

</details>

<details><summary>Solution</summary>

Every concrete reachable trace maps to an abstract trace. A concrete bad observation would create an abstract bad observation, contradicting abstract safety.

</details>

### 3. Bisimulation strength {#refinement-trust-and-counterexample-capstones-ex-3}

What extra direction does it add?

<details><summary>Hint 1</summary>

Reverse which system makes the step.

</details>

<details><summary>Hint 2</summary>

Both directions must respect the chosen observations.

</details>

<details><summary>Solution</summary>

Abstract steps must also be matchable by concrete steps, so neither system has unmatched observable branching behavior under the relation.

</details>

### 4. Representation invariant {#refinement-trust-and-counterexample-capstones-ex-4}

Why is an abstraction function alone insufficient?

<details><summary>Hint 1</summary>

Ask where the abstraction is meaningful.

</details>

<details><summary>Hint 2</summary>

Initialisation and every operation must keep that domain invariant.

</details>

<details><summary>Solution</summary>

It may be meaningful only on well-formed concrete states. The invariant defines that domain and must be initialized and preserved.

</details>

### 5. Stuttering risk {#refinement-trust-and-counterexample-capstones-ex-5}

How can it hide liveness failure?

<details><summary>Hint 1</summary>

Consider an infinite sequence of empty abstract matches.

</details>

<details><summary>Hint 2</summary>

No bad state need occur while responses are postponed forever.

</details>

<details><summary>Solution</summary>

Concrete execution may take silent steps forever while abstract execution appears stationary; safety remains but required progress never occurs.

</details>

### 6. Rank for silence {#refinement-trust-and-counterexample-capstones-ex-6}

What does it prove?

<details><summary>Hint 1</summary>

Use well-foundedness.

</details>

<details><summary>Hint 2</summary>

An infinite silent block would give an infinite strict descent.

</details>

<details><summary>Solution</summary>

A well-founded rank decreasing on silent concrete steps prevents infinitely many consecutive stutters, supporting progress transfer.

</details>

### 7. TCB example {#refinement-trust-and-counterexample-capstones-ex-7}

Does a checked SAT refutation remove trust in formula translation?

<details><summary>Hint 1</summary>

Identify the input of the checked refutation.

</details>

<details><summary>Hint 2</summary>

Its correspondence to the programme is another theorem.

</details>

<details><summary>Solution</summary>

No. It proves the translated formula unsatisfiable. Correct correspondence between source property and formula remains trusted or separately proved.

</details>

### 8. Spurious counterexample {#refinement-trust-and-counterexample-capstones-ex-8}

What should happen next?

<details><summary>Hint 1</summary>

Seek one compatible concrete realisation.

</details>

<details><summary>Hint 2</summary>

If none exists, the abstraction may need more precision.

</details>

<details><summary>Solution</summary>

Attempt concrete replay or feasibility checking. If infeasible, refine the abstraction rather than report a system bug.

</details>

### 9. Proof ledger gap {#refinement-trust-and-counterexample-capstones-ex-9}

Why record unresolved assumptions?

<details><summary>Hint 1</summary>

Read each theorem as conditional on its premises.

</details>

<details><summary>Hint 2</summary>

An open assumption prevents an unconditional system claim.

</details>

<details><summary>Solution</summary>

They delimit the theorem and prevent a model-level result from being presented as an unconditional deployment guarantee.

</details>

### 10. Circular queue abstraction {#refinement-trust-and-counterexample-capstones-ex-10}

Which concrete entry represents abstract item $i$?

<details><summary>Hint 1</summary>

Follow the logical offset from head.

</details>

<details><summary>Hint 2</summary>

Modulo capacity handles physical wraparound.

</details>

<details><summary>Solution</summary>

Array index $(head+i) \bmod capacity$ for $0\le i<size$, preserving FIFO order through wraparound.

</details>

### 11. Sequence induction {#refinement-trust-and-counterexample-capstones-ex-11}

How does operation refinement extend to all command sequences?

<details><summary>Hint 1</summary>

Use initial correspondence as the induction base.

</details>

<details><summary>Hint 2</summary>

Operation refinement supplies each next prefix and matching output.

</details>

<details><summary>Solution</summary>

Initialization establishes relation. Inductively, matching one operation preserves relation and output agreement, so every finite prefix and full sequence match.

</details>

### 12. Source-slate status {#refinement-trust-and-counterexample-capstones-ex-12}

Does authoring every planned chapter make the book released?

<details><summary>Hint 1</summary>

Separate source authorship from independent evidence.

</details>

<details><summary>Hint 2</summary>

A complete chapter list does not create reviewer or production records.

</details>

<details><summary>Solution</summary>

No. It completes only an authorship milestone; all independent review, audit, accessibility, citation, reproducibility, and release gates remain required.

</details>


<a id="section-488-earlier-computing-exercises"></a>
## Earlier computing exercises {#section-490-earlier-computing-exercises}

### Earlier exercise 1. What does exhaustive finite checking prove? {#verification-evidence-toolchains-ex-1}

<details><summary>Hint 1</summary>

Identify the finite object whose behaviors were exhausted.

</details>

<details><summary>Hint 2</summary>

Omitted deployment behavior is outside that object.

</details>

<details><summary>Solution</summary>

The property for every state or transition generated by the declared finite model, assuming sound exploration—not for omitted implementation behavior.

</details>

### Earlier exercise 2. What does bounded checking prove? {#verification-evidence-toolchains-ex-2}

<details><summary>Hint 1</summary>

Locate the size or depth restriction.

</details>

<details><summary>Hint 2</summary>

No result beyond it follows without another theorem.

</details>

<details><summary>Solution</summary>

No counterexample exists within its explicit depth or size bound; an unbounded conclusion needs a completeness theorem.

</details>

### Earlier exercise 3. Why is liveness harder than safety to refute? {#verification-evidence-toolchains-ex-3}

<details><summary>Hint 1</summary>

Compare a bad prefix with an infinite absence of response.

</details>

<details><summary>Hint 2</summary>

Fairness changes which infinite paths count.

</details>

<details><summary>Solution</summary>

A safety violation has a finite bad prefix; failure of eventual progress may require reasoning about an infinite path and fairness.

</details>

### Earlier exercise 4. What is an abstraction map? {#verification-evidence-toolchains-ex-4}

<details><summary>Hint 1</summary>

Name the concrete and abstract state spaces.

</details>

<details><summary>Hint 2</summary>

The map is used in a step-correspondence theorem.

</details>

<details><summary>Solution</summary>

A function relating concrete states to abstract states so step correspondence and property transfer can be stated.

</details>

### Earlier exercise 5. Why can overapproximation prove safety? {#verification-evidence-toolchains-ex-5}

<details><summary>Hint 1</summary>

Use behavior inclusion in the correct direction.

</details>

<details><summary>Hint 2</summary>

A safe superset has a safe subset.

</details>

<details><summary>Solution</summary>

It includes every concrete behavior; if even the larger behavior set avoids bad states, the concrete subset does too.

</details>

### Earlier exercise 6. Why can overapproximation create false alarms? {#verification-evidence-toolchains-ex-6}

<details><summary>Hint 1</summary>

An overapproximation may add paths.

</details>

<details><summary>Hint 2</summary>

Its successive edges may not share concrete witnesses.

</details>

<details><summary>Solution</summary>

It may combine abstract transitions that no concrete execution can follow, generating a spurious path.

</details>

### Earlier exercise 7. List loop proof obligations. {#verification-evidence-toolchains-ex-7}

<details><summary>Hint 1</summary>

Separate invariant and termination obligations.

</details>

<details><summary>Hint 2</summary>

A decreasing assertion is insufficient if the body diverges.

</details>

<details><summary>Solution</summary>

Establish the invariant, preserve it, derive the postcondition at exit, and, for total correctness, prove each relevant body execution terminates together with variant decrease and well-foundedness.

</details>

### Earlier exercise 8. What does solver `unknown` mean? {#verification-evidence-toolchains-ex-8}

<details><summary>Hint 1</summary>

Distinguish a tool outcome from a truth value.

</details>

<details><summary>Hint 2</summary>

Unknown gives neither conclusive model nor refutation.

</details>

<details><summary>Solution</summary>

The solver established neither satisfiability nor unsatisfiability under that run; it is not a property result.

</details>

### Earlier exercise 9. Why replay a counterexample? {#verification-evidence-toolchains-ex-9}

<details><summary>Hint 1</summary>

Decode the proposed witness before interpreting it.

</details>

<details><summary>Hint 2</summary>

Each represented edge needs to be feasible.

</details>

<details><summary>Solution</summary>

To validate decoding and transition feasibility and to distinguish a real defect from an abstraction artifact.

</details>

### Earlier exercise 10. How does a certificate checker reduce trust? {#verification-evidence-toolchains-ex-10}

<details><summary>Hint 1</summary>

Separate a complex evidence producer from a checker.

</details>

<details><summary>Hint 2</summary>

Acceptance must entail the advertised claim.

</details>

<details><summary>Solution</summary>

The complex producer need not be trusted for correctness when a smaller independently justified checker validates its evidence.

</details>

### Earlier exercise 11. What remains trusted with a checker? {#verification-evidence-toolchains-ex-11}

<details><summary>Hint 1</summary>

Follow the entire path from source statement to acceptance.

</details>

<details><summary>Hint 2</summary>

Parsing and translation remain potential premises.

</details>

<details><summary>Solution</summary>

Certificate parsing, the checker, formal statement, input translation, and the link from checker acceptance to the reported claim.

</details>

### Earlier exercise 12. Where are tests most valuable beside proofs? {#verification-evidence-toolchains-ex-12}

<details><summary>Hint 1</summary>

Inspect what the formal model omits.

</details>

<details><summary>Hint 2</summary>

Boundary behavior can disagree with a correct model theorem.

</details>

<details><summary>Solution</summary>

At unmodeled boundaries such as parsing, serialization, generated code, foreign calls, devices, and external services.

</details>

### Earlier exercise 13. What does mutation testing ask? {#verification-evidence-toolchains-ex-13}

<details><summary>Hint 1</summary>

Consider a deliberately introduced plausible fault.

</details>

<details><summary>Hint 2</summary>

Its survival diagnoses limits of the evidence.

</details>

<details><summary>Solution</summary>

Whether deliberate plausible faults are detected; surviving mutants reveal weakness in tests or specifications, not necessarily real bugs.

</details>

### Earlier exercise 14. Why hash semantic inputs? {#verification-evidence-toolchains-ex-14}

<details><summary>Hint 1</summary>

List every premise that can change semantic meaning.

</details>

<details><summary>Hint 2</summary>

A source-only fingerprint can miss changed configuration or theories.

</details>

<details><summary>Solution</summary>

It detects stale evidence when source, specifications, configuration, theories, or tool settings change.

</details>

### Earlier exercise 15. What happens when a monitored assumption fails? {#verification-evidence-toolchains-ex-15}

<details><summary>Hint 1</summary>

A conditional theorem needs all its premises.

</details>

<details><summary>Hint 2</summary>

Define the operational response to a failed premise.

</details>

<details><summary>Solution</summary>

The old conditional guarantee no longer applies; a predeclared fail-safe, rejection, alert, or recovery action should run.

</details>

### Earlier exercise 16. Why still use independent review? {#verification-evidence-toolchains-ex-16}

<details><summary>Hint 1</summary>

Ask who assesses whether the encoded theorem was the right one.

</details>

<details><summary>Hint 2</summary>

Checking syntax and inference does not settle model fidelity.

</details>

<details><summary>Solution</summary>

Tools check encoded obligations; reviewers examine theorem choice, model fidelity, assumption realism, and interpretation.

</details>


<a id="section-811-chapter-summary"></a>
## Chapter summary {#section-813-chapter-summary}

Forward simulation transfers finite-prefix safety under initial, step and badness correspondence. Full circular-queue cases prove operation refinement and extend by induction to arbitrary finite command sequences. Stuttering needs extra progress arguments for liveness, and relational security needs a multi-run specification. The complete earlier toolchain account retains the boundaries between encoded theorems and deployed-system claims.

<a id="section-815-sources"></a>
## Sources {#section-817-sources}

The complete earlier computing chapter verification-evidence-toolchains, including its reference trace-checking listing and sixteen questions, is incorporated. Its code remains a textual source example with no execution reported. Winskel and Baier–Katoen supply the semantic and model-checking benchmarks.
