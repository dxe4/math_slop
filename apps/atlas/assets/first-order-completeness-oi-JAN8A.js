var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: first-order-completeness
title: "The First-Order Completeness Theorem"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The First-Order Completeness Theorem

## Building a world from consistency

Soundness starts with a proof and shows that every model respects it. Completeness goes in the other direction: if no countermodel exists, a proof must exist. The useful construction is its contrapositive. If a conclusion cannot be proved, we extend the premises consistently and construct a model in which that conclusion fails.

The proof will not search through a pre-existing list of all structures. It builds objects from closed terms and determines relations by membership in a complete consistent theory. Two obstacles require care. An existential assertion needs a named witness in this model, and two different terms may have to denote the same object. Henkin constants solve the first problem; an equality quotient solves the second.

Required preparation is the classical natural-deduction calculus, the assignment semantics, and the fresh-constant and quantifier-duality lemmas of [Chapter 4](/books/library-book-introduction-to-logic-and-set-theory/first-order-deduction-soundness/). We first give the construction for a countable signature. We then explicitly extend it to any set-sized finitary signature in ambient ZFC. That ambient use of choice is part of the metatheory, not an assumption inserted into the first-order theory being modeled. The later set-theory chapters examine those distinctions further.

## The precise target

**Theorem 5.1 (Model existence).** Every syntactically consistent set $T$ of sentences in a countable first-order signature, with the calculus fixed in Chapters 2 and 4, has a nonempty model with at most countably many elements. With ambient choice, the same construction gives a model of size at most $\\max(|L|,\\aleph_0)$ for every set-sized finitary signature $L$.

“Consistent” here means that no finite derivation of $\\bot$ exists. We do not assume that $T$ is decidable, effectively enumerable, deductively closed or complete. It can contain infinitely many unrelated axioms. The countable conclusion allows finite models; it does not promise a countably infinite model when the theory forces a finite domain.

We will prove the theorem by a chain of lemmas. In particular, model existence must not be used to justify the consistency-preserving steps: that would make the argument circular.

## Fresh witnesses preserve consistency

**Lemma 5.2 (One witness).** Suppose $S$ is a consistent sentence theory, $\\varphi$ has no free variables other than possibly $x$, and a constant $c$ occurs neither in $S$ nor in $\\varphi$. Then

$$S\\cup\\{\\exists x\\varphi\\to\\varphi[c/x]\\}$$

is consistent in the expanded signature.

*Proof.* Write $E=\\exists x\\varphi$ and $H=E\\to\\varphi[c/x]$. Suppose the extension is inconsistent. Negation introduction gives $S\\vdash\\neg H$. The propositional calculus derives $\\neg(A\\to B)\\vdash A$ and $\\neg(A\\to B)\\vdash\\neg B$: these are finite truth-table consequences, so Chapter 2's finite completeness supplies derivations that may have arbitrary formulas substituted for their letters. Thus $S\\vdash E$ and $S\\vdash\\neg\\varphi[c/x]$.

Fresh-constant elimination gives $S\\vdash\\forall x\\neg\\varphi$. To make the contradiction explicit, use $E$ to open a fresh witness case $\\varphi[y/x]$. Universal elimination gives $\\neg\\varphi[y/x]$, hence $\\bot$. Existential elimination closes the case, leaving $S\\vdash\\bot$. This contradicts the hypothesis. The signature expansion itself preserves old consistency by Lemma 4.8. ∎

The freshness hypothesis is crucial. A previously constrained constant might be forbidden from satisfying $\\varphi$ even when another object satisfies it. Nor can every existential assertion be assigned the same fresh constant: different assertions may require incompatible properties.

**Definition 5.3 (Witness property).** A sentence theory $S$ has the Henkin witness property when, for every formula $\\varphi$ with free variables contained in $\\{x\\}$ in its signature, there is a closed term $t$, in our construction a constant, such that $\\exists x\\varphi\\to\\varphi[t/x]$ belongs to $S$.

Formulas with parameters represented by constants count too. Adding new constants creates new formulas, so adding witnesses only for the original signature would not suffice.

**Lemma 5.4 (A consistent witness expansion).** A consistent sentence theory $T$ has a consistent extension $T_H$ in a larger signature with at least one constant and the witness property for every formula of that larger signature.

