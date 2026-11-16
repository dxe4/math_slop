
# The Compact Self-Adjoint Spectral Theorem

A real symmetric matrix has an orthonormal eigenbasis. In a Hilbert space that statement needs an additional hypothesis: bounded self-adjoint operators can have continuous spectrum and no eigenvectors. Compactness restores the discrete part of matrix geometry. A compact self-adjoint operator is diagonal on a countable collection of mutually perpendicular nonzero eigendirections, while its remaining subspace is its kernel. Nonzero eigenvalues have finite multiplicity and can accumulate only at zero.

Preparation is [Hilbert adjoints and orthonormal bases](orthonormal-bases-riesz.md) and [compact operators](compact-operators.md). We continue to make the inner product linear in its first slot. The proof below constructs the eigenvectors rather than presuming an infinite characteristic polynomial or relying on a finite-dimensional diagonalization by analogy.

The crucial step finds an eigenvalue of modulus equal to the operator norm. Self-adjointness turns the norm into a quadratic-form supremum. Compactness then turns a sequence of approximate eigenvectors into an actual unit eigenvector. Repeating on orthogonal complements yields the decomposition and its exact approximation errors.

## Self-adjointness and real quadratic forms

**Definition 10.1 (Self-adjoint operator).** A bounded operator on a Hilbert space is self-adjoint if \(T=T^*\), equivalently \(\langle Tx,y\rangle=\langle x,Ty\rangle\) for all vectors. Its quadratic form is \(q_T(x)=\langle Tx,x\rangle\).

Conjugate symmetry shows \(q_T(x)\) is real: it equals its complex conjugate. If \(Tx=\lambda x\) for nonzero \(x\), then \(\lambda\|x\|^2=q_T(x)\) is real, so \(\lambda\) is real. For eigenvectors with distinct eigenvalues,
\[
 \lambda\langle x,y\rangle=\langle Tx,y\rangle
 =\langle x,Ty\rangle=\overline\mu\langle x,y\rangle
 =\mu\langle x,y\rangle,
\]
so they are orthogonal.

**Lemma 10.2 (Quadratic-form norm).** For bounded self-adjoint \(T\),
\[
 \|T\|=\sup_{\|x\|=1}|q_T(x)|.
\]

*Proof.* The upper bound on the right follows from Cauchy–Schwarz. Let its supremum be \(M\), so \(|q_T(z)|\le M\|z\|^2\) for every vector. Expanding quadratic forms gives
\[
 4\operatorname{Re}\langle Tx,y\rangle=q_T(x+y)-q_T(x-y).
\]
For unit vectors this implies \(|\operatorname{Re}\langle Tx,y\rangle|\le M\), since the two squared norms sum to four. In the complex case rotate \(y\) by a unit scalar so the inner product becomes nonnegative real; in the real case change its sign if needed. The same estimate therefore gives \(|\langle Tx,y\rangle|\le M\) for all unit pairs. Taking the supremum over unit \(y\) gives \(\|Tx\|\le M\) by Hilbert norm detection, and then \(\|T\|\le M\). ∎

The supremum need not be attained for an arbitrary self-adjoint operator. Attainment is exactly where compactness will enter. The formula alone is a bounded-operator identity and does not establish discreteness of the spectrum.

## An extremal approximate eigenvector becomes an eigenvector

**Theorem 10.3 (A norm-sized eigenvalue).** A nonzero compact self-adjoint operator has a unit eigenvector with real eigenvalue \(\lambda\) satisfying \(|\lambda|=\|T\|\).

