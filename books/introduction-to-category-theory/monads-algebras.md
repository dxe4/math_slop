
# Monads and Algebras

The word adjunction sends a set to finite words and then forgets their multiplication. Its composite is an endofunctor on sets, with operations inserting one letter and flattening words of words. A monad abstracts those operations and their compatibility. An algebra for the monad interprets the resulting formal expressions on one object.

Read [adjunctions](adjunctions.md), including horizontal composition and unit–counit formulas. Categories are locally small at the stated size; all categories of algebras and maps use those hom collections. The chapter expands the earlier Euler Morphisms First monad section while preserving its original source. The monoid and pointed-set reconstruction proofs are given directly. The general Beck recognition theorem is separately labelled as an imported theorem rather than being inferred from those examples.

## 1. An endofunctor with insertion and multiplication

A monad on C is an endofunctor T:C→C with natural transformations η:Id⇒T and μ:TT⇒T satisfying
$$\mu_X\circ T\eta_X=\operatorname{id}_{TX}
=\mu_X\circ\eta_{TX},\qquad
\mu_X\circ T\mu_X=\mu_X\circ\mu_{TX}.$$
Both associativity composites start at TTTX and end at TX. The unit equations have source TX. These are equations of typed arrows, not a multiplication of elements unless T has a particular concrete interpretation.

**Proposition 9.1.** An adjunction F⊣G gives a monad T=GF, with its adjunction unit and μ_X=Gε_FX.

*Proof.* Naturality of μ is the image under G of naturality of ε along arrows Ff. The equation μ_X Tη_X=id follows by applying G to ε_FX Fη_X=id_FX. The equation μ_X η_TX=id is the other triangle at FX.

For associativity, naturality of ε applied to ε_FX:FGFX→FX gives
$$\varepsilon_{FX}\,FG(\varepsilon_{FX})
=\varepsilon_{FX}\,\varepsilon_{FGFX}.$$
Applying G gives exactly μ_X Tμ_X=μ_X μ_TX. Thus every law follows from the earlier naturality and triangle equations. ∎

Different adjunctions can give the same monad. The monad records the composite and these operations, rather than automatically remembering the entire target category. Its algebra category provides a canonical target with which the original one can be compared.

## 2. Algebras and their morphisms

A T-algebra is an object A with an action a:TA→A such that
$$a\eta_A=\operatorname{id}_A,\qquad a\,Ta=a\mu_A.$$
An algebra morphism f:(A,a)→(B,b) is an arrow f:A→B with fa=bTf. Identities satisfy that equation. For a second morphism g, composition gives gfa=gbTf=cTgTf=cT(gf). Hence these objects and arrows form the Eilenberg–Moore category C^T, with a forgetful functor U^T:C^T→C.

There is a free algebra F^T(X)=(TX,μ_X). Its algebra axioms are the monad unit and associativity laws. On arrows it uses Tf, which respects the actions by naturality of μ.

**Theorem 9.2.** F^T is left adjoint to U^T, and its induced monad is the given T.

*Proof.* For a map f:X→A, define its extension to the free algebra as aTf:TX→A. Naturality of μ and the algebra axiom give
$$(aTf)\mu_X=a\mu_A TTf=aTa TTf=aT(aTf),$$
so it is an algebra map. Conversely an algebra map h:TX→A restricts to hη_X:X→A. Extending that restriction returns
$$aT(h\eta_X)=aTh\,T\eta_X=h\mu_XT\eta_X=h.$$
Restricting the extension returns aTf η_X=aη_A f=f. These are inverse functions on hom sets and are natural by the same formulas. The unit is η; the counit at (A,a) is its action a. In particular its action at the free algebra is μ_X, so the induced monad is T with its original multiplication. ∎

This proves that every monad comes from at least one adjunction. It does not say that every adjunction producing it is equivalent to this free-algebra adjunction.

## 3. Words reconstruct monoids

**Worked example 9.3.** On Set let TX be finite words in X, η insert a one-letter word, and μ flatten a finite word of finite words. Flattening after insertion gives the original word in both possible ways. Flattening three levels in either order concatenates the same ordered list of letters. These descriptions prove the monad laws and naturality of its maps under letterwise functions.

