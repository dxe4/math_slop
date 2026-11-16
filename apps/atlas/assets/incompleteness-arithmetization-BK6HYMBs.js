var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: chapter-13
title: "Incompleteness and Arithmetization"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Incompleteness and Arithmetization

Gödel’s incompleteness theorems are among the most profound results in mathematical logic. They establish fundamental limits on what can be proved within formal systems of sufficient strength. This chapter states both theorems with complete precision, sketches the arithmetization of syntax, and diagnoses common misstatements.

## Arithmetization of syntax

**Definition 5.4 (Gödel numbering).** Fix an effective injective coding $\\ulcorner\\cdot\\urcorner$ of finite strings, formulas, and derivations by natural numbers. Surjectivity onto $\\mathbb N$ is unnecessary: many numbers may fail to code a well-formed expression.

**Definition 5.5 (proof predicate).** The relation $\\mathrm{Prf}_T(x,y)$ means “$x$ codes a certified $T$-proof of the formula coded by $y$.” If $T$ has a computably enumerable axiom set, an occurrence of a nonlogical axiom in the proof code includes a finite witness to the stage at which it was enumerated. With those certificates, proof checking is primitive recursive even when bare membership in the axiom set is not decidable. The resulting relation is representable in Robinson arithmetic $Q$.

**Definition 5.6 (provability predicate).** $\\text{Prov}_T(y) \\equiv \\exists x \\, \\text{Prf}_T(x, y)$.

**Derivability conditions (Löb).** For a sufficiently strong, recursively axiomatizable theory $T$ extending $Q$:
1. If $T \\vdash \\varphi$, then $T \\vdash \\text{Prov}_T(\\ulcorner \\varphi \\urcorner)$.
2. $T \\vdash \\text{Prov}_T(\\ulcorner \\varphi \\to \\psi \\urcorner) \\to (\\text{Prov}_T(\\ulcorner \\varphi \\urcorner) \\to \\text{Prov}_T(\\ulcorner \\psi \\urcorner))$.
3. $T \\vdash \\text{Prov}_T(\\ulcorner \\varphi \\urcorner) \\to \\text{Prov}_T(\\ulcorner \\text{Prov}_T(\\ulcorner \\varphi \\urcorner) \\urcorner)$.

## The first incompleteness theorem

**Theorem 5.7 (Gödel–Rosser).** Let $T$ be a consistent, recursively axiomatizable extension of Robinson arithmetic $Q$. Then $T$ is incomplete: there exists a sentence $R_T$ such that $T \\not\\vdash R_T$ and $T \\not\\vdash \\neg R_T$.

**Proof sketch (Rosser’s improvement).** By the diagonal lemma, choose the Rosser sentence:

$$R_T \\equiv \\forall x \\, (\\text{Prf}_T(x, \\ulcorner R_T \\urcorner) \\to \\exists y < x \\, \\text{Prf}_T(y, \\ulcorner \\neg R_T \\urcorner)).$$

If $T\\vdash R_T$, let $p$ code such a proof. Consistency says there is no actual proof of $\\neg R_T$; because the range $y<p$ is finite and proof checking is decidable, $Q$ verifies each failure. But $T$ also verifies $\\mathrm{Prf}_T(\\bar p,\\ulcorner R_T\\urcorner)$, so $R_T$ yields a smaller proof of $\\neg R_T$, a contradiction.

The other direction is not merely “symmetric.” If $q$ codes a proof of $\\neg R_T$, consistency implies there is no proof of $R_T$. For $x\\leq q$, $T$ verifies the finitely many failures of $\\mathrm{Prf}_T(x,\\ulcorner R_T\\urcorner)$; for $x>q$, the fixed witness $q<x$ verifies the consequent in the displayed definition. Elementary arithmetic combines the two bounded cases to prove $R_T$, contradicting consistency. Hence neither sentence is derivable.

**Boundary.** Some formulations require $\\omega$-consistency for Gödel’s original sentence; Rosser’s improvement obtains undecidability from ordinary consistency.

## The second incompleteness theorem

**Theorem 5.8 (Gödel).** Let $T$ be a consistent, recursively axiomatizable extension of $Q$ satisfying the derivability conditions. Then

$$T \\not\\vdash \\text{Con}(T),$$

where $\\text{Con}(T) \\equiv \\neg \\text{Prov}_T(\\ulcorner \\bot \\urcorner)$.

**Proof sketch.** Use the standard Gödel sentence $G$ satisfying

