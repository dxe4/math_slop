
# Geometry, Weak Continua and Quantum Fields

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-mathematical-physics-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Analytical Mechanics, Fields and Quantum Thermal Structure](#/courses/atlas-mathematical-physics-advanced) · [Functional analysis](#/courses/course-functional-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A field model needs more than a differential equation. Its fields live in spaces, its boundaries determine an operator, its constitutive assumptions determine an energy, and its limiting procedures determine which observables exist. This course develops those connections through geometric gauge fields, a complete nonlinear weak equilibrium problem, a genuine infinite-mode free quantum field, and a controlled thermodynamic limit.

Complete [Analytical Mechanics, Fields and Quantum Thermal Structure](#/courses/atlas-mathematical-physics-advanced) first. Bring its variational, spatial quantum, ensemble and relativity work, together with real analysis, complex Hilbert spaces and multivariable calculus. The [mechanics and fields core](#/courses/atlas-mechanics-fields-core) and the [harmonic-oscillator operator audit](#/books/quantum-statistical-structures), Exercises 1–3 with their immediate complete solutions, remain preparation. This course does not replace those assignments with another finite-qubit or finite-string portfolio. Its new constructions address the specialist curriculum's geometry, quantum/field, continuum and thermodynamic-limit strands. The exact selections below keep the original working editions and their separate scope labels.

**Required work.** Complete PHYS-SP-S01–S06 in order, all named native questions with their complete keys, local tasks G/W/Q/T, and PHYS-SP-P/C/R. Reproduce the bounded public program in Section S06 and compare its output with the exact targets. Running that reference is required selected software work; a hand derivation alone does not complete the software comparison. It does not replace the mathematical proofs. Total study time depends on the selected reading, attempts and corrections.

**Records.** For each source question, local task, portfolio and reference run, keep separate dated first, comparison and revised files. Put the stable task ID, input, argument or code, public help, earlier key exposure, actual run environment/output and first failed inference in them. For example use `2026-11-04-phys-sp-p-first.txt` with the actual date. Preserve first work before opening a key; do not overwrite it with the model. Keep the original output and a changed-input comparison. The shared note is mutable and does not preserve that portfolio. A public return, study checkmark or self-review rubric confers no grade, unseen assessment, verified delay, human qualification or observed retention. No field measurement, participant, performance timing or empirical validation is supplied here.

## PHYS-SP-S01 — repair the dependencies in order

Read the [continuum prerequisite diagnostic](#/books/fields-fluids-continuum), Questions 1–8, and the [quantum/statistical diagnostic](#/books/quantum-statistical-structures), Questions 1–8. Attempt every question before its immediate complete answer. Use the particular missed dependency, rather than a total diagnostic band, to decide a repair. Then write R1–R6 before their keys. The order matters: distributional derivatives precede weak spaces; charts and forms precede connections; square-summability precedes Fock fields; uniform bounds precede taking limits.

**R1: distributions and interval weak spaces.** Define the distribution derivative of the step function $s=1_{(1/2,1)}$ on $(0,1)$. Explain why $s$ is not in $H^1(0,1)$ and why $|x-1/2|$ is. Derive an endpoint estimate for a zero-endpoint absolutely continuous function with square-integrable derivative.

**Complete repair.** A distribution $T$ is a continuous linear functional on smooth compactly supported tests, and $T'(\eta)=-T(\eta')$. Thus $s'(\eta)=\eta(1/2)$, the point mass. It is not an $L^2$ function: tests supported in intervals shrinking to $1/2$, with value one there, have $L^2$ norm tending to zero, contradicting an $L^2$ representation by Cauchy–Schwarz. The absolute-value function is continuous and absolutely continuous, with weak derivative $-1$ left of $1/2$ and $1$ right of it; its first derivative has a jump, but its value does not. In one dimension use the representative characterization

$$H_0^1(0,1)=\{u(x)=\int_0^x v(s)ds:\ v\in L^2(0,1),\ \int_0^1v=0\}.$$

It is a Hilbert space with norm $\|u'\|_2$. Indeed the derivative maps it isometrically onto the closed mean-zero subspace of $L^2$. This agrees with the zero-trace Sobolev definition; the representative description is sufficient for every proof below. Cauchy–Schwarz gives $|u(x)|\le\sqrt{x}\|u'\|_2\le\|u'\|_2$ and $|u(x)-u(y)|\le\sqrt{|x-y|}\|u'\|_2$. In particular $\|u\|_2\le\|u'\|_2$. Repair an erroneous pointwise derivative by writing the test-function identity first.

**R2: charts, forms and Stokes.** A smooth chart supplies real coordinates on a patch; a smooth overlap has an invertible coordinate derivative. A scalar is coordinate independent; a one-form $A=A_i dx^i$ acts linearly on tangent vectors and changes coefficients so that $A_i dx^i$ is unchanged. The wedge product is bilinear and antisymmetric: $dx\wedge dy=-dy\wedge dx$, $dx\wedge dx=0$. Exterior differentiation gives $dA=\sum_{i,j}\partial_jA_i\,dx^j\wedge dx^i$ and $d^2=0$ for smooth coefficients. On an oriented smooth compact surface with smooth boundary, Stokes is $\int_SdA=\int_{\partial S}A$ when $A$ is smooth on a neighborhood of the whole surface. Show why $A=c\,d\phi$ on a punctured plane has zero local curvature but can have nonzero loop integral.

**Complete repair.** Locally $dA=0$. A positively oriented circle has $\int A=2\pi c$. The disk spanning it contains the missing origin, where this expression is not a smooth one-form, so applying Stokes to that disk violates its hypothesis. For real $c$ the holonomy is $e^{2\pi i c}$; curvature zero along a path does not determine its global holonomy. Draw two overlapping charts and identify their overlap before treating $\phi$ as a single global function. General manifold integration, partitions of unity and the Poincare lemma are preparation facts; the later two-patch construction needs only these stated local operations and the displayed integrals.

**R3: tangent and internal connections.** A tangent connection differentiates vector fields and obeys $\nabla_X(fY)=X(f)Y+f\nabla_XY$. An internal connection compares vectors in an auxiliary fiber over the same spacetime; it does not change spacetime points. With $D=d-iA$ on a complex line, derive the change of $A$ required by $\psi'=e^{i\chi}\psi$.

**Complete repair.** Direct differentiation gives $(d-iA')e^{i\chi}\psi=e^{i\chi}(d-iA)\psi$ exactly when $A'=A+d\chi$. Consequently $F=dA$ is unchanged and parallel transport is $U(\gamma)=e^{i\int_\gamma A}$; its endpoint phases cancel around a closed loop for allowed single-valued transformations. The native quantum chapter uses $D=d+iqA/\hbar$ and $A'=A-d\alpha$; put $q=\hbar=1$, $\alpha=\chi$ and put the native potential equal to the negative of this section's potential to translate conventions consistently. Do not mix one source's derivative with another's phase rule. In a nonabelian convention $D=d+\mathcal A$, $F=d\mathcal A+\mathcal A\wedge\mathcal A$ and $F'=gFg^{-1}$. Gravity's tangent connection and diffeomorphism constraints retain their distinct meanings.

**R4: complex $L^2$ and Fock preparation.** On the circle of length $2\pi$, let $e_n(x)=e^{inx}/\sqrt{2\pi}$, $\widehat f_n=\int\overline{e_n}f$. State Parseval and the reality condition. For $m>0$, $\omega_n=\sqrt{n^2+m^2}$, bound $\sum|\widehat f_n|^2/\omega_n$.

**Complete repair.** The complex inner product conjugates its first slot. The Fourier basis is orthonormal and complete in $L^2$, so $\sum|\widehat f_n|^2=\|f\|_2^2$; real $f$ obeys $\widehat f_{-n}=\overline{\widehat f_n}$. Since $\omega_n\ge m$, the required sum is at most $m^{-1}\|f\|_2^2$. Fourier completeness/Parseval and the Hilbert tensor-product construction are imported foundational results here, with their standard $L^2$ hypotheses. They are not consequences of finitely checking orthogonality. Define bosonic Fock space over $\ell^2(\mathbb Z)$ as $\bigoplus_{r=0}^\infty\operatorname{Sym}\ell^2(\mathbb Z)^{\otimes r}$; its vacuum is the unit vector in the zero-particle summand. Work first on vectors with finitely many nonzero particle sectors. Creation adds a symmetrized factor and annihilation is its adjoint on that domain. Section S04 proves the needed bounds rather than assuming point fields exist.

**R5: finite and infinite limits.** Why is a sequence of analytic finite-volume free energies not automatically analytic in its limit? Give a bound that does justify the particular pressure limit used later.

**Complete repair.** Pointwise limits need not preserve continuity, let alone analyticity: $x^n$ on $[0,1]$ is the native diagnostic counterexample. If $Z_N=\lambda_+^N(1+\rho^N)$, $\lambda_+>0$ and $0\le\rho<1$, then

$$0\le N^{-1}\log Z_N-\log\lambda_+=N^{-1}\log(1+\rho^N)\le\rho^N/N.$$

On a compact parameter set where $\rho\le r<1$ the right side is uniform. Analyticity of the eventual Ising pressure follows from its explicit positive-radicand formula, not from this uniform real convergence alone. Repair a limit claim by naming its parameter set and whether the bound remains uniform there.

**R6: software readiness.** Use an existing Node.js 20.19 or newer installation and a terminal. Run `node --version` and retain its actual response. JSON is data: double-quoted keys, arrays in brackets and no executable expressions. In the printed packet, `force[j]` is the coefficient of $x^j$, rather than a sampled load, and the three entries of `smear` are coordinates in the declared regulator. A function call maps one whole case object to one output object; it does not automatically run when its definition is read. Explain why editing a coefficient, changing a physical model and correcting a code defect are distinct actions, then identify the primary case and one failure override without running them.

**Complete repair.** `physicsSpecialistInputs.primary` is the entire primary input; its coefficient at index three is one. Changing `force[3]` changes the specified polynomial and therefore the load integral. A documented change of $a$ selects another model; removing a stiffness factor changes the implementation of the same model and must fail an independent comparison. A failure override changes only the named path in a fresh copy and must be rejected. Before S06, save the JSON packet as `physics-inputs.json` and the reference function as `physics-reference.mjs` in one learner-owned directory. Append the printed run driver to that JavaScript file. Run `node --check physics-reference.mjs` to repair syntax, then `node physics-reference.mjs` to perform the actual comparisons. Retain both the command/version and real output in the worksheet portfolio. If Node or file execution is unavailable, record that concrete missing dependency; the required software work remains incomplete. No performance numbers or successful run are presumed from these instructions.

## PHYS-SP-S02 — geometry of physical fields

Complete these exact native assignments in order. Each named exercise has its full public answer at the indicated source, not a privately held key.

| ID | Reading and exact written work | Complete comparison and retained hypothesis |
| --- | --- | --- |
| G-N1 | [Gravity and Gauge Fields Through Geometry](../articles/gravity-gauge-geometry.md), Exercises 1–4 | Its **Answers**, 1–4. Retain cyclic trace, connection derivatives, constant cosmological constant and metric compatibility, and the domain of the spanning surface. |
| G-N2 | [Symmetry, Gauge, and Field-Theory Boundary](../books/quantum-statistical-structures/symmetry-gauge-and-field-theory-boundary.md), Exercises 2–3 | The complete **Solution** immediately after each exercise. Keep the displayed phase/charge convention and the extra locality, positivity and Lorentz-covariance assumptions of spin-statistics. Exercise 1 is not assigned here; an unbounded formal commutator alone would not establish strong spectral commutation. |

The native gravity discussion states the Levi–Civita uniqueness, Bianchi identity, Einstein constraint and singularity theorems with their hypotheses; this course does not prove those general results. Its new geometric work is a complete global abelian example and local curvature calculation. It demonstrates why a globally smooth potential cannot simply be demanded.

**G1 — construct a nontrivial line bundle.** Give the unit sphere its outward orientation and usual polar angles away from the poles. For real $k$, put

$$A_N=\frac{k}{2}(1-\cos\theta)d\phi,\qquad A_S=-\frac{k}{2}(1+\cos\theta)d\phi.$$

The first is smooth at the north pole in its own chart, and the second at the south: near a pole, the vanishing $1\mp\cos\theta=O(r^2)$ cancels the $r^{-2}$ in $d\phi=(-y\,dx+x\,dy)/r^2$. On the overlap $A_N-A_S=k\,d\phi$. Determine which $k$ admit the transition $\psi_N=e^{ik\phi}\psi_S$, the global curvature and its flux, and the latitude holonomy.

**Complete model.** Single-valuedness at $\phi$ and $\phi+2\pi$ requires $e^{2\pi ik}=1$, precisely $k\in\mathbb Z$. These transition functions and the two local connection forms define the line bundle and connection; they need no global scalar potential. Both patches give

$$F=\frac{k}{2}\sin\theta\,d\theta\wedge d\phi,\qquad \frac1{2\pi}\int_{S^2}F=k.$$

If $A$ were one smooth global one-form, Stokes on the closed sphere would give $\int F=0$; for nonzero integer $k$ that is impossible. This integral is the first Chern number for this specified line bundle, rather than a proof of the general Chern–Weil theorem. For an increasing-$\phi$ latitude at $\theta_0$, the north holonomy is $e^{i\pi k(1-\cos\theta_0)}$. The south exponent is $-\pi k(1+\cos\theta_0)$; their difference is $2\pi k$, so the two holonomies agree. Reverse orientation and the value is conjugated. At $k=1,\cos\theta_0=1/2$ the value is $i$, rather than $-i$. Integrality is topological in this model; it is not an experimentally measured charge claim.

**G2 — curvature is more than component derivatives.** On a coordinate patch take constant $2\times2$ real matrices $\mathcal A_x=X=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$ and $\mathcal A_y=Y=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ with $D=d+\mathcal A$. Compute $F_{xy}$ and the first nontrivial rectangular transport term.

**Complete model.** $XY=\operatorname{diag}(1,-1)$, $YX=-XY$, hence $F_{xy}=[X,Y]=2\operatorname{diag}(1,-1)$. Both ordinary derivative terms vanish. A positively oriented small rectangle transported in this convention has $U=I-F_{xy}\,\Delta x\Delta y+O(|\Delta x|^2|\Delta y|+|\Delta x||\Delta y|^2)$ when the path product follows $D$-parallel transport; the minus sign follows from $\dot\psi=-\mathcal A(\dot\gamma)\psi$. Expanding the four matrix exponentials gives the same term. These matrices illustrate a $GL(2,\mathbb R)$ connection, not a compact unitary gauge field. One must specify its representation and invariant bilinear form before assigning a Yang–Mills energy. A connection coefficient can vanish at a point while its derivative curvature remains; that is why normal coordinates do not remove tidal curvature.

## PHYS-SP-S03 — a complete weak continuum existence argument

Complete these exact continuum selections before the new problem.

| ID | Native reading and written work | Full public key and limit |
| --- | --- | --- |
| W-N1 | [Energy and Thermodynamic Restrictions](../books/fields-fluids-continuum/energy-and-thermodynamic-restrictions.md), Exercises 1–3 | Each immediate **Solution**. Distinguish specific and volumetric free energy and reversible storage from positive elastic stability. |
| W-N2 | [Objectivity and Constitutive Principles](../books/fields-fluids-continuum/objectivity-and-constitutive-principles.md), Exercises 1–3 | Each immediate **Solution**. Expand the additive observer-spin term; writing a law in terms of a gradient alone is not a sufficient rejection test. |
| W-N3 | [Coupled Field–Continuum Models](../books/fields-fluids-continuum/coupled-field-continuum-models.md), Exercises 1–3 | Each immediate **Solution**. The transported surface, velocity and divergence-free magnetic field are smooth; ideal flux freezing does not extend automatically across reconnection or rough fields. The mercury numbers are stipulated source inputs, not a new measurement. |
| W-N4 | [PDE Classification, Boundary Data, and Weak Forms](../books/fields-fluids-continuum/pde-classification-weak-forms.md), Exercises 1–3 | Each immediate **Solution**, including the full three-variable symbol for Exercise 1(d), velocity/pressure spaces for Stokes and the heat eigenvalue/decay-rate distinction. These calculations are not a complete Stokes or heat existence theorem. |

The following selected continuum problem **does** receive a complete existence, uniqueness and stability proof. It is a nonlinear stationary one-dimensional bar in a prescribed quartic displacement foundation and quadratic strain storage. Let $x\in(0,1)$ be a nondimensional material coordinate, $u$ a nondimensional scalar axial displacement, $a$ an essentially bounded measurable stiffness with $0<a_0\le a(x)\le a_1<\infty$, $\gamma\ge0$, and $f\in L^2(0,1)$ a prescribed load. A positive dimensional stiffness/length/displacement scale has been divided out; the load and foundation coefficients must be scaled consistently before identifying them with physical units. End displacements are zero. Define

$$J[u]=\int_0^1\left(\frac{a}{2}|u'|^2+\frac\gamma4u^4-fu\right)dx,\qquad u\in H_0^1(0,1).$$

This is a material-axis model, not a frame-indifferent three-dimensional finite-elasticity energy. The foundation fixes a reference displacement and exerts force $-\gamma u^3$. Positive storage and the balance law establish internal mathematical consistency, not calibration or empirical adequacy.

**W1 — compactness without an existence theorem hidden in the name.** Establish the two compactness facts used in minimization.

**Complete proof.** A derivative-bounded sequence $u_j$ has uniformly bounded continuous representatives by R1 and a common $1/2$-Holder bound. Choose subsequences successively at each rational in $[0,1]$ and take the diagonal subsequence. A finite rational mesh and the common Holder bound show that this subsequence is uniformly Cauchy: first make the oscillation within each mesh cell small, then make the finitely many mesh values close. Its uniform limit $u$ is continuous and has zero endpoint values.

The derivatives $v_j=u_j'$ are bounded in $L^2$. To obtain a weak subsequence, use a countable orthonormal basis of $L^2(0,1)$, pass diagonally so every coefficient converges, and call the limits $c_n$. For every finite $M$, $\sum_{n\le M}|c_n|^2\le C^2$; thus the series with these coefficients represents $v\in L^2$. Approximate any test $w\in L^2$ by its finite basis projection. Cauchy–Schwarz bounds the tails uniformly, and finite coefficient convergence gives $\langle v_j,w\rangle\to\langle v,w\rangle$. The existence/completeness of a countable $L^2$ basis and completeness of $L^2$ are imported Hilbert-space foundations; no weak-PDE existence or compact embedding theorem is imported. The weak limit against $1_{[0,x]}$ gives $u(x)=\int_0^xv$ for every $x$, since the same integrals converge uniformly through $u_j$. Against $1$ it gives $\int v=0$. Hence $u\in H_0^1$ and $u'=v$.

Finally $\sqrt a\,v_j\rightharpoonup\sqrt a\,v$ because multiplication by $\sqrt a$ is bounded on $L^2$. Weak lower semicontinuity follows directly from $\|z_j-z\|_2^2\ge0$: taking liminf and using $\langle z_j,z\rangle\to\|z\|^2$ yields $\|z\|^2\le\liminf\|z_j\|^2$. This proves the exact weighted lower bound needed below.

**W2 — existence, Euler equation and uniqueness.** Minimize $J$ and prove the full weak boundary-value claim.

**Complete proof.** R1 gives

$$J[u]\ge\frac{a_0}{2}\|u'\|_2^2-\|f\|_2\|u'\|_2.$$

The right side is bounded below and tends to infinity with $\|u'\|_2$. Since $J[0]=0$, a minimizing sequence can be chosen with bounded derivatives. Apply W1 to a subsequence. Uniform convergence implies $\int u_j^4\to\int u^4$ and $\int fu_j\to\int fu$; the weighted derivative term is lower semicontinuous. Therefore $J[u]\le\liminf J[u_j]=\inf J$, proving a minimizer exists. For any $v\in H_0^1$, both $u$ and $v$ are bounded, so differentiating the polynomial $J[u+tv]$ at $t=0$ is justified termwise. Minimality gives

$$\int_0^1 a u'v'+\gamma u^3v\,dx=\int_0^1 fv\,dx\qquad(\forall v\in H_0^1).$$

Thus $-(au')'+\gamma u^3=f$ in distributions, with the prescribed zero traces. Every term is meaningful for the stated data; no classical second derivative was required. If $u,w$ solve the same problem, test their difference with $v=u-w$ and use

$$(u^3-w^3)(u-w)=(u-w)^2(u^2+uw+w^2)\ge0.$$

It follows that $a_0\|u'-w'\|_2^2\le0$, hence $u=w$ by R1. Existence, uniqueness and the natural weak formulation have all been proved, not inferred from a finite residual. Conversely the same convexity inequalities show any weak solution is the unique minimizer.

For two loads $f,g$ and the same $a,\gamma$, the difference test yields

$$\|u_f'-u_g'\|_2\le a_0^{-1}\|f-g\|_2,$$

including the zero-difference case. This is continuous dependence in the declared norms. It says nothing about a coefficient approaching zero: the bound deteriorates as $a_0\downarrow0$.

**W3 — regularity and a sharp boundary.** Put $p=au'$. The equation gives $p'=\gamma u^3-f\in L^2$, so $p\in H^1$ and has a continuous representative. For merely measurable positive $a$, division $u'=p/a$ need not preserve $H^1$, so $u$ need not belong to $H^2$. If $a\in W^{1,\infty}$ with the same positive lower bound, the product rule gives $u''=p'/a-pa'/a^2\in L^2$, hence $u\in H^2$. Classical smoothness requires further data regularity.

For an explicit counterexample let $\gamma=0,f=1$, with $a=1$ left of $1/2$ and $a=2$ right. The endpoint condition determines $p=c-x$, where

$$c=\frac{\int_0^1 x/a\,dx}{\int_0^1 1/a\,dx}=\frac{5}{12}.$$

The solution is $u=5x/12-x^2/2$ on the left and $u=1/24+5x/24-x^2/4$ on the right. Both values at the interface are $1/12$; the derivatives are $-1/12$ and $-1/24$. The flux $au'=-1/12$ matches, so no point source occurs in $p'$. The derivative jump contributes a delta to $u''$, so $u\notin H^2$. Matching derivatives instead of flux would solve a different interface problem.

## PHYS-SP-S04 — construct a smeared infinite-mode field

Complete the following native bridge before the new construction.

| ID | Exact source work | Complete public comparison |
| --- | --- | --- |
| Q-N1 | [Observables and the Spectral Theorem](#/books/quantum-statistical-structures), Exercises 2–3 | Immediate **Solutions**. The vector for $\langle A^2\rangle$ is in $D(A^2)$; for a vector merely in $D(A)$ use the quadratic-form second moment $\Vert A\psi\Vert ^2$. A finite matrix has no continuous spectral part. |
| Q-N2 | [Unitary Dynamics and Generators](#/books/quantum-statistical-structures), Exercise 1 | Immediate spectral-integral **Solution**. Self-adjoint domain and strong continuity remain essential; a formal symmetric expression is insufficient. |
| Q-N3 | [Quantum Field Theory: An Honest Mathematical Orientation](../articles/qft-honest-orientation.md), all twelve sections and Exercises 1–4 | Its **Answers**, 1–4. Retain its seven claim types, infrared and ultraviolet distinction, allowed gauge transformations, EFT power counting and the difference between a regulated integral and a constructed continuum theory. Its general frameworks remain orientation. |

The next work supplies technical free-field and regulator teaching beyond that orientation. Use $\hbar=c=1$ and the spatial circle of length $2\pi$. The spacetime metric is $(-,+)$, so the real massive classical equation is $\phi_{tt}-\phi_{xx}+m^2\phi=0$. Fix $m>0$. The Fourier frequencies are $\omega_n=\sqrt{n^2+m^2}$ for $n\in\mathbb Z$; the two signed spatial modes are independent one-particle labels, as required for the real field's positive-frequency annihilation amplitudes.

**Q1 — construction, domains and covariance.** On the Fock space from R4, let $a_n,a_n^\dagger$ satisfy $[a_n,a_j^\dagger]=\delta_{nj}$ on finite-particle vectors. For $g\in\ell^2$, put $a(g)=\sum\overline{g_n}a_n$, $a^\dagger(g)=\sum g_n a_n^\dagger$. On an $r$-particle vector, symmetrization is an orthogonal projection, so

$$\|a^\dagger(g)\psi_r\|\le\sqrt{r+1}\|g\|\|\psi_r\|,\qquad
\|a(g)\psi_r\|\le\sqrt r\|g\|\|\psi_r\|.$$

The second follows by adjointness or contraction on a symmetric tensor. Truncating $g$ in $\ell^2$ therefore gives convergent operators on every finite-particle vector, with a common invariant finite-particle-sector domain. This domain allows arbitrary square-summable mode amplitudes in each sector, rather than requiring finitely supported modes.

For real $f\in L^2(S^1)$ define $(g_f)_n=\widehat f_n/\sqrt{\omega_n}$ and

$$\Phi(f)=\frac{a(g_f)+a^\dagger(g_f)}{\sqrt2}.$$

The bounds and R4 show this is a densely defined symmetric operator on that common domain, and a real-linear map in $f$. Essential self-adjointness can be established by analytic-vector theory but is **not** asserted or needed here; a full spectral observable requires that additional domain theorem. For the dynamics use the occupation basis $|\nu\rangle$, where each $\nu=(\nu_n)$ has finite support and finite total particle number, and define $E_\nu=\sum_n\omega_n\nu_n$. The diagonal spectral theorem gives the self-adjoint Hamiltonian $H=d\Gamma(\omega)$ with exact domain

$$D(H)=\left\{\sum_\nu c_\nu|\nu\rangle:\ \sum_\nu E_\nu^2|c_\nu|^2<\infty\right\},\qquad U(t)|\nu\rangle=e^{-itE_\nu}|\nu\rangle.$$

The norm-square summability of the coefficients themselves is understood because the state belongs to Fock space. This invokes the stated diagonal Hilbert spectral theorem, not a formal differential-operator domain. Vacuum energy is chosen to be zero: $H$ is the normal-ordered free Hamiltonian. No finite value is assigned to the divergent sum of oscillator zero-point energies. A finite-particle vector without the energy weight need not lie in $D(H)$, although $U(t)$ preserves the finite-particle domain and is defined on all Fock space.

Since $a(g)|0\rangle=0$, the equal-time vacuum covariance is

$$\langle0|\Phi(f)\Phi(h)|0\rangle=\frac12\sum_n\frac{\overline{\widehat f_n}\widehat h_n}{\omega_n}.$$

For real $f,h$ the signed-mode pairs make this real and symmetric, so the equal-time fields commute on the common domain. Cauchy–Schwarz bounds the absolute covariance by $(2m)^{-1}\|f\|_2\|h\|_2$. In terms of modes, the formal expression is $\Phi(x)=\sum_n(a_ne_n(x)+a_n^\dagger\overline{e_n(x)})/\sqrt{2\omega_n}$; integration against real $f$ reproduces the definition because $\int f e_n=\overline{\widehat f_n}$. This checks conjugation and normalization rather than guessing from a point-field formula.

At time $t$, replace $(g_f)_n$ by $e^{i\omega_nt}(g_f)_n$ and call the resulting field $\Phi_t(f)$. On occupation vectors, lowering the $n$th occupation changes energy by $-\omega_n$, so $U(t)^\dagger a_nU(t)=e^{-i\omega_nt}a_n$, with the conjugate phase for creation. The creator/annihilator bounds extend this equality to $U^\dagger\Phi(f)U=\Phi_t(f)$ on the common finite-particle domain. This proves the selected free dynamics rather than assuming a time dependence.

For real smooth periodic $f$, repeated integration by parts makes its Fourier coefficients decrease faster than any power. Therefore $g_{f,t}$ and its first two time derivatives are in $\ell^2$, continuously in $t$. The same operator bounds justify strong differentiation on every fixed finite-particle vector, giving the complete smeared Klein–Gordon identity

$$\frac{d^2}{dt^2}\Phi_t(f)+\Phi_t(-f^{\prime\prime}+m^2f)=0,$$

because the Fourier multiplier on the second term is $n^2+m^2=\omega_n^2$. The identity is on the declared domain for smooth periodic tests; it asserts neither point-field operators nor arbitrary-domain differentiation. We have constructed a fixed-time smeared free field, its covariance and these free dynamics. A complete proof of Lorentzian reconstruction, microcausality on general spacetime or an interacting model remains additional work.

**Q2 — why the point field fails.** A delta test at $x$ would have Fourier coefficient $\overline{e_n(x)}$, whose modulus squared is $1/(2\pi)$. The cutoff point variance is

$$C_\Lambda=\frac1{4\pi}\sum_{|n|\le\Lambda}\frac1{\sqrt{n^2+m^2}}.$$

For $n\ge\max(1,m)$, $n\le\sqrt{n^2+m^2}\le\sqrt2n$. Comparison with the harmonic series proves logarithmic divergence. More precisely $1/\sqrt{n^2+m^2}-1/n=O(n^{-3})$ for fixed $m$, so $C_\Lambda=(2\pi)^{-1}\log\Lambda+O_m(1)$. Thus $\Phi_\Lambda(x)|0\rangle$ has unbounded norm and cannot converge to a point-field vector on the vacuum. Smooth smearing changes the test class and makes the sum finite. The massless case also has a zero-frequency obstruction at $n=0$; deleting it requires a different mean-zero theory, not setting $m=0$ in a denominator.

**Q3 — Wick subtraction and its exact scope.** For a centered Gaussian $X$ with variance $C>0$, completing the square gives $\mathbb E e^{tX}=e^{Ct^2/2}$. Four differentiations at zero give $\mathbb E X^4=3C^2$. Define

$$:X^2:_C=X^2-C,\qquad :X^4:_C=X^4-6CX^2+3C^2.$$

Both have mean zero. For joint centered Gaussians $X,Y$ with variances $C,D$ and covariance $q$, differentiating $\exp((Cs^2+2qst+Dt^2)/2)$ gives $\mathbb E(X^2-C)(Y^2-D)=2q^2$. This is a complete elementary Wick calculation, not a simulated Gaussian sample. The quantum-vacuum step also has a direct proof. For $C=\|g\|^2/2>0$, set $b=a(g)/\|g\|$, so $[b,b^\dagger]=1$, $b|0\rangle=0$ and $Q=\Phi(g)=\sqrt C(b+b^\dagger)$, where here $\Phi(g)$ abbreviates the field built from the one-particle vector $g$. All powers preserve the finite-particle domain. Since $[b,Q]=\sqrt C$, commuting $b$ through $Q^{j-1}$ gives $M_j=(j-1)C M_{j-2}$ for $M_j=\langle0|Q^j|0\rangle$, with $M_0=1,M_1=0$. Hence $M_2=C,M_4=3C^2$ and the displayed Wick mean is zero. If $g=0$, these conclusions hold directly. At finite field cutoff take $g_n=\overline{e_n(x)}/\sqrt{\omega_n}$ on $|n|\le\Lambda$; its $C$ is precisely $C_\Lambda$. Thus the Gaussian-to-vacuum step is a CCR calculation, not an unproved identification of measures. With a quartic interaction convention $\lambda\phi^4/4!$, Wick replacement adds quadratic coefficient $-\lambda C_\Lambda\phi^2/4$, corresponding algebraically to mass-squared shift $-\lambda C_\Lambda/2$, and constant $\lambda C_\Lambda^2/8$. The shift diverges with the cutoff; leaving the subtraction disabled changes the prescription.

This finite-regulator identity does **not** prove that $\exp(-\int\lambda:\phi^4:)$ has a continuum probability limit, is reflection positive, has a Hamiltonian, or defines a four-dimensional interacting QFT. Those are constructive/renormalization questions with dimension, coupling, stability and measure hypotheses. A finite positive Gaussian integral is an actual measure; a Lorentzian formal path integral is not made one by this subtraction.

For the required executable comparison use a separate finite Euclidean regulator: three real coordinates with probability density proportional to $\exp(-x^TAx/2)$, $A=m_2 I+L$, where $m_2>0$ and $L=\left(\begin{smallmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{smallmatrix}\right)$ is the three-cycle Laplacian. Orthogonal diagonalization and three ordinary Gaussian integrals give covariance $A^{-1}$. For $X=f^Tx$, its variance is $f^TA^{-1}f$. This is a Euclidean finite Gaussian model with inverse covariance $A$; it is deliberately distinguished from the quantum equal-time inverse-square-root covariance above. No numerical matching can erase that difference.

## PHYS-SP-S05 — prove a thermodynamic limit

Complete [Ensembles and Thermodynamic Limits](../books/quantum-statistical-structures/ensembles-and-thermodynamic-limits.md), Exercises 1–3, before their immediate complete **Solutions**. Preserve its positive finite microcanonical shell, the ideal-gas Stirling correction and dilute canonical assumptions, and analyticity only at positive real temperature for a finite-dimensional state space. An infinite bosonic Gibbs sum still requires a trace-class condition. Its broad ensemble-equivalence statement is an imported result with stability, range and limiting assumptions; the following particular chain limit is proved directly.

**T1 — transfer matrix, finite partition function and pressure.** For $N\ge3$ spins $\sigma_j\in\{-1,1\}$ on a periodic chain, $\sigma_N=\sigma_0$, use the nondimensional weight

$$\exp\left(K\sum_{j=0}^{N-1}\sigma_j\sigma_{j+1}+B\sum_{j=0}^{N-1}\sigma_j\right),\qquad K=\beta J\ge0,\ B=\beta h,$$

with finite $\beta>0$, ferromagnetic $J\ge0$ and real external field $h$. There is no claim that this is a fitted material. Splitting each field contribution between its two neighboring bonds gives

$$T=\begin{pmatrix}e^{K+B}&e^{-K}\\e^{-K}&e^{K-B}\end{pmatrix},\quad Z_N=\operatorname{Tr}(T^N).$$

Multiplying entries around a spin cycle counts each bond once and each field twice by halves, proving the equality with the full $2^N$-state sum. The two eigenvalues are

$$\lambda_\pm=e^K\cosh B\pm\sqrt{e^{2K}\sinh^2B+e^{-2K}}.$$

The square root is strictly positive for finite $K,B$, $\lambda_+>0$, and $\det T=e^{2K}-e^{-2K}\ge0$ gives $\lambda_-\ge0$. Since their difference is positive, $0\le\rho=\lambda_-/\lambda_+<1$. Thus

$$p_N=\frac1N\log Z_N=\log\lambda_++\frac1N\log(1+\rho^N),\qquad p=\lim p_N=\log\lambda_+.$$

The error is nonnegative and at most $\rho^N/N$. On every compact finite $(K,B)$ set, continuity makes $\rho\le r<1$, so convergence is uniform there. This is a complete thermodynamic limit for pressure per lattice site. Sites are the extensive size; no spatial continuum or fixed physical-density gas limit is inferred.

**T2 — differentiability and order of limits.** The positive radicand makes $p$ a real-analytic function of finite real $K,B$, so this one-dimensional short-range model has no positive-temperature nonanalytic transition. Differentiate the explicit formula, without interchanging an uncontrolled derivative and limit, to obtain

$$M=\partial_Bp=\frac{\sinh B}{\sqrt{\sinh^2B+e^{-4K}}}.$$

At every finite $K$, $M(K,0)=0$. But for fixed nonzero $B$, $\lim_{K\to\infty}M(K,B)=\operatorname{sign}(B)$. Consequently taking $B\to0^+$ after $K\to\infty$ gives $1$, whereas taking $B\to0$ first gives $0$. The compact-set error control is not uniform at $K=\infty$. This nondimensional order-of-limits statement must be translated with $K=\beta J,B=\beta h$ if temperature and physical field are varied together. Finite-volume analyticity did not establish the limit; the explicit eigenvalues and bound did.

**T3 — exact comparison points.** Put $t=e^K,s=e^B$. For $t=2,s=1$, $\lambda_+=5/2$, $\lambda_-=3/2$. At $N=6$,

$$Z_6=(5/2)^6+(3/2)^6=8177/32,\quad p_6-p=\log(1+(3/5)^6)/6.$$

For $t=2,s=2$, the matrix is $\left(\begin{smallmatrix}4&1/2\\1/2&1\end{smallmatrix}\right)$ and its eigenvalues are $(5\pm\sqrt{10})/2$. At $N=4$, the sum of their fourth powers is $2225/8$. For $t=1,s=2$, spins are independent and $Z_N=(5/2)^N$, so at $N=3$ it is $125/8$, with zero pressure correction. These are exact derivations and comparison targets, not claimed observed program output.

## PHYS-SP-S06 — cumulative investigations and required reference

The portfolio is a connected audit of four mathematical models, rather than an assertion that the bar, monopole, Gaussian regulator and Ising chain are one empirically validated physical system. For each lane retain its state space, parameter meaning, observable, proof and failure boundary. All questions and models are public. Complete P, then C, then the later public return R in a separate session of your choosing; record its actual date and previous exposure without claiming the interval was verified.

**PHYS-SP-P — primary construction.** Submit all six requests before the public model.

1. For the bar choose $a=1,\gamma=1$, $u_*(x)=x(1-x)$ and $f=2+x^3-3x^4+3x^5-x^6$. Prove the weak problem has exactly this solution for every $H_0^1$ test; compute its energy and distinguish this proof from a finite element calculation.
2. For the sphere choose $k=1,\cos\theta_0=1/2$. Give the two patch exponents, transition, flux integer and oriented latitude observable. Explain why a global potential would be inconsistent.
3. Construct $\Phi(f)$ for a real smooth test, prove the covariance bound and point-field obstruction, and state what additional theorem would turn the symmetric smeared operator into a self-adjoint observable. Then use the three-site Euclidean regulator with $m_2=1$, $f=(1,-1,0)$ and $\lambda=1/4$ to compute the variance, fourth moment, Wick expectation and local mass-squared shift. Keep the two covariance laws separate.
4. For the Ising chain $t=2,s=1,N=6$, derive the transfer matrix, partition function, limiting pressure and exact finite-size correction. Explain why a finite state sum alone is insufficient for the infinite result.
5. Derive the one-hat Galerkin equation with $h(x)=2x$ for $x\le1/2$ and $h(x)=2(1-x)$ otherwise, $u_h=qh$. Compute the printed load moment and a certified comparison interval for its solution. Reproduce the required reference and retain actual output/environment. Compare every field with the exact targets below.
6. Write a claim ledger marking which assertions are proved here, imported foundations, finite-regulator identities, numerical comparisons or open extensions. Include a constitutive/model-evidence paragraph and the source/task records.

**Complete PHYS-SP-P model.** Since $u_*''=-2$ and $u_*^3=x^3(1-x)^3$, the displayed $f$ equals $-u_*''+u_*^3$. Integration by parts has zero endpoint term for every $H_0^1$ test, by absolute continuity and the zero traces. W2 gives existence and uniqueness for these data, so the explicit candidate is the unique weak minimizer. Here $\int|u_*'|^2=1/3$ and $\int u_*^4=1/630$; multiplying the equation by $u_*$ gives $\int fu_*=1/3+1/630$. Therefore $J[u_*]=-1/6-1/840=-47/280$. This proves an infinite-dimensional statement. A computed Galerkin residual only concerns its one-dimensional trial subspace.

The north and south exponents are $\pi/2$ and $-3\pi/2$, respectively, so both yield $i$. The transition is $e^{i\phi}$, $\int F=2\pi$, and no smooth global potential exists by G1's closed-surface Stokes contradiction. Reversing the loop gives $-i$; using the opposite covariant-derivative convention requires changing the parallel-transport sign as well.

Q1's bounds construct the smeared operator; its covariance is bounded by $(2m)^{-1}\|f\|_2\|h\|_2$, while Q2 proves the point variance diverges. An essential-self-adjointness theorem with a suitable common domain would be extra mathematical input, not a finite matrix fact. For the separate Euclidean regulator, $A=4I-\mathbf1\mathbf1^T$ and $A^{-1}=(I+\mathbf1\mathbf1^T)/4$. Thus $f^TA^{-1}f=1/2$, $\mathbb E X^4=3/4$, and $\mathbb E:X^4:=0$. The site variance is $1/2$, so the local shift is $-\lambda C/2=-1/16$. It is a finite-cutoff prescription. The infinite free-field construction, Euclidean matrix integral and an interacting continuum theory have different claims.

T3 gives $Z_6=8177/32$, $p=\log(5/2)$, and correction $\log(1+(3/5)^6)/6$. The eigenvalue ratio $3/5$ controls the infinite-volume limit; direct enumeration is an independent finite check of the transfer formula, not a replacement for its limit proof.

For the hat function, $\int a h'^2=4$ and $\int h^4=1/5$. Its polynomial moments are

$$M_j=\int_0^1x^jh(x)dx=\frac{2(1-2^{-(j+1)})}{(j+1)(j+2)}.$$

Splitting the integral at $1/2$ proves that formula. The load is $b=2M_0+M_3-3M_4+3M_5-M_6=1+93/17920=18013/17920$. The Galerkin equation is $4q+q^3/5=b$. Its derivative $4+3q^2/5$ is positive, so there is one root; direct rational substitution brackets it in $(1/4,251/1000)$. It is not $u_*$: the trial function has a corner and linear segments. The comparison must check stiffness, load, root bracket and residual as well as the final displacement.

The ledger records the proved compactness/minimizer/uniqueness/stability and specified field/chain constructions; Fourier/Hilbert/spectral foundations are imported as named in S01/S04; the JS is a finite floating-point reproduction; no solver timing, field data, interacting-QFT existence, nonlinear 3D elasticity or Navier–Stokes solution is inferred. The bar foundation and stiffness, the spin coupling and the Gaussian regulator are stipulated models, not identified physical parameters.

**PHYS-SP-C — changed interface, topology and field.** Complete all six primary requests again with these changes: $a=1$ on the left half and $2$ on the right, $\gamma=0,f=1$; sphere $k=2,\cos\theta_0=1/2$; Gaussian $m_2=2,f=(1,1,1),\lambda=1/2$; Ising $t=2,s=2,N=4$. In the bar request explicitly decide $H^2$ regularity, and in the field request state why a massless zero mode cannot be admitted by a finite matrix inversion.

**Complete PHYS-SP-C model.** W3 derives the piecewise quadratic solution and continuous flux $5/12-x$. At the interface $u=1/12$, but $u'$ jumps from $-1/12$ to $-1/24$, so $u\notin H^2$. W2 still proves the unique weak minimizer because $1\le a\le2$. Direct integration gives $\int u=\int a|u^{\prime}|^2=11/192$, so $J[u]=-11/384$. The hat stiffness is $6$, load $1/2$, and $q=1/12$. This equality of nodal value does not make its piecewise linear graph equal to the true quadratic solution. The patch transition is $e^{2i\phi}$, flux integer $2$, and latitude exponents $\pi,-3\pi$ both give $-1$.

Now $A=5I-\mathbf1\mathbf1^T$, $A^{-1}=I/5+\mathbf1\mathbf1^T/10$. Therefore the constant smear has variance $3/2$, fourth moment $27/4$ and Wick expectation zero. The site variance is $3/10$, giving mass shift $-3/40$. At $m_2=0$, the constant vector is a zero eigenvector of $L$, the Gaussian density is not normalizable along that direction, and inversion would be invalid. A mean-zero restriction defines another model and must be declared before any inverse.

The transfer matrix and eigenvalues are those in T3, so $Z_4=2225/8$, $p=\log((5+\sqrt{10})/2)$ and correction $\log(1+((5-\sqrt{10})/(5+\sqrt{10}))^4)/4$. Its finite-field magnetization is $\sinh(\log2)/\sqrt{\sinh^2(\log2)+1/16}$ by T2. Retain the same smearing/domain and constitutive-evidence boundaries as P. Run the changed printed input; compare every output before changing a formula. A mismatch requires a first-error record, not editing the target to match the implementation.

**PHYS-SP-R — public return and failure repair.** Without replacing your previous files, complete six requests: (1) explain exactly which step fails if $a=0$ everywhere and $\gamma=0,f=1$; (2) exhibit nonintegral $k=1/2$ transition failure and repair it with $k=-1$; (3) show why $m_2=0$ makes the Gaussian invalid and why a disabled Wick subtraction cannot be called the same prescription; (4) distinguish finite-parameter analyticity from $K\to\infty,B\to0$ and compute the two orders; (5) run all five printed failure controls and the repaired R input; (6) give a corrected four-lane model and update the claim/evidence ledger and public-exposure record.

**Complete PHYS-SP-R model.** If $a=\gamma=0$, then $J[u]=-\int u$ is unbounded below along positive multiples of $x(1-x)$; the weak equation $0=\int v$ fails for that test. Coercivity and existence are gone, not merely a numerical rate. A negative $\gamma$ also makes $J[tu]$ tend to $-\infty$ through its quartic term for nonzero $u$; such input is outside W2. Repair with $a=2,\gamma=0,f=2$: the exact solution is $u=x(1-x)/2$, the hat stiffness is $8$, load $1$ and $q=1/8$. Here $\int a|u^{\prime}|^2=\int fu=1/6$ and $J[u]=-1/12$.

For $k=1/2$, $e^{ik(\phi+2\pi)}=-e^{ik\phi}$, so the proposed transition is not single-valued; it does not define this line bundle. For repaired $k=-1$, the flux integer is $-1$, the transition $e^{-i\phi}$ is single-valued, and the latitude holonomy is $-i$. Repair the Gaussian to $m_2=1,f=(1,0,0),\lambda=1$; variance $1/2$, fourth moment $3/4$, Wick expectation zero, site variance $1/2$ and shift $-1/4$. If the $-6CX^2$ term is disabled, the remaining fourth-plus-constant expectation is $6C^2$, rather than zero; recording that as the same Wick prescription is false. At zero mass the divergent constant direction prevents normalization before any moment is computed.

For every finite $K$, taking $B\to0$ first gives $M=0$ and hence the subsequent $K\to\infty$ limit is zero. Taking $K\to\infty$ first at fixed $B>0$ gives one, whose $B\to0^+$ limit is one. The R software fixture uses $t=1,s=2,N=3$, for which $Z_3=125/8$ and the pressure correction is zero; this finite independent-spin comparison is not a numerical test at infinity. The five failure controls must throw before calculation: zero stiffness, negative foundation coefficient, fractional bundle charge, zero Gaussian mass and an oversized spin count. Restore their admissible values before retaining a corrected output. Distinguish rejecting malformed input from proving a theorem about all inadmissible data.

The corrected ledger retains the four separate models and all imported/open boundaries from P, now with explicit invalid-input explanations. Dated first/comparison/revised records and actual output are learner-owned evidence of submitted work and comparison only; they do not certify isolation, elapsed delay or empirical adequacy.

**Public rubric and repairs.** Apply the same 100-point self-review to P, C and R separately. Award 20 for the complete bar space/data/existence or explicit failure argument, 15 for flux/regularity/Galerkin distinctions, 15 for both geometric patches, transition integrality and oriented holonomy, 20 for infinite-mode smearing/domain/covariance and correctly separated finite Gaussian/Wick work, 15 for transfer derivation/finite value/limit and parameter boundary, 10 for every actual reference output and rejected failure control, and 5 for records plus claim/evidence classification. These are public self-review points, not graded Practice. A missing proof cannot be repaired by matching a table. Return to W1 for an unjustified compactness step, W2 for a hidden existence import, W3 for an incorrect interface or $H^2$ claim, G1/R3 for a sign or global-potential error, Q1/R4 for a point-field/domain claim, Q3 for a Wick/mass-sign error, and T1/R5 for an uncontrolled limit. Write the first incorrect inference, a complete corrected argument and one fresh admissible or failure comparison. Retain both versions. No passing threshold or qualification is asserted.

**Required bounded public reference.** Copy the following input and JavaScript exactly into a local JavaScript environment, call `runPhysicsSpecialist` on each of `primary`, `changed` and `return`, and record the real output and environment. Then apply each failure override to a fresh copy of `primary` and record the thrown message. The reference uses at most twelve spins for direct comparison, three Gaussian coordinates, a one-dimensional Galerkin trial space and sixty bisection iterations. It supplies no continuum-existence proof and no sampled data. The exact targets are the symbolic models above; root brackets/residual comparisons permit floating-point tolerance $2\times10^{-11}$, and gauge imaginary parts permit $2\times10^{-12}$. The public independent oracle checks the printed inputs against direct spin enumeration, independent polynomial integration and a dense Gaussian solve, including deliberately altered reference formulas.

```json
{
  "physicsSpecialistInputs": {
    "primary": {
      "bar": {"a": [1, 1], "gamma": 1, "force": [2, 0, 0, 1, -3, 3, -1]},
      "gauge": {"charge": 1, "cosTheta": 0.5},
      "gaussian": {"mass2": 1, "smear": [1, -1, 0], "coupling": 0.25},
      "ising": {"expK": 2, "expB": 1, "N": 6}
    },
    "changed": {
      "bar": {"a": [1, 2], "gamma": 0, "force": [1]},
      "gauge": {"charge": 2, "cosTheta": 0.5},
      "gaussian": {"mass2": 2, "smear": [1, 1, 1], "coupling": 0.5},
      "ising": {"expK": 2, "expB": 2, "N": 4}
    },
    "return": {
      "bar": {"a": [2, 2], "gamma": 0, "force": [2]},
      "gauge": {"charge": -1, "cosTheta": 0.5},
      "gaussian": {"mass2": 1, "smear": [1, 0, 0], "coupling": 1},
      "ising": {"expK": 1, "expB": 2, "N": 3}
    }
  },
  "physicsSpecialistFailureControls": [
    {"path": ["bar", "a"], "value": [0, 1], "message": "bar stiffness"},
    {"path": ["bar", "gamma"], "value": -1, "message": "bar foundation"},
    {"path": ["gauge", "charge"], "value": 0.5, "message": "bundle charge"},
    {"path": ["gaussian", "mass2"], "value": 0, "message": "Gaussian mass"},
    {"path": ["ising", "N"], "value": 13, "message": "spin count"}
  ]
}
```

```javascript
// PHYSICS-SPECIALIST-REFERENCE-BEGIN
function runPhysicsSpecialist(input) {
  const finite = (x) => typeof x === 'number' && Number.isFinite(x);
  const bounded = (x, lo, hi) => finite(x) && x >= lo && x <= hi;
  const fail = (message) => { throw new RangeError(message); };
  if (!input || typeof input !== 'object') fail('input object');
  const {bar, gauge, gaussian, ising} = input;
  if (!bar || !Array.isArray(bar.a) || bar.a.length !== 2 ||
      !bar.a.every((x) => bounded(x, 0.01, 10))) fail('bar stiffness');
  if (!bounded(bar.gamma, 0, 10)) fail('bar foundation');
  if (!Array.isArray(bar.force) || bar.force.length < 1 || bar.force.length > 9 ||
      !bar.force.every((x) => bounded(x, -20, 20))) fail('bar load');
  if (!gauge || !Number.isInteger(gauge.charge) ||
      !bounded(gauge.charge, -8, 8)) fail('bundle charge');
  if (!bounded(gauge.cosTheta, -1, 1)) fail('latitude');
  if (!gaussian || !bounded(gaussian.mass2, 0.01, 10)) fail('Gaussian mass');
  if (!Array.isArray(gaussian.smear) || gaussian.smear.length !== 3 ||
      !gaussian.smear.every((x) => bounded(x, -10, 10)) ||
      !bounded(gaussian.coupling, 0, 2)) fail('Gaussian observable');
  if (!ising || !Number.isInteger(ising.N) || !bounded(ising.N, 3, 12)) fail('spin count');
  if (!bounded(ising.expK, 1, 3) || !bounded(ising.expB, 1 / 3, 3)) fail('spin parameters');
  const {a, gamma, force} = bar;
  const oneHatMoment = (j) => 2 * (1 - 2 ** (-(j + 1))) / ((j + 1) * (j + 2));
  const stiffness = 2 * (a[0] + a[1]);
  const load = force.reduce((sum, c, j) => sum + c * oneHatMoment(j), 0);
  const residual = (q) => stiffness * q + gamma * q ** 3 / 5 - load;
  let lo = -Math.abs(load) / stiffness - 1;
  let hi = Math.abs(load) / stiffness + 1;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (residual(mid) < 0) lo = mid; else hi = mid;
  }
  const q = (lo + hi) / 2;
  const {charge, cosTheta} = gauge;
  const phase = Math.PI * charge * (1 - cosTheta);
  const southPhase = -Math.PI * charge * (1 + cosTheta);
  const vertexPhase = [0, 0.2, -0.3, 0.7];
  let transformedPhase = 0;
  for (let j = 0; j < 4; j++) {
    transformedPhase += phase / 4 + vertexPhase[(j + 1) % 4] - vertexPhase[j];
  }
  const unit = (angle) => [Math.cos(angle), Math.sin(angle)];
  const {mass2: m2, smear: f, coupling} = gaussian;
  const sum = f.reduce((s, x) => s + x, 0);
  const squareSum = f.reduce((s, x) => s + x * x, 0);
  const variance = squareSum / (m2 + 3) + sum * sum / (m2 * (m2 + 3));
  const siteVariance = 1 / (m2 + 3) + 1 / (m2 * (m2 + 3));
  const fourth = 3 * variance * variance;
  const wickExpectation = fourth - 6 * variance * variance + 3 * variance * variance;
  const massShift = -coupling * siteVariance / 2;
  const {expK: t, expB: s, N} = ising;
  const aa = t * s, dd = t / s, bb = 1 / t;
  const gap = Math.sqrt((aa - dd) ** 2 + 4 * bb * bb);
  const lambdaPlus = (aa + dd + gap) / 2;
  const lambdaMinus = (aa + dd - gap) / 2;
  const Z = lambdaPlus ** N + lambdaMinus ** N;
  return {
    bar: {stiffness, load, q, residual: residual(q)},
    gauge: {north: unit(phase), south: unit(southPhase), transformed: unit(transformedPhase)},
    gaussian: {variance, fourth, wickExpectation, siteVariance, massShift},
    ising: {Z, pressure: Math.log(Z) / N, limitPressure: Math.log(lambdaPlus),
      correction: Math.log1p((lambdaMinus / lambdaPlus) ** N) / N}
  };
}
// PHYSICS-SPECIALIST-REFERENCE-END
```

Append this run driver after the reference function in `physics-reference.mjs`; keep `physics-inputs.json` alongside it. It prints each actual result and requires all five exact failure messages. The independent repository oracle is `verification/regressions/mathematical-physics-specialist-work.test.mjs`, run from the Atlas module directory with `node --test verification/regressions/mathematical-physics-specialist-work.test.mjs`. It additionally checks the printed targets, source editions and deliberately broken formulas. A passing check concerns the declared finite fixtures and source contract.

```javascript
import {readFileSync} from 'node:fs';
const packet = JSON.parse(readFileSync(new URL('./physics-inputs.json', import.meta.url), 'utf8'));
for (const [name, input] of Object.entries(packet.physicsSpecialistInputs)) {
  console.log(name, JSON.stringify(runPhysicsSpecialist(input), null, 2));
}
for (const control of packet.physicsSpecialistFailureControls) {
  const input = structuredClone(packet.physicsSpecialistInputs.primary);
  let target = input;
  for (const part of control.path.slice(0, -1)) target = target[part];
  target[control.path.at(-1)] = structuredClone(control.value);
  let rejected = false;
  try { runPhysicsSpecialist(input); }
  catch (error) {
    if (error.name !== 'RangeError' || error.message !== control.message) throw error;
    rejected = true;
    console.log('rejected:', error.message);
  }
  if (!rejected) throw new Error('Unexpected acceptance: ' + control.message);
}
```

The bisection's ideal real-arithmetic bracket follows from strict monotonicity and the initial endpoint signs; floating-point residual and bracket comparisons are separate finite checks. For every printed fixture the public models give nonnegative load and the unique positive root. Invalid inputs are rejected before the bounded loops. The code computes neither an unbounded spin limit nor the nonlinear weak minimizer; those claims use the proofs above.

## Boundaries and further specialist work

This selected course supplies sustained work in all four advertised specialist strands: global geometric gauge data, a complete nonlinear weak continuum construction, infinite-mode quantum-field smearing with regulator/Wick methods, and an actual thermodynamic limit. It does not assert completion of every physics speciality or qualification of whole source books. The geometric construction is a specified abelian line bundle and local nonabelian calculation, not a proof of Einstein/Yang–Mills global PDE theory. The continuum theorem is a one-dimensional coercive stationary problem, not three-dimensional nonlinear elasticity, turbulence or weak Navier–Stokes. The field is free and massive on a circle; interacting construction, general spacetime microcausality, renormalized continuum measures and reflection-positive reconstruction remain separate. The Ising result is a one-dimensional finite-range equilibrium chain; other dimensions, long-range interactions, ensemble equivalence and real-material validation need their own hypotheses and evidence.

For primary teaching references beyond the native source, [David Tong's official Quantum Field Theory notes](https://www.damtp.cam.ac.uk/user/tong/qft.htm) give the free-field and Wick context, and [MIT's Statistical Physics of Fields transfer-matrix problem set](https://web.mit.edu/8.334/www/problems/PS4.pdf) gives an independent one-dimensional Ising setting. The proofs and exact assigned models needed here are printed in the course; external frameworks do not substitute for them. When comparing sources, name the edition used.