Given an algebra a:TA→A, set e=a([]) and define xy=a([x,y]). The unit law gives a([x])=x. Apply the algebra equation to the word of words [[],[x]]. Flattening gives [x], while evaluating the inner words gives [e,x]. Hence ex=x; the analogous list [[x],[]] gives xe=x.

Apply the same equation to [[x,y],[z]] and to [[x],[y,z]]. Both flatten to [x,y,z], giving (xy)z=x(yz). Thus A is a monoid. Induction on length, using the split into an initial word and its last letter, proves that a evaluates every word as the ordered product, with the empty word giving e. The algebra carries exactly that monoid operation, not extra unaccounted choices.

Conversely a monoid evaluates words, and associativity plus its identity law makes evaluation of blocks equal evaluation of their flattening. Thus it defines a T-algebra. A function of algebras preserves empty and two-letter word evaluation, so preserves the monoid identity and multiplication. Conversely a monoid homomorphism preserves all finite ordered products and therefore the algebra action. These two constructions are inverse on objects and maps. Hence Set^T is the category of monoids with its usual forgetful functor, proved directly without a recognition theorem.

Notice that group structure has not appeared. The word monad has no formal inverse operation, and its algebras include monoids without inverses. The list of operations and equations encoded by the monad determines the algebraic category.

## 4. Adjoining a possible failure value

**Worked example 9.4.** Define TX=X⊔{*}, with a distinguished added element separate from every member of X. The unit includes X. The set TTX contains old x, an inner added symbol, and an outer added symbol. Multiplication fixes x and sends both added symbols to the single added symbol of TX. The unit equations and associativity follow by these cases: any added symbol at any level becomes the same failure value, while an original x remains x.

An algebra a:X⊔{*}→X must restrict to id_X by the unit law. Its only remaining choice is a point x₀=a(*). The associativity equation holds: an old x is preserved, and either added symbol is evaluated to x₀ by either route. Algebra morphisms are exactly functions preserving the chosen points. Thus its Eilenberg–Moore category is pointed sets. The empty set admits no algebra, because it has no value for the added symbol.

The symbol must be tagged. If it were identified in advance with an element already in X, the operation would not be functorial on arbitrary sets with the stated one-point-adjoining meaning. The algebra is the later choice of how to interpret it, not an identification hidden in the carrier representation.

## 5. Kleisli arrows compose formal outputs

The Kleisli category C_T has the same objects as C, but an arrow X→Y is an arrow f:X→TY in C. Its identity is η_X, and composition of f:X→TY and g:Y→TZ is
$$g\star f=\mu_Z\circ Tg\circ f.$$
The unit equations follow from monad units and naturality of η. For example f⋆η_X=μ_Y Tf η_X=μ_Y η_TY f=f, and η_Y⋆f=μ_Y Tη_Y f=f.

For h:Z→TW, associativity follows by moving Th past μ_Z using naturality, then using μ_W μ_TW=μ_W Tμ_W. Both resulting composites are μ_W T(μ_W Th g)f. This is a direct calculation of the three-layer substitution law, rather than an extra axiom placed on Kleisli arrows.

The functor from C to C_T sends an ordinary arrow f:X→Y to η_Yf. The free-algebra construction embeds C_T fully faithfully into C^T, sending X to (TX,μ_X) and f:X→TY to μ_YTf. Full faithfulness follows from Theorem 9.2 with target algebra (TY,μ_Y): algebra maps TX→TY correspond exactly to arrows X→TY. The substitution formula and the algebra-morphism equation show that this correspondence respects composition. Its essential image consists of algebras isomorphic to free algebras, not necessarily every algebra.

**Worked example 9.5.** For the added-failure-value monad, an arrow X→Y in the Kleisli category is a function X→Y⊔{*}. Equivalently it is a partial function, with defined domain consisting of inputs not sent to *. The composition formula first applies the first partial function; if it fails, the composite fails. Otherwise it applies the second and retains that output or its failure. Flattening exactly combines the two possible failure symbols. This proves the familiar partial-composition rule from the monad formula.

## 6. Comparing the original adjunction

