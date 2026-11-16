
# Orthonormal Bases and Riesz Representation

Orthogonal projection solves one approximation problem. An orthonormal basis organizes all of those problems at once: each vector is determined by scalar coefficients, finite partial sums are optimal approximations, and the squared norm is the sum of squared coefficients. Riesz representation gives a complementary statement: every continuous scalar measurement is an inner product with one vector. Together these results turn Hilbert-space duality into explicit geometry.

Preparation is [Hilbert Spaces and Projection](hilbert-spaces.md), [Hahn–Banach and the bidual](hahn-banach.md), and [Weak Compactness and Reflexivity](weak-topologies-alaoglu-reflexivity.md). We continue the convention that the inner product is linear in the first argument. Consequently a linear functional has form \(x\mapsto\langle x,y\rangle\), and the correspondence from representing vectors to functionals is conjugate linear in complex spaces.

The goals are to prove Bessel and Parseval identities, distinguish an orthonormal family from a complete one, construct bases in separable and general Hilbert spaces, prove Riesz representation, and derive Hilbert adjoints and reflexivity. No Fourier completeness theorem is assumed merely because trigonometric functions are orthogonal.

## Finite orthogonal sums and Bessel's inequality

**Definition 8.1 (Orthonormal family).** A family \((e_j)\) is orthonormal when \(\langle e_j,e_k\rangle=0\) for distinct indices and every member has norm one. It is complete, or an orthonormal basis, if the closure of its linear span is the whole space. Here basis means convergence in the Hilbert norm, not finite Hamel expansion.

For finitely many members, the projection of \(x\) onto their span is
\[
 P_Fx=\sum_{j\in F}\langle x,e_j\rangle e_j.
\]
Taking the inner product with any chosen \(e_k\) proves the residual perpendicular to the span, so the preceding chapter's theorem identifies the projection.

