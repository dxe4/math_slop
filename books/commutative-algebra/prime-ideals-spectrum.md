
# Prime Ideals and the Spectrum

A prime ideal can be treated as a point, and an ideal as a vanishing condition on those points. The Zariski topology makes that statement precise. Localisation then becomes passage to a basic open subset, while quotienting becomes passage to a closed subset. This chapter proves those correspondences and explains why generic points and nilpotents require more than the usual picture of isolated coordinate points.

Read [radical prime intersections](rings-and-ideals.md) and [localisation](localisation.md). Rings are commutative with identity, and prime ideals are proper. The spectrum of the zero ring is empty. We use only elementary topological definitions, supplying the relevant arguments.

## 1. Closed sets from ideals

**Definition 4.1.** Spec R is the set of prime ideals of R. For an ideal I define
$$V(I)=\{\mathfrak p\in\operatorname{Spec}R:I\subseteq\mathfrak p\}.$$
For f∈R define D(f)=Spec R\V((f)), the primes that do not contain f.

The following identities make the V(I) the closed sets of a topology:
$$V(0)=\operatorname{Spec}R,\quad V(R)=\varnothing,$$
$$\bigcap_\lambda V(I_\lambda)=V\left(\sum_\lambda I_\lambda\right),
\qquad V(I)\cup V(J)=V(IJ).$$
The intersection identity follows from ideal containment. For the union identity, a prime containing I or J contains IJ. Conversely, if a prime contains IJ but contains neither I nor J, choose a∈I and b∈J outside it. Then ab lies in the prime, contradicting primality.

This is the Zariski topology. The radical intersection theorem gives
$$V(I)=V(J)\quad\Longleftrightarrow\quad\sqrt I=\sqrt J.$$
Also V(I)⊆V(J) exactly when √J⊆√I. The inclusion reverses: more equations generally give fewer prime points.

The D(f) form an open basis. Indeed the complement of V(I) is the union of D(f) over f∈I. Their intersections satisfy D(f)∩D(g)=D(fg), with D(1)=Spec R and D(0)=∅.

## 2. Maps, quotients and basic opens

For a homomorphism φ:R→S, define
$$\operatorname{Spec}(\varphi):\operatorname{Spec}S\to
\operatorname{Spec}R,\qquad\mathfrak q\mapsto\varphi^{-1}(\mathfrak q).$$
Contraction gives a prime, and
$$(\operatorname{Spec}\varphi)^{-1}V(I)=V(IS).$$
This proves continuity. On basic opens the inverse image is D(φ(f)). Composition reverses direction because inverse images of ideals compose in reverse ring-map order.

**Theorem 4.2.** Spec(R/I) is homeomorphic to V(I), and Spec R_f is homeomorphic to D(f), through contraction.

*Proof.* The quotient prime correspondence is a bijection onto the primes containing I. A closed subset upstairs defined by J/I corresponds to V(J) inside V(I), proving both continuity and the subspace topology.

For localisation at powers of f, prime correspondence gives exactly the primes avoiding f, hence D(f). Every localised ideal is extended from its contraction. Its vanishing set therefore corresponds to V(J)∩D(f) for an ideal J≤R. Those are exactly the relatively closed sets of D(f), proving a homeomorphism. ∎

For a general multiplicative set S, the same prime bijection identifies Spec S^(−1)R with the subspace of primes disjoint from S. Its image is ⋂_(s∈S)D(s), which need not be open. Thus localisation at an arbitrary set need not present an open subspace, while inversion of one element always does.

## 3. Specialisation and generic points

The closure of the point 𝔭 is
$$\overline{\{\mathfrak p\}}=V(\mathfrak p).$$
Indeed a closed V(I) contains 𝔭 exactly when I⊆𝔭, and then it contains V(𝔭). Thus 𝔮 is a specialisation of 𝔭 exactly when 𝔭⊆𝔮. Maximal ideals are exactly the closed points.

For a subset A of Spec R,
$$\overline A=V\left(\bigcap_{\mathfrak p\in A}\mathfrak p\right).$$
The displayed closed set contains A. If V(I) contains A, then I lies in every prime of A, so I⊆their intersection and the displayed V is contained in V(I). This proves minimality, including the empty-set convention.

