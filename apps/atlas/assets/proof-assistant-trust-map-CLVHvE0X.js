var e=`---
parent_id: book-types-proofs-construction
chapter_id: proof-assistant-trust-map
title: "Proof assistant trust map"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Proof assistant trust map

A proof assistant is a tool for developing and checking formal proofs. This chapter maps the components of a modern proof assistant, explains what a kernel-checked theorem actually guarantees, and identifies the limits of that guarantee.

## Components of a proof assistant

A modern proof assistant typically contains:

**Kernel.** A small program that checks terms against the typing rules of the foundational type theory. The kernel is the trusted base.




















**Elaborator.** Translates user-friendly syntax into kernel terms. It resolves implicit arguments, inserts coercions, and checks universe constraints.




















**Tactics.** Programs that construct proof terms. Tactics automate proof search, rewriting, induction, and decision procedures.




















**Libraries.** Collections of definitions, theorems, and notations built by the community.




















**Extraction and evaluation.** Machinery for extracting executable programs from proofs and evaluating terms.




















**Compiler, runtime, operating system, hardware.** The full computing stack on which the proof assistant runs.




















![A proof assistant trust map separating rechecked inputs, the logical and execution trust boundaries, and the human-audited specification bridge](figures/kernel-trust-map.svg)

The arrows separate three questions. The kernel rechecks terms produced by authoring tools; the kernel itself runs on an execution stack; and matching the checked specification to the intended theorem remains a distinct mathematical audit.

## What the kernel guarantees

A kernel-checked theorem guarantees that the proof term has the stated type in the stated type theory, relative to the kernel implementation, the foundational axioms, and the definitions used.

This is a formal guarantee, but it is relative. It does not certify that:

- The formal statement matches the intended informal claim.
- The definitions encode the intended mathematical objects.
- The chosen definitions and imported declarations express the intended mathematics.
- The computing stack is free of bugs.

The **specification bridge**---the connection between the formal statement and the informal problem---remains human mathematical work.

## The trusted computing base

For the logical checking claim, the trusted base includes:

- The kernel source code.
- The type theory and axioms it implements.
- The compiler, runtime, OS, and hardware.

Proof terms produced by tactics and proof bodies imported from libraries are evidence supplied to the kernel; they need not be trusted when the kernel rechecks them. Axioms, opaque declarations, and the formal statement itself remain assumptions or specification choices, and definitions must be audited for correspondence with the intended claim. This distinction separates logical checking from the broader specification and execution trust story.

Reducing the trusted base is an active area of research. Some projects use verified kernels (kernels whose correctness is proved in another system), and others use proof-checking independent of the original assistant.

## Common errors

**Error: equating kernel-checked with absolutely true.** A kernel-checked theorem is true relative to its foundation and implementation. The foundation may include axioms (choice, univalence, function extensionality) that are not universally accepted, and the implementation may contain bugs.

**Error: ignoring the specification bridge.** A formally verified theorem about a formally defined object is only as meaningful as the definition. If the definition does not capture the intended concept, the theorem is formally correct but mathematically empty.

**Error: trusting tactics blindly.** Tactics construct proof terms, but a buggy tactic may construct an invalid proof. The kernel checks the final term, so a buggy tactic cannot produce a false theorem unless the kernel also has a bug. However, tactics may produce inefficient or unexpected proof terms.

## Practice exercises

### Exercise 1
<a id="proof-assistant-trust-map-ex-1"></a>
List the components of the trusted computing base for a kernel-checked theorem.


<details><summary>Hint 1</summary>

Separate the checking computation from the adequacy of its statement.

</details>
<details><summary>Hint 2</summary>

Rechecked evidence inputs are not the same category as axioms or kernel code.

</details>
<details><summary>Solution</summary>

For the checking computation: the kernel implementation, its type theory and conversion rules, declared axioms, and the compiler/runtime/hardware stack on which it runs. Rechecked proof terms and theorem bodies are inputs rather than logically trusted code. Separately, confidence in the intended theorem requires auditing the formal statement, definitions, and any opaque imported declarations.

</details>

### Exercise 2
<a id="proof-assistant-trust-map-ex-2"></a>
Explain why a kernel-checked theorem does not certify that the formal statement matches the informal problem.


<details><summary>Hint 1</summary>

The kernel checks a formal expression against a formal statement.

</details>
<details><summary>Hint 2</summary>

Relating that statement to an informal problem needs a separate mathematical argument.

</details>
<details><summary>Solution</summary>

The formal statement is a syntactic object in the type theory. Its connection to the informal mathematical claim is established by human judgment in defining the encoding. The kernel checks the formal proof, not the adequacy of the encoding.

</details>

### Exercise 3
<a id="proof-assistant-trust-map-ex-3"></a>
What is the role of the elaborator, and why is it not part of the trusted base in most designs?


<details><summary>Hint 1</summary>

The frontend proposes a core term.

</details>
<details><summary>Hint 2</summary>

Its output must be rechecked rather than trusted because it was elaborated.

</details>
<details><summary>Solution</summary>

The elaborator translates user syntax into kernel terms. It is not trusted because the kernel independently checks the elaborated term. If the elaborator produces an incorrect term, the kernel rejects it.

</details>

### Exercise 4
<a id="proof-assistant-trust-map-ex-4"></a>
How can the trusted base be reduced?


<details><summary>Hint 1</summary>

Reduce dependencies without forgetting the remaining assumptions.

</details>
<details><summary>Hint 2</summary>

Independent checking and verification of components each have their own trust conditions.

</details>
<details><summary>Solution</summary>

By verifying the kernel in another system, by using independent proof checkers, by minimizing axioms, by auditing definitions and libraries, and by running on verified hardware and compilers.

</details>

## Chapter summary

A proof assistant provides high-assurance formal verification relative to its trusted base. The kernel checks proof terms against the type theory, but the guarantee is conditional on the kernel's correctness, the adequacy of definitions, and the integrity of the computing stack. The specification bridge between formal and informal mathematics remains human work.

**Backward pointers:** This chapter draws on the type theories from Chapters 3, 6, 7, and 8, and the constructive principles from Chapters 9, 10, 11, and 12.

**Forward pointers:** Readers interested in practical formalization should consult the Atlas's computational and applied books. The proof-reference shelf develops the theoretical foundations further.


## Typing derivations, equality and a worked trust audit

The following computing-course source develops the earlier trust distinctions with a complete small-language safety argument, substitution proof, reference code and its original solved practice.

# Type Systems, Proof Terms, and Proof-Assistant Trust

A type system is a tractable logic of program phrases. It rules out specified bad states before execution, but only relative to its syntax, semantics, and soundness theorem. Proof assistants extend this idea: proofs become checkable terms, while the trusted kernel remains a real implementation with a precisely bounded job.

## 1. Judgments and contexts

A typing judgment $\\Gamma \\vdash e : \\tau$ says expression $e$ has type $\\tau$ under assumptions $\\Gamma$. A context maps variables to types. Rules are inference schemas: a variable has the type assigned by the context; a numeral has type $\\mathsf{Nat}$; and addition requires two natural-number operands.

Derivations are trees, not executions. Type checking asks whether a valid derivation exists, often constructing one algorithmically.

## 2. Simply typed functions

For function abstraction, if $\\Gamma,x:\\sigma \\vdash e:\\tau$, then $\\Gamma \\vdash \\lambda x.e : \\sigma \\to \\tau$. Application eliminates a function type: from $\\Gamma\\vdash f:\\sigma\\to\\tau$ and $\\Gamma\\vdash a:\\sigma$, infer $\\Gamma\\vdash f\\,a:\\tau$. The function contract is encoded at a coarse structural level.

Products model paired evidence. Sums model alternatives whose consumer must handle both injections. Recursive types model lists and trees, usually with a positivity or guardedness condition.

## 3. Operational soundness

Type safety is commonly split into progress and preservation. Progress: a closed well-typed expression is a value or can step. Preservation: if a well-typed expression steps, the result has the same type. Together they say evaluation does not become stuck in one of the semantics' unclassified states.

They do not say the program terminates, meets a business requirement, avoids excessive memory, or has no logic error. The definition of “stuck” itself determines the boundary.

## 4. Proof terms and propositions

Under Curry–Howard, a proposition corresponds to a type and a proof to a term inhabiting it. An implication $P \\to Q$ is a function transforming evidence of $P$ into evidence of $Q$; conjunction is a pair; disjunction is a tagged alternative; falsity has no constructor.

To prove $P \\to P$, the term is $\\lambda x.x$. To prove $P \\land Q \\to Q \\land P$, destructure the input pair and swap its fields. Computation simplifies proofs through beta reduction.

## 5. Dependent types

In a dependent function type $(x:A) \\to B(x)$, the result type may mention the input. A vector type $Vec A n$ can record length, so append has type $Vec A m \\to Vec A n \\to Vec A (m+n)$. This moves an invariant from comments into an interface.

Not every property should be encoded maximally. Rich types can increase proof burden, complicate inference, or rely on costly equality. The useful boundary depends on risks and maintenance.

## 6. Inductive definitions and elimination

An inductive natural number has constructors zero and successor. Its eliminator is induction: prove a motive at zero and preserve it through successor. An inductive list has empty and cons constructors; structural recursion must make calls on immediate substructure.

Strict positivity prevents definitions that place the new type to the left of an arrow in ways that can encode paradox. Termination checkers and guarded corecursion protect logical consistency when programs also serve as proofs.

## 7. Equality and rewriting

Propositional equality has reflexivity evidence and an eliminator allowing replacement of equals by equals. Rewriting is justified by that eliminator, not textual substitution without binding checks. Definitional equality is computation the kernel performs automatically; propositional equality needs a proof term. Confusing them causes mysterious elaboration failures.

## 8. Automation and proof search

Tactics construct proof terms. A tactic's bug is contained if a small kernel checks the generated term; an admitted axiom or unsafe kernel extension changes the logical basis. Automation success is not itself an explanation, so durable developments keep statements, dependencies, and generated obligations visible.

Decision procedures can produce certificates for arithmetic or equality. Reflection proves a checker correct once, computes a certificate, and lets the kernel validate the result. The trust story includes parser, elaborator, kernel, axiom set, and artifact-to-claim translation.

## 9. Dependency-free typed-expression checker

\`\`\`python
def infer(term, context=None):
    context = {} if context is None else context
    if not isinstance(term, tuple) or not term or not isinstance(term[0], str):
        raise TypeError("malformed syntax")
    tag = term[0]
    if tag == "nat":
        if (len(term) != 2 or isinstance(term[1], bool)
                or not isinstance(term[1], int) or term[1] < 0):
            raise TypeError("malformed natural literal")
        return "Nat"
    if tag == "bool":
        if len(term) != 2 or not isinstance(term[1], bool):
            raise TypeError("malformed Boolean literal")
        return "Bool"
    if tag == "var":
        if len(term) != 2 or not isinstance(term[1], str):
            raise TypeError("malformed variable")
        if term[1] not in context:
            raise TypeError("unbound variable")
        return context[term[1]]
    if tag == "add":
        if len(term) != 3:
            raise TypeError("malformed addition")
        left, right = infer(term[1], context), infer(term[2], context)
        if (left, right) != ("Nat", "Nat"):
            raise TypeError("addition needs Nat operands")
        return "Nat"
    if tag == "if":
        if len(term) != 4:
            raise TypeError("malformed conditional")
        condition = infer(term[1], context)
        yes, no = infer(term[2], context), infer(term[3], context)
        if condition != "Bool" or yes != no:
            raise TypeError("ill-typed conditional")
        return yes
    raise TypeError("unknown syntax")

if __name__ == "__main__":
    assert infer(("add", ("nat", 2), ("nat", 3))) == "Nat"
    assert infer(("if", ("bool", True), ("nat", 1), ("nat", 0))) == "Nat"
    try:
        infer(("add", ("bool", True), ("nat", 1)))
    except TypeError:
        pass
    else:
        raise AssertionError("bad term was accepted")
    for malformed in (("nat", -1), ("nat", "oops"), ("nat",),
                      ("bool", 0), ("bool", True, False)):
        try:
            infer(malformed)
        except TypeError:
            pass
        else:
            raise AssertionError("malformed literal was accepted")
\`\`\`

This checker covers a tiny first-order language, not functions or dependent types. Its soundness theorem would relate accepted syntax to the corresponding evaluator.

## 10. Trusted computing base

A checked theorem depends on definitions, imported axioms, the kernel, and correct interpretation of the formal statement. Compilation to executable code adds extraction or compiler correctness. Connecting a model to physical software adds representation and environment assumptions. “Machine checked” is valuable evidence with an envelope, not a synonym for universally true.

Reproducible proof builds should pin tool versions, list axioms, reject unfinished holes, and retain source and logs. Independent statement review is still needed: a flawless proof of the wrong theorem is not success.

## 11. A small-step language and its safety theorem

Consider expressions

$e ::= n \\lvert \\mathsf{true} \\rvert \\mathsf{false} \\lvert e+e \\rvert \\mathsf{if} e \\mathsf{then} e \\mathsf{else} e$.

Values are numerals and Boolean literals. Evaluation contexts choose the
leftmost unfinished subexpression. The computation rules include

$n_{1}+n_{2} \\to n_{3}$ when the mathematical sum is $n_{3}$,

$\\mathsf{if} \\mathsf{true} \\mathsf{then} e_{1} \\mathsf{else} e_{2} \\to e_{1}$,

$\\mathsf{if} \\mathsf{false} \\mathsf{then} e_{1} \\mathsf{else} e_{2} \\to e_{2}$.

Congruence rules step the selected operand or condition. Typing gives numerals
type $\\mathsf{Nat}$, Boolean literals type $\\mathsf{Bool}$, addition type $\\mathsf{Nat}$ when both operands
do, and a conditional type $\\tau$ when its condition has type $\\mathsf{Bool}$ and both
branches have the same type $\\tau$.

**Lemma 16.1 (Canonical forms).** A closed value of type $\\mathsf{Nat}$ is a numeral; a closed
value of type $\\mathsf{Bool}$ is \`true\` or \`false\`. The proof inspects the possible value
constructors and their final typing rules. This apparently modest lemma is the
bridge from a static type to the dynamic rule that can fire.

**Progress proof sketch.** Induct on the typing derivation. Literals are
values. For addition, apply induction to the left operand; if it steps, use a
congruence rule. If it is a value, canonical forms says it is a numeral, and
the same analysis on the right either steps it or exposes two numerals for the
addition rule. For a conditional, the condition either steps or canonical
forms exposes \`true\` or \`false\`, selecting a branch. Every syntax constructor
must be covered; an omitted error expression changes the theorem.

**Preservation proof sketch.** Induct on the evaluation step. Arithmetic on two
numerals produces another numeral, hence retains $\\mathsf{Nat}$. Conditional reduction
selects a branch already known to have the conditional's type. Congruence
cases use the induction hypothesis to rebuild the outer typing derivation.
Consequently a closed well-typed expression never reaches a nonvalue with no
rule. An infinite reduction remains possible in a language later extended
with general recursion.

## 12. Substitution: the load-bearing lemma for functions

Adding variables, lambda abstraction, and application introduces beta
reduction:

$(\\lambda x.e) v \\to e[x:=v]$.

Preservation for this step depends on substitution:

> If $\\Gamma,x:\\sigma \\vdash e:\\tau$ and $\\Gamma \\vdash v:\\sigma$, then
> $\\Gamma \\vdash e[x:=v]:\\tau$.

The proof is by induction on the typing derivation for $e$. The variable case
splits on whether the variable is $x$. Constructor cases apply induction to
subterms. Under a lambda binder, bound variables must be renamed when needed
to prevent capture. Text replacement that turns $\\lambda y.x$ with substituted
term $y$ into $\\lambda y.y$ is wrong: it changes a free $y$ into a bound one.

**Worked derivation.** In context $f:\\mathsf{Nat}\\to \\mathsf{Bool}, x:\\mathsf{Nat}$, application gives
$f x:\\mathsf{Bool}$, so abstraction gives
$f:\\mathsf{Nat}\\to \\mathsf{Bool} \\mid - \\lambda x. f x : \\mathsf{Nat}\\to \\mathsf{Bool}$. Applying this function to numeral
$3$ beta-reduces to $f 3$. Substitution supplies the preserved typing
$\\mathsf{Bool}$. Nothing in this derivation says which Boolean $f 3$ returns or whether
that Boolean represents an intended business predicate.

Weakening and exchange are related structural lemmas: unused assumptions may
be added, and distinct context bindings may be reordered when the context
model permits it. Linear type systems deliberately change these rules so that
resources cannot be duplicated or discarded freely. A proof copied from the
ordinary simply typed calculus may fail because the context algebra changed.

## 13. Type inference, constraints, and principal types

Checking a term against a supplied type and inferring a type from the term are
different algorithmic problems. In a simply typed language with annotations,
checking is syntax directed. In Hindley–Milner-style inference, fresh type
variables and equality constraints are generated, then unified.

For $\\lambda f. \\lambda x. f x$, assign $f:\\alpha$ and $x:\\beta$. Application
requires $\\alpha=\\beta\\to \\gamma$ for fresh $\\gamma$; the inferred principal type is

$(\\beta\\to \\gamma) \\to \\beta \\to \\gamma$.

Every other valid monomorphic type is an instance obtained by substituting for
$\\beta$ and $\\gamma$. The occurs check prevents solving $\\alpha=\\alpha\\to \\beta$,
which would construct an infinite simple type. Let-polymorphism generalizes
eligible variables at bindings, while mutable references or effects require a
value restriction or another disciplined design to avoid unsound reuse.

Bidirectional typing divides rules into synthesis $\\Gamma \\vdash e \\Rightarrow \\tau$ and
checking $\\Gamma \\vdash e \\Leftarrow \\tau$. Variables and annotated terms synthesize;
lambdas often check against an expected function type. The method makes
information flow explicit and reduces guessing, especially with subtyping or
dependent terms. It is an algorithm design, not a different meaning of the
typing theorem: one proves the checker sound and, for its declared fragment,
complete relative to the declarative rules.

Three inference diagnostics recur:

- a type error should identify the two incompatible constraints and their
  source spans, not merely print the final unification failure;
- implicit coercions must appear in elaborated terms because soundness concerns
  the inserted operations as well as surface syntax;
- polymorphic generalization points must be specified, since generalizing every
  intermediate expression can accept programs outside the intended calculus.

## 14. Dependent indices and the equality boundary

Suppose vectors have constructors

$nil : Vec A 0$,

$cons : A \\to Vec A n \\to Vec A (n+1)$.

The head function can require $Vec A (n+1)$, making the empty case impossible
at the call boundary. Append is proved by recursion on its first vector. The
empty branch returns the second vector of length $m$, definitionally equal to
$0+m$. The cons branch recursively constructs length $n+m$, then $cons$
produces $(n+m)+1$. Depending on how addition recurses, the goal may expect
$(n+1)+m$; a propositional associativity or successor lemma transports the
term between equal indices.

This is a productive friction: it exposes which arithmetic equalities an API
uses. But indices do not verify element-level meaning automatically. A
length-preserving “sort” that returns the input unchanged has the correct
vector length and may still violate ordering. Stronger result types can carry
sortedness and permutation evidence, at additional proof and automation cost.

Definitional equality should remain predictable and terminating because the
kernel invokes it constantly. Adding arbitrary theorem proving to conversion
would make type checking unpredictable or undecidable. Proof assistants keep a
small computational equality and request explicit proofs for richer algebraic
facts. When a rewrite fails, first inspect normal forms and binder directions;
do not add an axiom merely to silence an elaboration mismatch.

## 15. Kernel, elaborator, and exported claim: a worked trust audit

Imagine a tactic proves a theorem about a verified parser. The human writes
notation-rich source; an elaborator inserts implicit arguments and resolves
overloading; a tactic searches; the kernel checks the resulting core term; an
exporter prints a report. The evidence chain contains distinct failure modes.

1. A tactic bug that proposes an ill-typed term is caught by a correct kernel.
2. An elaborator bug can be caught if the kernel checks the elaborated term,
   but the accepted term might formalize a different statement than the source
   display suggested. Inspecting the fully elaborated theorem matters.
3. An unsound axiom, kernel bug, or unsafe native shortcut lies inside the
   logical trusted base and can permit false inhabitants.
4. A correct formal parser theorem may still concern an abstract token stream
   unlike the production byte decoder. That is a model-to-system gap, not a
   failure of Curry–Howard.
5. A report generator can attach the correct proof hash to the wrong prose
   claim. Signed or hashed linkage and independent claim review reduce this
   presentation risk.

A strong artifact records theorem names and normalised statements, imported
axioms, source and tool hashes, kernel-check command, and the precise adapter
connecting real inputs to formal data. “The build is green” is then a
reproducible observation inside an articulated trust envelope.

## 16. Error diagnostics for formal developments

- **Vacuous premise:** inspect whether an assumption is contradictory or an
  input type has no constructors. A theorem can be easily true because no
  admissible instance exists.
- **Wrong quantifier order:** $\\forall x, \\exists y$ can select $y$ from $x$;
  $\\exists y, \\forall x$ requires one uniform witness. Automation may solve the
  former while the intended specification was the latter.
- **Hidden classical assumptions:** excluded middle, choice, quotient axioms,
  or extensionality may be legitimate, but they change constructivity and must
  appear in dependency reports.
- **Unfinished evidence:** placeholders, admitted lemmas, solver timeouts
  treated as success, and cached objects from different sources invalidate a
  clean-proof claim.
- **Overstrong extraction claim:** logical normalisation does not by itself
  bound runtime, stack use, foreign calls, or compiler behaviour of extracted
  code.
- **Specification drift:** examples and informal docs should be tested against
  the formal interface; otherwise a maintained proof can become evidence for
  an obsolete contract.

## 17. Normalization and logical relations

Progress and preservation say well-typed execution does not become stuck, but
they do not by themselves prove that execution finishes. The simply typed
lambda calculus without general recursion is in fact strongly normalising:
every beta-reduction sequence terminates. The outline below proves the narrower
claim that the fixed call-by-value evaluation strategy terminates. A full
strong-normalization proof instead uses reducibility candidates formulated to
control every beta-reduction sequence, with reduction closure and appropriate
neutral-expansion or saturation conditions; that strengthening is an imported
result here. Direct induction on typing is awkward because beta reduction substitutes
a term and can increase syntax size.

A call-by-value logical-relations proof assigns each type a semantic predicate of “good”
terms. At base types, a closed term is good when the chosen evaluation strategy terminates in a canonical
value. At function type $\\sigma\\to \\tau$, a term is good when that strategy terminates and,
whenever applied to any good argument of type $\\sigma$, produces a good result
of type $\\tau$. This definition follows type structure rather than term size.

The fundamental lemma states that a well-typed open term becomes good after
substituting good closed terms for all variables in its context. Its proof is
by induction on the typing derivation. The application case uses the semantic
function clause; abstraction uses an arbitrary good argument and the induction
hypothesis for the body. Applying the lemma to a closed well-typed term with
the empty substitution yields call-by-value normalisation. This derivation does
not by itself quantify over every possible beta-reduction path.

The method scales beyond termination. By changing the relation, one can prove
representation independence, compiler-pass preservation, noninterference, or
parametricity. For example, a truly polymorphic closed function of type
$\\forall A. A\\to A$, in a pure total calculus with no type inspection, cannot
manufacture an $A$; relational reasoning forces identity-like behaviour. The
exact conclusion depends on effects, bottom values, and observational
equivalence, so the language hypotheses belong beside the slogan “theorems for
free.”

Proof assistants must distinguish normalisation used by the kernel from a
user theorem about a modelled language. If definitional equality relies on
normalising arbitrary kernel terms, termination is part of the trusted
metatheory. Adding unchecked general recursion would threaten decidable type
checking and logical consistency. A separate partial-programming monad or
well-founded recursion principle can express computations while keeping the
kernel's conversion discipline explicit.

## Practice with fully explained solutions

### Exercise 5
<a id="type-systems-proof-assistants-ex-1"></a>
What does $\\Gamma \\vdash e:\\tau$ record?

<details><summary>Hint 1</summary>

Read the judgement as a typing derivation.

</details>
<details><summary>Hint 2</summary>

The context contains assumptions; it is not an execution state.

</details>
<details><summary>Solution</summary>

A derivable type for expression $e$ under variable assumptions $\\Gamma$; it is not yet an evaluation result.

</details>

### Exercise 6
<a id="type-systems-proof-assistants-ex-2"></a>
Type $\\lambda x.x$ when $x:\\mathsf{Bool}$.

<details><summary>Hint 1</summary>

Apply the variable rule, then discharge the input.

</details>
<details><summary>Hint 2</summary>

The abstraction has Boolean domain and codomain.

</details>
<details><summary>Solution</summary>

The body has $\\mathsf{Bool}$ by the variable rule, so abstraction gives $\\mathsf{Bool} \\to \\mathsf{Bool}$.

</details>

### Exercise 7
<a id="type-systems-proof-assistants-ex-3"></a>
When is $f a$ typeable?

<details><summary>Hint 1</summary>

Inspect the application rule.

</details>
<details><summary>Hint 2</summary>

The function domain must match the argument type.

</details>
<details><summary>Solution</summary>

When $f:\\sigma\\to \\tau$ and $a:\\sigma$ in the same context; the result is $\\tau$.

</details>

### Exercise 8
<a id="type-systems-proof-assistants-ex-4"></a>
What does progress exclude?

<details><summary>Hint 1</summary>

Compare a nonvalue with the transition relation.

</details>
<details><summary>Hint 2</summary>

Progress excludes a stuck state, not an infinite run.

</details>
<details><summary>Solution</summary>

A closed well-typed nonvalue with no transition. It does not exclude nontermination.

</details>

### Exercise 9
<a id="type-systems-proof-assistants-ex-5"></a>
What does preservation say?

<details><summary>Hint 1</summary>

Follow one step of the evaluator.

</details>
<details><summary>Hint 2</summary>

The resulting expression retains the original type.

</details>
<details><summary>Solution</summary>

One evaluation step retains the expression's type, preventing transitions outside the proved type invariant.

</details>

### Exercise 10
<a id="type-systems-proof-assistants-ex-6"></a>
Why need both progress and preservation?

<details><summary>Hint 1</summary>

Apply progress again after the first step.

</details>
<details><summary>Hint 2</summary>

Preservation supplies its required well-typedness premise.

</details>
<details><summary>Solution</summary>

Progress starts a safe step; preservation allows the argument to be repeated after every step.

</details>

### Exercise 11
<a id="type-systems-proof-assistants-ex-7"></a>
Give a typed but incorrect program.

<details><summary>Hint 1</summary>

Choose a function returning an allowed output at the wrong value.

</details>
<details><summary>Hint 2</summary>

A coarse type can omit the required arithmetic relationship.

</details>
<details><summary>Solution</summary>

A $\\mathsf{Nat} \\to \\mathsf{Nat}$ tax calculation that returns zero always is type safe yet violates its intended financial formula.

</details>

### Exercise 12
<a id="type-systems-proof-assistants-ex-8"></a>
What term proves $P \\to P$?

<details><summary>Hint 1</summary>

Return the supplied evidence unchanged.

</details>
<details><summary>Hint 2</summary>

Implication introduction abstracts over that evidence.

</details>
<details><summary>Solution</summary>

$\\lambda x.x$; assuming evidence $x:P$, return that evidence unchanged.

</details>

### Exercise 13
<a id="type-systems-proof-assistants-ex-9"></a>
How is conjunction represented?

<details><summary>Hint 1</summary>

Both component proofs must be present.

</details>
<details><summary>Hint 2</summary>

The eliminators project those two proofs.

</details>
<details><summary>Solution</summary>

As a product containing evidence of both propositions; projections recover each component.

</details>

### Exercise 14
<a id="type-systems-proof-assistants-ex-10"></a>
How is disjunction consumed safely?

<details><summary>Hint 1</summary>

Each possible tag needs a branch.

</details>
<details><summary>Hint 2</summary>

Both branches must have one common result type.

</details>
<details><summary>Solution</summary>

Case analysis handles both tags, producing the same target type from either branch.

</details>

### Exercise 15
<a id="type-systems-proof-assistants-ex-11"></a>
What does $Vec A n$ improve?

<details><summary>Hint 1</summary>

Identify the indexed invariant.

</details>
<details><summary>Hint 2</summary>

Length does not by itself encode ordering or element preservation.

</details>
<details><summary>Solution</summary>

Length becomes part of the interface, so operations can state and preserve dimension relations statically.

</details>

### Exercise 16
<a id="type-systems-proof-assistants-ex-12"></a>
Why restrict recursion in a proof assistant?

<details><summary>Hint 1</summary>

Compare a typed fixed point with the empty type.

</details>
<details><summary>Hint 2</summary>

An unrestricted loop defeats the terminating-evidence interpretation.

</details>
<details><summary>Solution</summary>

Unrestricted general recursion can inhabit false propositions through nontermination, destroying consistency of proofs-as-programs.

</details>

### Exercise 17
<a id="type-systems-proof-assistants-ex-13"></a>
Separate definitional and propositional equality.

<details><summary>Hint 1</summary>

Separate computation from an explicit identity proof.

</details>
<details><summary>Hint 2</summary>

Transport uses the latter when conversion does not suffice.

</details>
<details><summary>Solution</summary>

Definitional equality follows kernel computation; propositional equality is a type inhabited by explicit evidence.

</details>

### Exercise 18
<a id="type-systems-proof-assistants-ex-14"></a>
Why can untrusted tactics be safe?

<details><summary>Hint 1</summary>

A tactic proposes evidence to a checker.

</details>
<details><summary>Hint 2</summary>

Its bug is contained only under the stated rechecking assumption.

</details>
<details><summary>Solution</summary>

If they only propose terms and a trusted kernel independently checks every term, a tactic bug yields rejection rather than a false theorem.

</details>

### Exercise 19
<a id="type-systems-proof-assistants-ex-15"></a>
What do admitted axioms change?

<details><summary>Hint 1</summary>

Read the declaration context.

</details>
<details><summary>Hint 2</summary>

An admitted principle is a premise rather than a derived theorem.

</details>
<details><summary>Solution</summary>

They enlarge the assumptions from which theorems follow; audit output must list them rather than present results as assumption free.

</details>

### Exercise 20
<a id="type-systems-proof-assistants-ex-16"></a>
Why review a checked statement?

<details><summary>Hint 1</summary>

Compare the formal proposition to the intended requirement.

</details>
<details><summary>Hint 2</summary>

A proof of a different statement cannot supply the missing interpretation.

</details>
<details><summary>Solution</summary>

The kernel ensures the formal conclusion follows from formal premises, not that the formalization matches the intended real-world claim.

</details>


## Proof-development audit

## Worked example 1: a tiny checker and its semantic claim

The preserved reference listing assigns natural literals type Nat and Boolean literals type Bool. For an addition expression with natural operands two and three, its syntax-directed rule returns Nat. An expression adding true to three fails the operand-type requirement. These are expected consequences of the displayed code, not reports that it has been run. The corresponding mathematical evaluator sends a pair of natural values to their sum; it has no mixed Boolean/natural addition rule.

To establish checker soundness for the full tiny grammar, induct on the accepted syntax. Accepted literals have the declared value shape. Accepted addition has two accepted natural operands; their induction hypotheses give natural evaluations, so the sum rule applies. An accepted conditional has an accepted Boolean condition and two accepted branches of one type; its condition evaluates to a permitted Boolean constructor and selects a branch whose induction hypothesis gives the required type. This links the stated checker contract to that small semantics. It does not prove soundness of a future extension with functions, state or new primitive operations.

## Worked example 2: a certificate proves a particular bounded claim

Suppose a producer reports that 221 is composite and supplies the factors thirteen and seventeen. A checker can require both factors greater than one, both smaller than 221, and their exact product equal to 221. These conditions hold, so the factors constitute a complete certificate for the displayed compositeness claim. The producer's search strategy need not be trusted to justify that arithmetic argument.

The result does not say that an absent factor certificate proves primality, nor that the same factors certify another input. A proof assistant formalising the checker still needs the exact numeral encoding and the theorem that accepted factor data implies the chosen definition of composite. Replacing exact arithmetic by a rounded comparison would change that theorem's hypotheses. The useful separation is between finding the evidence, checking it and interpreting the claim it certifies.

## Worked example 3: an unused axiom and a used axiom

Imagine an environment containing a declared axiom $b:0$. The term $\\lambda x:A.x:A\\to A$ does not mention it and has a derivation in the smaller pure context. In contrast, $\\operatorname{abort}_A(b):A$ explicitly depends on that falsehood declaration. The second term can be accepted relative to the supplied axiom while providing no assumption-free proof of $A$.

A dependency report should distinguish the two terms' actual transitive dependencies rather than attributing every declaration in the environment to every theorem. Equally, a valid dependency report cannot rescue the entire environment's consistency once a false axiom is admitted. Reading the explicit proof terms explains the local distinction without inventing an executed report. A real report should be tied to the exact declaration and environment inspected.

These examples separate three obligations: correctness of a derivation under its rules, correctness of a checker or execution mechanism, and adequacy of the formal statement for the intended mathematics. A small trusted kernel helps with the first under the second's implementation assumptions. Statement review addresses the third. None of these obligations is fulfilled merely by the size of a library, a familiar theorem name or a study completion mark.

## Chapter summary

A proof assistant constructs and checks exact judgements under declared definitions, universes and axioms. Elaboration and tactics propose terms; checking must account for their actual core representation. A certificate can reduce trust in its producer while preserving a specific checker theorem. Dependency and specification analysis remain necessary to interpret the result. The mathematical claim, its formal encoding, its checking computation and its external use should each be stated precisely.

## Further reading

For a small theorem, publish the informal claim, formal statement, definitions, axiom report, proof term or source, checker version, reproducible command, and interpretation boundary. A reader should be able to distinguish mathematical dependencies from elaboration convenience and system assumptions.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=semantics-types-specifications) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=hoare-logic-termination) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};