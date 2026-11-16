
# Kan Extensions

A functor may be defined on a smaller indexing category while the problem calls for data on a larger one. Extension is rarely literal interpolation: there can be many possible values outside the original image. A Kan extension selects one by a universal comparison property. Colimits supply its left version; limits supply its right version.

Read [limits and colimits](limits-colimits.md), [adjunctions](adjunctions.md) and comma categories from [adjoint existence](adjoint-functor-theorems.md). Fix functors K:C→D and F:C→E. For the pointwise existence theorem C is small and D locally small. This makes the comma categories small. The needed colimits or limits in E are assumed explicitly. Functor categories and natural-transformation collections use the same larger-universe convention as earlier when their object collections are large.

## 1. Extending with a universal comparison

A left Kan extension of F along K is a functor L:D→E with a natural transformation η:F⇒LK such that every α:F⇒HK factors uniquely as α=(βK)η through a natural transformation β:L⇒H. Thus
$$\operatorname{Nat}(L,H)\cong\operatorname{Nat}(F,HK),$$
with the map on the left given by composition with η. The unit is part of the data. It need not be invertible: a general K can identify objects or arrows and force relations on an extension.

A right Kan extension R has ε:RK⇒F such that every α:HK⇒F factors uniquely as α=ε(βK) for β:H⇒R. Its correspondence is
$$\operatorname{Nat}(H,R)\cong\operatorname{Nat}(HK,F).$$
Both definitions imply uniqueness up to a unique compatible natural isomorphism, by the initial- or terminal-object argument in the category of such comparisons. They do not assert that either extension exists or that L and R agree.

If extensions exist with consistent choices for every F, they form functors Lan_K and Ran_K. The mapping properties say Lan_K⊣K*⊣Ran_K, where K* sends H to HK. These adjunctions have source and target functor categories, not the original C and D. Their naturality follows from the uniqueness of factorisations, or from the pointwise construction below.

## 2. The left pointwise formula

For d∈D, the comma category (K↓d) has objects (c,u:Kc→d). A morphism to (c′,u′) is f:c→c′ satisfying u′Kf=u. It projects to C by forgetting u.

**Theorem 10.1.** Suppose every diagram F on (K↓d) has a colimit in E. Then a left Kan extension is given by
$$L(d)=\operatorname{colim}_{(c,u)\in(K\downarrow d)}F(c).$$
In particular cocompleteness of E suffices under the stated size hypotheses.

*Proof.* Write ι_(c,u):Fc→Ld for its colimit maps. An arrow t:d→d′ postcomposes comma objects, sending (c,u) to (c,tu). The maps ι_(c,tu) form a cocone over the first comma diagram, so determine a unique Lt:Ld→Ld′ with Lt ι_(c,u)=ι_(c,tu). Uniqueness proves identity and composition laws, hence defines the functor L.

Define η_c:Fc→L(Kc) as ι_(c,id_Kc). For f:c→c′, the comma arrow f from (c,Kf) to (c′,id_Kc′) gives η_c′Ff=L(Kf)η_c, so η is natural.

Given α:F⇒HK, the arrows Hu α_c:Fc→Hd form a cocone for (K↓d). For its morphism f, the equation u′Kf=u and naturality of α give Hu′ α_c′Ff=Hu′H(Kf)α_c=Hu α_c. Thus there is a unique β_d:Ld→Hd taking each ι_(c,u) to Hu α_c.

These maps are natural in d: composing with Ht or with Lt gives the same values on each ι_(c,u), so colimit uniqueness equates them. On the object (c,id_Kc), their equation gives β_Kc η_c=α_c. Conversely, every inclusion satisfies ι_(c,u)=Lu η_c by the definition of Lu. Therefore any natural β with that unit equation must satisfy β_dι_(c,u)=Hu α_c. Colimit uniqueness forces the constructed components. This proves the universal property. ∎

