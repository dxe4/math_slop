var e=`---
parent_id: book-galois-theory
chapter_id: norm-trace-normal-basis
title: "Norm, Trace and the Normal Basis Theorem"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Norm, Trace and the Normal Basis Theorem

Multiplication by one field element is a linear transformation. Its determinant and trace produce elements of the base field even when a convenient list of conjugates is unavailable. In a separable extension the same invariants become a product and a sum over embeddings. For a Galois extension a further theorem supplies a basis consisting of all conjugates of one element.

Use the [finite correspondence](fundamental-theorem-galois-theory.md), [finite fields](finite-fields-galois-groups.md), determinants, polynomial Euclidean algorithms and the Chinese remainder theorem. Every extension in this chapter is finite. We state explicitly when separability or normality is needed; the definitions of norm and trace themselves require neither.

## 1. Multiplication matrices

**Definition 9.1.** For E/F of degree n and a∈E, let μₐ:E→E be the F-linear map x↦ax. Define
$$N_{E/F}(a)=\\det(\\mu_a),\\qquad \\operatorname{Tr}_{E/F}(a)=\\operatorname{tr}(\\mu_a).$$
Changing an F-basis conjugates the representing matrix, so neither quantity depends on the chosen basis. Its characteristic polynomial also lies in F[x]. The element a need not generate E: one always uses the full n-dimensional multiplication map.

**Proposition 9.2.** Norm is multiplicative, trace is F-linear, and N(a)=0 exactly when a=0. For c∈F, N(c)=cⁿ and Tr(c)=nc.

*Proof.* The identities μₐᵦ=μₐμᵦ and μₐ₊ᵦ=μₐ+μᵦ give multiplicativity and additivity by determinant and trace rules. Likewise μ_ca=cμₐ gives F-linearity of trace. If a≠0, multiplication by a⁻¹ is the inverse of μₐ, so its determinant is nonzero; if a=0, the map is zero and its determinant vanishes for n≥1. A base scalar acts by cIₙ, proving the last formulas. ∎

Norm is generally not additive and trace is generally not multiplicative. Their different algebraic laws are exactly what their determinant and trace definitions predict. In characteristic dividing n, Tr(1) can vanish even in a separable extension; that does not mean the whole trace map vanishes.

## 2. The embedding formulas

**Theorem 9.3.** If E/F is separable of degree n and σ₁,…,σₙ are its embeddings into an algebraic closure, then
$$N_{E/F}(a)=\\prod_i\\sigma_i(a),\\qquad
\\operatorname{Tr}_{E/F}(a)=\\sum_i\\sigma_i(a).$$

*Proof.* By the primitive element theorem write E=F(θ), with distinct conjugates θᵢ=σᵢ(θ). Relative to the basis 1,θ,…,θⁿ⁻¹, let Mₐ be the multiplication matrix of a. The Vandermonde matrix V with entry Vᵢⱼ=θᵢ^(j−1) is invertible because its determinant is a product of nonzero differences of conjugates.

Applying σᵢ to a times each basis element gives the row identity
$$VM_a=\\operatorname{diag}(\\sigma_1(a),\\ldots,\\sigma_n(a))V.$$
The coefficients of Mₐ lie in F and are fixed by each embedding. Thus Mₐ is similar over the closure to that diagonal matrix. Taking determinant and trace proves both formulas. The original F-valued matrix definition already shows that the resulting product and sum belong to F. ∎

Normality is not required: the embeddings may have different image fields inside the common closure. If E/F is Galois they are its automorphisms, so the formulas can be indexed by the Galois group.

**Proposition 9.4 (Tower formulas in the separable case).** For a finite separable tower F⊆K⊆E,
$$N_{E/F}=N_{K/F}\\circ N_{E/K},\\qquad
\\operatorname{Tr}_{E/F}=\\operatorname{Tr}_{K/F}\\circ\\operatorname{Tr}_{E/K}.$$

*Proof.* Every embedding of K into the closure extends to exactly [E:K] embeddings of E, by separability and the root-count argument. Group the embedding product or sum for E/F according to its restriction τ on K. The product over extensions of τ equals τ(N_(E/K)(a)), and the sum equals τ(Tr_(E/K)(a)), by transporting the embedding formulas through τ. Taking the product or sum over all τ gives the stated compositions. ∎

The tower identities also hold for arbitrary finite extensions, but this proof establishes exactly their separable form and will be used only there. The proof above does not silently count one inseparable embedding as several distinct maps.

## 3. Trace detects every nonzero direction

**Theorem 9.5 (Nondegenerate trace pairing).** If E/F is finite separable and a≠0, there is b∈E with Tr(ab)≠0. Thus the bilinear form (a,b)↦Tr(ab) is nondegenerate.

*Proof.* If Tr(ab)=0 for every b, the embedding formula gives
$$\\sum_i\\sigma_i(a)\\sigma_i(b)=0\\quad\\text{for every }b\\in E.$$
Artin independence of the distinct homomorphisms σᵢ forces every coefficient σᵢ(a) to vanish. Each σᵢ is injective, contradicting a≠0. ∎

In particular trace is a nonzero F-linear map to the one-dimensional space F and hence is surjective. This does not require Tr(1)≠0. The witnessing b can depend on a; nondegeneracy is not a claim that every pair of nonzero elements has nonzero trace product.

**Example 9.6 (A quadratic multiplication matrix).** Let E=F(u), with u²=d and x²−d irreducible, char F≠2. Multiplication by a+bu in the basis 1,u has matrix
$$\\begin{pmatrix}a&bd\\\\b&a\\end{pmatrix}.$$
Therefore N(a+bu)=a²−db² and Tr(a+bu)=2a. The two embeddings send u to ±u and give the same product and sum. For Q(√2), the element 1+√2 has norm −1 and inverse √2−1. The negative norm is compatible with a nonzero field element; norm is a determinant and need not be positive.

**Example 9.7 (A nonnormal cubic).** For E=Q(ρ), ρ³=2, the three embeddings send ρ to ρ,ωρ,ω²ρ. Their sum is zero and their product is two. Thus Tr(ρ)=0 and N(ρ)=2, even though only one of these embeddings is an automorphism of the real field E. Also
$$(1+\\rho)(1-\\rho+\\rho^2)=3,$$
so (1+ρ)⁻¹=(1−ρ+ρ²)/3. The product of its three conjugates is 1+ρ³=3, agreeing with that denominator and with the multiplication determinant.

**Example 9.8 (Trace when the degree is zero in the field).** In F₄=F₂(u), u²+u+1=0, the two conjugates of u are u and u²=u+1. Consequently Tr(u)=1 and N(u)=u³=1, while Tr(1)=1+1=0. The trace pairing remains nondegenerate by the theorem. In F₉=F₃(i), i²=−1, the conjugates of 1+i are 1±i, giving norm two and trace two. These calculations use finite-field Frobenius, not complex conjugation as an operation on a finite field.

## 4. A basis made of conjugates

**Definition 9.9.** For a finite Galois extension E/F with group G, a normal basis is an F-basis of the form {σ(α):σ∈G} for one α∈E. The element α is called a normal basis generator. A primitive field generator need not be a normal basis generator.

**Theorem 9.10 (Normal basis theorem).** Every finite Galois extension has a normal basis.

*Proof when F is infinite.* Write |G|=n and choose an F-basis e₁,…,eₙ of E. The n-by-n matrix S=(σ(eⱼ)) with rows indexed by σ∈G is invertible over E. Otherwise its rows would have an E-linear relation, and evaluating that relation on every F-linear combination of the eⱼ would contradict Artin independence.

Introduce independent variables X_g indexed by G and form the group matrix A=(X_(στ⁻¹)), with rows σ and columns τ. Its determinant is a nonzero polynomial: the term X_1ⁿ occurs from the identity permutation of rows and columns and from no other term, so has coefficient one.

For coordinates t₁,…,tₙ, replace X_g by the linear form ∑ⱼg(eⱼ)tⱼ. These n linear forms are an invertible change of variables over E because S is invertible, so the resulting determinant polynomial is still nonzero. A nonzero polynomial over E cannot vanish at every point of Fⁿ when F is infinite. This follows by induction on the number of variables, viewing it as a one-variable polynomial and using the finite root bound after choosing values making a nonzero coefficient survive.

Choose c∈Fⁿ where it is nonzero and set α=∑eⱼcⱼ. The resulting matrix has entries στ⁻¹(α) and is invertible. A proposed F-linear relation among τ⁻¹(α), after applying each σ, gives a null vector of that matrix, hence has all coefficients zero. There are n independent conjugates, so they form a basis.

*Proof when F is finite.* Write F=F_q and E=F_(qⁿ), with Frobenius T(a)=a^q. The maps 1,T,…,Tⁿ⁻¹ are distinct field automorphisms and hence independent over E by Artin, in particular independent over F. Therefore no polynomial of degree below n annihilates T as an F-linear operator. Since Tⁿ=1, its minimal polynomial has degree exactly n.

We use the following elementary cyclic-vector fact: a linear operator on an n-dimensional space whose minimal polynomial has degree n has a vector v for which v,Tv,…,Tⁿ⁻¹v is a basis. Here is a proof retaining repeated factors. Factor the minimal polynomial as ∏pᵢ^aᵢ. Polynomial Bézout and the Chinese remainder theorem give projections onto the primary spaces Vᵢ=ker pᵢ(T)^aᵢ, with direct sum the whole space. The minimal polynomial on Vᵢ is exactly pᵢ^aᵢ; otherwise the whole operator would have a smaller annihilating polynomial. Choose vᵢ with pᵢ(T)^(aᵢ−1)vᵢ≠0. Its annihilator is therefore pᵢ^aᵢ. For v=∑vᵢ, a polynomial annihilates v exactly when it annihilates each component, so its monic annihilator is the product ∏pᵢ^aᵢ. The cyclic span of v has dimension equal to that polynomial degree, n, because reduction modulo its annihilator gives the independent basis of powers. It is the whole space, proving the fact.

Apply this fact to Frobenius. Its cyclic vector α has conjugates α,α^q,…,α^(q^(n−1)) forming a basis, as required. ∎

No assumption that the characteristic is prime to n was used. In the finite-base argument the polynomial xⁿ−1 can have repeated factors, and the primary-space proof expressly permits them. The infinite-base argument cannot be applied to finite F by saying a nonzero polynomial has a nonzero value there; that assertion fails over a finite field.

## 5. What normal generators need not do

In Q(√d), conjugates of α=a+b√d form a basis exactly when a and b are both nonzero. Their coordinate determinant in 1,√d is −2ab. Thus √d is a primitive field generator but not a normal basis generator: its two conjugates are negatives and dependent. The element 1+√d is normal. In F₄, u and u²=u+1 are independent over F₂, so u is normal; the fixed element one is not.

For a normal basis generator α, the sum of its conjugates cannot be zero: that would be a nontrivial relation with every coefficient one. Hence its trace is nonzero. The converse is not automatic in higher degree; a nonzero trace only rules out that particular relation, not every possible dependence.

## 6. Dual coordinates from the trace pairing

**Proposition 9.11 (Trace-dual basis).** For any basis $e_1,\\ldots,e_n$ of a finite separable extension, there is a unique basis $e_1^*,\\ldots,e_n^*$ satisfying
$$\\operatorname{Tr}(e_i e_j^*)=\\delta_{ij}.$$
Every $a\\in E$ then has the coordinate formula
$$a=\\sum_i\\operatorname{Tr}(a e_i^*)e_i.$$

*Proof.* Form the Gram matrix $B=(\\operatorname{Tr}(e_i e_j))$. A vector in its kernel would give an element $b=\\sum c_j e_j$ with $\\operatorname{Tr}(e_i b)=0$ for every $i$ and hence for every first argument. Nondegeneracy forces $b=0$, so every $c_j=0$ and $B$ is invertible. Its inverse columns supply the required coordinates of the dual elements. The defining equations also prove uniqueness. If $a=\\sum c_i e_i$, taking trace against $e_j^*$ extracts $c_j$, giving the displayed expansion. ∎

This is a way to recover coordinates through field invariants rather than a second independent coordinate convention. In a quadratic extension $u^2=d$ of characteristic different from two, the basis $1,u$ has trace Gram matrix $\\operatorname{diag}(2,2d)$. Its trace-dual basis is $1/2,u/(2d)$. Pairing $a+bu$ against those elements returns $a$ and $b$ exactly, as direct multiplication confirms.

The determinant of the trace Gram matrix is the discriminant of the chosen basis. If a new basis is related by an invertible matrix $C$ over $F$, its Gram matrix is $C^TBC$, so the determinant changes by the square $(\\det C)^2$. Nonvanishing is therefore independent of basis in a separable extension. This is the linear-algebra reason that discriminant square classes, rather than one unqualified numerical determinant, can be compared across different bases. The quadratic calculation gives basis discriminant $4d$, matching the familiar root-difference square for $x^2-d$.

In characteristic two, a separable quadratic can instead have equation $u^2+u+a=0$. Its two conjugates are $u$ and $u+1$, so the basis $1,u$ has trace Gram matrix $\\begin{pmatrix}0&1\\\\1&1\\end{pmatrix}$, with nonzero determinant one. Its trace-dual basis is $1+u,1$. This example confirms that a zero trace of one does not make the trace pairing singular; the characteristic assumption in the earlier diagonal quadratic example belonged to that presentation, not to nondegeneracy itself.

## A trace Gram matrix is not a positive metric

In Q(i), use the basis one,i. The trace pairing has diagonal Gram entries two and minus two, with zero off-diagonal entries. Its determinant is minus four and is nonzero, so the pairing is nondegenerate. Yet the value on i paired with itself is negative. The pairing is bilinear over the base, not a positive-definite Hermitian inner product.

The field norm of a+bi is instead a²+b², positive for a nonzero element under the rational real embedding. Thus a trace quadratic expression and the multiplicative norm can have different sign behavior even in the same elementary field. Nondegeneracy supports dual coordinates; it does not supply Euclidean lengths.

Trace-dual coordinates have an explicit quadratic form. Over the rationals take the basis one,√d for a nonsquare nonzero d. Its dual basis is one-half and √d divided by twice d: tracing their products with the original basis gives the two identity diagonal values and zero off-diagonal values. For an element a+b√d, the resulting coordinate traces are a and b respectively. This computes coordinates using the base-linear trace functional without choosing an embedding into real numbers or a positive inner product. The same formula works for negative d, when the field has no real embedding at all, showing that the coordinate construction is algebraic rather than metric.

## Exercises

### Exercise 9.1 — A quadratic norm
<a id="galois-norm-trace-ex-1"></a>

Find norm, trace and inverse of 3+2√2 over Q.

<details>
<summary>Hint</summary>

Multiply by the conjugate and use the quadratic formulas.

</details>

<details>
<summary>Solution</summary>

The conjugate is 3−2√2. Their product is 9−8=1, so the norm is one and the inverse is 3−2√2. Their sum is six, the trace. Multiplying verifies the inverse directly. In the basis 1,√2 the multiplication matrix has columns (3,2) and (4,3), whose determinant is one and trace six.

</details>

### Exercise 9.2 — A base scalar
<a id="galois-norm-trace-ex-2"></a>

For [E:F]=6 compute N(c) and Tr(c) for c∈F, including characteristic three.

<details>
<summary>Hint</summary>

Multiplication by a base scalar is cI₆.

</details>

<details>
<summary>Solution</summary>

Its determinant is c⁶ and trace is 6c. In characteristic three the trace of every base scalar is zero, while the norm is still c⁶. This calculation does not show the whole trace map on E is zero. If E/F is separable, nondegeneracy proves some elements outside that base line have nonzero trace.

</details>

### Exercise 9.3 — An inseparable contrast
<a id="galois-norm-trace-ex-3"></a>

For E=F_p(t)(u), uᵖ=t, show N(u)=t and Tr(u)=0. Why cannot a sum over distinct embeddings give the trace formula here?

<details>
<summary>Hint</summary>

Use the companion multiplication matrix for the irreducible polynomial xᵖ−t.

</details>

<details>
<summary>Solution</summary>

The basis is 1,u,…,u^(p−1); multiplication by u shifts successive basis elements and sends the last to t. Its characteristic polynomial is xᵖ−t, so its trace is zero and its determinant is (−1)^(p+1)t=t in characteristic p. There is only one distinct base embedding, fixing u. Its single image would give trace u, not zero. Separability fails, so the distinct-embedding formula is unavailable.

</details>

### Exercise 9.4 — A finite-field product
<a id="galois-norm-trace-ex-4"></a>

Prove N_(F_(qⁿ)/F_q)(a)=a^((qⁿ−1)/(q−1)) for a≠0.

<details>
<summary>Hint</summary>

Multiply all Frobenius conjugates.

</details>

<details>
<summary>Solution</summary>

The embeddings are powers of Frobenius, so the norm is a·a^q⋯a^(q^(n−1))=a^(1+q+⋯+q^(n−1)). The geometric sum equals (qⁿ−1)/(q−1). The result lies in F_q by the norm definition or by applying Frobenius to the product. For a=0 the norm is separately zero.

</details>

### Exercise 9.5 — Surjective finite-field norm
<a id="galois-norm-trace-ex-5"></a>

Show the norm map from F_(qⁿ)× onto F_q× is surjective.

<details>
<summary>Hint</summary>

Apply the preceding power formula to a multiplicative generator.

</details>

<details>
<summary>Solution</summary>

Choose g generating the cyclic group of order qⁿ−1. Its norm is g^s with s=(qⁿ−1)/(q−1), which has order (qⁿ−1)/s=q−1. The norm lies in F_q× and generates its whole group of that size. Thus every nonzero base element is the norm of a power of g. The cyclicity of finite multiplicative subgroups was proved in the primitive element chapter.

</details>

### Exercise 9.6 — Zero trace of one
<a id="galois-norm-trace-ex-6"></a>

In F₄=F₂(u), compute the trace of all four elements.

<details>
<summary>Hint</summary>

Trace is a+a² and u²=u+1.

</details>

<details>
<summary>Solution</summary>

Tr(0)=0 and Tr(1)=0. Tr(u)=u+u²=1, and Tr(u+1)=Tr(u)+Tr(1)=1. The image is all of F₂ although the trace of one vanishes. The kernel is {0,1}, a one-dimensional F₂-subspace, exactly as a nonzero linear map from dimension two to dimension one requires.

</details>

### Exercise 9.7 — Normal versus primitive
<a id="galois-norm-trace-ex-7"></a>

Decide whether √3 and 1+√3 are normal generators of Q(√3)/Q.

<details>
<summary>Hint</summary>

Compare their two conjugates as vectors in the basis 1,√3.

</details>

<details>
<summary>Solution</summary>

The conjugates of √3 are √3 and −√3, so they are dependent and do not form a normal basis, although √3 generates the field. The conjugates of 1+√3 are 1±√3. Their coordinate determinant is −2, nonzero, so they form a normal basis. Distinct conjugates need not be linearly independent merely because the extension is separable.

</details>

### Exercise 9.8 — Trace of a normal generator
<a id="galois-norm-trace-ex-8"></a>

Prove a normal basis generator has nonzero trace, even if the characteristic divides the extension degree.

<details>
<summary>Hint</summary>

A zero trace would be one particular relation among the basis elements.

</details>

<details>
<summary>Solution</summary>

The trace is the sum of all conjugates in a Galois extension. If it were zero, the normal basis would have a linear relation whose coefficient on every basis element is one. Those coefficients are nonzero in every field, including characteristic dividing the number of terms. This contradicts independence. The argument concerns coefficients on distinct basis vectors, not the scalar sum n·1.

</details>

### Exercise 9.9 — Independence behind a matrix
<a id="galois-norm-trace-ex-9"></a>

Why is the matrix (σᵢ(eⱼ)) invertible in the normal basis proof?

<details>
<summary>Hint</summary>

A relation between rows extends from the basis to every element by base linearity.

</details>

<details>
<summary>Solution</summary>

If ∑cᵢσᵢ(eⱼ)=0 for every basis index j, then for any x=∑aⱼeⱼ with aⱼ∈F, the same coefficients give ∑cᵢσᵢ(x)=0 by linearity and fixation of the aⱼ. Artin independence forces all cᵢ=0. Thus the n rows are independent over E in an n-dimensional row space, making the matrix invertible.

</details>

### Exercise 9.10 — A nonzero polynomial over a finite field
<a id="galois-norm-trace-ex-10"></a>

Give a nonzero polynomial vanishing at every element of F_q, and explain its relevance to the two normal basis proofs.

<details>
<summary>Hint</summary>

Use the universal polynomial of degree q.

</details>

<details>
<summary>Solution</summary>

The polynomial x^q−x is nonzero and vanishes at every element of F_q. Thus a nonzero determinant polynomial need not have a nonzero value on the finite coordinate grid F_qⁿ. The infinite-base proof uses infinitude precisely at that selection step. For finite bases the Frobenius operator and its degree-n minimal polynomial provide a different proof, avoiding that invalid selection.

</details>

### Exercise 9.11 — An inverse from a norm
<a id="galois-norm-trace-ex-11"></a>

For ρ³=2, derive the inverse of 1+ρ and compute its norm and trace over Q.

<details>
<summary>Hint</summary>

Use the factorisation of 1+ρ³ and the three embeddings of the cubic field.

</details>

<details>
<summary>Solution</summary>

The identity (1+ρ)(1−ρ+ρ²)=3 gives inverse (1−ρ+ρ²)/3. The product of the conjugates of 1+ρ is 1+ρ³=3, so its norm is three. Their sum is three plus the zero sum of conjugates of ρ, so the trace is three. The extension is separable but nonnormal; all three embeddings, not only its lone automorphism, are needed.

</details>

### Exercise 9.12 — A tower norm
<a id="galois-norm-trace-ex-12"></a>

In E=Q(√2,√3), first take norm to K=Q(√2) of √2+√3, then norm to Q. Compare with the four-conjugate product.

<details>
<summary>Hint</summary>

The relative conjugation negates √3 and fixes √2.

</details>

<details>
<summary>Solution</summary>

The relative norm is (√2+√3)(√2−√3)=−1 in K. Its norm from K to Q is (−1)²=1. The four conjugates over Q are ±√2±√3; pairing those differing in the √3 sign gives −1 for each √2 sign, so their total product is one. This directly verifies the separable tower formula for this element.

</details>

## Summary

Norm and trace are basis-independent invariants of multiplication maps. Separability identifies them with a conjugate product and sum and makes the trace pairing nondegenerate. A finite Galois extension always admits a basis consisting of one element's conjugates, with separate proofs for infinite and finite base fields. These tools prepare the next chapter's construction of radical generators from cyclic automorphisms.
`;export{e as default};