
# Representations and Examples

A square has rotations and reflections, but its symmetries also act on vertex labels, on planar displacement vectors and on functions on its vertices. These are different linear actions of the same group. Representation theory studies such actions, the subspaces they preserve and the maps that compare them. Before taking traces, we need to distinguish the abstract group from the space on which it acts.

The preparation is [linear maps and invariant subspaces](#/books/linear-algebra-structure-proofs/invariant-subspaces-block-forms) and [group actions](#/books/algebra-patterns-structure/group-actions-orbits-counting). Fix a field k and a finite group G. All vector spaces in this chapter are finite-dimensional over k. The field will be stated in every example: changing it can change irreducibility.

## 1. Linear actions and their coordinates

**Definition 1.1.** A representation of G on V is a homomorphism
$$\rho:G\longrightarrow GL_k(V).$$
Its degree is dim_k V. We write gv for ρ(g)v. Thus ev=v, (gh)v=g(hv), and the map v↦gv is linear for each g. The zero-dimensional representation is allowed, although it will never be called irreducible.

Every operator ρ(g) is invertible, with inverse ρ(g^(−1)). This is a consequence of the group law, rather than an additional computation for each matrix. Conversely, assigning arbitrary invertible matrices to group elements is insufficient: the multiplication law must hold.

For a presented group G=⟨s_1,…,s_t | R_1,…,R_m⟩, matrices A_i define a representation exactly when every relation R_j becomes the identity matrix on substitution. Indeed, substitution first defines a homomorphism from the free group. It factors through G precisely when its kernel contains the normal closure of the relators. Checking relations proves that two different words naming the same group element act identically.

If a basis changes by the invertible coordinate matrix P, every representing matrix changes simultaneously to P^(−1)ρ(g)P. A separate unrelated conjugation for each group element does not generally define a change of representation coordinates. The same P must work for all g.

**Definition 1.2.** The kernel of a representation is
$$\ker\rho=\{g\in G:\rho(g)=I_V\}.$$
The representation is faithful when this kernel is {e}. It then embeds G as a matrix group. Faithfulness says that group elements remain distinguishable; it says nothing about the presence of invariant subspaces.

**Proposition 1.3.** The kernel is normal, and ρ factors through a faithful representation of G/kerρ on the same V.

*Proof.* If n acts as the identity, then ρ(gng^(−1))=ρ(g)Iρ(g)^(−1)=I, so conjugation preserves the kernel. Define the quotient action by (g kerρ)v=ρ(g)v. It is well defined because changing g by a kernel element does not change the operator. Its kernel is the identity coset. ∎

The trivial representation on k has every element act by 1. The sign representation of S_n on k has σ act by sgn(σ), interpreted as a scalar in k. In characteristic two these scalars coincide, so sign and trivial are the same representation there. One-dimensional representations are precisely homomorphisms G→k^×; they may be far from faithful.

## 2. Subrepresentations, quotients and maps

**Definition 1.4.** A subrepresentation is a linear subspace U≤V satisfying ρ(g)U⊆U for every g. Because inverses are included, this implies ρ(g)U=U. A representation is irreducible if V≠0 and its only invariant subspaces are 0 and V.

To check invariance it suffices to check a set of group generators and their inverses. In finite dimension, if an invertible operator carries U into U, its restriction is injective and hence surjective on U; its inverse therefore preserves U too. Thus checking the chosen generators alone suffices in our setting.

If U is invariant, define g(v+U)=gv+U on V/U. For v−v'∈U, invariance gives gv−gv'∈U, proving well-definedness. The quotient map q:V→V/U is equivariant. However, a vector-space complement of U need not be invariant. In a basis beginning with U, action matrices have the form
$$\rho(g)=\begin{pmatrix} A(g)&B(g)\\0&C(g)\end{pmatrix}.$$
The diagonal blocks describe U and V/U; the off-diagonal block records how the chosen complement fails to be a subrepresentation.

**Definition 1.5.** An intertwiner or G-map T:V→W is a k-linear map satisfying
$$T\rho_V(g)=\rho_W(g)T\qquad(g\in G).$$
Write Hom_G(V,W) for their vector space. An isomorphism of representations is an invertible intertwiner. The inverse is automatically equivariant, by rearranging the displayed identity.

**Theorem 1.6 (Equivariant kernel and image).** For a G-map T, ker T and im T are invariant. Moreover, the linear first isomorphism V/ker T→im T is an isomorphism of representations.

*Proof.* If Tv=0 then T(gv)=gTv=0, proving kernel invariance. If w=Tv, then gw=T(gv) belongs to the image. The ordinary first-isomorphism map sends v+ker T to Tv. It is well defined and bijective by linear algebra, and sends g(v+ker T) to T(gv)=gTv, proving equivariance. ∎

Representations V and W have a direct sum with diagonal action g(v,w)=(gv,gw). The inclusion and projection maps are equivariant. A decomposition V=U⊕W requires both summands invariant and every vector uniquely expressible as u+w. A mere dimension equation dim V=dim U+dim W supplies neither invariance nor the decomposition map.

## 3. Permutation and regular representations

Let X be a finite G-set. Define k[X] as the vector space with basis {e_x:x∈X} and action ge_x=e_(gx), extended linearly. The G-set law verifies the representation law on every basis vector and therefore everywhere. Its matrices permute basis columns.

The action on coefficient functions f:X→k is often written
$$(g f)(x)=f(g^{-1}x).$$
This inverse is necessary for a left action: g(hf)(x)=f(h^(−1)g^(−1)x)=f((gh)^(−1)x). Identifying e_x with the delta function at x gives the same permutation representation. The tempting formula f(gx) reverses the product order in general.

The vector u_X=Σ_(x∈X)e_x is fixed. The augmentation map
$$\epsilon:k[X]\to k,\qquad \epsilon\left(\sum_xa_xe_x\right)=\sum_xa_x$$
is equivariant for the trivial action on k. Consequently its kernel, the augmentation subspace, is invariant.

If |X| is nonzero in k, then ε(u_X)=|X| allows the direct-sum decomposition
$$k[X]=k u_X\oplus\ker\epsilon.$$
Explicitly, v=(ε(v)/|X|)u_X+[v−(ε(v)/|X|)u_X]. If the characteristic divides |X|, the fixed vector lies inside kerε, so this particular decomposition fails.

**Proposition 1.7.** The dimension of the fixed-vector subspace k[X]^G equals the number of G-orbits in X, over every field.

*Proof.* A vector Σ a_xe_x is fixed precisely when a_(gx)=a_x for all g and x. Thus its coefficients must be constant on each orbit, with independent choices on distinct orbits. The orbit-sum vectors have disjoint supports and form a basis. No division by an orbit size is used. ∎

The left regular representation is k[G], with ge_h=e_(gh). It is faithful: if g fixes e_e, then e_g=e_e and g=e. Its dimension is |G|. Except for the one-element group, it contains the proper invariant line spanned by Σ_ge_g, so faithfulness and irreducibility already separate.

## 4. Worked example: the standard action of S_3

Work over C. In C³ let σe_i=e_(σ(i)). The fixed line L=C(1,1,1) and sum-zero plane
$$W=\{(a,b,c):a+b+c=0\}$$
give C³=L⊕W by augmentation. Use the ordered basis v_1=e_1−e_3, v_2=e_2−e_3 of W.

For s=(12), sv_1=v_2 and sv_2=v_1. For t=(123), tv_1=e_2−e_1=−v_1+v_2 and tv_2=e_3−e_1=−v_1. Hence
$$S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
T=\begin{pmatrix}-1&-1\\1&0\end{pmatrix}.$$
Their columns are the images of the basis vectors. These matrices satisfy S²=I, T³=I and STS=T^(−1), matching the presentation of S_3.

To prove W irreducible, suppose it had an invariant line. That line would be an eigenspace of S, whose eigenlines are C(v_1+v_2) and C(v_1−v_2). But T(v_1+v_2)=−2v_1+v_2 and T(v_1−v_2)=v_2, neither in the corresponding line. Thus no invariant line exists. Since a proper nonzero subspace of a plane is a line, W is irreducible.

This proof checks invariance under two operators simultaneously. Each individual complex matrix has an eigenvector; the existence of separate eigenvectors does not produce a common invariant line. That distinction is the first appearance of a recurring representation-theoretic obstruction.

The action is faithful. The three even elements have matrices I,T,T², all distinct. The three odd elements have determinant −1 and cannot equal I. Thus only e acts trivially. Here the same representation happens to be faithful and irreducible, but the two properties required separate arguments.

## 5. Worked example: changing the coefficient field

Let G=C_3=⟨r:r³=e⟩ and let
$$R=\begin{pmatrix}-1/2&-\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}.$$
It is rotation through 120 degrees, so R³=I and defines a real representation on R². Its characteristic polynomial x²+x+1 has discriminant −3 and no real root. A real invariant line would contain an eigenvector with real eigenvalue. Therefore this representation is irreducible over R.