*Proof.* By Lemma 10.2 choose unit vectors \(x_n\) with \(|q_T(x_n)|\to\|T\|\). Select a subsequence with the same extremal sign so \(q_T(x_n)\to\lambda\), where \(\lambda\) is either \(\|T\|\) or its negative. Then
\[
 \|Tx_n-\lambda x_n\|^2
 =\|Tx_n\|^2-2\lambda q_T(x_n)+\lambda^2
 \le2\|T\|^2-2\lambda q_T(x_n)\longrightarrow0.
\]
Compactness gives a further subsequence with \(Tx_n\) convergent. Because \(\lambda\ne0\), the approximate eigenvector equation makes \(x_n\) converge to a vector \(x\) of norm one. Continuity yields \(Tx=\lambda x\). ∎

Every nonzero eigenspace is finite dimensional by compactness, proved in chapter 9. Moreover an orthonormal collection of eigenvectors whose eigenvalues satisfy \(|\lambda_j|\ge\varepsilon>0\) must be finite: their images are mutually orthogonal with pairwise distance at least \(\sqrt2\varepsilon\), so no image subsequence could converge.

**Worked example 10.4 (Signs and multiplicities).** On \(\ell^2\), define \(Te_n=(-1)^n e_n/n\). It is compact by its diagonal tail and self-adjoint because the coefficients are real. Its nonzero eigenvalues are the displayed numbers, each simple, and their only accumulation point is zero. Its norm is one, attained at the first coordinate with eigenvalue minus one. A compact self-adjoint operator need not be positive; maximizing the absolute quadratic form can select a negative eigenvalue.

## Orthogonal complements remain invariant

**Lemma 10.5 (Reducing complements).** If \(e\) is an eigenvector of a self-adjoint operator, its perpendicular complement is invariant. The restriction to that closed complement is again compact and self-adjoint when the original operator is compact.

*Proof.* If \(x\perp e\), then \(\langle Tx,e\rangle=\langle x,Te\rangle=\lambda\langle x,e\rangle=0\). Thus the complement is invariant. Restriction preserves the inner-product identity and compactness of images of bounded sequences; output subsequential limits remain in the closed invariant complement. ∎

**Theorem 10.6 (Compact self-adjoint decomposition).** There is a finite or countable orthonormal list \((e_n)\) with nonzero real eigenvalues \(\lambda_n\), repeated by multiplicity, such that
\[
 H=\overline{\operatorname{span}\{e_n\}}\oplus\ker T,
 \qquad Tx=\sum_n\lambda_n\langle x,e_n\rangle e_n.
\]
In the infinite case the list can be chosen with nonincreasing \(|\lambda_n|\to0\), and
\[
 \left\|T-\sum_{n=1}^N\lambda_n\langle\cdot,e_n\rangle e_n\right\|
 =|\lambda_{N+1}|.
\]

*Proof.* If \(T=0\), the assertion is immediate with no nonzero list. Otherwise choose an extremal unit eigenvector by Theorem 10.3. Restrict to its perpendicular complement and repeat whenever the restriction is nonzero. Lemma 10.5 licenses each step. The selected eigenvalue moduli are the decreasing restriction norms. If the process continues forever, compactness forces these moduli to tend to zero by the separated-image argument above.

Let \(M\) be the closed span of the selected vectors. A vector in \(M^\perp\) lies in every residual complement, so its output norm is at most every residual norm times its own norm. In the infinite case those bounds tend to zero; in a finite termination the final restriction is zero. Thus \(M^\perp\subseteq\ker T\). Conversely any kernel vector is perpendicular to every nonzero eigenvector by self-adjointness, so equality holds. Orthogonal expansion in \(M\), continuity of \(T\), and zero action on the kernel give the series formula.

For truncation, the residual restriction norm gives the upper error bound \(|\lambda_{N+1}|\). Testing on \(e_{N+1}\) attains it, proving equality. The series converges in operator norm because these errors tend to zero. ∎

The kernel can be nonseparable even though the nonzero list is countable. Choosing an orthonormal basis of the kernel completes an eigenbasis of the whole space, but those zero-eigenvalue directions need not be countable. The theorem's countability concerns the genuinely nonzero compact spectral part.

## Spectrum and solving a diagonal equation

