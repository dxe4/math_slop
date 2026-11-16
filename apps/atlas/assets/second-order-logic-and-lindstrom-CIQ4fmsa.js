var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: second-order-logic-and-lindstrom
title: "Second-Order Logic and Lindström’s Theorem"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Second-Order Logic and Lindström’s Theorem

Quantifying over predicates changes more than the alphabet of a formula. We must say which predicates are available as witnesses. Under full second-order semantics every subset and relation on the object domain is available. Under general, or Henkin, semantics the available relations are supplied as part of a structure. The same written induction sentence can be categorical in the first interpretation and admit nonstandard number structures in the second. This chapter proves that difference directly, then places it beside Lindström’s characterization of first-order expressive power.

The local proofs establish categoricity of the full second-order successor axioms, failure of compactness, and failure of the countable-model property in a finite vocabulary. They also explain the translation of specified Henkin semantics into many-sorted first-order logic. Lindström’s theorem itself is a named deep input, with its regularity and model-theoretic hypotheses stated below. Its full abstract-model-theoretic proof is not being claimed as a consequence of the short examples.

## Syntax does not determine its own semantics

Besides object variables x,y, second-order syntax has relation variables of each positive arity. An atomic formula X(x) applies a unary relation variable; an n-ary variable applies to n object terms. Object and relation binders have their respective sorts, and substitution must avoid capture of both kinds of variable. Renaming an object binder does not license renaming a free relation parameter. We keep the ordinary object domain nonempty. Function symbols in the vocabulary denote total functions of their stated arities.

In **full semantics**, a unary relation quantifier ranges over the entire power set of the domain D, and an n-ary relation quantifier ranges over the entire power set of D to the nth Cartesian power. Satisfaction is defined recursively using those ranges. Thus an actual external subset of D may be used in an argument about a universal unary quantifier even when no formula in the structure defines it. This availability is a semantic hypothesis, not a hidden definability theorem. The power sets belong to our ambient set-theoretic metatheory; they are not themselves a collection of first-order object witnesses unless further coding axioms arrange that.

In **Henkin semantics**, specify nonempty families of available n-ary relations together with the object domain and application. One must additionally say which comprehension principles these families satisfy. Arbitrary families need not contain every definable relation, let alone every subset. A chosen comprehension schema asserts existence of the relation defined by each allowed formula, with the allowed object and relation parameters. There are several such choices. Merely calling a structure Henkin does not silently give it every possible choice schema or full power sets.

There is no dispute about the recursive truth clause once the quantifier ranges have been fixed. The important comparison is between different ranges. Classical laws still govern full second-order reasoning here; changing from first-order to second-order syntax is distinct from the intuitionistic change in Chapter 8.

## Full second-order induction characterizes the successor structure

Let P2 be the following finite collection of second-order sentences in the vocabulary containing one constant 0 and one unary function S:

1. S is injective.
2. No successor is 0.
3. Every unary relation containing 0 and closed under S contains every object.

The third item abbreviates the single formula

$$\\forall X\\bigl((X(0)\\land\\forall x(X(x)\\to X(Sx)))\\to\\forall xX(x)\\bigr).$$

**Theorem 12.1 (full categoricity).** Every full second-order model of P2 is isomorphic to the standard successor structure of the natural numbers.

*Proof.* In the external metatheory define h from the standard natural numbers into D by h(0)=0 and h(n+1)=S(h(n)). This ordinary finite recursion is not an assertion that the model has named all its elements. First h is injective. If h(m)=h(n) with m<n, cancel S repeatedly using injectivity until obtaining 0=S(h(n-m-1)), contradicting the no-predecessor axiom. The case n<m is symmetric; therefore equality forces m=n.