Extend scalars to C without changing the matrix. Now x²+x+1=(x−ω)(x−ω²), with ω=exp(2πi/3). The distinct eigenvalues give C²=E_ω⊕E_(ω²), a sum of two one-dimensional complex representations. The real representation was irreducible; its complexification is reducible.

Conversely, the one-dimensional complex action r↦ω cannot be a one-dimensional real action: its defining scalar is not real. Forgetting complex scalar multiplication turns it into a two-dimensional real action. Extending scalars and forgetting scalars are different operations and change dimensions differently.

This example also explains why the coefficient field belongs in the definition of equivalence. A real change of basis and a complex change of basis solve different classification problems. Later Schur theory will retain this distinction through the ring of commuting endomorphisms.

## 6. Worked example: a nonsplit modular plane

Work over F_2 with G=C_2=⟨g:g²=e⟩. Let
$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$
Since 1+1=0, A²=I, so g↦A defines a representation. The line U=F_2e_1 is invariant, and the quotient V/U is trivial because Ae_2=e_2+e_1.

Nevertheless there is no invariant complement to U. Any other line is generated by ae_1+e_2 for some a∈F_2. Its image is (a+1)e_1+e_2, a different vector. Over F_2 each line has only one nonzero vector, so the image is outside the line.

Equivalently, an invariant complementary line would be a second fixed line, but ker(A−I)=U. Thus both U and V/U are trivial representations while V is not a direct sum of trivial representations. Its action operator is not the identity.