**Corollary 10.7 (Spectrum).** For a compact self-adjoint operator on an infinite-dimensional Hilbert space,
\[
 \sigma(T)=\{0\}\cup\{\lambda_n:n\ge1\}.
\]
In finite dimension zero belongs exactly when the operator has nontrivial kernel.

*Proof.* Nonzero listed values are eigenvalues. Zero belongs in infinite dimension because a compact operator cannot have bounded inverse there. If \(\lambda\ne0\) is not a listed eigenvalue, its distance from the set consisting of zero and the eigenvalues is positive: the only possible accumulation of the nonzero sequence is zero. On each eigendirection define inverse multiplication by \(1/(\lambda-\lambda_n)\), and on the kernel by \(1/\lambda\). The positive distance gives a uniform coefficient bound, so orthogonal synthesis defines a bounded operator. Its products with \(\lambda I-T\) equal the identity on each component and hence everywhere. Thus no other spectral points occur. The finite-dimensional assertion is the same decomposition with no infinite accumulation issue. ∎

**Worked example 10.8 (Solvability can require more than orthogonality).** For \(Te_n=e_n/n\), the equation \(Tx=y\) formally asks \(x_n=ny_n\). It has a solution exactly when \(\sum n^2|y_n|^2<\infty\). Take \(y_n=1/n\). This lies in \(\ell^2\) but the proposed input is the constant sequence one, outside \(\ell^2\), so no solution exists. The operator has zero kernel and dense range, yet its range is not all of the Hilbert space and is not closed. The missing bounded inverse is encoded in eigenvalues approaching zero.

By contrast, if \(\lambda\ne0\), solving \((\lambda I-T)x=y\) encounters only finitely many zero factors \(\lambda-\lambda_n\). When none vanish, the bounded inverse above works. When some vanish, the data must be perpendicular to their eigenspace; on its perpendicular complement the remaining denominators are uniformly separated from zero. This is the Hilbert form of the Fredholm alternative developed more generally next.

## Positivity and compact square roots

**Definition 10.9 (Positive operator).** A bounded self-adjoint operator is positive when \(\langle Tx,x\rangle\ge0\) for every vector. For the compact decomposition this is equivalent to all nonzero eigenvalues being positive.

**Proposition 10.10 (Positive square root in the compact case).** If \(T\) is compact and positive, define \(Se_n=\sqrt{\lambda_n}e_n\) and let \(S\) vanish on the kernel. Then \(S\) is positive, compact and satisfies \(S^2=T\). It is the unique bounded positive square root.

*Proof.* The bounded real coefficient sequence defines a bounded positive self-adjoint map by synthesis. Its tails tend to zero, so finite spectral truncations converge in norm and make it compact. Squaring the coefficients proves the identity. If \(R\) is another positive square root, it commutes with \(T=R^2\), hence preserves each nonzero eigenspace and the kernel. On a finite nonzero eigenspace, finite-dimensional self-adjoint diagonalization gives nonnegative eigenvalues of \(R\) whose squares equal \(\lambda\), so \(R=\sqrt\lambda I\) there. On the kernel, \(\|Rx\|^2=\langle R^2x,x\rangle=0\). Density of the decomposition gives \(R=S\) everywhere. ∎

**Worked example 10.11 (A compact square root with slower decay).** If \(Te_n=e_n/n^2\), then \(Se_n=e_n/n\) is its positive square root. Both are compact, while their truncation errors differ: \(\|T-T_N\|=1/(N+1)^2\), and \(\|S-S_N\|=1/(N+1)\). Taking a square root preserves compactness but changes the rate at which finite-rank models approximate the operator.

## Variational eigenvalue formulas and stability

For a positive compact operator, list eigenvalues in decreasing order, repeating multiplicity. If only finitely many are positive, append zero as long as the Hilbert dimension permits. This convention is for the variational formulas below; a repeated zero need not be part of the earlier nonzero spectral list.

