var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: compactness-lowenheim-skolem
title: "Compactness, Löwenheim–Skolem and Applications"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Compactness, Löwenheim–Skolem and Applications

## Local requirements and global models

A theory may impose infinitely many conditions while each derivation uses only finitely many premises. Completeness connects those two facts: if every finite group of requirements can be satisfied, the whole first-order theory can be satisfied. This is compactness. It creates models that need not resemble any of the finite-stage examples used to establish its hypothesis.

The Löwenheim–Skolem theorems then control cardinality while preserving first-order truth. Their central notion is elementarity, which preserves all formulas with parameters from a smaller structure, not merely its equations or basic relations. We will prove the downward theorem with a witness hull and the upward theorem with an elementary diagram.

The required preparation is the [completeness theorem](/books/library-book-introduction-to-logic-and-set-theory/first-order-completeness/), together with elementary countability and relations from [Introduction to Proof](/books/library-book-introduction-to-proof/). All signatures are sets and have only finitary symbols; all domains are nonempty and logical equality is identity. General cardinal statements and simultaneous witness selections are made in ambient ZFC. That use of choice belongs to our metatheory; it is not an axiom automatically imposed on the theories being studied. The book's later chapters develop ordinals, cardinals and choice internally and separately.

## Compactness from completeness

**Definition 6.1 (Finite satisfiability).** A sentence theory $T$ is finitely satisfiable if every finite subset $T_0\\subseteq T$ has a model. The models may vary with $T_0$; they are not required to share a domain or agree on interpretations.

**Theorem 6.2 (Compactness).** A sentence theory has a model if and only if it is finitely satisfiable.

*Proof.* If $M\\models T$, the same structure satisfies every subset of $T$, proving one direction. Conversely suppose every finite subset is satisfiable. If $T$ were inconsistent, choose a derivation of $\\bot$ from it. The proof tree is finite, hence has finitely many open assumption occurrences. Let $T_0$ be the finite set of their formulas. The same tree gives $T_0\\vdash\\bot$. Soundness says every model of $T_0$ would satisfy $\\bot$, which is impossible. This contradicts finite satisfiability. Thus $T$ is consistent. The model-existence form of completeness now supplies a model of $T$.

Equivalently, if $T$ had no model, then $T\\models\\bot$. Strong completeness would give a finite derivation of $\\bot$, and its finite assumption set would be an unsatisfiable finite subset. Both formulations use the full completeness theorem rather than assuming that an infinite semantic consequence has finite support. ∎

The proof covers arbitrary set-sized signatures using the general-signature theorem of Chapter 5 and its declared ambient metatheory. For countable signatures its countable form suffices. Compactness itself is not a theorem restricted to effective theories or to languages with only finitely many symbols.

**Corollary 6.3 (Finite support for consequence).** If $T\\models\\sigma$, some finite $T_0\\subseteq T$ satisfies $T_0\\models\\sigma$.

*Proof.* By completeness choose a finite derivation of $\\sigma$ from $T$. Let $T_0$ consist of the open assumptions actually used. Soundness gives $T_0\\models\\sigma$. Alternatively apply compactness to the unsatisfiable set $T\\cup\\{\\neg\\sigma\\}$ and collect its finitely many $T$-premises. ∎

Compactness is about ordinary first-order models, which may be infinite. It fails for the semantics restricted to finite structures. To see this, for each $n\\ge1$ let $\\alpha_n$ assert that at least $n$ distinct objects exist:

$$\\alpha_n=\\exists x_1\\cdots\\exists x_n\\bigwedge_{i<j}\\neg(x_i=x_j).$$

For $n=1$ the empty conjunction is true. Every finite subset of $\\{\\alpha_n:n\\ge1\\}$ has a finite model of sufficiently large size. The entire theory has no finite model, since any domain of size $m$ falsifies $\\alpha_{m+1}$. Ordinary compactness correctly gives an infinite model. A finite-model exploration cannot test the theorem by looking only for a finite conclusion.

## Worked example 1: one element beyond every numeral

Take the usual arithmetic signature $\\{0,S,+,\\cdot,<\\}$ and let $\\operatorname{Th}(\\mathbb N)$ be the set of all sentences true in the standard structure. Introduce one new constant $c$ and consider

$$T=\\operatorname{Th}(\\mathbb N)\\cup\\{\\bar n<c:n\\in\\mathbb N\\},$$

