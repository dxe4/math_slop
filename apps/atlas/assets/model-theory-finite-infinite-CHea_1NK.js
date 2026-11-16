var e=`---
id: deep-dive-model-theory-finite-infinite
title: "Models, Compactness, and the Limits of Finite Pictures"
license: CC BY-SA 4.0
---

# Models, Compactness, and the Limits of Finite Pictures

**Before reading.** Read [Predicates, Quantifiers and Structures](../books/introduction-to-logic-and-set-theory/predicates-quantifiers-structures.md) and [The Axioms of ZF](../books/introduction-to-logic-and-set-theory/zf-axioms.md). These are preparation for the ideas used below.

Model theory studies mathematical structures through the first-order sentences they satisfy. Finite tables are excellent semantic microscopes, but compactness and Löwenheim–Skolem show why no finite collection of pictures captures the entire subject.

## 1. Structures depend on a signature

A first-order signature L lists relation, function, and constant symbols with arities. A graph can use one binary relation E. A group uses a binary operation, a unary inverse, and an identity constant. An ordered field has operations, constants, and an order relation.

An L-structure M supplies a nonempty domain and interprets every symbol at the declared arity. The same underlying set can carry many structures. On $\\{0,1,2\\}$, addition modulo 3 and maximum are different binary operations.

A **homomorphism** preserves specified operations and relations; an **embedding** preserves and reflects atomic structure; an **isomorphism** is a bijective structure-preserving map with structure-preserving inverse. An **elementary embedding** preserves every first-order formula, including those with parameters.

The last condition is much stronger. A subgroup can embed algebraically without being an elementary substructure: first-order formulas may have witnesses in the larger group absent from the subgroup.

## 2. Satisfaction is recursive and assignment-sensitive

For formula $\\phi(x₁,\\ldots,xₙ)$, structure M, and assignment s,

$$M,s⊨\\phi$$

is defined recursively. Terms are evaluated first. Atomic relations are looked up. Connectives use their truth rules. For quantifiers:

- $M,s⊨\\forall x\\phi$ iff $M,s[x\\mapsto a]⊨\\phi$ for every a∈M;
- $M,s⊨\\exists x\\phi$ iff for some a∈M, $M,s[x\\mapsto a]⊨\\phi$.

A sentence has no free variables, so its truth does not depend on s. A formula with free x defines the subset

$$\\{a\\in M:M⊨\\phi(a,b₁,\\ldots,bₖ)\\}$$

when parameters $bᵢ$ are allowed.

### Definability and symmetry

Any set definable without parameters is preserved by every automorphism of M. In the pure equality structure on $\\{a,b,c\\}$, all permutations are automorphisms, so no parameter-free formula can define the singleton $\\{a\\}$. With parameter a, the formula $x=a$ can.

Automorphism invariance is necessary for definability, not generally sufficient in arbitrary infinite structures. It is a powerful first obstruction, not a complete test.

## 3. Theory, completeness, and categoricity

The complete theory of M is $Th(M)$, all L-sentences true in M. Structures M,N are **elementarily equivalent**, written $M\\equiv N$, if they satisfy the same first-order sentences. They need not be isomorphic.

A theory T is **complete** if for every sentence φ in its language, $T⊢\\phi$ or $T⊢\\neg \\phi$ (equivalently, assuming first-order completeness, all models of T agree on every sentence). It is **κ-categorical** if all its models of cardinality κ are isomorphic.

Do not confuse these. The theory of dense linear orders without endpoints is complete and countably categorical, but it has nonisomorphic models in different infinite cardinalities. A complete theory can have many nonisomorphic models of one size as well.

The first-order Peano axioms are not categorical: they have nonstandard models. Full second-order Peano axioms with standard semantics are categorical, but that semantic setting sacrifices effective first-order-style completeness and compactness.

## 4. Compactness as a model-building engine

**Compactness theorem.** A set T of first-order L-sentences has a model exactly when every finite subset of T has a model.

One proof uses the completeness theorem: if T has no model, then $T⊨\\perp$; completeness yields a finite formal proof of contradiction, using finitely many assumptions. Another proof uses ultraproducts and the ultrafilter lemma, a weak choice principle; the metatheoretic assumptions of proofs can differ.

### Worked construction: an infinite model from finite ones

**Worked example.**

Suppose T has models of arbitrarily large finite size. Add, for every positive n, a sentence $\\sigmaₙ$ saying there are at least n distinct elements. Any finite subset of $T\\cup \\{\\sigmaₙ:n\\ge 1\\}$ mentions only finitely many size bounds, so a sufficiently large finite model satisfies it. Compactness gives a model satisfying all bounds, hence an infinite model of T.

This does **not** say T has a finite model if all its small fragments do. Compactness’s resulting model may be infinite.

### Nonstandard arithmetic element

Extend a first-order arithmetic theory by a constant c and sentences $c>0,c>1,c>2,\\ldots$. Every finite subset is realized in the ordinary natural numbers by choosing c larger than its largest mentioned numeral. Compactness yields a model with an element c larger than every standard numeral. This model is nonstandard; there is no ordinary natural with that property.

The construction assumes the arithmetic base has the needed standard model (or finite satisfiability) and that the order/numerals are represented in the language.

## 5. What first-order logic cannot define globally

Compactness proves several nondefinability results.

### Finiteness

No first-order sentence in a fixed signature has exactly the finite structures as its models. If φ did, combine φ with all lower size bounds $\\sigmaₙ$. Every finite subset has a large finite model, while a model of all sentences would be both finite (by φ) and infinite (by all bounds).

### Connectedness of arbitrary graphs

Graph connectedness is not first-order definable over all graphs. Intuitively, any one first-order sentence has bounded syntactic resources and cannot express paths of arbitrary finite length. A compactness proof adds constants a,b, asserts the graph is connected via candidate φ, and for every n asserts there is no path of length at most n between a and b. Finite fragments permit a sufficiently long finite path; compactness produces a model contradicting φ’s claimed connectedness characterization.

Over **finite** structures, first-order definability has different behavior, and ordinary compactness is unavailable. Finite model theory is a distinct subject closely tied to database and descriptive complexity.

## 6. Downward Löwenheim–Skolem carefully stated

A common form says: let L be a language of cardinality at most κ, let M be an infinite L-structure, and let A⊆M have size at most κ, where κ is infinite. Then there is an elementary substructure N≺M containing A with $|N|\\le \\kappa$ (and typically size κ when A or the language requires it).

For countable L and countable A, this yields a countable elementary substructure. A proof expands the language with Skolem functions or selects witnesses and closes A under them. The Tarski–Vaught test verifies elementarity: whenever M satisfies an existential formula with parameters from N, a witness already lies in N.

### The apparent paradox

If set theory has a model, suitable metatheoretic assumptions yield countable models. Such a model may satisfy “the reals are uncountable.” Externally, its domain is countable. Internally, no function that the model recognizes gives a bijection from its natural-number object to its real-number object. The external enumeration is not necessarily an element of the model.

This is not a contradiction because “there exists a bijection” is evaluated with quantifiers ranging over the model. Internal and external viewpoints must not be merged.

**Boundary:** Löwenheim–Skolem is a conditional theorem about structures/models. It does not by itself prove that ZFC has a model; asserting such a model is already a consistency-strength commitment in the metatheory.

## 7. Types as consistent local descriptions

An n-type over parameter set A is, roughly, a maximally consistent collection of formulas in n free variables with parameters from A, relative to a complete theory. A **partial type** need only be consistent.

In the standard natural numbers, consider

$$p(x)=\\{x>n:n is a standard natural numeral\\}$$

Every finite subset is realized by a sufficiently large natural number. Compactness says the whole type is realized in some elementary extension, by a nonstandard element. It is not realized in the standard N.

A structure is κ-saturated if every type over fewer than κ parameters that is finitely satisfiable in the structure is realized there (precise size conventions vary). Saturation measures richness of witness realization, not merely cardinality.

## 8. Elementary chains and unions

If

$$M₀\\prec M₁\\prec M₂\\prec⋯$$

the union M of the chain is an elementary extension of each Mᵢ under the elementary chain theorem. The proof proceeds by induction on formulas; existential witnesses for parameters from a stage appear in a later/same stage and hence in the union.

This technique constructs large models from controlled approximations. Mere substructure chains without elementarity do not guarantee the same conclusion.

## 9. A finite semantic checker’s exact jurisdiction

The Atlas lab can:

- decide its fixed formulas on an explicitly listed finite structure;
- enumerate witnesses and counterexamples;
- expose quantifier dependencies and vacuous truth;
- test conjectured equivalences across models you construct.

It cannot:

- prove validity across all finite models, let alone all structures, from samples;
- decide arbitrary first-order validity;
- demonstrate compactness, whose witness may be infinite;
- certify that a theory is consistent;
- serve as a general theorem prover or proof assistant.

For a fixed finite domain of size n and q nested quantifiers, direct evaluation has at most $n^{q}$ assignments times the cost of the quantifier-free matrix. That is an algorithmic bound, not a metatheorem.

## Exercises

<a id="deep-dive-model-theory-finite-infinite-ex-1"></a>

### Exercise 1

1. In the pure equality structure on four elements, which one-element subsets are parameter-free definable? Which are definable with a named parameter a?

<details>
<summary>Hint 1</summary>

A parameter-free formula is invariant under every automorphism of the structure.
</details>

<details>
<summary>Hint 2</summary>

Pure equality lets automorphisms permute all four elements; a named parameter breaks that symmetry.
</details>

<details>
<summary>Solution</summary>

None: automorphisms move any chosen element, while a parameter-free definable set must be invariant. With parameter a, $\\{a\\}$ is defined by $x=a$.

</details>

<a id="deep-dive-model-theory-finite-infinite-ex-2"></a>

### Exercise 2

2. Use compactness to show that a first-order theory with arbitrarily long finite linear orders has an infinite model.

<details>
<summary>Hint 1</summary>

Add one sentence for each desired finite lower bound on the order size.
</details>

<details>
<summary>Hint 2</summary>

Every finite set of those sentences fits a sufficiently long finite order, so apply compactness to the whole set.
</details>

<details>
<summary>Solution</summary>

Add size sentences $\\sigmaₙ$. Every finite collection needs only a sufficiently long finite order, so compactness provides a model satisfying all $\\sigmaₙ$, hence an infinite linear order model.

</details>

### Further exercises

3. Why does the same reasoning not show it has a finite model satisfying “larger than every finite size”?
4. Give two nonisomorphic elementarily equivalent structures, or explain a standard source of them.
5. Explain why the external countability of model M does not create an internal enumeration of every object M calls a real.
6. For identity relation on $\\{a,b,c\\}$, evaluate $\\forall x\\exists yR(x,y)$ and $\\exists y\\forall xR(x,y)$ with witnesses.
7. Is graph connectivity definable by the infinite set of sentences “there is a path of length at most n” for some n? Diagnose the quantifier over n.
8. State what must be checked before applying downward Löwenheim–Skolem to a claimed structure.

## Solutions


3. “Larger than every finite size” is not a finite cardinality. Satisfying all lower bounds is exactly being infinite. Compactness does not manufacture a largest finite number.
4. Any nonstandard model of a complete first-order theory elementarily equivalent to its standard model but with a different cardinality/nonisomorphic order structure works; compactness yields a nonstandard model elementarily equivalent to arithmetic once one uses a complete theory such as $Th(N)$ plus a new large constant and then forgets the constant.
5. Internal existential quantifiers range only over functions represented in M. An external enumeration of M’s domain need not belong to M or satisfy M’s internal function definition.
6. The first is true using y=x for each source. The second is false because no single y receives arrows from all three sources.
7. An infinite disjunction “path length 0 or 1 or 2 or …” is not one ordinary first-order formula. A theory containing separate bounded-path claims does not express that at least one bound works uniformly in the required way.
8. Specify the first-order language and its cardinality, an actual infinite structure M, parameter set A and its size, desired κ, and the theorem’s metatheoretic setting. The theorem does not supply M from bare consistency rhetoric.

## Sources and continuation

The [Stanford Encyclopedia overview of model theory](https://plato.stanford.edu/entries/model-theory/) and [Open Logic Project](https://builds.openlogicproject.org/) give standard proofs and bibliographies. Continue toward quantifier elimination, ultraproducts and Łoś’s theorem, stability, categoricity, o-minimality, finite model theory, descriptive complexity, valued fields, and applications to algebra and geometry. These specialist shelves remain future work.
`;export{e as default};