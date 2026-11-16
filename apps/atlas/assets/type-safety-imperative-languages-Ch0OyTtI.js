var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: type-safety-imperative-languages
title: "Type Safety for Imperative Languages"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Type Safety for Imperative Languages

A safety theorem needs an explicit account of values, stores and forbidden failures. Saying that a command has a type does not identify which failures the type rules prevent. Here we prove progress and preservation for an imperative language with integer and Boolean variables, then explain why references require a stronger store invariant. The full earlier computing account of semantics and specifications follows these proofs, including its examples and practice.

## The typed language and its configurations

Types are Int and Bool. Values are mathematical integers, true and false. Expressions are values, variables, addition, integer comparison and conditional expressions. An environment assigns each declared variable one fixed type. The store is a total map on exactly those declared variables, and a store conforms to the environment when every binding is a value of its declared type. There are no uninitialised variables, division, bounded-machine overflow or pointer operations in this first language.

An integer literal has type Int and a Boolean literal has type Bool. A variable has its environment type. Addition needs two Int arguments and returns Int; integer comparison needs two Int arguments and returns Bool. An expression conditional needs a Bool guard and two branches of one common type. These are syntax-directed rules, so induction on a typing derivation can recover each required premise by inspecting its final rule.

Commands are skip, assignment, sequence, conditional and while. Skip is well typed. Assignment to a declared variable requires an expression of precisely its declared type. Sequence requires both component commands well typed. Conditional and while require Boolean guards and well-typed command bodies. Commands do not return values, so their judgement is simply that they are well typed under the environment.

For now expressions evaluate structurally as one mathematical operation in command rules, just as in Chapter 1. This choice makes the expression lemma a total-evaluation theorem. An implementation that reduces expressions in smaller steps needs its corresponding expression progress and preservation lemmas; it cannot cite this macro-step presentation as an account of every machine instruction.

## Expression evaluation is total and type preserving

**Lemma 3.1.** In a conforming store, every well-typed expression evaluates to a value of its stated type.

*Proof.* Induct on the expression typing derivation. Literals evaluate to themselves and have the stated value type. For a variable, the typing premise gives its declaration, and conformance supplies a value of exactly that type. For addition, the two induction hypotheses give integer operands; mathematical integer addition is defined for them and returns an integer. Comparison similarly receives two integers and returns one of the Boolean values.

For a conditional, its guard induction hypothesis yields true or false. Select the corresponding branch and apply that branch's induction hypothesis. Both branches have the claimed result type, so either choice works. These are all expression constructors, proving existence of an evaluation and its type. Structural evaluation and the deterministic primitive operations also give uniqueness. ∎

The lemma includes an important canonical-forms observation: a value of Bool is true or false, and a value of Int is an integer. Merely giving a value a type by some unrelated relation would not prove these statements. They follow from the value definitions and their typing rules. Extending the language with another value constructor requires revisiting this case analysis.

**Lemma 3.2 (Store update).** Updating a conforming store at a declared variable with a value of that variable's declared type preserves conformance.

*Proof.* At the updated variable the new value has the required type by hypothesis. Every other variable retains its original conforming value. The domain remains exactly the declared domain. These cases establish conformance for every binding. ∎

## Preservation for commands

A well-typed configuration consists of a well-typed command and a conforming store for the same environment. Use Chapter 1's command transition rules, with typed expressions and guards.

**Theorem 3.3 (Preservation).** Every one-step successor of a well-typed configuration is well typed under the same environment.

*Proof.* Induct on the transition derivation. Assignment evaluates its expression, updates its variable and becomes skip. Lemma 3.1 gives the value's required type and Lemma 3.2 preserves the store; skip is well typed. Sequence-left steps its first command. Inverting the sequence typing rule supplies the first command's typing, so the transition induction hypothesis gives its well-typed reduct and conforming resulting store. Reattach the unchanged well-typed second command with the sequence typing rule.

Erasing skip from a sequence leaves the already well-typed second command and changes no store. A conditional evaluates a Bool guard and selects one of its two already well-typed branches. A while unfolds to a conditional whose true branch is its well-typed body followed by the same well-typed while, and whose false branch is skip. Its guard retains type Bool. The store is unchanged in these last three cases. These are all rules, proving the theorem. ∎

The induction here is on the transition derivation rather than merely the surface syntax. A transition inside a sequence is justified by a smaller transition derivation even when its command remains large. Naming that induction object makes the recursive use of preservation legitimate.

## Progress and finite-path safety

**Theorem 3.4 (Progress).** A well-typed configuration has command skip or has a successor.

