
# Sequent Calculus and Proof Theory

Proof theory studies the structure of proofs and the strength of formal theories. Ordinal analysis assigns ordinal notations to theories, measuring their consistency strength. This chapter introduces Gentzen’s sequent calculus, cut elimination, and the ordinal analysis of Peano arithmetic.

## Sequent calculus

**Definition 6.6 (sequent).** A *sequent* is an expression $\Gamma \Rightarrow \Delta$ where $\Gamma$ and $\Delta$ are finite multisets of formulas. The intended meaning is: if all formulas in $\Gamma$ hold, then some formula in $\Delta$ holds.

**Structural rules:**
- Weakening: from $\Gamma \Rightarrow \Delta$, infer $\Gamma, A \Rightarrow \Delta$ or $\Gamma \Rightarrow \Delta, A$.
- Contraction: from $\Gamma, A, A \Rightarrow \Delta$, infer $\Gamma, A \Rightarrow \Delta$.
- Exchange: order of formulas in $\Gamma$ or $\Delta$ does not matter.
- Cut: from $\Gamma \Rightarrow \Delta, A$ and $\Gamma', A \Rightarrow \Delta'$, infer $\Gamma, \Gamma' \Rightarrow \Delta, \Delta'$.

**Logical rules:** Introduction rules for each connective and quantifier. For example:

$$\frac{\Gamma, A \Rightarrow \Delta}{\Gamma \Rightarrow \Delta, \neg A} \quad \frac{\Gamma \Rightarrow \Delta, A \quad \Gamma' \Rightarrow \Delta', B}{\Gamma, \Gamma' \Rightarrow \Delta, \Delta', A \land B}$$

## Cut elimination

The classical theorem below concerns pure first-order logical calculi with their exact rule conventions fixed. Its retained local-reduction paragraph is a proof sketch. A complete independent proof for an explicitly specified equality-free cumulative calculus is supplied later in this chapter. Arbitrary additional nonlogical initial sequents and equality extensions require separate treatment.

**Theorem 6.7 (Gentzen’s Hauptsatz).** Any proof in the sequent calculus for first-order logic can be transformed into a cut-free proof of the same sequent.

**Proof sketch.** By induction on the complexity of the cut formula and the height of the proof. The key cases are:
- Cut on an atomic formula: pushed upward until it disappears.
- Cut on $A \land B$: replaced by cuts on $A$ and $B$.
- Cut on $\forall x \, A$: replaced by cuts on instances $A[t/x]$.

The cut-rank (complexity of cut formulas) decreases, though the proof size may increase.

**Consequences of cut elimination.**
- **Analytic subformula property:** In propositional cut-free calculi, every formula is a subformula of the endsequent. In first-order calculi, formulas may be substitution instances of endsequent subformulas because quantifier rules introduce terms; the strict literal statement is false there.
- **Consistency:** If $\Rightarrow \bot$ had a proof, it would have a cut-free proof. But no logical rule introduces $\bot$ on the right, contradiction.
- **Interpolation:** Craig’s interpolation theorem follows from cut elimination.

## Ordinal analysis

The following Gentzen result and its full qualifications are retained as credited forward material. The dedicated ordinal-analysis chapter develops its notation and imported reduction principles; the cut-admissibility proof below does not claim to prove this ordinal theorem.

**Definition 6.8 (proof-theoretic ordinal).** After fixing an effective notation system, a class of induction formulas, and a metatheory, one common definition of the *proof-theoretic ordinal* $|T|$ is the supremum of the order types of primitive-recursive well-orderings whose well-foundedness $T$ proves in the chosen formal sense. Different conventions can package the same analysis differently, so an ordinal assignment is not a bare invariant without this data.

**Theorem 6.9 (Gentzen, standard ordinal analysis of PA).** With the usual primitive-recursive notation system and standard proof-theoretic convention, the ordinal assigned to Peano arithmetic is $\varepsilon_0$.

**Proof boundary.** Gentzen assigns decreasing ordinals below $\varepsilon_0$ to reductions of PA derivations; a sufficiently strong transfinite-induction principle for that notation system proves that the reduction cannot reach a contradiction. PA proves each fixed induction instance along each fixed notation $\alpha<\varepsilon_0$, but, assuming PA is consistent, it cannot prove the uniform well-foundedness principle at $\varepsilon_0$ strong enough to formalize this consistency argument. The formula class and coding of “up to $\varepsilon_0$” are part of the theorem.

