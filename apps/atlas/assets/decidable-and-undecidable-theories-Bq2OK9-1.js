var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: decidable-and-undecidable-theories
title: "Decidable and Undecidable Theories"
level: graduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Decidable and Undecidable Theories

A successful decision procedure always terminates with the correct answer for its specified input class. Enumerating proofs is a different achievement: a proof search eventually confirms a theorem, but can run forever on a nontheorem. This chapter develops both positive and negative examples. We prove decidability for pure equality, for dense linear order using the earlier elimination theorem, and for addition arithmetic by finite automata. We then prove essential undecidability for Robinson arithmetic and derive the undecidability of first-order validity. Throughout, languages are effectively presented, formulas are finite strings, and structures have nonempty domains. A claim about one fixed structure's complete theory must not be confused with a claim about all structures in a language.

## Which set is being decided?

For an effectively axiomatized theory T, write Th(T) for its deductive closure, the set of sentences provable from its axioms. Saying that T is decidable means that membership in Th(T) is decidable. An easily recognized axiom set does not suffice: Robinson arithmetic has a finite axiom set but an undecidable deductive closure. Conversely, a theory may have an inconvenient particular presentation while its closure has a different decision procedure. Fixing sentence codes makes these assertions ordinary computability claims.

A consistent theory is **complete** when, for every sentence A, exactly one of A and its negation belongs to its closure. Completeness is about coverage of questions, not speed or effectiveness. If a consistent complete theory is computably enumerable, it is decidable: enumerate its proofs until either A or its negation appears. Completeness guarantees that this happens, and consistency guarantees that the two answers do not conflict. The proof gives an algorithm but no useful bound on its running time. The complete true theory of the standard natural numbers is not thereby decidable, since it lacks the required effective enumeration, as the incompleteness chapter explains.

The converse implication from decidable to complete is false. A decider can answer that neither of two opposite sentences is a theorem. The theory of equality alone gives a transparent example, and we now prove its decidability rather than merely naming it.

## Equality alone: a finite bound for every sentence

Use the language with equality and no constants, functions or other relations. Its structures are just nonempty sets. Let the quantifier rank of a formula be the maximum number of nested quantifiers. For a sentence of rank r, all domains of size at least max(1,r) agree on its truth value. Small domains may disagree because the sentence can count a limited number of distinct elements.

Here is the precise induction behind the bound. Suppose tuples in two sets have the same equality pattern, meaning that corresponding coordinates are equal exactly in the same cases. Suppose also that each set has at least q elements outside the distinct entries of its tuple. Then every formula of quantifier rank at most q with its free variables among that tuple has the same truth value on the two assignments. Atomic equalities depend only on the pattern. Negation and conjunction follow from the induction hypothesis, as do the other Boolean operations. For an existential formula, choose a witness in the first set. If it equals an assigned element, choose its correspondent in the second. If it is fresh, the second set has a fresh element since q is positive. The extended tuples still have the same pattern; after adding one new distinct element each has at least q-1 unused elements. Apply the induction hypothesis to the matrix. This proves the forward direction; swapping the two sets proves the converse. Universal quantification follows by negation. This completes the structural induction, with the quantifier rank reduced at every quantified step.

For a closed sentence the initial tuple is empty. Thus to decide validity, evaluate the sentence by finite exhaustive semantics on sets of sizes 1 through max(1,r). Every smaller positive size occurs among these cases, and every larger size agrees with the largest representative. Accept exactly when all evaluations are true. Soundness and completeness of first-order logic identify this semantic validity with theoremhood in the pure equality theory. The computation is finite, although not advertised as efficient. It works because equality has no hidden relational geometry; the same size argument would be false for an arbitrary binary relation.

### Worked example 1: decidability without completeness

The sentence asserting two distinct objects has quantifier rank two. It is false in a singleton and true in a two-element domain; every larger domain agrees with the latter. It is therefore not valid, and its negation is not valid either. Our procedure correctly rejects both as equality theorems. This is a decidable, consistent, incomplete theory. The equality pattern induction also explains why one cannot decide this sentence merely by trying a very large finite domain: the singleton case matters.

## Effective elimination in dense linear order

