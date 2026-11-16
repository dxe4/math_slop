
# Modal Logic

Modal logic extends classical propositional and first-order logic with operators expressing necessity, possibility, and other modalities. It has applications in philosophy, computer science (program verification, knowledge representation), and linguistics. This chapter introduces the basic syntax and semantics, the standard modal systems, and the canonical model construction for completeness.

## Syntax and basic systems

**Definition 9.6 (modal language).** The basic modal language extends propositional logic with a unary operator $\Box$. Formulas are defined by:
- Every propositional variable $p, q, r, \dots$ is a formula.
- If $\varphi$ is a formula, so is $\neg \varphi$.
- If $\varphi, \psi$ are formulas, so is $(\varphi \to \psi)$.
- If $\varphi$ is a formula, so is $\Box \varphi$.

We define $\Diamond \varphi$ as $\neg \Box \neg \varphi$.

**Standard modal systems:**
- **K**: the minimal normal modal logic. Axioms: all propositional tautologies, $\Box(\varphi \to \psi) \to (\Box \varphi \to \Box \psi)$. Rules: modus ponens and necessitation, where necessitation applies only to theorems derived without undischarged local assumptions.
- **T** = K + $\Box \varphi \to \varphi$.
- **S4** = T + $\Box \varphi \to \Box \Box \varphi$.
- **S5** = S4 + $\Diamond \varphi \to \Box \Diamond \varphi$.

## Kripke semantics

**Definition 9.7 (Kripke frame).** A *Kripke frame* is a pair $\mathcal{F} = (W, R)$ where $W$ is a nonempty set of *worlds* and $R \subseteq W \times W$ is an *accessibility relation*.

**Definition 9.8 (Kripke model).** A *Kripke model* $\mathcal{M} = (W, R, V)$ consists of a frame $(W, R)$ and a valuation $V: \text{Prop} \to \mathcal{P}(W)$.

**Definition 9.9 (satisfaction).** The satisfaction relation $\mathcal{M}, w \models \varphi$ is defined by recursion:
- $\mathcal{M}, w \models p$ iff $w \in V(p)$.
- $\mathcal{M}, w \models \neg \varphi$ iff $\mathcal{M}, w \not\models \varphi$.
- $\mathcal{M}, w \models (\varphi \to \psi)$ iff $\mathcal{M}, w \not\models \varphi$ or $\mathcal{M}, w \models \psi$.
- $\mathcal{M}, w \models \Box \varphi$ iff for all $v$ with $wRv$, $\mathcal{M}, v \models \varphi$.

**Definition 9.10 (validity).** $\varphi$ is *valid* on frame $\mathcal{F}$, written $\mathcal{F} \models \varphi$, if $\mathcal{M}, w \models \varphi$ for every model $\mathcal{M}$ based on $\mathcal{F}$ and every $w \in W$.

## Frame correspondences

**Theorem 9.11.** The following correspondences hold:
- $\mathcal{F} \models \Box \varphi \to \varphi$ iff $R$ is reflexive.
- $\mathcal{F} \models \Box \varphi \to \Box \Box \varphi$ iff $R$ is transitive.
- $\mathcal{F} \models \varphi \to \Box \Diamond \varphi$ iff $R$ is symmetric.
- $\mathcal{F} \models \Diamond \varphi \to \Box \Diamond \varphi$ iff $R$ is Euclidean ($wRv \land wRu \Rightarrow vRu$).

**Proof sketch (reflexivity).** Suppose $R$ is reflexive. Let $\mathcal{M}, w \models \Box \varphi$. Since $wRw$, we have $\mathcal{M}, w \models \varphi$. Conversely, suppose $\mathcal{F} \models \Box \varphi \to \varphi$ for all $\varphi$. If $R$ were not reflexive, there would exist $w$ with $\neg wRw$. Define $V(p) = W \setminus \{w\}$. Then $\mathcal{M}, w \models \Box p$ (since no accessible world from $w$ is $w$), but $\mathcal{M}, w \not\models p$, contradicting validity.