*Proof.* First add a fresh constant $d$, whether or not the original signature already has constants; old consistency is preserved. Call the resulting signature $L_0$ and theory $T_0=T$. Given $L_n,T_n$, create a different new constant $c_{n,\\varphi,x}$ for each pair consisting of a variable $x$ and an $L_n$-formula $\\varphi$ whose free variables lie in $\\{x\\}$. None of these new constants belongs to $L_n$. Let $L_{n+1}$ add all these constants, and let $T_{n+1}$ add all corresponding witness implications to $T_n$.

To prove consistency at this step, any proposed contradiction would use only finitely many of the new witness implications. List those finitely many implications in any order. Each designated constant is absent from $T_n$, from the bodies of all these implications, which are $L_n$-formulas, and from previously added witness implications except its own. Lemma 5.2 therefore preserves consistency one addition at a time. Unused new constants cannot create a contradiction by fresh-constant elimination. Hence no finite list can yield the proposed contradiction, and $T_{n+1}$ is consistent.

Set $L_H=\\bigcup_{n<\\omega}L_n$ and $T_H=\\bigcup_{n<\\omega}T_n$. A finite proof in $L_H$ uses finitely many symbols and finitely many assumptions, so it is already a proof in some $L_n$ from some $T_n$, after increasing $n$ if necessary. Therefore $T_H$ is consistent. Every formula of $L_H$ is a finite expression and hence belongs to one $L_n$. Its witness implication was added at the next stage. Thus the witness property holds throughout the final signature. ∎

In a countable signature there are countably many formulas, so each stage and the union remain countable. The proof uses a countable chain of languages, not an assertion that there are only finitely many witness needs. New needs can continue appearing at every stage.

## Deciding the sentences consistently

**Lemma 5.5 (Complete consistent extension).** In a countable signature every consistent sentence theory $S$ extends to a consistent sentence set $\\Delta$ that decides every sentence and is deductively closed.

*Proof.* Enumerate all sentences $\\sigma_0,\\sigma_1,\\ldots$. At stage $n$, add $\\sigma_n$ if doing so preserves consistency; otherwise add $\\neg\\sigma_n$. In the latter case the addition is consistent: inconsistency with $\\sigma_n$ gives a derivation of $\\neg\\sigma_n$ from the previous stage. If adding that derivable negation also produced contradiction, proof substitution would contradict consistency of the previous stage. Every stage is therefore consistent. Any contradiction from the union uses finitely many premises and would occur in one stage.

For each sentence exactly one of it and its negation belongs to the union: at least one was added, and both would contradict consistency. If the union proves $\\sigma$ but does not contain it, it contains $\\neg\\sigma$ and becomes inconsistent. Hence it is deductively closed. ∎

Apply this lemma to $T_H$, within the already constructed signature $L_H$. No further signature expansion is needed, and all witness implications remain in $\\Delta$. The propositional membership lemmas of Chapter 2 apply to sentences in $\\Delta$: they use only the propositional rules and the decision property, irrespective of the internal form of the sentences.

For an arbitrary set-sized signature the same decision construction uses a well-order of its sentence set, supplied by ambient choice. At a successor stage make the same consistent decision. At a limit stage take the union. A finite contradiction proof at a limit would use finitely many premises, all lying below one earlier stage because a finite set of ordinals has a maximum. Thus the identical consistency argument works at every limit. This is a transfinite version of the construction, with no claim that an uncountable sentence set has a countable enumeration.

For completeness, the witness expansion also works at arbitrary size: choose disjoint sets of new constants indexed by the set of required pairs at each natural-number stage. Its consistency proof used only finite subcollections, not countable enumerations. Consequently the entire construction is available for arbitrary set-sized finitary signatures in the declared ambient metatheory.

## The quotient term model

**Definition 5.6 (Equality classes).** Let $\\mathcal T$ be the set of all closed $L_H$-terms. Define $t\\sim u$ if $t=u\\in\\Delta$. Let $[t]$ denote the equivalence class of $t$.

