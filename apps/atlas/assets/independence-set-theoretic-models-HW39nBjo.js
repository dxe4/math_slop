var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: independence-set-theoretic-models
title: "Independence and Models of Set Theory"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Independence and Models of Set Theory

Independence is a precise relation between a sentence and a specified theory. It is not a synonym for an unresolved problem, a philosophical disagreement or an inability to find a proof so far. A sentence independent of a consistent theory has neither a proof nor a refutation from those axioms. Establishing that fact requires mathematical evidence about proofs, models or relative consistency.

This chapter explains how to read that evidence. Its elementary logical implications and examples are proved. Its deep set-theoretic results, including Gödel's constructibility theorem and Cohen's independence theorems, are stated and cited rather than reconstructed. The small generic-real construction below illustrates one ingredient of forcing; it is not a proof of the forcing theorem, of preservation of ZFC, or of the failure of the continuum hypothesis.

Our object theories are first-order ZF and ZFC, with the membership language and nonempty structures fixed earlier. We reason about them in an ambient classical metatheory. When we use general first-order completeness or Löwenheim–Skolem, we retain the ambient set-theoretic assumptions stated in those chapters. An application of Choice in that metatheory must not be confused with whether Choice holds inside an object model of ZF.

## Four assertions that must be distinguished

For a theory $T$ and a sentence $\\varphi$, write $T\\vdash\\varphi$ when there is a finite formal derivation. Syntactic consistency means that no contradiction has such a derivation. Semantic satisfiability means there is a nonempty structure satisfying every axiom. First-order soundness and completeness connect these notions for our calculus, but they remain different definitions.

A sentence is independent of $T$ when $T\\nvdash\\varphi$ and $T\\nvdash\\neg\\varphi$. A relative-consistency theorem has the form “if $T$ is consistent, then $U$ is consistent”. It transfers consistency; it does not prove the antecedent. An assertion of truth in an intended universe is yet another assertion. Without naming the universe and its interpretation, the word true can obscure exactly which claim has been established.

**Proposition 13.1 (Two extensions).** For a consistent classical first-order theory $T$, a sentence $\\varphi$ is independent of $T$ if and only if both $T\\cup\\{\\varphi\\}$ and $T\\cup\\{\\neg\\varphi\\}$ are consistent.

*Proof.* If $T\\cup\\{\\varphi\\}$ is inconsistent, a finite derivation of contradiction uses that extra assumption, and the deduction/discharge rules give $T\\vdash\\neg\\varphi$. If $T\\cup\\{\\neg\\varphi\\}$ is inconsistent, classical reductio gives $T\\vdash\\varphi$. Thus independence makes both extensions consistent. Conversely, if $T$ proved either sign, adjoining its opposite would produce a contradiction, so consistency of both extensions excludes both proofs. ∎

By completeness the two consistent extensions have models. Their models need not be transitive, well-founded or standard in any intended arithmetic part. The existence of an arbitrary first-order model of set theory is much weaker than existence of a countable transitive model. Adding those adjectives without justification changes the mathematical strength of a claim.

**Worked example 13.2 (A small independence proof).** In the language with equality and one unary predicate $P$, let $T$ consist only of $\\exists x\\,P(x)$. The sentence $\\forall x\\,P(x)$ is independent of $T$. A one-element structure with $P$ true of its sole element satisfies both. A two-element structure with $P$ true of exactly one element satisfies $T$ and the negation of the sentence. Soundness therefore rules out either sign being a theorem of $T$. This is complete model evidence, not an assertion that a large search for proofs happened to fail. The argument also depends on not adding an axiom that fixes the domain to one element.

## Membership inside a model

A model of set theory is a structure $M=(D,E)$ with nonempty domain $D$ and a binary relation $E$ interpreting membership. If $a,b\\in D$, the assertion $M\\models a\\in b$ means $aEb$. External membership of the representing objects is a different relation. Even writing an element as a familiar set does not force $E$ to be actual membership.

A transitive set model is a special case: its domain is a transitive set and $E$ is actual membership restricted to it. Then members of any internal set remain in the domain, and elementary bounded membership statements have a particularly direct interpretation. We do not assume that every model can be replaced by one of this form. A collapse to a transitive model requires external well-foundedness and extensionality, hypotheses not supplied merely by first-order consistency.

An internal function is an element of the model that the model regards as a function, using its own pairs, domains and membership. For an arbitrary model, translating that assertion externally requires interpreting those codes through $E$. In a transitive model, genuine internal functions behave as ordinary functions on their internal domains, but the collection of internal functions may still omit many external functions.