**Definition 6.10 ($\varepsilon_0$).** $\varepsilon_0$ is the smallest ordinal $\alpha$ such that $\omega^\alpha = \alpha$. Every ordinal below $\varepsilon_0$ has a finite hereditary Cantor normal form whose exponents, and the exponents occurring recursively inside them, are smaller ordinals below $\varepsilon_0$. The ordinal $\varepsilon_0$ itself is the limit of these notations; its Cantor normal form is $\omega^{\varepsilon_0}$, so it does not satisfy the smaller-exponent description.

## Normalization in natural deduction

**Definition 6.11 (redex).** In natural deduction, a principal *redex* is an introduction rule immediately followed by the corresponding elimination rule, such as $\land I$ followed by $\land E$. With disjunction and existential elimination, normalization also needs permutative (commuting) conversions that move an elimination past a case split or witness elimination. A complete reduction system must list these conversions and the rules for every connective present.

**Definition 6.12 (normal form).** A proof is in *normal form* if it contains no redexes.

**Theorem 6.13 (weak normalization).** Every proof in intuitionistic natural deduction reduces to a normal form.

**Theorem 6.14 (strong normalization).** Every reduction sequence terminates. This holds for the simply typed lambda calculus and extends to natural deduction via the Curry–Howard correspondence.

## Common errors

**Error: saying a theory “is an ordinal.”** The ordinal notation measures a particular strength under a metatheoretic analysis. The theory itself is a set of axioms, not an ordinal.

**Error: confusing cut elimination with decidability.** Cut elimination yields the subformula property but does not give a decision procedure for first-order logic, which remains undecidable.

**Error: assuming normalization holds for all type theories.** Strong normalization fails for some systems (e.g., untyped lambda calculus). It must be proved for each system.


## The exact calculus proved complete here

