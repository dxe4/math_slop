
# SAT, SMT, Proof Certificates, and Automated Deduction

Automated solvers turn logical constraints into models or impossibility claims. Trustworthy use separates front-end translation, search, theory reasoning, produced evidence, and independent checking. A fast solver may be large and heuristic while a certificate checker remains small and deterministic.

## 1. CNF and assignments

A literal is variable or negation. A clause is a disjunction; CNF is a conjunction of clauses. An assignment is a SAT certificate: check every clause contains a true literal. This linear pass validates SAT answers independently of search.

UNSAT is coNP-style evidence and needs a refutation proof, exhaustive search trace, or trusted solver. “No model found” is not itself a certificate.

## 2. DPLL

DPLL recursively applies unit propagation, pure-literal elimination, and branching. A unit clause forces its remaining literal. Conflict occurs when a clause becomes empty. Branching on $x$ is complete because every total assignment sets $x$ true or false.

Soundness: propagation preserves satisfiability under the forced choice; pure literals can be set favorably; a conflict means current partial assignment has no extension. Termination follows because each branch assigns a new variable in a finite formula.

## 3. CDCL

Conflict-driven clause learning records reasons for propagated assignments in an implication graph. Conflict analysis derives a learned clause, often at the first unique implication point, then backjumps to a relevant decision level. Learned clauses are logical consequences, commonly justified by resolution.

Restarts discard decisions but retain learned information; watched literals accelerate propagation. These heuristics change performance, not satisfiability semantics. A learned clause without a valid derivation can make the solver unsound.

## 4. Resolution proofs

Resolution derives $(C \lor D)$ from $(C \lor x)$ and $(D \lor \neg x)$. If empty clause is derived from input clauses, formula is unsatisfiable. Each step is locally checkable by clause identifiers and pivot.

Resolution is sound: an assignment satisfying both parents must satisfy the resolvent. It is refutation-complete for propositional CNF. Proof formats add deletion and compact inference conventions; checker correctness must match the exact format.

## 5. SMT and theories

Satisfiability modulo theories combines Boolean structure with domains such as linear arithmetic, arrays, bit-vectors, or uninterpreted functions. DPLL(T) proposes a Boolean assignment to theory atoms; a theory solver checks consistency and returns conflicts or propagated lemmas.

Nelson–Oppen combines certain disjoint stably infinite theories by exchanging equalities under hypotheses. Bit-vectors are finite and often bit-blasted to SAT. Nonlinear integer arithmetic has very different decidability boundaries. “SMT” is not one complexity or soundness theorem.

## 6. Equality with uninterpreted functions

Congruence closure decides conjunctions of equalities/disequalities. If $a=b$, then function congruence gives $f(a)=f(b)$. Union-find maintains equivalence classes, with signatures merging applications whose function and argument classes agree. A conflict is a disequality whose endpoints become equal.

This theory assumes functions have no properties beyond congruence unless axioms add them.

## 7. Quantifiers

Quantifier-free fragments often have robust decisions. Quantified reasoning may instantiate terms heuristically, diverge, or return unknown. Finite model finding and triggers provide useful evidence but require scope statements. An $unknown$ result is neither SAT nor UNSAT.

## 8. Front-end trust

A verification condition generator translates program and specifications to formulas. Bugs in parsing, integer overflow modeling, array bounds, or quantifier polarity can make a correct solver prove the wrong statement. Evidence should bind to exact normalized input hashes and theory versions.

For SAT, independently evaluate returned models and check refutations. For SMT, proof support varies by theory; validate models carefully because partial model displays may omit arbitrary interpretations.

## 9. Automated deduction beyond SAT

First-order theorem provers use unification, resolution, superposition, and term orderings. Refutational proof searches negate a conjecture and derive contradiction. Semi-decidability means proofs may be found while non-theorems can search forever. Interactive proof assistants instead check explicit proof terms in a small kernel, trading automation for structured trust.

## 10. Boundaries

- SAT models are easy certificates; UNSAT needs refutation evidence.
- Search heuristics do not change logical meaning.
- Theory names and arithmetic semantics belong in claims.
- Quantified solvers may legitimately return unknown.
- Solver correctness does not validate front-end translation.
- A proof artifact is only as trustworthy as its parser and checker.

