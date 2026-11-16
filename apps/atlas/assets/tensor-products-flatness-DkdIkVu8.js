var e=`---
parent_id: book-commutative-algebra
chapter_id: tensor-products-flatness
title: "Tensor Products and Flatness"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Tensor Products and Flatness

Changing scalar rings transports generators and relations. Tensor products make that transport universal, but they preserve quotients more reliably than injections. Flatness is the exact condition that prevents an injection from collapsing. We construct the tensor product, prove its right exactness and an ideal criterion for flatness, then connect it to localisation and local freeness.

Read [module presentations and exactness](modules-exact-sequences.md), [localisation](localisation.md) and [Nakayama](noetherian-hilbert-basis.md). R is commutative with identity. Modules are unital and may be infinitely generated unless a theorem states otherwise. Tensor products without a subscript are over R.

## 1. A universal bilinear object

**Definition 10.1.** M⊗_R N is the quotient of the free R-module on pairs (m,n) by the relations enforcing additivity in each coordinate and
$$(rm)\\otimes n=m\\otimes(rn)=r(m\\otimes n).$$
Its generating symbols are pure tensors m⊗n; an arbitrary tensor is a finite sum of them.

Every R-bilinear map b:M×N→P extends uniquely to an R-linear map M⊗N→P, because the free extension kills exactly the imposed relations. Conversely a linear map on the tensor product restricts to such a bilinear map. This universal property determines the tensor product up to unique compatible isomorphism.

The map R⊗M→M, r⊗m↦rm, has inverse m↦1⊗m. Swapping factors and regrouping three factors give natural isomorphisms M⊗N≅N⊗M and (L⊗M)⊗N≅L⊗(M⊗N). They follow by their explicit pure-tensor formulas and the universal property.

Tensoring commutes with direct sums, including infinite ones: a pure tensor involving a direct-sum element uses finitely many coordinates, and projection/inclusion maps provide inverse universal maps. In particular R^(J)⊗M≅M^(J). Direct sums here mean finite-support families, not arbitrary products.

## 2. Quotients and right exactness

**Theorem 10.2.** If M'→M→M''→0 is exact, then
$$M'\\otimes N\\longrightarrow M\\otimes N
\\longrightarrow M''\\otimes N\\longrightarrow0$$
is exact.

*Proof.* Write M''=M/L, where L is the preceding image. The quotient of M⊗N by the image of L⊗N has the universal property of (M/L)⊗N: a bilinear map on M×N descends exactly when it vanishes on L×N. Thus the quotient is canonically M''⊗N. Its quotient map is surjective and its kernel is that image. The image from M'⊗N equals that from L⊗N because M'→L is surjective on numerators. ∎

For an ideal I this gives
$$(R/I)\\otimes M\\cong M/IM,$$
sending (r+I)⊗m to rm+IM. The inverse sends m+IM to (1+I)⊗m and is well defined because I acts as zero.

Right exactness does not assert injectivity of the first displayed map. For example, tensor the injection Z→Z given by multiplication by n≥2 with Z/nZ. It becomes multiplication by n on Z/nZ, which is zero, not injective. This failure is exactly what flatness excludes.

## 3. Flat modules and the ideal criterion

**Definition 10.3.** F is flat if tensoring with F preserves every injective map of R-modules. Together with right exactness, this is equivalent to preserving all short exact sequences.

Free modules are flat because tensoring with R^(J) gives a direct sum of copies of the original map, and coordinatewise injections remain injective. A direct summand of a flat module is flat: the tensor map is a direct summand of an injective tensor map. Thus projective modules, defined as summands of free modules, are flat.

**Theorem 10.4 (Ideal criterion).** F is flat exactly when the multiplication map
$$I\\otimes F\\longrightarrow F,\\qquad a\\otimes f\\mapsto af$$
is injective for every finitely generated ideal I.

*Proof.* Necessity applies flatness to I→R and identifies R⊗F with F.

For sufficiency, the hypothesis first extends to every ideal I. An element of I⊗F involves finitely many elements of I, so comes from a finitely generated subideal I_0. If its image in F is zero, the lift is zero in I_0⊗F by hypothesis, hence its image is zero in I⊗F.

We next prove K⊗F→R^n⊗F injective for every submodule K≤R^n, by induction on n. The n=1 case is the ideal statement. For larger n, project K onto the last coordinate, with ideal image J and kernel K_0≤R^(n−1). If a tensor z∈K⊗F maps to zero in R^n⊗F, its image in J⊗F maps to zero in F and hence is zero. Right exactness for K_0→K→J→0 makes z the image of some z_0∈K_0⊗F. Its image in R^(n−1)⊗F is zero, because that free-coordinate inclusion is injective. Induction gives z_0=0, hence z=0.

The same holds inside an arbitrary free module: any tensor uses finitely many K-elements, whose free-coordinate supports lie in a finite free direct summand. Lift the tensor from K intersected with that summand and apply the finite result.

Finally take an injection A→B, a free surjection P→B, its kernel K, and the inverse image E of A in P. Then A≅E/K and B≅P/K. Right exactness identifies their tensors with the quotients of E⊗F and P⊗F by the corresponding image of K⊗F. Both E⊗F and K⊗F inject into P⊗F by the preceding free-module result. The quotient map from E⊗F to P⊗F is therefore injective after dividing by the common K-image. Thus A⊗F→B⊗F is injective, proving flatness. ∎

The proof uses finite tensor expressions to reduce arbitrary modules to finite free coordinates. No Noetherian assumption was needed.

## 4. Localisation as scalar extension

There is an isomorphism
$$S^{-1}R\\otimes M\\cong S^{-1}M,\\qquad
(a/s)\\otimes m\\mapsto am/s.$$
Its inverse sends m/s to (1/s)⊗m. To check fraction equality, if u(tm−sn)=0, multiplying the corresponding tensor difference by the unit u in the localised factor makes it zero, and cancelling that unit gives equality. Balancing and the pure-tensor formulas verify the two composites.

Since localisation preserves exact sequences, S^(−1)R is flat as an R-module. It can be flat even when R→S^(−1)R is not injective. In R=Z/6Z, inverting two gives F_3 and kills three; the localisation theorem still supplies flatness.

For any prime 𝔭,
$$(M\\otimes N)_{\\mathfrak p}
\\cong M_{\\mathfrak p}\\otimes_{R_{\\mathfrak p}}N_{\\mathfrak p},$$
with fractions sent by (m⊗n)/s↦(m/s)⊗n and inverse (m/s)⊗(n/t)↦(m⊗n)/(st). These are well defined by denominator balancing and yield the localisation compatibility.

**Theorem 10.5 (Local criterion).** F is flat over R exactly when F_𝔪 is flat over R_𝔪 for every maximal 𝔪.

*Proof.* If F is flat, an injection of R_𝔪-modules remains an injection as an R-map; tensoring with F agrees with tensoring over R_𝔪 with F_𝔪, since denominators already act invertibly. This proves one direction.

Conversely, for an injection A→B, the kernel of A⊗F→B⊗F localises to the kernel of A_𝔪⊗F_𝔪→B_𝔪⊗F_𝔪, which is zero by local flatness and localisation exactness. Local module detection then makes the original kernel zero. ∎

## 5. Worked example: flatness over a PID

For a domain, flat modules are torsion-free. Tensor the injection R→R given by multiplication by a nonzero a; flatness makes multiplication by a injective on F.

Over a PID the converse holds. Every nonzero ideal is (a)≅R, and its multiplication map after tensoring is exactly multiplication by a on F. Torsion-freeness makes it injective. The zero ideal causes no condition, so the ideal criterion gives flatness.

Thus Q is flat as a Z-module, either by torsion-freeness or as a localisation. It is not free. If it had a Z-basis, express 1 in finitely many basis coordinates. Divisibility of 1 by every positive integer would force each of those integer coefficients divisible by every positive integer, hence zero, contradicting 1≠0. Flatness therefore need not mean a basis exists.

The module Z/nZ is not flat for n≥2 because multiplication by n kills it. These examples place free, flat and torsion-free conditions in their precise PID relationship.

## 6. Worked example: torsion-free need not be flat

Take R=k[x,y] and M=(x,y). It is torsion-free as a submodule of the domain R. Nevertheless the element
$$z=x\\otimes y-y\\otimes x\\in(x,y)\\otimes M$$
maps to zero under multiplication into M.

It is nonzero. Let 𝔪=(x,y). The quotient M/𝔪M has k-basis \\bar x,\\bar y. Reducing both factors modulo 𝔪 maps z to
$$\\bar x\\otimes\\bar y-\\bar y\\otimes\\bar x
\\in(M/\\mathfrak mM)\\otimes_k(M/\\mathfrak mM),$$
a nonzero combination of two distinct tensor basis vectors, including in characteristic two. Therefore the ideal criterion fails and M is not flat.

The example identifies an actual kernel tensor. Merely pointing out that the ideal is not principal would not by itself prove nonflatness over an arbitrary ring.

## 7. Finite flat modules over a local ring

A finite relation among elements m_i of a flat module has a useful form:
$$\\sum_i a_im_i=0\\quad\\Longrightarrow\\quad
m_i=\\sum_jb_{ij}n_j,\\qquad\\sum_i a_ib_{ij}=0.$$
To prove it, let I=(a_i). The tensor Σ_i a_i⊗m_i maps to zero in F, so is zero in I⊗F by flatness. Tensor a presentation K→R^r→I→0. Right exactness expresses the tuple (m_i) as a finite sum of tensors from K, giving the b_ij as relation-vector coordinates and the n_j as their tensor partners.

**Theorem 10.6.** A finitely generated flat module over a local ring is free of finite rank.

*Proof.* Lift a basis of F/𝔪F to generators m_1,…,m_r by Nakayama. Given any relation Σ_i a_im_i=0, use the preceding relation form. Write every n_j as Σ_k c_jk m_k because the m_k generate. Then m_i=Σ_k D_ikm_k for D=BC. Reducing modulo 𝔪 and using the residue basis gives D≡I mod 𝔪. Hence det D is outside 𝔪 and is a unit, so D is invertible by its adjugate.

The relation row a satisfies aB=0 and therefore aD=aBC=0. Invertibility gives a=0. Thus the generators have no nonzero relation and form a basis. If the residue space is zero, Nakayama gives F=0, the free module of rank zero. ∎

This proof uses finite generation to obtain a finite generator matrix and Nakayama. It does not assert that an arbitrary flat module is free; the Q example shows why that extra condition matters.

## 8. Faithful flatness

A flat R-algebra B is faithfully flat if M⊗_R B=0 forces M=0 for every module M.

**Proposition 10.7.** A flat algebra B is faithfully flat exactly when 𝔪B≠B for every maximal ideal 𝔪 of R.

*Proof.* Necessity applies the property to R/𝔪, whose tensor is B/𝔪B. Conversely, for 0≠m∈M, the cyclic submodule Rm≅R/I has proper annihilator I contained in some maximal 𝔪. Then IB⊆𝔪B is proper, so (Rm)⊗B≅B/IB is nonzero. Flatness preserves the injection Rm→M, making M⊗B nonzero too. ∎

**Worked example.** Z→Q is flat but not faithfully flat: (Z/2Z)⊗Q=0, and the maximal ideal (2) extends to Q. Likewise localisation at one prime can erase modules supported at other primes. Faithful flatness asks that the scalar extension preserve the ability to detect every nonzero module, beyond preserving exactness alone.

## Base change of a flat module

If R→A is a ring map and F is flat over R, then A⊗_R F is flat over A. For an injection of A-modules N'→N, use the associativity isomorphism
$$N'\\otimes_A(A\\otimes_R F)\\cong N'\\otimes_R F.$$
The right-hand tensor preserves the injection by R-flatness. The displayed isomorphism follows from n⊗(a⊗f)↦an⊗f, with inverse n⊗f↦n⊗(1⊗f), so there is no hidden freeness assumption on A.

Faithful flatness is preserved by base change as well: if F is a faithfully flat R-algebra and N is a nonzero A-module, it is also nonzero as an R-module. The same isomorphism makes its base-changed tensor nonzero. This is a statement about all A-modules, not just finitely generated ones.

For example the base change of Z→Q along Z→F_p gives F_p⊗Q=0. The resulting zero module is flat, because tensoring with zero preserves injections, but the extension is not faithful. This is consistent with Z→Q already being nonfaithful. Flatness and faithful flatness answer different questions about whether a scalar extension can erase a whole residue fibre.

Flatness preserves finite intersections of submodules inside a fixed module. Use the exact sequence from the intersection into the direct sum, followed by the difference map to the sum of the submodules. After tensoring with a flat module F, exactness identifies the kernel of that difference map with the tensor of the original intersection. Flatness also embeds both tensored submodules in the tensor of the ambient module. That kernel therefore identifies with their intersection there, proving the assertion without finite-generation hypotheses.

Infinite intersections need not be preserved. In the integers take submodules generated by successive powers of two, whose intersection is zero. Tensor with the flat rational module: every one of those nonzero ideals becomes all of the one-dimensional rational space, so their intersections after tensoring is that whole space. Tensoring their original zero intersection instead gives zero. The finite-intersection statement comes from a finite exact sequence; flatness has not supplied compatibility with this infinite inverse-limit operation.

## 9. Exercises

### CA-10-01 — A quotient tensor

Construct the isomorphism (R/I)⊗M≅M/IM and its inverse.

<details>
<summary>Hint 1</summary>

Send (r+I)⊗m to rm+IM.

</details>
<details>
<summary>Hint 2</summary>

The reverse sends m+IM to (1+I)⊗m.

</details>
<details>
<summary>Full solution</summary>

The forward map is balanced and changing r by I changes rm only by IM. The reverse kills IM because (1+I)⊗am=(a+I)⊗m=0 for a∈I. The composites fix the quotient generators and every pure tensor, giving inverse R-linear maps.

</details>

### CA-10-02 — Two finite cyclic groups

Compute (Z/mZ)⊗_Z(Z/nZ) for positive m,n.

<details>
<summary>Hint 1</summary>

Use the quotient tensor formula with I=(m).

</details>
<details>
<summary>Hint 2</summary>

The quotient is (Z/nZ)/m(Z/nZ).

</details>
<details>
<summary>Full solution</summary>

The result is Z/(mZ+nZ), naturally Z/gcd(m,n)Z. Indeed quotienting Z/nZ by its multiples of m adds the relation m=0 to n=0, and Bezout identifies the generated integer ideal with the gcd. For coprime m,n the tensor is zero.

</details>

### CA-10-03 — A lost injection

Tensor multiplication by two on Z with Z/2Z and identify the resulting map.

<details>
<summary>Hint 1</summary>

Z⊗Z/2Z is Z/2Z.

</details>
<details>
<summary>Hint 2</summary>

The tensor map is multiplication by two on that quotient.

</details>
<details>
<summary>Full solution</summary>

The original map is injective. After tensoring and identifying both ends with Z/2Z, it sends m to 2m=0. Its kernel is the whole nonzero module, so it is not injective. This explicitly proves Z/2Z is not flat and shows why right exactness does not imply left exactness.

</details>

### CA-10-04 — Flat summands

If F⊕G is flat, prove F is flat.

<details>
<summary>Hint 1</summary>

Tensor distributes over the direct sum.

</details>
<details>
<summary>Hint 2</summary>

A direct summand of an injective block diagonal map is injective.

</details>
<details>
<summary>Full solution</summary>

For an injection A→B, the tensor map with F⊕G is the direct sum of the maps with F and G. If an element of A⊗F were killed, placing it in the first summand would give a killed element of the injective whole map. It must be zero. Thus tensoring with F preserves every injection.

</details>

### CA-10-05 — Torsion-free over Z

Explain why every torsion-free abelian group is flat as a Z-module.

<details>
<summary>Hint 1</summary>

Every integer ideal is principal.

</details>
<details>
<summary>Hint 2</summary>

The ideal criterion becomes injectivity of multiplication by a nonzero integer.

</details>
<details>
<summary>Full solution</summary>

For I=(n), n≠0, identify I with Z by a↦na. The map I⊗M→M becomes multiplication by n, injective for a torsion-free group. The zero ideal gives an injective zero map. The ideal criterion proves flatness. No finite generation is needed; hence Q and many other nonfree groups are flat.

</details>

### CA-10-06 — An explicit nonflat ideal

Prove x⊗y−y⊗x is nonzero in (x,y)⊗(x,y) over k[x,y].

<details>
<summary>Hint 1</summary>

Reduce both factors modulo (x,y)².

</details>
<details>
<summary>Hint 2</summary>

The images of x,y form a two-dimensional k-basis.

</details>
<details>
<summary>Full solution</summary>

The quotient map to (𝔪/𝔪²)⊗_k(𝔪/𝔪²) sends the tensor to e_1⊗e_2−e_2⊗e_1. These are distinct basis tensors, so their indicated combination is nonzero over every field. Therefore the original tensor is nonzero. Its multiplication image is xy−yx=0, proving nonflatness by the ideal criterion.

</details>

### CA-10-07 — Localisation tensor

Give inverse maps between S^(−1)R⊗M and S^(−1)M.

<details>
<summary>Hint 1</summary>

Use (a/s)⊗m↦am/s.

</details>
<details>
<summary>Hint 2</summary>

Send m/s back to (1/s)⊗m and use units for fraction equivalence.

</details>
<details>
<summary>Full solution</summary>

The displayed forward map is balanced. If u(tm−sn)=0, the difference between (1/s)⊗m and (1/t)⊗n is killed by the invertible multiplier ust in the localised factor, hence is zero. Thus the reverse is well defined. Their composites fix fractions and pure tensors by balancing, giving the isomorphism.

</details>

### CA-10-08 — Local detection of flatness

Explain why flatness at all maximal localisations suffices, rather than assuming an injection can be checked by tensoring over a field.

<details>
<summary>Hint 1</summary>

Localise the kernel of the desired tensor map.

</details>
<details>
<summary>Hint 2</summary>

Use exact localisation and module vanishing detection.

</details>
<details>
<summary>Full solution</summary>

For A→B injective, every localised tensor map is injective by the assumed local flatness. Localisation compatibility identifies its kernel with the localisation of the original kernel. That module has zero localisation at every maximal ideal, so is zero. Residue-field tensoring alone would not prove this for arbitrary modules; the local rings preserve the needed exactness information.

</details>

### CA-10-09 — A finite local flat module

Why is a finitely generated flat module over a local ring free, and what is its rank?

<details>
<summary>Hint 1</summary>

Lift a residue basis using Nakayama.

</details>
<details>
<summary>Hint 2</summary>

The finite-relation argument forces every relation coefficient to vanish.

</details>
<details>
<summary>Full solution</summary>

Theorem 10.6 constructs generators lifting a basis of F/𝔪F and shows, using flat relation factorisation and an invertible matrix congruent to I modulo 𝔪, that they have no relations. They form a basis. The rank is therefore dim_(R/𝔪)F/𝔪F. Finite generation ensures this number and the matrices are finite.

</details>

### CA-10-10 — Flat is not faithful

Show Z→Z[1/2] is flat but not faithfully flat.

<details>
<summary>Hint 1</summary>

It is a localisation.

</details>
<details>
<summary>Hint 2</summary>

Tensor the nonzero module Z/2Z.

</details>
<details>
<summary>Full solution</summary>

Localisation exactness gives flatness. But (Z/2Z)⊗Z[1/2] is its localisation in which two is invertible; since two annihilates the module, the result is zero. Thus the nonzero module is erased and faithful flatness fails. Equivalently (2) extends to the whole target ring.

</details>

### CA-10-11 — A faithful direct-sum algebra

Show R→R×R by the diagonal map is faithfully flat.

<details>
<summary>Hint 1</summary>

As an R-module the target is free of rank two.

</details>
<details>
<summary>Hint 2</summary>

Its tensor with M is M⊕M.

</details>
<details>
<summary>Full solution</summary>

The algebra is free as an R-module, so flat. Tensoring gives M⊗(R×R)≅M⊕M because the finite product is also a direct sum as a module. If that module is zero, both copies are zero and M=0. Thus the algebra is faithfully flat, even though the spectrum map has two copies over each base point.

</details>

### CA-10-12 — Finite relations are essential data

In the ideal criterion proof, why may a kernel tensor for an infinitely generated ideal be reduced to a finitely generated subideal?

<details>
<summary>Hint 1</summary>

Every tensor is a finite sum of pure tensors.

</details>
<details>
<summary>Hint 2</summary>

Use the ideal generated by its finitely many ideal-factor entries.

</details>
<details>
<summary>Full solution</summary>

Write z=Σ_(i=1)^n a_i⊗f_i. It is the image of the same finite expression in I_0⊗F for I_0=(a_1,…,a_n). If its multiplication image is zero, the assumed injectivity for I_0 forces that lift to be zero. Its image z in I⊗F is then zero. No injectivity of I_0⊗F→I⊗F was assumed; only the lift's zero image in F was used.

</details>

## 10. Summary and next connection

Tensor products transport bilinear data and preserve quotients. Flatness adds preservation of injections, with an ideal criterion and localisation criterion that make it usable. PID torsion-free modules, a nonflat polynomial ideal and finite local free modules show its scope. Faithful flatness also preserves detection of nonzero modules. The next chapter studies [completions and Artin–Rees](completions-artin-rees.md), where Noetherian filtrations restore exactness to an inverse-limit construction.
`;export{e as default};