The required preparation is the [L3 logic book](#/books/introduction-to-logic-and-set-theory), especially semantics and capture-safe substitution. The proof below does not use its cut-using completeness theorem or a Henkin model-existence result. It builds its countermodel directly from an unprovable search branch.

Use an effectively presented countable, equality-free, finitary signature with a countably infinite reserved supply of parameter constants. Add a fresh constant $d$ if needed to guarantee closed terms. Sequents contain sentences; free variables in a finite endsequent can first be replaced by fresh parameter constants. Validity for all interpretations of those parameters is exactly validity for all assignments of the original free variables.

**Definition 6.1 (NNF and dual).** Formulas are atoms $P(\vec t)$, their negative literals, $\top,\bot$, conjunction, disjunction and quantifiers, with negation only at atoms. Define dual $\overline A$ recursively by swapping positive and negative literals, $\top,\bot$, conjunction and disjunction, and $\forall x,\exists x$, dualising the body in the last case. Thus $\overline{\forall xA}=\exists x\overline A$ and $\overline{\exists xA}=\forall x\overline A$. Dual is involutive and means semantic negation, by formula induction. Implication abbreviates $\overline A\lor B$ and other classical negations are pushed to this form.

**Definition 6.2 (One-sided contexts).** A sequent is a finite **set** $\Gamma$ of NNF sentences, interpreted as their disjunction. It is valid if every structure satisfies some member. The empty sequent is false. A two-sided sequent is represented by the duals of its left formulas together with its right formulas. Set contexts build exchange and contraction into the representation: two copies of the same formula are one set member.

An axiom is any context containing $\top$ or an atom and its negative literal. There are precisely four logical rule forms, read from premises above to conclusion below:

$$\frac{\Gamma\cup\{A\lor B,A,B\}}{\Gamma\cup\{A\lor B\}},\qquad
\frac{\Gamma\cup\{A\land B,A\}\quad\Gamma\cup\{A\land B,B\}}{\Gamma\cup\{A\land B\}};$$

$$\frac{\Gamma\cup\{\exists xA,A[t/x]\}}{\Gamma\cup\{\exists xA\}},\qquad
\frac{\Gamma\cup\{\forall xA,A[c/x]\}}{\Gamma\cup\{\forall xA\}}.$$

The term $t$ is any closed term. In the universal rule $c$ is a parameter constant absent from the entire conclusion, including the quantified formula and the other context members. Substitution is capture avoiding. Principal formulas remain in premises, hence “cumulative”. There is no primitive cut or weakening rule and no rule expanding $\bot$.

**Lemma 6.3 (Soundness and weakening).** Every finite derivation is valid. Adding any finite context to a derivable sequent preserves derivability without cut.

*Proof.* Atomic and top axioms are valid. If a disjunction conclusion were false, both displayed disjuncts and the context would be false, falsifying its premise. If a conjunction conclusion were false, at least one conjunct would be false and its corresponding premise would be false. A false existential makes every closed-term instance false, so falsifies its premise. For a false universal choose a counterexample object and interpret fresh $c$ as that object. Its absence from the conclusion leaves the context and universal assertion unchanged, while making the added instance false. This contradicts premise validity for all structures. Induction on derivations proves soundness.

For weakening, first rename the finitely many local eigenconstants in a proof to pairwise distinct names absent from the added context and from all conflicting local scopes. There are infinitely many available names. Renaming the relevant subtrees preserves rule instances and freshness because each replacement name is unused. Now add the new context to every sequent. Axioms remain axioms and all four rules remain instances with the same principal formulas; eigenconstants remain fresh. This gives a proof of the weakened endsequent with the same height. ∎

Contraction needs no omitted principal case in this presentation: $\Gamma\cup\{A,A\}=\Gamma\cup\{A\}$ literally. Forgetting multiplicity in a multiset presentation implements that structural step. This does not pretend that the corresponding local-reduction proof for an explicit-contraction LK calculus is immediate; it is one reason the exact presentation is fixed before proving cut admissible.

## Full cut-free completeness by a saturated branch

**Theorem 6.4 (Cut-free completeness).** Every valid finite sequent has a finite proof using only the axioms and four displayed logical rules.

*Proof.* Suppose a sequent has no such proof. We construct an increasing chain of finite unprovable sequents, always expanding by the backwards form of a displayed rule. For a one-premise rule, its premise must be unprovable, since a proof there would finish the conclusion. For a conjunction rule, at least one of its two premises must be unprovable, since two finite proofs would combine to a proof of the conclusion. Choose such a premise. This maintains unprovability without using cut or a model theorem.

Make expansion fair. Enumerate all closed terms in the fixed countable language, including the reserved constants. At successive rounds process every present disjunction, conjunction and universal that has not yet been processed, and process each present existential with the first $n$ terms at round $n$. A newly introduced formula is included in all later rounds. Each round has finitely many current formulas and tasks; a newly generated task can be deferred to the next round. Universal expansion chooses one constant absent from the current finite sequent. All possible future eigenconstants already belong to the enumerated reserved supply, so instances involving them are also eventually considered. Unused repeated expansions do no harm, and a saturated finite branch may be treated as a constant chain.

Let $S$ be the union of the branch. It contains no top formula or pair of opposite ground literals: they would occur together in a finite stage and make that stage an axiom. If a disjunction belongs to $S$, both its disjuncts do. If a conjunction belongs, at least one chosen conjunct does. A universal has an instance at its chosen parameter in $S$. An existential has every closed-term instance in $S$. Fairness proves all these statements, including instances whose parameter symbols first appeared later in the branch.

Construct the domain as the nonempty set of closed terms. Interpret a constant by itself and a function by its term constructor. Define a ground relation atom $P(\vec t)$ to be true exactly when its negative literal belongs to $S$; otherwise make it false. This is a genuine equality-free structure. Distinct term strings are distinct domain elements, which is allowed: no logical identity symbol or equality axioms are being interpreted here.

Induct on logical complexity, uniformly under closed-term substitution, to show every formula of $S$ is false in this structure. A positive literal in $S$ has no negative partner there and is false by definition. A negative literal in $S$ has its atom made true, so is false. Falsehood is false and top is absent. A disjunction has both disjuncts false; a conjunction has a selected false conjunct. A universal has a false witness instance at its chosen parameter. An existential has all closed-term instances false; every domain object is such a term, so it has no semantic witness. The substitution lemma identifies these ground instances with reassigned-variable satisfaction. Each inductive instance has lower logical complexity, regardless of the size of its term.

All root formulas lie in $S$ and are false, giving a countermodel to validity. Thus an unprovable sequent is invalid. Contraposition proves the theorem. ∎

The branch choices use classical reasoning about nonexistence of proofs; this countermodel construction was not asserted to be a terminating decision algorithm. Countability supplies the fair term schedule. A finite root uses only finitely many original symbols; for a larger signature one may restrict to that finite vocabulary plus countably many fresh parameters, and extend a countermodel arbitrarily on unused symbols using its nonempty domain. No uncountable enumeration is hidden in the argument.

## Cut, transformation and the precise boundaries

**Theorem 6.5 (Cut admissibility).** If $\Gamma\cup\{A\}$ and $\Delta\cup\{\overline A\}$ have cut-free proofs, so does $\Gamma\cup\Delta$.

*Proof.* By soundness both premises are valid. If a structure falsified every formula of $\Gamma\cup\Delta$, the first validity would force $A$ true and the second would force its dual true, a contradiction. The conclusion is therefore valid, and Theorem 6.4 supplies a finite cut-free proof. This also covers cases where the contexts already contain the cut formula or its dual, and any multiple uses collapsed by set contraction. ∎

Induction on a proof that additionally permits cut replaces each premise proof by a cut-free one and applies this admissibility theorem at a cut node. There is also a completely effective, though potentially expensive, transformation: verify the supplied finite derivation under the stated rules, then enumerate all finite cut-free derivations of its endsequent until one appears. Checking a finite candidate is effective in the fixed signature. Soundness and Theorem 6.4 guarantee termination on every valid supplied derivation. No bound on proof growth, no local decreasing-rank measure and no strong-normalisation result for every possible reduction strategy are claimed for this enumeration method.

**Equality boundary.** The countermodel was a free term structure and deliberately excluded logical identity. A formula such as $t=t$ is not covered merely by treating equality as another relation symbol. Equality calculi need reflexivity and replacement rules with their own cut theorem, or an explicitly specified equality-axiom translation. The primary equality-calculus reference in Sources treats that extension. The natural-deduction identity rules of Chapter 1 remain valid; they are not silently inherited by this different calculus.

**Nonlogical boundary.** Arbitrary extra initial sequents can destroy the cut-free theorem. Add atomic initial sequents $\{P\}$ and $\{\neg P,Q\}$. Cut gives $\{Q\}$, but that atomic sequent has no logical expansion and is neither a logical nor one of those new initial axioms; weakening and contraction do not turn either axiom into it. Thus no cut-free proof exists in that augmented system. To reason from a finite set of theory assumptions, keep their duals in the endsequent and use pure logical validity instead. Do not confuse that conditional sequent method with permission to add arbitrary new leaf axioms and retain every proof-theoretic property.

The original Gentzen rank-reduction outline remains a description of another full proof method for its specified standard calculi. The retained ordinal and natural-deduction normalization results likewise have their own notation systems and complete principal and commuting reductions. Our semantic admissibility theorem does not prove those broader results or erase their hypotheses.

## Worked example 1: an explicit cut-free excluded middle

Start with sequent $\{P\lor\neg P\}$. Its backwards disjunction premise is $\{P\lor\neg P,P,\neg P\}$, an atomic-dual axiom. One application of the disjunction rule therefore gives a complete cut-free proof. No general identity axiom for arbitrary compound formulas was assumed; only the displayed atomic axiom closes this example.

## Worked example 2: freshness prevents false generalisation

If one ignored the eigenconstant condition, the axiom $\{\neg P(c),\forall xP(x),P(c)\}$ could be used to conclude $\{\neg P(c),\forall xP(x)\}$. That conclusion is invalid: on domain $\{0,1\}$ set $c=0$ and $P=\{0\}$. The negative ground literal is false and the universal is false. The attempted universal step used $c$ already present in its other context member, so it is forbidden. Renaming its eigenconstant without changing the fixed context repairs the rule's syntax, not the invalid theorem.

## Worked example 3: the necessary existential instance

The sequent $\{\exists xP(x),\neg P(d)\}$ is valid: whenever $P(d)$ is true it witnesses the existential, and otherwise the negative literal holds. Its cut-free proof instantiates the existential at $d$, obtaining the axiom $\{\exists xP(x),\neg P(d),P(d)\}$. A branch procedure that forever instantiated only other constants could miss this immediate closure. The fairness clause requiring every closed term is therefore part of the completeness proof, not an efficiency preference.

## Practice exercises

### Exercise 1
<a id="chapter-14-ex-1"></a>

Show that cut elimination implies the subformula property.

<details>
<summary>Hint 1</summary>

Trace each rule from its conclusion to its premises.

</details>
<details>
<summary>Hint 2</summary>

Quantifier instances are not necessarily literal subformulas.

</details>
<details>
<summary>Solution</summary>

**Solution.** Trace formulas upward from the endsequent. In propositional rules, every premise formula is a subformula of a conclusion formula, so induction on proof height gives the strict property. In first-order rules, $\forall$-left and $\exists$-right may contain instances such as $A(t)$ that are not literal subformulas of $\forall xA(x)$ or $\exists xA(x)$. The correct conclusion there is that each formula is a substitution instance of a subformula of the endsequent (subject to the calculus's eigenvariable conditions).

</details>

### Exercise 2
<a id="chapter-14-ex-2"></a>

State precisely the incompleteness argument limiting PA's induction at $\varepsilon_0$.

<details>
<summary>Hint 1</summary>

Fix the precise ordinal notation and induction principle.

</details>
<details>
<summary>Hint 2</summary>

Use the formal implication from that principle to PA consistency.

</details>
<details>
<summary>Solution</summary>

**Solution.** Fix Gentzen's primitive-recursive notation system and a transfinite-induction or well-foundedness principle strong enough, over a weak formal metatheory available in PA, to verify termination of the ordinal reduction for every PA proof. PA proves that this principle implies $\mathrm{Con}(\mathrm{PA})$. Therefore, if consistent, PA cannot prove that principle by Gödel's second theorem. This does not say that PA fails every individual induction formula indexed by every notation below $\varepsilon_0$; PA proves each fixed sub-$\varepsilon_0$ case.

</details>

### Exercise 3
<a id="chapter-14-ex-3"></a>

Explain the Curry–Howard correspondence for implication.

<details>
<summary>Hint 1</summary>

Compare assumption discharge with a function binder.

</details>
<details>
<summary>Hint 2</summary>

Elimination applies the resulting proof-function to an argument.

</details>
<details>
<summary>Solution</summary>

**Solution.** In natural deduction, implication introduction corresponds to lambda abstraction, and implication elimination corresponds to function application. A proof of $A \to B$ is a function from proofs of $A$ to proofs of $B$. Normalization corresponds to beta reduction.

</details>

### Exercise 4
<a id="chapter-14-ex-4"></a>

Show that the cut rule is admissible in first-order logic.

<details>
<summary>Hint 1</summary>

Admissible means that adding the rule creates no new endsequents.

</details>
<details>
<summary>Hint 2</summary>

Use the complete theorem for the explicitly specified calculus.

</details>
<details>
<summary>Solution</summary>

**Solution.** Admissibility means that any sequent provable with cut is provable without cut. This is exactly Gentzen’s cut elimination theorem.

For the exact equality-free cumulative calculus above, Theorems 6.4–6.5 give a complete independent proof: sound premise derivations make the cut conclusion valid, and cut-free completeness supplies its proof. The broader standard LK result is the retained credited Gentzen theorem, with equality and nonlogical additions kept separate.

</details>

### Exercise 5
<a id="chapter-14-ex-5"></a>

Compute the Cantor normal form of $\omega^\omega + \omega^3 \cdot 2 + 5$.

<details>
<summary>Hint 1</summary>

The displayed exponents already decrease.

</details>
<details>
<summary>Hint 2</summary>

Rewrite the finite final term using exponent zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The Cantor normal form is already given: $\omega^\omega + \omega^3 \cdot 2 + \omega^0 \cdot 5$. The exponents are in decreasing order: $\omega > 3 > 0$, and coefficients are nonzero natural numbers.

</details>

### Exercise 6
<a id="chapter-14-ex-6"></a>

Compute the NNF dual of $\forall x(P(x)\land\exists yR(x,y))$.

<details>
<summary>Hint 1</summary>

Duality swaps both quantifiers and connectives.

</details>
<details>
<summary>Hint 2</summary>

Negate only the final relation atoms.

</details>
<details>
<summary>Solution</summary>

The dual is $\exists x(\neg P(x)\lor\forall y\neg R(x,y))$. This follows by the recursive dual definition: negate the universal, then the conjunction, then the inner existential. Applying the operation again returns the original formula, as required by involution.

</details>

### Exercise 7
<a id="chapter-14-ex-7"></a>

Why is contraction built into the specified finite-set calculus, and what does that not prove about an explicit-multiset local reduction?

<details>
<summary>Hint 1</summary>

Check the underlying objects of its contexts.

</details>
<details>
<summary>Hint 2</summary>

Identical set members do not have separate multiplicities.

</details>
<details>
<summary>Solution</summary>

The contexts Gamma union {A,A} and Gamma union {A} are equal sets, so their proofs need no contraction step. This is a deliberate presentation choice. It does not supply the omitted local contraction reductions in a multiset LK proof; such a proof needs its own strengthened induction or multicut argument. Our full cut theorem instead uses the proved semantic completeness of this exact set calculus.

</details>

### Exercise 8
<a id="chapter-14-ex-8"></a>

How is weakening proved when an added context contains a parameter previously used as an eigenconstant?

<details>
<summary>Hint 1</summary>

A direct addition could break freshness.

</details>
<details>
<summary>Hint 2</summary>

Rename local eigenconstants before extending every context.

</details>
<details>
<summary>Solution</summary>

A finite proof and added finite context mention finitely many parameter names. Choose unused names and consistently rename the local eigenconstant scopes, keeping the endsequent fixed. Then add the extra context at every node. Atomic axioms persist and every logical rule remains valid, including fresh universal steps. This proves height-preserving weakening without adding cut.

</details>

### Exercise 9
<a id="chapter-14-ex-9"></a>

Why does existential saturation require all closed terms, including terms containing parameters introduced later?

<details>
<summary>Hint 1</summary>

The countermodel domain consists of every closed term.

</details>
<details>
<summary>Hint 2</summary>

A false existential must have no witness anywhere in that domain.

</details>
<details>
<summary>Solution</summary>

If even one term instance were omitted, its object might satisfy the body in the constructed structure, invalidating the claimed falsity of the existential. Enumerating the whole reserved parameter language from the start and revisiting each present existential against longer term prefixes eventually covers terms involving later chosen names. Every object of the Herbrand domain is then covered.

</details>

### Exercise 10
<a id="chapter-14-ex-10"></a>

Give the added-initial-sequent counterexample showing why pure cut elimination cannot be assumed for arbitrary nonlogical axioms.

<details>
<summary>Hint 1</summary>

Use two atomic axioms joined by one cut.

</details>
<details>
<summary>Hint 2</summary>

An atomic conclusion has no backwards logical expansion.

</details>
<details>
<summary>Solution</summary>

Add {P} and {not P,Q} as initial sequents. Cutting P derives {Q}. A cut-free proof of {Q} cannot begin with a logical step because its sole formula is atomic, and it is neither a logical axiom nor either added initial sequent. No weakening of those axioms yields a smaller set {Q}. Thus the augmentation genuinely needs cut for that conclusion.

</details>

## Looking backward and forward

This chapter deepened the proof-theoretic material from the flat file’s “Reference desk E — proof theory” and connected to the incompleteness theorems in Chapter 13. Ordinal analysis provides a fine-grained measure of consistency strength. The next chapter, Chapter 15, explores constructive mathematics and realizability.

## Sources

The original CC BY-SA 4.0 proof-theory text, ordinal hypotheses, natural-deduction statements and all five original solutions are retained under stable identity `chapter-14`. The cumulative calculus, saturated-branch proof and examples above are newly written. For the classical local approach see [John Slaney's ANU cut-elimination notes](https://users.cecs.anu.edu.au/~jks/LogicNotes/Cut.html). Equality requires a specified extension; a primary reference is [The Cut Elimination and the Nonlengthening Property for the Sequent Calculus with Equality](https://arxiv.org/abs/1705.00693). The Gentzen ordinal theorem remains credited forward material with its original notation, formula-class and metatheoretic qualifications.

## Summary

An exact equality-free cumulative NNF calculus admits a complete soundness, weakening and cut-free completeness proof. Fair saturation constructs a nonempty Herbrand countermodel to every unprovable sequent, independently of a cut-using completeness theorem. Semantic cut admissibility then supplies an effective proof transformation on valid supplied derivations, without a claimed local rank or size bound. Set contexts handle contraction explicitly by idempotence; eigenfreshness remains essential. Equality, arbitrary nonlogical initial sequents, ordinal reductions and strong normalization retain their separate stated boundaries.