**Worked example 13.3 (Internal uncountability in a countable model).** Suppose $M$ is an externally countable model of ZFC. It has an element $r$ that it regards as its real-number set, and it satisfies that no internal map from its natural numbers onto $r$ exists. Externally the domain elements that $M$ regards as members of $r$ form a subset of the countable domain, so an external observer can list them. That listing need not be represented by any function in $M$. Thus the two assertions concern different collections of maps. Cantor's theorem holds inside $M$ and forbids an internal enumeration; it does not assert that every external enumeration must itself be a member of $M$.

The same issue affects power sets. If $M$ is transitive and $a\\in M$, its internal power set consists of the subsets of $a$ that are represented in $M$. It can be smaller than the full external $\\mathcal P(a)$. It still satisfies the Power Set axiom, whose quantifiers range over $M$. For nontransitive models even this description must be translated through the interpreted membership relation rather than read literally.

Foundation similarly prohibits internally represented descending membership sequences. An external sequence through a nonstandard model may fail to have an internal representing function. Consequently an arbitrary countable model obtained by completeness is not automatically externally well-founded. This is a model-theoretic qualification, not permission to ignore Foundation inside the theory.

## The continuum hypothesis and its base theory

In ZFC every set is well-orderable, so power-set sizes have initial-ordinal representatives. The continuum hypothesis CH states
$$2^{\\aleph_0}=\\aleph_1.$$
Equivalently there is no cardinal strictly between the natural numbers and the real numbers. Here the equality between real-number cardinality and the power-set cardinality uses the standard coding of reals and binary sequences; endpoint ambiguities of expansions are dealt with in that coding, not by pretending every decimal expansion is unique.

The generalised continuum hypothesis GCH asserts $2^\\kappa=\\kappa^+$ for every infinite cardinal $\\kappa$. The first instance is CH. Without Choice, several familiar cardinal reformulations require care, so claims about CH in this chapter name ZFC when using its ordinary cardinal form.

**Deep theorem 13.4 (Gödel, cited).** If ZF is consistent, then ZF together with AC and GCH is consistent. In particular, consistency of ZFC implies consistency of ZFC plus CH.

The method is the constructible universe $L$, formed by iterating definability through ordinal stages. It produces an inner-model interpretation satisfying the stronger assertions. Constructibility is not obtained by taking every subset at each stage; its restricted definability operation is the source of its special properties. Proving that the resulting class satisfies the axioms and GCH is substantial work and is not attempted here.

**Deep theorem 13.5 (Cohen, cited).** If ZFC is consistent, then ZFC plus $\\neg\\mathrm{CH}$ is consistent. Separately, if ZF is consistent, then ZF plus $\\neg\\mathrm{AC}$ is consistent.

The two conclusions require different constructions; adding a Cohen real is not by itself an argument for the failure of Choice. Combining the CH conclusions with Proposition 13.1 shows that CH is independent of ZFC, provided ZFC is consistent. Combining the AC conclusions shows that AC is independent of ZF, provided ZF is consistent. The consistency qualifications cannot be removed: an inconsistent classical theory proves both signs of every sentence.

These are relative results. They do not supply an unconditional proof that ZF or ZFC is consistent. Nor do they settle which additional axioms one ought to adopt. A proposed stronger axiom must be assessed for its own meaning, consequences and consistency strength. An implication from such an axiom to CH is not by itself a proof of independence over the weaker base.

## A small generic-real argument, with its assumptions exposed

For an illustration assume, explicitly and additionally, that $M$ is a countable transitive model of a sufficient set theory, for instance ZFC. This is a hypothesis of the illustration, not something deduced here from mere consistency of ZFC. Let $\\mathbb P$ be the finite partial functions from $\\omega$ to $\\{0,1\\}$, ordered so that $q\\le p$ means $q$ extends $p$. Stronger conditions carry more information.

A subset $D\\subseteq\\mathbb P$ is dense if every condition has a stronger condition in $D$. A filter in this convention is directed toward stronger conditions and closed toward weaker ones. It is generic over $M$ when it meets every dense subset of $\\mathbb P$ belonging to $M$. It is not required to meet every externally available dense set.

Because $M$ is externally countable, externally enumerate its dense subsets as $D_0,D_1,\\ldots$, allowing repetitions. Build a descending sequence of conditions, choosing $p_{n+1}\\le p_n$ in $D_n$. Density guarantees the next step. An external fixed enumeration of the countable set $\\mathbb P$ lets us choose its first suitable condition, so this illustration does not require a mysterious simultaneous internal choice. Let $G=\\{q:\\exists n\\ p_n\\le q\\}$. Any two members have a common stronger $p_k$, and upward closure is built into the definition; hence it is a filter meeting every listed dense set.

