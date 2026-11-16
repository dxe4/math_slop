var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: small-step-and-big-step-semantics
title: "Small-Step, Big-Step, and Trace Semantics"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Small-Step, Big-Step, and Trace Semantics

A programming language becomes a mathematical object when syntax and observations receive precise meaning. Operational semantics defines meaning through evaluation judgments or transitions. Big-step semantics emphasizes final results; small-step semantics exposes intermediate behavior, divergence, concurrency, and traces. Their relationship is a theorem, not a notation choice.

## 1. A small command language

Let arithmetic expressions contain integers, variables, and addition; Boolean expressions contain comparisons and connectives. Commands are

$\\mathrm{skip} | x:=a | c_1;c_2 | if b then c_1 else c_2 | while b do c$.

A state $\\sigma$ maps variables to integers. Arithmetic evaluation $[\\![ a]\\!]\\sigma$ and Boolean evaluation $[\\![ b]\\!]\\sigma$ are total only after policies for unbound variables and integer arithmetic are fixed. We use mathematical integers and require every referenced variable bound.

## 2. Big-step judgments

Judgment $\\langle c,\\sigma\\rangle \\Downarrow \\sigma'$ means command $c$ terminates from $\\sigma$ in $\\sigma'$. Rules include:

- $\\langle \\mathrm{skip},\\sigma\\rangle \\Downarrow \\sigma$;
- $\\langle x:=a,\\sigma\\rangle \\Downarrow \\sigma[x \\mapsto  [\\![ a]\\!]\\sigma]$;
- sequence composes two derivations;
- the chosen conditional branch follows the guard;
- while stops when guard is false and otherwise executes body then recurs.

A derivation tree is a finite certificate of terminating evaluation. No derivation may mean divergence, stuckness, or simply that the proof system is incomplete; the semantics must distinguish these if required.

## 3. Small-step transitions

Judgment $\\langle c,\\sigma\\rangle \\to  \\langle c',\\sigma'\\rangle$ performs one computation step. Assignment steps to $\\mathrm{skip}$ with updated state. Sequence steps its left command, and $\\mathrm{skip};c$ steps to $c$. An $if$ steps to its selected branch. A while unfolds to

$if b then (c; while b do c) else \\mathrm{skip}$.

Write $\\to^{\\ast } $ for reflexive transitive closure. Termination means $\\langle c,\\sigma\\rangle \\to^{\\ast }  \\langle \\mathrm{skip},\\sigma'\\rangle$. A finite trace lists all configurations and permits checking each local transition.

## 4. Equivalence on terminating programs

**Theorem 1.4.** $\\langle c,\\sigma\\rangle \\Downarrow \\sigma'$ iff $\\langle c,\\sigma\\rangle \\to^{\\ast }  \\langle \\mathrm{skip},\\sigma'\\rangle$.

For big-step to small-step, induct on the big-step derivation. Sequence and while cases concatenate transition paths using a lifting lemma: if $\\langle c,\\sigma\\rangle \\to^{\\ast }  \\langle c',\\sigma'\\rangle$, then $\\langle c;d,\\sigma\\rangle \\to^{\\ast }  \\langle c';d,\\sigma'\\rangle$ until $c'$ becomes $\\mathrm{skip}$.

For small-step to big-step, induction merely on path length is awkward around sequence. Use decomposition lemmas: a terminating sequence path uniquely includes termination of its first command followed by the second; conditional and while first steps expose their chosen rule. Determinism ensures final state uniqueness.

## 5. Determinism, stuckness, and errors

Small-step semantics is deterministic when every nonfinal configuration has at most one successor. Prove by case analysis on command syntax and unique expression evaluation.

A configuration is **stuck** if it is not final and has no transition. In a typed language, progress aims to show well-typed closed programs are either values/final or can step. Treating errors as stuck makes them difficult to observe; an explicit $\\mathrm{error}$ configuration can preserve blame information.

Nondeterministic semantics may model scheduling or unspecified choice. Then one program can have several traces, and properties quantify over some or all maximal traces.

## 6. Divergence

Write $\\langle c,\\sigma\\rangle \\Uparrow$ for an infinite small-step sequence or define a coinductive big-step divergence judgment. Inductive big-step termination alone cannot separate divergence from stuckness.

For $while \\mathrm{true} do \\mathrm{skip}$, small-step repeatedly unfolds and cycles. A coinductive proof assumes divergence of the recursive loop as a guarded hypothesis after executing one iteration. Coinduction validates potentially infinite observations; ordinary induction does not.

