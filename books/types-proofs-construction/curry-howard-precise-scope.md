
# Curry–Howard: precise scope

The Curry–Howard correspondence is often summarized as "proofs are programs." This chapter places that slogan in its proper context. The correspondence is not a single theorem but a family of results, each relating a specific logic to a specific calculus. We survey the main instances, identify the boundaries, and diagnose common overstatements.

## The propositions-as-types principle

The basic observation, due to Curry and Howard independently, is that the typing rules of the simply typed lambda calculus match the natural deduction rules for intuitionistic propositional logic:

| Logic | Calculus |
|---|---|
| Proposition $A$ | Type $A$ |
| Proof of $A$ | Term $t : A$ |
| Implication $A \to B$ | Function type $A \to B$ |
| Conjunction $A \land B$ | Product type $A \times B$ |
| Disjunction $A \lor B$ | Sum type $A + B$ |
| Contradiction $\bot$ | Empty type $0$ |
| Introduction rule | Type constructor introduction |
| Elimination rule | Type constructor elimination |
| Normalization | Cut elimination |

This is the **Curry–Howard isomorphism** for intuitionistic propositional logic and $\lambda^{\to}$.

## Extensions of the correspondence

The correspondence extends beyond the base case:

**Predicate logic and dependent types.** Universal quantification $\forall x : A.\, B(x)$ corresponds to the dependent function type $\Pi x : A.\, B(x)$. Existential quantification $\exists x : A.\, B(x)$ corresponds to the dependent pair type $\Sigma x : A.\, B(x)$. Chapter 7 develops this extension.

**Classical logic and control operators.** Classical natural deduction, which includes double negation elimination or excluded middle, corresponds to calculi with control operators such as call/cc. The computational content is not direct functional evaluation but manipulation of continuations.

**Linear logic and resource types.** Linear logic, where hypotheses must be used exactly once, corresponds to type systems with linearity constraints. This is relevant to memory management and session types.

**Modal logic and staged computation.** Modal logics (S4, etc.) correspond to type systems for staged computation, run-time code generation, and comonadic structures.

## Boundaries and qualifications

The correspondence has important limitations:

**Proof irrelevance.** In many type theories, not every detail of a proof term is computationally relevant. Proof irrelevance quotients proofs of the same proposition, collapsing them to a single value. The full proof term may contain information that is erased during extraction.

**Axioms and computation rules.** A principle postulated only as an opaque axiom may introduce a constant with no reduction behaviour. Its computational status depends on the calculus: for example, univalence is opaque in some intensional presentations, while cubical type theories give it computation rules.

**Effects and nontermination.** Real programming languages have effects (state, exceptions, I/O) and often permit nontermination. The Curry–Howard correspondence for pure, terminating calculi does not directly apply.

**Extraction settings.** When extracting a program from a proof, the user chooses what to erase and what to keep. The same proof can yield different programs depending on extraction flags.

**Trusted runtime.** Even a fully constructive proof relies on a trusted runtime, compiler, and hardware. The correspondence does not eliminate the need for engineering verification.

## Common errors

**Error: "All proofs are programs."** Only proofs in specified formal systems correspond to programs in specified calculi. An informal mathematical proof must first be formalized, and the formalization may require axioms that block direct computation.

**Error: "Formalized means constructively executable."** A theorem may be formalized in a classical logic embedded in a proof assistant. The proof term exists but may not reduce to a useful program without translation or reinterpretation.

**Error: ignoring extraction choices.** The program extracted from a proof depends on which types are marked as computational and which are erased. Different choices yield different programs.

## The exact base-case correspondence

Fix intuitionistic propositional natural deduction with implication, conjunction, disjunction, truth and falsehood. Fix the term calculus with arrows, products, sums, unit and empty type from Chapter 3. The proposition translation sends each atomic proposition to a base type and commutes with those constructors. A named assumption becomes a term-variable declaration. This is a correspondence between two explicitly chosen presentations, not a claim that a random programming language implements the same logic.

**Proposition 5.1 (Derivations and typed terms).** A natural deduction derivation of $A$ under named assumptions $\Gamma$ can be annotated with a term $t$ such that the translated judgement $\Gamma\vdash t:A$ is derivable. Conversely, erasing the term annotations from a typing derivation yields a natural deduction derivation with the corresponding named assumptions.

*Proof.* For the forward direction, induct on the proof tree. An assumption leaf receives its variable. Implication introduction receives a lambda binding exactly the discharged assumption label; elimination receives application. Conjunction introduction pairs the two recursively obtained terms, and its eliminations project the requested component. Disjunction introduction attaches the appropriate tag; elimination creates a case whose two branch binders are the discharged labels and whose result type is the common conclusion. Truth introduction receives unit; falsehood elimination receives abort at the requested result type. Each constructor has precisely the matching typing rule. These cases exhaust the selected proof rules.

