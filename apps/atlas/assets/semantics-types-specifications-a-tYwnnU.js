var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: semantics-types-specifications
title: "Operational Semantics, Types, and Specifications"
level: advanced-undergraduate
estimated_minutes: 135
license: CC BY-SA 4.0
---

# Operational Semantics, Types, and Specifications

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

## Practice with solutions

1. **Why is division typing insufficient to prevent division by zero?** Both operands may be integers while the divisor value is zero; a refinement or runtime check is needed.
2. **What does preservation alone miss?** A well-typed term might be stuck while retaining a type; progress rules that out for closed modeled terms.
3. **Give two observation models for sorting.** One observes only output; another also observes comparison count or stability, so equivalence can differ.
4. **Why state a frame condition?** It prevents a routine from satisfying its postcondition while corrupting state outside its footprint.
5. **What is syntax in a semantics?** Inductively defined data, not raw text; a parser connects source characters to that tree.
6. **Contrast small-step and big-step.** Small-step exposes intermediate states and paths; big-step relates a program directly to a final result.
7. **Why can big-step hide divergence?** Ordinary inductive evaluation has no finite derivation for divergence and may also omit stuck terms.
8. **What store follows $x:=x+1$ from $x=4$?** It maps $x$ to $5$ and preserves all other variables under mathematical-integer semantics.
9. **What does an evaluation context select?** The next reducible subexpression according to a declared evaluation order.
10. **How can semantics be nondeterministic?** More than one transition rule can apply to one configuration, permitting different successors.
11. **Separate stuck from modeled error.** Stuck is an unclassified lack of a step; modeled error is an explicit specified outcome.
12. **Does progress prove termination?** No. A well-typed term can keep taking steps forever.
13. **What does refinement preserve?** Every implementation observation must be among those allowed by the specification.
14. **Why can timing distinguish equal functions?** If time is observable, equal returned values do not imply contextual equivalence.
15. **Name the mechanized trusted base.** Definitions, axioms, elaboration assumptions, checking kernel, and statement-to-system interpretation.
16. **Why validate model-to-code translation?** A correct theorem about a model does not cover implementation behavior omitted by the translation.

[Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};