**Theorem 8.2 (Bessel's inequality and finite error).** For every finite index set \(F\),
\[
 \|x-P_Fx\|^2=\|x\|^2-\sum_{j\in F}|\langle x,e_j\rangle|^2.
\]
In particular the coefficient square sum over \(F\) is at most \(\|x\|^2\).

*Proof.* The projection and residual are orthogonal, so Pythagoras splits the squared norm. Orthogonality within the projection gives its squared norm as the sum of coefficient squares, with all cross terms zero. Rearranging proves the identity and nonnegativity proves the bound. ∎

For a countable family the increasing finite sums are therefore bounded and converge. For an arbitrary family, only countably many coefficients of a fixed vector are nonzero. Indeed the set of coefficients with modulus at least \(1/n\) must be finite for each positive integer \(n\), by the finite Bessel bound; the union of those finite sets contains every nonzero coefficient. Thus a single vector's orthogonal expansion always reduces to at most countably many terms, even if the whole Hilbert space has no countable basis.

**Worked example 8.3 (Orthogonality alone misses directions).** In \(\ell^2\), take only the even coordinate vectors \(e_2,e_4,\ldots\). They are orthonormal. For \(x=e_1\), every corresponding coefficient is zero, so their coefficient square sum is zero while \(\|x\|^2=1\). Bessel is valid, but Parseval equality for every vector is false because the family is incomplete. The closed span consists of sequences supported on even coordinates and misses the entire odd-coordinate subspace.

## Series synthesis and Parseval

**Theorem 8.4 (Orthonormal synthesis).** For a countable orthonormal family and square-summable scalars \((a_n)\), the series \(\sum a_ne_n\) converges in Hilbert norm to a vector \(s\), with
\[
 \|s\|^2=\sum|a_n|^2,
 \qquad \langle s,e_n\rangle=a_n.
\]
Its sum is unchanged by reordering the terms.

*Proof.* The squared norm of a difference of finite partial sums is the sum of the corresponding \(|a_n|^2\). Tails tend to zero, so the partial sums are Cauchy and completeness supplies a limit. Passing inner products and norms to the limit gives the coefficient and norm identities. Given a tolerance, choose a finite initial set outside which the square sum is small. Every sufficiently long permuted partial sum includes that finite set, and the squared norm of the remaining difference is bounded by that same tail. Hence any ordering converges to the same sum. ∎

**Theorem 8.5 (Basis expansion and Parseval).** A complete orthonormal family gives
\[
 x=\sum_j\langle x,e_j\rangle e_j,
 \qquad \|x\|^2=\sum_j|\langle x,e_j\rangle|^2.
\]
For an arbitrary orthonormal family, its coefficient series instead converges to the projection onto its closed span. It is complete exactly when its orthogonal complement is zero.

*Proof.* Bessel and the countability observation make synthesis applicable to the nonzero coefficients; call the sum \(s\). The residual \(x-s\) is perpendicular to every family member by continuity of inner products, hence to its closed span. The vector \(s\) belongs to that span, so the unique orthogonal decomposition identifies it as the projection. Completeness makes the residual zero. Conversely a proper closed span has nonzero orthogonal complement by the projection theorem, proving the last equivalence. The synthesis norm identity gives Parseval when the span is the whole space. ∎

**Worked example 8.6 (An exact approximation tail).** In \(\ell^2\), the standard coordinate family is complete because truncations converge in square norm. For \(x_n=2^{-n}\), its first \(N\) coordinates give the best approximation in their coordinate span. The squared residual is
\[
 \sum_{n>N}4^{-n}=\frac{4^{-N}}3,
\]
so its norm is \(2^{-N}/\sqrt3\). This is an exact error identity, not merely an upper bound. Any other vector in that same finite coordinate span has squared error equal to this quantity plus its squared distance from the truncation.

For two vectors, the same expansions give the inner-product identity
\(\langle x,y\rangle=\sum_j\langle x,e_j\rangle\overline{\langle y,e_j\rangle}\). Absolute convergence follows from scalar Cauchy–Schwarz. Passing finite inner products to limits establishes the formula without treating a double infinite sum as automatically rearrangeable.

## Existence and the role of separability

**Theorem 8.7 (Orthonormal bases exist).** Every Hilbert space has a complete orthonormal family. A separable Hilbert space has a finite or countable one.

*Proof.* For the general statement, order orthonormal subsets by inclusion. A chain's union is orthonormal because any pair of vectors lies together in some member of the chain. Zorn's lemma gives a maximal family. If its closed span were proper, orthogonal projection would supply a nonzero vector in the perpendicular complement; normalizing and adjoining it contradicts maximality. Thus it is complete.

For the separable statement, take a countable dense sequence \((d_n)\). Process each vector in turn: subtract its projection onto the finite span already chosen. If the residual is nonzero, normalize and append it; if zero, skip it. This Gram–Schmidt procedure creates at most countably many orthonormal vectors and ensures each processed \(d_n\) belongs to the span available at that stage. The final closed span therefore contains the dense sequence and is the whole space. A finite termination gives a finite basis. ∎

The general basis theorem uses a choice principle explicitly, as did Hahn–Banach. The constructive countable procedure needs a dense sequence. A statement about one vector's countably many nonzero coefficients does not imply the whole space is separable; different vectors may use different countable subsets of an uncountable basis.

## Every bounded functional is an inner product

**Theorem 8.8 (Riesz representation).** For every \(\phi\in H^*\), there is a unique \(y\in H\) with
\[
 \phi(x)=\langle x,y\rangle\quad(x\in H),
 \qquad\|\phi\|=\|y\|.
\]

*Proof.* The zero functional is represented by zero. Otherwise its kernel \(M\) is a proper closed subspace. Choose \(z\notin M\), project onto \(M\), and normalize the nonzero residual to a unit vector \(u\in M^\perp\). Its functional value is nonzero, since otherwise it would lie in \(M\cap M^\perp\). For any \(x\), the vector \(x-[\phi(x)/\phi(u)]u\) lies in the kernel. Taking inner product with \(u\) gives
\[
 \langle x,u\rangle=\phi(x)/\phi(u).
\]
Thus \(y=\overline{\phi(u)}u\) represents \(\phi\) under our convention. Cauchy–Schwarz bounds the functional norm by \(\|y\|\), and testing \(x=y/\|y\|\) when nonzero gives equality. If two vectors represent the same functional, their difference is perpendicular to every vector, including itself, so it is zero. ∎

**Worked example 8.9 (Conjugates in the representing vector).** On \(\mathbb C^2\) with \(\langle x,y\rangle=\sum x_j\overline{y_j}\), let \(\phi(x)=2x_1+ix_2\). Its representing vector is \(y=(2,-i)\), not \((2,i)\), because conjugation occurs in the second slot. Its norm and the functional norm are \(\sqrt5\). The unit input \(y/\sqrt5\) attains the positive value \(\sqrt5\). This agrees with the abstract construction and shows why the convention must be stated before identifying the dual with the space.

The map \(R:H\to H^*\), \(Ry=\langle\cdot,y\rangle\), is an isometric bijection that is conjugate linear for complex scalars. It is real linear in real Hilbert spaces. Calling it a complex-linear identity would reverse the scalar behavior and invalidate later adjoint calculations.

## Hilbert adjoints and reflexivity

**Theorem 8.10 (Hilbert adjoint).** For a bounded \(T:H\to K\) between Hilbert spaces, there is a unique bounded linear \(T^*:K\to H\) such that
\[
 \langle Tx,y\rangle_K=\langle x,T^*y\rangle_H.
\]
It satisfies \(\|T^*\|=\|T\|\), \((T^*)^*=T\), and \((ST)^*=T^*S^*\).

*Proof.* For fixed \(y\), the left side is a bounded linear functional of \(x\), so Riesz gives one vector \(T^*y\), of norm at most \(\|T\|\|y\|\). Comparing the identities for scalar combinations of \(y\) and using uniqueness proves linearity, with conjugates in both second slots cancelling. The estimate gives boundedness. Conjugate symmetry of the defining relation shows \((T^*)^*=T\) by uniqueness; applying the norm upper bound to both operators gives equality of norms. The composition identity follows by applying the defining relation twice. ∎

This is a Hilbert-space adjoint, with Hilbert vectors as inputs and outputs. The dual operator in chapter 2 acts between continuous duals. Riesz identifies the two constructions, but their types and scalar conventions should remain visible when they are compared.

**Corollary 8.11 (Hilbert spaces are reflexive).** Every Hilbert space is canonically isometric to its bidual, so its closed unit ball is weakly compact.

*Proof.* Let \(F\in H^{**}\). Since \(R\) is conjugate linear, \(g(y)=\overline{F(Ry)}\) is a bounded linear functional of \(y\). Riesz gives a vector \(z\) with \(g(y)=\langle y,z\rangle\). Hence
\[
 F(Ry)=\overline{\langle y,z\rangle}=\langle z,y\rangle=(Ry)(z).
\]
Surjectivity of \(R\) shows \(F(\phi)=\phi(z)\) for every \(\phi\in H^*\). Thus \(F=Jz\), proving the canonical map onto. The weak compactness conclusion follows from the reflexive unit-ball theorem proved in chapter 6. ∎

Compactness here is weak, not norm compactness. An infinite orthonormal sequence remains norm separated. In a separable Hilbert space, bounded sequences do have weakly convergent subsequences by a direct coordinate argument: diagonalize the countably many bounded coefficient sequences, use finite Bessel bounds to synthesize the limiting coefficients, and approximate any testing vector by a finite expansion. The common bound controls the approximation tails. For a sequence in a nonseparable Hilbert space, its closed linear span is separable, being generated by countably many vectors and rational finite combinations, so the same argument applies inside that span. This is a Hilbert-specific proof; it is not a general replacement of topological weak compactness by a sequence assertion in arbitrary Banach spaces.

## Unitary coordinates preserve all the inner-product geometry

**Definition 8.12 (Unitary map).** A linear bijection \(U:H\to K\) is unitary if \(\langle Ux,Uy\rangle_K=\langle x,y\rangle_H\) for every pair. Over real scalars it is also called orthogonal. A linear surjective isometry is unitary by polarization, so the norm and inner-product formulations agree.

If \(H,K\) have orthonormal bases with the same index set, define \(U\) by keeping coefficients and replacing each basis vector of \(H\) with the corresponding basis vector of \(K\). Every coefficient family used by one vector is square summable and has countable support. Synthesis therefore defines its image, and Parseval shows the norm is unchanged. The same construction in reverse proves surjectivity and supplies the inverse. Finite-sum linearity passes to norm limits, giving a linear map. Polarization then proves it unitary.

Thus every infinite-dimensional separable Hilbert space is isometrically equivalent, through a chosen orthonormal basis, to \(\ell^2\). Choosing coordinates does not make the identification canonical: different orthonormal bases give different coefficient maps. The representation of a particular functional as an inner product, by contrast, is determined uniquely once the Hilbert inner product is fixed.

For a unitary map, the adjoint identities give \(U^*U=I\) and \(UU^*=I\). Indeed inner-product preservation makes \(U^*U=I\), and surjectivity turns that left inverse into the full inverse. Without surjectivity, a linear isometry can have a proper closed range; the right shift on \(\ell^2\) is the standard example. It satisfies \(R^*R=I\), while \(RR^*\) is projection onto the sequences with first coordinate zero. Equal norms of all inputs therefore do not, on their own, make an operator unitary.

These coordinate results explain why abstract Hilbert-space estimates often look like square-sum calculations. They do not say every Banach space admits such coordinates: the parallelogram identity is an essential prerequisite. Nor do they identify a proposed concrete family, such as exponentials or eigenfunctions, as a basis without proving its completeness.

## Adjoint kernels detect the closure of a range

For a bounded map T:H→K between Hilbert spaces, the adjoint identifies all measurements invisible on the range. A vector y lies in (ran T)-perp exactly when <Tx,y>=0 for every x. The adjoint identity makes this equivalent to <x,T*y>=0 for every x, hence to T*y=0. Thus (ran T)-perp=ker T*. Taking orthogonal complements gives the exact identity closure(ran T)=(ker T*)-perp. Interchanging T and T* gives the companion formulas for ran T* and ker T.

Consequently T* is injective if and only if T has dense range. This is a density assertion, not a surjectivity assertion. For example let T on ℓ2 be diagonal with entries 1/n. It is bounded and self-adjoint, and has zero kernel. Every finitely supported target has a finitely supported preimage, so its range is dense. But the target sequence (1/n) lies in ℓ2 and has no ℓ2 preimage, since the required coordinates would all be one. Thus T and T* are injective, with dense range, while neither is onto.

The range in that example is not closed. Finite truncations of (1/n) belong to it and converge to a missing target. Equivalently the unit vectors en have ||Ten||=1/n tending to zero, so no positive lower bound controls the inverse on the image. The earlier closed-range theorem explains this failure of stability. The adjoint's kernel knows the closure of the range, but not whether that closure was already attained.

A lower bound has a convenient Hilbert expression. The inequality ||Tx||≥c||x|| for every x is equivalent to <T*Tx,x>≥c²||x||², since <T*Tx,x>=||Tx||² with our inner-product convention. When c>0 it makes T injective with closed range by the Banach-space result. If also ker T*=0, the range is dense and closed, hence all K; bounded inverse then gives a stable two-sided solution. These two hypotheses control different obstructions: a lower bound excludes collapsing input directions, and the adjoint kernel excludes an unobserved target direction.

The conclusions are useful before any spectral theorem. They use only projection onto closed subspaces, Riesz representation and the adjoint identity. In particular one must not replace closure(ran T) by ran T in a formula merely because the operator is bounded. The diagonal example is an explicit counterexample to that shortcut and will reappear in compact and unbounded inverse problems.

## Exercises

### Exercise 8.1 {#orthonormal-bases-riesz-ex-1}

Derive the finite orthogonal projection formula and its residual norm identity.

<details><summary>Hint 1</summary>
Take the inner product of the proposed residual with each chosen basis vector.
</details>
<details><summary>Hint 2</summary>
Apply Pythagoras after orthogonality is established.
</details>
<details><summary>Solution</summary>
For \(p=\sum_{j\in F}\langle x,e_j\rangle e_j\), orthonormality gives \(\langle x-p,e_k\rangle=0\) for each chosen \(k\). Thus \(p\) is the projection onto their span. Pythagoras gives \(\|x\|^2=\|x-p\|^2+\|p\|^2\), and orthonormality gives \(\|p\|^2=\sum_{j\in F}|\langle x,e_j\rangle|^2\). Rearranging proves the identity.
</details>

### Exercise 8.2 {#orthonormal-bases-riesz-ex-2}

Why does an orthonormal family have at most countably many nonzero coefficients for a fixed vector?

<details><summary>Hint 1</summary>
For each positive integer \(n\), inspect coefficients of modulus at least \(1/n\).
</details>
<details><summary>Hint 2</summary>
Infinitely many such coefficients would violate a finite Bessel bound.
</details>
<details><summary>Solution</summary>
If arbitrarily many coefficients had modulus at least \(1/n\), selecting \(N\) of them would give a square sum at least \(N/n^2\), exceeding \(\|x\|^2\) for large \(N\). Thus each threshold set is finite. Every nonzero coefficient exceeds some positive reciprocal-integer threshold, so all nonzero coefficients lie in a countable union of finite sets and are countable.
</details>

### Exercise 8.3 {#orthonormal-bases-riesz-ex-3}

For \(x_n=3^{-n}\) in \(\ell^2\), compute the best error after retaining the first \(N\) coordinates.

<details><summary>Hint 1</summary>
The squared error is a geometric tail with ratio \(1/9\).
</details>
<details><summary>Hint 2</summary>
Take the square root only after summing the tail.
</details>
<details><summary>Solution</summary>
The squared error is \(\sum_{n>N}9^{-n}=9^{-N}/8\), so the norm error is \(3^{-N}/\sqrt8\). Orthogonal projection makes this the exact minimum over the first-coordinate span. A different approximant has its squared error increased by its squared distance from the truncation.
</details>

### Exercise 8.4 {#orthonormal-bases-riesz-ex-4}

Prove that a complete orthonormal family has zero perpendicular complement, and conversely.

<details><summary>Hint 1</summary>
Continuity extends orthogonality from the family to its closed span.
</details>
<details><summary>Hint 2</summary>
Use the projection theorem if the closed span is proper.
</details>
<details><summary>Solution</summary>
If the closed span is all of \(H\), a vector perpendicular to the family is perpendicular to every vector and hence to itself, so it is zero. Conversely, if the closed span \(M\) is proper, choose \(x\notin M\). Its nonzero projection residual lies in \(M^\perp\) and is perpendicular to the family, contradicting a zero perpendicular complement. Thus the conditions are equivalent.
</details>

### Exercise 8.5 {#orthonormal-bases-riesz-ex-5}

Find the representing vector and norm for \(\phi(x)=x_1-2ix_2+3x_3\) on \(\mathbb C^3\).

<details><summary>Hint 1</summary>
Conjugate the coefficient list to place it in the second inner-product slot.
</details>
<details><summary>Hint 2</summary>
The functional norm is the Euclidean norm of that vector.
</details>
<details><summary>Solution</summary>
The representing vector is \((1,2i,3)\), since its conjugate coefficients are \((1,-2i,3)\). Its norm is \(\sqrt{1+4+9}=\sqrt{14}\), equal to the functional norm by Riesz. A normalized copy of the representing vector attains that value. Omitting the conjugation would change the coefficient of \(x_2\) and represent a different functional.
</details>

### Exercise 8.6 {#orthonormal-bases-riesz-ex-6}

Explain why the Riesz correspondence is conjugate linear rather than complex linear under this chapter's convention.

<details><summary>Hint 1</summary>
Compare the functionals represented by \(y\) and by \(\lambda y\).
</details>
<details><summary>Hint 2</summary>
The second inner-product slot conjugates scalars.
</details>
<details><summary>Solution</summary>
For every input \(x\), \((R(\lambda y))(x)=\langle x,\lambda y\rangle=\overline\lambda\langle x,y\rangle\). Thus \(R(\lambda y)=\overline\lambda Ry\). Addition is preserved, so \(R\) is conjugate linear. This is compatible with a linear functional in the input \(x\); it concerns the different variable parametrizing which functional is represented.
</details>

### Exercise 8.7 {#orthonormal-bases-riesz-ex-7}

Prove uniqueness of a Riesz representing vector without using an orthonormal basis.

<details><summary>Hint 1</summary>
Subtract two proposed representations.
</details>
<details><summary>Hint 2</summary>
Test the resulting identity on the difference of the vectors.
</details>
<details><summary>Solution</summary>
If \(\langle x,y\rangle=\langle x,z\rangle\) for every \(x\), then \(\langle x,y-z\rangle=0\) for all \(x\). Taking \(x=y-z\) gives \(\|y-z\|^2=0\), hence equality. This proof uses definiteness of the inner product and works in nonseparable Hilbert spaces without selecting coordinates.
</details>

### Exercise 8.8 {#orthonormal-bases-riesz-ex-8}

Show the adjoint of an orthogonal projection is itself.

<details><summary>Hint 1</summary>
Decompose both input vectors into subspace and perpendicular parts.
</details>
<details><summary>Hint 2</summary>
Only the two projected parts contribute to the relevant inner products.
</details>
<details><summary>Solution</summary>
If \(P\) projects orthogonally onto \(M\), then \(\langle Px,y\rangle=\langle Px,Py\rangle=\langle x,Py\rangle\), since the omitted parts are perpendicular to \(M\). The defining adjoint identity therefore holds with \(P\) itself, and uniqueness gives \(P^*=P\). General bounded projections need not be orthogonal or self-adjoint.
</details>

### Exercise 8.9 {#orthonormal-bases-riesz-ex-9}

Compute the Hilbert adjoint of the right shift on \(\ell^2\).

<details><summary>Hint 1</summary>
Write the inner product of the shifted sequence with an arbitrary target sequence.
</details>
<details><summary>Hint 2</summary>
Move the target coordinate index one place backward.
</details>
<details><summary>Solution</summary>
For \(Rx=(0,x_1,x_2,\ldots)\), \(\langle Rx,y\rangle=\sum_{n\ge1}x_n\overline{y_{n+1}}\). This equals \(\langle x,Ly\rangle\), where \(L\) is the left shift. Thus \(R^*=L\), and similarly \(L^*=R\). The product identities \(LR=I\), \(RL\ne I\) remain consistent with adjoints reversing composition order.
</details>

### Exercise 8.10 {#orthonormal-bases-riesz-ex-10}

Prove an orthonormal sequence converges weakly to zero but not in norm.

<details><summary>Hint 1</summary>
Bessel bounds the square sum of its pairings with each fixed vector.
</details>
<details><summary>Hint 2</summary>
Use Riesz to cover all bounded functionals.
</details>
<details><summary>Solution</summary>
For any fixed \(y\), Bessel gives \(\sum|\langle y,e_n\rangle|^2\le\|y\|^2\), so those coefficients tend to zero. Conjugate symmetry gives \(\langle e_n,y\rangle\to0\). Riesz says every bounded functional has that form, proving weak convergence to zero. Every \(e_n\) has norm one and distinct terms are distance \(\sqrt2\), so no norm convergence occurs.
</details>

### Exercise 8.11 {#orthonormal-bases-riesz-ex-11}

Why can a Fourier argument not infer completeness of trigonometric functions merely from orthogonality?

<details><summary>Hint 1</summary>
An orthonormal family can span only a proper subspace.
</details>
<details><summary>Hint 2</summary>
Compare with the even-coordinate family in Worked example 8.3.
</details>
<details><summary>Solution</summary>
Orthogonality proves Bessel's inequality and finite projection formulas. Equality for every vector requires dense span, equivalently no nonzero perpendicular vector. The even-coordinate family is orthonormal but misses all odd-coordinate directions, demonstrating the logical gap. A Fourier completeness theorem needs an additional density or approximation argument, such as the appropriate Fejér or polynomial-density result; it is not supplied by computing pairwise integrals alone.
</details>

### Exercise 8.12 {#orthonormal-bases-riesz-ex-12}

Let \(H\) have a countable orthonormal basis. Prove that square-summable coefficients of a bounded sequence's coordinatewise subsequential limit define a weak limit.

<details><summary>Hint 1</summary>
Pass the common norm bound through every finite Bessel sum.
</details>
<details><summary>Hint 2</summary>
Approximate a testing vector by a finite expansion and control the tails uniformly.
</details>
<details><summary>Solution</summary>
If \(\|x_n\|\le M\) and each coefficient converges along a subsequence to \(a_j\), every finite sum \(\sum_{j\le N}|a_j|^2\) is at most \(M^2\). Hence \(a\in\ell^2\), and synthesis gives \(x\) with those coefficients and norm at most \(M\). For a finite-span testing vector, inner products converge by coordinate convergence. For general \(y\), choose a finite expansion \(y_N\) close in norm. Cauchy–Schwarz bounds the untested error by \((\|x_n\|+\|x\|)\|y-y_N\|\le2M\|y-y_N\|\). First make this small, then take the subsequence index large. Riesz converts convergence of all these pairings into weak convergence.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Hilbert/spectral chapter; Conway and Brezis are syllabus benchmarks. Completeness of a particular Fourier family is not assumed without its own theorem. The abstract basis theorem states its use of Zorn's lemma, and the Hilbert weak-subsequence argument is given directly rather than invoking an unstated general equivalence for Banach spaces.

## Summary

Finite orthogonal projection gives Bessel and exact approximation errors. Completeness of an orthonormal family turns coefficient synthesis into full expansions and Parseval, while Gram–Schmidt handles separable spaces and Zorn handles the general case. Riesz represents every bounded functional by one vector with the correct conjugation convention. It then supplies Hilbert adjoints and canonical reflexivity. The next chapter studies compact operators, whose additional image compactness makes spectral decomposition possible beyond finite dimensions.