For the reverse direction, induct on a typing derivation and erase each term constructor while retaining its premise and conclusion propositions. The variable rule becomes an assumption, lambda introduction becomes implication introduction with the same discharge, and application becomes implication elimination. Pair, projection, injection, case, unit and abort similarly become their matching natural deduction rules. Contexts and branch discharge are preserved, so no new assumption is introduced or discarded by erasure. ∎

This theorem concerns derivations. It does not identify all proofs merely because their conclusions agree, nor every programme merely because their output types agree. Different terms can inhabit the same type; different presentations can identify terms using different equality rules. In the implicational fragment, one beta contraction corresponds to replacing an immediately discharged assumption by the proof supplied to the elimination. Projection and case contractions remove the analogous pair and tagged-branch detours. Sequent calculus cut elimination is related through a translation of proof presentations; it is not literally the same rule as every natural deduction contraction.

## Worked example 1: a typed loop is not a proof in the core

Extend a programming calculus with $\operatorname{fix}:(A\to A)\to A$ and its unfolding rule. Then
$$\operatorname{loop}_A=\operatorname{fix}(\lambda x:A.x):A$$
is well typed for any chosen type. It repeatedly unfolds and returns to itself. In particular choosing $A=0$ makes an expression with the empty result type. This expression has no terminating value and is absent from the pure normalising proof calculus. Reading it as a closed constructive proof of falsehood would discard the termination hypothesis that supports the logical interpretation.

Progress and preservation may still hold for the extended programming semantics. At every stage the loop has the same type and can step. Those safety facts do not imply the existence of a canonical returned witness. This is a precise example of why a typed general-purpose programme and an inhabitant in a normalising logical core are different claims. It does not say that recursion is mathematically forbidden; structurally recursive functions can carry termination arguments in a richer consistent theory.

## Worked example 2: a coarse type can omit the intended theorem

Suppose a specification requests the successor of a natural-number input. The coarse type $\mathbb N\to\mathbb N$ accepts both $f(n)=n+1$ and $g(n)=0$. Both return natural numbers, so a checker verifying only this type has no reason to reject $g$. The functional requirement is stronger: for each $n$, the output $m$ must satisfy $m=n+1$.

In dependent notation, one could request
$$\Pi n:\mathbb N.\;\Sigma m:\mathbb N.\;(m=n+1).$$
Its output is a number together with evidence of the required equality. The successor function returns $(n+1,\mathrm{refl})$. A constant-zero proposal would need, for every $n$, an equality $0=n+1$, contradicted already at $n=0$. The dependent rules are developed later; here the notation explains which mathematical information the coarse type omitted. A correct implementation of a coarse type is therefore compatible with failure of an intended external requirement.

## Worked example 3: unpacking witnesses and choosing from a set

Assume explicit evidence $h$ taking each $x:A$ to a pair $(y,p)$ with $y:B(x)$ and $p:R(x,y)$. Define $f(x)$ to be the first component of $h(x)$. The second component proves $R(x,f(x))$ at every input. Thus one can construct a pair consisting of $f$ and its pointwise correctness proof. The construction simply projects data that was already supplied uniformly.

This is the constructive type-theoretic choice construction for dependent-pair existence. It must not be silently applied when the original assertion of existence is represented only as a proposition that hides its witness. If a theory uses a propositional truncation of the pair type, its elimination rule controls whether a witness may be extracted; the untruncated projection above no longer has the same input. The full set-theoretic axiom of choice concerns a different representation and set of assumptions. Sharing the word exists does not make these three formal requests identical.

## Axioms, normal forms and canonicity

An opaque constant can inhabit a type without a computation rule. Declaring $c:A+B$ supplies a term that may remain stuck at the constant when a programme wants to inspect its tag. This does not necessarily produce an infinite reduction: an opaque constant can already be a normal form. What fails is a canonicity conclusion saying every closed sum value exposes a tag, unless its hypotheses explicitly exclude such constants or account for them.

Likewise, declaring $b:0$ destroys consistency of the intended proof theory even though the constant itself has no reduction. Strong normalisation alone is not a consistency proof for a theory with arbitrary new declarations. The usual argument needs normalisation **and** canonical-form analysis in a calculus whose empty type has no closed constructor or axiom. The context of declarations is therefore part of the theorem, not an optional implementation detail.

Proof irrelevance and erasure add another distinction. A theory may regard all proofs of a proposition as equal for some purposes, or erase them from extracted code. That policy need not erase the computational witness from a dependent pair in a data-bearing universe. Conversely an existential proposition placed in an erased proof sort may not provide an executable witness through the same projection. The exact rules of the foundation and extraction mechanism decide what information remains. A slogan about proofs being programmes cannot choose those rules for us.