where $\\bar n$ is the standard numeral $S^n(0)$. A finite subset mentions only finitely many of the new inequalities. Interpret the arithmetic symbols on $\\mathbb N$ as usual and interpret $c$ as a natural number larger than every mentioned numeral. Every selected true arithmetic sentence remains true, so this expansion satisfies the finite subset. If no new inequality occurs, choose any value for $c$.

Compactness supplies a model $M$ of the whole theory. Its arithmetic reduct satisfies exactly the same sentences as $\\mathbb N$: for each arithmetic sentence, either it or its negation belongs to $\\operatorname{Th}(\\mathbb N)$. Yet $c^M$ is larger than every standard numeral interpreted in $M$. No element of standard $\\mathbb N$ has that property. Moreover the reduct is not isomorphic to $\\mathbb N$, since an isomorphism must preserve $0,S$ and therefore every numeral, leaving no image for an element beyond them all.

The repeated use of the same constant matters. The separate sentences $\\exists x(\\bar n<x)$ already hold in standard $\\mathbb N$ and do not demand a common upper witness. The theory of all true arithmetic is not assumed effectively axiomatizable. This is a model-existence argument, not an algorithm presenting all operations of a nonstandard model.

## Substructures and the witness test

**Definition 6.4 (Substructure and elementarity).** An $L$-substructure $N\\subseteq M$ has a nonempty domain contained in $M$, contains the interpretations of all constants, is closed under all interpreted functions, and interprets each relation by restriction from $M$. It is elementary, written $N\\preceq M$, if for every formula $\\varphi(\\vec x)$ and tuple $\\vec a$ from $N$,

$$N\\models\\varphi(\\vec a)\\quad\\text{iff}\\quad M\\models\\varphi(\\vec a).$$

Notation with parameters means assignment of the displayed free variables, or equivalently temporary names for those elements. It does not change the language's logical rules. An embedding is elementary when the corresponding equivalence holds after mapping the parameter tuple into the target.

A substructure preserves quantifier-free formulas because function values and relations agree on its domain. It need not preserve existential formulas. For instance, $\\mathbb Z$ is a substructure of $\\mathbb Q$ in the order-only signature, but $\\exists x(0<x\\land x<1)$ is true in $\\mathbb Q$ and false in $\\mathbb Z$, using parameters $0,1$.

**Theorem 6.5 (Tarski–Vaught test).** A substructure $N\\subseteq M$ is elementary if and only if, for every formula $\\psi(x,\\vec y)$ and tuple $\\vec a\\in N$, whenever $M\\models\\exists x\\psi(x,\\vec a)$, there is $b\\in N$ with $M\\models\\psi(b,\\vec a)$.

*Proof.* If $N\\preceq M$, the existential sentence with those parameters holds in $N$. Choose a witness $b\\in N$. Elementarity for the body gives $M\\models\\psi(b,\\vec a)$, proving necessity.

For sufficiency, induct on formulas to prove agreement with parameters from $N$. Atomic agreement follows from the substructure definition and induction on terms; equality is actual identity in both domains. Boolean connectives preserve agreement. Suppose the assertion is known for $\\psi$. If $N\\models\\exists x\\psi(x,\\vec a)$, choose its witness $b\\in N$; induction gives the body in $M$, hence the existential in $M$. Conversely, if the existential holds in $M$, the test supplies $b\\in N$ with its body true in $M$. Induction makes the body true in $N$, giving the existential there. For a universal formula, if its body holds in $M$ at every object, induction makes it hold in $N$ at every object of $N$. Conversely, suppose $N$ satisfies the universal but $M$ does not. Then $M$ has a witness to the existential negation of its body. The test supplies such a witness $b$ in $N$, and induction for the body makes it false at $b$ in $N$, a contradiction. Thus universal formulas agree too. This covers every formula. ∎

The test asks for witnesses to all formulas with parameters, including formulas containing quantifiers. Closing only under witnesses for atomic relations would not establish elementarity.

## The downward theorem

**Theorem 6.6 (Downward Löwenheim–Skolem).** Let $M$ be an $L$-structure, let $A\\subseteq M$, and let $\\kappa$ be an infinite cardinal with $|L|\\le\\kappa$ and $|A|\\le\\kappa$. Then there is $N\\preceq M$ containing $A$ with $|N|\\le\\kappa$. In particular, for countable $L$ and countable $A$, there is such an at most countable $N$.

