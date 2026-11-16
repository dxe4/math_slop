var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: model-theory
title: "Model Theory"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Model Theory

Model theory studies the relationship between formal theories and their interpretations in mathematical structures. The central results — soundness, completeness, compactness, and the Löwenheim–Skolem theorems — form the backbone of modern mathematical logic. This chapter states each theorem with complete precision, sketches the standard proofs, diagnoses common misstatements, and works examples at the level of explicit structures.

## Soundness

**Theorem 2.7 (Soundness).** Let $\\vdash$ be a specified first-order proof calculus whose logical axioms are valid and whose inference rules preserve semantic consequence. For any theory $T$ and sentence $\\varphi$:

$$T \\vdash \\varphi \\quad \\Longrightarrow \\quad T \\models \\varphi.$$

**Proof sketch.** Induct on the length of the derivation of $\\varphi$ from $T$.
- Base case: if $\\varphi$ is a logical axiom, it is valid by hypothesis, so $\\mathcal{M} \\models \\varphi$ for every structure $\\mathcal{M}$.
- Base case: if $\\varphi \\in T$, then by definition every model of $T$ satisfies $\\varphi$.
- Inductive step: suppose $\\varphi$ follows by modus ponens from $\\psi$ and $\\psi \\to \\varphi$, both already derived. By the induction hypothesis, every model of $T$ satisfies $\\psi$ and $\\psi \\to \\varphi$. The truth table for implication forces every such model to satisfy $\\varphi$.
- Inductive step: suppose $\\varphi = \\forall x \\, \\psi$ follows by universal generalization from $\\psi$, where $x$ is not free in any premise used to derive $\\psi$. By the induction hypothesis, $T \\models \\psi$. Let $\\mathcal{M} \\models T$ and let $a \\in M$. Since $x$ is not free in premises, the assignment $s[x/a]$ still makes all premises true; hence $\\mathcal{M}, s[x/a] \\models \\psi$. Since $a$ was arbitrary, $\\mathcal{M} \\models \\forall x \\, \\psi$.

**What it does not say.** Soundness is relative to the calculus and semantics. A software checker can implement its kernel incorrectly. Formal confidence requires a small specified trusted base, tests, and ideally independent verification.

## Completeness

**Theorem 2.8 (First-order completeness, Gödel 1929).** For classical first-order logic with the standard semantics, if $T \\models \\varphi$, then $T \\vdash \\varphi$.

An equivalent form, often more convenient, is the *consistency form*: every syntactically consistent set of first-order sentences has a model.

**Proof sketch (Henkin construction).**
1. Enumerate existential formulas stage by stage, enlarging the language with a fresh constant $c_\\varphi$ when $\\exists x\\,\\varphi(x)$ first appears. Newly added constants create new formulas, so the construction must close under further stages.
2. Add the *Henkin axiom* $\\exists x \\, \\varphi(x) \\to \\varphi(c_\\varphi)$ for each such formula.
3. Extend $T$ to a maximally consistent set $T^*$ in the expanded language.
4. Build the *term model* $\\mathcal{M}$: its domain consists of equivalence classes of closed terms under $t \\sim s \\Leftrightarrow T^* \\vdash t = s$. Equality axioms make this a congruence, so functions and relations do not depend on the representatives chosen.
5. Interpret function and relation symbols according to provability in $T^*$.
6. Prove the *truth lemma* by induction on formulas: $T^* \\vdash \\varphi$ iff $\\mathcal{M} \\models \\varphi$.

Since $T^*$ is consistent, $\\bot \\notin T^*$, so $\\mathcal{M} \\not\\models \\bot$; hence $\\mathcal{M}$ is a model of $T$.

**Why witness constants are needed.** If $\\exists x \\, \\varphi(x)$ belongs to the extended theory, the construction needs a term naming an object that realizes $\\varphi$. The Henkin axiom provides exactly this. Freshness and staged construction preserve consistency: if adding a Henkin axiom made $T^*$ inconsistent, one could derive $\\neg \\exists x \\, \\varphi(x)$, contradicting maximal consistency.