**Theorem 10.12 (Positive min–max formula).** When \(\dim H\ge n\),
\[
 \lambda_n=\max_{\dim L=n}\ \min_{\substack{x\in L\\\|x\|=1}}\langle Tx,x\rangle.
\]
The inner minimum exists because the sphere of the finite-dimensional subspace is compact.

*Proof.* Choose \(L\) to be the span of the first \(n\) eigenvectors, adjoining kernel directions when zero padding is needed. Its unit vectors have quadratic value a convex combination of those \(n\) eigenvalues, so the minimum is \(\lambda_n\). For any other \(n\)-dimensional subspace, the \(n-1\) linear conditions of being perpendicular to the first \(n-1\) chosen eigenvectors have a nonzero solution in \(L\). Normalize such a vector. Its remaining spectral coefficients correspond only to eigenvalues at most \(\lambda_n\), while kernel coefficients contribute zero. Parseval therefore gives quadratic value at most \(\lambda_n\). Thus every candidate minimum is at most the claimed value, and the chosen spectral subspace attains it. ∎

Equivalently one can minimize over \((n-1)\)-dimensional excluded spaces the supremum of the quadratic form on their unit perpendicular vectors. Excluding the first \(n-1\) eigendirections gives supremum \(\lambda_n\). For any other excluded space, its \(n-1\) orthogonality equations have a nonzero solution in the first \(n\) spectral span, yielding value at least \(\lambda_n\). These two inequalities prove the equivalent formula without an appeal to a finite-dimensional characteristic polynomial.

**Corollary 10.13 (Eigenvalue perturbation bound).** If \(A,B\) are positive compact operators on the same Hilbert space, their ordered padded eigenvalues satisfy
\[
 |\lambda_n(A)-\lambda_n(B)|\le\|A-B\|
\]
for every permitted index.

*Proof.* Every unit vector satisfies \(|\langle Ax,x\rangle-\langle Bx,x\rangle|\le\|A-B\|\). Taking a minimum on any fixed finite-dimensional subspace preserves the same additive error bound. Taking the maximum over those subspaces and using Theorem 10.12 gives \(\lambda_n(A)\le\lambda_n(B)+\|A-B\|\). Interchange the operators for the reverse inequality. ∎

For example the positive diagonal operator with eigenvalues \(1/n^2\) has third variational value \(1/9\). Any positive compact approximation within operator norm \(0.001\) has its third eigenvalue within \(0.001\) of that value, irrespective of how its eigenvectors have rotated. This is a stability assertion for ordered eigenvalues. It does not by itself bound individual eigenvectors near repeated or nearly repeated eigenvalues; eigenspace stability needs additional spectral-gap information.

The min–max argument depends on positivity and an ordered real spectrum. Ordering absolute values of a general self-adjoint spectrum and applying the same quadratic formula would be incorrect because negative and positive contributions behave differently. The hypotheses keep the variational conclusion aligned with the diagonal decomposition actually proved.

## Square-summable operator columns and eigenvalues

For a bounded operator T on a separable Hilbert space, choose an orthonormal basis ej and consider the nonnegative sum Σ||Tej||². When finite, its square root is called the Hilbert–Schmidt norm. The value does not depend on the chosen orthonormal basis. To prove this, insert any output orthonormal basis fi and apply Parseval to each Tej. The resulting double sum is Σij|<Tej,fi>|². Nonnegative double sums can be interchanged by taking suprema over finite rectangles. Summing first over j and using the adjoint gives Σi||T*fi||², independent of the input basis. Applying the same reasoning to another output basis establishes full independence.

A finite Hilbert–Schmidt sum implies compactness. Let PN project onto the first N output basis vectors. For a unit vector x, Parseval and Cauchy–Schwarz give ||(I−PN)Tx||²=Σi>N|<x,T*fi>|²≤Σi>N||T*fi||². The right side tends to zero independently of x. Hence PN T tends to T in operator norm and each approximant has finite rank. The compactness closure theorem applies. Taking N=0 in the same estimate also gives ||T||≤||T||HS.