The actual subset H consisting of the values h(n), for standard n, contains 0 and is closed under S. Full unary quantification includes this subset, regardless of whether it is internally definable. Substitute H into the induction sentence. It yields H=D, so h is onto. By its definition h preserves 0 and S. It is consequently the required isomorphism. The standard natural-number structure satisfies all three axioms, since ordinary induction holds for every actual subset containing zero and closed under successor. Thus the class is nonempty as well as categorical. ∎

Adding binary functions for addition and multiplication with their usual recursion equations preserves categoricity. Under the isomorphism already obtained, induction on the external second argument proves that their values are the standard recursive sums and products: the zero equation gives the base and the successor equation uniquely determines the next value. This assertion concerns the specified recursive equations; it does not claim that arbitrary additional vocabulary receives a unique interpretation.

### Worked example 1: the subset that matters

In a nonstandard first-order model of arithmetic, the values of the external sequence 0,S0,SS0 and so on form a proper subset H. This subset is closed under successor and contains zero. There is no contradiction with the model’s first-order induction schema: H need not be defined by an allowed first-order formula with parameters. A full second-order model cannot omit H from its unary quantifier range, so its induction sentence forbids the extra objects. A Henkin model can omit H from its relation family, and its induction sentence then makes no assertion about that omitted relation. The categoricity proof identifies the exact point of difference instead of treating “induction” as one invariant axiom across all three settings.

## A direct failure of compactness

Extend the vocabulary by a constant c. Let T contain P2 and, for every standard natural number n, the sentence asserting that c differs from the numeral S to the n applied to 0. Every finite subset has a full model: use the standard natural numbers and choose c larger than the finitely many numerals excluded in that subset. This works even if the subset includes every axiom of P2. The choice is a single natural number after inspecting finitely many exclusions.

The whole T has no full model. By Theorem 12.1, every model of its P2 part is isomorphic to the standard successor structure. The interpretation of c must therefore equal one of its standard numerals. The corresponding inequality in T excludes exactly that value. This contradiction proves noncompactness. Notice that T is a countable theory in a finite signature; no infinitary formula or uncountable vocabulary caused the failure.

### Worked example 2: finite satisfiability is genuinely finite

If a finite fragment excludes numerals 0, 2 and 19, choose c=20 in the standard model. There is no requirement to choose the least unused numeral, and the example does not identify one value working for all fragments. As the finite fragment grows the chosen value may change. Compactness would promise one model satisfying all the conditions simultaneously; full categoricity proves that no such model exists. Taking the limit of the successive numbers is not a model construction, since an infinite ordinal is not a natural number and would violate the categorical successor axioms if added as another object.

A related consequence concerns proof systems. A sound finitary derivation of a contradiction uses only finitely many assumptions. If there were a sound and strongly complete finitary calculus for full second-order semantic consequence, the unsatisfiable T would have a finite contradiction proof; its finitely many used assumptions would then be unsatisfiable, contrary to their standard models. Thus no such strongly complete finitary calculus exists. This argument is about consequence from arbitrary theories. The stronger claim that full second-order validities have no effective complete enumeration requires an effectiveness argument; one is given below rather than inferred from noncompactness alone.

## A finite sentence with no countable full model

Failure of downward Löwenheim–Skolem can also be shown explicitly. Use unary predicates N and Y, a binary relation E, the constant 0 and function S. Write a finite second-order sentence Phi requiring:

- N and Y partition the object domain, and 0 belongs to N;
- S maps N into N, is injective on N, and never maps an element of N to 0;
- every subset containing 0 and closed under successor within N contains N;
- for every unary relation X contained in N, some y in Y satisfies, for every n in N, E(n,y) exactly when X(n).

All these clauses are finite formulas. In the relative induction clause one may restrict X to subsets of N; full quantification still supplies every such subset. Values of S on Y are irrelevant and may all be 0. The last clause does not require a unique code y for a subset. It requires at least one code for each subset; that already suffices.

