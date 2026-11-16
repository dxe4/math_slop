var e=`---
parent_id: book-algebraic-geometry
chapter_id: sheaf-cohomology
title: "Sheaf Cohomology"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Sheaf Cohomology

Global sections need not preserve a sheaf surjection. Cohomology records that failure in functorial groups and a long exact sequence. We construct the required resolutions, prove affine acyclicity for quasi-coherent sheaves over Noetherian rings, justify finite affine-cover calculations, and prove projective finiteness and Serre vanishing from the explicit twist calculations.

Read Chapters 8 and 12, Homological Algebra's [derived-functor construction](../morphisms-modules-categories/derived-functors-tor-ext.md) and [acyclic-resolution theorem](../morphisms-modules-categories/exactness-adjoint-functors.md), and the full [Artin–Rees proof](../commutative-algebra/completions-artin-rees.md), Theorem 11.2. Noetherianity will be stated in the affine vanishing proof; it is not a premise of the general sheaf cohomology definition. Projective calculations are over a field $k$, so finite means finite-dimensional over that field.

## 1. Enough injectives and the cohomology definition

Sheaves of abelian groups have enough injectives. For each point $x$, embed the abelian group $F_x$ in an injective group $I_x$, whose existence is proved in the homological preparation. Direct image from the one-point space is right adjoint to the exact stalk functor. It therefore sends injective groups to injective sheaves. The product of these sheaves is injective, because extension of a map into the product is equivalent to extending each component. The natural map from $F$ into that product is injective: a section with zero image has every germ zero and is zero by locality.

Choose an injective resolution $F\\to I^\\bullet$ and define $H^q(X,F)$ to be the cohomology of $\\Gamma(X,I^\\bullet)$. Degree zero is ordinary global sections. Comparison and homotopy independence are the injective-resolution arguments already proved in Homological Algebra, now in this abelian category whose enough-injectives property has just been established. A short exact sheaf sequence gives the natural long exact cohomology sequence by the same injective horseshoe argument. For module sheaves we apply this definition to the underlying abelian sheaf; scalar actions induce the corresponding module actions on cohomology functorially.

A sheaf is flasque if every restriction to a smaller open is surjective. Injective abelian sheaves are flasque. For a concrete proof, let $Z_U$ denote extension by zero of the constant integer sheaf on an open $U$. It is the subsheaf of locally constant integer functions whose support is contained in $U$. Extension by zero is locally constant near points outside that support, so gives a monomorphism $Z_U\\to Z_V$ whenever $U\\subseteq V$. A map $Z_U\\to I$ is exactly a section of $I$ on $U$: send one to that section and glue integer multiples with zero outside the support. Injectivity extends this map to $Z_V$, proving the restriction surjective.

## 2. Flasque resolutions really compute cohomology

If $0\\to F\\to G\\to Q\\to0$ is exact with $F$ flasque, every section of $Q$ has a lift over any open where $G$ is being considered. Start with local lifts. Given a lift on an open $V$ and another on $W$, their difference on the overlap is a section of $F$. Extend that difference to $W$ using flasqueness, correct the second lift, and glue. A maximal partial lift exists by the usual union-of-chains argument; if any point were still missing, a local lift there and this correction would extend it. Thus a lift exists on the whole open.

If $G$ is also flasque, the quotient $Q$ is flasque: lift a section on the smaller open to $G$, extend in $G$, and project. Applying this to an injective resolution of a flasque sheaf makes every successive cokernel flasque and makes the global-section complex exact in positive degrees. Hence flasque sheaves are cohomologically acyclic. The general acyclic-resolution theorem therefore lets any flasque resolution compute $H^q$.

Such resolutions can also be made explicitly. The sheaf assigning $\\prod_{x\\in U}F_x$ to $U$, with projection restrictions, is flasque, and the germ map embeds $F$ into it. The sheaf axiom is pointwise matching of the families. Repeating with the cokernel gives a functorial flasque resolution. This description makes clear why an arbitrary family of stalk elements belongs to this larger resolving sheaf even if it did not come from a section of $F$.

## 3. Injective module sheaves are flasque on a Noetherian affine

Let $A$ be Noetherian and $I$ an injective $A$-module. We prove $\\widetilde I$ flasque; this supplies a noncircular affine acyclicity proof.

For an ideal $\\mathfrak a$, its torsion submodule $T=\\{z:\\mathfrak a^Nz=0\\text{ for some }N\\}$ is injective. Use Baer's criterion, proved in the preparation. A map from an ideal $\\mathfrak b$ to $T$ has image killed by one $\\mathfrak a^N$, because $\\mathfrak b$ is finite. Artin–Rees for $\\mathfrak b\\subseteq A$ gives $K$ such that $\\mathfrak b\\cap\\mathfrak a^K\\subseteq\\mathfrak a^N\\mathfrak b$. The map consequently extends to $\\mathfrak b+\\mathfrak a^K$ by zero on $\\mathfrak a^K$. It is well-defined because their intersection maps to zero. Injectivity of $I$ extends it to $A\\to I$, whose value at one is killed by $\\mathfrak a^K$, so lies in $T$. Baer therefore proves $T$ injective.

It splits from $I$, giving $I=T\\oplus I'$ with $I'$ injective and having no nonzero $\\mathfrak a$-torsion. Let $U=\\operatorname{Spec}A\\setminus V(\\mathfrak a)$ and take a section $s$ of $\\widetilde I'$ on $U$. Cover $U$ by finitely many $D(f_i)$ generating the ideal's radical. On each, $s$ is a module fraction. A sufficiently high power of $f_i$ times $s$ comes from one element of $I'$ on all of $U$, not just on that chart: the proposed difference is zero after inverting $f_i$, and on the finitely many other charts a further power annihilates it. Choose a common such power and use locality.

Let $J$ be the ideal of $a\\in A$ for which $as$ comes from a global element of $I'$. It contains a power of each $f_i$ and hence a power of $\\mathfrak a$. The representing element is unique: an element of $I'$ zero on all of $U$ is killed by powers of all the $f_i$, hence by a power of $\\mathfrak a$, and is zero. Thus the representing elements define an $A$-linear map $J\\to I'$. Extend it to $A$ by injectivity and call the value at one $e$.

On $U$, the ideal $J$ is the unit ideal locally. Multiplying $e$ and $s$ by a local unit from $J$ makes them equal, so they agree everywhere as sections. This extends $s$ globally. The torsion summand has zero sheaf on $U$, so every section of $\\widetilde I$ on $U$ also extends. Every open in the Noetherian affine is such a finite union of principal opens. Extending first to the whole spectrum and then restricting proves flasqueness. No statement about injective module sheaves over arbitrary non-Noetherian rings has been used.

## 4. Affine acyclicity follows from that proof

Take an injective module resolution $M\\to I^\\bullet$ over the Noetherian ring. Association to sheaves is exact, so it gives a resolution $\\widetilde M\\to\\widetilde I^\\bullet$. Its terms are flasque by Section 3 and therefore acyclic as abelian sheaves. It computes sheaf cohomology. Global affine reconstruction identifies its section complex with the original module resolution, which has no positive cohomology. Hence

$$H^q(\\operatorname{Spec}A,\\widetilde M)=0\\qquad(q>0).$$

Degree zero is $M$. This proves the required vanishing independently of any assumption that a Čech complex already computes derived cohomology. For example the coherent sheaf of $k[t]/(t^2)$ on the affine line has that two-dimensional global module and zero higher cohomology. Its nonreduced support does not create an exception to affine vanishing; its quasi-coherent module and affine ambient space satisfy the exact hypotheses.

## 5. Finite affine covers compute the derived groups

For a finite open cover $(U_i)$, the Čech degree-$p$ group is the product of sections on intersections with $p+1$ distinct indices. Its differential is the alternating sum of restrictions. Two consecutive differentials compose to zero because each double omission occurs twice with opposite signs.

For a flasque sheaf the augmented finite-cover Čech complex is exact. A two-open cover follows from sheaf gluing and surjectivity of restriction to the overlap. For induction, separate the last open from the union of the preceding ones. Sorting index sets according to whether they contain that last index expresses the complex as the mapping-cone complex comparing the preceding cover with its intersection cover on the last open. Both smaller covers have cohomology only in degree zero by induction, and the restriction from the last open to that intersection union is surjective by flasqueness. The two-open argument then gives exactness in every degree. This proves the finite-cover assertion without assuming sections of an arbitrary sheaf restrict surjectively.

Now take a flasque resolution of $F$ and form its double complex of finite Čech groups. Computing first in the Čech direction gives the global resolving complex, by the preceding exactness. Computing first in the resolving direction gives cohomology on each intersection, because restriction of a flasque resolution remains a flasque resolution. If every intersection is acyclic for $F$, only its degree-zero row remains, giving the ordinary Čech section complex. The double complex has finitely many Čech columns and finite diagonals, so the comparison follows by the finite filtered-complex argument proved in Homological Algebra; no infinite product completion or limit convergence is involved.

For a separated Noetherian scheme over an affine base, affine opens have affine intersections. Indeed their product over the affine base is affine, and their intersection is its closed diagonal pullback, a closed subscheme and hence affine by Chapter 12. Repeating gives the finite-intersection assertion. A quasi-coherent sheaf on those intersections is acyclic by Section 4. Thus any finite affine cover computes its sheaf cohomology by this Čech complex. The Noetherian and quasi-coherent hypotheses belong to the proof and have not been erased from the theorem.

## 6. Calculate projective twists by Laurent monomials

For $\\mathbb P^n_k$ with $n\\ge1$, its standard affine intersections give the Čech complex for $\\mathcal O(d)$ as degree-$d$ parts of the polynomial ring localized at the corresponding coordinate products. Split this complex into Laurent monomials $X_0^{a_0}\\cdots X_n^{a_n}$ with integer exponents of sum $d$. A monomial occurs in the term indexed by a nonempty subset $I$ exactly when every negative-exponent index belongs to $I$. The Čech differential preserves the monomial, so the complex is the direct sum of these finite index-set complexes.

If no exponent is negative, the index complex is the ordinary simplex cochain complex, with one degree-zero class and no higher class. If all exponents are negative, the only term is in top degree $n$, giving one class there. For a nonempty proper negative-index set, choose an index outside it. Inserting that index with the alternating sign contracts the complex: in the equation $dh+hd=1$, terms inserting and deleting different indices cancel, leaving the term inserting and deleting that chosen index. Repeated-index terms are interpreted as zero. Thus that case has no cohomology.

Consequently $H^0(\\mathcal O(d))$ has the nonnegative monomial basis, $H^n(\\mathcal O(d))$ has the all-negative monomial basis, and intermediate positive degrees vanish. Their dimensions are

$$h^0(\\mathcal O(d))=\\binom{d+n}{n}\\ (d\\ge0),\\qquad
h^n(\\mathcal O(d))=\\binom{-d-1}{n}\\ (d\\le-n-1),$$

with zero in the other stated ranges. Counting all-negative exponents uses $b_i=-a_i-1\\ge0$ and their total $-d-n-1$. The finite Čech cover also proves $H^q(F)=0$ for every quasi-coherent $F$ when $q>n$. Projective zero-space is the affine point and is treated separately: its line twists all have one-dimensional degree-zero sections and no higher cohomology.

### Worked example 1: the projective line

With coordinate $t$, the two-chart complex gives

$$H^1(\\mathbb P^1,\\mathcal O(d))
= k[t,t^{-1}]/(k[t]+t^d k[t^{-1}]).$$

If $d\\le-2$, a basis is $t^{d+1},\\ldots,t^{-1}$, of size $-d-1$. If $d\\ge-1$, the quotient is zero. Combined with $h^0=\\max(d+1,0)$, its Euler characteristic is $d+1$ for every integer. This is a calculation of derived cohomology because the finite-cover theorem was proved first.

### Worked example 2: the projective plane

For $\\mathcal O(-3)$ on $\\mathbb P^2$, the only all-negative exponent triple summing to minus three is $(-1,-1,-1)$. Thus $H^2$ is one-dimensional with that monomial representative, while $H^0$ and $H^1$ vanish. For $\\mathcal O(-2)$ there is no such triple and every cohomology group vanishes. The ambient projective dimension controls the cohomological degree, not the fact that a representative uses rational coordinate expressions.

### Worked example 3: the missing global lift becomes a class

Apply the long exact sequence to $0\\to\\mathcal O(-2)\\to\\mathcal O(-1)^2\\to\\mathcal O\\to0$ from Chapter 8. Both $H^0$ and $H^1$ of $\\mathcal O(-1)$ vanish. Hence its connecting map identifies $H^0(\\mathcal O)=k$ with $H^1(\\mathcal O(-2))=k$. The locally liftable section one gives a nonzero obstruction class, represented by a nonzero multiple of $t^{-1}$ in the quotient calculation. This proves the obstruction exists and identifies its dimension, rather than merely naming an unspecified higher group.

## 7. Projective coherent finiteness and Serre vanishing

For a coherent sheaf $F$ on $\\mathbb P^n$, Chapter 12 gives a surjection from a finite sum $E_0$ of line twists, with coherent kernel $K_1$. Repeat to obtain finitely many such surjections onto successive kernels. Each $E_j$ has finite-dimensional cohomology by Section 6. From the long exact sequence,

$$H^q(E_0)\\longrightarrow H^q(F)\\longrightarrow H^{q+1}(K_1).$$

Iterate this estimate through the successive kernels. After at most $n+1$ steps the rightmost cohomological degree exceeds $n$ and vanishes by the finite-cover bound. Thus every $H^q(F)$ is built from finitely many subquotients of finite-dimensional groups, so is finite-dimensional. This includes $q=0$, whose first possible obstruction is $H^1(K_1)$. A finite resolution length has not been assumed.

Twist these same finitely many sequences by $\\mathcal O(t)$. Choose $t$ so large that all line summands in them have nonnegative twist. Their positive cohomology vanishes. The exact sequences then identify $H^q(F(t))$ for $q>0$ with the successive $H^{q+1}$ groups of the kernels until the degree exceeds $n$, proving eventual vanishing. Also $E_0(t)$ is globally generated by its homogeneous monomial sections, and its surjection makes $F(t)$ globally generated. This proves Serre vanishing and eventual global generation with an explicit finite-step logical argument, though it does not supply a universal numerical threshold for every sheaf.

For a closed projective subscheme, push its coherent sheaf to the ambient projective space. Closed direct image is exact, preserves coherence through its finite quotient algebra models, and preserves flasqueness. Pushing a flasque resolution therefore computes the same cohomology, so the ambient conclusions apply. Tensor twists commute with that closed direct image on local quotient models. Hence projective coherent finiteness and vanishing hold for the projective curves needed next, including their line bundles. Affine or noncoherent counterexamples outside these hypotheses are not covered by the theorem.

## 8. A perfect coefficient pairing on the projective line

The differential $dt$ on one chart and $ds=-t^{-2}dt$ on the other identify the canonical differential line with $\\mathcal O(-2)$, after a constant sign choice of frame. Pair $H^1(\\mathcal O(d))$ with $H^0(\\mathcal O(-d-2))$ by taking the coefficient of $t^{-1}$ in the product of their local expressions, equivalently the residue coefficient of that product times $dt$.

This is independent of the Čech representative. Multiplying a polynomial boundary by the second polynomial has no negative exponent, while multiplying a boundary from $t^d k[t^{-1}]$ has exponent at most minus two because the second polynomial degree is at most $-d-2$. Neither contributes a $t^{-1}$ coefficient. When $d\\le-2$, the basis $t^j$ with $d<j<0$ pairs perfectly with $t^{-j-1}$ in the polynomial space. When $d\\ge-1$, both spaces are zero. Thus the pairing is perfect in all cases.

Multiplication maps between line twists are adjoint for this pairing because the same three local factors have the same product in either order. This naturality will make the direct-sum pairing independent of a splitting when vector bundles on the projective line are treated next. It is an actual calculated duality input for the curve Riemann–Roch proof, not the unproved general curve duality theorem itself.

## Exercises

### AG13-01. Enough injectives

Explain why the product of direct-image injective stalk groups detects every nonzero sheaf section.

**Hint 1.** A section is zero exactly when all its germs are zero.

**Hint 2.** The chosen embedding at each stalk preserves nonzero germs.

<details><summary>Full solution</summary>

A nonzero section has a nonzero germ somewhere by locality. Its image in the corresponding injective stalk group remains nonzero, so its image in the product sheaf is nonzero. The stalk functor is exact and direct image from that point is its right adjoint, proving each factor injective. Componentwise extension of maps proves their product injective, so this construction supplies enough injectives rather than only a detecting family.

</details>

### AG13-02. Why flasque quotients lift

In Section 2, identify the correction needed to join two local lifts of one quotient section.

**Hint 1.** Their difference lies in the kernel sheaf on the overlap.

**Hint 2.** Extend that kernel section to one new open before subtracting it.

<details><summary>Full solution</summary>

Exactness identifies the difference with a section of the flasque kernel. Extend it from the overlap to the new open and subtract the extension from that lift. The adjusted lifts agree and glue. The maximal-partial-lift argument covers the entire open; chain unions are compatible glued lifts. This proves actual surjectivity of sections for this particular flasque-kernel situation, not for every sheaf epimorphism.

</details>

### AG13-03. The Artin–Rees use

Why does the map from $\\mathfrak b$ into the torsion part of an injective module extend by zero on a suitable power of $\\mathfrak a$?

**Hint 1.** Its finite generating image is killed by one power $\\mathfrak a^N$.

**Hint 2.** Artin–Rees puts the intersection with a sufficiently deep power inside $\\mathfrak a^N\\mathfrak b$.

<details><summary>Full solution</summary>

Choose $K$ with $\\mathfrak b\\cap\\mathfrak a^K\\subseteq\\mathfrak a^N\\mathfrak b$. The original map kills that intersection, so defining it to be zero on $\\mathfrak a^K$ is consistent on the sum ideal. Extending this map into the injective module makes its value at one annihilated by $\\mathfrak a^K$. The extension therefore stays in the torsion submodule, as required by Baer's criterion.

</details>

### AG13-04. A noncircular affine proof

Explain why Section 4 does not assume a Čech-to-derived comparison in order to prove affine acyclicity.

**Hint 1.** The resolution comes from injective modules and associated sheaves.

**Hint 2.** Flasqueness of its terms was proved using Noetherian algebra first.

<details><summary>Full solution</summary>

The module resolution becomes an exact sheaf resolution because association is exact. Section 3 proves its terms flasque, hence acyclic by the independent flasque argument. The acyclic-resolution theorem computes cohomology from its global sections, which are the original exact module resolution. Positive cohomology vanishes before any affine-cover comparison is used. Thus the later Čech theorem uses an already proved input rather than proving that input circularly.

</details>

### AG13-05. Affine intersections

Why are two affine opens in a scheme separated over an affine base an affine intersection?

**Hint 1.** Their product over that base is affine.

**Hint 2.** Their intersection is the closed diagonal pullback inside that product.

<details><summary>Full solution</summary>

The tensor product gives the affine product. Pulling back the separated diagonal identifies their fiber product over the scheme, which for two open immersions is their intersection. It is a closed subscheme of that affine product, hence affine by Chapter 12. Repeating proves the finite-intersection property needed by the Čech computation. Without separatedness the closed-immersion step can fail.

</details>

### AG13-06. A negative line twist

Compute $H^0$ and $H^1$ of $\\mathcal O(-4)$ on the projective line with explicit first-cohomology representatives.

**Hint 1.** Use the quotient of Laurent polynomials.

**Hint 2.** Keep exponents strictly between minus four and zero.

<details><summary>Full solution</summary>

Degree zero sections vanish. First cohomology has basis $t^{-3},t^{-2},t^{-1}$ and dimension three. All more negative exponents lie in the second-chart boundary and all nonnegative ones in the first-chart boundary. Higher groups vanish because the two-open Čech complex has no further degree. The Euler characteristic is minus three, equal to $d+1$ at $d=-4$.

</details>

### AG13-07. A top projective-plane class

Compute the dimension and a monomial representative of $H^2(\\mathbb P^2,\\mathcal O(-3))$.

**Hint 1.** Every coordinate exponent must be negative.

**Hint 2.** Their sum is minus three.

<details><summary>Full solution</summary>

The only triple is $(-1,-1,-1)$, giving representative $1/(X_0X_1X_2)$ in the degree-minus-three top localization. It survives because no lower intersection inverts all three negative variables. All other exponent-pattern subcomplexes are contractible or contribute degree zero only. Thus the group is one-dimensional, with no intermediate first cohomology.

</details>

### AG13-08. Identify the obstruction class

Explain why the connecting map for the twisted exact sequence of Chapter 8 is an isomorphism from $k$ to $H^1(\\mathcal O(-2))$.

**Hint 1.** Both cohomology groups of $\\mathcal O(-1)$ vanish.

**Hint 2.** Read the adjacent terms of the long exact sequence.

<details><summary>Full solution</summary>

The source global group of the middle sheaf is zero and its first cohomology is zero. Exactness therefore makes the connecting map from $H^0(\\mathcal O)=k$ both injective and surjective onto $H^1(\\mathcal O(-2))$. The nonzero class of one is the obstruction to the nonexistent global lift. Its quotient basis is a nonzero multiple of $t^{-1}$, fixing an explicit representative up to the chosen differential sign.

</details>

### AG13-09. Finite-step finiteness

Why does the coherent finiteness proof need only finitely many twisted-free presentations even without a proved finite resolution length?

**Hint 1.** Each kernel step raises the possible obstruction's cohomological degree.

**Hint 2.** The finite affine cover already killed degrees above the ambient projective dimension.

<details><summary>Full solution</summary>

The long exact sequence bounds $H^q(F)$ between a finite line-sum group and $H^{q+1}$ of the first kernel. Repeating reaches degree above $n$ after at most $n+1$ steps, where every quasi-coherent group vanishes by the cover theorem. All earlier line-sum groups are finite-dimensional, so the original group is too. No assertion that the final kernel is free was needed.

</details>

### AG13-10. Serre vanishing's threshold

Describe how the proof chooses one sufficiently large twist for the finite initial presentation chain.

**Hint 1.** There are finitely many line twists among those finitely many terms.

**Hint 2.** Make each resulting degree nonnegative.

<details><summary>Full solution</summary>

Choose the twisting integer at least every shift in those line summands. Their positive cohomology then vanishes by the explicit projective calculation. The exact sequences shift each positive cohomology group of the target to the next kernel until it exceeds degree $n$, where it is zero. This proves existence of a threshold for that sheaf and chosen chain, without giving a single universal bound for all coherent sheaves.

</details>

### AG13-11. Perfect coefficient pairing

For $d=-4$, write dual bases for $H^1(\\mathcal O(d))$ and $H^0(\\mathcal O(-d-2))$ under the coefficient-of-$t^{-1}$ pairing.

**Hint 1.** The first basis is $t^{-3},t^{-2},t^{-1}$.

**Hint 2.** Match each exponent with the polynomial exponent making their sum minus one.

<details><summary>Full solution</summary>

The dual ordered basis is $t^2,t,1$. Each corresponding product has exponent minus one and every mismatched product has another exponent. The pairing matrix is the identity. Polynomial and second-chart boundary terms contribute no minus-one coefficient under the stated degree bound, so this is a well-defined perfect pairing on cohomology classes.

</details>

### AG13-12. Closed direct image preserves the groups

Why can a coherent sheaf on a closed projective subscheme be computed after direct image into projective space?

**Hint 1.** Closed direct image is exact on abelian sheaves and preserves flasque restrictions.

**Hint 2.** Its global sections are the same source global sections.

<details><summary>Full solution</summary>

Push a flasque resolution along the closed immersion. Exactness follows from its stalk description, and each pushed term remains flasque because restrictions are the original restrictions on preimage opens. The global resolving complexes are identical, so cohomology agrees. The pushed coherent sheaf is coherent on the Noetherian ambient space by the finite quotient-module models. This supplies the exact hypotheses for applying ambient projective finiteness and vanishing.

</details>

## Closing summary

Cohomology is defined from actual enough-injective sheaf resolutions, and flasque acyclicity is proved. Noetherian algebra and Artin–Rees establish affine quasi-coherent acyclicity before the finite-cover comparison is invoked. Laurent monomials then compute projective twists, and finite initial twisted presentations prove coherent finiteness and Serre vanishing. The explicit projective-line coefficient pairing supplies a proved duality ingredient for the curve theorem next.
`;export{e as default};