The proof constructs the object values, arrow action, unit and unique comparison. Giving only the displayed colimit formula would omit three of those requirements. Smallness is used because the comma object set is a union, over the set of c, of the hom sets Hom_D(Kc,d), with a set of arrows as well.

## 3. The right pointwise formula

The comma category (d↓K) has objects (c,u:d→Kc), with morphisms f:c→c′ satisfying Kf u=u′. If its F-diagrams have limits, define
$$R(d)=\operatorname{lim}_{(c,u)\in(d\downarrow K)}F(c).$$
An arrow t:d→d′ induces precomposition (d′↓K)→(d↓K). Restricting the limiting cone therefore gives a unique map Rt:Rd→Rd′, in the covariant direction required for R. The counit ε_c:R(Kc)→Fc is the projection indexed by (c,id_Kc).

To verify the universal property explicitly, let α:HK⇒F. At d, the maps α_c Hu:Hd→Fc form a cone because naturality of α respects every comma arrow. They determine a unique β_d:Hd→Rd. Comparing every projection proves naturality in d and the equation ε_c β_Kc=α_c. Every projection at (c,u) equals ε_c Ru, so any natural β satisfying that equation has these same composites; limit uniqueness proves it is the constructed one. This is the right Kan property, including its uniqueness, with all arrows reversed from the left construction.

When C,D are small and E has all the required limits and colimits, the constructions are functorial in F as well. A transformation F⇒F′ induces maps between their pointwise colimits, and likewise between their pointwise limits, by composing the structural cones or cocones. Uniqueness proves their naturality in d and their identity/composition laws. Hence the stated functor-category adjunctions really are adjunctions of functors.

## 4. Fully faithful inclusion and recovered original values

**Proposition 10.2.** If K is fully faithful, the left-extension unit F⇒(Lan_KF)K is an isomorphism whenever the pointwise construction exists. The right-extension counit is likewise an isomorphism.

*Proof.* For Kc, the comma category (K↓Kc) has terminal object (c,id_Kc). Every u:Kc′→Kc comes from a unique f:c′→c by full faithfulness, exactly supplying its unique comma arrow. A diagram indexed by a category with a terminal object has colimit its value there: maps from that value determine every cocone by composition, and compatibility with the arrows to the terminal object forces the reverse correspondence. Thus L(Kc) identifies with Fc and η_c is invertible.

Dually (Kc↓K) has initial object (c,id_Kc), and its diagram limit is Fc. Hence ε_c is invertible. The units and counits were already natural, so componentwise invertibility proves natural isomorphisms. ∎

The result controls values on the image of K, not outside it. The new values beyond the image may be very different for left and right extensions. Full faithfulness is essential to the comma-object argument: it provides both existence and uniqueness of the lifted arrow f.

## 5. Empty indices and one-arrow diagrams

**Worked example 10.3.** Let C be empty. Each (K↓d) is empty, so the left extension is the constant initial-object functor, if E has an initial object. The right extension is the constant terminal-object functor. If D is empty as well these reduce to the unique empty functor. Empty cases follow the universal formulas and cannot be replaced by an arbitrary chosen value.

If K:C→1 is the unique functor to a one-object identity category, then (K↓*) is C itself, as is (*↓K). Thus left Kan extension is the colimit of F and right Kan extension is its limit. This includes the functorial maps on diagrams: the adjunctions with constant diagrams are exactly the familiar cone and cocone mapping properties.

**Worked example 10.4.** Let C be discrete with two objects a,b, and D be the chain 0→1. Let K(a)=0,K(b)=1 and F(a)=A,F(b)=B in Set. There is no specified map between A and B in the original discrete diagram.

For left extension at zero, the comma category has only a, giving L0=A. At one it has both a and b with no connecting arrows, giving L1=A⊔B. The extended arrow is the first coproduct injection. For right extension, zero sees both outgoing maps into K(a),K(b), giving R0=A×B, while one sees only b, giving R1=B. The extended arrow is the second projection. These are genuinely different ways of completing the diagram, each selected by its own universal comparison.