## Canonical models and completeness

**Definition 9.12 (maximal consistent set).** A set $\Gamma$ of modal formulas is *maximal consistent* (for a logic $\Lambda$) if it is consistent ($\Lambda \not\vdash \neg\bigwedge \Gamma_0$ for every finite $\Gamma_0 \subseteq \Gamma$) and maximal (for every $\varphi$, either $\varphi \in \Gamma$ or $\neg\varphi \in \Gamma$).

**Definition 9.13 (canonical model).** For a normal modal logic $\Lambda$, the *canonical model* $\mathcal{M}^\Lambda = (W^\Lambda, R^\Lambda, V^\Lambda)$ is defined by:
- $W^\Lambda$ = all maximal $\Lambda$-consistent sets.
- $\Gamma R^\Lambda \Delta$ iff for all $\varphi$, if $\Box \varphi \in \Gamma$ then $\varphi \in \Delta$.
- $V^\Lambda(p) = \{\Gamma : p \in \Gamma\}$.

**Theorem 9.14 (truth lemma).** For every formula $\varphi$ and $\Gamma \in W^\Lambda$:

$$\mathcal{M}^\Lambda, \Gamma \models \varphi \quad \Longleftrightarrow \quad \varphi \in \Gamma.$$

**Proof sketch.** By induction on $\varphi$. The Boolean cases follow from maximal consistency. For $\Box \psi$: if $\Box \psi \in \Gamma$, then by definition of $R^\Lambda$, $\psi \in \Delta$ for every $\Delta$ with $\Gamma R^\Lambda \Delta$. By the induction hypothesis, $\mathcal{M}^\Lambda, \Delta \models \psi$, so $\mathcal{M}^\Lambda, \Gamma \models \Box \psi$. Conversely, if $\Box \psi \notin \Gamma$, then $\neg \Box \psi \in \Gamma$. The set

$$\{\neg\psi\}\cup\{\chi:\Box\chi\in\Gamma\}$$

is consistent: otherwise a finite conjunction of the $\chi$'s would imply $\psi$, and necessitation plus K would put $\Box\psi$ in $\Gamma$. Extend the set to a maximal consistent $\Delta$. Then $\Gamma R^\Lambda\Delta$ and $\psi\notin\Delta$, so the induction hypothesis refutes $\Box\psi$ at $\Gamma$.

**Theorem 9.15 (completeness of K).** $\vdash_K \varphi$ iff $\varphi$ is valid on all frames.

**Proof.** Soundness is routine. For completeness, if $\not\vdash_K \varphi$, then $\{\neg\varphi\}$ is consistent, so it extends to a maximal consistent set $\Gamma$. By the truth lemma, $\mathcal{M}^K, \Gamma \models \neg\varphi$, so $\varphi$ is not valid in the canonical model.

## Common errors

**Error: treating modal operators as quantifiers over worlds without a relation.** $\Box \varphi$ is not simply “$\varphi$ holds in all worlds”; it means “$\varphi$ holds in all accessible worlds.” The accessibility relation is essential.

**Error: assuming S5 is the only interesting modal logic.** S5 corresponds to equivalence relations, while many applications require weaker frames: T and S4 occur in epistemic and topological semantics, and K is the minimal normal system. Standard arithmetical provability validates Gödel--Löb logic GL, not S4; axiom T would amount to a reflection principle rather than an automatic law of formal provability.

**Error: confusing syntactic derivability with semantic validity in a class of frames.** Just as in first-order logic, soundness and completeness bridge the two, but the bridge must be proved for each system.


## The consequence relation and its soundness

