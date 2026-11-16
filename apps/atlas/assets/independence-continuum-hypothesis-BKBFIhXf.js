var e=`---
parent_id: book-set-theory
chapter_id: chapter-16
title: "Independence of CH"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Independence of CH

The continuum hypothesis says there is no cardinal strictly between the naturals and their power set. In ZFC this is equivalently 2 to the power aleph-zero equal to aleph-one. Independence requires two consistency directions. The constructible-universe chapter proves the CH direction. Here we prove the complementary Cohen extension, including the chain-condition and preservation arguments that justify calling its rows aleph-two many distinct reals.

We first work over an explicitly given countable transitive M satisfying ZFC. Cardinal symbols used in the forcing definition are interpreted in M. The final section removes that convenient model assumption from the syntactic relative-consistency statement by finite reflection. Original frontier material and all five original solutions are retained afterward; their PFA, inner-model and categorical consequences remain labelled deeper survey inputs rather than parts of the elementary Cohen proof.

## The two sides of the claim

Chapter 5 proves that ZF interprets ZFC+GCH in its constructible class. Thus Con(ZFC) implies Con(ZFC+CH), using Con(ZFC) to obtain the weaker Con(ZF). For the opposite direction we construct a forcing extension with an injection from its own omega-two into its reals. The phrase its own is essential: an injection indexed by a collapsed old ordinal would not prove failure of CH.

The result does not exhibit a contradiction in ZFC or establish its consistency unconditionally. If ZFC is consistent, it proves neither CH nor its negation: a proof of either would contradict the corresponding relative consistency of its opposite. Philosophical views about one intended universe are additional interpretations of these formal facts, not substitutes for either construction.

## Cohen conditions and the countable chain condition

Let κ be omega-two in M. Define P=Fn(κ×ω,2), the finite partial binary functions on those coordinates, with extension ordered by reverse inclusion. Two conditions are compatible exactly when they agree on the intersection of their domains, because then their finite union is a common extension. If they disagree at one shared coordinate, no function can extend both.

**Theorem 7.1 (Cohen c.c.c.).** M regards P as having no uncountable antichain.

*Proof inside M.* Suppose an uncountable family of conditions were pairwise incompatible. There are only finitely many binary functions on any one finite support. If there were only countably many different supports, there would therefore be only countably many conditions, a contradiction. Select uncountably many conditions with distinct supports. The Δ-system lemma of Chapter 4 gives an uncountable support subfamily with one finite root R. There are only finitely many binary assignments to R, so uncountably many selected conditions agree on all root coordinates. Their domains overlap only at R, and their values there agree. Any two have a union common extension, contradicting the antichain assumption. ∎

This proof takes place internally in M. Externally all its sets are countable because M is countable, but that observation cannot establish the preservation theorem relative to M's cardinals. The internal Δ-system proof is what says every internal antichain is internally countable. The completion of P inherits c.c.c.: choose one nonzero dense P-image below each member of a proposed Boolean antichain, obtaining an incompatible P-family of the same size.

## Why ordinal values can be decided densely

Suppose a condition p forces that a name describes a function on a fixed ground ordinal λ with ordinal outputs. For each i<λ, conditions below p deciding the value at i to be a particular ground ordinal are dense below p.

To prove density in the countable-transitive presentation, start with any q≤p and choose an M-generic filter containing q. The extension theorem says its ordinals are the ground ordinals. Thus the interpreted function has some value α∈M at i. The truth theorem supplies a condition in that generic forcing equality of the output with check(α). A common extension with q still forces that equality, giving the required refinement.

The possible output ordinals are bounded by a ground ordinal depending on the rank of the function name. Its valuation has rank bounded by that name, and the ordinal components of its ordered-pair graph have still smaller rank. Thus the deciding relation ranges over a set, not a proper class of candidate values. Definability of forcing makes the relevant dense sets and antichains available in M. The semantic proof can equivalently be expressed by the Boolean existential join and its dense witness refinements from Chapter 6.

Choose in M a maximal antichain Aᵢ of conditions below p deciding that value, and let Bᵢ be the set of ordinal values they decide. Maximality makes their downward closure dense below p. By c.c.c., each Aᵢ and Bᵢ is countable in M. A generic containing p must meet that closure and therefore has its ith output in Bᵢ. This is the **countable possible-values bound**. A single actual output can be new as a choice made across coordinates, but every one of its coordinates lies in its specified ground countable list.

## Cardinal preservation proved

**Theorem 7.2.** C.c.c. forcing preserves all ground-model cardinals.

*Proof.* The ground omega remains countable and its finite members remain distinct, so it is still the least infinite cardinal. Suppose an uncountable ground cardinal μ ceased to be a cardinal. By Choice in the extension it would admit a surjection from some ordinal λ<μ. A name and a condition p in the generic force that this function is such a surjection; the truth theorem supplies p from the actual statement.

Apply the possible-values bound to every i<λ. The range of the interpreted function is included in the ground set B=union of the Bᵢ. In M its size is at most max(|λ|,omega), using countability of each list and cardinal multiplication. Because μ is an uncountable initial cardinal and λ<μ, this bound is strictly below μ. Therefore B is a proper subset of μ whenever all its candidate values are restricted to μ; values outside μ may simply be discarded. The function's range cannot cover μ, a contradiction.

Thus no ground cardinal is collapsed. Every ordinal that was not a cardinal already has a ground bijection with a smaller ordinal, and that bijection remains in the extension. It cannot become a new cardinal. Since ordinals are unchanged, all cardinal designations, including omega-one and omega-two, agree. ∎

The proof does not assume μ regular. The strict inequality uses the one bound max(|λ|,omega), which is below the initial cardinal μ even when μ is singular. It is not a union of an arbitrary shorter family of unboundedly varying cardinal estimates. Keeping the uniform countable lists is what makes the argument apply to every uncountable cardinal.

**Theorem 7.3.** C.c.c. forcing also preserves cofinalities.

*Proof.* A ground cofinal sequence survives, so cofinality cannot increase once cardinals are preserved. Let θ be the ground cofinality of a ground ordinal δ. If θ is uncountable and an extension had a cofinal map into δ from λ<θ, its countable possible-values lists would have union of ground cardinal at most max(|λ|,omega)<θ. By the definition of θ, that ground subset is bounded in δ. Its subset, the proposed new map range, cannot be cofinal. If θ=omega, no finite set can be cofinal in the limit δ, an absolute fact about ordinal order. Successor and zero cases retain cofinalities one and zero. Thus no cofinality decreases. ∎

Same ordinals alone was weaker than these conclusions. The collapsing example in the retained forcing exercises shows that an arbitrary set forcing need not preserve cardinals or cofinalities. The c.c.c. hypothesis has now been used through its countable antichain bound, rather than quoted as a slogan.

## The generic rows are distinct reals

Let G be M-generic for the Cohen P and let g be its union. Directedness guarantees its finite functions agree, so g is a function. For each coordinate (α,n), the conditions deciding that bit form a dense set in M: extend any finite function to the coordinate if necessary. Thus g is total on κ×ω.

For α≠β, conditions making their rows disagree at some n form a dense set. Given p, choose n outside the finitely many coordinates mentioned in either row. Extend p by assigning bit zero to (α,n) and bit one to (β,n). The resulting condition witnesses disagreement. This dense set belongs to M with parameters α,β, so G meets it.

Define cₐ(n)=g(α,n). Each row is a binary real in M[G], and distinct rows differ at the coordinate supplied above. The set function α↦cₐ belongs to the extension by its ZFC axioms, or can be represented directly by the corresponding graph name. It is an injection from the old κ into the binary reals. By cardinal preservation old κ is exactly the extension's omega-two. Hence the extension satisfies continuum at least aleph-two and therefore ¬CH.

The proof gives a lower bound without assuming CH or GCH in M. It does not determine the exact continuum in an arbitrary ground model. More detailed cardinal arithmetic of names supplies upper bounds under additional ground assumptions.

## An optional exact value from GCH

Assume M satisfies GCH as well. The Cohen poset has cardinal κ: finite subsets and binary assignments on κ×ω give at most κ conditions, and singleton conditions give at least κ. Also κ to the power omega equals κ. Indeed GCH gives κ=2 to the power omega-one, and currying gives (2 to the power omega-one) to the power omega=2 to the power (omega-one times omega)=κ.

For every name for a binary real, choose for each natural n a maximal countable antichain deciding its nth bit and record its zero/one labels. This gives a nice name coded by countably many elements of omega×P×2. There are at most κ to the power omega=κ such codes in M. Every extension real has one: use a condition forcing that its name is a real, complete the deciding antichains below that condition, and assign harmless values on the incompatible part so a full nice name is available.

The ground set of all those codes and an enumeration by κ survive in the extension. Evaluating their associated names there is a set function by well-founded recursion with G as parameter, so the entire extension real set has size at most κ. Combine this with the distinct-row lower bound to obtain continuum exactly aleph-two. The extra GCH assumption and nice-name count are indispensable for this particular exact upper-bound argument.

## Finite reflection removes the transitive-model shortcut

The construction so far starts with a countable transitive M. Mere Con(ZFC) does not imply that such an M exists as a set in a chosen ambient universe. The formal relative-consistency theorem can nevertheless be obtained without that assumption by reflecting only the finite fragments needed by a hypothetical contradiction proof.

First recall the finite reflection argument for V. Given finitely many formulas, include their subformulas and express quantifiers through existential bodies and negation. Starting above any bound, at stage αₙ collect, for each parameter tuple from V at αₙ and each successful existential body, the least rank at which a witness exists. Replacement bounds those uniquely specified rank ordinals. Choose a larger αₙ₊₁ and take the limit δ of the countable construction. Every finite parameter tuple from Vδ occurs at one stage, and every required existential witness appears at a later one. Formula induction therefore makes Vδ agree with V on the fixed list. Only separately fixed formulas are used; no uniform universe truth predicate is asserted.

For any finite set of ZFC axioms, including chosen instances of its schemas, apply this theorem to obtain a transitive Vδ satisfying them. Downward Löwenheim–Skolem gives a countable elementary substructure, and Mostowski collapse gives a countable transitive model of that **finite fragment**. Extensionality and the finitely many auxiliary statements required by the collapse and forcing construction can be included in the reflected list. This does not produce a countable transitive model of all ZFC.

Now suppose ZFC+¬CH had a finite proof of contradiction. It uses finitely many axiom instances A₁,…,Aₙ. For each fixed Aᵢ, Chapter 6's name construction, Boolean truth induction and axiom proof have finite formal derivations in ZFC. The c.c.c., preservation and distinct-row proofs above likewise use finitely many instances. Collect those finitely many ground requirements into a fragment T. This is a proof-by-proof choice of a fragment, not one finite fragment claimed sufficient for every possible formula and schema instance at once.

Within ZFC, reflect T, take the countable transitive collapse and construct a generic for its internally defined Cohen poset. The same fixed-formula proofs give an extension satisfying every Aᵢ and ¬CH. Soundness for the alleged finite contradiction proof says no such structure exists. Hence the alleged stronger-theory contradiction would yield a ZFC contradiction. This effective finite-proof transformation establishes

$$\\operatorname{Con}(\\mathrm{ZFC})\\ \\Longrightarrow\\
\\operatorname{Con}(\\mathrm{ZFC}+\\neg\\mathrm{CH}).$$

The finite-fragment step is the metatheoretic bridge. It uses reflection schema by schema and only asks the ground fragment for the constructions occurring in that fixed proof. The earlier full-M exposition makes their mathematical mechanisms understandable; it is not substituted for this bridge by an assertion that consistency automatically gives a transitive model.

## Worked example 1: one new real need not destroy CH

The poset Fn(omega,2) is countable and c.c.c. It adds a real different from every ground real, by the fresh-coordinate dense sets in Chapter 6. If the ground model satisfies CH, it can nevertheless retain CH: nice names for its reals are coded by countable sequences of elements of a countable set, of which there are continuum many in the ground model, namely aleph-one under CH.

For the count, binary sequences embed into sequences of naturals, and the graph of a natural-number sequence is a subset of omega×omega, giving the reverse continuum bound. Thus the countable-sequence coding has cardinal continuum. Cardinal preservation retains aleph-one, and old reals supply the lower bound. The extension therefore still has exactly aleph-one reals. Newness of one real is not an argument for ¬CH.

## Worked example 2: two rows can always be separated

Suppose a condition already assigns row α at coordinates zero and three, and row β at coordinate one. Coordinate two is fresh for both. Add (α,2)↦0 and (β,2)↦1. This finite extension belongs to the disagreement dense set regardless of the previous bits.

The generic meets such a set for every distinct pair of row indices in M. No one finite condition must separate every pair at once, and the chosen separating coordinate can depend on the pair. The theorem follows from meeting the set-sized family of individual dense requirements, not from producing an impossible finite all-row table.

## Worked example 3: a collapse defeats the cardinal shortcut

Let Q be finite partial functions from omega to the old omega-one. At one fixed argument, the singleton conditions assigning different ordinal values are pairwise incompatible, an uncountable antichain in M. Domain and range dense sets make a generic union a surjection from omega onto the old omega-one.

Thus an old ordinal's large ground name does not make it uncountable in the extension. If a proposed ¬CH argument merely indexed reals by that collapsed ordinal, it would not establish an aleph-two lower bound. Cohen's binary finite-support forcing avoids this failure through the proved c.c.c. theorem. Both examples preserve ordinals; only the latter preservation argument protects their cardinal roles.

## Retained continuum and frontier survey

This final chapter surveys frontiers in logic and foundations: the continuum problem, inner model theory, categorical logic, and the search for new axioms. It serves as a guide to further study and a reminder that the subject remains active.

## The continuum problem

**Hilbert’s first problem.** Is there a cardinal strictly between $\\aleph_0$ and $2^{\\aleph_0}$? Cohen’s forcing showed that CH is independent of ZFC. Candidate additional-axiom programs include forcing axioms, which tend toward $\\neg\\mathrm{CH}$, and Ultimate-$L$ principles, which are intended to support a canonical-inner-model analysis and point toward $\\mathrm{CH}$. These programs are often studied alongside strong large cardinals, but ordinary large-cardinal existence assumptions alone do not settle CH: small forcing can change the continuum while preserving them. Whether any candidate gives the intended final resolution remains controversial.

**Definition 7.4 (forcing axiom).** For a class $\\Gamma$ of posets and a cardinal $\\kappa$, $\\mathrm{FA}_\\kappa(\\Gamma)$ asserts: whenever $\\mathbb P\\in\\Gamma$ and $\\mathcal D$ is a family of at most $\\kappa$ dense subsets of $\\mathbb P$, there exists a filter $G\\subseteq\\mathbb P$ meeting every member of $\\mathcal D$. It does not claim that $G$ meets all dense sets in the universe. Martin's Axiom uses c.c.c. posets and bounded families of dense sets; PFA uses proper posets and $\\omega_1$ dense sets; Martin's Maximum uses a broader stationary-set-preserving class.

**Theorem 7.5 (deep consequence of PFA).** PFA implies $2^{\\aleph_0} = \\aleph_2$. The lower and upper bounds use distinct consequences of PFA; this survey does not reconstruct the upper-bound proof.

## Inner model theory

**Definition 7.6 (inner model).** An *inner model* is a transitive class containing all ordinals that satisfies ZFC. Gödel’s $L$ is the canonical inner model.

**Theorem 7.7.** If $0^\\#$ exists, then $L$ is not the universe of all sets. The existence of $0^\\#$ is equivalent to the existence of a nontrivial elementary embedding $j: L \\to L$.

**Definition 7.8 (core model; scope warning).** A *core model* $K$ is a canonical fine-structural inner model built under hypotheses excluding specified stronger large cardinals. There is no single construction covering all known large-cardinal strength. Core-model arguments often turn failures of covering or correctness into lower bounds on consistency strength.

## Categorical logic

**Definition 7.9 (topos).** A *topos* is a category with finite limits, exponentials, and a subobject classifier. It generalizes the category of sets and provides a framework for intuitionistic higher-order logic.

**Theorem 7.10.** Every topos has an internal logic that is intuitionistic higher-order logic. The subobject classifier $\\Omega$ plays the role of the truth values.

**Definition 7.11 (geometric morphism).** A *geometric morphism* $f: \\mathcal{E} \\to \\mathcal{F}$ between topoi is a pair of adjoint functors $f^* \\dashv f_*$ where $f^*$ preserves finite limits. Geometric morphisms correspond to interpretations of theories.

## The multiverse view

**Hamkins’s multiverse.** Rather than a single universe of sets, the *set-theoretic multiverse* is the collection of all models of set theory, related by forcing, inner models, and other constructions. On this view, CH has no absolute truth value; it is true in some universes and false in others.

**Woodin’s conditional univocity.** Under the assumption of the existence of a proper class of Woodin cardinals, the theory of $L(\\mathbb{R})$ is invariant under set forcing. This suggests a form of conditional absoluteness that may favor a determinate answer to CH.

## Research directions and status boundaries

1. **Reinhardt cardinals without choice.** A Reinhardt cardinal carries a nontrivial elementary embedding $j:V\\to V$ with critical point. The usual Kunen inconsistency rules this out in ZFC. The relative consistency of such embeddings in choiceless ZF is a specialized open direction; this text makes no claim that a Reinhardt cardinal is the “strongest” large-cardinal axiom.
2. **The inner model hypothesis (IMH).** In its parameter-free countable-model formulation, IMH says roughly: if a sentence holds in an inner model of an outer model of the universe, then it already holds in an inner model of the universe. The quantification over outer models is essential. Parameter variants and consistency strength behave differently, so no independence claim follows merely from tension with a stronger axiom.
3. **Proof-search complexity.** This is a research program only after the calculus, formula fragment, input encoding, and decision/search problem are fixed. Particular logics have precise complete problems; “the exact complexity in various logics” is not one mathematical open problem.
4. **Univalent foundations.** Community adoption as a “replacement” for ZFC is not a yes/no mathematical proposition. Precise technical questions concern normalisation, canonicity, models, and computational behaviour for specified univalent type theories.

## Common errors

**Error: grouping independence, open consistency questions, and methodology together.** CH is formally independent of ZFC (assuming the usual consistency hypotheses); it is not an unsolved theorem of ZFC awaiting an ordinary proof. Reinhardt consistency without choice is an open consistency-strength question. Whether a community should use HoTT as its main foundation is methodological. These statuses require different evidence.

**Error: conflating philosophical views with mathematical theorems.** The multiverse view and the univocity view are philosophical stances. They are informed by mathematical results (forcing invariance, inner models) but are not themselves theorems.

**Error: assuming all logics are classical.** Categorical logic, constructive mathematics, and substructural logics provide genuine alternatives with their own theorems and applications.

## Exercises with complete solutions

### 1. Retained frontier exercise {#chapter-16-ex-1}

Explain why PFA implies $2^{\\aleph_0} = \\aleph_2$.

<details><summary>Hint 1</summary>

Separate the lower and upper continuum bounds.

</details>

<details><summary>Hint 2</summary>

MA at omega-one gives the lower bound; the PFA upper bound is a further deep result.

</details>

<details><summary>Solution</summary>

PFA implies $\\mathrm{MA}_{\\omega_1}$, hence $2^{\\aleph_0}\\geq\\aleph_2$. The reverse inequality $2^{\\aleph_0}\\leq\\aleph_2$ is a separate deep consequence of PFA, obtained through proper-forcing/structure arguments; it does not follow from the displayed lower bound or from $\\mathfrak b=\\aleph_2$. Therefore the equality is cited as a theorem here, with the upper-bound proof left to a specialist source.

</details>

### 2. Retained frontier exercise {#chapter-16-ex-2}

Show that the existence of $0^\\#$ implies that $\\aleph_1^V$ is an inaccessible cardinal in $L$.

<details><summary>Hint 1</summary>

State the ambient hypothesis that 0-sharp exists.

</details>

<details><summary>Hint 2</summary>

Use its credited fine-structural consequence rather than calling every indiscernible countable.

</details>

<details><summary>Solution</summary>

The existence of $0^\\#$ gives a proper class of Silver indiscernibles for $L$ and a strong failure of covering between $L$ and $V$. A standard consequence is that every uncountable cardinal of $V$, in particular $\\aleph_1^V$, is inaccessible in $L$. It is false that all Silver indiscernibles are countable in $V$: they form a proper class. The consequence used here belongs to the fine-structure theorem, whose proof is not reconstructed in this survey.

</details>

### 3. Retained frontier exercise {#chapter-16-ex-3}

Construct a topos that is not equivalent to the category of sets.

<details><summary>Hint 1</summary>

Look for a categorical invariant of the terminal object.

</details>

<details><summary>Hint 2</summary>

Compare its subobject count in Set and in Set times Set.

</details>

<details><summary>Solution</summary>

Take the discrete two-point space $X=\\{0,1\\}$. A sheaf is exactly a pair of sets, so $\\mathrm{Sh}(X)\\simeq\\mathbf{Set}\\times\\mathbf{Set}$. Its terminal object $(1,1)$ has four subobjects, while the terminal object of $\\mathbf{Set}$ has two; an equivalence would preserve this subobject lattice. Thus the topoi are not equivalent. Merely saying “$X$ is not a point” is insufficient: the sheaf topos on a nonempty indiscrete space is equivalent to $\\mathbf{Set}$.

</details>

### 4. Retained frontier exercise {#chapter-16-ex-4}

State the inner model hypothesis and explain what further evidence would be needed to establish an independence claim over ZFC.

<details><summary>Hint 1</summary>

Retain the outer-model quantifier in the hypothesis.

</details>

<details><summary>Hint 2</summary>

An independence claim needs separate consistency directions.

</details>

<details><summary>Solution</summary>

In the standard parameter-free countable-model formulation: whenever a sentence $\\varphi$ holds in an inner model of some outer model of the universe, $\\varphi$ already holds in an inner model of the universe. Saying only “forceable over an inner model” omits the outer-model quantifier. A conflict with some stronger large-cardinal theory would not by itself prove independence from ZFC; that requires separate relative-consistency or model results. This chapter records IMH as a specialist research topic and does not claim an independence proof.

</details>

### 5. Retained frontier exercise {#chapter-16-ex-5}

Discuss one open problem from the chapter and its significance.

<details><summary>Hint 1</summary>

Choose a precise technical question rather than a ranking slogan.

</details>

<details><summary>Hint 2</summary>

The choiceless embedding question has a different hypothesis from Kunen inconsistency in ZFC.

</details>

<details><summary>Solution</summary>

The question isolates how elementary embeddings of the universe interact with the axiom of choice. The usual Kunen inconsistency excludes Reinhardt embeddings in ZFC, while choiceless settings require different methods and comparisons. A relative-consistency result would therefore clarify the reach of embedding axioms beyond choice. Calling Reinhardt cardinals the “strongest known” is not a mathematically stable comparison across the partially ordered choiceless large-cardinal landscape.

</details>

### 6. Internal c.c.c. {#chapter-16-ex-6}

Why does external countability of M not replace the internal Delta-system proof of c.c.c.?

<details><summary>Hint 1</summary>

The preserved cardinal names are M's internal cardinals.

</details>

<details><summary>Hint 2</summary>

A set that is externally countable can be internally uncountable.

</details>

<details><summary>Solution</summary>

The preservation proof needs every antichain to have a countable enumeration in M. External countability supplies no such internal enumeration and holds for every M-poset, including the collapsing example. The Delta-system/root-label argument is a ZFC proof performed in M and establishes the required internal bound. This is why the same external countability does not make all forcing cardinal preserving.

</details>

### 7. The possible-values union {#chapter-16-ex-7}

Suppose lambda is below an uncountable ground cardinal mu and each output list is countable in M. Why can their union not cover mu?

<details><summary>Hint 1</summary>

Use one uniform cardinal estimate for all lists.

</details>

<details><summary>Hint 2</summary>

The maximum of the size of lambda and omega is below mu.

</details>

<details><summary>Solution</summary>

In M the union has cardinal at most |lambda| times omega, hence at most max(|lambda|,omega) by infinite cardinal multiplication, with finite cases absorbed. Since mu is an uncountable initial cardinal and lambda<mu, that bound is strictly below mu. The ground set is therefore a proper subset of mu after discarding any candidate values outside mu, so an interpreted function constrained to it cannot be onto. No regularity of mu was assumed.

</details>

### 8. One Cohen real {#chapter-16-ex-8}

Assuming ground CH, explain why adjoining one Cohen real does not by itself force not-CH.

<details><summary>Hint 1</summary>

Count nice names for reals over a countable forcing.

</details>

<details><summary>Hint 2</summary>

Cardinal preservation keeps the ground omega-one unchanged.

</details>

<details><summary>Solution</summary>

A nice real name uses countably many conditions from a countable poset and finite bit labels, so there are at most ground continuum many codes. Under CH this is aleph-one. The valuation map and a surviving ground enumeration give at most aleph-one extension reals, while old reals already give that many and c.c.c. preserves the cardinal. Thus CH can remain true despite a genuinely new real. The many-row injection, not mere newness, is the lower-bound mechanism in Cohen's not-CH construction.

</details>

### 9. Cofinality omega {#chapter-16-ex-9}

Why does the uncountable possible-values argument handle cofinality omega separately?

<details><summary>Hint 1</summary>

A countable union estimate need not be smaller than omega.

</details>

<details><summary>Hint 2</summary>

A finite set cannot be cofinal in a limit ordinal.

</details>

<details><summary>Solution</summary>

When the ground cofinality theta is uncountable, max(|lambda|,omega)<theta for lambda<theta, giving a ground bounded range. At theta=omega that strict cardinal estimate fails. Instead a decrease would have to make the nonzero limit ordinal finitely cofinal, impossible because a finite ordinal subset has a largest element below the limit. The old countable cofinal sequence survives, so cofinality remains omega.

</details>

### 10. A finite fragment, not all ZFC {#chapter-16-ex-10}

What prevents the reflection step from proving existence of a countable transitive model of all ZFC?

<details><summary>Hint 1</summary>

The hypothetical contradiction proof uses finitely many formulas and axiom instances.

</details>

<details><summary>Hint 2</summary>

Reflection is applied separately to the finite ground requirements for that proof.

</details>

<details><summary>Solution</summary>

For a specified finite proof, the name and preservation arguments use a finite collection T of ground requirements. Reflection and collapse supply a countable transitive model of that T, sufficient to contradict the alleged proof's finite axiom list after forcing. There is no one stage or one finite fragment supplied uniformly for every instance of Separation and Replacement and every proof. The proof-by-proof transformation establishes relative consistency; it does not infer a full transitive ZFC model from Con(ZFC).

</details>

## Chapter summary

Finite binary supports, the Delta-system lemma and root agreement prove Cohen c.c.c. Countable possible-value lists preserve cardinals and cofinalities, so distinct generic rows genuinely supply aleph-two many extension reals. Nice-name counts give an exact continuum under stated extra ground arithmetic. Finite reflection turns the transitive-model exposition into the formal relative-consistency direction, which joins the constructible direction to establish independence conditional on consistency. Original frontier statements and five solutions remain at their explicitly cited scope.

## Sources

The earlier logic source chapter-16, including its continuum, inner-model, categorical and methodological readings and original five solutions, is retained above under its stable chapter ID. The Cohen, preservation, name-counting and finite-fragment arguments and five further exercises are new exposition in the Jech/Kunen scope. PFA, sharp/indiscernible and deeper generic-absoluteness results in the retained survey remain cited inputs, not claims proved by the elementary Cohen construction. No model or tool execution is reported.
`;export{e as default};