The set $\\mathcal T$ is nonempty because it contains $d$. Reflexivity, symmetry and transitivity of $\\sim$ follow from Lemma 4.4 and deductive closure. Moreover $\\sim$ is a congruence. Replacing equivalent arguments gives equivalent function terms, and preserves membership of relation instances in $\\Delta$, in both directions. Here are the details behind that last assertion: from $t=u$ and a relation instance with $t$ in a chosen position, equality substitution gives the instance with $u$ there. Symmetry gives the reverse inference. Repeating over finitely many positions changes any finite tuple of equivalent arguments. For functions, use the function-congruence derivation of Lemma 4.4 at each position, and transitivity combines the resulting equalities.

**Definition 5.7 (Term structure).** Define an $L_H$-structure $M_\\Delta$ with domain $\\mathcal T/{\\sim}$ by

$$c^{M_\\Delta}=[c],\\qquad f^{M_\\Delta}([t_1],\\ldots,[t_n])=[f(t_1,\\ldots,t_n)],$$

and declare $R^{M_\\Delta}([t_1],\\ldots,[t_n])$ true exactly when $R(t_1,\\ldots,t_n)\\in\\Delta$. Equality is actual equality of classes.

The congruence facts make these definitions independent of representatives. Every function is total because applying a function symbol to closed terms produces another closed term. The domain is nonempty because $[d]$ exists. Induction on terms shows that a term evaluated at arguments $[t_i]$ has value the class of the syntactically substituted closed term. Constants give the base case; function interpretation gives the inductive step.

If we had used distinct strings as distinct elements without quotienting, an assumed equality $a=b$ could be false in the constructed structure simply because the names differ. The quotient repairs precisely that defect. It does not reinterpret logical equality as an arbitrary relation: after the quotient, equality is genuine identity of its elements.

## The truth lemma and the theorem

**Lemma 5.8 (Truth lemma).** If $\\operatorname{FV}(\\varphi)\\subseteq\\{x_1,\\ldots,x_n\\}$ and $t_1,\\ldots,t_n$ are closed terms, then, for any assignment sending each $x_i$ to $[t_i]$,

$$M_\\Delta,s\\models\\varphi\\quad\\text{iff}\\quad\\varphi[t_1/x_1,\\ldots,t_n/x_n]\\in\\Delta.$$

Bound variables are first renamed to make the simultaneous substitution capture avoiding. In particular, for every sentence $\\sigma$, $M_\\Delta\\models\\sigma$ if and only if $\\sigma\\in\\Delta$.

*Proof.* Induct on formulas, with arbitrary closed-term substitutions for their free variables. For equality, the term-evaluation fact reduces satisfaction to equality of two classes, which by definition is membership of the corresponding equation in $\\Delta$. For a relation, the same term fact and the definition of its interpretation give the result. Falsehood is false in the structure and absent from the consistent set. The connective cases are exactly the propositional membership properties proved in Chapter 2.

Consider an existential formula after its parameter terms have been substituted, written $\\exists x\\psi$. If it belongs to $\\Delta$, its Henkin implication belongs too, so deductive closure gives $\\psi[c/x]\\in\\Delta$ for a witness constant $c$. Induction makes the body true when $x$ is assigned $[c]$, proving existential satisfaction. Conversely, if the existential is true, its semantic witness is some domain element $[u]$, since every element is a class of a closed term. Induction gives $\\psi[u/x]\\in\\Delta$. Existential introduction and deductive closure put $\\exists x\\psi$ in $\\Delta$.

For a universal formula $\\forall x\\psi$, membership gives every closed-term instance by universal elimination. Every domain element has such a representative, so induction proves universal satisfaction. If the universal is absent, its negation belongs to $\\Delta$. The classical quantifier-duality derivation of Lemma 4.9 gives $\\exists x\\neg\\psi\\in\\Delta$. Its witness implication supplies a closed instance $\\neg\\psi[c/x]\\in\\Delta$. Consistency excludes $\\psi[c/x]$ from $\\Delta$, so the induction hypothesis for the proper subformula $\\psi$ makes that body false at $[c]$. Thus the universal is false. These are both directions of the universal case, completing the induction. Only finitely many representatives are needed for any one parameter tuple; no global choice of representatives is hidden in the statement. ∎