Fix countably many propositional letters and the Hilbert calculus specified above. For a normal logic $\Lambda$, $\Gamma\vdash_\Lambda A$ means that $A$ follows by finitely many modus-ponens steps from members of $\Gamma$ and theorems of $\Lambda$. Necessitation is applied only while deriving those theorems, never to a line depending on a local assumption. This distinction makes the ordinary local deduction theorem valid and matches truth at one world.

**Lemma 9.1 (Soundness).** K is sound on all nonempty Kripke frames. T, S4 and S5 are sound on reflexive, reflexive-transitive and equivalence frames respectively.

*Proof.* Propositional tautologies are true pointwise. For K, if every successor satisfies $A\to B$ and every successor satisfies $A$, then every successor satisfies $B$, proving the distribution axiom. Modus ponens preserves truth. A theorem valid at every world in every intended model can be necessitated because each accessible world is one of those worlds. The additional axioms are valid on their frame classes by the correspondence proofs below. Consequently every theorem is valid, and every local derivation preserves truth at a world where its assumptions hold. ∎

The converse correspondence arguments require arbitrary valuations, not only a particular application model. If a frame is not transitive, choose $wRv$, $vRu$ and not $wRu$. Set $V(p)=R[w]$. At $w$, $\Box p$ holds, while at $v$, $\Box p$ fails because $u\notin V(p)$. Thus $\Box\Box p$ fails at $w$, refuting axiom 4. Conversely transitivity sends each successor-of-a-successor back into $R[w]$, proving 4 directly.

If symmetry fails at $wRv$ with not $vRw$, set $V(p)=\{w\}$. Then $p$ holds at $w$, but $\Diamond p$ fails at its successor $v$, so $p\to\Box\Diamond p$ fails at $w$. Conversely symmetry gives each successor $v$ a return edge to a $p$-world $w$, proving that schema.

If Euclideanness fails, choose $wRv,wRu$ and not $vRu$, and set $V(p)=\{u\}$. World $w$ satisfies $\Diamond p$, but its successor $v$ does not, so $\Box\Diamond p$ fails at $w$. Conversely, for any witness $u$ to $\Diamond A$ at $w$, Euclideanness makes $vRu$ for every $v$ with $wRv$, so each such $v$ satisfies $\Diamond A$. This proves the 5 correspondence. Together with the complete original reflexivity argument, all four displayed correspondences have both directions.

## Fill in the maximal-extension and witness steps

**Lemma 9.2 (Lindenbaum extension).** Every consistent set of formulas in the countable modal language extends to a maximal consistent set for a fixed normal logic $\Lambda$.

*Proof.* Enumerate all formulas. Starting with the given set, add the next formula if consistency is preserved, and otherwise add its negation. Both choices cannot be inconsistent: by the local deduction theorem the first inconsistency derives its negation already, so an inconsistency after adding that negation would contradict consistency of the old stage. Any contradiction from the union has finitely many assumptions and hence would appear in one stage. The union is consistent and decides every formula. It is deductively closed, since a derivable absent formula would have its negation present and give a contradiction. ∎

The construction uses consistency as a mathematical condition, not a promised effective decider. Classical tautologies and deductive closure then imply the Boolean membership facts: negation is absence, conjunction is joint membership, and implication is absence of its antecedent or presence of its consequent. For example, if $A\to B$ and $A$ belong, modus ponens gives $B$; if $A$ is absent, $\neg A$ belongs and the tautology $\neg A\to(A\to B)$ gives the implication. The other cases follow from their propositional introduction and elimination tautologies.

**Lemma 9.3 (Box lifting).** If $\Lambda\vdash(A_1\land\cdots\land A_n)\to B$, then $\Lambda\vdash(\Box A_1\land\cdots\land\Box A_n)\to\Box B$. For $n=0$, a theorem $B$ gives a theorem $\Box B$.

*Proof.* Necessitate the displayed theorem and apply K to get the implication from the boxed conjunction. The boxed conjunction itself follows from the separate boxes: necessitate the propositional curried conjunction theorem $A_1\to(A_2\to\cdots\to\bigwedge_iA_i)$ and apply K successively, followed by modus ponens under the boxed assumptions. The zero-premise case is exactly necessitation of a theorem. Every necessitated line is a theorem, so no local-assumption restriction is violated. ∎