## A complete propositional resolution argument

Represent a clause as a finite set of signed variables, so duplicate literals have no additional effect. A tautological clause contains a variable and its negation and is true under every assignment. The empty clause is false under every assignment. These conventions matter for a checker: an empty input CNF is true, whereas a CNF containing an empty clause is false.

**Lemma 10.1 (Elimination of one variable).** Partition a CNF's non-tautological clauses into clauses not mentioning x, positive clauses x∨Cᵢ, and negative clauses ¬x∨Dⱼ. Let F' consist of the x-free clauses and every resolvent Cᵢ∨Dⱼ. An assignment to the remaining variables extends to a model of F if and only if it satisfies F'.

*Proof, forward.* A model of F satisfies the x-free clauses. Resolution soundness makes it satisfy every resolvent, so its restriction satisfies F'.

*Proof, reverse.* Fix a model of F'. If every Cᵢ is true, choose x=false. Positive clauses remain true through their Cᵢ part and negative clauses are true through ¬x. Otherwise some Cᵢ is false. Choose x=true, satisfying every positive clause. For each negative clause, the corresponding resolvent Cᵢ∨Dⱼ belongs to F' and is true; because Cᵢ is false, Dⱼ must be true. Thus every negative clause is also satisfied. The x-free clauses already hold, proving an extension in both cases. ∎

The case of no positive or no negative clauses is covered: if there are no positive clauses, the condition that all Cᵢ are true is vacuous and x=false works. This is the pure-literal situation. Tautological resolvents may be retained or discarded because they impose no constraint, but their derivation and treatment must match the chosen proof format.

**Theorem 10.2 (Resolution refutation completeness).** Every unsatisfiable finite propositional CNF has a resolution derivation of the empty clause.

*Proof.* Induct on the number of variables. With no variables, the only non-tautological clause is empty. An unsatisfiable CNF must contain it, since the empty CNF is true. For a formula with a variable x, form F' as in Lemma 10.1. It is unsatisfiable, for a model would extend to a model of F. It has fewer variables, so induction supplies a refutation from F'. Each F' clause is either an original x-free clause or one resolvent of two original clauses. Prepend those local resolution steps, then replay the induction refutation. This gives a refutation from F. Removing irrelevant tautologies does not change satisfiability or this construction. ∎

This proof is constructive but does not promise a short refutation. Eliminating a variable can introduce the product of the positive and negative clause counts. Resolution proof length and solver runtime are separate complexity questions. Refutation completeness says evidence exists for every unsatisfiable finite CNF; it does not turn every heuristic search strategy into a complete practical implementation.

## Worked example 1: four clauses and a short refutation

Take clauses a∨b, ¬a∨b, a∨¬b, and ¬a∨¬b. Resolve the first two on a to derive b. Resolve the last two on a to derive ¬b. Resolve these two units on b to derive the empty clause. The three local steps form a complete refutation.

A checker can record each input clause with a stable identifier, then record each derived clause's two parent identifiers and pivot. It verifies opposite pivot signs and that the claimed result is the union of the parents after removing those pivot occurrences, with the chosen duplicate and tautology convention. Induction over the ordered certificate proves that every accepted derived clause follows from the inputs. Acceptance of a final empty clause therefore proves unsatisfiability. The producer's branching or restart history need not be trusted when this independent argument covers every accepted step.

## Worked example 2: a theory lemma is another obligation

Suppose the Boolean abstraction assigns a=b true and f(a)≠f(b) true. As unrelated Boolean names these atoms are satisfiable, but equality with uninterpreted functions forbids their conjunction. Congruence gives a=b⇒f(a)=f(b), so the theory solver may return the lemma ¬(a=b)∨(f(a)=f(b)). This lemma is valid in the named equality theory.

If the solver instead claims f(a)=f(b)⇒a=b, it has added injectivity, which uninterpreted functions do not guarantee. A constant function is a countermodel. A propositional refutation using this false lemma can be internally valid as a CNF derivation while proving the wrong theory claim. Therefore a theory-aware certificate needs evidence for theory lemmas as well as the surrounding Boolean inference. A complete certificate format identifies which part of that justification is checked or trusted.