The upper-triangular blocks therefore do not determine the representation: here the off-diagonal entry contains essential information. The next chapter proves that this phenomenon disappears for finite groups when the field characteristic does not divide |G|. The modular chapter eventually studies the extra information rather than suppressing it.

## 7. Constructing maps before classifying actions

For fixed matrices of generators s_i, an intertwiner T is found by solving
$$T\rho_V(s_i)-\rho_W(s_i)T=0$$
as a homogeneous linear system in its entries. These equations are linear even though the representation law itself involves matrix products. If T intertwines every generator, repeated substitution makes it intertwine every word and hence every group element.

This gives a constructive way to compare two specified actions. First determine the entire solution space; then ask whether it contains an invertible map. An arbitrary nonzero solution need not be invertible. It may exhibit a common quotient or subrepresentation instead of an isomorphism.

There is also a useful universal map out of the regular representation. For any v∈V, define T_v:k[G]→V by T_v(e_g)=gv. It is equivariant because T_v(he_g)=T_v(e_(hg))=hgv=hT_v(e_g). Its image is the span of the orbit of v. Every G-map k[G]→V has this form, since its value at e_e determines its value at every e_g. Thus
$$\operatorname{Hom}_G(k[G],V)\cong V$$
as vector spaces, with evaluation at e_e giving the isomorphism. We have not used semisimplicity or algebraic closure.

This observation will later control which irreducibles occur in the regular representation. For now it gives a direct test of whether a vector generates a subrepresentation: take the span of all its group translates. That span is invariant, because translating an orbit only permutes its elements.

## 8. Exercises

### REP-01-01 — Relations give an action

Let R,S∈GL_k(V) satisfy R^n=S²=I and SRS=R^(−1). Explain why they define a representation of D_n.

<details>
<summary>Hint 1</summary>

Use the presentation of D_n, with n rotations and n reflections.

</details>
<details>
<summary>Hint 2</summary>

First substitute into words in the free group on r,s; then examine the relators.

</details>
<details>
<summary>Full solution</summary>

Substitution r↦R,s↦S defines a homomorphism from the free group to GL_k(V). The words r^n, s² and srsr become I, so their normal closure lies in its kernel. The map therefore factors through the presented quotient D_n. Explicitly its values are R^a on r^a and R^aS on r^as. The displayed relations make every product consistent with those normal forms. The representation may have a kernel; the relations alone do not guarantee faithfulness.

</details>

### REP-01-02 — The trivial group and zero space

Classify the representations of the trivial group up to isomorphism. Which are irreducible?

<details>
<summary>Hint 1</summary>

The identity must act as the identity operator.

</details>
<details>
<summary>Hint 2</summary>

Every subspace is invariant, including in dimension zero.

</details>
<details>
<summary>Full solution</summary>