**Lemma 9.4 (Canonical successor).** If $\Box A\notin\Gamma$ for a maximal consistent $\Gamma$, some maximal consistent $\Delta$ satisfies $\Gamma R^\Lambda\Delta$ and $A\notin\Delta$.

*Proof.* Consider $S=\{B:\Box B\in\Gamma\}\cup\{\neg A\}$. If inconsistent, finitely many $B_1,\ldots,B_n$ would imply $A$ as a $\Lambda$ theorem, using the local deduction theorem and classical logic. Box lifting and the membership of each $\Box B_i$ would put $\Box A$ in $\Gamma$, contradiction. The argument includes $n=0$. Thus $S$ is consistent. Lindenbaum extension gives $\Delta\supseteq S$. Its membership satisfies the definition of accessibility, and $\neg A\in\Delta$ excludes $A$ by consistency. ∎

We can now justify every truth-lemma case. Atomic truth is the valuation definition. Negation and implication follow from their Boolean membership properties and the induction hypothesis. If $\Box A\in\Gamma$, every accessible $\Delta$ contains $A$ and induction makes it true there. If it is absent, the successor lemma supplies an accessible counterexample where $A$ is absent and therefore false by induction. These are both modal directions, completing a structural induction on formulas. The original truth-lemma sketch is thereby supplied with its consistency and extension arguments.

## Strong completeness and the frame extensions

**Theorem 9.5.** For local consequence, $\Gamma\models_K A$ implies $\Gamma\vdash_K A$.

*Proof.* If $A$ is not derivable, $\Gamma\cup\{\neg A\}$ is consistent by the local deduction theorem. Extend it to a maximal consistent world. The canonical model is a set model because its worlds are subsets of the set of formulas; it is nonempty because this world exists. The truth lemma makes every premise true there and $A$ false. Thus a countermodel exists, proving the contrapositive. Soundness gives the reverse implication. ∎

The same proof works for T, S4 and S5 once their canonical frames belong to the required class. T makes the canonical relation reflexive: $\Box A\in\Gamma$ implies $A\in\Gamma$. For S4, if $\Gamma R\Delta R\Theta$ and $\Box A\in\Gamma$, axiom 4 puts $\Box\Box A$ in $\Gamma$, so $\Box A\in\Delta$ and then $A\in\Theta$. This proves transitivity.

For S5 use the derived negative-introspection schema $\neg\Box A\to\Box\neg\Box A$. It follows from the displayed 5 schema by taking its argument to be $\neg A$ and using the provable double-negation equivalences inside boxes; normality lifts each propositional equivalence by necessitation and K. Suppose $\Gamma R\Delta$ and $\Gamma R\Theta$, and $\Box A\in\Delta$. If $\Box A\notin\Gamma$, maximality and negative introspection put $\Box\neg\Box A$ in $\Gamma$, hence $\neg\Box A\in\Delta$, contradiction. Therefore $\Box A\in\Gamma$, and accessibility gives $A\in\Theta$. This proves $\Delta R\Theta$, the Euclidean condition. Reflexivity and Euclideanness imply symmetry: $\Gamma R\Delta$ and $\Gamma R\Gamma$ give $\Delta R\Gamma$. The S5 canonical relation is therefore an equivalence relation.

These frame facts plus the common truth lemma prove strong completeness for each indicated class. They do not establish that every normal modal logic is complete for its intended frame class; arbitrary additional axioms can require separate canonicity arguments. The shared truth lemma alone does not certify those additional frame conditions.

## Worked example 1: a dead end and vacuous necessity