## Worked example 3: a translation changes arithmetic

For a three-bit unsigned value x=7, the machine equation x+1=0 is true under addition modulo eight. Over mathematical integers, x=7 implies x+1=8 instead. A verification condition asserting x+1>x is true over integers but false at this bit-vector input.

Both solvers could correctly answer their respective formulas. The system-level error would be selecting integer semantics for a wrapping implementation while reporting the stronger machine claim. Bounds such as x<7 can make this particular increment agree with integer addition; a translation theorem must establish those bounds where used. Solver soundness cannot repair a missing correspondence between two arithmetic domains.

## Tseitin encodings preserve the right notion

For a compound Boolean formula introduce a fresh variable for each subformula and add clauses enforcing its equivalence to the represented connective. For z↔(u∧v), use ¬z∨u, ¬z∨v and z∨¬u∨¬v. Require the variable representing the root to be true. A structural induction shows that any assignment to the original variables extends to exactly the subformula truth values satisfying these definitions. Conversely the clauses force those values, so a model of the CNF restricts to a model of the original formula.

This is equisatisfiability with additional variables, not literal equality of model sets on one unchanged signature. A countermodel display should project away the auxiliary variables before interpreting source inputs, while retaining enough mapping to explain the translation. Freshness is essential: reusing an original variable as an auxiliary name can impose an unintended equation and invalidate the extension argument.

For z↔¬u, the two clauses ¬z∨¬u and z∨u provide the analogous truth-table equivalence. Handling each constructor with a constant number of clauses gives an encoding linear in the formula's syntax-tree size. Shared directed acyclic expression graphs can reuse one auxiliary variable per shared node when the mapping is consistent. The linear size is an encoding bound, not a claim that satisfiability can then be decided in linear time.

## Quantifiers and reported outcomes

A satisfiable quantifier-free query can have a finite assignment certificate that is easy to interpret. Quantified first-order statements require more care: a displayed finite set of function values may be only a partial presentation of a full model, and an instantiation search can be incomplete. A proof of all generated ground instances does not automatically establish a universal statement unless a separate argument covers the instantiation scheme.

Keep SAT, UNSAT, unknown, timeout and malformed input distinct at the reporting boundary. A checked countermodel refutes the exact encoded statement, while a checked refutation proves its negation under the theory and translation assumptions. Neither says whether that statement captures the user's intended property. The final chapter connects this local certificate argument to refinement and source-level claims.

## DPLL with a complete induction argument

Simplify a CNF under a partial assignment by removing clauses already made true and deleting literals made false from the remaining clauses. Every total extension satisfies the original formula exactly when it satisfies this simplified residual formula. This follows clause by clause: a removed true clause imposes no further obligation, and deleting false disjuncts leaves precisely the literals that an extension can still satisfy.

If the residual CNF contains an empty clause, no extension exists. If it has no clauses, every assignment to the remaining variables extends the partial assignment to a model. Otherwise choose an unassigned variable and recursively consider its two Boolean values, simplifying again after each choice. Each recursive call reduces the number of unassigned variables, so this elementary procedure terminates on every finite input.

**Theorem 10.3 (Basic DPLL correctness).** This finite branching procedure returns a model exactly when the input formula is satisfiable, and otherwise returns unsatisfiable.

*Proof.* Induct on the number of unassigned variables. The two terminal formula cases have the meanings just proved. In a nonterminal case, every total extension assigns the chosen variable either true or false. The simplification lemma and the induction hypotheses say that each recursive result correctly describes extensions with that value. A returned branch model therefore extends to a genuine model of the current formula. If both branches are unsatisfiable, no total extension exists because their assignments partition all possibilities. This proves both directions and exhausts the cases. ∎

Unit propagation is a sound shortcut because any model of a residual unit clause must assign its remaining literal true. It therefore discards no possible model at that node. Pure-literal elimination is slightly different: if a variable occurs only positively, a model can be chosen with it true, since changing it from false to true cannot falsify any clause. It preserves the existence of a model, although it can discard models setting that variable false. The distinction matters when asking for all models rather than just deciding satisfiability.

