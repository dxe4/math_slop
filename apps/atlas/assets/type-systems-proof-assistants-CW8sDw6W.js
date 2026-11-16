var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: type-systems-proof-assistants
title: "Type Systems, Proof Terms, and Proof-Assistant Trust"
level: advanced-undergraduate
estimated_minutes: 155
license: CC BY-SA 4.0
---

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

**Lemma 13.1 (Canonical forms).** A closed value of type $\\mathsf{Nat}$ is a numeral; a closed
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

A strong artifact records theorem names and normalized statements, imported
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
- **Overstrong extraction claim:** logical normalization does not by itself
  bound runtime, stack use, foreign calls, or compiler behavior of extracted
  code.
- **Specification drift:** examples and informal docs should be tested against
  the formal interface; otherwise a maintained proof can become evidence for
  an obsolete contract.

## 17. Normalization and logical relations

Progress and preservation say well-typed execution does not become stuck, but
they do not by themselves prove that execution finishes. The simply typed
lambda calculus without general recursion is in fact strongly normalizing:
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
the empty substitution yields call-by-value normalization. This derivation does
not by itself quantify over every possible beta-reduction path.

The method scales beyond termination. By changing the relation, one can prove
representation independence, compiler-pass preservation, noninterference, or
parametricity. For example, a truly polymorphic closed function of type
$\\forall A. A\\to A$, in a pure total calculus with no type inspection, cannot
manufacture an $A$; relational reasoning forces identity-like behavior. The
exact conclusion depends on effects, bottom values, and observational
equivalence, so the language hypotheses belong beside the slogan “theorems for
free.”

Proof assistants must distinguish normalization used by the kernel from a
user theorem about a modeled language. If definitional equality relies on
normalizing arbitrary kernel terms, termination is part of the trusted
metatheory. Adding unchecked general recursion would threaten decidable type
checking and logical consistency. A separate partial-programming monad or
well-founded recursion principle can express computations while keeping the
kernel's conversion discipline explicit.

## Practice with fully explained solutions

1. **What does $\\Gamma \\vdash e:\\tau$ record?** A derivable type for expression $e$ under variable assumptions $\\Gamma$; it is not yet an evaluation result.
2. **Type $\\lambda x.x$ when $x:\\mathsf{Bool}$.** The body has $\\mathsf{Bool}$ by the variable rule, so abstraction gives $\\mathsf{Bool} \\to \\mathsf{Bool}$.
3. **When is $f a$ typeable?** When $f:\\sigma\\to \\tau$ and $a:\\sigma$ in the same context; the result is $\\tau$.
4. **What does progress exclude?** A closed well-typed nonvalue with no transition. It does not exclude nontermination.
5. **What does preservation say?** One evaluation step retains the expression's type, preventing transitions outside the proved type invariant.
6. **Why need both progress and preservation?** Progress starts a safe step; preservation allows the argument to be repeated after every step.
7. **Give a typed but incorrect program.** A $\\mathsf{Nat} \\to \\mathsf{Nat}$ tax calculation that returns zero always is type safe yet violates its intended financial formula.
8. **What term proves $P \\to P$?** $\\lambda x.x$; assuming evidence $x:P$, return that evidence unchanged.
9. **How is conjunction represented?** As a product containing evidence of both propositions; projections recover each component.
10. **How is disjunction consumed safely?** Case analysis handles both tags, producing the same target type from either branch.
11. **What does $Vec A n$ improve?** Length becomes part of the interface, so operations can state and preserve dimension relations statically.
12. **Why restrict recursion in a proof assistant?** Unrestricted general recursion can inhabit false propositions through nontermination, destroying consistency of proofs-as-programs.
13. **Separate definitional and propositional equality.** Definitional equality follows kernel computation; propositional equality is a type inhabited by explicit evidence.
14. **Why can untrusted tactics be safe?** If they only propose terms and a trusted kernel independently checks every term, a tactic bug yields rejection rather than a false theorem.
15. **What do admitted axioms change?** They enlarge the assumptions from which theorems follow; audit output must list them rather than present results as assumption free.
16. **Why review a checked statement?** The kernel ensures the formal conclusion follows from formal premises, not that the formalization matches the intended real-world claim.

## Proof-development audit

For a small theorem, publish the informal claim, formal statement, definitions, axiom report, proof term or source, checker version, reproducible command, and interpretation boundary. A reader should be able to distinguish mathematical dependencies from elaboration convenience and system assumptions.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=semantics-types-specifications) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=hoare-logic-termination) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};