For F⊣G and its monad T=GF, define the comparison functor K:D→C^T by
$$K(Y)=(GY,G\varepsilon_Y),\qquad K(h)=Gh.$$
The action satisfies its unit law by the adjunction triangle. Its associativity law follows by applying G to naturality of ε at ε_Y, just as in Proposition 9.1. Naturality of ε also makes Gh an algebra morphism. The functor laws are those of G. Its underlying functor is G, and K applied to FX is the free algebra (TX,μ_X).

The right adjoint G is called monadic when K is an equivalence. The list example proves monadicity of the monoid forgetful functor by reconstructing its algebras and maps. The comparison may fail to be an equivalence for other adjunctions, so recovering an algebra action on GY alone does not prove monadicity.

A functor is conservative if it reflects isomorphisms. Any monadic G is conservative: an algebra morphism whose underlying arrow is invertible has an algebraic inverse. Indeed fa=bTf gives aTf inverse=f inverse b after composing with inverses. Thus the underlying forgetful functor reflects isomorphisms, and equivalences reflect them too.

**Named theorem import (Beck, up-to-equivalence form).** For an adjunction F⊣G, the comparison is an equivalence if G is conservative and D has coequalisers of G-split pairs which G preserves. A pair is G-split when its image has a split-coequaliser diagram. For u,v:A⇉B, a split coequaliser q:B→Q has arrows s:Q→B,t:B→A satisfying qs=id, ut=id_B and vt=sq, after interchanging u,v if necessary. Conversely a monadic right adjoint has the corresponding properties; an equivalent formulation uses creation of these coequalisers.

The general reconstruction proof is imported, not supplied by the particular algebra reconstructions above. The retained earlier source gives the precise benchmark: Mac Lane, *Categories for the Working Mathematician*, Chapter VI, Section 7, Theorem 1, pages 151–154, with Exercise 6 on page 155 for the up-to-equivalence formulation. The splitting equations and the restriction to these pairs are part of the statement. Conservativity alone is not being used as a monadicity criterion.

## 7. Idempotent monads and closure operators

A monad is idempotent when each μ_X is an isomorphism. Then the two monad sections Tη_X and η_TX both equal μ_X inverse.

**Proposition 9.6.** For an idempotent monad, every algebra action a:TA→A is inverse to η_A. Its algebra category identifies with the full subcategory of objects for which η_A is invertible.

*Proof.* One inverse equation is the algebra unit law. Naturality of η gives η_Aa=Ta η_TA. Since η_TA=Tη_A, the right side is T(aη_A)=id_TA. Thus a and η_A are inverse. Conversely if η_A is invertible, its inverse satisfies the algebra laws, or is obtained by transporting the free-algebra action along η_A; explicitly Tη_A=η_TA=μ_A inverse makes aTa=aμ_A after substitution. Naturality of η shows every arrow between such objects commutes with these inverse actions. Hence the forgetful functor is fully faithful onto that full subcategory. ∎

In a poset category a monad is exactly a closure operator. Its unit gives x≤Tx, and its multiplication gives TTx≤Tx. The unit at Tx supplies the reverse inequality, so TTx=Tx by antisymmetry. The algebras are exactly the fixed points Tx=x, with their inherited order. For a function of sets, the saturation A↦f inverse(f(A)) from the preceding chapter is an example on the subset poset. Its fixed points are unions of fibres. Here idempotence is literal equality in a poset; in a general category it is the invertibility of μ, rather than an equality TT=T imposed on objects.

## 8. Exercises

### CAT-09-01 — Three levels of words

Explain the associativity law for the list monad on an explicit list of lists of lists, and identify what remains unchanged under both flattening orders.

<details><summary>Hint 1</summary>
Use [[[a],[b,c]],[[],[d]]].
</details>
<details><summary>Hint 2</summary>
Empty inner words contribute no letters.
</details>
<details><summary>Solution</summary>
Flattening inner levels first gives [[a,b,c],[d]], then [a,b,c,d]. Flattening the outer level first gives [[a],[b,c],[],[d]], then the same final word. Each original letter remains in its original left-to-right order, and each empty block contributes nothing. The general proof is this equality of the concatenated finite sequence of letters, with the grouping removed in either order. It is an exact combinatorial identity, not an observation from program execution.
</details>

