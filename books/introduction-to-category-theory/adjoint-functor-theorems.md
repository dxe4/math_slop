
# Adjoint Functor Theorems

The preceding chapter constructed adjoints by explicit words, sums and quotients. An existence theorem starts with a different question: when can a universal object be forced by completeness and a manageable supply of candidates? The solution-set condition is the size bound that makes the construction possible. It is not a substitute for the limit hypotheses.

Read [limits](limits-colimits.md), [adjunctions](adjunctions.md) and [size and representative conventions](natural-transformations-equivalence.md). Categories are locally small. Completeness means existence of all limits indexed by sets at the chosen size, including a terminal object. Selecting one universal object for each source object uses the same representative convention as the equivalence theorem: ordinary choice suffices for a small object collection; a larger collection requires the stated larger-universe or supplied-selection convention. This chapter expands the earlier Morphisms First adjoint-theorem statement and supplies its construction rather than leaving it as an imported proof.

## 1. Universal arrows and comma categories

For G:D→C and X∈C, the comma category (X↓G) has objects (Y,u:X→GY). An arrow (Y,u)→(Y′,u′) is a map a:Y→Y′ with Ga∘u=u′. Identities and composition satisfy that equation. Its hom collections are subsets of those in D, so it is locally small.

An initial object (FX,η_X) gives a unique factorisation of every u:X→GY as Gv∘η_X, with v:FX→Y. If these initial objects are chosen for every X, they define a left adjoint. For f:X→X′, define Ff as the unique factorisation of η_X′f through η_X. Uniqueness gives the identity and composition laws, and the same equations prove η natural. The factorisation bijections are natural in Y by postcomposition, and in X by that definition of Ff. Thus they form the required adjunction.

**Lemma 8.1.** If D is complete and G preserves small limits, then (X↓G) is complete.

*Proof.* A small diagram in the comma category gives a diagram of objects Y_j in D and compatible arrows u_j:X→GY_j. Take its limit L in D. Preservation means GL with its image projections is a limit of the image diagram. The u_j therefore determine a unique u:X→GL. This gives a comma cone. Any other comma cone has a unique underlying factorisation to L in D. Applying G and comparing all projections shows it also respects u, by uniqueness in the target limit. Thus it is the unique comma factorisation. The empty diagram is covered by preservation of the terminal object. ∎

## 2. From a weakly initial set to an initial object

A family (W_i) indexed by a set is weakly initial if every object receives at least one arrow from some W_i. The source may depend on the target, and uniqueness is not assumed. A weakly initial object is the single-object version.

**Lemma 8.2 (Initial-object construction).** A complete locally small category with a weakly initial set has an initial object.

*Proof.* Form P=∏W_i. For any target A, choose an arrow W_i→A furnished by weak initiality and compose it with the i-th projection. Hence P is weakly initial. The category is nonempty because completeness includes a terminal object; the weakly initial family therefore cannot be empty.

The endomorphisms of P form a set by local smallness. Take their simultaneous equaliser with id_P, written e:E→P. It can be constructed by one product and one equaliser. Thus he=e for every endomorphism h of P, and e is monic. E is weakly initial as well, because E→P followed by any available map from P reaches every object.

To prove uniqueness, let a,b:E→A and let q:Q→E be their equaliser. Weak initiality of P supplies u:P→Q. The composite h=e q u is an endomorphism of P, so he=e. Therefore e q u e=e. Cancel the monomorphism e to obtain q u e=id_E. Thus q is split epic as well as monic, and is an isomorphism: a monic split epimorphism has its one-sided inverse as a two-sided inverse by cancellation. Since aq=bq, invertibility gives a=b. E already had at least one map to every object, so it is initial. ∎

The order of operations matters. Taking a product combines a set of candidates into one weakly initial object. Equalising all of its endomorphisms then removes the nonuniqueness. Local smallness is used to make that second indexing collection a set; completeness is used for both stages.

## 3. Freyd's general adjoint functor theorem