## 7. Evaluation contexts

For expressions, evaluation contexts specify the next reducible subterm. Under left-to-right call-by-value addition,

$E ::= [] | E+e | v+E$.

If redex $r \\to  r'$, then $E[r] \\to  E[r']$. A unique-decomposition lemma states every nonvalue expression decomposes uniquely into context and redex. It yields deterministic evaluation order and modular rules.

Changing to call-by-name or right-to-left changes traces and, with effects or divergence, possibly observations.

## 8. Labeled traces

A labeled transition $\\langle c,\\sigma\\rangle \\xrightarrow{a}  \\langle c',\\sigma'\\rangle$ records event $a$, such as input, output, allocation, or synchronization. Trace semantics maps a program to finite or infinite event sequences. Final-state equality is too coarse for reactive programs whose important behavior occurs along the way.

Trace equivalence, bisimulation, and contextual equivalence compare different observations. None is automatically “the” program equivalence.

## 9. Boundaries

- A finite big-step tree certifies termination, not divergence.
- Small-step determinism depends on expression and scheduling rules.
- Stuck, rejected, thrown error, and nontermination are different.
- Evaluation order becomes observable with effects.
- Instrumented interpreter traces test examples; rule induction proves semantics theorems.

## Completing the equivalence proof

For this proof use the stated integer command language and well-formed configurations in which every variable read by the command has an integer binding. Expression and guard evaluation is total and deterministic there; assignment updates bindings without removing the others. The partial-store stuck example below deliberately drops this hypothesis. Arithmetic expressions are evaluated as one mathematical operation in an assignment or guard rule, rather than by an additional expression-step relation.

**Lemma 1.1 (One-step expansion).** If a command configuration takes one small step to a second configuration, and the second has a big-step terminating derivation to $\\tau$, then the first also has such a derivation to $\\tau$.

*Proof.* Induct on the small-step rule derivation. An assignment steps to skip at its updated store. Inverting the latter skip derivation identifies $\\tau$ with that store, so the assignment big-step rule applies. A sequence whose first component steps has reduct $c';d$. Invert its big-step sequence derivation to obtain termination of $c'$ at an intermediate store and then of $d$. Apply the induction hypothesis to the first component's transition and its terminating derivation, then compose the restored first command with the same second derivation.

For a skip/sequence erasure, the reduct is the second command. Prefix its given big-step derivation with the skip rule and sequence rule. For a conditional selection, the small-step rule supplies the same Boolean guard result required by the corresponding big-step conditional rule, so attach that rule to the reduct's derivation.

For while unfolding, the reduct is its displayed conditional. If the guard is false, inversion gives termination of skip at the unchanged store and the while-false rule proves the original result. If true, inversion of the conditional and sequence gives a terminating body derivation followed by a terminating recursive-loop derivation. These are exactly the premises of while-true. These cases exhaust the operational rules. ∎

**Theorem 1.2 (Full terminating equivalence).** The big-step and small-step termination judgements stated earlier agree on these configurations.

*Proof, forward direction.* Induct on the finite big-step derivation. Skip has an empty transition path and assignment its one assignment step. For sequencing, lift the first component's induction path through the sequence context, erase the resulting skip prefix, and follow the second component's induction path. Lifting is itself induction on the finite path, applying the sequence-left rule to each transition. A conditional first steps to its selected branch and then follows that branch's induction path.

A false while unfolds to its conditional and selects skip. A true while unfolds and selects body followed by while. The two child derivations give paths for the body and recursive loop; the sequence lifting and erasure just proved concatenate them. Thus every big-step constructor produces a finite path to the same final store.

*Proof, reverse direction.* Induct on the length of a terminating small-step path. A zero-length path already has command skip at its final store and uses the skip big-step rule. Otherwise the induction hypothesis gives a big-step derivation for the path after its first transition. Apply Lemma 1.1 to restore that first transition's source. This establishes the required derivation for the original configuration. ∎

The expansion lemma is what makes a plain path-length induction work in the reverse direction. Without it, sequence and while syntax can grow or remain present while the path shortens, so merely repeating induction without identifying its hypothesis leaves a gap. The proof above separates a local backwards rule argument from the finite path argument.

## Worked example 1: a sequence has an intermediate store

Start with $x=y=0$ and command $x:=2;y:=x+3$. The first small step updates $x$ and leaves skip followed by the second assignment. Erasing that skip prefix exposes the second assignment in store $x=2,y=0$. Its assignment step returns skip with $x=2,y=5$. There are three command transitions under the chosen macro-expression rules.