### CAT-09-02 — Algebra identity

For the list monad, derive the left identity axiom of the reconstructed monoid from the algebra equation.

<details><summary>Hint 1</summary>
Use the list of lists [[],[x]].
</details>
<details><summary>Hint 2</summary>
The unit axiom evaluates a singleton as its sole element.
</details>
<details><summary>Solution</summary>
Flattening gives [x], whose action value is x. Evaluating the two inner words first gives [e,x], where e is the empty-word value. Evaluating that list gives the reconstructed product ex. The algebra equation equates these routes, yielding ex=x. The right identity follows from [[x],[]]. Thus the monoid identity law is a consequence of substitution, not an additional choice imposed on the algebra.
</details>

### CAT-09-03 — An algebra map is a monoid map

Show directly that an algebra morphism for the list monad preserves identity and multiplication.

<details><summary>Hint 1</summary>
Evaluate fa=bTf on empty and two-letter words.
</details>
<details><summary>Hint 2</summary>
The letterwise map preserves the shapes of these words.
</details>
<details><summary>Solution</summary>
On the empty word, the equation says f(e_A)=e_B. On [x,y], it says f(xy)=f(x)f(y). Hence f is a unital monoid homomorphism. Conversely these properties imply preservation of every finite ordered product by induction on word length, including the empty case, so every monoid homomorphism is an algebra map. The two arrow notions therefore coincide along with the reconstructed objects.
</details>

### CAT-09-04 — A free extension

For a T-algebra (A,a), prove that extending f:X→A by aTf and then restricting along η_X returns f.

<details><summary>Hint 1</summary>
Use naturality of η for f.
</details>
<details><summary>Hint 2</summary>
Then apply aη_A=id_A.
</details>
<details><summary>Solution</summary>
The restricted map is aTf η_X. Naturality rewrites Tf η_X as η_A f, and the algebra unit equation gives aη_A f=f. This proves one inverse relation in the free-algebra hom bijection. It uses the actual action law and naturality, not merely the existence of two candidate maps with the same types.
</details>

### CAT-09-05 — Pointed-set algebras

For the added-point monad, describe every algebra on a fixed set A and determine when there are none.

<details><summary>Hint 1</summary>
The unit equation fixes the action on the original elements.
</details>
<details><summary>Hint 2</summary>
Only the value at the added symbol remains.
</details>
<details><summary>Solution</summary>
The action must send each original a to itself and may send the new symbol to any selected point a₀∈A. The multiplication law holds because both kinds of nested added symbol evaluate to that same point. Thus algebras on A correspond exactly to its points. There is no algebra on the empty set, since no function can interpret the added symbol there. Algebra morphisms are functions preserving the selected points by the same equation.
</details>

### CAT-09-06 — Kleisli failure

For partial functions X⇀Y and Y⇀Z, state exactly the domain of their Kleisli composite for the added-point monad.

<details><summary>Hint 1</summary>
The first result must exist before the second function can be applied.
</details>
<details><summary>Hint 2</summary>
Both failure levels are flattened to one symbol.
</details>
<details><summary>Solution</summary>
The domain consists of those x where the first function is defined and its resulting y belongs to the second function's domain. On those points the value is the ordinary second value at the first value. Every other x maps to the failure symbol, whether failure occurred first or second. The multiplication of the monad identifies those two failure levels and gives precisely this partial-composition rule.
</details>

### CAT-09-07 — The comparison action

For F⊣G, verify the unit equation for the algebra on GY supplied by the comparison functor.

<details><summary>Hint 1</summary>
Its action is Gε_Y.
</details>
<details><summary>Hint 2</summary>
Use the adjunction triangle at Y.
</details>
<details><summary>Solution</summary>
The algebra unit composite is Gε_Y η_GY, which is id_GY by the second adjunction triangle. Its source is GY and intermediate object GFGY, so it has exactly the type required for a T-algebra with T=GF. The associativity equation needs naturality of ε as well; this unit verification alone would not complete the algebra construction.
</details>