The functor K in this example is not full: D has an arrow 0→1 missing from C. Consequently neither extension needs to recover the original value at every image object; L1 has gained A and R0 has gained B. This agrees exactly with the hypothesis boundary of Proposition 10.2.

## 6. Group induction is a left Kan extension

**Worked example 10.5.** Regard groups H⊆G as one-object categories, with inclusion K. A covariant functor H→Set is an H-set A. The comma category (K↓*) has objects g∈G and an arrow labelled h∈H from g to g′ when g′h=g. The corresponding colimit in Set identifies pairs (gh,a) with (g,ha). Hence it is
$$G\times_H A=(G\times A)/\bigl((gh,a)\sim(g,ha)\bigr).$$
The relation is the equivalence relation generated by those pairs. The induced G-action sends [g,a] to [kg,a]; left multiplication preserves the generating relations, proving well-definedness. This is the usual induced G-set.

Its universal property can be verified independently. An H-equivariant map f:A→B, where B is a G-set restricted to H, extends to [g,a]↦gf(a). The relation is respected because ghf(a)=gf(ha). The extension is G-equivariant. Conversely a G-map restricts along a↦[1,a], and equivariance determines its value at every [g,a]. These inverse assignments are natural, giving Ind_H^G⊣Res_H^G.

This group example is not the fully faithful case of Proposition 10.2 unless H=G. The one-object inclusion is faithful but is full only if every g already belongs to H. The induced object may therefore change the value even at the only source object, consistently with the general theorem.

## 7. Coinduction and a right Kan extension

For the same groups, the objects of (*↓K) are g∈G, with arrows h sending g to hg. Its limit consists of functions φ:G→A satisfying φ(hg)=hφ(g). The G-action is
$$(k\cdot\varphi)(g)=\varphi(gk).$$
This action preserves the condition, and k₁ acting after k₂ gives evaluation at gk₁k₂, which is the action of k₁k₂. Thus it is a left G-action under the usual composition convention. This is coinduction, the right Kan extension.

For an H-map f:Res B→A, send b∈B to the function φ_b(g)=f(gb). Its H-compatibility follows from f(hgb)=hf(gb). It is G-equivariant because φ_(kb)(g)=f(gkb)=(kφ_b)(g). Conversely a G-map B→Coind A gives an H-map by evaluation at one; evaluating equivariance at h uses φ(h)=hφ(1). The two assignments are inverse, so Res⊣Coind. No finiteness of the groups or index is assumed for these set-valued constructions.

The finite-group linear induction in the Representation Theory book uses vector-space tensor products in place of this set quotient. Comparing the two requires preserving the category and the scalar hypotheses, while their common adjunction explains the shared mapping pattern. Kan extensions organise those examples without identifying their different carriers.

## 8. Exercises

### CAT-10-01 — The comma direction

State the objects and arrow equation of (K↓d), then explain why an arrow t:d→d′ acts by postcomposition.

<details><summary>Hint 1</summary>
An object contains an arrow whose target is d.
</details>
<details><summary>Hint 2</summary>
Check that u′Kf=u remains true after composing with t.
</details>
<details><summary>Solution</summary>
An object is (c,u:Kc→d), and a morphism f:c→c′ satisfies u′Kf=u. Postcomposition gives (c,tu) and preserves the equation because (tu′)Kf=t(u′Kf)=tu. Thus it is a functor between the comma categories. That functor supplies the cocone used to define Lt. Using precomposition here would not match the target d of u and would give the wrong formula.
</details>

### CAT-10-02 — Left-extension naturality

In the left pointwise construction, prove η_c′Ff=L(Kf)η_c for f:c→c′.