The sentence has a full model. Take a disjoint tagged union of the natural numbers and their power set. Interpret N as the number part and Y as the subset part. Use the standard successor on N, send the other objects to 0, and interpret E by membership from the number part to the subset part. Relative induction holds by ordinary induction, and every subset of N has its tagged code. The object domain is a set, so this is an ordinary full second-order structure in the ambient metatheory.

Now suppose Phi had a countable full model. Its relative P2 axioms make its N part isomorphic to the standard natural numbers by the same image argument as Theorem 12.1. Let h enumerate that part by its standard numerals, and let e enumerate the whole object domain surjectively by the natural numbers. For each k form the subset F(k) of natural numbers consisting of those n with E(h(n),e(k)) when e(k) belongs to Y; use the empty subset otherwise. The last clause of Phi says that every subset of the N part has a code in Y. Full semantics supplies each such subset to the relation quantifier. Hence every subset of the standard naturals appears as some F(k).

This is impossible by Cantor’s diagonal argument: the set of k such that k does not belong to F(k) cannot equal F(j) at any index j, since membership of j would then be equivalent to its own negation. Thus Phi has no countable full model. We have proved failure of the countable-model property for one sentence in a finite vocabulary, not merely failed to find a countable presentation.

### Worked example 3: codes need not be distinct by decree

Could the preceding contradiction be avoided by letting several elements of Y code the same subset? No. Duplicate codes only repeat values in the enumeration F; they never supply a value for the diagonal subset missing from every entry. Conversely a single y cannot code two different subsets, because its fixed E-section determines membership at each n. The argument needs surjectivity onto the collection of subsets, not an explicit uniqueness axiom for codes. This is why adding a large collection of nominal codes without changing their E-sections cannot satisfy the power-set clause in a countable full structure.

## What Henkin completeness actually restores

For specified Henkin semantics introduce a separate first-order sort R_n for n-ary relation objects and an application relation App_n between R_n and n object arguments. Translate a second-order application X(t_1,...,t_n) into App_n(X,t_1,...,t_n); translate its relation quantifier into a first-order quantifier over R_n. Object quantifiers remain in the object sort. Add the chosen comprehension axioms, and, if relations are intended extensionally, the extensionality axiom saying that objects with identical sections are equal. The object sort is nonempty; relation sorts are nonempty, with comprehension of the empty relation providing this when that instance is included.

A structural induction on formulas proves preservation of satisfaction between a Henkin structure and its many-sorted translation. Atomic applications agree by definition, Boolean clauses are unchanged, and each quantifier ranges over exactly the corresponding sort. Conversely any model of the specified first-order comprehension and extensionality axioms yields the corresponding families of available relations by taking their application sections. Extensionality identifies relation objects only when their sections agree; no claim that every external section occurs is made.

Ordinary first-order completeness, compactness and Löwenheim–Skolem therefore apply to this specified class of Henkin structures. Countably many sorts and countably many comprehension instances can be treated by the usual sorted proof system or by unary sort predicates and explicit nonemptiness axioms in a one-sorted encoding. These are properties of the translated first-order theory. They do not establish fullness of its relation families.

For example, add the Henkin translation of P2 and a constant different from every standard numeral, together with all instances of a fixed countable comprehension schema satisfied by full structures. Every finite subset has a standard full model with a suitable interpretation of c; hence first-order compactness gives a Henkin model of the whole theory. Its object part contains a nonstandard element. The external standard-numeral image cannot be an available relation in that model, since its relative induction instance would eliminate the nonstandard element. Even extensive first-order comprehension schemas therefore do not simply force full power-set semantics. This is a mathematical consequence of compactness, not a claim that the two semantics accidentally use different notation.

## Effective proof enumeration and full validity

Let A be an arbitrary first-order arithmetic sentence. In the second-order vocabulary containing the finite categorical Peano axioms with the recursive equations for addition and multiplication, A is true in the standard naturals exactly when the implication from those axioms to A is fully valid. One direction uses categoricity and preservation of A under isomorphism. The other uses the standard full model as a countermodel when A is false. This is a computable transformation of finite sentences.