## Reading a correspondence claim responsibly

For any proposed application, state the logic, calculus, declared constants, judgement, reduction relation and equality on proofs or programmes. Then identify the actual conclusion: inhabitability, type preservation, termination, normal-form shape, extraction correctness or correspondence with an external specification. A theorem about one row cannot automatically establish the others. The kernel chapter will apply these questions to an actual proof-development pipeline.

## Equality of proofs needs its own convention

The correspondence also needs a declared notion of equality. The terms $f$ and $\lambda x.fx$, with $x$ not free in $f$, are related by function eta: both express applying $f$ to an eventual argument. They need not be identical printed syntax or related by a beta contraction. A calculus using beta equality alone and one adding eta therefore identify different terms even when their typing rules agree. The proposition-as-type dictionary does not decide which equality the author intended.

For a pure total function model, eta expresses extensional behaviour under application. In a programming language with effects or divergence, evaluating a function expression immediately can differ from suspending it under a lambda. Transferring an eta law to that language requires its observation and evaluation rules. It is not justified by simply retaining the arrow-shaped type notation.

Similarly, two proofs of one proposition can contain different intermediate evidence and normalise differently while proving the same conclusion. Proof irrelevance is an additional policy that identifies or ignores those differences in a particular sort; it is not a consequence of sharing a type. If an extracted algorithm uses witness data, erasing that data changes its specification. A careful extraction claim records both which equalities are respected by the translation and which components remain observable in the result.

## Practice exercises

### Exercise 1
<a id="curry-howard-precise-scope-ex-1"></a>
State the logic and calculus matched by the basic Curry–Howard correspondence.


<details><summary>Hint 1</summary>

Name a precise logic and its matching typing rules.

</details>
<details><summary>Hint 2</summary>

Use the pure propositional intuitionistic calculus from the earlier chapters.

</details>
<details><summary>Solution</summary>

Intuitionistic propositional natural deduction and the simply typed lambda calculus ($\lambda^{\to}$).

</details>

### Exercise 2
<a id="curry-howard-precise-scope-ex-2"></a>
What calculus corresponds to classical natural deduction with double negation elimination?


<details><summary>Hint 1</summary>

The calculus must represent a classical control principle.

</details>
<details><summary>Hint 2</summary>

Continuation manipulation changes the computational interpretation.

</details>
<details><summary>Solution</summary>

A lambda calculus with control operators, such as $\lambda\mu$-calculus or a calculus with call/cc. The classical principle corresponds to continuation manipulation.

</details>

### Exercise 3
<a id="curry-howard-precise-scope-ex-3"></a>
Explain why a proof using the axiom of choice may not extract to a useful program.


<details><summary>Hint 1</summary>

Distinguish a set-theoretic existence axiom from explicit dependent-pair data.

</details>
<details><summary>Hint 2</summary>

Ask whether the supplied premise actually exposes a witness.

</details>
<details><summary>Solution</summary>

The axiom of choice, in its full set-theoretic form, asserts the existence of a choice function without constructing it. In type theory, the type-theoretic version is constructive (it unpacks an existing witness), but the set-theoretic version may introduce noncomputational content.

</details>

### Exercise 4
<a id="curry-howard-precise-scope-ex-4"></a>
Give an example of a proposition that is classically provable but does not correspond to an inhabited type in $\lambda^{\to}$.


<details><summary>Hint 1</summary>

Choose a classical principle requiring a uniform decision.

</details>
<details><summary>Hint 2</summary>

An arbitrary atomic proposition need not have constructive evidence for either side.

</details>
<details><summary>Solution</summary>

$A \lor \neg A$ for arbitrary $A$. It is classically valid but not intuitionistically provable, so it has no inhabitant in $\lambda^{\to}$.

</details>

### Exercise 5
<a id="curry-howard-precise-scope-ex-5"></a>
Translate a proof of $(A\land B)\to A$ into a term and describe the proof detour removed when it is applied to an introduced pair.

<details><summary>Hint 1</summary>

Assume a pair, project its first component, then discharge the assumption.

</details>
<details><summary>Hint 2</summary>

Apply the resulting function to $(a,b)$.

</details>
<details><summary>Solution</summary>

The term is $\lambda p.\pi_1(p):(A\times B)\to A$. On input $(a,b)$, beta contraction gives $\pi_1((a,b))$, then projection gives $a$. On the proof side, implication introduction followed by elimination substitutes the supplied conjunction proof for its assumption, and conjunction elimination then selects the originally supplied $A$ proof. The formula translation and both local computation steps use precisely the chosen natural deduction presentation.

</details>

### Exercise 6
<a id="curry-howard-precise-scope-ex-6"></a>
Does a newly declared opaque constant $c:A+B$ necessarily cause divergence? Which extraction expectation can it obstruct instead?

