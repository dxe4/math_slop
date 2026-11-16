
# Prerequisite Diagnostic and Repair Routes

Attempt each item without notes or software. Mark it **ready** if you can explain the answer, **repair** if the idea is familiar but uncertain, and **new** if the notation or concept is unfamiliar. This is a routing instrument, not an admission test. Repair can happen alongside the early chapters.

## Algebra, scales, and functions

### 1. Cancellation scale

Let \(x=1.0001\) and \(y=1.0000\), each known only within \(0.00005\). Is the displayed difference \(0.0001\) known to four significant digits?

**Answer.** No. Independent admissible input changes can alter the difference by as much as \(0.0001\), the size of the displayed result itself. Subtraction was performed exactly in this decimal example, but the requested difference is ill conditioned relative to the input uncertainty.

**Repair.** Review intervals, absolute versus relative error, and significant figures before Chapters 1–3.

### 2. Scientific notation and overflow thinking

Rewrite \((10^{200})(10^{200})/(10^{200})\) without forming the first product.

**Answer.** Algebraically cancel one factor to obtain \(10^{200}\). A finite implementation that first forms \(10^{400}\) may overflow even when the final exact result is representable.

**Repair.** Practice exponent laws and algebraic reformulation before Chapters 1–2.

### 3. Logarithmic work

If an error behaves as \(C h^p\), what happens when \(h\) is halved?

**Answer.** The leading error is multiplied by \(2^{-p}\). If successive errors or error proxies are \(E_h\) and \(E_{h/2}\), an observed order is \(\log(E_h/E_{h/2})/\log 2\), provided both values lie in the same asymptotic regime.

**Repair.** Review logarithms and power laws before Chapters 8, 10, and 13–17.

### 4. Function inversion

For \(f(x)=x^{2}\) restricted to positive \(x\), estimate the change in the inverse near \(f(x)=10^{-8}\) caused by an output perturbation \(10^{-10}\).

**Answer.** Since the inverse is \(\sqrt{y}\) with derivative \(1/(2 \sqrt{y})\), the first-order input change is about \(10^{-10}/(2 \times 10^{-4})=5 \times 10^{-7}\). Inverting near zero amplifies absolute output changes.

**Repair.** Review inverse functions and derivatives before Chapters 1–3.

## Calculus and approximation

### 5. Taylor remainder

State a second-order Taylor formula for \(f(x+h)\) with a remainder that can support a bound.

**Answer.** If \(f\) has three derivatives on the interval, then for some \(\xi\) between \(x\) and \(x+h\),

\(f(x+h)=f(x)+h f'(x)+(h^{2}/2)f''(x)+(h^{3}/6)f'''(\xi)\).