If full second-order validities were computably enumerable, enumerate them and recognize those implications. This would enumerate exactly the true first-order arithmetic sentences. But true arithmetic is consistent, complete and extends Q; a computable enumeration would contradict Rosser’s theorem. Thus full second-order validity has no effective sound and complete proof enumeration. This proof uses the earlier effective incompleteness theorem and the finite categorical description, not just the failure of compactness. It is compatible with a noneffective semantic definition of validity and with effective calculi sound for full semantics but incomplete for it.

## Lindström’s theorem: the imported characterization

The comparison now concerns **abstract logics** over ordinary structures with equality. Fix the standard regular abstract-logic framework: satisfaction is invariant under isomorphism; sentences depend on finitely many vocabulary symbols and are unaffected by enlarging the structure’s unused vocabulary; renaming symbols respects satisfaction; Boolean operations and first-order quantification are available; and sentences can be relativized to a named nonempty subdomain, with the required vocabulary interpreted there. The logic extends first-order logic with its ordinary semantics. These closure and occurrence conditions are part of the theorem’s setting, rather than conclusions about every formal device called a logic.

**Theorem 12.2 (Lindström; imported).** In this regular framework, compactness together with the downward countable Löwenheim–Skolem property characterizes first-order expressive power: every sentence of such a logic is equivalent, on all structures of its vocabulary, to a first-order sentence. A sufficient form of the assumptions used here is full compactness for theories and the property that every satisfiable countable theory in a countable vocabulary has an at most countable model. These assumptions imply the usual sentence-level conditions in the theorem. “Equivalent” means equality of model classes, not a promised effective algorithm computing an equivalent formula.

The full proof of this abstract characterization is imported from Lindström’s paper; it requires a construction comparing structures and is not replaced by the examples above. First-order logic satisfies the hypotheses by its established model theory. Full second-order logic can express the finite sentence Phi, whose class of full models has no countable member, so no first-order sentence can be equivalent to it by downward Löwenheim–Skolem. It also fails compactness by the categorical P2 construction. These are explicit ways in which its increased expressive power avoids the theorem’s joint hypotheses. A properly specified Henkin logic returns to many-sorted first-order semantics and does not furnish a counterexample to the characterization.

The theorem is not a ranking of intellectual value. A logic may deliberately sacrifice compactness or a small-model theorem in order to express a useful global property. What matters is recording the exchange precisely: a stronger quantifier range changes available models, proof completeness and effective reasoning. One must not carry first-order metatheorems across that change without verifying their hypotheses.

## Exercises

<a id="second-order-logic-and-lindstrom-ex-1"></a>

**Exercise 1.** Prove that the standard-numeral map h in Theorem12.1 is injective.

<details>
<summary>Hint 1</summary>

Compare two unequal indices and cancel common successors.

</details>

<details>
<summary>Hint 2</summary>

The remaining equality would make zero a successor.

</details>

<details>
<summary>Solution</summary>

If m<n and h(m)=h(n), injectivity of S allows cancellation of m outer successors. The result is 0=S(h(n-m-1)), contrary to the no-predecessor-of-zero axiom. The case n<m is symmetric. Hence equal images force equal indices. This argument uses only finitely many cancellations for each fixed pair of standard indices and does not presuppose surjectivity of h.

</details>

<a id="second-order-logic-and-lindstrom-ex-2"></a>

**Exercise 2.** Locate exactly where full semantics is used to prove that h is onto.

<details>
<summary>Hint 1</summary>

The image is an external subset of the domain.

</details>

<details>
<summary>Hint 2</summary>

An arbitrary Henkin family need not include that subset.

</details>

<details>
<summary>Solution</summary>

The actual image H of the externally defined h contains zero and is closed under successor. Full unary quantification allows substituting H into the induction sentence, yielding that every domain object belongs to H. In a Henkin model H may not occur among available unary relations, so this substitution may be unavailable. The injectivity argument still works, but the surjectivity step then has no justification.

