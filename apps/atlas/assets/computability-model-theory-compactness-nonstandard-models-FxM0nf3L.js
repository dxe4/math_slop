var e=`---
id: deep-dive-computability-model-theory-compactness-nonstandard-models
title: "Compactness and non-standard models"
license: CC BY-SA 4.0
---

# Compactness and non-standard models

Every finite list of requirements may be satisfiable even when no single familiar structure can satisfy them all. First-order compactness says that a model of the whole list nevertheless exists, possibly with unfamiliar elements. A new constant required to exceed every standard numeral gives a concrete application in arithmetic.

This **Years 2–3 (L3)** article assumes first-order sentences, structures and satisfaction, developed in [Predicates, Quantifiers and Structures](/books/introduction-to-logic-and-set-theory/predicates-quantifiers-structures/). The [First-Order Completeness chapter](/books/introduction-to-logic-and-set-theory/first-order-completeness/) supplies the theorem used to derive compactness. We will keep the distinction between a model of finitely many requirements and a model of the entire theory explicit. The later [Model Theory chapter](/books/logic-foundations-proof-reference/model-theory/) supplies the longer logic continuation.

## Compactness concerns sets of sentences

A **theory** here is a set $T$ of first-order sentences in a fixed language. A model of $T$ is a nonempty structure in which every sentence of $T$ is true. The theory is **finitely satisfiable** if every finite subset has a model. Different finite subsets are allowed to use different models.

**First-order compactness theorem.** A theory has a model if and only if every finite subset has a model.

One direction is immediate: a model satisfying all the sentences also satisfies any subcollection. For the other direction, assume every finite subset is satisfiable but $T$ has no model. By first-order completeness, unsatisfiability yields a formal derivation of contradiction from $T$. A formal derivation is finite and can use only finitely many sentences of $T$ as premises. Call that finite set $T_0$.

By soundness, a model of $T_0$ could not satisfy a derivation of contradiction. Thus $T_0$ has no model, contradicting finite satisfiability. This proves compactness from the named soundness and completeness inputs, without reproducing the full completeness construction.

Finiteness of formal proofs is the decisive step. It does not bound the size of the resulting model. Nor does compactness promise that the model is one of the structures used for the finite fragments.

## Worked example: an arithmetic element beyond every numeral

Use the arithmetic language with zero, successor, addition, multiplication and order. A standard numeral $\\bar n$ is the finite term obtained by applying successor $n$ times to zero. Let $T$ be the set of **all** first-order arithmetic sentences true in the ordinary natural numbers $\\mathbb N$.

Add a new constant symbol $c$ and form the expanded theory

$$T^*=T\\ \\cup\\ \\{c>\\bar n:n=0,1,2,\\ldots\\}.$$

Take any finite subset of $T^*$. Its arithmetic sentences are true in $\\mathbb N$. It mentions only finitely many of the extra inequalities, so choose a natural number larger than every numeral occurring in those inequalities and interpret $c$ by that number. If no extra inequality occurs, any natural value will do. This gives a model of the entire finite subset.

Compactness now supplies a model $M$ of $T^*$. In it, $c^M$ is larger than $\\bar n^M$ for every standard natural number $n$. But it cannot be a standard numeral itself: if $c^M=\\bar m^M$, the theory's inequality $c>\\bar m$ would assert $\\bar m^M>\\bar m^M$, contradicting the true arithmetic order axioms included in $T$.

The arithmetic reduct of $M$, obtained by forgetting the extra name $c$, is therefore not isomorphic to $\\mathbb N$. Any arithmetic isomorphism preserves zero and successor, hence preserves every numeral. If its image were the standard natural numbers, the image of $c^M$ would equal some ordinary integer $m$, while the inequality $c>\\bar m$ would force $m>m$.

Nevertheless that reduct agrees with $\\mathbb N$ on every first-order sentence in the original arithmetic language, because all those true sentences were included in $T$. Such a model is **non-standard**: the agreement concerns first-order sentences, not a claim that every element is represented by a standard numeral.

## The same witness is essential

The extra constant names one element simultaneously in all the inequalities. Replacing them by the separate sentences $\\exists x\\,(x>\\bar n)$ would not force a non-standard element. Ordinary $\\mathbb N$ already satisfies every one, using a different witness for each $n$.

Likewise, writing one infinite disjunction saying that every element equals zero, or one, or two, and so on, is not a first-order sentence in the usual syntax: formulas are finite strings. The familiar description “every natural number has some standard numeral” does not become one ordinary first-order axiom by writing an ellipsis.

This is a distinction between external descriptions of a structure and the formulas available inside its language. The non-standard model is not obtained by assigning one impossibly large ordinary natural number to $c$. The compactness conclusion supplies a different structure in which all the requirements can coexist.

## Finite fragments do not share a fixed interpretation

In the finite-fragment argument, the chosen value for $c$ can depend on which finitely many inequalities occur. As the fragment grows, we choose a larger ordinary value. No single fixed natural value works for the full theory.

That does not invalidate finite satisfiability: its quantifiers say that for each finite fragment there exists a model. They do not demand one standard expansion that already works for every fragment. Compactness turns the former condition into existence of some global model, without preserving the extra restriction that it be standard.

The [Models, Compactness, and the Limits of Finite Pictures reading](/articles/model-theory-finite-infinite/) explores further applications. [Gödel Incompleteness](/articles/godel-incompleteness/) is a later companion: its hypotheses concern effective arithmetic theories, while the theory of all true arithmetic used here was chosen for a model-theoretic existence argument.

## Exercises

### Exercise 1
<a id="deep-dive-computability-model-theory-compactness-nonstandard-models-ex-1"></a>
Explain why no first-order theory in the language of equality can have as its models exactly all nonempty finite sets. You may use compactness and sentences saying that there are at least $n$ distinct elements.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Assume the proposed theory exists and add all the lower bounds on domain size.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Every finite subset of the enlarged theory can be satisfied by a sufficiently large finite set.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Suppose $T$ has exactly those finite models. Add, for every positive integer $n$, the first-order sentence asserting at least $n$ distinct elements. A finite fragment has only finitely many such size requirements; choose a finite set larger than their maximum. By assumption it satisfies all of $T$ and hence the fragment. Compactness gives a model of the enlarged theory. It satisfies $T$ but has at least $n$ elements for every $n$, so is infinite, contradicting the proposed characterisation.
</details>

### Exercise 2
<a id="deep-dive-computability-model-theory-compactness-nonstandard-models-ex-2"></a>
Why can a fixed ordinary value $m$ for $c$ not satisfy the whole expanded arithmetic theory, even though every finite fragment has an ordinary interpretation for $c$? Identify the inequality that fails.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The full theory contains an inequality for every standard numeral, including the chosen value itself.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Finite satisfiability allows the interpretation to depend on the fragment.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The full theory includes $c>\\bar m$. Interpreting $c$ as the ordinary natural number $m$ makes that sentence $m>m$, which is false. A finite fragment only restricts $c$ above finitely many named numbers, so another, larger value can satisfy it. The values may differ across fragments; compactness does not claim that one fixed standard choice will satisfy them all.
</details>

## Continue into the book

Compactness derives a global model from finite satisfiability, using the finiteness of proofs together with soundness and completeness. The arithmetic construction requires one named element beyond every standard numeral and yields a different model, not a new ordinary integer. Continue with [Compactness, Löwenheim–Skolem and Applications](/books/introduction-to-logic-and-set-theory/compactness-lowenheim-skolem/) and [Model Theory](/books/logic-foundations-proof-reference/model-theory/) for the longer route.
`;export{e as default};