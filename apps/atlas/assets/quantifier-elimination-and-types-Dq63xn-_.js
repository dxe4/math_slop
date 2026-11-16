var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: quantifier-elimination-and-types
title: "Quantifier Elimination and Types"
level: graduate
license: CC BY-SA 4.0
---

# Quantifier Elimination and Types

## When a quantified question has a finite order description

A formula can ask whether some object exists between several parameters, avoids specified points and meets a Boolean combination of comparisons. In a dense order without endpoints, existence depends only on the relative positions of those finitely many parameters. Quantifier elimination makes that observation into a theorem about every formula. Types then collect all formula-level information about an object, including infinitely many comparisons that no single finite parameter list can express at once.

The required preparation is the L3 [Introduction to Logic and Set Theory](/books/library-book-introduction-to-logic-and-set-theory/) and this book's model-theory chapter. We use compactness and elementary diagrams as already proved. The main language here is exactly $L=\\{<\\}$ with logical equality. It has no arithmetic, named function symbols or endpoint constants. Expanding a signature changes a quantifier-elimination question, so an order result must not be silently applied to ordered fields or arithmetic.

## Definitions and the reduction to one existential

**Definition 3.1 (Quantifier elimination).** A theory $T$ eliminates quantifiers if every formula $\\varphi(\\vec y)$ is equivalent modulo $T$ to a quantifier-free formula $\\theta(\\vec y)$ with no extra free variables. Semantic equivalence in every model can be converted to $T\\vdash\\forall\\vec y(\\varphi\\leftrightarrow\\theta)$ by first-order completeness. Truth and falsehood are allowed as logical abbreviations.

It suffices to eliminate $\\exists x$ from quantifier-free formulas. Induct on an arbitrary formula: atomic formulas are already quantifier free, Boolean combinations preserve quantifier-free form, and an existential over an already simplified body is the assumed one-variable step. Universal quantifiers are handled by $\\forall xA\\equiv\\neg\\exists x\\neg A$. Bound variables are first renamed away from free parameters so every substitution remains capture avoiding.

**Definition 3.2 (DLO).** Dense linear orders without endpoints satisfy strict-order irreflexivity and transitivity, trichotomy for every pair, density between any two distinct ordered elements, and existence of a smaller and a larger element for every element. Domains are nonempty. Rational and real order are examples.

From these axioms every nonempty open interval has arbitrarily many distinct elements: after choosing one point, density supplies another between it and an endpoint, and finite induction continues. A one-sided ray has the same property using the no-endpoint axiom followed by density. The whole domain has arbitrarily many elements using repeated larger choices. These are finite constructions and are enough to avoid any specified finite list of forbidden points.

## A full elimination proof for DLO

**Lemma 3.3 (Finite bounds).** Let $l_1,\\ldots,l_r$ and $u_1,\\ldots,u_s$ be finite parameter lists, and let $e_1,\\ldots,e_m$ be finitely many excluded points. In a DLO there exists $x$ satisfying all $l_i<x$, all $x<u_j$, and all $x\\ne e_k$ exactly when every $l_i<u_j$ holds. An empty conjunction of cross-comparisons is true.

*Proof.* Necessity follows from transitivity through any witness. For sufficiency, if both bound lists are nonempty, choose their maximum lower bound $l$ and minimum upper bound $u$, which exist for finite lists in a linear order. The cross-comparisons give $l<u$. The open interval contains at least $m+1$ distinct points, so at least one is absent from the excluded list of at most $m$ points. It satisfies every original bound. With only one kind of bound, use its extremal point and the corresponding unbounded ray; with neither kind, use the whole infinite domain. The same finite avoidance argument works in each case. ∎

**Theorem 3.4 (DLO quantifier elimination).** DLO eliminates quantifiers in the order-only language.