Since $T\\subseteq\\Delta$, the sentence case makes $M_\\Delta$ a model of $T$ after forgetting the extra constants. For countable $L$, closed terms form an at most countable set, so its quotient is at most countable. In general, put $\\kappa=\\max(|L|,\\aleph_0)$ in ambient ZFC. Finite strings over a set of size at most $\\kappa$ form a set of size at most $\\kappa$; each witness stage adds at most $\\kappa$ constants, and a countable union of such sets still has size at most $\\kappa$. The closed terms and their quotient therefore have that bound. This proves Theorem 5.1.

**Theorem 5.9 (Strong first-order completeness for sentences).** For any sentence theory $T$ and sentence $\\sigma$, if $T\\models\\sigma$, then $T\\vdash\\sigma$. This holds for countable signatures by the countable construction, and for arbitrary set-sized finitary signatures in the ambient metatheory stated above.

*Proof.* If $T\\nvdash\\sigma$, then $T\\cup\\{\\neg\\sigma\\}$ is consistent: otherwise classical reductio gives the excluded proof of $\\sigma$. Theorem 5.1 supplies a model of that consistent extension. Its reduct satisfies $T$ and falsifies $\\sigma$, contradicting the proposed semantic consequence. ∎

## Worked examples and computational limits

**Worked example 1 (Two names, one object).** Let $T=\\{a=b,P(a),\\forall x(x=a)\\}$. It is satisfied by a one-element structure with $P$ true. In any complete Henkin extension, every closed term $t$ satisfies $t=a$ by universal elimination. Thus all closed terms belong to the same class, even newly added witness constants. The quotient model has one element, not one element per name, and $P$ holds of it by equality substitution from $P(a)$.

**Worked example 2 (Different witnesses are forced).** Take $T=\\{\\exists xP(x),\\exists x\\neg P(x)\\}$. Witness constants $c,d$ give $P(c)$ and $\\neg P(d)$ in the extension. If $c=d$ belonged, equality substitution would yield $P(d)$ and hence contradiction. Therefore $\\neg(c=d)$ belongs, and $[c]\\ne[d]$. The construction automatically separates incompatible witnesses through consistency and equality; it does not assume in advance that all fresh constants must name different objects.

**Worked example 3 (What a failed proof supplies).** Let $T=\\{\\exists xP(x),\\exists xQ(x)\\}$ and $\\sigma=\\exists x(P(x)\\land Q(x))$. The two-element interpretation with disjoint singleton predicates satisfies $T$ and falsifies $\\sigma$, so soundness already shows $T\\nvdash\\sigma$. Completeness gives the converse general principle: whenever a sentence is not derivable, some countermodel exists, even when no small explicit countermodel is apparent. It need not be finite, unique, computable or isomorphic to an intended structure.

Completeness is not a decision algorithm. In an effectively presented countable signature, with effectively enumerable axioms, proofs can be enumerated, so a theorem can eventually be found by searching. The consistent-completion step, however, asks non-effective consistency questions. Nothing here promises that searches for a proof and for its negation will both fail only for a bounded time. Moreover the sentence theory can itself be non-effective. Completeness of this calculus and incompleteness of an effective arithmetic theory address different quantifiers and are compatible.

## Exercises

### Exercise 5.1
<a id="first-order-completeness-ex-1"></a>

Show that witness freshness cannot be dropped: find consistent $S$ for which $S\\cup\\{\\exists xP(x)\\to P(c)\\}$ is inconsistent because $c$ is already constrained.

<details>
<summary>Hint 1</summary>

Require one $P$-object while forbidding $P$ of the named object.

</details>
<details>
<summary>Hint 2</summary>

A two-element structure can separate those roles.

</details>
<details>
<summary>Solution</summary>

Take $S=\\{\\exists xP(x),\\neg P(c)\\}$. It has a model with domain $\\{a,b\\}$, $c=a$ and $P=\\{b\\}$, so soundness makes it consistent. The added implication and the existential premise derive $P(c)$, contradicting $\\neg P(c)$. The designated constant was not fresh in $S$, which is exactly the missing hypothesis.

</details>

### Exercise 5.2
<a id="first-order-completeness-ex-2"></a>

Why does adding witnesses only for formulas of the original signature fail to establish the witness property for the final signature?

<details>
<summary>Hint 1</summary>

New constants can occur as parameters in new formulas.

</details>
<details>
<summary>Hint 2</summary>

