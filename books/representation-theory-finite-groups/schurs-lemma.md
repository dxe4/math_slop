
# Schur’s Lemma

Maschke's theorem gives irreducible summands, but a decomposition is useful only if we can compare its pieces. Schur's lemma makes equivariant maps between irreducibles exceptionally rigid. Over an algebraically closed field, an endomorphism of an irreducible representation is a scalar. Over R, the same sentence can be false, and that difference controls how real and complex representations interact.

Read [equivariant kernels and images](representations-and-examples.md) and [Maschke's theorem](maschkes-theorem.md). In this chapter k is a field, G is finite, and representations are finite-dimensional. The basic lemma does not require finiteness of G or a restriction on the characteristic; later decomposition statements do require complete reducibility.

## 1. The division-ring form

**Theorem 3.1 (Schur's lemma).** Let U and V be irreducible k-representations of G. Every nonzero G-map T:U→V is an isomorphism. Consequently Hom_G(U,V)=0 for nonisomorphic irreducibles, and End_G(U) is a division ring.

*Proof.* The kernel and image of T are invariant. Since T≠0, its kernel is not all U and its image is not zero. Irreducibility therefore gives ker T=0 and im T=V. Thus T is a bijective linear map. From Tρ_U(g)=ρ_V(g)T, multiply by T^(−1) on both sides to obtain equivariance of its inverse.

The endomorphism space is a ring under addition and composition, with identity I_U. Every nonzero element has an inverse in that ring by the first statement. Therefore it is a division ring. ∎

A division ring permits multiplication to be noncommutative. Scalars aI_U always belong to End_G(U), but the theorem has not yet said they are all its elements. It also does not say every linear operator on U is equivariant. Equivariance is a family of commuting equations, one for each group element.

The nonzero hypotheses matter. The zero representation is excluded from irreducibility, and the zero intertwiner need not be invertible. For reducible representations a nonzero projection onto a proper summand is an immediate counterexample to invertibility.

**Corollary 3.2.** An invariant endomorphism of an irreducible representation cannot have a proper nonzero eigenspace defined over k.

*Proof.* If λ∈k and Tv=λv for some nonzero v, then T−λI is an equivariant map with nonzero kernel. Schur's lemma forces T−λI=0. Thus the whole space, rather than a proper part, is its λ-eigenspace. ∎

This corollary identifies the precise missing ingredient in the scalar statement: an eigenvalue must exist in k.

## 2. The algebraically closed scalar form

**Theorem 3.3.** Suppose k is algebraically closed and U is finite-dimensional irreducible. Then
$$\operatorname{End}_G(U)=kI_U.$$
For irreducibles U,V, Hom_G(U,V) has k-dimension zero if U≇V and one if U≅V.

*Proof.* For T∈End_G(U), its characteristic polynomial has a root λ∈k because dim U≥1 and k is algebraically closed. Thus T−λI has nonzero kernel and is zero by the preceding corollary. Every T is scalar.

If U≅V choose an equivariant isomorphism F:U→V. For any T∈Hom_G(U,V), the map F^(−1)T is an equivariant endomorphism of U, so equals aI. Hence T=aF. This gives a one-dimensional Hom space. If they are not isomorphic, Theorem 3.1 gives the zero space. ∎

The scalar form works in positive characteristic too, provided k is algebraically closed and the individual representation is irreducible. It does not require Maschke. In modular characteristic, the converse “scalar endomorphisms imply complete reducibility” is not supplied by this theorem.

For a completely reducible complex representation, however, scalar endomorphisms do detect irreducibility. If V had at least two nonzero summands, projection onto one along the others would be equivariant and neither zero nor the identity, hence not scalar. Together with Schur's lemma, this proves:
$$V\ne0\text{ completely reducible over C}\quad\Longrightarrow\quad
V\text{ irreducible }\iff \dim_{\mathbb C}\operatorname{End}_G(V)=1.$$

## 3. Multiplicities and uniqueness of decomposition

Assume now k is algebraically closed and V is completely reducible. Choose pairwise nonisomorphic irreducibles S_1,…,S_r such that
$$V\cong\bigoplus_{i=1}^r S_i^{\oplus m_i}.$$
Only finitely many summands are involved.

**Theorem 3.4 (Multiplicity from maps).** For every irreducible S,
$$\dim_k\operatorname{Hom}_G(S,V)
=\dim_k\operatorname{Hom}_G(V,S)=m_S,$$
where m_S is its multiplicity, taken as zero if S does not occur. In particular the irreducible multiplicities are independent of the chosen direct-sum decomposition.

*Proof.* A map into a finite direct sum is equivalent to its component maps, so
Hom_G(S,V)≅⊕_i Hom_G(S,S_i)^(⊕m_i).
Schur's lemma makes each component zero unless S≅S_i, and one-dimensional in that case. This gives dimension m_S. A map out of a finite direct sum similarly decomposes into restrictions, giving the second equality. The dimensions depend only on V and S, so any other irreducible decomposition must have the same multiplicities. ∎

This is a proof of uniqueness of the multiset of irreducible isomorphism classes. It does not make every embedded copy canonical. In two copies of the trivial representation, every line is an invariant copy and no preferred pair of lines exists.

For a nonalgebraically closed field the same proof still works with a correction. Put D=End_G(S). The space Hom_G(S,V) is a right D-vector space by f·d=f∘d, and has D-dimension m_S. Its k-dimension is m_S dim_k D. Using the raw k-dimension as the multiplicity would overcount real irreducibles with extra commuting endomorphisms.

## 4. Isotypic subspaces and centralisers

**Definition 3.5.** The S-isotypic subspace V[S] of a completely reducible representation is the sum of all invariant subspaces of V isomorphic to S. Equivalently, it is the sum of the images of all maps S→V.

Relative to any irreducible decomposition, a map from S has zero component in every nonisomorphic summand by Schur. Conversely each copy of S is one of those images. Hence V[S] is exactly the sum of the summands of type S. It is independent of the decomposition, and
$$V=\bigoplus_{[S]}V[S].$$
Every G-endomorphism preserves each V[S], since composing it with a map S→V gives another map of that kind.

Over an algebraically closed field there is a canonical evaluation map
$$S\otimes_k\operatorname{Hom}_G(S,V)\longrightarrow V[S],
\qquad s\otimes f\longmapsto f(s),$$
where G acts on S and trivially on the Hom factor. It is an isomorphism: choose any decomposition V[S]≅S^(⊕m), identify the Hom space with k^m using the component inclusions, and the evaluation map becomes the usual direct-sum coordinate isomorphism. The proof uses a choice, but the map itself does not.

**Theorem 3.6 (Centraliser structure).** Under these hypotheses,
$$\operatorname{End}_G(V)\cong\prod_{i=1}^r M_{m_i}(k),\qquad
\dim_k\operatorname{End}_G(V)=\sum_i m_i^2.$$

*Proof.* Write an endomorphism as a block matrix between irreducible summands. A block from S_j to S_i is zero when i≠j and is scalar after fixed identifications when i=j. Thus on the S_i-isotypic component, the endomorphism is an arbitrary m_i×m_i scalar matrix acting on the multiplicity coordinates. Composition agrees with matrix multiplication. Different isotypic components contribute independent factors. ∎

This centraliser measures repeated copies, not the degrees of the irreducibles. A single irreducible of degree one hundred has scalar centraliser, whereas ten copies of a one-dimensional irreducible have a hundred-dimensional centraliser.

## 5. Central elements and abelian groups

If z∈Z(G), then ρ(z) commutes with every action operator. Over an algebraically closed field, its action on an irreducible S is therefore λ_zI. The scalar is nonzero, and z↦λ_z is a homomorphism Z(G)→k^×. If z has order d, λ_z^d=1.

**Corollary 3.7.** Every irreducible representation of a finite abelian group over an algebraically closed field is one-dimensional.

*Proof.* Every g is central, so every ρ(g) is scalar by Schur. Then every line in S is invariant. Since S is nonzero irreducible, its dimension must be one. ∎

This conclusion remains valid in modular characteristic, although not every representation is then a sum of such lines. For C_p over an algebraically closed field of characteristic p, the only possible scalar for a generator is 1: x^p−1=(x−1)^p. Its unique irreducible is trivial, yet nontrivial unipotent indecomposable representations exist.

Over C, a finite abelian group's irreducible representations are its homomorphisms into C^×, each with root-of-unity values. Maschke makes every representation a direct sum of these lines. In particular the action operators can be simultaneously diagonalised. This statement combines commutativity, algebraic closure and complete reducibility; dropping any one can change the conclusion.

## 6. Worked example: endomorphisms of the S_3 plane

Use S=[[0,1],[1,0]] and T=[[-1,−1],[1,0]] from Chapter 1. A matrix A=[[a,b],[c,d]] commutes with S exactly when c=b and d=a. Substitute A=[[a,b],[b,a]] into AT=TA. Their upper-left entries are −a+b and −a−b, so b=0 over C. Therefore A=aI.

This calculation agrees with the proved irreducibility of that S_3 plane and Schur's lemma. It also provides a practical method: solve linear commutation equations on a generating set. No character table was needed.

Now let V be two copies of that plane. An equivariant endomorphism of V has four 2×2 blocks, each scalar. It is therefore a general matrix
$$\begin{pmatrix}aI_2&bI_2\\cI_2&dI_2\end{pmatrix}.$$
The centraliser has dimension four. The off-diagonal blocks mix the two copies while still commuting with every group element. Thus an invariant summand need not be preserved individually by every equivariant endomorphism; only the whole isotypic component is canonical.

## 7. Worked example: a real commuting complex structure

On R² let C_3 act by R=[[−1/2,−√3/2],[√3/2,−1/2]]. We proved this real action irreducible. Put
$$J=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
R=-\frac12 I+\frac{\sqrt3}{2}J.$$
An operator commutes with R exactly when it commutes with J. Solving AJ=JA gives A=aI+bJ. Their multiplication obeys J²=−I, so
$$\operatorname{End}_{C_3}(\mathbb R^2)\cong\mathbb C$$
as real algebras, by a+bi↦aI+bJ. Every nonzero such matrix is invertible, with inverse (aI−bJ)/(a²+b²). It is a division algebra but is larger than R.

For two copies of this irreducible, Hom_G(S,S⊕S) has real dimension four. Its multiplicity is two, obtained by dividing by dim_R End_G(S)=2, or directly by taking its dimension as a right C-vector space. This illustrates the general correction in Theorem 3.4.

After complexification, J has eigenvalues i and −i and the real irreducible splits. The extra real commuting operator is a structural signal of the field dependence, not an exception to Schur's lemma.

## 8. Worked example: a quaternionic division algebra

Let H be the real quaternion algebra with basis 1,i,j,k, products i²=j²=k²=−1 and ij=k=−ji. The group Q_8={±1,±i,±j,±k} acts on the real vector space H by left multiplication.

This four-dimensional representation is irreducible over R. If a nonzero real subspace U is invariant under Q_8, linearity makes it invariant under left multiplication by every quaternion, since 1,i,j,k span H. Choose 0≠u∈U. Every x∈H equals (xu^(−1))u and therefore belongs to U. Thus U=H. Here u^(−1)=ū/|u|² exists for every nonzero quaternion.

Every right multiplication R_b:x↦xb commutes with all left multiplications. Conversely, if T commutes with Q_8, it commutes with all left quaternion multiplications. Set b=T(1). Then T(x)=T(x·1)=xT(1)=xb, so these are all equivariant endomorphisms.

Their composition is R_bR_c=R_(cb), so the endomorphism ring is H^op. Quaternion conjugation identifies H^op with H. This explicit example shows why the general lemma says division ring rather than field. No classification of all finite-dimensional real division algebras is needed for the argument.

## 9. Exercises

### REP-03-01 — Nonzero maps between irreducibles

Let U,V be irreducible over any field. If Hom_G(U,V)≠0, prove dim U=dim V, and explain why equality of dimensions alone gives no converse.

<details>
<summary>Hint 1</summary>

Use the kernel and image of a nonzero map.

</details>
<details>
<summary>Hint 2</summary>

Compare the trivial and sign representations of S_3 over C.

</details>
<details>
<summary>Full solution</summary>

Schur's lemma makes any nonzero G-map an isomorphism, so the dimensions agree. Conversely, the trivial and sign complex representations of S_3 both have dimension one but are nonisomorphic: a transposition acts by 1 on one and −1 on the other. An intertwiner scalar a must satisfy a=−a and hence a=0. Equal dimensions do not impose equivariance.

</details>

### REP-03-02 — The algebraic-closure step

Identify the exact step that fails in the scalar proof over R, using the operator J on the irreducible real C_3 plane.

<details>
<summary>Hint 1</summary>

Write the characteristic polynomial of J.

</details>
<details>
<summary>Hint 2</summary>

The argument needs a scalar λ in the base field with nonzero ker(J−λI).

</details>
<details>
<summary>Full solution</summary>

The characteristic polynomial is x²+1, which has no real root. Thus no λ∈R makes J−λI singular. The division-ring form still says that every nonzero commuting map is invertible, and J indeed is invertible with inverse −J. The scalar proof cannot begin its eigenvalue argument over R, so J need not be a real scalar. Over C it has eigenvalues, but the complexified representation is no longer irreducible.

</details>

### REP-03-03 — Multiplicities from Hom

For pairwise nonisomorphic complex irreducibles A,B,C and V=A⊕A⊕B^(⊕3), calculate Hom_G(A,V), Hom_G(V,C) and End_G(V) as vector spaces.

<details>
<summary>Hint 1</summary>

Each matching irreducible pair contributes one scalar.

</details>
<details>
<summary>Hint 2</summary>

For endomorphisms count all ordered pairs of equal-type copies.

</details>
<details>
<summary>Full solution</summary>

Hom_G(A,V)≅C² because the two A inclusions supply its only nonzero components. Hom_G(V,C)=0 because no summand is isomorphic to C. Finally End_G(V)≅M_2(C)×M_3(C), so as a vector space it has dimension 4+9=13. The degree of A or B does not enter these dimensions.

</details>

### REP-03-04 — Canonical types, noncanonical copies

Let V=S⊕S for a complex irreducible S. Show that the diagonal {(v,v)} is invariant, and find an equivariant complement distinct from either coordinate choice when possible.

<details>
<summary>Hint 1</summary>

Use scalar linear combinations of the two coordinates.

</details>
<details>
<summary>Hint 2</summary>

The antidiagonal is disjoint from the diagonal in characteristic zero.

</details>
<details>
<summary>Full solution</summary>

The diagonal is invariant because g(v,v)=(gv,gv). The antidiagonal {(v,−v)} is also invariant. Their intersection has v=−v, hence v=0 over C. Every (x,y) is the sum of ((x+y)/2,(x+y)/2) and ((x−y)/2,−(x−y)/2), so they form a direct sum. Both are copies of S. The isotypic component is all V, but its individual embedded copies are not uniquely selected.

</details>

### REP-03-05 — Abelian irreducibles

Prove every complex irreducible of C_n is one-dimensional and list all of them.

<details>
<summary>Hint 1</summary>

The generator is central, so acts by a scalar.

</details>
<details>
<summary>Hint 2</summary>

Its scalar must satisfy λ^n=1.

</details>
<details>
<summary>Full solution</summary>

By Schur the generator acts as λI. Every line is invariant, so irreducibility forces dimension one. The group relation requires λ^n=1, giving λ=exp(2πij/n) for j=0,…,n−1. Each defines a representation by r^a↦λ^a. Two such one-dimensional representations are isomorphic only if their generator scalars agree, since a nonzero intertwiner a satisfies aλ=μa. Thus the list contains exactly n distinct irreducibles.

</details>

### REP-03-06 — A modular abelian boundary

Over an algebraically closed field of characteristic p, classify the irreducibles of C_p and exhibit a nonsemisimple two-dimensional representation.

<details>
<summary>Hint 1</summary>

Use x^p−1=(x−1)^p.

</details>
<details>
<summary>Hint 2</summary>

For N²=0, compute (I+N)^p.

</details>
<details>
<summary>Full solution</summary>

Abelian irreducibles are one-dimensional. Their generator scalar satisfies λ^p=1, forcing λ=1, so only the trivial irreducible exists. Let N=[[0,1],[0,0]] and A=I+N. The binomial theorem in characteristic p gives A^p=I+N^p=I since p≥2 and N²=0. Thus A defines a C_p action. Its unique eigenline is ke_1, so it has no invariant complementary line and is not a sum of trivial irreducibles. Schur remains valid although Maschke fails.

</details>

### REP-03-07 — Central scalars

Let V be a complex irreducible, and let z∈Z(G) have order two. Prove ρ(z)=I or −I. If z belongs to the kernel, what follows about quotienting?

<details>
<summary>Hint 1</summary>

Apply Schur and then the group relation.

</details>
<details>
<summary>Hint 2</summary>

Use the factorisation of x²−1 over C.

</details>
<details>
<summary>Full solution</summary>

Centrality makes ρ(z) equivariant, so ρ(z)=λI. Its square is I, hence λ²=1 and λ=±1. If z acts as I, the whole subgroup ⟨z⟩ lies in the representation kernel and the action factors through G/⟨z⟩. Irreducibility is unchanged because invariant subspaces depend on the same collection of action operators.

</details>

### REP-03-08 — Centraliser of a multiplicity-free representation

Show that a completely reducible complex V has commutative End_G(V) exactly when every irreducible multiplicity is at most one.

<details>
<summary>Hint 1</summary>

Use the product of matrix algebras from Theorem 3.6.

</details>
<details>
<summary>Hint 2</summary>

For m≥2, compare E_11E_12 and E_12E_11 in M_m(C).

</details>
<details>
<summary>Full solution</summary>

End_G(V) is a product of M_(m_i)(C). When every nonzero m_i=1, each factor is C and the product is commutative. If some m_i≥2, its elementary matrices satisfy E_11E_12=E_12 but E_12E_11=0, so that factor, and therefore the product, is noncommutative. The zero representation gives an empty product convention and is multiplicity-free as well.

</details>

### REP-03-09 — Real multiplicity correction

For the irreducible real C_3 plane S and V=S^(⊕3), compute dim_R Hom_G(S,V) and dim_R End_G(V).

<details>
<summary>Hint 1</summary>

Each map S→S is aI+bJ.

</details>
<details>
<summary>Hint 2</summary>

The endomorphism ring is a 3×3 matrix algebra over C, viewed over R.

</details>
<details>
<summary>Full solution</summary>

Hom_G(S,V) is three copies of End_G(S)≅C, so has real dimension six. Its right-C dimension is three, the correct multiplicity. End_G(V)≅M_3(C) as real algebras and therefore has real dimension eighteen. Counting real dimensions without the two-dimensional division-algebra correction would misidentify the multiplicity.

</details>

### REP-03-10 — The quaternionic commutant

For Q_8 acting on H by left multiplication, show that every nonzero equivariant endomorphism is invertible and explain the reversed multiplication order in its right-multiplication model.

<details>
<summary>Hint 1</summary>

Every equivariant T is x↦xb with b=T(1).

</details>
<details>
<summary>Hint 2</summary>

Compute R_b(R_c(x)).

</details>
<details>
<summary>Full solution</summary>

If T≠0, its parameter b is nonzero and hence invertible in H. Right multiplication by b^(−1) is an equivariant inverse. For composition, R_bR_c(x)=(xc)b=x(cb)=R_(cb)(x). Thus b↦R_b reverses products and identifies the commutant with H^op, not directly with H under this assignment. Quaternion conjugation is an anti-isomorphism H→H, yielding an algebra isomorphism H→H^op if desired.

</details>

### REP-03-11 — Isotypic functoriality

If V,W are completely reducible and T:V→W is a G-map, prove T(V[S])⊆W[S].

<details>
<summary>Hint 1</summary>

Describe V[S] using images of maps out of S.

</details>
<details>
<summary>Hint 2</summary>

Compose each such map with T.

</details>
<details>
<summary>Full solution</summary>

Every vector of V[S] is a finite sum of vectors f(s), where f:S→V is equivariant. Then T(f(s))=(T∘f)(s), and T∘f is an equivariant map S→W. Its image belongs to W[S] by definition. Taking sums proves the inclusion. This formulation avoids choosing irreducible decompositions and shows that isotypic subspaces are intrinsic.

</details>

### REP-03-12 — A Hom-space criterion for equivalence

For completely reducible complex V,W, prove V≅W exactly when dim Hom_G(S,V)=dim Hom_G(S,W) for every irreducible S.

<details>
<summary>Hint 1</summary>

Interpret both dimensions as multiplicities.

</details>
<details>
<summary>Hint 2</summary>

Only finitely many irreducibles occur in either representation.

</details>
<details>
<summary>Full solution</summary>

An isomorphism induces an isomorphism of the Hom spaces by composition, proving necessity. Conversely, complete reducibility expresses V and W as finite sums of irreducibles. Theorem 3.4 identifies the displayed Hom dimensions with their multiplicities. Equal dimensions for every S therefore give matching numbers of copies of each isomorphism class. Pair those copies and choose equivariant isomorphisms between matched summands; their direct sum is an isomorphism V→W.

</details>

## 10. Summary and next connection

Schur's lemma identifies the equivariant endomorphisms of an irreducible as a division ring, and as scalars over an algebraically closed field. It makes multiplicities intrinsic and describes the centraliser of a completely reducible representation through its repeated copies. Real and quaternionic examples show why the coefficient field remains essential. In [Characters and Orthogonality](characters-and-orthogonality.md), averaging on Hom spaces will turn these map dimensions into computable trace inner products.
