var e=`---
parent_id: book-algebraic-geometry
chapter_id: affine-schemes
title: "Affine Schemes"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Affine Schemes

An affine scheme retains every prime ideal as a point and retains the full ring, including nilpotents, as local algebra. We construct its structure sheaf, prove its sections on basic opens, and recover ring homomorphisms exactly as morphisms of locally ringed spaces. The distinction between a germ and its residue value is essential for this reconstruction.

In this chapter $A$ is any commutative ring with identity, and the zero ring is allowed with empty spectrum. No algebraic closure, finite-generation or Noetherian hypothesis is assumed in the construction. When a $k$-algebra or classical variety is used, that additional structure is stated. Read sheafification and stalks from Chapter 8 and localization and prime ideals from Commutative Algebra. A scheme in general will be defined by local affine charts in Chapter 10; here an affine scheme is the constructed locally ringed space or an isomorphic copy.

## 1. The prime spectrum and its basis

The set $\\operatorname{Spec}A$ consists of proper prime ideals. Define $V(I)$ as the primes containing an ideal $I$, and $D(f)$ as those not containing $f$. The usual identities hold: arbitrary intersections of the closed sets come from sums of ideals, and $V(I)\\cup V(J)=V(IJ)$. For the latter, a prime containing every product contains one whole factor ideal: if it did not, choose an element of each outside the prime and multiply, contradiction. Also $D(f)\\cap D(g)=D(fg)$, and these opens form a basis.

For every ideal $I$, the intersection of its containing primes is $\\sqrt I$. One containment follows because prime ideals contain every element whose power they contain. If $a\\notin\\sqrt I$, the localization $(A/I)_a$ is nonzero. A maximal ideal there pulls back to a prime containing $I$ and avoiding $a$, proving the reverse containment. Thus this radical dictionary holds for spectra of arbitrary rings. It is distinct from the classical-point Nullstellensatz, which had additional ground-field and finite-type hypotheses.

The closure of the point $\\mathfrak p$ is $V(\\mathfrak p)$. It is irreducible: a closed union containing that point contains it in one member, which then contains its whole closure. Conversely an irreducible closed set has prime radical ideal, since a product in that ideal gives a two-set closed decomposition. Hence every irreducible closed subset has the unique generic point given by that prime. Such a point need not be closed. Maximal ideals give precisely the closed points.

The space is quasi-compact. Refine an open cover to principal opens $D(f_i)$. If their generated ideal were proper, a maximal ideal containing it would lie outside the cover. Thus one is a finite combination of some $f_i$, and those finitely many principal opens cover. This proof does not require the ring to be Noetherian. It also does not make the spectrum Hausdorff: generic points already display a different specialization structure.

## 2. Localization is the geometry of a principal open

Prime extension and contraction give a bijection between $\\operatorname{Spec}A_f$ and the primes of $A$ avoiding $f$. The quotient test for primality proves these operations are inverse: elements of the inverted set become units, and a prime disjoint from that set extends to a proper prime. Under the bijection, principal opens in the localization become principal opens intersected with $D(f)$, so it is a homeomorphism onto that open.

In particular every $D(f)$ is quasi-compact by applying the preceding argument to $A_f$. If $D(g)\\subseteq D(f)$, then $f$ is a unit in $A_g$. Otherwise it would lie in a maximal ideal of $A_g$, giving a prime of $A$ containing $f$ and avoiding $g$, contrary to the inclusion. Thus there is a canonical restriction homomorphism $A_f\\to A_g$ by the universal property. Restrictions compose correctly because they are determined by the original ring elements and their inverses.

At this stage these are rings on a basis, not yet a proved sheaf. The next section supplies the full gluing argument, including the annihilating factors needed for rings with zero divisors. Equality of fractions cannot be replaced by numerator equality in such rings.

## 3. The localization gluing lemma

Let principal opens $D(g_1),\\ldots,D(g_r)$ cover $\\operatorname{Spec}R$. Then the $g_i$ generate the unit ideal, as do any fixed positive powers of them. The latter assertion follows because their powers have exactly the same common containing primes. A section $a\\in R$ zero in every $R_{g_i}$ satisfies $g_i^{N_i}a=0$ for suitable exponents. Choose one common positive exponent and a unit-ideal combination of those powers; multiplying by $a$ proves $a=0$. This is uniqueness of gluing.

For existence, take $s_i\\in R_{g_i}$ agreeing in each $R_{g_ig_j}$. Choose one positive $N$ with presentations $s_i=a_i/g_i^N$. Compatibility says a power of $g_ig_j$ annihilates

$$a_i g_j^N-a_j g_i^N.$$

There are finitely many pairs, so choose a common positive exponent $M$ that works for all. Set $L=N+M$ and $b_i=g_i^M a_i$. Then the equalities become actual ring equalities

$$b_i g_j^L=b_j g_i^L\\quad\\text{in }R.$$

Choose $c_i\\in R$ with $\\sum_i c_i g_i^L=1$ and put $a=\\sum_i c_i b_i$. In $R_{g_j}$ the displayed compatibility gives $a g_j^L=b_j$, hence $a=s_j$. This proves existence with all denominator and annihilator factors supplied. No domain assumption has been used.

An arbitrary principal-open cover has a finite subcover by quasi-compactness. The resulting glued section agrees with any extra member by uniqueness on its intersections with the finite subcover. The same proof applies on $D(f)$ after replacing $R$ by $A_f$. Thus the basis assignment $D(f)\\mapsto A_f$ satisfies both sheaf axioms for every basis cover.

## 4. Construct the structure sheaf and its stalks

One explicit extension to all opens is as follows. For $U\\subseteq\\operatorname{Spec}A$, take families $s_{\\mathfrak p}\\in A_{\\mathfrak p}$ that locally come from a fraction on a principal neighborhood. Restrictions discard entries outside the smaller open. Compatible families glue pointwise and remain locally represented, so this is a sheaf of rings $\\mathcal O_A$.

The localization lemma proves

$$\\Gamma(D(f),\\mathcal O_A)=A_f.$$

Indeed every family has a principal-local fraction presentation, and quasi-compactness of $D(f)$ chooses finitely many such presentations. Equality of their germs on overlaps implies equality of the fractions there: a zero fraction germ vanishes on a smaller principal neighborhood, and uniqueness in the gluing lemma identifies it with zero on the whole overlap. The lemma then glues the local fractions to one element of $A_f$. Conversely any such element defines its family of localizations, and uniqueness makes the two assignments inverse. Taking $f=1$ recovers $\\Gamma(\\operatorname{Spec}A,\\mathcal O_A)=A$, including all nilpotents.

At $\\mathfrak p$, the stalk is $A_{\\mathfrak p}$. Every stalk section has a principal fraction representative, hence gives that localized element; every fraction with denominator outside $\\mathfrak p$ is represented on its denominator's principal open. If two fractions agree in $A_{\\mathfrak p}$, an element outside $\\mathfrak p$ annihilates their cleared difference, so after shrinking that principal neighborhood their section germs agree. This proves both surjectivity and injectivity of the stalk identification.

The localized ring is local with maximal ideal $\\mathfrak pA_{\\mathfrak p}$. Its residue field is

$$\\kappa(\\mathfrak p)=\\operatorname{Frac}(A/\\mathfrak p).$$

The pointwise residue value is the image of the stalk element in this field. It is not the stalk itself. In particular a nilpotent global element has zero residue at every prime while it can remain a nonzero section and a nonzero germ. Replacing all sections by their residue values would discard the ring we just reconstructed.

Define the affine scheme associated to $A$ to be $(\\operatorname{Spec}A,\\mathcal O_A)$. The homeomorphism from Section 2 identifies $(\\operatorname{Spec}A_f,\\mathcal O_{A_f})$ with the open locally ringed subspace on $D(f)$, because its section rings and their restrictions agree on principal bases. This is an open immersion in the affine scheme sense.

## 5. Ring maps give locally ringed morphisms

A unital homomorphism $\\varphi:B\\to A$ gives a continuous map $f:\\operatorname{Spec}A\\to\\operatorname{Spec}B$ by $\\mathfrak p\\mapsto\\varphi^{-1}(\\mathfrak p)$. Its inverse image of $D(b)$ is $D(\\varphi(b))$. The localization maps $B_b\\to A_{\\varphi(b)}$ commute with restrictions and therefore define a sheaf map $\\mathcal O_B\\to f_*\\mathcal O_A$, or equivalently $f^{-1}\\mathcal O_B\\to\\mathcal O_A$.

At $\\mathfrak p$ its stalk map is

$$B_{\\varphi^{-1}\\mathfrak p}\\longrightarrow A_{\\mathfrak p}.$$

It is local: a numerator belongs to the source maximal ideal exactly when its image belongs to $\\mathfrak p$, and denominators are units. Thus the map is a morphism of locally ringed spaces. Identity and composition follow from inverse images of primes and the localization universal property.

Conversely, let a morphism of locally ringed spaces $f:\\operatorname{Spec}A\\to\\operatorname{Spec}B$ be given. Its global pullback is a homomorphism $\\varphi:B\\to A$. At $\\mathfrak p$, locality says that a germ at $f(\\mathfrak p)$ is in its maximal ideal exactly when its image is in the source maximal ideal. Applying this to global $b\\in B$ gives

$$b\\in f(\\mathfrak p)\\quad\\Longleftrightarrow\\quad\\varphi(b)\\in\\mathfrak p.$$

Hence the underlying point map is the contraction map already constructed. On a principal open the sheaf homomorphism is determined by the global ring elements and the inverse of its defining function. Localization therefore forces exactly the constructed section map. A sheaf map is determined on a basis, so there is no additional choice.

We have proved the affine-scheme correspondence: rings and affine schemes are equivalent with arrows reversed. This statement includes nonreduced and non-Noetherian rings, with locally ringed morphisms as its precise map convention. A $k$-scheme structure on an affine is additionally the morphism to $\\operatorname{Spec}k$ corresponding to its $k$-algebra structure; morphisms over $k$ commute with that map.

## 6. Worked example: the arithmetic line

The points of $\\operatorname{Spec}\\mathbb Z$ are its zero ideal and the ideals generated by ordinary primes. The zero prime is generic and its local ring and residue field are $\\mathbb Q$. At a closed prime $(p)$ the local ring is $\\mathbb Z_{(p)}$, while its residue field is $\\mathbb F_p$. On the principal open $D(p)$ the section ring is instead $\\mathbb Z[1/p]$: it removes that closed prime and keeps the others along with the generic point. Localizing at a prime and inverting its generator describe different neighborhoods and different rings.

An arbitrary localization need not give an open image. For a domain $A$, the spectrum of its fraction field maps only to the zero prime. For $A=k[t]$ that singleton is not open, because every nonempty principal open also contains many closed primes. Thus the principal-open immersion theorem cannot be extended to every infinite multiplicative-set localization by changing its notation.

## 7. Worked example: one point with nonzero infinitesimal algebra

Let $A=k[\\epsilon]/(\\epsilon^2)$. Its only prime is $(\\epsilon)$ because every prime contains the nilpotent, and the quotient is a field. The structure sheaf on its one-point space has global ring and stalk $A$, while the residue field is $k$. The class of $\\epsilon$ is nonzero in that stalk and zero in the residue field.

The quotient map $A\\to k$ gives a morphism $\\operatorname{Spec}k\\to\\operatorname{Spec}A$ that is a homeomorphism on points but is not an isomorphism of schemes: its global ring map is not an isomorphism. More generally $k[\\epsilon]/(\\epsilon^r)$ has the same point set and local length $r$, with basis the powers from zero through $r-1$. The full sheaf distinguishes every such thickening, while residue-value functions would identify them all.

For any ring, quotient by the nilradical gives a homeomorphism on spectra, since every prime contains every nilpotent and extension/contraction preserve its closed sets. It generally changes the structure sheaf by quotient maps on local rings. A topological homeomorphism is therefore insufficient for a scheme isomorphism even when the prime sets agree exactly.

## 8. Worked example: why locality of the sheaf map is necessary

Map the one-point space $\\operatorname{Spec}\\mathbb Q$ to the closed point $(2)$ of $\\operatorname{Spec}\\mathbb Z$. The inverse-image sheaf ring on the point is $\\mathbb Z_{(2)}$, and its inclusion into $\\mathbb Q$ defines a morphism of ringed spaces. It is not local: the source stalk's element two lies in its maximal ideal but maps to a unit in the field.

Its global ring map is the ordinary inclusion $\\mathbb Z\\to\\mathbb Q$. The locally ringed morphism associated with that inclusion instead sends the point to the zero prime. Thus ringed-space morphisms alone would give different point maps with the same global ring map, breaking the affine correspondence. The local condition is exactly what recovers the contraction of primes in Section 5.

For a quotient $A\\to A/I$, the corresponding point map identifies its spectrum with the closed subset $V(I)$. The stalk rings are the quotients $A_{\\mathfrak p}/IA_{\\mathfrak p}$ at primes containing $I$. This is the affine closed-immersion model; a radical ideal gives the reduced closed subscheme, while a nonradical ideal can keep thickness on that same underlying closed set. The next chapter uses these models to state open and closed immersions on general scheme charts.

## 9. Test algebras see what field-valued points miss

For an affine scheme over $k$, a point with values in a commutative $k$-algebra $R$ means a morphism $\\operatorname{Spec}R\\to\\operatorname{Spec}A$ over $k$. By the affine correspondence it is exactly a homomorphism $A\\to R$. Changing the test algebra by a homomorphism sends such points forward by composition. This gives a functor on test algebras, with all its naturality maps specified.

For $A=k[\\epsilon]/(\\epsilon^2)$, there is only one $k$-valued point because a field has no nonzero square-zero element. But with test ring $R=k[\\delta]/(\\delta^2)$, the image of $\\epsilon$ can be any $b\\delta$ with $b\\in k$. Conversely any square-zero element in that ring has zero scalar part, since its scalar square must vanish in the field, so these are all the possibilities. The reduced point $\\operatorname{Spec}k$ has only its unique $R$-point over $k$. Thus nonreduced test algebras distinguish the thickened point from the reduced point even though ordinary field-valued points did not.

All test algebras together recover morphisms too. Suppose there is a natural transformation from the functor $R\\mapsto\\operatorname{Hom}(A,R)$ to $R\\mapsto\\operatorname{Hom}(B,R)$. Evaluate it at $R=A$ on the identity. The result is a homomorphism $\\psi:B\\to A$. Naturality with any $\\varphi:A\\to R$ forces the original transformation to send $\\varphi$ to $\\varphi\\circ\\psi$. Conversely composition with any such $\\psi$ defines a natural transformation. These constructions are inverse, giving a direct affine proof of the representable-functor correspondence rather than assuming that a set of points alone determines a scheme.

The test object is part of the phrase “point.” A residue-field point detects a prime and a field value, while a dual-number point can carry a first-order direction. Their domains are different affine schemes and must not be conflated with several names for the same topological point. This interpretation makes the tangent maps of Chapter 5 actual scheme morphisms under the structure just constructed.

## Exercises

### AG09-01. A generic point

Show that the zero prime of a domain is generic in its spectrum, and state when it is also closed.

**Hint 1.** The closure is the set of all primes containing it.

**Hint 2.** Closed points are maximal ideals.

<details><summary>Full solution</summary>

Every prime contains zero, so its closure is the whole spectrum. It is closed precisely when the zero ideal is maximal, which for a domain means that the ring is a field. In $k[t]$ it is generic and not closed. This is a point added by the spectral framework; it was not one of the classical coordinate points of the affine line.

</details>

### AG09-02. Quasi-compactness without Noetherianity

Prove a principal-open cover of a spectrum has a finite subcover using an ideal argument.

**Hint 1.** If the generators formed a proper ideal, choose a maximal ideal containing it.

**Hint 2.** Membership of one in an ideal uses only finitely many generators.

<details><summary>Full solution</summary>

A containing maximal ideal would be outside every principal open, contradicting the cover. Therefore their generated ideal is the whole ring. An expression for one is a finite sum of generator multiples, and the corresponding finitely many opens already cover because no prime can contain them all. This proof requires no chain condition and includes non-Noetherian rings.

</details>

### AG09-03. A zero fraction with nonzero numerator

In $A=k[x,y]/(xy)$, give a nonzero element killed after localizing at $x$.

**Hint 1.** The relation annihilates the class of the other coordinate.

**Hint 2.** That class is nonzero before localization.

<details><summary>Full solution</summary>

The class of $y$ is nonzero in $A$ but $xy=0$, so its fraction in $A_x$ is zero. In fact $A_x\\cong k[x,x^{-1}]$. The localization equality criterion asks for a power of the inverted element annihilating the numerator, not for the numerator to have been zero already. The gluing lemma retained precisely those annihilator factors for this reason.

</details>

### AG09-04. Clear compatible denominators

Explain why increasing the common denominator exponent in Section 3 converts equality on overlaps into actual equalities in the original ring.

**Hint 1.** Each cleared difference is killed by a power of the product of the two denominators.

**Hint 2.** Multiply each numerator by the matching extra power of its own denominator.

<details><summary>Full solution</summary>

Choose $M$ killing all differences $a_i g_j^N-a_j g_i^N$ after multiplication by $(g_ig_j)^M$. With $b_i=g_i^Ma_i$ and $L=N+M$, the difference $b_i g_j^L-b_j g_i^L$ is exactly that annihilated product and is zero in the ring. The unit-ideal combination of $g_i^L$ then glues the numerators. Omitting this increase would incorrectly cancel zero-divisor denominators.

</details>

### AG09-05. A local residue field

Compute the local ring and residue field at the prime $(x)$ of $k[x,y]$.

**Hint 1.** Invert every polynomial outside that prime.

**Hint 2.** Modulo the prime, every nonzero polynomial in $y$ becomes invertible.

<details><summary>Full solution</summary>

The local ring is $k[x,y]_{(x)}$, with maximal ideal generated by $x$. Its residue field is $k(y)$, the fraction field of $k[y]$. This point is not a classical closed point over the algebraically closed field; its closure is the vertical line. The stalk has local dimension one, while its residue field remembers a transcendental coordinate along that closure.

</details>

### AG09-06. Recover the point map

Why does a locally ringed morphism force $f(\\mathfrak p)=\\varphi^{-1}(\\mathfrak p)$ for its global ring map $\\varphi$?

**Hint 1.** Test a global target element in the maximal ideal of the target stalk.

**Hint 2.** A local homomorphism detects that membership by its image in the source maximal ideal.

<details><summary>Full solution</summary>

The germ of $b$ is nonunit at $f(\\mathfrak p)$ exactly when $b$ belongs to that prime. Locality makes this equivalent to its pulled-back germ lying in the maximal ideal at $\\mathfrak p$, which means $\\varphi(b)\\in\\mathfrak p$. Thus the two primes contain exactly the same elements. This is the precise recovery step that fails for a merely ringed morphism.

</details>

### AG09-07. An affine open immersion

Describe $\\operatorname{Spec}k[t,t^{-1}]$ inside $\\operatorname{Spec}k[t]$, including the generic point.

**Hint 1.** It consists of primes avoiding $t$.

**Hint 2.** The zero prime avoids every nonzero polynomial.

<details><summary>Full solution</summary>

It is the principal open $D(t)$, with the generic zero prime and all closed points $(t-a)$ for $a\\ne0$. The point $(t)$ is removed. Its basic section rings and stalks are the corresponding further localizations, so the map is an isomorphism onto that open as a locally ringed space. This is more than identifying a punctured set of classical points.

</details>

### AG09-08. A localization with nonopen image

For the map from $\\operatorname{Spec}k(t)$ to $\\operatorname{Spec}k[t]$, determine the image and prove it is not open.

**Hint 1.** A field has only its zero prime.

**Hint 2.** A nonempty principal open of the affine line contains closed points over the infinite ground field.

<details><summary>Full solution</summary>

The unique prime contracts to zero, so the image is the generic singleton. Any nonempty principal neighborhood of zero is $D(f)$ for a nonzero polynomial and includes all but finitely many closed points. It cannot be contained in that singleton. Thus the image is not open, even though the map comes from an ordinary localization of a domain.

</details>

### AG09-09. A nilpotent section

In $k[\\epsilon]/(\\epsilon^3)$, compare the global section $\\epsilon$, its germ and its residue at the unique point.

**Hint 1.** The one-point structure sheaf has the entire ring as stalk.

**Hint 2.** The residue kills the maximal ideal.

<details><summary>Full solution</summary>

The class of $\\epsilon$ is a nonzero global section and remains nonzero in the stalk, whose ring is the same three-dimensional local algebra. Its residue is zero in $k$. Its cube vanishes while its square does not. Therefore residue values on every point do not determine a scheme section; the structure sheaf retains information beyond the classical reduced function dictionary.

</details>

### AG09-10. A closed quotient with unchanged support

Describe the spectra and stalk map for $k[\\epsilon]/(\\epsilon^2)\\to k$.

**Hint 1.** Both spectra have one point.

**Hint 2.** The sheaf map is the noninjective ring quotient.

<details><summary>Full solution</summary>

The point map is a homeomorphism onto the closed support. The stalk map sends the dual-number local ring to its residue field and kills the nonzero nilpotent. Hence the morphism is a closed quotient immersion but not an isomorphism of locally ringed spaces. The affine correspondence detects the difference immediately from its global ring homomorphism.

</details>

### AG09-11. The locality counterexample

For the ringed map sending $\\operatorname{Spec}\\mathbb Q$ to $(2)$ in $\\operatorname{Spec}\\mathbb Z$, identify a maximal-ideal element that becomes a unit.

**Hint 1.** The target stalk is $\\mathbb Z_{(2)}$.

**Hint 2.** Every nonzero rational number is a unit in the source field.

<details><summary>Full solution</summary>

The element two belongs to the target stalk's maximal ideal but maps to an invertible rational number. The stalk homomorphism is therefore not local. Its global ring map is the inclusion of integers into rationals, whose legitimate affine-scheme morphism instead contracts the source zero prime to zero. This shows exactly why the locally ringed condition is part of the morphism definition.

</details>

### AG09-12. Recover a ring from its affine scheme

Explain why an isomorphism of affine schemes forces an isomorphism of their rings even when the rings are nonreduced.

**Hint 1.** Take global sections of both inverse sheaf maps.

**Hint 2.** The structure-sheaf theorem recovered the original rings without quotienting their nilpotents.

<details><summary>Full solution</summary>

The two inverse locally ringed morphisms give inverse homomorphisms on global sections. Those global section rings are precisely the original rings by the proved localization gluing construction. Nilpotents are included, so no reducedness assumption is needed. A homeomorphism alone lacks this sheaf information and does not yield the same conclusion.

</details>

## Closing summary

The prime spectrum has generic points and quasi-compact principal opens without Noetherian hypotheses. Localization gluing constructs a structure sheaf with section rings $A_f$ and stalks $A_{\\mathfrak p}$, retaining nilpotents and local residue distinctions. Locality of stalk maps makes ring homomorphisms recover exactly the affine-scheme morphisms. Principal localizations and quotients provide the open and closed models to be glued in the next chapter.
`;export{e as default};