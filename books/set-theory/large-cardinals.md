
# Large Cardinals

Large cardinal axioms assert the existence of cardinals with properties so strong that they cannot be proved in ZFC alone. Many familiar axioms form a robust implication and consistency-strength hierarchy, but the broader landscape is only partially ordered and depends on the comparison notion. This chapter introduces inaccessible, measurable, and strongly compact cardinals and explains their role in consistency proofs and forcing.

## Inaccessible cardinals

**Definition 9.2 (strong limit).** A cardinal $\kappa$ is a *strong limit* if for every $\lambda < \kappa$, $2^\lambda < \kappa$.

**Definition 9.3 (regular).** A cardinal $\kappa$ is *regular* if it cannot be expressed as a sum of fewer than $\kappa$ many cardinals each smaller than $\kappa$. Equivalently, $\text{cf}(\kappa) = \kappa$.

**Definition 9.4 (inaccessible).** An uncountable cardinal $\kappa$ is *(strongly) inaccessible* if it is regular and a strong limit.

**Theorem 9.5.** If $\kappa$ is inaccessible, then $V_\kappa \models \text{ZFC}$.

**Proof sketch.** The cumulative hierarchy $V_\kappa$ satisfies all ZFC axioms because $\kappa$ is regular (ensuring replacement) and a strong limit (ensuring power set stays below $\kappa$). The axiom of choice holds in $V_\kappa$ by ambient Choice together with the rank bound on the resulting well-order relation, proved below in Theorem 9.1.

**Consistency boundary.** ZFC + “there exists an inaccessible cardinal” proves $\text{Con}(\text{ZFC})$. By Gödel’s second incompleteness theorem, ZFC cannot prove the existence of inaccessible cardinals (assuming ZFC is consistent). Thus the existence of inaccessibles is a genuine strengthening.

## Measurable cardinals

**Definition 9.6 (filter on a cardinal).** A *filter* on $\kappa$ is a collection $F \subseteq \mathcal{P}(\kappa)$ closed under supersets and finite intersections, with $\emptyset \notin F$ and $\kappa \in F$.

**Definition 9.7 (ultrafilter).** An *ultrafilter* is a maximal filter; equivalently, for every $A \subseteq \kappa$, either $A \in U$ or $\kappa \setminus A \in U$.

**Definition 9.8 ($\kappa$-complete).** A filter $F$ is *$\kappa$-complete* if it is closed under intersections of fewer than $\kappa$ many sets.

**Definition 9.9 (measurable cardinal).** An uncountable cardinal $\kappa$ is *measurable* if there exists a nonprincipal $\kappa$-complete ultrafilter on $\kappa$.

**Theorem 9.10.** Every measurable cardinal is inaccessible.

**Proof sketch.** First, nonprincipality together with $\kappa$-completeness makes $U$ *uniform*: a set of size $<\kappa$ is omitted because the intersection of the complements of its singletons is in $U$. If $\kappa$ were the union of $\lambda<\kappa$ small sets, all their complements would lie in $U$ and their intersection would be empty, contradicting $\kappa$-completeness; hence $\kappa$ is regular. For the strong-limit step, if $\kappa$ injected into $\mathcal P(\lambda)$ for some $\lambda<\kappa$, the ultrafilter decides each of the $\lambda$ coordinates. Intersecting those $\lambda$ decisions gives a $U$-large fiber containing at most one point, contradicting uniformity. Thus $2^\lambda<\kappa$.

## Strongly compact cardinals

**Definition 9.11 (strongly compact; filter formulation).** An uncountable regular cardinal $\kappa$ is *strongly compact* if every $\kappa$-complete filter on any set can be extended to a $\kappa$-complete ultrafilter. This is one standard equivalent formulation.

**Definition 9.12 (weakly compact).** A cardinal $\kappa$ is *weakly compact* if it is inaccessible and satisfies certain compactness properties for $L_{\kappa\kappa}$ logic, or equivalently if it has the tree property and is inaccessible.

**Theorem 9.13.** Every strongly compact cardinal is measurable.

Apply the definition to the co-small filter

$$F=\{A\subseteq\kappa:|\kappa\setminus A|<\kappa\}.$$