There is one action on each vector space: e acts as I. Two such finite-dimensional actions are isomorphic exactly when their dimensions agree, since every linear map is equivariant. Every one-dimensional action is irreducible. Dimension zero is excluded by definition, and dimension at least two has a proper nonzero line, so is reducible. Thus irreducible does not mean merely having no proper subspace other than zero unless nonzeroness is also required.

</details>

### REP-01-03 — Fixed spaces for a nontransitive action

S_3 acts on X={1,2,3,*}, fixing *. Find a basis of k[X]^G over every field.

<details>
<summary>Hint 1</summary>

List the orbits before writing equations.

</details>
<details>
<summary>Hint 2</summary>

Fixed coefficients must be equal within each orbit, with no relation between distinct orbits.

</details>
<details>
<summary>Full solution</summary>

The two orbits are {1,2,3} and {*}. A vector is fixed precisely when its first three coefficients are equal. Thus e_1+e_2+e_3 and e_* form a basis of the fixed space, independently of characteristic. In characteristic three the first basis vector still exists and is nonzero; its augmentation is zero, but that does not destroy its linear independence from e_*.

</details>

### REP-01-04 — A faithful reducible action

For any nontrivial finite group, prove that the regular representation is faithful and reducible over every field.

<details>
<summary>Hint 1</summary>

Track the basis vector e_e and the sum of all basis vectors.

</details>
<details>
<summary>Hint 2</summary>

The all-ones vector remains nonzero even when the group order vanishes in the field.

</details>
<details>
<summary>Full solution</summary>

If g acts identically, its image of e_e equals e_e. But that image is e_g, so g=e. Hence the action is faithful. The vector u=Σ_he_h is nonzero because its coordinates are all 1, and every group element permutes its terms. Its span is an invariant line. Since |G|>1 this line is proper, proving reducibility. No argument divides by |G|.

</details>

### REP-01-05 — The kernel of a coset action

Find the kernel of G acting by left multiplication on G/H. When is the associated permutation representation faithful?

<details>
<summary>Hint 1</summary>

An element must fix every coset, not only H itself.

</details>
<details>
<summary>Hint 2</summary>

Rewrite xgH=gH as a membership statement in H.

</details>
<details>
<summary>Full solution</summary>

The equality xgH=gH holds exactly when g^(−1)xg∈H. Thus the kernel of the set action is ⋂_g gHg^(−1). A permutation matrix is the identity precisely when it fixes every basis vector, so the linear representation has the same kernel over every field. It is faithful exactly when that intersection, the core of H, is trivial. For example, a subgroup of order two in S_3 has trivial core even though H itself is nontrivial.

</details>

### REP-01-06 — Quotient actions

Let U be invariant in V. Prove that the quotient map is equivariant and that every equivariant T:V→W vanishing on U factors uniquely through an equivariant map V/U→W.

<details>
<summary>Hint 1</summary>

Use the linear quotient map and define the candidate on a coset.

</details>
<details>
<summary>Hint 2</summary>

Compare T(gv) with gT(v) after proving independence of the representative.

</details>
<details>
<summary>Full solution</summary>

The map q satisfies q(gv)=gv+U=g(v+U)=gq(v). Define T̄(v+U)=T(v). If representatives differ by u∈U, their T-values agree since T(u)=0. Then T̄(g(v+U))=T(gv)=gT(v)=gT̄(v+U), proving equivariance. Any factor through q must take v+U to T(v), so uniqueness follows from surjectivity of q. This proves the equivariant universal property without choosing a complement.

</details>

### REP-01-07 — Trace of a permutation

Prove that the trace of a permutation representation equals the number of fixed points, interpreted in k.

<details>
<summary>Hint 1</summary>

Read diagonal entries of the permutation matrix.

</details>
<details>
<summary>Hint 2</summary>

A diagonal entry is 1 precisely when the corresponding basis vector returns to itself.

</details>
<details>
<summary>Full solution</summary>

The column indexed by x has its only 1 in row gx. Its diagonal entry is therefore 1 if gx=x and 0 otherwise. Summing the diagonal gives the fixed-point count mapped from the integers into k. In characteristic p, different integer counts can become the same scalar. Over C the integer is recovered exactly. This distinction matters when characters are later used to identify representations.

</details>

### REP-01-08 — A generator is not the whole group

In the complex S_3 plane of Section 4, find both eigenlines of S and show explicitly that neither is T-invariant.

<details>
<summary>Hint 1</summary>

Solve S(a,b)=(a,b) and S(a,b)=−(a,b).

</details>
<details>
<summary>Hint 2</summary>

