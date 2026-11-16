var e=`---
parent_id: book-algebraic-geometry
chapter_id: fibre-products-separatedness
title: "Fibre Products and Separatedness"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Fibre Products and Separatedness

A scheme fiber product is specified by maps, not by a guessed set of paired points. Tensor products construct its affine charts and reveal extra primes or nilpotents in its fibers. The diagonal then gives the correct separation condition. We prove these constructions, distinguish the source hypotheses needed for dense uniqueness, and extend the projective closed-projection argument to arbitrary scheme bases.

Read affine schemes and gluing from Chapters 9–10, tensor products from Commutative Algebra, and the projective graded chart construction. All rings are commutative. Schemes need not be reduced, Noetherian or of finite type unless stated. A proper morphism will mean finite type, separated and universally closed, with each of those conditions proved where it is claimed below.

## 1. The affine product has a universal property

Given homomorphisms $A\\to B,A\\to C$, the scheme

$$P=\\operatorname{Spec}(B\\otimes_A C)$$

has projection maps to $\\operatorname{Spec}B$ and $\\operatorname{Spec}C$ agreeing over $\\operatorname{Spec}A$. For an affine test scheme $T=\\operatorname{Spec}R$, a map to $P$ is a homomorphism $B\\otimes_A C\\to R$. The tensor universal property identifies this with two ring homomorphisms from $B,C$ agreeing on $A$, exactly the required pair of scheme maps.

For an arbitrary test scheme, cover it by affines. The local maps constructed this way agree on overlaps: cover an overlap by affines again and use uniqueness in the affine tensor property. They therefore glue uniquely by Chapter 10. This proves the fiber-product universal property for every scheme $T$, rather than only for affine tests. Associativity and symmetry identifications of fiber products follow uniquely from that property, with their projections specified.

## 2. Glue the general fiber product

For maps $X\\to S,Y\\to S$, cover the base by affine opens and cover their inverse images in $X,Y$ by affine opens. For each such pair over the same affine base, construct the tensor-product affine scheme. Its projection maps are genuine morphisms, so the locus where they both land in another chosen pair of source charts is open.

On that overlap, the two projections agree over the new affine base as well: both already agree over $S$ and factor through its open subspace. The affine fiber-product universal property, which now applies to arbitrary test schemes, gives a map from this open overlap to the other tensor chart. It lands in the reciprocal overlap by its projections. Uniqueness gives inverse maps and the triple-overlap cocycle. Thus Chapter 10's gluing theorem applies.

The resulting scheme has maps to $X,Y$. Given compatible maps from any $T$, cover $T$ by their simultaneous inverse images of the chosen affine charts and refine by affine opens. The affine product property gives the required local maps, and uniqueness glues them. This proves the full product exists with its universal property. Open-chart choices yield canonically isomorphic results because the universal property determines the object and projection maps uniquely.

In particular restricting a factor to an open subset restricts the product to its projection inverse image. This is both a consequence of the construction and a direct consequence of the same mapping property. The product is not assumed to be the ordinary topological product; its topology is the one supplied by these tensor charts.

## 3. Fibers and the residue-field point calculation

For $s\\in S$, define the fiber $X_s=X\\times_S\\operatorname{Spec}\\kappa(s)$. In an affine chart $A\\to B$ it has ring $B\\otimes_A\\kappa(s)$, equivalently localize the base away from the prime $s$ and then quotient its maximal ideal. This identifies its point space with the points of $X$ mapping to $s$, with the fiber's actual scheme structure included.

A pair $x\\in X,y\\in Y$ above the same $s$ can support more than one product point. On affine charts, primes contracting to exactly that pair correspond to primes of

$$\\kappa(x)\\otimes_{\\kappa(s)}\\kappa(y).$$

To prove it, first quotient the tensor ring by the two contracted prime ideals, then invert all nonzero elements from each resulting domain. Base elements outside $s$ become units, so the base field is precisely $\\kappa(s)$. Prime extension and contraction for that quotient and localization give the stated correspondence. It is not a claim that each compatible pair has a unique resulting prime.

### Worked example 1: two points above one pair

The product $\\operatorname{Spec}\\mathbb C\\times_{\\operatorname{Spec}\\mathbb R}\\operatorname{Spec}\\mathbb C$ has ring

$$\\mathbb C\\otimes_{\\mathbb R}\\mathbb C
\\cong\\mathbb C[T]/(T^2+1)\\cong\\mathbb C\\times\\mathbb C.$$

The first presentation uses the first complex generator and regards the second copy as the coefficient field. Its two roots are distinct, so CRT gives the second isomorphism. Explicitly $z\\otimes w$ goes to $(zw,\\overline z\\,w)$. There are two product points although each factor has one point and therefore only one possible pair. The residue-field embeddings are part of the geometry that a set of pairs would omit.

### Worked example 2: a nonreduced fiber from a field extension

Let $k$ have characteristic $p$ and $a\\notin k^p$, and put $L=k(\\alpha)$ with $\\alpha^p=a$. Base changing $\\operatorname{Spec}L\\to\\operatorname{Spec}k$ by $\\operatorname{Spec}L$ gives

$$L\\otimes_k L\\cong L[T]/((T-\\alpha)^p).$$

It has one point with nonzero nilpotents and local length $p$. Both original schemes were field spectra and reduced. Thus scalar extension need not preserve reducedness over an imperfect ground field. This is the same precise field boundary prepared in Chapter 5, now realized as an actual scheme fiber product.

## 4. Base-change properties from ring identities

Affine morphisms remain affine after base change, because the tensor construction supplies their affine inverse images. Finite morphisms remain finite: a finite module generating list for $B$ over $A$ tensors to a generating list for $B\\otimes_A C$ over $C$. Finite algebra generation is likewise preserved. Quotients and principal localizations satisfy

$$(B/I)\\otimes_A C\\cong(B\\otimes_A C)/(I\\cdot(B\\otimes_A C)),$$

$$B_b\\otimes_A C\\cong(B\\otimes_A C)_{b\\otimes1}.$$

Both follow from their universal properties, or from the explicit quotient and inverse relations. They prove base-change stability of closed and open immersions through their local models. Finite-type morphisms remain finite type: these algebra generators persist, and their finite affine covering condition persists on the corresponding tensor charts.

If $B$ is flat over $A$, then $B\\otimes_A C$ is flat over $C$. Tensoring a sequence of $C$-modules with that ring identifies with tensoring its underlying $A$-module sequence by $B$. Exactness follows from $A$-flatness. This proves the affine base-change statement directly; when using the local definition of a flat scheme morphism, localization and this same tensor calculation apply at its local rings.

## 5. Diagonals define separatedness

For $f:X\\to S$, its diagonal is the unique map $\\Delta_f:X\\to X\\times_S X$ with both projections the identity. The morphism is separated if this is a closed immersion. Relative to an affine map $\\operatorname{Spec}B\\to\\operatorname{Spec}A$, its ring map is multiplication

$$B\\otimes_A B\\longrightarrow B.$$

It is surjective, and its kernel is generated by $b\\otimes1-1\\otimes b$. Modulo those relations, every simple tensor becomes $bc\\otimes1$, proving the kernel assertion as well as the quotient identification. Hence affine morphisms are separated. Checking on an affine cover of the base proves the general affine-morphism claim because closed immersions are local on the target.

An immersion is separated: for an open immersion the relative product with itself is itself, so the diagonal is an isomorphism; closed immersions are affine locally with quotient multiplication. Separatedness is stable under base change, since the new diagonal is the base change of the old one after the canonical product identifications.

It is also stable under composition. For $X\\to Y\\to S$, factor the absolute-relative diagonal through $X\\times_Y X$. The first map is $\\Delta_{X/Y}$, and the inclusion $X\\times_Y X\\to X\\times_S X$ is the base change of $\\Delta_{Y/S}$ along the pair of structure maps. If both are closed immersions, so is their composite, by composing local quotient maps. This proves the stated stability with all maps identified.

### Worked example 3: the two-origin diagonal is not closed

For the doubled-origin line over $k$, the product has four affine charts, one for each pair of the two line charts. In a mixed chart its coordinates are $t_1,t_2$. The diagonal image is $t_1=t_2\\ne0$, because only the punctured parts of the two copies were identified. Its closure contains the mixed point $(0_1,0_2)$, which is not a diagonal point. Thus the diagonal image is not closed and the scheme is not separated over $k$.

The same argument applies relative to its map to the ordinary line: the mixed relative-product chart is an affine line with the diagonal punctured at zero. All tensor charts and the excluded point now exist by the fiber-product construction. This gives the promised formal interpretation of the two morphisms agreeing densely but differing at the origins.

## 6. Dense uniqueness needs a reduced source

If $Y\\to S$ is separated and two $S$-morphisms $g,h:X\\to Y$ agree on a dense open of a reduced scheme $X$, then they agree everywhere. Their equalizer is the base change of the diagonal, hence a closed immersion into $X$. It contains that open, so its underlying closed set is all of $X$. In an affine source chart its defining ideal therefore lies in every prime, hence in the nilradical. Reducedness makes that ideal zero. The equalizer is all of $X$, including its sheaf structure, which proves the morphisms equal.

Reducedness cannot be replaced by irreducibility of the point space. Take

$$X=\\operatorname{Spec}k[t,\\epsilon]/(\\epsilon^2,t\\epsilon).$$

Its underlying space is the irreducible affine line. The two maps to the separated affine line given by $z\\mapsto0$ and $z\\mapsto\\epsilon$ agree on the dense open $D(t)$, where the relation kills $\\epsilon$, but are distinct globally. Their equalizer is the closed subscheme cut out by $\\epsilon$, with the same entire point support but a smaller sheaf. This shows why merely observing a topologically dense equalizer would not have completed the proof. The classical sources were reduced, so their earlier uniqueness argument had the needed hypothesis implicitly in the variety convention and now has it explicit.

## 7. Projective space is separated over any base

On the product of two projective spaces over an affine base ring, the diagonal is cut out by the bihomogeneous relations $X_iY_j-X_jY_i$. Verify this as a closed immersion on affine chart pairs. If the same index is normalized to one in both, the quotient simply identifies the corresponding affine coordinates. If different indices $i,j$ are normalized, one relation is

$$1-u_jv_i=0,$$

forcing $u_j$ invertible. The other relations express every second-chart coordinate as its first-chart ratio divided by $u_j$. The quotient ring is therefore the coordinate ring of the common principal chart, with $v_i$ supplying the inverse. The resulting ring map is surjective and is exactly the diagonal's chart map.

This proves the closed-immersion assertion without arguing from proportional vectors over arbitrary rings. The equations and quotient identities commute with base change, so $\\mathbb P^n_S\\to S$ is separated for every scheme base by affine localization. A closed subscheme of projective space is separated as a composite of separated morphisms.

## 8. Prove universally closed projective projection

Projection $\\mathbb P^n_A\\to\\operatorname{Spec}A$ is closed for every ring $A$. A closed subset is $V_+(I)$ for a homogeneous ideal in $A[X_0,\\ldots,X_n]$. Such ideals describe all closed subsets: complements of homogeneous principal opens form the topology, and arbitrary unions of those opens give their ideal-generated closed complements. Finitely many generators of $I$ are not assumed.

At a base prime $\\mathfrak p$ whose fiber is empty, work over its residue field. A standard-graded quotient has empty Proj precisely when some power of its positive-coordinate ideal is zero. Indeed its degree-one principal charts have zero coordinate rings if empty. The Laurent chart presentation of Chapter 10 then gives zero localized rings, so a power of each coordinate is zero. A sufficiently high total monomial degree is consequently zero. The converse follows by inverting any surviving coordinate. This proves the empty-fiber criterion without assuming the residue field algebraically closed.

Thus at some degree $N$ the specialized ideal $I_{\\kappa(\\mathfrak p)}$ contains every degree-$N$ monomial. The finitely many membership expressions use only finitely many homogeneous elements $F_i$ of $I$. Taking $N$ larger if necessary, multiplication by these forms gives a finite matrix from their complementary-degree polynomial spaces to the degree-$N$ polynomial space, surjective over $\\kappa(\\mathfrak p)$. A full-row-rank minor is a ring element not in $\\mathfrak p$.

On its principal base neighborhood the same minor is invertible, so that finite matrix is surjective. Every fiber there again has empty Proj by the degree criterion. The empty-fiber locus is open, proving the image of the original closed set is closed. This extends the earlier classical proof while handling arbitrary prime residue fields, non-Noetherian base rings and an infinitely generated closed-set ideal.

Base change of projective space is projective space, as the polynomial chart rings tensor to the corresponding new polynomial rings and their transitions agree. Applying the proof over every affine chart of every new base shows the projection is universally closed. It is also finite type by its finite polynomial-chart cover and separated by Section 7. Therefore it is proper under the definition given at the start.

Every projective morphism, defined as a closed immersion into some $\\mathbb P^n_S$ followed by projection, is proper. Closed immersions are finite type in their quotient algebra models, are separated, and are universally closed by the quotient base-change identity. Each of the three properness conditions is preserved under composition: the finite covering/algebra condition composes, diagonals give separatedness, and a base-changed composite of closed maps is closed. This proves the assertion rather than identifying projectivity with properness by terminology.

Finite morphisms are proper as well. Their base changes stay finite and therefore closed by lying over, giving universal closedness; their affine diagonals are closed and their module generators give finite type. A closed map alone supplies only one part of this proof.

## 9. A closed map that is still not proper

The doubled-origin projection to the ordinary line is even universally closed. After any base change $T\\to\\mathbb A^1$, its source is two copies of $T$ glued along the inverse image of the punctured line. A closed subset restricts to a closed subset of each copy, and its image is the union of those two closed subsets of $T$, hence closed. This proves the universal claim for every scheme base change, including bases with nilpotents.

The map is finite type by its two affine identity charts, but it is not separated by the mixed-diagonal calculation. It is therefore not proper. This example separates all the conditions from a bare topological expectation of compactness. The projective and finite-map proofs supplied the missing diagonal condition, rather than inferring it from their closed-image behavior.

## Exercises

### AG11-01. An affine universal property

Prove the tensor product gives the required pair of maps for an arbitrary affine test scheme.

**Hint 1.** Reverse arrows using the affine-scheme correspondence.

**Hint 2.** The two algebra maps must agree on the base ring.

<details><summary>Full solution</summary>

A map from $\\operatorname{Spec}R$ to the tensor spectrum is a homomorphism $B\\otimes_A C\\to R$. The tensor universal property identifies it uniquely with homomorphisms from $B,C$ agreeing on $A$. Reversing arrows gives the two scheme maps with identical base composite. The correspondence respects the projection maps, so is the fiber-product property rather than an unspecified bijection of hom sets.

</details>

### AG11-02. Base-change a closed equation

For $A\\to C$ and $I\\subseteq A$, compute the fiber product of $\\operatorname{Spec}(A/I)$ with $\\operatorname{Spec}C$ over $\\operatorname{Spec}A$.

**Hint 1.** Tensor the quotient algebra.

**Hint 2.** Its defining ideal is the image-generated ideal in the new ring.

<details><summary>Full solution</summary>

The coordinate ring is $(A/I)\\otimes_A C\\cong C/IC$. It is a quotient affine model, so the base change remains a closed immersion. No flatness assumption is needed for this quotient identity. The quotient can become zero if the extended ideal is the unit ideal, correctly giving an empty fiber product.

</details>

### AG11-03. A two-point product

Explain the two product points of the complex field spectra over the real field.

**Hint 1.** Present one complex copy by its quadratic polynomial.

**Hint 2.** That polynomial has two distinct roots after tensoring with the other copy.

<details><summary>Full solution</summary>

The tensor is $\\mathbb C[T]/(T^2+1)$ and CRT identifies it with two copies of $\\mathbb C$. The corresponding spectrum has two points, each contracting to the sole point in each original complex spectrum. The two embeddings of the first generator give the distinct primes. Thus a topological pair of original points does not uniquely specify a scheme-product point.

</details>

### AG11-04. A nonreduced base change

Compute the nilpotent and length in $L\\otimes_k L$ for the purely inseparable extension in Section 3.

**Hint 1.** Use the class of $T-\\alpha$.

**Hint 2.** Its powers below $p$ form the standard quotient basis.

<details><summary>Full solution</summary>

The element $T-\\alpha$ is nonzero, with $p$th power zero. The quotient has basis its powers from zero through $p-1$, so local length and dimension over $L$ are $p$. There is only one prime point. This proves the base-changed algebra is nonreduced and distinguishes its infinitesimal length from distinct-point count.

</details>

### AG11-05. An affine diagonal

Find the ideal of the diagonal of $\\mathbb A^1_A$ over $\\operatorname{Spec}A$.

**Hint 1.** Its product ring is $A[x,y]$.

**Hint 2.** The diagonal map sends both variables to the same coordinate.

<details><summary>Full solution</summary>

The quotient map sends $x,y$ to $t$ in $A[t]$ and has kernel $(x-y)$. Polynomial division by that monic linear relation proves the kernel statement over any base ring. Hence the diagonal is a closed immersion. It is the particular case of the multiplication map on the tensor product and proves separatedness without a field assumption.

</details>

### AG11-06. The mixed-origin point

Locate a point in the closure of the doubled-origin diagonal that is not on the diagonal.

**Hint 1.** Work in the mixed chart of the two different line copies.

**Hint 2.** Its diagonal portion is the punctured coordinate diagonal.

<details><summary>Full solution</summary>

The mixed chart is $\\operatorname{Spec}k[t_1,t_2]$. Its diagonal portion has $t_1=t_2\\ne0$, whose closure contains $(t_1,t_2)=(0,0)$. That product point uses the two distinct origins, so is not the image of one point under the diagonal. Therefore the diagonal image is not closed, proving nonseparatedness. The closure calculation uses the dense punctured line inside the affine diagonal.

</details>

### AG11-07. Why reducedness enters uniqueness

For $k[t,\\epsilon]/(\\epsilon^2,t\\epsilon)$, compare the maps $z\\mapsto0$ and $z\\mapsto\\epsilon$ on $D(t)$ and globally.

**Hint 1.** Inverting $t$ annihilates $\\epsilon$.

**Hint 2.** The element $\\epsilon$ remains nonzero in the original ring.

<details><summary>Full solution</summary>

On $D(t)$ both homomorphisms send $z$ to zero. Globally they differ by the nonzero nilpotent $\\epsilon$, so define distinct maps to the separated affine line. Their equalizer has ideal $(\\epsilon)$ and full point support, but is not the whole scheme. This is the exact failure prevented by reducedness in the dense-agreement proof.

</details>

### AG11-08. Compose separated maps

Identify the two closed immersions factoring the diagonal of a composite of separated morphisms.

**Hint 1.** First use the diagonal over the middle base.

**Hint 2.** The comparison between the two relative products is a base change of the middle-base diagonal.

<details><summary>Full solution</summary>

For $X\\to Y\\to S$, use $X\\to X\\times_Y X\\to X\\times_S X$. The first is the separated diagonal of $X\\to Y$. The second is pulled back from $Y\\to Y\\times_S Y$, so is closed by base-change stability. Their composite is the diagonal over $S$, proving separatedness. The factorization specifies both maps and the hypotheses used at each step.

</details>

### AG11-09. An empty projective fiber

Why does empty Proj of a standard-graded quotient over a residue field imply that all sufficiently high degree monomials are zero?

**Hint 1.** Every degree-one principal chart must be empty.

**Hint 2.** In each graded Laurent localization the defining coordinate is a unit.

<details><summary>Full solution</summary>

An empty affine chart has zero degree-zero ring. Its graded Laurent presentation therefore has zero localization, so some power of the chart coordinate is zero in the quotient. Finitely many coordinates give finitely many such exponents. Any monomial of total degree greater than the sum of one less than these exponents contains a vanishing coordinate power. This proves the uniform high-degree criterion over any residue field.

</details>

### AG11-10. A minor gives an open neighborhood

Explain how finitely many ideal-membership expressions at an empty fiber prove an open empty-fiber locus over a non-Noetherian base.

**Hint 1.** Only finitely many monomials of one degree need to be spanned.

**Hint 2.** The chosen finite coefficient matrix has a full-rank minor outside the base prime.

<details><summary>Full solution</summary>

The finitely many degree-$N$ membership expressions use finitely many homogeneous equations, even if the entire ideal is infinitely generated. Their multiplication matrix is surjective over the residue field, so a maximal minor is not in the prime. Inverting it makes the matrix surjective on a principal base neighborhood. Every nearby fiber then satisfies the same high-degree criterion and is empty. No global finite-generation assumption on the original ideal was used.

</details>

### AG11-11. Finite is proper

List the three properness conditions and give the proved reason each holds for a finite morphism.

**Hint 1.** Module generators also generate an algebra.

**Hint 2.** Affine diagonals and base-changed lying over supply the other two conditions.

<details><summary>Full solution</summary>

Finite module models give finite type and the required quasi-compact affine inverse images. Multiplication of the tensor algebra proves the diagonal a closed immersion, so the map is separated. Every base change remains finite, and lying over proves each resulting map closed. Hence it is universally closed and therefore proper. None of the three conditions has been inferred merely from a closed original image.

</details>

### AG11-12. A universally closed counterexample

Why is the doubled-origin projection still not proper despite its universally closed base-change calculation?

**Hint 1.** Its base changes have two open copies of the new base.

**Hint 2.** The mixed relative diagonal remains nonclosed near the origins.

<details><summary>Full solution</summary>

A closed subset of any such base change has closed intersection with each copy, and the image is their finite union, proving universal closedness. The two identity affine charts give finite type. But the punctured mixed diagonal has a missing origin in its closure, so the map is not separated. Since properness requires all three conditions, it fails exactly that one. This isolates the separation requirement rather than weakening the universal closed-image statement.

</details>

## Closing summary

Tensor charts and gluing give scheme fiber products with their full mapping property. Residue-field tensors explain extra points and nilpotents. Closed diagonals define separatedness, with explicit base-change/composition proofs and a reduced-source dense uniqueness theorem. Projective projection is universally closed by a finite degree-and-minor argument over arbitrary base rings; together with finite type and separatedness this proves projective and finite morphisms proper. The two-origin example keeps those conditions logically distinct.
`;export{e as default};