Regularity makes $F$ $\kappa$-complete. Any ultrafilter extending it omits every singleton, so the resulting $\kappa$-complete ultrafilter is nonprincipal and $\kappa$ is measurable. The cofinite filter would not suffice: intersecting countably many cofinite sets can have infinite complement.

## Large cardinals and forcing

Preservation depends on both the large-cardinal property and the forcing notion; broad slogans about c.c.c. or proper forcing have exceptions. Collapsing the cardinal destroys the property, while carefully prepared forcing can preserve much stronger features.

**Theorem 9.14 (Lévy–Solovay).** Small forcing (forcing of size $< \kappa$) preserves the measurability of $\kappa$.

**Proof architecture.** For the displayed $\kappa$-seed formula, take the ground measure to be normal, with ultrapower embedding $j:V\to N$. For forcing $\mathbb P$ of size $<\kappa$, one may represent it inside $V_\kappa$, so $j(\mathbb P)=\mathbb P$ and the same generic lifts the embedding to $j^*:V[G]\to N[G]$. The lifted embedding yields a measure in the extension by

$$U^*=\{X\subseteq\kappa\text{ in }V[G]:\kappa\in j^*(X)\}.$$

Checking that the lift exists and that $U^*$ is a $\kappa$-complete ultrafilter is the substantive part of the Lévy--Solovay argument. For small forcing one must also prove the stronger generated-filter conclusion: every $X\subseteq\kappa$ in $V[G]$ contains a member of $U$ or its complement contains a member of $U$. Thus the filter generated by the ground-model measure $U$ is already the extended ultrafilter $U^*$ and decides the new subsets as well as the old ones.

For an arbitrary nonnormal ground measure, use its actual ultrapower identity
seed in place of $\kappa$ when recovering that particular measure. The next
chapter proves this distinction. The direct generated-filter proof below
preserves every ground measure and does not require normality.

## Common errors

**Error: overlooking direct implication.** Every measurable cardinal is directly provably inaccessible, as the uniformity argument above shows. This implication also yields a consistency-strength comparison, but the two kinds of statement should be recorded separately.

**Error: assuming measurability survives passage to $L$.** Scott's theorem implies that $L$ has no cardinal that is measurable *in $L$*. A cardinal measurable in the ambient universe $V$ may remain a cardinal of $L$, but its $V$-measure need not belong to $L$ or measure all constructible subsets there in the required internal sense.

**Error: using large cardinal axioms as ordinary theorems.** A large cardinal axiom is an additional assumption. A proof that uses it produces a conditional theorem: “If there exists a measurable cardinal, then ...”

## Full model proof at an inaccessible cardinal

The earlier model statement is expanded here with its rank and size bounds. Suppose κ is inaccessible. Induction on α<κ gives |Vₐ|<κ. At a successor this follows from the strong-limit inequality applied to the previous size. At a limit below κ it follows from regularity: fewer than κ earlier stages, each of smaller size, have a union of smaller size. The empty and finite cases satisfy the same bound. The union at κ has size at most κ, while it contains every smaller ordinal, so |Vκ|=κ.

**Theorem 9.1.** Vκ satisfies every ZFC axiom.

*Proof.* It is transitive. Extensionality and Foundation therefore transfer by actual membership. Empty Set and Infinity are present because κ is uncountable. Pairing and Union remain below κ by their finite rank increases. If a∈Vκ has rank ρ<κ, all its actual subsets have rank at most ρ and its power set has rank at most ρ+1<κ. Thus Vκ has the correct full power set of each of its elements.

For a Separation instance, evaluate its fixed formula in the set structure Vκ and separate from a in the ambient universe. The resulting subset has rank at most rank(a), hence lies in Vκ. This proves internal Separation without requiring the formula itself to be absolute between Vκ and V.

For Replacement, suppose a fixed formula interpreted in Vκ assigns one output there to each element of a∈Vκ. Ambient Replacement, using satisfaction in that one set structure, collects the output set B. The domain a has cardinal below κ because it is contained in some Vₐ with α<κ. Hence B has cardinal below κ. Its outputs have ranks below κ; regularity bounds that smaller family of ranks strictly below κ. The rank equation then puts B in Vκ. This proves each Replacement instance.