$$T\\vdash G\\leftrightarrow\\neg\\mathrm{Prov}_T(\\ulcorner G\\urcorner),$$

rather than the Rosser sentence. Write $\\Box A$ for $\\mathrm{Prov}_T(\\ulcorner A\\urcorner)$. From the fixed point $T$ proves $G\\to\\neg\\Box G$. The derivability conditions therefore give

$$T\\vdash \\Box G\\to\\Box\\neg\\Box G
\\qquad\\text{and}\\qquad
T\\vdash \\Box G\\to\\Box\\Box G.$$

Formalized propositional reasoning now yields $T\\vdash\\Box G\\to\\Box\\bot$. Hence $T\\vdash\\mathrm{Con}(T)\\to\\neg\\Box G$, and the fixed point gives $T\\vdash\\mathrm{Con}(T)\\to G$. If $T$ proved $\\mathrm{Con}(T)$, it would prove $G$, while the fixed point and the first derivability condition show that a consistent $T$ cannot prove $G$. This internal provability argument is the standard second-theorem route; a consistent but unsound theory may prove $\\neg G$, and Rosser's consistency-only refinement of the first theorem does not by itself supply the second theorem.

**What “its own consistency” means.** The phrase refers to a formal sentence built from the arithmetized proof predicate, not any informal English assurance. Different proof predicates yield different consistency sentences, though they are provably equivalent under standard conditions.

## Nonexamples and boundaries

**Presburger arithmetic.** The theory $(\\mathbb{N}, 0, S, +)$ is complete and decidable; its standard quantifier-elimination proof works after a definitional expansion by the order relation and congruence predicates for each fixed divisor. It is not subject to the incompleteness theorems because it does not interpret multiplication and hence does not satisfy the derivability conditions in the required form.

**True arithmetic.** The set of all sentences true in the standard model $(\\mathbb{N}, 0, S, +, \\cdot)$ is complete but not recursively axiomatizable. Incompleteness applies to formal theories, not to the full truth set.

**Inconsistent theories.** An inconsistent theory proves everything and is trivially complete in a useless sense.

## Common errors

**Error: confusing truth with provability.** The incompleteness theorems concern provability in a formal system, not truth in the standard model. The Gödel sentence $G_T$ is true in $\\mathbb{N}$ (if $T$ is sound) but unprovable in $T$.

**Error: misstating the hypotheses.** The theorems require consistency, recursive axiomatizability, and sufficient strength (at least $Q$). Omitting any hypothesis invalidates the conclusion.

**Error: claiming incompleteness applies to all mathematics.** The theorems apply to formal theories satisfying the hypotheses. Informal mathematical reasoning is not a formal theory and is not directly subject to the theorems.

**Error: treating independence as arbitrary choice.** If CH is independent of ZFC, one cannot use both CH and $\\neg$CH in the same proof. Work in a specified extension.


## The arithmetic inputs and their exact scope

The prerequisite [recursive-functions chapter](/books/library-book-logic-foundations-proof-reference/recursive-functions-and-representability/) fixes $Q$, numeralwise representation, certified proof codes and the fixed-numeral cut facts. The earlier proof sketches are retained; this section gives complete arguments relative to those explicitly named coding inputs. Work with a computably enumerable extension $T$ of $Q$, classical logic with identity and a standard certified proof predicate. Inside an arithmetic formula, a displayed quotation code abbreviates its numeral, not the formula being quoted.

We use three established ingredients. First, the diagonal-substitution function is total primitive recursive after giving malformed inputs a default, and has a graph formula $D$ whose value at each standard numeral is provably unique in $Q$. Second, proof checking is primitive recursive and numeralwise decidable in $Q$. Third, $Q$ proves finite initial-segment case facts and comparisons with any fixed numeral as proved in the preceding chapter. None of these says that $Q$ proves an induction schema. For the second theorem, the three displayed derivability conditions are additional internal hypotheses; PA with its standard provability predicate is a sufficient familiar setting.

## A capture-safe diagonal lemma

**Theorem 5.1 (Diagonal lemma).** For every arithmetic formula $\\psi(v)$ with only the displayed possible free variable, there is a sentence $G$ such that $Q\\vdash G\\leftrightarrow\\psi(\\ulcorner G\\urcorner)$. The same equivalence is therefore provable in every extension $T$.

*Proof.* Fix the total diagonal function $d(e)$ returning the code obtained by substituting numeral $\\bar e$ into the designated free variable of the formula coded by $e$. Let $D(x,y)$ strongly represent it at standard inputs. Rename bound variables of $\\psi$ and $D$ so that new variables $x,y$ are available with no unwanted capture. Define

