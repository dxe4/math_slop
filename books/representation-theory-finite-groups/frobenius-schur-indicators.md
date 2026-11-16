
# Frobenius–Schur Indicators

A real-valued complex character need not come from real matrices of the same degree. The two-dimensional irreducibles of D_4 and Q_8 have identical ordinary character rows, but one has a real form and the other has quaternionic type. The missing information is encoded by an average involving squares of group elements.

Read [Schur's lemma over R and C](schurs-lemma.md) and [character orthogonality](characters-and-orthogonality.md). G is finite and V is a nonzero irreducible complex representation, of degree d and character χ, unless a different scope is stated. A real form means a real G-space V_R with C⊗_R V_R≅V as complex representations. It has real dimension d, rather than 2d.

## 1. Duality and invariant bilinear forms

The dual action on V^*=Hom_C(V,C) is (gφ)(v)=φ(g^(−1)v). Its character is χ_(V*)(g)=χ(g^(−1))=\overline{χ(g)}. Character classification therefore gives
$$V\cong V^*\quad\Longleftrightarrow\quad\chi
\text{ is real-valued}.$$

The dual of an irreducible is irreducible: a proper nonzero invariant dual subspace would have a proper nonzero invariant annihilator in V, contradicting irreducibility. A bilinear form b:V×V→C is invariant if b(gv,gw)=b(v,w). It corresponds to an equivariant map V→V^* by v↦b(v,−): equivariance follows by replacing w with g^(−1)w in the invariance identity. Thus an invariant form exists nontrivially exactly when V is self-dual.

Its left and right radicals are invariant subspaces. For irreducible V a nonzero invariant form is therefore nondegenerate. Schur's lemma also says the space of invariant bilinear forms is one-dimensional. Transposing b gives another invariant form b^t(v,w)=b(w,v), so b^t=εb for a scalar ε. Transposing twice gives ε²=1. Over C, ε is 1 or −1. The first case is symmetric and the second alternating, since b(v,v)=−b(v,v) implies b(v,v)=0.

A nondegenerate alternating form forces d even. In a basis its matrix B satisfies B^t=−B, so det B=det(−B)=(-1)^d det B. Since det B≠0, d must be even. This elementary parity fact will also follow from the antilinear operator description.

## 2. An average that detects symmetry

**Definition 10.1.** The Frobenius–Schur indicator is
$$\nu(V)=\frac1{|G|}\sum_{g\in G}\chi(g^2).$$
This is not the average of χ(g)²: the square is inside the character argument.

Let τ:V⊗V→V⊗V exchange the two factors, τ(v⊗w)=w⊗v. The group acts diagonally by ρ(g)⊗ρ(g), and τ commutes with that action. The Reynolds projector
$$P=\frac1{|G|}\sum_g\rho(g)\otimes\rho(g)$$
has image (V⊗V)^G and commutes with τ.

**Lemma 10.2.** For any endomorphism A of V,
$$\operatorname{tr}\bigl(\tau(A\otimes A)\bigr)=\operatorname{tr}(A^2).$$

*Proof.* In a basis e_i⊗e_j, the coefficient on the same basis vector after τ(A⊗A) is A_ji A_ij. Summing over i,j gives Σ_i(A²)_ii=tr A². ∎

Consequently tr(τP)=ν(V). Because V⊗V=im P⊕ker P and τ preserves both summands, τP acts as τ on the invariant subspace and as zero on ker P. Hence ν(V) is the trace of the swap on (V⊗V)^G.

The canonical isomorphism V⊗V→Hom(V^*,V) sends v⊗w to the map φ↦φ(w)v. It is G-equivariant. Thus
$$(V\otimes V)^G\cong\operatorname{Hom}_G(V^*,V).$$
Schur makes this space zero-dimensional when V is not self-dual and one-dimensional when it is. In the latter case τ has eigenvalue ±1.

**Theorem 10.3 (Indicator theorem).**
$$
\nu(V)=
\begin{cases}
0,&V\not\cong V^*,\\
1,&V\text{ has a nondegenerate invariant symmetric bilinear form},\\
-1,&V\text{ has a nondegenerate invariant alternating bilinear form}.
\end{cases}
$$

*Proof.* The trace calculation gives zero in the non-self-dual case. In the self-dual case the invariant tensor corresponds to an invertible map V^*→V. In coordinates let its matrix be C. The swap transposes C, while the corresponding nondegenerate bilinear form on V has matrix C^(−1). If C^t=εC, then (C^(−1))^t=εC^(−1), with the same ε=±1. Thus the swap's eigenvalue equals the symmetry sign of the invariant form. ∎

This argument proves the indicator values rather than assuming they must be integers. For a reducible representation, the average remains additive but need not lie in {−1,0,1}.

## 3. Symmetric type gives a real form

Choose an invariant positive-definite Hermitian product h, linear in its first argument, by averaging. A bilinear form b determines a unique antilinear operator J through
$$b(v,w)=h(v,Jw).$$
In coordinates, the Hermitian product identifies antilinear operators with bilinear forms. Invariance of both forms shows J commutes with every ρ(g). Since b is nondegenerate, J is invertible.

The map J² is complex-linear and equivariant, so J²=cI by Schur. Associativity gives J(J²v)=J²(Jv), hence \bar c Jv=cJv and c is real. If b(w,v)=εb(v,w), substitute w=Jv to obtain
$$h(Jv,Jv)=\varepsilon h(v,J^2v)
=\varepsilon c\,h(v,v).$$
Positive definiteness makes εc>0. Rescaling J by a positive real scalar makes J²=εI. The same symmetry identity then gives h(Jv,Jw)=h(w,v), so the normalised J is antiunitary.

Suppose ε=1. Let V_R={v:Jv=v}. It is a real vector space invariant under G. Every v has the unique expression
$$v=\frac{v+Jv}{2}
+i\frac{v-Jv}{2i},$$
with both displayed real components fixed by J. Uniqueness follows because a vector fixed by J and also in iV_R must be its own negative. Thus V=V_R⊕iV_R over R, giving a real form.

Conversely, if V comes from a real representation, average a positive-definite real inner product on that real space and extend it complex-bilinearly. The extension is nondegenerate, symmetric and G-invariant. Therefore ν(V)=1. This proves that the positive indicator is exactly the real-form case.

## 4. Alternating type and quaternionic structure

If ε=−1, the normalised commuting antilinear operator has J²=−I. No real form can exist, since a real form would supply a symmetric invariant form and the one-dimensional invariant-form space cannot contain both nonzero symmetry types.

Multiplication by i defines a real operator I on the underlying real space. Antilinearity gives JI=−IJ, while I²=J²=−I_identity. Thus I and J satisfy the quaternion relations. This is the reason for the term quaternionic type. It refers to a commuting quaternionic structure on the underlying real representation, not to matrices whose entries must literally be written as quaternions.

Parity follows again: write J=A followed by coordinatewise complex conjugation. Then A\bar A=−I_d, so |det A|²=(-1)^d. The left side is positive, forcing even d.

For completeness, the underlying real representation is irreducible in both the complex type ν=0 and the quaternionic type ν=−1. If U is a nonzero invariant real subspace, its complex span is all V by complex irreducibility. The intersection U∩iU is a complex invariant subspace. If it is V, then U=V as a real space. Otherwise it is zero, and U⊕iU=V makes U a real form, which is impossible in these two types. Thus no proper nonzero U exists. In the real type ν=1, the underlying real representation instead splits as two copies V_R⊕iV_R.

## The real commuting algebras

The three types also recover the division algebras encountered in Chapter 3. Let V_under be V with only its real scalar multiplication retained, and let I be multiplication by i. Every real-linear operator T has a unique decomposition
$$T=A+B,\qquad A=\frac{T-ITI}{2},\quad B=\frac{T+ITI}{2},$$
where A commutes with I and is complex-linear, while B anticommutes with I and is antilinear. If T commutes with G, both pieces do too, since I commutes with the complex G-action.

By complex Schur, A is a complex scalar. The space of equivariant antilinear operators identifies with Hom_G(\bar V,V). An invariant Hermitian product identifies \bar V with V^*: the conjugate vector represented by v maps to the functional h(−,v), with its conjugate-space scalar convention. Therefore this Hom space is zero in complex type and one-dimensional over C in either self-dual type. When it is nonzero, choose the normalised J above; every antilinear piece is a complex scalar times J, because composing with J^(−1) is complex-linear and equivariant.

Thus in complex type End_G,R(V_under)=C. In quaternionic type it consists of z+wJ with z,w∈C and relations J²=−1, Jz=\bar zJ, the quaternion algebra H. These are division algebras, consistently with the proved real irreducibility.

In real type the same description has J²=1 and is isomorphic to M_2(R): represent z=a+bi by [[a,−b],[b,a]] and J by diag(1,−1). These four real basis operators span every real 2×2 matrix and satisfy the required relations. This algebra is not a division algebra, consistently with V_under splitting as two copies of its real form. The distinction between an irreducible complex space and its underlying real space is essential in this last statement.

The argument also verifies that no real irreducibility claim was inferred merely from a real-valued trace. It was the absence of a real form in types zero and minus one, followed by the invariant-subspace argument, that established it.

The associated real irreducibles have the following dimensions and complexifications:

| Complex type of V | Associated real space | Real dimension | Its complexification |
|---|---|---:|---|
| ν=1 | the real form V_R | d | V |
| ν=0 | V with scalars forgotten | 2d | V⊕\bar V |
| ν=−1 | V with scalars forgotten | 2d | V⊕V |

For the last two rows, complexifying the underlying real space splits according to the ±i eigenspaces of the complexified multiplication operator I. These identify with V and \bar V. In quaternionic type, self-duality identifies \bar V with V. Thus the repeated complex constituent in the last row is compatible with real irreducibility; complexification changes the coefficient field and its decomposition problem.

## 5. Worked example: a complex line for C_3

Let r act on C by ω=exp(2πi/3). Its character values are (1,ω,ω²). Squaring permutes r and r², so
$$\nu=\frac{1+\omega^2+\omega}{3}=0.$$
The dual line has scalar ω² and is nonisomorphic to the original. Its character is not real-valued, so it cannot have a real form of degree one.

Forgetting complex multiplication gives a two-dimensional irreducible real rotation representation. Complexifying that real plane produces the sum of the two conjugate lines, rather than recovering just the original line. This explains why an action can be realised by real matrices after changing the dimension even when it has no real form in the specified sense.

The trivial C_3-line has indicator one. Thus the complex regular representation, the sum of all three lines, has indicator one by additivity. The indicator is a type detector for irreducibles and should not be read as a degree count for arbitrary sums.

## 6. Worked example: the real dihedral plane

For D_4, the degree-two character θ has values 2 at e, −2 at r² and zero elsewhere. Among the eight group elements, e,r² and the four reflections square to e, while r,r³ square to r². Hence
$$\nu(\theta)=\frac{6\cdot2+2\cdot(-2)}8=1.$$
The ordinary planar rotation and reflection matrices are real, giving a real form. The Euclidean dot product extends to the invariant symmetric complex bilinear form.

The power map was part of this calculation. Reading only the five ordinary table columns, without knowing where squares land, would not determine the sum. A full character-table data structure can store power maps as additional information; the ordinary matrix of character values does not automatically contain them.

## 7. Worked example: the quaternionic Q_8 plane

For the complex Q_8 representation use
$$A=\rho(i)=\begin{pmatrix}i&0\\0&-i\end{pmatrix},
\qquad
B=\rho(j)=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.$$
The centre {±1} squares to 1, and the other six elements square to −1. Therefore
$$\nu=\frac{2\cdot2+6\cdot(-2)}8=-1.$$
An invariant alternating form has matrix B: a direct calculation gives A^tBA=B and B^tBB=B. Its skew symmetry is immediate.

Define J(v)=B\bar v. Since B is real and B²=−I, J²=−I. Also B\bar A=AB and B\bar B=BB, so J commutes with both generators and hence with Q_8. This exhibits the quaternionic structure directly. Its character is real valued, but a two-dimensional real form cannot exist. Its underlying real representation is the four-dimensional irreducible quaternionic example from Chapter 3.

The quaternionic case also explains why forgetting complex scalars changes dimension. For the degree-two quaternion representation, regard its complex vector space as a real space of dimension four. Complexifying that real action gives the direct sum of the original complex representation and its conjugate, hence two copies of the same irreducible. Any proper nonzero real invariant subspace would complexify to a nonzero proper semisimple subrepresentation. Its dimension must then be two, since every constituent has complex dimension two. It would supply a two-dimensional real form of the quaternion representation, which the indicator obstruction forbids. Therefore the underlying four-dimensional real representation is irreducible. This gives an explicit representation with a real character but a necessary doubling when realised irreducibly over the real field.

## 8. Exercises

### REP-10-01 — Dual characters

Prove V≅V^* exactly when its complex character is real-valued.

<details>
<summary>Hint 1</summary>

The dual action has character χ(g^(−1)).

</details>
<details>
<summary>Hint 2</summary>

Characters classify complex representations of finite groups.

</details>
<details>
<summary>Full solution</summary>

The dual character is χ_(V*)(g)=χ_V(g^(−1))=\overline{χ_V(g)}. If V≅V^*, their characters agree, so χ_V equals its conjugate at every g. Conversely a real-valued χ_V equals χ_(V*), so character classification gives an isomorphism. This implication holds for reducible complex representations too, although the one-dimensional form-space conclusion requires irreducibility.

</details>

### REP-10-02 — The swap trace

For matrices A,B on V, prove tr(τ(A⊗B))=tr(AB).

<details>
<summary>Hint 1</summary>

Use e_i⊗e_j as a basis.

</details>
<details>
<summary>Hint 2</summary>

Its diagonal coefficient is A_ji B_ij.

</details>
<details>
<summary>Full solution</summary>

The image of e_i⊗e_j under A⊗B is Σ_(a,b)A_ai B_bj e_a⊗e_b. After swapping, the coefficient of e_i⊗e_j is A_ji B_ij. Summing i,j yields tr(AB). Taking A=B=ρ(g) gives trρ(g)² as the operator-square trace, namely χ(g²), rather than the scalar square χ(g)².

</details>

### REP-10-03 — Nondegeneracy

Show any nonzero invariant bilinear form on an irreducible complex representation is nondegenerate.

<details>
<summary>Hint 1</summary>

Its left radical is invariant.

</details>
<details>
<summary>Hint 2</summary>

If that radical were all V, the form would be zero.

</details>
<details>
<summary>Full solution</summary>

Let R={v:b(v,w)=0 for every w}. For v∈R, b(gv,w)=b(v,g^(−1)w)=0, so R is invariant. Irreducibility makes it zero or V. Since the form is nonzero it is not V, hence R=0. The associated map V→V^* is injective and, by equal finite dimensions, bijective. Thus the right radical is zero as well.

</details>

### REP-10-04 — The two symmetry signs

Prove a one-dimensional space of nonzero invariant bilinear forms on irreducible V has exactly one symmetry type.

<details>
<summary>Hint 1</summary>

Transposition preserves the space and squares to the identity.

</details>
<details>
<summary>Hint 2</summary>

Over C its scalar eigenvalue is ±1.

</details>
<details>
<summary>Full solution</summary>

For a nonzero b, write b^t=εb. Transposing twice gives b=ε²b, so ε²=1 and ε=±1. If ε=1 it is symmetric; if ε=−1 it is alternating. Every other invariant form is a scalar multiple of b and has the same ε. The two types cannot coexist nontrivially because that would make the one-dimensional form space have two different transpose eigenvalues.

</details>

### REP-10-05 — Real fixed vectors

If J is an antilinear involution on V, prove V=V_R⊕iV_R over R for V_R={v:Jv=v}.

<details>
<summary>Hint 1</summary>

Use (v+Jv)/2 and (v−Jv)/(2i).

</details>
<details>
<summary>Hint 2</summary>

Antilinearity conjugates the scalar 1/(2i).

</details>
<details>
<summary>Full solution</summary>

Both u=(v+Jv)/2 and w=(v−Jv)/(2i) satisfy Ju=u and Jw=w, and v=u+iw. If u=iw with u,w fixed, then applying J gives u=−iw=−u, so u=w=0. Hence the decomposition is unique and direct. If J commutes with G, both real summands are G-invariant and the first is a real form.

</details>

### REP-10-06 — Even quaternionic degree

For an antilinear J with J²=−I on C^d, prove d is even by determinants.

<details>
<summary>Hint 1</summary>

Write J(v)=A\bar v.

</details>
<details>
<summary>Hint 2</summary>

Then A\bar A=−I.

</details>
<details>
<summary>Full solution</summary>

Composition gives J²(v)=A\bar A v, so A\bar A=−I_d. Taking determinants yields det A·\overline{det A}=(-1)^d. The left side is |det A|²>0 because J is invertible. Thus (-1)^d is positive and d is even. This conclusion does not require choosing a symplectic basis.

</details>

### REP-10-07 — Linear characters

For a one-dimensional character λ, prove its indicator is one if λ² is trivial and zero otherwise.

<details>
<summary>Hint 1</summary>

The indicator is the average of the character λ².

</details>
<details>
<summary>Hint 2</summary>

A nontrivial linear character has zero average.

</details>
<details>
<summary>Full solution</summary>

Since λ(g²)=λ(g)², ν(λ) is the average of λ². If λ²=1 the average is one. Otherwise choose h with λ(h)²≠1; multiplying the group sum by λ(h)² merely reindexes it, forcing the sum to be zero. A linear irreducible therefore never has indicator −1, consistent with the even-degree restriction for quaternionic type.

</details>

### REP-10-08 — D_4 and Q_8

Compute the degree-two indicators in both groups from their square maps.

<details>
<summary>Hint 1</summary>

In D_4 six elements square to e and two to r².

</details>
<details>
<summary>Hint 2</summary>

In Q_8 two elements square to 1 and six to −1.

</details>
<details>
<summary>Full solution</summary>

Both degree-two characters take values 2 at the identity and −2 at the other central element. Thus D_4 gives [6·2+2·(−2)]/8=1, while Q_8 gives [2·2+6·(−2)]/8=−1. The ordinary arrays match, but the power-map contribution differs. The first irreducible has a real form; the second has quaternionic type.

</details>

### REP-10-09 — Additivity is not trichotomy

Show ν(V⊕W)=ν(V)+ν(W), and give a reducible representation with indicator two.

<details>
<summary>Hint 1</summary>

Characters add before averaging.

</details>
<details>
<summary>Hint 2</summary>

Use two trivial lines.

</details>
<details>
<summary>Full solution</summary>

For every g, χ_(V⊕W)(g²)=χ_V(g²)+χ_W(g²). Averaging gives additivity. Two trivial lines have constant character two, so their indicator is two. Hence the values −1,0,1 form a trichotomy only for nonzero irreducibles, not for arbitrary representations. In general the value is a signed sum of multiplicities of self-dual irreducibles.

</details>

### REP-10-10 — Real-valued is insufficient

Explain precisely why the Q_8 degree-two character disproves “real-valued character implies real form.”

<details>
<summary>Hint 1</summary>

Its values are 2,−2,0.

</details>
<details>
<summary>Hint 2</summary>

A real form would produce a symmetric invariant bilinear form.

</details>
<details>
<summary>Full solution</summary>

The character is real-valued, so the representation is self-dual and has some nonzero invariant bilinear form. Its indicator is −1, so the unique form type is alternating. A real form would permit averaging a positive-definite real inner product and extending it complex-bilinearly, producing a symmetric invariant form. That contradicts uniqueness of the alternating type. Real-valuedness ensures self-duality, while the positive indicator is the stronger real-form condition.

</details>

### REP-10-11 — Symmetric and exterior squares

Show ν(V)=dim(Sym²V)^G−dim(Λ²V)^G.

<details>
<summary>Hint 1</summary>

The swap has +1 and −1 eigenspaces.

</details>
<details>
<summary>Hint 2</summary>

Project by (I±τ)/2, which commute with the G-action.

</details>
<details>
<summary>Full solution</summary>

In characteristic zero, V⊗V is the direct sum of the symmetric and alternating tensor subspaces, the ±1 eigenspaces of τ. Taking G-fixed vectors respects this direct sum because both projectors commute with G. The trace of τ on the fixed space is therefore the dimension of its symmetric fixed part minus that of its alternating fixed part. The earlier trace formula identifies that trace with ν(V). This identity holds for reducible V as well.

</details>

### REP-10-12 — Involutions and indicators

Using the regular character decomposition, prove the number of solutions of g²=e equals Σ_i ν(S_i)dim S_i.

<details>
<summary>Hint 1</summary>

Average χ_reg(g²).

</details>
<details>
<summary>Hint 2</summary>

The regular character is |G| at e and zero elsewhere.

</details>
<details>
<summary>Full solution</summary>

The average |G|^(−1)Σ_gχ_reg(g²) counts exactly the elements whose square is e. Since χ_reg=Σ_i d_iχ_i, linearity makes the same average Σ_i d_iν(S_i). For D_4 all four linear indicators and the degree-two indicator are one, giving 4+2=6 solutions, including e. For Q_8 the last indicator is −1, giving 4−2=2. Thus the formula counts the identity together with involutions, not only elements of exact order two.

</details>

## 9. Summary and next connection

The indicator is the swap trace on invariant tensors. It detects absence of self-duality, symmetric real type or alternating quaternionic type. A positive indicator is equivalent to a real form; a negative one gives a commuting antilinear square root of −I. These distinctions require the square map as well as ordinary character values. The next chapter develops [tensor products and the representation ring](tensor-products-representation-ring.md), including the symmetric and exterior constructions used here.