<details><summary>Hint 1</summary>

A constant can have no reduction rule.

</details>
<details><summary>Hint 2</summary>

Case analysis needs a visible injection to choose a branch.

</details>
<details><summary>Solution</summary>

No divergence follows. The constant itself can be in normal form. It can obstruct canonicity or execution of a case split because it exposes neither a left nor a right tag, despite having the sum type by declaration. A theorem promising canonical tagged results must therefore specify its allowed constants and axioms. Termination, canonical result shape and logical consistency are separate properties, so adding an opaque assumption requires analysing each relevant conclusion.

</details>

### Exercise 7
<a id="curry-howard-precise-scope-ex-7"></a>
Explain why a normalising calculus with an added constant $b:0$ does not become a consistent logic merely by retaining normalisation of that constant.

<details><summary>Hint 1</summary>

Empty elimination is still available.

</details>
<details><summary>Hint 2</summary>

The logical conclusion depends on absence of closed empty-type inhabitants.

</details>
<details><summary>Solution</summary>

The declaration already supplies a closed inhabitant of falsehood. Empty elimination yields $\operatorname{abort}_A(b):A$ for any type $A$. The fact that $b$ has no reduction and hence terminates does not remove this contradiction with consistency. A normalisation-based consistency argument needs an accompanying canonical-form theorem excluding a closed normal term of empty type in the exact declaration-free core. Adding $b$ invalidates that hypothesis rather than refuting the original core theorem.

</details>

### Exercise 8
<a id="curry-howard-precise-scope-ex-8"></a>
Given $h:\Pi x:A.\Sigma y:B(x).R(x,y)$, state the constructed choice function and its pointwise proof. Explain why a hidden-witness existential needs another argument.

<details><summary>Hint 1</summary>

Project the two fields of each supplied pair.

</details>
<details><summary>Hint 2</summary>

The second field's type depends on the first field.

</details>
<details><summary>Solution</summary>

Define $f=\lambda x.\pi_1(hx)$ and $p=\lambda x.\pi_2(hx)$. Then $p$ proves $R(x,f(x))$ for every $x$, so $(f,p)$ is the requested choice data. This uses actual pair elimination on each $hx$. If the input instead belongs to a proposition that hides or truncates the pair, the same projection is not available by its stated type. One must inspect that proposition's elimination rules or add a suitable principle; the untruncated derivation does not decide the issue.

</details>

### Exercise 9
<a id="curry-howard-precise-scope-ex-9"></a>
Give a total function satisfying $\mathbb N\to\mathbb N$ but violating the successor specification. Give an input witnessing failure and a richer specification that excludes it.

<details><summary>Hint 1</summary>

A constant natural-valued function has the coarse type.

</details>
<details><summary>Hint 2</summary>

Record an equality between output and input plus one.

</details>
<details><summary>Solution</summary>

The constant-zero function is total and natural-valued. At input zero it returns zero while the required successor is one. The richer specification $\Pi n:\mathbb N.\Sigma m:\mathbb N.(m=n+1)$ requires the returned output together with equality evidence. The constant-zero implementation cannot supply that equality at zero in the consistent arithmetic theory. This example separates proof of a coarse structural property from proof of the full intended functional requirement.

</details>

### Exercise 10
<a id="curry-howard-precise-scope-ex-10"></a>
A report says only “the extracted programme was checked”. List the mathematical objects and claims needed to interpret that sentence, without treating it as proof of an unspecified external requirement.

<details><summary>Hint 1</summary>

Identify the input theorem and the translation.

</details>
<details><summary>Hint 2</summary>

The target language, assumptions and expected observations also matter.

</details>
<details><summary>Solution</summary>

Specify the formal theorem and definitions, its axioms, the proof judgement, the extraction translation and erasure policy, the target programme and semantics, and the claimed relation between source evidence and target behaviour. A typing check establishes a target typing judgement; extraction correctness would establish a translation relation; matching the theorem to an external requirement is a further specification argument. The report alone supplies none of these exact objects, so it cannot warrant an unrestricted correctness conclusion.

</details>

## Chapter summary

Curry–Howard is a family of correspondences between logics and calculi. The base case matches intuitionistic propositional logic with $\lambda^{\to}$. Extensions cover dependent types, classical logic, linear logic, and modal logic. The correspondence is precise only when both the logic and the calculus are specified. Real-world proof extraction involves additional choices about relevance, effects, and trusted code.

**Backward pointers:** This chapter draws on the type systems from Chapters 3 and 4 and the BHK reading from Chapter 1.

**Forward pointers:** Chapter 7, "Dependent function and pair types," extends the correspondence to predicate logic. Chapter 13, "Choice Principles and Constructive Reals," examines the constructive status of choice principles in detail.