The solution-set condition for G says: for every X∈C, there is a set of arrows u_i:X→GY_i such that every arrow u:X→GY factors as Ga∘u_i for some i and a:Y_i→Y. In other words, (X↓G) has a weakly initial set. The condition is about factorisation, not merely about a set of target isomorphism classes.

**Theorem 8.3 (General adjoint functor theorem).** Let D be complete and locally small, C locally small, and G:D→C preserve small limits. Under the stated representative-selection convention, G has a left adjoint exactly when it satisfies the solution-set condition.

*Proof.* If G has left adjoint F, the unit η_X:X→GFX is a one-member solution set: every u has its unique transpose factorisation through it.

Conversely, Lemma 8.1 makes each comma category complete, and it is locally small. The solution-set condition supplies its weakly initial set. Lemma 8.2 supplies an initial object. Choosing these initial objects and using the construction in Section 1 gives the functor F, its unit and a natural hom-set bijection. Thus F⊣G. ∎

Right adjoints preserve small limits by the preceding chapter, so limit preservation is also necessary when the relevant source limits exist. The theorem combines that preservation with completeness and a size bound; none is asserted to imply the others.

## 4. Constructing free groups without assuming one already exists

**Worked example 8.4.** The forgetful U:Grp→Set preserves small limits, proved by coordinatewise group operations in the preceding chapter. That proof also gives completeness of Grp from the set construction, and local smallness is inherited from function sets.

Fix a set X and a function u:X→UH. Its image generates a subgroup K of H. Every member of K is a product of finitely many u(x) and their inverses, including the empty product. Thus its cardinality is at most κ=max(|X|,ℵ₀): finite words on at most that many symbols form a set of cardinality at most κ. This is just a bound on products already in H; it does not assume that a free group has been constructed.

There is a set of isomorphism representatives for groups of cardinality at most κ. One can take all group structures on subsets of a fixed set of size κ: their multiplication tables, identity choices and inverse functions belong to sets of functions. Every group of that bounded size is isomorphic to one of these structures. Include every function X→the underlying set of every such representative. This is a set, being a set-indexed union of function sets.

The original u factors through its generated subgroup K, then through an isomorphic chosen representative, and finally into H. Hence the displayed family is a solution set. The general theorem constructs a free group on X as an initial object in (X↓U). It proves existence and its universal mapping property without providing a reduced-word algorithm or asserting that an implementation was executed. A later explicit presentation can be identified with this object by compatible uniqueness.

## 5. The special theorem and its bounded subobjects

A category is well-powered if each object has only a set of subobjects up to isomorphism over that object. A subobject is represented by a monomorphism, with two representatives equivalent when an isomorphism makes their inclusions agree. A set of cogenerators (S_i) detects distinct parallel arrows: whenever a,b:A→B differ, some h:B→S_i has ha≠hb.

**Theorem 8.5 (Special adjoint functor theorem).** Suppose D is complete, locally small, well-powered and has a set of cogenerators. Any small-limit-preserving G:D→C, with C locally small, has a left adjoint under the same representative-selection convention.

*Proof.* We prove the solution-set condition. First G preserves monomorphisms: the self-pullback of a mono m:A→B is A with its two identity projections. Preservation of that square means that any two arrows into GA having equal composites with Gm are equal, by the pullback uniqueness. Hence Gm is monic.

Fix u:X→GD. Consider all subobjects m:D′→D through which u factors after applying G. There is a set of representatives by well-poweredness and it includes id_D. Intersect them using a small limit. Since G preserves that intersection and its monomorphisms, the unique factorisations of u are compatible and give a factorisation u=Gm∘u′ through the intersection m:D′→D.

This factorisation is minimal: if u′ factors through Gn for a subobject n:E→D′, then mn is one of the original admissible subobjects. The intersection property gives a factorisation m through mn. Cancelling m shows n has a right inverse; since n is monic, it is an isomorphism.

