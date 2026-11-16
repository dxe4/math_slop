var e=`---
parent_id: book-advanced-category-theory
chapter_id: ends-and-coends
title: "Ends and Coends"
level: graduate
license: CC BY-SA 4.0
---

# Ends and Coends

Natural transformations impose one equation for every arrow of an indexing category. Ends package all those equations as one universal object. Coends do the dual job: they identify pairs related by an arrow, turning a disjoint collection of contributions into a universal quotient. Both constructions are ordinary limits or colimits of a particular shape, but their notation exposes variance and gives useful formulas for enriched natural transformations, tensor products of functors and Yoneda. This chapter builds the formulas rather than treating the integral-like symbols as formal calculus.

Read [Enriched Categories](enriched-categories.md) for hom-object notation and [Introduction to Category Theory, Limits and Colimits](../introduction-to-category-theory/limits-colimits.md) for products, equalizers and coequalizers. Throughout, C is small and D is locally small. When products and equalizers in D are used, their existence is an explicit hypothesis. Smallness makes the displayed indexing families sets rather than unlicensed proper-class products.

## Dinatural families

Let H:C opposite times C to D be a functor. For every object c, its diagonal value H(c,c) is an object of D. One cannot simply call c maps to H(c,c) an ordinary functor on C: a morphism f:c to d changes the contravariant and covariant coordinates in opposite directions. The relevant condition is dinaturality.

**Definition 3.1.** A wedge from X to H is a family of maps w_c:X to H(c,c) such that, for every f:c to d, the two maps X to H(c,d) agree: H(1_c,f) after w_c equals H(f,1_d) after w_d. An end of H is a universal wedge: maps from X to the end correspond naturally to wedges from X. Dually, a cowedge from H to X has maps H(c,c) to X satisfying the corresponding equality after maps out of H(d,c); a coend is a universal cowedge.

The equality is typed. H(1_c,f) starts at H(c,c) and lands in H(c,d). H(f,1_d) starts at H(d,d) and lands in the same object. Writing the variance before the equation prevents a common reversed-arrow error. A wedge is “natural on the diagonal” only in this dinatural sense; the diagonal assignment need not itself be a functor.

## Constructing an end with products and an equalizer

**Theorem 3.2 (End equalizer).** If D has the indicated small products and equalizer, the end of H exists as the equalizer of two maps from the product over objects c of H(c,c) to the product over arrows f:c to d of H(c,d). The first map uses H(1_c,f) on the c component; the second uses H(f,1_d) on the d component.

*Proof.* Let E be that equalizer and e_c:E to H(c,c) its component maps. Equality of the two product arrows says exactly that, for every f, H(1_c,f)e_c=H(f,1_d)e_d. Thus the e_c form a wedge. Given a wedge w_c:X to H(c,c), the product universal property gives one map w:X to the product. Dinaturality says the two composites from X to the arrow-indexed product agree, so the equalizer universal property gives a unique map X to E. It composes to each w_c. Conversely every map X to E yields a wedge by composition with e_c. The two constructions are inverse and natural in X. ∎

For a discrete indexing category, there are only identity arrows, so the two maps in the equalizer agree automatically and the end is the product of the diagonal values. Nonidentity arrows add the compatibility equations. This is an effective way to read an end: first take a family indexed by objects, then impose every arrow equation.

**Worked example 3.3 (Group invariants).** Regard a group G as a one-object category. A functor H:G opposite times G to sets supplies a set S=H(*,*) with commuting left and right G-actions encoded by the two variables. An end element is an s in S for which the two actions agree in the dinaturality equation for every g. If the first action is trivial and the second is an ordinary G-action, the end is the fixed-point set S to the G superscript. The equalizer construction says the same thing: select points where every action map agrees with the identity. The precise action convention matters, but the universal mechanism does not.

## Coends as quotient objects

**Theorem 3.4 (Coend coequalizer).** If D has the indicated small coproducts and coequalizer, the coend of H exists as the coequalizer of two maps from the coproduct over arrows f:c to d of H(d,c) to the coproduct over objects c of H(c,c). The two maps use H(f,1_c) to the c summand and H(1_d,f) to the d summand.

*Proof.* Let q_c:H(c,c) to Q be the coproduct inclusions followed by the coequalizer. Equality after the two maps says q_c H(f,1_c)=q_d H(1_d,f) for every arrow f. This is exactly the cowedge equation. Any other cowedge r_c:H(c,c) to X first induces a map from the coproduct to X. Its cowedge equations make it equalize the two arrow-indexed coproduct maps, so it factors uniquely through Q. Conversely any map Q to X gives a cowedge. These assignments are inverse and natural in X. ∎

In sets, the coend can be viewed as the disjoint union of all diagonal H(c,c), modulo the equivalence relation generated by the two images of each element of H(d,c) for an arrow c to d. “Generated” matters: the relation is closed under symmetry and transitivity; a single arrow comparison need not already be an equivalence relation. In abelian groups, replace the quotient of a set by the quotient of a direct sum by the subgroup generated by the differences of the two images.

**Worked example 3.5 (Group coinvariants).** With the one-object group category and a functor whose first action is trivial, the coend of the corresponding set-valued bifunctor identifies s with g acting on s for every g. It is the orbit set S/G, or coinvariants in an additive target. The end gave fixed points; the coend gives orbits. These are generally different: for a transitive action on more than one point, the orbit set has one element while the fixed-point set is empty.

## Natural transformations as an end

Let F,G:C to Set be functors. Define H(c,d)=Set(Fc,Gd). Contravariance in c is precomposition with Ff; covariance in d is postcomposition with Gf. A wedge from a singleton to H selects one map eta_c:Fc to Gc for each c. The wedge equation says Gf eta_c=eta_d Ff. That is precisely ordinary naturality.

**Proposition 3.6.** The set of natural transformations F to G is the end of Set(Fc,Gd) over c in C.

*Proof.* The end equalizer selects families of maps eta_c satisfying the arrow equations just written. A function from any set X to that end is an X-indexed family of such natural transformations, which is exactly the wedge universal property in Set. Therefore the representing set is the natural-transformation set, naturally in F and G. ∎

For a suitably complete closed symmetric monoidal base V, replace Set(Fc,Gd) by the internal hom [Fc,Gd]. The same equalizer constructs the hom-object of enriched natural transformations. This is the end used in the preceding chapter's enriched Yoneda proof. It does not exist by fiat in a base lacking the required small limits.

## Co-Yoneda from an explicit coend

Let F:C to Set be covariant and fix a in C. Form the coend over c of C(c,a) times F(c), using the natural variance. Define a map to F(a) by sending the class of (f:c to a,x in F(c)) to F(f)(x).

**Theorem 3.7 (Co-Yoneda formula).** This map is a natural bijection from the coend of C(c,a) times F(c) to F(a).

*Proof.* The coend relation identifies (f composed u,x), with u:d to c and x in F(d), with (f,F(u)(x)). Both map to F(fu)(x), so the formula descends to the quotient. Define the inverse by y in F(a) maps to the class of (identity at a,y). Starting from (f,x), the coend relation for the arrow f:c to a identifies its class with (identity at a,F(f)(x)). Thus inverse after forward is identity. Forward after inverse sends y to F(identity)(y)=y. The constructions commute with a map of functors because their defining formula uses only functor action. ∎

**Worked example 3.8 (A two-object arrow).** Let C have objects 0 and 1 and one nonidentity arrow u:0 to 1. Fix a=1. In the coend, the summand at 0 contains pairs (u,x) with x in F(0); the summand at 1 contains pairs (identity,y) with y in F(1). The relation identifies (u,x) with (identity,F(u)(x)). Every class has the latter form and two such forms are equal only when their y values agree, so the coend is exactly F(1). This finite computation shows how the abstract quotient uses the arrow to glue contributions, rather than merely taking their disjoint union.

## Tensor products of functors

For a presheaf P:C opposite to Set and a covariant functor F:C to Set, the coend of P(c) times F(c) is often called their tensor product over C. Its elements are equivalence classes of pairs (p,x), with p in P(c) and x in F(c), subject to (P(u)(p),x) equivalent to (p,F(u)(x)) whenever u connects the indices in the typed way. This generalizes balanced tensor products of modules: a group or ring action on one side is shifted to the other side by the quotient relation.

If P is representable C(-,a), Theorem 3.7 says this tensor is F(a). If F is constant at a singleton, the coend identifies elements of P along its restriction maps and gives a colimit of P with the appropriate variance. The formula is useful only when the target has the needed coproducts and coequalizers. For large C, a formal coproduct over all objects may be a proper class; choosing a universe or a small subcategory is part of the construction, not an afterthought.

## Fubini and justified interchange

For two small categories C and D and a functor with the appropriate four variances into a complete category, iterated ends can be identified with an end over the product category whenever the displayed ends exist. The reason is universal rather than analytic: a map into the iterated end is a family satisfying all C equations and all D equations, exactly the family required by the product-category end. Uniqueness of representing objects gives the canonical isomorphism. The dual statement holds for coends in a cocomplete target. One should not use this to interchange an end with a coend without additional preservation assumptions; limits and colimits need not commute.

**Proposition 3.9 (Finite Fubini form).** If C and D are finite and the required products and equalizers exist, the two iterated ends and the product-category end represent the same wedge data and are canonically isomorphic.

*Proof.* A family at each pair (c,d) is dinatural in c and in d exactly when it is dinatural along arrows (f,identity) and (identity,g) in the product. Every arrow (f,g) factors into those two arrows, and the functor laws make the resulting equation the composite of the two separate equations. The universal properties therefore give natural bijections of maps from any test object into the three constructions. Yoneda gives their canonical isomorphisms. ∎

The finite version keeps existence transparent. The same proof works for small categories with all relevant limits, but one must check that each iterated construction and the product-indexed construction exists in the selected target. The next chapter will use this kind of universal bookkeeping for composition that is associative only up to a specified isomorphism.

## A finite relation calculation

Let C be the two-object arrow category used above, and let P be a contravariant set-valued functor while F is covariant. The tensor coend begins with the disjoint union of P(0) times F(0) and P(1) times F(1). For the arrow u:0 to 1, the generating relation compares a pair involving an element p in P(1) and x in F(0). One route restricts p to P(u)(p) and leaves x at object zero; the other leaves p at object one and applies F(u) to x. Thus the quotient identifies (P(u)p,x) with (p,F(u)x). This is a typed equality between classes from different summands, not an equality of elements within either original Cartesian product.

If P is representable at one, this relation collapses every class to the summand at one, reproducing co-Yoneda. If P is constant at a singleton, the relation simply identifies x in F(0) with F(u)x in F(1), so the coend is the colimit of F over this arrow, namely F(1). Changing the direction of u reverses which endpoint supplies that terminal colimit. The small computation is a practical way to verify a proposed coend formula before applying it to a large indexing category.

## Exercises

### Exercise 3.1 {#ends-and-coends-ex-discrete}

Compute the end and coend of H when C is a discrete category with two objects.
<details><summary>Hint 1</summary>There are no nonidentity arrow equations.</details>
<details><summary>Hint 2</summary>The end starts with a product; the coend starts with a coproduct.</details>
<details><summary>Solution</summary>The arrow-indexed equalizer maps are identical because only identities occur, so the end is H(0,0) times H(1,1). Dually the coequalizer imposes no new relation, so the coend is the coproduct of H(0,0) and H(1,1), provided those objects exist.</details>

### Exercise 3.2 {#ends-and-coends-ex-dinatural-type}

For f:c to d, write the common codomain of the two wedge composites.
<details><summary>Hint 1</summary>Change the covariant coordinate of H(c,c).</details>
<details><summary>Hint 2</summary>Change the contravariant coordinate of H(d,d).</details>
<details><summary>Solution</summary>H(1_c,f) maps H(c,c) to H(c,d), while H(f,1_d) maps H(d,d) to H(c,d). Therefore both wedge composites have codomain H(c,d), and their equality is well typed.</details>

### Exercise 3.3 {#ends-and-coends-ex-natural}

Recover the naturality equation from the end of Set(Fc,Gd).
<details><summary>Hint 1</summary>A point of the diagonal product is a family eta_c.</details>
<details><summary>Hint 2</summary>Identify the two maps to Set(Fc,Gd) associated with f:c to d.</details>
<details><summary>Solution</summary>The first end map takes eta_c to G(f) eta_c; the second takes eta_d to eta_d F(f). Equalizing them for every f gives G(f) eta_c=eta_d F(f), exactly naturality. Thus the end points are natural transformations.</details>

### Exercise 3.4 {#ends-and-coends-ex-group-fixed}

Show that the end for a one-object group action with trivial first action is its fixed-point set.
<details><summary>Hint 1</summary>The product over objects has only one factor S.</details>
<details><summary>Hint 2</summary>Each group arrow adds one equality between s and its translate.</details>
<details><summary>Solution</summary>The equalizer consists of s in S satisfying H(1,g)(s)=H(g,1)(s) for every g. With the first action trivial, this becomes g acting on s equals s for every g, which is the fixed-point subset.</details>

### Exercise 3.5 {#ends-and-coends-ex-group-orbits}

Under the same convention, identify the coend and compare it with the end for a transitive nontrivial action.
<details><summary>Hint 1</summary>The coequalizer identifies s with every translate.</details>
<details><summary>Hint 2</summary>A transitive action has one orbit; it need not have a fixed point.</details>
<details><summary>Solution</summary>The coend quotient is S/G. For a transitive action on at least two points it has one class. If no point is fixed by every group element, the corresponding end is empty. Hence the end and coend answer different universal questions.</details>

### Exercise 3.6 {#ends-and-coends-ex-co-yoneda}

Verify that (f composed u,x) and (f,F(u)x) have the same image in F(a).
<details><summary>Hint 1</summary>Apply the co-Yoneda forward map to both pairs.</details>
<details><summary>Hint 2</summary>Use the functor composition law.</details>
<details><summary>Solution</summary>The first pair maps to F(fu)(x). The second maps to F(f)(F(u)(x)). These are equal by functoriality, so the map respects the generating coend relation and descends to the quotient.</details>

### Exercise 3.7 {#ends-and-coends-ex-arrow-category}

Compute the co-Yoneda quotient for the category 0 to 1 at a=1.
<details><summary>Hint 1</summary>List the two diagonal summands.</details>
<details><summary>Hint 2</summary>The arrow relation replaces (u,x) by (identity,F(u)x).</details>
<details><summary>Solution</summary>The diagonal summands are F(0), indexed by u, and F(1), indexed by identity. The only nontrivial relation sends the class of x in the first to the class of F(u)x in the second. Every class therefore has a representative in F(1), and no relation identifies distinct elements of F(1). The quotient is F(1).</details>

### Exercise 3.8 {#ends-and-coends-ex-module-balance}

Describe why a tensor product of a right R-module and a left R-module is a coend over the one-object category R.
<details><summary>Hint 1</summary>Use the underlying multiplicative category of R for the action relation.</details>
<details><summary>Hint 2</summary>Compare the two images of (m,r,n).</details>
<details><summary>Solution</summary>The coend relation identifies (mr,n) with (m,rn), the balancing relation. In abelian groups the coend is formed from a direct sum and quotient subgroup, so additivity is also imposed. The resulting object has the universal property of M tensor over R N. For a general ring, use its one-object preadditive category and Ab-enriched coends to retain addition.</details>

### Exercise 3.9 {#ends-and-coends-ex-fubini}

Explain why separate dinaturality in C and D implies dinaturality for an arrow (f,g) in C times D.
<details><summary>Hint 1</summary>Factor (f,g) as (f,identity) followed by (identity,g).</details>
<details><summary>Hint 2</summary>Apply the two equations successively and use the bifunctor law.</details>
<details><summary>Solution</summary>The equation for (f,identity) moves the C index while holding D fixed, and that for (identity,g) moves the D index. Their composite gives the equation for (f,g), because the two factorizations represent the same product-category arrow and the functor preserves composition. Hence separate conditions suffice.</details>

### Exercise 3.10 {#ends-and-coends-ex-size}

Identify the size assumption needed for the product construction of an end in sets.
<details><summary>Hint 1</summary>The product has one factor per object and the target product one factor per arrow.</details>
<details><summary>Hint 2</summary>Products in Set are indexed by sets, not arbitrary proper classes.</details>
<details><summary>Solution</summary>C must be small, or one must work in a larger specified universe where its object and arrow collections are sets. Then the two products and their equalizer are legitimate sets. Local smallness of D alone does not make an object-indexed proper-class product exist.</details>

## Sources

Original exposition and exercises. The universal formulas are proved from Euler's introductory products, equalizers, coproducts and coequalizers. Kelly's *Basic Concepts of Enriched Category Theory* supplies the benchmark for enriched end notation; the smallness and existence hypotheses are stated in this chapter.

## Summary

An end is a universal dinatural wedge and, when products and equalizers exist, an equalizer imposing every arrow equation. A coend is the dual universal quotient built from coproducts and a coequalizer. Natural transformations form an end; representable coends evaluate by co-Yoneda. Group actions exhibit fixed points versus orbits. Iterated ends obey a Fubini rule when the relevant constructions exist. The next chapter uses the same universal discipline to track composition of one-cells up to coherent two-cells.
`;export{e as default};