*Proof.* Induct on command typing. Skip is final. For assignment, Lemma 3.1 gives a value, so its assignment rule applies. For a sequence, inspect its first component. If it is skip, erase it. Otherwise the command induction hypothesis gives a first-component transition and sequence-left lifts it. For a conditional, the expression lemma yields true or false, enabling exactly one branch rule. A while always has its unfolding transition; expression evaluation of its guard becomes relevant in the following conditional. Thus no well-typed nonfinal configuration lacks a transition. ∎

**Corollary 3.5.** No finite path from a well-typed configuration reaches a nonfinal stuck configuration.

*Proof.* Induct on path length using preservation to keep its last configuration well typed. Progress at that last configuration says it is final or can step, excluding the definition of stuck. ∎

The conclusion quantifies over every finite path. It allows an infinite path, including while true do skip. It also does not establish a postcondition such as a sorted result. A wrong comparison or wrong assignment can be completely type safe. Subsequent chapters supply functional specifications and termination arguments separately.

## Worked example 1: rejection before execution

Declare x:Int and flag:Bool. The command if flag then x:=x+1 else x:=0 is well typed. In a conforming store with flag=false and x=7, selection gives x:=0, then assignment returns skip with x=0 and the unchanged Boolean flag. Each intermediate configuration conforms to the same environment.

Replace the true branch by x:=flag. Its expression has type Bool while x requires Int, so assignment typing fails. The whole conditional is rejected even though this particular false-guard execution would never visit that branch. The theorem protects every conforming input, not only the one chosen trace. A more path-sensitive analysis could accept additional programmes, but it would need different rules and another soundness argument.

## Worked example 2: a safe but incorrect and diverging programme

With x:Int initially nonnegative, while x>0 do x:=x+1 is well typed. After each body execution x is still an integer and still positive if it started positive. Preservation continues to hold and progress supplies another transition forever. There is no contradiction: these are safety theorems about stuck states, not a termination proof.

If the intended specification was to return zero, the command also fails functional correctness on every positive input. Changing +1 to -1 preserves its typing but changes the termination and arithmetic reasoning. This pair separates three questions that share syntax but have different proof obligations: whether an operation accepts its arguments, whether the programme returns, and what returned states satisfy.

## References require a store typing

For heap allocation, values include addresses and types include Ref τ. A heap typing Σ maps allocated addresses to their content types. A value has reference type Ref τ when its address occurs in Σ with type τ. Heap conformance says that each allocated cell contains a value of its assigned content type, with the same heap typing used to interpret addresses stored inside other cells.

Allocation extends Σ with a fresh address rather than preserving it literally. The preservation statement becomes: a step has some extension Σ' of Σ under which the resulting command, local store and heap are well typed. Existing addresses keep their types. Deallocation needs a different discipline: merely deleting a heap binding would leave dangling references that still have a type under the old environment. Ownership, lifetimes or a runtime invalid-reference outcome must enter the statement.

The essential heap lemmas are weakening under a fresh typing extension, well-typed lookup from a conforming heap, and update with a value of the cell's assigned type. Lookup follows immediately by applying conformance at the addressed location. Update is the same pointwise argument as Lemma 3.2, now using the unchanged address typing. Weakening is induction on value/expression typing: every old address membership remains true under extension. Allocation's new cell value remains well typed by weakening, and the fresh membership proves the returned reference type. These lemmas explain the extra existential typing extension in preservation.

## Worked example 3: why aliases need one content type

Suppose p and q contain the same address ℓ, both of type Ref Int, and the heap at ℓ contains 4. Updating through p to 9 leaves the heap conforming: q subsequently reads 9, an integer. Types permit aliasing here because every alias agrees about the content type. They do not promise that the old value 4 remains true after an update.

If an unsound coercion also gave q type Ref Bool, reading q after that write could produce integer 9 where a Boolean is expected. A rule allowing unrestricted covariance of mutable references can create this conflict. Reference subtyping therefore needs care even if read-only values admit subtyping. Separation logic addresses the additional question of which component has permission to mutate a shared location; the elementary typing theorem alone does not supply exclusive ownership.

## What extensions change

Division adds a side condition that the divisor is nonzero or an explicit error result. Ordinary Int typing alone proves neither. Array access needs bounds, perhaps checked at runtime or carried by a refinement. Finite-width arithmetic can remain type safe if wraparound is defined, while an arithmetic postcondition over mathematical integers becomes false. Concurrency can preserve types but introduce data races or violate invariants. Each addition changes the language and the observation model against which safety is stated.

