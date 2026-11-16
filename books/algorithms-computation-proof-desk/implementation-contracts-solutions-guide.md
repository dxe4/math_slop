
# Implementation Contracts and Solution Architecture

## How solutions are meant to be used

The chapter solutions are complete enough to audit, but reading them first defeats their diagnostic role. Attempt a problem, record the stuck point, then compare the proposed solution line by line. For a proof, identify where every hypothesis enters. For code, distinguish a test assertion from the general invariant. For a counterexample, verify every premise before celebrating the failure.

Exercises occupy four bands: retrieval of exact definitions; construction and trace work; proof or counterexample; and transfer to a new representation or claim. A learner has mastered a chapter only after attempting transfer. Instructors can vary surface data without changing the underlying obligation.

## Standard implementation contract

Every reference implementation should publish:

- accepted types, encodings, sizes, and malformed-input policy;
- abstract input and output relation;
- concrete state and representation invariant;
- mutation, aliasing, ownership, and ordering behavior;
- integer, floating, randomness, and concurrency semantics;
- termination measure and resource units;
- returned certificate and independent checker where meaningful;
- failure values or exception classes;
- deterministic serialization for archived evidence;
- explicit nonclaims about performance, security, or deployment.

## Graph routines

Graph inputs list every vertex, including isolated ones, and declare direction. Neighbor iteration order affects chosen witnesses but not reachability. BFS returns distances, parents, and an unreachable marker without confusing the empty path from a vertex to itself. Weighted routines reject unsupported negative edges rather than silently invoking Dijkstra.

Certificates are checked edge by edge. Negative reachability claims use a discovered set closed under outgoing edges. Complexity counts stored adjacency entries and names dictionary assumptions.

## Data structures

Document abstraction function and invariant before operations. Dynamic arrays state growth and shrink thresholds; hash tables state equality, hash stability, collision handling, and expected-case model; search trees state duplicate policy; heaps state tie ordering; persistent structures state which nodes may be shared.

Amortized analysis accompanies actual worst-case latency. A credit or potential proof cannot be reported as a measured average.

## Automata, parsers, and machines

Alphabet validation is explicit. The empty word is tested. DFA transition tables are total or have a declared rejecting sink. Equivalence checkers return a shortest distinguishing word where one exists. Parsers state grammar, tokenization, ambiguity policy, error location, and tree representation.

Simulation bounds never become computability theorems by extrapolation. A timeout is a resource outcome.

## Information and codes

Codebooks include serialization overhead in compression reports. Bit order, polynomial or matrix conventions, and block boundaries are fixed. Decoders return corrected data together with syndrome or status; they do not promise correction beyond the proved radius. Channel simulations name distributions and seeds.

## Cryptographic demonstrations

Educational snippets must be labeled nonproduction. They may demonstrate algebra or game structure but must not invite copying keys, pads, randomness, or constructions into applications. Production work uses maintained platform APIs and separate threat-model review. Never store secrets in examples or logs.

## Geometry and graphics

Coordinate handedness, origin, axis direction, units, clipping convention, boundary inclusion, winding, and pixel sample rule are inputs. Exact integer predicates should remain exact where feasible; floating paths name tolerance scale and degeneracy response. Visual output has a coordinate-table alternative.

## Quantum simulations

Basis ordering and tensor convention are declared. State normalization is checked within a named tolerance. Gate matrices are audited for compatible shape and unitarity. Measurement uses magnitude squares and a named sampling method. Simulator feasibility is not hardware advantage.

## Formal verification tools

Archive formal statement, model encoding, assumptions, axioms, tool versions, options, resource limits, and output category. Proof certificates and counterexample traces are independently checked when available. `unknown` and timeout cause an inconclusive result, never success.

## Solution-proof checklist

For direct proofs: state arbitrary legal input, unfold definitions, and finish the exact conclusion. For induction: name motive, base, hypothesis, and legal decrease. For invariants: initialization, preservation, exit use, and variant if termination is claimed. For exchange: preserve feasibility and objective. For reductions: construction, size, time, and both iff directions. For randomized bounds: fixed versus random quantities and probability source. For numerical reasoning: exact target, computed surrogate, conditioning, and error.

## Counterexample checklist

A valid counterexample uses the smallest transparent object possible, satisfies every premise, and calculates the failed conclusion. Common generators include empty inputs, ties, cycles, negative weights, adversarial order, hash collisions, ambiguous grammars, nonce reuse, collinear points, global versus relative quantum phase, unfair paths, and arithmetic overflow.

## Capstone scoring architecture

The cumulative project is scored on contract clarity (15%), representation and proof (25%), checker and negative evidence (15%), test and finite-audit design (15%), resource analysis (10%), reproducibility (10%), and claim/nonclaim review (10%). A larger codebase receives no bonus. An unresolved but accurately documented limitation can score better than an unsupported universal assertion.

Reviewers record observations with identifiers, severity, affected claim, evidence, disposition, and recheck. A successful PDF build or test run leaves review status at drafting until a named review is completed.

