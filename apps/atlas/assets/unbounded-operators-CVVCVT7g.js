var e=`---
parent_id: book-functional-analysis
chapter_id: unbounded-operators
title: "Unbounded Operators, Adjoint Domains, and the Cayley Transform"
level: graduate
license: CC BY-SA 4.0
---

# Unbounded Operators, Adjoint Domains, and the Cayley Transform

Differentiation and multiplication by a growing coordinate are linear operations, but they cannot be bounded on their natural ambient Hilbert spaces. Their domain is therefore part of the operator. Two operators can use the same formula and have different adjoints, closures and spectra because they admit different inputs. Closed graph theory remains useful, but its everywhere-defined boundedness theorem cannot be applied after silently discarding the domain restriction.

Preparation is [Closed Graph](open-mapping-closed-graph.md), [Hilbert Riesz Representation](orthonormal-bases-riesz.md), and [Continuous Normal Functional Calculus](bounded-normal-operators.md). We work over complex Hilbert spaces, with the inner product linear in its first argument. We prove the adjoint-domain construction, the criterion for closability, the nonreal self-adjoint resolvent theorem and the Cayley correspondence. The final calculus is continuous; a general Borel spectral measure is a further representation rather than an unstated assumption.

## An operator is a formula together with a domain

**Definition 13.1 (Densely defined and closed operators).** A linear operator is a linear map \\(A:D(A)\\to H\\), where \\(D(A)\\) is a linear subspace of the ambient Hilbert space. It is densely defined if that domain is dense. It is closed if its graph is closed in \\(H\\times H\\). It is closable if the closure of its graph is the graph of an operator, called its closure.

A graph is the graph of a function exactly when it contains no nonzero vertical vector \\((0,y)\\). The closure of a linear graph is a linear subspace, so this vertical-vector criterion determines whether the closed graph still assigns at most one output to each input.

**Proposition 13.2 (Graph norm).** A closed operator's domain is Banach for \\(\\|x\\|_A=\\|x\\|+\\|Ax\\|\\), and conversely completeness in that graph norm implies the operator is closed.

*Proof.* A graph-norm Cauchy sequence has \\(x_n\\to x\\) and \\(Ax_n\\to y\\) in the ambient Hilbert space. Closedness gives \\(x\\in D(A)\\), \\(Ax=y\\), and convergence in graph norm. Conversely a convergent ambient graph sequence is Cauchy in graph norm; its graph-norm limit must have the same two ambient limits by uniqueness. Thus the graph contains its limits. ∎

The map from the graph-norm domain to the target is bounded by definition. That statement does not make it bounded in the original Hilbert norm. Keeping the two input norms distinct is essential for every application of closed graph or bounded inverse.

## The adjoint domain is defined by a bounded measurement

**Definition 13.3 (Adjoint of a dense operator).** If \\(D(A)\\) is dense, let \\(D(A^*)\\) consist of \\(y\\in H\\) for which \\(x\\mapsto\\langle Ax,y\\rangle\\) is bounded on \\(D(A)\\) in the ambient input norm. Its unique continuous extension to \\(H\\) is represented by a vector \\(A^*y\\), so
\\[
 \\langle Ax,y\\rangle=\\langle x,A^*y\\rangle\\quad(x\\in D(A)).
\\]
Density makes the representing vector unique. Riesz representation applies after extension by scalar limits along the dense domain, not before boundedness has been checked.

**Theorem 13.4 (Adjoints and closability).** The adjoint is closed. A densely defined operator is closable exactly when \\(D(A^*)\\) is dense; in that case its closure is \\(A^{**}\\).

*Proof.* If \\(y_n\\to y\\) and \\(A^*y_n\\to z\\), pass to limits in the defining identity for every \\(x\\in D(A)\\). It gives \\(\\langle Ax,y\\rangle=\\langle x,z\\rangle\\), so \\(y\\in D(A^*)\\) and \\(A^*y=z\\). Thus the adjoint graph is closed.

The perpendicular complement of the original graph is
\\[
 G(A)^\\perp=\\{(-A^*y,y):y\\in D(A^*)\\}.
\\]
Indeed orthogonality to every \\((x,Ax)\\) is precisely the adjoint-domain boundedness identity with that first coordinate. A vertical vector \\((0,z)\\) belongs to \\(\\overline{G(A)}=G(A)^{\\perp\\perp}\\) exactly when \\(z\\) is perpendicular to \\(D(A^*)\\). Therefore the closure has no nonzero vertical vector exactly when that domain is dense. When it is dense, a pair \\((x,z)\\) is perpendicular to every \\((-A^*y,y)\\) exactly when \\(\\langle A^*y,x\\rangle=\\langle y,z\\rangle\\) for every adjoint-domain vector. This is the definition of \\((x,z)\\in G(A^{**})\\), proving the closure identity. ∎

## Symmetric does not mean self-adjoint

**Definition 13.5 (Symmetric and self-adjoint).** A densely defined \\(A\\) is symmetric if \\(\\langle Ax,y\\rangle=\\langle x,Ay\\rangle\\) for all \\(x,y\\in D(A)\\), equivalently \\(A\\subseteq A^*\\). It is self-adjoint if \\(D(A)=D(A^*)\\) and the values agree. Equality includes domains.

**Worked example 13.6 (A closed self-adjoint diagonal operator).** On \\(\\ell^2\\), set
\\[
 Ax=(nx_n),\\qquad D(A)=\\{x:\\sum n^2|x_n|^2<\\infty\\}.
\\]
Finite sequences show density. Testing the adjoint identity on coordinate vectors forces \\((A^*y)_n=ny_n\\); boundedness of that functional holds exactly when \\((ny_n)\\in\\ell^2\\), by the already proved \\(\\ell^2\\) Riesz representation. Thus its adjoint domain is exactly the displayed domain and it is self-adjoint, hence closed. It is unbounded because \\(\\|Ae_n\\|=n\\).

**Worked example 13.7 (The same formula on a smaller domain).** Restrict that diagonal formula to \\(c_{00}\\). It is symmetric but not self-adjoint: its adjoint is still the maximal weighted-domain operator just computed. The restriction is closable, and truncations approximate every maximal-domain vector in graph norm, since both square tails tend to zero. Its closure is the maximal self-adjoint diagonal operator. The formula did not change, but domain equality determines which of these assertions is true.

**Worked example 13.8 (A dense operator that cannot be closed).** On \\(c_{00}\\subseteq\\ell^2\\), define \\(Bx=(\\sum n x_n)e_1\\). The vectors \\(e_n/n\\) tend to zero, while their images equal \\(e_1\\), so graph closure contains \\((0,e_1)\\) and cannot be a function graph. Directly, the adjoint domain is \\(\\{y:y_1=0\\}\\): a nonzero first coordinate would require the unbounded coefficient sequence \\((n)\\) to define an \\(\\ell^2\\) functional. This domain is not dense, confirming Theorem 13.4.

## Nonreal resolvents characterize self-adjointness

**Lemma 13.9 (Symmetric lower bound).** If \\(A\\) is symmetric and \\(\\lambda=s+it\\), with \\(t\\ne0\\), then
\\[
 \\|(A-\\lambda)x\\|^2=\\|(A-s)x\\|^2+t^2\\|x\\|^2.
\\]
For any densely defined operator,
\\(\\operatorname{ran}(A-\\lambda)^\\perp=\\ker(A^*-\\overline\\lambda)\\).

*Proof.* Expand the squared norm. Symmetry makes \\(\\langle(A-s)x,x\\rangle\\) real, so the imaginary cross terms cancel. For the range statement, a vector is perpendicular to every output exactly when the adjoint identity holds with \\(A^*y=\\overline\\lambda y\\). This is precisely its kernel condition. ∎

**Theorem 13.10 (Self-adjoint resolvent and criterion).** A self-adjoint operator has every nonreal \\(\\lambda\\) in its resolvent, with inverse norm at most \\(1/|\\operatorname{Im}\\lambda|\\). Conversely a densely defined symmetric operator is self-adjoint if both \\(A-i\\) and \\(A+i\\) are onto.

*Proof.* For self-adjoint \\(A\\), the lower bound gives injectivity. It gives closed range too: if outputs converge, their preimages are Cauchy; their limits satisfy the graph relation because \\(A\\) is closed. The perpendicular range is zero by the lemma and the same lower bound for the adjoint, so that closed range is all of \\(H\\). The inverse bound follows directly.

For the converse take \\(y\\in D(A^*)\\). Choose \\(x\\in D(A)\\) with \\((A-i)x=(A^*-i)y\\), using surjectivity. Then \\(z=y-x\\) belongs to \\(\\ker(A^*-i)\\), which is the perpendicular complement of \\(\\operatorname{ran}(A+i)\\) and hence zero. Thus every adjoint-domain vector belongs to the original domain. Symmetry gives the reverse inclusion, proving equality and self-adjointness. ∎

The criterion checks two signs. Surjectivity for one nonreal parameter alone does not generally establish self-adjointness; the missing adjoint defect in the other half-plane can remain nonzero.

## The Cayley transform packages a domain into a bounded unitary

**Theorem 13.11 (Cayley correspondence).** For self-adjoint \\(A\\),
\\[
 U=(A-i)(A+i)^{-1}=I-2i(A+i)^{-1}
\\]
is unitary and \\(\\ker(I-U)=0\\). Conversely a unitary \\(U\\) with no eigenvector at one defines a self-adjoint operator by
\\[
 D(A)=\\operatorname{ran}(I-U),\\qquad A((I-U)x)=i(I+U)x.
\\]

*Proof.* For the forward direction the symmetric norm identity gives \\(\\|(A-i)x\\|=\\|(A+i)x\\|\\). Both maps are onto, so \\(U\\) is an onto isometry and hence unitary. The identity \\(I-U=2i(A+i)^{-1}\\) proves zero kernel and identifies its range with \\(D(A)\\).

Conversely \\(I-U\\) is injective, so the proposed definition has unique values. Its range is dense: its perpendicular complement is \\(\\ker(I-U^*)\\), equal to \\(\\ker(I-U)\\) for a unitary, hence zero. For vectors \\(v=(I-U)x\\), \\(w=(I-U)y\\), direct inner-product expansion shows symmetry; the difference reduces to \\(2i[\\langle x,y\\rangle-\\langle Ux,Uy\\rangle]=0\\). Moreover
\\[
 (A+i)(I-U)x=2ix,\\qquad (A-i)(I-U)x=2iUx.
\\]
Both are onto, so Theorem 13.10 makes \\(A\\) self-adjoint. The formulas are inverse constructions by substitution. ∎

The scalar map \\(c(t)=(t-i)/(t+i)\\) sends the real line to the unit circle minus one. The missing point one can be spectral for \\(U\\) without being an eigenvalue. In the diagonal example its eigenvalues \\((n-i)/(n+i)\\) tend to one, reflecting the unbounded original eigenvalues.

## A continuous calculus for self-adjoint unbounded operators

For \\(f\\in C_0(\\mathbb R)\\), transport it by the inverse Cayley map to a function on the unit circle minus one and assign value zero at one. Vanishing at both real infinities makes that extension continuous. The bounded normal calculus defines its value at \\(U\\); call the resulting bounded operator \\(f(A)\\).

This assignment preserves addition, products and conjugation. Its norm is the supremum of \\(|f|\\) over the real spectrum of \\(A\\). To justify the spectral identification, for real \\(t\\) and \\(z=c(t)\\),
\\[
 U-zI=(1-z)(A-t)(A+i)^{-1}.
\\]
If \\(A-t\\) has bounded inverse, the inverse of this expression is bounded because \\((A+i)(A-t)^{-1}=I+(t+i)(A-t)^{-1}\\). Conversely an inverse for \\(U-zI\\) gives the bounded inverse \\((1-z)(A+i)^{-1}(U-zI)^{-1}\\) for \\(A-t\\), with range in its domain. Thus the nonexceptional spectra correspond exactly. The possible point one contributes zero to the transported function and does not increase its norm.

This constructs a continuous calculus for functions vanishing at infinity, not an operator value for every discontinuous or unbounded scalar function. Domain questions reappear when defining unbounded functions of \\(A\\). The distinction is essential in evolution problems: writing a formal exponential or square root does not by itself identify its domain or continuity properties.

## Graph compactness and compact resolvents

For a closed operator the graph norm can be replaced by the equivalent Hilbert norm
\\[
 \\|x\\|_{G}^2=\\|x\\|^2+\\|Ax\\|^2,
\\]
coming from the graph inner product \\(\\langle x,y\\rangle+\\langle Ax,Ay\\rangle\\). The elementary inequalities between a sum and a square root of two squares show equivalence, so the domain is complete in this Hilbert norm too.

**Proposition 13.12 (Compact resolvent criterion).** If \\(A\\) is self-adjoint, its domain inclusion \\(j:(D(A),\\|\\cdot\\|_G)\\to H\\) is compact exactly when one, hence every, nonreal resolvent is compact.

*Proof.* Regard \\(R_\\lambda=(A-\\lambda)^{-1}\\) as a map into the graph domain. It is bounded there: the resolvent estimate bounds \\(R_\\lambda y\\), and \\(AR_\\lambda y=y+\\lambda R_\\lambda y\\) bounds its image under \\(A\\). If \\(j\\) is compact, the composition \\(jR_\\lambda\\) is a compact ambient resolvent. Conversely, if the ambient resolvent is compact, the identity \\(j=R_\\lambda(A-\\lambda)\\) on the graph domain expresses inclusion as a compact map after a bounded map, so it is compact.

For any two resolvent parameters, direct multiplication on their admitted ranges gives \\(R_\\lambda-R_\\mu=(\\lambda-\\mu)R_\\lambda R_\\mu\\). Thus compactness of one resolvent implies compactness of another by the compact ideal property. ∎

For the diagonal operator, the graph norm is the weighted square sum \\(\\sum(1+n^2)|x_n|^2\\). Truncating its inclusion after coordinate \\(N\\) has operator-norm error \\(1/\\sqrt{1+(N+1)^2}\\): bound the omitted unweighted square sum by that factor times the graph square sum, and attain equality on the next coordinate with graph-normalized amplitude. Hence the inclusion is a norm limit of finite-rank maps and is compact. This directly explains the compact resolvent already visible from coefficients \\(1/(n-\\lambda)\\).

In differential equations, compact domain embeddings often play this same role. Establishing such an embedding requires the appropriate boundary and regularity theorem; a formal differential expression alone does not supply it. The criterion separates that geometric input from the algebraic resolvent identity, making clear which part of a spectral argument remains to be proved for a concrete operator.

## A periodic derivative with its domain visible in Fourier coordinates

Use the periodic square-norm completion proved in Fourier Analysis and its normalized exponential basis en(x)=e^{inx}. Define D by the Fourier coefficients (Df)n=nfn on the domain consisting of all coefficient sequences with Σn²|fn|² finite. Finite trigonometric polynomials lie in the domain and are dense, so this is a densely defined operator. On those polynomials it is the classical operator minus i times differentiation. The coefficient domain specifies its closed extension; the formula alone would not do so.

It is closed. If fj tends to f in the Hilbert norm and Dfj tends to g there, every coefficient converges by boundedness of its inner-product measurement. Thus gn=nfn for all n. Since g has square-summable coefficients, the weighted sum for f is finite, so f belongs to the domain and Df=g. This proves closedness directly from the prescribed domain.

It is self-adjoint. If v belongs to the adjoint domain with representing vector w, testing the adjoint identity on each en forces wn=nvn. Hence Σn²|vn|² is finite, placing v in the original domain. Conversely a vector with that weighted sum defines the required bounded functional by Cauchy–Schwarz, so it is in the adjoint domain and has the same image. Both domain inclusions have been proved; merely checking a formal integration by parts would have established only symmetry.

The spectrum is exactly the integers. Each integer is an eigenvalue with eigenvector en. If z is not an integer, the coefficient multiplier 1/(n−z) is bounded by 1/dist(z,Z). It also maps into the operator domain, because |n/(n−z)|≤1+|z|/dist(z,Z). Thus it is the bounded two-sided resolvent, with norm exactly 1/dist(z,Z), attained at a closest integer coordinate. This is a full domain-sensitive inverse, not a division performed on a sequence that might leave the domain.

The resolvent is compact: its diagonal entries tend to zero as |n| tends to infinity, so finite coordinate truncations converge in operator norm. Its Cayley transform has eigenvalues (n−i)/(n+i), all on the unit circle and tending to one. One is not an eigenvalue, because no finite integer n gives that value, but it belongs to the spectrum as an accumulation point. This realizes concretely the dense-range, no-fixed-vector condition in the abstract Cayley correspondence.

Smooth periodic functions belong to the domain and have their expected derivative coefficients by integration by parts. General domain elements are recovered in square norm and have the corresponding weak derivative after the measure/Sobolev route identifies representatives. No pointwise derivative claim for every completion element is needed to define or prove self-adjointness of this operator. The example shows how Fourier coordinates can construct a closed differential realization while keeping its boundary geometry and function class explicit.

## Exercises

### Exercise 13.1 {#unbounded-operators-ex-1}

Why does closed graph not make every closed densely defined operator bounded?

<details><summary>Hint 1</summary>
The boundedness theorem requires definition on the whole Banach domain.
</details>
<details><summary>Hint 2</summary>
The diagonal operator has a proper weighted domain.
</details>
<details><summary>Solution</summary>
The closed graph theorem assumes an everywhere-defined linear map between Banach spaces. An unbounded closed operator is defined only on a proper subspace, which need not be complete in the ambient norm. Its graph-norm domain is Banach and the map is bounded for that stronger norm, but this is a different input topology. The diagonal example exhibits the distinction explicitly.
</details>

### Exercise 13.2 {#unbounded-operators-ex-2}

Prove the adjoint graph is closed by taking limits in its defining identity.

<details><summary>Hint 1</summary>
Fix an original-domain input before passing to the limit.
</details>
<details><summary>Hint 2</summary>
The limiting identity itself establishes adjoint-domain membership.
</details>
<details><summary>Solution</summary>
If \\(y_n\\to y\\), \\(A^*y_n\\to z\\), then for every fixed \\(x\\in D(A)\\), continuity of inner products gives \\(\\langle Ax,y\\rangle=\\langle x,z\\rangle\\). This is a bounded functional of \\(x\\), so it puts \\(y\\) in the adjoint domain and identifies \\(A^*y=z\\). No prior membership of \\(y\\) may be assumed.
</details>

### Exercise 13.3 {#unbounded-operators-ex-3}

For the maximal diagonal operator, decide whether \\(x_n=1/n^2\\) and \\(y_n=1/n\\) belong to its domain.

<details><summary>Hint 1</summary>
Both are square summable as ambient vectors.
</details>
<details><summary>Hint 2</summary>
The domain additionally requires square summability after multiplication by \\(n\\).
</details>
<details><summary>Solution</summary>
The first is in the domain because \\(nx_n=1/n\\) is square summable. The second is not, because \\(ny_n=1\\) is not square summable. Thus ambient membership alone does not permit applying the operator. The displayed formula has a valid Hilbert output only on the stated domain.
</details>

### Exercise 13.4 {#unbounded-operators-ex-4}

Show the finite-sequence restriction of the diagonal operator closes to the maximal one.

<details><summary>Hint 1</summary>
Use finite truncations of any maximal-domain vector.
</details>
<details><summary>Hint 2</summary>
Both its original square tail and weighted square tail tend to zero.
</details>
<details><summary>Solution</summary>
For \\(x\\) in the maximal domain, truncations \\(x^{(N)}\\) converge in ambient norm and their diagonal images converge because \\(\\sum n^2|x_n|^2\\) has vanishing tails. Thus every maximal graph pair lies in closure of the restricted graph. The maximal operator is closed and extends the restriction, so its graph also contains that closure. The two graphs are equal.
</details>

### Exercise 13.5 {#unbounded-operators-ex-5}

Explain why \\(Bx=(\\sum nx_n)e_1\\) on finite sequences is not closable.

<details><summary>Hint 1</summary>
Use inputs \\(e_n/n\\).
</details>
<details><summary>Hint 2</summary>
Their graph limit has zero input and nonzero output.
</details>
<details><summary>Solution</summary>
The input norms equal \\(1/n\\) and tend to zero, while every output is \\(e_1\\). Hence the graph closure contains \\((0,e_1)\\) in addition to \\((0,0)\\). It cannot be a function graph because the zero input would have two outputs. No closed operator extension can contain that graph.
</details>

### Exercise 13.6 {#unbounded-operators-ex-6}

Prove a self-adjoint operator's nonreal resolvent has norm at most the reciprocal imaginary part magnitude.

<details><summary>Hint 1</summary>
Use the squared symmetric lower-bound identity.
</details>
<details><summary>Hint 2</summary>
Substitute the unique preimage of any target vector.
</details>
<details><summary>Solution</summary>
The identity gives \\(\\|(A-\\lambda)x\\|\\ge|\\operatorname{Im}\\lambda|\\|x\\|\\). Self-adjointness makes the map onto and injective, so for any \\(y\\) take \\(x=(A-\\lambda)^{-1}y\\). The inequality becomes \\(\\|x\\|\\le\\|y\\|/|\\operatorname{Im}\\lambda|\\), which is exactly the operator norm bound.
</details>

### Exercise 13.7 {#unbounded-operators-ex-7}

Why does symmetry alone not justify replacing \\(A^*\\) by \\(A\\) in the range-perpendicular identity?

<details><summary>Hint 1</summary>
Symmetry gives only one inclusion of domains.
</details>
<details><summary>Hint 2</summary>
An adjoint kernel vector can lie outside the original domain.
</details>
<details><summary>Solution</summary>
Symmetry means \\(D(A)\\subseteq D(A^*)\\) with matching values on that smaller domain. The kernel of \\(A^*-\\overline\\lambda\\) may contain vectors admitted only by the larger adjoint domain. The lower bound for original-domain vectors does not exclude those. Self-adjointness supplies the missing domain equality needed to infer dense range.
</details>

### Exercise 13.8 {#unbounded-operators-ex-8}

Verify the Cayley transform is unitary using norms and surjectivity rather than multiplying formal unbounded factors.

<details><summary>Hint 1</summary>
Every input has form \\((A+i)x\\).
</details>
<details><summary>Hint 2</summary>
The two shifted operators have equal norms on their common domain and both are onto.
</details>
<details><summary>Solution</summary>
For \\(y=(A+i)x\\), the transform gives \\(Uy=(A-i)x\\), whose norm equals \\(\\|y\\|\\) by symmetry. Surjectivity of \\(A-i\\) makes the isometry onto. A surjective linear isometry between Hilbert spaces preserves inner products by polarization and is unitary. This avoids undefined products between maps whose domains may differ.
</details>

### Exercise 13.9 {#unbounded-operators-ex-9}

Show \\(\\ker(I-U)=0\\) implies dense range of \\(I-U\\) for unitary \\(U\\).

<details><summary>Hint 1</summary>
Its range perpendicular is \\(\\ker(I-U^*)\\).
</details>
<details><summary>Hint 2</summary>
For a unitary, a vector fixed by \\(U^*\\) is fixed by \\(U\\), and conversely.
</details>
<details><summary>Solution</summary>
The bounded adjoint identity gives \\(\\operatorname{ran}(I-U)^\\perp=\\ker(I-U^*)\\). If \\(U^*y=y\\), multiply by \\(U\\) to get \\(Uy=y\\); the reverse follows by \\(U^*\\). Thus this kernel equals \\(\\ker(I-U)=0\\). A subspace with zero perpendicular complement is dense, proving the claim.
</details>

### Exercise 13.10 {#unbounded-operators-ex-10}

Compute the Cayley eigenvalues of the maximal diagonal operator and explain the role of their limit one.

<details><summary>Hint 1</summary>
Apply the rational scalar formula to each coordinate eigenvector.
</details>
<details><summary>Hint 2</summary>
The limit point need not be an eigenvalue of the bounded transform.
</details>
<details><summary>Solution</summary>
The values are \\((n-i)/(n+i)\\), each on the unit circle, and they tend to one. No coordinate has value one and the Cayley transform has no fixed nonzero vector, so one is not an eigenvalue. It is nevertheless spectral as a limit of spectral values. This is how unbounded real eigenvalues are encoded at the omitted circle point.
</details>

### Exercise 13.11 {#unbounded-operators-ex-11}

For the diagonal operator, prove every noninteger real \\(t\\) belongs to the resolvent.

<details><summary>Hint 1</summary>
Use diagonal reciprocal coefficients \\(1/(n-t)\\).
</details>
<details><summary>Hint 2</summary>
Check both boundedness and membership of the resulting output in the weighted domain.
</details>
<details><summary>Solution</summary>
The denominators have a positive lower bound because only finitely many integers lie near fixed \\(t\\), and none equals it. Thus the reciprocal map is bounded on \\(\\ell^2\\). Moreover \\(n/(n-t)\\) is bounded, so its output lies in the diagonal domain. Coordinate multiplication verifies both inverse identities. Positive integers are eigenvalues, so the real spectrum is exactly those integers.
</details>

### Exercise 13.12 {#unbounded-operators-ex-12}

Why does a function in \\(C_0(\\mathbb R)\\) extend continuously by zero at the missing Cayley point?

<details><summary>Hint 1</summary>
Approaching that circle point from either direction corresponds to real magnitude tending to infinity.
</details>
<details><summary>Hint 2</summary>
Vanishing at infinity controls both tails by the same tolerance.
</details>
<details><summary>Solution</summary>
The inverse Cayley formula sends circle points approaching one to real numbers with absolute value tending to infinity. For every tolerance, the \\(C_0\\) condition makes the function uniformly small outside a sufficiently large compact real interval. Thus the transported values tend to zero from both circle directions, matching the assigned value. A bounded continuous function without a common limit at the two infinities would not automatically extend in this way.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto unbounded-spectral chapter, rewritten here around graph geometry, adjoint domains and Cayley correspondence. Conway and Brezis are syllabus benchmarks. The continuous calculus is proved from the bounded normal chapter; arbitrary Borel functions, deficiency-index classification and Stone's unitary-group theorem require further arguments and are not presumed from the formal Cayley fraction.

## Summary

An unbounded operator includes its domain. Closed graph gives graph-norm completeness, and the adjoint domain records exactly which scalar output measurements remain bounded in the ambient input norm. Dense adjoint domain characterizes closability. Self-adjointness gives nonreal resolvents and is equivalent to a unitary Cayley transform with no fixed vector. Continuous functions vanishing at infinity then have a bounded calculus, while unbounded functions retain genuine domain questions. The next chapter returns to Banach geometry through convexity and dual variational descriptions.
`;export{e as default};