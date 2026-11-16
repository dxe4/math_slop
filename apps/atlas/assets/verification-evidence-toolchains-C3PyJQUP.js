var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: verification-evidence-toolchains
title: "Verification Evidence, Toolchains, and Model-to-System Boundaries"
level: advanced-undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Verification Evidence, Toolchains, and Model-to-System Boundaries {#section-1-verification-evidence-toolchains-and-model-to-system-bo}

Verification is an evidence pipeline. Requirements become properties; implementations become analyzable models; tools produce proofs, certificates, tests, or counterexamples; and a claim ledger records which gaps remain. The strongest tool result can support only the statement actually encoded.

<a id="section-3-1-evidence-classes"></a>
## 1. Evidence classes {#section-5-1-evidence-classes}

A deductive proof covers every state admitted by its premises. Exhaustive finite checking covers every generated finite state. Bounded checking covers paths or inputs within a bound. Testing samples chosen executions. Static analysis may overapproximate behaviors to prove absence of a defect class. Runtime monitoring observes deployed traces but only after they occur.

These forms complement rather than rank absolutely. A proof can model the wrong system; a test can reveal a mismatch omitted from the proof. The report must label each form.

<a id="section-9-2-requirements-to-properties"></a>
## 2. Requirements to properties {#section-11-2-requirements-to-properties}

“The service is safe” is not checkable. Refine it into state variables, events, environment assumptions, and predicates such as: every accepted debit preserves nonnegative available balance; every request receives a response or a declared timeout; no secret value reaches a public log.

Safety violations have finite bad prefixes. Liveness says something good eventually happens and usually needs fairness or progress assumptions. Quantitative requirements name time, probability, or resource units.

<a id="section-15-3-model-extraction"></a>
## 3. Model extraction {#section-17-3-model-extraction}

A model may be written manually, derived from source, or imposed by an intermediate representation. Document integer widths, overflow, memory and aliasing, concurrency interleavings, atomic operations, I/O nondeterminism, failures, and environment actions. Modeling mathematical integers when the program wraps fixed-width integers can invalidate arithmetic results.

An abstraction map relates concrete to abstract state. A simulation theorem shows concrete steps are matched by allowed abstract behavior. Overapproximation may introduce spurious counterexamples but can soundly prove universal safety; underapproximation may find real behaviors but cannot prove their absence.

<a id="section-21-4-verification-conditions"></a>
## 4. Verification conditions {#section-23-4-verification-conditions}

Program logics transform annotated code into logical obligations. For a loop, typical conditions show initialization establishes the invariant, the body preserves it, exit plus invariant implies the postcondition, and, for total correctness, every relevant body execution terminates while a well-founded variant strictly decreases across it.

An SMT solver can discharge formulas, return unknown, or produce a model that may be a counterexample to the formula. Solver success inherits the encoding and solver trust model. Proof-producing modes reduce trust if an independent checker validates certificates.

<a id="section-27-5-counterexample-validation"></a>
## 5. Counterexample validation {#section-29-5-counterexample-validation}

A counterexample should be replayed against the model and, when possible, the implementation. Decode every symbolic value, minimize irrelevant steps, and identify the first violated assumption. Spurious traces often expose an abstraction too coarse; infeasible implementation traces expose a model mismatch.

Absence of a counterexample is a proof only for an exhaustive sound method whose assumptions are satisfied. Tool termination with \`unknown\` or resource exhaustion is not evidence of the property.

<a id="section-33-6-toolchain-trust"></a>
## 6. Toolchain trust {#section-35-6-toolchain-trust}

The trusted computing base can include parsers, compilers, model generators, solvers, certificate checkers, libraries, hardware, and scripts that translate output into a report. A small checker helps only if the certificate is complete and the checker-to-claim mapping is correct.

Pin versions, hash inputs and outputs, make randomness deterministic where compatible with the method, and record resource limits. Reproducibility means rerunning the declared pipeline yields equivalent evidence, not that the theorem applies outside its model.

<a id="section-39-7-testing-around-proofs"></a>
## 7. Testing around proofs {#section-41-7-testing-around-proofs}

Property-based tests generate examples from a stated domain and shrink failures. Metamorphic tests assert relations when a direct oracle is unavailable. Differential tests compare independent implementations. Mutation testing changes code deliberately to see whether the evidence detects faults.

Tests are especially valuable at formalization boundaries: parsers, serializers, foreign functions, generated code, device drivers, and assumptions about external services. Proof and test coverage should be reported separately.

<a id="section-45-8-dependency-free-certificate-checker"></a>
## 8. Dependency-free certificate checker {#section-47-8-dependency-free-certificate-checker}

This checker validates a claimed execution trace against an explicit transition table. It returns structured reasons rather than a bare Boolean.

\`\`\`python
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
\`\`\`

Checker soundness is direct: acceptance verifies initial membership, every transition, and the bad endpoint. Producer completeness is separate.

<a id="section-70-9-continuous-verification"></a>
## 9. Continuous verification {#section-72-9-continuous-verification}

Verification artifacts can enter continuous integration: parse specifications, regenerate obligations, invoke tools with fixed limits, independently check certificates, run boundary tests, and archive manifests. A change-impact policy decides which proofs must rerun when code, specification, model, or tool changes.

Caching by content hash is safe only when every semantic input—including configuration and imported theories—is included. A green historical result is stale after an untracked assumption changes.

<a id="section-76-10-deployment-boundary"></a>
## 10. Deployment boundary {#section-78-10-deployment-boundary}

Verified source can be altered by compilation, linking, configuration, environment, or hardware. End-to-end claims may need verified compilation, binary attestation, configuration validation, and runtime assumptions. Most projects choose a narrower boundary; honesty requires drawing it.

Monitoring can check assumptions such as input rates or sensor ranges. When a monitored assumption fails, the response should be defined: reject, degrade safely, alert, or enter a recovery mode. Continuing while retaining the old guarantee is not valid.

<a id="section-82-11-review-dossier"></a>
## 11. Review dossier {#section-84-11-review-dossier}

A verification dossier contains claim and nonclaim lists, specification source, model map, assumptions, proof obligations, tool and checker records, counterexample dispositions, test matrix, coverage boundaries, reproducible commands, change policy, and named independent review. “Verified” is then a navigable argument rather than a badge.

<a id="section-86-practice-with-fully-explained-solutions"></a>
## Practice with fully explained solutions {#section-88-practice-with-fully-explained-solutions}

1. **What does exhaustive finite checking prove?** The property for every state or transition generated by the declared finite model, assuming sound exploration—not for omitted implementation behavior.
2. **What does bounded checking prove?** No counterexample exists within its explicit depth or size bound; an unbounded conclusion needs a completeness theorem.
3. **Why is liveness harder than safety to refute?** A safety violation has a finite bad prefix; failure of eventual progress may require reasoning about an infinite path and fairness.
4. **What is an abstraction map?** A function relating concrete states to abstract states so step correspondence and property transfer can be stated.
5. **Why can overapproximation prove safety?** It includes every concrete behavior; if even the larger behavior set avoids bad states, the concrete subset does too.
6. **Why can overapproximation create false alarms?** It may combine abstract transitions that no concrete execution can follow, generating a spurious path.
7. **List loop proof obligations.** Establish the invariant, preserve it, derive the postcondition at exit, and, for total correctness, prove each relevant body execution terminates together with variant decrease and well-foundedness.
8. **What does solver \`unknown\` mean?** The solver established neither satisfiability nor unsatisfiability under that run; it is not a property result.
9. **Why replay a counterexample?** To validate decoding and transition feasibility and to distinguish a real defect from an abstraction artifact.
10. **How does a certificate checker reduce trust?** The complex producer need not be trusted for correctness when a smaller independently justified checker validates its evidence.
11. **What remains trusted with a checker?** Certificate parsing, the checker, formal statement, input translation, and the link from checker acceptance to the reported claim.
12. **Where are tests most valuable beside proofs?** At unmodeled boundaries such as parsing, serialization, generated code, foreign calls, devices, and external services.
13. **What does mutation testing ask?** Whether deliberate plausible faults are detected; surviving mutants reveal weakness in tests or specifications, not necessarily real bugs.
14. **Why hash semantic inputs?** It detects stale evidence when source, specifications, configuration, theories, or tool settings change.
15. **What happens when a monitored assumption fails?** The old conditional guarantee no longer applies; a predeclared fail-safe, rejection, alert, or recovery action should run.
16. **Why still use independent review?** Tools check encoded obligations; reviewers examine theorem choice, model fidelity, assumption realism, and interpretation.

<a id="section-105-evidence-handoff"></a>
## Evidence and its interpretation {#section-107-evidence-handoff}

The next chapter turns this pipeline into a capstone. Its acceptance criterion is not the absence of tool warnings. It is a coherent dossier in which a second reader can reproduce each artifact and trace every conclusion to premises.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=transition-systems-model-checking) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=specify-implement-test-verify-capstone) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};