</details>

<a id="second-order-logic-and-lindstrom-ex-3"></a>

**Exercise 3.** Show that every finite fragment of the noncompact theory has a full model.

<details>
<summary>Hint 1</summary>

Collect the finitely many forbidden numeral indices.

</details>

<details>
<summary>Hint 2</summary>

Interpret c beyond their maximum in the standard structure.

</details>

<details>
<summary>Solution</summary>

Take the full standard successor model. If the fragment forbids indices n_1,...,n_k, set c to one plus their maximum; if it forbids none set c to zero. All included P2 axioms hold in that structure and each included inequality holds. This gives a model for every finite fragment separately, while not supplying one interpretation of c for the whole theory.

</details>

<a id="second-order-logic-and-lindstrom-ex-4"></a>

**Exercise 4.** Explain why the entire theory has no full model even if some nonstandard first-order arithmetic structures exist.

<details>
<summary>Hint 1</summary>

The full induction sentence is stronger than its first-order schema.

</details>

<details>
<summary>Hint 2</summary>

Apply categoricity before evaluating the inequalities.

</details>

<details>
<summary>Solution</summary>

Any full model of its P2 part is isomorphic to the standard successor structure. Its c therefore equals h(n) for some standard n. The theory includes the inequality excluding precisely that numeral, a contradiction. Nonstandard first-order structures do not satisfy this full second-order induction sentence with all subsets available; their existence therefore does not invalidate the argument.

</details>

<a id="second-order-logic-and-lindstrom-ex-5"></a>

**Exercise 5.** In the sentence Phi, why is the behavior of S on Y irrelevant?

<details>
<summary>Hint 1</summary>

All successor axioms and induction are restricted to N.

</details>

<details>
<summary>Hint 2</summary>

Give a total interpretation extending the standard successor.

</details>

<details>
<summary>Solution</summary>

The clauses demand closure, injectivity and absence of a predecessor of zero only on the N part. The induction formula also describes subsets of N and successor steps starting there. One may send every object of Y to zero while using the usual successor on N. This produces a total unary function without adding any constraint inconsistent with the intended tagged power-set model.

</details>

<a id="second-order-logic-and-lindstrom-ex-6"></a>

**Exercise 6.** Give the diagonal contradiction if a countable full model of Phi were enumerated.

<details>
<summary>Hint 1</summary>

Use the E-section of the kth enumerated object as F(k), or the empty set for a noncode.

</details>

<details>
<summary>Hint 2</summary>

Form the set missing its own index.

</details>

<details>
<summary>Solution</summary>

The power-set clause guarantees that every subset of the standard-numeral copy of the naturals occurs as an E-section of a Y-object. A surjective enumeration of the whole domain therefore makes F enumerate every subset of the standard naturals. Let B={k:k is not in F(k)}. If B=F(j), then j belongs to B exactly when it does not belong to B, impossible. Duplicate codes do not affect this contradiction.

</details>

<a id="second-order-logic-and-lindstrom-ex-7"></a>

**Exercise 7.** Prove satisfaction preservation for a relation quantifier under the Henkin translation.

<details>
<summary>Hint 1</summary>

Fix the object assignment and all other relation assignments.

</details>

<details>
<summary>Hint 2</summary>

The two quantifiers range over the same specified relation objects.

</details>

<details>
<summary>Solution</summary>

The second-order Henkin clause for an existential relation variable holds precisely when some available relation object makes the matrix true. Its many-sorted translation existentially quantifies over the relation sort, whose objects are exactly those available relations. The induction hypothesis identifies truth of the two matrices for each such object. Thus the existential clauses agree. Universal relation quantification follows either by the same reasoning for every object or by classical negation. Fullness was not used.

</details>

<a id="second-order-logic-and-lindstrom-ex-8"></a>