A nonempty closed set Y is irreducible if it is not a union of two proper relatively closed subsets. A point whose closure is Y is a generic point of Y.

**Theorem 4.3.** V(I) is irreducible exactly when √I is prime. Every nonempty irreducible closed set has the unique generic point √I.

*Proof.* If √I=𝔭 is prime, V(I)=V(𝔭) is the closure of its point 𝔭. The closure of one point is irreducible: in a union of two closed subsets containing that closure, the point belongs to one, which must then contain its entire closure.

Conversely assume V(I) irreducible. If ab∈√I, then V(I)⊆V(ab)=V(a)∪V(b). Intersect with V(I); irreducibility makes one of those intersections all V(I). Thus a or b belongs to every prime containing I, hence lies in √I. Properness follows from nonemptiness. So √I is prime. Uniqueness of the generic point follows because V(𝔭)=V(𝔮) gives √𝔭=√𝔮, and primes are radical. ∎

In particular Spec R is irreducible exactly when √(0) is prime, or equivalently R/√(0) is a domain. R itself need not be a domain: dual numbers over a field have an irreducible one-point spectrum.

## 4. Quasi-compactness

A space is quasi-compact if every open cover has a finite subcover. No Hausdorff assumption is included in that term.

**Theorem 4.4.** Spec R and every basic open D(f) are quasi-compact.

*Proof.* First consider a cover Spec R=⋃_αD(f_α). Its complementary vanishing set V((f_α)_α) is empty. If that generated ideal were proper, it would lie in a maximal ideal, giving a point in the vanishing set. Hence the ideal is all R. An expression 1=Σ_(i=1)^m r_i f_(α_i) uses only finitely many generators. No prime contains all those f_(α_i), so their m basic opens already cover.

An arbitrary open cover refines to a basic-open cover. A finite subcover of the refinement chooses finitely many of the original opens as well. Thus Spec R is quasi-compact. Since D(f)≅Spec R_f, it has the same property. ∎

Not every open subset is quasi-compact without further finiteness. In R=k[x_1,x_2,…], let U=⋃_(i≥1)D(x_i). No finite list covers U. For a chosen finite set F of indices, the ideal generated by their variables is prime, because its quotient is a polynomial domain in the other variables. It lies outside those selected D(x_i), but inside D(x_j) for any j∉F. Thus the displayed cover has no finite subcover.

This example motivates the Noetherian topological consequences in the next chapter. Quasi-compactness of the whole spectrum alone does not make every open subset manageable by finitely many equations.

## 5. Connected components and idempotents

An idempotent e satisfies e²=e. Then e(1−e)=0, so a prime contains e or 1−e, and cannot contain both. Hence
$$D(e)=V(1-e),\qquad
\operatorname{Spec}R=D(e)\sqcup D(1-e).$$
Each piece is both open and closed. A nontrivial idempotent gives a disconnection.

Conversely suppose Spec R=U⊔W is a disconnection into two nonempty open-and-closed subsets. Write U=V(I),W=V(J). Disjointness gives V(I+J)=∅ and hence I+J=R; covering gives V(IJ)=Spec R and hence IJ⊆√(0). Choose i+j=1 with i∈I,j∈J. Some N has (ij)^N=0.

The ideals (i^N),(j^N) are comaximal: expand (i+j)^(2N−1)=1 and assign each term to one of these two ideals. Their product is zero. Choose a+b=1 with a∈(i^N),b∈(j^N). Then ab=0 and a²=a,b²=b. On U, a vanishes and b does not; on W, b vanishes. Thus D(b)=U, and b is a nontrivial idempotent.

**Theorem 4.5.** A nonzero ring has connected spectrum exactly when its only idempotents are zero and one.

This theorem gives a finite algebraic witness for a topological disconnection. It also aligns with the product decomposition R≅Re×R(1−e), whose coordinate idempotents are e and 1−e.

## 6. Worked example: Spec Z

The primes are (0) and (p) for ordinary positive primes p. The point (0) has closure all Spec Z, so is generic. Each (p) is closed.