Clause learning can be added without changing satisfiability when each learned clause is entailed by the input clauses and assumptions under which it is retained. Clauses derived under temporary assumptions cannot automatically be promoted to unconditional lemmas. A certificate either discharges those assumptions explicitly or records the appropriate conditional clause. Restarts and deletion policies change the search, while correctness still depends on these logical side conditions.

## Small arithmetic certificates

For linear rational inequalities, a nonnegative linear combination preserves validity. If each premise is aᵢ·x≤bᵢ and coefficients λᵢ are nonnegative rationals, multiplying each premise by its coefficient and adding gives (Σλᵢaᵢ)·x≤Σλᵢbᵢ. If the left coefficient vector is zero and the right bound is negative, the combination proves contradiction. Every step is justified by ordered-field arithmetic and the nonnegative sign restriction.

For instance, 2x≤1 and x≥1 are inconsistent: rewrite the second as −x≤−1 and multiply it by two. Adding gives 0≤−1. The two coefficients one and two form a compact rational infeasibility certificate. A checker must parse rationals exactly or use an independently justified numeric method; an approximate near-zero sum is not the same mathematical certificate.

Integer arithmetic can require evidence beyond rational combinations. The equation 2x=1 is satisfiable over rationals at one half and impossible over integers because an even integer is not odd. Its integer refutation needs an integrality or divisibility argument. Bit-vector arithmetic has still another modular interpretation. A generic theory-certificate label should therefore name which inference rules it permits rather than imply that one linear-combination rule covers every SMT theory.

## Local evidence versus a complete solver

The resolution and linear-combination arguments prove that accepted certificates establish their encoded conclusions. They do not guarantee that a producer finds a certificate within a resource limit. Conversely a decision procedure can be mathematically complete while a particular implementation returns unknown when limits intervene. These are distinct claims about logic, algorithms and one execution record.

For a teaching example, write the full input formula, the evidence steps and their semantic justifications. For an actual automated result, additionally bind those steps to the exact translated query and theory interpretation. That extra record can support reproducibility later; it is not supplied here by presenting authored worked deductions as if a solver had run them.

## Exercises with complete solutions

### 1. Model check {#sat-smt-and-automated-deduction-ex-1}

How is a CNF assignment verified?

<details><summary>Hint 1</summary>

Evaluate each clause under the supplied total assignment.

</details>

<details><summary>Hint 2</summary>

Every clause needs one true literal.

</details>

<details><summary>Solution</summary>

Evaluate each literal under the assignment and confirm every clause has at least one true literal; also validate every variable reference.

</details>

### 2. Unit clause {#sat-smt-and-automated-deduction-ex-2}

Why is its literal forced?

<details><summary>Hint 1</summary>

Consider any satisfying extension of the partial assignment.

</details>

<details><summary>Hint 2</summary>

A clause with all other literals false has only one possible rescue.

</details>

<details><summary>Solution</summary>

All other literals in the clause are false under the current partial assignment, so any satisfying extension must make the sole unassigned literal true.

</details>

### 3. Branch completeness {#sat-smt-and-automated-deduction-ex-3}

Why do two Boolean branches suffice?

<details><summary>Hint 1</summary>

Use the two possible values of one Boolean variable.

</details>

<details><summary>Hint 2</summary>

Every total assignment belongs to exactly one branch.

</details>

<details><summary>Solution</summary>

Every total assignment gives the chosen variable exactly one of true or false; the two recursive cases partition all possible models.

</details>

### 4. Learned clause {#sat-smt-and-automated-deduction-ex-4}

What must be true of it?

<details><summary>Hint 1</summary>

Adding a clause must not discard a genuine input model.

</details>

<details><summary>Hint 2</summary>

An entailment proof supplies that preservation.

</details>

<details><summary>Solution</summary>

It must be logically entailed by existing clauses, so adding it removes no genuine model. A resolution derivation can certify this.

</details>

### 5. Resolution soundness {#sat-smt-and-automated-deduction-ex-5}

Prove the rule.

