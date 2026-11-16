var e=`---
parent_id: book-representation-theory-finite-groups
chapter_id: modular-representations-first-look
title: "Modular Representations: A First Look"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Modular Representations: A First Look

When the coefficient characteristic divides the group order, invariant complements can disappear. The replacement is not to abandon structure, but to distinguish irreducible factors from the extensions joining them. This chapter proves composition-factor uniqueness, completely describes cyclic prime-order modules, and shows why ordinary trace functions do not recover the missing extension data.

Read [Maschke and its converse](maschkes-theorem.md), [subrepresentations and quotients](representations-and-examples.md), and elementary rank–nullity. G is finite and k has characteristic p>0 with p dividing |G|. Representations are finite-dimensional. Some examples use an algebraically closed k; those points say so explicitly.

## 1. Simple, indecomposable and semisimple

Irreducible and simple mean the same: nonzero with no proper nonzero invariant subspace. A representation is indecomposable if it cannot be written as a direct sum of two nonzero subrepresentations. Every simple is indecomposable, but the converse can fail. Semisimple means a direct sum of simples, the same as completely reducible.

**Definition 13.1.** A composition series of V is a chain
$$0=V_0<V_1<\\cdots<V_r=V$$
of invariant subspaces with each factor V_i/V_(i−1) simple.

Every finite-dimensional representation has such a series. If V is not simple, choose a proper invariant subspace of maximal dimension; its quotient is simple. Repeat inside that smaller subspace, and terminate because dimensions decrease. This produces a filtration, not generally a direct-sum decomposition.

**Theorem 13.2 (Jordan–Hölder for finite-dimensional modules).** The multiset of simple factors of a composition series is independent of the chosen series.

*Proof.* Induct on dim V. Compare the last proper terms U,W of two series; both are maximal invariant subspaces. If U=W, induction inside U proves the result. Otherwise U+W=V by maximality. Put T=U∩W. The isomorphism theorem gives
$$U/T\\cong V/W,\\qquad W/T\\cong V/U,$$
both simple. Choose a composition series of T, extend it once to U and once to W, and use induction to compare these series with the originally chosen series inside U and W. The first full series therefore has factors: those of T, then V/W, then V/U. The second has factors: those of T, then V/U, then V/W. These multisets agree. All subspaces to which induction was applied have smaller dimension. ∎

Composition factors therefore give stable multiplicities even without splitting. They do not determine the middle module. A nontrivial extension and a direct sum can have the same factors.

Every finite-dimensional module also decomposes into indecomposable modules: split whenever possible and induct on dimension. We do not prove the general uniqueness theorem for indecomposable decompositions here. For the cyclic prime-order case below, a direct kernel calculation will prove uniqueness of its block sizes.

## 2. The cyclic prime-order algebra

Take G=C_p=⟨g:g^p=e⟩. Put t=g−e in k[G]. The binomial theorem in characteristic p gives t^p=g^p−e=0. The map
$$k[t]/(t^p)\\longrightarrow k[C_p],\\qquad t\\longmapsto g-e$$
is an algebra isomorphism: it is surjective because g=e+t generates the target, and both spaces have dimension p.

Consequently a C_p-representation is exactly a vector space with an operator N satisfying N^p=0, with g acting as I+N. Conversely (I+N)^p=I, so every such nilpotent operator gives a representation. This equivalence holds over any field of characteristic p, without algebraic closure.

For 1≤r≤p let J_r=k[t]/(t^r), with t acting by multiplication. It has basis 1,t,…,t^(r−1), one nilpotent chain of length r. Its invariant filtration
$$0<t^{r-1}J_r<\\cdots<tJ_r<J_r$$
has r one-dimensional trivial factors.

The only simple C_p-module is the trivial line. Indeed every nonzero module has a nonzero vector in ker N because N is nilpotent. That fixed-vector subspace is invariant; in a simple module it is everything. Then all group elements act trivially, and simplicity forces dimension one.

## 3. A direct nilpotent-block proof

**Theorem 13.3.** Every finite-dimensional C_p-module is a direct sum of modules J_r, 1≤r≤p. The multiset of block lengths is unique, and each J_r is indecomposable.

*Proof.* We prove existence for any nilpotent N. Let m be its nilpotence index on a nonzero space, and choose v with N^(m−1)v≠0. The chain v,Nv,…,N^(m−1)v is independent: applying the largest possible power of N to a relation successively isolates its coefficients.

Choose a linear functional λ with λ(N^(m−1)v)=1 and λ(N^jv)=0 for 0≤j<m−1. Extend it arbitrarily from that chain to the whole space. Define
$$P(w)=\\sum_{j=0}^{m-1}\\lambda(N^{m-1-j}w)N^jv.$$
On N^kv only the j=k term survives, so P fixes the chain span. It maps into that span, hence is a projection. Also PN=NP: in PN the j=0 term vanishes by N^m=0, and reindexing the remaining terms gives exactly NP. Therefore ker P is N-invariant and complementary to the chain. Induct on its smaller dimension. Since N^p=0, all resulting chain lengths are at most p.

For uniqueness, put a_s=dim ker N^s−dim ker N^(s−1). A block of length r contributes one to a_s exactly when r≥s. Thus a_s counts blocks of length at least s, and a_s−a_(s+1) counts those of exact length s. Kernel dimensions determine the block multiset.

Finally ker N on J_r has dimension one. A direct sum of two nonzero nilpotent modules would have fixed-space dimension at least two, because each has a nonzero kernel. Hence J_r cannot split. ∎

The proof constructs invariant complements to whole nilpotent chains, not to every invariant subspace. It therefore does not contradict the failure of Maschke: a chain J_r with r>1 is an indecomposable block, not a sum of simple lines.

## 4. Worked example: three factors, two different modules

Work in characteristic three. On J_3 choose basis v,Nv,N²v, so the nilpotent matrix sends the first basis vector to the second, the second to the third and the third to zero. The generator acts by I+N.

This module has three trivial composition factors and a one-dimensional fixed space. By contrast, three trivial lines also have three trivial composition factors but a three-dimensional fixed space. They are not isomorphic. For a∈F_3, every operator (I+N)^a is unipotent and has trace three, which is zero in k. The same trace function occurs on three trivial lines.

Thus k-valued ordinary traces can lose even dimension information modulo p, and they lose extension information as well. Lifting the integer dimension at the identity still would not distinguish these two modules. The obstruction is not only the vanished denominator in an inner product.

The regular module k[C_p] is J_p, a single indecomposable length-p block. Its augmentation quotient is trivial, but there is no equivariant section: every fixed vector is a multiple of Σ_g g, whose augmentation is p=0. This recovers Maschke's converse in the smallest modular family.

## 5. Projective modules in this small example

A module is projective if it is a direct summand of a finite free module in our finite-dimensional setting. A free k[C_p]-module is a direct sum of regular modules J_p.

**Proposition 13.4.** A finite-dimensional C_p-module is projective exactly when it is a direct sum of J_p blocks.

*Proof.* A sum of J_p blocks is free and hence projective. Conversely suppose P⊕Q≅J_p^(⊕m). Uniqueness of nilpotent block sizes makes every block of P and Q have length p, since no shorter block occurs on the right. Thus P is a sum of J_p blocks. ∎

Projective does not mean semisimple here: the regular block J_p is projective and indecomposable but not simple when p>1. A quotient of a projective module need not be projective; its trivial quotient J_1 is the simplest example.

The classification also calculates Hom spaces. A module map J_r→J_s is determined by the image y of 1, with t^r y=0. In J_s this annihilator has dimension min(r,s), so
$$\\dim_k\\operatorname{Hom}_{C_p}(J_r,J_s)=\\min(r,s).$$
In particular End(J_r)≅k[t]/(t^r). For r>1 this ring has nonzero nilpotents, unlike the division ring obtained from a simple module by Schur.

## 6. Worked example: a simple modular S_3 plane

Take characteristic two and the S_3 coordinate permutation module k³. Its fixed all-ones vector has augmentation three, which is one in k, so
$$k^3=k(1,1,1)\\oplus W,\\qquad W=\\{(a,b,c):a+b+c=0\\}.$$
This individual module splits even though two divides |S_3|.

Over an algebraically closed k of characteristic two, the standard plane W is irreducible. A 3-cycle acts with characteristic polynomial x²+x+1, whose two roots ω,ω² are distinct and nontrivial. Any invariant line must be one of these eigenspaces. A transposition conjugates the 3-cycle to its inverse, so exchanges those two lines. Neither is invariant under all S_3.

Restrict W to the transposition subgroup C_2. Its generator is a nonidentity unipotent 2×2 matrix, so it is J_2 there and not semisimple. Thus a simple modular G-module may restrict to an indecomposable nonsimple H-module. This cannot happen for finite complex representations, whose restrictions are semisimple by Maschke for H.

## 7. Worked example: a nonsplit S_3 extension in characteristic three

Now take characteristic three and the same sum-zero plane W≤k³. The vector u=(1,1,1) lies in W because its coordinate sum is zero. Hence W contains a trivial line U=ku.

The quotient W/U is the sign line. A transposition has trace zero on W, since the permutation trace is one and the augmentation quotient of k³ is trivial. Subtracting the trace one on U gives −1 on W/U. A 3-cycle acts by one on the one-dimensional quotient, since its scalar has cube one in characteristic three. These generator values identify sign.

The sequence
$$0\\longrightarrow1\\longrightarrow W\\longrightarrow\\varepsilon
\\longrightarrow0$$
does not split. A sign line would be spanned by a vector negated by every transposition. Being negated by (12) forces the vector to have the form (a,−a,0). Being negated by (23), which fixes the first coordinate, then forces a=−a, hence a=0 in characteristic three. No nonzero sign submodule exists.

Thus W and 1⊕ε have identical composition factors and identical k-valued trace functions, but different submodule structure. Extension data are indispensable.

## 8. A precise first look at Brauer characters

A p-regular element has order coprime to p. On such an element, x^m−1 has distinct roots in an algebraic closure of k, so its action is diagonalizable. Choose a compatible identification between the prime-to-p roots of unity used in k and complex roots of unity. The Brauer-character value is the sum of the lifted eigenvalues. It is defined only on p-regular elements.

This lifting choice is part of the definition; there is no field embedding from a positive-characteristic field into C. The lifted trace preserves integer degree and is additive in exact sequences, because an invariant subspace gives block upper-triangular matrices whose eigenvalue multisets are the combined diagonal-block multisets. Thus it records composition-factor information more effectively than a k-valued trace.

It still does not classify extensions. For C_p the only p-regular element is e, so every J_r has Brauer value r there, the same as r trivial lines. We do not assert or prove the full Brauer character-table, projective-cover or block theory in this introductory chapter. The explicit nilpotent classification shows the phenomena those theories must accommodate.

The sum of all cyclic group operators has a different meaning in characteristic p. The polynomial one plus x through x raised to p minus one equals (x−1) raised to p minus one over that field: multiplying either by x−1 gives x to p minus one, and polynomial cancellation proves equality. Hence on a cyclic p-group module this operator is N raised to p minus one. On a single block of length less than p it vanishes; on the length-p regular block it has rank one. There is no division by p to turn this sum into a Reynolds projection. The explicit block calculation records exactly what remains of the characteristic-zero averaging numerator and distinguishes the full regular block from every shorter indecomposable.

## 9. Exercises

### REP-13-01 — Simple versus indecomposable

Prove J_2 is indecomposable but not simple in characteristic p≥2.

<details>
<summary>Hint 1</summary>

Its fixed-space dimension is one.

</details>
<details>
<summary>Hint 2</summary>

The line generated by t is invariant and proper.

</details>
<details>
<summary>Full solution</summary>

The nonzero line kt is a proper submodule of J_2, so it is not simple. The nilpotent operator has one-dimensional kernel kt. If J_2 were a sum of two nonzero submodules, each restricted nilpotent operator would have a nonzero kernel, making the full fixed space at least two-dimensional. This contradiction proves indecomposability.

</details>

### REP-13-02 — The cyclic algebra

Prove k[C_p]≅k[t]/(t^p) and identify its augmentation ideal.

<details>
<summary>Hint 1</summary>

Send t to g−e.

</details>
<details>
<summary>Hint 2</summary>

Augmentation sends g to one.

</details>
<details>
<summary>Full solution</summary>

The relation (g−e)^p=g^p−e=0 gives a homomorphism from k[t]/(t^p). It is onto because g=e+t, and both dimensions are p, so it is an isomorphism. Augmentation becomes evaluation at t=0. Its kernel is therefore (t), spanned by t,…,t^(p−1). This ideal is nilpotent of index p.

</details>

### REP-13-03 — Kernel dimensions recover blocks

Suppose N^5=0 and the successive kernel dimensions are 3,5,6,7,7. Determine the nilpotent block lengths.

<details>
<summary>Hint 1</summary>

Take successive differences, including dim ker N^0=0.

</details>
<details>
<summary>Hint 2</summary>

The differences count blocks of length at least s.

</details>
<details>
<summary>Full solution</summary>

The differences are 3,2,1,1,0. Thus there are three blocks in total; two have length at least two, one at least three, one at least four and none at least five. Exact counts are one block of length one, one of length two, none of length three and one of length four. The lengths 1,2,4 sum to seven, the total dimension.

</details>

### REP-13-04 — All composition factors

Find a composition series of J_r and its simple factors.

<details>
<summary>Hint 1</summary>

Use powers of t from the bottom of the nilpotent chain.

</details>
<details>
<summary>Hint 2</summary>

The quotient between adjacent powers is killed by t.

</details>
<details>
<summary>Full solution</summary>

The chain 0<t^(r−1)J_r<⋯<tJ_r<J_r has one-dimensional consecutive quotients. On each, multiplication by t is zero, so g=e+t acts as one. Thus all r factors are the trivial simple line. Jordan–Hölder shows every composition series has that same multiset, although the module is indecomposable for r>1.

</details>

### REP-13-05 — A Hom calculation

Calculate dim Hom_(C_p)(J_2,J_4) when p≥5.

<details>
<summary>Hint 1</summary>

The image y of 1 must satisfy t²y=0.

</details>
<details>
<summary>Hint 2</summary>

Write y in the basis 1,t,t²,t³ of J_4.

</details>
<details>
<summary>Full solution</summary>

For y=a+bt+ct²+dt³, multiplication by t² gives at²+bt³. This vanishes exactly when a=b=0. Thus y can be any combination of t²,t³, giving a two-dimensional Hom space. Every such choice defines a unique module map because the source relation t²=0 is respected.

</details>

### REP-13-06 — Projective dimensions

Show a projective C_p-module has dimension divisible by p. Is divisibility alone sufficient?

<details>
<summary>Hint 1</summary>

Projectives are sums of J_p blocks.

</details>
<details>
<summary>Hint 2</summary>

Compare p trivial lines with the regular block.

</details>
<details>
<summary>Full solution</summary>

A projective is J_p^(⊕m), so its dimension is mp. Divisibility is not sufficient: p trivial lines have dimension p but all nilpotent blocks have length one, so this module is not projective. The regular J_p is projective of the same dimension. The block structure, not only dimension, decides the property.

</details>

### REP-13-07 — Failure of trace classification

Compare the ordinary k-valued characters of J_r and r trivial lines.

<details>
<summary>Hint 1</summary>

Every generator power acts unipotently on J_r.

</details>
<details>
<summary>Hint 2</summary>

Trace adds diagonal entries, ignoring the nilpotent off-diagonal part.

</details>
<details>
<summary>Full solution</summary>

For every group element g^a, its action on J_r is (I+N)^a and has all diagonal entries one in a nilpotent-chain basis. Its trace is r interpreted in k. The same constant trace occurs on r trivial lines. For r>1 their fixed-space dimensions are one and r, so they are nonisomorphic. Ordinary modular trace therefore does not classify modules even when integer dimension is supplied separately.

</details>

### REP-13-08 — Composition factors do not split

Explain why Jordan–Hölder does not imply V≅⊕_i V_i/V_(i−1).

<details>
<summary>Hint 1</summary>

Its conclusion is about a multiset of quotient isomorphism classes.

</details>
<details>
<summary>Hint 2</summary>

Use J_2 and two trivial lines.

</details>
<details>
<summary>Full solution</summary>

The theorem compares filtrations; it does not construct sections of their quotient maps. J_2 has two trivial factors but has only one invariant line, so it is not a direct sum of two trivial lines. A splitting would provide an invariant complementary line, which does not exist. Complete reducibility is an additional property proved by Maschke only under its characteristic hypothesis.

</details>

### REP-13-09 — A good individual module in bad characteristic

Why does the splitting k³=ku⊕W for S_3 in characteristic two not contradict the converse to Maschke?

<details>
<summary>Hint 1</summary>

The converse asserts a failure for some representations.

</details>
<details>
<summary>Hint 2</summary>

The regular representation is the universal counterexample.

</details>
<details>
<summary>Full solution</summary>

When p divides |G|, Maschke's converse says not every representation is completely reducible. It does not say every representation fails. In the characteristic-two coordinate module, ε(u)=3=1 allows that particular splitting, and W is simple. The regular k[S_3] still has an augmentation quotient with no equivariant section, so complete reducibility fails elsewhere.

</details>

### REP-13-10 — A nonsplit sign extension

Reproduce the argument that the characteristic-three sum-zero S_3 plane contains no sign line.

<details>
<summary>Hint 1</summary>

A sign vector must be negated by (12).

</details>
<details>
<summary>Hint 2</summary>

Then impose negation by (23).

</details>
<details>
<summary>Full solution</summary>

A vector negated by (12) has (b,a,c)=(-a,-b,-c), hence b=−a and c=0 because two is nonzero in characteristic three. It is (a,−a,0). Negation by (23) would require its fixed first coordinate a to equal −a, so a=0. Thus there is no nonzero sign vector. The trivial subline has sign quotient but no sign complement.

</details>

### REP-13-11 — Brauer domain for C_p

What are the p-regular elements of C_p, and what can a Brauer character distinguish among its modules?

<details>
<summary>Hint 1</summary>

Every nonidentity element has order p.

</details>
<details>
<summary>Hint 2</summary>

At the identity the lifted eigenvalue sum is the integer dimension.

</details>
<details>
<summary>Full solution</summary>

Only e is p-regular. A Brauer character is therefore specified here by its value dim V at e. It distinguishes different dimensions, unlike a k-valued trace that reduces them modulo p, but it cannot distinguish modules of equal dimension. In particular J_r and r trivial lines have the same Brauer character and different extension structure.

</details>

### REP-13-12 — The nilpotent-chain projection

Verify PN=NP for the operator P in Theorem 13.3.

<details>
<summary>Hint 1</summary>

In PN the term j=0 contains N^m and vanishes.

</details>
<details>
<summary>Hint 2</summary>

Shift j to j+1 in NP.

</details>
<details>
<summary>Full solution</summary>

We have
PN(w)=Σ_(j=0)^(m−1)λ(N^(m−j)w)N^jv.
Its j=0 term is zero since N^m=0. Also
NP(w)=Σ_(j=0)^(m−2)λ(N^(m−1−j)w)N^(j+1)v.
Replacing j+1 by j makes this the same sum over j=1,…,m−1. Thus PN=NP and ker P is N-invariant. The projection splits a full chain block, not its individual one-dimensional factors.

</details>

## 10. Summary and next connection

Modular representations retain well-defined simple composition factors, but their extensions need not split. Cyclic prime-order groups make the distinction explicit through nilpotent blocks, projectives and trace failures. Small S_3 examples show both a simple module in bad characteristic and a nonsplit extension. Brauer characters repair some trace information while still omitting extension structure. The final [character-table project](project-compute-a-character-table.md) returns to the complex semisimple setting and states exactly what its certificate proves.
`;export{e as default};