Take one world $w$, no accessibility edges and $V(p)=\varnothing$. Then $\Box p$ is true at $w$ because every accessible world satisfies $p$ vacuously, while $p$ itself is false. T therefore fails. Also $\Box\bot$ is true there and $\Diamond\top$ is false: a world with no successors has no possible witness. This does not make $\Box\bot$ a K theorem, since a different frame with one accessible world refutes it. Truth at a point and validity on every frame remain distinct quantifiers.

## Worked example 2: S4 need not validate S5

Let $W=\{w,v\}$ and $R=\{(w,w),(w,v),(v,v)\}$. The relation is reflexive and transitive. Put $p$ true only at $w$. At $w$, $\Diamond p$ holds through the reflexive edge. At $v$, it fails, because $v$ sees only itself where $p$ is false. Thus $w$ does not satisfy $\Box\Diamond p$, so axiom 5 fails. Every S4 theorem is valid on this frame by soundness, which proves that 5 is not an S4 theorem. A picture of two worlds without this valuation would not yet be a formula countermodel.

## Worked example 3: local assumptions cannot be necessitated

Use $W=\{w,v\}$, $R=\{(w,v)\}$ and $V(p)=\{w\}$. Premise $p$ is true at $w$, but $\Box p$ is false there. Therefore $p\not\models_K\Box p$, and soundness excludes that local derivation. In contrast $p\to p$ is a propositional theorem, true at every world, so $\Box(p\to p)$ is a K theorem. The difference is whether the necessitated statement depended on a local premise, not whether its symbols happen to include an atom.

## A two-successor model separates boxed and pointwise disjunction

Necessity distributes over conjunction in K, as the first exercise proves. It does not distribute over disjunction in the same direction. To see the exact obstruction, take three worlds: a root and two distinct successors, with only the two edges from the root. Make the first atom true only at the first successor and the second atom true only at the second successor. At each accessible world at least one atom holds, so the root satisfies necessity of their disjunction. Neither atom holds at both successors, so neither separate necessity is true at the root. Their disjunction is therefore false there.

This countermodel refutes the implication from necessity of a disjunction to a disjunction of necessities. It is not merely a failure to find a Hilbert proof: soundness turns the explicit valuation into a proof of nonderivability in K. The reverse implication is valid on every frame. If all successors satisfy the first atom, all satisfy the disjunction; the same reasoning applies when all satisfy the second. A propositional case split at the root then establishes the reverse implication, including roots with no successors.

The distinction is one of quantifier order. Every accessible world can satisfy some disjunct without one fixed disjunct working at every accessible world. Modal notation retains that dependence through the position of the box. The example also warns against importing a single-successor intuition into arbitrary frames. If every world had at most one successor, the disputed implication would hold, including vacuous necessity at dead ends; that is an added frame restriction, not a theorem valid over all K frames.

To verify the model, name both edges and both atomic truth sets, then evaluate the formula at the root. Omitting the valuation would leave an incomplete countermodel, and changing the intended frame class could remove it. The same explicit checks used in the canonical argument therefore remain useful for tiny finite examples.

## Practice exercises

### Exercise 1
<a id="modal-logic-ex-1"></a>

Show that in K, $\vdash \Box(\varphi \land \psi) \leftrightarrow (\Box \varphi \land \Box \psi)$.

<details><summary>Hint 1</summary>

Necessitate only propositional theorems.

</details>
<details><summary>Hint 2</summary>

Use K to distribute the boxed curried conjunction theorem.

</details>
<details><summary>Solution</summary>

Necessitate the propositional theorems $(\varphi\land\psi)\to\varphi$, $(\varphi\land\psi)\to\psi$, and $\varphi\to(\psi\to\varphi\land\psi)$; then apply K and modus ponens. Necessitation is used only on those theorem schemas, not on the temporary assumptions $\Box\varphi$ or $\Box\psi$.

</details>

### Exercise 2
<a id="modal-logic-ex-2"></a>

Construct a Kripke model where $\Box p \to p$ fails.