Finally, any a∈Vκ has an ambient well order by Choice. Its relation is a subset of a×a, so has rank bounded by rank(a) plus a fixed finite amount, still below the limit κ. That relation belongs to Vκ and remains a well order internally. Thus every internal set is internally well orderable and Vκ satisfies Choice. These cases prove all ZFC axioms. ∎

Strong limit controlled the sizes of the hierarchy stages; regularity bounded the Replacement range ranks. Merely being a limit ordinal closed under several finite operations would not justify the range bound. The theorem gives a set model and hence consistency of ZFC in the stronger theory with an inaccessible. It does not establish consistency of that stronger theory or turn the inaccessible hypothesis into a ZFC theorem.

## The measurable-to-inaccessible implication without a sketch

Let U be a nonprincipal κ-complete ultrafilter on uncountable κ. First every subset A of size below κ is omitted by U. Each singleton is omitted by nonprincipality. The intersection of the fewer than κ singleton complements indexed by A belongs to U, so κ without A belongs to U and A cannot. This is uniformity.

If cf(κ)=μ<κ, a cofinal sequence partitions κ into μ bounded pieces, each of size below κ. Their complements all belong to U by uniformity. κ-completeness puts their intersection in U, but that intersection is empty, a contradiction. Thus κ is regular.

If 2 to the power λ were at least κ for some λ<κ, choose an injection f:κ→the power set of λ using cardinal comparability. For every coordinate ξ<λ, U chooses one of the two sets of α determined by whether ξ∈f(α). Intersect all those fewer than κ choices. The intersection belongs to U and all its members have exactly the same f-value. Injectivity allows at most one member, contrary to uniformity. Therefore 2 to the power λ<κ for every λ<κ. Together with uncountability and regularity, this proves inaccessibility in full.

The coordinate argument uses a single injection, not a claim that one set can represent all subsets at once. Its small intersection size is precisely λ<κ. It does not prove an analogous bound at λ=κ, where Cantor's theorem gives the opposite strict inequality.

## Strong compactness and infinitary logic

The co-small filter on regular κ is κ-complete: a union of fewer than κ small complements is still small. Strong compactness extends it to a κ-complete ultrafilter. Since the co-small filter contains every singleton complement, the extension is nonprincipal and witnesses measurability. This proves the earlier direct implication.

Here is also the full compactness argument used in the original fifth exercise. Let T be an Lκκ theory whose every subtheory of size below κ has a model. Put I equal to the set of its smaller subtheories. For a smaller set a⊆T let Xₐ={s∈I:a⊆s}. These cones generate a proper κ-complete filter: intersections of fewer than κ cones contain the cone indexed by their union, which still has size below κ by regularity. Strong compactness extends this filter to a κ-complete ultrafilter W.

Choose a model Mₛ of s for each s∈I by Collection and Choice. Form their ultraproduct modulo W. The usual coordinate definition makes atomic functions and relations well defined: equal representative functions agree on a W-large set, and finite intersections retain that agreement for all arguments.

Prove the Lκκ Łos equivalence by induction on formulas. Atomic and negation cases use the definitions and the ultrafilter law. For a conjunction of λ<κ formulas, membership of every truth set in W is equivalent to membership of their intersection, by κ-completeness and upward closure. This gives precisely the infinitary conjunction clause; disjunction follows by complements. For an existential block of fewer than κ variables, if the coordinate existential holds on a W-large set, choose a witness tuple in each such coordinate model and arbitrary default values elsewhere. Its component functions supply ultraproduct witnesses, and the body induction hypothesis proves the existential. Conversely any ultraproduct witness functions make their body truth set W-large by induction, and that set lies inside the coordinate existential truth set. Universal blocks follow by negation.

For every sentence φ∈T, the cone of subtheories containing φ belongs to W, and each corresponding coordinate model satisfies φ. Łos therefore puts φ into the ultraproduct theory. The ultraproduct satisfies all T, proving the stated compactness theorem. This is a full implication from the filter formulation of strong compactness; equivalences with other large-cardinal formulations need their own directions.

## A complete small-forcing measure-extension proof