*Proof.* Choose one element $m_0\\in M$. Let $A_0$ contain $A$, $m_0$ and all constant interpretations. It has size at most $\\kappa$. Given $A_n$, form $A_{n+1}$ by adjoining two kinds of elements. First add the value of every function symbol on every appropriately sized finite tuple from $A_n$. Second, for every formula $\\exists x\\psi(x,\\vec y)$ and tuple $\\vec a$ from $A_n$ for which $M\\models\\exists x\\psi(x,\\vec a)$, choose one witness $b\\in M$ with $M\\models\\psi(b,\\vec a)$ and add it. The simultaneous witness choices are justified in the declared ambient metatheory.

There are at most $\\kappa$ formulas because they are finite strings from an alphabet of size at most $\\kappa$. There are at most $\\kappa$ finite tuples from $A_n$, using the usual arithmetic of infinite cardinals in ZFC. Thus at most $\\kappa$ function values and witnesses are added, and $|A_{n+1}|\\le\\kappa$. Let $N=\\bigcup_{n<\\omega}A_n$, so $|N|\\le\\kappa$.

This union is nonempty and contains constants. Any finite tuple of its elements lies wholly in some $A_n$, so every function value on that tuple lies in $A_{n+1}$. Hence it determines an $L$-substructure using restricted relations. If an existential formula with parameters in $N$ is true in $M$, its finite parameter tuple lies in some $A_n$ and a witness was added to $A_{n+1}$. Therefore the Tarski–Vaught test applies, giving $N\\preceq M$. ∎

**Corollary 6.7 (Exact downward size).** If $M$ is infinite and

$$\\max(|L|,|A|,\\aleph_0)\\le\\lambda\\le|M|,$$

then an elementary substructure containing $A$ can be chosen with size exactly $\\lambda$.

*Proof.* Choose a subset $B\\subseteq M$ of size $\\lambda$ containing $A$. Apply the theorem to $B$ with bound $\\lambda$. The resulting structure has at most $\\lambda$ elements and contains $B$, so it has at least $\\lambda$ elements as well. ∎

The language-size condition cannot be discarded. If a language has a constant for every member of an uncountable domain and those interpretations are distinct, every substructure must contain all of them. A countable elementary substructure is then impossible. The countable-language theorem does not apply merely because each individual sentence uses finitely many symbols.

## Going upward with an elementary diagram

**Definition 6.8 (Elementary diagram).** Add a constant $c_a$ for every $a\\in M$. The elementary diagram $\\operatorname{ElDiag}(M)$ is the set of all sentences in this expanded language true when $c_a$ denotes $a$. It includes sentences with quantifiers and negative information, not merely atomic facts.

Any model $B$ of this diagram contains an elementary image of $M$: map $a$ to $c_a^B$. Distinctness sentences make this map injective; equations for functions and relation statements make it an embedding. For any formula with parameters, if it is true in $M$, its named instance is in the diagram. If it is false, its negation is in the diagram. Hence truth is preserved in both directions, proving elementarity.

**Theorem 6.9 (Upward Löwenheim–Skolem).** If $M$ is infinite and $\\kappa\\ge\\max(|M|,|L|,\\aleph_0)$, then $M$ has an elementary extension of size exactly $\\kappa$, up to replacing the target by an isomorphic copy containing $M$.

*Proof.* Expand the diagram language further by constants $d_i$ for $i<\\kappa$, and add all sentences $d_i\\ne d_j$ for distinct indices. Every finite subset of the resulting theory has a model. Use the original $M$ with its named elements and interpret the finitely many relevant $d_i$ as different elements; infinitely many elements are available, so any finite distinctness requirements can be met. Interpret all remaining new constants arbitrarily. This expansion satisfies the whole diagram and the selected inequalities.

Compactness gives a model $B$ of the full expanded theory. The $d_i$ interpretations show $|B|\\ge\\kappa$, and the diagram supplies an elementary embedding of $M$ into its $L$-reduct. The expanded language has size at most $\\kappa$. Apply downward Löwenheim–Skolem in that language to obtain an elementary substructure $C$ of size at most $\\kappa$. Every constant interpretation belongs to $C$, including all $d_i^B$ and all $c_a^B$. Thus $|C|\\ge\\kappa$, so equality holds. Its $L$-reduct still contains the elementary image of $M$: truth of every named formula agrees first between $C$ and $B$, then between $B$ and $M$. Relabel that image as the original domain of $M$, obtaining the asserted elementary extension. ∎