For each $k$, the set of conditions whose domain contains $k$ is dense and belongs to $M$. Thus $g=\\bigcup_n p_n$ is a total binary function. For each binary function $r\\in M$, let
$$D_r=\\{p:\\exists k\\in\\operatorname{dom}(p)\\ p(k)\\ne r(k)\\}.$$
It is dense: given a finite condition, choose an unused coordinate and put the opposite of $r$ there. The set is definable in $M$ from $r$, hence belongs to $M$. Genericity makes $g$ disagree with each $r\\in M$ at some coordinate. Therefore $g\\notin M$.

**Worked example 13.6 (What has actually been proved).** We have proved that under an explicit countable-transitive-model hypothesis there is an external binary sequence generic for the specified finite-condition forcing and absent from $M$. We have not yet constructed the interpretation of all forcing names, proved a truth lemma, verified that $M[G]$ satisfies Replacement, or computed its continuum cardinal. In particular one added real need not make CH false. Those missing assertions belong to the forcing theorem and cardinal-preservation analysis. Labelling the small dense-set argument a complete proof of Cohen's CH theorem would erase most of the required mathematics.

The countability condition also explains why we did not meet all external dense sets. For the constructed $g$, the external set of finite conditions disagreeing with $g$ is dense, but no condition in $G$ belongs to it. That dense set need not belong to $M$. Its existence is compatible with genericity over $M$ and demonstrates why the qualifier over $M$ is essential.

## Independence is not one universal status

A theorem proved from ZFC is different from a theorem requiring additional large-cardinal assumptions. A sentence independent of ZFC is different from a question whose consistency strength remains unresolved. A proposed philosophy of the set-theoretic universe is different from either. The preserved source chapter surveys forcing axioms, inner models, categorical logic and research directions; this introductory chapter does not promote those surveys into established proofs or collapse their statuses into one label.

When reading an independence statement, record its base theory, the precise sentence, the direction of each consistency implication and any model hypotheses used in its presentation. A countable transitive model can be a useful pedagogical setting for forcing, while the final relative-consistency theorem can be obtained by methods that do not assert existence of such a model from bare consistency. Distinguishing the illustrative setting from the final metatheorem prevents an accidental strengthening of the conclusion.

The book therefore ends with a disciplined boundary. Its logical toolkit can formulate and compare independence claims; it does not reproduce the full constructibility or forcing theory needed to prove the famous set-theoretic examples. Those are appropriate next subjects after the syntax, completeness, ordinals, choice and coding developed here.

## Exercises

<a id="independence-set-theoretic-models-ex1"></a>
**Exercise 13.1.** Prove that an inconsistent classical theory cannot have an independent sentence.

<details>
<summary>Hint 1</summary>

Use explosion from a contradiction.

</details>
<details>
<summary>Hint 2</summary>

Independence excludes a proof of either sign.

</details>
<details>
<summary>Solution</summary>

If $T$ derives a contradiction, the explosion rule derives any chosen sentence $\\varphi$. Applying the same rule to $\\neg\\varphi$ derives its negation as well. Hence neither nonprovability condition required for independence holds. A statement that CH is independent of ZFC must therefore retain a consistency qualification unless consistency is established elsewhere. This is not a minor philosophical reservation: it follows immediately from the classical calculus and is why relative-consistency theorems preserve the hypothesis rather than asserting an unqualified independence result.

</details>

<a id="independence-set-theoretic-models-ex2"></a>
**Exercise 13.2.** Give two models proving that $\\exists x\\exists y\\,x\\ne y$ is independent of the empty theory in the equality language with nonempty domains.

<details>
<summary>Hint 1</summary>

Use domains of sizes one and two.

</details>
<details>
<summary>Hint 2</summary>

Interpret equality as actual identity.

</details>
<details>
<summary>Solution</summary>

A one-element domain with actual equality satisfies the negation, because any two assigned elements are equal. A two-element domain satisfies the sentence by choosing its distinct elements. Both satisfy the empty set of nonlogical axioms and the nonempty-domain convention. If the sentence were derivable from the empty theory, soundness would force it in the singleton model; if its negation were derivable, soundness would force that in the two-element model. Thus neither sign is derivable. Explicit structures provide both required directions, rather than merely exhibiting one model in which one sign fails.

</details>

<a id="independence-set-theoretic-models-ex3"></a>
**Exercise 13.3.** Explain why an external enumeration of a model's real objects need not contradict its internal Cantor theorem.

