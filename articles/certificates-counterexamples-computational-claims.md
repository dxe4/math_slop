
# Certificates, Counterexamples, and the Boundaries of Computational Claims

**Before reading.** Read [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md), [Conditional Probability and Bayes](../books/introduction-to-probability/conditional-probability-bayes.md) and [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md). These are preparation for the ideas used below.

Computational mathematics produces many kinds of evidence. A path certifies reachability. A cut may certify a lower bound. A product-automaton trace refutes language equivalence. A randomized run is a sample, while a concentration inequality is a theorem. A proof-assistant term is checked relative to a kernel and logic. These artifacts are not interchangeable.

This deep dive develops a reusable evidence taxonomy for algorithms, complexity, verification, information, and quantum computation.

It assumes discrete mathematics, asymptotic complexity, elementary probability,
and comfort reading algorithms and proof invariants. Linear programming duality
and quantum notation are used only in scoped examples; follow their linked
courses before treating those examples as full introductions.

## 1. Decision relations and witnesses

Represent a decision problem as language $L\subseteq \{0,1\}*$. A witness relation $R(x,w)$ supports yes-membership when

$$x\in L iff there exists w with |w|\le poly(|x|) \land R(x,w)$$

and $R$ is polynomial-time decidable.

For Hamiltonian cycle, witness $w$ is a vertex ordering. The verifier checks length, uniqueness, vertex membership, each consecutive edge, and wraparound. Omitting uniqueness accepts closed walks that are not Hamiltonian cycles.

A yes-certificate establishes membership for one instance. It does not provide an efficient method to find certificates for every instance. That distinction is the conceptual gap between efficient verification and efficient decision explored by P versus NP; no separation or equality is assumed here.

## 2. Co-certificates and dual bounds

Some optimization results are certified by matching primal and dual values. For a shortest path with nonnegative or arbitrary edge weights but no negative cycles, a proposed path gives an upper bound. Vertex potentials satisfying

$$\pi(v)\le \pi(u)+w(u,v)$$

for every edge give lower bounds: along any $s\to t$ path, telescoping yields $\pi(t)-\pi(s)\le path weight$. If a proposed path equals the potential difference, optimality follows.

This pattern is stronger than “the algorithm says optimal.” The primal object and dual inequality form independently checkable evidence.

## 3. Counterexample certificates

Universal claims are refuted by one valid instance. A model checker’s counterexample must be an executable trace from an initial state to a violating state. A DFA inequivalence witness must drive both machines from their initial states to opposite acceptance.

Counterexample validity is local and checkable:

- the initial row is allowed;
- each consecutive step belongs to the transition relation;
- the last state violates the property.

Shortest traces improve diagnosis but do not strengthen logical refutation. An abstraction trace can be spurious when consecutive abstract steps lack one consistent concrete realization.

## 4. Exhaustion as proof

Finite exhaustive search proves a universal when the enumeration is complete and the checker correctly represents the property. DFA equivalence explores at most $|Q_{A}||Q_{B}|$ product pairs. Explicit-state safety explores at most $|S|$ states and $|R|$ edges.

The proof obligation moves into structural validation and loop invariants. A missing transition row can make search “prove” safety by underapproximation. Therefore a trustworthy finite checker validates state uniqueness, endpoint membership, transition totality where required, and every initial state before exploration.

## 5. Bounded evidence

Bounded model checking asks for a counterexample of length at most $k$, often by encoding path constraints into a solver. `unsat` means no counterexample exists within that bound and encoding. It becomes an unbounded proof only with an induction argument, diameter/completeness bound, or another closure result.

Similarly, exhaustive test generation over all 32-bit inputs can prove a function’s extensional result on that finite input model, but not its behavior under memory faults, undefined language behavior, or different integer widths.

## 6. Randomized guarantees

For a Monte Carlo algorithm, output itself may not certify correctness. The theorem has form

$$for every allowed x, P_{R}(failure(x,R))\le \delta$$

The probability is over declared random bits $R$ with input fixed. Repeating independently can amplify a bound; repeating one seed cannot.

An empirical failure fraction estimates performance under the experiment’s sampled input-and-seed distribution. It does not establish a worst-input probability theorem. Conversely, a theorem under ideal independent uniform bits may not describe a flawed generator or adaptive adversary.

## 7. Approximation certificates

An approximation algorithm returns a feasible solution with a ratio or additive guarantee relative to optimum. The proof often combines:

1. a computable lower bound on optimum;
2. a construction bounded relative to that lower bound;
3. feasibility of the constructed object.

For metric TSP, MST weight lower-bounds optimum after deleting an edge from a tour; doubled tree has twice MST weight; Euler traversal and triangle-inequality shortcuts yield a feasible tour. Every link is necessary. Without triangle inequality, shortcutting breaks.

A numerical objective alone does not certify approximation ratio because $\operatorname{OPT}$ is unknown. A relaxation or dual bound supplies the comparison.

## 8. Cryptographic experiments

Cryptographic evidence is adversarial and game-based. An indistinguishability definition samples keys and randomness, interacts with an adversary, and measures advantage over a baseline. A reduction transforms an adversary breaking the construction into one violating a hardness assumption.

Functional test vectors show honest encryption and decryption agree. They do not bound adversarial advantage, implementation leakage, nonce misuse, or protocol composition. A proof in an idealized model is conditional evidence whose assumptions belong in the headline.