**Boundary.** Full second-order logic with standard semantics does not have an effective sound and complete proof calculus analogous to first-order completeness. Henkin semantics for second-order syntax behaves differently and recovers completeness by treating higher-order ranges as part of the structure.

## Compactness

**Theorem 2.9 (Compactness).** A set $T$ of first-order sentences has a model if and only if every finite subset of $T$ has a model.

**Proof from completeness.** If $T$ has no model, then $T \\models \\bot$. By completeness, $T \\vdash \\bot$. A formal derivation is finite, so it uses only finitely many premises from $T$; say $T_0 \\subseteq T$ is finite and $T_0 \\vdash \\bot$. By soundness, $T_0 \\models \\bot$, so $T_0$ has no model. The converse direction is immediate: if $T$ has a model, that model satisfies every finite subset.

**Example: nonstandard arithmetic.** Expand $L = \\{0, S, +, \\cdot, <\\}$ by one new constant $c$. Let $T$ contain all true sentences of standard arithmetic together with $c>\\bar n$ for every standard numeral $\\bar n$. Every finite subset has a standard expansion: interpret $c$ above the largest numeral mentioned. By compactness, $T$ has a model. Its reduct to $L$ is elementarily equivalent to the standard model, while $c$ names an element larger than every standard numeral, so the reduct is nonstandard. Separate sentences $\\exists x\\,(x>\\bar n)$ would not work: the standard model already satisfies all of them with different witnesses.

**Counter-boundary.** Compactness fails for finite-model semantics: each finite subset of the sentences $\\{\\text{“there are at least } n \\text{ elements”} : n \\in \\mathbb{N}\\}$ has a finite model, but the whole collection has no finite model. The ordinary compactness theorem supplies an infinite model. A finite-model lab cannot certify compactness.

## The Löwenheim–Skolem theorems

**Theorem 2.10 (Downward Löwenheim–Skolem).** Let $L$ be a signature of cardinality at most $\\kappa$, let $\\mathcal{M}$ be an infinite $L$-structure, and let $A \\subseteq M$ have size at most $\\kappa$, for infinite $\\kappa$. Then $\\mathcal{M}$ has an elementary substructure $\\mathcal{N}$ containing $A$ with $|N| \\leq \\kappa$.

**Definition 2.11 (elementary substructure).** $\\mathcal{N} \\subseteq \\mathcal{M}$ is an *elementary substructure*, written $\\mathcal{N} \\preceq \\mathcal{M}$, if for every formula $\\varphi(x_1, \\dots, x_n)$ and every $a_1, \\dots, a_n \\in N$:

$$\\mathcal{N} \\models \\varphi(a_1, \\dots, a_n) \\quad \\Longleftrightarrow \\quad \\mathcal{M} \\models \\varphi(a_1, \\dots, a_n).$$

**The Tarski–Vaught test.** $\\mathcal{N} \\subseteq \\mathcal{M}$ is elementary if and only if for every formula $\\varphi(x, y_1, \\dots, y_n)$ and every $b_1, \\dots, b_n \\in N$, if there exists $a \\in M$ with $\\mathcal{M} \\models \\varphi(a, b_1, \\dots, b_n)$, then there exists $a' \\in N$ with $\\mathcal{M} \\models \\varphi(a', b_1, \\dots, b_n)$.

**Proof sketch for downward Löwenheim–Skolem.** Start with $A_0 = A$. Given $A_n$, for each formula $\\varphi(x, \\vec{y})$ and parameters $\\vec{b} \\in A_n$ such that $\\mathcal{M} \\models \\exists x \\, \\varphi(x, \\vec{b})$, choose a witness $a \\in M$ and add it. Let $A_{n+1}$ be $A_n$ plus all chosen witnesses. The union $\\mathcal{N} = \\bigcup_n A_n$ satisfies the Tarski–Vaught test by construction, and $|N| \\leq \\kappa$ because at each stage we add at most $\\kappa \\cdot \\kappa = \\kappa$ many elements.