For nonzero n, V((n)) is the finite set of prime divisors of n. Thus D(n) contains the generic point and every closed prime except those finitely many divisors. D(0) is empty. Any two nonempty opens meet at (0), reflecting irreducibility. This space is not Hausdorff: distinct closed prime points cannot have disjoint nonempty neighbourhoods.

At the closed point (p), the local ring is Z_(p), with residue field F_p. At the generic point, it is Q. A point of the spectrum is therefore not merely a label for a residue integer; it has its own local and residue fields.

## 7. Worked example: a non-rational closed point

In Q[x], the ideal (x²−2) is maximal because x²−2 is irreducible over Q. Its residue field is Q(√2). It is a closed point of Spec Q[x] although there is no rational number a with x²−2 vanishing at a.

The generic point (0) has residue field Q(x). Evaluation points (x−a), a∈Q, have residue field Q, but do not exhaust the closed points. Thus identifying the spectrum with only the base-field coordinate points loses information.

The later Nullstellensatz explains the special situation for finitely generated algebras over an algebraically closed field. No such assumption is in force here.

## 8. Worked example: crossing axes and their generic points

Let R=k[x,y]/(xy). Every prime contains x or y, so
$$\operatorname{Spec}R=V(x)\cup V(y).$$
Each piece is irreducible with generic point (x) or (y), since the corresponding quotient is a polynomial domain. Their intersection V(x,y) is the single origin prime, because its quotient is k.

The opens D(x) and D(y) are disjoint since xy=0, and their union is the complement of that origin. Each identifies with a punctured axis: R_x≅k[x,x^(−1)] and R_y≅k[y,y^(−1)]. Thus removing the intersection disconnects the two branches.

The whole spectrum is connected. An idempotent of R maps to idempotents of the two domains k[x] and k[y], hence to zeros or ones. The two restrictions have the same constant value at the origin, so they must be the same choice. The map R→k[x]×k[y] is injective, since its kernel upstairs is (x)∩(y)=(xy). Therefore the original idempotent is zero or one. This proves connectedness algebraically, without confusing it with irreducibility.

## 9. Worked example: topology forgets nilpotents

For any ring R, every prime contains √(0). The quotient correspondence therefore makes
$$\operatorname{Spec}(R/\sqrt0)\longrightarrow\operatorname{Spec}R$$
a homeomorphism. The two rings can still be different.

For R=k[ε]/(ε²), both its spectrum and Spec k have one point. Their local rings are R and k, respectively; the first contains a nonzero nilpotent and the second does not. The topology records prime containment, while local ring data retain the infinitesimal distinction. This is why algebraic geometry eventually attaches a sheaf of rings rather than stopping at the topological spectrum.

The local algebra at a point also agrees across a basic-open identification. If 𝔭∈D(f) and 𝔮=𝔭R_f, then
$$(R_f)_{\mathfrak q}\cong R_{\mathfrak p}.$$
To prove this, observe that R_𝔭 already inverts f and therefore receives R_f. A fraction a/f^n lies outside 𝔮 exactly when a∉𝔭, so its image is a unit in R_𝔭. This extends the map through the second localisation. Conversely every element of R outside 𝔭 maps outside 𝔮 and becomes invertible in (R_f)_𝔮, giving the reverse map. Their composites fix R and all forced inverses, so the universal properties make them identities.

Thus opening a neighbourhood D(f) does not change the local ring at one of its points. In the crossing example, every point in D(x) has the same local algebra whether computed in the original ring or in k[x,x^(−1)]. This compatibility is one reason basic opens provide suitable pieces for a later structure sheaf.

The closure of the image of a spectral map has a simple description. For a unital map from A to B, intersect all contracted prime ideals of B. This intersection is the inverse image of the nilradical of B, which equals the radical of the map's kernel: an image element is nilpotent exactly when some power of its preimage lies in the kernel. The smallest closed set containing the image is therefore the vanishing set of that kernel. Actual image and closure can differ. The inclusion of integers into rationals has zero kernel, so its spectral image is dense in the integer spectrum. Yet its image contains only the zero prime, because a field has no other prime. This proves density without asserting that every integer prime survives localisation, and shows how the topology retains a useful closure statement when the map is not surjective on points.

## 10. Exercises

### CA-04-01 — Basic intersections

