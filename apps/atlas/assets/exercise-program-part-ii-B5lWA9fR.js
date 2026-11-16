var e=`---
parent_id: book-numerical-mathematics-error-algorithms
matter_id: exercise-program-part-ii
title: "Solved Exercise Program, Part II: Spectra, Fields, and Verification"
level: advanced-undergraduate
estimated_minutes: 1100
license: CC BY-SA 4.0
---

# Solved Exercise Program, Part II: Spectra, Fields, and Verification {#section-1-solved-exercise-program-part-ii-spectra-fields-and-veri}

This retained earlier-edition supplement supplies 150 exercises under its original Chapters 11–20 numbering; these labels and exercise identities are preserved, not current chapter numbers. Old groups 11–12 belong to the linked Matrix Computation in Practice prerequisite; groups 13–17 map respectively to current Chapters 10, 11–12, 13, 14, and 15; groups 18–20 map to current Chapters 16–17. Use the reader guide for the current seventeen-chapter route. Each problem states the assumptions needed for its conclusion. Numerical quantities are dimensionless unless a physical unit is displayed. A computed residual is never silently promoted to a forward-error bound, and an empirical pattern is never called a proof. The five projects at the end are bounded, deterministic, and reproducible.

<a id="section-3-chapter-11-eigenvalue-singular-value-and-rank-problems"></a>
## Chapter 11: eigenvalue, singular-value, and rank problems {#section-5-chapter-11-eigenvalue-singular-value-and-rank-problems}

<a id="section-5-exercise-1-a-rayleigh-quotient"></a>
### Exercise 1 — A Rayleigh quotient {#section-7-exercise-1-a-rayleigh-quotient}

For \\(A=\\operatorname{diag}(2,5)\\) and \\(x=(1,2)^{\\mathsf T}\\), compute the Rayleigh quotient and bound it using the eigenvalues.

**Solution.** Since \\(x^{\\mathsf T} A x=2+20=22\\) and \\(x^{\\mathsf T} x=5\\), the quotient is \\(22/5\\). The matrix is real symmetric, so the spectral theorem gives \\(2\\le x^{\\mathsf T} A x/(x^{\\mathsf T} x)\\le 5\\) for every nonzero \\(x\\). Indeed \\(2<22/5<5\\). This interval conclusion uses symmetry; it is not generally valid with eigenvalues ordered on the real line for a nonsymmetric matrix.

<a id="section-11-exercise-2-residual-to-spectrum-distance"></a>
### Exercise 2 — Residual-to-spectrum distance {#section-13-exercise-2-residual-to-spectrum-distance}

Let \\(A=A^{\\mathsf T}\\), \\(\\lVert v\\rVert_2=1\\), \\(\\theta=v^TAv\\), and \\(r=Av-\\theta v\\). Prove that some eigenvalue lies within \\(\\lVert r\\rVert_2\\) of \\(\\theta\\).

**Solution.** Expand \\(v=\\sum_i c_i q_i\\) in an orthonormal eigenbasis. Then \\(1=\\sum_i \\lvert c_i\\rvert^{2}\\) and \\(\\lVert r\\rVert_2^{2}=\\sum_i \\lvert c_i\\rvert^{2}(\\lambda_i-\\theta)^{2}\\). If every \\(\\lvert \\lambda_i-\\theta\\rvert\\) exceeded \\(\\lVert r\\rVert_2\\), the right side would exceed \\(\\lVert r\\rVert_2^{2} \\sum_i\\lvert c_i\\rvert^{2}=\\lVert r\\rVert_2^{2}\\), a contradiction. Thus \\(\\min_i\\lvert \\lambda_i-\\theta\\rvert\\le \\lVert r\\rVert_2\\). The result locates some eigenvalue, not necessarily a prespecified one.

<a id="section-17-exercise-3-one-power-step"></a>
### Exercise 3 — One power step {#section-19-exercise-3-one-power-step}

Starting from \\(x_0=(1,1)^{\\mathsf T}\\), perform one normalized power iteration for \\(A=\\operatorname{diag}(4,1)\\) using the Euclidean norm, and compute the angle tangent relative to the dominant eigenvector.

**Solution.** The unnormalized vector is \\((4,1)^{\\mathsf T}\\), so \\(x_1=(4,1)^{\\mathsf T}/\\sqrt{17}\\). Relative to \\(e_1\\), the tangent of the acute angle is the magnitude ratio of the unwanted to wanted component, namely \\(1/4\\). Initially it was \\(1\\); one step multiplies it by \\(\\lvert \\lambda_2/\\lambda_1\\rvert=1/4\\). This prediction assumes a nonzero dominant component in the start.

<a id="section-23-exercise-4-shift-and-invert-selection"></a>
### Exercise 4 — Shift-and-invert selection {#section-25-exercise-4-shift-and-invert-selection}

For \\(A=\\operatorname{diag}(1,3,8)\\) and shift \\(\\sigma=2.7\\), which eigenvector is amplified most by inverse iteration with \\((A-\\sigma I)^{-1}\\)?

**Solution.** The transformed eigenvalues are \\(1/(1-2.7)=-10/17\\), \\(1/(3-2.7)=10/3\\), and \\(1/(8-2.7)=10/53\\). The largest magnitude is \\(10/3\\), so the \\(\\lambda=3\\) eigenvector dominates provided its initial coefficient is nonzero. This is a selection statement in exact arithmetic; solving the shifted systems inaccurately can alter convergence.

<a id="section-29-exercise-5-a-singular-value-computation"></a>
### Exercise 5 — A singular-value computation {#section-31-exercise-5-a-singular-value-computation}

Find the singular values of \\(B=\\begin{pmatrix}0&3\\\\2&0\\end{pmatrix}\\) and its spectral condition number.

**Solution.** \\(B^{\\mathsf T} B=\\operatorname{diag}(4,9)\\), whose eigenvalues are \\(4\\) and \\(9\\). Hence the singular values are \\(3\\) and \\(2\\), ordered decreasingly, and \\(\\kappa_2(B)=3/2\\). Both are nonzero, so \\(B\\) has full rank. This condition number concerns relative normwise perturbations for a nonsingular linear map; it does not alone predict every componentwise error.

<a id="section-35-exercise-6-best-rank-one-error"></a>
### Exercise 6 — Best rank-one error {#section-37-exercise-6-best-rank-one-error}

Suppose a matrix has singular values \\(7,2,1\\). State the best rank-one approximation errors in the spectral and Frobenius norms.

**Solution.** The truncated singular-value decomposition retains the singular value \\(7\\). The spectral-norm error is the first discarded singular value, \\(2\\). The squared Frobenius error is \\(2^{2}+1^{2}=5\\), so the Frobenius error is \\(\\sqrt{5}\\). These are global minima over matrices of rank at most one, assuming exact data.

<a id="section-41-exercise-7-numerical-rank-depends-on-scale"></a>
### Exercise 7 — Numerical rank depends on scale {#section-43-exercise-7-numerical-rank-depends-on-scale}

The singular values of \\(C\\) are \\((10^{6},1,10^{-8})\\). Determine the numerical rank under the rule \\(\\sigma_i>\\tau \\sigma_1\\) for \\(\\tau=10^{-10}\\) and for \\(\\tau=10^{-6}\\).

**Solution.** With \\(\\tau=10^{-10}\\), the threshold is \\(10^{-4}\\); the first two singular values exceed it, giving rank two. With \\(\\tau=10^{-6}\\), the threshold is \\(1\\); only \\(10^{6}\\) exceeds it because the rule is strict, giving rank one. A numerical rank is therefore inseparable from its tolerance and scaling convention; the exact algebraic rank here is three.

<a id="section-47-exercise-8-weyl-perturbation-bound"></a>
### Exercise 8 — Weyl perturbation bound {#section-49-exercise-8-weyl-perturbation-bound}

Let \\(A=A^{\\mathsf T}\\) have eigenvalues \\(1,4\\), and let \\(E=E^{\\mathsf T}\\) satisfy \\(\\lVert E\\rVert_2\\le 0.2\\). Give intervals guaranteed to contain the ordered eigenvalues of \\(A+E\\).

**Solution.** Weyl's bound gives \\(\\lvert \\lambda_i(A+E)-\\lambda_i(A)\\rvert\\le \\lVert E\\rVert_2\\). Therefore the smaller eigenvalue belongs to \\([0.8,1.2]\\) and the larger to \\([3.8,4.2]\\). Because the intervals are disjoint, their ordering is also unambiguous. The conclusion requires Hermitian or real-symmetric matrices; arbitrary nonsymmetric eigenvalues can be much more sensitive.

<a id="section-53-exercise-9-eigenvector-sensitivity-from-a-gap"></a>
### Exercise 9 — Eigenvector sensitivity from a gap {#section-55-exercise-9-eigenvector-sensitivity-from-a-gap}

A symmetric matrix has a simple eigenvalue \\(\\lambda\\) separated from the rest of the spectrum by \\(g=0.5\\). A normalized approximate eigenvector has residual norm \\(0.01\\) and Rayleigh quotient nearer \\(\\lambda\\) than any other eigenvalue. Give a basic sine-angle bound.

**Solution.** Exercise 2 and the stated nearest-eigenvalue identification give \\(\\lvert \\theta-\\lambda\\rvert\\le 0.01\\). Every unwanted eigenvalue is therefore at least \\(\\delta\\ge 0.5-0.01=0.49\\) from \\(\\theta\\). Resolving the residual in the orthogonal eigenspaces gives \\(\\sin(angle(v,q))\\le \\lVert r\\rVert_2/\\delta\\le 0.01/0.49\\), approximately \\(0.02041\\). The argument depends on identifying the relevant isolated eigenvalue; a residual alone cannot identify one vector inside a clustered eigenspace.

<a id="section-59-exercise-10-trace-and-determinant-audit"></a>
### Exercise 10 — Trace and determinant audit {#section-61-exercise-10-trace-and-determinant-audit}

An algorithm reports eigenvalues \\(2,3,7\\) for a \\(3\\times3\\) matrix whose trace is \\(12\\) and determinant is \\(41\\). Which invariant passes and which fails?

**Solution.** The reported eigenvalues sum to \\(12\\), so the trace check passes. Their product is \\(42\\), not \\(41\\), so the determinant check fails. Passing the trace check is only one necessary condition and does not validate the spectrum. The determinant discrepancy may reflect inaccurate eigenvalues, an incorrectly recorded matrix, or overflow/roundoff in the audit; further evidence is needed to locate the defect.

<a id="section-65-exercise-11-a-defective-matrix"></a>
### Exercise 11 — A defective matrix {#section-67-exercise-11-a-defective-matrix}

For \\(J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}\\), determine the algebraic and geometric multiplicities of eigenvalue \\(2\\), and explain why an eigenvector basis is unavailable.

**Solution.** The characteristic polynomial is \\((\\lambda-2)^{2}\\), so the algebraic multiplicity is two. The nullspace of \\(J-2I=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\) consists of \\((a,0)^{\\mathsf T}\\), hence has dimension one. Thus the geometric multiplicity is one and there is only one independent eigenvector. Any method or condition estimate assuming diagonalizability is inapplicable without modification.

<a id="section-71-exercise-12-normal-equations-damage"></a>
### Exercise 12 — Normal-equations damage {#section-73-exercise-12-normal-equations-damage}

If a full-column-rank matrix has \\(\\kappa_2(A)=10^{5}\\), what is \\(\\kappa_2(A^{\\mathsf T} A)\\) in exact arithmetic, and what does this suggest?

**Solution.** The eigenvalues of \\(A^{\\mathsf T} A\\) are squared singular values of \\(A\\), so \\(\\kappa_2(A^{\\mathsf T} A)=\\kappa_2(A)^{2}=10^{10}\\). Forming normal equations can therefore square the conditioning seen by the solve. This does not prove every computed normal-equations answer loses ten decimal digits, but it warns that QR or SVD is usually safer when accuracy matters.

<a id="section-77-exercise-13-interlacing-check"></a>
### Exercise 13 — Interlacing check {#section-79-exercise-13-interlacing-check}

Let a symmetric \\(3\\times3\\) matrix have eigenvalues \\(1\\le 4\\le 9\\). State the possible ordered eigenvalues \\(\\mu_1\\le \\mu_2\\) of any \\(2\\times2\\) principal submatrix.

**Solution.** Cauchy interlacing gives \\(1\\le \\mu_1\\le 4\\le \\mu_2\\le 9\\). Thus a claimed principal-submatrix spectrum \\((0.5,8)\\) is impossible, while \\((3,8)\\) is consistent with this necessary condition. Interlacing alone does not assert that every pair satisfying the inequalities is realized by a specified principal submatrix.

<a id="section-83-exercise-14-relative-versus-absolute-eigenvalue-error"></a>
### Exercise 14 — Relative versus absolute eigenvalue error {#section-85-exercise-14-relative-versus-absolute-eigenvalue-error}

An exact eigenvalue is \\(10^{-9}\\) and an approximation is \\(2\\cdot 10^{-9}\\). Compute absolute and relative errors and interpret them.

**Solution.** The absolute error is \\(10^{-9}\\); dividing by the nonzero exact value gives relative error \\(1\\), or 100 percent. A small absolute error can therefore be a large relative error near zero. At an exact zero eigenvalue the usual relative error is undefined, so a scale based on the matrix norm or a gap must be stated.

<a id="section-89-exercise-15-orthogonal-invariance-of-singular-values"></a>
### Exercise 15 — Orthogonal invariance of singular values {#section-91-exercise-15-orthogonal-invariance-of-singular-values}

Prove that multiplying \\(A\\) on the left by an orthogonal matrix \\(Q\\) preserves singular values.

**Solution.** Since \\(Q^TQ=I\\), \\((QA)^{\\mathsf T}(QA)=A^TQ^TQA=A^TA\\). Singular values are the nonnegative square roots of the eigenvalues of this Gram matrix, so \\(QA\\) and \\(A\\) have identical singular values. The proof assumes exact orthogonality. A computed \\(Q\\) with \\(Q^TQ\\) noticeably different from \\(I\\) requires a perturbation analysis rather than this identity.

<a id="section-95-chapter-12-randomized-and-mixed-precision-linear-algebr"></a>
## Chapter 12: randomized and mixed-precision linear algebra {#section-97-chapter-12-randomized-and-mixed-precision-linear-algebr}

<a id="section-97-exercise-16-unbiased-trace-sample"></a>
### Exercise 16 — Unbiased trace sample {#section-99-exercise-16-unbiased-trace-sample}

Let \\(z\\) have independent Rademacher entries and let \\(A\\) be fixed. Show \\(E[z^TAz]=\\operatorname{tr}(A)\\).

**Solution.** Expand \\(z^TAz=\\sum_{i,j}a_{ij} z_i z_j\\). Independence and zero means give \\(E[z_i z_j]=0\\) for \\(i\\ne j\\), while \\(z_i^{2}=1\\). Hence the expectation is \\(\\sum_i a_{ii}=\\operatorname{tr}(A)\\). This is an unbiased stochastic estimator, not a deterministic bound from one sample; a probability statement needs a sample count and assumptions.

<a id="section-103-exercise-17-sampling-variance-for-a-diagonal-matrix"></a>
### Exercise 17 — Sampling variance for a diagonal matrix {#section-105-exercise-17-sampling-variance-for-a-diagonal-matrix}

For diagonal \\(A\\), what is the variance of one Rademacher trace sample \\(z^TAz\\)?

**Solution.** Because every \\(z_i^{2}=1\\), \\(z^TAz=\\sum_i a_{ii}\\) exactly for every Rademacher vector. The variance is therefore zero. This special result does not extend to a general matrix: off-diagonal terms fluctuate, although only the symmetric part contributes to the quadratic form.

<a id="section-109-exercise-18-range-finder-exactness"></a>
### Exercise 18 — Range-finder exactness {#section-111-exercise-18-range-finder-exactness}

Let \\(A\\) have exact rank \\(r\\), and let \\(\\Omega\\) have \\(r+p\\) columns. If \\(V_r^{\\mathsf T} \\Omega\\) has row rank \\(r\\) in an SVD \\(A=U_r \\Sigma_r V_r^{\\mathsf T}\\), prove that \\(range(A \\Omega)=range(A)\\).

**Solution.** We have \\(A \\Omega=U_r \\Sigma_r(V_r^{\\mathsf T} \\Omega)\\). Both \\(\\Sigma_r\\) and \\(V_r^{\\mathsf T} \\Omega\\) have rank \\(r\\), so their product has row rank \\(r\\); consequently \\(A \\Omega\\) spans all \\(r\\) columns of \\(U_r\\). Those columns also span \\(\\operatorname{range}(A)\\). Randomness is only a mechanism for making the rank condition likely; the conclusion itself is deterministic once the condition is checked.

<a id="section-115-exercise-19-oversampling-dimensions"></a>
### Exercise 19 — Oversampling dimensions {#section-117-exercise-19-oversampling-dimensions}

An \\(m x n\\) matrix is approximated with target rank \\(k=20\\) and oversampling \\(p=8\\). What are the dimensions of a Gaussian test matrix and the sample matrix in the basic right range finder?

**Solution.** Draw \\(\\Omega\\) with shape \\(n x (k+p)=n x 28\\). Then \\(Y=A \\Omega\\) has shape \\(m\\times28\\). Orthonormalizing its columns produces at most 28 basis vectors. These dimensions do not guarantee approximation quality; decay of the singular spectrum and the random draw affect the error.

<a id="section-121-exercise-20-a-posterior-residual-probe"></a>
### Exercise 20 — A posterior residual probe {#section-123-exercise-20-a-posterior-residual-probe}

Given a matrix \\(Q\\) with orthonormal columns and the orthogonal projector \\(P=QQ^{\\mathsf T}\\) onto \\(\\operatorname{range}(Q)\\), explain why \\(\\lVert (I-P)A \\omega\\rVert_2/\\lVert \\omega\\rVert_2\\) is a lower bound on \\(\\lVert (I-P)A\\rVert_2\\) for every nonzero probe \\(\\omega\\).

**Solution.** By the definition of the induced norm, \\(\\lVert M\\rVert_2=\\max_{x\\ne 0}\\lVert Mx\\rVert_2/\\lVert x\\rVert_2\\). Taking the particular vector \\(\\omega\\) with \\(M=(I-P)A\\) cannot exceed the maximum. Thus the probe ratio is a deterministic lower bound. Several small random probe values provide evidence, but not an upper certificate unless a probabilistic theorem with declared failure probability is invoked.

<a id="section-127-exercise-21-precision-unit-roundoffs"></a>
### Exercise 21 — Precision unit roundoffs {#section-129-exercise-21-precision-unit-roundoffs}

Suppose a low format has unit roundoff \\(u_l=5\\cdot 10^{-4}\\) and high precision has \\(u_h=10^{-16}\\). If \\(\\kappa(A)=100\\), evaluate \\(\\kappa(A)u_l\\) and state the usual refinement implication.

**Solution.** The product is \\(0.05<1\\). This supports the standard expectation that a low-precision factorization may serve as a correction solver while high-precision residuals drive iterative refinement. It is a favorable diagnostic, not an unconditional guarantee: scaling, growth in factorization, underflow, and inaccurate residual formation can still cause failure.

<a id="section-133-exercise-22-residual-recomputation"></a>
### Exercise 22 — Residual recomputation {#section-135-exercise-22-residual-recomputation}

Let stored binary data define \\(A\\) and \\(b\\). Why should mixed-precision iterative refinement recompute \\(r=b-Ax\\) in the higher precision rather than update it recursively in low precision?

**Solution.** A recursive update accumulates rounding errors from previous corrections and can make the stored residual drift away from the residual of the current iterate. Direct high-precision recomputation ties \\(r\\) back to the declared stored problem and reduces cancellation error. Even then, a small backward error becomes a forward-error statement only after conditioning is considered.

<a id="section-139-exercise-23-scaling-a-two-by-two-system"></a>
### Exercise 23 — Scaling a two-by-two system {#section-141-exercise-23-scaling-a-two-by-two-system}

For \\(A=\\operatorname{diag}(10^{8},10^{-2})\\), give diagonal row scaling that produces the identity and explain the units caveat.

**Solution.** Left multiplication by \\(D=\\operatorname{diag}(10^{-8},10^{2})\\) gives \\(DA=I\\). This improves the apparent normwise conditioning of the coefficient matrix. If the two equations carry physical units, however, the factors redefine residual scales; the stopping test must be interpreted in the scaled equations or converted back componentwise. Scaling cannot be treated as unit-free cosmetic arithmetic.

<a id="section-145-exercise-24-a-reproducible-random-matrix"></a>
### Exercise 24 — A reproducible random matrix {#section-147-exercise-24-a-reproducible-random-matrix}

List the minimum metadata needed to reproduce a pseudorandom Gaussian sketch exactly within one declared software environment.

**Solution.** Record the generator algorithm and implementation, seed or full initial state, matrix dimensions, sampling method, arithmetic format, library/runtime versions, execution command, and ordering or parallel settings. A seed alone is insufficient because different generators or Gaussian transformations can map it to different values. Store the realized matrix, preferably in exact hexadecimal floating-point text, when cross-environment bitwise reproduction is required.

<a id="section-151-exercise-25-probability-amplification"></a>
### Exercise 25 — Probability amplification {#section-153-exercise-25-probability-amplification}

An independent randomized trial fails with probability at most \\(0.1\\). What is the failure bound if three trials are run independently and success is accepted when any trial succeeds?

**Solution.** All three must fail, so independence gives probability at most \\(0.1^{3}=0.001\\). The argument requires genuinely independent random draws and a verifiable success criterion. Reusing the same sketch or merely changing thread schedules does not establish independence.

<a id="section-157-exercise-26-matrix-product-sketch-expectation"></a>
### Exercise 26 — Matrix-product sketch expectation {#section-159-exercise-26-matrix-product-sketch-expectation}

Let \\(S\\) satisfy \\(E[S^TS]=I\\). Show that \\(E[(SA)^{\\mathsf T}(SB)]=A^TB\\) for fixed conforming matrices.

**Solution.** Algebra gives \\((SA)^{\\mathsf T}(SB)=A^TS^TSB\\). Taking expectations and using linearity yields \\(A^TE[S^TS]B=A^TB\\). This establishes unbiasedness only. It says nothing about the variance or a high-probability norm error without additional distributional assumptions and a sufficiently large sketch dimension.

<a id="section-163-exercise-27-loss-of-orthogonality-audit"></a>
### Exercise 27 — Loss of orthogonality audit {#section-165-exercise-27-loss-of-orthogonality-audit}

A computed basis \\(Q\\) has \\(\\lVert I-Q^TQ\\rVert_2=3\\cdot 10^{-7}\\). What does this measure, and what does it not establish?

**Solution.** It measures the worst normwise defect in the Gram matrix, hence how far the computed columns are from being orthonormal. It does not by itself measure how well \\(\\operatorname{range}(Q)\\) approximates \\(\\operatorname{range}(A)\\). The latter needs a residual such as \\(\\lVert (I-QQ^{\\mathsf T})A\\rVert\\); both diagnostics are needed in a range-finding audit.

<a id="section-169-exercise-28-mixed-precision-dot-product-bound"></a>
### Exercise 28 — Mixed-precision dot-product bound {#section-171-exercise-28-mixed-precision-dot-product-bound}

Assume floating-point addition and multiplication obey the standard model with unit roundoff \\(u\\) and \\(n\\,u<1\\). State a forward bound for a naive length-\\(n\\) dot product.

**Solution.** The computed result satisfies \\(\\lvert \\operatorname{fl}(x^Ty)-x^Ty\\rvert\\le \\gamma_n \\sum_i\\lvert x_i y_i\\rvert\\), with \\(\\gamma_n=n\\,u/(1-n\\,u)\\) under the standard no-overflow/underflow model. Cancellation can make this absolute bound large relative to \\(\\lvert x^Ty\\rvert\\). Accumulating in higher precision reduces \\(u\\), but the format and rounding route must be declared.

<a id="section-175-exercise-29-exact-versus-empirical-low-rank"></a>
### Exercise 29 — Exact versus empirical low rank {#section-177-exercise-29-exact-versus-empirical-low-rank}

A matrix has singular values \\(1,10^{-2},10^{-4},\\ldots\\). Explain why calling it rank two requires a tolerance or error budget.

**Solution.** Unless a trailing singular value is exactly zero, the algebraic rank includes it. Rank two can instead mean that discarding from \\(10^{-4}\\) downward meets an application norm tolerance. In spectral norm the rank-two truncation error is \\(10^{-4}\\); in Frobenius norm the entire squared tail contributes. Therefore the norm, scale, and tolerance must accompany the numerical-rank claim.

<a id="section-181-exercise-30-seeded-comparison-fairness"></a>
### Exercise 30 — Seeded comparison fairness {#section-183-exercise-30-seeded-comparison-fairness}

Two randomized solvers are compared on the same ten seeds. State one benefit and one limitation of this paired design.

**Solution.** Pairing controls instance-to-instance variation: performance differences can be computed seed by seed on identical realized inputs. But ten seeds do not create a deterministic guarantee or necessarily estimate rare failures accurately. The report must preserve all outcomes, state the sampling population and statistic, and avoid choosing seeds after inspecting results.

<a id="section-187-chapter-13-initial-value-methods"></a>
## Chapter 13: initial-value methods {#section-189-chapter-13-initial-value-methods}

<a id="section-189-exercise-31-forward-euler-amplification"></a>
### Exercise 31 — Forward Euler amplification {#section-191-exercise-31-forward-euler-amplification}

Apply forward Euler to \\(y'=\\lambda y\\) with step \\(h\\). Derive the amplification factor and the real negative-axis stability condition.

**Solution.** The update is \\(y_{n+1}=y_n+h \\lambda y_n=(1+z)y_n\\), where \\(z=h \\lambda\\). Absolute stability requires \\(\\lvert 1+z\\rvert\\le 1\\). For real \\(\\lambda<0\\), this becomes \\(-2\\le h \\lambda\\le 0\\), or \\(0\\le h\\le 2/\\lvert \\lambda\\rvert\\). Stability does not by itself guarantee small global error; consistency and an adequately small step are also needed.

<a id="section-195-exercise-32-backward-euler-on-decay"></a>
### Exercise 32 — Backward Euler on decay {#section-197-exercise-32-backward-euler-on-decay}

For \\(y'=-4y\\), \\(y(0)=3\\), and \\(h=0.5 s\\), compute one backward Euler step, retaining the unit interpretation.

**Solution.** Here the rate \\(4\\) has units \\(s^{-1}\\), so \\(h \\lambda=-2\\) is dimensionless. Backward Euler gives \\(y_1=y_0/(1-h \\lambda)=3/(1+2)=1\\). The exact value at \\(0.5 s\\) is \\(3e^{-2}\\), about \\(0.406\\); the step is stable but inaccurate. A-stability prevents explosive growth for this mode, not coarse-step accuracy.

<a id="section-201-exercise-33-local-truncation-error"></a>
### Exercise 33 — Local truncation error {#section-203-exercise-33-local-truncation-error}

Assume \\(y\\) has two continuous derivatives. Derive the forward Euler local defect over one step.

**Solution.** Taylor expansion gives \\(y(t+h)=y(t)+h y'(t)+(h^{2}/2)y''(\\xi)\\) for some \\(\\xi\\) in the step. Since \\(y'=f(t,y)\\), insertion into the Euler formula leaves defect \\((h^{2}/2)y''(\\xi)\\), hence local error \\(\\mathcal O(h^{2})\\). Under a Lipschitz stability hypothesis over a fixed time interval, accumulation over \\(\\mathcal O(1/h)\\) steps produces first-order global error.

<a id="section-207-exercise-34-heun-s-method-on-a-constant-slope"></a>
### Exercise 34 — Heun's method on a constant slope {#section-209-exercise-34-heun-s-method-on-a-constant-slope}

Use explicit trapezoidal/Heun stepping for \\(y'=6 m/s\\), \\(y(0)=2 m\\), with \\(h=0.25 s\\).

**Solution.** Both the predictor and endpoint slopes equal \\(6 m/s\\); their average is also \\(6 m/s\\). Thus \\(y_1=2 m+(0.25 s)(6 m/s)=3.5 m\\). Any consistent Runge–Kutta method integrates a constant right-hand side exactly in exact arithmetic. This example checks units and stage wiring, not nonlinear order behavior.

<a id="section-213-exercise-35-midpoint-order-check"></a>
### Exercise 35 — Midpoint order check {#section-215-exercise-35-midpoint-order-check}

For \\(y'=y\\), \\(y(0)=1\\), compute one explicit-midpoint step of length \\(h\\) and compare its series with \\(e^h\\).

**Solution.** The midpoint stage is \\(1+(h/2)\\), so the update is \\(1+h(1+h/2)=1+h+h^{2}/2\\). The exact solution is \\(e^h=1+h+h^{2}/2+h^{3}/6+\\mathcal O(h^{4})\\). The one-step error is \\(h^{3}/6+\\mathcal O(h^{4})\\), consistent with a second-order global method under standard smoothness and stability assumptions.

<a id="section-219-exercise-36-step-doubling"></a>
### Exercise 36 — Step doubling {#section-221-exercise-36-step-doubling}

A method of global order \\(p=2\\) produces terminal approximations \\(Y_h\\) and \\(Y_{h/2}\\) in the asymptotic regime. Estimate the fine-grid error from their difference.

**Solution.** Write \\(Y_h=y+C h^{2}+o(h^{2})\\) and \\(Y_{h/2}=y+C h^{2}/4+o(h^{2})\\). The difference \\(Y_h-Y_{h/2}\\) is approximately \\(3C h^{2}/4\\), while the fine error is \\(C h^{2}/4\\). Hence \\(Y_{h/2}-y\\) is estimated by \\((Y_h-Y_{h/2})/3\\), with sign retained. The estimate is empirical unless asymptotic behavior and smoothness are justified.

<a id="section-225-exercise-37-invariant-drift"></a>
### Exercise 37 — Invariant drift {#section-227-exercise-37-invariant-drift}

The system \\(q'=p\\), \\(p'=-q\\) has invariant \\(H=(q^{2}+p^{2})/2\\). Starting from \\((1,0)\\), perform one forward Euler step and compute \\(H_1\\).

**Solution.** Euler gives \\((q_1,p_1)=(1,-h)\\). Thus \\(H_1=(1+h^{2})/2\\), whereas \\(H_0=1/2\\); energy increases by \\(h^{2}/2\\) in one step. This exact calculation explains systematic drift but does not claim every integrator must conserve energy. Structure-preserving methods usually preserve a related geometric property, sometimes a modified energy rather than \\(H\\) exactly.

<a id="section-231-exercise-38-event-location-interpolation"></a>
### Exercise 38 — Event-location interpolation {#section-233-exercise-38-event-location-interpolation}

Suppose a continuous scalar event function has values \\(g_n=-0.2\\) and \\(g_{n+1}=0.3\\) at times separated by \\(0.5 s\\). Give the linearly interpolated event time relative to \\(t_n\\).

**Solution.** The zero fraction is \\(-g_n/(g_{n+1}-g_n)=0.2/0.5=0.4\\). The estimated offset is \\(0.4(0.5 s)=0.2 s\\). This is an interpolation estimate, not a certificate: curvature or multiple crossings within the step can invalidate it. A robust event solver brackets and refines while checking continuity assumptions.

<a id="section-237-exercise-39-lipschitz-propagation"></a>
### Exercise 39 — Lipschitz propagation {#section-239-exercise-39-lipschitz-propagation}

If two exact solutions of \\(y'=f(t,y)\\) satisfy a Lipschitz constant \\(L\\) in \\(y\\), prove \\(\\lVert \\delta y(t)\\rVert\\le e^{L(t-t0)}\\lVert \\delta y(t0)\\rVert\\).

**Solution.** The difference obeys \\(\\lVert \\delta y(t)\\rVert\\le \\lVert \\delta y(t_0)\\rVert+L \\int_{t_0}^t\\lVert \\delta y(s)\\rVert\\,ds\\). Gronwall's inequality yields the stated exponential bound. It is a worst-case perturbation estimate under existence in the Lipschitz region. It does not assert that every perturbation grows at that rate.

<a id="section-243-exercise-40-adaptive-controller-exponent"></a>
### Exercise 40 — Adaptive controller exponent {#section-245-exercise-40-adaptive-controller-exponent}

A local error estimator for an order-\\(p\\) method scales like \\(C h^{p+1}\\). Ignoring safety caps, derive the step multiplier targeting tolerance \\(tol\\) from estimate \\(err>0\\).

**Solution.** Seek \\(h_{new}\\) with \\(err(h_{new}/h)^{p+1}=tol\\). Therefore \\(h_{new}/h=(tol/err)^(1/(p+1))\\). Practical controllers multiply by a safety factor and cap growth or shrinkage. The formula assumes the same smooth local regime; discontinuities, rejection history, or roundoff floors require safeguards.

<a id="section-249-exercise-41-positivity-restriction"></a>
### Exercise 41 — Positivity restriction {#section-251-exercise-41-positivity-restriction}

For forward Euler applied to \\(y'=-k y\\) with \\(k>0\\) and \\(y_n\\ge 0\\), find the step condition preserving nonnegativity.

**Solution.** The update is \\(y_{n+1}=(1-kh)y_n\\). For every nonnegative \\(y_n\\), this remains nonnegative exactly when \\(1-kh\\ge 0\\), hence \\(0\\le h\\le 1/k\\). The absolute-stability restriction extends to \\(2/k\\), so stability alone does not ensure positivity.

<a id="section-255-exercise-42-manufactured-forcing"></a>
### Exercise 42 — Manufactured forcing {#section-257-exercise-42-manufactured-forcing}

Construct \\(g(t)\\) so that \\(y_{star}(t)=t^{2}\\) solves \\(y'=-2y+g(t)\\), and give the initial value.

**Solution.** Substitute the target: \\(y_{star}'=2t\\) and \\(-2y_{star}=-2t^{2}\\), so \\(g(t)=2t+2t^{2}\\). The initial value is \\(y(0)=0\\). A convergence test using this forcing checks the solver against a known solution, but only if \\(g\\) is computed independently enough to avoid reproducing the same implementation defect.

<a id="section-261-exercise-43-dense-output-claim-boundary"></a>
### Exercise 43 — Dense-output claim boundary {#section-263-exercise-43-dense-output-claim-boundary}

An order-four integrator uses linear interpolation between accepted steps. What order should be claimed for arbitrary intermediate output without further analysis?

**Solution.** Linear interpolation is generally second-order accurate locally for a smooth solution over a step, so one cannot automatically claim fourth-order dense output. The endpoint method order does not transfer to an arbitrary interpolant. A fourth-order continuous extension needs separately derived coefficients and verification.

<a id="section-267-exercise-44-stopping-at-final-time"></a>
### Exercise 44 — Stopping at final time {#section-269-exercise-44-stopping-at-final-time}

An adaptive solver at \\(t=0.92 s\\) proposes \\(h=0.15 s\\), but the specified final time is \\(1 s\\). What bounded action preserves the endpoint?

**Solution.** Replace the proposed step by \\(h=0.08 s\\) so the next accepted endpoint is exactly \\(1 s\\), then run the usual error acceptance test for that shortened step. Stepping beyond and interpolating back changes the error mechanism and must be declared if used. Units ensure subtraction is meaningful.

<a id="section-273-exercise-45-separating-solver-and-model-error"></a>
### Exercise 45 — Separating solver and model error {#section-275-exercise-45-separating-solver-and-model-error}

A refined integration stabilizes to six digits, but observations differ by 8 percent. What can and cannot be concluded?

**Solution.** The refinement evidence suggests discretization error for the implemented differential equation is small relative to the displayed digits, assuming the comparison is in the asymptotic regime and arithmetic error is controlled. It does not show the model, parameters, data, or implementation are correct. The 8 percent mismatch must not be assigned to time stepping without an uncertainty and verification analysis.

<a id="section-279-chapter-14-multistep-stiff-and-differential-algebraic-m"></a>
## Chapter 14: multistep, stiff, and differential-algebraic methods {#section-281-chapter-14-multistep-stiff-and-differential-algebraic-m}

<a id="section-281-exercise-46-two-step-consistency"></a>
### Exercise 46 — Two-step consistency {#section-283-exercise-46-two-step-consistency}

Insert a constant exact solution into \\(y_{n+1}=a y_n+b y_{n-1}+h \\beta f_n\\). Find the necessary constant-reproduction condition.

**Solution.** For \\(y=c\\), the derivative and hence \\(f_n\\) are zero. The recurrence becomes \\(c=(a+b)c\\) for every constant \\(c\\), so consistency requires \\(a+b=1\\). This is necessary but not sufficient for convergence: the remaining order conditions and zero-stability must also hold.

<a id="section-287-exercise-47-root-condition"></a>
### Exercise 47 — Root condition {#section-289-exercise-47-root-condition}

The homogeneous recurrence of a two-step method has characteristic polynomial \\(\\rho(\\zeta)=(\\zeta-1)(\\zeta-1.2)\\). Is the method zero-stable?

**Solution.** No. Zero-stability requires every root to lie in the closed unit disk and every root on the unit circle to be simple. The root \\(1.2\\) lies outside, so perturbations can grow geometrically as the step count increases. Consistency cannot rescue this failure; convergence on a fixed interval is lost.

<a id="section-293-exercise-48-backward-differentiation-formula-step"></a>
### Exercise 48 — Backward differentiation formula step {#section-295-exercise-48-backward-differentiation-formula-step}

Apply BDF2, \\((3y_{n+1}-4y_n+y_{n-1})/(2h)=\\lambda y_{n+1}\\), and solve explicitly for \\(y_{n+1}\\).

**Solution.** Rearranging gives \\((3-2h \\lambda)y_{n+1}=4y_n-y_{n-1}\\), hence \\(y_{n+1}=(4y_n-y_{n-1})/(3-2h \\lambda)\\), provided the denominator is nonzero. For a nonlinear right-hand side the new value is implicit and requires a nonlinear solve; this scalar linear rearrangement should not be generalized silently.

<a id="section-299-exercise-49-stiff-decay-scale"></a>
### Exercise 49 — Stiff decay scale {#section-301-exercise-49-stiff-decay-scale}

For \\(y'=-1000 s^{-1} y\\), compare the decay time \\(1/1000 s\\) with a requested output interval of \\(0.1 s\\).

**Solution.** The decay time is \\(0.001 s\\), one hundred times shorter than the output interval. An explicit Euler step of \\(0.1 s\\) violates its stability limit \\(h\\le 0.002 s\\), even though output is desired only every \\(0.1 s\\). Output spacing and stable internal step size are distinct quantities; an implicit stiff solver may step according to accuracy after the transient.

<a id="section-305-exercise-50-a-stability-check-at-one-point"></a>
### Exercise 50 — A-stability check at one point {#section-307-exercise-50-a-stability-check-at-one-point}

For backward Euler the amplification factor is \\(R(z)=1/(1-z)\\). Show that \\(\\lvert R(z)\\rvert\\le 1\\) whenever \\(Re(z)\\le 0\\).

**Solution.** If \\(z=x+iy\\) with \\(x\\le 0\\), then \\(\\lvert 1-z\\rvert^{2}=(1-x)^{2}+y^{2}\\ge 1\\). Thus \\(\\lvert R(z)\\rvert=1/\\lvert 1-z\\rvert\\le 1\\). This proves A-stability for the scalar test equation; it does not establish accuracy or nonlinear-solver convergence.

<a id="section-311-exercise-51-l-stability-distinction"></a>
### Exercise 51 — L-stability distinction {#section-313-exercise-51-l-stability-distinction}

Evaluate the limits of backward Euler's \\(R(z)=1/(1-z)\\) and trapezoidal rule's \\(R(z)=(1+z/2)/(1-z/2)\\) as real \\(z\\to -\\infty\\).

**Solution.** Backward Euler has \\(R(z)\\to 0\\), so very stiff modes are strongly damped. Trapezoidal rule has \\(R(z)\\to -1\\), retaining an alternating component of nearly unchanged magnitude. Both are A-stable, but only backward Euler is L-stable. This matters when unresolved rapidly decaying modes should disappear numerically.

<a id="section-317-exercise-52-newton-matrix-for-an-implicit-step"></a>
### Exercise 52 — Newton matrix for an implicit step {#section-319-exercise-52-newton-matrix-for-an-implicit-step}

For backward Euler applied to \\(y'=f(t,y)\\), write the residual and Newton matrix for the new state.

**Solution.** Define \\(F(Y)=Y-y_n-h f(t_{n+1},Y)\\). Newton solves \\([I-h J_f(t_{n+1},Y_k)] \\delta_k=-F(Y_k)\\) and sets \\(Y_{k+1}=Y_k+\\delta_k\\). The derivative must match the residual actually implemented. Stopping the nonlinear iteration introduces algebraic error that must be kept below the time-discretization budget.

<a id="section-323-exercise-53-index-one-algebraic-constraint"></a>
### Exercise 53 — Index-one algebraic constraint {#section-325-exercise-53-index-one-algebraic-constraint}

Consider \\(x'=-x+z\\) and \\(0=x+z-1\\). Eliminate \\(z\\) and find the consistent initial \\(z_0\\) for a given \\(x_0\\).

**Solution.** The constraint gives \\(z=1-x\\), so the differential equation becomes \\(x'=1-2x\\). A consistent initial pair has \\(z_0=1-x_0\\). Choosing \\(z_0\\) independently violates the algebraic constraint at time zero; a DAE solver may reject it or perform a declared consistency projection.

<a id="section-329-exercise-54-constraint-residual-units"></a>
### Exercise 54 — Constraint residual units {#section-331-exercise-54-constraint-residual-units}

If a DAE constraint is \\(q_1+q_2=L\\) with all quantities in metres, why is a raw tolerance of \\(10^{-8}\\) incomplete?

**Solution.** The residual has units of metres, so the threshold must be \\(10^{-8} m\\) or use a dimensionless scaled rule such as \\(\\lvert q_1+q_2-L\\rvert/(L_{scale})\\le 10^{-8}\\). Without units or scale, the same number changes meaning under conversion from metres to millimetres. A reproducible claim records the scaling.

<a id="section-335-exercise-55-predictor-quality"></a>
### Exercise 55 — Predictor quality {#section-337-exercise-55-predictor-quality}

For a smooth solution, explain why the linear predictor \\(Y^{0}=y_n+h(y_n-y_{n-1})/h_{prev}\\) can aid an implicit solve, and name a boundary case.

**Solution.** It extrapolates the recent slope, so with comparable steps it begins near the new solution and can reduce Newton iterations. After a discontinuity, event, rejected step, or drastic step-ratio change, that slope may be misleading; a lower-order or problem-specific predictor is safer. Predictor success affects solver cost, not the formal equation defining the accepted implicit step.

<a id="section-341-exercise-56-order-reduction-observation"></a>
### Exercise 56 — Order reduction observation {#section-343-exercise-56-order-reduction-observation}

An order-four stiff integrator displays second-order convergence on a boundary-forced problem. Give two checks before declaring an implementation bug.

**Solution.** Check whether the solution and forcing satisfy the temporal smoothness and boundary compatibility assumed by the order theorem, and whether algebraic/nonlinear solve tolerances are sufficiently small as \\(h\\) decreases. Stiff order reduction can be genuine. Independent manufactured solutions with compatible data can distinguish this phenomenon from defective coefficients or boundary handling.

<a id="section-347-exercise-57-jacobian-reuse-criterion"></a>
### Exercise 57 — Jacobian reuse criterion {#section-349-exercise-57-jacobian-reuse-criterion}

State a defensible evidence rule for reusing a factored Newton matrix across implicit steps.

**Solution.** Reuse can be attempted while step ratios and states change moderately and nonlinear residuals contract at a declared minimum rate; refactor when contraction stalls, iteration count exceeds a cap, or a step is rejected for nonlinear failure. This is an algorithmic policy, not a theorem that the old matrix remains accurate. Logs should record reuse, contractions, and refactor causes.

<a id="section-353-exercise-58-split-fast-and-slow-modes"></a>
### Exercise 58 — Split fast and slow modes {#section-355-exercise-58-split-fast-and-slow-modes}

For \\(y_1'=-y_1\\), \\(y_2'=-1000y_2\\), identify stiffness qualitatively on \\([0,1]\\) when both components matter initially.

**Solution.** The characteristic time scales are \\(1\\) and \\(0.001\\), a ratio of \\(1000\\). Accuracy for \\(y_1\\) permits steps much larger than explicit stability permits for the rapidly decaying \\(y_2\\), so the system is stiff in this computational sense. If \\(y_2\\) is identically absent and cannot be excited, the practical behavior may differ; stiffness is problem-and-method dependent.

<a id="section-359-exercise-59-defect-versus-correction"></a>
### Exercise 59 — Defect versus correction {#section-361-exercise-59-defect-versus-correction}

An implicit solver returns \\(Y\\) with residual norm \\(10^{-10}\\), while \\(\\lVert [I-hJ]^{-1}\\rVert\\le 10^{3}\\). Bound the Newton equation error under the local linear model.

**Solution.** The state correction associated with the residual is bounded by roughly \\(10^{3}\\cdot 10^{-10}=10^{-7}\\). Thus a tiny residual need not mean a comparably tiny state error when the step Jacobian is ill-conditioned. The bound is local and assumes the displayed inverse norm applies along the relevant correction path.

<a id="section-365-exercise-60-restarting-a-multistep-method"></a>
### Exercise 60 — Restarting a multistep method {#section-367-exercise-60-restarting-a-multistep-method}

Why must a multistep method be restarted or supplied with history after a discontinuous state reset?

**Solution.** Its formula uses past values as samples of one smooth solution branch. A reset makes pre-event history inconsistent with the post-event differential equation and smoothness assumptions. One-step startup values generated on the new branch restore coherent history. Continuing unchanged can preserve high formal order in code while solving the wrong discrete relation.

<a id="section-371-chapter-15-boundary-value-and-field-discretizations"></a>
## Chapter 15: boundary-value and field discretizations {#section-373-chapter-15-boundary-value-and-field-discretizations}

<a id="section-373-exercise-61-centered-second-derivative"></a>
### Exercise 61 — Centered second derivative {#section-375-exercise-61-centered-second-derivative}

Derive the three-point approximation of \\(u''(x_i)\\) on a uniform grid and state its truncation order for \\(u\\) four times continuously differentiable.

**Solution.** Adding Taylor expansions at \\(x_i+h\\) and \\(x_i-h\\) cancels odd derivatives: \\(u_{i-1}-2u_i+u_{i+1}=h^2u''(x_i)+(h^{4}/12)u''''(\\xi)\\) in remainder form. Division by \\(h^{2}\\) gives the stencil and \\(\\mathcal O(h^{2})\\) local truncation error. The smoothness hypothesis is essential near corners or coefficient jumps.

<a id="section-379-exercise-62-discrete-poisson-system"></a>
### Exercise 62 — Discrete Poisson system {#section-381-exercise-62-discrete-poisson-system}

Discretize \\(-u''=f\\) on \\([0,1]\\) with \\(u(0)=u(1)=0\\) using two interior nodes.

**Solution.** Here \\(h=1/3\\) and the unknowns are \\((u_1,u_2)^{\\mathsf T}\\). The system is \\(h^{-2}\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}u=(f_1,f_2)^{\\mathsf T}\\), or \\(9\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}u=f\\). Boundary values contribute nothing because they are zero. For nonzero Dirichlet data their stencil contributions move to the right-hand side.

<a id="section-385-exercise-63-maximum-principle-matrix"></a>
### Exercise 63 — Maximum-principle matrix {#section-387-exercise-63-maximum-principle-matrix}

Show that the matrix \\(T=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}\\) has a nonnegative inverse.

**Solution.** Its determinant is \\(3\\), and \\(T^{-1}=(1/3)\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\), whose entries are nonnegative. Thus a componentwise nonnegative right-hand side produces a nonnegative discrete solution. This tiny example illustrates monotonicity; higher-dimensional or high-order stencils need separate matrix analysis.

<a id="section-391-exercise-64-neumann-compatibility"></a>
### Exercise 64 — Neumann compatibility {#section-393-exercise-64-neumann-compatibility}

For \\(-u''=f\\) on \\([0,1]\\) with \\(u'(0)=u'(1)=0\\), derive the continuous compatibility condition.

**Solution.** Integrate the equation: \\(\\int_0^{1} f dx=-[u'(1)-u'(0)]=0\\). Hence zero mean of \\(f\\) is necessary. When it holds, solutions are nonunique up to an additive constant, so a gauge such as zero mean is required. A discrete scheme should reproduce an analogous nullspace and compatibility condition.

<a id="section-397-exercise-65-robin-boundary-units"></a>
### Exercise 65 — Robin boundary units {#section-399-exercise-65-robin-boundary-units}

A heat model uses \\(-k u'(0)=\\alpha(u(0)-u_{env})\\). If \\(u\\) is kelvin and \\(x\\) is metres, state units of \\(k\\) and \\(\\alpha\\) when flux is \\(W/m^{2}\\).

**Solution.** Since \\(u'\\) has \\(K/m\\), \\(k\\) must have \\(W/(m K)\\) so \\(k u'\\) is \\(W/m^{2}\\). The temperature difference is \\(K\\), so \\(\\alpha\\) has \\(W/(m^{2} K)\\). Adding terms before checking these units is a useful defense against incorrectly scaled boundary rows.

<a id="section-403-exercise-66-upwind-versus-centered-advection"></a>
### Exercise 66 — Upwind versus centered advection {#section-405-exercise-66-upwind-versus-centered-advection}

For positive speed \\(a\\), write first-order upwind and centered approximations to \\(a u_x\\) at node \\(i\\).

**Solution.** Upwind uses \\(a(u_i-u_{i-1})/h\\); centered uses \\(a(u_{i+1}-u_{i-1})/(2h)\\). The former is first-order and introduces numerical diffusion, while the latter is second-order on smooth data but can oscillate when advection dominates. Neither description alone guarantees stability for a full boundary-value discretization.

<a id="section-409-exercise-67-mesh-p-clet-number"></a>
### Exercise 67 — Mesh Péclet number {#section-411-exercise-67-mesh-p-clet-number}

For \\(-\\epsilon u''+a u'=f\\), define a common cell Péclet number and evaluate it for \\(\\epsilon=0.01 m^{2}/s\\), \\(a=1 m/s\\), \\(h=0.1 m\\).

**Solution.** A common convention is \\(Pe_h=\\lvert a\\rvert h/(2\\varepsilon)\\). The units cancel, and the value is \\(1\\cdot 0.1/(2\\cdot 0.01)=5\\). This indicates advection-dominated cell behavior for centered differences. Because conventions may omit the factor two, the report must define the version used.

<a id="section-415-exercise-68-grid-refinement-order"></a>
### Exercise 68 — Grid refinement order {#section-417-exercise-68-grid-refinement-order}

Errors on grids \\(h=1/20\\) and \\(h=1/40\\) are \\(8.0\\cdot 10^{-4}\\) and \\(2.1\\cdot 10^{-4}\\). Estimate observed order.

**Solution.** With halving, \\(p=\\log(E_h/E_{h/2})/\\log 2=\\log(8.0/2.1)/log2\\), approximately \\(1.93\\). This is consistent with second order but is not proof of the asymptotic regime. A third grid, norm definition, fixed data, and arithmetic-error check strengthen the claim.

<a id="section-421-exercise-69-boundary-truncation-bottleneck"></a>
### Exercise 69 — Boundary truncation bottleneck {#section-423-exercise-69-boundary-truncation-bottleneck}

An interior stencil is fourth-order but a stable boundary closure is first-order on a fixed-width region. Why can global convergence be below fourth order?

**Solution.** The boundary error enters the global discrete solution through the inverse operator; stability propagates it rather than erasing it. Its restricted support can sometimes improve its norm contribution, but fourth-order global accuracy does not follow from the interior stencil alone. The actual norm and stability estimate determine the resulting order.

<a id="section-427-exercise-70-residual-is-not-field-error"></a>
### Exercise 70 — Residual is not field error {#section-429-exercise-70-residual-is-not-field-error}

For \\(A_h u_h=f_h\\), show the relation between error \\(e_h=u_h-u_h^star\\) and residual \\(r_h=f_h-A_hu_h\\) when \\(u_h^star\\) is the exact solution of the discrete system.

**Solution.** Since \\(A_hu_h^star=f_h\\), subtraction gives \\(A_h e_h=-r_h\\), hence \\(e_h=-A_h^-1r_h\\) when \\(A_h\\) is invertible. Therefore \\(\\lVert e_h\\rVert\\le \\lVert A_h^{-1}\\rVert\\lVert r_h\\rVert\\). A small residual licenses a small algebraic error only with a controlled inverse norm; it says nothing directly about discretization error relative to the continuous field.

<a id="section-433-exercise-71-tensor-grid-unknown-count"></a>
### Exercise 71 — Tensor-grid unknown count {#section-435-exercise-71-tensor-grid-unknown-count}

A square domain is divided into \\(N\\) equal intervals per direction with Dirichlet values on the boundary. How many interior finite-difference unknowns are there?

**Solution.** Each coordinate has nodes \\(0,\\ldots,N\\), of which \\(N-1\\) are interior. The Cartesian interior therefore has \\((N-1)^{2}\\) unknowns. Refining from \\(N\\) to \\(2N\\) increases this count by nearly a factor four, before accounting for solver iteration growth or memory structure.

<a id="section-439-exercise-72-manufactured-poisson-source"></a>
### Exercise 72 — Manufactured Poisson source {#section-441-exercise-72-manufactured-poisson-source}

For \\(u_{star}(x,y)=\\sin(\\pi x)\\sin(\\pi y)\\) on the unit square, find \\(f\\) in \\(-\\Delta u=f\\) and boundary data.

**Solution.** Each second derivative contributes \\(-\\pi^{2} \\sin(\\pi x)\\sin(\\pi y)\\), so \\(-\\Delta u_{star}=2\\pi^{2} \\sin(\\pi x)\\sin(\\pi y)\\). The function vanishes on all four sides, giving homogeneous Dirichlet data. This smooth manufactured case tests assembly and convergence but not behavior at nonsmooth corners or discontinuous coefficients.

<a id="section-445-exercise-73-symmetry-audit"></a>
### Exercise 73 — Symmetry audit {#section-447-exercise-73-symmetry-audit}

A discretization of a self-adjoint diffusion operator with symmetric boundary treatment produces entries \\(A_{ij}=2\\) and \\(A_{ji}=1.9\\). What conclusion is licensed?

**Solution.** The assembled matrix violates exact symmetry by \\(0.1\\) in that pair, so either the formulation intentionally broke symmetry or the assembly/storage path needs investigation. One mismatch does not locate the cause. Report a normalized norm such as \\(\\lVert A-A^{\\mathsf T}\\rVert/\\lVert A\\rVert\\), inspect quadrature and boundary terms, and compare against the stated discrete bilinear form.

<a id="section-451-exercise-74-discrete-flux-balance"></a>
### Exercise 74 — Discrete flux balance {#section-453-exercise-74-discrete-flux-balance}

In a conservative one-dimensional cell, inflow is \\(3 W/m^{2}\\), outflow is \\(2.4 W/m^{2}\\), and the cell width is \\(0.2 m\\). With unit cross-sectional area, no storage, and the convention \\(outflow-inflow=integrated production\\), what source is required?

**Solution.** The integrated production is \\((2.4-3) W/m^{2} \\cdot 1 m^{2}=-0.6 W\\), so the cell contains a sink. Dividing by its volume \\(0.2 m^{3}\\) gives source density \\(-3 W/m^{3}\\). The explicit convention and units remove a common sign ambiguity; reversing the definition of positive source reverses both reported signs.

<a id="section-457-exercise-75-discrete-and-continuous-targets"></a>
### Exercise 75 — Discrete and continuous targets {#section-459-exercise-75-discrete-and-continuous-targets}

List the two distinct comparisons in a mesh-convergence study using an iterative linear solver.

**Solution.** First compare the computed iterate with the exact solution of the assembled discrete equations; residuals plus conditioning or a posteriori algebraic estimates address this algebraic error. Second compare the discrete solution with the continuous PDE solution; truncation analysis, refinement, or a posteriori discretization estimates address that error. Tightening the linear tolerance cannot remove modeling or discretization error.

<a id="section-463-chapter-16-finite-volume-and-finite-element-methods"></a>
## Chapter 16: finite-volume and finite-element methods {#section-465-chapter-16-finite-volume-and-finite-element-methods}

<a id="section-465-exercise-76-harmonic-face-coefficient"></a>
### Exercise 76 — Harmonic face coefficient {#section-467-exercise-76-harmonic-face-coefficient}

Two equal-width cells have diffusion coefficients \\(k_L=1\\) and \\(k_R=4 W/(m K)\\). Derive their harmonic face coefficient.

**Solution.** Treating the half-cell thermal resistances in series gives \\(k_f=2/(1/k_L+1/k_R)=2/(1+1/4)=8/5 W/(m K)\\). The arithmetic mean would overstate transport across a sharp low-conductivity side. This formula assumes a flat face, equal half widths, scalar normal diffusion, and perfect interface contact.

<a id="section-471-exercise-77-pairwise-flux-cancellation"></a>
### Exercise 77 — Pairwise flux cancellation {#section-473-exercise-77-pairwise-flux-cancellation}

Show why a single stored interior numerical flux guarantees global finite-volume cancellation.

**Solution.** Give the shared face one oriented value \\(F_{LR}\\). It enters the left-cell balance as outflow \\(+F_{\\mathrm{LR}}\\) and the right-cell balance as outflow \\(-F_{\\mathrm{LR}}\\). Summing all cell equations cancels the pair exactly, leaving boundary fluxes and sources. Computing two nominally equivalent face values independently can spoil bitwise cancellation and obscure conservation audits.

<a id="section-477-exercise-78-reference-element-stiffness"></a>
### Exercise 78 — Reference-element stiffness {#section-479-exercise-78-reference-element-stiffness}

For linear basis functions on an interval of length \\(h\\), compute the element matrix for \\(\\int k u'v' dx\\) with constant \\(k\\).

**Solution.** The basis derivatives are \\(-1/h\\) and \\(1/h\\). Integrating their products over length \\(h\\) gives \\(K_e=(k/h)\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}\\). Each row sums to zero, reflecting that a constant field has zero diffusive energy locally. Boundary conditions and reaction terms can remove the corresponding global nullspace.

<a id="section-483-exercise-79-consistent-mass-matrix"></a>
### Exercise 79 — Consistent mass matrix {#section-485-exercise-79-consistent-mass-matrix}

Compute the linear-element mass matrix \\(M_{ij}=\\int \\phi_i \\phi_j dx\\) on an interval of length \\(h\\).

**Solution.** With reference coordinate \\(s \\in [0,1]\\), the basis functions are \\(1-s\\) and \\(s\\), and \\(dx=h ds\\). The diagonal integral is \\(h \\int_0^{1}(1-s)^{2} ds=h/3\\); the off-diagonal is \\(h \\int_0^1s(1-s)ds=h/6\\). Thus \\(M_e=(h/6)\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\).

<a id="section-489-exercise-80-coercive-energy-estimate"></a>
### Exercise 80 — Coercive energy estimate {#section-491-exercise-80-coercive-energy-estimate}

Assume \\(a(v,v)\\ge \\alpha\\lVert v\\rVert_V^{2}\\) and \\(\\lvert \\ell(v)\\rvert\\le C_{\\ell}\\lVert v\\rVert_V\\). Bound the Galerkin solution satisfying \\(a(u_h,v_h)=\\ell(v_h)\\).

**Solution.** Test with \\(v_h=u_h\\): \\(\\alpha\\lVert u_h\\rVert_V^{2}\\le a(u_h,u_h)=\\ell(u_h)\\le C_{\\ell}\\lVert u_h\\rVert_V\\). If \\(u_h\\) is nonzero, divide by its norm to obtain \\(\\lVert u_h\\rVert_V\\le C_{\\ell}/\\alpha\\); the zero case also satisfies it. The bound depends on coercivity in the declared space and treatment of essential boundary conditions.

<a id="section-495-exercise-81-best-approximation-step"></a>
### Exercise 81 — Best-approximation step {#section-497-exercise-81-best-approximation-step}

Under continuity \\(\\lvert a(w,v)\\rvert\\le M\\lVert w\\rVert_V\\lVert v\\rVert_V\\) and coercivity \\(\\alpha\\), prove the standard Galerkin error bound up to the constant.

**Solution.** Galerkin orthogonality gives \\(a(u-u_h,v_h)=0\\). For any \\(w_h\\), coercivity and orthogonality yield \\(\\alpha\\lVert u-u_h\\rVert^{2}\\le a(u-u_h,u-w_h)\\le M\\lVert u-u_h\\rVert\\lVert u-w_h\\rVert\\). Cancel the nonzero error to get \\(\\lVert u-u_h\\rVert\\le (M/\\alpha) \\inf_{w_h}\\lVert u-w_h\\rVert\\). This assumes the exact and discrete problems share the conforming energy space.

<a id="section-501-exercise-82-quadrature-exactness"></a>
### Exercise 82 — Quadrature exactness {#section-503-exercise-82-quadrature-exactness}

On a one-dimensional linear element with constant diffusion, what polynomial degree appears in the stiffness integrand, and what simple quadrature suffices exactly?

**Solution.** Linear basis derivatives are constants, so \\(k \\phi_i' \\phi_j'\\) is degree zero when \\(k\\) is constant. Any quadrature exact for constants, including midpoint quadrature, integrates it exactly. Variable coefficients or mapped multidimensional elements raise the needed exactness; the basis degree alone is insufficient to choose quadrature.

<a id="section-507-exercise-83-essential-boundary-lifting"></a>
### Exercise 83 — Essential boundary lifting {#section-509-exercise-83-essential-boundary-lifting}

Explain the decomposition for nonzero Dirichlet data \\(u=g\\) on the essential boundary.

**Solution.** Choose a lifting \\(G\\) whose trace is \\(g\\) and write \\(u=G+w\\), where \\(w\\) has zero essential trace. The weak problem becomes \\(a(w,v)=\\ell(v)-a(G,v)\\) for all homogeneous test functions. Discretely, use a compatible \\(G_h\\); simply setting boundary unknowns without adjusting the right-hand side can omit their coupling contributions.

<a id="section-513-exercise-84-element-orientation-invariant"></a>
### Exercise 84 — Element orientation invariant {#section-515-exercise-84-element-orientation-invariant}

Why should a triangular finite-element implementation reject an element with zero signed area?

**Solution.** The affine reference-to-physical map has singular Jacobian at zero area, so inverse-gradient transformations and quadrature scaling are undefined. A negative signed area can often be repaired by a declared vertex permutation, but zero area represents a degenerate element and cannot be oriented away. Rejection should identify the element before assembly.

<a id="section-519-exercise-85-cell-average-versus-point-value"></a>
### Exercise 85 — Cell-average versus point value {#section-521-exercise-85-cell-average-versus-point-value}

For \\(u(x)=x^{2}\\) on cell \\([0,h]\\), compare its average with its midpoint value.

**Solution.** The average is \\(h^{-1} \\int_0^h x^{2} dx=h^{2}/3\\); the midpoint value is \\((h/2)^{2}=h^{2}/4\\). Their difference is \\(h^{2}/12\\). Finite-volume unknowns interpreted as averages must not be silently compared with pointwise exact values; the distinction is second-order here but can dominate a reported error.

<a id="section-525-exercise-86-mass-lumping-conservation"></a>
### Exercise 86 — Mass lumping conservation {#section-527-exercise-86-mass-lumping-conservation}

The consistent linear-element mass matrix is \\((h/6)\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\). Form its row-sum lumped version and compare total mass.

**Solution.** Each row sum is \\(h/2\\), so lumping gives \\(\\operatorname{diag}(h/2,h/2)\\). The sum of all entries is \\(h\\) for both matrices, hence the element integral of the constant function is preserved. Lumping changes other moments and the semidiscrete dynamics; conservation of total mass alone is not full equivalence.

<a id="section-531-exercise-87-a-posteriori-indicator-dimensions"></a>
### Exercise 87 — A posteriori indicator dimensions {#section-533-exercise-87-a-posteriori-indicator-dimensions}

For Poisson's equation in two dimensions, a cell residual has units of source density. Why must powers of cell diameter accompany its \\(L^{2}\\) norm in an energy estimator?

**Solution.** The energy error involves a gradient norm, whose units differ from a source-residual norm. Mesh-diameter factors convert the differential-order mismatch and arise in localization estimates, typically through terms like \\(h_K^{2}\\lVert R_K\\rVert^{2}\\) plus scaled face jumps. Omitting them makes indicators change incorrectly under mesh refinement and unit conversion.

<a id="section-537-exercise-88-nested-space-monotonicity"></a>
### Exercise 88 — Nested-space monotonicity {#section-539-exercise-88-nested-space-monotonicity}

For a symmetric coercive Galerkin problem with nested spaces \\(V_H \\subset V_h\\), show the fine-space energy error cannot exceed the coarse best-approximation error.

**Solution.** The Galerkin solution is the energy projection, so its energy error is the minimum over its trial space. Because every coarse function is also available in the fine space, minimizing over the larger set cannot increase the minimum. This exact monotonicity uses the same bilinear form, exact assembly, nested conforming spaces, and energy norm.

<a id="section-543-exercise-89-flux-sign-audit"></a>
### Exercise 89 — Flux sign audit {#section-545-exercise-89-flux-sign-audit}

In one dimension define rightward diffusive flux \\(F=-k u_x\\). For \\(u\\) increasing to the right and \\(k>0\\), what is the sign and physical direction?

**Solution.** Since \\(u_x>0\\), \\(F<0\\), so the flux points left, from larger to smaller \\(u\\). This checks the constitutive sign independently of cell orientations. Boundary outward flux additionally multiplies by the outward normal, so left- and right-boundary reported signs differ.

<a id="section-549-exercise-90-patch-test-boundary"></a>
### Exercise 90 — Patch test boundary {#section-551-exercise-90-patch-test-boundary}

What does exact reproduction of an affine solution by linear conforming elements demonstrate, and what does it not?

**Solution.** With compatible coefficients, quadrature, and boundary data, it demonstrates basic consistency of mapping, gradients, assembly, and essential-boundary treatment for a field lying in the discrete space. It does not establish convergence on curved geometry, nonlinear coefficients, singular solutions, or distorted meshes. A patch test is a targeted audit, not comprehensive validation.

<a id="section-555-chapter-17-nonlinear-and-adaptive-field-methods"></a>
## Chapter 17: nonlinear and adaptive field methods {#section-557-chapter-17-nonlinear-and-adaptive-field-methods}

<a id="section-557-exercise-91-nonlinear-residual-derivative"></a>
### Exercise 91 — Nonlinear residual derivative {#section-559-exercise-91-nonlinear-residual-derivative}

For \\(R_i(u)=\\sum_j K_{ij} u_j+u_i^{3}-f_i\\), derive the Jacobian.

**Solution.** Differentiation gives \\(J_{ij}=K_{ij}+3u_i^{2} \\delta_{ij}\\), hence \\(J=K+\\operatorname{diag}(3u_i^{2})\\). The cubic term contributes only on the diagonal. A finite-difference directional check can test this expression, but its step-size study must separate truncation from roundoff.

<a id="section-563-exercise-92-monotonicity-and-uniqueness"></a>
### Exercise 92 — Monotonicity and uniqueness {#section-565-exercise-92-monotonicity-and-uniqueness}

Let \\(R(u)=Ku+u^{[3]}-f\\), where \\(K\\) is symmetric positive definite and the cube is componentwise. Prove \\(R(u)=0\\) has at most one solution.

**Solution.** For \\(u\\ne v\\), \\((u-v)^{\\mathsf T}(R(u)-R(v))=(u-v)^TK(u-v)+\\sum_i(u_i-v_i)(u_i^{3}-v_i^{3})\\). The first term is positive; each summand in the second is nonnegative because the cube is increasing. Thus \\(R\\) is strictly monotone and cannot vanish at two distinct points. Existence requires a separate argument.

<a id="section-569-exercise-93-newton-correction-sign"></a>
### Exercise 93 — Newton correction sign {#section-571-exercise-93-newton-correction-sign}

For scalar residual \\(R(u)=u^{2}-2\\), compute the Newton correction from \\(u=1.5\\) using \\(J \\delta=-R\\).

**Solution.** \\(R(1.5)=0.25\\) and \\(J=3\\), so \\(\\delta=-1/12\\) and the new iterate is \\(17/12\\), about \\(1.4167\\). Stating the residual convention matters: code solving \\(J \\delta=R\\) must subtract the correction instead. A sign mismatch can make a correct Jacobian appear defective.

<a id="section-575-exercise-94-armijo-acceptance"></a>
### Exercise 94 — Armijo acceptance {#section-577-exercise-94-armijo-acceptance}

For merit function \\(\\phi\\), suppose \\(\\phi(0)=10\\), directional derivative \\(\\phi'(0)=-8\\), Armijo constant \\(c=10^{-4}\\), and trial length \\(\\alpha=0.5\\). What upper value permits acceptance?

**Solution.** The Armijo right side is \\(10+c \\alpha \\phi'(0)=10-0.0004=9.9996\\). The trial is acceptable if its merit value is at most \\(9.9996\\). This weak decrease test assumes the direction is a descent direction; it does not certify proximity to a root.

<a id="section-581-exercise-95-inexact-newton-forcing"></a>
### Exercise 95 — Inexact Newton forcing {#section-583-exercise-95-inexact-newton-forcing}

If the linear correction satisfies \\(\\lVert J_k \\delta_k+R_k\\rVert\\le \\eta_k\\lVert R_k\\rVert\\) with \\(\\eta_k=0.1\\), interpret the condition.

**Solution.** The linearized Newton equation need only reduce its residual to at most ten percent of the current nonlinear residual norm. Solving much more accurately may waste work far from the root. To recover fast local convergence, forcing terms usually decrease as the nonlinear residual decreases, under regularity and nonsingularity assumptions.

<a id="section-587-exercise-96-bulk-marking"></a>
### Exercise 96 — Bulk marking {#section-589-exercise-96-bulk-marking}

Squared indicators are \\((9,4,3,2,1)\\) and the bulk parameter is \\(\\theta=0.6\\). Select the smallest prefix after sorting that meets the criterion.

**Solution.** The total is \\(19\\), and the target is \\(11.4\\). The largest indicator contributes \\(9\\), insufficient; the first two contribute \\(13\\), sufficient. Thus mark the cells associated with \\(9\\) and \\(4\\). This implements a minimal sorted prefix; ties need a deterministic rule for reproducibility.

<a id="section-593-exercise-97-reliability-versus-efficiency"></a>
### Exercise 97 — Reliability versus efficiency {#section-595-exercise-97-reliability-versus-efficiency}

State the distinct meanings of \\(\\lVert e\\rVert\\le C_{rel} \\eta\\) and \\(\\eta\\le C_{eff}(\\lVert e\\rVert+osc)\\).

**Solution.** Reliability says the estimator, up to a known constant, upper-bounds the true error; it guards against missed error. Efficiency says it does not grossly overestimate except for data oscillation. Neither statement follows from a few plots, and both depend on the specified norm, mesh regularity, operator assumptions, and boundary treatment.

<a id="section-599-exercise-98-algebraic-error-budget"></a>
### Exercise 98 — Algebraic-error budget {#section-601-exercise-98-algebraic-error-budget}

An adaptive solve targets discretization indicator \\(\\eta=10^{-4}\\). Why is stopping Newton at residual \\(10^{-2}\\) generally indefensible without scaling information?

**Solution.** Algebraic error may then dominate the estimated discretization error, so mesh refinement responds to an inaccurately solved discrete problem. A defensible rule bounds an algebraic-error estimator below a stated fraction of \\(\\eta\\), using residual scaling and a stability estimate. Raw residual magnitudes with different units or matrix conditioning cannot be compared directly.

<a id="section-605-exercise-99-hanging-node-constraint"></a>
### Exercise 99 — Hanging-node constraint {#section-607-exercise-99-hanging-node-constraint}

A midpoint degree of freedom on a refined edge joins coarse endpoint values \\(u_L,u_R\\) for linear conforming elements. State its constraint.

**Solution.** Continuity of the coarse linear trace requires \\(u_M=(u_L+u_R)/2\\). The constrained degree of freedom should be eliminated or incorporated consistently in trial and test spaces. Treating it as independent creates a nonconforming jump unless the method explicitly includes such jumps.

<a id="section-611-exercise-100-goal-oriented-adjoint"></a>
### Exercise 100 — Goal-oriented adjoint {#section-613-exercise-100-goal-oriented-adjoint}

For linear equations \\(Au=b\\) and scalar quantity \\(J(u)=c^Tu\\), show the residual representation using \\(A^Tz=c\\).

**Solution.** If \\(u_h\\) has residual \\(r=b-Au_h\\), then \\(J(u)-J(u_h)=c^{\\mathsf T}(u-u_h)=z^{\\mathsf T}A(u-u_h)=z^{\\mathsf T}r\\). Thus residual components are weighted by the adjoint. With an approximate adjoint or nonlinear problem, extra approximation and linearization terms must be accounted for.

<a id="section-617-exercise-101-effectivity-index"></a>
### Exercise 101 — Effectivity index {#section-619-exercise-101-effectivity-index}

An estimator is \\(\\eta=0.024\\) and measured reference error is \\(0.020\\). Compute effectivity and interpret cautiously.

**Solution.** The effectivity index is \\(\\eta/error=1.2\\). On this case the estimator exceeds the measured error by 20 percent. A single effectivity value neither proves reliability nor a universal constant; the reference solution itself must be accurate and the norm identical.

<a id="section-623-exercise-102-refinement-termination"></a>
### Exercise 102 — Refinement termination {#section-625-exercise-102-refinement-termination}

Design a safe terminal status when the element budget is reached before \\(\\eta\\le tol\\).

**Solution.** Return a non-success status such as \`budget_exhausted\`, together with the final mesh, solution, estimator, tolerance, and history. Do not label the tolerance achieved. If the last estimator is already below tolerance, return success even if the mesh also reached its cap; termination logic must test the mathematical condition explicitly.

<a id="section-629-exercise-103-nonlinear-coefficient-positivity"></a>
### Exercise 103 — Nonlinear coefficient positivity {#section-631-exercise-103-nonlinear-coefficient-positivity}

For diffusion coefficient \\(k(u)=1+u^{2}\\), prove uniform positivity and state its consequence.

**Solution.** For every real \\(u\\), \\(u^{2}\\ge 0\\), so \\(k(u)\\ge 1\\). Thus the principal diffusion part remains elliptic with lower coefficient bound one, independent of the iterate. This supports coercivity of frozen diffusion forms under suitable boundary conditions, but does not alone prove uniqueness of the full nonlinear PDE.

<a id="section-635-exercise-104-adaptive-comparison-fairness"></a>
### Exercise 104 — Adaptive comparison fairness {#section-637-exercise-104-adaptive-comparison-fairness}

Why is comparing two adaptive methods only at equal refinement cycles potentially misleading?

**Solution.** A cycle can create different numbers of elements, nonlinear iterations, and operator evaluations in each method. Compare error or estimator against degrees of freedom, wall-independent work units, and resource limits, while preserving identical problem data and stopping definitions. Wall time may also be reported with environment details, but is not an implementation-independent complexity measure.

<a id="section-641-exercise-105-derivative-check-slope"></a>
### Exercise 105 — Derivative-check slope {#section-643-exercise-105-derivative-check-slope}

For smooth \\(R\\), why should \\(\\lVert R(u+\\epsilon v)-R(u)-\\epsilon Jv\\rVert\\) initially scale like \\(\\epsilon^{2}\\)?

**Solution.** Taylor's theorem gives \\(R(u+\\epsilon v)=R(u)+\\epsilon J(u)v+\\mathcal O(\\epsilon^{2})\\) under a locally bounded second derivative. Hence the remainder has second-order slope until floating-point cancellation or evaluation noise dominates. Observing that slope supports derivative consistency in direction \\(v\\); it does not prove every Jacobian entry correct.

<a id="section-647-chapter-18-verification-reproducibility-and-responsible"></a>
## Chapter 18: verification, reproducibility, and responsible experiments {#section-649-chapter-18-verification-reproducibility-and-responsible}

<a id="section-649-exercise-106-verification-versus-validation"></a>
### Exercise 106 — Verification versus validation {#section-651-exercise-106-verification-versus-validation}

Classify “the discretization converges at the predicted rate” and “the model represents measured heat flow within uncertainty.”

**Solution.** The first is a verification question: it asks whether the equations and numerical method are implemented and solved as intended. The second is validation: it compares the mathematical model with the physical system and its observations. Successful verification is needed before a discrepancy can be meaningfully assigned to model inadequacy, but it does not imply validation.

<a id="section-655-exercise-107-observed-order-with-three-grids"></a>
### Exercise 107 — Observed order with three grids {#section-657-exercise-107-observed-order-with-three-grids}

For step sizes \\((0.2,0.1,0.05)\\) and errors \\((0.040,0.010,0.0025)\\), compute consecutive observed orders.

**Solution.** Each refinement halves \\(h\\) and quarters the error, so both orders are \\(\\log(4)/\\log(2)=2\\). This exact table is consistent with second-order convergence. It remains a finite experiment: the norm, exact/reference solution, arithmetic, and unchanged problem data must be recorded.

<a id="section-661-exercise-108-self-convergence-without-truth"></a>
### Exercise 108 — Self-convergence without truth {#section-663-exercise-108-self-convergence-without-truth}

Approximations on successively halved grids differ by \\(0.12\\), \\(0.03\\), and \\(0.0075\\) in one norm. What order is suggested and what remains unknown?

**Solution.** Each difference shrinks by a factor four, suggesting order two if one leading error term dominates. Without an exact or independently accurate reference, this is self-convergence; all approximations could share a bias, incorrect boundary condition, or wrong equation. It supports an asymptotic pattern, not correctness of the target.

<a id="section-667-exercise-109-manufactured-solution-independence"></a>
### Exercise 109 — Manufactured solution independence {#section-669-exercise-109-manufactured-solution-independence}

Why should source-term generation be symbolically or independently checked when using a manufactured solution?

**Solution.** If the same erroneous derivative routine generates the forcing and appears in the solver, the defect can cancel and produce an apparently exact result. Independent analytic differentiation, symbolic output checked by hand, or a distinct implementation reduces this common-mode risk. The exact field, source, boundaries, and units should be frozen as test data.

<a id="section-673-exercise-110-absolute-relative-acceptance"></a>
### Exercise 110 — Absolute-relative acceptance {#section-675-exercise-110-absolute-relative-acceptance}

With rule \\(\\lvert r_i\\rvert\\le \\tau_{abs}+\\tau_{rel}\\lvert b_i\\rvert\\), take \\(\\tau_{abs}=10^{-8}\\), \\(\\tau_{rel}=10^{-6}\\), \\(b_i=0.02\\), and \\(r_i=2.5\\cdot 10^{-8}\\). Does the component pass?

**Solution.** The threshold is \\(10^{-8}+10^{-6}(0.02)=3\\cdot 10^{-8}\\). Since \\(2.5\\cdot 10^{-8}\\le 3\\cdot 10^{-8}\\), it passes. The absolute term protects components whose reference scale is near zero; the units of \\(r_i\\), \\(b_i\\), and \\(\\tau_{abs}\\) must be compatible.

<a id="section-679-exercise-111-hash-purpose"></a>
### Exercise 111 — Hash purpose {#section-681-exercise-111-hash-purpose}

What does a cryptographic hash of an input artifact establish in a reproducibility package?

**Solution.** It provides a compact identity check: a later byte sequence with the same trusted hash is overwhelmingly likely to be the same artifact. It does not establish that the data are correct, ethical, or generated by the claimed process. The hash algorithm, digest, file encoding, and generation procedure should all be recorded.

<a id="section-685-exercise-112-determinism-levels"></a>
### Exercise 112 — Determinism levels {#section-687-exercise-112-determinism-levels}

Distinguish bitwise reproducibility from numerical agreement within tolerance.

**Solution.** Bitwise reproducibility requires identical output bytes, usually constraining arithmetic, compiler, libraries, reduction order, hardware behavior, and formatting. Tolerance agreement permits differing low bits while requiring declared numerical quantities to satisfy bounds. Neither should be called the other; a package can aim for bitwise replay in one environment and tolerance-based replication across environments.

<a id="section-691-exercise-113-reduction-order-example"></a>
### Exercise 113 — Reduction-order example {#section-693-exercise-113-reduction-order-example}

In exact real arithmetic addition is associative. Explain why summing \\((10^{16},-10^{16},1)\\) in binary64 can depend on order.

**Solution.** In the order \\((10^{16}-10^{16})+1\\), the result is \\(1\\). In the order \\(10^{16}+(-10^{16}+1)\\), the inner sum rounds to approximately \\(-10^{16}\\), and the result is \\(0\\). Parallel reductions may choose different trees. This is arithmetic nonassociativity, not random noise; record or control the reduction policy when exact replay matters.

<a id="section-697-exercise-114-confidence-is-not-certainty"></a>
### Exercise 114 — Confidence is not certainty {#section-699-exercise-114-confidence-is-not-certainty}

A stochastic estimator reports a 95 percent confidence interval. Why must it not be labeled a deterministic error bound?

**Solution.** Its coverage is a repeated-sampling probability statement under a statistical model and sampling procedure; some intervals miss. A deterministic bound must hold for every admissible input under stated mathematical assumptions. Report the confidence level, method, seed policy, sample size, and assumptions, and reserve “certified” for evidence whose logic matches that word.

<a id="section-703-exercise-115-seeded-defect"></a>
### Exercise 115 — Seeded defect {#section-705-exercise-115-seeded-defect}

Give one useful seeded defect for auditing a tridiagonal solver and the invariant it should violate.

**Solution.** Deliberately swap one upper-diagonal coefficient with its neighbor in a copied input while preserving the expected matrix separately. The residual against the original stored system should then exceed its threshold even if the corrupted system is solved accurately. The test must be an expected failure and must restore no state silently; this checks that residuals use the authoritative problem.

<a id="section-709-exercise-116-metamorphic-linear-solve-test"></a>
### Exercise 116 — Metamorphic linear-solve test {#section-711-exercise-116-metamorphic-linear-solve-test}

State a scaling relation useful when no exact solution is known.

**Solution.** If \\(Ax=b\\) and \\(c\\) is a nonzero exactly representable scalar, the same \\(x\\) solves \\((cA)x=cb\\). Running both forms should give compatible answers and backward errors after scaling. Failure reveals possible normalization, overflow, stopping, or data-path defects. Passing is only metamorphic evidence and does not prove either answer accurate.

<a id="section-715-exercise-117-benchmark-leakage"></a>
### Exercise 117 — Benchmark leakage {#section-717-exercise-117-benchmark-leakage}

Why must tolerances be frozen before inspecting benchmark outcomes?

**Solution.** Choosing tolerances after seeing which method wins introduces outcome-dependent selection and can hide failures. Freeze equations, norms, budgets, acceptance thresholds, seeds, exclusions, and summary statistics in the experiment specification. Changes remain possible, but must create a new version with rationale rather than rewriting the original claim boundary.

<a id="section-721-exercise-118-missing-data-status"></a>
### Exercise 118 — Missing-data status {#section-723-exercise-118-missing-data-status}

A run lacks one mandatory residual artifact but its plot looks correct. What status should the audit assign?

**Solution.** The mandatory check is unevaluable, so the run cannot pass. Mark it \`missing_evidence\` or failure, name the absent artifact, and preserve other results without using them to infer the residual. A visualization is not a substitute for the numerical data and stated norm required by the protocol.

<a id="section-727-exercise-119-timing-report"></a>
### Exercise 119 — Timing report {#section-729-exercise-119-timing-report}

List four controls needed for a meaningful solver timing comparison.

**Solution.** Record hardware and software environment; use identical inputs and correctness criteria; separate setup, compilation/warm-up, and solve phases; and repeat runs with a prespecified robust statistic. Also control threading and background load where possible. Timing alone never compensates for a solver that returns a less accurate or different target.

<a id="section-733-exercise-120-claim-ladder"></a>
### Exercise 120 — Claim ladder {#section-735-exercise-120-claim-ladder}

Order these claims from weakest to strongest: one run completed, refinement is observed, an analytic error bound applies, an interval certificate encloses the target.

**Solution.** Completion is weakest. A documented refinement pattern adds empirical convergence evidence. A correctly instantiated analytic bound gives a mathematical inequality under its hypotheses. An outward-rounded interval certificate can enclose the specified target under an even more explicit arithmetic contract. “Strongest” is contextual: a certificate for the wrong model is irrelevant, so every rung needs target identity.

<a id="section-739-chapter-19-verified-and-interval-computation"></a>
## Chapter 19: verified and interval computation {#section-741-chapter-19-verified-and-interval-computation}

<a id="section-741-exercise-121-basic-interval-arithmetic"></a>
### Exercise 121 — Basic interval arithmetic {#section-743-exercise-121-basic-interval-arithmetic}

For \\(X=[1,2]\\) and \\(Y=[-3,4]\\), compute exact real interval hulls for \\(X+Y\\) and \\(XY\\).

**Solution.** Addition gives \\([1+(-3),2+4]=[-2,6]\\). The four endpoint products are \\(-3,4,-6,8\\), so the product hull is \\([-6,8]\\). In floating-point interval software, lower endpoints must round downward and upper endpoints upward; exact integer endpoints avoid visible rounding here.

<a id="section-747-exercise-122-division-boundary"></a>
### Exercise 122 — Division boundary {#section-749-exercise-122-division-boundary}

Why is ordinary interval division by \\(Y=[-1,2]\\) not a single bounded interval?

**Solution.** The denominator contains zero, and reciprocals approach both infinities. The quotient set may be unbounded or split, depending on the numerator. A basic interval type should reject or return an extended/disjoint enclosure according to a declared contract, never compute endpoint quotients as though zero were absent.

<a id="section-753-exercise-123-dependency-overestimation"></a>
### Exercise 123 — Dependency overestimation {#section-755-exercise-123-dependency-overestimation}

Evaluate \\(X-X\\) by natural interval arithmetic for \\(X=[0,1]\\) and compare with the true range of \\(x-x\\).

**Solution.** Treating the two occurrences independently gives \\([0,1]-[0,1]=[-1,1]\\). But the same real \\(x\\) occurs twice, so \\(x-x=0\\) and the true range is \\({0}\\). Interval inclusion is preserved but can be wide because dependency information is lost.

<a id="section-759-exercise-124-monotone-range"></a>
### Exercise 124 — Monotone range {#section-761-exercise-124-monotone-range}

Find the exact range of \\(\\exp(x)\\) on \\([-2,1]\\).

**Solution.** The exponential function is strictly increasing, so its range is \\([e^{-2},e]\\). An implementation encloses these transcendental endpoints with directed rounding. Evaluating only endpoints is justified by monotonicity; it would not be valid for an arbitrary nonmonotone function.

<a id="section-765-exercise-125-centered-form"></a>
### Exercise 125 — Centered form {#section-767-exercise-125-centered-form}

Use a first-order centered form to enclose \\(f(x)=x^{2}\\) on \\(X=[1,1.1]\\) about \\(m=1.05\\) with derivative interval \\(f'(X)=[2,2.2]\\).

**Solution.** Since \\(X-m=[-0.05,0.05]\\) and \\(f(m)=1.1025\\), the enclosure is \\(1.1025+[2,2.2][-0.05,0.05]=1.1025+[-0.11,0.11]=[0.9925,1.2125]\\). It encloses the exact range \\([1,1.21]\\). Higher-order forms can narrow it; outward rounding remains required in software.

<a id="section-771-exercise-126-interval-newton-exclusion"></a>
### Exercise 126 — Interval Newton exclusion {#section-773-exercise-126-interval-newton-exclusion}

Let \\(X=[1,2]\\), midpoint \\(m=1.5\\), \\(f(m)=1\\), and suppose \\(f'(X)=[2,3]\\). Form the interval Newton image and decide whether \\(X\\) contains a root.

**Solution.** The image is \\(N=m-f(m)/f'(X)=1.5-[1/3,1/2]=[1,7/6]\\), which intersects \\(X\\); exclusion is not obtained. It narrows the candidate to \\([1,7/6]\\). Had \\(N\\) been disjoint from \\(X\\), no root could lie in \\(X\\) under differentiability and derivative enclosure assumptions.

<a id="section-777-exercise-127-interval-newton-uniqueness"></a>
### Exercise 127 — Interval Newton uniqueness {#section-779-exercise-127-interval-newton-uniqueness}

State the usual conclusion if an interval Newton image \\(N(X)\\) is contained strictly in the interior of \\(X\\) and the derivative interval excludes zero.

**Solution.** Under the standard differentiability and inclusion hypotheses, \\(X\\) contains a unique root, and it lies in \\(N(X)\\). Strict interior inclusion supplies an existence contraction, while exclusion of zero supports uniqueness. Software must verify the containment with outward-rounded endpoints rather than rounded-to-nearest comparisons.

<a id="section-783-exercise-128-krawczyk-scalar-computation"></a>
### Exercise 128 — Krawczyk scalar computation {#section-785-exercise-128-krawczyk-scalar-computation}

For \\(f(x)=x^{2}-2\\), center \\(m=1.5\\), interval \\(X=[1.4,1.5]\\), and preconditioner \\(C=1/3\\), write the scalar Krawczyk operator.

**Solution.** With \\(f(m)=0.25\\) and \\(f'(X)=[2.8,3]\\), \\(K=m-Cf(m)+(1-Cf'(X))(X-m)\\). The first term is \\(17/12\\); the multiplier interval is \\([0,1/15]\\), and \\(X-m=[-0.1,0]\\), giving contribution \\([-1/150,0]\\). Thus \\(K=[17/12-1/150,17/12]\\), contained in \\(X\\); with standard hypotheses this certifies a unique root there.

<a id="section-789-exercise-129-outward-rounding-necessity"></a>
### Exercise 129 — Outward rounding necessity {#section-791-exercise-129-outward-rounding-necessity}

Why can rounding both endpoints to nearest invalidate an interval proof even when the displayed decimal bounds look conservative?

**Solution.** An exact lower result may round upward or an exact upper result downward, placing the true value just outside the stored interval. Subsequent inclusion steps then rest on a false premise. Directed rounding, or a rigorously proved equivalent enlargement, ensures every primitive operation contains its exact real result.

<a id="section-795-exercise-130-exact-decimal-input"></a>
### Exercise 130 — Exact decimal input {#section-797-exercise-130-exact-decimal-input}

Distinguish the contracts “input is decimal \\(0.1\\) exactly” and “input is the nearest binary64 number to \\(0.1\\).”

**Solution.** Exact decimal \\(1/10\\) is rational and is not exactly representable in binary floating point. The nearest binary64 datum is a nearby dyadic rational. Verification must enclose the intended object: parse the decimal outward if it means \\(1/10\\), or use the exact stored dyadic bits if that is the target. Conflating them can invalidate tight enclosures.

<a id="section-801-exercise-131-bisection-enclosure"></a>
### Exercise 131 — Bisection enclosure {#section-803-exercise-131-bisection-enclosure}

Given a continuous \\(f\\) with \\(f(1)<0<f(2)\\), what interval after three exact bisections is guaranteed to contain a sign-changing root in the worst case, and what is its width?

**Solution.** Each bisection retains one half with opposite endpoint signs. After three steps, the retained interval has width \\((2-1)/2^{3}=1/8\\); its location depends on evaluated signs. Continuity certifies at least one root, not uniqueness. Rounded sign evaluations need interval enclosures that exclude zero before choosing a half.

<a id="section-807-exercise-132-taylor-model-remainder"></a>
### Exercise 132 — Taylor model remainder {#section-809-exercise-132-taylor-model-remainder}

Assume \\(\\lvert f'''(x)\\rvert\\le 6\\) on \\(\\lvert x-m\\rvert\\le 0.1\\). Bound the magnitude of the third-order remainder after a quadratic Taylor polynomial.

**Solution.** Taylor's theorem gives remainder magnitude at most \\(6\\lvert x-m\\rvert^{3}/3!\\), hence at most \\(0.1^{3}=0.001\\). The derivative bound and domain must themselves be certified for an interval conclusion. This bound concerns truncation of the mathematical Taylor expansion, not floating-point evaluation error in the polynomial.

<a id="section-813-exercise-133-verified-linear-solve-residual"></a>
### Exercise 133 — Verified linear solve residual {#section-815-exercise-133-verified-linear-solve-residual}

Let approximate inverse \\(R\\) satisfy \\(\\lVert I-RA\\rVert\\le 0.2\\) and approximate solution \\(\\widehat{x}\\) has \\(\\lVert R(b-Ax_{hat})\\rVert\\le 10^{-6}\\). Bound the correction in the same induced norm.

**Solution.** Writing \\(e=A^-1b-\\widehat{x}\\), we have \\(e=(I-RA)e+R(b-Ax_{hat})\\). Thus \\(0.8\\lVert e\\rVert\\le 10^{-6}\\), so \\(\\lVert e\\rVert\\le 1.25\\cdot 10^{-6}\\). The quantities must be rigorously upper-bounded and the norm compatible. Merely estimating them in rounded arithmetic does not create a certificate.

<a id="section-819-exercise-134-empty-intersection-as-evidence"></a>
### Exercise 134 — Empty intersection as evidence {#section-821-exercise-134-empty-intersection-as-evidence}

Two independent valid enclosures for the same real scalar are \\([1,1.2]\\) and \\([1.3,1.4]\\). What follows?

**Solution.** Their intersection is empty, so they cannot both be valid enclosures of the same target under the same input contract. At least one proof, implementation, target identity, or data record is wrong. Averaging the intervals is invalid; the discrepancy is a mandatory audit failure.

<a id="section-825-exercise-135-certificate-scope"></a>
### Exercise 135 — Certificate scope {#section-827-exercise-135-certificate-scope}

An interval method proves that the discrete finite-element coefficient vector lies in a box. Does this certify the continuous PDE solution error?

**Solution.** It certifies the selected solution of the stated finite-dimensional algebraic system, assuming the interval proof hypotheses. Continuous error also includes discretization, geometry, coefficient, and modeling discrepancies. A PDE-level certificate needs additional analytic or a posteriori bounds linking the discrete vector to the continuous solution.

<a id="section-831-chapter-20-numerical-software-audits"></a>
## Chapter 20: numerical software audits {#section-833-chapter-20-numerical-software-audits}

<a id="section-833-exercise-136-semantic-residual-log"></a>
### Exercise 136 — Semantic residual log {#section-835-exercise-136-semantic-residual-log}

Design the minimum fields for one residual acceptance record.

**Solution.** Record a stable check identifier, artifact/input hash, residual definition, norm and scaling, measured value, absolute and relative thresholds, comparison relation, pass/fail status, arithmetic and environment identifiers, and rationale linking the check to its allowed claim. A bare Boolean cannot be recomputed or interpreted. Vector residuals should also preserve the vector or its artifact path.

<a id="section-839-exercise-137-singular-case-expected-failure"></a>
### Exercise 137 — Singular-case expected failure {#section-841-exercise-137-singular-case-expected-failure}

A linear-solver audit includes a matrix with two identical rows and an inconsistent right-hand side. What behavior should be required?

**Solution.** The solver must report a declared singular/inconsistent failure or return a candidate whose authoritative residual fails, with a non-success process status. It must not silently return NaNs or label an arbitrary least-squares result as an exact solve. The audit records the matrix, right-hand side, detection route, and expected-failure assertion.

<a id="section-845-exercise-138-hexadecimal-floating-point-storage"></a>
### Exercise 138 — Hexadecimal floating-point storage {#section-847-exercise-138-hexadecimal-floating-point-storage}

Why is hexadecimal floating-point text useful for freezing binary input?

**Solution.** It represents a finite binary floating-point value exactly, including its exponent and significand, so parsing under the same format reconstructs the identical dyadic rational. Decimal printing with too few digits can change the stored value. The format does not make the number equal to an intended real-world quantity; it only freezes the computational datum.

<a id="section-851-exercise-139-proof-log-composition"></a>
### Exercise 139 — Proof-log composition {#section-853-exercise-139-proof-log-composition}

A run passes a discrete residual check and a mesh-refinement check but fails its boundary-condition check. May the overall PDE claim pass?

**Solution.** No, if boundary satisfaction is mandatory. The checks support different premises; success on two does not compensate for failure of another required premise. Preserve the partial evidence, mark the overall claim failed, and identify the first offending boundary location and measured defect for diagnosis.

<a id="section-857-exercise-140-independent-implementation"></a>
### Exercise 140 — Independent implementation {#section-859-exercise-140-independent-implementation}

Two solvers share the same matrix assembly routine but use different linear algebra libraries. What errors does their agreement fail to challenge?

**Solution.** They can agree while sharing an incorrect stencil, coefficient, indexing convention, boundary condition, or unit conversion produced by assembly. Their independence begins only after the common assembled system. Add an independently generated small exact matrix, manufactured residual, or separate assembly path to test the upstream target.

<a id="section-863-exercise-141-nonzero-exit-policy"></a>
### Exercise 141 — Nonzero exit policy {#section-865-exercise-141-nonzero-exit-policy}

Why should a command exit nonzero when a mandatory numerical check fails, even if it writes useful diagnostic artifacts?

**Solution.** Automation can then distinguish accepted evidence from a completed-but-invalid computation. Diagnostics should still be preserved, but a zero exit would allow pipelines to publish or aggregate a failed run as success. The convention, mandatory checks, and mapping from statuses to exit codes belong in the reproducibility contract.

<a id="section-869-exercise-142-nan-comparison-trap"></a>
### Exercise 142 — NaN comparison trap {#section-871-exercise-142-nan-comparison-trap}

Explain why code of the form \\(if error > tolerance: fail\\) can accidentally accept NaN.

**Solution.** IEEE comparisons involving NaN are false, so \\(NaN > tolerance\\) is false and execution may fall through to success. Validate finiteness first, then apply the comparison. The log should record \`nonfinite\` as a distinct failure and preserve the operation or iterate that first produced it.

<a id="section-875-exercise-143-budget-exhaustion"></a>
### Exercise 143 — Budget exhaustion {#section-877-exercise-143-budget-exhaustion}

An adaptive algorithm reaches its maximum depth, but its estimator is already below tolerance. Should it return \`budget_exhausted\`?

**Solution.** No. If the mathematical success condition has been validly evaluated and holds, the run succeeded before or at the cap. \`budget_exhausted\` applies when the cap prevents meeting or deciding the condition. Check success before declaring failure and log both the final estimator and resource count.

<a id="section-881-exercise-144-underflow-policy"></a>
### Exercise 144 — Underflow policy {#section-883-exercise-144-underflow-policy}

An exact component \\(e^{-1000t}\\) underflows to zero late in a simulation. When may this be acceptable?

**Solution.** It may be acceptable if the specification declares the component negligible below a scale tied to the requested norm and tolerance, the underflow is detected or bounded, and no later operation amplifies or divides by it. Otherwise zero silently changes the model. Log format, underflow threshold, time, and error contribution.

<a id="section-887-exercise-145-audit-an-error-norm"></a>
### Exercise 145 — Audit an error norm {#section-889-exercise-145-audit-an-error-norm}

A report states “error \\(=10^{-5}\\)” without a norm, reference, or units. List the missing mathematical information.

**Solution.** It must identify the compared objects and alignment, norm or componentwise functional, absolute or relative scaling, spatial/time measure or weights, units, reference solution provenance and uncertainty, and evaluation grid. Without these, the number cannot be reproduced or compared and licenses no accuracy claim.

<a id="section-893-exercise-146-immutable-input-generation"></a>
### Exercise 146 — Immutable input generation {#section-895-exercise-146-immutable-input-generation}

An input is generated from a seed at run time. Give two ways to make later audits robust to generator changes.

**Solution.** Store the realized input in an exact serialization with a hash, and also archive the generator source, algorithm/version, seed, and command. The realized artifact defines the authoritative problem; regeneration is then a separately checkable provenance route. Relying only on a seed delegates meaning to mutable software.

<a id="section-899-exercise-147-tolerance-unit-conversion"></a>
### Exercise 147 — Tolerance unit conversion {#section-901-exercise-147-tolerance-unit-conversion}

A length residual threshold is \\(2 micrometres\\). Express it in metres and explain how a dimensionless relative threshold differs.

**Solution.** It is \\(2\\cdot 10^{-6} m\\). This absolute tolerance changes numerical value under a unit conversion while denoting the same length. A relative threshold is dimensionless and multiplies a stated length scale; it cannot handle a zero scale alone, which is why combined absolute-relative rules are common.

<a id="section-905-exercise-148-audit-trail-for-rejection"></a>
### Exercise 148 — Audit trail for rejection {#section-907-exercise-148-audit-trail-for-rejection}

What state should an adaptive time solver preserve for the first rejected step?

**Solution.** Preserve time, proposed step, current state hash or full state, method/order, candidate state, error-estimator components, norm/scaling, tolerance, controller parameters, rejection reason, arithmetic environment, and next proposed step. This is enough to replay controller behavior without storing an unbounded trace. Sensitive or huge states may be content-addressed artifacts.

<a id="section-911-exercise-149-exact-small-oracle"></a>
### Exercise 149 — Exact small oracle {#section-913-exercise-149-exact-small-oracle}

Why is an exact rational \\(3\\times3\\) solve valuable even in an audit of million-variable systems?

**Solution.** It isolates fundamental indexing, pivoting, sign, residual, and data-conversion behavior against an indisputable oracle. Large benchmarks test scalability and realistic conditioning but rarely provide exact truth. The small case does not validate parallel scalability or sparse corner cases, so both scales serve distinct purposes.

<a id="section-917-exercise-150-final-claim-boundary"></a>
### Exercise 150 — Final claim boundary {#section-919-exercise-150-final-claim-boundary}

A code passes unit tests, manufactured convergence, residual checks, and cross-platform replay. Formulate a strong but honest conclusion.

**Solution.** The evidence supports that the tested version, environment range, problem families, and acceptance rules implement the stated discrete algorithms consistently and reproducibly. It does not prove absence of defects for untested inputs, validate the physical model, or turn empirical convergence into a universal theorem. Name versions, data hashes, test scope, failures, and unresolved risks in the conclusion.

<a id="section-923-bounded-reproducible-projects"></a>
## Bounded reproducible projects {#section-925-bounded-reproducible-projects}

Each project has a fixed instance family, finite work budget, deterministic outputs, and an explicit nonclaim. Use only already available language and library facilities; no dependency change is required.

<a id="section-927-project-1-spectral-and-randomized-rank-audit"></a>
## Project 1 — Spectral and randomized rank audit {#section-929-project-1-spectral-and-randomized-rank-audit}

Let \\(D=\\operatorname{diag}(2^{-floor(j/4)})\\), \\(j=0,\\ldots,63\\), and let \\(H_{64}\\) be the Sylvester Hadamard matrix divided by \\(8\\), built recursively from \\(H_1=[1]\\) and \\(H_{2n}=\\begin{pmatrix}H_n&H_n\\\\H_n&-H_n\\end{pmatrix}\\) before the final scaling. Use exactly \\(A_0=D\\) and \\(A_1=H_{64} D H_{64}^{\\mathsf T}\\); both have exact dyadic entries and the displayed singular values. Store them in hexadecimal binary64 text and hash them. At target ranks \\(4,8,12\\) with oversampling \\(4\\), form each Rademacher sketch from SplitMix64 using seeds \\({11,29,47,83,101,131,167,191,223,257}\\) and the high state bit for each sign. Orthonormalize \\(A \\Omega\\) by two passes of modified Gram--Schmidt in increasing column order. Compare against the exact truncated-SVD spectral error \\(\\sigma_{k+1}\\). The ceiling is 60 sketches, 120 orthogonalization passes, and 4800 total power iterations: estimate each of two spectral residual norms per sketch with exactly 40 iterations from the normalized all-ones vector. Log residual and orthogonality norms, work, hashes, and every seed outcome. Do not claim a universal success probability from ten samples.

<a id="section-931-project-2-stiff-integration-and-dae-consistency-dossier"></a>
## Project 2 — Stiff integration and DAE consistency dossier {#section-933-project-2-stiff-integration-and-dae-consistency-dossier}

Implement the literal forward Euler, backward Euler, and implicit trapezoidal updates for \\(y_1'=-y_1\\), \\(y_2'=-1000y_2\\), \\(y(0)=(1,1)^{\\mathsf T}\\), on \\([0,1]\\), with fixed steps \\(2^{-k}\\) seconds for \\(k=4,\\ldots,12\\). Solve each diagonal implicit update by scalar division. Also solve \\(x'=-x+z\\), \\(0=x+z-1\\) on \\([0,2]\\) with \\(x_0=1/4\\), \\(z_0=3/4\\), using trapezoidal steps \\(2^{-k}\\), \\(k=4,\\ldots,10\\), and lexicographic \\(2\\times2\\) Gaussian elimination without pivoting; compare with \\(x(t)=1/2-e^{-2t}/4\\), \\(z(t)=1/2+e^{-2t}/4\\). Use binary64, increasing time order, endpoint clipping, and no fused contraction. The ceiling is 8192 steps per run and exactly 35 attempted runs: 27 ODE runs, seven consistent DAE runs, and one inconsistent precondition test. Log amplification factors, errors, failures, and dimensionless constraint residual divided by \\(\\max(1,\\lvert x\\rvert,\\lvert z\\rvert)\\). The fixed inconsistent datum \\(x_0=1/4,z_0=1/2\\) must fail before stepping. Do not infer performance for general stiff systems.

<a id="section-935-project-3-conservative-field-method-patch-suite"></a>
## Project 3 — Conservative field-method patch suite {#section-937-project-3-conservative-field-method-patch-suite}

On \\([0,1]\\), solve \\(-(k u')'=f\\) with zero endpoint values. Case A has \\(k=1\\), \\(f=2\\), and \\(u_{star}=x(1-x)\\). Case B has \\(f=1\\), \\(k=1\\) left of \\(1/2\\), \\(k=4\\) right of it, and exact field \\(-x^{2}/2+7x/20\\) on the left and \\(-x^{2}/8+7x/80+3/80\\) on the right. Use uniform meshes with \\(8,16,32,64,128\\) cells. The finite-volume method uses cell-centered two-point fluxes, exact cell source integrals, and harmonic half-cell transmissibility. The finite-element method uses continuous affine elements, exact constant-coefficient stiffness, exact constant-load integration, and symmetric endpoint elimination. Solve every tridiagonal system by the Thomas recurrence in increasing row order and independently recompute residuals. The ceiling is 20 solves, 982 aggregate unknowns, and one balance audit per solve. Log interpretations, symmetry defect, flux imbalance, residual, and stated-norm errors. Do not claim behavior on unstructured multidimensional meshes.

<a id="section-939-project-4-interval-certificate-pipeline"></a>
## Project 4 — Interval certificate pipeline {#section-941-project-4-interval-certificate-pipeline}

Represent every finite endpoint by its exact binary64 dyadic value and implement interval \\(+,-,\\cdot ,/\\) by rounding the lower result toward negative infinity and the upper result toward positive infinity; reject a zero-containing divisor. Certify the unique positive root of \\(x^{2}-2\\) from \\([1,2]\\) using left-half-first bisection until width \\(\\le 2^{-40}\\), then midpoint interval Newton for at most 12 steps. Separately certify \\(Ax=b\\) for \\(A=\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}\\), \\(b=(1,0)^{\\mathsf T}\\), exact target \\((2/5,-1/5)^{\\mathsf T}\\), using the exactly dyadic \\(R=\\operatorname{diag}(1/4,1/2)\\) and the infinity-norm contraction \\(\\lVert I-RA\\rVert=1/2\\). The ceilings are 60 bisections, 12 Newton steps, 2000 primitive interval operations, and 50 proof-log rows. Run three fixed expected failures: force nearest rounding in the first multiplication and reject its violated directed-rounding contract in the proof-log audit even if that product happens to be exact, replace the derivative enclosure by \\([-1,4]\\), and change the stored target hash's last hexadecimal digit. Deliver replay commands and logs. Do not extend the certificate to an unverified transcendental library.

<a id="section-943-project-5-end-to-end-numerical-software-audit"></a>
## Project 5 — End-to-end numerical software audit {#section-945-project-5-end-to-end-numerical-software-audit}

Audit Project 4 only. Implementation A uses the directed-binary64 endpoint operations specified there. Implementation B uses exact integer-ratio endpoints for \\(+,-,\\cdot\\) and converts outward only after division; both consume the same hashed fixtures and must certify overlapping root and linear-solution boxes. Freeze acceptance rules before running: finiteness, input hashes, authoritative residual inclusion, positive interval-Newton containment margin, contraction norm at most \\(1/2\\), and nonzero exit on mandatory failure. Execute each clean implementation twice in one single-threaded environment. Seed exactly four defects: reverse one multiplication sign, swap the two vector indices, relax a failed containment comparison to tolerance success, and omit the interval log. All four must fail for the intended reason. The ceiling is 16 clean/defect runs, 25 raw records, and 10000 interval operations. Deliver the snapshot, environment, text summary, proof log, defect dossier, and claims/nonclaims page. Do not label agreement as proof for other inputs.

<a id="section-947-source-and-verification-note"></a>
## Sources {#section-949-source-and-verification-note}

The floating-format exercises use IEEE 754-2019 as the verified standards identity, but no clause-level locator is specified here. No implementation-level conformance is inferred from the standard citation.
`;export{e as default};