More generally, if a theory in signature $L$ has any infinite model, it has a model of every infinite cardinal $\\kappa\\ge\\max(|L|,\\aleph_0)$. Add $\\kappa$ distinct constants to the theory itself, establish finite satisfiability in its infinite model, apply compactness, and use downward Löwenheim–Skolem to achieve exact size. This variant does not require the target size to exceed the size of the initially supplied model, because it need not contain that model as an elementary substructure.

## Two further worked examples

**Worked example 2 (Orders of every infinite size).** Let $T$ be the first-order axioms for dense linear orders without endpoints. The rational order satisfies them: between two distinct rationals lies their average, and each rational has smaller and larger rational neighbours. For an infinite cardinal $\\kappa$, add constants $d_i$ for $i<\\kappa$ and their pairwise inequalities. Any finite part has an expansion of the rational order, by assigning its finitely many required names to distinct rationals. Compactness yields a model with at least $\\kappa$ elements. The expanded language has size $\\kappa$, so the downward theorem supplies an elementary substructure containing all named elements and having at most $\\kappa$ elements. It has exactly $\\kappa$ and its reduct is still a dense linear order without endpoints. This proves existence at the stated cardinality without identifying that order with the real line or claiming uniqueness at uncountable sizes.

**Worked example 3 (Why all finite groups form no elementary class).** Suppose a first-order theory $T$ had exactly the finite groups as its models. Add $\\alpha_n$ for every positive integer $n$. Every finite subset of this enlarged theory has a model: choose a finite cyclic group of size at least the largest mentioned $n$. Since it is a finite group, it satisfies all of $T$, and it satisfies the chosen lower-size requirements. Compactness would produce a model of the enlarged theory. It would be a group satisfying $T$, hence finite by the supposition, but would satisfy every $\\alpha_n$, hence be infinite. This contradiction proves that no such theory exists. The argument uses arbitrarily large finite groups, not a claim that every finite partial multiplication table can be completed to a group.

## Internal and external cardinality

If a consistent first-order set theory has a countable signature, completeness gives an at most countable model. Such a model may internally assert that some set is uncountable. There is no contradiction. For an object $r$ of a countable model, its externally represented members form a subset of the countable domain. An external enumeration of them need not be represented by any function object inside the model. Internal uncountability quantifies only over the function objects that the model recognises and uses its own membership relation.

This observation does not establish that a given set theory is consistent. Nor does consistency alone produce a countable transitive model: the Henkin construction makes an arbitrary first-order structure, whose membership interpretation need not be actual ambient membership. Keeping those qualifications prevents the so-called Skolem paradox from turning into a false proof that all sets are countable.

## Exercises

### Exercise 6.1
<a id="compactness-lowenheim-skolem-ex-1"></a>

Prove that a first-order theory with arbitrarily large finite models has an infinite model.

<details>
<summary>Hint 1</summary>

Add all the lower-size sentences $\\alpha_n$.

</details>
<details>
<summary>Hint 2</summary>

Use one sufficiently large finite model for each finite collection of requirements.

</details>
<details>
<summary>Solution</summary>

For a finite subset of $T\\cup\\{\\alpha_n:n\\ge1\\}$, choose a finite model of all of $T$ whose size is at least the largest listed $n$, possible by the hypothesis. It satisfies that finite subset. Compactness gives a model of the whole enlarged theory. Such a model satisfies every $\\alpha_n$, so no finite number bounds its size; it is infinite and its reduct models $T$.

</details>

### Exercise 6.2
<a id="compactness-lowenheim-skolem-ex-2"></a>

Write a sentence saying that a nonempty domain has at most $n$ elements, for fixed $n\\ge1$, and combine it with $\\alpha_n$ to say “exactly $n$”.

<details>
<summary>Hint 1</summary>

Any list of $n+1$ elements must repeat.

</details>
<details>
<summary>Hint 2</summary>

Use a universal quantifier block and a disjunction of equalities.

</details>
<details>
<summary>Solution</summary>