Thus a supremum bound on \(\lvert f'''\rvert\) produces a computable remainder bound.

**Repair.** Review Taylor’s theorem with remainder before Chapters 2, 4, 8, and 10.

### 6. Mean-value bound

If \(\lvert f'(x)\rvert\le 7\) on \([a,b]\), what bound follows for \(\lvert f(x)-f(y)\rvert\)?

**Answer.** \(\lvert f(x)-f(y)\rvert\le 7\lvert x-y\rvert\) for \(x,y\) in the interval. The interval-wide derivative bound matters; a derivative evaluated only at one endpoint is not a global guarantee.

**Repair.** Review the mean value theorem before Chapters 1 and 3.

### 7. Integration by parts

Transform \(\int_a^b u'(x)v(x) dx\).

**Answer.** It equals \([u(x)v(x)]_a^b-\int_a^b u(x)v'(x) dx\). Boundary terms cannot be discarded unless the boundary conditions or test space make them zero.

**Repair.** Review integration by parts before Chapters 13–15.

### 8. Substitution at an endpoint singularity

Use \(x=t^{2}\) in \(\int_0^{1} x^{-1/2} dx\).

**Answer.** Since \(dx=2t dt\) and \(x^{-1/2}=1/t\) for positive \(t\), the transformed integrand is \(2\), so the integral is \(2\). The transformation removes the integrable endpoint singularity.

**Repair.** Review change of variables and improper integrals before Chapter 9.

### 9. Orthogonality

If vectors \(r\) and every column of \(A\) are orthogonal, what equation does \(r=b-Ax\) satisfy?

**Answer.** \(A^{\mathsf T} r=0\), hence \(A^{\mathsf T} A x=A^{\mathsf T} b\). These are the normal equations for least squares, though forming them can worsen conditioning.

**Repair.** Review dot products and orthogonal projection before Chapters 4–6 and the matrix-computation prerequisite.

## Linear algebra

### 10. Solvability versus conditioning

The matrix \(A=\operatorname{diag}(1,10^{-8})\) is invertible. Is solving \(Ax=b\) equally sensitive in both coordinate directions?

**Answer.** No. A perturbation in the second component of \(b\) is amplified by \(10^{8}\) in the solution. Invertibility answers existence and uniqueness; conditioning quantifies sensitivity.

**Repair.** Review diagonal systems, norms, and inverses before Chapter 1 and the matrix-computation prerequisite.

### 11. Residual and forward error

For \(Ax=b\), with approximation \(\widehat{x}\), write the relation between residual \(r=b-A\widehat{x}\) and forward error \(e=x-\widehat{x}\).

**Answer.** Since \(Ax=b\), \(A e=r\), so \(e=A^{-1}r\) when \(A\) is invertible. A small residual implies a small forward error only after the action or norm of \(A^{-1}\) is controlled.

**Repair.** Review matrix multiplication, inverse systems, and induced norms before the matrix-computation prerequisite.

### 12. Positive definiteness

Why does \(x^{\mathsf T} A x>0\) for every nonzero \(x\) matter to an energy minimization problem?

**Answer.** For symmetric \(A\), it makes the quadratic energy strictly convex, giving a unique minimizer and a norm-like energy scale. Quantitative eigenvalue bounds connect that energy to Euclidean error.

**Repair.** Review symmetric matrices, eigenvalues, and quadratic forms before the matrix-computation prerequisite and Chapters 13–15.

### 13. Eigenvalue residual

For unit vector \(v\), what does \(r=Av-\lambda v\) measure?

**Answer.** It measures failure of the proposed pair to satisfy the eigenvalue equation. For symmetric \(A\), its norm bounds distance from \(\lambda\) to the spectrum. For a nonnormal matrix, translating residual to eigenvector or eigenvalue error needs additional separation and conditioning information.

**Repair.** Review eigenvectors, norms, and orthogonality before the matrix-computation prerequisite.

### 14. Rank and singular values

Why is a numerical rank decision incomplete without a scale or tolerance?

**Answer.** Exact rank treats every nonzero singular value alike, while finite data and arithmetic cannot reliably distinguish a tiny singular value from perturbation. A numerical rank claim must name the perturbation scale, singular-value gap, and application objective.

**Repair.** Review span, null spaces, and singular values before the matrix-computation prerequisite.

## Multivariable calculus and nonlinear systems

### 15. Jacobian construction

Find the Jacobian of \(F(x,y)=(x^{2}+y,xy-1)\).

**Answer.** \(J(x,y)=\begin{pmatrix}2x&1\\y&x\end{pmatrix}\). A Newton correction \(s\) solves \(J(x,y)s=-F(x,y)\); it should not be computed by explicitly forming \(J^{-1}\).

**Repair.** Review partial derivatives and linearization before Chapter 3.

### 16. Directional derivative

For \(\phi(x)=\lVert F(x)\rVert_2^{2}/2\), what is its directional derivative in direction \(s\)?

**Answer.** \(D \phi(x)[s]=F(x)^{\mathsf T} J(x)s\). This identity connects the Newton model to line-search descent, but only when the Jacobian and inner product are the ones actually used.

**Repair.** Review chain rules and gradients before Chapters 3 and 15.

### 17. Fixed-point contraction

Suppose \(g\) maps a closed interval into itself and \(\lvert g'(x)\rvert\le q<1\) there. What does the contraction argument provide?

**Answer.** A unique fixed point in the interval and convergence of iteration \(x_{k+1}=g(x_k)\) from every starting point in it, with geometric error bounds. A derivative smaller than one only at the fixed point gives a local statement instead.

**Repair.** Review complete intervals, derivatives, and geometric series before Chapter 2.

## Probability and randomized computation

### 18. Sample mean

For independent random variables with common variance \(\sigma^{2}\), what is the variance of their mean?

**Answer.** \(\sigma^{2}/n\). Independence is material; correlated samples add covariance terms. A variance statement alone is not a deterministic error bound.

**Repair.** Review expectation, variance, independence, and covariance before Chapter 9 and the randomized matrix-computation prerequisite.

### 19. Failure probability

An algorithm succeeds with probability at least \(0.99\) on one run. Does repeating it ten times make every run succeed with probability at least \(0.9\)?

**Answer.** A union bound gives probability at least \(1-10(0.01)=0.9\) that all ten succeed, without requiring independence. The guarantee applies only if each run satisfies the assumptions underlying its individual failure bound.

**Repair.** Review complements, union bounds, and conditional assumptions before Chapter 9 and the randomized matrix-computation prerequisite.

### 20. Seed versus certificate

Does publishing a pseudorandom seed prove a randomized answer is accurate?

**Answer.** No. It makes the draw reproducible. Accuracy still needs a theorem under a stated random model, a deterministic residual or check, or both. A seed is provenance, not validation.

**Repair.** Review probability-qualified claims and reproducibility before Chapter 9 and Chapters 16–17.

## Differential equations and fields

### 21. One-step local error

For \(y'=f(t,y)\), why is replacing \(y(t+h)\) by \(y(t)+h f(t,y(t))\) locally second-order accurate under smoothness?

**Answer.** Taylor expansion gives \(y(t+h)=y(t)+h y'(t)+(h^{2}/2)y''(\xi)\). Substituting the differential equation leaves a one-step defect of order \(h^{2}\). Accumulating over order \(1/h\) stable steps typically produces first-order global error.

**Repair.** Review Taylor expansion and differential equations before Chapter 10.

### 22. Stability of a test step

Forward Euler applied to \(y'=\lambda y\) gives which amplification factor, and when does a step decay?

**Answer.** \(y_{n+1}=(1+h \lambda)y_n\), so decay requires \(\lvert 1+h \lambda\rvert<1\). A consistent method can fail badly when the step lies outside its stability region.

**Repair.** Review complex modulus and geometric sequences before Chapters 10–11.

### 23. Flux balance

Two neighboring finite-volume cells share one face. What sign relation should their internal face contributions satisfy?

**Answer.** They should be equal and opposite because the outward normals point in opposite directions. Summing the cell equations cancels the internal flux exactly, leaving external-boundary and source terms.

**Repair.** Review conservation balances and oriented boundaries before Chapters 13–15.

### 24. Weak derivative

Why can a weak formulation use a function whose classical second derivative does not exist?

**Answer.** Integration by parts transfers a derivative to a test function, so the solution may need only weaker, often square-integrable, first derivatives. Boundary conditions and function spaces must still be stated; “weak” does not mean approximate.

**Repair.** Review integration by parts, square-integrable functions, and boundary traces before Chapters 13–15.

## Computation and evidence

### 25. Stopping tolerance

A solver stops when \(\lVert r_k\rVert\le 10^{-8}\). What information is missing before this supports an accuracy claim?

**Answer.** At least the residual definition, norm, scaling, relation from residual to target error, input and discretization errors, precision floor, and whether termination was success rather than budget exhaustion.

**Repair.** Review Chapters 1–3 and the matrix-computation prerequisite before interpreting solver messages.

### 26. Refinement table

Errors at mesh scales \(h\), \(h/2\), and \(h/4\) are \(0.080\), \(0.021\), and \(0.0052\). What is supported?

**Answer.** Ratios are about four, suggesting second-order behavior over these levels. It does not prove the asymptotic theorem, identify the exact error, or show arithmetic and solver errors are negligible. More levels and independent checks may be needed.

**Repair.** Practice observed-order calculations before Chapters 8, 10, and 13–17.

### 27. Interval containment

If a program prints \([0.1,0.2]\), is containment of an exact answer established?

**Answer.** Not from the printout alone. One needs exact or outward-rounded endpoint construction, inclusion-monotone operations or a proved substitute, defined handling of exceptional values, and verified hypotheses for the enclosure theorem.

**Repair.** Read Chapters 1 and 16 before using interval output as a certificate.

### 28. Accessible evidence

A convergence claim appears only as three colored curves in an unlabeled image. What minimum alternative is needed?

**Answer.** A textual description and numerical table naming axes, units, series, work or resolution, error measure, key values, and the claimed trend. Color names alone are not stable identifiers.

**Repair.** Apply the accessibility and reproducibility contract in Chapters 16–17.

## Routing the result

| diagnostic group | repair before | suitable local route |
|---|---|---|
| 1–4 algebra and scales | Chapter 1 | scientific notation, functions, inequalities, error intervals |
| 5–9 calculus and approximation | Chapters 2, 4, 8 | Taylor theorem, integration, projection, logarithms |
| 10–14 linear algebra | matrix-computation prerequisite | matrices, norms, eigenvalues, least squares, singular values |
| 15–17 nonlinear tools | Chapter 3 | Jacobians, directional derivatives, fixed points |
| 18–20 probability | Chapter 9 and the randomized matrix-computation prerequisite | expectation, variance, union bounds, pseudorandomness |
| 21–24 differential equations | Chapters 10 and 13 | one-step ODEs, complex modulus, fluxes, weak forms |
| 25–28 evidence | every project | residual scaling, refinement, interval hypotheses, accessible tables |

If more than half of items 1–17 are **new**, begin with a calculus refresher and an elementary linear-algebra course, then return to Chapters 1–4 and the matrix-computation prerequisite. If only one group needs repair, follow its local route rather than delaying the entire book. Readiness means being able to state why a step is justified and where it can fail, not merely recognizing the final formula.
