var e=`---
id: book-logic-foundations-proof-reference
title: "Mathematical Logic"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Mathematical Logic

## The twelve-chapter Mathematical Logic route

This is the L4 graduate route. Begin with [Introduction to Logic and Set Theory](/books/library-book-introduction-to-logic-and-set-theory/) or equivalent preparation in first-order syntax, semantics, effective computation, elementary set theory and proof by induction. Work in order through the following chapters; earlier chapter filenames and semantic IDs remain stable even when their route positions differ from their old printed numbers.

1. [First-Order Syntax, Semantics and Soundness](/books/library-book-logic-foundations-proof-reference/reference-desk-a-levels-of-language/)
2. [Model Theory](/books/library-book-logic-foundations-proof-reference/model-theory/)
3. [Quantifier Elimination and Types](/books/library-book-logic-foundations-proof-reference/quantifier-elimination-and-types/)
4. [Recursive Functions and Representability](/books/library-book-logic-foundations-proof-reference/recursive-functions-and-representability/)
5. [Incompleteness and Arithmetization](/books/library-book-logic-foundations-proof-reference/chapter-13/)
6. [Sequent Calculus and Proof Theory](/books/library-book-logic-foundations-proof-reference/chapter-14/)
7. [Ordinal Analysis and Gentzen's Consistency Argument](/books/library-book-logic-foundations-proof-reference/ordinal-analysis-and-gentzen-consistency/)
8. [Intuitionistic and Constructive Logic](/books/library-book-logic-foundations-proof-reference/chapter-15/)
9. [Modal Logic](/books/library-book-logic-foundations-proof-reference/modal-logic/)
10. [Reverse Mathematics](/books/library-book-logic-foundations-proof-reference/reverse-mathematics/)
11. [Decidable and Undecidable Theories](/books/library-book-logic-foundations-proof-reference/decidable-and-undecidable-theories/)
12. [Second-Order Logic and Lindström’s Theorem](/books/library-book-logic-foundations-proof-reference/second-order-logic-and-lindstrom/)

Each main chapter has three worked examples and ten exercises with two hints and complete solutions beside their prompts. Cover the reveals when attempting a problem. The source remains a Draft: independent mathematical, exercise and editorial review is pending. The existing PDF is an earlier edition and has not been regenerated to match this route.

Local proofs include soundness, elementary submodels and chains, dense-order elimination, capture-safe diagonalisation, Rosser’s argument, the conditional second theorem, an exact equality-free cut theorem, modal canonical completeness, selected reverse-mathematical calibrations, decision procedures, and second-order model constructions. Primitive-recursive arithmetic coding, the exact derivability conditions, HA realizability soundness, Gentzen’s ordinal reduction theorem and Lindström’s abstract characterization remain named inputs with their hypotheses stated where used. A cited input is not described as a locally supplied full proof.

The earlier set-theoretic topology, forcing, large-cardinal, descriptive-set-theory and continuum readings now belong to [Set Theory](#/item/book-set-theory), preserving their original mathematics and IDs. Temporal logic belongs to Programme Semantics and Verification. Source-owned aliases keep the earlier addresses available. Existing aliases preserve the earlier computability, linear-logic and homotopy-type-theory record keys at their current destinations. These retained readings and the historical reference tables below are not additional chapters of the twelve-chapter route.

## Retained reference material

The following original reference desks and theorem contracts remain as a compact companion to the developed chapters.

This compact reference is organized around contracts: definitions, theorem hypotheses, proof architecture, and counterexamples when a hypothesis is removed. It complements the standard course rather than repeating its sequence.

## Reference desk A — levels of language

| Layer | Objects | Typical notation | Question |
|---|---|---|---|
| Object language | terms and formulas | $∀x \\mathbb{P}(x)$ | Is this a well-formed expression? |
| Structure plus assignment | domain and interpretations | $M,s\\models \\varphi$ | Is φ true under this interpretation? |
| Proof calculus | formulas and derivations | $T\\vdash \\varphi$ | Is there a finite derivation from T? |
| Metalanguage | statements about the above | “T has a model” | What theorem are we proving about syntax/semantics? |

Quotation prevents level slips. A number may satisfy an arithmetic formula; a string encoding that formula is a different object. Gödel coding relates the levels inside arithmetic but does not erase them.

### Syntax checklist

Given signature $L$, record each symbol’s arity. Define terms recursively. Define formulas recursively from atomic formulas, connectives, and quantifiers. Track variable occurrences, not merely variable names: in

$\\mathbb{P}(x) ∧ ∃x Q(x,y)$,

the first x is free while the later x occurrences are bound. Alpha-renaming the binder gives the equivalent $\\mathbb{P}(x)∧∃zQ(z,y)$ and makes scope visible.

Capture-avoiding substitution $\\varphi [t/x]$ replaces free x-occurrences by term t only when variables in t will not become accidentally bound. A formal substitution lemma connects syntactic replacement with semantic reassignment.

## Reference desk B — classical connectives

Useful equivalences include:

- $A\\to B ≡ ¬A∨B$;
- $¬(A∧B) ≡ ¬A∨¬B$;
- $¬(A∨B) ≡ ¬A∧¬B$;
- $¬∀x \\varphi ≡ ∃x¬\\varphi$;
- $¬∃x \\varphi ≡ ∀x¬\\varphi$.

Quantifiers distribute selectively:

- $∀x(\\varphi ∧\\psi ) ≡ (∀x\\varphi )∧(∀x\\psi )$;
- $∃x(\\varphi ∨\\psi ) ≡ (∃x\\varphi )∨(∃x\\psi )$;
- if x is not free in ψ, $∀x(\\varphi \\to \\psi ) ≡ (∃x\\varphi )\\to \\psi$ under the standard nonempty-domain convention.

Tempting symmetric-looking laws fail. $∀x(\\varphi ∨\\psi )$ need not imply $(∀x\\varphi )∨(∀x\\psi )$: different objects may satisfy different disjuncts. $∃x(\\varphi ∧\\psi )$ is stronger than $(∃x\\varphi )∧(∃x\\psi )$ because the latter witnesses may differ.

Domain conventions matter. Standard first-order structures are usually required nonempty. If empty structures are admitted, some equivalences involving unused quantified variables or quantifier movement need adjustment. State the convention before invoking a metatheorem.

## Theorem contract 1 — soundness

**Statement.** For a specified first-order proof calculus whose axioms are
valid and whose inference rules preserve semantic consequence, if
$T\\vdash\\varphi$, then $T\\models\\varphi$.

**Proof architecture.** Induct on derivation length or tree structure. Show each logical axiom is valid, each nonlogical axiom is satisfied by any model of T, and each inference rule preserves truth. For modus ponens: if M satisfies A and $A\\to B$, the material implication truth condition forces M to satisfy B. For a quantifier rule, verify eigenvariable/freshness conditions; omitting them can make the rule unsound.

**What it does not say.** Soundness is relative to the calculus and semantics. A software checker can implement its kernel incorrectly. Formal confidence requires a small specified trusted base, tests, and ideally independent verification.

## Theorem contract 2 — first-order completeness

**Statement.** For classical first-order logic, if $T\\models \\varphi$, then $T\\vdash \\varphi$ in a complete proof calculus.

An equivalent consistency form says every syntactically consistent set of first-order sentences has a model. A standard Henkin proof adds witness constants, extends to a maximally consistent Henkin theory, and builds a term model. The truth lemma proves by induction on formulas that syntactic membership matches semantic truth.

### Why witness constants are needed

If $∃x\\varphi (x)$ belongs to the extended theory, the construction needs a term naming an object that realizes φ. Add a fresh constant c and a Henkin axiom $∃x\\varphi (x)\\to \\varphi (c)$. Freshness and staged construction preserve consistency.

**Boundary.** Full second-order logic with standard semantics does not have an effective sound and complete proof calculus analogous to first-order completeness. Henkin semantics for second-order syntax behaves differently and recovers completeness by treating higher-order ranges as part of the structure.

## Theorem contract 3 — compactness

**Statement.** A set T of first-order sentences has a model iff every finite subset of T has a model.

**From completeness.** If T had no model, then $T\\models \\perp$. Completeness gives $T\\vdash \\perp$. A formal derivation is finite, so it uses a finite $T_{0}\\subseteq T$; then T₀ has no model, contradiction.

**Counter-boundary.** Compactness fails for finite-model semantics: each finite subset of sentences “there are at least n elements” has a finite model, but the whole collection has no finite model. The ordinary compactness theorem supplies an infinite model. A finite-model lab cannot certify compactness.

## Theorem contract 4 — Löwenheim–Skolem

One downward form: let L have cardinality at most κ, let M be an infinite L-structure, and let A⊆M have size at most κ, for infinite κ. Then M has an elementary substructure N containing A with size at most κ. For countable L and countable A, N can be countable.

The Tarski–Vaught test characterizes elementary substructures: N⊆M is elementary if every existential formula with parameters in N that has a witness in M has one in N. Skolem-hull constructions repeatedly close a parameter set under selected witnesses.

**Skolem-paradox diagnosis.** A countable model M of set theory may contain an object $R^{M}$ that M regards as uncountable. Externally, the domain of M and hence its collection of represented “reals” may be countable. The external enumeration need not be an object of M, so M does not see a bijection violating its internal statement. “Countable” has been evaluated in two ambient structures.

## Reference desk C — sets, classes, and schemas

ZF speaks only of sets in its object language. Informal classes such as “all ordinals” help metamathematical exposition but are not automatically sets.

An axiom **schema** stands for one axiom for each formula. Separation says, for each formula φ and set A, there is a set containing exactly those x∈A satisfying φ. Replacement says the range of a definable functional relation over a set is a set. Because formulas can have parameters, each schema is an infinite collection of first-order axioms.

### Separation versus replacement

Separation extracts a subclass from an existing set. Replacement collects outputs indexed by a set even when no prior bounding set of outputs is available. Transfinite recursion and ordinal constructions make systematic use of Replacement.

### Foundation boundary

Foundation rules out ordinary infinite descending membership chains and membership cycles within ZF. It does not say every mathematical relation is well founded, and non-well-founded set theories replace Foundation with alternative axioms consistently relative to suitable assumptions. Do not derive a universal philosophical ban from one formal axiom.

## Theorem contract 5 — Cantor–Bernstein

**Statement.** If injections $f:A\\to B$ and $g:B\\to A$ exist, then a bijection $h:A\\to B$ exists.

**Proof architecture.** Form a directed graph with f-edges A→B and g-edges B→A. Components are paths or cycles. On components that begin in A or extend infinitely backward in the appropriate direction, use f; on remaining components use the inverse of g. Each component choice yields exactly one match per vertex. A standard set construction starts with $A_{0}=A\\setminus g(B)$ and iterates $A_{n+1}=g(f(A_{n}))$; use f on the union of these layers and $g^{-1}$ elsewhere.

**Choice boundary.** Cantor–Bernstein is provable in ZF; it does not require the axiom of choice. By contrast, the assertion that any two sets have comparable cardinalities is equivalent to choice over ZF.

## Theorem contract 6 — Cantor diagonalization

For any function $f:A\\to \\mathbb{P}(A)$, define $D=\\{a\\in A:a\\notin f(a)\\}$ using Separation. For each d∈A,

$d\\in D ⇔ d\\notin f(d)$,

so D≠f(d). Thus f is not onto. This proof works for finite and infinite A and does not assume choice.

The diagonal set depends on the proposed f. It is not one universal “missing subset” independent of the enumeration.

## Reference desk D — consistency and independence

A theory T is syntactically consistent if it does not derive a contradiction. It is satisfiable if it has a model. By soundness, satisfiable implies consistent. By first-order completeness, consistent implies satisfiable for ordinary first-order theories in the metatheory used to prove completeness.

An independence result for sentence φ over T normally establishes both $T⊬\\varphi$ and $T⊬¬\\varphi$, often through models of $T+\\varphi$ and $T+¬\\varphi$. Such results are usually **relative consistency** statements:

$Con(T) \\Rightarrow Con(T+\\varphi )$ and $Con(T) \\Rightarrow Con(T+¬\\varphi )$.

They do not prove Con(T) from nothing. Gödel’s constructible universe establishes the relative consistency of AC and the generalized continuum hypothesis with ZF. Cohen’s forcing establishes complementary relative consistency results, including that CH and AC are not provable from the relevant base theories. Together these yield the familiar independence conclusions, conditional on consistency of the bases.

## Theorem contract 7 — incompleteness

A careful first incompleteness statement:

> If $T$ is a consistent, effectively axiomatized extension of Robinson
> arithmetic $Q$, then $T$ is incomplete: by Rosser's theorem there is a
> sentence $R_T$ such that $T\\nvdash R_T$ and $T\\nvdash\\neg R_T$.

Some common formulations require ω-consistency for a particular Gödel-sentence construction; Rosser’s improvement obtains undecidability from ordinary consistency with adjusted sentence. State which theorem is meant.

The second theorem says such a consistent T cannot prove a suitable formal sentence expressing its own consistency. The phrase “its own consistency” refers to an arithmetized proof predicate satisfying derivability conditions, not any informal English assurance.

**Nonexamples.** Presburger arithmetic is complete and decidable. True arithmetic is complete as a set of all sentences true in standard N but is not effectively axiomatizable. Inconsistent theories prove everything and are trivially complete in a useless sense.

## Reference desk E — proof theory

Natural deduction mirrors introduction and elimination rules for connectives. Sequent calculus makes assumptions and conclusions explicit, often writing $\\Gamma \\Rightarrow \\Delta$. Structural rules control weakening, contraction, and exchange. Different substructural logics modify these rules.

Cut elimination says, for suitable calculi, any proof using a cut rule can be transformed into one without cut. Consequences include consistency proofs and the subformula property, though exact statements depend on the calculus. Normalization in natural deduction removes introduction-followed-by-elimination detours.

Proof-theoretic strength compares which well-founded inductions or consistency statements theories establish. Ordinal analysis assigns notation systems under careful interpretations. One should not say a theory “is an ordinal”; the ordinal notation measures a particular strength under a metatheoretic analysis.

## Reference desk F — types and construction

In simply typed lambda calculus:

\`\`\`text
variables: x : A
abstraction: if x:A ⊢ t:B, then λx.t : A→B
application: if f:A→B and u:A, then f u : B
\`\`\`

Beta reduction $(\\lambda x.t)u \\to t[u/x]$ is capture avoiding. Strong normalization means every reduction sequence terminates for the simply typed calculus. Subject reduction says reduction preserves type.

Dependent types let result types mention inputs. A dependent pair $\\sum x:A.B(x)$ packages a witness x with data/proof of B(x); a dependent function $\\Pi x:A.B(x)$ transforms every x into an inhabitant of B(x). Identity types internalize equality evidence. Homotopy type theory gives identity types a geometric interpretation, but it is not synonymous with all type theory.

Classical and constructive logics differ in principles, not in standards of rigor. Intuitionistic logic omits unrestricted excluded middle but proves many decidable instances and validates contradiction elimination. Choice also has multiple formulations; constructive type-theoretic “choice” extracted from dependent witnesses need not imply every classical set-theoretic consequence called choice.

## Proof clinics

### Clinic 1: a model is not a validity proof

**Invalid attempt:** A finite checker finds $∀x(\\mathbb{P}(x)∨¬\\mathbb{P}(x))$ true in 10,000 models, so excluded middle is valid.

**Diagnosis:** Finite samples do not quantify over all structures, and
intuitionistic validity is defined through different proof/semantic frameworks.
In classical first-order logic, each instance $P(x)\\lor\\neg P(x)$ follows from
the classical propositional law and universal generalization; sampling does
not establish either inference.

### Clinic 2: consistency is not soundness

**Invalid attempt:** T is consistent, so every theorem of T is true about the intended natural numbers.

**Diagnosis:** Consistency only prevents deriving both a sentence and its negation. Nonstandard models of arithmetic can satisfy a consistent T. Truth in intended N is an extra semantic notion; soundness for that intended structure is stronger.

### Clinic 3: independence is not arbitrary choice

**Invalid attempt:** CH is independent, so either answer may be used inside one proof whenever convenient.

**Diagnosis:** Work in a specified theory or model. ZFC+CH and ZFC+¬CH are different extensions. A theorem whose proof uses CH is conditional on that extension; independence does not make contradictory assumptions jointly valid.

## Exercises with solutions

1. **Semantic countermodel.** Refute $∃x(\\mathbb{P}(x)∧Q(x))$ from premises $∃xP(x)$ and $∃xQ(x)$.  
   **Solution:** Domain $\\{a,b\\}$, P={a}, Q={b}. Each premise has a witness but no common witness satisfies the conclusion.

2. **Capture repair.** Substitute term $y$ for free x in $∃yR(x,y)$.  
   **Solution:** Rename bound y first: $∃zR(x,z)$, then substitute to get $∃zR(y,z)$. The naïve $∃yR(y,y)$ changes meaning.

3. **ZF/choice audit.** Which needs no AC: Cantor’s theorem, Cantor–Bernstein, or “every set can be well ordered”?  
   **Solution:** The first two are theorems of ZF. The well-ordering theorem is equivalent to AC over ZF.

4. **Object/meta language.** Explain why $Con(T)$ appearing in arithmetic is not the same object as a metatheoretic assertion that T is consistent.  
   **Solution:** The former is a formula built from a chosen arithmetized proof predicate inside T’s language. The latter is our external claim that no actual T-derivation reaches contradiction. Adequacy requires representation and derivability conditions.

5. **Compactness boundary.** Why does the finite-model lab not test compactness?  
   **Solution:** Compactness may produce an infinite model from finite satisfiability. Restricting the semantic universe to finite structures invalidates that implication.

6. **Constructive content.** What term shape corresponds to $A∧B\\to B∧A$ under products?  
   **Solution:** A function taking pair $(a,b)$ and returning $(b,a)$, for example $\\lambda p.(second p, first p)$.

7. **Soundness/completeness.** If $T⊬\\varphi$, what does first-order completeness imply?  
   **Solution:** By contrapositive, $T⊭\\varphi$; there is a model of T in which φ is false, assuming the specified complete calculus and semantics. This does not necessarily give a finite or intended model.

8. **Diagonalization.** Does Cantor’s D contradict itself?  
   **Solution:** No. It creates a contradiction only under the supposition D=f(d). Therefore that equality is false. D is an ordinary subset whose membership is consistently defined relative to f.

## Sources and next use

Consult the [Open Logic Project](https://builds.openlogicproject.org/) for full derivations and the [Stanford Encyclopedia entries on model theory](https://plato.stanford.edu/entries/model-theory/), [set theory](https://plato.stanford.edu/entries/set-theory/), and [intuitionistic logic](https://plato.stanford.edu/entries/logic-intuitionistic/) for scholarly context. Continue to the focused model-theory, independence, and type/constructive resources before treating their theorem sketches here as substitutes for specialist courses.
`;export{e as default};