For a compact self-adjoint T, use its orthonormal eigenvectors together with a basis of the kernel. The sum becomes Σ|λj|², so T is Hilbert–Schmidt exactly when its eigenvalues, repeated by multiplicity, are square summable. The squared Hilbert–Schmidt error of retaining a finite spectral set is exactly the remaining eigenvalue square sum. Its operator-norm error instead is the largest omitted eigenvalue magnitude. These are different approximation measures, even though the same spectral directions are used.

For example the positive diagonal operator with entries 1/n is Hilbert–Schmidt, since Σ1/n² converges. Truncating after N gives operator error 1/(N+1), while its Hilbert–Schmidt error is the square root of Σn>N1/n², of order N^−1/2 by elementary integral comparison. The slower second rate measures accumulated column energy, rather than the single worst input amplification.

By contrast the diagonal entries 1/sqrt n tend to zero, so their operator is compact by finite-rank approximation, but its column square sum is the divergent harmonic series. Compactness alone therefore does not imply a finite Hilbert–Schmidt norm. Nor does a finite Hilbert–Schmidt sum automatically give an ordinary sum of eigenvalue magnitudes: those are distinct summability requirements. Any later trace statement must specify its stronger hypothesis rather than infer it from compactness.

The argument is stated for a separable Hilbert space to use a countable basis. For a compact operator on a nonseparable space its range closure is separable, but extending column-sum definitions requires the corresponding indexed-family convention; no hidden countability assumption should be inserted into the general compact spectral theorem.

## Exercises

### Exercise 10.1 {#compact-self-adjoint-spectral-ex-1}

Prove every eigenvalue of a bounded self-adjoint operator is real.

<details><summary>Hint 1</summary>
Pair the eigenvalue equation with its nonzero eigenvector.
</details>
<details><summary>Hint 2</summary>
The quadratic form of a self-adjoint operator equals its conjugate.
</details>
<details><summary>Solution</summary>
If \(Tx=\lambda x\), then \(\lambda\|x\|^2=\langle Tx,x\rangle\). Self-adjointness and conjugate symmetry make the right side real. Since \(\|x\|^2>0\), the scalar \(\lambda\) must be real. Compactness is not needed for this property.
</details>

### Exercise 10.2 {#compact-self-adjoint-spectral-ex-2}

Show eigenvectors for distinct self-adjoint eigenvalues are orthogonal.

<details><summary>Hint 1</summary>
Compute \(\langle Tx,y\rangle\) using each eigenvalue equation.
</details>
<details><summary>Hint 2</summary>
Use reality of both eigenvalues before subtracting.
</details>
<details><summary>Solution</summary>
If \(Tx=\lambda x\), \(Ty=\mu y\), then \(\lambda\langle x,y\rangle=\langle Tx,y\rangle=\langle x,Ty\rangle=\mu\langle x,y\rangle\). Thus \((\lambda-\mu)\langle x,y\rangle=0\). Distinctness forces the inner product to vanish. The conjugate in the second slot disappears because the eigenvalues are real.
</details>

### Exercise 10.3 {#compact-self-adjoint-spectral-ex-3}

For \(Te_n=e_n/n^2\), compute the norm and its rank-\(N\) truncation error.

<details><summary>Hint 1</summary>
The norm is the largest coefficient magnitude.
</details>
<details><summary>Hint 2</summary>
The largest omitted coefficient is the next one.
</details>
<details><summary>Solution</summary>
The norm is one, attained at \(e_1\). The truncation error is \(\sup_{n>N}1/n^2=1/(N+1)^2\), attained at \(e_{N+1}\). The coefficient tail tends to zero, proving compactness independently and agreeing with the spectral theorem's operator-norm error formula.
</details>