The earlier Lévy–Solovay embedding paragraph is retained as another proof route. Its generated-filter conclusion has a direct Boolean proof. Work over a countable transitive M with a measure U on κ and a forcing P of ground size δ<κ. Its regular-open completion B has size at most 2 to the power δ, because its elements are subsets of P. Measurability has just proved κ strong limit, so |B|<κ.

For a name X for a subset of κ, consider the ground function sending α<κ to bₐ=||check(α)∈X|| in B. Its fibers partition κ into fewer than κ pieces. Exactly one fiber A belongs to U: if none did, κ-completeness would put the intersection of all their complements in U and make it empty; two disjoint fibers cannot both belong to a proper filter. Thus A∈U and the membership value is one fixed b on all of A.

The Boolean generic decides b. If b is in it, the truth theorem gives A⊆X in the extension. If its complement is in it, A⊆κ without X. Consequently every new subset of κ contains an old U-member or its complement contains one. The filter generated by the old U therefore decides every extension subset, so it is an ultrafilter U*. It is a set in the extension by Separation from its internal power set of κ. It is nonprincipal because singleton complements already belong to U.

To prove κ-completeness for **new** families, let λ<κ and let Xᵢ∈U* for i<λ be a family in the extension. Choose witnesses Aᵢ∈the ground U with Aᵢ⊆Xᵢ using extension Choice. At a condition forcing this witness function, each coordinate has a maximal antichain deciding which element of the ground set U it names. Every antichain has size at most δ. The union of all coordinate possibilities is therefore a ground family C⊆U of cardinal at most max(|λ|,δ,omega), strictly below κ. κ-completeness of the old U puts the intersection of C in U. It is included in every actual Aᵢ and hence every Xᵢ. Thus their intersection belongs to the generated filter U*.

The same possible-values bound shows κ stays an uncountable regular cardinal: any proposed surjection or cofinal map from λ<κ has a range covered by a ground set of size below κ, so cannot exhaust or be cofinal in κ. Therefore U* is genuinely a κ-complete nonprincipal ultrafilter on the preserved cardinal κ, and the extension still regards κ as measurable. This completes the small-forcing preservation statement, including the part that merely writing an embedding lift had left to prove.

The old U as a set contains only ground subsets and is not itself the full new ultrafilter. Its **generated** filter U* also includes new supersets of ground U-members. The proof establishes κ-completeness against new sequences, rather than checking only old indexed intersections. Both distinctions are necessary in a preservation theorem.

## Worked example 1: a rank segment and its own power set

Let κ be inaccessible and a∈Vκ. Every ambient subset of a belongs to Vκ, and their collection also belongs there, by the rank bound in Theorem 9.1. Hence the model's power set of a agrees with the ambient power set. This differs from L's internal power set, which collects only constructible subsets.

The agreement does not make Vκ an elementary substructure of V. It can still disagree on an unbounded assertion such as existence of an inaccessible cardinal above a specified ordinal. Correct internal power sets for its small elements are one closure property, not agreement on every first-order formula.

## Worked example 2: a free ultrafilter on omega

In ZFC a nonprincipal ultrafilter on omega exists and is closed under finite intersections. That is omega-completeness, since fewer than omega means finite. It does not make omega a measurable cardinal under the definition here, which explicitly requires uncountability.

Intersect the complements of all singletons of omega. Each belongs to the ultrafilter, but their countable intersection is empty. Thus it is not omega-one-complete. The parameter in a completeness statement specifies which intersections are required; finite closure alone is much weaker than the uncountable measure hypothesis.

## Worked example 3: adding a real below a measure

If κ is measurable, one Cohen real is added by a countable forcing, whose size is below κ. The theorem therefore preserves measurability of κ while Chapter 6's dense sets make the real genuinely new. For any new subset of κ, fewer than κ Boolean membership values yield one U-large constant fiber, which decides it for the generated measure.

A forcing that collapses κ to omega cannot preserve measurability of that old ordinal as an uncountable cardinal. It is outside the small-forcing theorem's hypothesis: the possible-values argument would forbid such a collapse if its size were below κ. This separates preservation under specified small forcing from an unsupported claim about all forcing.

## Exercises with complete solutions

### 1. Retained exercise {#large-cardinals-ex-1}

Show that $\aleph_\omega$ is not inaccessible.

<details><summary>Hint 1</summary>

Exhibit a short cofinal sequence.