**Exercise 8.** Does adding all instances of a specified first-order comprehension schema force full power-set semantics?

<details>
<summary>Hint 1</summary>

Apply compactness to the Henkin version of P2 and a nonstandard constant.

</details>

<details>
<summary>Hint 2</summary>

Consider the external image of the standard numerals.

</details>

<details>
<summary>Solution</summary>

No. The indicated countable schema can hold in a nonstandard Henkin model obtained by compactness, since every finite fragment has a full standard model with an appropriate c. Its standard-numeral image is a proper external subset, closed under successor and containing zero. If that subset were available, the model’s induction sentence would make it the whole domain. Hence it is omitted despite satisfaction of the chosen comprehension schema.

</details>

<a id="second-order-logic-and-lindstrom-ex-9"></a>

**Exercise 9.** Use finite categoricity to show that effective enumeration of full second-order validities would enumerate true arithmetic.

<details>
<summary>Hint 1</summary>

Map A to the implication from finite second-order Peano axioms to A.

</details>

<details>
<summary>Hint 2</summary>

Invoke Rosser for the resulting consistent complete effective theory.

</details>

<details>
<summary>Solution</summary>

The finite categorical axioms with addition and multiplication have exactly standard arithmetic models up to isomorphism. Therefore their implication to A is fully valid exactly when A is true in the standard naturals. The transformation is computable, so a validity enumeration recognizes exactly those arithmetic sentences. It would make true arithmetic a computably enumerable consistent complete extension of Q, contradicting Rosser. This argument supplies the effectiveness obstruction separately from noncompactness.

</details>

<a id="second-order-logic-and-lindstrom-ex-10"></a>

**Exercise 10.** State what may and may not be inferred from Lindström’s theorem for a proposed extension of first-order logic.

<details>
<summary>Hint 1</summary>

Check regularity, compactness and downward countable-model hypotheses.

</details>

<details>
<summary>Hint 2</summary>

Expressive equivalence need not be an effective translation.

</details>

<details>
<summary>Solution</summary>

Within the specified regular abstract-logic framework, if both model-theoretic hypotheses hold, every sentence has a first-order equivalent on all structures. Thus a demonstrated genuinely stronger sentence forces failure of at least one of those hypotheses, or failure to fit the framework. The theorem does not automatically classify an arbitrary syntax without its semantics and closure rules. Nor does the stated expressive-equivalence conclusion give a computable procedure for finding equivalents. Full second-order Phi witnesses failure of the countable-model property directly.

</details>

## Sources

Per Lindström, [“On Extensions of Elementary Logic”](https://doi.org/10.1111/j.1755-2567.1969.tb00356.x), *Theoria*35 (1969),1–11, is the primary source for the imported abstract characterization. Its theorem is used only within the stated regular-logic framework; the full characterization proof is not claimed here. For a research discussion of the role of equality and abstract-logic hypotheses, see [“Maximality of logic without identity”](https://arxiv.org/abs/2203.08722); the present theorem concerns ordinary first-order logic with equality. Enderton’s *A Mathematical Introduction to Logic* and Marker’s *Model Theory*, retained in the bibliography, provide comparison treatments of semantics and first-order model theory. The categoricity, finite-signature power-code obstruction, compactness contrast and effective-validity reduction in this chapter are developed locally from the stated axioms and the earlier incompleteness theorem.

## Summary

Full relation quantifiers include the external standard-numeral image, so one second-order induction sentence yields categoricity. Categoricity produces a finitely satisfiable but unsatisfiable theory, while a finite power-code sentence has no countable full model. Specified Henkin families translate into many-sorted first-order structures and recover first-order metatheorems without claiming full power sets. A separate effective reduction excludes an effective complete enumeration of full second-order validity. Lindström’s named imported theorem characterizes first-order expressive power through regularity, compactness and a downward countable-model property; its hypotheses explain precisely which exchanges the stronger semantics makes.
`;export{e as default};