*Proof.* Put a quantifier-free matrix into finite disjunctive normal form using classical propositional equivalences. Existential quantification distributes over that finite disjunction, so consider a conjunction of literals. Trichotomy rewrites $\\neg(u<v)$ as $v<u\\lor u=v$. Equality negations may be retained as disequalities. Redistribute to obtain finitely many conjunctions of strict comparisons, equalities and disequalities.

Separate the literals not containing the variable $x$; they remain as parameter conditions. Terms in this language are just variables. Remove occurrences $x=x$ as true and reject any conjunction containing $x<x$ or $x\\ne x$. If an equality $x=t$ or $t=x$ remains with $t$ a parameter variable, substitute $t$ for $x$ throughout the conjunction. Existence is then exactly the resulting quantifier-free parameter condition: necessity follows from equality, and sufficiency uses $x=t$ as witness. Several such equalities are enforced by that same substitution rather than assumed compatible.

Otherwise all remaining $x$-literals are lower bounds, upper bounds or exclusions of finitely many parameter points. Apply Lemma 3.3 and replace them by all cross-comparisons between their lower and upper bounds. Keep the other parameter literals. This gives a quantifier-free condition exactly equivalent to the existential conjunction. The false and empty conjunction cases are already covered by the conventions and the nonempty-domain axioms. Reassemble the finite disjunction. The one-existential reduction then proves elimination for every formula. ∎

The proof supplies a finite algorithm on formulas, though converting to disjunctive normal form can greatly increase size. It does not assert that the output formula is unique or shortest. Named parameters may be present, because they are precisely the free variables retained by the construction.

**Corollary 3.5 (Completeness and elementary order inclusions).** DLO is complete. An order-preserving inclusion between two DLO models is elementary.

*Proof.* In the language without constants, a quantifier-free sentence has no nonlogical atomic sentence available: order and equality need variable terms. After elimination it therefore has one of the two constant truth values. The rational order is a model, so a sentence and its negation cannot both follow; one does. For an inclusion, every quantifier-free parameter comparison agrees because order and identity restrict correctly. Elimination transfers that agreement to every formula, proving elementarity. ∎

Completeness concerns agreement on sentences, not uniqueness of models in every cardinality. The Löwenheim–Skolem theorem already supplies DLO models of different infinite sizes. A countable uniqueness statement can nevertheless be proved separately.

**Theorem 3.6 (Countable back-and-forth).** Any two countably infinite DLO models are isomorphic as orders.

*Proof.* Enumerate both domains. Start with the empty finite order-preserving partial bijection. At an even stage, take the first unused element of the first domain. Its position relative to finitely many matched elements determines an open interval or ray in the second. Density and absence of endpoints provide a point there not already used; extend the map. At an odd stage do the same with the first unused element of the second domain and the inverse map. Every finite extension preserves strict order. The union is a bijection because both enumerations are eventually covered, and preserves order in both directions because any pair appears at a finite stage. ∎

## Types and their consistency condition

**Definition 3.7 (Complete type over parameters).** Fix $M$ and $A\\subseteq M$. A complete $n$-type over $A$ is a set $p(\\vec x)$ of formulas with parameters from $A$ consistent with the full theory of $(M,a)_{a\\in A}$, deciding every such formula by containing exactly one of it and its negation. It is deductively closed modulo that parameter theory. A tuple realises the type when it satisfies every member. A partial type omits the decision requirement but retains consistency.

Consistency with the parameter theory is essential. An arbitrary list of formulas true in different unrelated structures need not describe one possible tuple over this fixed parameter structure. Finitely many members of a consistent type have a common witness in $M$: if their conjunction had none there, the negation of its existential closure would belong to the full parameter theory, contradicting consistency. This finite satisfiability does not say that one witness for all members already lies in $M$.

**Theorem 3.8 (Realisation in an elementary extension).** Every partial type over $A\\subseteq M$ is realised in some elementary extension of $M$.

