
# Linear Algebra Continuations: Operators, Symmetry, Tensors, and Computation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-linear-algebra-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced) · [Abstract algebra I](#/courses/atlas-abstract-algebra-proof).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

Finite matrices are a starting point for operators, representations, tensors and specialist numerical linear algebra. They are not a substitute for those subjects. This course develops all four strands, with general proofs, complete source-bound work, changed hypotheses and required bounded software. Its common example is a compact operator on an infinite Hilbert space carrying a finite symmetry action. That example connects the strands; the general lessons and separate counterexamples prevent it from standing in for the whole scope.

## Preparation, conventions, records, and source order

Use the advanced linear algebra course's finite-dimensional preparation: systems and nullspaces, duality, quotients, inner products, adjoints, spectral structure, SVD, norms, conditioning and backward/forward error. [Advanced Linear Algebra: Geometry, Spectra, and Reliable Computation](#/courses/atlas-linear-algebra-advanced) supplies 74 source questions, four checkpoints and its projection/SVD certificates. The [proof reference](#/books/linear-algebra-structure-proofs) and [matrix-computation book](#/books/matrix-computation-applications) contain the actual prerequisite readings: inner products, adjoints, finite spectral theorems, conditioning, QR/SVD, eigenvalue computations and pseudospectra. Review the failed item and its full key, not an entire book by default. Complex inner products here are **linear in the first slot**, $\langle x,y\rangle=y^*x$; translate the numerical book's opposite-slot notation. Norms below are Euclidean/operator 2-norms unless another norm is printed.