**Skolem-paradox diagnosis.** A countable model $\\mathcal{M}$ of set theory may contain an object $R^{\\mathcal{M}}$ that $\\mathcal{M}$ regards as uncountable. Externally, the domain of $\\mathcal{M}$ and hence its collection of represented “reals” may be countable. The external enumeration need not be an object of $\\mathcal{M}$, so $\\mathcal{M}$ does not see a bijection violating its internal statement. “Countable” has been evaluated in two ambient structures.

## Common errors

**Error: confusing completeness with decidability.** Completeness says semantic consequence coincides with syntactic derivability. It does not say there is an algorithm to decide whether $T \\vdash \\varphi$. First-order logic is complete but undecidable.

**Error: applying compactness to finite models.** As noted above, compactness is a theorem about first-order logic with the standard (possibly infinite) semantics. Restricting to finite structures destroys it.

**Error: Skolem paradox as a contradiction.** The Skolem paradox is not a contradiction in ZF; it is a phenomenon that arises from evaluating “countable” inside and outside a model. The internal and external notions need not agree.


## Preparation and precise conventions

Use the complete Henkin and compactness proofs in [Introduction to Logic and Set Theory](/books/library-book-introduction-to-logic-and-set-theory/). The preceding outlines are retained as a map; the arguments below supply the full elementary-substructure and cardinal constructions used here. We work in ambient ZFC, with set-sized finitary signatures and nonempty structures. Write $|L|$ for the number of nonlogical symbols; the number of formulas is at most $\\max(|L|,\\aleph_0)$. A theory called complete is understood through its deductive closure, so “a sentence belongs to a complete theory” can equivalently mean it is a consequence of its axiom presentation.

An $L$-substructure contains every constant interpretation, is closed under the interpreted functions and restricts each relation to its smaller domain. This condition precedes the Tarski–Vaught test: an arbitrary subset supplied only with selected existential witnesses is not yet automatically a substructure.

## Full witness and elementarity arguments

**Lemma 2.1 (The fresh Henkin step).** If a sentence set $S$ is consistent, $c$ occurs neither in $S$ nor in $A(x)$, and $x$ is its only possible free variable, then adjoining $\\exists xA\\to A(c)$ preserves consistency.

*Proof.* If the extension were inconsistent, discharge that implication to derive its negation from $S$. Classical propositional reasoning then derives both $\\exists xA$ and $\\neg A(c)$. In the latter finite proof replace the fresh constant $c$ by a fresh variable $y$, first renaming bound variables and eigenvariables to avoid capture. The assumptions from $S$ are unchanged. Universal introduction gives $\\forall x\\neg A$, contradicting the derived existential through a fresh witness case. This contradicts consistency of $S$. Adding unused new constants cannot introduce inconsistency by the same finite-proof replacement argument. ∎

This is the justification needed behind the earlier short witness discussion. Maximal consistency by itself does not replace freshness or the replacement argument. Iterated language stages ensure formulas involving newly added constants later receive witnesses too; a default constant ensures that the closed-term quotient is nonempty. The prerequisite book proves the resulting equality congruence and truth lemma in full.

**Theorem 2.2 (Tarski–Vaught, proved).** The witness condition stated above characterises elementary substructures.

*Proof.* If $N\\preceq M$ and the parameter existential holds in $M$, it holds in $N$. Its witness in $N$ satisfies the body in both structures by elementarity. Conversely suppose the witness condition and substructure requirements hold. Induct on formulas with parameters from $N$. Terms have the same values in both structures because constants and functions restrict correctly, so atomic relations and identity agree. Boolean connectives preserve agreement. For an existential formula, a witness in $N$ transfers to $M$ by induction. A witness known only in $M$ can be replaced by one in $N$ using the test, and its body transfers back by induction. For a universal formula, truth in $M$ implies truth for each element of $N$ by induction. If the universal were true in $N$ but false in $M$, apply the witness condition to the negated body and transfer that counterexample into $N$, a contradiction. Thus every formula agrees. ∎