*Proof.* Add constants $\\vec c$ for the prospective tuple and take the full elementary diagram of $M$ together with all instances $\\varphi(\\vec c)$ for $\\varphi\\in p$. Every finite subset of the type has a witness tuple in $M$ by the preceding argument. Interpret the new constants by that tuple; all selected diagram sentences remain true. Thus the enlarged theory is finitely satisfiable. Compactness gives a model. Its diagram map is elementary, and the tuple of new constant interpretations satisfies all of $p$. Identify the image of $M$ with the original structure. ∎

The theorem is an existence statement. It does not promise a computable tuple or a realisation in a preselected elementary extension. A model is saturated only relative to a specified bound on parameter-set sizes and types; no saturation assertion follows merely from countability or quantifier elimination.

## Order cuts describe one-types

In a DLO, quantifier elimination makes a complete one-type over $A$ determined by the choices among $x<a$, $x=a$ and $a<x$ for each $a\\in A$. If it contains $x=a$, equality and the existing order determine all its other comparisons. Otherwise partition $A$ into $L=\\{a:a<x\\in p\\}$ and $U=\\{a:x<a\\in p\\}$. Every member of $L$ is less than every member of $U$; a contrary finite pair would contradict consistency.

Conversely any such partition with $L<U$ gives a consistent set of strict comparisons. Every finite sublist has lower and upper bounds that satisfy the cross-comparisons of Lemma 3.3, hence a witness. Compactness supplies the whole cut in an elementary extension. Quantifier elimination then decides every formula from the comparisons, so the resulting type is complete. End cuts with $L$ or $U$ empty are permitted. A cut immediately above or below a parameter is different from equality to that parameter.

**Definition 3.9 (Isolation).** A complete type is isolated if a single consistent formula in it implies every other member modulo the parameter theory. The formula $x=a$ isolates a realised order type. Most infinite cut descriptions do not reduce to one formula over their entire parameter set.

## Worked example 1: eliminate an avoided witness

Consider $\\exists x(y<x\\land x<z\\land x\\ne w)$. Lemma 3.3 gives the equivalent formula $y<z$. If the existential holds, transitivity supplies that inequality. Conversely, between two ordered endpoints choose two distinct points; at most one equals $w$, so the other is a witness. If $y=z$ or $z<y$, no witness can exist. This gives all cases, including when the excluded point is itself an endpoint.

## Worked example 2: the irrational cut over the rationals

In the real order, $\\sqrt2$ determines the type containing $q<x$ for every rational $q<\\sqrt2$ and $x<q$ for every rational $q>\\sqrt2$. Any finite subcollection is satisfied by a rational in the resulting nonempty interval, so the type is finitely satisfiable in the rational order. No rational realises the entire type: for a rational candidate different from $\\sqrt2$, another rational lies strictly between it and $\\sqrt2$ and gives a comparison it violates.

The type is not isolated. Any candidate isolating formula uses only finitely many rational parameters and, by elimination, is a Boolean combination of comparisons with them. If true at $\\sqrt2$, it has the same truth at every point in some sufficiently small interval around $\\sqrt2$ avoiding those parameters. That interval contains a rational, whose complete cut is different. The formula therefore cannot imply all comparisons of the irrational type.

## Worked example 3: an elementary inclusion with a signature boundary

The rational and real orders both satisfy DLO, and their order inclusion preserves every atomic comparison of rational parameters. Corollary 3.5 therefore gives $(\\mathbb Q,<)\\preceq(\\mathbb R,<)$. Now expand to ordered fields with addition and multiplication. The formula $\\exists x(x\\cdot x=1+1)$ is true in the reals and false in the rationals. Thus the field inclusion is not elementary. The order-only elimination theorem did not supply an arithmetic elimination theorem; the signature is a hypothesis, not a cosmetic label.

## Exercises

### Exercise 3.1
<a id="quantifier-elimination-and-types-ex-1"></a>

Eliminate $\\exists x(a<x\\land b<x\\land x<c)$ modulo DLO.

<details>
<summary>Hint 1</summary>

Both lower bounds must lie below the upper bound.

</details>
<details>
<summary>Hint 2</summary>