$$\\theta(x)=\\exists y\\bigl(D(x,y)\\land\\psi(y)\\bigr),$$

where the occurrence substituted into $\\psi$ was free and its old binders have been renamed away from $y$. Put $n=\\ulcorner\\theta\\urcorner$ and let $G$ be $\\theta(\\bar n)$. This is a sentence. By the external definition of $d$, $d(n)=g$, where $g=\\ulcorner G\\urcorner$. Numeralwise strong representation gives

$$Q\\vdash\\forall y\\bigl(D(\\bar n,y)\\leftrightarrow y=\\bar g\\bigr).$$

Substitute this equivalence into the definition of $\\theta(\\bar n)$ and use identity substitution. Its existential statement is equivalent to $\\psi(\\bar g)$: a witness must equal $\\bar g$, and conversely that value witnesses it when the body holds. Hence $Q\\vdash G\\leftrightarrow\\psi(\\bar g)$. All inserted numerals are closed terms, so no variable in them can be captured. The external operation $d$ was represented by a graph; it was never smuggled into arithmetic as an undeclared function term. ∎

The theorem gives provable equivalence, not literal equality between a sentence and its displayed interpretation. It applies to many formulas unrelated to provability, and by itself gives no undecidability result.

## Full Rosser argument from consistency

**Theorem 5.2 (Gödel–Rosser, detailed).** A consistent computably enumerable extension $T$ of $Q$ proves neither member of a suitable sentence-negation pair.

*Proof.* Apply Theorem 5.1 to obtain $R$ with

$$Q\\vdash R\\leftrightarrow\\forall x\\bigl(Prf_T(x,\\ulcorner R\\urcorner)\\to\\exists y<x\\,Prf_T(y,\\ulcorner\\neg R\\urcorner)\\bigr).$$

Suppose first that $T\\vdash R$, and choose an actual proof code $p$. Consistency means there is no actual proof of $\\neg R$, in particular none among the finitely many codes below $p$. Numeralwise decidability proves $Prf_T(\\bar p,\\ulcorner R\\urcorner)$ in $Q$. It also proves each negative instance for a code below $p$, and the finite-verification lemma combines them to

$$Q\\vdash\\forall y<\\bar p\\,\\neg Prf_T(y,\\ulcorner\\neg R\\urcorner).$$

But $R$ and its fixed-point equivalence in $T$ applied at $\\bar p$ give a witness below $\\bar p$ with just that forbidden proof property. This is an internal contradiction, contrary to consistency.

Now suppose $T\\vdash\\neg R$ and let $q$ be an actual proof code. Consistency excludes every actual proof of $R$. In particular $Q$ verifies its absence for each code from zero through $q$, yielding the finite bounded assertion for $x\\le\\bar q$. Also $Q$ verifies $Prf_T(\\bar q,\\ulcorner\\neg R\\urcorner)$. For arbitrary $x$, the fixed-numeral comparison lemma gives two cases. If $x\\le\\bar q$, the antecedent $Prf_T(x,\\ulcorner R\\urcorner)$ is false by the verified finite list. If $\\bar q<x$, the numeral $\\bar q$ witnesses the consequent. Thus $T$ proves the universal right side of the fixed-point equivalence and therefore proves $R$, contradicting its proof of $\\neg R$. Neither possibility occurs. ∎

This proof does not require $T$ to be sound about arbitrary arithmetic sentences. Every semantic assertion used in the finite checks concerns an actual finite proof code and is converted to a proof in $Q$. The fixed-numeral case split covers all internal values of the quantified variable, including values nonstandard in a nonstandard model; it is not an external enumeration pretending to exhaust such a model.

## The second theorem, with every provability step exposed

Write $\\Box A$ for the chosen standard provability predicate applied to the code numeral of $A$. The derivability conditions have different forms: the first is a metatheoretic rule about any supplied actual theorem; the other two are sentences proved in $T$. Numeralwise verification supplies the first for the standard proof predicate. The internal proof-transformer properties required for the second and third must be justified in the chosen arithmetic, not inferred merely from pointwise verifiability.

**Theorem 5.3 (Second incompleteness, detailed conditional form).** Let $T$ be consistent, extend $Q$, be computably enumerable, and satisfy the displayed derivability conditions for its chosen provability predicate. Then $T\\nvdash\\neg\\Box\\bot$.