<details>
<summary>Hint 1</summary>

Identify which functions the internal quantifier ranges over.

</details>
<details>
<summary>Hint 2</summary>

The enumeration may not have a representing element in the model.

</details>
<details>
<summary>Solution</summary>

The internal theorem excludes functions represented in the model that the model regards as surjections from its natural numbers onto its real-number set. An external enumeration is a function defined in the ambient metatheory on an externally described collection of domain elements. It need not be represented internally, and for an arbitrary nontransitive model its domain must also be distinguished from the internal natural-number object. Consequently it is not automatically one of the functions excluded by the internal assertion. The distinction is about interpretation and available functions, not about the model proving a false instance of Cantor's theorem under its own semantics.

</details>

<a id="independence-set-theoretic-models-ex4"></a>
**Exercise 13.4.** State exactly what follows from the two CH relative-consistency theorems under the assumption that ZFC is consistent.

<details>
<summary>Hint 1</summary>

Each theorem supplies consistency of one extension.

</details>
<details>
<summary>Hint 2</summary>

Use Proposition 13.1, or contradiction with a proof of the opposite sign.

</details>
<details>
<summary>Solution</summary>

Gödel's result gives consistency of ZFC plus CH, and Cohen's gives consistency of ZFC plus its negation. If ZFC proved CH, the second extension would be inconsistent. If ZFC proved its negation, the first would be inconsistent. Thus ZFC proves neither sign, so CH is independent of ZFC under the stated assumption. Completeness also supplies models of both extensions. The result does not prove ZFC consistent unconditionally, and it does not assert that these arbitrary models are externally well-founded or transitive. Those would be stronger conclusions requiring additional hypotheses.

</details>

<a id="independence-set-theoretic-models-ex5"></a>
**Exercise 13.5.** Show that for any binary sequence $r$, the set $D_r$ of finite conditions disagreeing with $r$ is dense.

<details>
<summary>Hint 1</summary>

A finite domain omits a natural number.

</details>
<details>
<summary>Hint 2</summary>

Extend at one omitted coordinate with the opposite value.

</details>
<details>
<summary>Solution</summary>

Given a finite partial binary function $p$, choose the least natural number $k$ outside its finite domain. Define $q=p\\cup\\{(k,1-r(k))\\}$. This is a finite partial function, it extends $p$, and it disagrees with $r$ at $k$. Hence $q\\le p$ and $q\\in D_r$, proving density. The least unused coordinate makes the choice explicit. If $r\\in M$ and $M$ is transitive as in the illustration, the definition is available internally and produces an internal dense set. For an external $r$, density remains true externally but membership of $D_r$ in $M$ need not follow.

</details>

<a id="independence-set-theoretic-models-ex6"></a>
**Exercise 13.6.** Verify that $G=\\{q:\\exists n\\ p_n\\le q\\}$ is a filter and meets every enumerated $D_n$.

<details>
<summary>Hint 1</summary>

Remember that smaller conditions in the order carry more information.

</details>
<details>
<summary>Hint 2</summary>

A sufficiently late $p_k$ extends both witnessing conditions.

</details>
<details>
<summary>Solution</summary>

The filter is nonempty because it contains every $p_n$. If $q\\in G$ and $q\\le r$, choose $n$ with $p_n\\le q$; transitivity gives $p_n\\le r$, so $r\\in G$, proving closure toward weaker conditions. If $q,r\\in G$, choose witnessing indices and take a later $k$; then $p_k\\le q,r$ and $p_k\\in G$, proving directedness. Finally the construction places $p_{n+1}$ in $D_n$, and this condition belongs to $G$. Thus every enumerated dense set is met. The direction of closure is tied to the stated convention that extension means stronger and is written with the smaller order symbol.

</details>

<a id="independence-set-theoretic-models-ex7"></a>
**Exercise 13.7.** Explain why adding a single new real does not itself prove that CH fails.

<details>
<summary>Hint 1</summary>

CH is a statement of cardinal equality, not a statement that every real was already present.

</details>
<details>
<summary>Hint 2</summary>

A strict inclusion of infinite sets need not change their cardinal size.

</details>
<details>
<summary>Solution</summary>

The dense-set argument proves the existence of a binary sequence absent from the ground model. CH instead compares the cardinality of all reals with the first uncountable cardinal in the resulting model. A proper enlargement of an infinite collection can retain the same cardinality, just as adjoining one point to $\\omega$ leaves it countable. Moreover the resulting model's cardinal structure requires its own analysis. Therefore a new real alone establishes neither a larger continuum cardinal nor the failure of CH. A full CH-independence argument uses appropriate forcing and preservation theorems, not just the observation that one new subset has appeared.