<details><summary>Hint 1</summary>

Suppose every nonpivot literal were false.

</details>

<details><summary>Hint 2</summary>

The parents would force opposite values of the pivot.

</details>

<details><summary>Solution</summary>

If an assignment falsifies both $C$ and $D$, satisfying the first parent forces $x$, while satisfying the second forces $\neg x$, impossible. Thus every parent model satisfies the resolvent.

</details>

### 6. Empty clause {#sat-smt-and-automated-deduction-ex-6}

What does it certify?

<details><summary>Hint 1</summary>

Interpret a disjunction with no members.

</details>

<details><summary>Hint 2</summary>

No assignment can make it true.

</details>

<details><summary>Solution</summary>

Empty disjunction is false under every assignment. If soundly derived from inputs, no assignment satisfies all inputs.

</details>

### 7. Theory conflict {#sat-smt-and-automated-deduction-ex-7}

Give an arithmetic example.

<details><summary>Hint 1</summary>

Separate Boolean atom names from their arithmetic meaning.

</details>

<details><summary>Hint 2</summary>

Choose two incompatible inequalities about one integer.

</details>

<details><summary>Solution</summary>

Atoms $x<0$ and $x\ge 0$ are Boolean-compatible as names but inconsistent in ordered arithmetic; theory checking returns a conflict lemma.

</details>

### 8. Uninterpreted functions {#sat-smt-and-automated-deduction-ex-8}

From $a=b$, what follows?

<details><summary>Hint 1</summary>

Use congruence in the forward direction.

</details>

<details><summary>Hint 2</summary>

Injectivity is an additional axiom, not an uninterpreted-function law.

</details>

<details><summary>Solution</summary>

$f(a)=f(b)$ by congruence. Nothing such as injectivity follows unless axiomatized.

</details>

### 9. Bit-vector overflow {#sat-smt-and-automated-deduction-ex-9}

Why differ from integer arithmetic?

<details><summary>Hint 1</summary>

Specify the width and addition operation.

</details>

<details><summary>Hint 2</summary>

Wraparound is absent from mathematical integers.

</details>

<details><summary>Solution</summary>

Fixed-width bit-vector addition wraps modulo $2^w$; mathematical integer addition is unbounded. A verification condition must choose one.

</details>

### 10. Unknown {#sat-smt-and-automated-deduction-ex-10}

Can it refute a conjecture?

<details><summary>Hint 1</summary>

Read unknown as an outcome about the method.

</details>

<details><summary>Hint 2</summary>

It supplies no established truth value for the query.

</details>

<details><summary>Solution</summary>

No. It reports solver incompleteness/resource limits for that query and supplies neither model nor proof unless additional evidence accompanies it.

</details>

### 11. Front-end bug {#sat-smt-and-automated-deduction-ex-11}

Why can a sound solver yield an unsound system claim?

<details><summary>Hint 1</summary>

Identify the exact formula actually solved.

</details>

<details><summary>Hint 2</summary>

A mistranslation can produce a theorem about another statement.

</details>

<details><summary>Solution</summary>

It may correctly solve a formula that mistranslates the program or property. Translation correctness is a separate trusted obligation.

</details>

### 12. Kernel trust {#sat-smt-and-automated-deduction-ex-12}

Why prefer a small checker?

<details><summary>Hint 1</summary>

Separate finding a proof from replaying its steps.

</details>

<details><summary>Hint 2</summary>

A checker needs fewer search heuristics to trust.

</details>

<details><summary>Solution</summary>

Search can be complex and optimized, but independently replaying a simple proof format reduces the code whose correctness the final theorem depends on.

</details>


## Chapter summary

Resolution soundness and variable elimination prove propositional refutation completeness. DPLL correctness follows by induction on unassigned variables. Models, refutations and theory lemmas need the matching checker semantics; arithmetic domains and front-end translation remain explicit premises. A certificate’s validity and a search method’s practical success are different claims.

## Sources

The retained formal source is expanded with full elimination, DPLL and encoding proofs and worked certificates. Standard propositional resolution and DPLL traditions underlie these arguments; exact solver formats and version-specific capabilities remain outside the authored claims.