Consider $\\exists xR(x,c)$ after adding a constant $c$.

</details>
<details>
<summary>Solution</summary>

The formula $R(x,c)$ is not an original-language formula when $c$ is new. A list covering only the original formulas therefore contains no prescribed witness implication for $\\exists xR(x,c)$. Such a sentence could belong to the complete extension, and the existential truth-lemma argument would then have no guaranteed named witness. Repeating the language expansion ensures that every formula, which uses only finitely many added constants, appears at some finite stage and receives a witness at the next.

</details>

### Exercise 5.3
<a id="first-order-completeness-ex-3"></a>

Explain why a default constant is added even when the original theory contains no existential sentences.

<details>
<summary>Hint 1</summary>

The term model's elements are classes of closed terms.

</details>
<details>
<summary>Hint 2</summary>

A signature with only relations has no closed terms unless a constant is supplied.

</details>
<details>
<summary>Solution</summary>

With no constants and no zero-argument function symbols, the term construction starts from variables, so every term has a free variable and no closed term exists. Its quotient would be empty, violating our nonempty-domain convention. Adding an unconstrained constant supplies a closed term and preserves old consistency by fresh-constant elimination. Its class guarantees a nonempty term model regardless of the original theory's existential content.

</details>

### Exercise 5.4
<a id="first-order-completeness-ex-4"></a>

Prove that a complete consistent sentence set $\\Delta$ contains $\\sigma$ exactly when it derives $\\sigma$.

<details>
<summary>Hint 1</summary>

One direction is an assumption leaf.

</details>
<details>
<summary>Hint 2</summary>

If membership fails, the opposite sentence is present.

</details>
<details>
<summary>Solution</summary>

If $\\sigma\\in\\Delta$, an assumption leaf gives $\\Delta\\vdash\\sigma$. Conversely, if $\\Delta\\vdash\\sigma$ but $\\sigma\\notin\\Delta$, completeness of the set gives $\\neg\\sigma\\in\\Delta$. Combine that assumption with the derivation of $\\sigma$ to derive $\\bot$, contradicting consistency. Hence derivability implies membership. This argument uses completeness of the set, not the metatheorem whose proof is still being constructed.

</details>

### Exercise 5.5
<a id="first-order-completeness-ex-5"></a>

Given $t\\sim u$, prove that $R(t,v)\\in\\Delta$ if and only if $R(u,v)\\in\\Delta$.

<details>
<summary>Hint 1</summary>

Translate the equivalence of terms into an equation in $\\Delta$.

</details>
<details>
<summary>Hint 2</summary>

Use symmetry for the reverse inference.

</details>
<details>
<summary>Solution</summary>

By definition $t=u\\in\\Delta$. Equality substitution with template $R(z,v)$ sends $R(t,v)$ to $R(u,v)$, and deductive closure puts the latter in $\\Delta$. For the reverse direction derive $u=t$ by symmetry, then use the same template to replace $u$ by $t$. Thus relation membership is independent of the representative of the first argument; the same reasoning handles every other argument position.

</details>

### Exercise 5.6
<a id="first-order-completeness-ex-6"></a>

Show that a theory containing $\\exists xP(x)$ and $\\forall x\\neg P(x)$ cannot enter the Henkin construction as a consistent theory.

<details>
<summary>Hint 1</summary>

A contradiction already has a short natural-deduction proof.

</details>
<details>
<summary>Hint 2</summary>

Open an existential witness and instantiate the universal at that variable.

</details>
<details>
<summary>Solution</summary>

Assume $P(y)$ for a fresh existential witness. Universal elimination gives $\\neg P(y)$, so negation elimination yields $\\bot$. Existential elimination discharges the witness assumption and leaves a contradiction from the two original sentences. Thus the theory is syntactically inconsistent before any language expansion. Henkin constants do not repair contradictory requirements; the construction starts only from consistency.

</details>

### Exercise 5.7
<a id="first-order-completeness-ex-7"></a>

Prove that every consistent theory in a finite signature has a finite or countably infinite model, and explain why this does not imply a finite model.

<details>
<summary>Hint 1</summary>

A finite signature is countable, and terms are finite strings.

</details>
<details>
<summary>Hint 2</summary>

A theory can require at least $n$ objects for each positive integer $n$.