The language of dense linear orders without endpoints is just equality and a strict order relation. Chapter 3 proves effective quantifier elimination: one can compute a quantifier-free equivalent modulo the order axioms by reducing finite order constraints and eliminating a chosen variable. Apply this procedure repeatedly to a closed sentence. There are no constants or free variables left, so its quantifier-free result reduces to a Boolean truth value. This decides the complete theory of dense linear orders without endpoints. The algorithm uses the effective elimination construction, not merely the abstract existence of some equivalent formula.

### Worked example 2: density is a hypothesis

The sentence saying that between every x less than y there is a z strictly between them is true in every dense linear order by the density axiom. With existential witnesses eliminated, a proposed open interval contains a point exactly when its lower endpoint is strictly below its upper endpoint. Consequently the existential clause in the sentence reduces to x<y and the whole implication becomes true. In the integers with their usual order, x=0 and y=1 refute the sentence. That is no failure of the algorithm: the integers are outside its input theory. Specifying the intended theory is as essential as specifying the formula.

## Addition arithmetic by synchronous automata

Presburger arithmetic here means the complete first-order theory of the natural-number structure with 0, 1, addition and order, without variable-by-variable multiplication. We give a decision construction. The finite-automaton closure constructions used below are the product, subset, projection and reachability constructions proved in the Automata, Computability and Complexity book. Their termination follows from finiteness of the relevant state sets.

Encode a k-tuple of naturals by a nonempty word of columns of k bits, read least significant column first. All tracks have the same length. Extra all-zero columns at the right are allowed; thus one tuple has arbitrarily many padded encodings. We maintain the invariant that an automaton accepts every padded encoding of precisely the satisfying tuples. This invariant, especially its universal padding clause, is needed at quantifiers.

Equality of two tracks is recognized by checking corresponding bits. A fixed constant is recognized by checking its finitely many binary digits and then zeros; a finite state records how far through the constant one has read. The ternary relation x+y=z is recognized by a carry automaton. Its initial carry is zero. On input bits a,b,d, a transition from carry c to c' is permitted exactly when a+b+c=d+2c'. Carries are zero or one. Accept only with final carry zero, so an omitted final carry cannot create a false equation. Conversely a true sum has its correct columnwise carries and any sufficiently padded encoding ends with carry zero; indeed an encoding long enough for all three represented numbers has that property. Repeated zeros keep the zero carry unchanged. Thus the invariant holds.

Terms involving several additions can be flattened using fresh existential variables for their intermediate values and a conjunction of addition relations. Each such intermediate value is uniquely determined, so this rewriting preserves truth and never captures an existing variable. Order is definable by an addition relation: x<y precisely when some z satisfies x+z+1=y. Atomic multiplication by a fixed numeral is repeated addition, but multiplication of two free variables is not included.

Boolean conjunction and disjunction use finite product constructions. Negation first determinizes and completes the automaton and then complements its final states, relative to the universe of nonempty words on the chosen tuple alphabet. If two formulas use different lists of free variables, lift their automata to a common list by ignoring the unused tracks. All these operations preserve the tuple meaning and padding invariance.

Existential quantification requires care. To eliminate a track, first project each input column, allowing the automaton to guess the hidden bit nondeterministically. A hidden witness may need more digits than the supplied encoding of the visible tuple. Therefore, after consuming that encoding, allow any finite number of additional columns whose visible bits are all zero and whose hidden bits are arbitrary. Compute the states from which an accepting state is reachable by such columns; these become the new accepting states before projection is determinized. This is finite graph reachability, sometimes described as a right quotient by zero padding. A projected run then corresponds exactly to a witness together with a common padded encoding. In one direction the guessed hidden bits name a natural witness. In the other, pad to a length sufficient for that witness and use the original automaton's invariant. The operation therefore accepts all and only visible encodings satisfying the existential formula. Universal quantification is negated existential quantification.

For a closed sentence the tuple alphabet has zero tracks and one possible column, the empty column. Every nonempty word on this alphabet represents the same empty tuple. By the invariant the final automaton either accepts all those encodings or rejects them all. Inspect one column's run to decide the sentence. All syntactic transformations and finite graph operations are effective and terminate. This proves decidability of the stated addition theory; it does not give a reasonable complexity bound and it does not extend the result to multiplication.

