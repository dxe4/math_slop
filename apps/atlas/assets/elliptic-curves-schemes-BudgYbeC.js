var e=`---
parent_id: book-algebraic-geometry
chapter_id: elliptic-curves-schemes
title: "Elliptic Curves as Schemes"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Elliptic Curves as Schemes

A pointed genus-one curve has a group law on its points, but an elliptic group scheme requires more: addition must be a morphism on the entire product, including its generic and infinitesimal geometry. We construct a general Weierstrass model from the proved Riemann–Roch theorem, derive the point law from divisor classes, prove addition regular, and compute a nonreduced Frobenius kernel.

Let $k$ be algebraically closed of arbitrary characteristic and let $E$ be a smooth integral projective curve of genus one with a chosen point $O$. Read Chapters 6 and 12–14 on finite curve maps, line bundles, cohomology and the full Riemann–Roch proof, and Chapter 11 on scheme products and separatedness. No general-base Picard representability or pre-existing elliptic group law is imported. General Weierstrass equations are retained in characteristics two and three rather than silently replaced by a short equation unavailable for every curve there.

## 1. Riemann–Roch constructs the model

Chapter 14 makes $\\omega_E$ trivial and gives $\\ell(nO)=n$ for every $n\\ge1$. Choose $x\\in L(2O)\\setminus L(O)$ and $y\\in L(3O)\\setminus L(2O)$. Their only poles are at $O$, of exact orders two and three. The monomials $1,x,y,x^2,xy$ have distinct pole orders zero through five except one, so are independent and form a basis of $L(5O)$.

The seven functions $1,x,y,x^2,xy,x^3,y^2$ lie in the six-dimensional space $L(6O)$. A relation between them has nonzero coefficients on both order-six terms: if only one remained, all nonzero terms would have different orders and could not cancel. Normalize the relation, and rescale $x,y$ by a common nonzero scalar if needed, to obtain

$$y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.$$

For the rescaling detail, if the leading relation is $y^2=cx^3+$ lower terms with $c\\ne0$, replacing both variables by $cx,cy$ changes the leading coefficient to one. This uses no extraction of roots and works in every characteristic.

The function field is $k(x,y)$. The map $x:E\\to\\mathbb P^1$ has degree two by its total pole order, so $[k(E):k(x)]=2$. Every rational function in $x$ has even order at $O$, by comparing its numerator and denominator polynomial degrees; $y$ has odd pole order three and is not in that field. It therefore generates the whole degree-two extension. The displayed monic quadratic relation is irreducible over $k(x)$ and in $k[x,y]$ by Gauss's lemma.

## 2. Prove that the plane model is actually the curve

Homogenize the equation to a cubic $D\\subseteq\\mathbb P^2$. It is integral: its affine equation is irreducible and the homogeneous equation has no extra homogenizing-coordinate factor. The rational map $[x:y:1]$ from $E$ extends to a morphism by the nonsingular-curve extension lemma. At $O$, multiply its three coordinates by a uniformizer cubed. Their orders are one, zero and three, so its value is $[0:1:0]$. That is the only point of $D$ at infinity.

This morphism is finite on a two-chart cover of $D$. On $Z\\ne0$, its inverse image is $E\\setminus\\{O\\}$, the affine inverse image of the finite $x$-map's finite chart. Its coordinate ring is finite over $k[x]$, hence over the intermediate ring $k[x,y]$ of the plane model. On $Y\\ne0$, use $u=x/y,v=1/y$. Its inverse image is the affine finite-chart inverse image of the nonconstant function $v$, since precisely the zeros of $y$ were removed. That coordinate ring is finite over $k[v]$, hence over the intermediate plane chart ring $k[u,v]$. These charts cover $D$ because $Y=Z=0$ is not a cubic point. Thus the morphism $\\nu:E\\to D$ is finite and birational, with identical function field.

There is an exact sequence $0\\to\\mathcal O_D\\to\\nu_*\\mathcal O_E\\to Q\\to0$. The first injection is the ring inclusion on these affine charts. The coherent quotient is supported at finitely many points because the birational map is an isomorphism on dense opens. Such a finite-supported module is a finite collection of Artinian local modules; its global dimension is their total length, and its positive cohomology is zero, by affine decomposition or a filtration by point skyscrapers.

Both global structure rings are $k$. Chapter 14's plane equation calculation gives $h^1(\\mathcal O_D)=1$, even if the integral plane model had initially been singular. The given curve has $h^1(\\mathcal O_E)=1$. Finite direct image gives the same cohomology by identical affine-cover complexes. The long exact sequence therefore forces $H^0(Q)=0$, hence $Q=0$. On every affine chart the finite ring inclusion is an isomorphism, so $\\nu$ is an isomorphism. In particular the constructed cubic is nonsingular. This proves the model assertion without assuming a general very-ampleness criterion or silently identifying a normalization with its image.

The three sections $1,x,y$ of $\\mathcal O(3O)$ have no common zero: away from $O$ the first section is a unit in its frame, while at $O$ the coefficient of $y$ in the pole frame is a unit. Their chart ratios identify the pulled-back hyperplane line with $\\mathcal O(3O)$. The section corresponding to $Z$ has divisor $3O$. Thus the line at infinity meets the cubic three times at its marked point, with intersection multiplicity included.

## 3. Divisor classes give an associative point law

The Riemann–Roch degree-one result gives a bijection

$$E(k)\\longrightarrow\\operatorname{Pic}^0(E),\\qquad
P\\longmapsto[\\mathcal O(P-O)].$$

Define $P+Q$ by tensoring the two classes and taking the unique corresponding point. Tensor product of line bundles is associative and commutative up to its canonical isomorphisms, so their isomorphism classes form an abelian group. Transporting that group law proves all point-group axioms, with identity $O$. Associativity has not been inferred from a diagram of secants.

A line meets the cubic in an effective degree-three divisor, by the full Bézout theorem. Its divisor is linearly equivalent to $3O$ because it is a hyperplane section. Thus if the three intersections with multiplicity are $P,Q,R$, then their degree-zero classes sum to zero and $P+Q=-R$. A tangent line counts its repeated point by its local intersection length; this is the same rule, not a new axiom for tangents.

A vertical line gives the inverse

$$-(x,y)=(x,-y-a_1x-a_3),\\qquad -O=O.$$

Indeed the two affine $y$ roots have that sum, and the third line intersection is $O$. The formula extends to a projective linear involution preserving the cubic, so inversion is already a scheme morphism. Repeated vertical intersections cover the self-inverse case as well.

On the open where both points are affine and $x_1\\ne x_2$, put

$$\\lambda=\\frac{y_2-y_1}{x_2-x_1},\\qquad
\\nu=y_1-\\lambda x_1.$$

Substitution of the line into the cubic and the sum-of-roots identity give

$$x_3=\\lambda^2+a_1\\lambda-a_2-x_1-x_2,
\\qquad y_3=-(\\lambda+a_1)x_3-\\nu-a_3.$$

These are regular functions on that open and satisfy the cubic relation by the same polynomial calculation in its localized coordinate ring. They define a genuine open-product morphism agreeing with the point law. It remains to extend jointly everywhere; separately knowing point values would not prove that.

## 4. First construct every fixed translation

We use one equality criterion before gluing addition: on a reduced finite-type $k$-scheme, two morphisms to a separated target agreeing at every closed point of an open agree as morphisms on that open. Their equalizer is closed; its ideal vanishes at all closed points, hence is nilpotent by the affine Nullstellensatz and zero by reducedness. This criterion does not assume any already constructed joint addition map.

For a fixed finite point $Q$, the preceding formulas give a dominant rational map $T_Q:E\\dashrightarrow E$ on the nonempty open where $x\\ne x(Q)$ and neither point is infinity. Its point values are the injective abstract translation, so its image is infinite and dense. It extends across the omitted points by the proved curve-to-projective extension lemma. The rational maps indexed by $Q$ and $-Q$ compose to the identity on a common dense open. Reduced-source separated-target uniqueness makes the global extensions inverse morphisms. Hence each $T_Q$ is an automorphism, with $T_O$ the identity. The same dense comparison gives $T_QT_R=T_{Q+R}$ as scheme morphisms.

We verify the value at infinity rather than assume the extended map has the desired value there. Near $P=-Q$, set

$$q=\\frac{x(P)-x(Q)}{y(P)-y(Q)}.$$

If $-Q\\ne Q$, its denominator is nonzero there, so $q$ is regular and zero. If $Q=-Q$, the partial derivative in $y$ is zero at $Q$, and nonsingularity makes the partial in $x$ nonzero. The cotangent relation makes $y-y(Q)$ a uniformizer and puts $x-x(Q)$ in its square ideal. Hence $q$ is again locally regular and zero, even in characteristics two and three.

Write

$$A=1+a_1q-(a_2+x(P)+x(Q))q^2,$$

$$B=-(1+a_1q)A+x(P)q^2-(y(P)+a_3)q^3.$$

The generic translation formula becomes the projective expression $[qA:B:q^3]$. At $q=0$ its middle coordinate is minus one, a unit in every characteristic, so this expression is a regular local extension with value $O$. Thus $T_Q(-Q)=O$. Applying the inverse shows $T_{-Q}(O)=-Q$, and varying $Q$ proves $T_R(O)=R$ for every point. Finally

$$T_Q(P)=T_QT_P(O)=T_{Q+P}(O)=Q+P.$$

So the global translations agree with the abstract point law at every point, including all exceptional cases. This check avoids presuming joint regularity of addition in order to prove fixed translations regular.

## 5. Glue joint addition and verify the group scheme

Let $U\\subseteq E\\times E$ be the open where the affine distinct-$x$ formula is defined. For any closed pair $(P,Q)$, choose fixed points $T,S$ such that $P+T$ and $Q+S$ are affine with different $x$ coordinates. This is possible because translations are bijective and a finite $x$ fiber has at most two distinct points, while the curve has infinitely many points.

On the open $(T_T\\times T_S)^{-1}U$, define

$$m_{T,S}=T_{-(T+S)}\\circ m_U\\circ(T_T\\times T_S).$$

It is a scheme morphism and its closed-point values are $P+Q$ by the proved abstract associativity and commutativity. These opens cover all scheme points: their union contains every closed point, and a nonempty closed complement in a finite-type scheme over an algebraically closed field would have a closed point by the Nullstellensatz.

On overlaps the maps agree as morphisms, not just as point functions. Products of these reduced classical varieties are reduced: on affine charts the coordinate tensor embeds in functions on the product by the linear-independence proof of Chapter 2. Closed points are dense in every such finite-type open. The equalizer of two maps into the separated curve is closed; containing all closed points makes its defining ideal nilpotent, and reducedness makes it zero. Thus the local additions glue to a global $m:E\\times E\\to E$.

Associativity and commutativity are equalities of morphisms because they hold on all closed points of the reduced finite-type products $E^3$ and $E^2$, and the same equalizer argument applies. Unit and inverse identities follow identically on $E$. We have therefore constructed a commutative group scheme, not merely a group on its field-valued points. Applying its maps to morphisms from any test $k$-scheme gives a functorial group on those test points, including nonreduced test schemes.

## 6. Smoothness and the elliptic curve definition

The model is smooth over $k$ in the infinitesimal sense as well. On an affine hypersurface chart where one partial derivative is invertible, take a map into a quotient $R/J$ with $J^2=0$. Lift the two coordinates arbitrarily to $R$. Its equation error lies in $J$; changing the coordinate with invertible derivative by minus that error divided by the derivative corrects the equation exactly, since all second-order correction terms vanish. Units modulo a nilpotent ideal lift to units. Iterating square-zero stages treats every nilpotent ideal.

These localized hypersurface algebras are finitely presented, so this is the formal-lifting definition of smooth algebras with finite presentation. The derivative opens cover the affine cubic by nonsingularity; at infinity, in the chart $Y=1$, the equation has linear term $v$, so that derivative is a unit near $O$. Their unit-ideal cover persists after field extension. Projectivity gives properness by Chapter 11, and every geometric curve fiber has dimension one.

Irreducibility also persists after any field extension of $k$. If the homogeneous cubic factored over an extension, a factorization of one of its finitely many possible degree types would solve a finite coefficient system over $k$, with a chosen nonzero coefficient normalized and its inverse included. Such a system having an extension-field solution has a proper ideal, hence a $k$-solution by the Nullstellensatz. That would factor the original irreducible cubic, contradiction. The extended derivative cover makes those curves reduced as well, so they are geometrically integral and connected. Cohomology under a field extension is computed by tensoring the same finite affine-cover complex; exact flat extension preserves its genus-one dimension.

Thus $E$ is a proper smooth geometrically connected genus-one curve with section $O$, the definition of a pointed elliptic curve over the field. The group structure above is an additional proved theorem from that definition. Base change of this group scheme preserves its identities and supplies the corresponding constant families over other $k$-schemes. Relative families with varying coefficients have their own base and smoothness hypotheses; the field proof has not silently established every relative Picard representability theorem.

### Worked example 1: a nonsingular model in characteristic five

Take $y^2=x^3-x$ over an algebraic closure of $\\mathbb F_5$. Its cubic polynomial has distinct roots $0,1,-1$, since its derivative is nonzero at all three. At a hypothetical affine singular point, the $y$ derivative forces $y=0$, and those simple roots exclude a vanishing $x$ derivative. Infinity has the unit derivative just proved. The plane genus calculation gives genus one.

The points $P=(0,0)$ and $Q=(1,0)$ are self-inverse, and their secant is $y=0$. Its third point is $R=(-1,0)$, also self-inverse. Therefore $P+Q=R$ by the divisor-line rule. This finite calculation verifies a specific addition while the Picard and gluing arguments prove the universal group identities.

## 7. Relative Frobenius retains infinitesimal data

In characteristic $p$, let $E^{(p)}$ be the base change along Frobenius of $k$. Its Weierstrass coefficients are $a_i^p$. The relative Frobenius is the $k$-morphism

$$F:E\\longrightarrow E^{(p)},\\qquad [X:Y:Z]\\longmapsto[X^p:Y^p:Z^p].$$

The equation pulls back to the $p$th power of the original equation. On affine charts its coordinates satisfy monic $p$th-power equations over the image, so the map is finite. Its field image is $K^p$, because $k$ is perfect and $K=k(x,y)$; Section 1 of Chapter 14 proves its degree is $p$.

This is a group homomorphism. Relative Frobenius commutes with every $k$-scheme morphism after the corresponding base change: on rings the assertion is that pullback of a $p$th power is the $p$th power of the pullback, with the twist handling the scalar map. Apply this identity to addition and note the relative Frobenius of the product is the product of the two relative maps. It gives precisely compatibility with the base-changed group law, including all test-scheme points.

The kernel is the scheme fiber over $O^{(p)}$, not just the set of points mapping there. There is only one closed point in that fiber, since coordinate $p$th roots are unique in the algebraically closed field. A uniformizer $u'=X'/Y'$ at the target origin pulls back to $u^p$. The local fiber ring is therefore $\\mathcal O_{E,O}/(u^p)$, of length $p$, with completed form $k[[u]]/(u^p)=k[u]/(u^p)$. An Artinian local ring is already complete here, so this also describes the actual fiber algebra.

### Worked example 2: bijective points but degree five

For the characteristic-five curve above the coefficients are fixed by the field's prime-subfield Frobenius, so the map is an endomorphism of that same model. It is bijective on closed points, has field degree five, and its kernel has one point with length five. It is not an isomorphism because its function-field embedding is not onto. The scheme calculation distinguishes it from a bijective automorphism without relying on a sampled point count.

## 8. Worked example 3: identical schemes with different group laws

The finite additive kernel $\\alpha_p$ has algebra $k[\\epsilon]/(\\epsilon^p)$ with comultiplication $\\epsilon\\mapsto\\epsilon\\otimes1+1\\otimes\\epsilon$. The multiplicative kernel $\\mu_p$ has algebra $k[z,z^{-1}]/(z^p-1)$, isomorphic to the same local algebra by $z=1+\\epsilon$, but its comultiplication is

$$\\epsilon\\longmapsto\\epsilon\\otimes1+1\\otimes\\epsilon+\\epsilon\\otimes\\epsilon.$$

Both operations preserve the defining ideals by the characteristic-$p$ binomial identity and have the stated additive or multiplicative inverse and identity maps. They are not isomorphic as group schemes. The additive generator is a nonzero primitive element. In the multiplicative algebra, write a proposed primitive as $\\sum_{i=0}^{p-1}b_i z^i$. Comparing coefficients in the tensor basis $z^i\\otimes z^j$ forces every positive-index diagonal coefficient $b_i$ to vanish, and then forces the constant coefficient zero. Thus there is no nonzero primitive element, an invariant of a group-algebra isomorphism.

Each has one field-valued point, and their underlying affine schemes are isomorphic, but their group structures differ. The length-$p$ local algebra of an elliptic Frobenius kernel alone therefore does not determine its full group law. This example explains exactly why the kernel is retained as a group scheme with comultiplication, rather than replaced by its sole geometric point or by an unlabelled Artinian ring.

## Exercises

### AG15-01. Pole orders force independence

Why are $1,x,y,x^2,xy$ independent in the Riemann–Roch construction?

**Hint 1.** Their pole orders at the marked point are distinct.

**Hint 2.** A sum with a unique lowest valuation cannot be zero.

<details><summary>Full solution</summary>

Their pole orders are zero, two, three, four and five. In any nontrivial linear combination, the term with largest pole order has uniquely smallest valuation. Dividing by it leaves a nonzero scalar plus terms in the maximal ideal, which is a unit and cannot vanish. Hence all coefficients must be zero. The dimension-five calculation then makes these functions a basis of the stated space.

</details>

### AG15-02. Both order-six terms are needed

Prove that a relation among the seven displayed functions has nonzero coefficients on both $x^3$ and $y^2$.

**Hint 1.** Without both, one remaining term has a unique largest pole.

**Hint 2.** Without either, the five already independent functions remain.

<details><summary>Full solution</summary>

If exactly one coefficient is nonzero, that term's pole order six exceeds every other and cannot cancel. If both are zero, the relation is among the preceding five basis functions. Thus a nonzero relation uses both, allowing normalization to a monic quadratic and a nonzero cubic leading coefficient. The rescaling then gives the general Weierstrass form without characteristic restrictions on completing squares or cubes.

</details>

### AG15-03. Function-field generation

Why does the odd pole order of $y$ show that $x,y$ generate the curve's field?

**Hint 1.** The $x$ map has total pole order and field degree two.

**Hint 2.** A rational expression in $x$ has even order at infinity.

<details><summary>Full solution</summary>

Every quotient of polynomials in $x$ has order twice the difference of their degrees, after cancellation, and cannot have order minus three. Hence $y\\notin k(x)$. The degree-two extension has no proper intermediate field containing a new element, so $k(x,y)=k(E)$. This proves birationality of the plane model before the separate finite/cohomology argument proves an isomorphism.

</details>

### AG15-04. Eliminate the normalization defect

Explain why the finite birational plane cubic model has zero quotient sheaf $Q$.

**Hint 1.** Its arithmetic genus is one and the smooth source genus is one.

**Hint 2.** The finite-supported quotient has nonnegative global dimension equal to its total length.

<details><summary>Full solution</summary>

The global structure section map is the identity of $k$. Positive cohomology of $Q$ vanishes, and finite direct image computes the source's cohomology. The long exact sequence therefore places $H^0(Q)$ as the kernel between two one-dimensional first-cohomology groups, with surjectivity onto the second. That kernel is zero. A nonzero finite-supported coherent module has positive total length and nonzero global sections, so $Q=0$, making each finite affine ring inclusion an isomorphism.

</details>

### AG15-05. General inverse formula

Derive the inverse $(x,-y-a_1x-a_3)$ from a vertical line and state why it is regular globally.

**Hint 1.** Use the sum of roots of the monic quadratic in $y$.

**Hint 2.** Homogenize the affine expression to a linear projective transformation.

<details><summary>Full solution</summary>

At fixed $x$, the two roots sum to $-a_1x-a_3$. Their vertical line also meets infinity, so the divisor-class law makes the second root the negative of the first. The projective map is $[X:Y:Z]\\mapsto[X:-Y-a_1X-a_3Z:Z]$. It preserves the equation, squares to the identity and fixes infinity, proving a global scheme involution. The formula remains valid in characteristic two.

</details>

### AG15-06. A generic addition coordinate

Derive the $x$ coordinate of the sum from the secant slope in the general model.

**Hint 1.** Substitute $y=\\lambda x+\\nu$ into the equation.

**Hint 2.** Read the sum of its three $x$ roots, then reflect the third intersection.

<details><summary>Full solution</summary>

The cubic has leading term $-x^3$ and quadratic coefficient $\\lambda^2+a_1\\lambda-a_2$. Thus the third intersection has coordinate $\\lambda^2+a_1\\lambda-a_2-x_1-x_2$. Inversion preserves its $x$ coordinate, giving the same coordinate for the group sum. The formula is regular on the distinct-$x$ affine open and is not used by division where that denominator vanishes.

</details>

### AG15-07. A self-inverse translation value

At $Q=-Q$, why is the reciprocal-slope fraction $q$ regular and zero in the translation proof?

**Hint 1.** The $y$ partial vanishes there and the $x$ partial does not.

**Hint 2.** The tangent relation puts $x-x(Q)$ in the square of the maximal ideal.

<details><summary>Full solution</summary>

The class of $y-y(Q)$ generates the one-dimensional cotangent space and hence the DVR maximal ideal. The other coordinate difference has zero cotangent class, so has order at least two. Their quotient therefore has positive order and belongs to the local ring, vanishing at the point. The projective reciprocal-slope formula has unit middle coordinate there and yields infinity. This handles the case where the ordinary denominator comparison at two distinct inverse points was unavailable.

</details>

### AG15-08. From closed points to a scheme morphism

Why do the translated addition neighborhoods cover every scheme point and glue as maps, rather than only as point functions?

**Hint 1.** A nonempty closed complement in a finite-type scheme has a closed field-valued point.

**Hint 2.** Equalizers into the separated target are closed, and the product source is reduced.

<details><summary>Full solution</summary>

The construction covers every closed pair, so its closed complement must be empty by the Nullstellensatz. On overlaps the local morphisms agree at all closed points by the point-group law. Their closed equalizer therefore has full support; its ideal lies in the nilradical, which is zero in the reduced product. Hence they agree as sheaf morphisms and glue. This proves the global addition operation on all scheme and test-algebra points.

</details>

### AG15-09. Smoothness lifts through a square-zero ideal

Show how a unit partial derivative corrects a lifted equation error in a quotient problem with $J^2=0$.

**Hint 1.** The error is an element of $J$.

**Hint 2.** A first-order change has no higher error term because products of two corrections vanish.

<details><summary>Full solution</summary>

Lift the coordinates and let the equation value be $e\\in J$. If the chosen partial is a unit $u$, change that coordinate by $-e/u$. Taylor expansion modulo $J^2$ changes the equation by exactly minus $e$, making it zero. The derivative stays a unit because it was one modulo a nilpotent ideal. This gives the infinitesimal lift on that finitely presented chart; iteration handles higher nilpotence powers.

</details>

### AG15-10. Frobenius degree

Explain why the relative Frobenius has function-field degree $p$ rather than degree one despite its bijection on closed points.

**Hint 1.** Its pullback image is the $p$th-power subfield.

**Hint 2.** The perfect-ground-field degree computation gave $[K:K^p]=p$.

<details><summary>Full solution</summary>

The coordinate and scalar description makes the image exactly $K^p$. The tower calculation of Chapter 14 shows that subfield has index $p$. Closed-point bijectivity follows from unique coordinate $p$th roots in the algebraically closed field, but does not make this field map surjective. Hence the scheme map is finite purely inseparable of degree $p$ and is not an isomorphism.

</details>

### AG15-11. Kernel length at infinity

Compute the local ring of the Frobenius kernel using the standard origin parameter.

**Hint 1.** The target uniformizer pulls back to the $p$th power of the source uniformizer.

**Hint 2.** A DVR quotient by that power has the corresponding length.

<details><summary>Full solution</summary>

The local fiber is $\\mathcal O_{E,O}/(u^p)$. Its successive uniformizer quotients have residue field $k$, so length is $p$. Completion gives $k[[u]]/(u^p)$, equal to the truncated polynomial algebra because all higher terms vanish. The unique closed point therefore supports a nonreduced length-$p$ group-scheme kernel, not a trivial subgroup scheme.

</details>

### AG15-12. A group-structure invariant

Prove that the multiplicative kernel algebra has no nonzero primitive element, contrasting it with the additive kernel.

**Hint 1.** Expand in the basis $1,z,\\ldots,z^{p-1}$.

**Hint 2.** Compare diagonal tensor coefficients with the two terms of the primitive equation.

<details><summary>Full solution</summary>

For $f=\\sum b_i z^i$, comultiplication is $\\sum b_i z^i\\otimes z^i$. The expression $f\\otimes1+1\\otimes f$ has no positive-index diagonal terms, so every $b_i$ for $i>0$ is zero. The constant equation then forces $b_0=0$. In the additive kernel the nonzero class of $\\epsilon$ is primitive. A Hopf-algebra isomorphism preserves primitive elements, so the group schemes cannot be isomorphic despite their isomorphic underlying algebras and identical one-point supports.

</details>

## Closing summary

Riemann–Roch constructs the general Weierstrass model and the unique degree-one divisor correspondence. A finite cohomological comparison proves the model is the original smooth curve. Picard classes establish associativity, and the fixed-translation and open-gluing arguments make addition an actual scheme morphism in every characteristic. The relative Frobenius and its nonreduced kernel show why an elliptic curve's group-scheme structure contains information absent from point sets, local lengths alone or arithmetic formulas on one open chart.
`;export{e as default};