Use $\\beta_n=\\forall x_1\\cdots\\forall x_{n+1}\\bigvee_{i<j}(x_i=x_j)$. In a domain of size at most $n$, every $n+1$-tuple repeats, so it holds. If the domain has at least $n+1$ elements, choose a tuple of distinct elements to falsify it. Thus $\\alpha_n\\land\\beta_n$ says exactly $n$ elements. The impossibility of axiomatizing all finite domains concerns a uniform finite class across unbounded sizes, not a fixed size.

</details>

### Exercise 6.3
<a id="compactness-lowenheim-skolem-ex-3"></a>

Why do the separate premises $\\exists x(\\bar n<x)$, one for each standard $n$, not force a nonstandard arithmetic model?

<details>
<summary>Hint 1</summary>

Check them in the standard natural numbers.

</details>
<details>
<summary>Hint 2</summary>

Their existential witnesses may depend on $n$.

</details>
<details>
<summary>Solution</summary>

For each $n$, the standard number $n+1$ witnesses its own premise in $\\mathbb N$. Hence the standard structure satisfies all those sentences simultaneously. They do not require one object larger than all numerals. The constant construction instead adds $\\bar n<c$ for every $n$, forcing all inequalities to concern the same interpreted element $c^M$.

</details>

### Exercise 6.4
<a id="compactness-lowenheim-skolem-ex-4"></a>

Give a substructure inclusion that is not elementary and identify a formula with parameters witnessing the failure.

<details>
<summary>Hint 1</summary>

Use the order-only structures $\\mathbb Z\\subseteq\\mathbb Q$.

</details>
<details>
<summary>Hint 2</summary>

Look between the parameters zero and one.

</details>
<details>
<summary>Solution</summary>

In the signature consisting only of $<$, the induced order on $\\mathbb Z$ makes it a substructure of $\\mathbb Q$: there are no functions or constants requiring additional closure. The formula $\\exists x(0<x\\land x<1)$ with parameters $0,1$ is true in $\\mathbb Q$ at $x=1/2$ and false in $\\mathbb Z$. Thus the inclusion fails the defining formula-agreement condition for elementarity.

</details>

### Exercise 6.5
<a id="compactness-lowenheim-skolem-ex-5"></a>

Explain why a witness hull must include function values as well as witnesses, and why the union is closed even when a new tuple appears only across several stages.

<details>
<summary>Hint 1</summary>

A substructure must interpret functions on its own domain.

</details>
<details>
<summary>Hint 2</summary>

A finite tuple is contained in one sufficiently late stage.

</details>
<details>
<summary>Solution</summary>

Without function closure a proposed smaller domain might contain $a$ but omit $f^M(a)$, so restriction would not define a total function into that domain. The construction explicitly adds every appropriate function value at the next stage. For a tuple in the union, each of its finitely many coordinates appears at some stage; the maximum of those indices places the whole tuple in one stage. Its function value is then added at the next stage and belongs to the union. The same argument schedules existential witnesses with parameter tuples.

</details>

### Exercise 6.6
<a id="compactness-lowenheim-skolem-ex-6"></a>

Let $L$ contain distinct constant symbols $c_r$ for all real numbers, and interpret $c_r$ as $r$ in a structure on $\\mathbb R$. Why does this structure have no countable substructure?

<details>
<summary>Hint 1</summary>

Constants belong to every substructure's domain.

</details>
<details>
<summary>Hint 2</summary>

Their interpretations exhaust the original domain.

</details>
<details>
<summary>Solution</summary>

A substructure must contain $c_r^M=r$ for every real $r$. Its domain therefore contains all of $\\mathbb R$ and cannot be countable. There is no conflict with downward Löwenheim–Skolem: this signature is uncountable, and the theorem's upper bound must be at least its cardinality. Finiteness of each formula does not make the set of all constant symbols countable.

</details>

### Exercise 6.7
<a id="compactness-lowenheim-skolem-ex-7"></a>

Prove that a model of the elementary diagram of $M$ receives an injective elementary map from $M$.

<details>
<summary>Hint 1</summary>

Send each element to the interpretation of its new constant.

</details>
<details>
<summary>Hint 2</summary>

For a false parameter formula, the diagram contains its negation.

</details>
<details>
<summary>Solution</summary>

