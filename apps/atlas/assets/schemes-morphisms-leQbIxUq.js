var e=`---
parent_id: book-algebraic-geometry
chapter_id: schemes-morphisms
title: "Schemes and Morphisms"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Schemes and Morphisms

A scheme is built from affine schemes by gluing open subspaces with compatible ring data. The definition permits generic points and nilpotents, and it does not automatically impose the separation properties of a quasiprojective variety. We prove the gluing construction, build projective space and homogeneous closed subschemes, and distinguish open, closed, finite and finite-type morphisms through their actual affine models.

All rings are commutative with identity. Read Chapters 8–9 on sheaves and affine schemes. A scheme is a locally ringed space in which every point has an open neighborhood isomorphic to $\\operatorname{Spec}A$ with its structure sheaf. A morphism of schemes is a morphism of locally ringed spaces. The ground field is specified only in examples that need one; the construction itself works over arbitrary rings. A scheme over $S$ has a specified morphism to $S$, and morphisms over $S$ commute with those structure maps.

## 1. Affine charts determine scheme morphisms

A map to an affine scheme $\\operatorname{Spec}A$ can be specified locally on an affine open cover of the source by ring homomorphisms from $A$, provided the resulting morphisms agree on overlaps. The sheaf gluing property joins their underlying maps and their sheaf homomorphisms. On stalks each is local, so the glued map is again a locally ringed morphism. Conversely restriction of any scheme morphism gives exactly such compatible chart data.

For arbitrary target, use a cover by affine target opens and cover their inverse images by affine source opens. The same compatibility rule defines the morphism. Two maps agreeing on an open cover agree globally because their point maps and sheaf maps do. This statement does not say that agreement on a dense open always suffices: the closed-diagonal hypothesis used in the earlier classical chapters will fail in a scheme example below.

An isomorphism requires inverse scheme morphisms. A homeomorphism is insufficient by the nilpotent affine examples, and an isomorphism on global section rings is insufficient when the spaces are not affine. Local affine reconstruction is the correct contract.

## 2. Prove the gluing construction

Suppose schemes $X_i$ have open subsets $U_{ij}\\subseteq X_i$ and isomorphisms $\\varphi_{ij}:U_{ij}\\to U_{ji}$. Assume the identity and inverse conditions, and assume the triple-overlap cocycle: the identifications take the common overlap to the corresponding common overlap and satisfy $\\varphi_{jk}\\varphi_{ij}=\\varphi_{ik}$ there.

Take the quotient of the disjoint union of the point spaces by these identifications. The cocycle makes each $X_i$ map injectively onto an open subspace: identifications through a third chart agree with the direct transition, so do not identify two previously distinct points of one chart. Give the quotient the topology whose open sets have open inverse images in every chart. The chart maps are then homeomorphisms onto their images, with exactly the specified intersections.

For an open $U$ of the quotient, define its structure ring as tuples of sections on the pieces $U\\cap X_i$ agreeing under the transition sheaf isomorphisms on overlaps. Restrictions are componentwise. A compatible family of such tuples on an open cover glues in each chart, and compatibility of the glued chart sections follows from their local overlap equality. This proves the sheaf axiom. Restricted to each $X_i$ it is the given sheaf, so its stalks are the original local rings. The quotient is therefore locally ringed and locally affine, hence a scheme.

The construction has the universal property needed for maps out of it: morphisms $X_i\\to Y$ agreeing on the overlap identifications glue uniquely to a morphism of the quotient scheme. Continuity is checked on the chart preimages; sheaf maps glue by locality, and their stalk homomorphisms remain local. Any second glued construction has these same compatible chart inclusions and gives inverse maps by this universal property, proving uniqueness up to a unique chart-compatible isomorphism.

## 3. Worked example: projective space as a scheme

Over a ring $R$, glue the affine schemes

$$U_i=\\operatorname{Spec}R[t_j:j\\ne i]\\qquad(0\\le i\\le n).$$

The overlap with $U_j$ is the principal open $D(t_j)$. Its transition sends the coordinate for index $i$ to $1/t_j$ and each other coordinate to its old value divided by $t_j$. These are isomorphisms of localized rings; substitution checks the inverse and triple-overlap cocycle. The gluing theorem constructs $\\mathbb P^n_R$ with its morphism to $\\operatorname{Spec}R$ from the common scalar maps.

Over an algebraically closed field, its closed field-valued points and chart regular functions recover the classical projective space. It also has nonclosed prime points, and over a nonreduced base it retains that base's local nilpotents. The finite chart cover makes it quasi-compact. If the base is Noetherian, the charts are Noetherian polynomial rings and the projective scheme is locally Noetherian. These are consequences of the actual chart rings rather than assertions about a picture of homogeneous vectors over an arbitrary ring.

The same construction gives $\\operatorname{Proj}S$ for a ring $S$ generated in degree one over $S_0=R$, with finitely many chosen degree-one generators. Its points are homogeneous primes not containing the ideal $S_+$ of positive-degree elements. On the open where a generator $x_i$ is absent from the prime, the chart ring is $(S_{x_i})_0$. To justify the point description, the graded localization is

$$S_{x_i}\\cong (S_{x_i})_0[T,T^{-1}],\\qquad T\\mapsto x_i.$$

Every homogeneous element can be normalized to degree zero by a power of the invertible degree-one generator. Distinct graded degrees cannot cancel, proving both surjectivity and injectivity of this graded Laurent presentation. Homogeneous ideals extend from their degree-zero parts, and a prime degree-zero quotient gives a Laurent polynomial domain. Thus its prime ideals correspond exactly to the homogeneous primes in this chart. The chart transition maps are the same graded-fraction maps and satisfy the cocycle, proving the asserted scheme construction.

For $S=R[X_0,\\ldots,X_n]$ this is projective space. For a homogeneous quotient it gives the closed homogeneous equation subscheme chartwise. In particular the equation ideal itself, rather than just its radical, determines the chart rings. The case $S=R$ concentrated in degree zero gives empty Proj, because every homogeneous prime contains $S_+=0$. For a single polynomial generator, $\\operatorname{Proj}R[X]$ has one chart with degree-zero ring $R$, so is $\\operatorname{Spec}R$.

## 4. Reducedness, integrality and local finiteness

A scheme is reduced if its local rings have no nonzero nilpotents. This holds exactly when an affine cover has reduced coordinate rings. Localization preserves reducedness, giving one direction. Conversely, a nilpotent element of an affine ring has zero germ in every reduced stalk, and the section is zero because a sheaf is determined by germs. The same reasoning shows reducedness on one affine cover implies it on every affine open.

A scheme is integral if it is nonempty, irreducible and reduced. Every nonempty affine open of an integral scheme has a domain coordinate ring: it is reduced, and irreducibility of its spectrum makes the zero radical ideal prime. Conversely an irreducible scheme with reduced affine charts is integral by definition. Global functions on a nonempty open of an integral scheme form a domain. They inject into the function field of any affine neighborhood of the generic point: a section zero there is zero on every intersecting affine domain by dense equality, hence zero everywhere. Thus the familiar rational-function language extends under these precise hypotheses.

A scheme is locally Noetherian if it has a cover by spectra of Noetherian rings. The property is local in the expected sense. Here is the affine comparison needed to see that it does not depend on the chosen cover. Two affine neighborhoods of a point have a common smaller neighborhood principal in both. Choose $D_U(f)$ inside their intersection, then $D_V(g)$ around the point inside that. Restrict $g$ to $D_U(f)$, where it is $a/f^N$ by the affine section theorem. The second neighborhood is then $D_U(fa)$, as well as the chosen principal neighborhood in $V$.

For an arbitrary affine open $U$ in a locally Noetherian scheme, quasi-compactness supplies finitely many such common principal neighborhoods. Their coordinate rings are localizations of the original Noetherian chart rings. A ring with a finite principal cover of Noetherian localizations is Noetherian: for any ideal choose finitely many numerators generating its localization in each chart, and combine them into an ideal $J$. The quotient of the original ideal by $J$ localizes to zero everywhere on the cover, hence is zero by localization detection. Thus the original ideal is finitely generated. This proves every affine open of a locally Noetherian scheme has a Noetherian coordinate ring.

A scheme is quasi-compact exactly when it has a finite affine open cover. A finite cover suffices because each affine is quasi-compact; necessity follows from the definition applied to an affine cover. A Noetherian scheme is a quasi-compact locally Noetherian scheme, equivalently one with a finite Noetherian affine cover. Its topological space is Noetherian by checking increasing opens on that finite cover. An infinite disjoint union of field spectra is locally Noetherian but not quasi-compact, and therefore not Noetherian. Local ring conditions alone did not give a finite global cover.

## 5. Open and closed immersions

An open immersion is an isomorphism onto an open subspace equipped with the restricted sheaf. Principal localizations are the affine basic examples, and arbitrary open subsets of a scheme are schemes by restriction and refinement to principal charts. An open immersion need not be an affine morphism: the complement of the origin in $\\operatorname{Spec}k[x,y]$ is covered by $D(x),D(y)$, and its global ring is $k[x,y]_x\\cap k[x,y]_y=k[x,y]$ in the fraction field. The UFD cancellation proof is the same explicit one as Chapter 2. If that open were affine, its inclusion would be an isomorphism by the affine correspondence, contradicting its missing point. Thus an inverse image of an affine open under an open immersion need not itself be affine.

A closed immersion is locally on the target a quotient model $\\operatorname{Spec}(A/I)\\to\\operatorname{Spec}A$. Such models are homeomorphisms onto closed subsets with quotient maps on stalk rings, and these statements glue. A nonradical ideal can retain nilpotents on its support, while a radical ideal gives its reduced closed structure. Composing an open immersion and a closed immersion into that open gives a locally closed immersion. The local quotient convention is part of the definition here; later quasi-coherent ideal theory will identify its global ideal-sheaf description.

For example $\\operatorname{Spec}k[t]/(t^r)$ is a closed subscheme of the affine line supported at zero, with local length $r$. Its structure is different for different $r$, although its closed support is the same singleton. Replacing it by the reduced point changes the local ring and therefore the immersion, rather than just choosing another name for the same scheme.

## 6. Worked example: the line with two origins

Glue two copies $X_1,X_2$ of $\\operatorname{Spec}k[t]$ along $D(t)$ by the identity. The cocycle conditions are immediate. The resulting scheme $X$ has two distinct closed origins and one common generic point. It is reduced and irreducible: each chart is integral, and their nonempty common open is dense in both. Thus it is an integral scheme, even though it is not a quasiprojective variety in our earlier convention.

Its global ring consists of pairs of polynomials agreeing in $k[t,t^{-1}]$, hence is $k[t]$. Gluing the identity coordinate maps gives $\\pi:X\\to\\mathbb A^1$. Its global pullback is an isomorphism, but $\\pi$ has two points over zero and is not a scheme isomorphism. Therefore $X$ is not affine, by the affine correspondence. This is a second concrete reason not to reconstruct an arbitrary scheme from global sections alone.

The two chart inclusions from the affine line into $X$ agree on $D(t)$ but differ at zero. Their agreement set is the punctured line, which is not closed. Thus dense agreement alone does not force scheme morphisms to coincide. The quasiprojective target hypotheses in the earlier classical uniqueness theorem were substantive; this glued target is outside that category. The next chapter constructs scheme fiber products and expresses this same failure through the actual diagonal morphism.

## 7. Worked example: a projective double line

Let $X=\\operatorname{Proj}k[X_0,Y,X_1]/(Y^2)$. Its reduced support is the projective line $Y=0$, but on the chart $X_0\\ne0$ its coordinate ring is $k[t,\\eta]/(\\eta^2)$, where $t=X_1/X_0,\\eta=Y/X_0$. On $X_1\\ne0$ use $s=X_0/X_1,\\theta=Y/X_1$, with $s=1/t$ and $\\theta=\\eta/t$. These charts cover the underlying space because no prime can have both $X_0,X_1$ and avoid $Y$ when $Y$ is nilpotent.

A global nilpotent section would have coefficients $a(t)\\eta$ and $b(s)\\theta$. Compatibility requires $b(1/t)=t a(t)$, forcing both polynomials zero by their Laurent exponent ranges. The reduction of any global section is constant on the projective support, and each constant lifts. Hence the global ring is $k$, although every chart retains nonzero nilpotents. This does not contradict affine reconstruction: the scheme is projective and nonaffine, so its local sheaf information is indispensable.

The example also warns against transferring the classical pointwise method to nonreduced schemes. A nilpotent local section has zero value at every residue point but is not zero as a germ. The gluing computation uses those local ring elements and their transition, rather than a set of scalar values on the support.

## 8. Affine, finite and finite-type morphisms

A morphism is affine if the inverse image of every affine target open is affine. It is finite if it is affine and the resulting ring maps make the source rings finite modules. Finite module generation implies finite algebra generation, so finite morphisms are finite type in their affine models. Locally finite type means that over every affine target open, the source has affine neighborhoods whose coordinate algebras are finitely generated over that target ring. Finite type adds quasi-compactness of the map, meaning the inverse image of each affine target open is quasi-compact. These definitions retain the difference between a local algebra presentation and a finite global covering condition.

An affine finite morphism is closed. For a finite ring map $A\\to B$, a closed source subset $V(J)$ maps exactly to $V(\\ker(A\\to B/J))$. Indeed $B/J$ is integral over its image of $A$, and lying over supplies every prime containing that kernel; contraction gives the reverse inclusion. On an affine target cover this proves every finite morphism is closed. Stability under base change and the universal version will be developed with fiber products, rather than silently included in this argument.

The inclusion of the punctured line is finite type but not finite: $k[t,t^{-1}]$ is generated as an algebra by $t^{-1}$ over $k[t]$, while that element is not integral, as the denominator-power contradiction at zero showed in Chapter 4. The double-origin scheme has a finite affine cover and its map to the line is locally given by identity algebras, hence finite type; the two-origin fiber still prevents it from being an isomorphism. These examples separate the adjectives by their actual definitions.

## Exercises

### AG10-01. Check a gluing cocycle

Why do inverse pairwise chart maps alone not replace the triple-overlap cocycle?

**Hint 1.** A point can be transported through a third chart.

**Hint 2.** Compare that transport with the direct identification and its induced sheaf map.

<details><summary>Full solution</summary>

The inverse condition only reverses one transition. Without the triple equation, identifying through a third chart could disagree with the direct transition, potentially identifying distinct points of one chart and giving incompatible section identifications. The cocycle ensures that all such transports agree, preserving the chart embeddings and making matching section tuples consistent. Both point maps and sheaf maps are part of that condition.

</details>

### AG10-02. A projective-line transition

Construct $\\mathbb P^1_R$ from its two affine charts and identify the overlap ring.

**Hint 1.** Use $R[t]$ and $R[s]$.

**Hint 2.** On the overlap require $s=t^{-1}$.

<details><summary>Full solution</summary>

Glue $\\operatorname{Spec}R[t]$ and $\\operatorname{Spec}R[s]$ along their principal opens $D(t),D(s)$ by the isomorphism $R[s,s^{-1}]\\to R[t,t^{-1}]$ sending $s$ to $t^{-1}$. The reverse map sends $t$ to $s^{-1}$. With two charts the inverse condition supplies the needed overlap compatibility. The common scalar maps give the structural morphism to $\\operatorname{Spec}R$.

</details>

### AG10-03. A homogeneous closed equation

Determine the chart on $X_0\\ne0$ of $\\operatorname{Proj}k[X_0,Y,X_1]/(Y^2)$.

**Hint 1.** Divide the homogeneous variables by $X_0$.

**Hint 2.** Keep the squared relation rather than replacing it by its radical.

<details><summary>Full solution</summary>

The degree-zero localized ring is $k[t,\\eta]/(\\eta^2)$ with $t=X_1/X_0$ and $\\eta=Y/X_0$. It is not the reduced polynomial ring $k[t]$. The nilpotent class survives in the structure sheaf even though all primes contain it. This is the quotient-equation subscheme promised by the Proj chart construction.

</details>

### AG10-04. Reduced charts and stalks

Prove that reducedness on an affine cover makes every local ring reduced.

**Hint 1.** A stalk in one affine chart is a localization.

**Hint 2.** A nilpotent fraction becomes zero after clearing an annihilating denominator power.

<details><summary>Full solution</summary>

If $(a/s)^n=0$, some allowed denominator multiplier kills $a^n$. Raising a suitable multiplier times $a$ to that power gives a nilpotent in the reduced original ring, hence zero. Therefore the fraction itself is zero. Every point lies in a reduced affine chart, so its stalk is reduced. Conversely reduced stalks detect the vanishing of every nilpotent affine section by the sheaf germ criterion.

</details>

### AG10-05. Local versus global Noetherianity

Give a locally Noetherian scheme that is not Noetherian and identify the missing finiteness condition.

**Hint 1.** Use infinitely many disjoint affine points.

**Hint 2.** Cover by those open singleton components.

<details><summary>Full solution</summary>

The disjoint union of infinitely many copies of a field spectrum is covered by Noetherian affine opens and is locally Noetherian. Its cover by singleton components has no finite subcover, so it is not quasi-compact and is not a Noetherian scheme. Every individual local ring is a field; the failure is the absence of a finite global affine cover, not any local ring defect.

</details>

### AG10-06. The two-origin global ring

Compute global functions on the doubled-origin line and show its coordinate projection is not an isomorphism.

**Hint 1.** Match two polynomial sections in their Laurent overlap ring.

**Hint 2.** Compare the fiber over zero with the target's single origin.

<details><summary>Full solution</summary>

Compatibility forces the two polynomials to be identical because $k[t]\\to k[t,t^{-1}]$ is injective. Thus the global ring is $k[t]$ and the projection pulls it back identically. The two chart origins are distinct in the glued space but both map to zero, so the map is not bijective and cannot be an isomorphism. If the source were affine, its global ring isomorphism would force an affine-scheme isomorphism, proving nonaffineness.

</details>

### AG10-07. Dense agreement can fail

Use the two chart inclusions to demonstrate why a closed target diagonal mattered in the earlier rational-map uniqueness theorem.

**Hint 1.** They agree on the punctured affine line.

**Hint 2.** They send zero to different points.

<details><summary>Full solution</summary>

The chart inclusions are morphisms from the same affine line and agree on its dense principal open $D(t)$. At zero their images are the two distinct origins. Their equalizer is therefore $D(t)$, not closed. A closed diagonal would make every such equalizer closed, so this target does not have one. The earlier uniqueness theorem retained that hypothesis and is not contradicted.

</details>

### AG10-08. A projective nilpotent transition

Prove the projective double line has no nonzero global nilpotent section from its two local generators.

**Hint 1.** The generators satisfy $\\theta=\\eta/t$.

**Hint 2.** Coefficients must satisfy $b(1/t)=t a(t)$.

<details><summary>Full solution</summary>

A nilpotent local section is a multiple of the square-zero generator. The transition gives the displayed coefficient equality. Its left side has only nonpositive Laurent exponents, while its right side has only positive exponents if nonzero, so both vanish. Local nilpotents still exist on each chart. The calculation distinguishes absence of global nilpotents from reducedness of every local ring.

</details>

### AG10-09. A closed thickened point

Describe the local length and reduced support of $\\operatorname{Spec}k[t]/(t^r)$ inside the affine line.

**Hint 1.** Every prime contains the nilpotent class of $t$.

**Hint 2.** Use the basis of powers below $r$.

<details><summary>Full solution</summary>

There is one point with reduced support the origin. Its local ring is the entire quotient, with basis $1,t,\\ldots,t^{r-1}$, so its length over the residue field is $r$. It is reduced only when $r=1$. The quotient map from $k[t]$ gives a closed immersion, whose sheaf structure distinguishes the different thicknesses despite the same topological support.

</details>

### AG10-10. Finite implies closed

Prove the claimed image formula for a closed set under a finite affine map.

**Hint 1.** Pass to the quotient algebra defining the closed source set.

**Hint 2.** Use integrality over the image ring and lying over.

<details><summary>Full solution</summary>

For $A\\to B$ finite and closed set $V(J)$, contraction sends every containing source prime to a target prime containing the kernel of $A\\to B/J$. Conversely the quotient is integral over the corresponding image of $A$, and lying over produces a prime above every target prime containing that kernel. Thus the image is exactly that closed set. Applying the formula on an affine target cover proves closedness for a finite morphism.

</details>

### AG10-11. Finite algebra versus finite module

Why is the punctured-line inclusion finite type but not finite?

**Hint 1.** Its coordinate algebra is generated by one inverse element.

**Hint 2.** Finite module generation would force that inverse to be integral.

<details><summary>Full solution</summary>

The algebra $k[t,t^{-1}]$ is generated over $k[t]$ by $t^{-1}$ and its affine source makes the map quasi-compact, so it is finite type. A monic relation for $t^{-1}$, multiplied by its highest denominator power, would give one plus a multiple of $t$ equal to zero, impossible at zero. It is not integral and therefore not a finite module. The two finiteness words refer to different generation conditions.

</details>

### AG10-12. Proj in degree zero

Compare $\\operatorname{Proj}R$ for a degree-zero graded ring with $\\operatorname{Proj}R[X]$ where $X$ has degree one.

**Hint 1.** Proj points must avoid containing the positive-degree ideal.

**Hint 2.** In the second case there is one principal chart with degree-zero localized ring $R$.

<details><summary>Full solution</summary>

For $R$ concentrated in degree zero, the positive-degree ideal is zero, contained in every prime, so Proj is empty. For $R[X]$, every allowed homogeneous prime avoids $X$ and lies in the sole chart; its degree-zero localization is $R$, so Proj is $\\operatorname{Spec}R$. These are exact consequences of the point and chart definitions, including the zero-ring endpoint.

</details>

## Closing summary

Schemes glue affine locally ringed spaces with an explicit overlap cocycle and matching section sheaf. Projective space and homogeneous equation schemes arise from those charts, retaining nonclosed points and nilpotents. Reducedness, integrality, Noetherianity and morphism finiteness have distinct local and covering contracts. The doubled origin and projective double line show why dense uniqueness, global reconstruction and pointwise functions need their precise hypotheses. Fiber products and separatedness will formalize those map distinctions next.
`;export{e as default};