Use the maximum of the two lower parameters.

</details>
<details>
<summary>Solution</summary>

The equivalent condition is $a<c\\land b<c$. Necessity is transitivity. If both hold, the larger of $a,b$ lies below $c$, and density supplies an element between them. It is above both lower parameters and below $c$, proving sufficiency even if $a=b$.

</details>

### Exercise 3.2
<a id="quantifier-elimination-and-types-ex-2"></a>

Eliminate $\\exists x(x=a\\land b<x\\land x\\ne c)$.

<details>
<summary>Hint 1</summary>

The equality already fixes the possible witness.

</details>
<details>
<summary>Hint 2</summary>

Substitute that parameter in every remaining condition.

</details>
<details>
<summary>Solution</summary>

The result is $b<a\\land a\\ne c$. Any witness must equal $a$, so those conditions are necessary. If they hold, choosing $x=a$ satisfies the conjunction. No density assumption is needed in this equality case, illustrating why it is treated before the free interval case.

</details>

### Exercise 3.3
<a id="quantifier-elimination-and-types-ex-3"></a>

Eliminate $\\exists x(c<x\\land x<d\\land(x<a\\lor b<x))$.

<details>
<summary>Hint 1</summary>

Distribute the existential across the two disjunctive cases.

</details>
<details>
<summary>Hint 2</summary>

List lower and upper bounds separately in each case.

</details>
<details>
<summary>Solution</summary>

The first case has lower bound $c$ and upper bounds $d,a$, giving $c<d\\land c<a$. The second has lower bounds $c,b$ and upper bound $d$, giving $c<d\\land b<d$. Their disjunction is the required formula. Necessity and sufficiency in each case follow from Lemma 3.3.

</details>

### Exercise 3.4
<a id="quantifier-elimination-and-types-ex-4"></a>

Why is absence of endpoints required by the particular elimination procedure for DLO?

<details>
<summary>Hint 1</summary>

Consider an existential with only a lower bound.

</details>
<details>
<summary>Hint 2</summary>

At a greatest element that existential would fail.

</details>
<details>
<summary>Solution</summary>

The procedure turns $\\exists x(a<x)$ into true because there are no upper cross-bounds. In an order with a greatest element, assigning $a$ that endpoint would make it false. Therefore the no-endpoint hypothesis is needed for this uniform rule. Other theories with named endpoints can have their own elimination procedures, with corresponding extra conditions.

</details>

### Exercise 3.5
<a id="quantifier-elimination-and-types-ex-5"></a>

Show that the type “above every rational” is consistent over the rational order but not realised there.

<details>
<summary>Hint 1</summary>

A finite list of lower bounds has a largest member.

</details>
<details>
<summary>Hint 2</summary>

Any rational candidate has another rational above it.

</details>
<details>
<summary>Solution</summary>

Every finite subset is realised by a rational larger than its largest listed bound. Compactness with the elementary diagram gives consistency and a realisation in an elementary extension. A rational candidate $r$ fails the type's condition $r+1<x$, since $r+1>r$. Thus none of the original rationals realises it.

</details>

### Exercise 3.6
<a id="quantifier-elimination-and-types-ex-6"></a>

Describe the order type immediately above zero over $\\mathbb Q$, and show that it differs from the type of zero.

<details>
<summary>Hint 1</summary>

Use a strict lower comparison with zero.

</details>
<details>
<summary>Hint 2</summary>

Require the new point to lie below every positive rational.

</details>
<details>
<summary>Solution</summary>

Take $0<x$ and $x<q$ for every positive rational $q$, together with all comparisons forced by order. Each finite subset has a small positive rational witness, so it is consistent. It is distinct from the type of zero because it contains $0<x$, while the latter contains $x=0$. No rational realises it: a positive candidate $r$ violates $x<r/2$.

</details>

### Exercise 3.7
<a id="quantifier-elimination-and-types-ex-7"></a>

Prove that $x=a$ isolates the complete type of a named element $a$.