<details><summary>Hint 1</summary>
Work inside (K↓Kc′).
</details>
<details><summary>Hint 2</summary>
The arrow f connects (c,Kf) to (c′,id_Kc′).
</details>
<details><summary>Solution</summary>
The cocone equation for that comma arrow states ι_(c′,id)Ff=ι_(c,Kf). Its left side is η_c′Ff. By the definition of L on the arrow Kf, the right side is L(Kf)ι_(c,id)=L(Kf)η_c. Hence η is natural. This shows why the pointwise object formula alone was not enough: the structural maps supply the unit comparison and its naturality.
</details>

### CAT-10-03 — Recover a comparison map

For α:F⇒HK, explain why the maps Hu α_c form a cocone over (K↓d).

<details><summary>Hint 1</summary>
Take f with u′Kf=u.
</details>
<details><summary>Hint 2</summary>
Use naturality of α before applying H to the comma equation.
</details>
<details><summary>Solution</summary>
The required compatibility is Hu′ α_c′Ff=Hu α_c. Naturality gives α_c′Ff=H(Kf)α_c, and then the left side is H(u′Kf)α_c=Hu α_c. The colimit property supplies a unique map from Ld to Hd. Thus the formula uses both the diagram's comma relation and the comparison's naturality, and does not require an elementwise model in E.
</details>

### CAT-10-04 — Right-extension variance

Why does t:d→d′ give Rd→Rd′ even though it induces a functor (d′↓K)→(d↓K)?

<details><summary>Hint 1</summary>
A limiting cone over the larger indexed diagram can be restricted.
</details>
<details><summary>Hint 2</summary>
The restricted cone maps into the limit for d′.
</details>
<details><summary>Solution</summary>
The object Rd has a cone to every Fc indexed by arrows d→Kc. Composing arrows d′→Kc with t picks out a subdiagram-shaped cone from Rd indexed by (d′↓K). Its universal limit is Rd′, so a unique map Rd→Rd′ results. Thus the index functor reverses direction while the induced map between limits has the covariant direction needed for R. The cone universal property determines that direction.
</details>

### CAT-10-05 — A terminal indexing object

Prove that a diagram indexed by a category with a terminal object j has colimit its value at j.

<details><summary>Hint 1</summary>
The unique arrows i→j give a cocone.
</details>
<details><summary>Hint 2</summary>
A compatible cocone is determined by its component at j.
</details>
<details><summary>Solution</summary>
The maps D(i→j) form a cocone because composition into the terminal object is unique. For any cocone a_i:Di→A, compatibility forces a_i=a_jD(i→j). Therefore a_j is the unique map from Dj inducing the entire family; uniqueness also follows from the identity arrow at j. This proves the colimit property and justifies the fully faithful left-extension computation, rather than assuming that any final listed diagram value is a colimit.
</details>

### CAT-10-06 — Discrete to a chain

For Example 10.4 with A and B singletons, compute the cardinalities of L0,L1,R0,R1 and describe the extended arrows.

<details><summary>Hint 1</summary>
The coproduct retains two tags.
</details>
<details><summary>Hint 2</summary>
The product of two singletons is a singleton.
</details>
<details><summary>Solution</summary>
The left values have sizes one and two; the arrow selects the A-tagged member of the two-element coproduct. The right values both have size one, and its arrow is the unique projection to B. These extensions are not isomorphic as diagrams because their values at one have different cardinalities. Each still satisfies its own universal property. The source had no arrow between its two objects, so neither construction was extending a pre-existing function A→B.
</details>

### CAT-10-07 — Empty-source extensions

For the unique functor from an empty category to a nonempty D, identify left and right extensions into Set.

<details><summary>Hint 1</summary>
All comma categories are empty.
</details>
<details><summary>Hint 2</summary>
Use the empty colimit and empty limit in Set.
</details>
<details><summary>Solution</summary>
The left extension is constantly empty and the right extension constantly singleton. Every arrow of D maps to the respective unique function on these sets. The unique transformation from the empty original diagram supplies no additional restriction. Universality gives the same conclusion: maps out of an initial constant diagram and maps into a terminal constant diagram are uniquely determined componentwise and natural automatically.
</details>