Additional operator preparation is required. In [Real Analysis Chapter 11](#/books/real-analysis/11-measure), read **Sigma-algebras and measures**, **Measurable functions and almost everywhere**, **Building the integral**, **Convergence theorems**, and **The spaces Lp**. These supply measure, a.e. equality, MCT, Fatou and DCT; the measure-construction theorem is a prerequisite, not reproved here. In [Chapter 21](#/books/real-analysis/21-lp-convergence), read **Equivalence classes and essential bounds**, **Hölder and Minkowski inequalities**, **Completeness of L-p**, and **Density of simple and continuous functions**. Only their $L^2$ and bounded-truncation arguments are needed; Radon–Nikodym theory and mollifier machinery are not silently required. Review Chapter 13's **Normed vector spaces**, and Chapter 26's **Bounded operators and dual spaces**, **Closed graphs**, and **Weak and weak-star convergence**. General Hahn–Banach/Baire results used there retain their stated proof boundaries. We prove the Hilbert-space facts actually needed below.

For representations, prepare finite groups and subgroups through [Groups, Subgroups, and Generated Structure](../books/algebra-patterns-structure/groups-subgroups-generated-structure.md), homomorphisms/kernels through [Group Homomorphisms and Isomorphism Theorems](../books/algebra-patterns-structure/group-homomorphisms-isomorphism-theorems.md), and rightmost-first cycle composition through [Permutations, Cayley, and Presentations](../books/algebra-patterns-structure/permutations-cayley-presentations.md). Use their definitions and worked examples where unfamiliar, then [Group Actions, Orbits and Counting](../books/algebra-patterns-structure/group-actions-orbits-counting.md), Sections1,6–8, for actions, conjugation and cycle counting. Characteristic is the least positive integer $p$ with $p\cdot1=0$, or0 if none exists; here $\mathbb C$ has characteristic0. The finite-algebra diagnostic/notation supports lookup but does not replace these explanations. For numerics, repair geometric series, Taylor remainders, pseudocode, loops, operation counts and basic probability through the matrix book's diagnostic. Gaussian tail guarantees are imported probability theorems, not consequences of a deterministic seed. The actual public Node program below is required work. A learner must run and inspect it; a hand calculation does not waive implementation, true-residual or timing obligations. No installation beyond the site's existing Node runtime is required.

Keep dated first attempts, comparison with public models, revisions, actual code/output and help/exposure in your own task-labelled files. The native reader's notes and study marks remain mutable self-reports. They do not grade this work, execute code, certify proofs or automatically preserve external output files. Shared notebook/writing exports keep their existing bounded formats; a source-bound writing task is not created here and an overwritten native note is not an immutable attempt. Export your actual files separately. Later-return answers are public and may already have been seen; report that exposure. No verified delay, independence, learner timing, effectiveness or whole-book qualification is claimed.

**study time depends on the selected reading, attempts and corrections**, including the full selected route, programming, repair and return. Native chapter estimates remain authored planning provenance, not an additive course total or observed study time. Required work follows this order:

| Order | Actual source selection and required questions | Full feedback |
| --- | --- | --- |
| 1. Infinite geometry | [Real Analysis 27](#/books/real-analysis/27-hilbert-spectral), **Inner-product geometry** through **Inverse problems and regularisation**, then **Rayleigh quotients and unbounded operators**; Exercises **1–8** | The native Answer support is hints. The complete eight keys and general proofs below supply the missing feedback |
| 2. Domains and continuous spectrum | [Real Analysis 44](#/books/real-analysis/44-unbounded-spectral), **An unbounded operator includes its domain**, general adjoint definitions, **Resolvent and spectrum**, **Projection-valued measures**, **The self-adjoint spectral theorem**, **Borel functional calculus**, **Complete case study: the position operator**, **Scalar measures as observable distributions**, **A finite mean without an operator vector**, **An exact spectral-pollution toy model**, **Domain and theorem audit**. Exercises **1,2,8,9,10,11,12,13,14** | Native **Selected solutions** to **1,8,12,13,14** are full; new keys below complete **2,9,10,11**. The momentum/Sobolev, Friedrichs and Stone passages are optional continuations with extra preparation, not hidden prerequisites |
| 3. Symmetry | [Representation Theory of S_n](../books/finite-algebra-computation/representation-theory-of-sn.md), [Character Tables](../books/finite-algebra-computation/character-tables.md), [Project: Compute a Character Table](../books/finite-algebra-computation/project-compute-a-character-table.md), all three chapters and **Exercise 1–4 / Solution** in each | Twelve adjacent keys, supplemented by the general proofs and fixed symmetry checkpoint below. The project's Exercise3 remains an illustrative class-algebra outline, not a complete Dixon–Schneider implementation |
| 4. Multilinearity and approximation | [Multilinear Maps and Tensor Products](../books/linear-algebra-structure-proofs/multilinear-maps-tensor-products.md), Sections **1–12**, Exercises **1–18 / Solution**; [Tensor Decompositions](../books/matrix-computation-applications/tensor-decompositions.md), complete chapter, Exercises **11.1–11.4 / Solution** | All 22 adjacent full keys; then the Hilbert completion, approximation proof, rank-limit and actual ALS sweep below |
| 5. Algorithms | Matrix book: [Sparse and Iterative Methods](../books/matrix-computation-applications/sparse-and-iterative-methods.md) **6.1–6.4**, [Krylov Subspace Methods](../books/matrix-computation-applications/krylov-subspace-methods.md) **7.1–7.4**, [Preconditioning](../books/matrix-computation-applications/preconditioning.md) **8.1–8.4**, [Eigenvalue Iterations](../books/matrix-computation-applications/eigenvalue-iterations.md) **9.1–9.4**, [Randomized Numerical Linear Algebra](../books/matrix-computation-applications/randomized-numerical-linear-algebra.md) **12.1–12.4**, [Structured Matrices](../books/matrix-computation-applications/structured-matrices.md) **14.1–14.4** | Read each chapter's actual exposition and adjacent full keys, with the four precision explanations and full numerical checkpoint below. Matrix-functions definitions/exponential/conditioning and **13.1–13.3 / Solution** are required; distinguish the source's conditional13.4 stability discussion from the separately proved bounded polynomial certificate below |
| 6. Synthesis | [Project: Scale to Large Data](../books/matrix-computation-applications/project-scale-to-large-data.md), six project components and **15.1–15.4 / Solution** | Complete the fixed LA-SPEC-P001, LA-SPEC-P002 and LA-SPEC-R001 problems/models and public software below. This supplies bounded actual implementation and size comparisons, not a fabricated million-unknown benchmark |

In the matrix-functions **Definitions** section, the required definition is the diagonalizable case; its general Jordan/Hermite construction and contour-integral equivalence are optional extensions. The latter imports complex integration and is not proved or required here. For13.3's general defective-matrix asymptotic statement the finite-dimensional Jordan canonical-form theorem is a named import, not a theorem supplied by the advanced course's selected spectral prerequisites. The relevant exponential block calculation is direct: if $J=\lambda I+K$ and $K^m=0$, absolute convergence and commuting factors give $e^{tJ}=e^{t\lambda}\sum_{j=0}^{m-1}t^jK^j/j!$. Thus Jordan blocks add polynomial factors, while normal diagonalization gives the exact exponential norm. For any finite matrix, $\sum\|tA\|^j/j!$ converges and permits termwise differentiation uniformly on bounded time intervals; $F(t)=e^{tA}$ satisfies $F'=AF$. Differentiating $e^{tA}e^{-tA}$ gives zero and its value at0 is$I$, proving13.2 without a contour theorem or a general Jordan proof.

## LA-SPEC-READY — five questions with complete repairs

Attempt: (1) In a first-slot-linear Hilbert space choose the scalar minimizing $\|x-ty\|$ for $y\ne0$. (2) Does changing one point value alter an $L^2(\mathbb R)$ vector? (3) Prove $f1_{|f|\le n}\to f$ in $L^2$. (4) For $G$ finite, when can $1/|G|$ be used in its scalar field? (5) Is a small recursive residual automatically a small true residual or forward error?

**Complete repair.** (1) $t=\langle x,y\rangle/\|y\|^2$; expand the square to obtain $\|x-ty\|^2=\|x\|^2-|\langle x,y\rangle|^2/\|y\|^2+\|y\|^2|t-t_0|^2$. The $y=0$ case has every $t$ minimizing. (2) No: a singleton is Lebesgue-null and vectors are a.e. equivalence classes; at a positive-measure atom the conclusion can change. (3) The squared error is $|f|^2 1_{|f|>n}\to0$, bounded by the integrable $|f|^2$; DCT gives convergence. (4) Exactly when the field's characteristic does not divide $|G|$; over $\mathbb C$ always. (5) No: recompute $b-A\widehat x$ and state a norm/error budget; forward error also needs conditioning or an independent reference. Repair the corresponding prerequisite before proceeding.

## Operators — from complete geometry to a spectral theorem

We give the missing proofs rather than calling a diagram an operator course. In $\ell^2(\mathbb N;\mathbb C)$ take $\langle x,y\rangle=\sum x_n\overline{y_n}$. Cauchy–Schwarz follows first for finite sums, then by increasing partial sums. If $(x^j)$ is norm-Cauchy, each coordinate is Cauchy. Let $x_n=\lim_jx_n^j$. For every finite $m$, passing to coordinate limits gives $\sum_{n\le m}|x_n|^2\le\sup_j\|x^j\|^2$, hence $x\in\ell^2$. Given $\varepsilon$, the Cauchy estimate $\sum_{n\le m}|x_n^j-x_n^k|^2\le\varepsilon^2$ for large $j,k$ passes to $k\to\infty$ and then $m\to\infty$, giving $\|x^j-x\|\le\varepsilon$. This proves completeness, not merely bounded coordinates.

For a closed subspace $M$ of a Hilbert space, let $d=\inf_{m\in M}\|x-m\|$ and choose a minimizing sequence $m_j$. The parallelogram identity gives
$\|m_j-m_k\|^2=2\|x-m_j\|^2+2\|x-m_k\|^2-4\|x-(m_j+m_k)/2\|^2\le2\|x-m_j\|^2+2\|x-m_k\|^2-4d^2\to0$.
Completeness and closedness give a minimizer $m$. Varying it by real and imaginary scalar multiples of each $v\in M$ shows $x-m\perp M$. Thus $x=m+r$ uniquely with $r\in M^\perp$; uniqueness also follows by Pythagoras. These decompositions make $P_M$ linear, $P_M^2=P_M$, $P_M^*=P_M$, and $\|P_M\|\le1$ (norm1 if $M\ne0$, norm0 if $M=0$).

For nonzero bounded functional $\phi$, its kernel is closed. Choose $z$ outside the kernel and let $u=z-P_{\ker\phi}z$. Then $u\ne0$, $u\perp\ker\phi$, and $x-\phi(x)u/\phi(u)\in\ker\phi$. Hence $\phi(x)=\phi(u)\langle x,u\rangle/\|u\|^2=\langle x,y\rangle$ with $y=\overline{\phi(u)}u/\|u\|^2$. Cauchy–Schwarz and $x=y/\|y\|$ prove $\|\phi\|=\|y\|$; uniqueness follows by testing the difference against itself. For $\phi=0$ take $y=0$. Applying this to $x\mapsto\langle Tx,y\rangle$ constructs the bounded adjoint, with $\|T^*\|=\|T\|$, and $\ker T^*=(\operatorname{ran}T)^\perp$. Bounded operators defined on a dense set extend uniquely to the completion when their range space is complete: take limits of images of approximating sequences, using the norm estimate to prove existence and independence.

### The compact self-adjoint theorem — full proof

Finite-rank bounded operators are compact because bounded sets in finite dimensions have convergent subsequences. A norm limit $T$ of compact operators $T_j$ is compact: for any bounded sequence, successively select subsequences on which each $T_jx_n$ converges and take the diagonal. For its terms, $\|Tx_n-Tx_m\|\le2C\|T-T_j\|+\|T_jx_n-T_jx_m\|$. First choose $j$, then $n,m$; the images are Cauchy and completeness supplies a limit.

Let $T=T^*$ be compact and nonzero. Put $M=\sup_{\|x\|=1}|\langle Tx,x\rangle|$. Clearly $M\le\|T\|$. For unit $x$ with $Tx\ne0$, take $y=Tx/\|Tx\|$. The identity $4\operatorname{Re}\langle Tx,y\rangle=q(x+y)-q(x-y)$, with $q(v)=\langle Tv,v\rangle$, and the parallelogram law give $4\|Tx\|\le M(\|x+y\|^2+\|x-y\|^2)=4M$. Thus $M=\|T\|>0$.

Choose unit $x_j$ with $q(x_j)\to\lambda$, where $\lambda=M$ or $-M$, passing to a sign subsequence. Since $\|Tx_j\|\le M$,
$\|(T-\lambda)x_j\|^2=\|Tx_j\|^2-2\lambda q(x_j)+\lambda^2\to0$.
Compactness gives a subsequence $Tx_j\to y$; then $x_j\to y/\lambda=e$ with $\|e\|=1$ and $Te=\lambda e$. Orthogonal complements of eigenvectors are invariant because $\langle Tx,e\rangle=\langle x,Te\rangle$. Repeat on the reducing complement, choosing a maximal-magnitude eigenvalue each time. Its restriction remains compact/self-adjoint.

Every nonzero eigenspace is finite-dimensional: an infinite orthonormal sequence in it would have images a fixed positive distance apart. If the process continues indefinitely, its eigenvalues must tend to zero for the same compactness reason. The norm of the remaining restriction is the magnitude of the next chosen eigenvalue, so tends to zero. Consequently the finite sums $\sum_{j\le N}\lambda_j\langle x,e_j\rangle e_j$ converge to $Tx$ in operator norm; $T=0$ on the orthogonal complement of all selected vectors. For any complex $z\ne0$ outside the listed eigenvalues, their only possible accumulation at0 gives a positive lower bound on $|\lambda_j-z|$ and on $|z|$; dividing those coordinates and the kernel coordinates defines a bounded inverse for $T-zI$. This proves the nonzero spectral assertion as well as the expansion. In an infinite-dimensional space0 must belong to the spectrum of a compact operator, since a bounded inverse would make the noncompact identity compact. It may be an eigenvalue or merely an accumulation point. Nothing here says that every bounded self-adjoint operator is compact.

### LA-SPEC-OP27 — complete keys to native Exercises 1–8

1. The READY quadratic with $t_0=\langle x,y\rangle/\|y\|^2$ is nonnegative at its minimum, so $|\langle x,y\rangle|^2\le\|x\|^2\|y\|^2$. Equality for $y\ne0$ occurs exactly at $x=t_0y$; if either vector is zero equality is automatic.
2. In $\ell^1$ on $\mathbb R^2$, $x=(1,0),y=(0,1)$ have $\|x+y\|_1^2+\|x-y\|_1^2=4+4=8$, whereas $2\|x\|_1^2+2\|y\|_1^2=4$. Thus this norm is not an inner-product norm.
3. For independent $v_j$, set $m=\sum c_jv_j$. Orthogonality $\langle x-m,v_i\rangle=0$ gives $\sum_jc_j\langle v_j,v_i\rangle=\langle x,v_i\rangle$. The Gram quadratic is $\|\sum c_jv_j\|^2>0$ for nonzero coefficients. Hence there is exactly one solution, and Pythagoras gives global optimality, not just stationarity.
4. $M^\perp=(\overline M)^\perp$ by continuity of inner products, so $\overline M\subset M^{\perp\perp}$. If $x\notin\overline M$, project onto the closed subspace: $r=x-P_{\overline M}x\ne0$ lies in $M^\perp$ but $\langle x,r\rangle=\|r\|^2\ne0$. Thus $x\notin M^{\perp\perp}$, proving equality without an unproved separation step.
5. For an orthonormal family, expand $\|x-\sum_{j\le N}\langle x,e_j\rangle e_j\|^2=\|x\|^2-\sum_{j\le N}|\langle x,e_j\rangle|^2\ge0$. Increasing $N$ gives Bessel. Completeness of the family is needed for equality with the whole norm, not for this inequality.
6. For each fixed $y$, Bessel implies $\sum_n|\langle y,e_n\rangle|^2<\infty$, so those coefficients tend to0; conjugation gives $\langle e_n,y\rangle\to0$. Riesz represents every bounded functional, hence $e_n\rightharpoonup0$. Their norms remain1, so convergence is not strong.
7. The diagonal-subsequence and $2C\|T-T_j\|$ argument above is the complete proof. The norm, boundedness of the input sequence and completeness of the target are essential; pointwise convergence of operators alone is insufficient (finite-coordinate projections converge strongly to the noncompact identity).
8. For compact self-adjoint $T$ and cutoff $\tau>0$, retain only $|\lambda|>\tau$. The inverse filter $R_\tau$ has norm at most $1/\tau$, so noise $\|e\|\le\delta$ contributes at most $\delta/\tau$. For $y=Tx$, $R_\tau y$ equals the projection of $x$ onto retained nonzero eigenspaces: discarded coefficients and any kernel component form deterministic bias. Equality at the threshold is discarded by this strict convention. Stability for fixed $\tau$ does not mean unbiased recovery or uniform stability as $\tau\downarrow0$.

### Diagonal, shift, and unbounded models — complete worked development

For $\alpha>0$ define $D_\alpha x=(n^{-\alpha}x_n)$. Its norm is1, attained at $e_1$; it is positive and self-adjoint by coordinate sums. Let $\Pi_N$ keep the first $N$ coordinates. Then $\|D_\alpha-D_\alpha\Pi_N\|=(N+1)^{-\alpha}$, attained at $e_{N+1}$, so $D_\alpha$ is compact. For a bounded diagonal $D_d$, compactness holds **iff** $d_n\to0$: sufficiency is this tail-norm approximation; necessity follows from separated $d_ne_n$ on a subsequence with $|d_n|\ge\varepsilon$. Its spectrum is the closure of $\{d_n\}$: outside that closure coordinate division is bounded, while a diagonal value is an eigenvalue and an unachieved limit has unit approximate eigenvectors. Thus $\sigma(D_\alpha)=\{n^{-\alpha}:n\ge1\}\cup\{0\}$, with0 not an eigenvalue. The range contains finite-support sequences and is dense, but is not all of $\ell^2$: choosing $y_n=n^{-\alpha-1/2}$ gives $y\in\ell^2$ while its required inverse $n^{-1/2}$ is not square-summable. It is therefore nonclosed, and its inverse on its range is unbounded, as $\|D_\alpha e_n\|\to0$.

The unilateral shift $S(x_1,x_2,\ldots)=(0,x_1,x_2,\ldots)$ is an isometry; direct summation gives $S^*(y_1,y_2,\ldots)=(y_2,y_3,\ldots)$. Thus $S^*S=I$ but $SS^*=I-P_{e_1}$: an infinite-dimensional isometry need not be unitary. $S$ is not compact because the images of $e_n$ remain orthonormal. Its point spectrum is empty: the coordinate recurrence for $Sx=zx$ forces all coordinates zero, including at $z=0$. For $|z|>1$, a convergent operator geometric series gives $(S-zI)^{-1}=-z^{-1}\sum_{k\ge0}(S/z)^k$. For $|z|<1$, the vector $g=(1,\overline z,\overline z^2,\ldots)$ satisfies $S^*g=\overline z g$, so the range of $S-zI$ is not dense. For $|z|=1$, normalized vectors $x^{(N)}=(1,z^{-1},\ldots,z^{-(N-1)},0,\ldots)/\sqrt N$ have $\|(S-zI)x^{(N)}\|=\sqrt{2/N}$. Hence $\sigma(S)$ is the closed unit disk. Interior points are residual spectrum; boundary points are continuous spectrum: $S-zI$ is injective and its adjoint has no nonzero eigenvector at $\overline z$, giving dense range. If it were also onto, the bounded inverse theorem between Banach spaces would give a bounded inverse, contradicting those approximate vectors. Thus the dense range is not onto.

For $N x=(n x_n)$ set $D(N)=\{x:\sum n^2|x_n|^2<\infty\}$. Finite sequences prove density. If $x^j\to x$, $Nx^j\to y$, coordinate limits give $y_n=nx_n$ and $y\in\ell^2$, proving closedness. If $y\in D(N^*)$, testing every $e_n$ forces $(N^*y)_n=ny_n$ and square summability, so $D(N^*)=D(N)$ and $N=N^*$. Its graph norm is $(\sum(1+n^2)|x_n|^2)^{1/2}$. The coordinate resolvent $(N-z)^{-1}$ exists exactly for $z\notin\mathbb N$ and has norm $\sup_n|n-z|^{-1}$. The identity $n/(n-z)=1+z/(n-z)$ is bounded, so the inverse maps every $\ell^2$ input into $D(N)$, as required, not merely into $\ell^2$. It is compact because its diagonal entries tend0. Its spectrum is precisely the positive integers, each an eigenvalue. Its inverse is $D_1$ and is bounded, despite $N$ being unbounded: bounded inverse and bounded operator are different assertions. Spectral projections retain the coordinates with $n\in B$; their countable additivity is strong (tail sums), generally not operator-norm convergence. This explicitly proves a discrete unbounded spectral model.

### LA-SPEC-OP44 — missing keys and imported-theorem boundaries

The general self-adjoint PVM theorem in native44 has a proof architecture, not a completed proof of the bounded unitary theorem and its transport. We use that theorem where the native general functional calculus requires it, while the multiplication and number-operator models verify their assertions directly. The compact theorem above has a full proof. Stone, Friedrichs, general extension theory and the whole Sobolev momentum theory are not claimed as proved by this course.

**Exercise2, full key.** For finite a.e. measurable real $m$ and $f\in L^2$, put $f_k=f1_{|m|\le k}$. Then $mf_k\in L^2$ because $\|mf_k\|\le k\|f\|$, so $f_k\in D(M_m)$. DCT gives $\|f-f_k\|^2=\int|f|^2 1_{|m|>k}\to0$. Thus the maximal domain is dense. The a.e.-finite hypothesis ensures the indicators tend to zero a.e.

**Exercise9, full key.** For real $\lambda$, $f_n=\sqrt{n/2}1_{[\lambda-1/n,\lambda+1/n]}$ has norm1, belongs to $D(Q)$ by bounded support, and $\|(Q-\lambda)f_n\|^2=(n/2)\int_{-1/n}^{1/n}u^2du=1/(3n^2)$. Thus its residual is exactly $1/(\sqrt3 n)$, in particular at most $1/n$. A bounded inverse would imply $1\le C/(\sqrt3 n)$ for all $n$, impossible. Every real $\lambda$ is spectral without requiring an eigenvector.

**Exercise10, full key.** $(x-\lambda)f=0$ a.e. forces $f$ supported on the null singleton $\{\lambda\}$, hence zero in $L^2$. For density, if $g\perp\operatorname{ran}(Q-\lambda)$, the adjoint-domain definition gives $g\in D((Q-\lambda)^*)$ and $(Q-\lambda)^*g=0$. The directly proved self-adjointness makes this kernel zero. Range is not all: $h=1_{[\lambda-1,\lambda+1]}$ lies in $L^2$, but the required $h/(x-\lambda)$ is not square-integrable near $\lambda$. Thus all real spectrum is continuous, not point or residual.

**Exercise11, full key.** $D(Q^2)=\{f\in L^2:x^2f\in L^2\}$, since $x^4|f|^2$ integrable implies $x^2|f|^2$ integrable by $x^2\le1+x^4$. Functional calculus is multiplication: $e^{-tQ^2}f=e^{-tx^2}f$ for $t\ge0$, a contraction on all $L^2$; for $t<0$ it is unbounded and needs the domain $\{f:e^{|t|x^2}f\in L^2\}$. For $t>0$ no nonzero $L^2$ vector attains norm1, though the operator norm is1 by concentrating near0. The general PVM language does not remove these domain or attainment conditions.

Compare native full solutions1,8,12,13,14 carefully: graph completeness is an iff; position projections are strongly countably additive, not norm additive; Gaussian attenuation is norm $(1+2t)^{-1/4}$, squared norm $(1+2t)^{-1/2}$; spectral cutoffs converge in graph norm only for domain vectors. In the moment family $f_\beta=\sqrt{2\beta-1}1_{x\ge0}(1+x)^{-\beta}$, normalization needs $\beta>1/2$, form-domain membership needs $\beta>1$, operator-domain membership needs $\beta>3/2$. Endpoints diverge. For $\beta>1$, the scalar derivative is $i/(2\beta-2)$, while the vector orbit is norm-differentiable exactly for $\beta>3/2$. At $5/4$ the scalar derivative is $2i$ but no vector derivative exists; at2 it is $i/2$ and the vector derivative has norm1. A finite mean is not an operator-domain certificate.

## Representations — complete reducibility is a proved mechanism

Throughout this section $G$ is finite and representations are finite-dimensional over $\mathbb C$, unless the changed-field counterexample says otherwise. A representation is a homomorphism $\rho:G\to GL(V)$; a subrepresentation is invariant under every $\rho(g)$, not just one generator chosen without checking relations. An intertwiner $A:V\to W$ satisfies $A\rho(g)=\sigma(g)A$. Its kernel and image are invariant.

**Averaging and Maschke, full proof.** Start with any positive inner product and average $[x,y]=|G|^{-1}\sum_g\langle\rho(g)x,\rho(g)y\rangle$. Positivity follows from the identity term and invariance by reindexing. If $U$ is invariant, its orthogonal complement in this new inner product is invariant, since $[\rho(g)x,u]=[x,\rho(g^{-1})u]=0$. Hence $V=U\oplus U^\perp$. Induct on dimension to obtain a direct sum of irreducibles. Equivalently, averaging any projection $p$ onto $U$ gives $\overline p=|G|^{-1}\sum_g\rho(g)p\rho(g)^{-1}$; it has range in $U$, equals the identity on $U$, and commutes with $G$, so $\ker\overline p$ is an invariant complement. The projection proof also works over a field of characteristic not dividing $|G|$, without a positivity argument.

**Schur, full proof.** Between irreducibles, a nonzero intertwiner has zero kernel and full image, hence is an isomorphism. An endomorphism $A$ of a complex irreducible has an eigenvalue $\lambda$; $A-\lambda I$ is a noninvertible intertwiner, hence zero. Thus it is scalar. Over $\mathbb R$ this scalar conclusion can fail: the real irreducible rotation representation of $C_3$ has commuting quarter-turn $J$, which is not a real scalar. Algebraic closure matters.

**Orthogonality, full proof.** On $\operatorname{Hom}(V,W)$ let $g$ act by $A\mapsto\sigma(g)A\rho(g)^{-1}$. Its average is an idempotent with range $\operatorname{Hom}_G(V,W)$, so its trace equals that space's dimension. In matrix units the trace of $A\mapsto BAC$ is $\operatorname{tr}(B)\operatorname{tr}(C)$: its diagonal coefficient on $E_{ij}$ is $B_{ii}C_{jj}$. Therefore
$\dim\operatorname{Hom}_G(V,W)=|G|^{-1}\sum_g\chi_W(g)\chi_V(g^{-1})$.
Averaged inner products make the representations unitary, so $\chi_V(g^{-1})=\overline{\chi_V(g)}$. Schur now gives character orthogonality for irreducibles, and the same equation gives multiplicity and intertwiner dimensions for arbitrary direct sums. This proves rather than assumes the row relations used in the native tables.

**Regular representation and completeness, full proof.** Every irreducible $V$ occurs in $\mathbb C[G]$: for nonzero $v$, the map $\sum a_gg\mapsto\sum a_g\rho(g)v$ has invariant nonzero image, hence is onto, and Maschke splits it. Thus there are only finitely many irreducibles, all among a regular decomposition. A $G$-map from $\mathbb C[G]$ to $V$ is freely determined by its value at the identity, so the space of such maps has dimension $d_V$. Schur applied to a regular decomposition says the multiplicity of $V$ is $d_V$. Taking dimensions gives $\sum_i d_i^2=|G|$.

The algebra map $\mathbb C[G]\to\bigoplus_i\operatorname{End}(V_i)$ is injective: an element acting as zero on every irreducible acts as zero on the regular representation, hence on its identity element. The dimensions just computed agree, so this map is an algebra isomorphism. Its center on the right is one scalar per irreducible, of dimension equal to their number. On the left a central element has coefficients constant on conjugacy classes, and class sums give a basis. Thus the number of irreducibles equals the number of conjugacy classes. Orthogonal characters consequently form a basis of class functions. This supplies the completeness step imported, not proved, in native Character Tables Exercise4; no assumption that independence alone gives spanning is used.

For irreducible character $\chi_i$ of degree $d_i$, the central element $e_i=(d_i/|G|)\sum_g\overline{\chi_i(g)}g$ acts as the identity on $V_i$ and zero on other irreducibles: centrality makes its action scalar, and its trace on $V_j$ is $d_i\langle\chi_j,\chi_i\rangle$. Dividing by $d_j$ gives0 or1. Hence in any representation these are algebraically orthogonal isotypic projectors ($e_ie_j=0$ for $i\ne j$) summing to the identity. They are orthogonal projections for the averaged invariant inner product; a nonunitary coordinate representation need not make them Euclidean self-adjoint. They select whole isotypic spaces, not a preferred basis among repeated copies. On tensor products the action is $\rho(g)\otimes\sigma(g)$, whose trace is the product of traces in product bases; on the dual it is $\rho(g^{-1})^T$, giving the conjugate character. These formulas connect actual linear maps to the character computations.

### LA-SPEC-REP — problem

1. Prove the standard subspace $W=\{x\in\mathbb C^n:\sum x_i=0\}$ in the permutation representation of $S_n$ is irreducible for $n\ge2$, completing the assertion in native S_n Exercise4. Explain $n=1$.
2. For $S_3$ use $u_1=e_1-e_2$, $u_2=e_2-e_3$. Find the matrices of $r=(123)$ and $s=(12)$, the Gram matrix, their relations, characters and the decomposition of $W\otimes W$ with actual invariant tensor subspaces.
3. Prove the regular multiplicities and center-count argument above. Apply the actual source $S_4$ table to its unordered-pair representation and to $V_3\otimes V_5$. Say what the hook-length and Murnaghan–Nakayama rules import.
4. Change to $\mathbb F_2[C_2]$ and prove that the line spanned by $1+g$ has no invariant complement. Is this a counterexample to complex Maschke?

### LA-SPEC-REP — complete model and repairs

1. Any nonzero invariant $U\subset W$ contains a vector whose two coordinates differ; otherwise it would be constant, and $\sum x_i=0$ over $\mathbb C$ would make it zero. Subtract its transposed image to obtain a nonzero multiple of $e_i-e_j$. Permuting coordinates gives every difference, which spans $W$, so $U=W$. For $n=1$, $W=0$ is not a nonzero irreducible; the permutation representation is just trivial. This proof uses characteristic zero; it cannot be copied when $n$ vanishes in the field.
2. In the printed ordered basis,
\[
R=\begin{pmatrix}0&-1\\1&-1\end{pmatrix},\quad
S=\begin{pmatrix}-1&1\\0&1\end{pmatrix},\quad
G=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}.
\]
Direct multiplication gives $R^3=S^2=I$, $SRS=R^{-1}$ and $R^TGR=S^TGS=G$. The matrices are orthogonal in this Gram geometry; testing ordinary $R^TR=I$ would use the wrong basis metric. Traces on the classes identity/transpositions/3-cycles are $(2,0,-1)$, with sizes $(1,3,2)$. Squaring gives tensor character $(4,0,1)$, with multiplicities1 of trivial, sign and standard. Actual invariant subspaces are the trivial line generated by $2u_1u_1+u_1u_2+u_2u_1+2u_2u_2$, the sign line generated by $u_1u_2-u_2u_1$, and the symmetric contraction-zero plane spanned by $u_1u_1-u_2u_2$ and $u_1u_1+2u_1u_2+2u_2u_1+u_2u_2$. Juxtaposition here means tensor product, not scalar multiplication. Contraction is $\sum G_{ij}a_{ij}$; all displayed trace-free tensors contract to0. Symmetry and invariance of $G$ prove the plane invariant, dimensions sum4 and the character identifies its standard action. The tensor inner product is $G\otimes G$, not an unexplained Euclidean dot product on these coordinates.
3. The regular-map and center proofs establish the general statements with all needed hypotheses. Native S4 class sizes $(1,6,3,8,6)$ and unordered-pair character $(6,2,2,0,0)$ give multiplicities $(1,0,1,0,1)$. The product $V_3\otimes V_5$ has character $(6,0,-2,0,0)$ and multiplicities $(0,0,1,1,0)$. These follow by weighted dot products divided by24. Hook lengths give degrees $(1,3,2,3,1)$ for the native partition order; the general hook-length and rim-hook formulas are imported combinatorial theorems, not derived by these small examples. The simultaneous class-algebra pseudocode remains an outline, not a certified full algorithm.
4. In basis $(1,g)$, $g$ swaps coordinates. This two-dimensional space has exactly three one-dimensional subspaces. The invariant line $L=\operatorname{span}(1+g)$ is one; the other two are $\operatorname{span}(1)$ and $\operatorname{span}(g)$, swapped rather than invariant. Thus neither is a complement as a representation. Equivalently, any invariant one-dimensional space over $\mathbb F_2$ has $g$ acting as1 and must be $L$. Since2=0, averaging by1/2 is unavailable. This violates no characteristic-zero theorem.

## Tensors — universal maps, completion, and approximation

The required proof chapter constructs the algebraic tensor product by relations and proves all 18 exercises. In particular, with $V^*$ the **algebraic dual**, $V^*\otimes W\to\operatorname{Hom}(V,W)$ represents algebraic finite-rank maps: every tensor is a **finite** sum, whose outputs lie in the finite span of its $W$ factors. Bounded finite-rank maps between normed spaces use continuous functionals instead. It is onto in finite dimensions, not onto all infinite-rank maps or all bounded operators on an infinite Hilbert space. No choice of an array silently supplies an infinite-dimensional tensor norm or completion.

For our Hilbert model take finite sums in $\ell^2\otimes\mathbb C^3$ with inner product $\langle x\otimes v,y\otimes w\rangle=\langle x,y\rangle\langle v,w\rangle$. Using the standard orthonormal basis of $\mathbb C^3$, the map $\sum_{j=1}^3x^{(j)}\otimes e_j\mapsto (x_n^{(1)},x_n^{(2)},x_n^{(3)})_{n\ge1}$ is an isometry onto $\ell^2(\mathbb N;\mathbb C^3)$: the squared norm is exactly $\sum_{n,j}|x_n^{(j)}|^2$. This space is complete by the earlier coordinate proof, so it realizes the Hilbert tensor completion. With a finite-dimensional second factor every such vector already admits three algebraic terms; with two infinite factors the algebraic product generally is not complete. The finite-rank Hom identification, an algebraic tensor, and a completed Hilbert tensor are distinct constructions.

### Tucker approximation — existence and a proved HOSVD bound

Work over the real or complex field in a finite three-mode array space with Frobenius norm. A multilinear-rank constraint $(r_1,r_2,r_3)$ means each unfolding has matrix rank at most the specified value. These constraints are closed (all relevant minors vanish), so their intersection is closed. A minimizing sequence for distance to a fixed $T$ can be restricted to a bounded ball by $\|X\|\le\|T\|+\|T-X\|$; finite-dimensional compactness gives a convergent subsequence whose limit attains the minimum. Equivalently, optimize orthonormal mode frames and their projected core on compact Stiefel sets. This existence contrasts with CP rank constraints, which need not be closed.

Let $P_i$ be the orthogonal projection onto the top $r_i$ left singular vectors of mode-i unfolding; lifted to the tensor space they commute. The HOSVD approximation is $\widehat T=P_1P_2P_3T$. Orthogonal telescoping decomposes $T-\widehat T=(I-P_1)T+P_1(I-P_2)T+P_1P_2(I-P_3)T$ into orthogonal terms. Contractivity gives
$\|T-\widehat T\|_F^2\le\sum_i\|(I-P_i)T\|_F^2$.
For any feasible multilinear-rank $X$, its i-unfolding has rank at most $r_i$. Eckart–Young therefore gives $\|(I-P_i)T\|_F\le\|T-X\|_F$. Summing yields $\|T-\widehat T\|_F\le\sqrt3\,\|T-X_{\rm best}\|_F$. The top singular subspace can be nonunique at a tie, but every chosen orthogonal top subspace satisfies this bound. Zero ranks give the zero projection; ranks exceeding a mode dimension are clipped only after the declared constraint is checked. This is quasi-optimality, not a claim that HOSVD always produces the best Tucker tensor.

### LA-SPEC-TEN — problem

1. Reproduce numerical11.2's rank-at-most-two sequence. Prove its rank is exactly2 for every nonzero $\varepsilon$, its limit has rank3, and identify which set fails to be closed. What does this imply for best CP-rank-two approximation of that limit?
2. For $T=e_1e_1e_1+2e_2e_2e_2$, fit one CP term $a\otimes b\otimes c$ by one full ALS sweep, initially $a=b=c=(1,1)$. Give every update and squared residual, not only a pseudocode description. State the zero-denominator and factor-scaling boundaries.
3. Explain the actual meaning of the native11.3 count4000. Prove the Tucker existence/HOSVD bound above and distinguish tensor rank, multilinear rank and a matrix flattening rank.

### LA-SPEC-TEN — complete model and repairs

1. Put $u=e_1,v=e_2$ and $A_\varepsilon=((u+\varepsilon v)^{\otimes3}-u^{\otimes3})/\varepsilon$ for $\varepsilon\ne0$. The two displayed pure terms give CP rank at most2. Its first-mode slices are $\begin{pmatrix}0&1\\1&\varepsilon\end{pmatrix}$ and $\begin{pmatrix}1&\varepsilon\\\varepsilon&\varepsilon^2\end{pmatrix}$; they are independent (compare their first entries), so its mode rank is2 and CP rank cannot be1. The limit $A_0=vuu+uvu+uuv$ has slices $S_0=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $S_1=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. Their pencil has determinant $-a^2$, so its only nonzero rank-one direction is $S_1$. A rank-two decomposition with mode rank2 would require two independent rank-one matrices spanning that slice space, impossible. The three printed terms prove the matching upper bound3. Thus the CP-rank-at-most-two set is not closed in real2×2×2 (also for this complex example). The distance of $A_0$ from that set is0 and cannot be attained. Rank-at-most-one is closed; sufficiently large rank bounds give the entire space. Do not generalize nonclosedness to every rank constraint.
2. This fixture and its update are over $\mathbb R$. With the other factors fixed, the least-squares update is $a_i=\sum_{jk}T_{ijk}b_jc_k/(\|b\|^2\|c\|^2)$, and cyclically. It gives $a=(1/4,1/2)$, then $b=(2/5,8/5)$, then $c=(2/17,32/17)$. Initially the squared residual is $5+8-2\cdot3=7$. After the a-update it is $5-5/4=15/4$; after b, $5-17/10=33/10$; after c, $5-257/85=168/85$. Each update is the exact conditional least-squares minimum, so descent follows, but global convergence or global optimality does not. A zero fixed factor makes the denominator zero and the subproblem nonunique; reject that update and declare a new initialization. Rescalings $a\mapsto\lambda a,b\mapsto\nu b,c\mapsto c/(\lambda\nu)$ for nonzero scalars preserve the tensor, so raw factors are not uniquely identified. The required public program actually executes this sweep and checks the tensor residual.
3. The1000 core entries plus3000 factor entries are stored parameters, not intrinsic degrees of freedom after orthogonality and gauge constraints. A flattening rank is one component of multilinear rank and a lower bound for CP rank, not a universal equal definition. The compactness proof gives existence for Tucker constraints, while the orthogonal telescoping and matrix Eckart–Young arguments prove the stated HOSVD bound. The native CP counterexample explains why copying the matrix best-approximation theorem to CP rank fails.

## Specialist algorithms — proofs before performance claims

### CG, preconditioning, and the finite-termination proof

For real SPD $A$, minimizing $\frac12x^TAx-b^Tx$ over $x_0+\mathcal K_k(A,r_0)$ is a strictly convex finite problem. Its derivative gives $r_k=b-Ax_k\perp\mathcal K_k$, equivalently the error is $A$-orthogonal to that space. Start $p_0=r_0$ and use
$\alpha_k=r_k^Tr_k/(p_k^TAp_k)$, $x_{k+1}=x_k+\alpha_kp_k$, $r_{k+1}=r_k-\alpha_kAp_k$, $\beta_k=r_{k+1}^Tr_{k+1}/(r_k^Tr_k)$, $p_{k+1}=r_{k+1}+\beta_kp_k$; stop before a zero residual is divided by.

Here is the induction hidden by a generic-full-space slogan. Assume earlier directions are $A$-conjugate, span $\mathcal K_k$ and $r_k\perp\mathcal K_k$. Since $p_k-r_k\in\mathcal K_k$, $r_k^Tp_k=r_k^Tr_k$. The chosen $\alpha_k$ makes $r_{k+1}\perp p_k$, and conjugacy makes it perpendicular to earlier directions too. Thus it is perpendicular to $\mathcal K_{k+1}$. For $j<k$, $Ap_j=(r_j-r_{j+1})/\alpha_j$ is in $\mathcal K_{k+1}$, so $p_j^TAr_{k+1}=0$. For the last direction, $p_k^TAr_{k+1}=-\|r_{k+1}\|^2/\alpha_k$, and $p_k^TAp_k=\|r_k\|^2/\alpha_k$; the printed $\beta_k$ cancels this term. The new directions remain conjugate and span the enlarged Krylov space until termination. Positive definiteness gives positive curvature denominators for nonzero directions.

Let $m$ be the least-degree polynomial with $m(A)r_0=0$. On the spectral components present in $r_0$, all eigenvalues are positive, so $m(0)\ne0$. Dividing $m(z)-m(0)$ by $z$ expresses $A^{-1}r_0$ as a polynomial in $A$ of degree at most $\deg m-1$ applied to $r_0$. Hence the exact solution lies in $x_0+\mathcal K_{\deg m}$; CG terminates by that step, at most the number of distinct active eigenvalues and at most dimension. The Krylov space need not equal the whole ambient space. With $r_0=0$ no step is needed. In finite precision conjugacy can be lost and recursive and true residuals differ; the exact theorem supplies no fixed binary64 iteration count.

For SPD $M=LL^T$, apply CG to $L^{-1}AL^{-T}$ and $L^{-1}b$. This is SPD in Euclidean geometry; mapping back gives PCG with $z_k=M^{-1}r_k$, numerator $r_k^Tz_k$ and conjugate updates. $M^{-1}A$ is self-adjoint in the $M$-inner product, not generally in the original Euclidean coordinates. A left-preconditioned GMRES residual $M^{-1}(b-Ax)$ is a different quantity from the original residual; right preconditioning retains the original residual but still needs an accurate application of $M^{-1}$. Setup, application costs and loss of structure remain part of the comparison.

### GMRES, Arnoldi, and a complete stagnation example

With an orthonormal Arnoldi basis $Q_k$ and $AQ_k=Q_{k+1}\overline H_k$, the residual of $x_0+Q_ky$ is $Q_{k+1}(\|r_0\|e_1-\overline H_ky)$; the isometry makes the small least-squares norm exactly the original residual norm in exact arithmetic. This proves GMRES's minimization. Reorthogonalization checks are needed when the computed basis is only approximately orthonormal. A happy breakdown can mean the invariant space already contains the solution; a zero start residual stops immediately. A singular original system can instead be inconsistent, so a vanished Arnoldi direction is not an automatic solution certificate.

For $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $b=e_1$, $x_0=0$, a one-step trial is $x=\gamma e_1$ with residual $(1,\gamma)$, uniquely minimized at $\gamma=0$. GMRES(1) restarts at the same point forever, although $A$ is invertible and $x_*=(0,1)$. Full two-step Krylov space is all $\mathbb R^2$ and solves exactly. Arnoldi gives $q_1=e_1,q_2=-e_2$ and $H_2=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. This example also rejects SPD-CG's assumptions: $p^TAp=0$ at its first direction. The required software executes the restart and the two-vector Arnoldi calculation.

### Four source precision corrections and their complete feedback

1. **Fourier convention.** With $Ze_j=e_{j+1\pmod n}$ and $v_m[j]=\omega^{jm}$, $(Zv_m)[j]=v_m[j-1]=\omega^{-m}v_m[j]$, not $\omega^m$. For $n=4,\omega=-i,m=1$, $v=(1,-i,-1,i)$ and $Zv=(i,1,-i,-1)=iv$. Using vectors $\omega^{-jm}$ instead gives eigenvalue $\omega^m$; either convention is valid if used consistently. The symmetric cyclic Laplacian's spectrum $(0,2,4,2)$ hides this sign mistake, so test a directed shift. Its zero constant mode makes $Cx=b$ compatible only for mean-zero $b$; the minimum-norm solution has mean0. An FFT product cost alone does not prove an iteration count or total solve cost.
2. **The displayed ILU example.** Multiply the native tridiagonal factors: $(LU)_{22}=1/4+15/4=4$, $(LU)_{33}=4/15+56/15=4$, and the off-diagonal entries are $-1$. Thus $LU=A$ exactly, so the example's preconditioned matrix is $I$. Nonzero compatible data solve in one exact PCG step with this exact preconditioner; zero data need none. Jacobi can also take one step for an eigenvector right-hand side, so no universal strict iteration improvement follows. A genuinely incomplete factorization on other patterns needs its own analysis.
3. **Sketch distortion.** If $S$ obeys $(1-\eta)\|v\|^2\le\|Sv\|^2\le(1+\eta)\|v\|^2$ on the entire span of $[A,b]$, $0\le\eta<1$, then sketched optimality gives $\|A\widehat x-b\|\le\sqrt{(1+\eta)/(1-\eta)}\min_x\|Ax-b\|$. To request factor $1+\epsilon$, choose $\eta\le((1+\epsilon)^2-1)/((1+\epsilon)^2+1)$. Embedding only $\operatorname{ran}A$ is insufficient: $A=(1,0)^T,b=(0,1)^T,S=(1,M)$ preserves $A$ exactly but gives $\widehat x=M$ and original residual $\sqrt{1+M^2}$. The desired residual tolerance and squared-norm embedding distortion are different parameters. Gaussian concentration and oversampling tail results retain their imported hypotheses; a fixed test matrix is not a draw with a proved Gaussian tail.
4. **Matrix-function errors.** Exact Padé truncation is not arithmetic unit roundoff. Even the scalar $[1/1]$ approximant $r(x)=(1+x/2)/(1-x/2)$ has $\log r(x)=x+x^3/12+\cdots$ near0: at fixed nonzero $x$ its backward difference persists when arithmetic is exact. Squaring also introduces roundoff and may amplify error. An unqualified stability claim is not a general proof; the source's corrected13.4 discussion requires analytic parameter selection and a separate implementation/error model. For the bounded reference here, compute $P_{12}(A)=\sum_{k=0}^{12}A^k/k!$ with $\|A\|\le1$. The exact tail is at most $\sum_{k\ge13}1/k!\le14/(13\cdot13!)<3/13!$ by a scalar geometric comparison. This proves truncation control; our code/oracle separately compares binary64 evaluation with the exact rational polynomial. It makes no general backward-stability claim for arbitrary scaling-and-squaring implementations.

The source6.3 factor near3000 is an operation-count comparison, not measured wall-clock acceleration. The source9.3 24MB is a basis payload estimate, not a measured peak-memory result. Power iteration cannot repair zero starting overlap, create a missing gap among equal singular values, or beat the best rank-k error barrier. Shift-invert needs a shift outside the spectrum and reports the residual for the original matrix. These qualifications remain part of every required source answer.

### LA-SPEC-NUM — problem and complete model

**Problems.** Prove the CG/PCG and GMRES assertions above. Then (a) use $A=\operatorname{diag}(3,2,1)$, sample vector $\Omega=(1,1,0)$ and range vector $Y=(AA^T)^qA\Omega$ for $q=0,1$; calculate orthogonal-projection spectral error. Change $\Omega$ to $e_3$. (b) For $A=(1,0)^T,b=(0,1)^T,S=(1,10)$ compute the failed sketched fit. (c) For the skew matrix in the GMRES example compute $P_{12}(A)$ and $P_{12}(-A)$ symbolically and bound the exponential truncation. Run the public reference and compare its actual matrices/residuals.

**Complete model.** The preceding general proofs establish the first assertions, including zero residual and non-SPD failure. For(a), $Y=(3^{2q+1},2^{2q+1},0)$ and $Q=Y/\|Y\|$. On the first two coordinates, $(I-QQ^T)A$ has rank1 and squared singular value $(9\cdot2^{4q+2}+4\cdot3^{4q+2})/(3^{4q+2}+2^{4q+2})$; the third coordinate contributes a singular value1, and the final singular value is0. Thus spectral error squared is $72/13$ for$q=0$ and $3492/793$ for$q=1$. The best rank-one error is2; these errors exceed2 but approach it as the sampled direction improves. With $\Omega=e_3$, the error stays3 for every power because no leading overlap is present. These are exact deterministic probes, not Gaussian probabilities. For(b), $\widehat x=10$, original squared residual101, whereas the true least-squares minimizer0 has squared residual1. For(c), $A^2=-I$, so $P_{12}(A)=cI+sA$ with $c=\sum_{j=0}^{6}(-1)^j/(2j)!$ and $s=\sum_{j=0}^{5}(-1)^j/(2j+1)!$. Then $P_{12}(A)P_{12}(-A)-I=(c^2+s^2-1)I$. These are exact rational numbers, independently evaluated by the oracle; the bound above controls each exact exponential remainder. Matching this bounded polynomial does not establish a general exponential algorithm theorem.

## Common operator certificate — exact data and nine deliverables

Let $u=(1,1,1)^T$, $w=(1,0,-1)^T$, $v=u+w=(2,1,0)^T$, $P_0=uu^T/3$, $P_1=I-P_0$, $B_\mu=\mu P_0+P_1$. On $H=\ell^2(\mathbb N)\widehat\otimes\mathbb C^3$ define $T_{\alpha,\mu}=D_\alpha\otimes B_\mu$, with $\alpha>0,\mu\ge0$. The $S_3$ action permutes the three vector coordinates at every index. Define the noiseless truth $x_n=n^{-2}v$, data $b_n=n^{-\alpha-2}(\mu u+w)$, and observed data $b^\delta=b+\delta e_m\otimes e_1$ with $\delta=1/1000$, noise index $m=4$. The index cutoff $\Pi_N$ retains all three components at $n\le N$. It is not automatically an optimal rank-$3N$ SVD approximation.

| Task | alpha | mu | Analytical cutoff N | Fixed noise index m | delta |
| --- | --- | --- | --- | --- | --- |
| LA-SPEC-P001 | 1 | 2 | 4 | 4 | 1/1000 |
| LA-SPEC-P002 | 1 | 0 | 4 | 4 | 1/1000 |
| LA-SPEC-R001 | 2 | 1/2 | 4 | 4 | 1/1000 |

The software size sequence is $N=8,16,32$ with the **same noise index4**, same infinite truth and same observed data for each form. A separate exact-direction family may put noise at $m=N$; that varies the dataset with $N$ and is not a fixed-data convergence experiment. Its $e_1$ amplification is exact for that direction, not generally the operator-norm worst case: for $\mu>0$ the cutoff inverse norm is $N^\alpha/\min(\mu,1)$, attained by a unit standard vector if $\mu\ge1$ and by $u/\sqrt3$ if $0<\mu\le1$. In every finite solve distinguish the restriction $A_N=T|_{H_N}:H_N\to H_N$ from the extended finite-rank operator $T\Pi_N$ on all of $H$: the latter always has a tail kernel.

For each task submit these nine connected deliverables:

1. Prove positivity/self-adjointness/compactness, kernel/range and spectrum for the infinite operator, and state the domain and type of its inverse or inverse problem. Preserve full spectral multiplicities when different index/sector eigenvalues coincide.
2. Derive the symmetry decomposition and central projectors, tensor typing and commutation. Identify all information removed when a sector eigenvalue vanishes.
3. Compute $\|T-T\Pi_N\|$, the finite restricted condition or effective condition, and show why the cutoff is not necessarily the best rank-$3N$ singular-value truncation. Do not assign a finite inverse condition number to the full compact injective operator.
4. Give the exact finite noisy inverse, or all least-squares solutions and the minimum-norm one. State separately the noiseless truth, the identifiable minimum-norm target and the noisy algebraic reference used to verify software.
5. Prove truncation-bias/noise bounds and give their exact squared-error expressions and the fixed $N=4$ values. Distinguish error against the identifiable target from error against the original truth, and finite-prefix residual from the full infinite-data residual.
6. Run the public reference for all three sizes. Report actual CG/PCG or projected-solve results, true residual, backward error, forward comparison against the independent block formula, iterations/operator calls and measured timing/memory fields. Explain solver rejection and equality/zero cases.
7. Complete and run the REP/TEN/NUM checkpoints, including actual ALS, Arnoldi/GMRES, range probes and polynomial evaluation; connect a symmetry/tensor invariant to an actual computed check.
8. Explain which general operator/representation/tensor/numerical theorems were proved, which were imported, and what this finite computation cannot establish. Give a failure or boundary relevant to each strand.
9. Retain dated first/comparison/revised files, actual code/output, tolerances and exposure. State a justified next method or repair for any failure; a public comparison and passing a local reference are not learner grades.

### LA-SPEC-P001 — primary problem

Use $(\alpha,\mu)=(1,2)$ and all nine deliverables. The original truth is nonzero in both trivial and standard sectors. Start from formulas and proofs before running the code.

### LA-SPEC-P001 — complete nine-part model

1. $B_2=2P_0+P_1$ has eigenvalues2 on the trivial line and1 on its standard plane. Thus $T$ is positive/self-adjoint, norm2, compact by finite-block approximation, and injective. Its range is dense and nonclosed, since finite sequences are reached but the high-index unit vectors are compressed to zero; choose standard-sector $n^{-3/2}$ data to see non-surjectivity. Spectrum is $\{2/n,1/n:n\ge1\}\cup\{0\}$; coincident values collect the respective sector dimensions. Zero is continuous spectrum, not an eigenvalue. The inverse on the range is unbounded; the full inverse condition is infinite.
2. The $S_3$ permutation action splits $\mathbb C^3=\mathbb Cu\oplus u^\perp$, trivial plus standard, with projectors $P_0,P_1$. They commute with every permutation and $B_2$. The tensor action is $I\otimes\rho(g)$; $T=D_1\otimes B_2$ commutes with it. No sign sector occurs in this permutation representation. The representation theory is finite in the second slot; the index space makes the operator genuinely infinite-dimensional.
3. $\|T-T\Pi_N\|=2/(N+1)$, attained by $e_{N+1}\otimes u/\sqrt3$. On $H_N$, $\|A_N\|=2$, smallest singular value $1/N$, $\kappa_2(A_N)=2N$; at4 these are2,1/4,8 and tail norm2/5. Retaining the standard value1/4 while discarding the trivial value2/5 proves the index cutoff is not best rank12. The finite condition number says nothing about a bounded full inverse.
4. For each retained block, $\widehat x_n=n(P_0/2+P_1)b_n^\delta$. The true noiseless block is $n^{-2}v$; the noisy algebraic reference adds only $\delta m(P_0e_1/2+P_1e_1)$ at$m=4$. Here $P_0e_1=u/3$, so that added vector is $\delta(10/3,-2/3,-2/3)$. The solution is unique on $H_N$, while extending the truncated operator to $H$ would allow arbitrary tail vectors. Verification compares numerical output to this finite noisy reference, not to an unobservable full truth.
5. Orthogonal index supports separate retained noise from omitted truth. Writing $S_N=\sum_{n>N}n^{-4}$, the squared reconstruction error against $x$ is $5S_N+(3/4)\delta^2m^2$ for $N\ge m$, hence $5S_4+12/10^6$ at4. The factor $3/4=1/(3\mu^2)+2/3$ follows from orthogonal trivial/standard components of $B_\mu^{-1}e_1$. Integral comparison gives $1/[3(N+1)^3]<S_N<1/(3N^3)$, strict for finite $N$; at4 use1/375 and1/192. The exact noisy finite solution has prefix residual0; its full-data residual consists of omitted $b$ with squared norm $\|2u+w\|^2\sum_{n>N}n^{-6}=14\sum_{n>N}n^{-6}$. A floating-point solver adds its actual prefix residual. Measurement noise, truncation and arithmetic error are different terms. For the separate sharp family $m=N$, noise amplification is proportional to $N$, which is not the fixed-noise-index scaling experiment.
6. Unpreconditioned CG is admissible on this SPD restriction. PCG uses $M_N=D_{1,N}\otimes I$, giving preconditioned eigenvalues2 and1; exact arithmetic takes at most2 steps, fewer if only one active sector exists. Actual binary64 counts and recomputed residuals come from the run. With zero data the correct output is zero in zero steps; no relative residual divides by zero. The code prints finite $\kappa_N$, true relative residual, normwise backward error, finite noisy forward comparison, operator calls, timing and payload/heap snapshots. It does not assert exact two-step binary64 termination or empirical speedup in advance.
7. The symmetry matrices preserve $G$, the tensor example has the stated invariant decomposition, and ALS produces residual squares7,15/4,33/10,168/85. The GMRES restart stays at0, full Arnoldi reaches the solution, and range-error squares are72/13,3492/793,9 for the stated probes. The polynomial product error is $(c^2+s^2-1)I$. These exact answers are separate checks against actual public program output.
8. Compactness/spectrum/inverse assertions are proved on the infinite space; finite residuals alone would not prove them. General compact spectral and finite-group completeness were proved above; general unbounded PVM and Gaussian tails remain imported. Tensor CP best-rank failure and a zero-overlap range probe show limits of matrix analogies and iteration. Good software on this instance does not prove a general stable matrix exponential, a full Dixon–Schneider algorithm or a large-scale speedup.
9. The complete result is a conditional mathematical/finite-computational certificate with the exact declared data and run, plus retained revisions/exposure. If original residual and recursive residual disagree, keep both and use the recomputed one for the claim; if symmetry or definiteness checks fail, repair the operator/solver choice rather than hiding the failure. No whole-book or learner-mastery claim follows.

### LA-SPEC-P002 — changed problem

Change only to $(\alpha,\mu)=(1,0)$, retaining the original truth/data-generation/noise declarations. Identify what can be recovered, compute the incompatible-data residual floor, and give full solution sets. The public program must reject full-space SPD-CG and explicitly name its different projected problem.

### LA-SPEC-P002 — complete nine-part model

1. $T=D_1\otimes P_1$ is positive semidefinite, self-adjoint and compact, norm1. Kernel is the whole $\ell^2\otimes\mathbb Cu$, infinite-dimensional. The closure of its range is the standard isotypic space, and its range there is dense/nonclosed, not all that space. Spectrum is $\{1/n:n\ge1\}\cup\{0\}$, with multiplicity2 at each nonzero value; zero is now an eigenvalue as well as an accumulation point. There is no inverse on the full space. The inverse restricted to the compatible standard range is unbounded.
2. The same projectors and permutation action commute with $T$, but every trivial component is removed. Original $x_n=n^{-2}(u+w)$ and $x_n+n^{-2}u$ generate the same noiseless data. This is loss of identifiability, not a reason to change the original truth silently. The noiseless minimum-norm target is $x_n^\dagger=n^{-2}w$, a distinct object.
3. Tail operator norm is $1/(N+1)$, attained by a unit standard vector at index$N+1$. Full finite $A_N$ is singular and has no finite inverse condition number. On $P_1H_N$ the effective condition is$N$, at4 equal4. $T\Pi_N$ on the full infinite space additionally kills the tail. As an approximation its rank is2N, not3N; the zero sector must remain visible.
4. Decompose observed noise: $P_0e_1=u/3$, $P_1e_1=(2,-1,-1)/3$. Full observed data are incompatible, because the trivial component $\delta e_m\otimes u/3$ is not in the range. The minimum residual is $\delta/\sqrt3$, attained by fitting its standard part, which is in the range for these data. All infinite least-squares solutions are $x_n^\dagger+\delta mP_1e_1\,1_{n=m}+z_nu$, with $(z_n)\in\ell^2$; the unique minimum-norm one sets$z_n=0$. On $H_N$, use the same formula for$n\le N$ with arbitrary $N$ trivial coefficients. Its added retained standard vector is $\delta(8/3,-4/3,-4/3)$ at$m=4$. The code solves this declared projected SPD problem, not the incompatible original equation.
5. Against the identifiable **noiseless minimum-norm target** the index reconstruction error squared is $2S_N+(2/3)\delta^2m^2$, giving $2S_4+(32/3)/10^6$. Against the **original truth**, add irrecoverable kernel energy $3\sum_{n\ge1}n^{-4}$, not merely a tail term. These orthogonal pieces cannot cancel. The exact finite-prefix original residual norm is$\delta/\sqrt3$; the full infinite-data residual squared is $\delta^2/3+2\sum_{n>N}n^{-6}$. The projected residual is0 exactly, a different quantity. Integral bounds for$S_N$ remain as in the primary; noise does not justify pretending the kernel truth was recovered.
6. Full-space SPD solver input is rejected because$\mu=0$. On $P_1H_N$ the preconditioned matrix is the identity, so one exact step suffices for nonzero data; actual projected residual and the original residual floor are both printed. The measured finite forward comparison uses the unique minimum-norm **noisy** projected reference, not the unrecoverable original truth. A claimed original residual below the proven floor would expose a wrong residual definition or arithmetic/reporting bug.
7. Repeat the required REP/TEN/NUM software/checkpoints; no field or tensor theorem changed when an operator eigenvalue became zero. Maschke still holds over$\mathbb C$; zero$\mu$ is not the characteristic2 counterexample. A zero ALS denominator and a zero CG curvature are different failures requiring their own explanations.
8. The compact theorem permits an infinite kernel. Isotypic projection records it exactly; a finite solve in a quotient or compatible subspace does not certify the discarded sector. General PVM imports and numerical probability limits remain unchanged. Changed recovery has a new explicitly named target because the original problem lost identifiability, not because the course's scope was narrowed.
9. Keep the rejected call, projected problem statement, both residuals, all-solution description, original-truth limit and revised files. Appropriate repair is to obtain information about the kernel or declare a regularizing convention; reporting the minimum-norm choice as a measured kernel value is unjustified.

### LA-SPEC-R001 — later-return problem

From a fresh dated page use $(\alpha,\mu)=(2,1/2)$, still with fixed noise index4. Reconstruct all nine deliverables and compare with both earlier cases. Public models remain accessible; record prior exposure rather than calling this an unseen assessment.

### LA-SPEC-R001 — complete nine-part model

1. $T=D_2\otimes(\tfrac12P_0+P_1)$ is positive/self-adjoint, injective, compact, norm1, with dense nonclosed range and unbounded inverse. Spectrum is $\{1/(2n^2),1/n^2:n\ge1\}\cup\{0\}$. The sector eigenvalues have their actual multiplicities; zero is continuous, not an eigenvalue. Faster decay strengthens the instability of inversion, not the boundedness of the inverse.
2. Trivial/standard projectors and tensor symmetry are the same, now with eigenvalues1/2 and1. Both sectors are identifiable from exact data, unlike the changed case. The original truth and noiseless minimum-norm target coincide again because the operator is injective.
3. Tail norm is $1/(N+1)^2$, at4 equal1/25. On $H_N$, smallest singular value $1/(2N^2)$, largest1, condition$2N^2$, at4 equal32. Retaining the trivial value1/32 but dropping the standard value1/25 shows index cutoff rank12 is not best SVD truncation. The extended finite-rank operator retains a tail kernel and the infinite inverse condition is still infinite.
4. Finite noisy inverse is $\widehat x_n=n^2(2P_0+P_1)b_n^\delta$. At$m=4$ the noise addition is $\delta m^2(2P_0e_1+P_1e_1)=\delta(64/3,16/3,16/3)$. It is unique on$H_N$. This direct block formula is the independent reference for the numerical forward comparison; it is not an estimate obtained from the solver's own residual.
5. Squared error against the original truth is $5S_N+2\delta^2m^4$, hence $5S_4+512/10^6$. The same tail bounds hold because the truth was held fixed, while the amplified noise is larger. Exact prefix residual0; full-data residual squared is $\|\tfrac12u+w\|^2\sum_{n>N}n^{-8}=(11/4)\sum_{n>N}n^{-8}$. The separate sharp family$m=N$ has growth$N^2\delta\sqrt2$; the actual fixed-index scaling run keeps that noise term constant while decreasing truncation bias. Neither curve is a stochastic confidence claim.
6. CG/PCG are admissible on the finite restriction. With $M_N=D_{2,N}\otimes I$, transformed eigenvalues1/2 and1 again give at most2 exact steps. Actual timing/iterations may differ from the primary and are recorded; no promised speedup follows. Higher finite condition makes the original residual-to-forward-error comparison less favorable, even though the block preconditioner remains effective. Zero$\delta$ removes the noise term; zero data stop immediately, and a negative$\mu$ would invalidate SPD energy minimization rather than extend these guarantees.
7. Reproduce the symmetry/tensor/algorithm checks and actual program outputs from the fresh attempt. A correct covariance check is $R^TGR=G$ in the representation basis; a correct ALS comparison reconstructs the tensor, not just arbitrarily rescaled factors; the directed-shift probe detects the Fourier sign hidden by a symmetric Laplacian. Range probes and polynomial certificates retain their exact declared inputs and fields.
8. The general operator and finite-group proofs remain valid under the stated hypotheses. The explicit spectral-pollution example in RA44 explains why unrelated Galerkin eigenvalues need a convergence theorem; our diagonal-block tail estimate is such an explicit approximation certificate for this family. No finite run proves the full PVM theorem, identifies an arbitrary infinite tensor rank, or supplies Gaussian failure probabilities.
9. Preserve the changed target distinction when comparing all three accounts. Record actual code, output, measured fields, tolerances and source exposure; revise the first incorrect statement rather than replacing the original file. Next methods can include justified spectral cutoff/Tikhonov choices with a specified error/prior model or a prepared operator/representation continuation. This selected working course awards no qualification or automated mastery status.

## Required public software and output comparison

Save this whole JavaScript block as your own `.mjs` file and run it with Node. It is a bounded public reference, not a site code executor. Keep the actual JSON output, runtime version and any modification with your task files. Reconstruct at least one solver update and the ALS update from the proofs; inspect the code's validation, zero cases and stopping rule. Then run all printed sizes/forms and all the checkpoint probes. Report the actual measured fields without replacing them with hypothetical timing numbers.

The program recomputes true residuals at every iteration and counts those operator applications. These are true residuals of the declared finite assembled system; the full infinite-data residual also has the proved tail. It checks a requested relative residual of $10^{-11}$, reports a separate original residual for the projected changed solve, and returns a failure status rather than claiming convergence at its cap. Setup is reused for the two solver comparisons at each size. `solveMs` includes solver initialization, iterations and final numerical verification, with `iterationLoopMs` reporting the loop alone; JSON formatting/export is outside that timing. `heapUsed`/`arrayBuffers` are instantaneous process snapshots, including other runtime allocations, not an algorithm-specific peak; `retainedTypedPayloadBytes` counts only b/reference/x/d before report conversion, excluding additional live work arrays r/z/p/Ap and residual temporaries. These measured fields and a declared payload estimate satisfy a bounded memory report without claiming an unmeasured peak or parallel scalability. Accuracy and operation counts must be considered with timing. Run-to-run variation and process overhead prevent a fixed timing key.

```javascript
// LA-SPEC-REFERENCE-BEGIN
const configuration = {
  "forms": [
    {"id":"P001","alpha":1,"mu":2},
    {"id":"P002","alpha":1,"mu":0},
    {"id":"R001","alpha":2,"mu":0.5}
  ],
  "sizes": [8,16,32],
  "noiseIndex": 4,
  "delta": 0.001,
  "relativeTolerance": 1e-11,
  "iterationCapPerN": 30,
  "tensor": [1,0,0,0,0,0,0,2],
  "initialFactors": [[1,1],[1,1],[1,1]],
  "gmresMatrix": [[0,1],[-1,0]],
  "gmresRhs": [1,0],
  "rangeDiagonal": [3,2,1],
  "rangeGood": [1,1,0],
  "rangeMissing": [0,0,1],
  "representationR": [[0,-1],[1,-1]],
  "representationS": [[-1,1],[0,1]],
  "representationGram": [[2,-1],[-1,2]],
  "directedFourierVector": [[1,0],[0,-1],[-1,0],[0,1]],
  "polynomialDegree": 12
};
function dot(a,b) { return a.reduce((s,x,i)=>s+x*b[i],0); }
function norm(a) { return Math.hypot(...a); }
function plus(a,b,t=1) { return Float64Array.from(a,(x,i)=>x+t*b[i]); }
function blockProject(a) {
  const out=Float64Array.from(a);
  for(let j=0;j<a.length;j+=3) { const m=(a[j]+a[j+1]+a[j+2])/3; for(let k=0;k<3;k++)out[j+k]-=m; }
  return out;
}
function buildProblem(form,N,cfg) {
  if(!Number.isInteger(N)||N<cfg.noiseIndex||N>32)throw Error('unsupported size');
  if(!Number.isFinite(form.alpha)||form.alpha<=0||!Number.isFinite(form.mu)||form.mu<0)throw Error('unsupported operator');
  if(!Number.isInteger(cfg.noiseIndex)||cfg.noiseIndex<1||!Number.isFinite(cfg.delta)||cfg.delta<0)throw Error('invalid noise');
  const d=Float64Array.from({length:N},(_,i)=>(i+1)**(-form.alpha));
  const b=new Float64Array(3*N);
  for(let n=1;n<=N;n++) { const f=n**(-form.alpha-2); b.set([(form.mu+1)*f,form.mu*f,(form.mu-1)*f],3*(n-1)); }
  b[3*(cfg.noiseIndex-1)]+=cfg.delta;
  function apply(x) {
    const out=new Float64Array(x.length);
    for(let n=0;n<N;n++) { const j=3*n,m=(x[j]+x[j+1]+x[j+2])/3; for(let k=0;k<3;k++)out[j+k]=d[n]*(x[j+k]+(form.mu-1)*m); }
    return out;
  }
  function inverse(rhs) {
    const out=new Float64Array(rhs.length);
    for(let n=0;n<N;n++) { const j=3*n,m=(rhs[j]+rhs[j+1]+rhs[j+2])/3;
      for(let k=0;k<3;k++)out[j+k]=(rhs[j+k]-m+(form.mu===0?0:m/form.mu))/d[n]; }
    return out;
  }
  return {form,N,d,b,apply,inverse};
}
function solve(problem,cfg,preconditioned,projected=false) {
  const {form,N,d,b,apply,inverse}=problem;
  if(form.mu===0&&!projected)throw Error('full-space SPD solver rejected: mu=0');
  if(!(cfg.relativeTolerance>0&&cfg.relativeTolerance<1)||!Number.isInteger(cfg.iterationCapPerN)||cfg.iterationCapPerN<1)throw Error('invalid stopping rule');
  const totalStart=performance.now();
  const rhs=projected?blockProject(b):b;
  const target=cfg.relativeTolerance*norm(rhs);
  let calls=0;
  const A=x=>{calls++;return apply(x);};
  const pre=r=>preconditioned?Float64Array.from(r,(x,i)=>x/d[Math.floor(i/3)]):Float64Array.from(r);
  let x=new Float64Array(rhs.length),r=Float64Array.from(rhs),z=pre(r),p=Float64Array.from(z),rz=dot(r,z);
  let iterations=0,status=norm(r)===0?'converged':'iteration-cap',gap=0;
  const start=performance.now();
  for(let k=0;status!=='converged'&&k<cfg.iterationCapPerN*N;k++) {
    const Ap=A(p),curvature=dot(p,Ap);
    if(!(curvature>0)||!Number.isFinite(curvature)){status='curvature-breakdown';break;}
    const alpha=rz/curvature;
    x=plus(x,p,alpha); r=plus(r,Ap,-alpha); iterations++;
    const trueR=plus(rhs,A(x),-1); gap=Math.max(gap,norm(plus(trueR,r,-1)));
    if(norm(trueR)<=target){status='converged';break;}
    let restart=false;
    if(norm(r)<=target){r=trueR;restart=true;}
    z=pre(r); const next=dot(r,z);
    if(!(next>0)||!Number.isFinite(next)){status='residual-breakdown';break;}
    p=restart?Float64Array.from(z):plus(z,p,next/rz); rz=next;
  }
  const iterationLoopMs=performance.now()-start;
  const originalResidual=plus(b,A(x),-1),projectedResidual=projected?blockProject(originalResidual):originalResidual;
  const reference=inverse(rhs),error=norm(plus(x,reference,-1));
  const bnorm=norm(b),rhsnorm=norm(rhs),anorm=Math.max(form.mu,1);
  const solveMs=performance.now()-totalStart;
  return {status,iterations,operatorCalls:calls,solveMs,iterationLoopMs,timePerIterationMs:iterations?iterationLoopMs/iterations:null,
    originalRelativeResidual:bnorm?norm(originalResidual)/bnorm:norm(originalResidual),
    projectedRelativeResidual:rhsnorm?norm(projectedResidual)/rhsnorm:norm(projectedResidual),
    originalResidualNorm:norm(originalResidual),recursiveResidualGap:gap,
    backwardError:norm(originalResidual)/(anorm*norm(x)+bnorm||1),
    finiteNoisyRelativeForwardError:norm(reference)?error/norm(reference):error,
    finiteCondition:form.mu===0?null:anorm*N**form.alpha/Math.min(form.mu,1),
    effectiveStandardCondition:form.mu===0?N**form.alpha:null,
    retainedTypedPayloadBytes:b.byteLength+reference.byteLength+x.byteLength+d.byteLength,
    x:Array.from(x)};
}
function tensorSweep(tensor,initial) {
  if(tensor.length!==8||initial.length!==3||initial.some(v=>v.length!==2))throw Error('2x2x2 real fixture required');
  const factors=initial.map(v=>v.slice());
  const residual=()=>{let s=0;for(let i=0;i<2;i++)for(let j=0;j<2;j++)for(let k=0;k<2;k++)s+=(tensor[4*i+2*j+k]-factors[0][i]*factors[1][j]*factors[2][k])**2;return s;};
  const trace=[{factors:factors.map(v=>v.slice()),residualSquared:residual()}];
  for(let mode=0;mode<3;mode++) {
    const others=[0,1,2].filter(i=>i!==mode),den=dot(factors[others[0]],factors[others[0]])*dot(factors[others[1]],factors[others[1]]);
    if(!(den>0))throw Error('zero ALS denominator; choose a declared new initialization');
    const update=[0,0];
    for(let i=0;i<2;i++)for(let j=0;j<2;j++)for(let k=0;k<2;k++){const ix=[i,j,k];update[ix[mode]]+=tensor[4*i+2*j+k]*factors[others[0]][ix[others[0]]]*factors[others[1]][ix[others[1]]]/den;}
    factors[mode]=update;trace.push({factors:factors.map(v=>v.slice()),residualSquared:residual()});
  }
  return trace;
}
function smallKrylov(A,b) {
  const mv=x=>A.map(row=>dot(row,x));
  let x=[0,0];const restart=[];
  for(let j=0;j<3;j++){const r=Array.from(plus(b,mv(x),-1)),Ar=mv(r),den=dot(Ar,Ar);if(!den)break;x=Array.from(plus(x,r,dot(r,Ar)/den));restart.push({x:x.slice(),residual:norm(plus(b,mv(x),-1))});}
  const beta=norm(b); if(!beta)throw Error('nonzero Arnoldi start required');
  const Q=[b.map(v=>v/beta)],H=Array.from({length:3},()=>[0,0]);
  for(let j=0;j<2;j++){let v=mv(Q[j]);for(let pass=0;pass<2;pass++)for(let i=0;i<=j;i++){const h=dot(Q[i],v);H[i][j]+=h;v=Array.from(plus(v,Q[i],-h));}H[j+1][j]=norm(v);if(H[j+1][j]<1e-14)break;Q.push(v.map(z=>z/H[j+1][j]));}
  if(Q.length!==2)throw Error('this full Krylov fixture requires dimension2');
  const determinant=H[0][0]*H[1][1]-H[0][1]*H[1][0];if(!determinant)throw Error('singular small least-squares problem');
  const y=[beta*H[1][1]/determinant,-beta*H[1][0]/determinant];
  const full=Q[0].map((v,i)=>y[0]*v+y[1]*Q[1][i]);
  let defect=0;for(let j=0;j<2;j++){const rhs=Q[0].map((v,i)=>v*H[0][j]+Q[1][i]*H[1][j]);defect=Math.max(defect,norm(plus(mv(Q[j]),rhs,-1)));}
  return {restart,Q,H,full,fullResidual:norm(plus(b,mv(full),-1)),arnoldiDefect:defect,orthogonalityError:Math.abs(dot(Q[0],Q[1]))};
}
function rangeProbe(diagonal,omega,power) {
  const y=diagonal.map((a,i)=>a**(2*power+1)*omega[i]),length=norm(y);if(!length)throw Error('zero range sample');
  const q=y.map(v=>v/length),E=diagonal.map((_,i)=>diagonal.map((a,j)=>((i===j?1:0)-q[i]*q[j])*a));
  const G=diagonal.map((_,i)=>diagonal.map((__,j)=>E.reduce((s,row)=>s+row[i]*row[j],0)));
  const trace=G.reduce((s,row,i)=>s+row[i],0),traceSquare=G.reduce((s,row)=>s+dot(row,row),0),product=(trace*trace-traceSquare)/2;
  const spectralSquared=(trace+Math.sqrt(Math.max(0,trace*trace-4*product)))/2;
  return {q,E,frobeniusSquared:trace,spectralSquared,orthogonalityError:Math.abs(dot(q,q)-1)};
}
function polynomialProbe(A,degree) {
  if(degree!==12)throw Error('reference degree12 is required');
  const multiply=(B,C)=>B.map(row=>C[0].map((_,j)=>row.reduce((s,v,k)=>s+v*C[k][j],0)));
  const evaluate=B=>{let term=[[1,0],[0,1]],sum=[[1,0],[0,1]];for(let k=1;k<=degree;k++){term=multiply(term,B).map(row=>row.map(v=>v/k));sum=sum.map((row,i)=>row.map((v,j)=>v+term[i][j]));}return sum;};
  const positive=evaluate(A),negative=evaluate(A.map(row=>row.map(v=>-v))),product=multiply(positive,negative);
  return {positive,negative,productDefect:product.map((row,i)=>row.map((v,j)=>v-(i===j?1:0)))};
}
function symmetryProbe(cfg) {
  const multiply=(A,B)=>A.map(row=>B[0].map((_,j)=>row.reduce((s,v,k)=>s+v*B[k][j],0)));
  const transpose=A=>A[0].map((_,j)=>A.map(row=>row[j]));
  const difference=(A,B)=>Math.max(...A.flatMap((row,i)=>row.map((v,j)=>Math.abs(v-B[i][j]))));
  const {representationR:R,representationS:S,representationGram:G}=cfg,I=[[1,0],[0,1]],R2=multiply(R,R);
  const covariance=[R,S].map(A=>difference(multiply(multiply(transpose(A),G),A),G));
  const tensor=(A,B)=>A.flatMap(row=>B.map(brow=>row.flatMap(v=>brow.map(w=>v*w))));
  const tensorG=tensor(G,G),tensorCovariance=[R,S].map(A=>{const K=tensor(A,A);return difference(multiply(multiply(transpose(K),tensorG),K),tensorG);});
  const directed=cfg.directedFourierVector,shifted=[directed.at(-1),...directed.slice(0,-1)],iv=directed.map(([a,b])=>[-b,a]);
  return {covariance,tensorCovariance,groupRelations:[difference(multiply(R2,R),I),difference(multiply(S,S),I),difference(multiply(multiply(S,R),S),R2)],
    shiftedFourierVector:shifted,iTimesFourierVector:iv,directedShiftDefect:difference(shifted,iv)};
}
function runReference(cfg) {
  const results=[];
  for(const form of cfg.forms)for(const N of cfg.sizes){
    const before=process.memoryUsage(),start=performance.now(),problem=buildProblem(form,N,cfg),setupMs=performance.now()-start;
    const methods=[];let rejection=null;
    if(form.mu===0){try{solve(problem,cfg,true,false);}catch(error){rejection=error.message;}methods.push({method:'PROJECTED-PCG',...solve(problem,cfg,true,true)});}
    else{methods.push({method:'CG',...solve(problem,cfg,false)});methods.push({method:'PCG',...solve(problem,cfg,true)});}
    const after=process.memoryUsage();results.push({id:form.id,N,noiseIndex:cfg.noiseIndex,setupMs,rejection,heapBefore:before.heapUsed,heapAfter:after.heapUsed,arrayBuffersAfter:after.arrayBuffers,methods});
  }
  return {relativeTolerance:cfg.relativeTolerance,results,als:tensorSweep(cfg.tensor,cfg.initialFactors),krylov:smallKrylov(cfg.gmresMatrix,cfg.gmresRhs),
    range:[rangeProbe(cfg.rangeDiagonal,cfg.rangeGood,0),rangeProbe(cfg.rangeDiagonal,cfg.rangeGood,1),rangeProbe(cfg.rangeDiagonal,cfg.rangeMissing,1)],
    polynomial:polynomialProbe(cfg.gmresMatrix,cfg.polynomialDegree),symmetry:symmetryProbe(cfg)};
}
globalThis.linearSpecialistReference={runReference,buildProblem,solve,tensorSweep,smallKrylov,rangeProbe,polynomialProbe,symmetryProbe,configuration};
const report=runReference(configuration);
console.log(JSON.stringify(report,null,2));
// LA-SPEC-REFERENCE-END
```

### Software full comparison key and repairs

The nine size/form records must use exactly the printed fixed noise index4. Primary finite conditions for8,16,32 are16,32,64; return conditions are128,512,2048. The changed full condition is undefined/infinite, reported `null`, with effective standard conditions8,16,32. Its rejected full-space call is visible, and its original residual norm should agree with $\delta/\sqrt3$ to the declared numerical comparison budget even when projected residual is small. All valid solvers must actually return `converged` at their recomputed projected/original target, not merely print an iteration cap. Compare every component with the independent closed-form noisy solution; report a relative forward discrepancy no larger than $10^{-7}$ for these bounded data. Use $10^{-12}$ absolute budget for scalar/tensor/checkpoint comparisons, $10^{-12}$ for small-matrix orthogonality/Arnoldi defects and $10^{-12}$ absolute difference against the exact rational polynomial. These are checks for this public binary64 reference, not proved universal roundoff constants. A failure is retained and diagnosed; it is not rounded into a pass.

The full ALS trace and actual factors must match the exact TEN model within that budget. GMRES(1)'s three iterates remain zero with residual1; the full Krylov answer is $(0,1)$, residual0 in exact arithmetic, with the printed $Q,H$ relation and orthogonality. Range-projection spectral squares match72/13,3492/793,9; their third ordered singular value is0, and their spectral-error interpretation relies on this rank-two residual, not an unexplained Frobenius/spectral substitution. The polynomial matrices match the exact $cI\pm sA$ and their exact product-defect formula. The oracle checks these against independently derived rational identities and actual extracted code; it does not use the program's own output as its mathematical answer key.

For performance, keep actual setup/solve time, time-per-iteration, iterations/operator calls, the retained typed payload and process snapshots. Positive timings are measurements on your runtime; no specific speed ratio, peak-memory result, million-unknown scalability or parallel throughput is a full-key answer. The program's fixed sizes are deliberately small and bounded; the native project remains a real implementation/verification/performance exercise at this declared scale. Report an alternative such as preconditioned GMRES for non-SPD data or a justified rank/regularization change, with its new assumptions. The existing general source algorithms and limits are not upgraded by these bounded outputs.

## Final repair and continuation

Before calling your written work complete, compare every required native question, new proof, checkpoint and all nine parts of each certificate with its full feedback. Repair the first invalid domain, field, tensor type, inference or calculation; keep the original attempt and exposure statement. The operator model must distinguish a dense range from surjectivity, a form moment from an operator domain, and strong from norm convergence. The symmetry model must distinguish complex complete reducibility from modular failure. Tensor work must distinguish algebraic products, Hilbert completion, CP rank and Tucker rank. Numerical work must distinguish a theorem, an exact finite certificate, an actual execution and a performance measurement. These are the course's claims, not a new grading or learner-record system.