### Exercise 10.4 {#compact-self-adjoint-spectral-ex-4}

Why does the approximate eigenvector argument require \(T\ne0\)?

<details><summary>Hint 1</summary>
It divides by the extremal eigenvalue candidate.
</details>
<details><summary>Hint 2</summary>
The zero operator is handled separately by its full kernel.
</details>
<details><summary>Solution</summary>
The argument deduces convergence of \(x_n\) from convergence of \(Tx_n\) and \(Tx_n-\lambda x_n\to0\), which requires \(\lambda\ne0\). For nonzero \(T\), \(|\lambda|=\|T\|>0\). For \(T=0\), the kernel is the whole space and the spectral decomposition has no nonzero eigendirections; its conclusion is immediate without that construction.
</details>

### Exercise 10.5 {#compact-self-adjoint-spectral-ex-5}

Prove there are only finitely many orthogonal eigendirections with eigenvalue modulus at least a given \(\varepsilon>0\).

<details><summary>Hint 1</summary>
Their images remain mutually orthogonal.
</details>
<details><summary>Hint 2</summary>
Compute a lower bound on pairwise output distances.
</details>
<details><summary>Solution</summary>
For distinct unit eigenvectors in an orthonormal family, image differences have squared norm \(|\lambda_j|^2+|\lambda_k|^2\ge2\varepsilon^2\). An infinite such family has no Cauchy image subsequence, contradicting compactness. Thus only finitely many directions exist above each positive threshold, including multiplicity.
</details>

### Exercise 10.6 {#compact-self-adjoint-spectral-ex-6}

For \(Te_n=e_n/n\), decide whether \(y_n=1/n^2\) lies in the range and find its preimage.

<details><summary>Hint 1</summary>
Solve the coordinate equations \(x_n/n=y_n\).
</details>
<details><summary>Hint 2</summary>
Check square summability of the proposed input.
</details>
<details><summary>Solution</summary>
The proposed input is \(x_n=1/n\), which belongs to \(\ell^2\) because \(\sum1/n^2\) converges. Hence \(y\) lies in the range and this is its unique preimage, since the diagonal operator has zero kernel. Compare with \(y_n=1/n\), whose formal preimage is not square summable.
</details>

### Exercise 10.7 {#compact-self-adjoint-spectral-ex-7}

Show the diagonal operator with coefficients \(i/n\) is compact but not self-adjoint.

<details><summary>Hint 1</summary>
Compactness depends on coefficient moduli tending to zero.
</details>
<details><summary>Hint 2</summary>
The adjoint conjugates diagonal coefficients.
</details>
<details><summary>Solution</summary>
The coefficients tend to zero, so finite-rank truncations converge in norm and the map is compact. Its adjoint has coefficients \(-i/n\), different from the original. Its nonreal eigenvalues also contradict the necessary reality property of self-adjoint maps. Compactness alone therefore does not give the real spectral theorem proved here.
</details>

### Exercise 10.8 {#compact-self-adjoint-spectral-ex-8}

Explain why the kernel may be infinite dimensional even for a nonzero compact self-adjoint operator.

<details><summary>Hint 1</summary>
Take a rank-one orthogonal projection on \(\ell^2\).
</details>
<details><summary>Hint 2</summary>
Every other coordinate direction belongs to its kernel.
</details>
<details><summary>Solution</summary>
The projection onto \(\operatorname{span}\{e_1\}\) is finite rank, compact and self-adjoint. It has eigenvalue one on that line, while all vectors with first coordinate zero form its infinite-dimensional kernel. The finite-multiplicity statement applies to nonzero eigenvalues, not to zero. In a nonseparable Hilbert space that kernel can even be nonseparable.
</details>

### Exercise 10.9 {#compact-self-adjoint-spectral-ex-9}

For a real \(\lambda\ne0\) equal to one eigenvalue, characterize solvability of \((\lambda I-T)x=y\).