### CAT-10-08 — Induction relation

Show that [g,a]↦gf(a) is well-defined on G×_H A when f:A→Res B is H-equivariant.

<details><summary>Hint 1</summary>
Compare the images of (gh,a) and (g,ha).
</details>
<details><summary>Hint 2</summary>
Then extend equality along the generated equivalence relation.
</details>
<details><summary>Solution</summary>
The first representative maps to ghf(a), while the second maps to gf(ha)=ghf(a) by H-equivariance. Hence the function respects every generating pair. Equalities remain true along symmetric and transitive chains, so it descends to the quotient. Left G-equivariance follows by multiplying the displayed output by the acting element. The quotient's universal property then gives the extension used in the induction adjunction.
</details>

### CAT-10-09 — Coinduction action

Check that (kφ)(g)=φ(gk) preserves the condition φ(hg)=hφ(g).

<details><summary>Hint 1</summary>
Evaluate kφ at hg.
</details>
<details><summary>Hint 2</summary>
The factor h remains on the left of gk.
</details>
<details><summary>Solution</summary>
We have (kφ)(hg)=φ(hgk)=hφ(gk)=h(kφ)(g). Thus the transformed function remains in the coinduced set. Identity acts trivially. Acting by k₂ and then k₁ gives φ(gk₁k₂), equal to the action of k₁k₂ under composition of left actions. These equations verify that the displayed formula is a genuine G-action and uses right translation on the function argument.
</details>

### CAT-10-10 — Evaluating coinduction

For a G-map θ:B→Coind A, prove b↦θ(b)(1) is H-equivariant.

<details><summary>Hint 1</summary>
Use θ(hb)=hθ(b).
</details>
<details><summary>Hint 2</summary>
Evaluate the right side at one and then use the defining H-law for θ(b).
</details>
<details><summary>Solution</summary>
Evaluation gives θ(hb)(1)=(hθ(b))(1)=θ(b)(h). The coinduced-function condition makes this hθ(b)(1). Hence the evaluation map sends hb to h times its value at b and is H-equivariant. This is the inverse construction in the right adjunction and identifies exactly where the two equivariance conditions are used.
</details>

### CAT-10-11 — Fullness in the inclusion theorem

Why is faithfulness of K alone insufficient for the terminal-comma-object argument in Proposition 10.2?

<details><summary>Hint 1</summary>
One needs to lift every u:Kc′→Kc.
</details>
<details><summary>Hint 2</summary>
Faithfulness gives uniqueness of a lift when it exists, not existence.
</details>
<details><summary>Solution</summary>
Terminality of (c,id) requires an arrow f:c′→c with Kf=u for every comma object u. Faithfulness only guarantees that two such lifts cannot differ; fullness supplies one. In the group inclusion H→G, an element of G outside H provides an arrow with no lift, so the required terminal object argument fails. This matches the genuinely changed values of induction rather than contradicting the pointwise formula.
</details>

### CAT-10-12 — Colimits as Kan extensions

For K:C→1, identify both comma categories and explain the resulting left and right extension universal properties.

<details><summary>Hint 1</summary>
There is exactly one map between the only object and each Kc.
</details>
<details><summary>Hint 2</summary>
A functor out of 1 chooses one object of E.
</details>
<details><summary>Solution</summary>
Both comma categories have the objects and arrows of C, since the extra arrow data to or from the single object are unique. Thus the left formula is colim F and the right formula lim F. A transformation F⇒HK is a cocone to the chosen object H(*), while HK⇒F is a cone. Their Kan universal properties are therefore exactly those of the colimit and limit. This recovers the older constructions as cases of extension along a functor.
</details>

## 9. Continuation

Kan extensions extend whole functors through universal comparisons, with comma-indexed colimits and limits supplying their pointwise values. The next two navigation readings locate monoidal and additive structure in their full teaching homes before the capstone combines the proved categorical methods.