**Theorem 2.3 (Downward theorem, full construction).** For any $A\\subseteq M$ and infinite cardinal $\\kappa\\ge\\max(|L|,|A|,\\aleph_0)$, there is $N\\preceq M$ containing $A$ with $|N|\\le\\kappa$.

*Proof.* Choose $m_0\\in M$ and put $A_0=A\\cup\\{m_0\\}$ together with all constant interpretations. At stage $n+1$, add every interpreted function value on finite tuples from $A_n$. Also, for every existential formula with a finite parameter tuple from $A_n$ that is true in $M$, choose one witness in $M$ and add it. There are at most $\\kappa$ formulas and at most $\\kappa$ finite parameter tuples. The finite arities and infinite-cardinal arithmetic in ambient ZFC therefore give $|A_{n+1}|\\le\\kappa$.

The union $N=\\bigcup_{n<\\omega}A_n$ has size at most $\\kappa$, contains $A$ and is nonempty. Every finite tuple in the union occurs at one stage, so its function values are in the next stage. Hence it is the domain of a substructure. The same finite-tuple argument ensures that every existential statement with parameters from $N$ has a chosen witness in $N$ whenever it holds in $M$. Theorem 2.2 gives elementarity. ∎

If an exact infinite size $\\lambda$ is required and $\\max(|L|,|A|,\\aleph_0)\\le\\lambda\\le|M|$, start with a subset of size $\\lambda$ containing $A$. The resulting elementary hull both contains $\\lambda$ elements and has at most that many. This proves equality. An uncountable set of distinct named constants prevents a countable substructure, so the language bound cannot be omitted.

## Diagrams and upward extensions

**Definition 2.4 (Elementary diagram).** Expand $L$ by constants $c_a$ for all $a\\in M$. The elementary diagram is every sentence true in that expansion, including negated formulas and formulas with quantifiers.

A model $B$ of the diagram receives a map $a\\mapsto c_a^B$. True disequalities make it injective. Named equations and relations preserve functions and basic structure. For every parameter formula, its instance is in the diagram if true in $M$, and its negation is there if false. Thus the map is elementary, not merely a homomorphism.

**Theorem 2.5 (Upward theorem).** If $M$ is infinite and $\\kappa\\ge\\max(|M|,|L|,\\aleph_0)$, there is an elementary extension of $M$ of size exactly $\\kappa$, after identifying an elementary image with $M$.

*Proof.* Add constants $d_i$ for $i<\\kappa$ to the elementary diagram, and all inequalities $d_i\\ne d_j$ for $i\\ne j$. Every finite subset is satisfiable in an expansion of $M$: finitely many new names can be given distinct values because $M$ is infinite, while all diagram sentences remain true. Compactness gives a model $B$ with at least $\\kappa$ elements and an elementary image of $M$. Its expanded language has size at most $\\kappa$. Apply the downward theorem in that expanded language. Every constant interpretation must lie in the resulting elementary substructure $C$, so $C$ contains all $d_i^B$ and all $c_a^B$. It has at least and at most $\\kappa$ elements. Its reduct still contains the elementary image of $M$, because agreement with $B$ holds for every named formula. Replacing the target by an isomorphic copy gives the required extension. ∎

A finite structure cannot have a larger elementary extension: the sentence saying its domain has exactly its finite size is preserved by elementarity. For a theory with any infinite model, a variant using that theory rather than the whole diagram gives models of every infinite size at least $\\max(|L|,\\aleph_0)$, even if the chosen original model is larger than the desired size.