Define $j(a)=c_a^B$. For $a\\ne b$, the true sentence $c_a\\ne c_b$ lies in the diagram, so $j(a)\\ne j(b)$. For any formula $\\varphi(\\vec x)$ and tuple $\\vec a$, if $M\\models\\varphi(\\vec a)$ its named instance belongs to the diagram and holds in $B$. If it fails in $M$, the named negation belongs and holds in $B$, so the formula fails there. This gives truth agreement in both directions for every formula, exactly elementarity, and includes preservation of functions and relations.

</details>

### Exercise 6.8
<a id="compactness-lowenheim-skolem-ex-8"></a>

Why is an infinite-domain hypothesis needed for the elementary-extension version of upward Löwenheim–Skolem?

<details>
<summary>Hint 1</summary>

A finite structure satisfies a sentence fixing its size.

</details>
<details>
<summary>Hint 2</summary>

Elementarity preserves that sentence.

</details>
<details>
<summary>Solution</summary>

If $M$ has exactly $n$ elements, it satisfies $\\alpha_n\\land\\beta_n$ from Exercise 6.2. Every elementary extension satisfies the same sentence and therefore also has exactly $n$ elements. It cannot have a larger cardinality. In the diagram proof, adding arbitrarily many distinct constants would eventually create a finite unsatisfiable subset containing the at-most-$n$ sentence and $n+1$ distinctness requirements. Infinite $M$ avoids that obstruction.

</details>

### Exercise 6.9
<a id="compactness-lowenheim-skolem-ex-9"></a>

Assume $M$ is infinite, $L$ is countable, and $A\\subseteq M$ is countable. Show that an elementary substructure containing $A$ can be chosen countably infinite, even if the basic downward theorem initially gives only “at most countable”.

<details>
<summary>Hint 1</summary>

In ambient ZFC enlarge the initial seed to a countably infinite subset.

</details>
<details>
<summary>Hint 2</summary>

A countable hull containing an infinite seed cannot be finite.

</details>
<details>
<summary>Solution</summary>

Choose a countably infinite subset $B$ of the infinite domain and include $A$ in the seed $A\\cup B$, still countable. Downward Löwenheim–Skolem gives an at most countable elementary substructure containing that seed. It contains the infinite set $B$, so it is infinite and hence countably infinite. The choice of $B$ is made in the stated ambient ZFC setting; the argument is not asserting an unrestricted choice-free theorem about arbitrary infinite sets.

</details>

### Exercise 6.10
<a id="compactness-lowenheim-skolem-ex-10"></a>

Explain why a countable model that internally regards a set as uncountable does not produce an internal bijection contradicting its assertion.

<details>
<summary>Hint 1</summary>

Distinguish an ambient enumeration from a function represented inside the model.

</details>
<details>
<summary>Hint 2</summary>

The model's quantifiers range only over its own domain.

</details>
<details>
<summary>Solution</summary>

Externally, the represented members of an object form a subset of the model's countable domain and can be enumerated in the ambient setting. Internal uncountability says that no function object recognized by the model is a bijection from its internal natural numbers to that set. The external enumeration need not be any such object, and the model's membership relation need not be ambient membership. Thus no internal counterexample to its assertion has been supplied. The two cardinality claims quantify over different collections of functions.

</details>

## Sources

The local CC BY-SA 4.0 seeds are Euler's reference Theorem contracts 3–4 and \`logic-foundations-proof-reference/model-theory.md\`. The arguments here supply complete proofs and fresh exercises. Primary teaching references include the Open Logic Project's [compactness proof](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/compactness.tex) and [downward Löwenheim–Skolem source](https://github.com/OpenLogicProject/OpenLogic/blob/master/content/first-order-logic/completeness/downward-ls.tex). For a lecture treatment making witness selection explicit, see [Martin Speirs's notes on Thomas Scanlon's Berkeley model-theory lectures, Lecture 9](https://math.berkeley.edu/~scanlon/225af13lectures/20132609Lec9.pdf). No PDF is required to follow the proofs given here.

## Summary

Compactness follows from completeness because every contradiction proof uses finitely many premises. It applies to unrestricted first-order structures and can produce infinite or nonstandard models from finite satisfiability. The Tarski–Vaught test turns witness closure into elementarity; the downward theorem builds a small such hull, while elementary diagrams and compactness give larger elementary extensions. Language size, nonempty domains and ambient choice conditions remain explicit. These metatheorems now provide the logical framework in which the next chapters formulate and study the axioms of set theory.
`;export{e as default};