The original computing discussion below retains its broader examples and distinctions. The proof above supplies the previously missing complete theorem for one precise imperative language; it does not silently promote every broader claim to a theorem about references, machine code or real deployments.

## Earlier computing account: semantics and specifications

Verification needs a mathematical account of what a program step means. Semantics supplies that account; specifications state desired behavior; types and logics establish selected properties relative to the semantics.

## 1. Syntax is data

Consider commands:

$C ::= \\mathsf{skip} \\lvert x:=E \\rvert C;C \\lvert \\mathsf{if} B \\mathsf{then} C \\mathsf{else} C \\rvert \\mathsf{while} B do C$.

An abstract syntax tree distinguishes constructors. A program state $\\sigma$ maps variables to values. Expression evaluation \`eval(E,sigma)\` is defined structurally.

Concrete source text is parsed into syntax before semantic rules apply. Two formatting variants can share one syntax tree; two ambiguous parses can imply different behavior.

## 2. Small-step operational semantics

A configuration pairs command and state, written $<C,\\sigma>$. A relation $\\to$ describes one computation step. Assignment steps to \`skip\` with an updated state. Sequential composition steps its left command until \`skip\`, then continues right. A while loop unfolds into a conditional with its body followed by the loop.

The reflexive transitive closure $\\to*$ describes zero or more steps. Termination with final state $\\sigma'$ means

$<C,\\sigma> \\to* <\\mathsf{skip},\\sigma'>$.

Divergence is an infinite step sequence. If concurrency or nondeterministic input exists, one configuration may have several successors.

## 3. Big-step semantics and its boundary

Big-step judgment $<C,\\sigma> \\Downarrow \\sigma'$ relates an initial command-state pair directly to a terminating final state. It is concise for deterministic terminating computations but does not by itself distinguish divergence from a stuck configuration with no rule.

Small-step semantics exposes intermediate states, interleaving, and traces. Big-step semantics supports structural reasoning. Choosing one is part of the model, not a change in program behavior when equivalence is proved.

## 4. Assertions and contracts

An assertion is a predicate on states. Precondition $P$ states what clients must supply. Postcondition $Q$ states what a terminating computation guarantees. A frame condition states what may change.

For array maximum, precondition includes nonempty finite array and valid element order. Postcondition says returned $m$ occurs in the array and every entry is at most $m$. Merely saying $m$ is “large” cannot be verified.

## 5. Type judgments

A typing environment $\\Gamma$ maps variables to types. A judgment $\\Gamma \\vdash e : \\tau$ means expression $e$ has type $\\tau$ under the typing rules.

For simply typed functions, application rule is:

if $\\Gamma\\vdash f:\\sigma\\to \\tau$ and $\\Gamma\\vdash a:\\sigma$, then $\\Gamma\\vdash f\\,a:\\tau$.

Type safety commonly decomposes into progress and preservation:

- **preservation:** a well-typed term remains well typed after a step;
- **progress:** a closed well-typed term is a value or can step.

Together they rule out designated stuck states in the modeled calculus. They do not imply termination, freedom from resource exhaustion, or that a program meets a business requirement.

## 6. Refinements and dependent information

A refinement type enriches a base type with a predicate, such as integers $n$ satisfying $n>0$. Dependent types may let result types mention input values, such as vectors indexed by length.

More expressive specifications increase proof obligations and can make inference or checking harder. Some systems require user-supplied proofs; others restrict predicates to decidable fragments. “The type system proves it” always means a named calculus, checker, and trusted kernel.

## 7. Denotational perspective

Denotational semantics assigns mathematical meanings compositionally: commands may denote state transformers or partial functions, while loops are fixed points. Compositionality means meaning of a whole is determined by meanings of parts.

For partial functions, nontermination can be represented by undefinedness or a bottom element. Continuity conditions support constructing least fixed points from finite approximations. This is a specialist route; operational semantics remains the working model for later chapters.

## 8. Observational equivalence

Two programs are observationally equivalent when no allowed context can distinguish their specified observations. Equality of final numeric results may ignore timing, memory, exceptions, or I/O. Constant-time cryptographic reasoning deliberately includes some timing observations that ordinary functional equivalence omits.

Compiler optimization correctness therefore needs an observation model. Replacing $x*0$ by zero is valid over mathematical integers but can change floating-point NaN behavior or remove effects hidden inside evaluation of $x$.

## 9. Trusted bases and mechanization

A mechanized proof ultimately relies on a trusted computing base: parser, elaborator assumptions, logical kernel, runtime, hardware, and model-to-system connection. A small proof-checking kernel can reduce but not eliminate this boundary.

Testing a semantics implementation against examples checks the tool. A proof in the semantics establishes a theorem relative to the formal rules. Neither alone guarantees deployed hardware behaves as modeled.

## Worked derivation: typed conditional

Typing rule requires Boolean condition and same branch type:

$\\Gamma\\vdash b:\\mathsf{Bool}$, $\\Gamma\\vdash e_1:\\tau$, $\\Gamma\\vdash e_2:\\tau$

imply $\\Gamma\\vdash \\mathsf{if}\\ b\\ \\mathsf{then}\\ e_1\\ \\mathsf{else}\\ e_2:\\tau$.

If the condition steps, the whole expression steps correspondingly and preservation follows from its preservation. If condition is \`true\` or \`false\`, the term steps to a branch already known to have type $\\tau$. Progress uses that a closed well-typed Boolean is either a value $\\mathsf{true}/\\mathsf{false}$ or can step.

## Worked semantics: stores and sequencing

Let a store $\\sigma$ map variables to integers. Evaluating $x:=x+1$ reads $\\sigma(x)$, computes the mathematical sum, and returns $\\sigma[x \\mapsto \\sigma(x)+1]$. A configuration $<C1;C2,\\sigma>$ steps inside $C1$ until it becomes \`skip\`, then continues as $<C2,\\sigma'>$. This exposes intermediate stores that a big-step rule hides. If machine overflow is intended, addition needs the chosen fixed-width rule; otherwise the theorem is about mathematical integers.

## Evaluation contexts and determinism

An evaluation context marks the subexpression reduced next. In a left-to-right arithmetic language, $E ::= [] \\lvert E+e \\rvert v+E$. Unique decomposition into context and redex supports a determinism proof when every redex also has one result. Adding nondeterministic choice deliberately invalidates that theorem.

## Stuck, error, divergence, and refinement

A stuck configuration matches no rule unexpectedly. A modeled error is an explicit terminal outcome. Divergence is an infinite transition sequence. Type safety may rule out stuck states while allowing the other two, depending on its statement. Implementation $I$ refines specification $S$ when every observable behavior of $I$ is allowed by $S$. The observation model must say whether time, allocation, exceptions, and I/O are visible.

## Common errors

- Treating a parser tree as already carrying semantics.
- Calling a program safe without naming forbidden states or observations.
- Inferring termination from ordinary type safety.
- Using big-step rules to discuss intermediate concurrent interleavings.
- Claiming two programs equivalent while ignoring effects relevant to clients.
- Forgetting the formal model and checker are part of a verification claim’s assumptions.


## Exercises with complete solutions

### 1. Why is division typing insufficient to prevent division by zero? {#semantics-types-specifications-ex-1}

<details><summary>Hint 1</summary>

Inspect the values allowed by Int.

</details>

<details><summary>Hint 2</summary>

Choose an integer divisor with no quotient.

</details>

<details><summary>Solution</summary>

Both operands may be integers while the divisor value is zero; a refinement or runtime check is needed.

</details>

### 2. What does preservation alone miss? {#semantics-types-specifications-ex-2}

<details><summary>Hint 1</summary>

Separate retaining a judgement from having a transition.

</details>

<details><summary>Hint 2</summary>

A missing operational rule need not erase a typing derivation.

</details>

<details><summary>Solution</summary>

A well-typed term might be stuck while retaining a type; progress rules that out for closed modeled terms.

</details>

### 3. Give two observation models for sorting. {#semantics-types-specifications-ex-3}

<details><summary>Hint 1</summary>

Decide which client observations are retained.

</details>

<details><summary>Hint 2</summary>

Compare output-only behavior with costs or stable ordering.

</details>

<details><summary>Solution</summary>

One observes only output; another also observes comparison count or stability, so equivalence can differ.

</details>

### 4. Why state a frame condition? {#semantics-types-specifications-ex-4}

<details><summary>Hint 1</summary>

Look beyond the returned result.

</details>

<details><summary>Hint 2</summary>

Identify state that callers expect to remain untouched.

</details>

<details><summary>Solution</summary>

It prevents a routine from satisfying its postcondition while corrupting state outside its footprint.

</details>

### 5. What is syntax in a semantics? {#semantics-types-specifications-ex-5}

<details><summary>Hint 1</summary>

Distinguish characters from constructors.

</details>

<details><summary>Hint 2</summary>

The parser is a separate map into inductive data.

</details>

<details><summary>Solution</summary>

Inductively defined data, not raw text; a parser connects source characters to that tree.

</details>

### 6. Contrast small-step and big-step. {#semantics-types-specifications-ex-6}

<details><summary>Hint 1</summary>

Compare a single transition with a whole evaluation tree.

</details>

<details><summary>Hint 2</summary>

Ask where intermediate stores are visible.

</details>

<details><summary>Solution</summary>

Small-step exposes intermediate states and paths; big-step relates a program directly to a final result.

</details>

### 7. Why can big-step hide divergence? {#semantics-types-specifications-ex-7}

<details><summary>Hint 1</summary>

Consider two reasons for having no finite evaluation tree.

</details>

<details><summary>Hint 2</summary>

One may have infinitely many steps and another none.

</details>

<details><summary>Solution</summary>

Ordinary inductive evaluation has no finite derivation for divergence and may also omit stuck terms.

</details>

### 8. What store follows $x:=x+1$ from $x=4$? {#semantics-types-specifications-ex-8}

<details><summary>Hint 1</summary>

Use the assignment update equation.

</details>

<details><summary>Hint 2</summary>

Read old x before replacing its binding.

</details>

<details><summary>Solution</summary>

It maps $x$ to $5$ and preserves all other variables under mathematical-integer semantics.

</details>

### 9. What does an evaluation context select? {#semantics-types-specifications-ex-9}

<details><summary>Hint 1</summary>

State an evaluation order first.

</details>

<details><summary>Hint 2</summary>

The hole marks the next active subexpression.

</details>

<details><summary>Solution</summary>

The next reducible subexpression according to a declared evaluation order.

</details>

### 10. How can semantics be nondeterministic? {#semantics-types-specifications-ex-10}

<details><summary>Hint 1</summary>

Count applicable rules at one configuration.

</details>

<details><summary>Hint 2</summary>

Two allowed successors need not be equal.

</details>

<details><summary>Solution</summary>

More than one transition rule can apply to one configuration, permitting different successors.

</details>

### 11. Separate stuck from modeled error. {#semantics-types-specifications-ex-11}

<details><summary>Hint 1</summary>

Inspect the language of outcomes.

</details>

<details><summary>Hint 2</summary>

An explicit error constructor is already classified by the semantics.

</details>

<details><summary>Solution</summary>

Stuck is an unclassified lack of a step; modeled error is an explicit specified outcome.

</details>

### 12. Does progress prove termination? {#semantics-types-specifications-ex-12}

<details><summary>Hint 1</summary>

Use while true do skip.

</details>

<details><summary>Hint 2</summary>

Every finite prefix can be extended.

</details>

<details><summary>Solution</summary>

No. A well-typed term can keep taking steps forever.

</details>

### 13. What does refinement preserve? {#semantics-types-specifications-ex-13}

<details><summary>Hint 1</summary>

Write the direction of behavior inclusion.

</details>

<details><summary>Hint 2</summary>

An implementation must not add a forbidden observation.

</details>

<details><summary>Solution</summary>

Every implementation observation must be among those allowed by the specification.

</details>

### 14. Why can timing distinguish equal functions? {#semantics-types-specifications-ex-14}

<details><summary>Hint 1</summary>

Extend the observation beyond the returned value.

</details>

<details><summary>Hint 2</summary>

A client may measure an execution property.

</details>

<details><summary>Solution</summary>

If time is observable, equal returned values do not imply contextual equivalence.

</details>

### 15. Name the mechanized trusted base. {#semantics-types-specifications-ex-15}

<details><summary>Hint 1</summary>

Separate logical assumptions from machine execution.

</details>

<details><summary>Hint 2</summary>

The theorem statement still needs an interpretation in the system.

</details>

<details><summary>Solution</summary>

Definitions, axioms, elaboration assumptions, checking kernel, and statement-to-system interpretation.

</details>

### 16. Why validate model-to-code translation? {#semantics-types-specifications-ex-16}

<details><summary>Hint 1</summary>

Identify the object proved correct.

</details>

<details><summary>Hint 2</summary>

A model theorem covers only represented behavior.

</details>

<details><summary>Solution</summary>

A correct theorem about a model does not cover implementation behavior omitted by the translation.

</details>

## Chapter summary

Type safety is a theorem about a specified language and forbidden outcomes. Total typed expression evaluation and store conformance support command preservation and progress; induction on finite paths then excludes stuck states. Heap allocation requires an extending heap typing, while ownership, termination and functional specifications add separate obligations. The earlier computing examples remain part of this chapter under their original hypotheses.

## Sources

The full earlier computing chapter \`semantics-types-specifications\` is incorporated above with its original sixteen questions and answers. The progress/preservation method follows the standard approach of Benjamin Pierce, *Types and Programming Languages*; the concrete integer/Boolean imperative proof here is new exposition.
`;export{e as default};