</details>

<details><summary>Hint 2</summary>

The finite aleph stages approach their omega-indexed supremum.

</details>

<details><summary>Solution</summary>

$\aleph_\omega = \bigcup_{n < \omega} \aleph_n$. This expresses $\aleph_\omega$ as a countable union of smaller cardinals, so $\text{cf}(\aleph_\omega) = \omega < \aleph_\omega$. Hence $\aleph_\omega$ is not regular, so not inaccessible.

</details>

### 2. Retained exercise {#large-cardinals-ex-2}

Prove that if $\kappa$ is inaccessible, then $|V_\kappa| = \kappa$.

<details><summary>Hint 1</summary>

Induct on the sizes of the earlier rank stages.

</details>

<details><summary>Hint 2</summary>

Use strong limit at successors and regularity at limits.

</details>

<details><summary>Solution</summary>

By transfinite induction on $\alpha < \kappa$, $|V_\alpha| < \kappa$. For successor stages, $|V_{\alpha+1}| = 2^{|V_\alpha|} < \kappa$ since $\kappa$ is a strong limit. For limit stages, $|V_\lambda| = \sup_{\alpha < \lambda} |V_\alpha| < \kappa$ since $\kappa$ is regular. Hence $|V_\kappa| = \sup_{\alpha < \kappa} |V_\alpha| \leq \kappa$. Since $\kappa \subseteq V_\kappa$, equality holds.

</details>

### 3. Retained exercise {#large-cardinals-ex-3}

What supply of inaccessible cardinals follows below a measurable cardinal, and why does it not give a proper class?

<details><summary>Hint 1</summary>

Keep the cardinal bound of the conclusion.

</details>

<details><summary>Hint 2</summary>

A normal-measure or ultrapower argument gives inaccessibles below the given measurable, not above every ordinal.

</details>

<details><summary>Solution</summary>

A measurable $\kappa$ is Mahlo; in particular, inaccessible cardinals are unbounded below $\kappa$ (one standard proof uses a normal measure derived from the ultrapower). This produces a set of inaccessibles bounded by $\kappa$. Iterating facts *inside* $V_\kappa$ never produces cardinals above $\kappa$, so one measurable cardinal does not imply a proper class of inaccessibles.

</details>

### 4. Retained exercise {#large-cardinals-ex-4}

Explain why ZFC cannot prove “there exists an inaccessible cardinal.”

<details><summary>Hint 1</summary>

Use the set-model theorem first.

</details>

<details><summary>Hint 2</summary>

Then apply the second incompleteness theorem under its consistency hypothesis.

</details>

<details><summary>Solution</summary>

If ZFC proved the existence of an inaccessible, then ZFC would prove $\text{Con}(\text{ZFC})$, since $V_\kappa \models \text{ZFC}$ for inaccessible $\kappa$. This contradicts Gödel’s second incompleteness theorem, assuming ZFC is consistent.

</details>

### 5. Retained exercise {#large-cardinals-ex-5}

Let $\kappa$ be strongly compact. Show that the compactness theorem holds for $L_{\kappa\kappa}$: if every subset of size $< \kappa$ of a theory in $L_{\kappa\kappa}$ has a model, then the whole theory has a model.

<details><summary>Hint 1</summary>

Index coordinate models by small subtheories.

</details>

<details><summary>Hint 2</summary>

A fine complete ultrafilter puts each theory sentence into almost every relevant model.

</details>

<details><summary>Solution</summary>

Let $I=\mathcal P_\kappa(T)$, the set of subtheories of size $<\kappa$, and choose a model $M_s\models s$ for each $s\in I$. On $I$, the sets $X_a=\{s:a\subseteq s\}$ for $a\in\mathcal P_\kappa(T)$ generate a $\kappa$-complete fine filter: the intersection of fewer than $\kappa$ generators contains the generator indexed by their union. Extend it to a $\kappa$-complete ultrafilter $U$. For every $\varphi\in T$, $X_{\{\varphi\}}\in U$, so $M_s\models\varphi$ for $U$-almost every $s$. The $L_{\kappa\kappa}$ form of Łoś's theorem, whose conjunction and quantifier steps use $\kappa$-completeness, gives $\prod_s M_s/U\models T$.