### CAT-09-08 — Inverse algebra morphisms

Let f:(A,a)→(B,b) be an algebra morphism whose underlying arrow has inverse g. Prove g is an algebra morphism.

<details><summary>Hint 1</summary>
Start from fa=bTf.
</details>
<details><summary>Hint 2</summary>
Compose on the left with g and on the right with Tg.
</details>
<details><summary>Solution</summary>
Those compositions give aTg=g b Tf Tg=g b, since Tf Tg=T(fg)=id_TB. Thus g b=aTg, which is the algebra-morphism equation for g. Its composite identities hold already on underlying arrows and hence in the algebra category. Therefore the forgetful functor reflects isomorphisms, proving the conservativity consequence used in the monadicity discussion.
</details>

### CAT-09-09 — A split coequaliser

Given qs=id, ut=id and vt=sq, prove q coequalises u,v when qu=qv is also part of the diagram, and explain the role of the splitting equations in factorising an equalising map h:B→Z.

<details><summary>Hint 1</summary>
The coequalising equation is required explicitly; the splitting supplies the factor.
</details>
<details><summary>Hint 2</summary>
Try hs:Q→Z and use hu=hv.
</details>
<details><summary>Solution</summary>
The supplied qu=qv is the coequalising equation itself. For h with hu=hv, the candidate hs satisfies hsq=hvt=hut=h. Uniqueness follows because qs=id makes q epic: any map k with kq=h must equal kqs=hs. Thus the split data proves the universal property once the coequalising diagram is specified. Listing only the one-sided inverse equations while omitting the basic diagram relation would not be the full split-coequaliser definition.
</details>

### CAT-09-10 — A closure algebra

For a closure operator T on a poset, show that a T-algebra exists on x exactly when x is closed.

<details><summary>Hint 1</summary>
The action is an inequality Tx≤x.
</details>
<details><summary>Hint 2</summary>
Combine it with the unit inequality x≤Tx.
</details>
<details><summary>Solution</summary>
An action requires Tx≤x. The unit gives x≤Tx, so antisymmetry forces Tx=x. Conversely a fixed point has its identity as action, and all algebra equations hold because any two parallel arrows in a poset category agree. Thus algebras are precisely the closed elements, with their inherited comparisons as morphisms. The conclusion uses a poset, where antisymmetry turns mutual comparisons into equality.
</details>

### CAT-09-11 — Idempotent actions

For an idempotent monad, derive η_Aa=id_TA for an algebra action a, and identify the other inverse equation.

<details><summary>Hint 1</summary>
Use η_Aa=Ta η_TA.
</details>
<details><summary>Hint 2</summary>
Both monad sections equal μ_A inverse.
</details>
<details><summary>Solution</summary>
Idempotence gives η_TA=Tη_A. Naturality then yields η_Aa=Ta Tη_A=T(aη_A)=id_TA. The other equation is exactly the algebra unit law aη_A=id_A. Hence a is inverse to η_A. This does not claim that the two objects are equal or that every monad has this property; invertibility of μ was used to identify its two sections.
</details>

### CAT-09-12 — The scope of a recognition theorem

Why do the explicit monoid-algebra reconstruction and the general Beck statement provide different kinds of evidence?

<details><summary>Hint 1</summary>
One identifies operations and maps directly in a particular monad.
</details>
<details><summary>Hint 2</summary>
The other recognises a comparison equivalence under categorical hypotheses.
</details>
<details><summary>Solution</summary>
For lists, the chapter constructs a monoid operation from every algebra, proves its axioms, recovers evaluation on all words and identifies the morphisms. This directly proves the comparison equivalence in that case. Beck's theorem is a general criterion using conservativity and specified split-coequaliser existence and preservation; its reconstruction proof is explicitly imported. The particular list proof does not establish that theorem for arbitrary adjunctions, while the theorem's statement does not replace the explicit operation checks already supplied for lists.
</details>

## 9. Next connection

Monads retain coherent substitution from an adjunction, while algebra categories recover its possible interpretations. Kan extensions next treat extension of a functor along another functor as a universal mapping problem, with adjunctions and colimits providing important concrete cases.