### Worked example 3: carry and padding

Encode 2+3=5 with three least-significant-first columns (0,1,1), (1,1,0), (0,0,1). The first column has sum one and leaves carry zero. The second has sum two and leaves carry one. The third has sum one from that carry and leaves zero. Acceptance is correct. For the formula asserting that some y equals x+x, the one-bit encoding x=1 needs witness y=2, which needs two bits. Plain projection on the supplied one-column word would reject, despite the formula being true. The extra zero visible column in the quantifier construction supplies the missing high bit of y. This is why a proof saying only “regular languages are closed under projection” has omitted a material representation step.

## Essential undecidability of Robinson arithmetic

Call a consistent theory essentially undecidable if every consistent computably enumerable extension in its language has undecidable theorem set. We prove this for Robinson arithmetic Q using the full Rosser theorem proved in Chapter 5 with its explicit coding inputs. The imported computability and representability inputs are exactly those stated there; the present argument does not require soundness of the extension in the standard model.

Suppose a consistent computably enumerable extension T of Q had decidable theorem set. Given a finite set of sentences Gamma, consistency of T together with Gamma is decidable using the deduction theorem: it is inconsistent exactly when T proves the negation of their conjunction. The empty conjunction is truth. Our assumed T-decider therefore decides each finite consistency question without searching forever for absence of a contradiction.

Enumerate all sentences A_0,A_1 and so on. Begin with no added sentences. At stage n ask whether adjoining A_n to the decisions already made preserves consistency with T. If yes, adjoin it; otherwise adjoin its negation. At least one sign preserves consistency: if both finite extensions were inconsistent, the deduction theorem and classical propositional reasoning would already make the preceding extension inconsistent. Induction therefore keeps every finite stage consistent. The union U is consistent because a proof of contradiction uses only finitely many added axioms. It decides every sentence by construction, and its axioms are computably enumerable because the stage choices were computable. It extends Q. Rosser's theorem says that no consistent computably enumerable extension of Q is complete. This contradicts the construction of U. Hence T was not decidable. Q itself is consistent because the standard natural-number structure satisfies its seven axioms, so the conclusion applies in particular to Q.

An effective interpretation can transfer this obstruction to a different language, but the interpretation must be supplied. It needs a computable translation of sentences and a proof that the relevant theoremhood questions are preserved and reflected, or another explicitly adequate reduction. Saying merely that a theory “contains arithmetic” is not a reduction. Likewise a theory with full variable multiplication differs substantially from the addition-only structure just decided; the change in signature matters mathematically.

## Church's undecidability theorem

Let Q* be the finite conjunction of the axioms of Q. For every arithmetic sentence A, the deduction theorem and first-order completeness give the chain

$$Q\\vdash A\\quad\\Longleftrightarrow\\quad\\vdash Q^*\\to A\\quad\\Longleftrightarrow\\quad\\models Q^*\\to A.$$

The map from A to that first-order sentence is computable. If validity in all nonempty first-order structures were decidable, this reduction would decide Q's theorem set, contradicting essential undecidability. Thus first-order validity is undecidable. Function symbols may remain in the signature here; their usual relational graph translation with existence and uniqueness axioms gives the corresponding relational version if wanted.

Validity is nevertheless computably enumerable: enumerate formal proofs in a sound and complete effective first-order calculus. Every valid sentence eventually appears and no invalid sentence does. Its complement cannot also be computably enumerable. Otherwise run the two enumerations in parallel on an input sentence; one must eventually list it, giving a decider. This distinction is a precise reason that proof search may succeed on every valid input while there is no total procedure settling all inputs. It is not a claim that any particular difficult formula resists every conceivable argument.

## Exercises

<a id="decidable-and-undecidable-theories-ex-1"></a>

**Exercise 1.** Explain why a decidable axiom set need not give a decidable theory.

<details>
<summary>Hint 1</summary>

Distinguish recognizing one axiom from recognizing arbitrary finite consequences.

</details>

<details>
<summary>Hint 2</summary>

Use Q and the essential-undecidability theorem.

</details>

<details>
<summary>Solution</summary>