</details>
<details>
<summary>Solution</summary>

Theorem 5.1 constructs a model with at most countably many elements, so its nonempty domain is finite or countably infinite. In the equality-only signature take the theory containing, for each $n\\ge1$, a sentence asserting the existence of $n$ pairwise distinct objects. The natural numbers model this theory, so it is consistent by soundness. Every model has at least $n$ elements for every $n$ and therefore cannot be finite. Countability is the asserted upper bound, not finiteness.

</details>

### Exercise 5.8
<a id="first-order-completeness-ex-8"></a>

In a complete Henkin theory, show that absence of $\\forall x\\varphi$ supplies a closed-term counterexample in its term model.

<details>
<summary>Hint 1</summary>

First use the sentence decision property.

</details>
<details>
<summary>Hint 2</summary>

Quantifier duality converts the negated universal into a witnessed existential.

</details>
<details>
<summary>Solution</summary>

Absence puts $\\neg\\forall x\\varphi$ in $\\Delta$. Lemma 4.9 and deductive closure put $\\exists x\\neg\\varphi$ there. Its witness implication yields $\\neg\\varphi[c/x]\\in\\Delta$ for a closed constant $c$. The truth lemma for the body says that $\\varphi$ is false when $x=[c]$. Thus the universal formula fails in the term model at an actual represented object, which is the needed converse direction in the universal truth-lemma case.

</details>

### Exercise 5.9
<a id="first-order-completeness-ex-9"></a>

At a limit stage of the general-signature decision construction, why can no new contradiction appear for the first time?

<details>
<summary>Hint 1</summary>

A derivation has finitely many open assumptions even if the stage index is uncountable.

</details>
<details>
<summary>Hint 2</summary>

A finite collection of earlier ordinal stages is bounded below the limit.

</details>
<details>
<summary>Solution</summary>

Suppose a contradiction proof existed from the union at a limit ordinal. Each of its finitely many open assumptions appeared before that limit. The finitely many appearance indices have a maximum, and a stage after their appearance but still below the limit contains them all. The same finite proof would contradict consistency of that earlier stage. This uses finite proof support and the increasing chain, not an enumeration of the entire uncountable theory by natural numbers.

</details>

### Exercise 5.10
<a id="first-order-completeness-ex-10"></a>

Prove that if consistent $T$ proves neither $\\sigma$ nor $\\neg\\sigma$, then both $T\\cup\\{\\sigma\\}$ and $T\\cup\\{\\neg\\sigma\\}$ have models.

<details>
<summary>Hint 1</summary>

Check syntactic consistency of each extension before invoking completeness.

</details>
<details>
<summary>Hint 2</summary>

A contradiction under $\\sigma$ proves its negation; a contradiction under $\\neg\\sigma$ proves $\\sigma$ classically.

</details>
<details>
<summary>Solution</summary>

If the first extension were inconsistent, negation introduction would give $T\\vdash\\neg\\sigma$, contrary to hypothesis. If the second were inconsistent, classical reductio would give $T\\vdash\\sigma$, also contrary to hypothesis. Both extensions are therefore consistent. Model existence supplies a model of each. The original theory is consequently compatible with opposite answers to this sentence even though the calculus is complete for its semantic consequences.

</details>

## Sources

The starting proof architecture is Euler's CC BY-SA 4.0 reference seed, Theorem contract 2, with its model-theory chapter as a further local seed. The present proof develops all witness-consistency, quotient and truth-lemma steps, and the exercises are new. For primary teaching references see the Open Logic Project's [Henkin expansion](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/henkin-expansions.tex), [identity quotient](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/identity.tex), and [model construction](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/construction-of-model.tex). The general-signature extension above states its ambient well-ordering assumption explicitly.

## Summary

Consistency survives fresh witness implications, a countable chain supplies witnesses for formulas involving newly added constants, and a consistent decision extension makes sentence membership behave like truth. Closed terms provide objects; provable equality identifies their representatives. The truth lemma then turns the resulting quotient into a genuine nonempty model of the original theory. This proves strong sentence completeness, with a countable model bound for countable signatures and an explicitly stated choice-based generalisation. The next chapter uses finite proof support to obtain compactness and then controls model sizes through elementary substructures and extensions.
`;export{e as default};