**Theorem 2.6 (Elementary chain).** The union of a nonempty increasing chain of elementary substructures is a structure and an elementary extension of each member.

*Proof.* Interpret constants and functions by any stage containing their finitely many arguments; the substructure inclusions make the value independent of stage. Relations are similarly consistent. Prove formula agreement between a stage and the union by induction. Atomic and Boolean cases follow immediately. An existential witness in the union belongs to some stage containing the finitely many parameters. Induction identifies the body's truth there, and elementarity of the chain transfers the existential assertion to the original parameter stage. Conversely an original-stage witness remains a witness in the union by induction. Universal agreement follows by the corresponding negated existential argument. This proves elementarity for all formulas. ∎

## Worked example 1: a substructure need not be elementary

In the order-only signature, $\\mathbb Z$ with its induced order is a substructure of $\\mathbb Q$. There are no function symbols requiring additional closure. With parameters zero and one, the formula $\\exists x(0<x\\land x<1)$ is true in the rational order at one half and false in the integer order. The Tarski–Vaught witness condition fails exactly for this formula. Having the same comparisons on retained elements is enough for an induced substructure but not for agreement on quantified formulas.

## Worked example 2: a proper countable elementary extension

Name every natural number in the full elementary diagram of standard arithmetic and add one constant $d$ with $d\\ne c_n$ for each standard $n$. Every finite subset is satisfied by the natural numbers, assigning $d$ a value outside the finitely many forbidden ones. Compactness gives a diagram model with a genuinely new element. Its language is countable, so a countable elementary hull containing all these named elements exists. Its arithmetic reduct is a countable elementary extension of the standard model and still contains the new element $d$. This is stronger than merely agreeing on sentences: every formula with a tuple of named standard parameters also agrees.

## Worked example 3: a witness hull in the real field

Use the ordered-field signature with $0,1,+,-,\\cdot,<$ and start the hull construction inside the real field with the rational numbers. There are countably many symbols and formulas and a countable seed, so the resulting elementary substructure is countable. It is closed under the listed field operations. The formula $\\exists x(x>0\\land x\\cdot x=1+1)$ holds in the real field, so its positive-root witness must occur in the hull. Thus the hull is larger than the rational seed, which has no such root, but remains far smaller than the real domain. The theorem supplies the witnesses for all formulas at once, not just this displayed polynomial.

## Practice exercises

### Exercise 1
<a id="model-theory-ex-1"></a>

Let $T$ be the theory of dense linear orders without endpoints. Use compactness to show $T$ has a model of cardinality $\\kappa$ for every infinite $\\kappa$.

<details>
<summary>Hint 1</summary>

Name sufficiently many pairwise distinct elements.

</details>
<details>
<summary>Hint 2</summary>

After compactness use a hull preserving every new constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Add $\\kappa$ new constant symbols and axioms saying they are pairwise distinct. Every finite subset has an expansion of $(\\mathbb{Q},<)$, so compactness gives a model of size at least $\\kappa$. Its expanded language has size $\\kappa$; downward Löwenheim–Skolem applied to a subset containing all named elements gives an elementary submodel of size at most $\\kappa$. The named elements keep its size at least $\\kappa$, hence exactly $\\kappa$.

</details>

### Exercise 2
<a id="model-theory-ex-2"></a>

Show that if $T$ is a complete theory with an infinite model, then $T$ has no finite models.

<details>
<summary>Hint 1</summary>

Compare each finite lower-size sentence with completeness.

</details>
<details>
<summary>Hint 2</summary>

An infinite model decides each such sentence positively.

</details>
<details>
<summary>Solution</summary>

**Solution.** Suppose $\\mathcal{M} \\models T$ is infinite. For each $n$, the sentence $\\exists x_1 \\dots \\exists x_n \\bigwedge_{i < j} x_i \\neq x_j$ is true in $\\mathcal{M}$. Since $T$ is complete, each such sentence is in $T$. But then every model of $T$ must satisfy all of them, hence be infinite.

