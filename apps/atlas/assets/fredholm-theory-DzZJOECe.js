var e=`---
parent_id: book-functional-analysis
chapter_id: fredholm-theory
title: "Fredholm Theory and Compact Perturbations"
level: graduate
license: CC BY-SA 4.0
---

# Fredholm Theory and Compact Perturbations

A compact operator can have a dense nonclosed range, so compactness alone does not make an inverse problem solvable. The situation changes for the identity minus a compact map. Its kernel is finite dimensional, its range is closed with finite codimension, and injectivity is equivalent to surjectivity. Failure of invertibility is therefore described by finitely many homogeneous directions and compatibility conditions.

Preparation is [Compact Operators](compact-operators.md), [Closed Graph and Closed Ranges](open-mapping-closed-graph.md), and [Hahn–Banach separation](hahn-banach.md). The self-adjoint spectral theorem gives useful examples but is not assumed in the main alternative: the compact operator may be nonsymmetric and act on a Banach space.

We prove the closed-range estimate, stabilize the kernel and range chains, derive the Fredholm alternative and index, and then characterize general Fredholm operators by inverses modulo compact errors. The distinction between a kernel condition and an adjoint compatibility condition will be explicit throughout.

## Closed range modulo a finite kernel

Fix a Banach space \\(X\\), a compact \\(K:X\\to X\\), and \\(A=I-K\\). Its kernel \\(N\\) is finite dimensional, because \\(K\\) equals the identity there and compact unit balls force finite dimension.

**Lemma 11.1 (Quotient lower bound).** There is \\(c>0\\) such that
\\[
 \\|Ax\\|\\ge c\\operatorname{dist}(x,N)
 \\quad(x\\in X).
\\]
Consequently the range of \\(A\\) is closed.

*Proof.* Otherwise choose vectors whose output-to-distance ratio tends to zero and normalize their distance to the kernel to one. Subtract a suitable kernel vector from each to obtain representatives \\(x_n\\) with \\(\\|x_n\\|\\le2\\), \\(\\operatorname{dist}(x_n,N)=1\\), and \\(Ax_n\\to0\\). Compactness gives a convergent subsequence of \\(Kx_n\\). Since \\(x_n=Ax_n+Kx_n\\), the same input subsequence converges to \\(x\\). Continuity gives \\(Ax=0\\), but continuity of distance to a closed set gives \\(\\operatorname{dist}(x,N)=1\\), a contradiction.

The induced map from the Banach quotient \\(X/N\\) to \\(X\\) is bounded below by this estimate. A bounded-below map from a Banach domain has closed range, as proved in chapter 5. That range is exactly \\(A(X)\\). ∎

Every power \\(A^n\\) also equals identity minus a compact map: expand \\((I-K)^n\\), whose nonconstant terms are finite sums of powers of \\(K\\), all compact. Thus each kernel \\(N_n=\\ker A^n\\) is finite dimensional and each range \\(R_n=A^nX\\) is closed.

## Compactness stops both chains

**Lemma 11.2 (Stabilization).** The increasing kernel chain \\(N_n\\) and decreasing range chain \\(R_n\\) both stabilize after finitely many steps.

*Proof for ranges.* If the range chain never stabilizes, choose \\(x_n\\in R_n\\) of norm one at distance greater than one half from \\(R_{n+1}\\), using Riesz's lemma in the proper closed inclusion. For \\(m>n\\), both \\(Ax_n\\) and \\(Kx_m\\) lie in \\(R_{n+1}\\); the latter follows because \\(K=I-A\\) preserves every range. Hence
\\[
 \\|Kx_n-Kx_m\\|=\\|x_n-(Ax_n+Kx_m)\\|>1/2,
\\]
contradicting compactness. If equality occurs at one range stage, applying \\(A\\) makes it persist, so failure of stabilization would indeed make every inclusion strict.

For kernels, if every inclusion is strict, choose unit \\(x_n\\in N_n\\) at distance greater than one half from \\(N_{n-1}\\). For \\(m<n\\), both \\(Ax_n\\) and \\(Kx_m\\) lie in \\(N_{n-1}\\), giving the same separated-image contradiction. Equality of successive kernels persists: if \\(N_n=N_{n+1}\\) and \\(A^{n+2}x=0\\), then \\(Ax\\in N_{n+1}=N_n\\), so \\(x\\in N_{n+1}=N_n\\). Induction proves persistence. ∎

**Theorem 11.3 (Compact Fredholm alternative).** For compact \\(K\\) on a Banach space, \\(I-K\\) is injective if and only if it is surjective. When these conditions hold it has a bounded inverse.

*Proof.* If \\(A\\) is injective, so is \\(A^n\\). Choose a stabilized range stage \\(R_n=R_{n+1}\\). For any \\(x\\), there is \\(y\\) with \\(A^nx=A^{n+1}y\\). Injectivity of \\(A^n\\) gives \\(x=Ay\\), proving surjectivity.

If \\(A\\) is surjective and has a nonzero kernel vector \\(x\\), choose a stabilized kernel stage \\(N_n=N_{n+1}\\). Surjectivity supplies \\(y\\) with \\(A^ny=x\\). Then \\(y\\in N_{n+1}=N_n\\), forcing \\(x=0\\), a contradiction. Thus \\(A\\) is injective. Bounded inverse applies to the resulting bijection between Banach spaces. ∎

For an equation \\((I-K)x=y\\), the theorem says either every datum has one solution, or the homogeneous equation has a nonzero solution. It does not say that nontrivial homogeneous solutions make every inhomogeneous equation impossible; instead compatibility conditions select the admissible data.

## Equal finite defect dimensions

**Theorem 11.4 (Finite-dimensional defect and index zero).** For sufficiently large \\(p\\),
\\[
 X=N_p\\oplus R_p.
\\]
The operator \\(A\\) is invertible on \\(R_p\\), and
\\[
 \\dim\\ker A=\\dim(X/A(X))<\\infty.
\\]

*Proof.* Choose \\(p\\) beyond stabilization of both chains. If \\(x=A^py\\in N_p\\), then \\(A^{2p}y=0\\), so stabilization gives \\(y\\in N_p\\) and \\(x=0\\). For any \\(x\\), range stabilization gives \\(A^px=A^{2p}y\\) for some \\(y\\). Then \\(x-A^py\\in N_p\\), proving the direct sum. Both summands are invariant under \\(A\\). On \\(R_p\\) it is surjective by stabilization and injective by the trivial intersection with \\(N_p\\), hence boundedly invertible. The other summand is finite dimensional.

The range is therefore \\(A(N_p)\\oplus R_p\\), and its quotient defect is the finite-dimensional quotient \\(N_p/A(N_p)\\). Rank–nullity in that finite-dimensional space makes its dimension equal to \\(\\ker(A|_{N_p})\\), which is exactly \\(\\ker A\\). ∎

**Definition 11.5 (Fredholm operator and index).** A bounded operator \\(T:X\\to Y\\) between Banach spaces is Fredholm when its kernel is finite dimensional, its range closed, and the quotient \\(Y/T(X)\\) finite dimensional. Its index is
\\(\\operatorname{ind}T=\\dim\\ker T-\\dim(Y/T(X))\\).
Thus identity minus compact is Fredholm with index zero. The generalized nullspace \\(N_p\\) may be larger than \\(\\ker A\\); it records nilpotent chains, not extra independent homogeneous solutions.

## Compatibility is measured by the adjoint kernel

**Proposition 11.6 (Solvability condition).** For \\(A=I-K\\), a datum \\(y\\) lies in its range exactly when \\(\\phi(y)=0\\) for every \\(\\phi\\in\\ker A^*\\). In Hilbert spaces this means \\(y\\perp\\ker A^*\\), with the Hilbert adjoint understood.

*Proof.* A target functional annihilates the range exactly when \\(\\phi(Ax)=0\\) for all \\(x\\), equivalently \\(A^*\\phi=0\\). The range is closed by Lemma 11.1, and Hahn–Banach says a closed subspace is the common zero set of its annihilating functionals. Riesz turns annihilating functionals into perpendicular vectors in Hilbert spaces. ∎

**Worked example 11.7 (One homogeneous direction and one compatibility condition).** Let \\(Kx=\\phi(x)u\\) with bounded \\(\\phi\\), so \\(K\\) has rank at most one. If \\(\\phi(u)\\ne1\\), direct multiplication proves
\\[
 (I-K)^{-1}y=y+\\frac{\\phi(y)}{1-\\phi(u)}u.
\\]
If \\(\\phi(u)=1\\), its kernel is \\(\\operatorname{span}\\{u\\}\\) and its range is \\(\\ker\\phi\\). Indeed \\(\\phi((I-K)x)=0\\), while every \\(y\\in\\ker\\phi\\) satisfies \\((I-K)y=y\\). Thus the equation is solvable exactly when \\(\\phi(y)=0\\), and then all solutions are \\(y+tu\\). The equal finite defects are visible without abstract spectral notation.

**Worked example 11.8 (The adjoint kernel can be a different direction).** On \\(\\ell^2\\), let \\(K\\) have first-coordinate block \\(\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\) and vanish on all later coordinates. It is compact but not self-adjoint. Then \\(A=I-K\\) has first block \\(\\begin{pmatrix}0&-1\\\\0&0\\end{pmatrix}\\) and identity on the tail. Its kernel is spanned by \\(e_1\\), whereas its adjoint kernel is spanned by \\(e_2\\). The equation is solvable exactly when \\(y_2=0\\); then \\(x_2=-y_1\\), the tail equals that of \\(y\\), and \\(x_1\\) is arbitrary. Requiring perpendicularity to the original kernel would give the wrong condition.

**Worked example 11.9 (An integral equation at resonance).** On \\(C([0,1])\\), let \\(Kf(s)=3s\\int_0^1tf(t)dt\\). This has \\(u(s)=s\\), \\(\\phi(f)=3\\int tf\\), and \\(\\phi(u)=1\\). Hence \\(f-Kf=g\\) is solvable exactly when \\(\\int_0^1tg(t)dt=0\\). In that case every solution is \\(g+cs\\). Without the factor three, the same operator formula has \\(\\phi(u)=1/3\\), and the inverse is \\(g+(3/2)s\\int_0^1tg(t)dt\\). The changing coefficient moves the problem from unique solvability to a finite compatibility obstruction.

## Inverses modulo compact errors

**Theorem 11.10 (Atkinson characterization).** A bounded \\(T:X\\to Y\\) between Banach spaces is Fredholm if and only if some bounded \\(S:Y\\to X\\) satisfies
\\[
 ST=I-K_X,\\qquad TS=I-K_Y
\\]
with compact \\(K_X,K_Y\\).

*Proof.* If \\(T\\) is Fredholm, its finite-dimensional kernel has a bounded complement: choose coordinate functionals on the kernel, extend them by Hahn–Banach, and use their finite basis sum to make a bounded projection. Its closed finite-codimensional range also has a bounded complement, by lifting a basis of the finite-dimensional quotient and composing with its continuous quotient map. Write \\(X=\\ker T\\oplus X_0\\), \\(Y=T(X)\\oplus F\\). The restriction from \\(X_0\\) to the range is a bounded bijection of Banach spaces and has bounded inverse. Let \\(S\\) be that inverse on the range and zero on \\(F\\). The two product errors are the finite-rank projections onto the defect spaces, hence compact.

Conversely suppose such \\(S\\) exists. The kernel of \\(T\\) lies in the finite-dimensional kernel of \\(I-K_X\\). To prove closed range, repeat Lemma 11.1 with \\(\\ker T\\): if no quotient lower bound exists, select bounded representatives of distance one from that kernel with \\(Tx_n\\to0\\). The identity \\(x_n=K_Xx_n+STx_n\\) supplies a convergent subsequence, leading to the same contradiction. Thus the range is closed. Finally it contains the range of \\(TS=I-K_Y\\), which has finite codimension by Theorem 11.4. A subspace containing a finite-codimensional subspace also has finite codimension, completing the Fredholm conditions. ∎

**Corollary 11.11 (Compact perturbations preserve Fredholm index).** If \\(T\\) is Fredholm and \\(C\\) compact, then \\(T+C\\) is Fredholm and has the same index.

*Proof.* The parametrix from Atkinson gives compact errors for \\(T+C\\) too, since \\(SC\\) and \\(CS\\) are compact. Thus every \\(T+tC\\), \\(0\\le t\\le1\\), is Fredholm. It remains to show index is locally constant in operator norm.

Use the defect decompositions from the forward Atkinson proof. Near \\(T\\), the block from \\(X_0\\) to \\(T(X)\\) remains invertible by the Neumann perturbation theorem. Bounded invertible row and column operations reduce the nearby block matrix to that invertible block plus its Schur complement from the finite-dimensional kernel space to the finite-dimensional cokernel complement. These operations preserve kernel and quotient dimensions. The finite-dimensional block's index is the difference of its domain and target dimensions by rank–nullity, independent of its rank. Hence the nearby operator's index equals \\(\\dim\\ker T-\\dim F\\). The integer-valued index is therefore locally constant on the continuous path \\(T+tC\\). Connectedness of the parameter interval makes it constant, proving the claim. ∎

For clarity, the block elimination uses an invertible block \\(D\\) and replaces the remaining finite block \\(E\\) by \\(E-BD^{-1}A\\); it is multiplication by triangular bounded invertible operators. Thus the local argument is an actual algebraic reduction, not an appeal to a determinant of an infinite matrix.

## Index can obstruct invertibility without an eigenvalue calculation

**Worked example 11.12 (The shifts have nonzero index).** On \\(\\ell^2\\), the right shift is injective and has closed range consisting of sequences whose first coordinate is zero. Its kernel dimension is zero and its range codimension is one, so its Fredholm index is minus one. The left shift is surjective with a one-dimensional kernel, so its index is one.

Neither can become invertible after a compact perturbation, because index stability would preserve its nonzero index, while an invertible operator has zero kernel and zero cokernel. This obstruction is topological and algebraic rather than a claim that the shifted operator always has the same individual eigenvectors. It also explains why injectivity and surjectivity need not be equivalent for an arbitrary Fredholm operator: the compact alternative used the special index-zero family identity minus compact.

**Proposition 11.13 (Composition index).** For Fredholm \\(T:X\\to Y\\) and \\(S:Y\\to Z\\), the composite is Fredholm and \\(\\operatorname{ind}(ST)=\\operatorname{ind}S+\\operatorname{ind}T\\).

*Proof.* Composing their parametrices gives a parametrix for \\(ST\\); expanding both products shows every error is a sum of bounded compositions with compact errors. Atkinson therefore makes the composite Fredholm. Its finite defect spaces fit into the exact sequence
\\[
 0\\to\\ker T\\to\\ker(ST)\\xrightarrow{T}\\ker S
 \\to Y/TX\\xrightarrow{S}Z/STX\\to Z/SY\\to0.
\\]
The map from \\(\\ker S\\) sends a vector to its coset modulo \\(TX\\), and the last map is the natural quotient. They are well defined. Exactness at \\(\\ker(ST)\\) is the kernel identity for \\(T\\). Exactness at \\(\\ker S\\) says a kernel vector lies in \\(TX\\) exactly when it is the image of a vector killed by \\(ST\\). At \\(Y/TX\\), a coset mapped to zero has \\(Sy=STx\\), so \\(y-Tx\\in\\ker S\\), proving exactness there. At \\(Z/STX\\), vanishing in the final quotient means the representative lies in \\(SY\\), exactly the image of the preceding map. The final quotient map is surjective.

For a finite exact sequence of finite-dimensional spaces, the alternating sum of dimensions is zero: split each dimension into the rank arriving and the rank leaving, then cancel adjacent ranks. Applying this to the displayed sequence and rearranging gives the stated index sum. ∎

The direct sum and composition formulas make index useful in coupled systems. A finite-dimensional defect can be tracked without choosing a canonical solution of every inhomogeneous problem. Compatibility conditions still belong to the adjoint kernel and should not be replaced by the index alone: index records only the difference of two dimensions, not which data are admissible.

## The nonzero spectrum of a compact map

Applying Theorem 11.3 to \\(I-K/\\lambda\\) shows that every nonzero spectral point of a compact Banach operator is an eigenvalue. Its generalized eigenspace is finite dimensional by the stabilization argument. There are only finitely many distinct eigenvalues of modulus at least any fixed \\(\\varepsilon>0\\).

To prove the last assertion, suppose infinitely many distinct such eigenvalues \\(\\lambda_n\\) have eigenvectors spanning increasing invariant spaces \\(M_n\\). Distinct-eigenvalue eigenvectors are linearly independent, proved by applying \\(K-\\lambda_n I\\) and induction. Use Riesz's lemma to choose unit \\(x_n\\in M_n\\) at distance greater than one half from \\(M_{n-1}\\). Then \\((K-\\lambda_n I)x_n\\in M_{n-1}\\). Hence the vectors \\(Kx_n/\\lambda_n\\) are pairwise separated by more than one half. But \\(|\\lambda_n|\\le\\|K\\|\\), so a scalar subsequence converges to a nonzero limit, while compactness gives convergence of the corresponding \\(Kx_n\\) after another selection. Their quotients would converge, a contradiction. Thus the nonzero compact spectrum is countable and can accumulate only at zero, without self-adjointness or orthogonality.

## An exact rank-one alternative

A rank-one perturbation displays the Fredholm compatibility mechanism without an abstract dimension count. Let φ∈X* and y∈X, and define Rx=φ(x)y. Then R²=φ(y)R. The equation (I−R)x=f can be analyzed by applying φ: it gives (1−φ(y))φ(x)=φ(f).

If 1−φ(y) is nonzero, this determines the scalar φ(x), and substitution gives x=f+φ(f)y/(1−φ(y)). Thus the inverse is I+R/(1−φ(y)). Multiplying the two operators and using R²=φ(y)R verifies both inverse identities directly. Its norm is at most 1+||φ||||y||/|1−φ(y)|. As the denominator approaches zero the inverse estimate deteriorates, showing the approaching resonance explicitly.

If φ(y)=1, the kernel of I−R is precisely the span of y. Indeed a kernel vector equals φ(x)y, and y itself is a nonzero kernel vector. The range is ker φ: every image has zero φ-value, and for any f with φ(f)=0 one has (I−R)f=f. Consequently solving the equation requires and suffices that φ(f)=0, and then all solutions are f+ty. The range has codimension one, matching the one-dimensional kernel and giving index zero.

The dual operator sends ψ to ψ(y)φ. At resonance its fixed functionals form the span of φ: the equation ψ=ψ(y)φ forces that form, and φ(y)=1 verifies it. Therefore the range compatibility φ(f)=0 is exactly annihilation by the adjoint kernel in this example. The abstract alternative's kernel and cokernel are visible as one vector direction and one scalar measurement.

For a Hilbert-space orthogonal projection R onto a unit vector e, take φ(x)=<x,e> and y=e. The condition is f perpendicular to e, and the arbitrary solution component is along e. If instead R is a nonorthogonal rank-one projection in a Banach space, the same algebra holds with φ describing the actual complementary hyperplane. One should not replace that hyperplane by a Euclidean perpendicular without an inner product.

This example also separates rank, compactness and invertibility. Every rank-one operator is compact because bounded sets in its one-dimensional range have compact closure. Yet I−R can be either invertible or singular depending on the scalar φ(y). Being a compact perturbation of identity fixes its Fredholm index but does not settle invertibility. The compatibility and denominator calculations decide that remaining question exactly.

No determinant on an infinite-dimensional space was needed. The rank-one relation reduces the inversion question to one scalar while retaining the correct domain, bounded functional and norm estimate. It provides a useful model for finite-rank corrections and for understanding why an iterative formula can become unstable near a compact eigenvalue equal to one.

## Exercises

### Exercise 11.1 {#fredholm-theory-ex-1}

Explain why every power of \\(I-K\\) is identity minus compact.

<details><summary>Hint 1</summary>
Use the finite binomial expansion.
</details>
<details><summary>Hint 2</summary>
Every positive power of a compact operator is compact.
</details>
<details><summary>Solution</summary>
Expand \\((I-K)^n=I+\\sum_{j=1}^n\\binom nj(-1)^jK^j\\). Every \\(K^j\\) is compact by bounded composition, and finite linear combinations remain compact. Thus the nonconstant part can be written as minus one compact operator. The closed-range and finite-kernel arguments therefore apply to every power.
</details>

### Exercise 11.2 {#fredholm-theory-ex-2}

Why can representatives in the quotient lower-bound contradiction be chosen bounded while their distance to the kernel remains one?

<details><summary>Hint 1</summary>
Normalize by the nonzero distance first.
</details>
<details><summary>Hint 2</summary>
Subtract a kernel element within a fixed factor of that infimum.
</details>
<details><summary>Solution</summary>
After dividing a vector by its distance to the kernel, that distance is one and the output ratio is unchanged. The infimum definition supplies a kernel element within distance at most two of the normalized vector. Subtracting it does not change the output or distance to the kernel, but bounds the representative norm by two. This supplies the bounded sequence required for compactness.
</details>

### Exercise 11.3 {#fredholm-theory-ex-3}

Show injectivity of \\(A\\) and stabilization \\(A^nX=A^{n+1}X\\) imply surjectivity.

<details><summary>Hint 1</summary>
For arbitrary \\(x\\), lift \\(A^nx\\) one further range step.
</details>
<details><summary>Hint 2</summary>
Cancel \\(A^n\\) using injectivity.
</details>
<details><summary>Solution</summary>
There is \\(y\\) with \\(A^nx=A^{n+1}y\\), by equality of those ranges. Every power of an injective map is injective, so cancellation gives \\(x=Ay\\). Since \\(x\\) was arbitrary, the map is onto. Stabilization alone without injectivity would not license this cancellation.
</details>

### Exercise 11.4 {#fredholm-theory-ex-4}

For the rank-one operator \\(Kx=\\phi(x)u\\), verify the inverse formula when \\(\\phi(u)\\ne1\\).

<details><summary>Hint 1</summary>
Use \\(K^2=\\phi(u)K\\).
</details>
<details><summary>Hint 2</summary>
Multiply \\(I-K\\) by \\(I+K/(1-\\phi(u))\\) in both orders.
</details>
<details><summary>Solution</summary>
Writing \\(c=\\phi(u)\\), the product equals \\(I+[1/(1-c)-1-c/(1-c)]K=I\\). Both orders give the same polynomial expression in \\(K\\). Hence the bounded map \\(I+K/(1-c)\\) is the two-sided inverse. The excluded value one is exactly where the displayed coefficient and invertibility fail.
</details>

### Exercise 11.5 {#fredholm-theory-ex-5}

In Worked example 11.8, compute the kernel, adjoint kernel and compatibility condition.

<details><summary>Hint 1</summary>
Transpose and conjugate the first two-by-two block.
</details>
<details><summary>Hint 2</summary>
The tail of \\(A\\) is identity.
</details>
<details><summary>Solution</summary>
The first block of \\(A\\) maps \\((x_1,x_2)\\) to \\((-x_2,0)\\), so its kernel is the first coordinate line. The adjoint block maps \\((y_1,y_2)\\) to \\((0,-y_1)\\), so its kernel is the second coordinate line. The tail adds no kernel. Thus solvability requires \\(y_2=0\\), the perpendicularity condition to the adjoint kernel, not the original kernel.
</details>

### Exercise 11.6 {#fredholm-theory-ex-6}

Solve \\(f(s)-s\\int_0^1tf(t)dt=1\\) in \\(C([0,1])\\).

<details><summary>Hint 1</summary>
This is the nonresonant rank-one case with \\(\\phi(u)=1/3\\).
</details>
<details><summary>Hint 2</summary>
The integral of \\(t\\) over the unit interval is one half.
</details>
<details><summary>Solution</summary>
The inverse formula gives \\(f(s)=1+(3/2)s\\int_0^1t\\,dt=1+3s/4\\). Directly, \\(\\int_0^1t(1+3t/4)dt=1/2+1/4=3/4\\), so substitution gives one. Since \\(\\phi(u)\\ne1\\), the solution is unique.
</details>

### Exercise 11.7 {#fredholm-theory-ex-7}

State the solvability condition for \\(f(s)-3s\\int_0^1tf(t)dt=1\\), and decide whether a solution exists.

<details><summary>Hint 1</summary>
At resonance the datum must lie in the kernel of the defining functional.
</details>
<details><summary>Hint 2</summary>
Evaluate \\(\\int_0^1t\\cdot1\\,dt\\).
</details>
<details><summary>Solution</summary>
The condition is \\(\\int_0^1tg(t)dt=0\\). For \\(g=1\\), the integral is one half, so no solution exists. Applying the functional to the equation gives the same contradiction: its left side is always zero after applying the resonant annihilator, while the datum's value is nonzero.
</details>

### Exercise 11.8 {#fredholm-theory-ex-8}

Prove a finite-dimensional subspace of a Banach space has a bounded linear complement.

<details><summary>Hint 1</summary>
Choose a basis and its coordinate functionals on the subspace.
</details>
<details><summary>Hint 2</summary>
Extend each coordinate functional by Hahn–Banach and build a projection.
</details>
<details><summary>Solution</summary>
Let \\(e_1,\\ldots,e_m\\) be a basis of the subspace. Its coordinate functionals are bounded by finite-dimensional norm equivalence. Extend them to bounded functionals \\(\\phi_j\\) on the whole space. Then \\(P(x)=\\sum_j\\phi_j(x)e_j\\) is bounded and restricts to the identity on the subspace, so \\(P^2=P\\). The kernel of \\(P\\) is a closed complement, giving the required direct sum.
</details>

### Exercise 11.9 {#fredholm-theory-ex-9}

Why do the compact errors in Atkinson's theorem remain compact after adding a compact perturbation to \\(T\\)?

<details><summary>Hint 1</summary>
Expand \\(S(T+C)\\) and \\((T+C)S\\).
</details>
<details><summary>Hint 2</summary>
Bounded composition and finite sums preserve compactness.
</details>
<details><summary>Solution</summary>
The products become \\(I-K_X+SC\\) and \\(I-K_Y+CS\\). Both \\(SC\\) and \\(CS\\) are compact by the ideal property, so the new errors are compact. The same parametrix therefore proves Fredholmness of the perturbed operator. Equality of indices additionally uses the local finite-dimensional reduction and connected path argument.
</details>

### Exercise 11.10 {#fredholm-theory-ex-10}

Explain why a finite-dimensional Schur complement has index equal to its domain dimension minus its target dimension regardless of rank.

<details><summary>Hint 1</summary>
Apply rank–nullity to both the kernel and quotient dimensions.
</details>
<details><summary>Hint 2</summary>
The rank terms cancel when their difference is taken.
</details>
<details><summary>Solution</summary>
For \\(S:E\\to F\\) of rank \\(r\\), its kernel dimension is \\(\\dim E-r\\) and quotient defect is \\(\\dim F-r\\). Their difference is \\(\\dim E-\\dim F\\). Thus rank changes in the finite Schur block do not change the index. This is the algebraic reason the nearby Fredholm index remains constant.
</details>

### Exercise 11.11 {#fredholm-theory-ex-11}

For a compact operator, prove a nonzero spectral value must be an eigenvalue.

<details><summary>Hint 1</summary>
Rescale to \\(I-K/\\lambda\\).
</details>
<details><summary>Hint 2</summary>
If the kernel were zero, the Fredholm alternative and bounded inverse would apply.
</details>
<details><summary>Solution</summary>
If \\(\\lambda\\ne0\\) and \\(\\lambda I-K\\) had zero kernel, then \\(I-K/\\lambda\\) would be injective. The compact Fredholm alternative makes it surjective, and bounded inverse gives a bounded two-sided inverse. Multiplying by \\(1/\\lambda\\) supplies the inverse of \\(\\lambda I-K\\), contradicting that \\(\\lambda\\) is spectral. Hence a nonzero eigenvector exists.
</details>

### Exercise 11.12 {#fredholm-theory-ex-12}

Why is zero exceptional in the compact spectral alternative?

<details><summary>Hint 1</summary>
The rescaling argument divides by the spectral parameter.
</details>
<details><summary>Hint 2</summary>
Use the injective compact diagonal operator with coefficients \\(1/n\\).
</details>
<details><summary>Solution</summary>
For \\(\\lambda=0\\), the operator is the compact map itself rather than identity minus a rescaled compact map. On \\(\\ell^2\\), the diagonal map \\(Te_n=e_n/n\\) is injective, so zero is not an eigenvalue, yet it has no bounded inverse and zero is spectral. Its range is dense and nonclosed. Thus nonzero spectral points are eigenvalues, while zero can be a noneigenvalue accumulation obstruction.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Fredholm chapter, with compactness, quotient geometry and Hahn–Banach supplied earlier in this book. Conway and Brezis are syllabus benchmarks. The compact alternative is proved without self-adjointness, and Atkinson and index stability use explicit defect decompositions rather than a formal infinite determinant.

## Summary

Compactness gives a closed-range estimate modulo a finite kernel and stops the ascending kernel and descending range chains. This proves the Fredholm alternative and equal defect dimensions for identity minus compact. Adjoint kernels describe the actual compatibility conditions. General Fredholm maps are precisely those with bounded inverses modulo compact errors, and their index survives compact perturbations. The next chapter studies bounded normal operators, whose spectrum need not be discrete even though their adjoint geometry remains strong.
`;export{e as default};