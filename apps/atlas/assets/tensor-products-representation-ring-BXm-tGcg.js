var e=`---
parent_id: book-representation-theory-finite-groups
chapter_id: tensor-products-representation-ring
title: "Tensor Products and the Representation Ring"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Tensor Products and the Representation Ring

Direct sums add characters; tensor products multiply them. Together they turn the irreducible representations of a finite group into a ring with a distinguished integral basis. Symmetric and exterior powers supply additional operations, which remember more than the multiplication table alone.

Read [characters](characters-and-orthogonality.md) and [the indicator theorem](frobenius-schur-indicators.md). All representations in this chapter are finite-dimensional over C and G is finite. Tensor products are over C. Integer differences of representations are formal virtual objects, not vector spaces of negative dimension.

## 1. The diagonal tensor action

For G-spaces V,W, define
$$g(v\\otimes w)=gv\\otimes gw.$$
The universal property of the tensor product extends the bilinear rule to a linear map. The group law holds on generating pure tensors and hence everywhere. Thus V⊗W is a representation of degree (dim V)(dim W).

In bases, the action matrix is the Kronecker product. Its diagonal entries are products of diagonal entries of the factor matrices, so
$$\\chi_{V\\otimes W}(g)=\\chi_V(g)\\chi_W(g).$$
This formula is independent of basis and does not require the factors to be irreducible.

The flip v⊗w↦w⊗v is equivariant, as are the associativity map (u⊗v)⊗w↦u⊗(v⊗w) and the distributivity maps across direct sums. The trivial line is a tensor identity. These are actual isomorphisms, supplying the laws that will become ring axioms.

There is an equivariant isomorphism
$$V^*\\otimes W\\longrightarrow\\operatorname{Hom}_{\\mathbb C}(V,W),
\\qquad \\phi\\otimes w\\longmapsto[v\\mapsto\\phi(v)w].$$
A pair of bases verifies bijectivity by matching matrix units. Equivariance follows from the dual inverse action and conjugation action on Hom. Thus the earlier Hom-character formula is also a tensor-product formula.

For irreducibles S_i,S_j,S_k the multiplicity of S_k in S_i⊗S_j is
$$N_{ij}^{k}=\\langle\\chi_i\\chi_j,\\chi_k\\rangle_G.$$
It is a nonnegative integer because an actual tensor representation was constructed. Computing a complex sum that happens to be integral is not a substitute for that construction.

## 2. The integral representation ring

**Definition 11.1.** R(G) is the free abelian group on the irreducible isomorphism classes [S_i]. For an actual representation V=⊕_i S_i^(⊕m_i), set [V]=Σ_i m_i[S_i]. Define multiplication by
$$[S_i][S_j]=\\sum_kN_{ij}^{k}[S_k]$$
and extend bilinearly.

Maschke and uniqueness of multiplicities show that this respects direct sums and isomorphisms. The tensor isomorphisms above prove associativity, commutativity, distributivity and the identity [1]. Thus R(G) is a commutative ring, free of finite rank equal to the number of conjugacy classes.

The character map
$$R(G)\\longrightarrow\\{\\text{complex class functions on }G\\}$$
is injective: irreducible characters are linearly independent. It sends addition and multiplication to pointwise operations. Its image consists of integer linear combinations of irreducible characters, the virtual characters. Actual representations correspond exactly to combinations with nonnegative integer coefficients.

The degree map dim:R(G)→Z is a ring homomorphism, since dimensions add and multiply under direct sum and tensor product. Its kernel, the augmentation ideal, contains virtual differences such as [V]−(dim V)[1]. A virtual object can have zero degree without being zero in the ring.

Taking duals gives an involution [V]↦[V^*]. It reverses no product order here because tensor multiplication is commutative; characters become complex conjugates. The trivial multiplicity in V^*⊗W is
$$\\dim\\operatorname{Hom}_G(V,W),$$
so the coefficient pairing recovers character inner products.

## 3. Complexifying the ring

Character completeness shows
$$\\mathbb C\\otimes_{\\mathbb Z}R(G)
\\cong\\{\\text{complex class functions}\\}
\\cong\\mathbb C^{\\,r}$$
as complex algebras. The last map evaluates a class function on the r conjugacy classes, and multiplication is coordinatewise.

This algebra has primitive idempotents δ_C, the indicator functions of individual conjugacy classes. Their irreducible-character expansion is
$$\\delta_C=
\\frac{|C|}{|G|}\\sum_i\\overline{\\chi_i(g_C)}\\,\\chi_i.$$
Indeed the coefficient is ⟨δ_C,χ_i⟩=|C|\\overline{χ_i(g_C)}/|G|. These coefficients usually are not integers, so δ_C need not belong to the integral representation ring.

Do not confuse these idempotents with the group-algebra central idempotents e_i. In C[G], blocks are indexed by irreducible representations. In the complexified representation ring, scalar coordinates are indexed by conjugacy classes. The character table connects the two viewpoints but does not identify their multiplications or indexing sets.

## 4. Symmetric and exterior squares

Let τ exchange the factors of V⊗V. Since τ²=I and characteristic is zero,
$$V\\otimes V=\\operatorname{Sym}^2V\\oplus\\Lambda^2V,$$
where Sym²V and Λ²V are its +1 and −1 eigenspaces. These are invariant because τ commutes with every diagonal action. The projectors are (I+τ)/2 and (I−τ)/2.

**Theorem 11.2.**
$$\\chi_{\\operatorname{Sym}^2V}(g)
=\\frac{\\chi_V(g)^2+\\chi_V(g^2)}2,\\qquad
\\chi_{\\Lambda^2V}(g)
=\\frac{\\chi_V(g)^2-\\chi_V(g^2)}2.$$

*Proof.* On V⊗V the trace of ρ(g)⊗ρ(g) is χ_V(g)². Its trace after composition with τ is trρ(g)²=χ_V(g²), by the swap-trace calculation. Since the swap projectors commute with the action, the traces on their images are one half the sum or difference of those traces. ∎

At e the formulas give d(d+1)/2 and d(d−1)/2. For a degree-two representation, Λ²V is its determinant line, since v_1∧v_2 transforms by detρ(g). An invariant alternating form is therefore equivalent in degree two to a trivial determinant character, but in higher degree it is not enough to inspect only the determinant.

The difference of the two square classes has character χ_V(g²). It is often denoted ψ²[V]. It need not be a genuine representation. For example a quaternionic irreducible has trivial multiplicity −1 in this virtual class, because averaging χ(g²) gives its negative indicator.

## 5. Higher powers and generating functions

The exterior power Λ^mV is generated by alternating products v_1∧⋯∧v_m, with the usual multilinearity and repeated-vector relations. The diagonal G-action respects those relations. In a basis its wedges with increasing indices form a basis. Sym^mV is the quotient of V^(⊗m) imposing invariance under permutations of factors, with monomial basis indexed by nondecreasing indices.

If ρ(g) has eigenvalues λ_1,…,λ_d, then the exterior eigenvalues are products λ_(i_1)⋯λ_(i_m) over distinct increasing indices, and the symmetric eigenvalues are products with repetitions allowed. Therefore
$$\\sum_{m=0}^d\\chi_{\\Lambda^mV}(g)t^m
=\\prod_{j=1}^d(1+t\\lambda_j)
=\\det(I+t\\rho(g)),$$
$$\\sum_{m\\geq0}\\chi_{\\operatorname{Sym}^mV}(g)t^m
=\\prod_{j=1}^d(1-t\\lambda_j)^{-1}.$$
The second identity is a formal power-series identity, so no analytic convergence assertion is needed.

Choosing bases for V and W shows
$$\\Lambda^m(V\\oplus W)
\\cong\\bigoplus_{a+b=m}\\Lambda^aV\\otimes\\Lambda^bW.$$
Each wedge separates uniquely into its V-vectors and W-vectors, with signs fixed by putting V first. This proves multiplicativity of the exterior generating series under direct sum. Higher exterior operations therefore carry structure beyond the ordinary tensor multiplication constants.

## Invariant polynomial dimensions

The symmetric-power character series gives a useful extension. Polynomial functions on V have degree-m piece Sym^m(V^*). Let
$$H_V(t)=\\sum_{m\\geq0}\\dim(\\operatorname{Sym}^mV^*)^G\\,t^m.$$
Averaging each finite-dimensional degree piece and using the generating formula gives
$$H_V(t)=\\frac1{|G|}\\sum_{g\\in G}\\frac1{\\det(I-t\\rho_V(g))}.$$
Initially the dual action gives eigenvalue inverses in this denominator. Replacing g by g^(−1) in the group sum gives the displayed equivalent formula. Every operation is an identity of formal power series, and each coefficient involves a finite average. This is the finite-group Molien formula, proved here from Reynolds projection.

For a sign line of C_2, the formula is
$$\\frac12\\left(\\frac1{1-t}+\\frac1{1+t}\\right)
=\\frac1{1-t^2}.$$
Indeed an invariant polynomial in its coordinate must have only even exponents, because substituting x↦−x negates every odd monomial. Thus its degree-m invariant space is one-dimensional for even m and zero-dimensional for odd m.

For the standard S_3 plane W, the eigenvalues are (1,1) at e, (1,−1) at a transposition, and (ω,ω²) at a 3-cycle. Therefore
$$H_W(t)=\\frac16\\left[
\\frac1{(1-t)^2}+\\frac3{1-t^2}+\\frac2{1+t+t^2}
\\right]
=\\frac1{(1-t^2)(1-t^3)}.$$
For example the invariant dimensions in degrees zero through six are 1,0,1,1,1,1,2, obtained by counting solutions 2a+3b=m with a,b≥0. This agrees with the unique quadratic invariant found in Sym²W.

The rational series counts dimensions only. It does not by itself construct invariant polynomial generators or prove that the invariant algebra is freely generated in degrees two and three. Such a conclusion needs additional algebra. Keeping the dimension theorem separate from a generator theorem prevents an unwarranted inference from a denominator's factorisation.

There is also a tensor adjunction useful for interpreting multiplication constants:
$$\\operatorname{Hom}_G(U\\otimes V,W)
\\cong\\operatorname{Hom}_G(U,V^*\\otimes W).$$
For a map F on U⊗V, choose a basis v_a and dual basis v_a^*, and send u to Σ_a v_a^*⊗F(u⊗v_a). The inverse evaluates the V^* factor against v. The tensor Σ_a v_a^*⊗v_a is basis-independent, so this construction is natural and equivariant. It is the linear-algebra form of moving one factor across a Hom space; no division by its degree is involved.

For a further explicit case, let a cyclic generator act on a line by ζ^a, with ζ of order n. The action on its degree-m polynomial monomial is ζ^(−am), so that monomial is invariant exactly when n divides am. Put d=n/gcd(n,a), with d=1 for a trivial action. The invariant series is therefore
$$1+t^d+t^{2d}+\\cdots=\\frac1{1-t^d}.$$
The group average gives the same answer: expand each denominator formally and use the root-of-unity sum
$$\\frac1n\\sum_{j=0}^{n-1}\\zeta^{jam}
=\\begin{cases}1,&n\\mid am,\\\\0,&n\\nmid am.\\end{cases}$$
The exponent d is the order of the image of the action, not necessarily the order of the original cyclic group. Thus invariant dimensions can detect the effective quotient through which this one-dimensional action factors. For C_6 acting by a generator scalar of order three, the first nonconstant invariant appears in degree three; replacing the action by a faithful order-six scalar moves it to degree six. These are different representations of the same group, and the generating series records that difference. In this one-variable case we can also identify the invariant algebra directly: it is C[x^d]. Every invariant polynomial is a linear combination of precisely those monomials x^(kd), and distinct such powers are linearly independent. Here the generator statement has its own monomial proof.

## 6. Worked example: the S_3 representation ring

Write 1,ε,W for the trivial, sign and standard irreducibles. The class values are (1,1,1),(1,−1,1),(2,0,−1), with weights 1,3,2. Clearly ε²=1 and εW=W by multiplying characters.

For W² the character is (4,0,1). Its inner product with each of 1,ε,W is one. Thus
$$W^2=1+\\varepsilon+W.$$
Consequently
$$R(S_3)\\cong
\\mathbb Z[s,w]/(s^2-1,\\ sw-w,\\ w^2-1-s-w).$$
The relations reduce every polynomial to an integer combination of 1,s,w. Their images are the three irreducible classes and are independent, proving that the quotient presentation has no further additive relations.

The determinant of W is ε, so Λ²W=ε. Therefore Sym²W=1+W. Directly, the square map sends a transposition to e and a 3-cycle to its inverse. The formulas give Sym² character (3,1,0) and exterior character (1,−1,1), agreeing with those decompositions.

## 7. Worked example: cyclic tensor arithmetic

For C_n let t be the line sending a chosen generator to ζ=exp(2πi/n). Every irreducible is t^a, a=0,…,n−1, and t^at^b=t^(a+b), reducing exponents modulo n. Hence
$$R(C_n)\\cong\\mathbb Z[t]/(t^n-1).$$
The degree map sends every t^a to one.

For C_3, take V=t+t². Its tensor square is t²+2+t=2·1+V. Its determinant is t³=1, so Λ²V=1 and Sym²V=1+V. This V is the complexification of the real rotation plane. Its two nonreal constituent lines are paired by duality, while its determinant and symmetric-square decomposition are real-valued.

The virtual element t−1 has degree zero but is nonzero. At the generator its character is ζ−1, which is nonzero when n>1. Thus the augmentation ideal contains genuine information even though its degree vanishes.

## 8. Worked example: equal tensor rings, different exterior operations

The ordinary tables of D_4 and Q_8 identify their four linear characters and their degree-two character θ. In both cases tensor multiplication gives θ² equal to the sum of all four linear characters, and twisting θ by any linear character leaves it unchanged. Thus their representation rings have the same irreducible basis multiplication after a suitable matching.

For D_4's planar action, det(r)=1 and det(s)=−1, so Λ²θ is the nontrivial linear character χ_(+−). The symmetric square is the sum of the other three linear characters, including the trivial one.

For Q_8's complex plane, both generator matrices have determinant one. Thus Λ²θ=1, and Sym²θ is the sum of the three nontrivial linear characters. Their fixed-space difference is 0−1=−1, the quaternionic indicator. For D_4 that difference is 1−0=1.

Therefore a ring isomorphism preserving the irreducible multiplication basis need not preserve exterior-power operations. These operations see the power map through χ(g²), which the ordinary table alone omitted.

Tensoring with the regular representation has a useful explicit normal form. On V tensored with C[G], where G acts diagonally, send v tensored with g to g tensored with the vector g inverse applied to v. In the target, G acts only on the C[G] factor. Applying h before this map gives hg in the first factor and the same second vector, so the map is equivariant. Its inverse sends g tensored with w to gw tensored with g. Thus the tensor product is a direct sum of dim V copies of the regular representation.

For an irreducible V_i, write N_ij^k for its tensor multiplicities with V_j. Comparing irreducible coefficients in this isomorphism gives the sum over j of d_j times N_ij^k equal to d_i d_k. This is a weighted identity for every output constituent k. It follows from an actual equivariant isomorphism, rather than just from matching total dimensions, and supplies additional information about a proposed tensor-decomposition table.

## 9. Exercises

### REP-11-01 — Tensor character

Prove the tensor character formula using the matrix entries in arbitrary bases.

<details>
<summary>Hint 1</summary>

A basis is v_i⊗w_j.

</details>
<details>
<summary>Hint 2</summary>

The corresponding diagonal coefficient is A_ii B_jj.

</details>
<details>
<summary>Full solution</summary>

If A=ρ_V(g) and B=ρ_W(g), then g(v_i⊗w_j)=Σ_(a,b)A_ai B_bj v_a⊗w_b. The diagonal coefficient at (i,j) is A_ii B_jj. Summing over i,j gives tr A·tr B=χ_V(g)χ_W(g). This also proves that the degree at e is (dim V)(dim W).

</details>

### REP-11-02 — Unit multiplicity

For irreducibles U,V, prove the trivial multiplicity in U⊗V is one if V≅U^* and zero otherwise.

<details>
<summary>Hint 1</summary>

Identify invariant tensors with equivariant maps from U^*.

</details>
<details>
<summary>Hint 2</summary>

Use Schur's lemma on Hom_G(U^*,V).

</details>
<details>
<summary>Full solution</summary>

The canonical tensor-Hom identification gives (U⊗V)^G≅Hom_G(U^*,V). Duals of irreducibles are irreducible: a proper invariant subspace of a dual has a proper invariant annihilator in the original. Schur makes this Hom space one-dimensional exactly when V≅U^* and zero otherwise. The fixed-space dimension is the trivial multiplicity.

</details>

### REP-11-03 — A tensor cube in S_3

Decompose W^(⊗3) using W²=1+ε+W.

<details>
<summary>Hint 1</summary>

Multiply the known relation by W.

</details>
<details>
<summary>Hint 2</summary>

Use εW=W.

</details>
<details>
<summary>Full solution</summary>

We have W³=W+εW+W²=2W+(1+ε+W)=1+ε+3W. The dimensions are 1+1+3·2=8=2³. The coefficients are multiplicities of actual irreducible summands. Their sum five is not the degree; degrees weight the multiplicities.

</details>

### REP-11-04 — Exterior square of the standard plane

Use the square-character formula to calculate Λ²W for S_3.

<details>
<summary>Hint 1</summary>

The squared-element character is (2,2,−1).

</details>
<details>
<summary>Hint 2</summary>

Subtract it from (4,0,1) and divide by two.

</details>
<details>
<summary>Full solution</summary>

For e, a transposition and a 3-cycle, the square lies in the classes e,e and 3-cycle, respectively. Hence χ_W(g²)=(2,2,−1). The exterior formula gives [(4,0,1)−(2,2,−1)]/2=(1,−1,1)=χ_ε. Thus Λ²W is sign, matching the determinant of the planar reflection action.

</details>

### REP-11-05 — Symmetric square of a sum

Prove Sym²(V⊕W)≅Sym²V⊕(V⊗W)⊕Sym²W.

<details>
<summary>Hint 1</summary>

Separate tensors by which summands their two factors occupy.

</details>
<details>
<summary>Hint 2</summary>

The symmetric mixed subspace is generated by v⊗w+w⊗v.

</details>
<details>
<summary>Full solution</summary>

The two pure blocks contribute Sym²V and Sym²W. The mixed blocks V⊗W and W⊗V are exchanged by the swap. Their +1 eigenspace consists of v⊗w+w⊗v and is equivariantly isomorphic to V⊗W; injectivity follows by projecting to the first mixed block. These three invariant pieces have disjoint block supports and exhaust the symmetric tensors, proving the decomposition.

</details>

### REP-11-06 — The determinant line

For a degree-d representation, prove Λ^dV has character detρ(g) and degree one.

<details>
<summary>Hint 1</summary>

Use a basis wedge v_1∧⋯∧v_d.

</details>
<details>
<summary>Hint 2</summary>

Expand the transformed wedge by multilinearity and alternation.

</details>
<details>
<summary>Full solution</summary>

The top exterior space is spanned by v_1∧⋯∧v_d. Expanding gv_1∧⋯∧gv_d leaves only terms using every basis vector exactly once; their signed coefficient is the determinant of ρ(g). Thus the top wedge transforms by that scalar and has dimension one. Multiplicativity of determinant makes this a linear character.

</details>

### REP-11-07 — A class idempotent outside R(G)

For G=C_2, express the identity-class indicator δ_(e) in irreducible characters and show it is not in R(G).

<details>
<summary>Hint 1</summary>

The irreducible characters are 1=(1,1) and ε=(1,−1).

</details>
<details>
<summary>Hint 2</summary>

Solve a+b=1 and a−b=0.

</details>
<details>
<summary>Full solution</summary>

The solution is a=b=1/2, so δ_(e)=(1+ε)/2. Its square is itself as a pointwise class function, but its irreducible coefficients are not integers. Therefore it belongs to C⊗R(G) but not to the integral representation ring. Complexification introduces idempotents that cannot be realised as integral virtual representations.

</details>

### REP-11-08 — Dual and degree

Show that duality preserves degree and satisfies [V⊗W]^*=[V^*][W^*].

<details>
<summary>Hint 1</summary>

Use the pairing between dual tensor factors and original tensor factors.

</details>
<details>
<summary>Hint 2</summary>

Alternatively conjugate the product character.

</details>
<details>
<summary>Full solution</summary>

Dual spaces have the same dimension, so degree is preserved. The map V^*⊗W^*→(V⊗W)^* sending φ⊗ψ to [v⊗w↦φ(v)ψ(w)] is an equivariant isomorphism by basis comparison and the inverse dual action. Hence the representation classes multiply as stated. Characters give the same identity because complex conjugation preserves products.

</details>

### REP-11-09 — A virtual Adams square

For the Q_8 degree-two irreducible θ, express ψ²θ in linear characters.

<details>
<summary>Hint 1</summary>

Use Sym²θ−Λ²θ.

</details>
<details>
<summary>Hint 2</summary>

The exterior square is trivial and the symmetric square contains the three nontrivial lines.

</details>
<details>
<summary>Full solution</summary>

If λ_1,λ_2,λ_3 are the nontrivial linear characters, then ψ²θ=λ_1+λ_2+λ_3−1. Its degree is 3−1=2, but its trivial multiplicity is −1, so it is not a genuine representation. Its character is exactly g↦θ(g²). The negative coefficient agrees with the negative Frobenius–Schur indicator.

</details>

### REP-11-10 — Dimensions of symmetric powers

Use the monomial basis to show dim Sym^m(C^d)=binomial(d+m−1,m).

<details>
<summary>Hint 1</summary>

A basis monomial is determined by d nonnegative exponents summing to m.

</details>
<details>
<summary>Hint 2</summary>

Use the stars-and-bars count.

</details>
<details>
<summary>Full solution</summary>

The symmetric monomials v_1^(a_1)⋯v_d^(a_d), with a_i≥0 and Σ_i a_i=m, form a basis. Such exponent vectors correspond to placing d−1 separators among m identical stars, giving binomial(d+m−1,d−1)=binomial(d+m−1,m). For d=0, Sym^0 has dimension one and positive powers dimension zero, handled separately from the displayed binomial expression.

</details>

### REP-11-11 — Tensor induction

State and prove the character identity obtained by applying the tensor-induction isomorphism from Chapter 7.

<details>
<summary>Hint 1</summary>

Compare Ind_H^G(Res_H V⊗W) with V⊗Ind_H^G W.

</details>
<details>
<summary>Hint 2</summary>

Use the tensor character product and induction's additivity.

</details>
<details>
<summary>Full solution</summary>

The equivariant map g⊗(v⊗w)↦gv⊗(g⊗w), with inverse v⊗(g⊗w)↦g⊗(g^(−1)v⊗w), gives the isomorphism. Taking characters yields
Ind_H^G((Res_H^Gχ_V)χ_W)=χ_V·Ind_H^Gχ_W.
The maps respect H-balancing as proved in Chapter 7, so this is an identity of actual representations and hence of their characters, rather than only a numerical formula.

</details>

### REP-11-12 — Ring data and exterior data

Explain why equal ordinary character tables give the same tensor multiplication constants but may give different exterior-square decompositions.

<details>
<summary>Hint 1</summary>

Tensor constants use only pointwise products and class-size weights.

</details>
<details>
<summary>Hint 2</summary>

Exterior squares also use χ(g²).

</details>
<details>
<summary>Full solution</summary>

The constants N_ij^k are weighted inner products of χ_iχ_j with χ_k, all determined by the ordinary table and its class sizes. The exterior-square formula additionally needs the class containing g². D_4 and Q_8 have the same ordinary tables but different square maps: the degree-two exterior square is nontrivial in D_4 and trivial in Q_8. Thus the extra operations need not be preserved by an ordinary based-ring identification.

</details>

## 10. Summary and next connection

Tensor products turn irreducibles into an integral representation ring, faithfully encoded by their characters. Complexification separates conjugacy classes into scalar coordinates. Symmetric and exterior powers add operations that detect power-map information beyond ordinary multiplication. The next chapter uses these constructions in [worked finite groups](worked-finite-groups.md), including a uniform projective-line family for SL_2(F_p).
`;export{e as default};