</details>

### Exercise 3
<a id="model-theory-ex-3"></a>

Use compactness to prove that the theory of $(\\mathbb{N},0,S)$ has a nonstandard model, and explain why this is an existence proof rather than an explicit presentation of its domain and operations.

<details>
<summary>Hint 1</summary>

Force one new constant to avoid every standard numeral.

</details>
<details>
<summary>Hint 2</summary>

Each finite avoidance list is satisfiable in the original model.

</details>
<details>
<summary>Solution</summary>

**Solution.** Add a new constant $c$ and axioms $c \\neq 0$, $c \\neq S(0)$, $c \\neq S(S(0))$, and so on. Every finite subset has an expansion of the standard structure by interpreting $c$ as a numeral not mentioned there. Compactness yields a model in which $c$ differs from every standard numeral, so the reduct is nonstandard. Compactness guarantees such a structure; it does not compute a concrete domain or full interpretation table.

</details>

### Exercise 4
<a id="model-theory-ex-4"></a>

Prove that the class of finite groups is not axiomatizable by a first-order theory.

<details>
<summary>Hint 1</summary>

Add unbounded lower-size requirements.

</details>
<details>
<summary>Hint 2</summary>

Use arbitrarily large finite cyclic groups for finite subsets.

</details>
<details>
<summary>Solution</summary>

**Solution.** Suppose $T$ axiomatized the class of finite groups. Let $T' = T \\cup \\{\\exists x_1 \\dots \\exists x_n \\bigwedge_{i < j} x_i \\neq x_j : n \\in \\mathbb{N}\\}$. Every finite subset of $T'$ has a model (a sufficiently large finite group). By compactness, $T'$ has a model, which would be an infinite group satisfying $T$, contradiction.

</details>

### Exercise 5
<a id="model-theory-ex-5"></a>

State the soundness theorem and its contrapositive. Use the contrapositive to show that if $T \\vdash \\varphi \\to \\psi$ and $T \\vdash \\varphi$, then $T \\models \\psi$.

<details>
<summary>Hint 1</summary>

Separate soundness from its contrapositive.

</details>
<details>
<summary>Hint 2</summary>

A syntactic proof of the conclusion follows by modus ponens; semantic failure would contradict soundness.

</details>
<details>
<summary>Solution</summary>

**Solution.** Soundness: $T \\vdash \\varphi \\Rightarrow T \\models \\varphi$. Contrapositive: $T \\not\\models \\varphi \\Rightarrow T \\not\\vdash \\varphi$. Given $T \\vdash \\varphi \\to \\psi$ and $T \\vdash \\varphi$, let $\\mathcal{M} \\models T$. By soundness, $\\mathcal{M} \\models \\varphi \\to \\psi$ and $\\mathcal{M} \\models \\varphi$. The truth definition for $\\to$ forces $\\mathcal{M} \\models \\psi$. Hence $T \\models \\psi$.

For an explicit contrapositive route, modus ponens gives $T\\vdash\\psi$. If $T\\not\\models\\psi$, contrapositive soundness would give $T\\nvdash\\psi$, contradicting that proof. Hence $T\\models\\psi$.

</details>

### Exercise 6
<a id="model-theory-ex-6"></a>

Prove that every elementary substructure is a substructure, including closure under functions.

<details>
<summary>Hint 1</summary>

Use formulas naming each function value.

</details>
<details>
<summary>Hint 2</summary>

An existential equality has a unique witness.

</details>
<details>
<summary>Solution</summary>

For a tuple from N, M satisfies $\\exists y(y=f(\\vec a))$. Elementarity gives a witness in N, whose actual identity with the M-value follows by formula agreement. Constant values are the zero-argument case. Atomic relation agreement then gives restricted relations. Thus all substructure requirements follow.

</details>

### Exercise 7
<a id="model-theory-ex-7"></a>

Why must a witness hull contain a seed element even when the parameter set and constant set are empty?