*Proof.* Diagonalise $\\neg Prov_T(v)$ to obtain $G$ with $Q\\vdash G\\leftrightarrow\\neg\\Box G$. If $T$ proved $G$, the first derivability condition would give $T\\vdash\\Box G$, while the equivalence would give $T\\vdash\\neg\\Box G$. Consistency therefore excludes a proof of $G$.

The theorem $G\\to\\neg\\Box G$ can itself be boxed by the first condition. The second condition then gives $T\\vdash\\Box G\\to\\Box\\neg\\Box G$. The third gives $T\\vdash\\Box G\\to\\Box\\Box G$. The propositional theorem $\\Box G\\to(\\neg\\Box G\\to\\bot)$, boxed and distributed twice by the first two conditions, yields

$$T\\vdash\\Box\\Box G\\to(\\Box\\neg\\Box G\\to\\Box\\bot).$$

Combining the three implications gives $T\\vdash\\Box G\\to\\Box\\bot$. Contraposition proves $T\\vdash\\neg\\Box\\bot\\to\\neg\\Box G$. The fixed point supplies $\\neg\\Box G\\to G$, hence $T\\vdash Con(T)\\to G$. A proof of $Con(T)$ would now give the excluded proof of $G$. Therefore none exists. ∎

The Rosser predicate need not satisfy the same derivability conditions, which is why replacing the ordinary Gödel sentence by its Rosser refinement is not a substitute for this argument. Nor does the theorem prohibit a stronger ambient theory from proving $Con(T)$; it concerns what this particular $T$ proves about its particular proof predicate.

For the standard Gödel sentence just constructed, consistency already implies truth in the standard natural numbers: there is no actual $T$-proof of $G$, so its standard provability assertion is false, and the fixed-point equivalence is true because it is a theorem of the sound base $Q$. The retained soundness-based statement is a sufficient special case. Consistency alone need not prevent $T$ from proving $\\neg G$; such a proof can be an unsound existential assertion of a nonexistent proof. Rosser's two-sided result is what removes that stronger semantic assumption for its modified sentence.

## Worked example 1: a harmless, refutable fixed point

Choose a number $b$ that is not a formula code, and let $\\psi(v)$ be $v=\\bar b$. The diagonal lemma gives sentence $H$ with $Q\\vdash H\\leftrightarrow\\ulcorner H\\urcorner=\\bar b$. Its actual code $h$ is a formula code, so $h\\ne b$. Finite arithmetic proves the inequality of those distinct numerals in $Q$. Hence $Q\\vdash\\neg H$. Self-application has produced a refutable sentence, not a paradox and not an independent sentence. The incompleteness argument needs the proof-predicate choice and consistency hypotheses in addition to diagonalisation.

## Worked example 2: a consistent extension can reject its consistency

Assume PA is consistent and set $T=PA+\\neg Con(PA)$. If this extension were inconsistent, classical deduction would give $PA\\vdash Con(PA)$, contrary to the second theorem. Thus $T$ is consistent under the stated ambient assumption. Standard proof inclusion is formalised in PA, giving $T\\vdash Con(T)\\to Con(PA)$. Since $T$ already proves its negation, adjoining $Con(T)$ makes a contradiction. This verifies the retained exercise counterexample and shows why consistency does not imply that adding one's own consistency preserves consistency.

## Worked example 3: the missing hypothesis of true arithmetic

Let $Th(\\mathbb N)$ be all sentences true in the standard structure with addition and multiplication. It contains $Q$, is consistent by soundness, and decides every sentence by its actual truth value. If it were computably enumerable, Theorem 5.2 would give a sentence it decided neither way, contradicting that completeness. Thus it is not computably enumerable. Its existence as an external truth set does not give an effective list of its axioms or a counterexample to incompleteness.

## Practice exercises

### Exercise 1
<a id="chapter-13-ex-1"></a>

Explain why the Gödel sentence $G_T$ is true in $\\mathbb{N}$ (assuming $T$ is sound).

<details>
<summary>Hint 1</summary>

Use the standard interpretation of the chosen proof predicate.

</details>
<details>
<summary>Hint 2</summary>

The fixed-point equivalence is proved already in the sound base Q.

</details>
<details>
<summary>Solution</summary>

**Solution.** $G_T$ asserts its own unprovability in $T$. If $T$ is sound (everything provable in $T$ is true in $\\mathbb{N}$), and $T \\not\\vdash G_T$, then $G_T$ is true.

</details>

### Exercise 2
<a id="chapter-13-ex-2"></a>