An axiom recognizer answers whether a sentence is among specified premises; theoremhood allows an arbitrary finite deduction from those premises. Such deductions can be enumerated but unsuccessful search need not terminate. Q has seven recognizable axioms and is consistent in the standard model, yet the essential-undecidability proof shows that its theorem set is undecidable. Hence the two recognition problems differ.

</details>

<a id="decidable-and-undecidable-theories-ex-2"></a>

**Exercise 2.** Prove that a consistent complete computably enumerable theory is decidable.

<details>
<summary>Hint 1</summary>

Search simultaneously for opposite sentences.

</details>

<details>
<summary>Hint 2</summary>

Explain both termination and absence of conflicting answers.

</details>

<details>
<summary>Solution</summary>

On input A enumerate the theory’s proofs, checking each conclusion against A and its negation. Completeness guarantees one of the two is a theorem and will eventually appear. Consistency prevents both from being theorems. Output yes upon A and no upon its negation. This is a total correct procedure. Without effective enumeration the proposed search is not an algorithm; without completeness it might never finish.

</details>

<a id="decidable-and-undecidable-theories-ex-3"></a>

**Exercise 3.** Use the equality-pattern induction to decide the sentence asserting at least three distinct objects.

<details>
<summary>Hint 1</summary>

Compute a sufficient rank bound.

</details>

<details>
<summary>Hint 2</summary>

Check the smaller domains as well as a large representative.

</details>

<details>
<summary>Solution</summary>

The usual sentence has three nested existential quantifiers, so rank three suffices. It is false on domains of sizes one and two and true on size three. The induction proves that every larger domain agrees with size three. Therefore it is satisfiable but not valid; its negation is also not valid because of the size-three model. This reproduces the answer by a terminating finite decision rather than a guess from one structure.

</details>

<a id="decidable-and-undecidable-theories-ex-4"></a>

**Exercise 4.** Why does the fresh-witness step in the equality proof fail for arbitrary binary relations?

<details>
<summary>Hint 1</summary>

Equality patterns record collisions only.

</details>

<details>
<summary>Hint 2</summary>

Compare a looped point with an unlooped point.

</details>

<details>
<summary>Solution</summary>

Two one-element structures can have the same equality pattern while one satisfies R(a,a) and the other does not. Already the atomic induction step fails: equality patterns carry no information about relation truth. Enlarging the domain does not repair that missing data. A back-and-forth proof for relational structures must preserve all relevant atomic relations, not just distinctness.

</details>

<a id="decidable-and-undecidable-theories-ex-5"></a>

**Exercise 5.** Trace the addition automaton on 1+1=2, and explain why a one-column encoding of 1+1=0 is rejected.

<details>
<summary>Hint 1</summary>

Read least significant bits first.

</details>

<details>
<summary>Hint 2</summary>

The final carry must be zero.

</details>

<details>
<summary>Solution</summary>

For 1+1=2 use columns (1,1,0) and (0,0,1). The first sends carry zero to one because 1+1=0+2; the second sends one to zero because 0+0+1=1. The run accepts. On the one-column tuple (1,1,0), the remaining carry is one, which is not accepting. Omitting that condition would confuse an equality of natural numbers with congruence modulo two.

</details>

<a id="decidable-and-undecidable-theories-ex-6"></a>

**Exercise 6.** Give the precise witness-padding defect in plain projection for the formula ∃y(y=x+x) at x=1.

<details>
<summary>Hint 1</summary>

The visible encoding may be shorter than the witness.

</details>

<details>
<summary>Hint 2</summary>

Describe the additional visible zero column.

</details>

<details>
<summary>Solution</summary>

The visible one-column word encodes x=1, whereas the witness y=2 needs two columns. Projection restricted to the visible length offers only one hidden bit and cannot name y=2. Permit an additional column with visible bit zero and hidden high bit one. The original addition constraints then accept the padded tuple. Finite backward reachability over these permitted extra columns implements exactly that possibility, and padding invariance makes the answer independent of the initial visible length.

</details>

<a id="decidable-and-undecidable-theories-ex-7"></a>

**Exercise 7.** Why does the automata argument not decide ordinary arithmetic with multiplication?

<details>
<summary>Hint 1</summary>

List the atomic relations for which automata were constructed.

</details>

<details>
<summary>Hint 2</summary>

