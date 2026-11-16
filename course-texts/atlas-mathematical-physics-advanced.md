
# Analytical Mechanics, Fields and Quantum Thermal Structure

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](#/courses/atlas-mathematical-physics-advanced), based on [Fields and Continua: Balance, Stress, Flow, and Waves](#/books/fields-fluids-continuum). Its chapters, exercises and preparation links form the present course route.

Preparation courses: [Analytical mechanics](#/courses/course-mechanics) · [Mathematical quantum mechanics](#/courses/course-quantum-mechanics) · [Real analysis](#/courses/course-lucent-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A change of coordinates can uncouple classical equations, reveal a quantum spectrum and simplify a thermal trace. It cannot remove a physical boundary or turn a free coordinate into a confined oscillator. This course develops that distinction across analytical mechanics, PDE, quantum theory, statistical mechanics and relativity foundations.

The required sequence below joins substantial selected native chapters to new readiness teaching and a complete two-field primary, changed and return portfolio. The [mechanics and fields core](#/courses/atlas-mechanics-fields-core) is preparation. The [standard physics spine](#/courses/atlas-mathematical-physics-standard) and its public thermal-qubit portfolio retain their existing identities; the present spatial, infinite-level oscillator work is additional teaching. The three existing advanced curriculum offerings keep their original scopes and editions. No whole working book becomes a qualified release through this course.

**Preparation.** Bring multivariable/vector calculus, integration by parts, second-order ODEs and matrix exponentials, real symmetric eigenproblems, complex inner products and finite probability. Know the core's difference between a field and a modal approximation. Section 1 releases the extra complex, variational, weak-space and infinite-sum dependencies. Readiness means repairing a particular dependency, not accumulating a diagnostic score. General relativity, interacting QFT and general nonlinear/rough PDE constructions remain specialist continuations; the relativity foundations taught here are Lorentz geometry, wave covectors, proper time and energy-momentum.

**Required work and records.** Complete ADV-S01–ADV-S08 in order, including their stated source exercises, the local readiness tasks and the new ADV-P, ADV-C and ADV-R. All keys and code are public. study time depends on the selected reading, attempts and corrections; no duration, credit or learner observation is inferred. Keep separate dated first, comparison and revised files, for example `2026-11-04-adv-p-first.txt`, `2026-11-04-adv-p-comparison.txt` and `2026-11-04-adv-p-revised.txt`, using the actual date. Preserve first work before comparison, name all help and prior model exposure, and retain the first unsupported inference when revising. A mutable reading note is not an immutable worksheet portfolio. Study checkmarks, public models and self-review do not constitute graded Practice evidence, unseen assessment or certified mastery. A later date does not verify a delay or retention.

## 1. ADV-S01: release the mathematical dependencies

Attempt all twelve questions of the [complex-linear-algebra diagnostic](#/books/two-state-quantum-mechanics), then its complete answers. In particular, the inner product conjugates its first slot: $(1,i)^\dagger(i,1)=0$, while $(1,i)^T(1,i)=0$ is not a norm. Normalize $(1,1-i)$ by $\sqrt3$, verify $P^2=P=P^\dagger$ for a normalized rank-one projector, and expand a tensor product in the declared basis order. An active unitary changes a state relative to fixed observables; a passive basis change transforms both. Use the [quantum/statistical diagnostic](#/books/quantum-statistical-structures) Questions 1–8 as a second source check before its operator and ensemble chapters. Both have public feedback; their numerical bands do not replace dependency-specific repair.

For the Gaussian integral used below, nonnegative double integration and polar coordinates give $I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}dxdy=2\pi\int_0^\infty re^{-r^2}dr=\pi$. Since $I>0$, $I=\sqrt\pi$; scaling gives $\int e^{-ax^2}dx=\sqrt{\pi/a}$ for $a>0$. This supplies the normalization and classical partition integrals rather than assuming a numerical quadrature proves them.

Write these four readiness responses before their keys.

**R1 — boundary variation.** For $J[u]=\int_0^1(u')^2/2$, $u(0)=0$, compare fixed $u(1)=1$ with a free endpoint. Derive the boundary term, the candidate and whether it is a minimum.

**Key.** $\delta J=[u'\eta]_0^1-\int u''\eta$. Fixed endpoint data give $u=x$; writing $u=x+v$, $v(0)=v(1)=0$, gives $J=1/2+\int(v')^2/2$, proving the unique minimum. For a free right value, arbitrary $\eta(1)$ imposes $u'(1)=0$; together with $u''=0,u(0)=0$ this gives the unique minimizer zero. Stationarity alone would not prove this: $-x^2$ has a stationary maximum.

**R2 — mass and canonical coordinates.** If $M$ is symmetric positive definite and $K$ symmetric, why does $Kz=\omega^2Mz$ require more than diagonalizing $K$ alone?

**Key.** Set $y=M^{1/2}q$ so kinetic energy becomes $\dot y^T\dot y/2$. The symmetric matrix $M^{-1/2}KM^{-1/2}$ has an orthonormal eigenbasis $U$. The canonical coordinates are $Q=U^TM^{1/2}q$, $P=U^TM^{-1/2}p$, since $p^Tdq=P^TdQ$. Transforming coordinates without the corresponding momenta generally changes Hamilton's structure. Positive definiteness gives the unique positive square root through the real symmetric spectral theorem; it is not assumed for an arbitrary matrix.

**R3 — infinite Gibbs sum.** For $0<r<1$ show $\sum r^n$, $\sum nr^n$ and $\sum n^2r^n$ converge. May a finite truncation prove that they converge at $r=1$?

**Key.** The geometric series sums to $(1-r)^{-1}$. On each compact $0\le r\le r_0<1$, differentiated series are uniformly dominated by polynomial multiples of $r_0^n$ (or by a slightly larger geometric ratio), so differentiation is justified. The first two weighted sums are $r/(1-r)^2$ and $r(1+r)/(1-r)^3$. At $r=1$ terms of the unweighted series do not tend to zero. Every finite truncation still normalizes, so finite normalization cannot establish the infinite state.

**R4 — weak versus classical.** What must accompany $\int u'v'=\int fv$ before it is a well-posed Poisson problem?

**Key.** Declare the interval/domain, data class, trial/test spaces and boundary conditions. On a bounded interval with zero endpoint trace, use $u,v\in H_0^1$, meaning square-integrable functions with square-integrable weak derivative and zero trace. For $f\in L^2$, Cauchy–Schwarz and the zero-end Poincare inequality bound the functional and make $\int u'v'$ coercive. Lax–Milgram is an **imported Hilbert-space theorem** here: a bounded coercive bilinear form and bounded linear functional give a unique weak solution. It does not by itself give classical second derivatives, a numerical rate or a solution for incompatible Neumann data. The selected weak-theory source below supplies the exact applications and limitations; its definitions are not a proof of the general theorem.

The standard self-adjoint oscillator spectral theorem and Hermite completeness will also be imported explicitly. We prove the finite canonical transform, modal equations, new trace sums and tails; ladder algebra alone will not be called a full spectral construction.

## 2. ADV-S02: constrained motion, canonical structure and symmetry

Use these exact selections in order, attempting before each immediate full solution.

| Selection | Native work | Mathematical comparison |
| --- | --- | --- |
| ADV-S02a | [Constraints and Lagrange Multipliers](../books/action-symmetry-mechanics/constraints-and-lagrange-multipliers.md), Exercise 3 | Retain the full double-pendulum kinetic cross term and both nonlinear equations. Ideal holonomic constraints and independent coordinates matter. |
| ADV-S02b | [Hamilton–Jacobi Theory](../books/action-symmetry-mechanics/hamilton-jacobi-theory.md), Exercises 4–5 | Retain the polar Kepler Hamiltonian/cyclic angular momentum and the gravity Hamilton–Jacobi solution. A square-root momentum branch is local; turning points require branch changes. |
| ADV-S02c | [Symplectic Geometry](../books/action-symmetry-mechanics/symplectic-geometry.md), Exercises 1, 2 and 4 | Derive the canonical matrix condition and Poisson Leibniz rule in coordinates. The manifold discussion keeps its further geometric preparation. |
| ADV-S02d | [Lie Groups and Symmetry](../books/action-symmetry-mechanics/lie-groups-and-symmetry.md), Exercises 1–4 and its two-body reduction example | Antisymmetric generators, exponential rotations, angular momenta and their brackets; regular/free/proper hypotheses in the 12-to-6-dimensional reduction. |
| ADV-S02e | [Integrable Systems](../books/action-symmetry-mechanics/integrable-systems.md), oscillator action example and Exercises 3–5 | Distinguish $I=E/\omega$, Runge–Lenz conservation and its nonzero bracket, and the stated slow-parameter approximation. Regular compact connected invariant levels are needed for Liouville–Arnold. |

Here is the missing small-oscillation join from the nonlinear pendulum source. For equal masses $m$ and lengths $\ell$, expand near both downward angles zero, keeping quadratic kinetic/potential terms. Then

$$L_2=\frac{m\ell^2}{2}\dot\theta^T\begin{pmatrix}2&1\\1&1\end{pmatrix}\dot\theta-
\frac{mg\ell}{2}\theta^T\begin{pmatrix}2&0\\0&1\end{pmatrix}\theta.$$

The mass form has positive first minor and determinant one after scaling. Set $\lambda=\omega^2\ell/g$. The generalized characteristic determinant is $\lambda^2-4\lambda+2$, so $\lambda=2\mp\sqrt2$, with directions $(1,\pm\sqrt2)^T$. Their mass inner product is zero and their squared mass norms are $m\ell^2(4\pm2\sqrt2)$. Divide each raw vector by $\sqrt{m\ell^2(4\pm2\sqrt2)}$, the corresponding positive mass norm, to obtain mass-normalized modes. Ordinary Euclidean orthogonality of these two raw angle vectors is not the relevant test. This derivation supplies local linear modes, not global nonlinear normal forms or a large-angle double-pendulum solution.

For a one-dimensional oscillator, the phase ellipse has area $2\pi E/\omega$, hence $I=(2\pi)^{-1}\oint p\,dq=E/\omega$. For a small-angle pendulum with slowly changing length, $E\sim mg\ell\theta_{\max}^2/2$ and $\omega\sim\sqrt{g/\ell}$, so adiabatic $I$ implies $\theta_{\max}\propto\ell^{-3/4}$. In angular-speed amplitude variables, $E\sim m\ell^2\dot\theta_{\max}^2/2$ gives $I\propto\ell^{5/2}\dot\theta_{\max}^2$. Those are equivalent only after using $\dot\theta_{\max}\sim\omega\theta_{\max}$. Adiabatic invariance requires a slow change away from separatrix breakdown; it is not exact conservation for an arbitrary prescribed length change.

With $z=(q,p)$ and $J=\left(\begin{smallmatrix}0&I\\-I&0\end{smallmatrix}\right)$, a linear transform $z=S Z$ is canonical precisely when $S^TJS=J$. For our later equal-mass modes, $S=\operatorname{diag}(U,U)$ with orthogonal $U$ has this property directly. Orthogonality is sufficient for this simultaneous transformation, not a rule that every symplectic matrix must be orthogonal. Symmetry is a separate question: a canonical coordinate change need not leave the physical Hamiltonian unchanged.

## 3. ADV-S03: field actions, weak problems and constitutive limits

Read [Field Theory Action](../books/action-symmetry-mechanics/field-theory-action.md), Exercises 1, 2 and 4, then [Noether's Theorem in Field Theory](../books/action-symmetry-mechanics/noether-s-theorem-in-field-theory.md), Exercises 1, 3 and 4. Full keys follow each question. Use their mostly-minus signature and $c=1$ units explicitly. For a complex field, vary it and its conjugate as independent real-equivalent variables. A gauge-source variation is a boundary term only with current conservation and appropriate boundary conditions. A static scalar field obeys $\phi''=V'(\phi)$, corresponding to a particle in potential $-V$.

The general Noether theorem is sketched in that source. For a selected internal rotation it can be checked completely. Let two real fields satisfy $\Box\phi_i+V_s\phi_i=0$, where $s=(\phi_1^2+\phi_2^2)/2$ and $V=V(s)$. Then $j^\mu=\phi_2\partial^\mu\phi_1-\phi_1\partial^\mu\phi_2$ has divergence

$$\partial_\mu j^\mu=\phi_2\Box\phi_1-\phi_1\Box\phi_2=-V_s\phi_2\phi_1+V_s\phi_1\phi_2=0.$$

The derivative cross terms cancel. This proves that current for smooth solutions; an anisotropic mass/coupling matrix generally breaks that rotation symmetry. Boundary flux must vanish before its integrated charge is called conserved. The canonical massless scalar stress tensor is not automatically traceless; the source's Exercise 3 separates it from an improved conformal tensor.

Continue in this order:

| Selection | Native exercises with complete feedback | Retain |
| --- | --- | --- |
| ADV-S03a | [Variational and Direct Methods](#/books/differential-equations-verified-dynamics), Exercises 4–9, 13–15 and 20 | Natural conditions, explicit convex minimum, negative/semidefinite second-variation boundaries, weak Poisson variation and constraint qualification. |
| ADV-S03b | [Elliptic and Parabolic Weak Theory](#/books/differential-equations-verified-dynamics), Exercises 1–8, 11–15 and 17–19 | Weak derivative, trial/test spaces, kernels, coercivity, Galerkin orthogonality and what a residual fails to prove. Imported compactness/Lax–Milgram results keep their hypotheses. |
| ADV-S03c | [Linear Elasticity](../books/fields-fluids-continuum/linear-elasticity.md), Exercises 1–3 | Constitutive inversion, longitudinal/shear speeds and the incompressible multiplier; stress and strain units are distinct. |
| ADV-S03d | [Acoustics and Elastic Waves](../books/fields-fluids-continuum/acoustics-and-elastic-waves.md), Exercises 1–3 | Fixed/open/rigid boundary eigenmodes, rod frequencies and impedance reflection. Pressure amplitude transmission is not energy transmission. |

For the scalar wave system in the portfolio, integration by parts gives a complete classical energy proof and explicit finite-mode solutions. For general weak data, density/trace/compactness arguments require the named function-space theory. A finite matrix residual alone supplies none of those results. A standing mode also depends on whether displacement or its normal derivative is fixed; a constant Neumann mode cannot be deleted merely because a Dirichlet sine list had no zero eigenvalue.

## 4. ADV-S04: states, observables and unitary dynamics

The following substantial quantum sequence uses [Two-State Quantum Mechanics](#/books/two-state-quantum-mechanics), whose later chapters include spatial and infinite-dimensional systems. Each numbered selection below means its actual written exercises, with the complete immediate public solutions. Open implementation projects are extensions.

| Order | Exact reading and exercises | Comparison focus |
| --- | --- | --- |
| ADV-S04a | [Complex State Spaces](../books/two-state-quantum-mechanics/complex-state-spaces.md), Exercises 1–7 and 9–18 | Normalization, rays/global phase, basis and transition amplitudes. A vector representation is not a hidden trajectory. |
| ADV-S04b | [Observables, Spectra and Measurement](../books/two-state-quantum-mechanics/observables-spectra-measurement.md), Exercises 1–16 and 18–20 | Hermitian spectral probabilities, projections and degeneracy; the complete question's specified measurement matters. |
| ADV-S04c | [Unitary Dynamics](../books/two-state-quantum-mechanics/unitary-dynamics-two-level.md), Exercises 1–3, 7–9, 11–16 and 18–20 | Norm, scalar energy shift, Pauli exponential, detuned transitions, Ehrenfest signs, pulse order and Euler norm defect. |
| ADV-S04d | [Pictures, Generators and Propagators](../books/two-state-quantum-mechanics/pictures-generators-propagators.md), Exercises 2–9, 12 and 14–20 | Composition, picture-invariant expectations, Heisenberg derivative and time-dependent frame term. |
| ADV-S04e | [Commutators and Uncertainty](../books/two-state-quantum-mechanics/commutators-uncertainty-compatibility.md), Exercises 2, 6, 8–12 and 17–18 | Cauchy–Schwarz uncertainty, trace obstruction and preparation versus measurement disturbance. |
| ADV-S04f | [Symmetries, Angular Momentum and Spin](../books/two-state-quantum-mechanics/symmetries-angular-momentum-spin.md), Exercises 1–9 and 12–20 | Generators, angular-momentum ladders, spin-half, singlet, antiunitary time reversal and the limits of degeneracy arguments. |

The Pauli formula $H=a_0I+\mathbf a\cdot\sigma$ uses $\mathbf n=\mathbf a/|\mathbf a|$ only when $|\mathbf a|>0$. For $\mathbf a=0$, the propagator is simply $e^{-ia_0t/\hbar}I$. For $H=\hbar\Omega Z/2$, $X_H=\cos(\Omega t)X-\sin(\Omega t)Y$ under $X_H=U^\dagger XU$; the sign follows by differentiating at zero. A time-dependent change of state coordinates $\psi'=W\psi$ gives

$$H'=WHW^\dagger+i\hbar\dot W W^\dagger,$$

obtained by differentiating $W\psi$. Omitting the second term changes the dynamical problem. Two noncommuting pulses generally cannot be reordered. These are explicit repair checks, not just vocabulary to memorize.

## 5. ADV-S05: composite and spatial quantum systems

Continue the same native book in this order:

| Order | Written work with full keys | Dependency and feedback |
| --- | --- | --- |
| ADV-S05a | [Mixed States and Ensembles](../books/two-state-quantum-mechanics/mixed-states-ensembles.md), Exercises 1–3, 6–8, 11–16 and 18–20 | Positive trace-one matrices, purity, partial trace, entropy and preparation mechanism; a density matrix is not a unique ensemble decomposition. |
| ADV-S05b | [Tensor Products and Entanglement](../books/two-state-quantum-mechanics/tensor-products-entanglement.md), Exercises 4–10 and 13–19 | Schmidt/Bell reduction, correlations versus entanglement, local measurements and no signalling. |
| ADV-S05c | [Wave Functions, Operators and Domains](../books/two-state-quantum-mechanics/wave-functions-operators-domains.md), Exercises 1–3, 5–10 and 12–18 | $L^2$ normalization, differential-operator domains, boundary forms, current and distinct self-adjoint realizations. |
| ADV-S05d | [One-Dimensional Bound States](../books/two-state-quantum-mechanics/one-dimensional-bound-states.md), Exercises 1–8, 10–14 and 16–18 | Well/step/delta boundary matching, bound-state spectra and the actual approximation/continuum boundary. |
| ADV-S05e | [Harmonic Oscillator Ladders](../books/two-state-quantum-mechanics/harmonic-oscillator-ladders.md), Exercises 1–11 and 14–20 | Natural length, common-core algebra, moments, coherent states and harmonic-regime limits. |

Use [Harmonic Oscillator as an Operator Audit](#/books/quantum-statistical-structures), Exercises 1–3 as the transition to thermal structure. Its complete keys derive ground moments, $F=U-TS$ and the product partition function. On the invariant Schwartz core, $[Q,P]=i\hbar I$ and the ladder identities are valid; a product of unbounded operators still requires its product domain. Hermiticity of a differential expression is not a declaration of its self-adjoint domain.

For this course's oscillator realization, import the standard theorem: the positive-frequency oscillator on $L^2(\mathbb R)$ has a self-adjoint realization with complete Hermite basis and energies $\hbar\omega(n+1/2)$. Equivalently, its number representation is the diagonal operator on $\ell^2(\mathbb N)$ with domain $\sum(n+1/2)^2|c_n|^2<\infty$. For two independent modes, use $\ell^2(\mathbb N^2)$ with domain $\sum E_{n_1n_2}^2|c_{n_1n_2}|^2<\infty$. The diagonal real operator is self-adjoint: an adjoint vector must have square-summable coordinatewise product $E_nc_n$, which is exactly the stated domain. The equivalence to the differential realization, and completeness there, are the imported spectral theorem. This states precisely which part is constructed here.

A real orthogonal coordinate transformation acts unitarily on $L^2(\mathbb R^2)$ by composition, since its Jacobian has absolute determinant one. It preserves Schwartz space, transforms both $Q$ and $P$, and conjugates the oscillator realizations with their domains. Thus the finite normal-coordinate calculation can be used for the quantum spectrum; it is not an assertion that a finite-dimensional matrix representation satisfies the canonical commutator. Taking trace in finite dimensions would give $\operatorname{Tr}[Q,P]=0\ne i\hbar d$.

## 6. ADV-S06: equilibrium, infinite traces and honest cutoffs

Complete [Canonical Ensembles](../books/quantum-statistical-structures/canonical-ensembles.md), Exercises 1–3, then [Ensembles and Thermodynamic Limits](../books/quantum-statistical-structures/ensembles-and-thermodynamic-limits.md), Exercises 1–3. Their full keys preserve finite probabilities, the oscillator high-temperature limit, three-level entropy, nonempty finite microcanonical shells, Gibbs counting/Stirling correction and analyticity boundaries.

For energies $E_n$ independent of $\beta$, canonical equilibrium is $\rho=e^{-\beta H}/Z$, $\beta=(k_BT)^{-1}>0$, when the exponential is trace class. Then

$$U=-\partial_\beta\log Z,\quad \operatorname{Var}(H)=\partial_\beta^2\log Z,\quad
S/k_B=\log Z+\beta U,\quad C_V/k_B=\beta^2\operatorname{Var}(H).$$

The last equation uses $\beta$ in inverse energy units. For a mode of frequency $f\omega_0$, put $b=\beta\hbar\omega_0$, $r=e^{-bf}$. Its probability of $n$ is $(1-r)r^n$. The R3 sums give $\bar n=r/(1-r)$ and $\operatorname{Var}(n)=r/(1-r)^2$. On every compact interval $b\ge b_0>0$, energy-weighted differentiated sums are dominated by polynomial times $e^{-b_0fn}$; a larger geometric ratio bounds them. This justifies the trace differentiations used here. It does not justify an arbitrary interchange in an unrelated infinite model.

For two retained modes with frequencies $f_1\omega_0,f_2\omega_0$,

$$Z=\prod_{j=1}^2\frac{e^{-bf_j/2}}{1-e^{-bf_j}},\quad
\frac U{\hbar\omega_0}=\sum_jf_j\left(\frac12+\frac{r_j}{1-r_j}\right),\quad
\frac{\operatorname{Var}(H)}{(\hbar\omega_0)^2}=\sum_j\frac{f_j^2r_j}{(1-r_j)^2}.$$

These are two oscillators, each with infinitely many levels; they are not two levels. A finite modal subsystem is also distinct from the entire continuum field with infinitely many spatial modes. No infinite vacuum-energy sum or whole-field Gibbs construction follows from this finite product.

At high temperature $x=bf\to0$, $1/(e^x-1)=1/x-1/2+O(x)$, so the zero-point and first thermal corrections cancel, giving $U\sim2k_BT$ and $C_V\to2k_B$. At low temperature $U\to\hbar(\omega_1+\omega_2)/2$ and entropy tends to zero for the unique product ground state. Independently, the classical measure $dq_1dp_1dq_2dp_2/(2\pi\hbar)^2$ and Gaussian integrals give $Z_{\rm cl}=1/(b^2f_1f_2)$ and $U_{\rm cl}=2/\beta$. The phase-space measure is part of that comparison. For $N$ independent copies, $Z_N=Z^N$; the free energy per copy stays analytic for $b>0$, even as $N\to\infty$. A thermodynamic limit alone does not force a phase transition.

For the rectangle $0\le n_1,n_2\le N$, omitted probability is exactly

$$\delta=1-(1-r_1^{N+1})(1-r_2^{N+1})\le r_1^{N+1}+r_2^{N+1}.$$

A normalized cutoff distribution can have wrong moments despite trace one. Let $\epsilon=H/(\hbar\omega_0)\ge0$, $u=\mathbb E\epsilon$, $v=\operatorname{Var}\epsilon$ and $u_N$ its conditional retained mean. Cauchy–Schwarz gives $\mathbb E[\epsilon1_{\rm omitted}]\le\sqrt{(v+u^2)\delta}$. Since $u_N\le u/(1-\delta)$,

$$|u-u_N|\le\sqrt{(v+u^2)\delta}+\frac{\delta u}{1-\delta}.$$

This is a conservative mean certificate, not a variance certificate. For an independent cutoff check, geometric conditioning gives

$$\bar n_N=\frac r{1-r}-\frac{(N+1)r^{N+1}}{1-r^{N+1}},\qquad
\operatorname{Var}_N(n)=\frac r{(1-r)^2}-\frac{(N+1)^2r^{N+1}}{(1-r^{N+1})^2}.$$

They follow by differentiating the finite geometric normalizer. A small omitted probability alone is not an error bar on every unbounded observable.

## 7. ADV-S07: Lorentz geometry, waves and physical preparation

Attempt all five exercises in [Spacetime Invariants](../articles/spacetime-invariants.md), then its worked solutions. This supplies the inertial-frame assumptions, $ct$ units, causal classification, time dilation, simultaneity, velocity addition and mass-shell relation. Use signature $(+,-)$ here. The advanced [field-action source](../books/action-symmetry-mechanics/field-theory-action.md) uses mostly-minus signature too; the standard physics spine uses the opposite, so flip the entire quadratic form when comparing.

Extend the boost calculation rather than merely reclassifying event pairs. For $\beta=v/c=\tanh\eta$, define

$$\binom{ct'}{x'}=\begin{pmatrix}\cosh\eta&-\sinh\eta\\-\sinh\eta&\cosh\eta\end{pmatrix}\binom{ct}{x}.$$

Hyperbolic addition identities prove $B(\eta_2)B(\eta_1)=B(\eta_1+\eta_2)$, hence $\beta_{12}=(\beta_1+\beta_2)/(1+\beta_1\beta_2)$. For $\beta_1=3/5,\beta_2=5/13$, the composition is $4/5$. It is not the sum of the two speeds. The identity $\cosh^2\eta-\sinh^2\eta=1$ proves interval preservation directly.

A wave phase $kx-\omega t$ is a scalar. Substituting the inverse coordinate boost and collecting its coefficients gives

$$\omega'=\gamma(\omega-vk),\qquad ck'=\gamma(ck-\beta\omega),$$

so $\omega'^2-c^2k'^2=\omega^2-c^2k^2$. With $E=\hbar\omega,p=\hbar k$, the same calculation gives the energy-momentum invariant. A positive mass gap $\Omega_g$ gives $E^2-c^2p^2=\hbar^2\Omega_g^2$ and effective rest mass $\hbar\Omega_g/c^2$ in a relativistic scalar interpretation. A generic mechanical medium's wave speed is not automatically the vacuum light speed; that physical identification must be stated.

**Local relativity task and complete key.** Boost waves with $(\omega/\omega_0,ck/\omega_0)=(1,1),(2,1),(3,1)$ at $\beta=3/5$. Find transformed pairs, gaps, and what happens to a stationary cavity wall. The pairs are $(1/2,1/2),(7/4,-1/4),(3,-1)$; squared gaps are 0,3,8. A rest wall $x=x_b$ becomes a moving worldline under the same boost. Therefore a bulk wave transformation does not solve the original unchanged stationary-cavity boundary problem.

For two straight legs of lab duration $T$ each, speeds $\pm3c/5$, an idealized traveling clock accumulates $2T\sqrt{1-9/25}=8T/5$, while the stationary clock accumulates $2T$. This is the segmentwise proper-time integral; an instantaneous turn idealizes a finite acceleration interval, whose contribution needs its actual worldline. It is not obtained by applying one global inertial frame through the turnaround.

Canonical equilibrium in the portfolio is prepared relative to its laboratory Hamiltonian and reservoir. Covariance of a bulk field equation does not say a fixed cavity, reservoir, temperature parameter or Gibbs density is unchanged by a boost. General relativistic geometry and covariant nonequilibrium thermodynamics need additional sources; no temperature-transformation law is invented here.

## 8. ADV-P: two coupled fields, canonical modes and thermal structure

### Primary question

Let $\phi=(\phi_1,\phi_2)^T$ be two real smooth fields on $0\le x\le\pi L$, $t\ge0$, with fixed Dirichlet ends, positive $\rho,L,\omega_0,\hbar$ and $c=\omega_0L$. Give fields length units, $\rho$ mass per length, and define

$$\mathcal L=\frac\rho2\left(\phi_t^T\phi_t-c^2\phi_x^T\phi_x-\omega_0^2\phi^TA\phi\right),\qquad
A=\frac32\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.$$

This is an ideal linear scalar-field model with no damping or external drive. A relativistic bulk reading identifies $c$ with light speed and treats both fields as scalars; a mechanical interpretation instead retains the medium rest frame. No observations are supplied. Restrict the retained subsystem to $\phi(x,t)=q(t)\sin(x/L)$, $q\in\mathbb R^2$. In the thermal problem this means retaining exactly this spatial mode in each field, not quantizing every continuum mode.

P1. Derive the field Euler–Lagrange equation, weak identity and local/integrated energy flux. Prove this finite subspace is invariant and derive its modal mass $M$, stiffness $K$, Lagrangian and Hamiltonian. Show the difference-energy argument gives uniqueness for smooth compatible data. Do not call stationary action a minimum.

P2. Diagonalize $K/(M\omega_0^2)$, transforming both coordinates and momenta. Verify canonicality, frequencies and the general classical motion. State which transformation is a representation change and which physical symmetry the coupling breaks.

P3. Construct the two-mode quantum spectrum using the declared oscillator theorem and domains. Derive the ground wave function in mode and field-coordinate descriptions; decide factorization across the two physical field coordinates. At $b=\beta\hbar\omega_0=\ln2$, derive $Z,U$, variance, entropy, heat capacity and all thermal coordinate/momentum covariances in the table below. Justify every infinite sum or derivative.

P4. Audit the first antisymmetric travelling bulk mode at $ck/\omega_0=1$ under the specified Lorentz boost, preserving the mass gap and transforming the walls. Compare the canonical preparation with that bulk statement.

P5. Use the bounded public program in Section 11 at $N=12$. Before running, derive its retained probability and a mean-error certificate; compare the cutoff with exact geometric conditioning. Keep reported output separate from these algebraic references. Identify one failure boundary of the model and one stronger claim that the calculation does not establish.

### Complete primary model

Variation with endpoint-fixed test fields gives

$$\phi_{tt}-c^2\phi_{xx}+\omega_0^2A\phi=0.$$

For a spatial test $v$ with zero endpoint values, the weak identity is $\int\rho v^T\phi_{tt}+\rho c^2v_x^T\phi_x+\rho\omega_0^2v^TA\phi\,dx=0$. The classical solution and test regularity justify integration by parts; weak-space existence is not inferred from this identity alone.

Set $e=\rho(|\phi_t|^2+c^2|\phi_x|^2+\omega_0^2\phi^TA\phi)/2$ and $J=-\rho c^2\phi_t^T\phi_x$. Symmetry of $A$ gives $e_t+J_x=0$ by multiplying the PDE by $\rho\phi_t$. Thus $d\mathcal E/dt=\rho c^2[\phi_t^T\phi_x]_0^{\pi L}=0$ for the fixed ends. The nonnegative potential needs $A\succeq0$. For a difference with identical data, zero initial energy implies zero time and spatial derivatives; endpoints fix the remaining constant to zero. This is classical uniqueness; the explicit modes construct existence for the stated finite-mode data.

Because $-\partial_{xx}\sin(x/L)=L^{-2}\sin(x/L)$ and $A$ is spatially constant, the ansatz is invariant. Integrating $\sin^2$ and $\cos^2$ gives

$$M=\rho\pi L/2,\quad B=I+A=\begin{pmatrix}5/2&-3/2\\-3/2&5/2\end{pmatrix},\quad K=M\omega_0^2B,$$

$$L_{\rm mode}=\frac M2\dot q^T\dot q-\frac{M\omega_0^2}{2}q^TBq,
\quad p=M\dot q,\quad H=\frac{p^Tp}{2M}+\frac{M\omega_0^2}{2}q^TBq.$$

Every term has energy units; $p_j$ has momentum units and $q_jp_j$ action units. The modal velocity Hessian $MI$ is invertible. Spatial integration supplies the same total field energy as $H$, not an extra energy to add again.

Use $U_P=2^{-1/2}\left(\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right)$ and $q=U_PQ,p=U_PP$. Then $U_P^TU_P=I$, $U_P^TBU_P=\operatorname{diag}(1,4)$ and $p^Tdq=P^TdQ$. The frequencies are $\omega_0,2\omega_0$. For arbitrary modal initial data, $Q_j(t)=Q_j(0)\cos(\omega_jt)+P_j(0)\sin(\omega_jt)/(M\omega_j)$ with $P_j=M\dot Q_j$. Transform back for the complete classical finite-mode solution. This basis change is canonical; it is not an active rotation preserving the original anisotropic potential for every angle.

In the declared tensor-product number basis,

$$E_{n_1n_2}=\hbar\omega_0[(n_1+1/2)+2(n_2+1/2)],\qquad n_1,n_2\in\mathbb N.$$

The ground state is the product of normalized Gaussians $(M\omega_j/(\pi\hbar))^{1/4}\exp[-M\omega_jQ_j^2/(2\hbar)]$. Its product is normalized by Gaussian integration. In physical $q$ coordinates the exponent includes a nonzero $q_1q_2$ term because $\omega_1\ne\omega_2$. The strictly positive pure wave function cannot factor as $f(q_1)g(q_2)$: the mixed derivative of its logarithm would vanish for such a factorization and does not. Hence it is entangled across the two specified physical-coordinate subsystems. This conclusion uses the pure Gaussian form; nonzero covariance alone would not prove entanglement for an arbitrary mixed state.

At $b=\ln2$, $r_1=1/2,r_2=1/4$. The proved product formulas give

$$Z=\frac{2\sqrt2}{3},\quad u=\frac U{\hbar\omega_0}=\frac{19}{6},\quad
v=\frac{\operatorname{Var}H}{(\hbar\omega_0)^2}=\frac{34}{9},$$

$$S/k_B=(14/3)\ln2-\ln3,\qquad C_V/k_B=(34/9)(\ln2)^2.$$

In each thermal mode, $\langle Q_j\rangle=\langle P_j\rangle=0$,
$\langle Q_j^2\rangle=\hbar(1+r_j)/(2M\omega_j(1-r_j))$ and $\langle P_j^2\rangle=M\hbar\omega_j(1+r_j)/(2(1-r_j))$. Cross-mode covariances vanish. Conjugating these diagonal covariance matrices by $U_P$ gives the printed field-coordinate values. Symmetrized mixed $q,p$ covariances vanish. These are quantum preparation variances, not measurement-error estimates.

The coupled bulk branches satisfy $\omega^2-c^2k^2=0$ and $3\omega_0^2$. At $ck/\omega_0=1$ the antisymmetric frequency is $2\omega_0$, transformed to $(7/4,-1/4)\omega_0$ for $(\omega',ck')$. Its gap remains $3\omega_0^2$. Stationary walls transform too. The lab Gibbs state refers to the selected cavity subsystem and reservoir, not to an unchanged rest-frame state in every boost.

For cutoff $N=12$, $\delta=2^{-13}+2^{-26}-2^{-39}$ and $\delta\le8193/67108864$. Insert the exact $u,v$ into Section 6's mean certificate. Finite conditional moments can also be computed independently from the finite geometric formula. A small trace residual of the cutoff does not establish its infinite-tail accuracy. The model assumes linear coupling, the declared retained spatial modes and an equilibrium preparation; omitted modes, nonlinearities or a different bath can invalidate that interpretation. This does not construct interacting QFT, validate empirical data or justify an unregulated infinite vacuum-energy sum.

## 9. ADV-C: change the eigenvectors as well as the spectrum

### Changed question

Keep scales, Dirichlet spatial mode and the laboratory reservoir, but set

$$B_C=\frac1{25}\begin{pmatrix}153&-96\\-96&97\end{pmatrix},\qquad A_C=B_C-I.$$

Before the model derive its field and modal equations, nonnegative field potential, an orthogonal canonical eigenbasis, general classical motion, quantum spectrum and Gibbs quantities at the same $b=\ln2$. Recompute the physical-coordinate covariances and Lorentz gap. Explain why retaining the old eigenvectors fails even if a normalization or trace check passes. Give the new cutoff tail at $N=12$ and compare with the same public program.

### Complete changed model

Take

$$U_C=\frac15\begin{pmatrix}3&-4\\4&3\end{pmatrix},\qquad
U_C^TB_CU_C=\operatorname{diag}(1,9).$$

Therefore $A_C=U_C\operatorname{diag}(0,8)U_C^T$ is positive semidefinite. Its null direction is $(3,4)^T/5$, not the old equal-coordinate direction. The field equation, weak identity and energy/flux proof retain their form with the new symmetric matrix. The fixed-end modal mass remains $M=\rho\pi L/2$, and transforming both $q,p$ gives two oscillator frequencies $\omega_0,3\omega_0$. The classical solution formula from the primary applies with these new frequencies and transformed initial data. Copying old modal initial coordinates would describe a different field.

The spectrum is $\hbar\omega_0[(n_1+1/2)+3(n_2+1/2)]$. With $r_1=1/2,r_2=1/8$,

$$Z=4/7,\qquad u=24/7,\qquad v=170/49,$$

$$S/k_B=(38/7)\ln2-\ln7,\qquad C_V/k_B=(170/49)(\ln2)^2.$$

The same convergence/differentiation proof applies because both frequencies remain positive. The lab-coordinate covariance is now $U_C\operatorname{diag}(\hbar(1+r_j)/(2M\omega_j(1-r_j)))U_C^T$ and similarly for momenta. That calculation gives the changed table entries, not the primary ones. The ground state is again a product in mode coordinates and nonfactorizing in physical coordinates; the mixed Gaussian exponent is nonzero for this $U_C$ and these unequal frequencies.

The massive bulk branch has gap $8\omega_0^2$. At $ck/\omega_0=1$, $\omega/\omega_0=3$ transforms to $(3,-1)$ and retains squared gap 8. This does not keep the same stationary-wall cavity. At $N=12$, omitted probability is $\delta=2^{-13}+2^{-39}-2^{-52}$ and is at most $67108865/549755813888$. Use the changed $u,v$ in the mean certificate. A trace-one cutoff built from the wrong eigenbasis can pass trace while giving wrong covariances and dynamics; test the actual eigen-equation and the declared physical observable as well.

## 10. ADV-R: expose the unconfined zero mode

### Later public return question

On a later occasion record a new first response and its actual date/help exposure. Keep the changed matrix $A_C$, but switch to homogeneous Neumann ends and retain the spatially constant field $\phi(x,t)=q(t)$. The domain remains $[0,\pi L]$. Audit this report: “There are still two oscillator frequencies. Put the lower one equal to zero in its number-state formula, normalize a finite cutoff and take its entropy as a canonical state. A constant zero-point shift or damping will repair any divergence.”

Derive the new mass and canonical Hamiltonian, the classical motion along both directions, and decide whether a normalizable canonical quantum state exists at $\beta>0$. Prove the trace conclusion, not just a failed formal fraction. Explain which statements from the earlier field energy and Lorentz analyses survive and which finite numerical checks cannot settle this return.

### Complete return model and repair

The spatial derivative is zero, so $q$ obeys $\ddot q+\omega_0^2A_Cq=0$. Its integrated mass is now $M_N=\rho\pi L$, twice the sine-mode mass because $\int1\,dx=\pi L$ rather than $\int\sin^2=\pi L/2$. The physical coupling matrix remains $A_C$, not $B_C$: the omitted spatial gradient no longer contributes $I$. In the same $U_C$ basis,

$$H_R=\frac{P_0^2}{2M_N}+\frac{P_1^2}{2M_N}+\frac{M_N(\sqrt8\omega_0)^2Q_1^2}{2}.$$

The zero coordinate moves freely, $Q_0(t)=Q_0(0)+P_0(0)t/M_N$, with constant $P_0$. The other coordinate oscillates at $\sqrt8\omega_0$. The field is smooth and satisfies the actual Neumann boundaries. The nonnegative classical derivative/coupling energy is conserved and boundary flux is zero; it does not confine $Q_0$. Constant fields along the null direction are distinct zero-potential configurations.

For the quantum model use $L^2(\mathbb R_{Q_0})\otimes L^2(\mathbb R_{Q_1})$. The free coordinate is not an oscillator with a discrete zero-frequency number basis. Here is a trace proof. The self-adjoint free Hamiltonian $P_0^2/(2M_N)$ is translation invariant; in its standard Fourier realization $e^{-\beta H_{\rm free}}$ multiplies by the strictly positive function $e^{-\beta p^2/(2M_N)}$. This Fourier/free-particle realization is a stated standard operator result. Choose a normalized compactly supported packet and infinitely many disjointly supported spatial translates. They are orthonormal, and translation invariance makes every diagonal expectation the same $c_\beta>0$. The trace of this positive operator is at least $Nc_\beta$ for every finite $N$, hence infinite. Tensor each packet with the normalized ground state of the confined oscillator: the same lower-bound argument, multiplied by its positive Boltzmann weight, proves $\operatorname{Tr}e^{-\beta H_R}=\infty$.

The classical phase integral also diverges because the free-position integral is $\int_{\mathbb R}dQ_0=\infty$, while its momentum Gaussian is finite and positive. A constant energy shift multiplies the exponential by a positive finite scalar and cannot repair the trace. Damping changes the dynamical/open-system model and is not an added confining Gibbs potential; no equilibrium or quantum channel has been specified by that word. A finite spatial box for $Q_0$ or a positive pinning potential would define a different model requiring its own boundary conditions or limit.

A finite number-state cutoff normalization of the old oscillator is irrelevant: its supposed basis is not the free-coordinate spectrum. Even the earlier positive-frequency model has no Gibbs normalizer at $\beta\le0$, since its level weights fail to decay. The public program must reject zero frequency and nonpositive inverse temperature; passing a finite sum in those cases would not establish an infinite state.

The local field equation still has a massless branch and a branch with squared gap $8\omega_0^2$, and its bulk dispersion transformation remains valid under the declared relativistic interpretation. The finite-cavity thermal construction fails for this retained zero-mode subsystem. Neither a zero PDE residual nor a unit trace after artificial finite normalization changes that conclusion. Classical uniqueness for specified initial data remains: different free-coordinate initial positions are different data, not nonuniqueness with identical data.

## 11. ADV-S08: exact ledgers, bounded public computation and repairs

These are algebraic model references, not observations or reported program outputs. Matrix entries are dimensionless and listed by rows; $B$ is modal stiffness divided by $M\omega_0^2$. The return lists $A_C$, whose eigenvalue zero invalidates an oscillator Gibbs calculation.

| Matrix case | B11 | B12 | B22 | First eigenvalue | Second eigenvalue | U11 | U12 | U21 | U22 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ADV-P | 5/2 | -3/2 | 5/2 | 1 | 4 | 1/sqrt(2) | 1/sqrt(2) | 1/sqrt(2) | -1/sqrt(2) |
| ADV-C | 153/25 | -96/25 | 97/25 | 1 | 9 | 3/5 | -4/5 | 4/5 | 3/5 |
| ADV-R | 128/25 | -96/25 | 72/25 | 0 | 8 | 3/5 | -4/5 | 4/5 | 3/5 |

| Thermal case | f1 | f2 | b | Z | u | v | N |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ADV-P | 1 | 2 | ln(2) | 2*sqrt(2)/3 | 19/6 | 34/9 | 12 |
| ADV-C | 1 | 3 | ln(2) | 4/7 | 24/7 | 170/49 | 12 |

For the next table, coordinate covariance is in units $\hbar/(M\omega_0)$ and momentum covariance in $M\hbar\omega_0$. Entries are thermal expectations at the stated $b$; means vanish. Mixed symmetrized coordinate-momentum covariance is zero.

| Covariance case | q1 squared | q1 q2 | q2 squared | p1 squared | p1 p2 | p2 squared |
| --- | --- | --- | --- | --- | --- | --- |
| ADV-P | 23/24 | 13/24 | 23/24 | 19/12 | -1/12 | 19/12 |
| ADV-C | 237/350 | 108/175 | 363/350 | 621/350 | -36/175 | 579/350 |

| Boost case | beta | gamma | omega/omega0 | ck/omega0 | omegaPrime/omega0 | ckPrime/omega0 | Gap squared/omega0 squared |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ADV-L0 | 3/5 | 5/4 | 1 | 1 | 1/2 | 1/2 | 0 |
| ADV-LP | 3/5 | 5/4 | 2 | 1 | 7/4 | -1/4 | 3 |
| ADV-LC | 3/5 | 5/4 | 3 | 1 | 3 | -1 | 8 |

The following dependency-free JavaScript evaluates the **actual finite spectral rectangle** and compares it with the infinite two-positive-frequency formulas. Paper derivations complete their mathematical portion, and reading can proceed on paper. The required ADV-P P5 and ADV-C output comparisons remain pending until an actual bounded program run and its input/output comparison receipt are recorded. Its finite input bounds keep the public calculation bounded; they are computational limits, not physical laws. It prints the two assigned inputs. Output is a numerical observation only if actually run and recorded with its input and arithmetic; the source does not claim such a run occurred.

```javascript
function advancedModeAudit(frequencies, b, N) {
  if (!Array.isArray(frequencies) || frequencies.length !== 2 ||
      !frequencies.every(f => Number.isFinite(f) && f >= 0.25 && f <= 4) ||
      !Number.isFinite(b) || b < 0.01 || b > 4 ||
      !Number.isInteger(N) || N < 0 || N > 32) {
    throw new RangeError('Use two frequencies in [0.25,4], b in [0.01,4], integer N in [0,32].');
  }
  let Zcut = 0, first = 0, second = 0;
  for (let n = 0; n <= N; n++) for (let m = 0; m <= N; m++) {
    const energy = frequencies[0] * (n + 0.5) + frequencies[1] * (m + 0.5);
    const weight = Math.exp(-b * energy);
    Zcut += weight; first += weight * energy; second += weight * energy * energy;
  }
  const r = frequencies.map(f => Math.exp(-b * f));
  const tails = r.map(value => value ** (N + 1));
  const missing = tails[0] + tails[1] - tails[0] * tails[1];
  const Z = frequencies.reduce((product, f, j) => product * Math.exp(-b*f/2)/(1-r[j]), 1);
  const u = frequencies.reduce((sum, f, j) => sum + f*(0.5+r[j]/(1-r[j])), 0);
  const variance = frequencies.reduce((sum, f, j) => sum + f*f*r[j]/((1-r[j])**2), 0);
  const uCut = first / Zcut, varianceCut = second / Zcut - uCut*uCut;
  const meanBound = Math.sqrt((variance+u*u)*missing) + missing*u/(1-missing);
  return {frequencies, b, N, Zcut, uCut, varianceCut, Z, u, variance,
    missing, meanBound, normalizationResidual: Math.abs(Zcut/Z-(1-missing))};
}
console.log(advancedModeAudit([1,2], Math.log(2), 12));
console.log(advancedModeAudit([1,3], Math.log(2), 12));
```

The finite program uses ordinary binary64 arithmetic, not interval arithmetic. For these assigned inputs, compare algebraic reference values with absolute tolerance $10^{-10}$; report any discrepancy instead of treating a tolerance as empirical physics validation. The analytic tail/mean certificate is an exact-model statement; allow rounding separately when interpreting numerical output. It does not certify the variance error by the mean bound. The independent conditional-geometric formulas above provide a separate variance comparison.

Retain a first response, model comparison and revision for all three portfolios. A complete explanation includes the action/field and modal derivation, boundary operator, positive mass/stiffness conditions, canonical transformation of both variables, operator realization and imported spectral theorem, justified thermal trace/moments, actual cutoff error meaning and frame/preparation limits. Repair the earliest unsupported inference. For the return, a proof of trace divergence is essential; a memorized divergent denominator is not a complete operator argument.

The next steps are branch-specific: general weak PDE theory, global symplectic geometry, angular/spatial quantum continuations, thermodynamic limits, GR or interacting field theory retain their actual prerequisites. The required selections and complete coupled-field portfolio supply this advanced foundation; their public keys do not certify an individual learner, qualify every chapter of the contributing books or establish an empirical model.