Does consistency of $T$ alone imply consistency of $T+\\mathrm{Con}(T)$? Give a counterexample and a sufficient semantic hypothesis.

<details>
<summary>Hint 1</summary>

A consistent theory can be unsound about a consistency sentence.

</details>
<details>
<summary>Hint 2</summary>

Use PA plus the negation of its own consistency, retaining the ambient assumption.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Assuming $\\mathrm{PA}$ is consistent, let $T=\\mathrm{PA}+\\neg\\mathrm{Con}(\\mathrm{PA})$; Gödel's second theorem gives the consistency of this extension under that metatheoretic assumption. Since every $T$-proof system contains the PA proofs, elementary arithmetic verifies $\\mathrm{Con}(T)\\to\\mathrm{Con}(\\mathrm{PA})$. But $T$ proves $\\neg\\mathrm{Con}(\\mathrm{PA})$, so $T+\\mathrm{Con}(T)$ is inconsistent. By contrast, if $T$ is sound in the standard natural numbers, then $\\mathbb N\\models T+\\mathrm{Con}(T)$, so the extension is consistent.

</details>

### Exercise 3
<a id="chapter-13-ex-3"></a>

State the difference between Gödel’s original sentence and Rosser’s sentence.

<details>
<summary>Hint 1</summary>

Compare the right sides of the two fixed points.

</details>
<details>
<summary>Hint 2</summary>

The smaller-proof clause allows finite verification under plain consistency.

</details>
<details>
<summary>Solution</summary>

**Solution.** Gödel’s sentence $G_T$ asserts its own unprovability. Its proof of independence requires $\\omega$-consistency. Rosser’s sentence $R_T$ asserts that any proof of $R_T$ is preceded by a proof of $\\neg R_T$. Rosser’s proof requires only consistency.

</details>

### Exercise 4
<a id="chapter-13-ex-4"></a>

Why does Presburger arithmetic escape incompleteness?

<details>
<summary>Hint 1</summary>

External syntax coding and internal representational strength are distinct.

</details>
<details>
<summary>Hint 2</summary>

Check whether the theory extends or interprets the required arithmetic.

</details>
<details>
<summary>Solution</summary>

**Solution.** Gödel coding can be carried out metamathematically without putting multiplication in the object language, so “multiplication is essential for coding” is not the reason. Presburger arithmetic is too weak to interpret the arithmetic needed for self-referential proof theory in the way required by the incompleteness hypotheses. It has a decision procedure, obtained by quantifier elimination in the standard definitional expansion with the order relation and congruence predicates for each fixed divisor. Thus it is not an extension of $Q$ with the required representational strength.

</details>

### Exercise 5
<a id="chapter-13-ex-5"></a>

Formalize the diagonal lemma: for every formula $\\psi(x)$ with one free variable, there exists a sentence $\\varphi$ such that $T \\vdash \\varphi \\leftrightarrow \\psi(\\ulcorner \\varphi \\urcorner)$.

<details>
<summary>Hint 1</summary>

Represent the diagonal function by a graph, not an undeclared term.

</details>
<details>
<summary>Hint 2</summary>

Choose the graph output variable fresh and use its unique value at the actual code numeral.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let the computable diagonal-substitution function satisfy $d(\\ulcorner\\chi\\urcorner)=\\ulcorner\\chi(\\ulcorner\\chi\\urcorner)\\urcorner$. Represent $d$ in arithmetic by a formula $D(x,y)$; $d$ is a metatheoretic function, not automatically a term of the language. Given $\\psi(y)$, define

$$\\theta(x)\\equiv\\exists y\\,(D(x,y)\\land\\psi(y))$$

and let $\\varphi=\\theta(\\ulcorner\\theta\\urcorner)$. Representability proves inside $T$ that the unique $y$ related to $\\ulcorner\\theta\\urcorner$ is $\\ulcorner\\varphi\\urcorner$, yielding $T\\vdash\\varphi\\leftrightarrow\\psi(\\ulcorner\\varphi\\urcorner)$.

</details>

### Exercise 6
<a id="chapter-13-ex-6"></a>

Why does a computably enumerable axiom set still permit primitive recursive certified proof checking?

<details>
<summary>Hint 1</summary>

An axiom occurrence can carry a finite enumeration witness.

</details>
<details>
<summary>Hint 2</summary>

Checking a supplied bounded run differs from searching for a run.

</details>
<details>
<summary>Solution</summary>