<details><summary>Hint 1</summary>

Make p true at every successor but false at the current world.

</details>
<details><summary>Hint 2</summary>

A missing self-edge permits exactly that valuation.

</details>
<details><summary>Solution</summary>

Let $W = \{w, v\}$, $R = \{(w, v)\}$, $V(p) = \{v\}$. Then $wRv$ and $\mathcal{M}, v \models p$, so $\mathcal{M}, w \models \Box p$. But $w \notin V(p)$, so $\mathcal{M}, w \not\models p$. Hence $\mathcal{M}, w \not\models \Box p \to p$.

</details>

### Exercise 3
<a id="modal-logic-ex-3"></a>

Prove that S4 is sound and complete with respect to the class of reflexive, transitive frames.

<details><summary>Hint 1</summary>

Verify the frame classes for soundness.

</details>
<details><summary>Hint 2</summary>

The canonical T and4 axioms give reflexivity and transitivity.

</details>
<details><summary>Solution</summary>

Soundness: reflexivity validates T, transitivity validates 4. Completeness: the canonical model for S4 has a reflexive, transitive accessibility relation. Reflexivity follows from T: if $\Box \varphi \in \Gamma$, then $\varphi \in \Gamma$, so $\Gamma R \Gamma$. Transitivity follows from 4: if $\Gamma R \Delta$ and $\Delta R \Theta$, and $\Box \varphi \in \Gamma$, then $\Box \Box \varphi \in \Gamma$ by 4, so $\Box \varphi \in \Delta$, so $\varphi \in \Theta$. Hence $\Gamma R \Theta$.

</details>

### Exercise 4
<a id="modal-logic-ex-4"></a>

Show that S5 is complete with respect to frames where $R$ is an equivalence relation.

<details><summary>Hint 1</summary>

Use negative introspection in the canonical relation.

</details>
<details><summary>Hint 2</summary>

A reflexive Euclidean relation is symmetric.

</details>
<details><summary>Solution</summary>

The canonical model for S5 is reflexive (T), transitive (S4), and Euclidean (S5 implies Euclidean). A reflexive Euclidean relation is symmetric: if $wRv$, then by reflexivity $wRw$, so by Euclidean $vRw$. Hence $R$ is an equivalence relation.

</details>

### Exercise 5
<a id="modal-logic-ex-5"></a>

Define a frame where $\Box p \to \Box \Box p$ holds but $\Box p \to p$ fails.

<details><summary>Hint 1</summary>

Choose a transitive relation with one missing self-edge.

</details>
<details><summary>Hint 2</summary>

Set p true only at the other reflexive successor.

</details>
<details><summary>Solution</summary>

Let $W = \{w, v\}$, $R = \{(w, v), (v, v)\}$. Then $R$ is transitive (the only nontrivial path is $wRvRv$, and $wRv$ holds). But $R$ is not reflexive since $\neg wRw$. Let $V(p) = \{v\}$. Then $\mathcal{M}, w \models \Box p$ (the only accessible world is $v$, where $p$ holds), but $\mathcal{M}, w \not\models p$. So T fails while 4 holds.

</details>

### Exercise 6
<a id="modal-logic-ex-6"></a>

Show that K does not prove $p\to\Box p$.

<details><summary>Hint 1</summary>

Use local truth at one world.

</details>
<details><summary>Hint 2</summary>

Make a successor refute p.

</details>
<details><summary>Solution</summary>

Use the worked model with $wRv$, $p$ true at $w$ and false at $v$. Its antecedent is true and consequent false at $w$, refuting the implication. Every K theorem is valid on all frames by soundness, so this countermodel proves nonderivability. The argument also diagnoses why necessitating an undischarged local assumption would be unsound.

</details>

### Exercise 7
<a id="modal-logic-ex-7"></a>

Prove that a reflexive Euclidean relation is an equivalence relation.

<details><summary>Hint 1</summary>