Prove D(f)∩D(g)=D(fg).

<details>
<summary>Hint 1</summary>

Use the prime condition and its contrapositive.

</details>
<details>
<summary>Hint 2</summary>

A prime avoids a product exactly when it avoids both factors.

</details>
<details>
<summary>Full solution</summary>

For a prime 𝔭, fg∉𝔭 implies neither f nor g lies in it by ideal absorption. Conversely if both factors lie outside 𝔭, primality makes their product lie outside. Thus membership in the intersection is equivalent to membership in D(fg). The statement can fail for a set of arbitrary nonprime ideals, so prime points are essential.

</details>

### CA-04-02 — When a basic open is empty

Show D(f)=∅ exactly when f is nilpotent.

<details>
<summary>Hint 1</summary>

The empty-open condition says every prime contains f.

</details>
<details>
<summary>Hint 2</summary>

Use the nilradical prime-intersection theorem.

</details>
<details>
<summary>Full solution</summary>

D(f) is empty precisely when f belongs to every prime. Their intersection is √(0), whose elements are exactly nilpotents. Equivalently Spec R_f is empty exactly when R_f is zero, which happens exactly when some power of f is zero. Both arguments include the zero ring.

</details>

### CA-04-03 — A closed quotient

Identify Spec Z/12Z as a subspace of Spec Z.

<details>
<summary>Hint 1</summary>

Its image is V((12)).

</details>
<details>
<summary>Hint 2</summary>

Only primes dividing twelve contain that ideal.

</details>
<details>
<summary>Full solution</summary>

The image consists of (2) and (3). Both are closed, and each singleton is relatively open as well: intersect with D(3) or D(2). Thus Spec Z/12Z is a two-point discrete space. Its nilpotents remain invisible topologically, consistent with the same spectrum for Z/6Z.

</details>

### CA-04-04 — Direction of specialisation

If 𝔭⊂𝔮, which point lies in the closure of the other?

<details>
<summary>Hint 1</summary>

The closure of 𝔭 is V(𝔭).

</details>
<details>
<summary>Hint 2</summary>

Membership means containing 𝔭.

</details>
<details>
<summary>Full solution</summary>

The point 𝔮 lies in the closure of 𝔭 because it contains 𝔭. Thus 𝔮 is a specialisation of 𝔭. In general 𝔭 does not lie in the closure of 𝔮 unless they are equal. For Spec Z, every closed (p) is a specialisation of the generic point (0).

</details>

### CA-04-05 — Irreducible but nonreduced

Give a nonreduced ring with irreducible spectrum and justify both properties.

<details>
<summary>Hint 1</summary>

Use dual numbers over a field.

</details>
<details>
<summary>Hint 2</summary>

Its nilradical is prime although it is nonzero.

</details>
<details>
<summary>Full solution</summary>

R=k[ε]/(ε²) has the nonzero nilpotent ε, so is nonreduced. Every prime contains ε, and the quotient by (ε) is k, so its sole prime is (ε). A one-point space is irreducible. Equivalently its nilradical (ε) is prime. Irreducibility of Spec R therefore does not imply R is a domain.

</details>

### CA-04-06 — Generic point of a closed axis

In Spec k[x,y], find the generic point of V((x)) and the residue field there.

<details>
<summary>Hint 1</summary>

The ideal (x) is prime.

</details>
<details>
<summary>Hint 2</summary>

The residue field at a prime is the fraction field of its quotient.

</details>
<details>
<summary>Full solution</summary>

The generic point is the prime (x) itself, since its closure is V(x). Its residue field is Frac(k[x,y]/(x))=k(y). Closed coordinate points on that axis may have smaller residue fields, but their closures do not fill the whole axis. A generic point is an algebraic prime point rather than an ordinary single coordinate value.

</details>

### CA-04-07 — Finite subcover from an identity

If 1=a_1f_1+⋯+a_nf_n, prove D(f_1),…,D(f_n) cover Spec R.

<details>
<summary>Hint 1</summary>

A missed prime would contain every f_i.

</details>
<details>
<summary>Hint 2</summary>

Ideals absorb all displayed coefficients.

</details>
<details>
<summary>Full solution</summary>