<details><summary>Hint 1</summary>
Project the equation onto the corresponding eigenspace.
</details>
<details><summary>Hint 2</summary>
On its perpendicular complement all remaining denominators stay bounded away from zero.
</details>
<details><summary>Solution</summary>
A necessary condition is that \(y\) be perpendicular to the \(\lambda\)-eigenspace, since the operator vanishes there and preserves the perpendicular complement. It is sufficient because division by the remaining factors defines a bounded inverse on that complement: only zero can be an eigenvalue accumulation point, while the chosen \(\lambda\) is nonzero. All solutions differ by an arbitrary vector in the eigenspace.
</details>

### Exercise 10.10 {#compact-self-adjoint-spectral-ex-10}

Prove a positive compact operator has no negative eigenvalue and that its spectral square root is compact.

<details><summary>Hint 1</summary>
Test positivity on an eigenvector.
</details>
<details><summary>Hint 2</summary>
Square roots of eigenvalue magnitudes still tend to zero.
</details>
<details><summary>Solution</summary>
For a unit eigenvector, positivity gives \(\lambda=\langle Te,e\rangle\ge0\). The square-root operator has coefficients \(\sqrt{\lambda_n}\), bounded and tending to zero when the list is infinite. Its finite-rank truncation errors are their tail suprema and tend to zero. Thus it is compact by norm closure, with zero action on the kernel.
</details>

### Exercise 10.11 {#compact-self-adjoint-spectral-ex-11}

Why does a nonzero value outside the listed eigenvalues have a bounded resolvent, rather than merely a formal coordinate inverse?

<details><summary>Hint 1</summary>
The only possible accumulation point of the eigenvalues is zero.
</details>
<details><summary>Hint 2</summary>
Obtain a positive lower bound for all denominator moduli.
</details>
<details><summary>Solution</summary>
If \(\lambda\ne0\) is not listed, all sufficiently late eigenvalues lie within \(|\lambda|/2\) of zero, so their denominator moduli exceed \(|\lambda|/2\). The finitely many earlier nonzero denominators have a positive minimum as well. Including the kernel denominator \(|\lambda|\) gives one positive uniform bound. Reciprocal coefficients are therefore bounded, so orthogonal synthesis defines an actual bounded inverse.
</details>

### Exercise 10.12 {#compact-self-adjoint-spectral-ex-12}

Let \(T\) be compact self-adjoint. Show its range closure equals \((\ker T)^\perp\), while its range itself need not equal that subspace.

<details><summary>Hint 1</summary>
Every nonzero eigenvector is in the range after division by its eigenvalue.
</details>
<details><summary>Hint 2</summary>
Use the diagonal example with eigenvalues tending to zero for nonclosedness.
</details>
<details><summary>Solution</summary>
The spectral theorem identifies the kernel perpendicular as the closed span of nonzero eigenvectors. Each such vector lies in the range, so that span is contained in the range closure. Self-adjointness makes every range vector perpendicular to the kernel, giving the reverse inclusion. For \(Te_n=e_n/n\), the kernel is zero and range is dense, but the vector \((1/n)\) is not in the range, so equality fails before taking closure.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Hilbert/spectral chapter, with compactness and Hilbert foundations proved earlier in this book. Conway and Brezis are syllabus benchmarks. The theorem concerns compact self-adjoint operators; general bounded normal spectral theory needs a different functional-calculus construction, developed later, and is not inferred from an infinite diagonalization analogy.

## Summary

Self-adjointness turns the norm into a quadratic-form supremum and makes distinct eigenspaces orthogonal. Compactness turns an extremal approximate eigenvector into an actual one and forces nonzero eigenvalues to approach zero. Repetition on invariant complements gives the complete compact spectral decomposition and exact finite-rank errors. Small eigenvalues also reveal unstable inverse problems. The next chapter treats compact perturbations of the identity without assuming self-adjointness, using Fredholm structure and the solvability alternative.