Euclideanness applied to a self-edge gives a reverse edge.

</details>
<details><summary>Hint 2</summary>

For transitivity, first reverse the first edge.

</details>
<details><summary>Solution</summary>

If $xRy$, reflexivity gives $xRx$, so Euclideanness yields $yRx$, proving symmetry. If $xRy$ and $yRz$, symmetry gives $yRx$; applying Euclideanness at $y$ to $yRx,yRz$ gives $xRz$. Thus transitivity holds as well. Together with the assumed reflexivity, the relation is an equivalence relation. No finiteness assumption is needed.

</details>

### Exercise 8
<a id="modal-logic-ex-8"></a>

Why does the canonical successor lemma include the case with no boxed premises?

<details><summary>Hint 1</summary>

An inconsistency of the singleton negation gives a theorem.

</details>
<details><summary>Hint 2</summary>

Necessitate that theorem directly.

</details>
<details><summary>Solution</summary>

If $\{\neg A\}$ were inconsistent, classical deduction would give $\Lambda\vdash A$. Necessitation then gives $\Lambda\vdash\Box A$, so every maximal consistent set contains $\Box A$, contradicting its absence in the lemma. Thus the zero-premise case is covered by direct necessitation rather than a nonempty conjunction argument. Ignoring it would leave a gap when no boxes are present.

</details>

### Exercise 9
<a id="modal-logic-ex-9"></a>

Give a complete countervaluation showing that failure of symmetry refutes the B schema $p\to\Box\Diamond p$.

<details><summary>Hint 1</summary>

Choose an edge without its reverse.

</details>
<details><summary>Hint 2</summary>

Make p true only at the edge source.

</details>
<details><summary>Solution</summary>

If $wRv$ but not $vRw$, take $V(p)=\{w\}$. Then $p$ holds at $w$. At $v$ no accessible p-world exists, because the only p-world is $w$ and the reverse edge is missing. Hence $\Diamond p$ is false at $v$, and $\Box\Diamond p$ is false at $w$. This supplies the valuation required for a frame nonvalidity claim, rather than only naming a nonsymmetric relation.

</details>

### Exercise 10
<a id="modal-logic-ex-10"></a>

Explain why truth of the canonical model does not prove frame completeness for every arbitrary normal extension.

<details><summary>Hint 1</summary>

Separate the truth lemma from its frame membership.

</details>
<details><summary>Hint 2</summary>

Additional axioms may need a separate canonicity proof.

</details>
<details><summary>Solution</summary>

The truth lemma interprets formulas by membership in maximal consistent sets. To prove completeness for a specified frame class, one also needs the constructed frame to satisfy its relational conditions. For T, S4 and S5 those were proved explicitly. For another normal extension this extra property does not follow just from the common definition of accessibility. A proof must either establish that canonicity claim or use a different model construction.

</details>

## Looking backward and forward

This chapter extended the logical framework from “Reference desk A — levels of language” and “Model Theory” to modal languages. The canonical model construction parallels the Henkin construction for first-order logic. The next chapter, “Reverse Mathematics”, asks which set-existence axioms are needed to prove theorems of ordinary mathematics.


## Sources

The original chapter, all five original prompts and solutions, frame definitions and canonical-model statements are preserved and expanded here. Blackburn, de Rijke and Venema, *Modal Logic*, is the standard reference listed in the retained book bibliography. The full local soundness, successor, truth and canonical-frame arguments are supplied above; necessitation remains restricted to theorems. No claim about arithmetical provability replacing K or S4 is inferred from those frame proofs.

## Summary

Normal modal logics distinguish global theorems from local assumptions. Complete countervaluations establish the T,4,B and5 frame correspondences. Maximal extension and box lifting supply canonical successor witnesses and both directions of the truth lemma. The canonical relations for T,S4 andS5 have their required frame properties, yielding strong local completeness. Dead ends, missing reverse edges and local premises expose why each hypothesis matters.