Apply T to (1,1) and (1,−1).

</details>
<details>
<summary>Full solution</summary>

The eigenlines are C(1,1) and C(1,−1). Multiplication gives T(1,1)=(−2,1), whose coordinates are unequal, so it is not in the first line. Also T(1,−1)=(0,1), which is not a multiple of (1,−1). Every invariant line would be an eigenline of S and preserved by T, so neither candidate works. This establishes irreducibility of the entire action, although both generators individually have eigenvectors.

</details>

### REP-01-09 — All maps from the regular module

Prove that evaluation at e_e identifies Hom_G(k[G],V) with V, and identify which v give surjective maps.

<details>
<summary>Hint 1</summary>

Equivariance forces T(e_g)=gT(e_e).

</details>
<details>
<summary>Hint 2</summary>

The image is the linear span of the forced basis images.

</details>
<details>
<summary>Full solution</summary>

For v∈V define T_v(e_g)=gv and extend linearly. It is equivariant by the group law. Conversely, any equivariant T has T(e_g)=T(ge_e)=gT(e_e), hence equals T_v for v=T(e_e). These constructions are linear and inverse. The image of T_v is span{gv:g∈G}, so T_v is surjective precisely when the orbit of v spans V. A nonzero vector need not have this property in a reducible representation.

</details>

### REP-01-10 — Dual actions

For V^*=Hom_k(V,k), show that (gφ)(v)=φ(g^(−1)v) defines a representation. If T:V→W is equivariant, show T^*:W^*→V^* is equivariant.

<details>
<summary>Hint 1</summary>

The inverse reverses product order in exactly the needed place.

</details>
<details>
<summary>Hint 2</summary>

Evaluate both sides of the desired identities on an arbitrary v.

</details>
<details>
<summary>Full solution</summary>

For g,h∈G,
g(hφ)(v)=(hφ)(g^(−1)v)=φ(h^(−1)g^(−1)v)=φ((gh)^(−1)v)=((gh)φ)(v).
The identity acts trivially and each map is linear, giving a representation. Since T^*ψ=ψ∘T, we have
T^*(gψ)(v)=ψ(g^(−1)T(v))=ψ(T(g^(−1)v))=(gT^*ψ)(v).
Thus T^* is equivariant. The inverse in the dual action is essential; using φ(gv) would give a right action instead.

</details>

### REP-01-11 — A modular extension

For the F_2 action A in Section 6, compute the fixed space and prove that the action is not isomorphic to two copies of the trivial representation.

<details>
<summary>Hint 1</summary>

Solve (A−I)v=0.

</details>
<details>
<summary>Hint 2</summary>

The dimension of the fixed space is preserved by equivariant isomorphism.

</details>
<details>
<summary>Full solution</summary>

For v=(a,b), (A−I)v=(b,0). Thus V^G={(a,0)} has dimension one. A sum of two trivial representations has every vector fixed, so its fixed space has dimension two. An equivariant isomorphism sends fixed vectors bijectively to fixed vectors; these dimensions cannot differ. Hence the two representations are not isomorphic. The trivial subrepresentation and trivial quotient do not determine the middle action.

</details>

### REP-01-12 — Centralisers as linear equations

For the S_3 matrices S,T of Section 4, compute all complex matrices A satisfying AS=SA and AT=TA.

<details>
<summary>Hint 1</summary>

The equation with S forces equal diagonal entries and equal off-diagonal entries.

</details>
<details>
<summary>Hint 2</summary>

Substitute A=[[a,b],[b,a]] into the equation with T.

</details>
<details>
<summary>Full solution</summary>

Writing A=[[a,b],[c,d]], the first equation gives c=b,d=a. Then
AT=[[-a+b,−a],[−b+a,−b]]
and
TA=[[-a−b,−b−a],[a,b]].
Comparing their upper-left entries gives 2b=0, hence b=0 over C. The remaining entries then agree for every a. Thus A=aI. This explicit calculation anticipates Schur's lemma, but here it follows directly from two generator equations.

</details>

## 9. Summary and next connection

A representation is a linear action over a specified field; intertwiners, invariant subspaces and quotients make its structure accessible. Permutation actions supply fixed vectors and augmentation subspaces, while the regular action connects all vectors to equivariant maps. Faithfulness and irreducibility answer different questions. The examples over R, C and F_2 show why coefficient hypotheses cannot be omitted. In [Maschke’s theorem](maschkes-theorem.md), averaging will turn suitable vector-space complements into invariant complements.
