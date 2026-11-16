
# Propositional Deduction, Soundness and Completeness

## From truth to finite derivations

A truth table answers a semantic question by considering valuations. A deduction answers a syntactic question by displaying a finite tree of permitted inferences. The two activities are different. Soundness will show that a deduction never leaves semantic consequence behind. Completeness will show that every semantic consequence has a deduction. Neither theorem should be built into the definition by declaring all valid formulas to be unexplained axioms.

We use classical natural deduction for the connectives of the [previous chapter](#/books/introduction-to-logic-and-set-theory/propositional-syntax-truth-tables-normal-forms). The same propositional rules will remain in force when quantifiers and equality are added. The preparation is structural induction, truth-table semantics, and elementary proof by contradiction. We continue with the countable stock of propositional letters fixed there; first-order signatures of arbitrary set size will be treated explicitly later.

## The proof calculus

**Definition 2.1 (Derivation and discharge).** A derivation is a finite tree of formulas built with the rules below. Leaves are assumption occurrences, which may carry labels. A discharge removes specified assumption occurrences from the open assumptions of a subtree; it does not erase their role inside that subtree. Write $\Gamma\vdash A$ if there is a derivation ending in $A$ whose undischarged assumptions all belong to $\Gamma$.

A derivation may use a member of $\Gamma$ repeatedly or not at all. The conclusion depends only on its open assumptions. Labels distinguish two occurrences with the same formula when their scopes differ. A linear presentation with indented subproofs is a way of displaying the same tree.

The rules are these:

- **Conjunction:** from $A,B$ infer $A\land B$; from $A\land B$ infer either $A$ or $B$.
- **Disjunction:** from $A$ infer $A\lor B$, and from $B$ infer $A\lor B$. From $A\lor B$, a derivation of $C$ under an additional assumption $A$, and a derivation of $C$ under an additional assumption $B$, infer $C$, discharging the two case assumptions.
- **Implication:** from a derivation of $B$ under an additional assumption $A$, infer $A\to B$, discharging that assumption. From $A$ and $A\to B$, infer $B$.
- **Negation:** from a derivation of $\bot$ under an additional assumption $A$, infer $\neg A$, discharging that assumption. From $A$ and $\neg A$, infer $\bot$.
- **Explosion:** from $\bot$ infer any formula $C$.
- **Classical reductio:** from a derivation of $\bot$ under an additional assumption $\neg A$, infer $A$, discharging that assumption.

Each introduction rule may discharge zero occurrences if the subderivation did not use the extra assumption. Other open assumptions remain open. The last rule specifies our classical choice: it is available for every formula, without a decidability restriction. Omitting that rule changes which formulas are derivable; it therefore changes the completeness claim.

**Lemma 2.2 (Proof operations).** Weakening holds: if $\Gamma\vdash A$ and $\Gamma\subseteq\Delta$, then $\Delta\vdash A$. If $\Gamma\vdash A$ and $\Gamma\cup\{A\}\vdash B$, then $\Gamma\vdash B$. Also $\Gamma\cup\{A\}\vdash B$ if and only if $\Gamma\vdash A\to B$.

*Proof.* Weakening reuses the same tree. For the second assertion, replace each open occurrence of assumption $A$ in the second tree by a copy of the first tree; give copied discharge labels new names so that they do not interfere with existing labels. The resulting finite tree has only assumptions from $\Gamma$. For the last assertion, implication introduction proves one direction. For the other, weaken the derivation of $A\to B$, assume $A$, and apply implication elimination. ∎

The last assertion is the deduction theorem for this calculus. Proof substitution is a syntactic operation, so it does not presuppose that the formulas are true. When quantifiers are introduced, fresh eigenvariables will also have to be renamed before copying subproofs.

**Definition 2.3 (Consistency).** A set $\Gamma$ is consistent if $\Gamma\nvdash\bot$. It is inconsistent otherwise. A consistent set cannot derive both $A$ and $\neg A$, since negation elimination would derive $\bot$. An inconsistent set derives every formula by explosion.

## Soundness, with every rule accounted for

**Theorem 2.4 (Propositional soundness).** If $\Gamma\vdash A$, then $\Gamma\models A$.

*Proof.* Prove the stronger statement that each derivation's conclusion is true at every valuation satisfying all its open assumptions. Induct on the tree. An assumption leaf has the claim immediately. Conjunction introduction combines two true statements; conjunction elimination selects a true component. Disjunction introduction preserves truth because one true disjunct suffices. Implication elimination preserves truth because a true implication with true antecedent has true consequent.

For implication introduction, fix a valuation satisfying the remaining open assumptions. If $A$ is false, $A\to B$ is true. If $A$ is true, all assumptions of the subderivation are satisfied, so induction makes $B$ true. For negation introduction, a valuation satisfying the remaining assumptions cannot also make $A$ true: induction would then make $\bot$ true, contrary to its fixed value zero. Thus $A$ is false and $\neg A$ is true.

For disjunction elimination, a valuation satisfying the remaining assumptions makes the disjunction true. At least one of $A,B$ is true. Apply induction to the corresponding case derivation to obtain $C$. For negation elimination, no valuation can make both premises true, so no valuation satisfies all the open assumptions of those premise derivations. The required implication to truth of $\bot$ is therefore vacuous. The same observation justifies explosion: by induction, no valuation satisfies the open assumptions of a derivation of $\bot$.

Finally consider classical reductio. If a valuation satisfies the remaining assumptions but makes $A$ false, then it makes the temporary assumption $\neg A$ true. Induction would make the subderivation's conclusion $\bot$ true, which is impossible. Hence $A$ is true. This covers every rule and completes the induction. ∎

Soundness immediately implies that every satisfiable set is consistent. The converse will require completeness. It also provides a way to prove that no derivation exists: give a countervaluation. That is often easier than analysing all possible proof trees.

## Worked derivations

**Worked example 1 (Exchanging alternatives).** Derive $A\lor B\vdash B\lor A$. Keep $A\lor B$ open. In the first case, assume $A$ and introduce $B\lor A$ using its right disjunct. In the second case, assume $B$ and introduce $B\lor A$ using its left disjunct. Disjunction elimination combines the two case conclusions and discharges the case assumptions. Only the original disjunction remains open. If we now discharge that original assumption, we obtain $\vdash(A\lor B)\to(B\lor A)$.

**Worked example 2 (Contraposition).** Derive $\vdash(A\to B)\to(\neg B\to\neg A)$. Assume $A\to B$, then assume $\neg B$, then assume $A$. Implication elimination gives $B$ from the first and third assumptions. Negation elimination gives $\bot$ using $\neg B$. Discharge $A$ by negation introduction to obtain $\neg A$. Discharge $\neg B$ by implication introduction, then discharge $A\to B$ by implication introduction. The final formula has no open assumptions. This proof does not need classical reductio.

**Worked example 3 (Excluded middle).** Derive $\vdash A\lor\neg A$. Assume $\neg(A\lor\neg A)$. Inside that subproof assume $A$. Disjunction introduction gives $A\lor\neg A$, so the outer assumption gives $\bot$. Discharge $A$ to obtain $\neg A$. Introduce $A\lor\neg A$ again, this time using $\neg A$. Contradict the original assumption once more. Classical reductio, discharging $\neg(A\lor\neg A)$, yields $A\lor\neg A$. The need for the classical rule is visible in the final step; a semantic truth table alone was not a derivation in the specified calculus.

## A finite completeness construction

**Lemma 2.5 (Signed-row lemma).** Let $v$ assign values to all the letters in $A$, and let $L_v$ contain each such letter when its value is one and its negation when its value is zero. If $v(A)=1$, then $L_v\vdash A$; if $v(A)=0$, then $L_v\vdash\neg A$.

*Proof.* Induct on $A$. The atomic case is an assumption. For $\bot$, derive $\neg\bot$ by assuming $\bot$ and discharging that same occurrence with negation introduction. For $\neg B$, if it is true, the induction hypothesis already gives $\neg B$. If it is false, induction gives $B$; assuming $\neg B$ produces contradiction, so negation introduction gives $\neg\neg B$.

If $B\land C$ is true, induction gives both conjuncts and conjunction introduction applies. If it is false, at least one conjunct is false; derive its negation by induction, assume the conjunction, extract that conjunct and contradict it. Discharge the conjunction to obtain its negation. If $B\lor C$ is true, induction supplies a true disjunct. If it is false, induction gives both negations; under an assumption of the disjunction, its two cases each yield $\bot$, so disjunction elimination followed by negation introduction yields $\neg(B\lor C)$.

If $B\to C$ is true, either $C$ is true or $B$ is false. In the first situation derive $C$ by induction and introduce the implication under an unused assumption $B$. In the second derive $\neg B$, assume $B$, obtain $\bot$, explode to $C$, and discharge $B$. If the implication is false, induction gives $B$ and $\neg C$. Assuming $B\to C$ gives $C$ and then contradiction, so discharge it to obtain its negation. All formation rules are covered. ∎

**Theorem 2.6 (Finite completeness).** If a formula is valid, it is derivable without assumptions. More generally, if finite $\Gamma$ semantically entails $A$, then $\Gamma\vdash A$.

*Proof.* For each truth-table row of a valid $A$, the signed-row lemma gives a derivation of $A$ from the literals specifying that row. Pair the two rows differing only in their last letter. Their derivations have the form “from $p$ derive $A$” and “from $\neg p$ derive $A$”, with the other row literals shared. Apply excluded middle $p\lor\neg p$ and disjunction elimination to remove those two case assumptions. Repeat for the remaining letters. After finitely many repetitions no row literals remain. If there are no letters, the signed-row lemma already gives an assumption-free derivation.

For finite premises $B_1,\ldots,B_k$, the semantic consequence says $(B_1\land\cdots\land B_k)\to A$ is valid. Derive it by the first part, derive the conjunction from the premises, and eliminate implication. The case $k=0$ is the first part itself. ∎

This construction is explicit but can be enormous. Completeness concerns existence of a finite derivation, not a promise that the shortest proof will be easy to find.

## Arbitrarily many premises

The finite argument alone does not yet establish completeness for an infinite set of premises: it has not shown that a finite subset suffices. We now prove that additional fact without assuming semantic compactness.

**Lemma 2.7 (Consistent completion).** Every consistent set $\Gamma$ extends to a consistent set $\Delta$ such that, for every formula $A$, exactly one of $A,\neg A$ belongs to $\Delta$, and $\Delta$ is closed under derivability.

*Proof.* Enumerate all formulas as $A_0,A_1,\ldots$, possible because they are finite strings over a countable alphabet. Start with $\Gamma_0=\Gamma$. If $\Gamma_n\cup\{A_n\}$ is consistent, add $A_n$; otherwise add $\neg A_n$. The latter addition preserves consistency. Indeed, inconsistency of the first extension gives $\Gamma_n\vdash\neg A_n$ by negation introduction. If the second extension were also inconsistent, substitute that derivation into its contradiction proof to make $\Gamma_n$ inconsistent.

Let $\Delta=\bigcup_n\Gamma_n$. Any contradiction proof from $\Delta$ uses finitely many premises. They all belong to one stage, contradicting that stage's consistency. Every formula or its negation was added; both cannot occur because they would derive $\bot$. If $\Delta\vdash B$ but $B\notin\Delta$, then $\neg B\in\Delta$, again giving contradiction. Hence $\Delta$ is deductively closed. ∎

The construction is an existence proof. At each stage it asks whether an extension is consistent; it does not claim that this question has an effective answer for arbitrary infinite $\Gamma$.

**Lemma 2.8 (Membership behaves like truth).** In such a $\Delta$, falsehood is absent, negation means absence of its argument, conjunction means membership of both conjuncts, disjunction means membership of at least one disjunct, and implication means absence of its antecedent or membership of its consequent.

*Proof.* Consistency excludes $\bot$, and the decision property gives the assertion for negation. The conjunction rules give both directions for conjunction. Either disjunct introduces the disjunction. Conversely, if neither disjunct belongs, both negations belong, and an assumed disjunction yields contradiction by its cases. Thus the disjunction cannot belong. For implication, if it and its antecedent belong, implication elimination forces its consequent to belong. Conversely, a member consequent gives the implication by an unused antecedent assumption. If the antecedent is absent, its negation belongs; assuming the antecedent then gives contradiction and, by explosion, the consequent. Implication introduction again gives the implication. ∎

**Theorem 2.9 (Strong propositional completeness).** For any set $\Gamma$ of formulas in our countable propositional language, $\Gamma\models A$ implies $\Gamma\vdash A$.

*Proof.* Suppose $\Gamma\nvdash A$. The set $\Gamma\cup\{\neg A\}$ is consistent, because a contradiction from it would give $A$ by classical reductio. Extend it to $\Delta$ as above. Define $v(p)=1$ precisely when $p\in\Delta$. Structural induction using Lemma 2.8 gives $v(B)=1$ precisely when $B\in\Delta$, for every formula $B$. Thus $v$ satisfies every member of $\Gamma$ and also $\neg A$, so it is a countervaluation to $\Gamma\models A$. Contraposition proves the theorem. ∎

Together with soundness, this identifies derivability and semantic consequence. It does not identify a proof tree with a valuation, nor does it make all consistent theories complete theories. A theory can fail to decide a formula even though the calculus derives every semantic consequence of that theory.

## Exercises

### Exercise 2.1
<a id="propositional-deduction-soundness-completeness-ex-1"></a>

Derive $A\land B\vdash B\land A$ with the specified rules.

<details>
<summary>Hint 1</summary>

Extract the needed components before introducing the new conjunction.

</details>
<details>
<summary>Hint 2</summary>

The order of premises of conjunction introduction determines the displayed order.

</details>
<details>
<summary>Solution</summary>

Keep $A\land B$ as the sole open assumption. Conjunction elimination gives $B$, and a second use gives $A$. Apply conjunction introduction to those conclusions in that order to obtain $B\land A$. No temporary assumption was introduced, so the required open-assumption set is unchanged.

</details>

### Exercise 2.2
<a id="propositional-deduction-soundness-completeness-ex-2"></a>

Derive $A\to B,B\to C\vdash A\to C$.

<details>
<summary>Hint 1</summary>

An implication conclusion suggests a temporary antecedent assumption.

</details>
<details>
<summary>Hint 2</summary>

Use implication elimination twice before discharging anything.

</details>
<details>
<summary>Solution</summary>

Assume $A$ temporarily. With $A\to B$, infer $B$; with $B\to C$, infer $C$. Discharge $A$ by implication introduction to obtain $A\to C$. The original two implications stay open, exactly as required.

</details>

### Exercise 2.3
<a id="propositional-deduction-soundness-completeness-ex-3"></a>

Derive $\neg\neg A\vdash A$, marking the classical step.

<details>
<summary>Hint 1</summary>

Try a temporary assumption of the negation of the goal.

</details>
<details>
<summary>Hint 2</summary>

The premise already negates that temporary assumption.

</details>
<details>
<summary>Solution</summary>

Keep $\neg\neg A$ open and temporarily assume $\neg A$. Negation elimination with those two formulas gives $\bot$. Classical reductio discharges $\neg A$ and yields $A$. The reductio is the classical step; negation introduction alone would yield only another double negation of the appropriate target.

</details>

### Exercise 2.4
<a id="propositional-deduction-soundness-completeness-ex-4"></a>

Use soundness to prove $A\lor B\nvdash A$ when $A,B$ are distinct atomic letters.

<details>
<summary>Hint 1</summary>

Seek a satisfying valuation for the premise with a false conclusion.

</details>
<details>
<summary>Hint 2</summary>

Let the other disjunct be the reason the premise is true.

</details>
<details>
<summary>Solution</summary>

Set $v(A)=0$ and $v(B)=1$. Then $v(A\lor B)=1$ but $v(A)=0$, so the semantic consequence fails. If the displayed derivation existed, soundness would make that consequence hold. Therefore it does not exist. Distinctness of the letters matters because they must be independently assignable.

</details>

### Exercise 2.5
<a id="propositional-deduction-soundness-completeness-ex-5"></a>

Prove that if $\Gamma\vdash A$ and $\Gamma\vdash\neg A$, then $\Gamma$ is inconsistent; prove the converse claim that an inconsistent $\Gamma$ derives both formulas.

<details>
<summary>Hint 1</summary>

Use the rule whose two premises are a formula and its negation.

</details>
<details>
<summary>Hint 2</summary>

For the converse, use explosion twice from the same contradiction proof.

</details>
<details>
<summary>Solution</summary>

Combine the two given derivations by negation elimination. Their open assumptions lie in $\Gamma$, so the resulting derivation shows $\Gamma\vdash\bot$. Conversely, from any derivation of $\bot$ from $\Gamma$, explosion gives a derivation of $A$ and another of $\neg A$, without introducing new open assumptions. Both implications are syntactic and require no semantic theorem.

</details>

### Exercise 2.6
<a id="propositional-deduction-soundness-completeness-ex-6"></a>

Give the signed-row derivation for $p\to q$ in the row $p=0,q=0$.

<details>
<summary>Hint 1</summary>

Your available row assumptions are $\neg p$ and $\neg q$.

</details>
<details>
<summary>Hint 2</summary>

A false antecedent permits an implication proof by contradiction and explosion.

</details>
<details>
<summary>Solution</summary>

Temporarily assume $p$. The row assumption $\neg p$ yields $\bot$. Explosion gives $q$, and implication introduction discharges $p$ to give $p\to q$. The assumption $\neg q$ need not be used; a derivation from a premise set may depend on only part of that set. Thus the true value of the implication has a genuine syntactic derivation in this row.

</details>

### Exercise 2.7
<a id="propositional-deduction-soundness-completeness-ex-7"></a>

Explain why the union of an increasing sequence of consistent sets is consistent, and why an arbitrary union need not be.

<details>
<summary>Hint 1</summary>

A contradiction proof is finite.

</details>
<details>
<summary>Hint 2</summary>

For the failure case, take two individually satisfiable sets with opposite literals.

</details>
<details>
<summary>Solution</summary>

A proof from an increasing union has finitely many open assumption occurrences. Each appears at some stage, and the maximum of their finitely many indices is a stage containing them all. A contradiction proof would contradict consistency at that stage. In contrast, $\{p\}$ and $\{\neg p\}$ are each satisfiable and hence consistent, while their union derives $\bot$. The increasing condition supplies the common stage that this counterexample lacks.

</details>

### Exercise 2.8
<a id="propositional-deduction-soundness-completeness-ex-8"></a>

If $\Gamma\models A$, prove that some finite $\Gamma_0\subseteq\Gamma$ already entails $A$.

<details>
<summary>Hint 1</summary>

Use strong completeness before using finiteness.

</details>
<details>
<summary>Hint 2</summary>

Read the open assumptions of the resulting finite proof tree.

</details>
<details>
<summary>Solution</summary>

Completeness gives $\Gamma\vdash A$. Its derivation has finitely many leaves, so only finitely many distinct open assumptions occur. Let $\Gamma_0$ be their set. The same tree gives $\Gamma_0\vdash A$, and soundness gives $\Gamma_0\models A$. The finiteness assertion therefore follows from the two metatheorems and the definition of derivation, rather than being assumed in the infinite-premise completeness proof.

</details>

### Exercise 2.9
<a id="propositional-deduction-soundness-completeness-ex-9"></a>

Show that a complete consistent set $\Delta$ contains every theorem of the calculus, and is closed under modus ponens.

<details>
<summary>Hint 1</summary>

Use deductive closure from Lemma 2.7.

</details>
<details>
<summary>Hint 2</summary>

A proof without assumptions is also a proof from any larger set.

</details>
<details>
<summary>Solution</summary>

If $\vdash C$, weakening gives $\Delta\vdash C$, so deductive closure puts $C$ in $\Delta$. If $A,A\to B\in\Delta$, use them as assumption leaves and apply implication elimination to obtain $\Delta\vdash B$. Deductive closure then gives $B\in\Delta$. Alternatively, absence of either result would put its negation in $\Delta$ and contradict consistency.

</details>

### Exercise 2.10
<a id="propositional-deduction-soundness-completeness-ex-10"></a>

Explain why completeness of the calculus does not imply that $\{p\lor q\}$ proves either $p$ or $\neg p$.

<details>
<summary>Hint 1</summary>

Distinguish “all consequences are provable” from “every formula is decided”.

</details>
<details>
<summary>Hint 2</summary>

Find models of the premise giving $p$ opposite values.

</details>
<details>
<summary>Solution</summary>

The valuation $p=0,q=1$ satisfies the premise and falsifies $p$, so soundness rules out a proof of $p$. The valuation $p=1,q=0$ satisfies the premise and falsifies $\neg p$, so it rules out a proof of $\neg p$. Completeness says that any formula true in every model of this premise is provable. Neither of these two formulas has that property. Completeness of a calculus and completeness of a particular theory are different assertions.

</details>

## Sources

Euler's CC BY-SA 4.0 reference seed, Theorem contracts 1–2, supplies the distinction between semantic consequence and finite derivability. All derivations and exercises here are newly written for the displayed calculus. The [Open Logic Project's natural-deduction materials](https://github.com/OpenLogicProject/OpenLogic/tree/master/content/first-order-logic/natural-deduction) provide a primary teaching reference for assumption discharge. Its [complete-consistent-set source](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/complete-consistent-sets.tex) provides a reference for the completion method. The proofs above specify the rules used here rather than assuming a different presentation's rules.

## Summary

Natural deduction makes assumptions, discharge and the classical rule explicit. Induction on derivations proves soundness. The signed-row construction turns finite truth tables into derivations, while consistent completion supplies strong completeness for arbitrary premise sets in the countable propositional language. Every semantic consequence therefore has a finite proof using finitely many premises. Quantifiers will require assignments, admissible substitutions and freshness conditions before the same programme can be carried out for first-order logic.