The corresponding big-step tree has one assignment leaf ending at the intermediate store and another ending at the final store, joined by sequence. Updating $x$ in the initial store used by the second leaf would be essential; evaluating both assignments independently from the original state would incorrectly give $y=3$. The tree's intermediate-store premise records exactly the dependence that sequencing imposes.

## Worked example 2: a terminating loop and its transition count

Consider while $x>0$ do $x:=x-1$, starting at a nonnegative integer $n$. Each true iteration has four command steps: unfold the while, select the true branch, take the assignment step inside its sequence, then erase the skip prefix. It reduces the stored integer by one. At zero, the final false guard takes two steps, unfolding and selecting skip. The complete count is therefore $4n+2$, and at $n=3$ it is fourteen.

This is a theorem about this operational presentation, not a machine-time benchmark. Refining arithmetic or guard evaluation into their own steps would change the count while preserving the final store under an appropriate equivalence theorem. The termination proof uses a nonnegative integer decreasing once per body execution; the count additionally uses the exact administrative rules. Naming both avoids treating a semantic step as a universal unit of implementation cost.

## Worked example 3: a three-step divergence cycle

For while true do skip, one unfolding gives a true conditional, its selection gives skip followed by the same while, and sequence erasure returns to the original configuration with unchanged store. Repeating this three-step cycle gives an infinite small-step execution.

There is also a direct big-step nontermination proof. Any supposed finite while-true derivation would require a smaller child derivation of the same loop in the same store, because the body skip changes nothing. Repeating that required child descent contradicts finiteness of the tree. The argument proves actual absence of a terminating derivation, rather than reporting failure of an unspecified proof search.

## Determinism and maximal executions

For the well-formed integer language, induction on command structure shows every nonfinal configuration has exactly one successor. An assignment has its unique expression value; a conditional has its unique guard result; a while has its unique unfolding. A sequence with skip on the left erases that prefix, while a sequence with a nonfinal left command steps through its unique left transition. These cases are disjoint.

Thus two paths from one configuration agree until one ends. Skip has no outgoing transition, so two terminating paths cannot lead to different final stores or continue after a final store. The equivalence theorem transfers that uniqueness to big-step results. For a configuration that never reaches skip, repeatedly applying the unique next-state operation constructs an infinite execution by ordinary recursion on natural step indices.

Under these totality and progress hypotheses, actual nonexistence of a big-step derivation therefore implies divergence. Drop them and the conclusion changes: an assignment reading an unbound variable can be nonfinal with no successor and no terminating tree. Adding an explicit error terminal gives yet another observable result. The generic cautions earlier in the chapter remain valid across those other semantics; the stronger classification applies only to the concrete hypothesis set proved here.

## Trace observations must be named

The command semantics includes silent administrative steps, such as while unfolding. A trace recording every configuration distinguishes more than a trace recording only output events. Two command presentations can have the same final store and output sequence while taking different numbers of silent steps. An equivalence theorem must therefore say which observation it preserves.

For an event-labelled extension, first specify which rules emit which labels and whether silent labels are erased. A simulation that matches a source step by several target silent steps is not a one-for-one step equality, but it can preserve the chosen visible trace. Conversely, preserving only the final store permits different output histories. These are distinct mathematical relations rather than competing informal descriptions of the same unspecified behavior.

## Expression contexts: the missing decomposition argument

The command language treated expression evaluation as total. To refine that choice, consider closed arithmetic expressions built only from integer literals and addition. Values are integer literals. The primitive redex rule adds two literals, and contexts select the left operand first, then the right operand after the left is a value. There are no effects in this fragment, but its explicit step relation illustrates how a finer semantics is justified.

**Lemma 1.3 (Unique decomposition).** Every expression in this fragment is either a value or has a unique decomposition E[r], where E is a permitted evaluation context and r is an addition of two integer literals.

*Proof.* Induct on expression syntax. A literal is a value and cannot contain an active redex. For e₁+e₂, if e₁ is not a value, its induction hypothesis gives its unique decomposition, and placing that context to the left of +e₂ gives the whole decomposition. No right context is permitted yet because the left operand is not a value. If e₁ is a value but e₂ is not, use the unique right-operand decomposition and the permitted value-left context. Finally, if both are values, the entire expression is the primitive redex and the context is the hole. These cases are disjoint and exhaustive. Uniqueness of their recursive decompositions proves uniqueness at the compound. ∎