<details>
<summary>Hint 1</summary>

All domains here are nonempty.

</details>
<details>
<summary>Hint 2</summary>

An empty union does not define a permitted structure.

</details>
<details>
<summary>Solution</summary>

Choosing one element of the original nonempty domain makes the initial seed nonempty. It does not affect any infinite cardinal upper bound. Without that addition, a procedure with no available parameter tuples and no chosen witnesses could leave an impermissibly empty candidate domain.

</details>

### Exercise 8
<a id="model-theory-ex-8"></a>

Show that arbitrarily large finite models of a theory imply an infinite model.

<details>
<summary>Hint 1</summary>

Adjoin the sentences asserting at least n elements.

</details>
<details>
<summary>Hint 2</summary>

Any finite group of lower bounds has one maximum.

</details>
<details>
<summary>Solution</summary>

Every finite subset of the enlarged theory is satisfied by a sufficiently large finite model of the original theory. Compactness gives a model satisfying every lower bound. A finite domain of size m would fail the bound m+1, so the resulting model is infinite.

</details>

### Exercise 9
<a id="model-theory-ex-9"></a>

Why does the full elementary diagram, rather than only positive atomic facts, ensure an elementary embedding?

<details>
<summary>Hint 1</summary>

Consider both a formula and its negation.

</details>
<details>
<summary>Hint 2</summary>

Quantified formulas must also be represented.

</details>
<details>
<summary>Solution</summary>

If a parameter formula is true, its named instance belongs to the diagram; if false, its named negation belongs. Thus a diagram model agrees on every formula, including quantified ones, in both directions. Positive atomic facts alone guarantee at most preservation of those facts and do not establish this agreement.

</details>

### Exercise 10
<a id="model-theory-ex-10"></a>

Does a countable model of set theory supplied by completeness have to be transitive? Explain.

<details>
<summary>Hint 1</summary>

The interpretation of membership is part of the structure.

</details>
<details>
<summary>Hint 2</summary>

A term-model quotient does not identify its membership relation with ambient membership.

</details>
<details>
<summary>Solution</summary>

No. Completeness supplies a first-order model with some binary relation interpreting membership. Transitivity is an additional external condition relating its domain and membership to ambient sets. Neither the countable-model construction nor internal uncountability supplies that condition. A countable transitive model is therefore a stronger demand.

</details>

## Looking backward and forward

This chapter built on “Reference desk A — levels of language” by filling in the semantic and proof-theoretic layers. The next chapter, “Set-Theoretic Topology”, moves from model theory to the topological and set-theoretic machinery needed for independence proofs. Later, “Forcing” and “Large Cardinals” apply the compactness and completeness theorems in deep set-theoretic contexts.

## Sources

The original CC BY-SA 4.0 model-theory text and all five original solutions remain. Full foundational completeness is linked to the L3 prerequisite; the witness, elementary-chain and cardinal proofs added here are complete in the declared ambient metatheory. Primary companion references are [Thomas Scanlon's Berkeley model-theory lecture notes, Lecture 9, written by Martin Speirs](https://math.berkeley.edu/~scanlon/225af13lectures/20132609Lec9.pdf) and David Marker's [Model Theory: An Introduction, author page](https://homepages.math.uic.edu/~marker/mt-intro.html). General language size and witness choices are explicit rather than inferred from a countable special case.

## Summary

Compactness turns finite satisfiability into models. Elementarity preserves all formulas with parameters, and the Tarski–Vaught test makes witness closure its exact criterion. Closing a seed under functions and chosen witnesses proves downward Löwenheim–Skolem; elementary diagrams and distinct constants prove the upward theorem with exact cardinal bounds. Elementary chains preserve truth at their unions. None of these statements identifies an arbitrary model with an intended structure or makes a countable set-theoretic model transitive. Quantifier elimination next gives a more concrete way to recognize elementary behavior.
`;export{e as default};