## 9. Formal proof artifacts

A proof assistant can check a term against a type or theorem statement using a small kernel. Confidence depends on:

- formal statement matching intended mathematics;
- definitions and axioms;
- elaboration and generated proof term;
- kernel correctness;
- extraction/compiler/runtime if executable code is produced;
- model-to-world assumptions.

The artifact offers replayable derivational evidence. It does not automatically establish that the formal statement captured the informal requirement.

## 10. Numerical and geometric predicates

A floating computation can return a plausible picture while a near-zero predicate has the wrong sign. Robust computational geometry isolates combinatorial predicates and uses exact or adaptive arithmetic. Evidence should include error bounds or exact sign certificates, not only pixels.

For iterative numerical algorithms, a small residual $\lVert Ax-b\rVert$ is checkable but may not imply small forward error $\lVert x-x*\rVert$ when $A$ is ill-conditioned. Residual and conditioning together support the conclusion.

## 11. Quantum evidence layers

For a small circuit, symbolic amplitude derivation can prove an ideal output distribution. State-vector simulation numerically approximates it. Hardware samples provide empirical frequencies under noise. These are three evidence layers.

A query-complexity theorem counts oracle calls. End-to-end performance additionally includes state preparation, oracle construction, gates, error correction, repetitions, and classical postprocessing. Reporting the query theorem as total practical speedup crosses an unsupported boundary.

## 12. An evidence ledger

For any computational result, record:

| Field | Question |
| --- | --- |
| Claim | Exact proposition, optimization bound, probability event, or empirical estimand? |
| Quantifiers | Every input, some path, all paths, random seed, sampled population? |
| Model | Integers, words, floating point, transition system, circuit, adversary? |
| Artifact | Witness, trace, invariant, dual solution, proof term, sample, residual? |
| Checker | Which independently inspectable procedure validates it? |
| Assumptions | Finiteness, independence, hardness, fairness, conditioning, noise? |
| Boundary | What larger deployment or mathematical claim does not follow? |

This ledger blocks evidence inflation: a green test suite does not become a proof, a bounded proof does not become unbounded, and a formal model does not silently become a physical system.

## Worked synthesis: verified randomized protocol

**Worked example.**

Suppose a finite protocol uses random backoff. Four layers arise:

1. **Functional transitions:** every state update follows the declared table.
2. **Safety:** exhaustive reachability proves no collision state under the model.
3. **Performance:** a probability theorem bounds delay under independent random choices and a scheduler model.
4. **Deployment:** tests and refinement evidence connect actual timers, random source, concurrency, and fault behavior to the model.

Safety can be exact even while expected delay is probabilistic. A fair-scheduler assumption may be irrelevant to invariant safety but essential to eventual success. Reporting one undifferentiated “verified protocol” hides these distinctions.

## Common evidence inflation

- “No counterexample found” becomes “proved” without exhaustive coverage.
- “Verifier accepted a certificate” becomes “the certificate is efficiently discoverable.”
- “Expected runtime” becomes “every run is fast.”
- “Simulation matches theory” becomes “hardware implements the ideal model.”
- “Type checks” becomes “meets the user requirement.”
- “Cryptographic primitive is correct” becomes “protocol is secure.”
- “Residual is tiny” becomes “answer is accurate” without conditioning.

## Transfer practice checks with answers

<a id="deep-dive-certificates-counterexamples-computational-claims-ex-1"></a>

**Exercise 1.**

1. **A SAT solver returns an assignment. What is the certificate?**
<details>
<summary>Hint 1</summary>

A yes-certificate for SAT is data that a separate checker can inspect.
</details>
<details>
<summary>Hint 2</summary>

Use the returned truth assignment to evaluate each clause; the solver’s search trace is unnecessary.
</details>
<details>
<summary>Solution</summary>

 The assignment; substitute it into every clause. Solver internals need not be trusted for this yes-result.

</details>

<a id="deep-dive-certificates-counterexamples-computational-claims-ex-2"></a>

**Exercise 2.**

2. **A solver returns unsatisfiable. Is there always an equally simple certificate?**
<details>
<summary>Hint 1</summary>

An unsatisfiable claim is universal over assignments, so one failed assignment cannot certify it.
</details>
<details>
<summary>Hint 2</summary>

Look for a checkable refutation in a named proof system; a bare solver verdict is not such an artifact.
</details>
<details>
<summary>Solution</summary>

 Some proof systems provide checkable refutations, but a bare tool string without proof artifact requires more trust.

</details>

### Further practice

3. **A model checker checks depth 50 and finds none. Headline?** “No counterexample of at most 50 transitions in the encoded model,” unless a completeness theorem extends it.
4. **A randomized algorithm succeeds in 999 of 1000 runs. What is missing?** Input and seed sampling scheme, uncertainty, adaptation, and whether the intended claim is empirical average or worst-input probability.
5. **Two DFAs have no reachable accepting-disagreement product state. What follows?** Their languages are equal, assuming validated total transitions and exhaustive product reachability.

The [Automata and Verification Proof Studio](../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification) provides a small executable instance of the evidence ledger: trace for one word, shortest inequivalence witness, exhaustive equivalence proof, finite safety counterexample, and explicit model boundary.