Since a literal-addition redex has one sum, unique decomposition proves deterministic expression stepping. A structural measure counting addition constructors decreases by one at every primitive addition and is unchanged by surrounding syntax except for that removed constructor. It is a nonnegative integer, so no infinite expression-step path exists. Progress from the lemma then implies every expression reaches a value. Induction on the steps, or a context replacement lemma, shows that each step preserves the structurally computed integer denotation. Thus its final literal equals the earlier macro-expression value.

This gives an actual bridge between two presentations: finite expression reduction computes exactly the value used in the command rule. Extending the fragment with multiplication works by adding its primitive rule and corresponding contexts and repeating the constructor cases. Extending it with division needs a zero-divisor policy, and extending it with a recursive call invalidates the simple decreasing-addition measure. A finer step relation is useful only when these new cases are included in its theorem.

## Coinduction with a declared relation

An infinite execution can be represented by a sequence of configurations indexed by naturals, with a transition between every adjacent pair. Another presentation defines divergence coinductively by the rule that a configuration diverges if it steps to one that diverges. The associated coinduction principle says: if every member of a relation D has some successor in D, then every member of D diverges. The premise provides a productive next transition, rather than assuming the desired conclusion without moving.

For the three-step while-true-skip cycle, let D contain exactly its three configurations at the fixed store: the while, its unfolded conditional, and skip followed by the while. Each has the next member as a successor, including the final edge back to the first. The coinduction principle proves divergence of each. This makes the guardedness requirement concrete: the circular argument is supported by an actual transition at every turn.

For a deterministic language with progress, the relation consisting of all configurations with no terminating path also has this successor property. A nonfinal member has a successor by progress. That successor cannot have a terminating path, because prefixing its path with the one transition would give a terminating path for the original member. Thus the relation is closed in the required coinductive sense, proving divergence from actual nontermination. The proof would fail precisely at a stuck nonfinal configuration without progress.

## Contextual claims need their own induction

Under final-store observations, skip;c and c have the same terminating outcomes and divergence classification in this language. A one-step skip erasure maps the first programme to the second without changing the store. That local relation explains their direct behavior. Replacing an occurrence inside an arbitrary command context additionally requires a congruence argument for the surrounding sequence, conditional and loop constructors, using their compositional operational rules.

If the observation counts every command transition, the two programmes differ by an administrative step and are no longer equal under that finer cost observation. If only output events are observed and skip is silent, the extra transition may be erased. The operational proof is therefore paired with an observation convention; a familiar optimization identity should not be quoted independently of the meaning of equivalence that it is supposed to establish.

## Exercises with complete solutions

### 1. Assignment result {#small-step-and-big-step-semantics-ex-1}

Evaluate $x:=x+1$ from $\\sigma(x)=4$.

<details><summary>Hint 1</summary>

Read the old binding before updating it.

</details>

<details><summary>Hint 2</summary>

All other store bindings remain unchanged.

</details>

<details><summary>Solution</summary>

Expression value is $5$; the big-step result is $\\sigma[x \\mapsto  5]$, and small-step makes one assignment transition to $\\mathrm{skip}$ with that state.

</details>

### 2. Sequence derivation {#small-step-and-big-step-semantics-ex-2}

What two premises prove $\\langle c_1;c_2,\\sigma\\rangle \\Downarrow \\sigma_2$?

<details><summary>Hint 1</summary>

Name the store between the two commands.

</details>

<details><summary>Hint 2</summary>

The second execution starts from the first execution's result.

</details>

<details><summary>Solution</summary>

Some intermediate $\\sigma_1$ with $\\langle c_1,\\sigma\\rangle \\Downarrow \\sigma_1$ and $\\langle c_2,\\sigma_1\\rangle \\Downarrow \\sigma_2$.

</details>

### 3. False loop {#small-step-and-big-step-semantics-ex-3}

Evaluate $while \\mathrm{false} do c$.

<details><summary>Hint 1</summary>

Inspect the false-guard rule.

</details>

<details><summary>Hint 2</summary>

No premise executes the body.

</details>

<details><summary>Solution</summary>

The false big-step rule returns the unchanged state. Small-step unfolds to a false conditional, then $\\mathrm{skip}$.

</details>

### 4. Lifting {#small-step-and-big-step-semantics-ex-4}

If $\\langle c,\\sigma\\rangle \\to  \\langle c',\\sigma'\\rangle$, what sequence step follows?

<details><summary>Hint 1</summary>

Put the transition in a sequence-left context.

</details>

<details><summary>Hint 2</summary>

The second command and its syntax stay unchanged.