If a prime lay outside every D(f_i), it would contain all f_i and therefore their R-linear combination one. A prime is proper and cannot contain one. Thus no prime is missed. This finite identity is the algebraic witness extracted in the quasi-compactness proof.

</details>

### CA-04-08 — A non-quasi-compact open

Explain why ⋃_iD(x_i) in Spec k[x_1,x_2,…] has no finite subcover from its displayed cover.

<details>
<summary>Hint 1</summary>

Given finitely many indices, take the ideal they generate.

</details>
<details>
<summary>Hint 2</summary>

A new variable is not in that prime ideal.

</details>
<details>
<summary>Full solution</summary>

For a finite F, the ideal 𝔭=(x_i:i∈F) is prime because its quotient is a polynomial domain. It avoids none of the selected variables, so lies outside their D(x_i). Choose j∉F; then x_j∉𝔭, so 𝔭 lies in D(x_j) and hence in the union. Every finite subfamily misses such a point, proving the displayed cover has no finite subcover.

</details>

### CA-04-09 — Product spectra

Show Spec(R×S) is the disjoint union of Spec R and Spec S.

<details>
<summary>Hint 1</summary>

Use the orthogonal idempotents (1,0),(0,1).

</details>
<details>
<summary>Hint 2</summary>

A prime contains exactly one of them.

</details>
<details>
<summary>Full solution</summary>

Their product is zero and their sum is one, so a prime contains one and not the other. If it contains (0,1), it is 𝔭×S for a prime 𝔭 of R; the other case gives R×𝔮. The two sets are complementary clopen subsets, with quotient identifications to the two spectra. Thus the union is topologically disjoint, including an empty piece if a factor is zero.

</details>

### CA-04-10 — A contraction map

For Z→Q identify the image of Spec Q→Spec Z. Is it open?

<details>
<summary>Hint 1</summary>

A field has one prime, its zero ideal.

</details>
<details>
<summary>Hint 2</summary>

Every nonempty basic open in Spec Z contains closed primes as well.

</details>
<details>
<summary>Full solution</summary>

The image is {(0)}. It is not open: any basic D(n) containing (0) has n≠0 and excludes only the finitely many prime divisors of n, so still contains some closed prime. Thus localisation at all nonzero integers gives a subspace that is not open. This contrasts with inversion of a single element, whose image is a basic open.

</details>

### CA-04-11 — Point sets and residue fields

Why does the maximal ideal (x²+1) define a closed point of Spec R[x] even though the polynomial has no real zero?

<details>
<summary>Hint 1</summary>

Its quotient is a field.

</details>
<details>
<summary>Hint 2</summary>

Identify that quotient with C as a real algebra.

</details>
<details>
<summary>Full solution</summary>

The evaluation map at i identifies R[x]/(x²+1) with C, a field, so the ideal is maximal and the point is closed. Its residue field is C, not R. The spectrum includes prime ideals with residue fields extending the base field, so a real-coordinate zero set alone does not exhaust its points.

</details>

### CA-04-12 — Connected versus irreducible

For k[x,y]/(xy), prove the spectrum is connected but reducible.

<details>
<summary>Hint 1</summary>

It is the union V(x)∪V(y) of two proper closed subsets.

</details>
<details>
<summary>Hint 2</summary>

Use its embedding into k[x]×k[y] and matching constant terms to exclude nontrivial idempotents.

</details>
<details>
<summary>Full solution</summary>

Both V(x) and V(y) are proper, so their union proves reducibility. An idempotent maps to zero or one in each of the two polynomial domains. Its two images have the same constant term, forcing the same choice. The map into their product is injective because (x)∩(y)=(xy), so the original idempotent is zero or one. The idempotent criterion gives connectedness. These two topological properties are distinct.

</details>

## 11. Summary and next connection

The spectrum turns radical containment into topology. Quotients give closed subspaces, single-element localisations give basic opens, and prime containment gives specialisation. Irreducible closed sets have unique generic points; quasi-compactness supplies finite subcovers; idempotents detect disconnections. Nilpotents require local ring data beyond the topology. The next chapter adds [Noetherian finiteness](noetherian-hilbert-basis.md), bringing finite generation and stronger control of ideals and open subsets.