<details>
<summary>Hint 1</summary>

Equality substitution applies to every parameter formula.

</details>
<details>
<summary>Hint 2</summary>

The full parameter theory already decides the sentence obtained at $a$.

</details>
<details>
<summary>Solution</summary>

For any formula $\\varphi(x)$ over the parameter set, equality gives $x=a\\to(\\varphi(x)\\leftrightarrow\\varphi(a))$. The full parameter theory contains exactly the true choice of $\\varphi(a)$ or its negation. Hence $x=a$ implies exactly the member of the realised complete type for every formula. It is consistent and therefore isolates that type.

</details>

### Exercise 3.8
<a id="quantifier-elimination-and-types-ex-8"></a>

Why does quantifier elimination imply that an order inclusion between DLO models preserves formulas with parameters, rather than only sentences?

<details>
<summary>Hint 1</summary>

Elimination retains the same free variables.

</details>
<details>
<summary>Hint 2</summary>

Atomic comparisons of a tuple from the smaller order agree in both.

</details>
<details>
<summary>Solution</summary>

Replace a formula with its quantifier-free equivalent modulo DLO. At a tuple from the smaller model, each equality and order atom agrees under the inclusion, and therefore each Boolean combination does. Both models satisfy the equivalence, so the original formula agrees too. This is precisely elementarity with parameters.

</details>

### Exercise 3.9
<a id="quantifier-elimination-and-types-ex-9"></a>

Show that a one-variable definable subset of a DLO is a finite union of points and intervals, using finitely many parameters.

<details>
<summary>Hint 1</summary>

Eliminate quantifiers in its defining formula.

</details>
<details>
<summary>Hint 2</summary>

The finitely many parameter positions partition the order into finitely many cells.

</details>
<details>
<summary>Solution</summary>

After elimination the formula is a Boolean combination of comparisons of $x$ with finitely many parameters and of fixed parameter comparisons. Sort the distinct parameters. Their singleton points, the intervals between consecutive ones and the two outer rays form finitely many cells. All atomic comparisons, hence the formula, are constant on each cell. Select the cells where it is true, giving the stated finite union, including empty or unbounded cases.

</details>

### Exercise 3.10
<a id="quantifier-elimination-and-types-ex-10"></a>

Does realisation of every finite subset of a type in $M$ imply realisation of the whole type in $M$? Give a counterexample and the correct extension theorem.

<details>
<summary>Hint 1</summary>

Use a cut with no rational point.

</details>
<details>
<summary>Hint 2</summary>

Compactness produces a suitable elementary extension, not necessarily a point of the original model.

</details>
<details>
<summary>Solution</summary>

The irrational cut over $\\mathbb Q$ in Worked example 2 has a rational witness for every finite subcollection but no rational witness for all its comparisons. Theorem 3.8 supplies a realisation in an elementary extension, and the real order is one such extension for that cut. Requiring realisation already in $M$ is an additional saturation condition with a stated parameter bound.

</details>

## Sources

The proofs and exercises here are new CC BY-SA 4.0 Euler exposition. Primary companion references are David Marker's [Model Theory: An Introduction, author page](https://homepages.math.uic.edu/~marker/mt-intro.html) and the [Berkeley model-theory lecture collections of Thomas Scanlon](https://math.berkeley.edu/~scanlon/). The elimination proof is given explicitly for DLO; no unstated field-theory or general quantifier-elimination theorem is used. The introductory logic and compactness inputs are proved in Euler's linked L3 book.

## Summary

DLO eliminates quantifiers by solving finite equality, bound and exclusion conditions. This proves completeness and elementarity of order inclusions, while countable isomorphism requires its separate back-and-forth construction. Types package all parameter formulas, and compactness realises consistent packages in elementary extensions. In DLO, complete one-types are determined by points or cuts; finite definability and full cut information remain different. The next chapter makes the effectiveness of syntax and its arithmetic representation precise.
`;export{e as default};