Each nonlogical axiom line includes a finite stage or computation trace at which the enumerator outputs it. The checker verifies that finite record and the logical proof rules. This is primitive recursive under the fixed coding. Every ordinary finite proof can be certified, but deciding whether an arbitrary sentence ever appears in the enumerator is not part of checking one certificate.

</details>

### Exercise 7
<a id="chapter-13-ex-7"></a>

In Rosser’s second case, why must codes equal to the chosen refutation code q belong to the finite case rather than the larger-code case?

<details>
<summary>Hint 1</summary>

The consequent uses a strict inequality.

</details>
<details>
<summary>Hint 2</summary>

The witness q is smaller than x only when q<x.

</details>
<details>
<summary>Solution</summary>

At x=q, q cannot witness a strict smaller-proof consequent. Consistency nevertheless excludes a proof of R with that code, and the finite verification includes every code through q. The other case is strictly q<x and uses q as the witness. This partition covers the boundary without an invalid strict inequality.

</details>

### Exercise 8
<a id="chapter-13-ex-8"></a>

Explain why numeralwise proof verification alone does not establish the second and third derivability conditions.

<details>
<summary>Hint 1</summary>

Pointwise facts concern each supplied standard code separately.

</details>
<details>
<summary>Hint 2</summary>

The conditions assert uniform internal relationships among provability formulas.

</details>
<details>
<summary>Solution</summary>

An external finite check gives a proof for each actual numeral instance. The derivability conditions require the theory to formalise proof-combination and proof-verification transformations uniformly. Those are stronger internal assertions and depend on the chosen predicate and arithmetic. They must be included as hypotheses or established for that setting, as in standard PA.

</details>

### Exercise 9
<a id="chapter-13-ex-9"></a>

Prove that consistency of T excludes a proof of its ordinary Gödel sentence G under the stated fixed point and first derivability condition.

<details>
<summary>Hint 1</summary>

A proof can be reflected into a proof of its provability assertion.

</details>
<details>
<summary>Hint 2</summary>

The fixed-point equation yields the opposite assertion.

</details>
<details>
<summary>Solution</summary>

If T proved G, its first derivability condition would give a proof of Box G. The fixed point and modus ponens would give a proof of its negation. Negation elimination would make T inconsistent. Thus no proof of G exists. This does not similarly exclude a proof of its negation without a further assumption or a Rosser modification.

</details>

### Exercise 10
<a id="chapter-13-ex-10"></a>

Why does a stronger theory proving Con(T) not contradict the second incompleteness theorem for T?

<details>
<summary>Hint 1</summary>

Name which theory’s provability symbol occurs in the conclusion.

</details>
<details>
<summary>Hint 2</summary>

An implication about T’s proofs does not quantify over every stronger theory.

</details>
<details>
<summary>Solution</summary>

The theorem states that T itself lacks a proof of its specified consistency sentence under the hypotheses. A stronger theory U can have additional axioms proving that sentence. If U also meets the hypotheses, the theorem separately limits U’s proof of Con(U), not its proof of Con(T). Relative consistency and absolute consistency remain different claims.

</details>

## Looking backward and forward

This chapter built on the computability theory from Chapter 12 and the levels-of-language framework from “Reference desk A — levels of language.” The arithmetization of syntax bridges object language and metalanguage. The next chapter, Chapter 14, explores proof theory and ordinal analysis, which provide consistency proofs for fragments of arithmetic.

## Sources

The original CC BY-SA 4.0 chapter, all five original problems and their full solutions are retained under stable identity \`chapter-13\`. The added diagonal, Rosser and provability arguments use exactly the coding and finite-arithmetic inputs stated above. Primary teaching references are the [Open Logic Project arithmetic and incompleteness text](https://builds.openlogicproject.org/open-logic-complete.pdf) and its [Intermediate Logic derivations](https://builds.openlogicproject.org/courses/intermediate-logic/il-screen.pdf). Gödel's original and Rosser's strengthened hypotheses are kept distinct; no claim that every proof predicate satisfies the derivability conditions is used.

## Summary

Capture-safe graph representation yields a fixed point without adding a self-referential term to arithmetic. Finite numeral verification and fixed-numeral comparisons prove Rosser's two unprovability directions from consistency. The second theorem additionally uses the exact internal derivability conditions for the ordinary provability predicate and derives Con(T) implies the Gödel sentence. Truth, consistency, effectiveness and strength remain separate hypotheses. Proof theory next studies derivations themselves, while ordinal analysis retains its own stated arithmetic and metatheoretic assumptions.
`;export{e as default};