For each cogenerator S_i, the function
$$\operatorname{Hom}_D(D',S_i)\longrightarrow
\operatorname{Hom}_C(X,GS_i),\qquad a\longmapsto Ga\,u'$$
is injective. If a,b have the same image, their equaliser q:E→D′ is preserved by G, so u′ factors through Gq. Minimality makes q an isomorphism and gives a=b.

Put H_i=Hom_C(X,GS_i), a set. The displayed injection identifies the maps D′→S_i with a subset T_i⊆H_i. Evaluation against all those maps gives a monomorphism
$$D'\longrightarrow P_T=\prod_i S_i^{T_i},$$
because the cogenerators detect unequal arrows into D′. There is a set of possible tuples of subsets T_i, so there is a set of products P_T. Well-poweredness supplies a set of subobject representatives for each of them. Their union is a set of possible representatives B for D′, independent of the original D,u.

Include every arrow X→GB for those representatives. Local smallness of C makes this a set. Every u factors through one such B and then into its original D by the construction. This is the solution-set condition, so Theorem 8.3 gives the adjoint. ∎

The subsets T_i avoid an unnecessary assumption that a map to each cogenerator always exists. Only actual evaluation maps index the product. Some T_i may be empty; empty product factors contribute the terminal-object convention and cause no missing-coordinate choice.

## 6. Examples and a completeness failure

**Worked example 8.6.** Set is well-powered because subobjects are represented by subsets. The two-element set is a cogenerator: if two functions differ at a point, a characteristic function separating their two values distinguishes the composites. Set is complete by Chapter 6. Thus a limit-preserving functor with domain Set satisfies the special theorem's source hypotheses. This is a sufficient criterion, not a statement that every functor out of Set preserves limits.

For example the constant singleton functor Set→Set preserves all limits, including the terminal object. Its left adjoint is the constant empty-set functor: Hom(empty,Y) and Hom(X,singleton) are both singletons, naturally. Both assignments preserve the stated empty-diagram behaviour, and their unit/counit triangles follow from uniqueness. This provides a small explicit instance independent of a free-algebra construction.

**Worked example 8.7.** The inclusion i:fgAb→Ab has no left adjoint. If L existed, apply its hom bijection to X equal to the direct sum of countably many copies of Z and target Z. The set Hom_Ab(X,Z) is the set of integer sequences, which is uncountable by the binary-sequence diagonal argument. But Hom_fgAb(LX,Z) is countable: a finitely generated group map is determined by finitely many integer images. No bijection exists.

The failure cannot be repaired by checking only a solution set. The category fgAb is essentially small: every finitely generated abelian group has a finite integer presentation and a Smith classification. Choosing a set of representatives and all arrows from a fixed X into their inclusions gives a solution set. But fgAb is not complete, as Chapter 6 proved by its missing countable product of copies of Z. Its finite limits do not meet the general theorem's complete-source hypothesis.

## 7. Exercises

### CAT-08-01 — Comma arrows

Write the equation defining an arrow in (X↓G) and verify closure under composition.

<details><summary>Hint 1</summary>
The fixed source X does not change along the arrow.
</details>
<details><summary>Hint 2</summary>
Apply functoriality to a composite in D.
</details>
<details><summary>Solution</summary>
An arrow a:(Y,u)→(Y′,u′) satisfies Ga u=u′. If b:(Y′,u′)→(Y″,u″), then G(ba)u=Gb Ga u=Gb u′=u″. Thus the composite is a comma arrow, and identities satisfy the same equation by the identity law. These checks define an actual category before initial objects are discussed. The hom collection is a subset of Hom_D(Y,Y′), so local smallness is inherited.
</details>

### CAT-08-02 — Unit as a solution set

Show that the unit of a known adjunction supplies a one-member solution set at each X.

<details><summary>Hint 1</summary>
Transpose any u:X→GY.
</details>
<details><summary>Hint 2</summary>
Use the formula u=Gv η_X for its inverse transpose v.
</details>
<details><summary>Solution</summary>
The adjunction gives a unique v:FX→Y whose transpose is u. The transpose formula is exactly Gv η_X=u. Therefore every candidate u factors through η_X, with the fixed target FX. A solution set requires at least one such factorisation, so the single object and arrow suffice. Its stronger uniqueness is the already known universal property, rather than a requirement in the weak solution-set condition.
</details>

### CAT-08-03 — Why local smallness enters

Identify the set whose existence is needed when equalising all endomorphisms of the weakly initial object P.

<details><summary>Hint 1</summary>
Completeness only provides set-indexed products and equalisers.
</details>
<details><summary>Hint 2</summary>
The required index is Hom(P,P).
</details>
<details><summary>Solution</summary>
The simultaneous equaliser uses one comparison for every endomorphism of P, so it is indexed by Hom(P,P). Local smallness ensures this collection is a set. Without that guarantee, small completeness would not justify the construction. One cannot invoke a proper-class product under a theorem that assumes only small limits. This is a specific use of the size hypothesis, separate from the later choice of initial representatives.
</details>

### CAT-08-04 — Equaliser becomes invertible

In Lemma 8.2, prove that q u e=id_E and monicity of q imply q is an isomorphism.

<details><summary>Hint 1</summary>
The composite u e is a right inverse of q.
</details>
<details><summary>Hint 2</summary>
Cancel q from q(u e)q=q.
</details>
<details><summary>Solution</summary>
Set r=u e:E→Q. The equation gives qr=id_E. Then q(rq)=q=id_E q. Monicity of q gives rq=id_Q. Thus r is both a left and right inverse, and q is invertible. Composing aq=bq with that inverse gives a=b. This is the step converting the weak existence of maps from E into their uniqueness.
</details>

### CAT-08-05 — Bounded generated groups

Explain why a group generated by the image of a set X has cardinality at most max(|X|,ℵ₀).

<details><summary>Hint 1</summary>
Every element is a finite product of generators and their inverses.
</details>
<details><summary>Hint 2</summary>
Take the union over all finite word lengths.
</details>
<details><summary>Solution</summary>
There are at most max(|X|,ℵ₀) finite strings on X with inverse signs, including the empty string. Evaluation of those strings surjects onto the generated subgroup. Its cardinality therefore cannot exceed that bound. Relations only identify evaluated strings and cannot increase the count. This uses products in an already given group, so it does not presuppose existence of a free group or a reduced-word construction.
</details>

### CAT-08-06 — A source of solution sets

Why is there a set of group structures on subsets of a fixed set K, and why does that suffice for bounded-size groups?

<details><summary>Hint 1</summary>
For each subset, multiplication and inversion are functions on sets.
</details>
<details><summary>Hint 2</summary>
Transport any bounded-size group's operations along a bijection to a subset.
</details>
<details><summary>Solution</summary>
There is a set of subsets of K. For each, all binary operations, inverse functions and chosen identities belong to function sets and a finite product of such sets. Group structures form a subset cut out by the axioms, so their union is a set. Any group of size at most |K| is isomorphic to one carried by a subset of K, by transporting its operations through a bijection. Including all arrows from X into these representatives therefore gives a set large enough to cover the generated-subgroup factorisations.
</details>

### CAT-08-07 — Well-powered sets

Prove Set is well-powered by relating arbitrary monomorphisms into X to subset inclusions.

<details><summary>Hint 1</summary>
Monomorphisms in Set are injective functions.
</details>
<details><summary>Hint 2</summary>
Factor an injection through its image by a bijection.
</details>
<details><summary>Solution</summary>
An injection A→X factors as a bijection A→image followed by inclusion of that subset. Hence it represents the same subobject as the inclusion. Two subset inclusions are equivalent over X exactly when the subsets agree, since any commuting isomorphism must preserve their elements as points of X. Subobjects are therefore classified by the power set of X, a set. This proves well-poweredness while retaining the equivalence-over-the-target condition.
</details>

### CAT-08-08 — A set cogenerator

Verify that {0,1} detects distinct functions A→B.

<details><summary>Hint 1</summary>
Choose a point where the two functions differ.
</details>
<details><summary>Hint 2</summary>
A characteristic function of one of its two images separates them.
</details>
<details><summary>Solution</summary>
For unequal f,g choose a with f(a)≠g(a). The characteristic function of the singleton {f(a)} maps f(a) to one and g(a) to zero. Its composites with f and g differ at a. Thus the two-element set is a cogenerator. The definition detects parallel arrows by postcomposition; a generator would instead test them by precomposition, so the direction is essential.
</details>

### CAT-08-09 — Minimality and equalising

In Theorem 8.5, explain why two maps D′→S_i agreeing after G and u′ must be equal.

<details><summary>Hint 1</summary>
Take their equaliser in D.
</details>
<details><summary>Hint 2</summary>
Preservation lifts u′ through that equaliser, and minimality forbids a proper subobject.
</details>
<details><summary>Solution</summary>
If Ga u′=Gb u′, preservation of the equaliser q gives a factorisation of u′ through Gq. The minimal admissible subobject D′ has no proper subobject admitting such a factorisation. Hence q is invertible. Since aq=bq, invertibility gives a=b. This proves the hom-set injection used to bound the cogenerator evaluation coordinates by Hom_C(X,GS_i).
</details>

### CAT-08-10 — Empty evaluation families

Why does the special-theorem proof use subsets T_i of H_i rather than requiring exactly H_i many actual maps D′→S_i?

<details><summary>Hint 1</summary>
The map from actual morphisms into H_i is injective but need not be onto.
</details>
<details><summary>Hint 2</summary>
There might be no actual map to a particular cogenerator.
</details>
<details><summary>Solution</summary>
Only the image T_i corresponds to genuine evaluation maps. Filling every H_i coordinate would require choosing additional maps when some elements are not realised, which may be impossible, especially if the actual hom set is empty. Taking the product indexed by T_i uses exactly the available maps. The set of all possible subsets still provides a uniform set-sized family of products, so the bound needed for the solution set is retained without inventing morphisms.
</details>

### CAT-08-11 — A constant adjunction

Prove directly that the constant empty-set functor is left adjoint to the constant singleton functor on Set.

<details><summary>Hint 1</summary>
Both required hom sets contain exactly one function.
</details>
<details><summary>Hint 2</summary>
Any comparison between singleton hom sets is automatically natural.
</details>
<details><summary>Solution</summary>
For every X,Y, Hom(empty,Y) and Hom(X,singleton) are singletons, so there is a unique bijection. Precomposition and postcomposition between these singleton sets are also the unique functions, making every naturality square commute. Thus the two constant functors form the claimed adjunction. It gives an explicit witness for the special theorem in this case and confirms the empty-object conventions used in preservation arguments.
</details>

### CAT-08-12 — The missing completeness hypothesis

In the fgAb example, explain why essential smallness and a solution set do not contradict the absence of a left adjoint.

<details><summary>Hint 1</summary>
List every hypothesis of the general theorem.
</details>
<details><summary>Hint 2</summary>
The category lacks a countable product of copies of Z.
</details>
<details><summary>Solution</summary>
The general theorem requires a complete source for the proposed right adjoint, along with local smallness, preservation of small limits and the solution-set condition. Essential smallness supplies manageable representative sets but does not create limits. The category fgAb lacks the indicated countable product, so it is not complete. Its inclusion therefore falls outside the theorem. The direct hom-set cardinality argument independently proves that no left adjoint exists and identifies a genuine failure rather than a logical inconsistency.
</details>

## 8. Next connection

The existence theorems construct universal arrows from set-sized candidates and limits. Monads next retain the endofunctor GF and the multiplication induced by an adjunction, asking how much of its target category can be recovered from that algebraic data.