</details>

### 6. Replacement at V-kappa {#large-cardinals-ex-6}

Why is regularity needed after the output set has been collected externally?

<details><summary>Hint 1</summary>

Every output individually has rank below kappa.

</details>

<details><summary>Hint 2</summary>

A smaller family of those ranks needs one common bound below kappa.

</details>

<details><summary>Solution</summary>

The input set has size below kappa by the stage-size theorem, so its unique output set has fewer than kappa elements. Regularity bounds all their ranks by one ordinal below kappa. The rank equation then puts the collected range in V-kappa. Knowing only that each individual output belongs to V-kappa would not bound an arbitrary family of outputs and would leave Replacement unproved.

</details>

### 7. One measure-large fiber {#large-cardinals-ex-7}

Prove that a partition of kappa into fewer than kappa pieces has exactly one U-large piece.

<details><summary>Hint 1</summary>

If every piece were omitted, all their complements would belong to U.

</details>

<details><summary>Hint 2</summary>

Use completeness and then disjointness.

</details>

<details><summary>Solution</summary>

Completeness would put the intersection of all those complements in U, but the partition exhausts kappa so that intersection is empty. Hence at least one piece belongs to U. Two distinct pieces are disjoint and cannot both belong to a proper filter. This proves uniqueness as well as existence of the fiber used by the Boolean small-forcing argument.

</details>

### 8. New intersections {#large-cardinals-ex-8}

Why does checking old indexed intersections of U not establish completeness of U-star in the extension?

<details><summary>Hint 1</summary>

The extension can have new sequences of old witness sets.

</details>

<details><summary>Hint 2</summary>

Cover their coordinate possibilities by a ground family of size below kappa.

</details>

<details><summary>Solution</summary>

Completeness in the extension quantifies over every extension sequence of length below kappa, including sequences absent from the ground model. The small-forcing antichains cover all its possible ground U-witnesses by one ground family C of size below kappa. Intersecting C in the old U then gives a member below every actual sequence entry. Without this cover, the old completeness theorem could not be applied to a new index sequence.

</details>

### 9. The size hypothesis {#large-cardinals-ex-9}

Does the proof establish preservation of measurability by every c.c.c. forcing?

<details><summary>Hint 1</summary>

Locate the Boolean-algebra size bound.

</details>

<details><summary>Hint 2</summary>

C.c.c. alone does not make that entire algebra smaller than kappa.

</details>

<details><summary>Solution</summary>

No. The proof uses |B| at most two to the power |P| below kappa to partition kappa into fewer than kappa membership-value fibers. C.c.c. bounds antichains but can leave the algebra very large, so the stated fiber argument need not apply. The theorem proved is small-forcing preservation; a broader preservation or destruction claim needs another theorem.

</details>

### 10. Infinitary conjunction {#large-cardinals-ex-10}

Where does kappa-completeness enter the L-kappa-kappa Los proof?

<details><summary>Hint 1</summary>

A conjunction has fewer than kappa component truth sets.

</details>

<details><summary>Hint 2</summary>

Their intersection must remain in the ultrafilter.

</details>

<details><summary>Solution</summary>

If every component is true on a U-large set, the conjunction is true on the intersection of those fewer than kappa sets, which completeness keeps U-large. Conversely an intersection in U makes each containing component U-large. For kappa many conjuncts this inference is outside kappa-completeness, so the syntax bound and the filter bound must agree.

</details>

## Chapter summary

Inaccessible rank segments satisfy ZFC by explicit size, rank and range bounds. Complete nonprincipal measures are uniform and force regularity and strong-limit arithmetic. Strong compactness yields a fine complete ultrafilter and the full infinitary compactness argument. Small forcing preserves a measure through its generated filter, including completeness for new indexed families. Large-cardinal hypotheses remain conditional, and cited stronger inner-model results retain their stated scope.

## Sources

The original logic large-cardinals source and all five solutions remain, with new full model, measure, infinitary-ultraproduct and small-forcing arguments and five additional supported exercises. Jech and Kunen are the comparison texts. Scott's inner-model theorem remains cited at its original scope. The following ultrapower chapter proves the normal-measure club and Mahlo consequences used here. No proof assistant, forcing construction or code is executed.