</details>

<details><summary>Solution</summary>

$\\langle c;d,\\sigma\\rangle \\to  \\langle c';d,\\sigma'\\rangle$. Repeated application lifts a multistep path until $c$ becomes $\\mathrm{skip}$.

</details>

### 5. Big-step uniqueness {#small-step-and-big-step-semantics-ex-5}

Why does determinism imply at most one big-step final state?

<details><summary>Hint 1</summary>

Use terminating equivalence first.

</details>

<details><summary>Hint 2</summary>

Two deterministic paths must share every prefix until reaching skip.

</details>

<details><summary>Solution</summary>

Both big-step derivations correspond to small-step paths from one configuration. A deterministic transition relation has at most one path prefix at every length and cannot reach two distinct final states.

</details>

### 6. Stuck example {#small-step-and-big-step-semantics-ex-6}

Give one under partial expression semantics.

<details><summary>Hint 1</summary>

Drop the well-formed-store hypothesis deliberately.

</details>

<details><summary>Hint 2</summary>

Choose an expression with an unbound variable.

</details>

<details><summary>Solution</summary>

$x:=y+1$ in a state without $y$ has no expression value. If no explicit error rule exists, the nonfinal assignment has no transition and is stuck.

</details>

### 7. Divergence evidence {#small-step-and-big-step-semantics-ex-7}

Why is “no big-step derivation found” insufficient?

<details><summary>Hint 1</summary>

Separate a failed search from a mathematical nonexistence proof.

</details>

<details><summary>Hint 2</summary>

A nonfinal term may also have no successor.

</details>

<details><summary>Solution</summary>

Proof search may be incomplete, or the program may be stuck. Divergence requires an infinite-transition or coinductive argument.

</details>

### 8. Context decomposition {#small-step-and-big-step-semantics-ex-8}

Decompose $(1+2)+(3+4)$ under left-to-right evaluation.

<details><summary>Hint 1</summary>

Reduce the leftmost reducible operand first.

</details>

<details><summary>Hint 2</summary>

Describe the remainder with one hole.

</details>

<details><summary>Solution</summary>

The next redex is $1+2$; context is $[]+(3+4)$. After it becomes $3$, the next redex is $3+4$ in context $3+[]$.

</details>

### 9. Evaluation order {#small-step-and-big-step-semantics-ex-9}

When is left/right addition order unobservable?

<details><summary>Hint 1</summary>

Identify every observation that an operand can produce.

</details>

<details><summary>Hint 2</summary>

Purity and termination remove the usual distinguishing effects.

</details>

<details><summary>Solution</summary>

When operands are total, pure, deterministic, and addition has the same mathematical result. Divergence, state changes, exceptions, or I/O can expose order.

</details>

### 10. Labeled output {#small-step-and-big-step-semantics-ex-10}

Why is final state insufficient for two print programs?

<details><summary>Hint 1</summary>

Compare emitted event sequences.

</details>

<details><summary>Hint 2</summary>

The store need not record past output.

</details>

<details><summary>Solution</summary>

They can end in the same store while emitting different sequences. Labeled traces retain the observable outputs.

</details>

### 11. Universal path claim {#small-step-and-big-step-semantics-ex-11}

What does nondeterministic safety quantify over?

<details><summary>Hint 1</summary>

Read the universal quantifier in safety.

</details>

<details><summary>Hint 2</summary>

A single safe schedule leaves other schedules unconstrained.

</details>

<details><summary>Solution</summary>

Every reachable configuration on every allowed execution path must avoid bad states. One safe path proves only existential reachability.

</details>

### 12. Interpreter boundary {#small-step-and-big-step-semantics-ex-12}

What does agreement on one trace establish?

<details><summary>Hint 1</summary>

Count which programmes and inputs were considered.

</details>

<details><summary>Hint 2</summary>

One path cannot establish a universal simulation theorem.

</details>

<details><summary>Solution</summary>

It checks that concrete run against local rules. Universal interpreter correctness requires induction or simulation for every valid program/state pair.

</details>


## Chapter summary

Operational rules make finite executions into derivations and paths. One-step expansion proves terminating equivalence, while determinism and progress distinguish final states from genuine divergence under the stated store hypotheses. Expression decomposition and guarded coinduction supply the finer arguments; observation conventions determine which traces or costs an equivalence preserves.

## Sources

The operational proofs and examples are new expansions of the retained formal-computation source. Glynn Winskel, The Formal Semantics of Programming Languages, is the benchmark for this semantic route.
`;export{e as default};