</details>

<a id="independence-set-theoretic-models-ex8"></a>
**Exercise 13.8.** Distinguish consistency of ZFC from existence of a countable transitive model of ZFC.

<details>
<summary>Hint 1</summary>

Completeness gives an arbitrary structure, not external well-foundedness.

</details>
<details>
<summary>Hint 2</summary>

The collapse to actual membership requires further hypotheses.

</details>
<details>
<summary>Solution</summary>

Consistency and first-order completeness give a nonempty structure satisfying ZFC; a countable-language model construction can make its domain externally countable. Its membership interpretation need not be actual membership, and it need not be externally well-founded. A countable transitive model is a special actual set with actual membership, transitive domain and all ZFC axioms true there. The additional transitivity and external well-foundedness do not follow from the arbitrary model supplied by completeness. Thus an illustration beginning with a countable transitive model must name that as an extra hypothesis rather than presenting it as an immediate consequence of consistency.

</details>

<a id="independence-set-theoretic-models-ex9"></a>
**Exercise 13.9.** A stronger axiom $A$ is reported to imply $\\neg\\varphi$. Does this prove $\\varphi$ independent of a weaker theory $T$? Give a model answer and the missing obligations.

<details>
<summary>Hint 1</summary>

The stronger theory might be inconsistent, or $T$ might already prove the same conclusion.

</details>
<details>
<summary>Hint 2</summary>

Independence needs both consistent extensions of the weaker base.

</details>
<details>
<summary>Solution</summary>

No. The implication from $A$ alone does not show that $T+A$ is consistent, and even a consistent such extension only supplies evidence against $T\\vdash\\varphi$. It does not rule out $T\\vdash\\neg\\varphi$. To establish independence under an appropriate consistency assumption, one must obtain consistency or models of both $T+\\varphi$ and $T+\\neg\\varphi$, or equivalent nonprovability arguments. A model answer identifies the exact base, states the assumed consistency direction and supplies both sides. Conflict with a stronger axiom or a current lack of a proof is insufficient evidence for the full claim.

</details>

<a id="independence-set-theoretic-models-ex10"></a>
**Exercise 13.10.** Explain why a filter generic over $M$ need not meet every externally dense set, using its own union $g$.

<details>
<summary>Hint 1</summary>

Consider the dense set of conditions disagreeing with $g$.

</details>
<details>
<summary>Hint 2</summary>

Every condition in the constructed filter is compatible with its union.

</details>
<details>
<summary>Solution</summary>

Externally define $D_g$ to be the finite conditions disagreeing with $g$ at some coordinate. It is dense by the same unused-coordinate argument as Exercise 13.5. Every condition in $G$ is a restriction of a later $p_n$ and hence agrees with $g$, so $G\\cap D_g$ is empty. This does not contradict genericity over $M$, which requires meeting only dense subsets belonging to $M$. Indeed if $D_g$ belonged to $M$, genericity would force an intersection, so it cannot be one of those internal dense sets. The example shows directly why dropping the qualifier over $M$ would make the definition impossible in this setting.

</details>

## Summary

Independence concerns two nonprovability assertions over one fixed theory. Relative consistency transfers a hypothesis and never proves its antecedent by itself. Models interpret membership and functions internally; external countability does not provide an internal enumeration. Gödel's constructibility and Cohen's forcing results establish the stated CH and AC independence conclusions under consistency assumptions. Their full proofs are cited deep inputs. A countable-transitive-model generic construction illustrates a new real, while leaving the forcing theorem and cardinal calculations as explicitly unproved subjects for further study.

## Sources and further reading

The preserved [Continuum Problem and Independence source](../logic-foundations-proof-reference/chapter-16.md) remains unchanged, including its specialist survey, examples and references. This introductory chapter develops only its independence and model-reading foundations. Primary sources are Kurt Gödel, [“The Consistency of the Axiom of Choice and of the Generalized Continuum-Hypothesis”](https://pmc.ncbi.nlm.nih.gov/articles/PMC1077160/), *PNAS* 24 (1938), 556–557, and Paul J. Cohen, [“The Independence of the Continuum Hypothesis”](https://doi.org/10.1073/pnas.50.6.1143), *PNAS* 50 (1963), 1143–1148, followed by Part II, *PNAS* 51 (1964), 105–110. These are historical research papers, not claims that this chapter reproduces their proofs. Enderton's *Elements of Set Theory* is the introductory benchmark for the surrounding set-theoretic language.
`;export{e as default};