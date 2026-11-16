var e=`---
parent_id: book-representation-theory-finite-groups
chapter_id: maschkes-theorem
title: "Maschke’s Theorem"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Maschke’s Theorem

An invariant subspace gives a smaller representation, but a vector-space complement may fail to be invariant. The modular plane in [Chapter 1](representations-and-examples.md) displayed this obstruction explicitly. Maschke's theorem says that for finite groups the obstruction disappears whenever division by the group order is possible in the coefficient field.

The method is more useful than the statement alone: average a choice over the group. We shall average projections, linear maps and inner products, keeping track of the properties each average preserves. Throughout, G is finite and V is finite-dimensional over a field k. Write n=|G|. The assumption n≠0 in k means either characteristic zero or positive characteristic not dividing n.

## 1. Splitting an invariant subspace

Recall that a projection onto U≤V is a linear map p:V→U with p|_U=id_U. Choosing a basis of U, extending it to a basis of V and sending the added basis vectors to zero constructs such a map. It satisfies p²=p, im p=U and V=U⊕ker p. None of these elementary facts makes ker p invariant.

**Lemma 2.1 (Averaged projection).** Suppose n is invertible in k and U is G-invariant. For any linear projection p:V→U define
$$P=\\frac1n\\sum_{g\\in G}\\rho(g)p\\rho(g)^{-1}.$$
Then P is a G-equivariant projection onto U.

*Proof.* Each summand has image in U: p lands in U, and ρ(g) preserves U. Thus im P⊆U. If u∈U, then ρ(g)^(−1)u∈U and p acts as the identity there, so ρ(g)pρ(g)^(−1)u=u. Averaging n copies yields Pu=u. Consequently im P=U and P²=P, since applying P to any output of P fixes it.

For h∈G, conjugating P by ρ(h) gives the same sum with g replaced by hg. Left multiplication permutes G, so ρ(h)Pρ(h)^(−1)=P. This is equivariance. ∎

Averages of arbitrary idempotent matrices need not be idempotent. The proof works because every conjugated projection has the same image U and restricts to the identity on U. Those two properties survive averaging and imply idempotence. It would be incorrect to expand P² and assert that averaging preserves all polynomial identities.

**Theorem 2.2 (Maschke).** If n is invertible in k, every invariant subspace U of a finite-dimensional G-representation V has an invariant complement. Therefore V is a direct sum of irreducible representations.

*Proof.* Let P be the averaged projection. Since P is equivariant, its kernel W is invariant by the equivariant kernel theorem. Every v has the decomposition v=Pv+(v−Pv), with Pv∈U and P(v−Pv)=0. Also U∩W=0 because P fixes U. Thus V=U⊕W.

For complete reducibility, induct on dim V. The zero-dimensional case is the empty direct sum. If V is nonzero irreducible there is nothing to split. Otherwise choose a proper nonzero invariant U, take an invariant complement W, and apply induction to both smaller-dimensional representations. Combining their decompositions gives the required direct sum. ∎

This argument proves existence, not yet uniqueness of multiplicities. It does not require k algebraically closed, so it applies to the irreducible real rotation plane of Chapter 1. Over C every finite group satisfies the characteristic condition. For an infinite group there is no finite sum of this form, and the conclusion may fail even in characteristic zero.

## 2. The Reynolds operator on fixed vectors

There is a simpler average without conjugation:
$$R_V=\\frac1n\\sum_{g\\in G}\\rho(g).$$

**Proposition 2.3.** R_V is an equivariant projection onto V^G, the space of vectors fixed by every g. In particular V=V^G⊕ker R_V.

*Proof.* For h∈G,
ρ(h)R_V=(1/n)Σ_gρ(hg)=R_V.
Thus every vector in im R_V is fixed. If v is fixed, every summand sends v to v, so R_Vv=v. Therefore im R_V=V^G and R_V²=R_V. Similarly R_Vρ(h)=R_V by right reindexing, giving equivariance. The projection decomposition follows. ∎

This operator supplies the canonical fixed part of each vector for a given representation, whereas an averaged projection onto a general invariant U still depends on the original p. It is useful to distinguish these two averages. The first averages operators by conjugation to make them equivariant; the second averages vector orbits to extract invariant vectors.

In characteristic zero, tr R_V=dim V^G because a projection is diagonalizable with eigenvalues zero and one. Consequently
$$\\dim V^G=\\frac1n\\sum_{g\\in G}\\operatorname{tr}\\rho(g).$$
In characteristic p the trace gives the dimension as a scalar in k, not as a uniquely recoverable integer. A rank computation on R_V still gives the actual integer dimension. Later character formulas use complex coefficients precisely to avoid this ambiguity.

## 3. Averaging maps and splitting exact sequences

For representations V,W and any k-linear T:V→W define
$$\\mathcal A(T)=\\frac1n\\sum_{g\\in G}\\rho_W(g)T\\rho_V(g)^{-1}.$$
Reindexing proves that this is a G-map. If T was already equivariant, every summand equals T, so averaging leaves T unchanged. Thus \\(\\mathcal A\\) is a linear projection from Hom_k(V,W) onto Hom_G(V,W).

**Theorem 2.4 (Equivariant splitting).** Under the Maschke hypothesis, every exact sequence
$$0\\longrightarrow U\\xrightarrow{i}V\\xrightarrow{q}W\\longrightarrow0$$
of finite-dimensional representations splits equivariantly: there is a G-map s:W→V with qs=id_W, and V≅U⊕W as representations.

*Proof.* Linear algebra supplies a linear section s_0 of q. Average it to s=\\mathcal A(s_0). Since q is equivariant,
$$qs=\\frac1n\\sum_g \\rho_W(g)(qs_0)\\rho_W(g)^{-1}
=\\frac1n\\sum_g I_W=I_W.$$
Hence s is an equivariant section. The map U⊕W→V, (u,w)↦i(u)+s(w), is equivariant. It is injective: applying q to a zero value gives w=0, then injectivity of i gives u=0. It is surjective: for v∈V, the vector v−s(qv) belongs to ker q=im i. ∎

Exactness means that each kernel equals the preceding image. It does not by itself assert splitting. The theorem adds an equivariant section using the field hypothesis. If a short exact sequence already has such a section, the same direct-sum argument works without any characteristic assumption.

There is a related lifting statement. Given a surjective G-map q:V→W and a G-map f:X→W, choose any linear lift t_0:X→V with qt_0=f by lifting a basis of X. Then t=\\mathcal A(t_0) is equivariant and qt=f. The final equality holds because averaging f leaves f fixed. This is an elementary manifestation of exactness of equivariant Hom under semisimplicity.

## 4. Invariant positive-definite products

Over R or C another averaging argument has geometric meaning. Start with any positive-definite inner product (−,−)_0, Hermitian over C and linear in its first argument. Define
$$(v,w)_G=\\frac1n\\sum_{g\\in G}(\\rho(g)v,\\rho(g)w)_0.$$

**Theorem 2.5 (Unitarisation).** The averaged product is positive definite and G-invariant. In an orthonormal basis every ρ(g) is orthogonal over R or unitary over C.

*Proof.* Each term is bilinear over R or sesquilinear over C, with the appropriate symmetry. For v≠0 every invertible ρ(g) sends v to a nonzero vector, so every summand in (v,v)_G is a positive real number. Thus the average is positive. Invariance follows from replacing g by gh in the sum:
(ρ(h)v,ρ(h)w)_G=(v,w)_G.
An orthonormal basis for this product exists by Gram–Schmidt. In that basis the invariance equation is ρ(g)^*ρ(g)=I. ∎

If U is invariant, its orthogonal complement for this averaged product is invariant: for w orthogonal to U and u∈U,
(ρ(g)w,u)_G=(w,ρ(g)^(−1)u)_G=0.
Positive definiteness then gives V=U⊕U^⊥. This recovers Maschke over R and C, but the projection proof is more general because it works over arbitrary fields with n invertible.

The original coordinate product need not be invariant. One must either average it or verify invariance before using its orthogonal complement. Also, invariant indefinite forms do not ensure a direct orthogonal decomposition for every subspace: isotropic subspaces can intersect their orthogonal complements.

## 5. Worked example: averaging a poor projection in S_3

Use the coordinate permutation action on C³ and U=C(1,1,1). Set u=(1,1,1). The map p(a,b,c)=a u is a projection onto U, but its kernel {a=0} is not invariant under all coordinate permutations.

For σ∈S_3, the conjugated projection ρ(σ)pρ(σ)^(−1) extracts the coordinate with index σ(1), then multiplies u. Each of the three coordinates appears twice among the six permutations. Therefore
$$P(a,b,c)=\\frac{a+b+c}{3}u.$$
Its kernel is the invariant sum-zero plane. For v=(3,0,0), Pv=(1,1,1) and v−Pv=(2,−1,−1), explicitly exhibiting the invariant decomposition.

The Reynolds operator is the same P in this case because U is the entire fixed space. In other representations or for a different invariant U, the two averages need not coincide. The computation also shows exactly why characteristic three is exceptional for this particular permutation-module splitting: the denominator 3 cannot be formed.

## 6. Worked example: Fourier projections for a cyclic action

Let G=C_3 and work over C. Suppose A=ρ(r), so A³=I, and let ω=exp(2πi/3). Define
$$P_j=\\frac13\\sum_{a=0}^2\\omega^{-ja}A^a,\\qquad j=0,1,2.$$
These are weighted averages. Multiplying by A and reindexing modulo three gives AP_j=ω^jP_j. Thus im P_j lies in the ω^j-eigenspace. If Av=ω^ℓv, then
$$P_jv=\\frac13\\sum_{a=0}^2\\omega^{(\\ell-j)a}v,$$
which is v for ℓ=j and zero otherwise, by the finite geometric sum.

Without assuming an eigenbasis in advance, summing the operators gives Σ_jP_j=I, because Σ_jω^(−ja) is three when a=0 and zero otherwise. Their images therefore span V, and the distinct eigenvalues show the sum is direct. Hence V decomposes into its three eigenspaces. On the regular module with basis e_0,e_1,e_2 and Ae_a=e_(a+1), the vectors
$$v_j=\\sum_{a=0}^2\\omega^{-ja}e_a$$
satisfy Av_j=ω^jv_j and form three irreducible lines.

The existence of third roots of unity in the field mattered for this refinement. Maschke over R still gives complete reducibility, but the two nonreal eigenspaces combine into an irreducible real plane. The theorem does not promise that every irreducible is one-dimensional.

## 7. Worked example: a Reynolds average with two orbits

Let C_2 act on X={1,2,3} by swapping 1 and 2 and fixing 3. Over a field of characteristic not two,
$$R(a,b,c)=\\left(\\frac{a+b}{2},\\frac{a+b}{2},c\\right).$$
Its image has basis e_1+e_2,e_3, matching the two orbits. Its kernel is the line spanned by e_1−e_2. Therefore the permutation representation is a direct sum of two trivial lines and one sign line.

The fixed space depends on the orbit structure in every characteristic. In characteristic two it still has dimension two, but averaging is unavailable and e_1−e_2=e_1+e_2 belongs to the fixed space. Thus the displayed complementary sign line merges with an invariant line already inside the fixed space. The orbit-count formula survives while the decomposition changes.

This example warns against transferring a characteristic-zero decomposition merely by reducing every matrix entry modulo p. The action reduces correctly, but the invariant direct-sum isomorphism can become singular because its determinant contains the prohibited denominator.

## 8. Why the characteristic hypothesis is necessary

**Theorem 2.6 (Failure when the characteristic divides |G|).** If k has characteristic p dividing n, the regular representation k[G] is not completely reducible.

*Proof.* The augmentation ε:k[G]→k is a surjective G-map, with trivial target. If k[G] were completely reducible, every subrepresentation would have an invariant complement. To justify that implication directly for a finite sum of irreducibles, one may prove by induction that a submodule of such a sum has a complement: choose an irreducible summand not contained in the submodule, split off its disjoint image, and continue in the smaller quotient. Alternatively apply the standard finite-length semisimple-module argument stated below.

Thus ker ε would have an invariant complement, or equivalently ε would have an equivariant section. Such a section sends 1 to a fixed vector v with ε(v)=1. In the regular representation every fixed vector is a constant multiple of u=Σ_ge_g, because the action on G is transitive. But ε(cu)=cn=0 in k, a contradiction. ∎

Here is the finite-length argument used in the proof, without an implicit appeal to Maschke. If V=⊕_(i=1)^r S_i with S_i irreducible and U≤V invariant, choose a maximal sum W of selected S_i with U∩W=0. If U+W≠V, some S_j is not contained in U+W. The intersection S_j∩(U+W), being invariant, is then zero. It follows that U∩(W+S_j)=0, contradicting maximality. Hence V=U⊕W. This argument allows repeated isomorphic summands and uses only finiteness.

Together the two directions show that every finite-dimensional G-representation is completely reducible exactly when the characteristic does not divide |G|. In the bad characteristic some individual representations can still be irreducible or completely reducible. The failure is a failure of the universal claim, exhibited by the regular representation.

## 9. Exercises

### REP-02-01 — Verify the average

Prove directly that the averaged projection P has P²=P without expanding the double sum.

<details>
<summary>Hint 1</summary>

Identify its image before multiplying operators.

</details>
<details>
<summary>Hint 2</summary>

Show that it acts as the identity on that image.

</details>
<details>
<summary>Full solution</summary>

Every conjugated p lands in U, so im P⊆U. Every summand fixes every u∈U, hence Pu=u. For v∈V, Pv belongs to U, so P(Pv)=Pv. Therefore P²=P. This uses the common image and restriction properties; averages of unrelated projections need not be projections.

</details>

### REP-02-02 — All invariant complements

Suppose V=U⊕W as representations. Show that invariant complements to U are exactly the graphs {f(w)+w:w∈W} of maps f∈Hom_G(W,U).

<details>
<summary>Hint 1</summary>

Project any complement to W along U.

</details>
<details>
<summary>Hint 2</summary>

That projection is an equivariant isomorphism on the complement.

</details>
<details>
<summary>Full solution</summary>

A graph of f is complementary to U by uniqueness of the W-coordinate. It is invariant exactly when g(f(w)+w)=f(gw)+gw for every g,w, or gf(w)=f(gw). Conversely, for an invariant complement Z, the equivariant projection V→W restricts to an isomorphism Z→W: injectivity uses Z∩U=0, and surjectivity uses V=U+Z. Its inverse has the form w↦f(w)+w. Equivariance of that inverse makes f equivariant. Distinct f give distinct graphs.

</details>

### REP-02-03 — Nonuniqueness of projection

For the trivial action on k², list all projections onto ke_1 and explain why averaging cannot select a unique one.

<details>
<summary>Hint 1</summary>

The image must lie in ke_1 and e_1 must be fixed.

</details>
<details>
<summary>Hint 2</summary>

Every linear map commutes with a trivial action.

</details>
<details>
<summary>Full solution</summary>

The projection matrices are [[1,a],[0,0]] for arbitrary a∈k. Each has image ke_1 and fixes that line, hence is idempotent. Since all action operators are I, conjugation leaves each matrix unchanged and its average is itself. Their kernels are the different lines spanned by (−a,1). Averaging guarantees an equivariant choice but does not make a general complement canonical.

</details>

### REP-02-04 — Exactness of invariants

Under the Maschke hypothesis, prove that a surjective equivariant q:V→W maps V^G onto W^G.

<details>
<summary>Hint 1</summary>

Lift a fixed vector and then average the lift.

</details>
<details>
<summary>Hint 2</summary>

Use qR_V=R_Wq.

</details>
<details>
<summary>Full solution</summary>

For w∈W^G choose v with qv=w. The vector R_Vv is fixed, and equivariance gives qR_Vv=R_Wqv=R_Ww=w. Thus q(V^G)=W^G. Injectivity and kernel statements for invariant spaces follow by restriction from the original maps, so taking G-fixed vectors preserves an entire short exact sequence under these hypotheses.

</details>

### REP-02-05 — Failure of exactness

In characteristic p dividing |G|, show that augmentation k[G]→k is surjective but its restriction to fixed spaces is zero.

<details>
<summary>Hint 1</summary>

Describe every fixed vector of the regular action.

</details>
<details>
<summary>Hint 2</summary>

Its augmentation is a multiple of |G|.

</details>
<details>
<summary>Full solution</summary>

Augmentation sends e_e to 1, so it is surjective. Every fixed vector is cΣ_ge_g, because all coefficients agree under left translations. Its augmentation is c|G|=0 in k. The target k is trivial, so its fixed space is all of k, and the restricted map is zero rather than surjective. This explicitly identifies the step that fails without the averaging denominator.

</details>

### REP-02-06 — An invariant complement over R

Let C_4 act on R³ by quarter-turn rotation on the first two coordinates and trivially on the third. Decompose it into irreducible real representations.

<details>
<summary>Hint 1</summary>

The coordinate plane and the third axis are invariant.

</details>
<details>
<summary>Hint 2</summary>

A 90-degree rotation has no real eigenvalue.

</details>
<details>
<summary>Full solution</summary>

The space is R²⊕Re_3, with both summands invariant. The axis is a one-dimensional trivial irreducible representation. The rotation plane is irreducible over R: a proper nonzero invariant subspace would be a line and would give a real eigenvalue, but the rotation's characteristic polynomial is x²+1. Thus the displayed decomposition is into irreducibles. Over C the plane splits into eigenlines with eigenvalues i and −i.

</details>

### REP-02-07 — Orthogonal complements require invariance

For a G-invariant positive-definite product and invariant U, prove that U^⊥ is invariant. Explain why positivity is needed for a direct sum.

<details>
<summary>Hint 1</summary>

Move the action from one argument of the product to the other.

</details>
<details>
<summary>Hint 2</summary>

Analyse U∩U^⊥.

</details>
<details>
<summary>Full solution</summary>

If w∈U^⊥ and u∈U, then (gw,u)=(w,g^(−1)u)=0 because g^(−1)u∈U. Thus gw∈U^⊥. Positive definiteness implies that a vector in U∩U^⊥ has (v,v)=0 and hence v=0. Finite-dimensional inner-product theory gives dim U^⊥=dim V−dim U, so the sum is all V. Without positivity an isotropic nonzero vector can be orthogonal to itself, so the intersection may be nonzero.

</details>

### REP-02-08 — Weighted cyclic projections

For A^m=I over C and ζ=exp(2πi/m), define P_j=m^(−1)Σ_(a=0)^(m−1)ζ^(−ja)A^a. Prove P_iP_j=δ_ijP_j.

<details>
<summary>Hint 1</summary>

First prove AP_j=ζ^jP_j by reindexing.

</details>
<details>
<summary>Hint 2</summary>

Evaluate P_i on the image of P_j using a geometric sum.

</details>
<details>
<summary>Full solution</summary>

Reindexing a+1 modulo m gives AP_j=ζ^jP_j, so A^aP_j=ζ^(ja)P_j. Therefore
P_iP_j=m^(−1)Σ_aζ^((j−i)a)P_j.
If i=j the scalar is 1; otherwise the geometric sum is zero because ζ^(j−i)≠1 and its m-th power is 1. Hence P_iP_j=δ_ijP_j. Summing the P_j gives I, yielding a direct-sum eigenspace decomposition without a preliminary diagonalisation assumption.

</details>

### REP-02-09 — Averaging is natural

If T:V→W is equivariant, prove TR_V=R_WT. Deduce that T sends ker R_V into ker R_W.

<details>
<summary>Hint 1</summary>

Apply the intertwining identity term by term.

</details>
<details>
<summary>Hint 2</summary>

Evaluate R_WTv when R_Vv=0.

</details>
<details>
<summary>Full solution</summary>

We have TR_V=(1/n)Σ_gTρ_V(g)=(1/n)Σ_gρ_W(g)T=R_WT. If R_Vv=0, then R_WTv=TR_Vv=0. Thus T preserves both the fixed parts and the zero-average parts. This decomposition is compatible with all equivariant maps, unlike a complement chosen by an arbitrary basis.

</details>

### REP-02-10 — Trace of the Reynolds projector

Over C derive dim V^G=(1/|G|)Σ_gχ_V(g). Apply it to the regular representation.

<details>
<summary>Hint 1</summary>

The trace of an idempotent equals its rank over C.

</details>
<details>
<summary>Hint 2</summary>

A nonidentity left translation fixes no regular basis vector.

</details>
<details>
<summary>Full solution</summary>

The projector R_V has image V^G and a direct kernel complement. In a basis adapted to these spaces its matrix is diag(I,0), so tr R_V=dim V^G. Linearity of trace gives the formula. For the regular action, χ(e)=|G| and χ(g)=0 for g≠e, because left translation by a nonidentity element has no fixed group element. The average is one, agreeing with its single invariant all-ones line.

</details>

### REP-02-11 — Infinite groups can fail

Let Z act on C² by a generator A=[[1,1],[0,1]]. Prove that the action is not completely reducible, despite characteristic zero.

<details>
<summary>Hint 1</summary>

An action of Z is determined by any invertible matrix.

</details>
<details>
<summary>Hint 2</summary>

Find the unique eigenline of A.

</details>
<details>
<summary>Full solution</summary>

Define the action of m∈Z by A^m; this is a representation since A is invertible. The line Ce_1 is invariant. Every one-dimensional invariant subspace would be an eigenline, but ker(A−I)=Ce_1 is the only one. Hence there is no invariant complementary line. A reducible two-dimensional representation is completely reducible only if it is the sum of two invariant lines, so this one is not. The finite-group hypothesis in Maschke is essential.

</details>

### REP-02-12 — Averaged lifts

Let q:V→W be surjective equivariant, let X be a representation, and suppose |G| is invertible in k. Prove every G-map f:X→W has a G-map lift t:X→V.

<details>
<summary>Hint 1</summary>

First lift a basis of X linearly, without enforcing equivariance.

</details>
<details>
<summary>Hint 2</summary>

Average the lift, then use q's equivariance and the fact that averaging fixes f.

</details>
<details>
<summary>Full solution</summary>

Choose t_0 with qt_0=f by choosing preimages for the values of f on a basis. Define
t=(1/|G|)Σ_gρ_V(g)t_0ρ_X(g)^(−1).
Reindexing proves t is equivariant. Multiplication by q gives
qt=(1/|G|)Σ_gρ_W(g)fρ_X(g)^(−1).
Every summand equals f because f is equivariant, so qt=f. No uniqueness is expected: two such lifts differ by a G-map X→ker q.

</details>

## 10. Summary and next connection

Averaging produces invariant complements, fixed-vector projectors, equivariant lifts and invariant inner products. Finite-dimensional representations of a finite group are completely reducible exactly in the nonmodular characteristic range. Existence of a decomposition still leaves the questions of uniqueness and multiplicity. [Schur’s lemma](schurs-lemma.md) answers them by analysing equivariant maps between irreducible summands.
`;export{e as default};