Repeated addition handles a fixed coefficient, not an input-dependent number of repetitions.

</details>

<details>
<summary>Solution</summary>

The construction gives finite automata for equality, constants and addition, and builds formulas from those using effective closure operations. It never constructs an automaton for a product of two unbounded variable inputs. Multiplication by a fixed numeral can be expanded as finitely many additions in the formula, but a variable number of repetitions is not a fixed finite expansion. A claim for multiplication would need a new argument and would contradict the undecidability results for arithmetic theories containing Q.

</details>

<a id="decidable-and-undecidable-theories-ex-8"></a>

**Exercise 8.** In the effective completion of a hypothetical decidable T, prove that choosing the negative sign when the positive sign fails preserves consistency.

<details>
<summary>Hint 1</summary>

Use two deduction-theorem applications.

</details>

<details>
<summary>Hint 2</summary>

If both signs fail, derive a contradiction at the preceding stage.

</details>

<details>
<summary>Solution</summary>

Let V be T plus the current finite decisions. If V+A is inconsistent, V proves not A. If V+not A were also inconsistent, V would prove not not A, hence A by classical logic. It would then prove a contradiction, contrary to the inductive consistency assumption. Thus the negative choice is safe. Since theoremhood over T decides consistency of every finite extension, this choice can be computed without an oracle for consistency of arbitrary infinite theories.

</details>

<a id="decidable-and-undecidable-theories-ex-9"></a>

**Exercise 9.** Explain why the union of the finite consistent stages in that construction is consistent and complete.

<details>
<summary>Hint 1</summary>

A formal proof uses finitely many added premises.

</details>

<details>
<summary>Hint 2</summary>

Every sentence appears at a numbered stage.

</details>

<details>
<summary>Solution</summary>

If the union had a contradiction proof, the finitely many added axioms used in it would all lie in one stage, contradicting that stage’s consistency. Given any sentence A, the enumeration reaches it at a finite stage and adjoins either A or its negation; hence the union is complete. The computability of the stage construction supplies an effective axiom enumeration, so Rosser applies to the resulting consistent extension of Q.

</details>

<a id="decidable-and-undecidable-theories-ex-10"></a>

**Exercise 10.** Prove that first-order invalidity cannot be computably enumerable.

<details>
<summary>Hint 1</summary>

Validity is already computably enumerable by completeness.

</details>

<details>
<summary>Hint 2</summary>

Dovetail two hypothetical recognizers.

</details>

<details>
<summary>Solution</summary>

If both validity and its complement were computably enumerable, on a sentence A run their enumerations in alternating finite steps until one lists A. Exactly one must eventually do so. Return the corresponding answer; this is a validity decider. The reduction A↦Q*→A would then decide the undecidable theorem set of Q. Therefore no such complementary enumeration exists. This concerns unrestricted first-order validity, not the decidable restricted theories established earlier.

</details>

## Sources

The effective quantifier-elimination input is proved in this book’s Quantifier Elimination and Types chapter; Rosser’s theorem and its coding hypotheses are developed in its incompleteness chapter. The finite-automaton closure constructions are proved in the companion Automata, Computability and Complexity book. For the automata approach to addition arithmetic and its separate quantitative analysis see Felix Klaedtke, [“Bounds on the automata size for Presburger arithmetic”](https://doi.org/10.1145/1342991.1342995), *ACM Transactions on Computational Logic* 9(2), 2008. This chapter claims the explicit decision construction above, not the paper’s complexity bounds. Boolos, Burgess and Jeffrey, *Computability and Logic*, retained in the bibliography, supplies further background on the undecidability reductions.

## Summary

Deciding axioms, enumerating proofs, deciding theoremhood and deciding truth in a fixed structure are different tasks. Equality-only validity has a finite quantifier-rank bound; dense-order decision uses effective elimination; addition arithmetic uses automata with an explicit witness-padding step. Consistent computably enumerable extensions of Q cannot have decidable theorem sets, since a decider would construct a complete effective extension forbidden by Rosser. A finite-axiom reduction then proves undecidability of first-order validity, despite its effective proof enumeration. Each positive procedure has a specified language and theory; each negative result has an explicit reduction and hypothesis.
`;export{e as default};